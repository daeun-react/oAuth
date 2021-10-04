import React from "react";
import styled from "styled-components";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { ReactComponent as GoogleIcon } from "assets/google.svg";

const GoogleOAuth: React.FC = () => {
  const googleLogin = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  };

  const onFailure = (response: GoogleLoginResponse) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      render={(renderProps) => (
        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <GoogleIcon />
          <span>Google Login</span>
        </GoogleButton>
      )}
      buttonText="Login"
      onSuccess={googleLogin}
      onFailure={onFailure}
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
  background-color: #ffa7a7;

  svg {
    margin-right: 10px;
  }

  span {
    color: white;
    font-size: 12pt;
  }
`;
