<template>
  <div>
    <footer class="footerTxt">
      <h6>© 2017 All rights reserved</h6>
    </footer>
  </div>
</template>

<script>
  export default{
    name:'Footer',
    data (){
      return{
        title:'Footer',
      }
    }
  }
</script>

<style>
  footer {
    padding: 4px 0;
    font-size: 85%;
    text-align: center;
    color: #9d9d9d;
    background-color: #222;
    border-color: #080808;
  }
  .footerTxt{
    color:#9d9d9d;
  }
</style>
