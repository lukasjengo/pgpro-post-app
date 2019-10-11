import styled from 'styled-components';

import variables from '../../styles/variables';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 500;
`;

export const StyledForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 900;
  transform: translate(-50%, -50%);
  background-color: ${variables.colorBlack};
  border-radius: 3px;
  padding: 2rem 3.5rem;
  font-size: 1.5rem;

  h4 {
    text-align: center;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    color: ${variables.colorPrimaryDark};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.7rem;

  label {
    color: ${variables.colorWhite};
    margin-right: 1.5rem;
    min-width: 5rem;
  }

  input,
  textarea {
    box-sizing: content-box;
    flex: 1;
    border: none;
    border-radius: 3px;
    background-color: ${variables.colorGreyLight};
    color: ${variables.colorBlack};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    &:first-of-type {
      margin-left: auto;
    }
    &:last-of-type {
      margin-left: 2rem;
    }
  }
`;
