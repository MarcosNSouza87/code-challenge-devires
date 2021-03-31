import React, { memo, useEffect } from 'react';
import GlobalStyle, { Container, Header, Main } from '../styles/global';
import ListToDo from 'components/ListToDo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { deleteTodo, getAllTodos } from 'store/ducks/todo.duck';
import FormTodo from 'components/Form';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((store: RootState) => store.todoReducer);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const handleRemoveItem = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container>
      <GlobalStyle />
      <Header>To do List Challenger 1</Header>
      <Main>
        <FormTodo />
        {data.length > 0 && (
          <ListToDo List={data} handleRemoveItem={handleRemoveItem} />
        )}
      </Main>
    </Container>
  );
}

export default memo(App);
