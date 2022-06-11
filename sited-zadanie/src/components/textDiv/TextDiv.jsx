import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';


const CustomDiv = styled.div`
  font-size: 0.7rem;
  font-family: Open Sans,sans-serif;
  font-weight: 300;
  line-height: 2em;
  margin-inline: 2rem;
  color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  @media (min-width: 960px) and (max-width: 1600px) {
    font-size: 1.2vw;
  }
  @media (min-width: 500px) and (max-width: 959px) {
    font-size: 1.5vw;
  }
  @media (min-width: 1601px) {
    font-size: 0.9vw;
  }
`


export const TextDiv = (props) => (
  <CustomDiv {...props}>
    {props.children}
  </CustomDiv>
)

TextDiv.propTypes = {
}

TextDiv.defaultProps = {

}