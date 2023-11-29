const catObj = {
    catName: 'Жора',
    catAge: 3,
    catColor: 'Рыжий'
}

const trueString = 'Рыжий',
    falseString = 'Белый';

const checkPropertyExists = (string, obj) => {
    for (let key in obj) {
        if (obj[key] === string) {
            return console.log(true)
        }
    }
    return console.log(false)
}

checkPropertyExists(trueString, catObj);
checkPropertyExists(falseString, catObj);