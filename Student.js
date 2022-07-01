const Data =[ 
    { FName: "Shubham ", LName: "Kumar",College: "KIT Kolhapur", Pass : 2021 },
    { FName: "Sanath ", LName: "Kerkar",College: "DY. P Kolhapur", Pass : 2022 },
    { FName: "Smit ", LName: "Kansagara",College: "BP Kolhapur", Pass : 2020 },
]

const addFun = function(num1, num2){
    console.log(num1 + num2);
}

module.exports = {
    student: Data,
    add: addFun
}