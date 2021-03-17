Vue.component('card', {
    props: {
        characterId: {
            type: Number,
            required: true
        }
    },
    template: `
    <div>
            <div class="add-remove-cart">
                <p class="add-to-cart" v-on:click="updateItemCount('add')">+</p>
                <p class="item-count">{{ itemCount }}</p>
                <p class="remove-to-cart" v-on:click="updateItemCount('remove')">-</p>
                <span v-show="showEmptyCartPopup" class="popup">Please add item</span>
            </div>
            <div class="card__image-holder">
                <img class="card__image" :src="image" alt="wave" />
            </div>
            <div class="card-title">
                <a href="#" class="toggle-info btn">
                    <span class="left"></span>
                    <span class="right"></span>
                </a>
                <h2>
                    Card title
                    <small>Image from unsplash.com</small>
                </h2>
            </div>
            <div class="card-flap flap1">
                <div class="card-description">
                    This grid is an attempt to make something nice that works on touch devices. Ignoring hover states
                    when they're not available etc.
                </div>
                <div class="card-flap flap2">
                    <div class="card-actions">
                        <a href="#" class="btn">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            // imageUrl: 'https://superheroapi.com/api/2761755194082747/character-id/image'
            imageUrl: 'https://robohash.org/character-id',
            itemCount: 0,
            showEmptyCartPopup: false
        }
    },
    methods: {
        updateItemCount(action) {
            if(action == 'add') {
                this.showEmptyCartPopup = false
                this.itemCount+=1;
            } 

            if(action == 'remove') {
                if(this.itemCount > 0) {
                    this.itemCount-=1;
                } else {
                    this.showEmptyCartPopup = true
                }
            }
        }
    },
    computed: {
        image() {
            console.log("computed loaded")
            return this.imageUrl.replace('character-id', this.characterId)
        },
        isItemAdded() {
            // alert(this.itemCount > 0)
            return this.itemCount > 0;
        }
        
    }
});


Vue.component('card-list', {
    template: `
            <div class="cards">
                <div v-for="id in arr" class="card">
                    <card :characterId="id" />
                </div>  
            </div>
        `,
    data() {
        return {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
});

var app = new Vue({
    el: '#app'
})