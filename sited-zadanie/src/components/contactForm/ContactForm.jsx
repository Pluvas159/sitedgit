import React from "react"; 
import styled from "styled-components";
import PropTypes from "prop-types";
import { Title } from "../../components/textDiv/Title";
import { Break } from "../../components/textDiv/Break";
import { ContactInput } from "./ContactInput";
import DividerLink from "../dividerLink";


const SitedForm = styled.div`
position: relative;
padding: 5rem 0;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
color: #fafafa;
line-height: 2em;
background-color: #1a1a1a;
p {
  font-size: 1rem;
}
clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
`
const SendDiv = styled.div`
display: flex;
width: 80%;
flex-direction: row;
margin: 1rem;
gap: 1rem;
@media (min-width: 768px) {
  width: 50%;
}
`

const ContactBreak = styled(Break)`
display: block;
margin: auto;
background-image: linear-gradient(90deg,#4554a4,#e61f62);
`

const ContactButton = styled.button`
background-color: transparent;
border: 3px solid;
color: #fafafa;
width: 40%;
height: auto;
transition: background-color .25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
border-image: linear-gradient(90deg,#4554a4,#e61f62) 1;
&:hover { 
  background-image: linear-gradient(90deg,#4554a4,#e61f62);
  border:none;
}
`

const AllInputsDiv = styled.div`
display: grid;
@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  width: 50%;
}
gap: 1rem;
width: 80%;`


export const ContactForm = (props) => (
<div ref = {props.cref} style={{position: "relative"}}>
<DividerLink href = "#contactForm" border = "none" align = "top" width = "10rem"><img src = "https://sited.sk/images/beer.svg"/></DividerLink>
<SitedForm id = {props.id} >
  <Title titleFontFamily = "Yeseva One,cursive" titleFontWeight = "400" fontSize = "3.75rem" >Prvá runda ide na nás!</Title>
  <ContactBreak breakAlign="left" breakHeight = "1px" breakWidth = "8rem"/>
  <p>Sadnime si spolu k pivu alebo káve a prediskutujme Váš projekt.<br/>
  Predsa len, i vo svete online komunikácie stále niet nad osobný kontakt.</p>
  <AllInputsDiv>
    <ContactInput type = "textinput" label = "meno a priezvisko:"/>
    <ContactInput type = "textinput" label = "názov firmy:"/>
    <ContactInput type = "dropdown" label = "rozpočet projektu:"/>
    <ContactInput type = "textinput" label = "kontakt:"/>
  </AllInputsDiv>
  <SendDiv>
    <ContactInput  type = "textarea" width = "60%" label = "opíšte Váš projekt:"/>
    <ContactButton type="submit">Odoslať</ContactButton>
  </SendDiv>
</SitedForm>
</div>
)