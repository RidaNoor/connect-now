<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12"></div>
      <div class="col-lg-5 col-md-12 col-sm-12">
        <h3>GET IN TOUCH</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        <form @submit.prevent="submit">
          <div class="card p-3 card-background">
            <div class="p-1">
              <p v-if="successMsg" class="text-success mb-1 mt-1" v-html="successMsg"></p>
              <h5>Contact Form</h5>
            </div>
            <div class="row">
              <div class="p-3 col-lg-6 col-md-12 col-sm-12 form-group">
                <label>Name*</label>
                <input v-model="name" class="form-control validate form-control-sm" type="text" required/>
              </div>
              <div class="p-3 col-lg-6 col-md-12 col-sm-12">
                <label>Email Address*</label>
                <input v-model="email" type="text" class="form-control validate form-control-sm" required/>
              </div>
            </div>
            <div class="p-1 col-lg-12 col-md-12 col-sm-12 form-group">
              <label>Message*</label>
              <textarea v-model="message" class="form-control validate form-control-sm" rows=3 required></textarea>
            </div>
            <div class="row mt-3">
              <div class="col-lg-9 col-md-12 col-sm-12"></div>
              <div class="float-right col-lg-3 col-md-12 col-sm-12">
                <button v-if="!loading" class="btn btn-primary btn-block">Send</button>
                <loader-button v-else title=" Sending" bg="btn-block bg-success text-white"></loader-button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      name: '',
      email: '',
      message: '',
      successMsg: ''
    }
  },
  methods: {
    submit () {
      this.loading = true
      this.successMsg = ''
      setTimeout(function () {
        this.loading = false
        this.name = ''
        this.email = ''
        this.message = ''
        this.successMsg = 'Thankyou for submitting the form'
      }.bind(this), 5000)
    }
  }
}
</script>
