


let click = 0

window.addEventListener('onload', estados())
let button = document.getElementById('button')
let inputs = document.getElementsByClassName('inputs')
button.addEventListener('click', parar)
inputs[].addEventListener('click', padrão)



function estados()
{
    // Array com todas as siglas dos estados
    let est = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
    // Array com todos os estados
    let nomeEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goías','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraíma','Santa Catarina','São Paulo','Sergipe','Tocantins'];

    
    let pai = document.querySelector('#estados');   // Variável que guardo o caminho do elemento select do HTML
    for(let index = 0 ; index < 26 ; index += 1)    // Laço que passara por todos os elementos dos arrays;
    {
        let newOption = document.createElement('option')    // Criando uma nova tag option
        newOption.setAttribute('name', est[index])      // Criando um atributo nome para minha nova tag option
        let textOption = document.createTextNode(nomeEstados[index])    // Variável que armazena cada estado do array temporariamente
        newOption.appendChild(textOption) // Adicionando o Texto como filho da minha tag option
        pai.appendChild(newOption)  // Adicionando uma nova tag option dentro da tag select
    }
    

}
function parar()
{



    
    click += 1;
    if(click === 1)
    {
        return click -= 1;
    }

}

function padrão(event)
{
    
    inputs[event].preventDefault()
}