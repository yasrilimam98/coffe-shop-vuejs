<template>
  <div class="coffe-detail">
    <DefaultLayout />
    <div class="container">

      <!-- Breadcrumb -->
      <div class="row mt-12">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/" class="text-dark">Home</router-link></li>
              <li class="breadcrumb-item"><router-link to="/coffe" class="text-dark">Coffe</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">Coffe Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Detail -->

     <div class="row mt-4">
         <div class="col-md-6">
             <img :src=" '../assets/img/' + product.gambar " class="img-fluid shadow"/>
         </div>
         <div class="col-md-6">
             <h2><strong>{{product.nama}}</strong></h2>
             <hr>
             <h4>Harga : <strong>Rp. {{product.harga}} </strong></h4>
             <form>
                 <div class="form-group">
                     <label for="jumlah_pesanan">Jumlah Pesan</label>
                        <input type="number" class="form-control" id="jumlah_pesanan" v-model="jumlah_pesanan" placeholder="Jumlah Pesan">
                 </div>
                 <div class="form-group">
                     <label for="keterangan">Keterangan</label>
                    <textarea class="form-control" id="keterangan" v-model="keterangan" placeholder="Keterangan"></textarea>
                 </div>
                 <button type="submit" class="btn btn-success"><b-icon-cart></b-icon-cart> Pesan</button>
             </form>
         </div>
     </div>

    </div>
  </div>
</template>

<script>
import DefaultLayout from "@/components/DafaultLayout.vue";
import axios from 'axios';
export default {
  name: "CoffeDetail",
  components: {
    DefaultLayout,
  },
  data() {
      return {
        product: {}
      }
  },
  methods: {
      setProduct(data){
        this.product = data
      }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/"+this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  },
};
</script>

<style></style>
