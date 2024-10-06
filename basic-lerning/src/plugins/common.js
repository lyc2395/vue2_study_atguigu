export default {
    install(Vue){
        Vue.filter(
            'splitString', function(value, number){
                if (typeof value === 'string'){
                    console.log('filter_plugin 被调用了.')
                    return value.substring(0, number)
                }
            }
        );
        Vue.directive(
            'fbind', {
                bind(element, binding){
                  console.log('fbind 被调用了')
                  element.value = binding.value
                },
                inserted(element, binding){
                    element.focus()
                },
                update(element, binding){
                    element.value = binding.value  
                }
            }
          );
        Vue.mixin({
            data(){
                return {
                    y: 99,
                    title: '欢迎学习Vue框架',
                    input_value: '插件'
                }
            }
        });
        Vue.prototype.hello = () => console.log('Welcom to Vue, i come from plugin ...');
    }
};