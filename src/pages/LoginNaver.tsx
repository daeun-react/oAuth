import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { NaverUser } from "utils/type";
import { ReactComponent as NaverIcon } from "assets/naver.svg";
import { useHistory } from "react-router";

const LogInNaver: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<NaverUser | null>(null);

  const deleteCookie = (name: string) => {
    let date = new Date("2019-01-01").toUTCString();
    document.cookie = `${name}=; expires=${date}`;
  };

  const logoutWithNaver = () => {
    deleteCookie("NID_SES");
    history.push("/");
  };

  useEffect(() => {
    async function getUser() {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      try {
        const {
          data: { response },
        } = await axios.get(`/v1/nid/me`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        setUser(response);
      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  }, []);

  if (!user) return null;
  return (
    <Wrapper>
      <h2>네이버 로그인 성공</h2>
      <UserInfo>
        {<img src={user.profile_image} alt="user profile" />}
        <p>{user.name}</p>
        <p>{user.email}</p>
      </UserInfo>
      <NaverButton onClick={logoutWithNaver}>
        <NaverIcon />
        <span>로그아웃</span>
      </NaverButton>
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
    width: 80px;
    height: 80px;
    border-radius: 4px;
  }
`;

const NaverButton = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #03c759;

  svg {
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

export default LogInNaver;
