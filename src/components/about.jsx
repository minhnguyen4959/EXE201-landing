import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/4TzV8bMZsHT0EBwqKlRrN7/5c4d4b98a336208cbd462a032a25e0f8/bmF0dXJhbF9wcm9kdWN0cy5qcGc/1200w/s%E1%BA%A3n-ph%E1%BA%A9m-c%C3%B3-ngu%E1%BB%93n-g%E1%BB%91c-t%E1%BB%B1-thi%C3%AAn-nhi%C3%AAn.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Đội ngũ</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Tại sao lại chọn chúng tôi ?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
