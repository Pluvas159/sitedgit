import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const StyledLink = styled.a`
  position: absolute;
  top: ${props => props.align == "top" ? "5%" : "95%"};
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.width};
  height: ${props => props.height || props.width};
  z-index: 5 !important;
  color: white;
  background-color: ${props => props.backgroundColor || "#1a1a1a"} ;
  border-radius: 50%;
  border: ${props => props.border || "1px solid white"};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50%;
    height: 50%;
  }
  
`




export const DividerLink = (props) => {

  return <StyledLink {...props}>
    {props.children}
  </StyledLink>

}

