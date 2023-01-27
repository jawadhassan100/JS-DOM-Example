class width {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    displayinfo(){
        console.log(`Heiht:${this.height} and Width:${this.width}`)
    }
}
let Width = new width('6ft','88cm');
console.log(Width)
Width.displayinfo();

