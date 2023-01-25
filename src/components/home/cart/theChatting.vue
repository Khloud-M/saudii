<template >
  <div class="chat">
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showEdition="true"
      :showDeletion="true"
      :deletionConfirmation="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>
  <script>
export default {
  name: "app",
  data() {
    return {
      participants: [
        {
          id: "user1",
          name: "hasnaa",
          imageUrl: require("@/assets/image/hasaa22.jpg"),
        },
        // {
        //   id: "user2",
        //   name: "hasnaa",
        //   imageUrl: require("@/assets/image/hassnaa.jpg"),
        // },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl:
      require("@/assets/image/khloud.jpg"),
      messageList: [
        { type: "text", author: `me`, data: { text: `حسناء اي` } },
        { type: "text", author: `user1`, data: { text: `حمقااااء` } },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        launcher: {
          bg: "#4e8cff",
        },
        messageList: {
          bg: "#ffffff",
        },
        sentMessage: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867",
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text },
        });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log("Emit typing event");
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
  },
};
</script>
<style lang="scss" >
.sc-launcher[data-v-13c85e18] {
  width: 60px;
  height: 60px;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  right: 40px !important;
  bottom: 50px !important;
  border-radius: 50%;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
}
.sc-launcher .sc-closed-icon[data-v-13c85e18],
.sc-launcher .sc-open-icon[data-v-13c85e18] {
  background-color: var(--main_theme_clr);
  border-radius: 50%;
  right: 40px !important;
  bottom: 50px !important;
}
p {
  font-size: 20px;
  font-weight: Medium;
  color: var(--main_theme_clr) !important;
}
.sc-header{
  background-color: var(--main_theme_clr) !important;
}
.sc-message--content.sent .sc-message--text[data-v-784eb559] {
  background-color: var(--background) !important;
}
.sc-header--img{
  width:70px !important;
}
.sc-message--avatar{
  min-width: 50px !important;
  min-height: 50px !important;
}
</style>>


 
      
  