import styled from "styled-components";

export const CustomCheckBox = styled.input.attrs({type: "checkbox"})`
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: inline-flex;
  align-items: center;
  user-select: none;
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &:checked{
    border-color: #0b76ef;
    background-color: #0b76ef;
  }
`;

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
