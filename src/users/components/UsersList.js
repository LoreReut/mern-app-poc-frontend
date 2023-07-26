import React from 'react';

import './UsersList.css'
import UserItem from './UserItem'
import Card from '../../shared/components/ui-elements/card/Card'

const UsersList = props => {
    if (props.items.length === 0) {
        return (<Card>
            <div style={{display:'inline-block'}}><h2>No users found.</h2></div>
            </Card>);
    }

    return <ul className="users-list">
            {props.items.map(user => 
            <UserItem           
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.placeCount}
            />)}
        </ul>;
}

export default UsersList;