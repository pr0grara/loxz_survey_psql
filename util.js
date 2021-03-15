const { ARRAY, DataTypes } = require('sequelize')
// const { parse } = require("dotenv/types");

// require("dotenv/config");


// console.log(Date())
// console.log("")
// console.log(Boolean(false))
// console.log(process.env)

var num = 3;
// console.log(num)
// console.log(num.toString())

var encrypt = function (string) {
    let encryption = string.split("").map(char => char.charCodeAt(0)).join("");
    return encryption
}

var encryptor = (string) => {
    let encryption = encrypt(string);
    encryption = encryption.toString();
    // console.log(encryption)
    // console.log(encryption.length)
    if (encryption.length % 2 !== 0) encryption = encryption+5;
    // console.log(encryption)
    // console.log(encryption.length)
    let cookie = [];
    for (let i = 0; i < encryption.length; i=i+2) {
        let percent = parseInt(encryption[i] + encryption[i + 1]) / 100;
        // console.log(percent);
        let ascii = String.fromCharCode((Math.ceil(43 * percent) + 45));
        // console.log(String.fromCharCode(Math.ceil(43 * percent)));
        // console.log(String.fromCharCode(44));
        // console.log(ascii);
        cookie.push(ascii)
    }
    return cookie.join("");
}

// encryptor("Marlowe88*")
// console.log(Date());

let arr = ["sdfsf", "sdfsf"]
console.log(DataTypes.ARRAY(arr));
// console.log(ARRAY)