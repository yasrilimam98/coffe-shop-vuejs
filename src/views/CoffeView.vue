<template>
  <div>
    <DefaultLayout />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Coffe</strong></h2>
        </div>
      </div>
      
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <!-- @keyup ketika ngetik dia kan panggil API di bawah sesuai apa yang di ketik -->
            <input v-model="search" type="text" class="form-control" placeholder="Cari..." aria-label="Username" aria-describedby="basic-addon1" @keyup="searchCoffe">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-6">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/components/DafaultLayout.vue";
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';

export default {
  name: "CoffeView",
  components: {
    DefaultLayout,
    CardProduct,
  },
  data() {
    return {
      products: [],
      // Buat variabel search
      search: "",
    };
  },
  methods: {
    setProduct(data){
      this.products = data;
    },
    // Buat method search atau logika serach
    searchCoffe(){
      axios
      // add ?q= di dalam API untuk proses search
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
      // handle success
      // console.log("Berhasil : ", response);
      // .catch(function (error) {
      //   // handle error
      //   console.log("Gagal : ", error);
  },
};
</script>
