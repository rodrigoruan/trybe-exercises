const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   console.log(
//     `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`
//   );
// };

// customerInfo(order);

const orderModifier = (order) => {
  let pizza1 = (order.order.pizza = {
    pizza: {
      muzzarella: {
        amount: 1,
        price: 25,
      },
      calabresa: {
        amount: 1,
        price: 15,
      },
    },
  });
  let arr = Object.keys(pizza1.pizza);
  let named = (order.name = 'Luiz Silva');
  console.log(
    `Olá ${named} o total do seu pedido de ${arr[0]}, ${arr[1]} e ${
      order.order.drinks.coke.type
    } é R$ ${(
      pizza1.pizza.muzzarella.price +
      pizza1.pizza.calabresa.price +
      order.order.drinks.coke.price
    )
      .toFixed(2)
      .replace(/\./, ',')}`
  );
};

orderModifier(order);
