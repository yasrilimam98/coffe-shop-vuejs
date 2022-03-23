<template>
    <div class="pesanan-sukses">
        <DefaultLayout />
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col text-center">
                    <img src="../assets/img/menunggu.png" width="300">
                    <h2><strong>Sukses!!</strong></h2>
                    <h4>Pesanan Anda segera di proses <br> Selamat menunggu</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DefaultLayout from "@/components/DafaultLayout.vue";
export default {
    name: "PesananSukses",
    components: {
        DefaultLayout,
  },
}
</script>

<style>

</style>