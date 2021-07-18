import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Accueil from './Views/Accueil';
import Recherche from './Views/Recherche';
import Evenement from './Views/Evenement';
import Favoris from './Views/Favoris';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Card from './Component/Card';


function App() {
  const [eventsData,setEventsData]=useState([])   
  


  useEffect(()=>{
      axios.get('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records')
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

console.table(datas);


// datas.forEach(function (d) {
//     console.log(d.id)
    
// })
  return (
    <>
    
       <Router>
       <NavBar />
       <div className="wrapper">
         <Route exact path="/">
          <Accueil datas={datas}/>
          <Card datas={datas}/>
        </Route>

        <Route path="/recherche">
            <Recherche datas={datas}/>
            <Card datas={datas}/>
        </Route>

        <Route path="/favoris">
            <Favoris datas={datas}/>
            <Card datas={datas}/>
        </Route>

        <Route path="/evenement/:id">
            <Evenement datas={datas}/>
        </Route> 

            
            {/* <Home /> */}
            </div>
            <Footer />
      </Router> 

    
    </>
  );
}

export default App;
