<template>
        <header>
        <main class="pt-5 ps-5">
            <div class="container d-flex px-2">
                <div class="container_single">
                    <h1 class="text-light pt-5 pb-3">Peças de qualidade para <br> sua maquina!</h1>
                    <p class="text-light pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur doloremque veritatis.</p>

                    <router-link class="button-loja" to="/products">Ver produtos</router-link>
                </div>
                <div class="container_single">
                    <img src="@/assets/img-controle-ps5.png" alt="Imagem controle PS5">
                </div>
            </div>
        </main>
    </header>
</template>

<style scoped>

    * {
        padding: 0;
        margin: 0;
    }

    header {
        height: 600px;
        width: 100%;
        background-color: #101013;
    }

    header main h1 {
        font-size: 50px;
    }

    header main p {
        max-width: 400px;
    }

    .button-loja {
        border: none;
        outline: none;
        font-size: 17px;
        font-weight: bold;
        color: white;
        padding: 8px 39px;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 8px;
        transition: .4s;
        border: 1px solid white;
        text-decoration: none;
    }

    .button-loja:hover {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }

    .container_single:nth-of-type(1) {
        width: 60%;
    }

    .container_single:nth-of-type(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
    }

    .container_single:nth-of-type(2) img {
        width: 100%;
        animation: imgAnimation 2s ease-in-out infinite;

    }

    @keyframes imgAnimation {
        0% {
            margin-top: 0;
        }
        50% {
            margin-top: -20px;
        }
        100% {
            margin-top: 0;
        }
    }

    @media screen and (max-width: 768px) {

        header main h1 {
            font-size: 37px;
        }

        .container_single:nth-of-type(1) {
            width: 100%;
        }
        .container_single:nth-of-type(2) {
            display: none;
        }
    }
</style>