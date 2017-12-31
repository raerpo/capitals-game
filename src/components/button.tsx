import * as React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 15px 0;
  border: 2px solid #fff;
  margin: 20px auto;
  color: #fff;
  border-radius: 15px;
  font-size: 1em;
  text-align: center;
  width: 250px;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0, 0, 0.01, 0.7);
  &:hover {
    color: black;
  }
`

interface ButtonProps {
  text: string
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  return <ButtonWrapper onClick={props.onClick} >
    { props.text }
  </ButtonWrapper>
}

export default Button;