const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(`${ifScope}  o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

//   testingScope(true);
//   testingScope(false);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const crescente = (array) =>{
    const menor = [];
    for(let index = 0 ; index < oddsAndEvens.length ; index += 1){
        for(let index2 = 0 ; index2 < oddsAndEvens.length ; index2 += 1){
         (oddsAndEvens[index] < oddsAndEvens[index2]) ? menor.push(oddsAndEvens[index]) : 0;
        }
        console.log(menor[index]);
    }
}

crescente()