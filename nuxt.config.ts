// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


    app: {
        head: {
          meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          link:[
            {rel:'icon', type:'image/x-icon', href:'favicon.png'}
          ],
          script: [
            {src: '/js/vendor/jquary-3.6.0.min.js', body:true},
            {src:'/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js', body:true},
            {src:'/js/vendor/jquery.ajaxchimp.min.js', body:true},
            {src:'/js/vendor/bootstrap.min.js', body:true},
            {src:'/js/vendor/popper.min.js', body:true},
            // {src:'/js/vendor/swiper.min.js', body:true},
            {src:'/js/vendor/jquery.nice-select.min.js', body:true},
            // {src:'/js/vendor/venobox.min.js', body:true},
            // {src:'/js/vendor/wow.min.js', body:true},
            {src:'/js/main.js', body:true},

          ]
        }
      },


css:[
'assets/css/bootstrap.min.css',
'assets/css/animate.min.css',
'assets/css/fontawesome.min.css',
'assets/css/line-awesome.min.css',
'assets/css/keyframe-animation.css',
'assets/css/nice-select.css',
// 'assets/css/venobox.min.css',
// 'assets/css/swiper.min.css',
'assets/css/elements.css',
'assets/css/header.css',
'assets/css/slider.css',
'assets/css/blog.css',
'assets/css/main.css',
'assets/css/responsive.css'
]




})


