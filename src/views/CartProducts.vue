<template>
    <div class="backgroundCart">
        <h1 class="p-5 title-cart d-flex align-items-center fs-4"><div class="me-4"></div>
            Items no carrinho
        </h1>
        <div class="container_cart p-4 d-flex justify-content-center">
            <div class="container d-flex flex-wrap justify-content-center">
                <div v-for="productsCart in $store.state.cart" :key="productsCart.id"  class="product_single rounded-3 shadow px-4 pt-3 m-4">
                    <div class="img_product">
                        <img :src="productsCart.img" alt="Product">
                    </div>
                    <div class="info_product pt-3 d-flex flex-wrap">
                        <div class="info_product_single">
                            <h1>{{ productsCart.product }}</h1>
                        </div>
                        <div class="info_product_single">
                            <p>R$ {{ productsCart.preco.toFixed(2).replace('.',',') }}</p>
                        </div>
                        <div class="info_product_single">
                            Quantidade : {{ productsCart.quantidade }}
                        </div>
                        <div class="info_product_single">
                            <span @click="aumentarQuantidade(productsCart)">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                            <div class="quantidade-product d-flex align-items-center justify-content-center fs-5">
                                {{ productsCart.quantidade }}
                            </div>
                            <span @click="diminuirQuantidade(productsCart)">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                        </div>
                    </div>
                </div><!--product_single-->
            </div>
            <div class="total_produtos_carrinho d-flex justify-content-center">
                <div class="total_produtos_single rounded-3 shadow p-3">
                    <div class="box_valor_total d-flex justify-content-between pb-2">
                        <span class="fs-5">Total:</span>
                        <span class="fs-5">R$ {{ valorTotal() }}</span>
                    </div>
                    <hr>
                    <div class="box_button_total d-flex align-items-center pt-3">
                        <button>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listProducts: this.$store.state.listProducts,
                valorTotalProducts: 0,
                cart: this.$store.state.cart
            }
        },
        methods: {
            aumentarQuantidade(productsCart){
                if(productsCart.quantidade < 1){return}
                else {
                    productsCart.quantidade += 1
                    productsCart.preco += this.listProducts[productsCart.id].preco
                    localStorage.setItem('cart',JSON.stringify(this.$store.state.cart))
                }

            },
            diminuirQuantidade(productsCart) {
                if(productsCart.quantidade - 1 == 0){return}
                else {
                    productsCart.quantidade -= 1
                    productsCart.preco -= this.listProducts[productsCart.id].preco
                    localStorage.setItem('cart',JSON.stringify(this.$store.state.cart))
                }
            },
            valorTotal() {
                let valor = 0
                for(let i = 0;i < this.cart.length;i++){
                    valor += this.cart[i].preco
                }
                this.valorTotalProducts = valor
                return this.valorTotalProducts.toFixed(2).replace('.',',')
            }

        }
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .backgroundCart {
        background-color: #ffffff;
    }

    .title-cart > div {
        width: 50px;
        height: 3px;
        background-color: black;
    }

    .container {
        width: 60%;
    }

    .product_single {
        width: 320px;
        height: 480px;
        background-color: white;
    }

    .img_product {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .img_product img {
        width: 100%;
    }

    .product_single h1 {
        font-size: 18px;
    }

    .product_single p {
        width: 100%;
        font-size: 18px;
        font-weight: 500;
    }

    .info_product {
        height: 200px;
    }

    .info_product_single {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    .info_product_single > span {
        background-color: black;
        padding: 5px 10px;
        cursor: pointer;
    }

    .info_product_single i {
        color: white;
    }

    .quantidade-product {
        height: 34px;
        width: 50px;
        border: 2px solid black;
        text-align: center;
    }

    .btn_adicionar {
        width: 100%;
        transition: .3s;
    }

    .btn_adicionar:hover {
        background-color: black !important;
    }

    .total_produtos_carrinho {
        width: 40%;
    }

    .total_produtos_single {
        width: 100%;
        max-width: 320px;
        height: 190px;
    }

    .box_valor_total {
        width: 100%;
        height: 70%;
    }

    .box_button_total {
        height: 30%;
        width: 100%;
    }

    .box_button_total > button {
        font-weight: bold;
        width: 100%;
        padding: 10px 0;
        background-color: rgb(0, 170, 255);
        color: white;
        outline: none;
        border: none;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 10px;
        transition: .3s;
    }

    .box_button_total > button:hover {
        background-color: rgb(9, 111, 162);
    }

    @media screen and (max-width: 768px) {
        .container_cart {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }

        .container {
            width: 100%;
        }

        .total_produtos_carrinho {
            width: 100%;
            margin-bottom: 30px;
        }
    }
</style>