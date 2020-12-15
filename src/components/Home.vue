<template>
  <div>
     <nav class="navbar navbar-expand-lg fixed-top navbar-light py-3">
      <router-link to="/" class="navbar-brand text-light">E-learning</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link text-light">Contactos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link text-light">Informacion</router-link>
          </li>     
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a class="nav-link my-2 my-sm-0 disabled" href="#">Register</a>
          <router-link to="/login" class="nav-link text-warning"><i class="fas fa-sign-in-alt"></i>  Login</router-link>
        </form>
      </div>
    </nav>
    <div class="masthead">
      <div class="container h-50">
        <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
                <h1 class="text-uppercase text-white font-weight-bold">Plataforma E-Learning BookEye</h1>
                <hr class="divider my-4" />
                </div>
                <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 font-weight-normal text-light mb-5">La nueva experiencia de ser parte una institución ética y con principios, Crear una base solido de conocimientos para el bien.</p>
                <a class="btn btn-warning btn-xl" href="#about">Nuestra Plataforma Virtual</a>
            </div>
          </div>
      </div>
      <div class="container pt-5">
        <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow pt-3">
                <div class="iconinfo mx-auto"><i class="fas fa-book-reader iconsize"></i></div>
                <div class="card-body">
                  <p class="card-text justifi-center">Contenido</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quas, veniam corporis doloremque expedita eaque at fugiat ut animi neque?</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow pt-3">
                <div class="iconinfo mx-auto"><i class="fas fa-book-reader iconsize"></i></div>
                <div class="card-body">
                  <p class="card-text justifi-center">Contenido</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quas, veniam corporis doloremque expedita eaque at fugiat ut animi neque?</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow pt-3">
                <div class="iconinfo mx-auto"><i class="fas fa-book-reader iconsize"></i></div>
                <div class="card-body">
                  <p class="card-text justifi-center">Contenido</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quas, veniam corporis doloremque expedita eaque at fugiat ut animi neque?</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
</script>

<style>
.iconinfo{
  color:#5222A1;
}
.iconsize{
  font-size: 100px;
}

hr.divider {
  max-width: 3.25rem;
  border-width: 0.2rem;
  border-color: #f4623a;
}
.masthead {
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(58, 35, 107, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url("../assets/bg-masthead.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
masthead h1 {
  font-size: 2.25rem;
}
@media (min-width: 992px) {
  .masthead {
    height: 100vh;
    min-height: 40rem;
    padding-top: 4.5rem;
    padding-bottom: 0;
  }
  .masthead p {
    font-size: 1.15rem;
  }
  .masthead h1 {
    font-size: 3rem;
  }
}
@media (min-width: 1200px) {
  .masthead h1 {
    font-size: 3.5rem;
  }
}
</style>
