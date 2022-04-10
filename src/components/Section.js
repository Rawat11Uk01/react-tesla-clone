import React from "react";
import Styled from "styled-components";
function Section({ title, des, backgrounImage, leftBtnTex, rightButtonText }) {
  return (
    <Wrap bgImage={backgrounImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{des}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnTex}</LeftButton>
          {rightButtonText &&  <RightButton>{rightButtonText}</RightButton>}
         
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = Styled.div`

max-width: 100vw;
height: 100vh;
background-position: center;

background-repeat: no-repeat;
background-size: cover;


display:flex;
flex-direction:column;
justify-content:space-between;
align-items: center;
background-image: ${(props) => `url("${props.bgImage}")`}
`;

const ItemText = Styled.div`

padding-top: 15vh;
text-align: center; 



`;

const ButtonGroup = Styled.div`
display: flex;
margin-bottom: 30px;
gap:20px;
@media (max-width: 768px){
    flex-direction:column ;
}
`;

const LeftButton = Styled.div`
background-color: rgba(23,36,32,0.8);
height: 40px;
width: 256px;
color: white;
display:flex; 
align-items : center;
justify-content: center; 
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer; 
`;
const RightButton = Styled(LeftButton)`
background:white ;
opacity: 0.65;
color:black;
`;

const DownArrow = Styled.img`


height: 40px;
animation: animateDown infinite 1.5s ease-in-out;

`;

const Buttons = Styled.div`

display: flex;
flex-direction: column;
gap:20px;

`;
