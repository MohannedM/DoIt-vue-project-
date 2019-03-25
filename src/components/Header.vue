<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <router-link to="/" class="navbar-brand" href="#">DO IT</router-link>
                </div>
                <ul class="nav navbar-nav navbar-left">
                    <!-- <router-link tag="li" active-class="active" to="/schedule"><a>My Schedule</a></router-link>
                    <router-link tag="li" active-class="active" to="/done"><a>Things Done</a></router-link> -->
                </ul>

                <!-- Collect the nav links, forms, and other content for toggling -->

                <ul class="nav navbar-nav navbar-right">
                    <router-link tag="li" active-class="active" to="/schedule"><a>My Schedule</a></router-link>
                    <router-link tag="li" active-class="active" to="/done"><a>Things Done</a></router-link>
                    <li class="dropdown" :class="{open: toggle}" @click="toggle = !toggle">
                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Load / Save Tasks <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li @click.prevent="loadTasks"><a href="">Load My Tasks</a></li>
                        <li @click.prevent="saveTasks"><a href="">Save Changes</a></li>
                    </ul>
                    </li>
                </ul>
            </div><!-- /.container-fluid -->
            </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
            toggle: false
        }
    },
    methods:{
        saveTasks(){
            this.$store.dispatch('saveChanges');
        },
        loadTasks(){
            this.$store.dispatch('loadData');
        }
    }
}
</script>
