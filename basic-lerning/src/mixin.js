export default {
    data(){
        return {
            x: 100
        }
    },
    methods: {
        showRef(){
            // console.log(this.$refs.title)
            const ObjectTitle =  this.$refs.title
            const ObjectById = document.getElementById('titles')
            console.log(`I am ${ObjectTitle}`)
            console.log(`this.$refs.title 恒等于 document.getElementById('titles')`)
        }
    }
}