<template>
  <div class="container">
<!--  <h1>New User</h1>
    
    <form v-on:submit.prevent="createUser()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      First Name:
      <input type="text" v-model="newUserFirstName" />
      Last Name:
      <input type="text" v-model="newUserLastName" />
      Age:
      <input type="text" v-model="newUserAge" />
      Location:
      <input type="text" v-model="newUserLocation" />
      Email:
      <input type="text" v-model="newUserEmail" />
      Password:
      <input type="text" v-model="newUserPassword" />
      Password Confirmation:
      <input type="text" v-model="newUserPasswordConfirmation" />
      <input type="submit" value="Create" />
    </form> -->
    <form v-on:submit.prevent="createUser()">
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">First name</label>
        <div class="col-sm-10">
          <input class="form-control" type="text" v-model ="newUserFirstName">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Last name</label>
        <div class="col-sm-10">
          <input class="form-control" type="text" v-model ="newUserLastName">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Age</label>
        <div class="col-sm-10">
          <input class="form-control" type="text" v-model ="newUserAge">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Location</label>
        <div class="col-sm-10">
          <input class="form-control" type="text" v-model ="newUserLocation">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input class="form-control" type="text" v-model ="newUserEmail">
        </div>

      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input class="form-control" type="password" v-model="newUserPassword">
        </div>
        
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Password confirmation</label>
        <div class="col-sm-10">
          <input class="form-control" type="password" v-model="newUserPasswordConfirmation">
        </div>
      </div>
      <div class="row justify-content-around">
        <input type="submit" class="btn btn-primary btn-rounded btn-lg text-center" value="Submit" />
      </div>
    </form>


  <!-- ======== @Region: #content ======== -->
  <div id="content" class="p-0">
    <!-- Features -->
    <div id="content" class="p-0">
    <!-- Features -->
    <div id="features" class="container py-4 py-lg-6">
      <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
      <h2 class="text-center text-uppercase font-weight-bold my-0">
        Core Features
      </h2>
      <hr class="mb-5 w-50 mx-auto" />
      <div class="row text-center">
        <div class="col-lg-4 py-1">
          <i class="la la-tachometer icon-3x text-primary" data-animate="fadeIn" data-animate-delay="0.1"></i>
          <h5 class="mt-1 op-8">
            Login
          </h5>
          <p class="text-sm text-black-50">Login to see your friends statuses.</p>
        </div>
        <div class="col-lg-4 py-1">
          <i class="la la-wrench icon-3x text-primary" data-animate="fadeIn" data-animate-delay="0.2"></i>
          <h5 class="mt-1 op-8">
            Post Statuses
          </h5>

          <p class="text-sm text-black-50">Tell your friends what big trick you just landed!</p>
        </div>
        <div class="col-lg-4 py-1">
          <i class="la la-rocket icon-3x text-primary" data-animate="fadeIn" data-animate-delay="0.3"></i>
          <h5 class="mt-1 op-8">
            View your friends statuses
          </h5>
          <p class="text-sm text-black-50">See what your friends have been up to.</p>
        </div>
        <div class="col-lg-4 py-1">
          <i class="la la-area-chart icon-3x text-primary" data-animate="fadeIn" data-animate-delay="0.4"></i>
          <h5 class="mt-1 op-8">
            See Gyms
          </h5>
          <p class="text-sm text-black-50">See every gym and information about that gym in our database.</p>
        </div>
        <div class="col-lg-4 py-1">
          <i class="la la-users icon-3x text-primary" data-animate="fadeIn" data-animate-delay="0.5"></i>
          <h5 class="mt-1 op-8">
            See all Open Gym sessions
          </h5>
          <p class="text-sm text-black-50">See (and sign up for!) every Open Gym session for each gym, the time, location, and all other trickers attending this session.</p>
        </div>
        <div class="col-lg-4 py-1">
          <i class="la la-plug icon-3x text-primary" data-animate="fadeIn" data-animate-delay="0.6"></i>
          <h5 class="mt-1 op-8">
            Post a new session!
          </h5>
          <p class="text-sm text-black-50">Know a gym that is adding a new Open Gym time to their weekly schedule? Add it here and see it in All Sessions!</p>
        </div>
      </div>
    </div>
    <!-- Why AppStrap -->
    <!--Pricing Table-->
    <!-- Steps -->

    <!-- Video background MDR -->
    
    <!--Projects carousel -->
    
    <!--Customer testimonial-->
    
  </div>
    
    <!--Customer testimonial-->
    <div id="testimonials" class="p-3 py-lg-6 bg-dark">
      <div class="container">
        <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
        <h2 class="text-white text-center text-uppercase font-weight-bold my-0">
          Get better faster!
        </h2>
        <h5 class="text-center font-weight-light mt-2 mb-0 text-grey">
          Don't train alone!
        </h5>
        <hr class="mb-5 w-50 mx-auto" />
        <div class="row">
          <div class="col-md-6 d-md-flex">
            <blockquote class="blockquote-bubble text-center" data-animate="fadeIn" data-animate-delay="0.1">
              <p class="blockquote-bubble-content bg-white">"It's great, I've met so many new trickers I didn't know were in the area!" </p>
              <small class="text-grey">
                  <img src="assets/img/team/jimi.jpg" alt="Jimi Bloggs" class="rounded-circle mr-2" />
                  Jake Gilman <span class="text-primary font-weight-bold">/</span> <a href="#">@jaketricks</a>
                </small>
            </blockquote>
          </div>
          <div class="col-md-6 d-md-flex">
            <blockquote class="blockquote-bubble text-center" data-animate="fadeIn" data-animate-delay="0.3">
              <p class="blockquote-bubble-content bg-white text-center">"I found 3 new gyms that I didn't realize had open gym near me!"</p>
              <small class="text-grey">
                  <img src="assets/img/team/adele.jpg" alt="Adele Bloggs" class="rounded-circle mr-2" />
                  Adele Bloggs <span class="text-primary font-weight-bold">/</span> <a href="#">@iamadele</a>
                </small>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ======== @Region: #content-below ======== -->
  








   <!--  <h1>New User</h1>
    
    <form v-on:submit.prevent="createUser()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      First Name:
      <input type="text" v-model="newUserFirstName" />
      Last Name:
      <input type="text" v-model="newUserLastName" />
      Age:
      <input type="text" v-model="newUserAge" />
      Location:
      <input type="text" v-model="newUserLocation" />
      Email:
      <input type="text" v-model="newUserEmail" />
      Password:
      <input type="text" v-model="newUserPassword" />
      Password Confirmation:
      <input type="text" v-model="newUserPasswordConfirmation" />
      <input type="submit" value="Create" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newUserFirstName: "",
      newUserLastName: "",
      newUserAge: "",
      newUserLocation: "",
      newUserEmail: "",
      newUserPassword: "",
      newUserPasswordConfirmation: "",
      errors: []
    };
  },
  created: function() {console.log('hello world')},
  methods: {
    createUser: function() {
      var params = {
        first_name: this.newUserFirstName,
        last_name: this.newUserLastName,
        age: this.newUserAge,
        location: this.newUserLocation,
        email: this.newUserEmail,
        password: this.newUserPassword,
        password_confirmation: this.newUserPasswordConfirmation
      };
      axios
      .post("/api/users", params)
      .then(response => {
        this.$router.push("/home");
      })
      .catch(error => {
        console.log(error.response);
        this.errors = error.response.data.errors;
      })
    }
  }
}

</script>


