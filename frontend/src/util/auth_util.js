export const tokenizer = (input) => {
    var encrypt = (str) => {
        let encryption = str.split("").map(char => char.charCodeAt(0)).join("");
        return encryption
    }
    
    var encryptor = (string) => {
        let encryption = encrypt(string);
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
    return encryptor(input);
}

export const verifyier = (string) => {
    return string === "Marlowe88*"
}

export const santasCookie = "OW2?122624II8";