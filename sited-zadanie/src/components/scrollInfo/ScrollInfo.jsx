import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledScrollInfo = styled.div`
position: fixed;
top: 50%;
right: 10px;
transform: translateY(-50%);
display: flex;
flex-direction: column;
z-index: 1;
`
const StyledScrollButton = styled.a`
position: relative;
width: 2rem;
height: 2rem;
border-color: ${props => props.active ? "transparent" : "#1a1a1a"};
background-color: ${props => props.active ? "transparent" : "#fafafa"};
border-radius: 70%;
opacity: ${props => props.active ? "1" : "0.2"};
border: ${props => props.active ? "none" : "1px solid #1a1a1a"};
cursor: pointer;
&:before {
    content: " ";
    position: absolute;
    z-index: 1;
    top: -0.2rem;
    left: -0.2rem;
    display: inline-block;
    width: calc(100% + 0.4rem);
    height: calc(100% + 0.4rem);
    opacity: ${props => props.active ? "1" : "0"};
    background: url(https://sited.sk/images/ring.svg) ;
    background-size: 100% 100%;
    transition: opacity .2s ease-in-out;
}
`

const StickDivider = styled.div`
height: 0.5rem;
width: 1px;
padding: 0;
margin: 5px;
background-color: #1a1a1a;
display: block;
margin-inline: auto;
`




export const ScrollInfo = (props) => {
  const [scroll, setScroll] = React.useState(0);
  const handleScroll = () => {
  const position = window.pageYOffset;
     setScroll(position);
}


useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <StyledScrollInfo>
      {props.buttons.map((button, index) => (<>
          <StyledScrollButton href = {`#${button.hrefId}`} cref = {button.cref} scroll = {scroll} key = {index}
            active = {(scroll + window.innerHeight/3 >= button.cref?.current?.offsetTop &&
            button.cref?.current?.offsetTop + button.cref?.current?.getBoundingClientRect().height > scroll + window.innerHeight/3)}         
          />
        {index!==props.buttons.length-1 && <StickDivider ></StickDivider>}</>
      )
      )}
    </StyledScrollInfo>
  )
}