import React from 'react';
import { UserOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Space, Dropdown } from 'antd';

const HeaderComponent = () => {
  const items = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          Đăng Nhâp
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          Đăng Xuất
        </a>
      ),
    },
  ];
  return (
    <nav className='navbar navbar-expand-md navbar-ligth '>
      <div className='container'>
        <h1 style={{ fontWeight: '700' }}>
          <a href='/'>Thanh Nhã</a>
        </h1>
        <button
          className='navbar-toggler d-lg-none'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapsibleNavId'
          aria-controls='collapsibleNavId'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='collapsibleNavId'>
          <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' href='#' aria-current='page'>
                Home <span className='visually-hidden'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/link'>
                Link
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='dropdownId'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Các app demo
              </a>
              <div className='dropdown-menu' aria-labelledby='dropdownId'>
                <a className='dropdown-item' href='/todo-app'>
                  Todo App
                </a>
                <a className='dropdown-item' href='/demo-api'>
                  demo api
                </a>
              </div>
            </li>
          </ul>
          <Space wrap size={16}>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                    size='large'
                    icon={<UserOutlined />}
                  />
                </Space>
              </a>
            </Dropdown>
            <span>Hello, Name</span>
          </Space>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
