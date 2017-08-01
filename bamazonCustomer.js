var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "English2h!",
  database: "bamazon"
});

//Connecting to the mySQL database, which is listening on port 3306
connection.connect(function(err) {
	if(err){	
  	console.log(err);
	};
    console.log("connection successful!")
    showProducts();
});


function showProducts() {
      console.log("Selecting all products...\n");
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        askQuestion();
        connection.end();
      });
    }    

function askForId(){

    inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "What is the ID of the product you wish to purchase?"
      }
    ]).then(function(answers) {

    });
  }

function askForQuantity(){
  inquirer.prompt([ 
    {
        name: "quantity",
        type: "input",
        message: "Please enter the quantity of the item you wish to purchase."
    }
  ]).then(function(answers){
    
  })
}