const vm = Vue.createApp({
    data() {
        return {
            firstName: "Maud",
            lastName: "Hutchinson",
            url: "https://google.com"
        }
    },
    methods:  {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = "Louisa"
// }, 2000)
console.log(vm)

// Vue.createApp({
//     data() {
//         return {
//             firstName: "Ena",
//             lastName: "Hutchinson"
//         }
//     }
// }).mount('#app1')