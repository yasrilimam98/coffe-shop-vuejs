<template>
  <div class="card shadow card-product">
    <img :src=" 'assets/img/' + product.gambar" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">
        Harga : Rp. {{ product.harga }}
      </p>
      <a href="#" class="btn btn-success"><b-icon icon="cart"></b-icon> Pesan</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>