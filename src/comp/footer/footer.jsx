import { Ripple, Input, initTE } from "tw-elements";
import "./footer.css";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { EmailOutlined } from "@mui/icons-material";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../animation/done.json";
import Icons from "./icons";

const Footer = () => {
  const [state, handleSubmit] = useForm("mleyqqlg");
  if (state.succeeded) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          textAlign:"center",
          fontSize: "30px",
          fontFamily: "sans-serif",
        }}
        className="submiting"
      >
          <Lottie
          style={{
            margin:"10px",
            width: 200,
            height: 200,
            justifyItems:"center"
          }}
          animationData={done}
        />{" "}
      <h2 style={{marginBottom:  "50px", marginTop:"10px" , marginRight:"30px", marginLeft:"30px"}}>تم الإرسال بنجاح ، سوف نقوم بالتواصل معك في اقرب وقت ممكن</h2>
      
      </Box>
    );
  }
  initTE({ Ripple, Input });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="footer ">
        <span style={{
          color:"black"
        }}>
          {" "}
          Contact <EmailOutlined sx={{ fontSize: "33px" , color:"black" }} />
        </span>
        <form
          onSubmit={handleSubmit}
          
          style={{
            width: "400px",
            display: "block",
          }}
        >
          <TextField
            sx={{
              width: "350px",
              margin: "20px",
            }}
            
            required
            type="text"
            name="Name"
            label="Name"
            multiline
            maxRows={4}
          />
          <TextField
            sx={{
              width: "350px",
              margin: "20px",
            }}
            required
            type="email"
            name="Email"
            label="Email"
            multiline
            maxRows={4}
          />
          <ValidationError  prefix="Email" field="email" errors={state.errors} />
          <TextField
            sx={{
              width: "350px",
              margin: "20px",
            }}
            required
            type="text"
            name="Message"
            label="Message"
            multiline
            rows={4}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            <Button
              type="submit"
              disabled={state.submitting}
              sx={{
                height: "40px",
                padding: "20px 100px",
                margin: "20px",
                flexGrow: 1,
                color: "black",
              }}
              variant="outlined"
            >
              Send <SendIcon sx={{ ml: 2, color: "black" }} />
            </Button>
          </Box>
        </form>

        <p className="info">
          I’m developer and Trader 
        </p>
        {/* <div className="share">
          <a href="https://www.instagram.com/3zzoezzo/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@3zzo.com">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.snapchat.com/add/ezzo.com">
            <i className="fa-brands fa-snapchat"></i>
          </a>
          <a href="https://github.com/Alazzi88">
            <i className="fa-brands fa-github"></i>
          </a>
        </div> */}

  <Icons/>
      </div>
    </div>
  );
};

export default Footer;
