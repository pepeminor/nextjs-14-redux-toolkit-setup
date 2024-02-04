import styled from "styled-components";

export const WrapPage = styled.div`
  background-color: ${(props) => props.theme.backgrounds.main};
  min-height: 100vh;
`;

export const PadWrap = styled.div`
  margin: auto;
  max-width: 630px;
  border-radius: 24px;
  background-color: white;
  padding: 24px;
`;

export const PCss = styled.p`
  color: ${(props) => props.theme?.gray_3};
  /* @media screen and (max-width: 768px) {
    color: red;
  } */
`;

export const ULCss = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_2};
  padding-bottom: 12px;
`;

interface LICssProps {
  $isActive: boolean;
  theme: {
    color: string;
    yellow: string;
  };
}

export const LICss = styled.li<{
  $isActive: boolean;
}>`
  font-weight: bold;
  padding: 8px 24px;
  border-radius: 30px;
  color: ${(props) => props.theme.colors.gray_3};
  background-color: ${(props: any) =>
    props.$isActive ? props.theme.colors.yellow : "transparent"};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

// export const CSSInput = styled.input((props) => ())

export const WrapInput = styled.div`
  position: relative;
  margin-bottom: 16px;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  padding: 16px;
  border-radius: 12px;
  .wrapValue {
    display: flex;
    padding: 8px 0;
    justify-content: space-between;
  }
  .value {
    p {
      margin-left: 4px;
    }
    display: flex;
    align-items: center;
  }
  .dataReceive {
    font-size: 32px;
  }
  input,
  input[type="number"]:focus {
    width: 100%;
    font-size: 32px;
    padding: 0;
    outline: none;
    border: none;
    -webkit-box-shadow: none;
    -webkit-appearance: none;
  }

  .arrowDown {
    position: absolute;
    background-color: white;
    width: auto;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid black;
    z-index: 1;
    text-align: center;
    padding: 8px;
    border-radius: 50%;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const CSSButton = styled.button<{
  $width?: string;
  $bgColor?: string;
}>`
  background-color: ${(props) => props.$bgColor ?? props.theme.colors.yellow};
  font-weight: bold;
  text-align: center;
  width: ${(props: any) => props.$width ?? "100%"};
  padding: 8px;
  border-radius: 24px;
  transition: all 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

export const CSSWrapTable = styled.div<{
  $widthLiTag?: string;
}>`
  margin-bottom: 24px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 16px;
  }

  .wrapTable .borderLine {
    border-bottom: 1px solid black;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }

  @media screen and (max-width: 640px) {
    .wrapTable .borderLine {
      border-bottom: none;
    }
  }

  .wrapTable {
    /* min-width: 630px; */
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    .titleTable.borderLine li {
      color: ${(props) => props.theme.colors.gray_3};
    }
    .titleTable {
      display: flex;
      padding: 8px 0;
      align-items: center;
      justify-content: space-between;
      line-height: 24px;
      li {
        min-width: ${(props: any) => props.$widthLiTag ?? `130px`};
        display: flex;
        word-break: break-word;
      }
    }
  }
`;
