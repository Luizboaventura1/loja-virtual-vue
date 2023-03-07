<template>
    <nav>
        <div class="menu_logo">
            <h1>
                Logo
            </h1>
        </div>
        <div class="menu_itens">
            <ul id="menu_desktop">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/products">Products</router-link></li>
                <li>
                    <router-link to="/cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </router-link>
                </li>
            </ul>
            <ul id="menu_mobile" v-show="showMenu" class="shadow-sm">
                <router-link to="/">
                    <li>Home</li>
                </router-link>
                <router-link to="/products">
                    <li>Products</li>
                </router-link>
                <router-link to="/cart">
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </router-link>
            </ul>
            <div class="menu_burguer" @click="showMenu = !showMenu">
                <svg id="menu_open" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                
                <svg id="menu_close" class="close" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
        data() {
            return {
                showMenu: false
            }
        },
        mounted() {
            
        }
    }
</script>


<style scoped>

    * {
        padding: 0;
        margin: 0;
    }

    nav {
        background-color: #101013;
        width: 100%;
        height: 90px;
        display: flex;
        padding: 0 4%;
    }

    .menu_logo {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .menu_logo h1 {
        color: white;
        font-size: 24px;
    }

    .menu_itens {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    #menu_desktop {
        display: flex;
        list-style-type: none;
    }

    .menu_itens li {
        padding: 15px;
        color: white;
    }

    .menu_itens li a i {
        font-size: 22px;
        transition: .3s;
    }

    .menu_itens li a i:hover {color: #a7a7a7;}

    .menu_itens a {
        text-decoration: none;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        padding-bottom: 10px;
    }

    .menu_itens a:hover {border-bottom: 2px solid white;}

    .menu_itens li:nth-of-type(3) a:hover {border-bottom: none;}

    .menu_burguer {
        display: none;
    }

    #menu_close {
        display: none;
    }

    #menu_open {
        display: block;
    }

    #menu_mobile {
        list-style-type: none;
    }

    @media screen and (max-width: 768px){
        #menu_desktop {
            display: none;
        }

        .menu_burguer {
            display: block;
            cursor: pointer;
        }

        #menu_mobile {
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background-color: white;
            transform: .7s;
            animation: menu .5s ease-in-out;
        }

        #menu_mobile li {
            padding: 15px 8%;
            color: black;
            animation: menuli .8s ease-in-out;
        }

        #menu_mobile li:hover {
            background-color: #000000;
            color: white;
        }

        @keyframes menu {
            0%   {height: 0;}
            100% {height: 162px;}
        }

        @keyframes menuli {
            0%   {opacity: 0;}
            100% {opacity: 1;}
        }
    }

</style>