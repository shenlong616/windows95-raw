import styled from "styled-components";

let Theme = styled.div`
  ${(props) => console.log(props)}
`;

Theme = styled.div`
  ${(props) => props.cssPropName}: ${(props) =>
    props.theme[props.themeColorName]};
`;

export { Theme };
