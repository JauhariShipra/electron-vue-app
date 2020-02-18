<template>
    <div class="navigation">
      <b-nav-item class="nav-item">
        <router-link class="nav-link tabs navbar-brand navList" to="/Home">Home</router-link>
      </b-nav-item>
      <b-nav-item class="nav-item">
        <router-link class="nav-link tabs navbar-brand navList" to="/Language">Language</router-link>
      </b-nav-item>
      <b-nav-item class="nav-item">
        <router-link class="nav-link tabs navbar-brand navList" to="/BookClass">BookClass</router-link>
      </b-nav-item>
      <b-nav-item class="nav-item">
        <router-link class="nav-link tabs navbar-brand navList" to="/ContactInfo">Contact Info</router-link>
      </b-nav-item>
    </div>
</template>

<script>
  export default{
    name:'Navigation',
    data (){
      return{
        title:'Navigation',
      }
    }
  }
</script>

<style>
  .navigation{
    background:#222;
  }
  .navigation .nav-item .tabs{
    display: inline-block;
    list-style: none;
    width:25%;
    height:50px;
    background-color: #222 !important;
    border:1px solid #9d9d9d;
    color: #fff !important;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 5px;
    padding: 13px 0 0 0;
    box-sizing: border-box;
    text-align: center;
    margin-right: -10px;
    background-color:transparent;
  }
  .navigation .nav-item .activeTab{
    color:#9d9d9d;
  }
  .navigation .nav-item:nth-child(1){
    margin-left:10px;
  }
</style>
