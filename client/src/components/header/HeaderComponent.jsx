import React from 'react';
import { UserOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Space, Dropdown } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';

const HeaderComponent = () => {
  const itemsAvatar = [
    {
      key: '1',
      label: <a href='/auth'>Login</a>,
    },
    {
      key: '2',
      label: (
        <a rel='noopener noreferrer' href='/auth'>
         Logout
        </a>
      ),
    },
  ];
  const itemProject = [
    {
      key: '3',
      label: <a href='/todo-app'>Todo App</a>,
    },
    
  ];
  const itemMenu = [
    {
      key: '1',
      label: <a href='/'>Home</a>,
    },
    {
      key: '2',
      label: <a href='/about'>About</a>,
    },
    {
      key: '3',
      type: 'group',
      label: 'My Projects',
      children: [
        {
          key: '3-1',
          label: <a href='/todo-app'>Todo App </a>,
        },
        // them router du an o day 
      ],
    },
    {
      key: '4',
      label: <a href='/auth'>Logout</a>,
    },
   
  ];
  return (
    <section className='container mx-auto py-6 flex justify-between items-center gap-10 text-white text-xl '>
      <h1 className='font-bold text-3xl uppercase'>
        <a href=''>Thanh Nhã</a>
      </h1>
      <article className='hidden flex-1 md:flex md:justify-between md:items-center'>
        <nav className=''>
          <ul className='flex justify-start items-center gap-4'>
            <li className='relative opacity-70 hover:opacity-100 transition hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bottom-[-5px] hover:after:inset-x-0 hover:after:bg-contrast hover:after:animate-wiggle '>
              <a href=''>Home</a>
            </li>
            <li className='relative opacity-70 hover:opacity-100 transition hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bottom-[-5px] hover:after:inset-x-0 hover:after:bg-contrast hover:after:animate-wiggle '>
              <a href='/about'>About</a>
            </li>
            <li className='relative opacity-70 hover:opacity-100 transition hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bottom-[-5px] hover:after:inset-x-0 hover:after:bg-contrast hover:after:animate-wiggle '>
              <Dropdown menu={{ items: itemProject }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='cursor-pointer'>
                    My Project
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </nav>
        <article className='flex justify-between items-center gap-2'>
          <Dropdown menu={{ items:itemsAvatar }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar
                  size={'large'}
                  icon={<UserOutlined />}
                  className='cursor-pointer'
                />
              </Space>
            </a>
          </Dropdown>
          <span>Hello, Name </span>
        </article>
      </article>
      <article className='md:hidden'>
        <Dropdown menu={{ items: itemMenu }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <AiOutlineMenu size={'32'} />
            </Space>
          </a>
        </Dropdown>
      </article>
    </section>
  );
};

export default HeaderComponent;
