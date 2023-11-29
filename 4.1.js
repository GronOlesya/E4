const catObj = {
    catName: 'Жора',
    catAge: 3,
    catColor: 'Рыжий'
}

const getOwnKeysProperties = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`)
        }
    }
}

getOwnKeysProperties(catObj);