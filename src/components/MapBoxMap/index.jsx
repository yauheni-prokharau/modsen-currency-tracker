import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { quotesData } from "@constants";
import { bankData, defaultLocation } from "@constants/chart";
import mapMarker from "@assets/images/mapMarker.svg";

import {
  StyledInputContainer,
  StyledTitle,
  StyledInput,
  StyledList,
  StyledListItem,
  MapContainer,
} from "./styled";

class MapBoxMap extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.map = null;

    this.state = {
      searchInput: "",
      searchResults: [],
      markers: [],
      showNotFound: false,
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [defaultLocation.longitude, defaultLocation.latitude],
      zoom: 10,
    });
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  searchQuotes(searchInput) {
    const results = quotesData.filter(
      (quote) =>
        quote.code.toLowerCase().includes(searchInput.toLowerCase()) ||
        quote.text.toLowerCase().includes(searchInput.toLowerCase())
    );

    this.setState({
      searchResults: results,
      showNotFound: results.length === 0 && searchInput.trim() !== "",
    });
  }

  handleSearchInputChange = (e) => {
    const { value } = e.target;
    this.setState({ searchInput: value });
    this.searchQuotes(value);
  };

  createMarkers(currency) {
    this.state.markers.forEach((marker) => marker.remove());

    const banks = bankData[currency];

    if (banks && banks.length > 0) {
      const newMarkers = banks.map((bank) => {
        const markerElement = document.createElement("div");
        markerElement.style.width = "40px";
        markerElement.style.height = "40px";
        markerElement.style.backgroundColor = "transparent";
        markerElement.style.backgroundImage = `url(${mapMarker})`;
        markerElement.setAttribute("data-cy", "marker");
        markerElement.setAttribute("data-testid", "marker");

        const newMarker = new mapboxgl.Marker({
          element: markerElement,
        })
          .setLngLat([bank.longitude, bank.latitude])
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${bank.name}</h3>`))
          .addTo(this.map);

        return newMarker;
      });

      this.setState({
        searchInput: "",
        searchResults: [],
        markers: newMarkers,
      });
    }
  }

  render() {
    const { searchInput, searchResults, showNotFound } = this.state;

    return (
      <section data-cy="mapBoxMap">
        <StyledTitle>Search currency in the bank</StyledTitle>
        <StyledInputContainer>
          <StyledInput
            data-cy="targetCurrency"
            type="text"
            placeholder="Currency search..."
            value={searchInput}
            onChange={this.handleSearchInputChange}
          />
          {(searchInput || showNotFound) && (
            <StyledList>
              {showNotFound ? (
                <StyledListItem>Not Found</StyledListItem>
              ) : (
                searchResults.map(({ id, code, text }) => (
                  <StyledListItem
                    key={id}
                    onClick={() => this.createMarkers(code)}
                    data-cy="targetCurrencyItem"
                  >
                    {text} ({code})
                  </StyledListItem>
                ))
              )}
            </StyledList>
          )}
        </StyledInputContainer>
        <MapContainer ref={this.mapContainer} />
      </section>
    );
  }
}

export default MapBoxMap;
