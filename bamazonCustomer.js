var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "orangebread307",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //readProducts();
});

function start() {
    inquirer
    .prompt([
      {
        name: "itemID",
        type: "number",
        message: "Select item ID of product you'd like to purchase"
      },
      {
        name: "quantity",
        type: "number",
        message: "How many would you like to buy?"
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      var selectedID = answer.itemID;
      var selectedQty = answer.quantity;

      connection.query(`SELECT * FROM products WHERE item_id="${selectedID}";`, function (err, result){

        

        var currentQty = result[0].stock_quantity;

        var remainingQty = parseInt(currentQty - selectedQty);

        if (remainingQty < 0) {
            console.log("Not enough items in stock");
        }
        else {
            console.log("Thank you for your order!")
            connection.query(`UPDATE products SET stock_quantity = "${remainingQty}" WHERE item_id="${selectedID}";`, function (err, result){
                if(err) throw err;
                readProducts();
            })
        }
      })
    
      
    });
  }


function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT item_id AS ID,product_name AS Name,price, stock_quantity AS Stock FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
  start();
}
readProducts();
