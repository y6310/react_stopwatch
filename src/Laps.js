import React from 'react';

const Laps = ({ lapTimes }) => {
    return (
      <div>
        {lapTimes.map((lap, index) => (
          <div key={index}>
            Lap{String(index+1)} {String(lap.lapMinTime).padStart(2, '0')}:{String(lap.lapSecTime).padStart(2, '0')}.{String(lap.lapMmTime).padStart(2, '0')}
          </div>
        ))}
      </div>
    );
  };

export default Laps