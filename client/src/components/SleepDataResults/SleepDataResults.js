import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';

/**
 * Returns the sleep results component
 * TODO Remove static/mock stats before production
 * @property {Number} results The calculation results to display
 * @property {Function} onRestart An optional function called when the 'Reset?' button is pressed
 * @returns Component
 */
export function SleepDataResults({ results, onRestart = () => {} }) {
  return (
    <Box fill align="center">
      <Box direction="row" align="center">
        <Box pad="medium">
          <Heading level={1}>{results}</Heading>
        </Box>
        {/* This might be a good place to help the user contextualize results */}
        <Box>
          <Heading level={4} margin="none">
            +21% from national average
          </Heading>
          <Heading level={4} margin="none">
            +87% of people in your demographic report the same
          </Heading>
          {/* Maybe even a sleep tip */}
          <Text size="small">
            Be sure to turn off your phone 30 minutes before going to bed!
          </Text>
        </Box>
        <Box alignSelf="end">
          <Button onClick={onRestart} label="Restart?" />
        </Box>
      </Box>
    </Box>
  );
}
