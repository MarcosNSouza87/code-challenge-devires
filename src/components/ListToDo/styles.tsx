import styled from 'styled-components';

// listItems
export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 700px;
  max-width: 700px;
  display: flex;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    min-height: 100px;
    width: 100%;
    margin: 10px 0;
    background-color: #d1e5f5;
    border-radius: 5px;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  li > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 768px) {
      align-items: center;
      margin: 5px;
    }
  }
  li > div > strong {
    font-size: 15px;
    margin-bottom: 5px;
    color: #2c2c2c;
  }
  li > div > p {
    max-width: 500px;
    color: #3d3d3d;
  }
  li > div.group-button {
    display: flex;
    flex-direction: row;
  }
  li > div.group-button > button {
    margin: 0px 3px;
  }
`;

export const Button = styled.button`
  background-color: #d1e5f5;
  color: #3289e0;
  border: 2px solid #3289e0;
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
    background-color: #ebf3fa;
    color: #3289e0;
  }
`;
