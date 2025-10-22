import React from "react";
import styled from "styled-components";

// --- STYLING DEFINITIONS ---

// Define Colors based on Emerald Green gradient and accent colors
const START_COLOR = "#062E33"; // Deep Emerald Green
const END_COLOR = "#00A36C"; // Brighter Emerald Green
const ACCENT_YELLOW = "#ffd700"; // Bright Gold/Yellow for the ribbon
const TEXT_COLOR = "#FFFFFF";
const RIBBON_TEXT_COLOR = "#333333";

const ThankYouContainer = styled.div`
  width: 100%;
  min-height: 500px;
  /* Apply the new Emerald Green gradient background */
  background: linear-gradient(90deg, ${START_COLOR} 0%, ${END_COLOR} 100%);
  color: ${TEXT_COLOR};
  display: flex;
  position: relative;
  overflow: hidden; /* Hide anything that goes outside */
`;

const ContentWrapper = styled.div`
  /* Left side content area */
  padding: 80px 5% 80px 10%;
  max-width: 60%;
  z-index: 10;
`;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.9;
  color: yellow;
`;

const Ribbon = styled.div`
  position: absolute;
  right: 0;
  top: 50%;

  padding: 15px 50px;
  background-color: ${ACCENT_YELLOW};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 20;

  /* Use ::before and ::after to create the notched/cut ribbon ends */
  &::before {
    content: "";
    position: absolute;
    left: -15px;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent ${ACCENT_YELLOW};
  }
`;

const RibbonText = styled.p`
  color: ${RIBBON_TEXT_COLOR};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
`;

// --- REACT COMPONENT ---

const ThankYou = ({ webinarTopic, nextTimeMessage }) => {
  return (
    <ThankYouContainer>
      <ContentWrapper>
        <MainHeading>
          Congratulations!
          <br /> Your DropShipping Future Starts Now.
        </MainHeading>
        <SubText>
          {webinarTopic ||
            " Over the next hour, you'll gain the insider strategies to not just start a business, but to run a fully automated, profit-protected dropshipping machine. Get ready to transform your hustle into passive wealth. We'll see you in the live session—let's make this happen!"}
        </SubText>
      </ContentWrapper>

      <Ribbon>
        <RibbonText>
          {nextTimeMessage || "See you inside the training!"}
        </RibbonText>
      </Ribbon>
    </ThankYouContainer>
  );
};

export default ThankYou;
