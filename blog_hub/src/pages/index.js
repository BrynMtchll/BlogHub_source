import React from "react"
import Menu from "../components/Menu"
import BigArticle from "../components/BigArticle"
import ArticleList from "../components/ArticleList"
import { createGlobalStyle} from "styled-components"
import styled from "styled-components"
import * as vars from "../util/variables"
import {graphql} from "gatsby"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${vars.PRIMARY_D};
    margin: 0;
    padding: 0;
    font-size: ${vars.FONT_R};
  }
`

const margin = '5%';

const Wrapper = styled.div`
   width: auto;
   padding-left: ${margin};
   padding-right: ${margin};
   font-family: 'Open Sans', sans-serif;
   font-weight: 100;
   overflow: hidden;
   color: ${vars.PRIMARY_L};
   position: relative;
`

const Section = styled.section`
   position: relative;
   margin-top: 10%;
   height: auto;
   margin-top: ${props => props.lower && '55%'};
`

const IndexPage = ({data}) => {
   const rand1 = Math.floor(Math.random() * 60);
   const rand2 = Math.floor(Math.random() * 60);
   let structuredData = {};
   let bigArticle1 = {}, bigArticle2 = {};
   let i = 0;
   data.allContentfulArticleComponent.edges.forEach((wrapper) => {
      if (!(wrapper.node.publication in structuredData)) structuredData[wrapper.node.publication] = [wrapper.node];
      else structuredData[wrapper.node.publication].push(wrapper.node);
      i += 1;
      if (i == rand1) bigArticle1 = wrapper.node;
      if (i == rand2) bigArticle2 = wrapper.node;
   })

   return (
   <Wrapper>
      <GlobalStyle/>
      <Menu/>
      <Section>
         <BigArticle left node={bigArticle1}/>
         <BigArticle node={bigArticle2}/>
      </Section>
      <Section lower>
         {Object.keys(structuredData).map((key) => (
            <ArticleList nodes={structuredData[key]} publication={key}/>
         ))}
      </Section>
   </Wrapper>
  )
}

export const query = graphql`
   query {
      allContentfulArticleComponent {
         edges {
            node {
              title
              subtitle
              url
              author
              date
              thumbnail {
               contentful_id
               file {
                  url
               }
              }
              publication
            }
          }
        }
   }
`

export default IndexPage
