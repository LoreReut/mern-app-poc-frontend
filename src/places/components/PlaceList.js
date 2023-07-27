import React from 'react';
import './PlaceList.css';
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/ui-elements/card/Card';
import Button from '../../shared/components/form-elements/Button';

const PlaceList = (props) => {
    if (props.items.length === 0){
        return <div className="place-list center">
            <Card>
                <h2>No places found.</h2>
                <Button>Share Place</Button>
            </Card>
        </div>
    }

    return <ul className="place-list">
        {props.items.map(place => {
            return <>
                <li className="place-item"><PlaceItem key={place.id} id={place.id} imageUrl={place.imageUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creatorId} coordinates={place.coordinates}/></li>
            </>
        })}
    </ul>
}

export default PlaceList;