import React from 'react';
import UsersList from '../components/UsersList'

const USERS = [{
    id: 'u0', 
    name: 'Lo', 
    image: 'https://media.tenor.com/QWai-afTJb4AAAAC/graphic-design-is-my-passion-designer.gif',
    placeCount: 33},
    {id: 'u1',
    name: 'Casca',
    image: 'https://media.tenor.com/BYh9sLvpAasAAAAC/strelin.gif',
    placeCount: 1,},
    {id: 'u2',
    name: 'Casca',
    image: 'https://media.tenor.com/BYh9sLvpAasAAAAC/strelin.gif',
    placeCount: 1,},
    {id: 'u3',
    name: 'Casca',
    image: 'https://media.tenor.com/BYh9sLvpAasAAAAC/strelin.gif',
    placeCount: 1,},
    {id: 'u4',
    name: 'Casca',
    image: 'https://media.tenor.com/BYh9sLvpAasAAAAC/strelin.gif',
    placeCount: 1,}];

const Users = () => {
    return <UsersList items={USERS}/>;
};

export default Users;