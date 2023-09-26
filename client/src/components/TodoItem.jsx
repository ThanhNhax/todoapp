import React, { useState } from 'react';
import { Button, List, Checkbox, Input, Typography } from 'antd';
const { Text } = Typography;
import { DeleteOutlined } from '@ant-design/icons';

const TodoItem = ({ todo, handleRemove, onComplete, onSubmitEditTitle }) => {
  const { id, title, is_completed } = todo;
  const [titleEdit, setTitleEdit] = useState(title);
  const [isEdit, setIsEdit] = useState(true);

  const handleToggleComplete = (e) => {
  
    onComplete(e.target.checked, id); // Gọi callback function để thông báo cho component cha
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
      <div className='d-flex gap-4'>
        <Checkbox
          className='checkbox'
          checked={is_completed}
          onChange={handleToggleComplete}
        />

        {isEdit ? (
          <Text
            delete={is_completed}
            disabled={is_completed}
            // Nếu mà is_completed: là đã check rồi thì không cần gọi onclick
            onClick={() =>!is_completed && setIsEdit(false)}
          >
            {title}
          </Text>
        ) : (
          <Input
            className='mx-4'
            value={titleEdit}
            onChange={handleEdit}
            onPressEnter={submitEditTitle}
          />
        )}
      </div>

      <Button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        danger
        onClick={() => handleRemove(id)}
      >
        <DeleteOutlined />
      </Button>
    </List.Item>
  );
};

export default TodoItem;
