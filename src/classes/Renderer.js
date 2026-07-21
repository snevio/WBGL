import * as THREE from 'three'

export default class Renderer{
    constructor(experience){
        this.experience = experience
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.sizes = this.experience.sizes

        this.createInstance()
        this.render()
        this.sizes.on('resize', () => {
            this.resize()
        })
        
    }

    createInstance(){
        
        this.rendererInstance =new THREE.WebGLRenderer({
            
            antialias: true,
            canvas: this.experience.canvas
        })

        this.rendererInstance.setSize(this.sizes.width, this.sizes.height)
         
        this.rendererInstance.setPixelRatio(this.sizes.pixelRatio)
       
        
    }

  render() {

    this.rendererInstance.render(
        this.scene.scene,
        this.camera.cameraInstance
    )
  }

  resize(){

    this.rendererInstance.setSize(
        this.sizes.width,
        this.sizes.height
    )

    this.rendererInstance.setPixelRatio(
        this.sizes.pixelRatio
    )
  }
}