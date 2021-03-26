import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const Header = styled.header`
    display:flex;
    background:#2c2c2c;
    color:#fff;
    width:100%;
    align-items:center;
    padding:20px;
    justify-content:center;
    font-size:1.7rem;
`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

// componente form 

export const Form = styled.form`
    display:flex;
    flex-direction:row;
    padding:20px;
    background-color:#d1e5f5;
    width:100%;    
    justify-content: center;

    input{
        background-color:#fff;
        margin:0 10px;
        padding-left:10px;
        height: 40px;
        border:2px solid #3289e0;
        border-radius:5px;
        font-size:1rem;
    }
    button{
        background-color:#3289e0;
        color:#fff;
        border:none;
        border-radius:5px;
        height: 40px;
        width:100px;
        font-size:1rem;
    }
`;
export const Button = styled.button`
    background-color:#3289e0;
    color:#fff;
    border:none;
    border-radius:5px;
    height: 40px;
    width:100px;
    font-size:1rem;
`;

// listItems 
export const ContainerList = styled.div`
    background-color
`;
export const List = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    width: 500px;
    max-width: 700px;
    display: flex;
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        width:100%;
        margin:10px 0;
        background-color:#d1e5f5;
        border-radius: 5px; 
        align-items: center;
    }
    li>strong{
        font-size:15px;
    }
`;