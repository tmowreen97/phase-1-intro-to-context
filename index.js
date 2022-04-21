// Your code here
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
  const timeInObj =
    {
      type: "TimeIn",
      hour: parseInt(date.split(' ')[1]),
      date: date.split(' ')[0],
    }
  employeeRecObj.timeInEvents.push(timeInObj)
  return employeeRecObj

}

function createTimeOutEvent(employeeRecObj, date){
  const timeOutObj = 
    {
      type: "TimeOut",
      hour: parseInt(date.split(' ')[1]),
      date: date.split(' ')[0],
    }
  employeeRecObj.timeOutEvents.push(timeOutObj)
  return employeeRecObj

}

function hoursWorkedOnDate(employeeRecObj, date){
  const timeIn= employeeRecObj.timeInEvents[0].hour.toString()
  const timeOut = employeeRecObj.timeOutEvents[0].hour.toString()
  if (date == employeeRecObj.timeInEvents[0].date){
    const diff = (timeOut-timeIn).toString()
    return parseInt(diff.slice(0, diff.length-2))
  }
}

function wagesEarnedOnDate(employeeRecObj, date){
  const hoursWorked = hoursWorkedOnDate(employeeRecObj, date)
  const payOwed = (employeeRecObj.payPerHour)*hoursWorked
  return (payOwed)
}

function allWagesFor (employeeRecObj){
  var sum=0
  for (let i=0; i<employeeRecObj.timeInEvents.length; i++){
    let date = employeeRecObj.timeInEvents[i].date
    console.log(date)
    const wages = (wagesEarnedOnDate(employeeRecObj,date))
    console.log(wages)
    sum+=wages
  }
  return sum
}

// function allWagesFor(employeeRecObj){
//   let dates = []
//   for (let i=0; i<employeeRecObj.timeInEvents.length;i++){
//     dates.push(employeeRecObj.timeInEvents[i].date)
//   }
//   console.log(dates)
//   var sum =0
//   for (const date in dates){
//     sum += (wagesEarnedOnDate(employeeRecObj,date))
//     console.log (sum)
//   }
//   return sum
// }


const example = ['Tasreen', 'Mowreen', 'Ms.', 18]
const date = "2022-04-20 1440"
console.log (createTimeInEvent(createEmployeeRecord(example), date))




//PseudoCode
// first we convert array into an object
// we want the values to coincide with the values in the array  // var sum =0
  // for (let i=0; i++) {
  //   console.log(wagesEarnedOnDate(employeeRecObj, (employeeRecObj.timeInEvents[i].date)));
    // sum+= wages
  
  // console.log(sum)
  // return sum