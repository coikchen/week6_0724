<template>
  <div class="about">
    <h1>產品列表</h1>
<button type="button" v-on:click='openModal("newProduct")' class="btn btn-info " data-toggle="modal"
        data-target="#productModal">
        新增產品
      </button>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">分類</th>
            <th scope="col">產品名稱</th>
            <th scope="col">原價</th>
            <th scope="col">售價</th>
            <th scope="col">星等級</th>
            <th scope="col">是否啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <!-- 寫一個loop v-for 一定要搭配 key
           products 是呼應JS的 products array-->
          <tr v-for='(item) in products' :key='item.id'>
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td>{{item.origin_price}}</td>
            <td>{{item.price}}</td>
            <td>
              {{item.selected}}
            </td>
            <td>
              <span v-if='item.enabled' class="badge badge-success">啟用</span>
              <span v-else class="badge badge-danger">未啟用</span>
            </td>

            <td>
              <div class="btn-group"></div>
              <button type="button" v-on:click='openModal("editProduct",item)' class="btn btn-primary btn-sm"><i
                  class="fa fa-pencil" aria-hidden="true"></i></button>
              <button type="button" v-on:click='openModal("delProduct",item)' class="btn btn-danger btn-sm"><i
                  class="fa fa-trash" aria-hidden="true"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      // token: '',
      uuid: 'b580788b-f288-49ed-91ab-91e9bd538509',
      products: ''
    }
  },
  props: ['token'],
  // methods () {
  // },
  created () {
    // 寫在created 裡面，之後就不用重複寫
    // this.token = document.cookie.replace(/(?:(?:^|.*;\s*)apiToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
    // ajaxHomeworkToken  TOKEN名稱 要跟著修改!!
    // 為了避免直接輸入products.html 網址做的安全裝置。沒有key入token，跳轉到login.html
    const apiUrl = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`
    this.axios.get(apiUrl)
      .then((res) => {
        this.products = res.data.data
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
}
</script>
