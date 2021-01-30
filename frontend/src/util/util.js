require("dotenv").config();


const tokenizer = (string) => {
    var encrypt = function (string) {
        let encryption = string.split("").map(char => char.charCodeAt(0)).join("");
        return encryption
    }

    var encryptor = (string) => {
        let encryption = encrypt("Marlowe88*");
        encryption = encryption.toString();
        if (encryption.length % 2 !== 0) encryption = encryption + 5;
        let cookie = [];
        for (let i = 0; i < encryption.length; i = i + 2) {
            let percent = parseInt(encryption[i] + encryption[i + 1]) / 100;
            let ascii = String.fromCharCode((Math.ceil(43 * percent) + 45));
            cookie.push(ascii)
        }
        return cookie.join("");
    }
    return encryptor(string);
}

const verifyier = (string) => {
    return string === "Marlowe88*"
}

module.exports = tokenizer;
module.exports = verifyier;