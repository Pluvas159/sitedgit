import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { CarouselButton } from "../location/Location";
import Dialog from "../dialog"


const FooterDiv = styled.div`
  display: grid;

  width: auto;
  height: auto;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: 1rem ${props => props.inlinePadding};
  font-family: Open Sans,sans-serif;
  p {
    color: ${props => props.secondColor};
    line-height: 2em;
  }
  h3 {
    font-size: 0.95rem;
    cursor: pointer;
  }
  h3:hover {
    color: #e61f62;
  }
  svg {
    padding-inline: 4px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width:767px) {
    div {
      display:flex;
      flex-direction:column;
      align-items: center !important;
      justify-content: center !important;
    }
    padding: 1rem 2rem;
  }

`

export const Footer = (props) => {
  const [dialogVisible, setDialogVisible] = React.useState(false);

  return <>
  <Dialog visible = {dialogVisible} setVisible = {setDialogVisible} title = "Fakturačné údaje">
    <div className="modal-body">
      <p>Sited, s.r.o.<br/>Hviezdoslavova 193/2<br/>060 01 Kežmarok<br/></p>
      <p>IČO: 50543709<br/>DIČ: 2120400755<br/>IČ DPH: SK2120400755</p>
      <p>Bankové spojenie: Slovenská sporiteľňa, a.s.<br/>IBAN: SK20 0900 0000 0051 2700 7878<br/>SWIFT: GIGASKBX</p>
      <p>Spoločnosť je zapísaná v obchodnom registri Okresného súdu Prešov, oddiel Sro, vložka č. 37977/P</p>
    </div>
  </Dialog>
  <svg width="0px" height="0px" style = {{"display": "none"}}>
      <linearGradient id="icon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#4554a4" offset="0%" />
        <stop stopColor="#e61f62" offset="100%" />
      </linearGradient>
    </svg>
  <FooterDiv {...props}>
    <div >
      <h3  onClick = {() => setDialogVisible(true)}><a>FAKTURAČNÉ ÚDAJE</a></h3>
    </div>
    <div>
      <h3>
        ADRESA
      </h3>
      <p>Sited, s.r.o. <br/>
         Hviezdoslavova 193/2<br/>
          060 01 Kežmarok</p>
    </div>
    <div>
      <h3>
        KONTAKT
      </h3>
      <p>
      <FaMobileAlt style={{ fill: "url(#icon-gradient)" }} />+421 917 059 497<br/>
      <FaRegEnvelope style={{ fill: "url(#icon-gradient)" }} />info@sited.sk
      </p>
    </div>
    <div style = {{display:"flex", marginTop: "auto", justifyContent: "right" }}>
        <CarouselButton href = "#header" active = {false}> <MdKeyboardArrowUp /></CarouselButton>
    </div>
  </FooterDiv>
  </>
}