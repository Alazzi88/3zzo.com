import { WhatsApp } from "@mui/icons-material";
import { Fab } from "@mui/material";

const FloatingActionButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=966503405496&text&type=phone_number&app_absent=0");
  };

  return (
    
    <Fab
      onClick={handleWhatsAppClick}
      sx={{
        mt: "200px",
        display: "flex",
        position: "fixed",
        bottom: "10px",
        right: "10px",

      }}
      color="success"
            aria-label="add"
    >
      <WhatsApp />
    </Fab>


  );
};

export default FloatingActionButton;
