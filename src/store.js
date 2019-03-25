import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    schedule: [],
    thingsDone: []
  },
  mutations: {
    'ADD_TASK'(state, taskData){
      state.schedule.push(taskData);
    },
    'MOVE_TO_DONE'(state, taskData){
      state.thingsDone.push(taskData);
      let record = state.schedule.findIndex(el => el.id == taskData.id);
      state.schedule.splice(record, 1);
    },
    'DELETE_TASK'(state, taskData){
      if(confirm('Are you sure you want to delete this completed task?')){
        let record = state.thingsDone.findIndex(el => el.id == taskData.id);
        state.thingsDone.splice(record, 1);
      }else{
        return;
      }
    },
    'SET_DATA'(state, taskData){
      state.schedule = taskData.schedule;
      state.thingsDone = taskData.thingsDone;
    }
  },
  actions: {
    addTask({commit}, taskData){
      commit('ADD_TASK', taskData);
    },
    moveToDone({commit}, taskData){
      commit('MOVE_TO_DONE', taskData);
    },
    deleteTask({commit}, taskData){
      commit('DELETE_TASK', taskData);
    },
    saveChanges({commit, state}){
      axios.put('tasks.json', {
        schedule : state.schedule,
        thingsDone : state.thingsDone
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
    },
    loadData({commit}){
      axios.get('tasks.json')
      .then(res => {
        commit('SET_DATA', res.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  getters:{
    getSchedule(state){
      return state.schedule;
    },
    getThingsDone(state){
      return state.thingsDone;
    },
    getTasks(state){
      if((state.thingsDone.length + state.schedule.length) > 0){
        return `You Did ${state.thingsDone.length} Out Of ${state.thingsDone.length + state.schedule.length} Tasks`
      } else {
        return false;
      }
    }
  }
})
