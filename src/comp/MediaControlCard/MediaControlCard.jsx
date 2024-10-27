import React from "react";
import   './MediaControlCard.css'
const MediaControlCard = () => {

  return (
    <div>
      <div
        style={{
          width:"100%" ,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          // margin: "50px",
          // padding: "50px",
        }}
      >

        <img className="imgproj" src="img/html.png" alt=""  />
        <img className="imgproj" src="img/css.png" alt="" />
        <img className="imgproj" src="img/javascript.png" alt=""  />
        <img className="imgproj" src="img/bootstrap.png" alt=""/>
        <img className="imgproj" src="img/react.png" alt=""  />
        <img className="imgproj" src="img/flutter.png" alt="" />
        <img className="imgproj" src="img/firebase.png" alt=""  />
        <img className="imgproj" src="img/nodejs.png" alt="" />


      </div>

    </div>
  );
};

export default MediaControlCard;



// 