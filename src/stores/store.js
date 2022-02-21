import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
    // other options...
    state: () => {
        // all these properties will have their type inferred automatically
        return { count: 0 }
    },
    actions: {
        increment(val = 1) {
            this.count += val;
        },
        async waitAndAdd() {
            setTimeout(() => {
                this.count++;
            }, 2000)
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
})

