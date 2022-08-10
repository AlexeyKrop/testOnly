import React from 'react';
import styled, {css} from "styled-components";

export const CheckBox = styled.input.attrs({type: "checkbox"})`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 4px;
`;


export const LabelText = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #1F1F1F;
  margin-left: 14px;
;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 22px 0 40px 0;
`
