<template>
  <div class="bookClass">
    <Navigation/>

    <div class="cntyImgCover bookClass" :style="cssProps">
      <div class="container content-wrapper">
        <div class="row">
          <div class="col-xs-12 col-md-12 col-lg-12 quote">
            <h1>BOOK YOUR CLASS</h1>
            <h2>Flexible plans to match your study needs</h2>
          </div>
        </div>
      </div>
      </div>
      <div class="container bkClsContnr content-wrapper">
        <div class="row">
          <div class="col-xs-12 col-md-12 col-lg-12 bookClassContnt">
            <div class="col-xs-12 col-md-12 col-lg-12">
              <div class="col-xs-3 col-md-3 col-lg-3 pricetiles">
                <h4>2 Months</h4>
                <h3>$49.99</h3>
                <p>Per Month</p>
                <button class="formBtn" id="twoMnths">Book Now</button>
                <p>Includes 2 days free class</p>
              </div>
              <div class="col-xs-3 col-md-3 col-lg-3 pricetiles">
                <h4>6 Months</h4>
                <h3>$44.99</h3>
                <p>Per Month</p>
                <button class="formBtn" id="sixMnths">Book Now</button>
                <p>Includes 2 days free class</p>
              </div>
              <div class="col-xs-3 col-md-3 col-lg-3 pricetiles">
                <h4>9 Months</h4>
                <h3>$39.99</h3>
                <p>Per Month</p>
                <button class="formBtn" id="nineMnths">Book Now</button>
                <p>Includes 2 days free class</p>
              </div>
              <div class="col-xs-3 col-md-3 col-lg-3 pricetiles">
                <h4>1 Year</h4>
                <h3>$34.99</h3>
                <p>Per Month</p>
                <button class="formBtn" id="oneYear">Book Now</button>
                <p>Includes 2 days free class</p>
              </div>
            </div>
            <div class="col-xs-12 col-md-12 col-lg-12 bookngDtls">

                <h4 style="color:red;">Sorry Online Booking Not Available At This Point</h4>
                </div>
                <div>
              <div class="col-xs-12 col-md-12 col-lg-12">
                <button type="button" v-on:click="detailPage" class="btn btn-primary ctnuBtn formBtn">Share Your Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation';
  import Footer from "@/components/Footer";
  export default{
    name:'bookClass',
    components:{
      Navigation,
      Footer
    },
    data (){
      return{
        title:'Book Class',
        /* Setting Background Image*/
        cssProps: {
          backgroundImage: `url(${require('@/assets/bookClass.png')})`,
        },
      }
    },
    /* Navigate to Another PAge */
    methods:{
      detailPage: function (event) {
        this.$router.push({ path: 'ContactInfo' })
      }
    }
  }
</script>

<style>
  .bookClass{
    background-attachment: fixed;
    min-height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .pricetiles{
    border-right: 1px solid #DCDCDC;
    display: inline-block;
    margin: 60px auto;
  }
  .pricetiles:last-child{
    border: none;
  }
  .pricetiles .formBtn{
    padding: 8px 22px;
    font-weight: 500;
    font-size: 16px;
    margin: 5px 0px;
    color:#808080;
  }
  .bookngDtls{
    margin:30px 0;
  }
  .bookClassContnt{
    text-align: center;
    line-height: 20px;
  }
  .bookClassContnt li{
    list-style: none;
  }
  .ctnuBtn{
    background: #00BFFF;
    padding: 10px 40px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  .ctnuBtn:hover{
    background: #00BFFF;
    border: 1px solid #fff;
  }
  .bkClsContnr{
    box-sizing:border-box;
    padding-bottom:150px;
  }

</style>
