import React from 'react'
import Laps from './Laps'
import { useState, useEffect }  from "react";

const Times = () => {
    const [mmtime ,setmmTime] = useState(0);
    const [sectime, setsecTime] = useState(0);
    const [mintime, setminTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lapTimes, setLapTimes] = useState([]);

    useEffect(() => {
        let interval
        if(isRunning) {
            interval = setInterval(() => {
                setmmTime((prevmmTime) => {
                    if(prevmmTime >= 99){
                        setsecTime((prevSecTime) => {
                            if(prevSecTime >= 59){
                                setminTime((prevMinTime) => prevMinTime +1);
                                return 0;
                            }
                            return prevSecTime + 1;
                        });
                        return 0;
                    }
                    return prevmmTime + 1;
                });
            },10);

        }else{
            clearInterval(interval);
        }


        return () => clearInterval(interval);
    },[isRunning]);

        const startStop = () =>{
            setIsRunning(!isRunning);
        }

        const resetLap = () =>{
            if(!isRunning){
                setmmTime(0);
                setsecTime(0);
                setminTime(0);
                setIsRunning(false);
                setLapTimes([])
                }
        };

        const toggleTime = () =>{
            let lapMinTime = mintime
            let lapSecTime = sectime
            let lapMmTime = mmtime
            

            setLapTimes((prevLapTimes) => {
                return[...prevLapTimes, {lapMinTime, lapSecTime, lapMmTime}]
            })
        };

        const handleClick = isRunning ? toggleTime : resetLap

  return (
    <>
    <div>{String(mintime).padStart(2, '0')}:{String(sectime).padStart(2, '0')}.{String(mmtime).padStart(2, '0')}</div>
    <button onClick = {startStop}>{isRunning ? 'Stop' : 'Start'}</button>
    <button onClick = {handleClick}>{isRunning ? 'Lap' : 'Reset'}</button>
    <Laps lapTimes = {lapTimes}/>
    </>
  )
};

export default Times