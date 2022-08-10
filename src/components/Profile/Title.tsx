import styled from "styled-components";
import {ReactNode} from "react";

export const Title = styled.p`
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 50px;
`;
export const SpanStyled = styled.span`
  font-size: 40px;
`
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const UserName = (props: {children: ReactNode}) => {
    return(
      <>
        <Title><SpanStyled>Здравствуйте,</SpanStyled>{props.children}</Title>
      </>
    )
}