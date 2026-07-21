import * as THREE from 'three'
import EventEmitter from './EventEmitter'

export default class Time extends EventEmitter {
    constructor() {
        super()

        this.clock = new THREE.Timer()


        this.delta = 0
        this.elapsed = 0

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }

    tick() {
        this.clock.update()

        this.delta = this.clock.getDelta()
        this.elapsed = this.clock.getElapsed()

        this.trigger('tick')

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }
}