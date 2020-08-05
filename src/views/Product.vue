<template>
  <div class="about">
    <h1>單一產品頁面</h1>
   <h2>{{ product.title }}</h2>
    <span>{{ product.description }}</span>
  </div>
</template>

<script>
export default {
  // name: 'Product',
  data () {
    return {
      // 取得物件:product
      product: {}
    }
  },
  created () {
    // getProduct (id){
    console.log(this.$route.params.id)
    // airbnb 寫法
    const { id } = this.$route.params
    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
    this.axios.get(url)
      .then((res) => {
        this.product = res.data.data
      })
      .catch((error) => {
        console.log(error.response)
      })
    // },
  }
}
</script>
