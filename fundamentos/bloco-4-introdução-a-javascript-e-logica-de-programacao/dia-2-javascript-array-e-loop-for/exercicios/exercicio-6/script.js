let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = null;
let num;

for(let index = 0 ; index < numbers.length ; index += 1)
{
    if(numbers[index] % 2 !== 0)
    {
        count += 1;
    }

}
if(count > 0)
{
    console.log(count);
}
else
{
    console.log('Nenhum valor ímpar encontrado.');
}



//3. se for impar;
//4. Incrementar um ao contador;
//5. se não;
//6. não fazer nada;
//7. após comparar todos os valores do array;
//8. se o contador tiver algum valor; 
//9. imprimir valor;
//10. se não ;
//11. imprimir 'Nenhum valor impar;