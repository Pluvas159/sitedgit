import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import imgTitle from "../../assets/headerTitle.svg"


const CustomImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  @media (min-width: 960px) {
    width: 30rem;
    height: 30rem;
  }
`

export const ImageTitle = (props) => (
  <CustomImage src={imgTitle} {...props} />
)

ImageTitle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ImageTitle.defaultProps = {
  width: "15rem",
  height: "15rem",
}