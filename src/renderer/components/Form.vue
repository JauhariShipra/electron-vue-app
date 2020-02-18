<template>
  <div class="formDetails">
    <!--Dispaly Form Val -->
    <ul>
      <li v-for="message in messageList" :item="message" :key="index" class="formValList">
        Name : {{ message }}
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
      name: "Results",
      props: {
        msg: {
          required: true,
          type: String,
        },
        nameData: String,
        lastName: String
      },
      data: function() {
        return {
          messageList: [],
        };
      },
      watch: {
        msg: function() {
          this.messageList.push(this.msg);

        },
      }
    };
  </script>

  <style>
    .formDetails{
      width: 100%;
      min-height: 20px;
      background: #4682B4;
      color: #dff;
    }
    .formValList{
      font-size:18px;
      padding:10px;
    }
  </style>
