import { createStore } from 'vuex'

export default createStore({
  state: {
    listProducts: [
      {
        "id": 0,
        "img": 'https://cdn.kulturegeek.fr/wp-content/uploads/2019/10/Intel-Core-i9-9900ks.jpg',
        "nome": "Processador Intel Core i9-11900K",
        "preco": 2899.90
      },
      {
        "id": 1,
        "img": 'https://http2.mlstatic.com/D_NQ_NP_2X_903254-MLA44560108449_012021-F.jpg',
        "nome": "Placa de vídeo NVIDIA GeForce RTX 3080",
        "preco": 10299.00
      },
      {
        "id": 2,
        "img": 'https://cdn.videocardz.com/1/2021/01/ASUS-Z590-Series.jpg',
        "nome": "Placa-mãe ASUS ROG Strix Z590-E",
        "preco": 3349.90
      },
      {
        "id": 3,
        "img": 'https://www.purepc.pl/image/news/2019/07/18_corsair_vengeance_lpx_32_gigabajtowe_moduly_pamieci_ram_ddr4_0_b.jpg',
        "nome": "Memória RAM Corsair Vengeance LPX 32GB DDR4",
        "preco": 1599.90
      },
      {
        "id": 4,
        "img": 'https://citycenter.jo/image/cache/catalog/1-1-2019/M1TB-650x400.jpg',
        "nome": "SSD NVMe Samsung 970 EVO 1TB",
        "preco": 1999.90
      },
      {
        "id": 5,
        "img": 'https://cdn.iset.io/assets/35158/produtos/1193/fontes-corsair-corsairrm100001.jpg',
        "nome": "Fonte de alimentação Corsair RM1000x",
        "preco": 1499.90
      }
    ],
    cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
