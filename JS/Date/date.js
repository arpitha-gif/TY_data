var todaysDate= new Date();
console.log(`Todays Date is ${todaysDate}`)

// month starts from 0
var futureDate=new Date(2022, 1, 2, 12, 30, 45);
console.log(`Future Date is ${futureDate}`)


var dateOfBirth= new Date('June 15 2010 ')
console.log(`date of birth: ${dateOfBirth}`);

var findDateUsingMilliseconds= new Date(840000)
// time from 1 jan 1970
console.log(`date with milliseconds: ${findDateUsingMilliseconds}`);

console.log(`==================`)

console.log(`full year- ${todaysDate.getFullYear()}`);
console.log(`month- ${todaysDate.getMonth()} `);
console.log(`date - ${todaysDate.getDay()} `)
console.log(`date time - ${Date.now()}`);

console.log(`==================`)

// ask to do in clss 
var months=['January','February','March','April','May','June','July','August','September','October','November','December']
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

var formatDate = new Date( "Oct 15, 2021 " );
var month=formatDate.getMonth()
var day=formatDate.getDay()
console.log(`${months[month]} ${formatDate.getDate()} ${formatDate.getFullYear()}`);