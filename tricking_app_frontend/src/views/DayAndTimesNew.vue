<template>
  <div class="container">
<!-- <div class="container">
    <h1>New Session</h1>
    <form v-on:submit.prevent="createDayAndTime()">
      <ul>
        <li v-for="error in errors"> {{ error}} </li>
      </ul>
      Date and Time:
      <input type="datetime-local" v-model="newDayAndTimeDay" />
      Gym:
      <input type="text" v-model="newDayAndTimeGymID" />
      <input type="submit" value="Create" />
    </form>
  </div> -->
  <p> </p>
  <p> </p>
    <form v-on:submit.prevent="createDayAndTime()">
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Gym Name</label>
        <div class="col-sm-10">
         <!--  <input class="form-control" type="select" v-model="newDayAndTimeGymName"> -->
          <select data-toggle="select" class="form-control" v-model="newDayAndTimeGymID">
            <option v-for="gym in gyms" v-bind:value="gym.id">
              {{gym.name}}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-text-input" class="col-sm-2 col-form-label">Date & Time</label>
        <div class="col-sm-10">
          <input class="form-control" type="datetime-local" v-model="newDayAndTimeDay">
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
                  Emily Samson <span class="text-primary font-weight-bold">/</span> <a href="#">@iamemily</a>
                </small>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<!-- <div class="container">
    <h1>New Session</h1>
    <form v-on:submit.prevent="createDayAndTime()">
      <ul>
        <li v-for="error in errors"> {{ error}} </li>
      </ul>
      Date and Time:
      <input type="datetime-local" v-model="newDayAndTimeDay" />
      Gym:
      <input type="text" v-model="newDayAndTimeGymID" />
      <input type="submit" value="Create" />
    </form>
  </div> -->


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newDayAndTimeDay: "",
      newDayAndTimeTime: "",
      newDayAndTimeGymID: "",
      newDayAndTimeGymName: "",
      gyms: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/gyms").then(response => {
      this.gyms = response.data;
      console.log(response.data)
    });
  },
  // created: function () {
  //   // axios
  //   // .get("/api/day_and_time/" + this.$route.params.id).then(response => {
  //   //   this.day_and_time.user_id = response.data;
  //   });
  // },
  methods: {
    createDayAndTime: function() {
      var params = {
        datetime: this.newDayAndTimeDay,
        
        gym_id: this.newDayAndTimeGymID
      };
      axios
        .post("/api/day_and_times", params)
        .then(response => {
          this.$router.push("/day_and_times");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
