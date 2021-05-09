import React from 'react';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';

import { cancelBooking } from '../actions/user';

import { Link } from 'react-router-dom';

export default function Profile() {

  const { bookingHistory } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      {
        (bookingHistory.length) ? (
          <>
            {
              bookingHistory.map((show) => {
                return (
                  <div style={{
                    width: "100%", border: "1px solid lightgrey", marginTop: "100px"
                  }}>
                    <div className="d-sm-flex justify-content-between">
                      <div className="d-flex">
                        <div className="mx-3 my-3">
                          <img variant="top" src="https://via.placeholder.com/200" height="150px" width="150px" />
                        </div>
                        <div className="d-flex flex-column mx-4 my-4">
                          <span className="" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{show.name}</span>
                          <span className="my-1" style={{ fontSize: "0.8rem", fontStyle: "italic" }}>{show.genre}</span>
                          <span className="" style={{ fontSize: "0.9rem" }}>{show.cinema}</span>
                          <span className="my-1" >{show.showTime}</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center text-success" style={{ width: "100px", fontWeight: "bold" }}>
                        Rs. {show.price}
                      </div>

                    </div>
                    <div className="mx-3 my-3 d-sm-flex justify-content-between" >
                      <p>Booked Seats:
                        {
                          show.seatNumber.map((seat) => {
                            return (
                              <span style={{ fontSize: "1.1rem" }}> {seat},</span>
                            )
                          })
                        }
                      </p>
                      <Button variant="danger" onClick={
                        () => {
                          dispatch(cancelBooking({
                            id: show.id,
                          })
                          )
                        }
                      }>Cancel Booking</Button>
                    </div>
                  </div>
                )
              })
            }
          </>
        ) : (
          <>
            <div style={{ marginTop: "100px", width: "100%", display: "flex", justifyContent: "center" }}>
              No previous Bookings are Found here.
              Please head to
              <Link to="/">Home</Link>
            </div>
          </>
        )
      }
    </>
  );
}
