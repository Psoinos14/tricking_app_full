<template>
  <div>

  <!-- ======== @Region: #highlighted ======== -->
  <div id="pricing" class="bg-light py-3 py-lg-6">
      <div class="container">
        <hr class="hr-lg mt-0 mb-3 w-10 mx-auto hr-primary" />
        <h2 class="text-center text-uppercase font-weight-bold my-0">
          All Sessions
        </h2>
        <h5 class="text-center font-weight-light mt-2 mb-0 text-muted">
          See the time and date of each session
        </h5>
        <hr class="mb-5 w-50 mx-auto" />
        <div class="row pricing-stack">
          <div class="col-md-3" v-for="day_and_time in day_and_times">
            <div class="card bg-shadow text-center border-0">
              <h4 class="card-title py-3 my-0 text-shadow op-8">
                {{day_and_time.gym_name}}
              </h4>
            
              <div class="card-body">
                <ul class="list-unstyled text-sm text-black-100">
                  <li> {{day_and_time.date_time}} </li>
                  <p></p>
                  <h4> Attendees: </h4>

                </ul>
                <div class="card-body" v-for="attendee in day_and_time.attendees">
                  <p> {{ attendee.first_name }} {{ attendee.last_name }}
                  </p>
                  <p> Age: {{ attendee.age }}
                  </p>
                  <p> Location: {{attendee.location}}
                  </p>
                  <p><button v-on:click="createFriendRequest(attendee.id)">Add Friend</button></p>
                  
                  </div>
                  
                  
                <a href="#" class="btn btn-primary btn-rounded btn-lg" v-on:click="createAttendee(day_and_time.ID)">Attend This Session</a>
              </div>
            </div>
          </div>
          
          
          
        </div>
        <!-- Plan features -->
        <div class="bg-white bg-op-4 bg-shadow py-3 mt-4 text-center">
          <h5 class="d-inline-block pr-1 my-0">
            See who's attending which open gym session!
          </h5>
          <p class="d-inline-block text-black-50 my-0"> Send friend requests <span class="text-primary font-weight-bold mx-2">//</span> See their updates <span class="text-primary font-weight-bold mx-2">//</span> Trick with them </p>
        </div>
      </div>
    </div>

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

 <!--  <div class="container"> -->
<!-- 
    <h1>All Gyms</h1>
    <div v-for="gym in gyms">
      <h2>{{ gym.name }}</h2>
      <p>address: {{ gym.address }}</p>
      <p> ------------------------------------------------------- </p>
    </div>
  </div> -->

    
</template>



<!-- <template>
  <div class="container">
    <h1>All Sessions</h1>
    <div v-for="day_and_time in day_and_times">
      <h2> {{ day_and_time.gym_name}} </h2>
      <p> {{ day_and_time.day }} </p>
      <p> {{ day_and_time.date_time}} </p>
      <h3> Attendees: </h3>
      <div v-for="attendee in day_and_time.attendees">
        <p> {{ attendee.first_name }} {{ attendee.last_name }}
        </p>
        <p> Age: {{ attendee.age }}
        </p>
        <p> Location: {{attendee.location}}
        </p>
        <p><button v-on:click="createFriendRequest(attendee.id)">Add Friend</button></p>

      </div>
      <button v-on:click="createAttendee(day_and_time.ID)">Attend This Session</button>
          </div>
  </div>
</template> -->

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      day_and_times: [],
      attendees: [],
    };
  },
  created: function() {
    axios.get("/api/day_and_times").then(response => {
      this.day_and_times = response.data;
      console.log(response.data)
    });
  },
  methods: {
    createAttendee: function(day_and_timeID) {
      console.log(day_and_timeID);
      var params = {
        day_and_time_id: day_and_timeID
      };
      axios.post("/api/attendees", params).then(response => {
        this.$router.go();
      });
    },
    createFriendRequest: function(friendid) {
      console.log(friendid);
      var params = {
        friend_id: friendid
      };
      axios.post("/friend_requests", params).then(response => {
        this.$router.go();
      });
    }
  }
};
</script>
