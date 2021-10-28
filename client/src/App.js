import React, { useState } from 'react';
import { Box, Heading, Grommet, ResponsiveContext } from 'grommet';

// Components
import { AppBar } from './components/AppBar/AppBar';
import { CollectSleepDataForm } from './components/CollectSleepDataForm/CollectSleepDataForm';
import { Loading } from './components/Loading/Loading';
import { Error } from './components/Error/Error';
import { SleepDataResults } from './components/SleepDataResults/SleepDataResults';

// Libs
import { calculateSleepEffectiveness } from './lib/calculateSleepEffectiveness';
import { saveSleepData } from './api/saveSleepData';

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
    name: COLLECT_DATA_STATE,
    data: {},
  };

  // This will track our state through the workflow
  const [currentState, setCurrentState] = useState(initialState);

  const getComponentForState = () => {
    switch (currentState.name) {
      case CALCULATE_RESULTS_STATE:
        return <Loading />;
      case PRESENT_ERROR_STATE:
        return <Error onReset={() => setCurrentState(initialState)} />;
      case PRESENT_RESULTS_STATE:
        return (
          <SleepDataResults
            results={currentState.data.results}
            onRestart={() => setCurrentState(initialState)}
          />
        );
      case COLLECT_DATA_STATE:
      default:
        const handleSubmit = async ({ value }) => {
          // Update our state to calcuating
          setCurrentState({
            name: CALCULATE_RESULTS_STATE,
          });

          // Calculate sleep effectiveness
          const sleepEffectivenessRating = calculateSleepEffectiveness(
            value.inSleepDuration,
            value.inBedDuration
          );

          // Save sleep data
          try {
            await saveSleepData({
              ...value,
              results: sleepEffectivenessRating,
            });

            // Present results
            setCurrentState({
              name: PRESENT_RESULTS_STATE,
              data: {
                results: sleepEffectivenessRating,
              },
            });
          } catch (e) {
            // Oh no, an error! Present the error
            setCurrentState({
              name: PRESENT_ERROR_STATE,
              data: {
                message: e.message,
              },
            });
          }
        };
        return <CollectSleepDataForm onSubmit={handleSubmit} />;
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
