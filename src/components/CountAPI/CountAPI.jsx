import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './CountAPI.css';
import axios from 'axios';

const CountAPI = () => {

    const [visitors, setVisitors] = useState([])

    console.log('visitors', visitors)
    useEffect(()=>{
        const countVisitors = async() => {
            try{
                await axios.get('https://api.countapi.xyz/update/boktiarr/counter/?amount=1')
                // .then((response) => response.json())
                .then((response) => {
                    // console.log('visitors data',response)
                    setVisitors(response.data)
                })
            }catch(e){
                console.log(e)
            }
        }
        countVisitors()
    },[])

  return (
    <section className='container'>
        <div className="d-flex justify-content-center align-items-center">
            <h3>Today {visitors.value} people has visited this site.</h3>
        </div>
    </section>
  )
}

export default CountAPI