const baseUrl = "http://localhost:5180/api/cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            carList:[],
            carVendor:"",
            carModel:"",
            carPrice:0,

        }
    },
    methods: {
        myMethod(){

        },
        getAllCars(){
            console.log("er i metoden getAllCars");

            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                    this.carList = response.data
                }
            )
            .catch(
                 error => {
                    console.log(error)
                 } 
            )
        },
        GemBil(){
            console.log("er i metoden gembil")
            //Dataen der skal benyttes i post, sendes med i bodyresponse, 
            //som et jason object
            axios.post(baseUrl,{"vendor":this.carVendor,"model":this.carModel,"price":this.carPrice})
            .then(
                response => {
                    console.log(response)

                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
            
        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
