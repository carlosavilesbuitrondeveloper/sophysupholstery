import React from 'react';

const AddressMap = ({map})=>{
    return(
        <div class="map-section">
            <iframe className="address-map" title="address-map" src={map} frameborder="0" allowfullscreen></iframe>
        </div>
    );
};

export default AddressMap;