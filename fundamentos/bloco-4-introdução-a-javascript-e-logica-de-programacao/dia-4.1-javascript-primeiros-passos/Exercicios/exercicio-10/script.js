const productCost = 239.68;
const saleValue = 423.90;

if(productCost >= 0 && saleValue >= 0)
{
    let productCostTax = ((20 * productCost) / 100) + productCost;
    let profit = saleValue - productCostTax;
    console.log(profit);
}
else
{
    console.log('Erro, valor incorreto.');
}


