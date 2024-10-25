import React, { useEffect, useState } from 'react';
import './Gt.css'; // Import your CSS file here

const CounterSection = () => {
  const counters = [
    { value: 65, label: 'Raised In 2020' },
    { value: 59, label: 'Time in gaming' },
    { value: 50, label: 'Country coverage' },
    { value: 25, label: 'Drink coffee' },
  ];

  const [animatedValues, setAnimatedValues] = useState(
    counters.map(counter => ({ ...counter, currentValue: 0 }))
  );

  useEffect(() => {
    const duration = 3500; // Total duration for animation
    const intervalTime = 50; // Time interval for each update
    const totalSteps = duration / intervalTime;

    // Set the increment for each counter
    const increments = counters.map(counter => ({
      value: counter.value,
      increment: counter.value / totalSteps,
    }));

    const intervals = increments.map((counter, index) => {
      let currentValue = 0;

      return setInterval(() => {
        if (currentValue < counter.value) {
          currentValue += counter.increment;
          if (currentValue > counter.value) currentValue = counter.value;

          setAnimatedValues(prev => {
            const updatedValues = [...prev];
            updatedValues[index].currentValue = Math.floor(currentValue);
            return updatedValues;
          });
        } else {
          clearInterval(intervals[index]);
        }
      }, intervalTime);
    });

    // Cleanup function to clear intervals
    return () => intervals.forEach(clearInterval);
  }, [counters]); // Include 'counters' here

  return (
    <section id="counter-2" className="counter-section-2">
      <div className="container">
        <div className="section-title text-center headline">
          <h2 style={{ color: '#05297e' }}>See our impressions</h2>
        </div>
        <div className="counter-content">
          <div className="row">
            {animatedValues.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="counter-boxed headline position-relative">
                  <div className="graph-outer">
                    <div
                      className="dial"
                      style={{
                        color: '#05297e',
                        background: '#fff',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '24px',
                        border: 'none',
                        outline: 'none',
                      }}
                    >
                      <p className="values">{item.currentValue}</p>%
                    </div>
                    <h3>{item.label}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
