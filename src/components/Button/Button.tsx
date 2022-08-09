import styled, {css} from "styled-components";

type ButtonProps = {
  primary?: boolean
  disabled?: boolean
}
// export const Button = styled.button<ButtonProps>`
//   background: ${props => props.primary ? "#4A67FF" : "FFF"};
//   color: ${props => props.primary ? "white" : "palevioletred"};
//   disabled:  disabled;
//   max-width: 640px;
//   width: 100%;
//   padding: 19px;
//   border-radius: 8px;
//   border: none;
//   outline: none;
//   cursor: pointer;
// `;

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 19px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  &:focus {
    outline: none;
  }

  ${props => props.primary && css`
    color: ${(props: any) => props.color || 'white'};
    background: ${(props: any) => !props.disabled ? props.background : '#99A9FF'};
    width: ${(props: any) => props.width || '640px'};
  `},
  ${props => props.disabled && css`
    background: #99A9FF
  `
  }
`

export const Button = (props: any) => {
  console.log(props)
  return <StyledButton {...props}/>;
};

