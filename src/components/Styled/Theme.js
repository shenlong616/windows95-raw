import styled from "styled-components";

export const StyledTheme = styled.div`
  ${(props) => {
    // console.log(props);

    return `${props.cssPropName}: ${props.theme[props.colorName]}`;
  }}};
`;
