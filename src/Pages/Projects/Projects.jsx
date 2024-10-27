/* eslint-disable jsx-a11y/iframe-has-title */

import { Box, Card } from "@mui/material";
import "./Projects.css";
import products from "./product";
const Projects = () => {
  return (
    <div>

      <h4
      >
        Projects
      </h4>

      <Card
        className="projects"
        sx={{
          margin: "100px auto",
          display: "flex",
          width: "90%",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "wrap",
          marginBottom: "40px",
          backgroundColor: "#fff",
        }}
      >
        {products.map((item) => {
          return (

            <Box
              sx={{
                mr: { sm: 2 },
              }}
              key={item.imageLink}
            >
              <div
              
                data-aos="fade-up"
                className=" embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                style={{
                  display: "flex",
                  paddingTop: "16.25%",
                  width: "350px",
                  height: "400px",
                  margin: "20px auto",
                  borderRadius: "10%",
                }}
              >
                <iframe
                  className="embed-responsive-item  absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                  src={item.imageLink}
                  allowFullScreen
                />
              </div>
            </Box>
      
          );
        })}
      </Card>
    </div>
  );
};

export default Projects;
