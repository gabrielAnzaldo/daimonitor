import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import { steps } from './constants';
import './App.css';

const { Step } = Steps;

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <main>
        <Steps progressDot direction="vertical" current={current}>
          {steps.map((item, index) => {
              const StepDescription = item.description;
              return <Step
                key={item.title}
                title={item.title}
                description={index === current && <div className="steps-content"><StepDescription /></div>}
              />
          })}
        </Steps>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={prev}>
              Previous
            </Button>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
