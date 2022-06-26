
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



let category='stationary';  
con.query('select itemno, intname, price,category from item where category=?', [category], 
(err, rows) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        if(rows.length > 0)
        {
            for(let i=0; i < rows.length; i++)
            console.log(rows[i].itemno + " " + rows[i].intname + " " + rows[i].price + " " +rows[i].category);
        }
            else
           console.log("no emp found with "+ itemno);
    
        }
}
);
