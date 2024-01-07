import styled from "@emotion/styled";

export default function Question() {
  return (
    <Container>
      <Wrpapper>
        <Statement>나는 공산주의를 지지한다.</Statement>
        <ChoiceBox>
          <Consent>동의</Consent>
          <RadioBox>
            <RadioWrapper>
              <RadioItem type="radio" />
            </RadioWrapper>
          </RadioBox>
          <Disagree>비동의</Disagree>
        </ChoiceBox>
      </Wrpapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 60px 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrpapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--border-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Statement = styled.p`
  color: var(--text-primary);
  font-size: 24px;
  font-weight: 600;
  line-height: 150%; /* 36px */
`;

const ChoiceBox = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const Consent = styled(Text)`
  color: var(--button-primary);
`;

const Disagree = styled(Text)`
  color: var(--button-ppui);
`;

const RadioBox = styled.div`
  margin: 0 60px;
`;

const RadioWrapper = styled.label``;

const RadioItem = styled.input``;
