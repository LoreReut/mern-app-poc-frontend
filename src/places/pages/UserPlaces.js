import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Description',
        imageUrl: 'https://media.discordapp.net/attachments/437133015492329482/1121855159169986580/WhatsApp_Image_2023-06-23_at_19.31.23.jpg',
        address: 'Address',
        location: {
            lat: -3.6853901,
            lng: 33.4188406
        },
        creatorId: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'Description',
        imageUrl: 'https://media.discordapp.net/attachments/437133015492329482/1121855159169986580/WhatsApp_Image_2023-06-23_at_19.31.23.jpg',
        address: 'Address',
        location: {
            lat: -3.6853901,
            lng: 33.4188406
        },
        creatorId: 'u2'
    }]
const UserPlaces = (props) => {
    const uid = useParams().uid;
    const userPlaces = DUMMY_PLACES.filter(place => place.creatorId === uid);
    return <PlaceList items={userPlaces} />;
}


export default UserPlaces;