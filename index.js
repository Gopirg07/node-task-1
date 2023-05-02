const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

//Select the Path
const dirPath = path.join(__dirname, "timestamp");

app.get("/",(req,res)=>{

    const utc = new Date();

    //Current Date
    const date = utc.getDate();
    //Current Month
    const month = utc.getMonth()+1;
    //Current Year
    const year = utc.getFullYear();
    //Current Hours
    const hours = utc.getHours();
    //Current Minutes
    const min = utc.getMinutes();
    //Current Seconds
    const seconds = utc.getSeconds();

    const data = `Current Timestamp Date == ${date} - ${month} - ${year} , Time ==  ${hours} : ${min} : ${seconds} `;

    fs.writeFile(`${dirPath}/date-time.text`,data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("file created");
        }
    })
    res.send(data)
    });

app.listen(9000,()=>console.log("App is listening to 9000"));