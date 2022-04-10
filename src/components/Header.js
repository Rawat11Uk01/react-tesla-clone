import React, { useState } from "react";
import Styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { styled } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import transitions from "@material-ui/core/styles/transitions";
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href="#">MODEL S</a>

        <a href="#">MODEL 3</a>

        <a href="#">MODEL X</a>

        <a href="#">MODEL Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>

        <a href="#">Tesla Account</a>
        <CustomMenu
          onClick={() => {
            setBurgerStatus(true);
          }}
        ></CustomMenu>
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose
            onClick={() => {
              setBurgerStatus(false);
            }}
          />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = Styled.div`


  
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding:0 20px;
   top:0;
   left:0;
   right:0;
   z-index:999;
`;

const Menu = Styled.div`

display: flex;
align-items: center;
flex-wrap:wrap;
justify-content:center;
flex: 1;
padding: 0 10px;

& a{
  font-weight:600;
  text-transform: uppercase;
  padding: 0 10px;
}
}
@media(max-width: 768px){
 display: none;
}
`;

const RightMenu = Styled.div`
display: flex;
align-items: center;
& a{
  font-weight:600;
  text-transform: uppercase;
  margin-right:10px;
}
`;

const CustomMenu = Styled(MenuIcon)`
cursor: pointer;
`;

const BurgerMenu = Styled.div`

top:0;
bottom:0;
right:0;
background:white;
width: 300px;
position:fixed;
padding:20px;
display: flex;
flex-direction:column ;
/* justify-content:space-between; */
text-align: start;
transition: transform 500ms ease-in-out;
transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};

& li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);

  a{
    font-weight: 600;
  }
}
`;
const CloseWrapper = Styled.div`
display: flex;
justify-content: flex-end;
padding-right:20px ;

`;
const CustomClose = Styled(CloseIcon)`
cursor: pointer;
`;
