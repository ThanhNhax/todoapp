import React, { Suspense, useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Space, Dropdown } from 'antd';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';

const HeaderComponent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_KEY_LOCAL);
  };
  const itemsAvatar = [
    {
      key: '1',
      label: <Link to='/auth'>Login</Link>,
    },
    {
      key: '2',
      label: (
        <Link to='/auth' onClick={handleLogout} href='/auth'>
          Logout
        </Link>
      ),
    },
  ];
  const itemProject = [
    {
      key: '3',
      label: <Link to='/todo-app'>Todo App</Link>,
    },
  ];
  const itemMenu = [
    {
      key: '1',
      label: <Link to='/'>Home</Link>,
    },
    {
      key: '2',
      label: <Link to='/about'>About</Link>,
    },
    {
      key: '3',
      type: 'group',
      label: 'My Projects',
      children: [
        {
          key: '3-1',
          label: <Link to='/todo-app'>Todo App </Link>,
        },
        // them router du an o day
      ],
    },
    {
      key: '4',
      label: <Link to='/auth'>Logout</Link>,
    },
  ];

  const getUser = () => {
    const flag = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_KEY_LOCAL)
    );
    console.log({flag})
    if (!flag) return navigate('/auth');
    setUser({ email: flag?.email });
    return flag.email;
  };

  //Call user
  useEffect(() => {
    getUser();
  }, []);
  return (
    <section className='container mx-auto px-4 py-6 flex justify-between items-center gap-10 text-white text-xl '>
      <h1 className='font-bold text-3xl uppercase'>
        <Link to={'/'}>Thanh Nhã</Link>
      </h1>
      <article className='hidden flex-1 md:flex md:justify-between md:items-center'>
        <nav className=''>
          <ul className='flex justify-start items-center gap-4'>
            <li className='relative opacity-70 hover:opacity-100 transition hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bottom-[-5px] hover:after:inset-x-0 hover:after:bg-contrast hover:after:animate-wiggle '>
              <Link to={'/home'}>Home</Link>
            </li>
            <li className='relative opacity-70 hover:opacity-100 transition hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bottom-[-5px] hover:after:inset-x-0 hover:after:bg-contrast hover:after:animate-wiggle '>
              <Link to='/about'>About</Link>
            </li>
            <li className='relative opacity-70 hover:opacity-100 transition hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bottom-[-5px] hover:after:inset-x-0 hover:after:bg-contrast hover:after:animate-wiggle '>
              <Dropdown menu={{ items: itemProject }}>
                <Link>
                  <Space className='cursor-pointer'>
                    My Project
                    <DownOutlined />
                  </Space>
                </Link>
              </Dropdown>
            </li>
          </ul>
        </nav>
        <article className='flex justify-between items-center gap-2'>
          <Suspense fallback={<Loading/>}>
            <Dropdown menu={{ items: itemsAvatar }}>
              <Link>
                <Space>
                  <Avatar
                    size={'large'}
                    src={`https://ui-avatars.com/api/?background=ffffff&color=fab973&name=${
                      user?.name ? user?.name : user?.email
                    }`}
                    className='cursor-pointer'
                  />
                </Space>
              </Link>
            </Dropdown>
          </Suspense>
        </article>
      </article>
      <article className='md:hidden'>
        <Dropdown menu={{ items: itemMenu }}>
          <Link>
            <Space>
              <AiOutlineMenu size={'32'} />
            </Space>
          </Link>
        </Dropdown>
      </article>
    </section>
  );
};

export default HeaderComponent;
