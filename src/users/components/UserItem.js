import React from 'react';
import Avatar from '../../shared/components/ui-elements/avatar/Avatar';
import { Link } from 'react-router-dom'
import './UserItem.css';
import Card from '../../shared/components/ui-elements/card/Card'

const UserItem = props => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                {/*props.id will be picked up by :uid in App.js */}
                <Link to={`/${props.id}/places`}>
                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.alt}/>
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}</h3>
                </div>
                </Link>
            </Card>
            
        </li>
    )
}

export default UserItem;