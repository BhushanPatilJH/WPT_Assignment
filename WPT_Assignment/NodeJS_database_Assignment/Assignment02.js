
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


let itemno = 3;
let intname = 'cream';
let price =700;
let category = 'mekup';
con.query('insert into item(itemno,intname,price,category) values (?,?,?,?)', [itemno,intname,price,category], 
(err, res1) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);
