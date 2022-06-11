import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { TextDiv } from "../textDiv/TextDiv";
import { Title } from "../textDiv/Title";
import { Break } from "../textDiv/Break";
import ContactButton  from "../contactButton";
import SVG  from "../svgs";
import { ReactComponent as MultimediaIcon } from "../../assets/multimedia.svg";
import LinksList from "../linksList";

const FlexObal = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.backgroundColor};
padding: 0% 5%;
h2 {
  text-align: ${props => props.textAlign || "right"};
  line-height: 3rem;
}
svg {
  display: block;
  margin-inline:auto;
}
@media (min-width: 768px) {
  flex-direction: row;
  & > a {
    margin-right: 2rem;
  }
}
  `

export const Multimedia = (props) => {
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



return <div id = {props.id} style = {{padding: "10% 0"}} ref = {props.cref}> 
<FlexObal {...props}>
<SVG svg = {<MultimediaIcon />} strokeColor = {props.strokeColor} visibility = {visibility}>
  </SVG>
  <TextDiv {...props} >
    <Title fontSize = {props.titleFontSize} >Multimediálna produkcia </Title>
    <Break {...props}/>
    <p>Žijeme vo svete naplnenom multimédiami. Už viac nekomunikujeme len s použitím textu. Videá sú dôležitou súčasťou nášho každodenného života. Sited, s.r.o. Vám s týmto pomôže tiež. Potrebujete reklamu, pracujete na filme alebo služby, ktoré hľadáte, súvisia skôr so zvukom?</p>
  </TextDiv>
  </FlexObal>
  <FlexObal>
  <LinksList textColor= "black">
    <li><a>Partnerská firma SG-production s. r. o.</a></li>
    <li><a>Projekt školská internetová televízia</a></li>
  </LinksList> 
  <ContactButton {...props} visibility = {visibility}/>
  </FlexObal>
</div>}