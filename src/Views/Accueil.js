import Card from "../Component/Card";





const Accueil = ({datas}) => {


    return ( 
        
            <>
            <h1>Derniers évènements ajoutés : </h1>
     
            <Card datas={datas}/>
        
            </>
    
        
     );
}
 
export default Accueil;