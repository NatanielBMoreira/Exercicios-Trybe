const salarioBruto = 5000;
let salarioLiquido;

if(salarioBruto < 1556.95)
{
    salarioBase = salarioBruto - ((8 * salarioBruto) / 100);
}
else if(salarioBruto < 2594.93)
{
    salarioBase = salarioBruto - ((9 * salarioBruto) / 100);
}
else if(salarioBruto <= 5189.82)
{
    salarioBase = salarioBruto - ((11 * salarioBruto) / 100);
}
else
{
    salarioBase = salarioBruto - 570,88;
}

if(salarioBase < 1903.99)
{
    salarioLiquido = salarioBase;
}
else if(salarioBase < 2826.66)
{
    salarioLiquido = salarioBase - (((7.5 * salarioBase) / 100) - 142.80 );
}
else if(salarioBase < 3751.06)
{
    salarioLiquido = salarioBase - (((15 * salarioBase) / 100) - 354.80 );
}
else if(salarioBase <= 4664.68)
{
    salarioLiquido = salarioBase - (((22.5 * salarioBase) / 100) - 636.13 );
}
else
{
    salarioLiquido = salarioBase - (((27.5 * salarioBase) / 100) - 869.36 );
}

console.log(salarioLiquido);



