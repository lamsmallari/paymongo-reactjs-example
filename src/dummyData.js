const dummyData = {
  predefinedCreditCardData: {
    data: {
      attributes: {
        number: "4123450131000508",
        exp_month: 12,
        exp_year: 25,
        cvc: "111",
        billing: {
          address: {
            line1: "address",
            city: "Biñan",
            state: "Laguna",
            country: "PH",
            postal_code: "4024"
          },
          name: "John",
          email: "johnmail@gmail.com",
          phone: "09988909890"
        }
      }
    }
  },
  predefinedAmount: (tokenId, tokenType) => {
    return {
      data: {
        attributes: {
          amount: 10000,
          currency: "PHP",
          source: {
            id: tokenId,
            type: tokenType
          }
        }
      }
    };
  },
  productDummyData: [
    {
      id: "1",
      title: "Product Item",
      price: 5000,
      details:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
      image: "https://placeimg.com/640/480/tech"
    },
    {
      id: "2",
      title: "Product Item with a long name",
      price: 8000,
      details:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
      image: "https://placeimg.com/640/480/tech"
    }
  ]
};

export default dummyData;
