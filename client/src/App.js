import React, { useState } from 'react';
import { Box, Heading, Grommet, ResponsiveContext } from 'grommet';

import { AppBar } from './components/AppBar/AppBar';
import { CollectSleepDataForm } from './components/CollectSleepDataForm/CollectSleepDataForm';
import { Loading } from './components/Loading/Loading';
import { Error } from './components/Error/Error';
import { SleepDataResults } from './components/SleepDataResults/SleepDataResults';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '16px',
      height: '20px',
    },
  },
};

// Collecting sleep data
const COLLECT_DATA_STATE = 'COLLECT_DATA_STATE';

// Calculating results
const CALCULATE_RESULTS_STATE = 'CALCULATE_RESULTS_STATE';

// Presenting error
const PRESENT_ERROR_STATE = 'PRESENT_ERROR_STATE';

// Presenting results
const PRESENT_RESULTS_STATE = 'PRESENT_RESULTS_STATE';

function App() {
  const initialState = {
    name: PRESENT_RESULTS_STATE,
    data: {},
  };

  // This will track our state through the workflow
  const [currentState, setCurrentState] = useState(initialState);

  const getComponentForState = () => {
    switch (currentState.name) {
      case CALCULATE_RESULTS_STATE:
        return <Loading />;
      case PRESENT_ERROR_STATE:
        return (
          <Error
            onReset={() => {
              setCurrentState(initialState);
            }}
          />
        );
      case PRESENT_RESULTS_STATE:
        return <SleepDataResults results={{ total: 47 }} />;
      case COLLECT_DATA_STATE:
      default:
        return <CollectSleepDataForm onChange={() => {}} />;
    }
  };

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                SleepyTime
              </Heading>
            </AppBar>
            {getComponentForState()}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
