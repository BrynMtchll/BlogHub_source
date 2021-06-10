import React from "react"
import Article from "./Article"
import styled from "styled-components"
import * as vars from "../util/variables"

const Container = styled.div`
   margin-top: 3%;   
`

const Header =styled.div`
   margin-bottom: 1%;
   font-weight: 800;
   font-size: ${vars.FONT_L};
`

const WrapperOut = styled.div`
   width: 95vw;
   overflow-x: scroll;
`

const WrapperIn = styled.div`
   display: inline-flex;   
   justify-content: space-around;
   width: auto;
   height: 450px;
`

const ArticleList = ({nodes, publication}) => {
   console.log(publication);
   return (
      <Container>
         <Header>{publication}</Header>
         <WrapperOut>
            <WrapperIn>
               {nodes.map(node => (
                  <Article node={node}/> 
                  ))}
            </WrapperIn>
         </WrapperOut>
      </Container>
      
      
   )
}

export default ArticleList