let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = null;

for(let num of numbers)
{
    if(menor > num || menor === null)
    {
        menor = num;
    }
}

console.log(menor);
