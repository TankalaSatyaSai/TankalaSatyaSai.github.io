
import React from 'react';
import './Responsibilities.css'; // You can define your CSS styles for CoursesContainer here



const Responsibilities = () => {
  return (
    <div className="container" style={{marginTop:'200px',textAlign:"center"}}>
      <h style={{ textAlign: 'center', margin: '100px', fontFamily: 'calibri', fontWeight: 'bold',fontSize:"40px",color:"violet" }}>Position of Responsibilities</h>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
        
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
              Club Head - Centre For Innovation (CFI) - iBot (Robotics) Club
              </div>
              
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
              Co-founded Team Chetak, excelled in ABU Robocon.
              </div>
              
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">
              Club Coordinator - Centre For Innovation (CFI) - Finance Team
              </div>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
