import "./services.css";

import { Avatar, Box } from "@mui/material";
// import { useTranslation } from "react-i18next";

const Service = () => {
  // const { t,  } = useTranslation();
  return (
    <div>
      <Box
        sx={{
          mt: "200px",
          mb: "100px",
        }}
      >
        <div className="container">
          <div className="container">
        
              <h4>Services</h4>
      
          </div>

  
            <div className="container">
              <div className="row">
        
                  <div className="col-md-8 col-md-offset-2 step1">
                    <div       
                    data-aos="fade-up" className="row box shape-1 animated bounceInLeft"
                    >
                      <div className="col-xs-7 col-sm-4 col-md-4 shape">
                        <div className="number">
                          <Avatar
                            alt="website"
                            src="img/5.svg"
                            sx={{ width: 156, height: 156 }}
                          />
                        </div>
                      </div>
                      <div className="col-xs-5 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1">
                        <p>برمجة المواقع الإلكترونية بكل احترافية</p>
                      </div>
                      <div className="hidden-xs col-sm-4 col-md-4 text-center">
                        <i className="material-icons md-56">&#xe30a;</i>
                      </div>
                    </div>
                  </div>
        
      
                  <div className="col-md-8 col-md-offset-2 step2">
                    <div  
                    data-aos="fade-up" className="row box shape-2 animated ">
                      <div className="col-xs-7 col-sm-4 col-md-4 shape">
                        <div className="number">
                          <Avatar
                            alt="website"
                            src="img/6.svg"
                            sx={{ width: 156, height: 156 }}
                          />
                        </div>
                      </div>
                      <div className="col-xs-5 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1">
                        <p>برمجة تطبيقات الهواتف الذكية</p>
                      </div>
                      <div className="hidden-xs col-sm-4 col-md-4 text-center">
                        <i className="material-icons md-56">&#xe325;</i>
                      </div>
                    </div>
                  </div>
              
                  <div className="col-md-8 col-md-offset-2 step3">
                    <div   
                    data-aos="fade-up" className="row box shape-3 animated bounceInLeft">
                      <div className="col-xs-7 col-sm-4 col-md-4 shape">
                        <div className="number">
                          <Avatar
                            alt="website"
                            src="img/7.svg"
                            sx={{ width: 156, height: 156 }}
                          />
                        </div>
                      </div>
                      <div className="col-xs-5 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1">
                        <p>استضافة مجانية لمدة عام</p>
                      </div>
                      <div className="hidden-xs col-sm-4 col-md-4 text-center">
                        <i className="material-icons md-56">&#xe2c2;</i>
                      </div>
                    </div>
                  </div>
          
                  <div className="col-md-8 col-md-offset-2 step4">
                    <div   
                    data-aos="fade-up" className="row box shape-4 animated bounceInRight">
                      <div className="col-xs-7 col-sm-4 col-md-4 shape">
                        <div className="number">
                          <Avatar
                            alt="website"
                            src="img/8.svg"
                            sx={{ width: 156, height: 156 }}
                          />
                        </div>
                      </div>
                      <div className="col-xs-5 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-1">
                        <p>سرعة في التنفيذ</p>
                      </div>
                      <div className="hidden-xs col-sm-4 col-md-4 text-center">
                        <i className="material-icons md-56">&#xea0b;</i>
                      </div>
                    </div>
                  </div>
          
              </div>
            </div>
        </div>
      </Box>
    </div>
  );
};

export default Service;
