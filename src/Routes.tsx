import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "App";
import LogInGoogle from "pages/LogInGoogle";
import LogInKakao from "pages/LoginKakao";
import LogInNaver from "pages/LoginNaver";
import LogInFacebook from "pages/LoginFacebook";

const Routes: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path={RouterPath.HOME} component={App} />
            <Route exact path={RouterPath.GOOGLE} component={LogInGoogle} />
            <Route exact path={RouterPath.KAKAO} component={LogInKakao} />
            <Route exact path={RouterPath.NAVER} component={LogInNaver} />
            <Route exact path={RouterPath.FACEBOOK} component={LogInFacebook} />
          </Switch>
        </Router>
      </Wrapper>
    </Container>
  );
};

export default Routes;

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

const RouterPath = {
  HOME: "/",
  GOOGLE: "/google",
  KAKAO: "/kakao",
  NAVER: "/naver",
  FACEBOOK: "/facebook",
};
