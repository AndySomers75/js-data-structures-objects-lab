const driver = {};

function updateDriverWithKeyAndValue(driver, address, value ) {  
  // Alternate using ES6 Spread operators:
  // return { ...driver, ...{ [key]: value } }
  return Object.assign({}, driver, { address: "11 Broadway" });
}
 

function destructivelyUpdateDriverWithKeyAndValue(driver, address, value ) {
  
  driver [address] = '12 Broadway';

  return driver;
}


function deleteFromDriverByKey(driver, key) {
  // Alternate using ES6 Spread operators:
  // const newObj = { ...driver }
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
