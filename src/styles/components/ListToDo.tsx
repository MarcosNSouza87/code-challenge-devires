import styled from 'styled-components'

// listItems 
export const ContainerList = styled.div`
    
`;
export const List = styled.ul`
    list-style:none;
    display:flex;
    margin-top:10px;
    flex-direction:column;
    width: 700px;
    max-width: 700px;
    display: flex;
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 30px;
        min-height:100px;
        width:100%;
        margin:10px 0;
        background-color:#d1e5f5;
        border-radius: 5px; 
        align-items: center;
    }
    li>div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start ;
    }
    li>div>strong{
        font-size:15px;
        margin-bottom:5px;
        color:#2c2c2c;
    }
    li>div>p{
        max-width:500px;
        color:#3d3d3d;
    }
`;

export const Button = styled.button`
    background-color:#d1e5f5;
    color:#3289e0;
    border:2px solid #3289e0;
    border-radius:30px;
    height: 40px;
    width:40px;
    align-items:center;
    text-align: center;
    justify-content: center;
    display: flex;
    font-size:1rem;
    :hover{
        cursor:pointer;
        background-color:#ebf3fa;
        color:#3289e0;
    }
`;