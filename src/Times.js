import React from 'react'
import { useState, useEffect }  from "react";

const Times = () => {
    const [mmtime ,setmmTime] = useState(0);
    const [sectime, setsecTime] = useState(0);
    const [mintime, setminTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
    
        if (isRunning) {//isRunningがtrueのとき
            interval = setInterval(() => {//10ミリ秒ごと実行
                setmmTime((prevmmTime) => {
                    if (prevmmTime >= 99) {
                        setsecTime((prevSecTime) => {
                            if (prevSecTime >= 59) {
                                setminTime((prevMinTime) => prevMinTime + 1);//秒が59以上になったら分を足す
                                return 0;
                            }
                            return prevSecTime + 1;
                        });
                        return 0;
                    }
                    return prevmmTime + 1;
                });
            }, 10);  
        } else {
            clearInterval(interval);
        }
    
        return () => clearInterval(interval);
    }, [isRunning]);


        const startStop = () =>{
            setIsRunning(!isRunning);
        }

        const reset = () =>{
            setmmTime(0);
            setsecTime(0);
            setminTime(0);
            setIsRunning(false);
        };

  return (
    <>
    <div>{String(mintime).padStart(2, '0')}:{String(sectime).padStart(2, '0')}.{String(mmtime).padStart(2, '0')}</div>
    <button onClick = {startStop}>{isRunning ? 'Stop' : 'Start'}</button>
    <button onClick = {reset}>Reset</button>
    </>
  )
};

export default Times