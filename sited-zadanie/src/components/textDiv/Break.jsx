import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const TextBreak = styled.hr`
  width: ${props => props.breakWidth};
  margin-inline-start: ${props => props.breakAlign == "left" ? 0 : 100 - parseInt(props.breakWidth)}%;
  background-color: ${props => props.breakColor};
  border: none;
  height: ${props => props.breakHeight};
`

export const Break = (props) => (<TextBreak {...props}/>)

Break.propTypes = {
  breakWidth: PropTypes.string,
  breakAlign: PropTypes.string,
  breakColor: PropTypes.string,
  breakHeight: PropTypes.string,
}

// default props
Break.defaultProps = {
  breakWidth: "7%",
  breakAlign: "right",
  breakColor: "black",
  breakHeight: "2px",
}