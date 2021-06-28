//  O editor de código tem o exemplo anterior e também o início de uma reducerfunção para você. Preencha o corpo da reducerfunção para que, se receber uma ação do tipo, 'LOGIN'ela retorne um objeto de estado com logindefinido como true. Caso contrário, ele retorna o atual state. Observe que o atual statee o despachado actionsão passados ​​para o redutor, para que você possa acessar o tipo da ação diretamente com action.type.

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if(action.type === 'LOGIN')
    return {
      login: true,
    }
  return state
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};