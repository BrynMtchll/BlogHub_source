import React from "react"
import styled from "styled-components"
import * as vars from "../util/variables";


const Wrapper = styled.div`
   background: ${props => props.primary && vars.COLOR};
   display: inline-block;
   font-size: ${vars.FONT_R};
   border-radius: 70px;
   margin-right: 3%;
   position: relative;
   font-weight: regular;
   z-index: 0;
   float: ${props => props.right && "right"};
   width: 110px;
`

const Text = styled.span`
   display: inline-block;
   padding: 0.5em 0;
   padding-right: ${props => props.icon && "0.18rem"}
`

const Icon = styled.span`
   display: inline-block;
   padding: 0.5em 0;
   padding-left: ${props => props.text && "0.18rem"}
`

const Link = styled.a`
   color: ${vars.PRIMARY_L};
   display: block;
   width: 100%;
   height: 100%;
   padding: 0 25%;
`

const Button = (props) => {
   const icons = {
      'read' : "-->",
      'bookmark' : "∑|",
   }

   return (
      <Wrapper primary={props.primary} right={props.right}>
         <Link href={props.url} target="_blank">
         {props.text && <Text icon={props.icon} >{props.type}</Text>}
         {props.icon && <Icon text={props.text} >{icons[props.type]}</Icon>}
         </Link>
      </Wrapper>
   )
}

export default Button