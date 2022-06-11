import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Texth2 = styled.h2`
  font-weight: ${props => props.titleFontWeight || "300"};
  font-family: ${props => props.titleFontFamily};
  color: ${props => props.color}; 
  font-size: ${props => props.fontSize || "3rem"};
  line-height: 3rem;
  text-align: ${props => props.titleTextAlign || "center"};
  @media (min-width: 960px) {
    font-size: 4vw;
  }
`

export const Title = (props) => (
  <Texth2 {...props}>
    {props.children}
  </Texth2>

)

Title.propTypes = {
  color: PropTypes.string,
  titleFontFamily: PropTypes.string,
}

Title.defaultProps = {
  titleFontFamily: "Rajdhani,sans-serif",
}