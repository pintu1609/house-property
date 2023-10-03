import React, {useState} from 'react'
import PropertyItem from './PropertyItem'
import propertie from './Data'
import Button from './Button';
// import { Button } from './Button';

const Property = () => {
    const [visibleProperties, setVisibleProperties] = useState(6);
    const [selectLocation, setSelectLocation] = useState('New York')
    const totalProperties = propertie.length;

    const handleShowMore=()=>{
        setVisibleProperties((prevVissible)=> prevVissible +3);
    }
    const handleShowLess =()=>{
        setVisibleProperties((prevVissible)=> prevVissible -3);
    }
    const handleLocationButtionClick =(location)=>{
        setSelectLocation(location)
        setVisibleProperties(6)
    };
    const filteredProperties = propertie.filter((element)=> element.location === selectLocation)
  return (
    <div>
        <Button selectedLocation={selectLocation} onLocationButtonClick={handleLocationButtionClick}/>
        {/* <Button selectLocation={selectLocation} onLocationButtonClick={handleLocationButtionClick}/> */}

        <div className="row">

    {filteredProperties.slice(0, visibleProperties).map((element)=>{
       return <div className=" d-flex col md-3 my-2 " key={element.user_id} style={{justifyContent:'center'}}>

         <PropertyItem image={element.imageURL} type={element.type}location={element.location} address={element.address} room={element.rooms}
         bed={element.bedrooms} bath={element.bathrooms} size={element.size_sqft} price={element.price} category={element.category}/>
            </div>

    }) }

        </div>
        <div className="show d-flex justify-content-center">
            {visibleProperties < totalProperties && (
        <button type="button" className="btn btn-light rounded-pill "style={{color:'white', fontWeight:'bold', background: '#3739e3', fontSize:12}} onClick={handleShowMore}><i class="fa-solid fa-hourglass-start fa-sm" style={{color: '#ffffff'}}>  </i> Show More </button>
        )}
        {visibleProperties > 6 && (
         <button type="button" className="btn btn-light rounded-pill "style={{color:'white', fontWeight:'bold', background: '#3739e3', fontSize:12}} onClick={handleShowLess}><i class="fa-solid fa-hourglass-start fa-rotate-180 fa-sm" style={{color: '#ffffff'}}>  </i> Show Less </button>
  
        )}
        </div>

    </div>
  )
}

export default Property