import { NextPage } from "next";
import { useEffect, useState } from "react";
import useModules from "../hooks/useModules";
import styled from "styled-components";
import CommonButton from "./CommonButton";
import CommonLabel from "./CommonLabel";
import { useModule } from "../context/SelectedModuleContext";

interface Ret {
  auth_module: any;
  content_module: any;
}

const HomeContent: NextPage<any> = () => {
  const { data } = useModules();
  const { selectedModule, setSelectedModule } = useModule();
  const [newData, setNewData] = useState<any>();
  const [modules, setModules] = useState<any>();

  //TODO: ESTA BIEN HACER TANTOS?
  const Container = styled.div`
    margin: 0 auto;
    height: 600px;
    border-radius: 10px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    width: 80%;
    z-index: 4;
    margin-top: 3%;
  `;

  const SecondContainer = styled.div`
    margin: 0 auto;
    height: 400px;
    border-radius: 10px;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    width: 80%;
    z-index: 4;
    margin-top: 3%;
  `;

  const SmallContainer = styled.div`
    background-color: grey;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-style: solid;
    border-color: black;
    width: 100%;
    height: 50px;
    display: flex;
    column-gap: 15px;
    padding-left: 15px;
  `;

  const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 40%;
    padding-top: 5px;
  `;

  const TitleLabel = styled.div`
    width: 100%;
    margin: 15px 20px;
    font-weight: bolder;
  `;

  useEffect(() => {
    //createJSONStructure(items);
    setNewData(data);
    //setModules(newData[selectedModule]);
  }, [data]);

  let users = ["User 1", "User 2", "User 3"];
  let modules2 = ["Module 1", "Module 2", "Module 3"];
  //let modules = newData ? newData.content_module : ["Hola"];

  const handleClickAuth = () => {
    setSelectedModule("Auth_module");
    setModules(newData?.auth_module);
  };

  const handleClickContent = () => {
    setSelectedModule("Content_module");
    setModules(newData?.content_module);
  };

  //TODO: cambiar strings a constantes

  return (
    <>
      <Container>
        <SmallContainer>
          <CommonButton
            text="Content_module"
            handleClick={handleClickContent}
            selected={selectedModule === "Content_module"}
          ></CommonButton>
          <CommonButton
            text="Auth_module"
            handleClick={handleClickAuth}
            selected={selectedModule === "Auth_module"}
          ></CommonButton>
        </SmallContainer>

        <SecondContainer>
          <>
            <SmallContainer>
              {/* {modules.map((module, index) => {
                return (
                  <CommonButton
                    text={module}
                    handleClick={handleClickAuth}
                    selected={false}
                    key={index}
                  ></CommonButton>
                );
              })} */}
            </SmallContainer>
            <TitleLabel>Number of users in Module 1:</TitleLabel>
            <LabelContainer>
              {users.map((user, index) => {
                return <CommonLabel key={index} text={user}></CommonLabel>;
              })}
            </LabelContainer>
          </>
        </SecondContainer>
      </Container>
    </>
  );
};

export default HomeContent;
