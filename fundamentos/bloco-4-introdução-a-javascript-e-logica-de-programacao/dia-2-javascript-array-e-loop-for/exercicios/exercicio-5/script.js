let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = null;

for (let index = 0 ; index < numbers.length ; index += 1)
{
    if(num < numbers[index])
    {
        num = numbers[index];
    }

}
console.log(num);

    
    

