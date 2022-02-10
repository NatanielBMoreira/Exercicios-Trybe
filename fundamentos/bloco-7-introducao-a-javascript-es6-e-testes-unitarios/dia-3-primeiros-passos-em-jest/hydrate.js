const hydrate = (string) => {
    const array = string.split(' ');
    const acumulator = [];
    for (let index = 0; index < array.length; index += 2) {
        const amount = array[index];
        switch (array[index + 1]) {
            case 'cerveja':
                acumulator.push(parseInt(amount[index]) + 0)
                break;
        
            default:
                break;
        }
        
    }
    return `${acumulator[0]} copo de água`;
}
module.exports = hydrate