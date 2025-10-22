import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// --- COLOR DEFINITIONS ---
const START_COLOR = "#062E33"; // Deep Emerald Green
const END_COLOR = "#00A36C"; // Brighter Emerald Green
const ACCENT_YELLOW = "#FFD700"; // Bright Gold
const TEXT_COLOR = "#FFFFFF";
const RIBBON_TEXT_COLOR = "#333333";

// --- STYLED COMPONENTS ---

const ThankYouContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, ${START_COLOR} 0%, ${END_COLOR} 100%);
  color: ${TEXT_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 80px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 60%;
  z-index: 10;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const MainHeading = styled.h1`
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubText = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${ACCENT_YELLOW};
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Ribbon = styled.div`
  background-color: ${ACCENT_YELLOW};
  padding: 18px 50px;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 20;

  @media (max-width: 900px) {
    position: relative;
    transform: none;
    margin-top: 40px;
    border-radius: 12px;
  }
`;

const RibbonText = styled.p`
  color: ${RIBBON_TEXT_COLOR};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 900px) {
    white-space: normal;
  }
`;

const BackButton = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;
  background-color: transparent;
  border: 2px solid ${ACCENT_YELLOW};
  color: ${ACCENT_YELLOW};
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${ACCENT_YELLOW};
    color: ${START_COLOR};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    padding: 10px 22px;
  }
`;

// --- COMPONENT LOGIC ---

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <ThankYouContainer>
      <ContentWrapper>
        <MainHeading>
          Congratulations!
          <br />
          Your DropShipping Future Starts Now.
        </MainHeading>
        <SubText>
          Over the next hour, you'll gain insider strategies to not just start a
          business, but to build a fully automated, profit-protected
          dropshipping system. Get ready to turn your hustle into passive
          wealth. See you live — let’s make it happen!
        </SubText>
      </ContentWrapper>

      <Ribbon>
        <RibbonText>See you inside the training!</RibbonText>
      </Ribbon>

      <BackButton onClick={() => navigate("/")}>← Back to Home</BackButton>
    </ThankYouContainer>
  );
};

export default ThankYou;
