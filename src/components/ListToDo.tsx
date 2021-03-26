import React, { memo } from 'react'
import { ContainerList, List } from 'styles/components/stylesPre'
import ItemList from './ItemList'

interface PropsItemList{
    id:number
    title:string
    description:string
}

interface PropsListToDo{
    Lista:PropsItemList[]
    handleRemoveItem(id:number):void
}


function ListToDo(props:PropsListToDo) {
    return(
        <ContainerList>
            <label>Lista To do</label>
            <List>
                {props.Lista.map(item=>(
                    <ItemList 
                    key={item.id} 
                    title={item.title} 
                    description={item.description}
                    handleRemoveItem={()=>props.handleRemoveItem(item.id)}
                    />
                ))}
            </List>
          </ContainerList>
    )
}

export default memo(ListToDo)