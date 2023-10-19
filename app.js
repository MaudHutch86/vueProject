let vm = Vue.createApp({
  data() {
    return {
      title: 'My ChatGPT bot at your service',
      isClicked: false
    };
  },
  methods: {
    toggleBackgroundColor() {
      this.isClicked = !this.isClicked;
      if (this.isClicked) {
        document.body.classList.add('clicked');
      } else {
        document.body.classList.remove('clicked');
      }
    }
  }
  
}).mount('#app')