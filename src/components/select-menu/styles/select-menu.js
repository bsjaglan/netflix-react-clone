import styled from "styled-components/macro";

export const Body = styled.div`
  position: relative;
`;
export const Select = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  width: 125px;

  display: flex;
  align-items: center;
  padding: 5px 8px;

  &:focus {
    outline: 1px solid white;
  }

  @media (max-width: 550px) {
    width: 100%;

    img {
      margin-left: 0;
    }

    span {
      width: 0;
      overflow: hidden;
    }
  }
`;
export const LanguageIcon = styled.img`
  width: 18px;
  filter: invert(1);
  margin-right: 8px;
`;
export const OptionList = styled(Select)`
  position: absolute;
  top: 30px;
  left: 0;
  padding: 0;

  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
`;

export const DownArrowIcon = styled.img`
  width: 10px;
  filter: invert(1);
  transform: rotate(180deg);
  margin-left: 15px;
`;

export const Option = styled.div`
  color: white;
  padding-top: 3px;
  background-color: white;
  width: 100%;
  text-align: center;

  &:hover {
    background: gray;
  }
`;
