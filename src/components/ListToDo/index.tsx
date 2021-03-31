import React, { memo } from 'react';
import { ContainerList, List } from 'components/ListToDo/styles';
import ItemList from '../ItemList/ItemList';

interface PropsItemList {
  id: number;
  title: string;
  description: string;
}

interface PropsListToDo {
  List: PropsItemList[];
  handleRemoveItem(id: number): void;
}

function ListToDo(props: PropsListToDo) {
  return (
    <ContainerList>
      <List>
        {props.List.map((item) => (
          <ItemList
            key={item.id}
            title={item.title}
            description={item.description}
            handleRemoveItem={() => props.handleRemoveItem(item.id)}
          />
        ))}
      </List>
    </ContainerList>
  );
}

export default memo(ListToDo);
