import { Timer } from "three"
import Camera from "./Camera"
import Renderer from "./Renderer"
import Scene from "./Scene"
import Sizes from "./utils/Sizes"
import Time from "./utils/Time"

export default class Experience {
    constructor(canvas){
       this.canvas = canvas

        this.scene = new Scene()


        this.sizes = new Sizes()
        this.clock = new Time()

        this.camera = new Camera(this)
        this.renderer = new Renderer(this)

        this.clock.on('tick', () => {
            this.update()
        })

        
        
        console.log(canvas)
    }
    update() {
        this.renderer.render()
    }
}