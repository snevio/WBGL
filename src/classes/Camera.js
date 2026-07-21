import * as THREE from 'three';

export default class Camera{

    constructor(experience) {
        this.experience = experience
        this.sizes = this.experience.sizes
        this.createInstance()
        this.sizes.on('resize', () => {
            this.resize()
        })
        
    }

    createInstance(){
             this.cameraInstance = new THREE.PerspectiveCamera(this.sizes.fov, this.sizes.width / this.sizes.height, this.sizes.cameraNear, this.sizes.cameraFar )
             
        }

    resize(){
        this.cameraInstance.aspect = this.sizes.width / this.sizes.height
         this.cameraInstance.updateProjectionMatrix()
    }
        
}