import React from "react"
import styled from "styled-components";
import * as vars from "../util/variables";

const Nav = styled.div`
   display: flex;
   justify-content: space-between;
   background: ${vars.COLOR};
   position: fixed;
   padding: 0 5%;
   left: 0;
   top: 0;
   right: 0;
   z-index: 5;
`
const Ul = styled.div`
   display: flex;
   justify-content: space-between;
   verticle-algin: middle;
   width: 20%;
   align-content: center;
   margin: 1% 0;
`

const Li = styled.span`
   align-self: center;
   font-weight: ${props => props.logo && '800'};
`
const User = styled.div`
   display: flex;
   justify-content: space-between;
   verticle-algin: middle;
   width: 17%;
   align-content: center;
`

const Span = styled.span`
   align-self: center;
`

const ProfilePic = styled.div`
   border-radius: 100%;
   width: 35px;
   height: 35px;
   background: lightBlue;
   display: inline-block;
   align-self: center;
`

const Menu = () => {
   return (
      <Nav>
         <Ul>
            <Li logo>BlogHub</Li>
            <Li>Categories</Li>
            <Li>bookmarks</Li>
         </Ul>

         <User>
            <Span>email.schoolsnet.act.edu.au</Span>
            <ProfilePic/>
         </User>
      </Nav>
   )
}

export default Menu