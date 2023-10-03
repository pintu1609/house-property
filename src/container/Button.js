import React, {useState} from 'react'

const Button = ({selectedLocation, onLocationButtonClick}) => {
    const locations = ['New York', 'Mumbai', 'London'];
    const [activeLocation, setActiveLocation] = useState(selectedLocation)

    const handleButtonClick=(location)=>{
        setActiveLocation(location);
        onLocationButtonClick(location)
    }
  return (
    <div>
        <div className="d-flex justify-content-between">
            <div d-flex flex-row >
                {locations.map((location)=>(

            <button key={location} type="button" className={`btn btn-light rounded-pill mx-2" ${selectedLocation=== location ? 'active':''}`} style={{background: activeLocation=== location ? '#3739e3':'#f2f5fc', color: activeLocation=== location?'white': '#44455c', fontSize:15}} onClick={()=> handleButtonClick(location)}>{location}</button>
                ))}
           
            </div>
            <div>
            <button type="button" className="btn btn-light rounded-pill mx-4"style={{ color: '#3739e3', fontSize:15}}>View All <i className="fa-solid fa-arrow-right fa-sm" style={{color: '#3739e3'}}></i> </button>
            </div>
        </div>

    </div>
  )
}

export default Button;