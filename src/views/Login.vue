<template>
  <div class="about" id="container">
        <div class="offset-3 col-6">
    <h1>登入頁面</h1>
   <form id="idCheckForm" v-on:submit.prevent="signin">
      <h3>請輸入帳號密碼</h3>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" v-model="user.email" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密碼</label>
        <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">登入</button>
    </form>
       </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: ''
    }
  },
  methods: {
    signin () {
      const apiPath = `${process.env.VUE_APP_APIPATH}auth/login`
      // POST api/auth/login
      this.axios.post(apiPath, this.user)
        .then((res) => {
          const token = res.data.token
          const expired = res.data.expired
          // "path=/" 可寫可不寫
          document.cookie = `apiToken=${token}; expires=${new Date(expired * 1000)}; path=/`
          // check 無誤跳轉到product.html
          // window.location = 'product.html'
          this.$router.push('/admin/products')
        })
        .catch((error) => {
          console.log(error.response)
        })
    } // signin
  }
}
</script>
