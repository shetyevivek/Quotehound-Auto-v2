import React, { useState } from 'react'

const GeoLocation = () => {

    const [detail, setDetail] = useState(null);

    const getUserGeoLocationDetails = () => {
        fetch('https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0')
            .then((respone => respone.json))
            .then(data => setDetail(data))
        
        document.getElementById('zip').value = data.postal;
    }

    return (
        <div>
            
        </div>
    )
}

export default GeoLocation
