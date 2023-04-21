import {Link} from "react-router-dom";
import styled from "styled-components/macro";

const defaultImg = `images/header/header-background.jpg`;

const handleBg = (src, gradient) =>
  src || (defaultImg && gradient)
    ? `linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  ), url(${src || defaultImg})`
    : `url(${src || defaultImg})`;

export const Body = styled.div`
  width: 100%;
  aspect-ratio: 16/9;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${({src, gradient}) => handleBg(src, gradient)};

  // Specific css for homepage
  &.home {
    background-size: cover;
    height: 95vh;
    border-bottom: 8px solid #222;
  }
  &.sign-in {
    height: 100vh;
    background-size: cover;

  }

  @media (min-width: 1080px) {
    background-size: cover;
    height: 95vh;
  }
`;

export const DarkFilter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${({darkFilter}) => darkFilter && `background: rgb(0 0 0 / 40%);`}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vh;
  gap: ${({gap}) => gap};
  margin: 25px 5%;
  width: 100%;
  max-width: 1200px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({direction}) => direction};
`;
export const Group = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 960px) {
    font-size: 32px;
    font-weight: 700;
  }
`;
export const SubTitle = styled.div`
  font-size: 24px;
  text-align: center;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;
export const SignInBtn = styled(Link)`
  display: flex;
  cursor: pointer;
  background-color: rgb(193, 17, 25);
  align-items: center;
  padding: 6px 20px;
  border-radius: 0.25rem;
  border: 0;
  text-decoration: none;

  &:hover {
    background-color: rgba(193, 17, 25, 0.8);
  }
`;
