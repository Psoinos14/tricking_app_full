<template>
 <div>
    <div id="testimonials" class="p-3 py-lg-6 bg-dark">
      <div class="container">
        <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
        <h2 class="text-white text-center text-uppercase font-weight-bold my-0">
          View your Friend Requests
        </h2>
        <hr class="mb-5 w-50 mx-auto" />
        <div class="row">
          <div class="col-md-4 d-md-flex" v-for="friend_request in friend_requests">
            <blockquote class="blockquote-bubble text-center" data-animate="fadeIn" data-animate-delay="0.1">
              <p class="blockquote-bubble-content bg-white">{{friend_request.incoming_friend_requests}}</p>
              <small class="text-grey">
                  <img src="assets/img/team/jimi.jpg" alt="Jimi Bloggs" class="rounded-circle mr-2" />
                  <span class="text-primary font-weight-bold"></span> <a href="#"></a>

              </small>
              <a href="#" class="btn btn-primary btn-rounded btn-lg" v-on:click="createFriendship(friend_request.friend_id)">Accept Friend Request</a>
              <p>
              </p>
              
              <button v-on:click="destroyFriendRequest(friend_request.friend_id)">Deny Friend Request</button>
            </blockquote>
          </div>
          
        </div>
      </div>

<!-- <div class="container">
    <h1> All Incoming Friend Requests </h1>
    <div v-for="friend_request in friend_requests">
      <p> {{friend_request.incoming_friend_requests}} </p>
      <button v-on:click="createFriendship(friend_request.friend_id)">Accept Friend Request</button>
      <button v-on:click="destroyFriendRequest()">Deny Friend Request</button>
    </div>
  </div> -->
<!-- 
**************^^ -->
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
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      friend_requests: []
    };
  },
  created: 


  function() {
    axios.get("/friend_requests").then(response => {
      this.friend_requests = response.data;
      console.log(this.friend_requests);
    });
  },
  methods: {
    createFriendship: function(id) {
      console.log(id)

      var params = {
        user_id: id
      };
      axios.post("/friendships", params).then(response => {
        this.friend_requests = response.data;
        this.$router.go("/home");
        console.log(this.friend_requests);
      });
    },
    destroyFriendRequest: function(id) {
      console.log(id)
      var params = {
        user_id: id
      };
      axios.delete("/friend_requests/" + id).then(response => {
        this.$router.go("/home");
      })
    }
  }
};
</script>