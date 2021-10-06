import React from "react";
import styled from "styled-components";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import { useHistory } from "react-router-dom";
import { RouterPath } from "utils/constants";
import { ReactComponent as GoogleIcon } from "assets/google.svg";
import { GoogleUser } from "utils/type";

const GoogleOAuth: React.FC = () => {
  const history = useHistory();

  const googleLoginSuccess = (res: any) => {
    const user: GoogleUser = res.profileObj;
    history.push({ pathname: RouterPath.GOOGLE, state: user });
  };

  const googleLoginFailure = (err: GoogleLoginResponse) => {
    console.log(err);
  };

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      render={(renderProps) => (
        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <GoogleIcon />
          <span>구글 계정으로 로그인</span>
        </GoogleButton>
      )}
      buttonText="Login"
      onSuccess={googleLoginSuccess}
      onFailure={googleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleOAuth;

const GoogleButton = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141518;

  svg {
    margin-right: 10px;
  }

  span {
    color: #fff;
    font-weight: 600;
    font-size: 12pt;
  }
`;
