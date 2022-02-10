const techList = (array, string) => {
    array.sort();
    const newArray = [];
    if(array.length === 0) {
        return 'Vazio!'
    }
    else {
        for (const key in array) {
            newArray.push({name: string, tech: array[key]})
        }
        return newArray;
    }
}
module.exports = techList;