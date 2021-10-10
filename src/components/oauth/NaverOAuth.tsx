import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as NaverIcon } from "assets/naver.svg";

declare global {
  interface Window {
    naver: any;
  }
}
const { naver } = window;

const NaverOAuth = () => {
  const naverRef = useRef<HTMLDivElement>(null);

  const loginWithNaver = () => {
    if (naverRef && naverRef.current) {
      const element: HTMLElement = naverRef.current.children[0] as HTMLElement;
      element.click();
    }
  };

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: `${window.location.origin}/naver`,
      callbackHandle: true,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 50 },
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <>
      <div ref={naverRef} id="naverIdLogin" style={{ display: "none" }}>
        네이버 계정으로 로그인
      </div>
      <NaverButton onClick={loginWithNaver}>
        <NaverIcon />
        <span>네이버 계정으로 로그인</span>
      </NaverButton>
    </>
  );
};

export default NaverOAuth;

const NaverButton = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03c759;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
    fill: #03c759;
  }

  span {
    color: #fff;
    font-weight: 600;
    font-size: 12pt;
  }
`;
