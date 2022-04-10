import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        des="Order Online For Touchless Delivery"
        backgrounImage="/images/model-s.jpg"
        leftBtnTex="Custom order"
        rightButtonText="Existing "
      />
      <Section
        title="Model Y"
        des="Order Online For Touchless Delivery"
        backgrounImage="/images/model-y.jpg"
        leftBtnTex="Custom order"
        rightButtonText="Existing "
      />
      <Section
        title="Model 3"
        des="Order Online For Touchless Delivery"
        backgrounImage="/images/model-3.jpg"
        leftBtnTex="Custom order"
        rightButtonText="Existing "
      />
      <Section
        title="Model x"
        des="Order Online For Touchless Delivery"
        backgrounImage="/images/model-x.jpg"
        leftBtnTex="Custom order"
        rightButtonText="Existing "
      />
      <Section
        title="Lowest Cost Solar Panel In America"
        des="Money-back guarantee"
        backgrounImage="/images/solar-panel.jpg"
        leftBtnTex="Order now"
        rightButtonText="Learn More "
      />
        <Section
        title="Solar For New Roofs"
        des="Solar Roof Costs Less Than a New Roof plus Solar Panels"
        backgrounImage="/images/solar-roof.jpg"
        leftBtnTex="Order now"
        rightButtonText="Learn More "
      />
      <Section
        title="Accessories"
        des=""
        backgrounImage="/images/accessories.jpg"
        leftBtnTex="Shop now"
        rightButtonText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
