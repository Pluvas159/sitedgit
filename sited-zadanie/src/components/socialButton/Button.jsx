import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CustomButton = styled.a`
  color:  ${props => props.color};
  font-size: 1em;
  z-index: 5 !important;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.hoverColor || "red"};
  }
  position: absolute;
  left: ${props => props.left};
  top: 1%;
`;

const iconsByType = (type) => {
  switch(type) {
    case 'facebook': 
      return <FaFacebookF />;
    case 'instagram': 
      return < FaInstagram />;
    case 'linkedin': 
      return <FaLinkedinIn />;
  } 

}

export const SocialButton = (props) => {

  return <CustomButton {...props}>
    { 
      iconsByType(props.type)
    }
    </CustomButton>
};

SocialButton.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  hoverColor: PropTypes.string,
};


SocialButton.defaultProps = {
  color: 'white',
  hoverColor: 'white',
  type: "facebook"
};