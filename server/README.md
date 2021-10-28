# SleepyTime API

The SleepyTime API accepts sleep data from our proprietary UI, and saves it in memory... for safe keeping

## Development

The server uses (expressjs)[https://expressjs.com/] to manage HTTP routing.

## Data store

Currently, there are no requirements on how to store this data, so I'm opting for the cheapest data storage choice, memory. Before moving to production, we should choose a more permanent solution to store data.

### Running

`yarn start`

## Testing

Jest provides a BDD style testing framework, which lets us quicky generate tests, and mocks at the unit test level.

### Starting tests

`yarn test`

_Running a single test_

`yarn test -- ./path/to/test`
