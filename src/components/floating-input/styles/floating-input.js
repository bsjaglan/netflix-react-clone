import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({margin}) => margin};
`;

export const Label = styled.label`
  position: absolute;

  font-size: 16px;
  pointer-events: none;
  color: gray;

  // To center the placeholder inside label
  display: flex;
  align-items: center;

  // To center the label inside parent body
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 50%;

  // To align the left side of input with label
  padding-left: 23px;

  // Transform smoothness and origin
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  // When input has some value in it
  ${({isFilled}) => isFilled && `transform: translate(0, -2px) scale(0.7);`}
`;

export const Input = styled.input`
  color: white;
  height: 56px;
  border-radius: 4px;
  padding: 24px 16px 4px 16px;
  font-size: 16px;
  border: 1px solid gray;
  background-color: transparent;

  // When Input is in focus state do some css on Label
  &:focus + ${Label} {
    transform: translate(0, -2px) scale(0.7);
  }

  // When input have some errors and touched as well
  &.input-error {
    border: 1px solid red;

    &.sign-in-form {
      border-bottom: 2px solid #e87c03;
    }
  }

  // Media queries as per different classes

  &.opt-form {
    @media (max-width: 550px) {
      height: 40px;
      font-size: 14px;
    }
  }

  &.sign-in-form {
    background-color: #333333;
    border: none;
  }
`;

export const Body = styled.div`
  position: relative;

  // Logic for some css modification from outside
  & ${Input} {
    width: ${({width}) => width};
    maxwidth: ${({maxWidth}) => maxWidth};
    height: ${({height}) => height};
  }
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  color: red;
  font-size: 13px;

  &.sign-in-form{
    color: orange;
  }
`;
