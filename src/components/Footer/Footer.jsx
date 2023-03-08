import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../../styles/Footer.css"

export const Footer = () => {
	return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted footer_font" >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                TimeSculpt
              </h6>
              <p>
                At TimeSculpt, we are more than just a store that sells watches.
                We are a company that is dedicated to preserving the art and
                craftsmanship of watchmaking.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Brands</h6>
              <p>
                <a href="#!" className="text-reset">
                  Audemars Piguet
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Rolex
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Zenith
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tissot
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">OUR WORLD</h6>
              <p>
                <a href="#!" className="text-reset">
                  Born in Makers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Musee Atelier
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Stores
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Stay Connected
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Makers, MS 10012, US
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                timesculpt@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 996
                234 567
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 312
                234 567 15
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          TimeSculpt.com
        </a>
      </div>
    </MDBFooter>
  );
};

 export default Footer;
