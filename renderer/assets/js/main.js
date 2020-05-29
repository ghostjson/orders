const remote = require('electron').remote;

const app = new Vue({
  el: "#app",
  data: {
    recent_orders: recent_orders
  },
  methods: {
    close: function(){
      const window = remote.getCurrentWindow()
      window.close()
    },
    minimize: function(){
      const window = remote.getCurrentWindow();
      window.minimize(); 
    }
  }
});
