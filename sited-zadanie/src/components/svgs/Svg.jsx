import React, { useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import PropTypes from 'prop-types';

const draw = keyframes`
to {
  stroke-dashoffset: 0;
}
100% {fill-opacity: 1; stroke-opacity: 0;}
`;

const CustomImg = styled.div`
width: ${props => props.svgWidth};
float: ${props => props.svgFloat};
margin: 0;
padding: 0;
display: block;
   margin: auto;
svg > path {
  fill-opacity: 0;
  stroke: ${props => props.strokeColor};
  stroke-dasharray: 5000;
  stroke-dashoffset: 5000;
  animation: ${props => !props.visibility && "none" }${draw} 5s linear forwards;
}
svg {
  width: 50vw;
}
@media (min-width: 768px) {
  svg {
    width: 25vw;
  }
`

export const SVG = (props) => {
  return <CustomImg {...props} >{props.svg} {props.children}</CustomImg>
}

SVG.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  strokeColor: PropTypes.string,
  svg: PropTypes.node.isRequired,

};


SVG.defaultProps = {
  svgWidth: "100%",
  svgHeight: "100%",
  strokeColor: "grey",
};