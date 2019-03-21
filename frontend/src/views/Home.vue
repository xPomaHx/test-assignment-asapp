<template>
  <div>
    <b-container class="bro-chatPage">
      <ul class="bro-chatPage-body">
        <li
          v-for="(msg,index) of messages"
          :key="index"
          :class="'bro-chatPage-author-'+msg.author"
        >{{msg.text}}</li>
      </ul>
      <b-row class="bro-chatPage-input">
        <b-col cols="9">
          <b-form-input
            type="text"
            v-model="curMsg"
            placeholder="Enter title"
            :maxlength="128"
            required
            :state="Boolean(curMsg)"
            @keydown.enter.prevent="send"
          />
        </b-col>
        <b-col cols="3">
          <b-button @click.prevent="send" class=bro-chatPage-send>Send</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      messages: [],
      curMsg: ''
    };
  },
  methods: {
    async getAnswer(msg) {
      const url = '/api/get-answer';
      let data = new URLSearchParams();
      data.append('q', msg);
      return await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      });
    },
    async send() {
      if (!this.curMsg) {
        return;
      }
      this.messages.push({ text: this.curMsg, author: 'me' });
      const ans = await (await this.getAnswer(this.curMsg)).json();
      this.messages.push({ text: ans.a, author: 'notMe' });
      this.curMsg = '';
    }
  }
};
</script>
<style lang="less">
.bro {
  &-chatPage {
    height: 100vh;
    position: relative;
    overflow: hidden;
    &-input {
      position: absolute;
      bottom: 30px;
      right: 0;
      left: 0;
    }

    &-send {
      width: 100%;
    }
    &-body {
      list-style: none;
      padding: 0;
      margin: auto;
      top: 20px;
      position: absolute;
      bottom: 100px;
      left: 0;
      right: 0;
      overflow: auto;
    }
    &-author {
      &-me {
        margin: 2%;
        margin-right: 20%;
        background: rgba(255, 0, 0, 0.1);
      }
      &-notMe {
        margin: 2%;
        margin-left: 20%;
        background: rgba(0, 255, 0, 0.1);
      }
    }
  }
}
</style>

