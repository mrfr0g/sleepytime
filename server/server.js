const {
  saveSleepData,
  getSleepDataByIndex,
  listSleepData,
} = require('./controllers/SleepData');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json()); // for parsing application/json

// Find some sleep data
app.get('/sleepData(/:index)?', (req, res) => {
  const index = req.params.index;
  let data;

  if (!index) {
    data = listSleepData();
  } else {
    data = getSleepDataByIndex(index);
  }

  // Catching here to ensure we're always responding
  try {
    res.send(JSON.stringify(data));
  } catch (e) {
    res.send('Unable to parse data', e.message);
  }
});

// Store new sleep data
app.post('/sleepData', (req, res) => {
  const result = saveSleepData(req.body);

  res.send(
    JSON.stringify({
      result,
    })
  );
});

app.listen(port, () => {
  console.log(`SleepyTime server listening at http://localhost:${port}`);
});
