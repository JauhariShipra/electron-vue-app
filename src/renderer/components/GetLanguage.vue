  <template>
      <form class="lang-form" method="post" @submit.prevent="onSubmit">
        <div class="drpdwnContainer langSelect col-xs-12 col-md-12 col-lg-12">
          <div class="md-layout-item col-xs-5 col-md-5 col-lg-5 leftDiv">
            <div class="md-has-value">
              <label for="language" class="control-label">Language:</label>
              <select v-model="selected" :id="language" v-on:change="sortBy" required class="md-field">
                <option value="" disabled>Select Language</option>
                <option v-for="item in language" v-bind:value="language.value" v-model="langArr" @keyup.enter="submit" class="md-option" name="languageSlct" >{{item.value}}</option>
              </select>
                <!--span style="color:#fff" >Selected: {{ selected.value }}</span-->
            </div>
          </div>
          <div class="col-xs-5 col-md-5 col-lg-5 rightDiv">
            <input type="submit" value="Explore" class="btn btn-primary langSelect" id="exploreBtn">
          </div>
        </div>
      </form>
  </template>

  <script>
  export default {
    name: 'GetLanguage',
    data() {
      return {
        title: 'GetLanguage',
        language: null,
        selected: "",
        langArr:[],
      }
    },
    /* Setting language array for dropdown */
    mounted(){
      this.language =[
        { id: 'LangOne', value: 'French' },
        { id: 'LangTwo', value: 'German' },
        { id: 'LangThree', value: 'Italian' },
        { id: 'LangFour', value: 'Russian' }
      ]
    },
    methods: {

      /*Function to get value on dropdown change*/
      sortBy: function(e) {
        this.langArr.push(e.target.value)
        this.$store.dispatch('change', event.target.value)
      },

      /*Function to go to Next page*/
      onSubmit() {
        this.$emit("inputData", this.langArr[0]);
        const langVal = this.langArr[0]
        this.$router.push({ path: 'Language', params: { langId: langVal } })
        this.langArr = []
      },
    },
  }
  </script>

  <style>
    .programTag{
      transform: translate(25%);
      width: 800px;
      margin: 0 auto;
      margin-top: 70px;
      text-shadow: 0 1px 1px #333;
    }
    .drpdwnContainer{
      width:700px;
      margin:0 auto;
      display:flex;
    }
    .lang-form{
      width: 100%;
      margin: 0 auto;
      padding-top: 100px;
    }
    .drpdwnContainer .md-has-value .md-field{
      height: 50px;
      width: 80%;
    }
    label{
      color:#fff;
      font-size:25px;
    }
    #language{
      height:50px;
      width: 40%;
    }
    .langSelect{
      height: 50px;
      width: 70%;
      margin-right: 4%;
    }
    #exploreBtn {
      font-size: 18px;
      background: rgb(265,205,45);
      color: #000;
      border-color: #000;
      border-radius: 10px;
    }
    .rightDiv{
      flex: 1;
      margin-top:35px;
    }
    .leftDiv{
      flex: 0 0 65%;
    }
  </style>
