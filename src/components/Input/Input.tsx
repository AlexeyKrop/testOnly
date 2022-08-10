import styled, {css} from "styled-components";
import warning from '../../warning.svg'

type InputPropsType = {
  background?: boolean,
  border?: string
}
const sharedStyles = css`
  max-width: 640px;
  padding: 20px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;
export const StyledError = styled.div`
  color: #E26F6F;
  margin-top: 8px;
  margin-bottom: 20px;
`;
export const StyledInput = styled.input<InputPropsType>`
  ${sharedStyles};
  width: 100%;
  border: ${(props: any) => props.border || 'none'};
  background: ${(props: any) => props.background || '#F5F5F5'};
`;
const StyledContainerError = styled.div`
  ${sharedStyles};
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #E26F6F;
  margin-bottom: 27px;
  background: ${(props: any) => props.background || '#F5E9E9'};
`;
const TitleStyle = styled.span`
  margin-left: 10px`


export const ContainerError = (props: any) => {
  return <StyledContainerError>
    <img className={'image'} src={warning} alt="warn"/>
    <TitleStyle>{props.children}</TitleStyle>
  </StyledContainerError>
}




