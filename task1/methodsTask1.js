export function firstUpper(str) {
    return (str[0].toUpperCase() + str.slice(1).toLowerCase());
}

export function substitution(sentence) {
    let sign = [".", ",", "!", "?", ";", ":"]
    let arrChar = sentence.trim().split("").map(a => a.trim());
    let arrOneSpace = [];
    let arrFinish = [];
    let arrFinish2 = [];

    for (let i = 0; i < (arrChar.length); i++) {
        if (arrChar[i] !== "" || arrChar[i + 1] !== "") arrOneSpace.push(arrChar[i])
    }
    for (let i = 0; i < (arrOneSpace.length); i++) {
        if (arrOneSpace[i] === "" && sign.indexOf(arrOneSpace[i + 1]) === (-1)) arrFinish.push(" ")
        else arrFinish.push(arrOneSpace[i])
    }
    let str = arrFinish.join("");
    for (let i = 0; i < (str.length); i++) {
        if (sign.indexOf(str[i]) !== (-1) && str[i + 1] !== " ") arrFinish2.push(str[i] + " ")
        else arrFinish2.push(str[i])
    }
   return  arrFinish2.join("").trim();

}

export function countWord(str) {
    let sign = [".", ",", "!", "?", ";", ":", "(", ")", "-"]
    let count = 0;
    let arrChar = str.trim().split(" ").map(a => a.trim());
    for (let word of arrChar) {
        if (word.length > 1 || (word.length === 1 && sign.indexOf(word) === (-1)))
            count++;
    }
    return count;
}

export function distinctWord(line){
    let sign = [".", ",", "!", "?", ";", ":", "(", ")", "-"]
    let arrChar = line.trim().split("").map(a => a.trim());
    let arrOneSpace = [];
    let arrFinish = [];
    let arrFinish2 = [];
    for (let i = 0; i < (arrChar.length); i++) {
        if (arrChar[i] !== "" || arrChar[i + 1] !== "") arrOneSpace.push(arrChar[i])
    }
    for (let i = 0; i < (arrOneSpace.length); i++) {
        if (arrOneSpace[i] === "" && sign.indexOf(arrOneSpace[i + 1]) === (-1)) arrFinish.push(" ")
        else arrFinish.push(arrOneSpace[i])
    }
    let str = arrFinish.join("");
    for (let i = 0; i < (str.length); i++) {
        if (sign.indexOf(str[i]) !== (-1) && str[i + 1] !== " ") arrFinish2.push(str[i] + " ")
        else arrFinish2.push(str[i])
    }
    let arrWordWithSign = arrFinish2.join("").trim().split(" ");
    let arrWord = [];
    for (let a of arrWordWithSign) {
        if (sign.indexOf(a[a.length - 1]) !== (-1)) {
            arrWord.push(a.substring(0, a.length - 1));
        } else {
            arrWord.push(a);
        }
    }
    let word = {};

    for (let i = 0; i < arrWord.length; i++) {

        let sorted = arrWord[i].toLowerCase();
        if (sorted in word) word[sorted] += 1;
        else {
            word[sorted] = 1;
        }
    }
    for (let key in word) {

        switch (word[key]) {
            case 1:
                word[key] += " раз";
                break;
            case 2:
            case 3:
            case 4:
                word[key] += " раза";
                break;
            default:
                word[key] += " разов";
        }
        alert(key + " " + word[key])
    }
}