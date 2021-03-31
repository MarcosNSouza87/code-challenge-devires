import styled from 'styled-components';

// componente form

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #d1e5f5;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  input {
    background-color: #fff;
    margin: 0 10px;
    padding-left: 10px;
    height: 42px;
    border: 2px solid #3289e0;
    border-radius: 5px;
    font-size: 1rem;

    & + input {
      width: 420px;
    }
    @media (max-width: 768px) {
      margin: 5px;
      width: 100%;
      & + input {
        width: 100%;
      }
    }
  }
`;
export const Input = styled.input``;

export const Button = styled.button`
  background-color: #3289e0;
  color: #fff;
  border: none;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  font-size: 1rem;
  :hover {
    cursor: pointer;
    background-color: #225d97;
    color: #ffffff;
  }
`;
