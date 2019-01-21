const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    city: 'Hamilton',
    twitter: '@wesbos'
  };
//   const first = person.first;
//   const last = person.last;

  const { first, last, country} = person;
  console.log(first);
  console.log(country);