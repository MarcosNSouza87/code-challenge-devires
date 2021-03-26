import React, { ChangeEvent, FormEvent, useState } from 'react';

import GlobalStyle from '../styles/global'

import { Button, Container,Form,Header, Main } from '../styles/components/stylesPre'
import ListToDo from 'components/ListToDo';
import { RootStateOrAny, useSelector } from 'react-redux';

interface Todo {
  id:number
  title:string
  description:string
}

function App() {

  const [entity,setEntity] = useState<Todo>({id:0,title:'',description:''})

  const msg = useSelector((state:RootStateOrAny)=> state.exampleReducer)
  console.log(msg);

  const items = 
  [
    {  id:1,title:"t1",description:"t1 is ffas"   },
    {  id:2,title:"t2",description:"t2 is ffas"   },
  ]

  const handleRemoveItem = (id:number) => {
    alert(id);
  }



  const handleAddNewTodo = (event:FormEvent) => {
    event.preventDefault();
    console.log(entity);
  }


  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target
    if(entity !== undefined){
      setEntity({...entity,[name]:value});
      console.log('tst');
    }
}

  return (
      <Container>
        <GlobalStyle/>
        <Header>
          To do List Challenger 
        </Header>
        <Main>
          <Form onSubmit={handleAddNewTodo}>
            <input name="title" placeholder="Título" value={entity?.title} onChange={handleInputChange}/>
            <input name="description" placeholder="Descrição" value={entity?.description} onChange={handleInputChange}/>        
            <Button type="submit">Adicionar</Button>
          </Form>
          <ListToDo
            Lista={items}
            handleRemoveItem={handleRemoveItem}
          />
        </Main>
      </Container>
  );
}

export default App;
