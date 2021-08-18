const cidade = document.querySelector('#cidade');
const estados = document.querySelector('#estados');
const data = document.querySelector('#data');
const submit = document.querySelector('#submit');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const endereco = document.querySelector('#endereco');
const resumo = document.querySelector('#resumo');
const cargo = document.querySelector('#cargo');
const descricao = document.querySelector('#descricao');
const final = document.querySelector('#final');
const clean = document.querySelector('#clean');

let arr = [
  'Acre',
  'Alagoas',
  'Amazonas',
  'Amapá',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rondônia',
  'Rio Grande do Sul',
  'Roraima',
  'Santa Catarina',
  'Sergipe',
  'São Paulo',
  'Tocantins',
];

const geraCidades = () => {
  for (let i = 0; i < arr.length; i += 1) {
    const option = document.createElement('option');
    option.value = arr[i];
    option.innerText = arr[i];
    estados.appendChild(option);
  }
};
geraCidades();

const verificaData = () => {
  let valor = data.value.split('');
  if (valor.length !== 10) {
    return alert('Por favor no seguinte formato dia/mês/ano => 16/05/2001');
  }
  if (valor[2] !== '/' || valor[5] !== '/') {
    return alert('Por favor digite "/" após dia e mês!');
  }
  if (valor[0] + valor[1] <= 0 || valor[0] + valor[1] > 31) {
    return alert('Por favor digite um dia maior de 0 a 31!');
  }
  if (valor[3] + valor[4] <= 0 || valor[3] + valor[4] > 12) {
    return alert('Por favor digite um mês de 0 a 12!');
  }
  if (
    valor[6] + valor[7] + valor[8] + valor[9] < 1900 ||
    valor[6] + valor[7] + valor[8] + valor[9] > 2021
  ) {
    return alert('Por favor digite um ano de 1900 a 2021');
  }
};

const verificaNome = () => {
  if (nome.length > 40 || nome.length === 0) {
    return alert('Por favor digite um nome com menos de 40 letras!');
  }
};

const verificaEmail = () => {
  if (email.value.search('@') < 0 || email.value.search('.com') < 0) {
    return alert('Por favor digite um e-mail válido!');
  }
};

const verificaCpf = () => {
  if (cpf.value[3] !== '.' || cpf.value[7] !== '.' || cpf.value[11] !== '-') {
    return alert('Por favor digite seu cpf corretamente!');
  }
};

const verificaEndereço = () => {
  if (endereco.value.length > 200 || endereco.value.length === 0) {
    return alert('Por favor digite um endereço com correto!');
  }
};

const verificaCidade = () => {
  if (cidade.value.length > 28 || cidade.value.length === 0) {
    return alert('Por favor digite uma cidade corretamente!');
  }
};

const verificaResumo = () => {
  if (resumo.value.length === '' || resumo.value.length > 1000) {
    return alert('Por favor formate o resumo corretamente');
  }
};

const verificaCargo = () => {
  if (cargo.value.length === '' || cargo.value.length > 40) {
    return alert('Por favor digite um cargo corretamente');
  }
};

submit.addEventListener('click', () => {
  verificaNome();
  verificaEmail();
  verificaCpf();
  verificaEndereço();
  verificaCidade();
  verificaResumo();
  verificaCargo();
  verificaData();
  const exist = document.querySelector('.resume');
  if (exist !== null) {
    exist.remove();
  }
  const div = document.createElement('div');
  div.classList.add('resume');
  div.innerText = `Nome: ${nome.value}
  Email: ${email.value}
  CPF: ${cpf.value}
  Endereço: ${endereco.value}
  Cidade: ${cidade.value}
  Estado: ${estados.value}
  Resumo último emprego: ${resumo.value}
  Cargo último emprego: ${cargo.value}
  Descrição cargo: ${descricao.value}
  Data de ínicio: ${data.value}`;
  final.appendChild(div);
});

clean.addEventListener('click', () => {
  cidade.value = '';
  estados.value = '';
  data.value = '';
  nome.value = '';
  email.value = '';
  cpf.value = '';
  endereco.value = '';
  resumo.value = '';
  cargo.value = '';
  descricao.value = '';
  final.value = '';
});
