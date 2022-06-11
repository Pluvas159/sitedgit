import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { ImageTitle } from './title';
import DividerLink from '../dividerLink';
import { FaChevronDown } from 'react-icons/fa';
import SocialButton from '../socialButton'; 

const CustomHeader = styled.div`
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  background-color: rgb(20, 21, 22);
  background-blend-mode: overlay;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0,100% 0,100% 100%,0 90%);

`;


export const ImageHeader = (props) => (
  <div style = {{position: "relative"}}>
  <SocialButton left = "0.5rem" color = "grey" type = "facebook" hoverColor="white"/>
  <SocialButton left = "2rem" color = "grey" type = "linkedin" hoverColor="white"/>
  <SocialButton left = "3.5rem" color = "grey" type = "instagram" hoverColor="white"/>
  <DividerLink href = "#webApps" align = "bottom" width = "3rem" >< FaChevronDown/></DividerLink>
  <CustomHeader {...props} imgUrl = "https://sited.sk/images/background-header.jpeg" ref = {props.cref} id = {props.id}>
    <ImageTitle />
  </CustomHeader>
  </div>
)

ImageHeader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ImageHeader.defaultProps = {
  width: "200%",
  height: "100%"
}