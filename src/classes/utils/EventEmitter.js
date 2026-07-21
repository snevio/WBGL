export default class EventEmitter {
    constructor() {
        this.callbacks = {}
    }

    on(eventName, callback) {
        if (!this.callbacks[eventName]) {
            this.callbacks[eventName] = []
        }

        this.callbacks[eventName].push(callback)
    }

    trigger(eventName, args = []) {
        if (!this.callbacks[eventName]) {
            return
        }

        for (const callback of this.callbacks[eventName]) {
            callback(...args)
        }
    }

    off(eventName, callback) {
        if (!this.callbacks[eventName]) {
            return
        }

        const index = this.callbacks[eventName].indexOf(callback)

        if (index !== -1) {
            this.callbacks[eventName].splice(index, 1)
        }
    }
}