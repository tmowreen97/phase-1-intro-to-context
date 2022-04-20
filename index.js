// Your code here

// const employeeInfo ={
//   firstName: '',
//   familyName: '',
//   title: '',
//   payPerHour: '',
//   timeInEvents: [],
//   timeOutEvents: [],
// }
// function createEmployeeRecord(array){
//   employeeInfo.firstName = array[0]
//   employeeInfo.familyName = array[1]
//   employeeInfo.title = array[2]
//   employeeInfo.payPerHour = array[3]

//   return employeeInfo
// }

function createEmployeeRecord(array){
  const employeeInfo ={
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
  return employeeInfo
}

function createEmployeeRecords (array){
  return array.map((record)=> createEmployeeRecord(record))
}

function createTimeInEvent(employeeRecObj, date){
  var hour
  if (date.length === 15){
    hour = date.slice(11,13)
  } else {
    hour = date.slice(11,12)
  };
  const timeInObj = [
    {
      type: "TimeIn",
      hour: `${hour}`,
      date: date.slice(0,10),
    }
  ]
  employeeRecObj.timeInEvents = timeInObj
  return employeeRecObj

}


// function createTimeOutEvent(employeeRecObj, date){
//   const timeOutObj = [
//     {
//       type: "TimeOut",
//       hour: date.slice(11,13),
//       date: date.slice(0,10),
//     }
//   ]
//   employeeRecObj.timeOutEvents = timeOutObj
//   return employeeRecObj

// }
const example = ['Tasreen', 'Mowreen', 'Ms.', 18]
const date = "2022-04-20 1440"
console.log (createTimeInEvent(createEmployeeRecord(example), date))




//PseudoCode
// first we convert array into an object
// we want the values to coincide with the values in the array