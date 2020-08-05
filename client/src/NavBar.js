import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.header`
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
        padding: 5px 10px;
        margin: 0px auto;
        justify-content: space-between;
        display: flex;
        text-decoration: none;
        background-color: gray;
    `;

const Menu = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        li {
            display: block;
            padding: 10px;
            text-decoration: none;
            font-size: 28px;
            float: left;
        }
    `;

const Header = () => (
    <Navbar>
        <Menu>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles-list">Articles</Link>
                </li>
            </ul>
        </Menu>
    </Navbar>
);

export default Header;