import React from "react";
import styled from "styled-components";
import Select from 'react-select';


const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#1a1a1a",
    border: "none",
    boxShadow: 'none',
    margin: "0 0.5rem",
  }),
  menu: (provided) => ({
    ...provided,
    color: '#444444',
    backgroundColor: "#292b2c"
  }),
  option: (provided, state, isDisabled) => ({
    ...provided,
    color: "white",
    backgroundColor: state.isSelected ? '#000' : 'transparent',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }),

}

const StyledSelect = styled(Select)`
@media (min-width: 960px) {
  margin: 0 auto;
}
`

export const ContactDropdown = (props) => (

<StyledSelect options={props.data} styles = {customStyles} components={{
  IndicatorSeparator: () => null
}}
placeholder = "rozpočet"
/>
  )