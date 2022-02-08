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
        marguerita: {
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
    // Adicione abaixo as informações necessárias.
    const orderAna = order.order.delivery.deliveryPerson;
    const deliver = [order.name, order.phoneNumber];
    const deliverAdress = order.address;
    console.log(`Olá ${orderAna}, entrega para: ${deliver[0]}, Telefone ${deliver[1]}. 
Endereço: ${deliverAdress.street}, Numero: ${deliverAdress.number}, AP: ${deliverAdress.apartment}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const pizzas = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    order.name = 'Joaquim da Silva';
    const buyer = order.name;
    order.payment.total = '50,00';
    const payment = order.payment.total;
    console.log(`Olá ${buyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é de R$ ${payment}.`);
  }
  
  orderModifier(order);