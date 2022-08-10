import styled from "styled-components";

export const CustomCheckBox = styled.input.attrs({type: "checkbox"})`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props: any) => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
  transition: all 150ms;
  

  
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
