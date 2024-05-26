import React from "react";
import image from "../images/pngegg.png"

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        
      
        <div className=" navbar-header" style={{display:"flex"}}>
        <div className="col-4"><img src={image} className="img-responsive" alt=""  style={{height:"50px"}}/></div>
        <div className="col-8" style={{marginLeft:"5px"}}><a className="navbar-brand page-scroll " href="#page-top">
           HOUSE KEEPING
          </a></div>
          
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                GIỚI THIỆU
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                DỊCH VỤ DỌN DẸP
              </a>
            </li>
            
            <li>
              <a href="#about" className="page-scroll">
                ĐỘI NGŨ
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                CAM KẾT DỊCH VỤ 
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                LIÊN HỆ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
