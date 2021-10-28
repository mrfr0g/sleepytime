import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import { noop } from '../../lib/noop';

/**
 * Returns an error view
 * @property {String} message An optional message to provide along with the error
 * @property {Function} onReset An optional callback, Triggered when the Retry? button is pressed
 * @returns Component
 */
export function Error({ onReset = noop, message = '' }) {
  return (
    <Box align="center">
      <Box>
        <Heading level={1}>Oops, something went wrong</Heading>
        <Text>Something went wrong, we're sorry about that!</Text>
        {message && <Text>{message}</Text>}
        {onReset !== noop && (
          <Box alignSelf="end">
            <Button onClick={onReset} label="Retry?" />
          </Box>
        )}
      </Box>
    </Box>
  );
}
