  <template>
    <div class="wrapper home">
      <!-- Navigation - Top Menu Start -->
      <Navigation/>

      <!-- Banners and Quotes Start -->
      <div class="header md-layout md-gutter" id="homeCover" :style="cssProps">
        <div class="quote md-layout-item">
					<h1>“Learning a new language, just like opening a new window, allows you to see the world with intimacy.” </h1>
					<h4 class="author"> Pearl Zhu</h4>
				</div>
        <!-- Dropdown Start-->
        <GetLanguage/>
      </div>
      <Footer/>
    </div>
  </div>
</template>

  <script>
    /*Import Component */
    import Navigation from '@/components/Navigation';
    import GetLanguage from '@/components/GetLanguage';
    import Footer from '@/components/Footer';

    export default {
      name: 'Home',
      components:{
        Navigation,
        GetLanguage,
        Footer
      },
      data() {
        return {
          title: 'Home',
          /* Setting Background Image*/
          cssProps: {
            backgroundImage: `url(${require('@/assets/newBackground.png')})`,
          },
        }
      },
    }
  </script>

  <style>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
    body{
      margin:0px;
      font-family:adelle, serif;
      overflow-x: hidden;
    }
    .header{
      position: relative;
      background-attachment: fixed;
      box-sizing: border-box;
      min-height: 725px;
      background-position: center;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
    .quote h1, .quote h4{
      position: relative;
      width: 800px;
      margin: 0 auto;
      color: #fff;
    }
    .quote h1{
      text-align: center;
    }
    #homeCover h1, #homeCover h4{
      top: 300px;
    }
    .quote h4{
      float:right;
      width: 500px;
      font-style:oblique;
    }
  </style>
