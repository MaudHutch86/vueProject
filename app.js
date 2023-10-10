const vm = Vue.createApp({
    data() {
        return {
            firstName: "Elsa",
            middleName: "",
            lastName: "Douglas",
            url: "https://google.com",
            age :20,
    
        }
    },
    methods:  {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment(event) {
            this.age++
        },
        updateLastName (msg , event){

            console.log(msg)

            this.lastName = event.target.value
        },
        updateMiddleName (event){
            this.middleName = event.target.value
        },
        updateAge(age , event){
            this.age = event.target.value
            age = this.age

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