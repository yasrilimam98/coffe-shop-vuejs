<template>
  <div class="hero">
    <!-- Versi Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-10">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Coffe Menu</strong> <br />
                in Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan Coffe favorit Anda</p>
              <button class="btn btn-lg btn-success">
                <b-icon icon="arrow-right"></b-icon> Pesan
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/coffe.png" width="90%" alt="" />
        </div>
      </div>
    </div>

    <!-- Versi Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-10">
        <div class="col-md-6 mb-6">
          <img src="../assets/img/coffe.png" width="90%" alt="" />
        </div>
        <div class="col-md-12">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Coffe Menu</strong> <br />
                in Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan Coffe favorit Anda</p>
              <button class="btn btn-lg btn-success">
                <b-icon icon="arrow-right"></b-icon> Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroLayout",
};
</script>

<style></style>
