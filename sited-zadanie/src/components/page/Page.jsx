import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Header from "../imageHeader";
import WebApps from "../webApps";
import Footer from "../footer";
import DigitalGraphics from "../digitalGraphics";
import Multimedia from "../multimedia";
import ContactForm from "../contactForm";
import Location from "../location";
import ScrollInfo from "../scrollInfo";

const SitedPage = styled.div`
`

export const Page = (props) => {
  const digitalGraphicsRef = React.createRef();
  const webAppsRef = React.createRef();
  const headerRef = React.createRef();
  const multimediaRef = React.createRef();
  const contactFormRef = React.createRef();
  const locationRef = React.createRef();

  

  return (
    <SitedPage>
      <Header cref = {headerRef} id = "header"/>
      <WebApps
        cref = {webAppsRef}
        id = "webApps"
        contactAlign = "right"
        arrival = "left" 
        backgroundColor = "white"
        color= "#1a1a1a"
      />
      <DigitalGraphics 
        cref = {digitalGraphicsRef}
        id = "digitalGraphics"
        backgroundColor = "#1a1a1a"
        color = "#fafafa"
        hoverColor = "#fafafa"
        hoverTextColor = "#1a1a1a"
        textAlign = "left"
        breakAlign = "left"
        breakColor = "#fafafa"
      />
      <Multimedia 
        cref = {multimediaRef}
        id = "multimedia"
        contactAlign = "right"
        arrival = "left"
        backgroundColor = "white"
        color= "#1a1a1a"
      />
      <ContactForm 
        cref = {contactFormRef}
        id = "contactForm"
      />
      <Location 
        cref = {locationRef}
        id = "location"
      />
      <Footer
        backgroundColor = "#1a1a1a"
        color = "#fafafa"
        secondColor = "lightgrey"
        inlinePadding = "10rem"
       />
      <ScrollInfo buttons = {[{
        hrefId: "header",
        cref: headerRef,
      }, {
        hrefId: "webApps",
        cref: webAppsRef,
      }, {
        hrefId: "digitalGraphics",
        cref: digitalGraphicsRef,
      }, {
        hrefId: "multimedia",
        cref: multimediaRef,
      }, {
        hrefId: "contactForm",
        cref: contactFormRef,
      }, {
        hrefId: "location",
        cref: locationRef,
      }
      ]}/>
    </SitedPage>
  )
}