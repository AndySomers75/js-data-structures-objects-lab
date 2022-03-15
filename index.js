const  employee = {
  name: 'Andrew',
  streetAddress: '161 Mcadam St',
}

function updateDriverWithKeyAndValue(employee) {  
  const employee2 = {
    ...employee,
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  return employee2;
};
 
function destructivelyUpdateDriverWithKeyAndValue(employee) {
  
 employee.name = "Sam",
employee.streetAddress = "12 Broadway";

  return employee;
}

function deleteFromDriverByKey(employee, key) {
    let newObj = {...employee};
    delete newObj[key]; 
    return newObj;
}

function destructivelyDeleteFromDriverByKey(employee) {
  delete employee.name;

  return employee;
}
