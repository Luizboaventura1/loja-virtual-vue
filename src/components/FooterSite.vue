<template>
    <footer class="d-flex justify-content-center align-items-center">
        <p>Todos os direitos reservados - &copy; {{ anoAtual() }} </p>
    </footer>
</template>

<script>

    export default {
        methods: {
            anoAtual() {
                let data = new Date()
                return data.getFullYear()
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
    footer {
        width: 100%;
        height: 90px;
        background-color: rgb(15, 15, 16);
        color: rgb(112, 112, 112);
    }
</style>