db.produtos.find(
  { valoresNutricionais: { 
      $elemMatch: { 
        tipo: { $eq: "calorias" },
        quantidade: { $lt: 500 },
      } },
    },
  {
    _id: false,
    nome: true,
  },
);