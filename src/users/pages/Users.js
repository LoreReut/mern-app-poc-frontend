import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [{
        id: 0, 
        name: 'Lo', 
        image: 'https://media.tenor.com/QWai-afTJb4AAAAC/graphic-design-is-my-passion-designer.gif',
        placeCount: 33},
        {id: 1,
        name: 'Casca',
        image: 'https://media.tenor.com/BYh9sLvpAasAAAAC/strelin.gif',
        placeCount: 1}];
    return <UsersList items={USERS}/>;
};

export default Users;