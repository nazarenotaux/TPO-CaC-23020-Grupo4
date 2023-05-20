const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            categorias: [],
            url: "https://www.themealdb.com/api/json/v1/1/categories.php",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.categorias=data.categories
                })
                .catch(error=>alert("Ups...Se produjo un error: "+ error))
        }
    },
    created() {
        this.fetchData(this.url)
    }
}).mount('#app')