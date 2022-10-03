import { NextPage } from "next";
import styled from "styled-components";

interface Props {
  text: string,
}

const CommonLabel: NextPage<Props> = (props: Props) => {
  const Label = styled.label`
  background-color: purple;
  width: 90px;
  height: 40px;
  color: white;
  line-height: 40px;
  border-radius: 10px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  text-align: center;
  transition: ease background-color 250ms;
  &:hover {
    background-color: blue;
  }
`;
  return (
    <>
      <Label>{props.text}</Label>
    </>
  );
};

export default CommonLabel;

