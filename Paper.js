class Paper {
     constructor(){
       var options = {
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
        this.body = ellipse(x,y,width,height,options);
        
     }
display();
ellipseMode(CENTER);


}