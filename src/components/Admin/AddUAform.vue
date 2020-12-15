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

    <!-- Fin Nav-->

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
                        <div class="container h-10">
                            <div class="row h-100 align-items-center justify-content-center text-center">
                                <div class="col-lg-10 align-self-end">
                                        <div>
                                <h1>Cursos Form</h1>
                                <hr class="divider my-4" />
                                <br /><br />
                                <alert :message="message" v-if="showMessage"></alert>
                                <button type="button" class="btn btn-success btn-sm" v-on:click="back()"> Regresar</button>
                                <br /><br />
                                <p class="text-left">ID : {{ d.ID }}</p>
                                <b-form @submit="onSubmit" @reset="onReset" class="w-100">
                                <b-form-group class="text-left" id="form-title-group" label="Nombre:" label-for="form-title-input">
                                <b-form-input id="form-title-input" type="text" v-model="d.nombre" required placeholder="Nombre">
                                </b-form-input>
                                </b-form-group>
                                <b-form-group
                                class="text-left"
                                    id="form-author-group"
                                    label="Detalle:"
                                    label-for="form-author-input"
                                >
                                    <b-form-input
                                    id="form-author-input"
                                    type="text"
                                    v-model="d.detalle"
                                    required
                                    placeholder="Detalle"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                class="text-left"
                                    id="form-author-group"
                                    label="Sesiones"
                                    label-for="form-author-input"
                                >
                                    <b-form-input
                                    id="form-author-input"
                                    type="text"
                                    v-model="d.sesiones"
                                    required
                                    placeholder="Sesiones"
                                    >
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group
                                class="text-left"
                                    id="form-author-group"
                                    label="Horas:"
                                    label-for="form-author-input"
                                >
                                    <b-form-input
                                    id="form-author-input"
                                    type="text"
                                    v-model="d.horas"
                                    required
                                    placeholder="Horas"
                                    >
                                    </b-form-input>
                                </b-form-group>

                                <b-button-group class="d-flex justify-content-around mb-2">
                                    <b-button type="submit" variant="primary"><i class="fas fa-check"></i> Submit</b-button>
                                    <b-button type="reset" variant="danger"><i class="fas fa-sync"></i> Reset</b-button>
                                </b-button-group>
                                </b-form>
                            </div>
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

<style scoped>
#page-banner{
    background: linear-gradient(to bottom,rgba(7, 41, 77, 0.3) 0%, rgba(7, 41, 77, 0.2) 100%), url("../../assets/images/page-banner-2.jpg");
        background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


</style>
