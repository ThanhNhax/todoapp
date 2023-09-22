import React, { useState } from 'react';
import { Button, List, Checkbox } from 'antd';

const TodoItem = ({ todo, handleRemove,handleCheck }) => {
  const { title, isCompleted } = todo;
  const [checked, setChecked] = useState(isCompleted);
  console.log(title, isCompleted);
  
  return (
    <List.Item
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Checkbox checked={checked} onChange={handleCheck}>
        Checkbox
      </Checkbox>
      {title}
      <Button danger onClick={handleRemove}>
        &times;
      </Button>
    </List.Item>
  );
};

export default TodoItem;
