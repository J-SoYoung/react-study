import React from 'react';
import styled, {css}from 'styled-components';
import { darken, lighten, animation } from 'polished';

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 1rem;
  box-sizing: border-box;
  margin-top: 20px;
  font-size: 1rem;
  ${props => {
    const selected = props.theme.palette[props.color]
    return css`
      background:${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}

  & + & {
    margin-left: 1rem;
  }
`
function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color : 'blue'
}
export default Button;