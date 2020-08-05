<template>
  <div class="about">
    <h1>產品列表</h1>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">產品名稱</th>
      <th scope="col">產品內容</th>
      <th scope="col">產品售價</th>
      <th scope="col">產品連結</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <th scope="row"></th>
      <td>{{item.title}}</td>
      <td>{{item.content}}</td>
      <td>{{item.price}}</td>
      <!-- 動態表達式 -->
      <td><router-link :to="`/product/${item.id}`">看產品</router-link></td>
    </tr>
  </tbody>
</table>
 <!-- <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>
          <router-link :to="`/product/${item.id}`">看產品</router-link>
        </td>
      </tr>
    </table> -->
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: {}
    }
  },
  created () {
    // getProduct (id){
    // const { id } = this.$route.params
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
    this.axios.get(url)
      .then((res) => {
        this.products = res.data.data
      })
      .catch((error) => {
        console.log(error.response)
      })
    // },
  }
}
</script>
