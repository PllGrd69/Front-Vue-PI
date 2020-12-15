<template>
<div>
    <header id="header-part">
       
        <div class="header-top d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header-contact text-lg-left text-center">
                            <ul>
                                <li><i class="fas fa-map-marked-alt"></i><span>Juliaca - en tu corazon</span></li>
                            </ul>
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
                            <router-link to="/" class="nav-link text-light">
                            <img src="images/logo.png" alt="Logo">
                            </router-link>
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
                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <a class="active" >Inicio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a >Cursos</a>
                                    </li>
                                     <li class="nav-item">
                                        <a >Usuarios</a>
                                    </li>
                                </ul>
                            </div>
                        </nav> 
                    </div>
                </div> 
            </div>
        </div>  
    </header>
    <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-banner-cont">
                        <h2>Añadir Unidad Academica</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Añadir Unidad Academica</li>
                            </ol>
                        </nav>
                    </div>  
                </div>
            </div> 
        </div> 
    </section>
    
    <section id="corses-singel" class="pt-90 pb-120 gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="corses-singel-left mt-30">
                     <div >
              <h1>Añadir Unidad Academica</h1>
              <hr class="divider my-4" />
              <alert :message="message" v-if="showMessage"></alert>
              
              <br /><br />
              <table class="table table-hover table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo UA</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(d, index) in list" :key="index">
                    <td>{{ d.ID }}</td>
                    <td>{{ d.nombre }}</td>
                    <td>{{ d.detalle }}</td>
                    <td>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-warning btn-sm" @click="edit(d.ID)"><i class="fas fa-pen"></i> Update </button>
                        <button type="button" class="btn btn-danger btn-sm ml-2" @click="onDelete(d)"><i class="fas fa-trash-alt"></i> Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="button" class="btn btn-success btn-sm mb-2" v-on:click="add()">
                Crear <br>
                Nueva Unidad
              </button>
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

<style scoped>
#page-banner{
    background: linear-gradient(to bottom,rgba(7, 41, 77, 0.3) 0%, rgba(7, 41, 77, 0.2) 100%), url("../../assets/images/page-banner-2.jpg");
        background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


</style>
