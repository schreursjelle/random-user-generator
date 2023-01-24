const app = Vue.createApp({
    data() {
        return {
            firstname: 'Edwin',
            lastname: 'Mc. Stuffins',
            email: 'eMc@example.com',
            gender: 'male',
            age: 20,
            address: 'Teddystreet 123',
            city: 'Sesame',
            picture: 'https://randomuser.me/api/portraits/men/1.jpg'

        }
    },
    methods: {
        async getUser() {
            // axios gives us a promise with the repsonse as a json object
            const response = await axios.get('https://randomuser.me/api/?results=1&nat=us');
            
            this.firstname = response.data.results[0].name.first;
            this.lastname = response.data.results[0].name.last;
            this.email = response.data.results[0].email;
            this.gender = response.data.results[0].gender;
            this.age = response.data.results[0].dob.age;
            this.address = response.data.results[0].location.street;
            this.city = response.data.results[0].location.city;
            this.picture = response.data.results[0].picture.large;
            console.log(response.data.results);
        }
    }
})

app.mount('#app');