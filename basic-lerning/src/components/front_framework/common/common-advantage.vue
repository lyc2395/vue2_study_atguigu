<template>
    <div>
        <h3>generic advanges</h3>
        <ul>
            <li v-for="(item, index) in advantages" :key="index">{{ item }}</li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'common-advantage',
    data(){
        return { 
            advantages: [
                'JavaScript Framework',
                'modularization',
                'community support',
                'state management'
            ],
            typeName: this.name
        }
    },
    props: {
        name: {
            type: String,
            Required: true,
        }
    }
}
</script>

<style scoped>


</style>