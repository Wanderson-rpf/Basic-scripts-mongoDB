db.produtos.find(
  { valoresNutricionais: { 
      $elemMatch: { 
        tipo: { $eq: "proteínas" },
        percentual: { $gt: 30, $lte: 40 },
      } },
    },
  {
    _id: false,
    nome: true,
  },
);