import React from 'react'

const PropertyItem = (props) => {
  return (
    <div>
      
      <div className="card" style={{width: '18rem'}}>
            <img src={props.image} className="card-img-top" alt="..." style={{padding:5, borderRadius:15, position: 'absolute', zIndex: 1, height:'22vh', }}/>
            <div className='d-flex justify-content-between  mx-1 my-3' style={{alignItems:'center', position: 'relative', zIndex: 2}}>
                <button type="button" className="btn btn-light rounded-pill mx-4"style={{ color: '#3739e3', fontSize:15, padding:2}}>For {props.type} </button>
                <i className="fa-regular fa-heart fa-sm rounded-circle mx-4 " style={{background:'#f2f5fc', padding:'10px 5px'}} ></i>
            </div>
            <div style={{display:'flex', justifyContent:'flex-start', position:'absolute',background: '#3739e3', zIndex:2, bottom:130, left:-5}}>
            <span className="badge rounded-pill " >
                 {props.category}
                
                </span>
                </div>
            <div className="card-body d-felx" style={{textAlign:'start', paddingTop:60}}>
                
                <i className="fa-solid fa-location-dot fa-sm" style={{color: '#ccd72d', fontSize:10}}> {props.location}</i>
                <h5 className="card-text" style={{fontSize:15}} > {props.address}</h5>
            </div>
            
            <div className='d-flex flex-row' >
                    <div className="d-flex flex-column mx-3">
                    <i className="fa-solid fa-building fa-sm my-1" style={{color: '#44455c'}}></i>
                    <h6 style={{fontSize:10, marginTop:3}}> {props.room} Room</h6>

                    </div>

                    <div className="d-flex flex-column mx-3">
                    <i className="fa-solid fa-bed fa-sm my-1" style={{color: '#44455c'}}></i>
                    <h6 style={{fontSize:10, marginTop:3}}>{props.bed} Bed</h6> 

                    </div>

                    <div className="d-flex flex-column mx-3">
                    <i className="fa-solid fa-restroom fa-sm my-1" style={{color: '#44455c'}} ></i> 
                    <h6 style={{fontSize:10, marginTop:3}}>{props.bath} Bath</h6> 
                    </div>

                    <div className="d-flex flex-column mx-3">
                    <i className="fa-solid fa-arrow-down-up-across-line fa-rotate-90 fa-sm my-1" style={{color: '#44455c'}} ></i> 
                    <h6 style={{fontSize:10, marginTop:3}}> {props.size} sqft</h6>
                    </div>

               

            </div>
           
            <div className="card-body d-flex justify-content-between mx-2 my-1" style={{padding:0}}>
                <h5 className="Price" style={{padding:2, fontSize:15}}>$ {props.price}/month</h5>
                <button type="button" className="btn btn-light rounded-pill "style={{ color: '#3739e3', fontSize:12}}>Read More </button>

            </div>
        </div>
    </div>
  )
}

export default PropertyItem
