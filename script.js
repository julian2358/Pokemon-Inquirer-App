var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */

{
    type: 'input',
    message: 'What is your trainer name?',
    name: 'trainerName'
},
{
    type: 'password',
    message: 'type in your password',
    name: "passWord"


},

{
    type: 'list',
    message: 'choose your starter pokemon',
    choices: ['Bulbasaur', 'Charamander', 'Squritle', 'Pikachu'],
    name: 'trainerChoice',

},
{
  type: 'confirm',
  message: 'are you sure?',
  default: true,
  name: 'trainerConfirm',

}

  ])
  .then(answers => {
   if (answers.trainerConfirm == true){
     console.log(`Hello ${answers.trainerConfirm}, your ${answers.trainerChoice} is ready for battle`)
   }
   else{
    console.log(`That's ok ${answers.trainerName} come back when your more sure`)
   }
  })

  
  .catch(error => {
    console.log('you had an error')
  });


  let login = () => { 
    console.log('logging in')
  }
login();