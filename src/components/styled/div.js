import styled from "styled-components";

export const Div = styled.div`
  ${(props) => {
    // console.log(props);

    return `${props.cssPropName}: ${props.theme[props.colorName]}`;
  }}};
`;
