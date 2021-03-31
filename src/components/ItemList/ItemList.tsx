import React, { memo } from 'react';
import { Button } from 'components/ListToDo/styles';
import { RiDeleteBinLine, RiCheckFill } from 'react-icons/ri';

interface PropsItemList {
  key: number;
  title: string;
  description: string;
  handleRemoveItem(): void;
}

function ItemList(item: PropsItemList) {
  return (
    <li>
      <div>
        <strong>{item.title}</strong>
        <p>{item.description}</p>
      </div>
      <div className="group-button">
        <Button onClick={item.handleRemoveItem}>
          <RiCheckFill size={24} />
        </Button>
        <Button onClick={item.handleRemoveItem}>
          <RiDeleteBinLine size={24} />
        </Button>
      </div>
    </li>
  );
}

export default memo(ItemList);
