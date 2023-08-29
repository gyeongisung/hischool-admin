import React, { useState } from "react";
import { Outlet } from "react-router";
import { Aside, Content, Header, MainDiv } from "../styles/main/MainStyle";
import SideMenu from "../components/SideMenu";
import { useEffect } from "react";
import { getSchoolInfo, getSchoolLogo } from "../api/userInfoAxios";

const Main = () => {
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolName, setSchoolName] = useState(null);

  useEffect(() => {
    getSchoolInfo(setSchoolName);
    getSchoolLogo(setSchoolLogo);
  }, []);

  return (
    <MainDiv>
      <div className="wrap">
        <Aside>
          <SideMenu />
        </Aside>
        <div className="main-right">
          <Header>
            <div>
              <div className="school-logo">
                <img src={schoolLogo} alt="" />
              </div>
              <span className="school-name">{schoolName}</span>
            </div>
          </Header>
          <Content>
            <div className="content-wrap">
              <Outlet />
            </div>
          </Content>
        </div>
      </div>
    </MainDiv>
  );
};

export default Main;
