<template>
    <div>
        <div class="panel panel-danger highlight" @click="deleteItem">
            <div class="panel-heading">{{list.title}}</div>
            <div class="panel-body">
                <div class="pull-left description">
                    {{list.description}}
                </div>
                <div class="pull-right">
                    Completion Date: {{list.date}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["list"],
    methods: {
        deleteItem(){
            this.$store.dispatch('deleteTask', this.list);
        }
    },
}
</script>
<style scoped>
.panel.highlight:hover{
    background-color: rgb(248, 139, 139);
    cursor: pointer;    
}
.pull-left.description{
    font-size: 12px;
    width: 60% !important;
    height: 80% !important;
}
</style>

