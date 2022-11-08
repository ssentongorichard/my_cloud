const bulbstate = {
  data() {
    return { 
      bulb: "on"
        
    }
  }
} 

Vue.createApp(bulbstate).mount('#app')
