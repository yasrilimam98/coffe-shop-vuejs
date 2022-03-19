<template>
  <div class="home">
    <DefaultLayout />
    <div class="container">
      <HeroLayout />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Coffe</strong></h2>
        </div>
        <div class="col">
          <router-link to="/coffe" class="btn btn-success float-right"><b-icon icon="eye"></b-icon> Lihat Semua</router-link>
        </div>
      </div>

  <div class="row mb-6">
    <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
      <CardProduct :product="product"/>
    </div>
  </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '@/components/DafaultLayout.vue';
import HeroLayout from '@/components/HeroLayout.vue';
import CardProduct from '@/components/CardProduct.vue';
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    HeroLayout,
    CardProduct
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
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
