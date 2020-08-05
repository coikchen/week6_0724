<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-link to="/">Home</router-link>|
    <router-link to="/products">產品列表</router-link>|
    <router-link to="/product">單一產品列表</router-link>|
    <router-link to="/about">關於我們</router-link>|
    <router-link to="/cart">購物車</router-link>|
    <router-link to="/checkout">訂單頁面</router-link>|
    <router-link to="/checkoutdone">訂單完成頁面</router-link>|
     <router-link to="/login">登入頁面</router-link>|
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
}
</script>
