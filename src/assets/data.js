function navigator() {
    let temp = [
        { value: 0, text: "Головна", link: "home" },
        { value: 1, text: "Ритуальні послуги", link: "Services" },
        { value: 2, text: "Ритуальні товари", link: "Goods" },
        { value: 3, text: "Про нас", link: "about" },
    ];
    return temp;
}


function addSeparatorSpace(str) {
    // Delete each element in string spaces
    let newStr = "";
    let space = " ";
    let temp;
    for (let x = 0; x < str.length; x++) {
        temp = str[x] + space
        if (str[x + 1] == " ") {
            temp = str[x] + "_"
        }
        newStr += temp
    }
    return newStr;
}


export {
    navigator,
    addSeparatorSpace,
}