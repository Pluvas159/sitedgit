import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../contactButton"
import { MdClose } from "react-icons/md";


const animationtop = keyframes`
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
`

const SitedDialog = styled.div`
  display: ${props => props.visible ? "block" : "none"};
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  & > div {
    position: relative;
    animation : ${animationtop} 0.5s ease-in-out;
    width: fit-content;
    background-color: #fefefe;
    margin: 5rem auto;
    padding: 1rem;
  }

  .modal-header {
    width: auto; 
    display: flex;   
  }
  hr {
    border-color: rgba(0,0,0,0.1);
    width: 100%;
  }
  .modal-body {
    width: 30rem;
    overflow-wrap: break-word;
  }

  .exit-icon {
    cursor: pointer;
    margin-left: auto;
    opacity: 0.5;
    color: #1a1a1a;
  }
`
const DialogButton = styled.button`
`


export const Dialog = (props) => {

  return (
  <>
    <SitedDialog visible = {props.visible} onClick = {(e) => { e.currentTarget == e.target && props.setVisible(false)}}>
      <div>
        <div className='modal-header'>
          <h3>
            {props.title}
          </h3>
          <MdClose onClick = {() => props.setVisible(false)} className = "exit-icon"/>
        </div>
        <hr/>
        <div className = 'modal-body'>
          {props.children}
        </div>
        <hr/>
        <div className='modal-footer'>
          <Button 
              label = 'Zatvoriť'
              backgroundColor = 'white'
              color = '#1a1a1a'
              hoverTextColor = 'white'
              contactAlign = 'right'
              arrival = 'left'
              onClick = {() => props.setVisible(false)}
                />
        </div>
      </div>
    </SitedDialog>
  </>
  )
}
