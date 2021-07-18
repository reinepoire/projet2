import {
    MDBCardImage,
    MDBCardText,
    MDBIcon
  } from "mdbreact";
import { useParams } from "react-router-dom";
import { Link } from "@material-ui/core";


const Evenement = ({datas}) => {

    const { url } = useParams();

    return ( 
        <>
        {datas.filter(d => d.id === url).map((d) => (
            <>
            <figure><MDBCardImage className="img-fluid"
                      src={d.fields.cover_url}/>
            </figure>
    
            <div className="row">
            <div className="col-md-7 p-0">
                <h1>{d.fields.title}</h1>
                <h2>Description</h2>
                <MDBCardText dangerouslySetInnerHTML={ {__html: d.fields.description} }></MDBCardText>
                <h2>Dates</h2>
                <p>{d.fields.date_description}</p>
                <h2>Pour plus d'informations ?</h2>
                <p>N'hésitez pas à visiter notre <Link to="{d.fields.access_link}">site internet</Link>.</p>

            </div>
            <div className="col-md-5 p-0 pl-5">
                <h2>Lieu de l'évènement :</h2>
                <h3>{d.fields.address_name}</h3>
                <p className="m-0">{d.fields.address_street}</p>
                <p>{d.fields.address_zipcode} {d.fields.address_city}</p>

                <h2>Accès transport</h2>
                <p><MDBIcon icon="bus" /> {d.fields.transport}</p>

                <h2>Contactez-nous !</h2>
                
            </div>
            </div>
            </>
        ))}
        </> 
     );
}
 
export default Evenement;