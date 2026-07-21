import * as THREE from 'three';

export default class Scene{

    constructor() {
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0x000000)
    }
}