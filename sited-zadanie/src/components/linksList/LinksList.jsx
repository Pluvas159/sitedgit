import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Disc from "../../assets/disc.svg";


const CustomList = styled.ul`
  font-family: Open Sans,sans-serif;
  font-weight: 700;
  font-size: 2vw;
  color: ${props => props.textColor};
  li {
    cursor: pointer;
    list-style: none;
  }
  a:hover {
    color: ${props => props.hoverTextColor};
  }
  li:before {
    content: '';
    display: inline-block;
    width: ${props => props.discWidth};
    height: ${props => props.discWidth};
    margin-right: 5px;
    background-image: url(${Disc});
    background-repeat: no-repeat;
  }
  a {
    text-decoration: none;
    color: ${props => props.textColor};
  }
  @media (min-width: 960px) {
    font-size: 1.2vw;
  }
  @media (max-width: 767px) {
    display: block;
    margin-inline: auto;
  }
` 


export const LinksList = (props) => (
  <CustomList {...props}>
    {props.children}
  </CustomList>
)

//Linkslist proptypes 
LinksList.propTypes = {
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  discWidth: PropTypes.string,
}

//Linkslist default props
LinksList.defaultProps = {
  textColor: "black",
  backgroundColor: "white",
  discWidth: "13px",
  hoverTextColor: "#e61f62",

}

