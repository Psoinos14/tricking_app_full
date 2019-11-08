<template>
  <div>
    <div id="testimonials" class="p-3 py-lg-6 bg-dark">
      <div class="container">
        <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
        <h2 class="text-white text-center text-uppercase font-weight-bold my-0">
          What have you landed lately?
        </h2>
        <h5 class="text-center font-weight-light mt-2 mb-0 text-grey">
          Post a status
        </h5>
        <input type="text" v-model="newStatusText" placeholder="Land a new trick?"/> 
        <button v-on:click="createStatus()">Post Status</button>
        <hr class="mb-5 w-50 mx-auto" />
        <div class="row">
          <div class="col-md-4 d-md-flex" v-for="status in myStatuses">
            <blockquote class="blockquote-bubble text-center" data-animate="fadeIn" data-animate-delay="0.1">
              <p class="blockquote-bubble-content bg-white">{{status.text}}</p>
              <small class="text-grey">
                  <img src="assets/img/team/jimi.jpg" alt="Jimi Bloggs" class="rounded-circle mr-2" />
                  You <span class="text-primary font-weight-bold"></span> <a href="#"></a>
                </small>
            </blockquote>
          </div>
          
        </div>
      </div>

    </div>
    <div id="testimonials" class="p-3 py-lg-6 bg-dark">
      <div class="container">
        <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
        <h2 class="text-white text-center text-uppercase font-weight-bold my-0">
          See What Your Friends Have Been Up to
        </h2>
        <h5 class="text-center font-weight-light mt-2 mb-0 text-grey">
          
          <!-- <div v-for="friend in friends">
      <h5>Tricker: {{friend.user}} </h5>
      <div v-for="status in friend.statuses">
      <p> {{status.text}} </p>
    </div>
    </div> -->
        </h5>
        <hr class="mb-5 w-50 mx-auto" />
        <div class="row">
          <div>
          <div class="col-md-4 d-md-flex" v-for="friend in friends">
            <div class="col-lg-10 d-md-flex" v-for="status in friend.statuses">
            
            <blockquote class="blockquote-bubble text-center" data-animate="fadeIn" data-animate-delay="0.1">
              <p class="blockquote-bubble-content bg-white">{{status.text}}</p>
              <small class="text-grey">
                  <img src="assets/img/team/jimi.jpg" alt="Jimi Bloggs" class="rounded-circle mr-2" />
                  {{friend.user}} <span class="text-primary font-weight-bold">/</span> <a href="#">@mrjimi</a>

                </small>
            </blockquote>
          </div>
          </div>

          </div>
          
        </div>
      </div>
      
    </div>
  <!-- ======== @Region: #highlighted ======== -->

  <!-- ======== @Region: #content ======== -->
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

  <!-- ======== @Region: #content-below ======== -->
  
  </div>

  <!-- <div class="home">
    <h1>{{ message }}</h1>
    <input type="text" v-model="newStatusText" placeholder="Land a new trick?"/> 
    <button v-on:click="createStatus()">Post Status</button>
    <h2>{{message3}}</h2>
    <div v-for="status in myStatuses">
        <p> {{status.text}}</p>
    </div>
    <h2>{{message2}}</h2>
    <div v-for="friend in friends">
      <h5>Tricker: {{friend.user}} </h5>
      <div v-for="status in friend.statuses">
      <p> {{status.text}} </p>
    </div>
    </div>

  </div> -->
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to TrickTogether!",
      message2: "See what other trickers have been up to:",
      message3: "Your recent posts and accomplishments",
      friends: [],
      newStatusText: "",
      myStatuses: [],
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/statuses").then(response => {
      // const new_friends = response.data[1];
      // const myStatuses = response.data[0];
      // myStatuses.forEach(status => {
      //   this.statuses.push(status);
      // });
      // new_friends.forEach(friend => {
      //   this.friends.push(friend);
      // });

      
      
      this.friends = (response.data[1]);
      this.myStatuses = response.data[0]['statuses'];
      // this.friends = response.data;
      console.log(this.allStatuses);
    });
  },
  methods: {
    createStatus: function() {
      var params = {
        text: this.newStatusText
      };
      axios
        .post("/api/statuses", params)
        .then(response => { 
          const newStatus = response.data
          console.log(newStatus)
          this.myStatuses.push(response.data);
          // add this to the current user's statuses array using push
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>