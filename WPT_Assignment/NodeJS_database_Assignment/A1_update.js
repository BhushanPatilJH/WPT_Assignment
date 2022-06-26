
let dbparams=
{
    host: 'localhost',
    user: 'bhushan',
    password: 'cdac',
    database: 'bhushan',
	port:3306
};
const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

let price =500;

let category = 'cosmatics';
let itemno = 3;

con.query('update  item set price =?,category =? where itemno=? ', [price,category,itemno], 
(err,res1) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        if(res1.affectedRows===0)
        {
            console.log("update failed");
        } 
        else
           console.log("update suceeded");    
       
    }

}
);
