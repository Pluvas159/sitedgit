import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ContactDropdown } from "./ContactDropdown";


const ContactInputDiv = styled.div`
    border: 1px solid #333;
    font-size: 1rem;
    color: #666;
    text-align: left;
    width: ${props => props.width};
    height: auto;
    label {
      font-size: 0.8rem; 
      margin: 0.2rem 0.5rem;
      line-height: 1.5;
      @media (min-width: 960px) {

      }
    }
    @media (min-width: 960px) {
      display: flex;
    }
    input {
      margin: 0.2rem 0.5rem;
      color: white;
      border: none;
      background-color: transparent;
      outline: none;
    }
`

const ContactTextArea = styled.textarea`
background-color: transparent;
width: 100%;
height: 5vw;
border: none;
resize: none;
outline: none;
color: white;

`

export const ContactInput = (props) => (
  <ContactInputDiv {...props}>
    <label>{props.label}</label>
    {props.type == "textarea" && <ContactTextArea></ContactTextArea>}
    {props.type == "textinput" && <input type="text" {...props}/>}
    {props.type == "dropdown" && <ContactDropdown data = {[{label: "300-500€", value: 300}, {label: "500-1000€", value: 500}]}/>}
  </ContactInputDiv>

)

ContactInput.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
}

ContactInput.defaultProps = {
  width: "100%"
}