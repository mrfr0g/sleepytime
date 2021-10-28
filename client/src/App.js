import React, { useState } from 'react';
import {
  Button,
  Box,
  Heading,
  Form,
  FormField,
  Grommet,
  ResponsiveContext,
} from 'grommet';

import { DurationDropDown } from './components/DurationDropDown/DurationDropDown';
import { AppBar } from './components/AppBar/AppBar';

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

function App() {
  const [data, setData] = useState({});
  const [valid, setValid] = useState(false);

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
            <Form
              value={data}
              onChange={(nextValue) => setData(nextValue)}
              onSubmit={({ value }) => {}}
              validate="change"
              onValidate={(e) => {
                // Avoid causing an update while Form is updating
                setTimeout(() => {
                  setValid(e.valid);
                }, 0);
              }}
            >
              <Box pad="small">
                <FormField
                  name="inBedDuration"
                  label="Duration in bed *"
                  required={true}
                >
                  <DurationDropDown name="inBedDuration" />
                </FormField>
                <FormField
                  name="inSleepDuration"
                  label="Duration asleep *"
                  required={true}
                >
                  <DurationDropDown name="inSleepDuration" />
                </FormField>
                <Box width="small" alignSelf="end">
                  <Button
                    disabled={!valid}
                    primary
                    type="submit"
                    label="Calculate"
                  />
                </Box>
              </Box>
            </Form>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
