import React from "react";
import styled from "styled-components";
import GoogleOAuth from "components/oauth/GoogleOAuth";
import KakaoOAuth from "components/oauth/KakaoOAuth";

const App: React.FC = () => {
  return (
    <>
      <Top>
        <h1>OAuth Test(Sign In)</h1>
      </Top>
      <Login>
        <GoogleOAuth />
        <KakaoOAuth />
      </Login>
    </>
  );
};

export default App;

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
