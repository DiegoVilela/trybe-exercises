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
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  /**  "Olá Ana Silveira, entrega para:
   * Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".  */
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para:
    ${order.name},
    Telefone: ${order.phoneNumber},
    ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  /** "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."  */
  Object.assign(order, {
    name: 'Luiz Silva',
    payment: {
      total: 50
    },
  });
  return `Olá, ${order.name}, o total de seu pedido é R$ ${order.payment.total}`
}

console.log(orderModifier(order));
