import styled from "styled-components/macro";

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin: auto;
`;

export const Group = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  background-color: #e50914;
  color: white;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  height: 56px;
  font-size: 24px;
  border-radius: 0.25rem;
  border: 0;

  img {
    margin-left: 10px;
    width: 24px;
    @media (max-width: 960px) {
      width: 16px;
    }
  }

  &:hover {
    opacity: 92%;
  }

  @media (max-width: 550px) {
    font-size: 18px;
    height: 40px;
  }

  
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  display: flex;

  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 22px;

  }
`;
