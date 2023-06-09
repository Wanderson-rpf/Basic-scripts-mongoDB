db.produtos.updateMany(
  { valoresNutricionais: { 
      $elemMatch: { 
        tipo: { $eq: "sódio" },
        percentual: { $gte: 40 },
      },
    },
  },
  { $push: { tags: "muito sódio" },
  },    
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    tags: true,
  },
);
