import React, { useState } from 'react'
import './Search.css'

import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Search() {

    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())
    const history = useHistory();
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }

      function dateSelectHandler(ranges){
          setStartDate(ranges.selection.startDate);
          setEndDate(ranges.selection.endDate);
          console.log(ranges);
      }

    return (
        <div className='search'>
            <DateRangePicker ranges = {[selectionRange]} onChange={dateSelectHandler} />
            <h2>Number Of Guests <PeopleIcon/></h2>
            <input min = {0} defaultValue={2} type='number'/>
            <Button variant='outlined' onClick = {()=> history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search
