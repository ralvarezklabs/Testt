import { NextPage } from "next";
import styled from "styled-components";

interface Props {
  text: string;
  handleClick: () => void;
  selected?: boolean;
}

const CommonButton: NextPage<Props> = ({
  text,
  handleClick,
  selected,
}: Props) => {
  //background-color: ${(props) => theme[props.theme].default};

  const Button = styled.button`
    background-color: ${(props) => (selected ? "purple" : "blue")};
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    outline: 0;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: purple;
    }
  `;

  return (
    <>
      <Button onClick={handleClick}>{text}</Button>
    </>
  );
};

export default CommonButton;
