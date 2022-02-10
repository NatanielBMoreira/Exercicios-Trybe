const getRandom = () => Math.floor(Math.random() * 5) + 1;

const prizeDraw = (numberPlayer, func) => func() === numberPlayer ? ('Parabéns você ganhou!') : ('Tente novamente.');

console.log(prizeDraw(1, getRandom));