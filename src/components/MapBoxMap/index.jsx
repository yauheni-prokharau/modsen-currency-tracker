import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { quotesData, bankData } from "@constants";
import mapMarker from "@assets/images/mapMarker.svg";

import {
  StyledInputContainer,
  StyledTitle,
  StyledInput,
  StyledList,
  StyledListItem,
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
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3449, 53.8925],
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
    });
  }

  handleSearchInputChange(e) {
    const { value } = e.target;
    this.setState({ searchInput: value });
    this.searchQuotes(value);
  }

  createMarkers(currency) {
    this.state.markers.forEach((marker) => marker.remove());

    const banks = bankData[currency];

    if (banks && banks.length > 0) {
      const newMarkers = banks.map((bank) => {
        const image = document.createElement("img");
        image.src = mapMarker;

        const newMarker = new mapboxgl.Marker({
          element: image,
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
    const { searchInput, searchResults } = this.state;

    return (
      <section>
        <StyledTitle>Search currency in the bank</StyledTitle>
        <StyledInputContainer>
          <StyledInput
            type="text"
            placeholder="Currency search..."
            value={searchInput}
            onChange={this.handleSearchInputChange}
          />
          {searchInput && (
            <StyledList>
              {searchResults.map((result) => (
                <StyledListItem
                  key={result.id}
                  onClick={() => this.createMarkers(result.code)}
                >
                  {result.text} ({result.code})
                </StyledListItem>
              ))}
            </StyledList>
          )}
        </StyledInputContainer>
        <div
          ref={this.mapContainer}
          className="map-container"
          style={{ width: "100%", height: "400px" }}
        />
      </section>
    );
  }
}

export default MapBoxMap;
