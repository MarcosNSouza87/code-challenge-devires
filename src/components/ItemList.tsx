import React, { memo } from 'react';
import { Button } from 'styles/components/ListToDo'
import {RiDeleteBinLine} from 'react-icons/ri'

interface PropsItemList{
    key:number
    title:string
    description:string
    handleRemoveItem():void
}

function ItemList(item:PropsItemList){
    return(
        <li>
            <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
            </div>
            <Button onClick={item.handleRemoveItem}><RiDeleteBinLine size={24}/></Button>
        </li>
    )
}

export default memo(ItemList);
