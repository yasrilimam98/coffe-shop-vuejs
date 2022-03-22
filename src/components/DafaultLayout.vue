<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Coffe Shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coffe" class="nav-link">Coffe</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/keranjang" class="nav-link">Keranjang
              <b-icon icon="bag"></b-icon>
              <span class="badge badge-success ml-2">{{ jumlah_pesanans.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
export default {
  name: "DefaultLayout",
  data() {
    return {
      jumlah_pesanans: []
    }
  },
  methods: {
    setJumlah(data){
      this.jumlah_pesanans = data
    }
  },
  mounted() {
     axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error))
  }
};
</script>
