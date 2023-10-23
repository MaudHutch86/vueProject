let vm = Vue.createApp({
  data() {
    return {
      title: 'My ChatGPT bot at your service',
      text: "The response is loading , it takes time for AI too",
      isClicked: false,
      isSubmit: false ,
      isWhite: false,
    };
  },
  methods: {
    toggleBackgroundColor() {
      this.isClicked = !this.isClicked;
      this.isWhite = !this.isWhite;
      if (this.isClicked) {
        document.body.classList.add('clicked');
        document.h1.classList.add("white")
      } else {
        document.body.classList.remove('clicked');
        document.h1.classList.remove("white")
      }
    },
    toggleSubmit(){
      this.isSubmit = true
    },
    askNewQuestion() {
      this.isSubmit = false;
  }
    
  },
 
}).mount('#app')
