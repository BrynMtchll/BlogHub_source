import React from "react"
import ArticleBottom from "./ArticleBottom"
import styled from "styled-components"
import * as vars from "../util/variables"
import { StaticImage } from "gatsby-plugin-image"

const mgn = 'margin: 3% 4.5% 0 4.5%;';

const Wrapper = styled.div`
   margin-right: 25px;
   width: 400px;
   height: 90%;
   background: ${props => props.left && vars.SECONDARY_D};
   overflow: hidden;
   box-shadow: 30px 15px 30px -30px ${vars.COLOR};
   display: inline-table;
   position: relative;
`

const Title = styled.h3`
   ${mgn}
   font-size: ${vars.FONT_L};
`
const SubTitle = styled.h4`
   ${mgn}
   font-weight: 400;
`
const Thumbnail = styled.div`
   margn: 1%;
   font-size: ${vars.FONT_L};
   height: 150px;
   // background: rgb(${Math.floor(Math.random() * 320)}, ${Math.floor(Math.random() * 320)}, ${Math.floor(Math.random() * 320)});
   background: url(${props => props.url});
   background-size: cover;
   color: ${vars.PRIMARY_D};
   position: relative;
`

const Article = ({node}) => {
   return (
      <Wrapper>
         <Thumbnail url={node.thumbnail && node.thumbnail.file.url}/>
         <Title >{node.title}</Title>
         <SubTitle>{node.subtitle}</SubTitle>
         <ArticleBottom date={node.date} publication={node.publication} url={node.url} author={node.author}/>
      </Wrapper>
   )
}
export default Article