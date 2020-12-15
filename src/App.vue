<template>
  <div id="app">
    <header id="header-part">
      <div class="header-top d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="header-contact text-lg-left text-center">
                <ul>
                  <li>
                    <i class="fas fa-map-marked-alt"></i><span>Juliaca</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="header-opening-time text-lg-right text-center">
                <p>Proxima clase 5 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-logo-support pt-30 pb-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="logo">
                <a href="HomeAdmin.html">
                  <h1>LMS-BookEye</h1>
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-md-8">
              <div class="support-button float-right d-none d-md-block">
                <div class="button float-left">
                  <a href="#" class="main-btn">Ingresa a la clase</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-9 col-8">
              <nav class="navbar navbar-expand-lg">
                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <a href="HomeAdmin.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a href="CursosAdmin.html">Cursos</a>
                    </li>
                    <li class="nav-item">
                      <a href="">Persona</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Componentes -->
    <div>
      <router-view></router-view>
      <div class="col-md-12">
        <div class="row">
          <!-- <div class="col-md-2">
            <MenuComponent></MenuComponent>
          </div> -->
          <div class="col-md-12 w-100">
            <div class="jumbotron"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import MenuComponent from "./components/MenuComponent";
export default {
  name: "App",
  components: {
    // MenuComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import "./assets/css/style.css";
@import "./assets/css/default.css";
@import "./assets/css/responsive.css";
</style>