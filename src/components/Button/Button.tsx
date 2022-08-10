import styled, {css} from "styled-components";

type ButtonProps = {
  primary?: boolean
  disabled?: boolean
}
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
`

export const Button = ({...props}) => {
  return <StyledButton {...props}/>;
};

