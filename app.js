let vm = Vue.createApp({
  data() {
    return {
      title: 'My ChatGPT bot at your service',
      isClicked: false,
      isWhite: false,
    };
  },
  methods: {
    toggleBackgroundColor() {
      this.isClicked = !this.isClicked;
      this.isWhite = !this.isWhite;
      if (this.isClicked) {
        document.body.classList.add('clicked');
        document.h1classList.add("white")
      } else {
        document.body.classList.remove('clicked');
      }
    }
    
  }
  
}).mount('#app')