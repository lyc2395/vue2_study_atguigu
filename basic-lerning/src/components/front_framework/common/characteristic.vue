<template>
    <div>
      <commonAdvantage/>
      <h3>{{front_name}} advantages</h3>
      <ul>
        <li v-for="(item, index) in advantages" :key="index">{{ item }}</li>
      </ul>
      <hr>
      <h3>{{ front_name }} defects</h3>
      <ul>
        <li v-for="(item, index) in defects" :key="index">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
import commonAdvantage from './common-advantage.vue'
export default {
    name: 'characteRistic',
    data() {
        return {
            react_advantages: [
                'React Native',
                'Virtual DOM',
                'Unidirectional data flow',
                'good compatibility'
            ],
            react_defects: [
                'Few built-in features',
                'Easy to lern',
                'Complex configuration',
                'Learning response ecosystem is complex'
            ],
            angular_advantages: [],
            angular_defects: [],
            front_name: this.name
        }
    },
    components: {
        commonAdvantage
    },
    props: {
        name:{
            type: String,
            Required: true
        }
    },
    computed: {
        advantages(){
            if(this.front_name === 'React'){
                return this.react_advantages
            }else if(this.front_name === 'AngularJS'){
                return this.angular_advantages;
            }else{
                return [`Unknow name: ${this.front_name}`]
            }
        },
        defects(){
            if(this.front_name === 'React'){
                return this.react_defects;
            }else if(this.front_name === 'AngularJS'){
                return this.angular_defects;
            }else{
                return [`Unknow name: ${this.front_name}`]
            }
        }
    }
}
</script>