import React from "react"
import ArticleBottom from "./ArticleBottom"
import styled from "styled-components"
import * as vars from "../util/variables"

const mgn = 'margin: 3% 4.5% 0 4.5%;';


const Wrapper = styled.div`
   box-sizing: border-box;
   width: 47%;
   float: ${props => props.left ? 'left' : 'right'};
   position: relative;
   height: 630px;
`  

const Shadow = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   box-shadow: 50px 20px 50px -50px ${vars.COLOR};
`

const TitleContainer = styled.div`
   position: absolute;
   bottom: 0;
   width: 100%;
   padding-bottom: 2%;
`

const Fade = styled.div`
   position: absolute;
   background: ${vars.PRIMARY_D};
   bottom: -60%;
   left: -50%;
   width: 200%;
   height: 120%;
   filter: blur(70px);
`

const Img = styled.div`
   height: 300px;
   background: url(${props => props.url});
   background-size: cover;
   background-position: center;
   position: relative;
   overflow: hidden;
`

const Title = styled.h3`
   ${mgn}
   font-size: ${vars.FONT_XL};
`

const SubTitle = styled.h4`
   ${mgn}
   font-size: ${vars.FONT_L};
`

const Text = styled.p`
   ${mgn}
   font-weight: 100;
   overflow: hidden;
   position: relative;
   background: -webkit-linear-gradient(${vars.PRIMARY_L}, ${vars.PRIMARY_D});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const BigArticle = ({left, node}) => {
   return (
      <Wrapper left={left}>
         <Shadow/>
         <Img url={node.thumbnail.file.url}>
            <Fade/>
            <TitleContainer>
               <Title >{node.title}</Title>
               <SubTitle>{node.subtitle}</SubTitle>
            </TitleContainer>
         </Img>
         <Text>
            Both my parents are Buddhist. At home, we have this tall, huge wooden 
            Chinese altar with a Guanyin Bodhisattva statue sitting inside. When 
            I was little, I would accompany my parents to Chinese temples at least 
            once or twice a week. Usually it’s for simple prayers and offerings. 
            At times, it’s to consult the mediums there — especially when there 
            was a special  occasion like birthday, or an important examination was 
            around the corner (ugh Asian parents). Sometimes we would go to the 
            medium instead of the doctor’s when I fell sick.
         </Text>
         <ArticleBottom date={node.date} publication={node.publication} url={node.url} author={node.author}/>
      </Wrapper>
      
   )
}

export default BigArticle
