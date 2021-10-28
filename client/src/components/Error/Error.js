import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';

export function Error({ onReset = () => {} }) {
  return (
    <Box align="center">
      <Box>
        <Heading level={1}>Oops, something went wrong</Heading>
        <Text>Something went wrong, we're sorry about that!</Text>
        <Box alignSelf="end">
          <Button onClick={onReset} label="Retry?" />
        </Box>
      </Box>
    </Box>
  );
}
