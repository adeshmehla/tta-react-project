import React from 'react';
import { Menu, Row, Col } from 'antd';
import './navbar.css'; 
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Row justify="space-between" align="middle" className="navbar">
      <Col>
        <div className="logo">Logo</div>
      </Col>
      <Col>
        <Menu mode="horizontal">
          <Menu.Item key="home">
           <NavLink to="/" exact>Home</NavLink>
          </Menu.Item>
          <Menu.Item  key="about">
            <NavLink to="about">About</NavLink>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
