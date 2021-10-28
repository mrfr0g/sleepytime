const API_URL = `http://localhost:3001`;

/**
 * Saves sleep data to the API, returns result in JSON
 * @param {SleepData} sleepData
 * @returns Promise
 */
export function saveSleepData(sleepData) {
  return fetch(`${API_URL}/sleepData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sleepData),
  }).then((r) => r.json());
}
