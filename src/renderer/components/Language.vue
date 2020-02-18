  <template>
    <div class="language">
      <Navigation/>

      <div class="containerLang col-xs-12 col-md-12 col-lg-12">
        <div class="col-xs-5 col-md-5 col-lg-5 ">
          <h3 class="">Scroll Down to Explore All Languages</h3>
        </div>
        <div class="col-xs-5 col-md-5 col-lg-5">
          <button type="button" v-on:click="move" value="Next Page" class="btn btn-primary nextBtn">Next Page</button>
        </div>
      </div>

      <div class="cntyImgCover" :style="frenchProps" id="French">
        <div class="header md-layout md-gutter">
          <div class="col-xs-12 col-md-12 col-lg-12 quote">
            <h1>Découvrir le français en France</h1>
            <h1>Discover French in France</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-12 col-lg-12 crsDtl">
    				<div class="col-xs-3 col-md-3 col-lg-3">
    					<h3>Cours intensif</h3>
    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    				</div>
    				<div class="col-xs-3 col-md-3 col-lg-3">
    					<h3>Cours général</h3>
    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    				</div>
    				<div class="col-xs-3 col-md-3 col-lg-3">
    					<h3>Stage</h3>
    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    				</div>
    				<div class="col-xs-3 col-md-3 col-lg-3">
    					<h3>Préparation à l'examen</h3>
    					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    				</div>
    			</div>
        </div>
      </div>

      <div class="cntyImgCover" :style="germanyProps" id="German">
        <div class="header md-layout md-gutter">
          <div class="col-xs-12 col-md-12 col-lg-12 quote">
            <h1>Entdecke Deutsch in Deutschland</h1>
            <h1>Discover German in Germany</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-12 col-lg-12 crsDtl">
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Intensivkurs</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Allgemeiner Kurs</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Praktikum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Prüfungsvorbereitung</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>

      <div class="cntyImgCover" :style="italyProps" id="Italian">
        <div class="header md-layout md-gutter">
          <div class="col-xs-12 col-md-12 col-lg-12 quote">
            <h1>Scopri l'italiano in Italia</h1>
            <h1>Discover Italian in Italy</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-12 col-lg-12 crsDtl">
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Corso Intensivo</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Corso generale</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Esperienza di tirocinio</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Preparazione all'esame</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>


      <div class="cntyImgCover" :style="russiaProps" id="Russian">
        <div class="header md-layout md-gutter">
          <div class="col-xs-12 col-md-12 col-lg-12 quote">
            <h1>Откройте для себя русский язык в России</h1>
            <h1>Discover Russian in Russia</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-12 col-lg-12 crsDtl">
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Интенсивный курс</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Общий курс</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Стажировка</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-xs-3 col-md-3 col-lg-3">
              <h3>Подготовка к экзамену</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </template>

  <script>
  import Navigation from '@/components/Navigation';
  import GetLanguage from '@/components/GetLanguage';
  import Footer from '@/components/Footer';
    export default{
      name:'Language',
      components:{
        Navigation,
        GetLanguage,
        Footer
      },
      props: {
        msg: {
          type: String
        }
      },
      data (){
        return{
          title:'About',
          /* Setting Background Images*/
          frenchProps: {
            backgroundImage: `url(${require('@/assets/FranceBackground.png')})`,
          },
          germanyProps: {
            backgroundImage: `url(${require('@/assets/germany.jpg')})`,
          },
          italyProps: {
            backgroundImage: `url(${require('@/assets/italy.jpg')})`,
          },
          russiaProps: {
            backgroundImage: `url(${require('@/assets/russia.jpg')})`,
          },
        }
      },
      methods: {
        /* Navigating to another page*/
        move: function (event) {
          this.$router.push({ path: 'BookClass' })
        }
      },
    }
  </script>

  <style>
  .cntyImgCover{
    background-attachment: fixed;
    min-height: 600px;
    height: 600px;
    text-align: center;
    text-shadow: 0 1px 1px #333;
  }
  .quote h1 {
    top: 300px;
  }
  .col-xs-3, .col-md-3, .col-lg-3{
    float:left;
  }
  .col-xs-3 h3, .col-md-3 h3, .col-lg-3 h3,.col-xs-3 p, .col-md-3 p, .col-lg-3 p{
    color: #9D9DA9;
  }
  .crsDtl{
    margin: 100px auto;
  }
  .saveLang{
    display:block;
  }
  .nextBtn {
    font-size: 18px;
    background: #FF8C00;;
    color: #fff;
    border-color: #fff;
    border-radius: 10px;
  }
  .nextBtn:hover{
    background: #FF8C00;;
    border-color: #fff;
  }
  .containerLang{
    background: linear-gradient(-90deg, #FF7F50, #FFA500);
  }
  .containerLang div{
    display: inline-block;
    padding: 10px;
    color: #fff;
    text-align: center;
    text-align: -webkit-center;
  }
  </style>
