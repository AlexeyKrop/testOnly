
import styled from "styled-components";
type ButtonProps =  {
    primary?: boolean;
    disabled: boolean;
}
export const Button = styled.button<ButtonProps>`
  background: ${props => props.primary ? "#4A67FF" : "FFF"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  disabled:  disabled;
  max-width: 640px;
  width: 100%;
  padding: 19px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`;
// const Button = () => {
//   return (
//     <div>
//
//     </div>
//   );
// };
//
// export default Button;