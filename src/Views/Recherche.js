import Card from "../Component/Card";
import { MDBCol, MDBIcon } from "mdbreact";
import "../Styles/Recherche.css";
import React,{useEffect,useState} from 'react';
import axios from 'axios';


const Recherche = () => {
    const [eventsData,setEventsData]=useState([])
    const [filteredEvent,setFilteredEvent]=useState([])
  
  
    useEffect(()=>{
        axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=15')
            .then(res=>{
                setEventsData(res.data.records)
                
            })
            .catch(err=>{
                console.log(err);
            })
            
    },[])
  
   
   let easierList = eventsData;
   let datas = [];
  
   easierList.forEach(function(item){
    datas.push(item.record);
    
  });

   

    
 


    return ( 
        <>
        <MDBCol md="12">
      <form className="form-inline active-pink-3 active-pink-4 mb-4 mr-0 row justify-content-between">
        <MDBIcon icon="search" className="col-1 py-2 rounded"/>
        
        <input className="form-control form-control-sm col-11" type="text" placeholder="Trouvez un évènement" aria-label="Search" onChange={event => {setFilteredEvent(event.target.value)}}/>
      </form>
    </MDBCol>
    
    {datas.filter((value) => {
        if (filteredEvent == "") {
            return value;
        } else if (value.fields.category.toLowerCase().includes(filteredEvent.toLowerCase())) {
            return value;
        } else 
            return null;
    
    }).map((value,key) => {
        return (
        <>
        <p>{value.fields.category}</p>
     
        
        </>
        )
    })}
   
        
        </>
     );
}
 
export default Recherche;