let nomeDaPeça = 'torre';
let nameLowerCase = nomeDaPeça.toLocaleLowerCase();

switch (nameLowerCase) {
  case 'peão':
    console.log(`Apenas uma casa verticalmente`);
    break;
  case 'rei':
    console.log(`Todas direções somente uma casa de cada vez`);
    break;
  case 'rainha':
    console.log(`Horizontal, vertical e diagonais`);
    break;
  case 'bispo':
    console.log(`Diagonal`);
    break;
  case 'cavalo':
    console.log(
      `Em forma de L, duas casas em sentido horizontal e mais uma na vertical`
    );
    break;
  case 'torre':
    console.log(`Vertical e horizontalmente`);
    break;
  default:
    console.log('Por favor digite uma peça do jogo.');
}
