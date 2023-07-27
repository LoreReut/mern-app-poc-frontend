import React from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/ui-elements/card/Card'
import Button from '../../shared/components/form-elements/Button'

const PlaceItem = props => {
    
    return <>
    <Card clasName="place-item__content">
    <div className="place-item__image">
        <img src={props.imageUrl} alt={props.title} />
    </div>
    <div className="place-item__info">
            <h2>{props.title}</h2>
            <h2>{props.address}</h2>
            <p>{props.description}</p>
    </div>
    <div className="place-item__actions">
        <Button>View On Map</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
    </div>
    </Card>
    </>
}

export default PlaceItem;