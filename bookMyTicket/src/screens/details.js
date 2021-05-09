import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Profile() {

  return (
    <>
      <div style={{
        width: "100%", border: "1px solid lightgrey", marginTop: "100px"
      }}>
        <div className="d-flex">
          <div className="mx-3 my-3">
            <img variant="top" src="https://via.placeholder.com/200" height="150px" width="150px" />
          </div>
          <div className="d-flex flex-column mx-4 my-4">
            <span className="" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Sheldon Cooper</span>
            <span className="my-1" style={{ fontSize: "0.8rem", fontStyle: "italic" }}>Action | Drama</span>
            <span className="" style={{ fontSize: "0.9rem" }}>PVR Cinemas </span>
            <span className="my-1" >2PM - 4PM</span>
          </div>
        </div>
        <div className="mx-3 my-3 d-flex justify-content-between" >
          <p>Booked Seats: A1, A2, A3.</p>
          <Button variant="danger">Cancel Booking</Button>
        </div>
      </div>
    </>
  );
}