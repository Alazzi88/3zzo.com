import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./icons";
const Icons = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0ecea",
        padding: "10px",
        margin: "20px 1px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        borderRadius: "10px",
      }}
      className="icons"
    >
      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#000", color: "#fff", border: "none" }}
        href="https://x.com/3zzoezzo"
      >
        <MDBIcon fab icon="x" />
      </MDBBtn>

      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#ac2bac", border: "none", color: "#fff" }}
        href="https://www.instagram.com/3zzoezzo/"
      >
        <MDBIcon fab icon="instagram" />
      </MDBBtn>

      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#ed302f", border: "none", color: "#fff" }}
        href="https://www.youtube.com/@Ezzo3zzo"
      >
        <MDBIcon fab icon="youtube" />
      </MDBBtn>

      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#481449", border: "none", color: "#fff" }}
        href="https://www.tiktok.com/@3zzo.com"
      >
        <MDBIcon fab icon="tiktok" />
      </MDBBtn>

      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#ebe820", border: "none", color: "#fff" }}
        href="https://www.snapchat.com/add/ezzo.com"
      >
        <MDBIcon fab icon="snapchat" />
      </MDBBtn>

      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#333333", border: "none", color: "#fff" }}
        href="https://github.com/Alazzi88"
      >
        <MDBIcon fab icon="github" />
      </MDBBtn>
    </div>
  );
};

export default Icons;
