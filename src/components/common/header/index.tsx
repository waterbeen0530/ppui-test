import "styles/colorTheme.css";
import styled from "@emotion/styled";
import { useState } from "react";
import { defaultLogo } from "assets/imgs";

export default function Header() {
  const [language, setLanguage] = useState(true);
  const hendleChangeLanguage = () => {
    setLanguage((pre) => !pre);
  };
  return (
    <Container>
      <Logo src={defaultLogo} />
      <GNB>
        <GNBText>결과</GNBText>
        <GNBText>뿌이 유형 검사</GNBText>
        <GNBText>뿌이 유형 모음</GNBText>
        <GNBText>문의</GNBText>
      </GNB>
      <Language onClick={hendleChangeLanguage}>
        {language ? <>🇰🇷 한국어</> : <>🇻🇳 뿌이어</>}
      </Language>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 80px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-primary);
`;

const Logo = styled.img`
  width: 210px;
  cursor: pointer;
`;

const GNB = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const GNBText = styled.p`
  color: var(--text-primary);
  cursor: pointer;
`;

const Language = styled.button`
  padding: 6px 16px;
  border: none;
  border-radius: 30px;
  background-color: var(--background-primary);
  transition: 0.4s;
  &:hover {
    background-color: var(--background-hover-primary);
    cursor: pointer;
  }
`;
