

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
<h3>Get Your Safety Certificates Faster!</h3>
<p class="intro">Our roadworthy certificate service is fast, professional and hassle free.  &nbsp; Complete our fast booking enquiry below
and our staff will get back to you to lock in a time of your convenience! &nbsp; <br> <br>
<strong>Note:</strong> You do not have to attend the inspection if that is more convenient for you<br>
<strong>Pricing:</strong> Cars - $115, Bikes - $98, Trailers $88 <br>
<strong>Status:</strong> &nbsp; <span style="color:green;font-weight:bold">Bookings are open</span>
</p>
</div>  



<div class="taxi-booking bg-grey ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <form action="book-ride.php" id="book-taxi-ride">


                        <div class="taxi-booking-form">

                            <div class="form-field col-lg-4">
                               
                                <select name="package-type" id="package-type" class="niceSelect col-lg-3" >
                                    <option disabled selected>Vehicle Type</option>
                                    <option value="standard">Car / 4WD</option>
                                    <option value="business">Motorcycle</option>
                                    <option value="economy">Trailer</option>
                                    <option value="vip-spacial">Caravan</option>
                                    <option value="comfort">Motorhome</option>
                                    <option value="comfort">Light Truck</option>
                                </select>

                            </div>
                            
                            <br>

                            <div class="form-field ">
                               <select name="package-type" id="package-type" class="niceSelect" >
                                   <option disabled selected>Vehicle Location - State</option>
                                   <option value="Brisbane">Brisbane</option>
                                   <option value="Sunshine Coast">Sunshine Coast</option>
                                   <option value="Gold Coast">Gold Coast</option>

                               </select>
                           </div>

    

                           <div class="form-field">
                                <i class="las la-map"></i>
                                <input type="text" id="full-name" name="full-name" class="form-control" placeholder="Enter Vehicle Suburb" required>
                            </div>

                        


                           <div class="form-field col-lg-6">
                               
                               <select name="package-type" id="package-type" class="niceSelect" >
                                   <option disabled selected>Preference AM/PM</option>
                                   <option value="AM Preferred">AM (7am-12pm)</option>
                                   <option value="PM Preferred">PM (12pm-6pm)</option>
                                   <option value="No Preference">No Preference</option>
                               </select>
                           </div>                       

                        </div>

                        <br>

                        <div class="taxi-booking-form">
                            <div class="form-field">
                                <i class="las la-user-tie"></i>
                                <input type="text" id="full-name" :name="fullname" class="form-control" placeholder="Your Name" required>
                            </div>

                            <div class="form-field">
                                <i class="las la-phone"></i>
                                <input type="email" id="email" name="email" class="form-control" placeholder="Phone" required>
                            </div>

                            <div class="form-field">
                                <i class="las la-envelope-open"></i>
                                <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
                            </div>
       
                            <br>

                            <div class="form-field">
                                <button id="submit" class="default-btn red" type="submit">Send Booking Enquiry</button>
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
    title:'Car Roadworthy Booking Form | Onsite Fast',
    description:'Mobile Car roadworthy certificate, RWC safety certificates in Brisbane, Sunshine Coast and Gold Coast.'
})

</script>


<style scoped>

.intro{
    color:black;
    padding:12px;
    border:solid gray 1px;
    border-radius:4px;
    background-color:white;
}

.red{
    background-color:red;
}

.taxi-booking-form .form-field i {
    color:black;
}



select{
    padding-left:6px
}
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