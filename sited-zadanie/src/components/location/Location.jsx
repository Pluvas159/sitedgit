import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Title } from "../../components/textDiv/Title";
import { Break } from "../../components/textDiv/Break";
import { FaRegImage, FaRegMap } from "react-icons/fa";
import useDraggableScroll from 'use-draggable-scroll';

const LocationBreak = styled(Break)`
  display: block;
  margin: auto;
  background-image: linear-gradient(90deg,#4554a4,#e61f62);
`

const Map = styled.iframe`
  width: 100%;
  border: none;
`

const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  `

const CarouselItem = styled.div`
  width: 100%;
  display: flex;
  height: 30rem;
  flex: 0 0 auto;

`

export const CarouselButton = styled.a`
  background: linear-gradient(127deg,#4554a4,#e61f62);
  transition: background-color 2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fafafa;
  svg {
    width: 1.4rem;
  }
  z-index: 1;
  position: relative;
  border:none;
  width: 4rem;
  height: 4rem;
  margin: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover:before {
    background:linear-gradient(127deg,#4554a4,#e61f62);
  }
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
    opacity: 1;
    border-radius: 100%;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: ${props => props.active == props.index 
      ? "linear-gradient(127deg,#4554a4,#e61f62)" 
      : "#1a1a1a"};
    }
  }
  `

const Image = styled.img`
  width: 800px;
  height: 600px;
  @media (min-width: 768px) {
    width: 100vw;
    height: auto;
}
`
const ImageDiv = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
cursor: grab;
@media (max-width: 768px) {
  &:hover {
    overflow: scroll;
  }
}
@media (min-width: 768px) {
  &:hover {
    overflow-y: scroll;
  }
}
&::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
&::-webkit-scrollbar-track {
  background: transparent;
}
&::-webkit-scrollbar-thumb {
  background: linear-gradient(127deg,#4554a4,#e61f62);
}
`

const SitedLocation = styled.div`
padding-top: 5rem;
background-color: #1a1a1a;
text-align: center;
font-family: Yeseva One,cursive;
font-weight: 400;
font-size: 3.75rem;
color: #f2f2f2;
p {
  font-size: 1rem;
}
`


export const Location = (props) => {

  const [active, setActive] = React.useState(0);

  const scrollRef = React.useRef(null);
  const {scrollOnMouseDown}  = useDraggableScroll(scrollRef);

  return (
<SitedLocation id = {props.id} ref = {props.cref}>
  <Title titleTextAlign = "center">Kde nás nájdete?</Title>
  <LocationBreak />
  <p>Nájdete nás v našej kancelárii v centre malebného mestečka v blízkosti Vysokých Tatier - Kežmarku.</p>
  <div style = {{display: "flex", justifyContent: "center"}}>
  <CarouselButton onClick={() => setActive(0)} href = "#0" active = {active} index = {0}><FaRegImage /></CarouselButton>
  <CarouselButton onClick={() => setActive(1)} href = "#1" active = {active} index = {1}><FaRegMap /></CarouselButton>
  </div>
  <Carousel>
    <CarouselItem active = {active} index = {0} id = {0}>
      <ImageDiv ref = {scrollRef} onMouseDown = {scrollOnMouseDown}>
        <Image src = "https://sited.sk/images/office.jpg" />
      </ImageDiv>  
    </CarouselItem>
    <CarouselItem active = {active} index = {1} id = {1}>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.619873020924!2d20.429414729218976!3d49.134519898707225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3c323ec10e59%3A0x947f7842c10b0d83!2sSited%2C+s.r.o.!5e0!3m2!1ssk!2ssk!4v1495485736908" />
    </CarouselItem>
  </Carousel>
</SitedLocation>
  )
}