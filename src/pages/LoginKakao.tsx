import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { KakaoUser } from "utils/type";
import { ReactComponent as KakaoIcon } from "assets/kakao.svg";

declare global {
  interface Window {
    Kakao: any;
  }
}
const { Kakao } = window;

const LogInKakao: React.FC = () => {
  const history = useHistory();
  const location = useLocation<KakaoUser>();
  const user = location.state;

  const logoutWithKaKao = () => {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.Auth.logout(() => {
        history.push("/");
      });
    }
  };

  return (
    <Wrapper>
      <h2>카카오 로그인 성공</h2>
      <UserInfo>
        {!user.profile.is_default_image && (
          <img src={user.profile.thumbnail_image_url} alt="user profile" />
        )}
        <p>{user.profile.nickname}</p>
        <p>{user.email}</p>
      </UserInfo>
      <KakaoButton onClick={logoutWithKaKao}>
        <KakaoIcon />
        <span>로그아웃</span>
      </KakaoButton>
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

const KakaoButton = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7d503;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
    fill: #3a1d1d;
  }

  span {
    color: #3a1d1d;
    font-weight: 600;
    font-size: 12pt;
  }
`;

export default LogInKakao;
