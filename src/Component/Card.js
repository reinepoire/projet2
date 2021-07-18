import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "../Styles/Card.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Card = ({ datas }) => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  return (
    <MDBCol className="card-wrapper p-0">
      {datas.map((d) => {
        const moment = require("moment");
        moment.updateLocale("fr", {
          monthsShort: [
            "janv.",
            "févr.",
            "mars",
            "avr.",
            "mai",
            "juin",
            "juil",
            "août",
            "sept.",
            "oct.",
            "nov.",
            "déc.",
          ],
        });

        return (
          <MDBCard style={{ marginBottom: "0em" }} className="" key={d.id}>
            <div
              className="d-flex align-items-start justify-content-between rounded-top"
              style={{
                backgroundImage: `url(${d.fields.cover_url})`,
                height: 250,
                backgroundSize: `cover`,
              }}
            >
              <p className="p-2 font-weight-bold text-uppercase white m-3 col-4 text-center rounded">
                {d.fields.price_type}
              </p>
              <MDBBtn
                outline
                color="danger"
                className="rounded p-2 m-3"
                onClick={toggleTrueFalse}
                id={d.id}
                style={{ backgroundColor: "white" }}
              >
                
                {isToggled !== true ? (
                  <i data-test="fa" class="far fa-heart"></i>
                ) : (
                  <i data-test="fa" class="fa fa-heart"></i>
                )}
              </MDBBtn>
            </div>
            <Link to={`/evenement/${d.id}`}><MDBCardBody className="col d-flex justify-content-between">
              
              <div className="text-center black-text font-weight-bold col-2 p-0 text-uppercase">
                {moment(d.fields.date_start, "YYYY-MM-DDRHH:mm:ss")
                  .locale(`fr`)
                  .format("DD MMM YYYY")}
              </div>

              <div className="col-md-10">
                
                  <MDBCardTitle className="purple-text">
                    {d.fields.title}
                  </MDBCardTitle>
                  <MDBCardText
                    dangerouslySetInnerHTML={{ __html: d.fields.lead_text }}
                    className="d-none d-md-block"
                  ></MDBCardText>
                
              </div>
              
            </MDBCardBody></Link>
          </MDBCard>
        );
      })}
    </MDBCol>
  );
};

export default Card;
