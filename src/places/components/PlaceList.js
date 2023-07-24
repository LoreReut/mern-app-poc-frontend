import React from 'react';
import './PlaceList.css';
import PlaceItem from './PlaceItem';

const PlaceList = (props) => {
    if (props.items.length === 0){
        return <div className="place-list center">
            <Card>
                <h2>No places found.</h2>
                <button>Share Place</button>
            </Card>
        </div>
    }

    return <ul className="place-list">
        {props.items.map(place => {
            <li className="place-item"><PlaceItem key={place.id} id={place.id} image={place.imageUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creatorId} coordinates={place.coordinates}/></li>
        })}
    </ul>
}

export default PlaceList;