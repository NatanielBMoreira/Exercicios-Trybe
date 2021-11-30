let array = [];
let addArray = 0;

for(let index = 0 ; index < 25 ; index += 1)
{
    addArray += 1;
    array.push(addArray);
}

for(let index = 0 ; index < array.length ; index += 1)
{
    console.log(array[index] / 2);
}