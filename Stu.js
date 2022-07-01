const express = require("express");
const stu = express();
const Data = require("./Student");

stu.get("/student", function(request, response){
    response.json(Data.student);
})
stu.get("/student/marks", function(request, response){
    response.json(Data.add(75, 80));
})

stu.listen(6565);