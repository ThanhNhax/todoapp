import React, { useState } from 'react';
import { Button, List, Checkbox } from 'antd';

const TodoItem = ({ todo, handleRemove, onComplete }) => {
  const { id, title, is_completed } = todo;
  const [checked, setChecked] = useState(is_completed);
  const handleToggleComplete = () => {
    setChecked(!checked ? 1 : 0);
    onComplete(id); // Gọi callback function để thông báo cho component cha
  };
  return (
    <List.Item
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Checkbox checked={checked} onChange={handleToggleComplete} />
      {title}
      <Button danger onClick={() => handleRemove(id)}>
        &times;
      </Button>
    </List.Item>
  );
};

export default TodoItem;
