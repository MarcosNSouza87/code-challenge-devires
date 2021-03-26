import React, { memo } from 'react';
import { Button } from 'styles/components/stylesPre';

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
            <Button onClick={item.handleRemoveItem}>Remover</Button>
        </li>
    )
}

export default memo(ItemList);