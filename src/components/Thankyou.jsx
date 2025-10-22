import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const START_COLOR = "#062E33";
const END_COLOR = "#00A36C";
const ACCENT_YELLOW = "#FFD700";
const TEXT_COLOR = "#FFFFFF";
const RIBBON_TEXT_COLOR = "#333333";

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

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  z-index: 20;

  @media (max-width: 900px) {
    align-items: center;
    margin-top: 40px;
  }
`;

const RibbonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ACCENT_YELLOW};
  padding: 18px 50px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  text-align: center;
  max-width: 320px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 280px;
    padding: 16px 24px;
  }
`;

const RibbonText = styled.p`
  color: ${RIBBON_TEXT_COLOR};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const WhatsAppButton = styled.a`
  background-color: #25d366;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #1ebc5d;
    transform: translateY(-3px);
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

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      window.fbq("init", "1459056298504694");
    }
    window.fbq("track", "CompleteRegistration");
  }, []);

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

      <RightSection>
        <RibbonBox>
          <RibbonText>See you inside the training!</RibbonText>
          <WhatsAppButton
            href="https://chat.whatsapp.com/GjhxmEUxbcnI00lx31lgTO?mode=wwt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our WhatsApp Community
          </WhatsAppButton>
        </RibbonBox>
      </RightSection>

      <BackButton onClick={() => navigate("/")}>← Back to Home</BackButton>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1459056298504694&ev=CompleteRegistration&noscript=1"
          alt="fb pixel"
        />
      </noscript>
    </ThankYouContainer>
  );
};

export default ThankYou;
