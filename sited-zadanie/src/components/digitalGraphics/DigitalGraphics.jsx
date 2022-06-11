import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { TextDiv } from "../textDiv/TextDiv";
import { Title } from "../textDiv/Title";
import { Break } from "../textDiv/Break";
import ContactButton  from "../contactButton";
import LinksList from "../linksList";
import SVG  from "../svgs";
import { ReactComponent as DigitalGraphicsIcon } from "../../assets/digital_graphics.svg";
import { FaChevronDown } from 'react-icons/fa';
import DividerLink from '../dividerLink';

const FlexObal = styled.div`
display: flex;
flex-direction: column-reverse;;
padding: 0% 5%;
h2 {
  text-align: ${props => props.textAlign || "right"};
}
svg {
  display: block;
  margin-inline:auto;
}
@media (min-width: 768px) {
  flex-direction: row;
  ul {
    margin-left: auto;
  }
  & > a {
    margin-left: 2rem;
  }
}

border: none;
  `
const ClipObal = styled.div`
background-color: ${props => props.backgroundColor};
padding: 20% 0%;
clip-path:  polygon(0 10%, 100% 0, 100% 100%, 0 90%);
`

export const DigitalGraphics = (props) => {
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


return <div ref = {props.cref} style = {{position: "relative"}}>
  <DividerLink href = "#digitalGraphics" align = "top" width = "3rem" >< FaChevronDown/></DividerLink>
  <DividerLink href = "#multimedia" align = "bottom" width = "3rem" >< FaChevronDown/></DividerLink>
  <ClipObal {...props}> 
<FlexObal {...props} > 
  <TextDiv {...props} >
    <Title fontSize = {props.titleFontSize} >Digitálna grafika </Title>
    <Break {...props}/>
    <p>Firemná identita je dnes pre Vašu firmu dôležitejšia viac, ako kedykoľvek predtým. Dizajnmanuál, logá, vizitky, hlavičkový papier a viac, to všetko nie je pre nás žiaden problém a už nemusí byť ani pre Vás! Pripravíme pre Vás aj letáky, brožúry a iné grafické materiály.</p>
    <p>Je doba 3D tlačiarní, virtuálnej a doplnenej reality. Len 2 dimenzie už nestačia. Nebojte sa, aj o toto sa postaráme.</p>
  </TextDiv>
  <SVG svg = {<DigitalGraphicsIcon />} strokeColor = {props.strokeColor} visibility = {visibility} >
  </SVG>
  </FlexObal>
  <FlexObal {...props} >
  <ContactButton {...props} visibility = {visibility}/>
  <LinksList textColor = "#f2f2f2" ><li><a>Presvedčte sa na vlastné oči – grafické portfólio</a></li> </LinksList>
  </FlexObal>
</ClipObal></div>}