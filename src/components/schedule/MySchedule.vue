<template>
    <div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                
                <div class="form-group">
                    <div class="col-md-12 col-md-offset-">
                        <h3>Schedule A Task</h3>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="formData.title" maxlength="20">
                        </div><!-- /input-group -->
                        <div class="form-group">
                            <label>Description</label>
                            <input type="text" class="form-control" v-model="formData.description">
                        </div><!-- /input-group -->
                        <div class="form-group">
                            <label>Due Date</label>
                            <input type="date" class="form-control" v-model="formData.date">
                            <input type="time" class="form-control" v-model="formData.time">
                        </div>
                        <div class="form-group">
                            <button
                            class="btn btn-default"
                            @click.prevent="scheduleTask"
                            :disabled="formData.title == '' || formData.description == '' || !formData.date || !formData.time"
                            type="button">Add To Schedule</button>
                        </div>
                    </div><!-- /.col-lg-6 -->        
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <app-to-do v-for="list in taskLists" :list="list"></app-to-do>
            </div>
        </div>     
    </div>
</template>
<script>
import ToDo from './Todo.vue';
export default {
    data(){
        return{
            formData:{
                title: '',
                description:'',
                date: null,
                time: null
            }
        }
    },
    methods: {
        scheduleTask(){
            //[0,1,3,4,6] next => 7
             
            let id = this.taskLists.length == 0 ? 1 : this.taskLists[this.taskLists.length - 1].id + 1;
            let date = `${this.formData.date.replace(/-/g,"/")} ${this.formData.time}`;
            this.$store.dispatch('addTask', {
                id,
                title: this.formData.title,
                description: this.formData.description,
                date
            });
            this.formData.title = ' ';
            this.formData.description = ' ';
            this.formData.date = null;
            this.formData.time = null;
        }
    },
    components:{
        appToDo: ToDo
    },
    computed: {
        taskLists(){
            return this.$store.getters.getSchedule;
        }
    },
}
</script>
<style>

</style>

