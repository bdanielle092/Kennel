import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

const OwnerDetail = props => {
  const [owners, setOwner] = useState({ name: "", quote: "" , picture: "" });

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owners => {
        setOwner({
          name: owners.name,
          owner: owners.quote,
          picture: owners.picture
        });
      });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
          {(owners.picture !== "") &&
        <picture>
          <img src={require(`${owners.picture}`)} alt="owner" />
        </picture>
         }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{owners.name}</span></h3>
        <p>Quote: {owners.quote}</p>
        
      </div>
    </div>
  );
}

export default OwnerDetail;