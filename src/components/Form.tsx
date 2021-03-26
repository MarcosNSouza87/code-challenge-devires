import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import {Form,Button} from '../styles/components/Form'
import { ITodo } from '../@types/ITodo';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/ducks/todo.duck';
import {IoMdAdd} from 'react-icons/io'



const FormTodo = () => {

    const [entity,setEntity] = useState<ITodo>({id:0,title:'',description:''});

    const dispatch = useDispatch();

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        if(entity !== undefined){
          setEntity({...entity,[name]:value})
        }
    }

    const handleAddNewTodo = useCallback((event:FormEvent) => {
        event.preventDefault();
        if(entity.title !== '' && entity.description !== ''){
            dispatch(addTodo(entity));
            setEntity({id:0,title:'',description:''});
        }
    },[dispatch,entity])
    

    return(
        <Form onSubmit={handleAddNewTodo}>
            <input name="title" placeholder="Título" value={entity?.title} onChange={handleInputChange}/>
            <input name="description" placeholder="Descrição" value={entity?.description} onChange={handleInputChange}/>        
            <Button type="submit">
                <IoMdAdd size={28}/>
            </Button>
        </Form>
    )
}
export default FormTodo;
