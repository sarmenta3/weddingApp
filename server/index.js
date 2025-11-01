const express = require('express')
const app = express();
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

var db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost', // when local: localhost
    user: 'appUser',
    password: 'EightEight26!',
    database:'wedding_guest',
    port: 3306 // when local: comment this out
})

app.post('/addGuest', (req, res) => {
    const mainGuestName = req.body.mainGuestName;
    const guest = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const email = req.body.email;
    db.query("INSERT INTO guestinformation (mainGuestName, guest, phoneNumber, address, email) VALUES (?,?,?,?,?)",
        [mainGuestName, guest, phoneNumber, address, email], 
        (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send({mainGuestName: mainGuestName})
       }
    })                                          
})

const port = 3000; //when local: 8080
app.listen(port, () => {
    console.log('Server listening on port 8080')
});

