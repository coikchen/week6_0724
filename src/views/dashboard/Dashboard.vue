<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-link to="/">Home</router-link>|
    <router-link to="/admin/products">後台產品列表</router-link>|
    <router-link to="/admin/coupons">優惠券</router-link>|
    <router-link to="/admin/orders">訂單列表</router-link>|
    <router-link to="/admin/imgs">媒體</router-link>|
    <!-- 將token帶入 ; 執行完checkSuccess才做下方methods-->
    <router-view :token="token" v-if='checkSuccess'/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)apiToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
      // POST api/auth/check
      const apiUrl = `${process.env.VUE_APP_APIPATH}auth/check`
      this.axios.post(apiUrl, {
        // FIX:不要加單引號
        api_token: this.token
      })
        .then((res) => {
        // this.products = res.data.data
          this.checkSuccess = true
        })
        .catch((error) => {
          this.$router.push('/login')
          console.log(error.response)
        })
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
