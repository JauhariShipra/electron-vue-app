<template>
  <div class="ContactInfo">
    <Navigation/>
    <ContactUs @nameData=updateMessage />
    <Results :msg="childData"/>
    <Footer/>
  </div>
</template>

<script>
  /** Importing Component Files to get the Component Data **/

  import Navigation from '@/components/Navigation';
  import ContactUs from '@/components/ContactUs';
  import Results from "@/components/Form";
  import Footer from "@/components/Footer";

  export default {
    name: 'ContactInfo',
    components:{
      Navigation,
      ContactUs,
      Results,
      Footer
    },
    data: function() {
      return {
        childData: "fName",
        lNameData: "lName",
        title:'ContactInfo',
      };
    },
    methods: {
      updateMessage(variable) {
        this.childData= variable;
      },
      updateLName(lName){
        this.lNameData = lName;
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
