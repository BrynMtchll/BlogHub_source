import React from "react"
import Button from "./Button"
import styled from "styled-components"
import * as vars from "../util/variables"


const Wrapper = styled.div`
position: absolute;
bottom: 0;
width: 100%;
` 

const SpanContainer = styled.div`
   margin: 3% 4.5% 0 4.5%;
`
const BtnContainer = styled.div`
   margin: 4% 3.5% 5% 3.5%;
`

const Span = styled.span`
   margin-left: 2%;
   font-size: ${vars.FONT_S};
   vertical-align: middle;
`

const ProfilePic = styled.div`
   border-radius: 100%;
   width: 25px;
   height: 25px;
   background: lightBlue;
   display: inline-block;
   vertical-align: middle;
`

const ArticleBottom = (props) => {
   return (
      <Wrapper>
         <SpanContainer>
            <ProfilePic/>
            <Span>{props.publication}&nbsp; •&nbsp; {props.author}&nbsp; •&nbsp;{props.date}</Span>
         </SpanContainer>
         <BtnContainer>
            <Button primary type={'read'} text icon url={props.url}/>
            <Button type={'bookmark'} right icon/>
         </BtnContainer>
      </Wrapper>
   )
}
export default ArticleBottom