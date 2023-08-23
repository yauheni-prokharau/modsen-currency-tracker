import React from "react";
import { Link } from "react-router-dom";

import diagram from "@assets/images/diagram.svg";
import { footerItems } from "@constants";

import {
  FooterContainer,
  FooterWrapper,
  DiagramWrapper,
  Quote,
  LinksWrapper,
  MainLinks,
  SubLinks,
  FooterCopyright,
} from "./styled";

const Footer = () => {
  const { name, quote, mainLinks, subLinks, copyright } = footerItems;

  return (
    <FooterContainer>
      <FooterWrapper>
        <div>
          <DiagramWrapper>
            <img src={diagram} alt="diagram" />
            <p>{name}</p>
          </DiagramWrapper>
          <Quote>
            <p>{quote}</p>
          </Quote>
        </div>
        <div>
          <LinksWrapper>
            <MainLinks>
              <span>{mainLinks[0]}</span>
            </MainLinks>
            <SubLinks>
              {subLinks.slice(0, 2).map((link) => (
                <Link key={link} to={`/sublinks/${link.toLowerCase()}`}>
                  {link}
                </Link>
              ))}
            </SubLinks>
            <MainLinks>
              <span>{mainLinks[1]}</span>
            </MainLinks>
            <SubLinks>
              {subLinks.slice(2, 4).map((link) => (
                <Link key={link} to={`/sublinks/${link.toLowerCase()}`}>
                  {link}
                </Link>
              ))}
            </SubLinks>
            <MainLinks>
              <span>{mainLinks[2]}</span>
            </MainLinks>
            <SubLinks>
              {subLinks.slice(4).map((link) => (
                <Link key={link} to={`/sublinks/${link.toLowerCase()}`}>
                  {link}
                </Link>
              ))}
            </SubLinks>
          </LinksWrapper>
        </div>
      </FooterWrapper>
      <FooterCopyright>{copyright}</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
