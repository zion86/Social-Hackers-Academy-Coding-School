{ // Task 1
  let numbers = [1, 2, 3, 4];

  let newNumbers = numbers
    .filter(num => num % 2 !== 0)
    .map(num => num * 2);

  console.log(newNumbers); // [2, 6]
}

{ // Task 2
  let monday = [
    { name: 'Write a summary HTML/CSS', duration: 180 },
    { name: 'Some web development', duration: 120 },
    { name: 'Fix homework for class10', duration: 20 },
    { name: 'Talk to a lot of people', duration: 200 }
  ];

  let tuesday = [
    { name: 'Keep writing summary', duration: 240 },
    { name: 'Some more web development', duration : 180 },
    { name: 'Staring out the window', duration: 10 },
    { name: 'Talk to a lot of people', duration: 200 },
    { name: 'Look at application assignments new students', duration: 40 }
  ];

  // Collect two days'worth of tasks.
  let tasks = monday.concat(tuesday);
  console.log(tasks);

  // Convert the task durations to hours, instead of minutes.
  let converToHours = tasks.map(min => min.duration / 60);
  console.log(converToHours);

  // Filter out everything that took two hours or more (remove from the collection)
  let filterHours = converToHours.filter(i => i < 2);
  console.log(filterHours);

  // Multiply the each duration by a per-hour rate for billing 
  // (you can decide yourself what Maartje should make per hour) and sum it all up.
  let costHours = converToHours.map(i => i * 10);
  let sum = (accumulator, currentValue) => accumulator + currentValue;
  let totalPay = costHours.reduce(sum);
  console.log(costHours);
  console.log(totalPay);

  // Output a formatted Euro amount.
  console.log(totalPay + ' Euro');
}