import styled from "styled-components";

export const Theme = styled.div`
  ${(props) => props.cssPropName}: ${(props) => props.theme[props.colorName]};
`;
