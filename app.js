const vm = Vue.createApp({
    data() {
        return {
            firstName: "Elsa",
            lastName: "Douglas",
            url: "https://google.com",
            age :20,
    
        }
    },
    methods:  {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLastName (msg ,event){
            event.preventDefault()

            console.log(msg)
            this.lastName = event.target.value
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