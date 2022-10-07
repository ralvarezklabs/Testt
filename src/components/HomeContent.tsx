import { NextPage } from "next";
import { useEffect, useState } from "react";
import useModules from "../hooks/useModules";

import CommonButton from "./CommonButton";
import CommonLabel from "./CommonLabel";
import { useModule } from "../context/SelectedModuleContext";
import { Container, LabelContainer, SecondContainer, SmallContainer, TitleLabel } from "../constants/ui/const-styles";
import { IDataModels } from "../interfaces/dataToRender";



const HomeContent: NextPage<any> = () => {
  // manage modules 
  const { data } = useModules();
  const { selectedModule, setSelectedModule } = useModule();
  // manage sub modules
  const [subModules, setSubModules] = useState<string[]>();
  const [selectedSubModule, setSelectedSubModules] = useState<string>();
  //manage list users
  const [users, setUsers] = useState<string[]>();



  useEffect(() => {

  }, [selectedModule, selectedSubModule]);


  const handleClickAuth = () => {
    setSelectedModule("auth_module");
    setSubModules(Object.keys(data ? (data.auth_module ? data?.auth_module : {}) : {}));
  };

  const handleClickContent = () => {
    setSelectedModule("content_module");
    setSubModules(Object.keys(data ? (data.content_module ? data?.content_module : {}) : {}));
  };

  const handleClickModule = (module: string,selected:string) => {
    console.log(module);
    if (data) {
      for (const key in data[selected]) {
        console.log(key);
        console.log(data.auth_module[key]);
        if (key == module) {
          let arr: string[] = Object.values(data.auth_module[key]);
          setUsers(arr);
        }

      }

    }
  }

  //TODO: cambiar strings a constantes

  return (
    <>
      <Container>
        <SmallContainer>
          <CommonButton
            text="Content_module"
            handleClick={handleClickContent}
            selected={selectedModule === "content_module"}
          ></CommonButton>
          <CommonButton
            text="Auth_module"
            handleClick={handleClickAuth}
            selected={selectedModule === "auth_module"}
          ></CommonButton>
        </SmallContainer>

        <SecondContainer>
          <>
            <SmallContainer>
              {subModules?.map((module, index) => {
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
              {users?.map((user, index) => {
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
