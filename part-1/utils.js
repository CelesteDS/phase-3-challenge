function concatArrays(req, res) {
  const arr1 = req.body.array1;
  const arr2 = req.body.array2;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    res.status(400).json({ error: 'Input data should be of type Array.' });
  } else {
    res.status(200).json({ result: arr1.concat(arr2) });
  }
}

const daysOfWeek = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7 };

function getDay(req, res) {
  const day = req.params.day;
  const dayNumber = daysOfWeek[day];
  if (dayNumber === undefined) {
    res.status(400).json({ response: `'${day}' is not a valid day!` });
  } else {
    res.set('Content-Type', 'text/plain').status(200).send(String(dayNumber));
  }
}

module.exports = { concatArrays, getDay };
