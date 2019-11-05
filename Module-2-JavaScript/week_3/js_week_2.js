// String and Array challenges
// ---------------------------

{ // Task 1
  let myString = 'hello,this,is,a,difficult,to,read,sentence';
  console.log(myString);
  console.log(myString.length);

  myString = myString.replace(/,/g, ' ');
  console.log(myString);
}

{ // Task 2
  let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
  favoriteAnimals.push('turtle');
  console.log(favoriteAnimals);

  favoriteAnimals.splice(1, 0, 'meerkat');
  console.log('I think the new value of the array is: ' + favoriteAnimals);
  console.log('The array has a length of: ' + favoriteAnimals.length);

  favoriteAnimals.splice(3, 1);
  console.log(favoriteAnimals);

  favoriteAnimals.indexOf('meerkat');
  console.log('The item you are looking for is at index: ' + favoriteAnimals.indexOf('meerkat'));
}

// ---------------
// More JavaScript
// ---------------

{ // Task 1
  function myFunction(a, b, c) {
    let sum = a + b + c;
    return sum;
  };

  console.log(myFunction(2, 4, 6));
}

{ // Task 2
  function colorCar(color) {
    return 'a ' + color + ' car';
  };

  console.log(colorCar('red'));
}

{ // Task 3
  let myAutos = {
    audi: 'white',
    ford: 'green',
    mercedes: 'grey'
  };

  let myCountries = {
    Ukraine: 'Kiev',
    Greece: 'Athens'
  };

  function printObj(newObj) {
    return newObj;
  };

  console.log(printObj(myAutos));
  console.log(printObj(myCountries));
}

{ // Task 4
  function vehicleType(color, code) {
    if (code === 1) {
      code = 'car';
    } else if (code === 2) {
      code = 'motorbike';
    } else {
      return 'Error';
    }
    return 'a ' + color + ' ' + code;
  };

  console.log(vehicleType('red', 1));
  console.log(vehicleType('blue', 2));
}

{ // Task 5
  console.log(3 === 3 ? 'yes' : 'no');
}

{ // Tasks 6, 7, 8, 9
  function vehicle(color, code, age) {
    let list = ['car', 'motorbike', 'bike'];
    if (age <= 1) {
      age = 'new';
      return 'a ' + color + ' ' + age + ' ' + list[code - 1];
    } else {
      age = 'used';
      return 'a ' + color + ' ' + age + ' ' + list[code -1];
    }
  };

  console.log(vehicle('blue', 1, 5));
  console.log(vehicle('green', 3, 1));
}

{ // Tasks 10, 11
  let myStr = "Amazing Joe's Garage, we service";
  let listOfvehicles = ['cars', 'motorbikes', 'caravans', 'bikes'];
  for (let i = 0; i < listOfvehicles.length; i++) {
    if (i === listOfvehicles.length - 1) {
      myStr += ' and ' + listOfvehicles[i] + '.';
    } else if (i === listOfvehicles.length - 2) {
      myStr += ' ' + listOfvehicles[i];
    } else {
      myStr += ' ' + listOfvehicles[i] + ',';
    }
  };

  console.log(myStr);
}

{ // Task 12
  let myObject = {};
  console.log(myObject);
}

{ // Tasks 13, 14
  let myTeachers = {
    'html': 'Aristeidis Bampakos',
    'css': 'George Sisko',
    'js_1': 'Kosmas Pouianou',
    'js_2': 'Kostas Minaidis'
  };

  console.log(myTeachers);
}

{ // Task 15
  let x = [1,2,3];
  let y = [1,2,3];
  let z = y;

  console.log(x == y); // false
  console.log(x === y); // false
  console.log(z == y); // true
  console.log(z == x); // false
}

{ // Task 16
  let o1 = { foo: 'bar' };
  let o2 = { foo: 'bar' };
  let o3 = o2;

  console.log(o1);
  console.log(o2);
  console.log(o3);
  console.log(o2 = o3); // false

  o1.foo = 'new bar';

  console.log(o1);

  o2.foo = 'new new bar';

  console.log(o2);
  console.log(o3);
  console.log(o1 == o2); // false
  console.log(o2 === o3); // false
}

{ // Task 17
  let bar = 42;
  console.log(typeof typeof bar); // string

  let newBar = '42';
  console.log(typeof typeof newBar); // string
}