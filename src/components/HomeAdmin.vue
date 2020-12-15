<template>
  <div>
    <section>
      <div class="single-slider bg_cover pt-150 bgslid" data-overlay="4">
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-9">
              <div class="slider-cont">
                <h1 data-animation="bounceInLeft" data-delay="1s">
                  Inscripción para Cursos Extraprogramaticos
                </h1>
                <p data-animation="fadeInUp" data-delay="1.3s">
                  Donec vitae sapien ut libearo venenatis faucibus. Nullam quis
                  ante. Etiam sit amet orci eget eros faucibus tincidunt Sed
                  fringilla mauri amet nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="category-part">
      <div class="container mt-25">
        <div class="category pt-10 pb-20">
          <div class="row">
            <div class="col-lg-4">
              <div class="category-text pt-50">
                <h2>Crear Cursos</h2>
              </div>
            </div>
            <div
              class="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2"
            >
              <div class="row">
                <div class="col-lg-4 mt-10">
                  <a href="CursosAdmin.html">
                    <span class="singel-category text-center color-1">
                      <span class="icon">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span class="cont">
                        <span> Agregar Cursos </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div class="col-lg-4 mt-10">
                  <a href="AddUsuario.html">
                    <span class="singel-category text-center color-2">
                      <span class="icon">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span class="cont">
                        <span> Añadir usuario</span>
                      </span>
                    </span>
                  </a>
                </div>
                <div class="col-lg-4 mt-10">
                  <a href="#">
                    <span class="singel-category text-center color-3">
                      <span class="icon">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span class="cont">
                        <span> Carga Academica </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style>
.bgslid {
  background: linear-gradient(
      to bottom,
      rgba(7, 41, 77, 0.8) 0%,
      rgba(77, 41, 77, 0.8) 100%
    ),
    url("../assets/slider/s-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*background-image: url(../assets/slider/s-1.jpg)*/
  height: 60vh;
}
.icon {
  color: #ffc600;
  font-size: 5rem;
}
.cont {
  width: 10rem;
}
</style>
