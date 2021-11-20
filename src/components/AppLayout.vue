<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark mb-2 pt-5">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item m-4 active">
                        <router-link class="nav-link" to="/"><h1>VIDEO GAMES</h1></router-link> |
                    </li>
                    <li class="nav-item m-4">
                       <router-link class="nav-link" to="/contact"><h1>CONTACT</h1></router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'app-layout'
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');
  a.router-link-active{
    text-shadow: -10px -15px 0px #182c47;
  }
  main {
    min-height: 100vh;
    background: linear-gradient(#081221, #03080f);
  }
  h1,h2,h3,h4,h5,label,text,span {
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
  }
  h6, p {
    color: #c1d1e8;
    font-family: 'Mulish', sans-serif;
  }
  html, body {
    min-height: 100vh;
    background: linear-gradient(#081221, #03080f);
  }
  .card-background {
    background-color: #0e1a2b !important;
  }
  .form-control:valid {
    background-color:  #182c47 !important;
    color: #c1d1e8 !important;
  }
  .form-control:focus {
    color: #c1d1e8 !important;
  }
  .form-control {
    background-color:  #182c47 !important;
    color: #c1d1e8;
    border: 1px solid transparent !important;
  }
  .bg-none {
    background-color: transparent !important;
  }
  .card-body-bg {
    background-color: #0e1a2b;
  }
  .dark-background {
    background-color:black ;
  }
  .card-body-padding {
    padding: 0.5rem 0.5rem
  }
  .btn-block {
    width: 100%
  }
  input, textarea, button {
    width: 100%
  }
  .custom-bg-fill {
    background-color: #182c47;
  }
  .btn-primary {
    background-color: #5692e8 !important;
  }
  .btn-custom-bg {
    background-color: #5692e8 !important;
  }
  .custom-alignment {
    padding-left: 0.8rem;
    padding-right: 1rem;
  }
</style>
