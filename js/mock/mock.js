export const filterJSON = {
  filters: {
    'Металл': [
      {name: 'white-gold', value: 'Белое золото'},
      {name: 'red-gold', value: 'Красное золото'},
      {name: 'pink-gold', value: 'Розовое золото'},
      {name: 'green-gold', value: 'Зеленое золото'},
      {name: 'gilded-gold', value: 'Позолоченное золото'},
      {name: 'кhodium-plated-gold', value: 'Родированное золото'},
      {name: 'white-gold', value: 'Белое золото'},
      {name: 'red-gold', value: 'Красное золото'},
      {name: 'pink-gold', value: 'Розовое золото'},
      {name: 'green-gold', value: 'Зеленое золото'},
      {name: 'gilded-gold', value: 'Позолоченное золото 2'},
      {name: 'кhodium-plated-gold', value: 'Родированное золото 3'},
      {name: 'white-gold', value: 'Белое золото 4'},
      {name: 'red-gold', value: 'Красное золото 5'},
      {name: 'pink-gold', value: 'Розовое золото 6'},
      {name: 'green-gold', value: 'Зеленое золото 7'},
      {name: 'gilded-gold', value: 'Позолоченное золото 8'},
      {name: 'кhodium-plated-gold', value: 'Родированное золото 9'},
    ],
    'Проба': [
      {name: 'pink-gold', value: '999'},
      {name: 'green-gold', value: '750'},
      {name: 'gilded-gold', value: '985'},
      {name: 'кhodium-plated-gold', value: 'Родированное золото'},
      {name: 'white-gold', value: 'Белое золото'},
      {name: 'red-gold', value: 'Красное золото'},
      {name: 'pink-gold', value: 'Розовое золото'},
      {name: 'green-gold', value: 'Зеленое золото'},
      {name: 'gilded-gold', value: 'Позолоченное золото'},
    ],

    'Изготовитель': [],

    'Бренд': [],

    'Вставки': []
  },

  sliders: [
    {name: 'price', min: 0, max: 100000, step: 100, value: 'Цена'},
    {name: 'size', min: 0, max: 60, step: 0.5, value: 'Размер'},
  ]
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



const JSON = {
  'Цена': {min: 0, max: 100000},
  'Размер': {min: 0, max: 60},
  'Металл': [
    'Белое золото', 'Розовое золото'
  ]
}
