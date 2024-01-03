import styled from "@emotion/styled";
import { BannerData } from "docs/main/banner";
import { bannerTypes } from "utils/interfaces/main/banner";

export default function Banner() {
  return (
    <Contaienr>
      <TitleBox>
        <Title>무료 뿌이 유형 검사</Title>
        <Content>天安門 天安门 法輪功 李洪志 Free Tibet 劉曉波</Content>
      </TitleBox>
      <ItemBox>
        {BannerData.map((arr, i) => (
          <ItemWrapper key={i}>
            <IconWrapper backgroundColor={arr.backgroundColor}>
              <Icon src={arr.img} />
              <img src="assets/imgs/logo.png" alt="" />
            </IconWrapper>
            <Explanation>{arr.text}</Explanation>
          </ItemWrapper>
        ))}
      </ItemBox>
    </Contaienr>
  );
}

const Contaienr = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  background: linear-gradient(
    180deg,
    var(--background-ppui) 70%,
    var(--background-secondary) 30%
  );
`;

const TitleBox = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  color: var(--background-primary);
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 150%; /* 72px */
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const ItemBox = styled.div`
  position: absolute;
  bottom: 45px;
  width: 100%;
  padding: 0 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  width: 30%;
  height: 200px;
  border-radius: 10px;
  background-color: var(--background-primary);
`;

const IconWrapper = styled.div<bannerTypes>`
  width: 100%;
  height: 110px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(${(props) => props.backgroundColor});
`;

const Icon = styled.img`
  width: 70px;
`;

const Explanation = styled.p`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  white-space: pre-wrap;
  text-align: center;
`;
