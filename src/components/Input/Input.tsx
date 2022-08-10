import React from 'react';
import styled, {css} from "styled-components";

type InputPropsType = {
  background?: boolean
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
export const StyledInput = styled.input`
  ${sharedStyles};
  width: 100%;
  background: ${(props: any) => props.background || '#F5F5F5'};
`;



