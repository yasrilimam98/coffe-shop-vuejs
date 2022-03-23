<template>
  <div class="keranjang">
    <!-- Passing data keranjang ke navbar -->
    <DefaultLayout :updateKeranjang="keranjangs" />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-12">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/coffe" class="text-dark">Coffe</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang<strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Coffe</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{index+1}}</th>
                  <td>
                      <img :src=" '../assets/img/' + keranjang.products.gambar " class="img-fluid shadow" width="150" height="150"/>
                  </td>
                  <td><strong>{{ keranjang.products.nama }}</strong></td>
                  <td>
                      {{ keranjang.keterangan ? keranjang.keterangan : '-' }}
                  </td>
                  <td>
                        {{ keranjang.jumlah_pesanan }}
                  </td>
                  <td align="right">
                        Rp. {{ keranjang.products.harga }}
                  </td>
                  <td align="right"><strong>
                        Rp. {{ keranjang.products.harga * keranjang.jumlah_pesanan }}</strong>
                  </td>
                  <td align="center" class="text-danger">
                       <b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash>
                  </td>
                </tr>

                <tr>
                    <td colspan="6" align="right">
                        <strong>Total Harga : </strong>
                    </td>
                    <td align="right">
                        <strong>Rp. {{ totalHarga }}</strong>
                    </td>
                    <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
                 <div class="form-group">
                     <label for="nama">Nama :</label>
                     <!-- v-model untuk mendaftarkan  -->
                      <input type="text" class="form-control" id="nama" v-model="pesan.nama" placeholder="Nama">
                 </div>
                  <div class="form-group">
                     <label for="noMeja">No Meja :</label>
                     <!-- v-model untuk mendaftarkan  -->
                      <input type="text" class="form-control" id="noMeja" v-model="pesan.noMeja" placeholder="No Meja">
                 </div>
                 <button type="submit" class="btn btn-success float-right" @click="checkout"><b-icon-cart></b-icon-cart> Pesan</button>
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
  name: "KeranjangView",
  components: {
    DefaultLayout,
  },
  data() {
      return {
          keranjangs: [],
          pesan:{}
      }
  },
  methods: {
      setKeranjangs(data){
          this.keranjangs = data;
      },
      hapusKeranjang(id) {
        axios
        .delete("http://localhost:3000/keranjangs/"+id)
        .then(() => {
            this.$toast.error("Sukses hapus keranjang!", {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true
          });
       
        // Update data keranjangs
        axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setKeranjangs(response.data))
        .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error)) 
      },
      checkout() {
        // Validasi form
        if(this.pesan.nama && this.pesan.noMeja){
          // dari keranjang passing ke pesan db
          this.pesan.keranjangs = this.keranjangs;
          axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {

            // untuk menghapus semua keranjang ketika sudah checkout
            this.keranjangs.map(function(item){
              return axios
                .delete("http://localhost:3000/keranjangs/"+item.id)
                .catch((error) => console.log(error)) 
            });
            // Passing to pesanan sukses
              this.$router.push({ path: "/pesanan-sukses"})
              this.$toast.success("Sukses dipesan", {
                type: 'success',
                position: 'top-right',
                duration: 3000,
                dismissible: true
              // console.log("Pesanan Berhasil");
            });
          })
          .catch((err) => console.log(err))
        }else{
          this.$toast.error("Nama dan No Meja harus diisi!", {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true
          });
        }
      }
  },
  mounted() {
     axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error))
  },
  computed: {
      totalHarga() {
          return this.keranjangs.reduce(function(items, data){
              return items+data.products.harga * data.jumlah_pesanan;
          },0)
      }
  }
};
</script>
