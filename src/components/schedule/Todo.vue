<template>
    <div>
        <div class="panel panel-info">
            <div class="panel-heading">{{list.title}}</div>
            <div class="panel-body">
                <div class="pull-left description">
                    {{list.description}}
                </div>
                <div class="pull-right">
                    Due Date: {{list.date}}
                    <div class="col-md-offset-8"><button class="btn btn-primary" @click="completeTask">Did It!</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["list"],
    methods: {
        completeTask(){
            let date = `${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}`;
            this.$store.dispatch('moveToDone', {
                id: this.list.id,
                title: this.list.title,
                description: this.list.description,
                date
            });
        }
    },
}
</script>
<style scoped>
.pull-left.description{
    font-size: 12px;
    width: 60% !important;
    height: 80% !important;
}

</style>

