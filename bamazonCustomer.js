var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "English2h!",
  database: "bamazon"
});
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
        connection.end();
      });
    }    

function askQuestion(){

    inquirer.prompt([
      {
        name: "id",
        message: "What is the ID of the product you wish to purchase?"
      }, {
        name: "quantity",
        message: "Please enter the quantity of the item you wish to purchase."
      }
    ]).then(function(answers) {

    });
  }

//    Then create a Node application called bamazonCustomer.js. 
//Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.