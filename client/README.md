# SleepyTime UI

This app will help you keep track of your time asleep, over your time in bed.

## Development

The UI uses [grommet-starter-app](https://github.com/grommet/grommet-starter-new-app) as a base application. Under the hood this is just a collection of scripts, and webpack configurations that provide a set of helpful features like testing, webpack hot reload, and babel configuration for React.

### Running

`yarn dev`

### Building

`yarn build`

## Testing

Testing is done using a combination of Jest, and Enzyme. Jest provides a BDD style testing framework, which lets us quicky generate tests, and mocks at the unit test level. Enzyme lets us test our component integration with a mock browser. In this stack, Jest lets us ask questions like "does this function return 20?", and Enzyme lets us ask "when clicking on this button, does it fire a redux action?"

TODO add Enzyme -- Time won't allow me to add this right now

### Starting tests

`yarn test`

_Running a single test_

`yarn test -- ./path/to/test`
