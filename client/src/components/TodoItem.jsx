import React, { useState } from 'react';
import { Button, List, Checkbox, Input } from 'antd';

const TodoItem = ({ todo, handleRemove, onComplete, onSubmitEditTitle }) => {
  const { id, title, is_completed } = todo;
  const [checked, setChecked] = useState(is_completed);
  const [titleEdit, setTitleEdit] = useState(title);
  const [isEdit, setIsEdit] = useState(true);

  const handleToggleComplete = () => {
    setChecked(!checked ? 1 : 0);
    onComplete(id); // Gọi callback function để thông báo cho component cha
  };
  const handleEdit = (e) => {
    setTitleEdit(e.target.value);
  };
  const submitEditTitle = () => {
    const newTodo = {
      id,
      title: titleEdit,
      is_completed,
    };
    onSubmitEditTitle(newTodo);
    setIsEdit(true);
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

      {isEdit ? (
        <div style={{ cursor: 'pointer' }} onClick={() => setIsEdit(false)}>
          {title}
        </div>
      ) : (
        <Input
          className='mx-4'
          value={titleEdit}
          onChange={handleEdit}
          onPressEnter={submitEditTitle}
        />
      )}

      <Button danger onClick={() => handleRemove(id)}>
        &times;
      </Button>
    </List.Item>
  );
};

export default TodoItem;
