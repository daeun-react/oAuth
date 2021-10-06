import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { KakaoUser } from "utils/type";
import { ReactComponent as KakaoIcon } from "assets/kakao.svg";
import { KAKAO_PROFILE_REQUEST_URL, RouterPath } from "utils/constants";

declare global {
  interface Window {
    Kakao: any;
  }
}
const { Kakao } = window;

const KakaoOAuth: React.FC = () => {
  const history = useHistory();

  const loginWithKaKao = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject("Kakao 인스턴스 없음!");
        }

        Kakao.Auth.login({
          scope: "account_email profile_image profile_nickname",
          success: function (auth: object) {
            Kakao.API.request({
              url: KAKAO_PROFILE_REQUEST_URL,
              success: (res: any) => {
                const kakao_account: KakaoUser = {
                  email: res.kakao_account.email,
                  profile: res.kakao_account.profile,
                };

                history?.push({
                  pathname: RouterPath.KAKAO,
                  state: kakao_account,
                });
              },
            });
          },

          fail: (err: object) => {
            console.error("fail", err);
          },
        });
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <KakaoButton onClick={loginWithKaKao}>
      <KakaoIcon />
      <span>카카오 계정으로 로그인</span>
    </KakaoButton>
  );
};

export default KakaoOAuth;

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
