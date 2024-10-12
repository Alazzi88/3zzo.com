import "./indicator.css";
import { Box, Card } from "@mui/material";

const Indicator = () => {
  return (
    <div className="zzz">
      <div dir="rtl" className="ind">
        <h4>كيف يعمل مؤشرنا </h4>
        <Card
        className="projects"
        sx={{
          margin: "100px auto",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
          borderRadius: "4px",
          flexDirection: "wrap",
          marginBottom: "40px",
          backgroundColor: "#fff",
          padding:"10px"
        }}
      >

            <Box
              sx={{
                mr: { sm: 2 },
        
                

              }}
          
            >
            <div  className="vid">
            <div
              
              data-aos="fade-up"
              className=" embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
              style={{
                display: "flex",
                paddingTop: "16.25%",
                paddingBottom:"20%",
                width: "380px",
                height: "380px",
                margin: "40px auto",
                borderRadius: "10%",
              }}
            >
              <iframe
                className="embed-responsive-item  absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                src= "https://www.youtube.com/embed/BKvL8kzuPpU?si=1Vkr3yfUg4xvli5a" title="YouTube video player"
                allowFullScreen
              />
            
            </div>
            <div
            
            data-aos="fade-up"
            className=" embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
            style={{
              display: "flex",
              paddingTop: "16.25%",
              paddingBottom:"20%",
              width: "380px",
              height: "380px",
              margin: "40px auto",
              borderRadius: "10%",
            }}
          >
            <iframe
              className="embed-responsive-item  absolute bottom-0 left-0 right-0 top-0 h-full w-full"
              src= "https://www.youtube.com/embed/szgRHJ8sD-w?si=VdoAijFzMRnwgO0b" title="YouTube video player"
              allowFullScreen
            />
          
          </div>
            </div>
            </Box>
    
        
      </Card>
        <h3>
          يعمل مؤشرنا بالذكاء الصناعي ويتم تثبيته بدعوه عبر برنامج Tradingview
          ويمكنك إستخدمها للتداول بالعقود او العملات الرقمية أو الأسهم بالأسواق العالمية
          أو المحلية
          بشرط يوجد بالشارت  Volume
        </h3>
        <span>
          المؤشرات تعتبر عامل مساعد للمتداول في تحليلاته الفنية وقد تصيب وتخطا
          بناًء على حركة السوق
        </span>
        <h4>ابرز نقاط مؤشرنا :</h4>
        <li>الدعوم والمقاومات</li>
        <li>تحديد الموجة</li>
        <li>منطقة الشراء والبيع</li>
        <li>فيبوناتشي</li>
        <li>مناطق العرض والطلب</li>
        <li>الساعات الذهبية </li>
        <li> مناطق السيولة </li>
      <div className="bg-imggg">
      <img className="imgind" src="img/indic.png" alt="" />
      </div>
        <>
<div className="pay">
<p>قيمة الاشتراك 149 ريال سعودي  شهريا لفترة محدودة </p>
<a href="https://3zzo.aryaf.sa/product/%D9%85%D8%A4%D8%B4%D8%B1-%D9%84%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84" target="_blank">
<button  className="Btn">

  Pay
<svg className="svgIcon" viewBox="0 0 576 512">
  <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
</svg>
</button>
</a>
<p>المنتج غير قابل للاسترداد </p>
</div>
</>

      </div>
    </div>
  );
};

export default Indicator;
