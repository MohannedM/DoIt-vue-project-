<template>
    <div>
        <div class="container">
            <div class="page-header"><h1>DO IT <small>Schedule Your Tasks With Do It</small></h1></div>
            <h4>Save / Load Your Schedule and Start Doing Now</h4>
            <br>
            <p v-if="tasks">{{tasks}}</p>
        </div>
    </div>
</template>
<script> 

export default {
    computed: {
        tasks(){
            return this.$store.getters.getTasks;
        }
    },
}
</script>
<style scoped>

</style>

