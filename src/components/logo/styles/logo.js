import styled from "styled-components/macro";

const handleSize = (size) => {
  if (size === "small") {
    return "120px";
  } else if (size === "medium") {
    return "145px";
  } else if (size === "large") {
    return "200px";
  } else return size;
};

export const Image = styled.img`
  cursor: pointer;
  padding-top: 5px;
  width: 145px;
  width: ${({size}) => handleSize(size)};

  ${({mediaQuery}) => `
    @media(max-width: ${mediaQuery?.media}){
      width: ${handleSize(mediaQuery?.newSize)};
  }
  `}
`;
