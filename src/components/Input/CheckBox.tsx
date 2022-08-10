import styled from "styled-components";

export const CustomCheckBox = styled.input.attrs({type: "checkbox"})`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  cursor: pointer;
  &:checked {
    background: #4A67FF;
    border-radius: 2px;
  }
`;
export const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 18px;
  border: 1px solid #000000;
  border-radius: 4px;
`
export const LabelText = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #1F1F1F;;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 22px 0 40px 0;
`
