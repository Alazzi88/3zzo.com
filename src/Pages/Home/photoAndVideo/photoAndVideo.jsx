import { Box,  } from "@mui/material";
import "./photoAndVideo.css";
import Lottie from "lottie-react";
import animated from "../../../animation/animation1.json";


const Photoo = () => {
  return (

    <Box
      sx={{
        mt: "50px",
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 0,
          width: "100%",
          height: "100%",
        },
      }}
    >
        <Lottie
          style={{
            margin:"10px",
            width: "100%",
            height: "100vh",
            justifyItems:"center",

          }}
          animationData={animated}
        />{" "}
  
      
    </Box>

  );
};

export default Photoo;