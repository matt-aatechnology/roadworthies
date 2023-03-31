

    <template>


    <section class="page-header blog-details">
        <div class="container">
            <div class="page-header-info text-center">
                <h2>Fast Roadworthy Booking Enquiry</h2>
            </div>
        </div>
    </section>
   

    <section class="blog-section blog-page bg-grey padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="post-details">

<div class="page-title">         
<h3>GET YOUR CARAVAN RWC FASTER!</h3>
</div>  



<div class="taxi-booking bg-grey ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 offset-lg-1">
                    <form action="book-ride.php" id="book-taxi-ride">


                        <div class="taxi-booking-form">

                            <div class="form-field">
                                <i class="las la-tags"></i>
                                <select name="package-type" id="package-type" class="niceSelect">
                                    <option value="standard">Standard</option>
                                    <option value="business">Business</option>
                                    <option value="economy">Economy</option>
                                    <option value="vip-spacial">VIP Spacial</option>
                                    <option value="comfort">Comfort</option>
                                </select>
                            </div>

                            <div class="form-field">
                                <i class="las la-user-tie"></i>
                                <input type="text" id="full-name" name="full-name" class="form-control" placeholder="Your Name" required>
                            </div>


                            <div class="form-field">
                                <i class="las la-envelope-open"></i>
                                <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
                            </div>
       
                            <div class="form-field">
                                <i class="las la-user-friends"></i>
                                <select name="passengers" id="passengers" class="niceSelect">
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Person</option>
                                    <option value="3">3 Person</option>
                                    <option value="4">4 Person</option>
                                    <option value="5">5 Person</option>
                                </select>
                            </div>
                            <div class="form-field">
                                <i class="las la-map-marker"></i>
                                <input type="text" id="start-dest" name="start-dest" class="form-control" placeholder="Start Destination" required>
                            </div>
                            <div class="form-field">
                                <i class="las la-map-marker"></i>
                                <input type="text" id="end-dest" name="end-dest" class="form-control" placeholder="End Destination" required>
                            </div>
                            <div class="form-field">
                                <i class="las la-calendar"></i>
                                <input type="text" id="ride-date" name="ride-date" class="form-control date-picker" placeholder="Select Date" required>
                            </div>
                            <div class="form-field">
                                <i class="las la-clock"></i>
                                <input type="text" id="ride-time" name="ride-time" class="form-control time-picker" placeholder="Select Time" required>
                            </div>
                            <div class="form-field">
                                <button id="submit" class="default-btn" type="submit">Book Your Taxi</button>
                            </div>
                        </div>
                        <div id="form-messages" class="alert" role="alert"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>



<br>

          

                       
                     
                    </div>
                </div>
            </div>
        </div>
    </section>


   
</template>

<script setup>

definePageMeta({
  layout:'general'
}),

useServerSeoMeta({
    title:'Car Roadworthy Certificates | Onsite Fast',
    description:'Mobile Car roadworthy certificate, RWC safety certificates in Brisbane, Sunshine Coast and Gold Coast.'
})

</script>


<style scoped>
.page-header {
    background-image: url(/img/banner-brisbane.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
}

.page-title{
    font-size:26px;
    color:white;
    text-align:center;
}


.page-header-info{
    padding-top:30px;
}

.blog-section{
    padding-top:1.5em;
}

p{
    margin:1em 0;
    text-align:justify;
}

:deep(h3){
    color:black;
    font-size: 22px;
}

.img-border{
    border:solid black 2px;
}

subheading{
    font-size:20px;
    color:yellow;
}

a{
    color:red;
}

space{
margin-right:6px;    
}
</style>