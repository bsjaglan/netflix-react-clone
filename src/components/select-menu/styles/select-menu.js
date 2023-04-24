import styled from "styled-components/macro";

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
  color: #737373;
  padding-top: 3px;
  background-color: white;
  width: 100%;
  text-align: center;

  &:hover {
    background: gray;
    color: white;
  }
`;

export const Body = styled.div`
  position: relative;

  // Different styles as per different classes
  &.sign-up {
    background-color: #ffffff;

    ${Select} {
      width: 136px;
      height: 48px;
      border-radius: 2px;
    }

    ${OptionList} {
      top: 47px;
    }
    span {
      color: #737373;
      width: 100%;
    }
    img {
      filter: invert(0);
    }
  }
`;
