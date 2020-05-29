//data
const recent_orders = [
    {
      avatar: 'assets/images/avatar/1.jpg',
      name: 'Marcus Levin',
      id: '#COAB268851421',
      status: 'pending'
    },
    {
      avatar: 'assets/images/avatar/2.jpg',
      name: 'Ann Aminoff',
      id: '#COAB1244751518',
      status: 'completed'
    },
    {
      avatar: 'assets/images/avatar/3.jpg',
      name: 'Nolan Dokidis',
      id: '#COAB1241235',
      status: 'cancelled'
    },
    {
      avatar: 'assets/images/avatar/4.jpg',
      name: 'Ryan Rhiel',
      id: '#COAB5572681000',
      status: 'cancelled'
    }
  ]
  

// money card
Vue.component('money-card', {
    props:['amount', 'trend'],
    data: function(){
        return{
            is_dollar: true    
        }
    },
    methods: {
        switchCurrency: function(){
            this.is_dollar = this.is_dollar ? false : true
        }
    },
    computed: {
        get_currency: function(){
            if(this.is_dollar){
                return currency(this.amount).format()
            }else{
                return currency(this.amount * 0.91).format()
            }
        },
    },
    template: `
        <div class="money-card">
            <div class="title"> <slot></slot> </div>
            <div class="currency">
                <div v-on:click="switchCurrency" :class="is_dollar ? '' : 'active'">€</div>
                <div v-on:click="switchCurrency" :class="is_dollar ? 'active' : ''">$</div>
            </div>
            <div class="amount">
                <span v-if="is_dollar">$</span>
                <span v-else>€</span>
                {{ get_currency }}
            </div>
            <div class="trend">
                <span v-if="trend > 0" class="positive"> <img src="assets/icons/trending_up.svg"> {{ trend }}% </span>
                <span v-else-if="trend < 0" class="negative"> <img src="assets/icons/trending_down.svg"> {{ trend }}% </span>
                <span v-else class="flat"> <img src="assets/icons/trending_flat.svg"> {{ trend }}% </span>
                
            </div>
        </div>
    `
})


// Recent Orders
Vue.component('recent-orders', {
    props:['data'],
    data: function(){
        return{
            
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    template: `
        <div class="recent-orders">
            <div class="title">Recent Orders</div>
            <div class="orders">
                <div class="order" v-for="order in data" :key="order.id">
                    <div class="avatar">
                        <img :src="order.avatar">
                    </div>
                    <div class="description">
                        <p>
                            <span class="name"> {{ order.name }} </span> 
                            <span class="order-number"> {{ order.id }} </span>
                        </p>
                    </div>
                    <div class="status">
                        <p class="pending" v-if="order.status === 'pending'"> Pending </p>
                        <p class="completed" v-if="order.status === 'completed'"> Completed </p>
                        <p class="cancelled" v-if="order.status === 'cancelled'"> Cancelled </p>
                    </div>
                </div>
            </div>
        </div>
    `
})


// feedback
Vue.component('feedback', {
    props:['data'],
    data: function(){
        return{
            
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    template: `
        <div class="feedback-list">
            <div class="title">Feedbacks</div>
            <div class="feedbacks">
                <div class="feedback">
                    <div class="avatar">
                       <img src="assets/images/avatar/1.jpg">
                    </div>
                    <div class="right">
                        <div class="head-section">
                            <div class="name">Name</div>
                            <div> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> </div>
                        </div>
                        <div class="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                </div>
                <div class="feedback">
                    <div class="avatar">
                       <img src="assets/images/avatar/3.jpg">
                    </div>
                    <div class="right">
                        <div class="head-section">
                            <div class="name">Nolan Dokidis</div>
                            <div> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> </div>
                        </div>
                        <div class="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                </div>
                <div class="feedback">
                    <div class="avatar">
                       <img src="assets/images/avatar/4.jpg">
                    </div>
                    <div class="right">
                        <div class="head-section">
                            <div class="name">Ryan Rhiel</div>
                            <div> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> <img src="assets/icons/star.svg"> </div>
                        </div>
                        <div class="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

