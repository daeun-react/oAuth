import React from "react";
import styled from "styled-components";
import GoogleOAuth from "components/oauth/GoogleOAuth";

const App: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>OAuth Test(Sign In)</h1>
        </Top>
        <Login>
          <GoogleOAuth />
        </Login>
      </Wrapper>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  border: 2px solid grey;
  box-shadow: 5px -5px #bdbdbd;
`;

const Top = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 30px;
    color: #5d5d5d;
  }
`;

const Login = styled.div`
  height: calc(500px - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
