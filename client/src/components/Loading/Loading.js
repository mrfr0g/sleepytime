import React from 'react';
import { Box, Text } from 'grommet';

/**
 * Renders a loading screen with a nice animated gif
 * TODO for production we should replace this with a controlled image
 * @returns Component
 */
export function Loading() {
  return (
    <Box height={{ min: '480px' }} margin={{ top: 'small' }}>
      <Box align="center">
        <Text>Loading...</Text>
        <iframe
          title="via GIPHY - https://giphy.com/gifs/funny-art-cute-3ov9jVajUykLpFTMQM"
          data-attribution="via GIPHY - https://giphy.com/gifs/funny-art-cute-3ov9jVajUykLpFTMQM"
          src="https://giphy.com/embed/3ov9jVajUykLpFTMQM"
          width="467"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
}
