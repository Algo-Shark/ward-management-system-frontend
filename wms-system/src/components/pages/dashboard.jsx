import React from "react";
import Card from "../common/Card";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {/* First row clock */}
            <div className="row">
              <div className="col-md-4 ml-auto"></div>
            </div>

            {/* Second row three cards */}
            <div className="row">
              <div className="col-md-4">
                <Card name="Doctor count" count={6} />
              </div>
              <div className="col-md-4">
                <Card name="Nurse count" count={65} />
              </div>
              <div className="col-md-4">
                <Card name="Patient count" count={45} />
              </div>
            </div>

            {/* Third row with one card and calender */}
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <Card name="Appoinment Count" count={45} />
              </div>
              <div className="col-md-6 col-sm-6 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
