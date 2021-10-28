import React from 'react';
import { Box } from 'grommet';

/**
 * Renders an application header
 * @param {Object} props
 * @returns Component
 */
export function AppBar(props) {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'medium' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    />
  );
}
