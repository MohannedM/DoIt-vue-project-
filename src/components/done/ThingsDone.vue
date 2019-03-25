<template>
    <div>
        
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <app-to-do v-for="list in doneList" :list="list"></app-to-do>
            </div>
        </div>     
    </div>
</template>
<script>
import ToDo from './Todo.vue';
export default {
    data(){
        return{}
    },
    components:{
        appToDo: ToDo
    },
    computed: {
        doneList(){
            return this.$store.getters.getThingsDone;
        }
    },
}
</script>
<style>

</style>

