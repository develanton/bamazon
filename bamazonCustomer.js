

const mysql = require('mysql');
//const inquirer = require('inquirer');
const tab = require('table-master');

tab.setDefaults({
    indent  : 2, // indentation at the begin of each line
    rowSpace: 2  // spacing between the columns
 }); 


const connection = mysql.createConnection({

    host:"localhost",

    port:8889,

    user:"root",

    password: "root",

    database: "bamazon"

});

connection.connect(function(err){
    if (err) throw err;
    console.log('\n'+"connection id: " + connection.threadId);
    afterConnection();
})

function afterConnection(){
    connection.query("SELECT * FROM products",function(err,res){
        if(err) throw err;
        console.log('\n');
        console.table(res);
    });
}