import React from "react";

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
              <a href={`/${mainLinks[0].toLowerCase()}`}>{mainLinks[0]}</a>
            </MainLinks>
            <SubLinks>
              {subLinks.slice(0, 2).map((link) => (
                <a key={link} href={`/${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </SubLinks>
            <MainLinks>
              <a href={`/${mainLinks[1].toLowerCase()}`}>{mainLinks[1]}</a>
            </MainLinks>
            <SubLinks>
              {subLinks.slice(2, 4).map((link) => (
                <a key={link} href={`/${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </SubLinks>
            <MainLinks>
              <a href={`/${mainLinks[2].toLowerCase()}`}>{mainLinks[2]}</a>
            </MainLinks>
            <SubLinks>
              {subLinks.slice(4).map((link) => (
                <a key={link} href={`/${link.toLowerCase()}`}>
                  {link}
                </a>
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
