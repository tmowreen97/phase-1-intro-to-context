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

function hoursWorkedOnDate(employeeRecObj, dateInput){
  var timeIn =''
  var timeOut=''
  for (let i=0; i<employeeRecObj.timeInEvents.length; i++)
  {
    if (dateInput== employeeRecObj.timeInEvents[i].date){
      timeIn = employeeRecObj.timeInEvents[i].hour.toString()
      if (dateInput== employeeRecObj.timeOutEvents[i].date){
        timeOut=(employeeRecObj.timeOutEvents[i].hour.toString())
      }
    }
  }
  const diff = (timeOut-timeIn).toString()
  return parseInt(diff.slice(0, diff.length-2))
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
    const wages = (wagesEarnedOnDate(employeeRecObj,date))
    sum+=wages
  }
  return sum
}

// function calculatePayroll(arr){
//   console.log(arr[3].timeInEvents)


//   timeInDates=[]
//   var sum =0
//   for (let i=0; i<arr.length; i++){
//     console.log(arr[i].timeInEvents[i].date)
//     debugger
//   }
// }
function calculatePayroll(arrOfERecordObj){
  let payroll = [];

  arrOfERecordObj.forEach(employee => {
      payroll.push(allWagesFor(employee)) 
  });

  return payroll.reduce((previousValue, currentValue) => previousValue + currentValue)
}

const example = ['Tasreen', 'Mowreen', 'Ms.', 18]
const date = "2022-04-20 1440"





//PseudoCode
// first we convert array into an object
// we want the values to coincide with the values in the array  // var sum =0
  // for (let i=0; i++) {
  //   console.log(wagesEarnedOnDate(employeeRecObj, (employeeRecObj.timeInEvents[i].date)));
    // sum+= wages
  
  // console.log(sum)
  // return sum