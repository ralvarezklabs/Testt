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
  const [modules, setModules] = useState<string[]>();

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
    setNewData(data);
    //TODO: es selected module
    setModules(Object.keys(data?.auth_module));
  }, [data]);

  let users = ["User 1", "User 2", "User 3"];
  let modules2 = ["Module 1", "Module 2", "Module 3"];
  // const dummy: Ret = {
  //   content_module: {
  //       "authz.provider_4": [
  //           "User 0",
  //           "User 1",
  //           "User 6",
  //           "User 7",
  //           "User 12",
  //           "User 19"
  //       ],
  //       "authz.provider_3": [
  //           "User 2",
  //           "User 3",
  //           "User 5",
  //           "User 10",
  //           "User 11",
  //           "User 18"
  //       ],
  //       "authz.provider_1": [
  //           "User 4",
  //           "User 14"
  //       ],
  //       "authz.provider_2": [
  //           "User 8",
  //           "User 9",
  //           "User 13",
  //           "User 15",
  //           "User 16",
  //           "User 17"
  //       ]
  //   },
  //   auth_module: {
  //     "authn.provider_3": [
  //         "User 0",
  //         "User 7",
  //         "User 11",
  //         "User 12",
  //         "User 15"
  //     ],
  //    "authn.provider_2": [
  //         "User 1",
  //         "User 6",
  //         "User 8",
  //         "User 10",
  //         "User 13",
  //         "User 14",
  //         "User 16",
  //         "User 18"
  //     ],
  //     "authn.provider_4": [
  //         "User 2",
  //         "User 5",
  //         "User 9"
  //     ],
  //     "authn.provider_1": [
  //         "User 3",
  //         "User 4",
  //         "User 17",
  //         "User 19"
  //     ]
  // }

  //let modules = newData ? newData.content_module : ["Hola"];

  const handleClickAuth = () => {
    setSelectedModule("Auth_module");
    setModules(newData.auth_module);
  };

  const handleClickContent = () => {
    setSelectedModule("Content_module");
    setModules(newData.content_module);
  };

  const handleClickModule = (module: string) => {
    console.log(newData["auth_module"][module]);
  }

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
              {modules?.map((module, index) => {
                return (
                  <CommonButton
                    text={module}
                    handleClick={() => handleClickModule(module)}
                    selected={false}
                    key={index}
                  ></CommonButton>
                );
              })}
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
