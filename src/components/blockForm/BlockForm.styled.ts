import styled from "styled-components";

export const WrapperForm = styled.form`
  width: 31%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px 0px #35323824;
`;
export const ButtonSubmit = styled.button<{ valid: boolean; loader: boolean }>`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: ${({ valid }) => (valid === false ? `#828282` : `#fff`)};
  background: ${({ valid }) => (valid === false ? `#e3e3e3` : `#0086A8;`)};
  border: none;
  cursor: ${({ valid }) => (valid === true ? `pointer` : ``)};

  &:hover {
    background: ${({ valid, loader }) =>
      valid === true && loader === false ? `#007693` : ``};
  }

  &:active {
    background: ${({ valid }) => (valid === true ? `#00657E` : ``)};
  }
`;

export const Loader = styled.img`
  width: 30px;
  heigth: 30px;
`;