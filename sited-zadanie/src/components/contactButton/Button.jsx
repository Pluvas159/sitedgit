import React from 'react';
import styled, { keyframes } from "styled-components";
import PropTypes from 'prop-types';

const arrivaleft = keyframes`
from {
  opacity: 0;
  margin-right: 50%;
}
to {
  opacity:1;
  margin-right: 0%;
}
`
const arrivalright = keyframes`
from {
  opacity: 0;
  margin-left: 50%;
}
to {
  opacity:1;
  margin-right: 0%;
}
`


const CustomButton = styled.a`
color: ${props => props.color};
background-color: ${props => props.backgroundColor};
border: 1px solid ${props => props.borderColor};
margin: ${props => props.contactMargin};
padding: ${props => props.contactPadding};
border-color: ${props => props.borderColor};
text-decoration: none;
display: block;
width:fit-content;
height:fit-content;
opacity: ${props => props.visibility ? "1" : "0"};
margin-left: ${props => props.contactAlign == "right" && "auto"} ;
font-weight: 600;
font-size: 2vw;
cursor: pointer;
transition: background-color 0.3s ease-in-out;
font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
&:hover {
  background-color: ${props => props.hoverColor};
  color: ${props => props.hoverTextColor};
}
@media (min-width: 960px) {
  font-size: 1.5vw;
}
@media(min-width: 768px) {
  animation: ${props => props.visibility ? props.arrival == "left" ? arrivaleft : arrivalright : "none"} 1s ease-in-out;
}
@media (max-width: 767px) {
  margin-inline: auto;
}
`


export const Button = (props) => {
  return <CustomButton {...props} href = "#contactForm">
    {props.label}
  </CustomButton>
}

Button.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderColor: PropTypes.string,
  arival: PropTypes.string,
  hoverTextColor: PropTypes.string,
  contactAlign: PropTypes.string,
};


Button.defaultProps = {
  color: 'white',
  hoverColor: 'black',
  label: 'Kontaktujte nás',
  backgroundColor: 'lightgrey',
  borderColor: 'grey',
  margin: "0px",
  contactPadding: "1vw",
  arival: "right",
  hoverTextColor: 'white',
  contactAlign: "left",
};