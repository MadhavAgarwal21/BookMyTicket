import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';

import { confirmBooking } from '../actions/user.js';

import { movies } from '../assets/movieList.js';

import { Alert } from "react-bootstrap"

import './style.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Seat = ({ match }) => {

  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [genre, setGenre] = React.useState('');

  useEffect(() => {
    movies.map((movie) => {

      if (movie.id == match.params.id) {
        setName(movie.name)
        setGenre(movie.genre)
      }
    })
  }, [])

  const [time, setTime] = React.useState('');
  const [cinema, setCinema] = React.useState('');

  const dispatch = useDispatch();

  const cinemaHandleChange = (event) => {
    setCinema(event.target.value);
  };

  const timeHandleChange = (event) => {
    setTime(event.target.value);
  };

  const [seats, setSeats] = React.useState([]);
  const [price, setPrice] = React.useState(0);

  const [error, setError] = React.useState();

  const seatHandler = (event) => {
    var index = -1
    const yourSeats = [...seats]

    if (yourSeats.length > 0) {

      index = yourSeats.indexOf(event.target.value);

      if (index != -1) {
        yourSeats.splice(index, 1)

        setPrice(price - 100)
      }
      else {
        yourSeats.push(event.target.value)
        setPrice(price + 100)
      }
    }
    else {
      yourSeats.push(event.target.value)
      setPrice(price + 100)
    }
    // console.log(yourSeats);
    setSeats(yourSeats)
  }



  return (

    <div style={{ minWidth: "400px" }} >

      <br /><br />
      <br /><br />

      {
        error && <Alert variant="danger">
          {error}
          {/* {setError("")} */}
        </Alert>
      }
      <div className="d-flex justify-content-center" style={{ width: "90%", marginBottom: "25px" }}>
        <FormControl className={`${classes.formControl} `} style={{ width: "220px" }}>
          <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={cinema}
            onChange={cinemaHandleChange}
            required
          >
            <MenuItem value={"Golden Screen"}>Golden Screen</MenuItem>
            <MenuItem value={"TGV"}>TGV</MenuItem>
            <MenuItem value={"KL Tower"}>KL Tower</MenuItem>
          </Select>
          <FormHelperText>Select Cinema Hall</FormHelperText>
        </FormControl>

        <FormControl className={`${classes.formControl} `} style={{ width: "220px" }}>
          <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={time}
            onChange={timeHandleChange}
            required
          >
            <MenuItem value={"10AM-12PM"}>10AM-12PM</MenuItem>
            <MenuItem value={"2PM-4PM"}>2PM-4PM</MenuItem>
            <MenuItem value={"4PM-6PM"}>4PM-6PM</MenuItem>
          </Select>
          <FormHelperText>Select Show Timing</FormHelperText>
        </FormControl>

      </div>
      <div class="seatStructure">
        <center>
          <table id="seatsBlock">
            <tr>
              <td colSpan="14"><div class="screen">SCREEN</div></td>
              <td rowSpan="20">
                <div class="smallBox emptyBox">Empty Seat</div><br />
                <div class="smallBox greenBox">Selected Seat</div> <br />
              </td>
              <br />
            </tr>
            <tr>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td></td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>A</td>
              <td><input type="checkbox" className="seats" value="A1" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A2" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A3" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A4" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A5" onChange={seatHandler} /></td>
              <td className="seatGap"></td>
              <td><input type="checkbox" className="seats" value="A6" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A7" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A8" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A9" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A10" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A11" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="A12" onChange={seatHandler} /></td>
            </tr>
            <tr>
              <td>B</td>
              <td><input type="checkbox" className="seats" value="B1" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B2" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B3" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B4" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B5" onChange={seatHandler} /></td>
              <td></td>
              <td><input type="checkbox" className="seats" value="B6" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B7" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B8" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B9" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B10" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B11" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="B12" onChange={seatHandler} /></td>
            </tr>
            <tr>
              <td>C</td>
              <td><input type="checkbox" className="seats" value="C1" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C2" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C3" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C4" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C5" onChange={seatHandler} /></td>
              <td></td>
              <td><input type="checkbox" className="seats" value="C6" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C7" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C8" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C9" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C10" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C11" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="C12" onChange={seatHandler} /></td>
            </tr>
            <tr>
              <td>D</td>
              <td><input type="checkbox" className="seats" value="D1" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D2" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D3" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D4" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D5" onChange={seatHandler} /></td>
              <td></td>
              <td><input type="checkbox" className="seats" value="D6" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D7" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D8" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D9" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D10" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D11" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="D12" onChange={seatHandler} /></td>
            </tr>
            <tr>
              <td>E</td>
              <td><input type="checkbox" className="seats" value="E1" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E2" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E3" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E4" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E5" onChange={seatHandler} /></td>
              <td></td>
              <td><input type="checkbox" className="seats" value="E6" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E7" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E8" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E9" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E10" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E11" onChange={seatHandler} /></td>
              <td><input type="checkbox" className="seats" value="E12" onChange={seatHandler} /></td>
            </tr>
          </table>
          {/* href="/details" */}
          <br />
          <Button size="small" variant="contained" color="secondary" onClick={() => {
            if (!cinema || !time || seats.length == 0) {
              alert("Select a cinema Hall, Time and valid seat Number!")
              return null
            }
            else {
              dispatch(
                confirmBooking({
                  name,
                  genre,
                  time,
                  cinema,
                  seats,
                  price,
                  id: match.params.id,
                })
              )
              window.location.href = "/details"
            }
          }
          }  >Confirm Selection</Button>
          {/* href={!error ? "/details" : ""}  */}
          <p>Total Price: {price}</p>
        </center>
      </div>
    </div>
  );
}

export default Seat;