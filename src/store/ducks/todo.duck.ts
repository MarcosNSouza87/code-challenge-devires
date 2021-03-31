import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import api from 'services/api'
import {RootState} from 'store';
import {AppThunk} from '../../@types/redux'
import { ITodo } from '../../@types/ITodo';

interface State {
    data: ITodo[];
    error: string | null;
}

const INITIAL_STATE: State = {
    data: [],
    error: null,
};

export const todoSlice = createSlice({
    name:'todo',
    initialState:INITIAL_STATE,
    reducers:{
        getAllTodoSuccess: (state: State, { payload }: PayloadAction<ITodo[]>) => ({
          ...state,
          data: payload,
        }),
        getAllTodoError: (state: State, { payload }: PayloadAction<string>) => {
          state.error = payload;
        }, },
})
export const {getAllTodoSuccess,getAllTodoError} = todoSlice.actions;

export default todoSlice.reducer;

export const getAllTodos = (): AppThunk => async (dispatch: Dispatch) => {
    try {
      const response = await api.get<ITodo[]>('/todos');
      dispatch(getAllTodoSuccess(response.data));
    } catch (err) {
      dispatch(getAllTodoError(err.toString()));
    }
  };
  
  export const deleteTodo = (id: number): AppThunk => async (dispatch: Dispatch) => {
    try {
      await api.delete(`/todos/${id}`);
      const response = await api.get<ITodo[]>('/todos');
      dispatch(getAllTodoSuccess(response.data));
//      dispatch(getAllTodoSuccess(response.data));
    } catch (err) {
      dispatch(getAllTodoError(err.toString()));
    }
  };
  
  export const addTodo = (data: ITodo): AppThunk => async (
    dispatch: Dispatch
  ) => {
    try {
      //colocar um id 
      await api.post('/todos/', data);
      const response = await api.get<ITodo[]>('/todos');
      dispatch(getAllTodoSuccess(response.data));
    } catch (err) {
      dispatch(getAllTodoError(err.toString()));
    }
  };
  
  
  export const todoState = (state: RootState) => state.todoReducer;
