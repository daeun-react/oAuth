import React from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";
import { useHistory, useLocation } from "react-router-dom";
import { GoogleUser } from "utils/type";
import { ReactComponent as GoogleIcon } from "assets/google.svg";

const LogInGoogle: React.FC = () => {
  const history = useHistory();
  const location = useLocation<GoogleUser>();
  const user = location.state;

  const logoutWithGoogle = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <h2>구글 로그인 성공</h2>
      <UserInfo>
        {user.imageUrl && <img src={user.imageUrl} alt="user profile" />}
        <p>{user.name}</p>
        <p>{user.email}</p>
      </UserInfo>
      <GoogleLogout
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        render={(renderProps) => (
          <GoogleButton onClick={renderProps.onClick}>
            <GoogleIcon />
            <span>로그아웃</span>
          </GoogleButton>
        )}
        buttonText="Logout"
        onLogoutSuccess={logoutWithGoogle}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  h2 {
    font-size: 18px;
    font-weight: 600;
  }
`;

const UserInfo = styled.div`
  text-align: center;

  p {
    margin: 8px;
    font-size: 14px;
    color: #3a1d1d;
  }

  img {
    border-radius: 4px;
  }
`;

const GoogleButton = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141518;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
    fill: #3a1d1d;
  }

  span {
    color: #fff;
    font-weight: 600;
    font-size: 12pt;
  }
`;

export default LogInGoogle;
