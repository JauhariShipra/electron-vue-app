<template>
  <div class="wrapper contactUs" :style="contactProps">

		  <div class="container">
			  <div class="row">
				  <div class="col-xs-12 col-md-12 col-lg-12 formGenral contactBlock">
					  <div class="col-xs-6 col-md-6 col-lg-6 leftDiv">
						   <form id="contactForm" class="formInfo">
							    <div class="form-group">
								     <label for="name" class="formHeader">HOW SHALL WE CALL YOU</label>
								     <input type="text" v-model="userName" @keyup.enter="submit" name="name" class="form-control fname" placeholder="Type Your Name" pattern="[A-Za-z]{1,20}" required="">
                   </div>
							     <div class="form-group">
	  							   <label for="lName" class="formHeader">SHARE YOUR LAST NAME</label>
	  							   <input type="text" v-model="userLName" name="lName" class="form-control lName" placeholder="Your Last Name" pattern="[A-Za-z]{1,20}">
	  						   </div>
	  						   <div class="form-group">
	  							   <label for="email" class="formHeader">SHARE YOUR EMAIL</label>
	  							   <input type="text" v-model="userEmail" name="email" class="form-control email" placeholder="Your Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" required="">
	  						   </div>
	  						   <div class="form-group">
	  							   <label for="message" class="formHeader">WE'RE ALL EARS!</label>
	  							   <textarea rows="5" v-model="userMessage" class="form-control contactNote">YOU HAVE QUERY.....WE'RE HERE!!
								     </textarea>
	  						   </div>
	  						   <button type="submit" class="btn btn-primary" @keyup.enter="submit" @click.prevent="submitForm(person)">Submit</button>
	  					   </form>
					     </div>
					    <div class="col-xs-6 col-md-6 col-lg-6 rightDiv">
						    <h3 class="formHeader">GET IN TOUCH WITH US</h3>
						    <h4 class="contctDetail">
  							   <img src="@/assets/call.jpg" class="contctImg">
  							   <span>CALL : 012-345-6789</span>
						    </h4>
						    <h4 class="contctDetail">
							     <img src="@/assets/email.jpg" class="contctImg">
							     <span>EMAIL : abc@xyz.com</span>
						    </h4>
					    </div>
				    </div>
			    </div>
		    </div>
        <div class="formDeatils">
          <h3>Form Details</h3>
          <p>First Name: {{ userName }}</p>
          <p>Last Name: {{ userLName }}</p>
          <p>Email: {{ userEmail }}</p>
          <p>Message: {{ userMessage }}</p>
        </div>
	    </div>
  </div>
</template>

<script>

  export default{
    name:'ContactUs',
    data (){
      return{
        title:'Contact Us',
        userName: "",
        userLName:"",
        userEmail:"",
        userMessage:"",
        childData: "",
        lNameData: "",
        valArr: [],
        contactProps: {
          backgroundImage: `url(${require('@/assets/contact_Us.jpg')})`,
        },
      }
    },
    methods: {
      submitForm(person){

        this.$emit("nameData", this.userName);
        //this.userName = "";
        //this.userLName = "";
        //this.userEmail = "";
        //this.userMessage = "";
      },
      updateName(name) {
        this.childData= name;
      },
      updateLName(lName) {
        this.lNameData = lName;
      }
    }
  }
</script>

  <style>
    .contactUs {
      position: relative;
      background-attachment: fixed;
      min-height:300px;
      box-sizing: border-box;
      background-position: center;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
    .col-xs-6, .col-md-6, .col-lg-6{
      width:50%;
    }
    .form-group{
    	display: inline-block;
    	width: 100%;
    	padding: 10px 30px;
      box-sizing: border-box;
    }
    .formGenral {
        background: #fff;
        box-shadow: 1px 1px 2px 2px #C0C0C0;
        color: #222;
        padding: 20px;
        border-radius: 5px;
        margin: 30px;
        box-sizing: border-box;
    }
    .contactBlock{
      display:flex;
      color: #00008B;
      margin-top: 350px;
    }
    .formHeader{
  	   width: 100%;
       text-align: center;
       color:#00008B;
       font-size: 18px;
       font-weight:700;
       font-family: initial;
    }
    .contactNote{
	     font-weight: bold;
    }
    .contctImg{
    	width:100px;
    	height: auto;
    }
    .contctDetail{
    	margin: 0 auto;
    	margin-top: 40px;
    	width: 70%;
    }
    #contactForm .btn-primary{
    	background-color: #00008B;
    	font-size: 18px;
    	width: 100%;
    }
    .rightDiv{
      flex: 1;
      margin-top:35px;
    }
    .leftDiv{
      flex: 0 0 65%;
    }
    .formDeatils{
      width:980px;
      margin:0 auto;
      font-weight:700;
      color:#00008B;
    }
  </style>
