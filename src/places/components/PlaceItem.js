import React, { useState } from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/ui-elements/card/Card'
import Button from '../../shared/components/form-elements/Button'
import Modal from '../../shared/components/ui-elements/Modal'

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    
    return <>
    <Modal show={showMap} onCancel={closeMapHandler} header={props.address} contentClass="place-item__modal-content" footerClass="place-item__model-actions" footer={<Button danger onClick={closeMapHandler}>CLOSE</Button>}>
        <div className={"map-container"}>MAP HERE HEHE</div>
    </Modal>
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
        <Button inverse onClick={openMapHandler}>View On Map</Button>
        <Button to={`/places/${props.id}`}>Edit</Button>
        <Button danger>Delete</Button>
    </div>
    </Card>
    </>
}

export default PlaceItem;