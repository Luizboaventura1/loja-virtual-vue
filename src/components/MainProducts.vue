<template>
    <section class="produtos p-2">
        <div class="container d-flex flex-wrap py-5">
            <div v-for="products in listProducts" :key="products.id"  class="product_single rounded-3 shadow px-4 pt-3 m-4">

                <div class="img_product">
                    <img :src="products.img" alt="Product">
                </div>

                <div class="info_product pt-3 d-flex flex-wrap">
                    <div class="info_product_single">
                        <h1>{{ products.nome }}</h1>
                    </div>
                    <div class="info_product_single">
                        <p>R$ {{ products.preco.toFixed(2).replace('.',',') }}</p>
                    </div>
                    <div class="info_product_single">
                        <button @click="adicionarProdutoCarrinho(products)" class="btn_adicionar bg-dark text-light fw-bold p-2 rounded-3 border-0">Adicionar</button>
                    </div>
                </div>
            </div><!--product_single-->
        </div><!--container-->
    </section><!--produtos-->
</template>

<script>
    export default {
        data() {
            return {
                listProducts: this.$store.state.listProducts
            }
        },
        methods: {
            adicionarProdutoCarrinho(products){
                this.cart = {
                    id: products.id,
                    img: products.img,
                    product: products.nome,
                    preco: products.preco,
                    quantidade: 1
                }
                this.$store.state.cart.push(this.cart)
                localStorage.setItem('cart',JSON.stringify(this.$store.state.cart))
            }
        },
        created() {
            console.log(this.cart)
        }
    }
</script>

<style scoped>
    .produtos {
        width: 100%;
        background-color: white;
    }

    .product_single {
        width: 320px;
        height: 420px;
    }

    .img_product {
        width: 100%;
        height: 220px;
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
        height: 30px;
        display: flex;
        align-items: center;
    }

    .btn_adicionar {
        width: 100%;
        transition: .3s;
    }

    .btn_adicionar:hover {
        background-color: black !important;
    }

    @media screen and (max-width: 768px) {
        .container {
            justify-content: center;
        }
    }

</style>