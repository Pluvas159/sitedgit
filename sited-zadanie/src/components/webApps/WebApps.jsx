import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { TextDiv } from "../textDiv/TextDiv";
import { Title } from "../textDiv/Title";
import { Break } from "../textDiv/Break";
import ContactButton  from "../contactButton";
import SVG  from "../svgs";
import { ReactComponent as WebAppsIcon } from "../../assets/web_apps.svg";

const FlexObal = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.backgroundColor};
padding: 10% 5%;
h2 {
  text-align: ${props => props.textAlign || "right"};
}
svg {
  display: block;
  margin-inline:auto;
}
@media (min-width: 768px) {
  flex-direction: row;
}
  `

export const WebApps = (props) => {
  const [visibility, setVisible] = React.useState(false);
  const handleScroll = () => {
     const position = window.pageYOffset ;
     !visibility && (position > (props.cref?.current?.offsetTop - props.cref?.current?.getBoundingClientRect().height/2)) &&
        setVisible(true);
}


useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



return <> 
<FlexObal {...props} ref = {props.cref}>
  <SVG svg = {<WebAppsIcon />} strokeColor = {props.strokeColor} visibility = {visibility}/>
  <TextDiv {...props} >
    <Title fontSize = {props.titleFontSize} >Webové aplikácie </Title>
    <Break />
    <p><strong>Vyvíjame softvér</strong> postavený na <strong>webových technológiách</strong>. Najjednoduchším príkladom je bežná <strong>webstránka</strong>. Okrem nich, sú to aj informačné systémy, hry a mnohé iné aplikácie, ktoré Vaša firma potrebuje.</p>
    <p>Naše stránky sú založené na redakčnom systéme <strong>WordPress</strong>, ktorý momentálne poháňa <strong>28% všetkých webových stránok na svete</strong> <a href="https://wp.sk/spravy/23-presvedcivych-dovodov-preco-pouzivat-wordpress/" target="_blank">(čítať Prečo práve WordPress).</a> Pri backendových riešeniach zvyčajne používame PHP, ale NodeJS nám tiež nie je neznámy. Naši programátori sa môžu pripojiť k Vášmu tímu, alebo pre Vás vytvoríme kompletné riešenie na mieru.</p>
    <ContactButton {...props} visibility = {visibility}/>
  </TextDiv>
  </FlexObal>
</>}