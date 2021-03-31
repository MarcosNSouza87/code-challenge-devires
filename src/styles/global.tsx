import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }
    body{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size:1rem;
        //background:#3289e0;
    }

`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  background: #fff;
  color: #2c2c2c;
  width: 100%;
  align-items: center;
  padding: 20px;
  justify-content: center;
  font-size: 1.7rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

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
  animation-delay: 2s;
  :hover {
    cursor: pointer;
    background-color: #fff;
    color: #3289e0;
  }
`;
