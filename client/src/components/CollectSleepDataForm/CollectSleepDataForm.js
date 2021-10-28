import React, { useState } from 'react';
import { Button, Box, Form, FormField } from 'grommet';
import { DurationDropDown } from '../DurationDropDown/DurationDropDown';

/**
 * Create a form to collect sleep data
 * @param {Grommet/FormProps} props
 * @returns
 */
export function CollectSleepDataForm(props) {
  const [data, setData] = useState({});
  const [valid, setValid] = useState(false);

  return (
    <Form
      {...props}
      value={data}
      onChange={(nextValue) => setData(nextValue)}
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
          <Button disabled={!valid} primary type="submit" label="Calculate" />
        </Box>
      </Box>
    </Form>
  );
}
