  
 module objects {
    export  class Label extends createjs.Text {
      constructor(LabelString:string, 
      LabelFont:string,
      LabelColour:string, 
      x:number, y:number,
       isCentered:boolean){
          super(LabelString, LabelFont, LabelColour);

          if (isCentered){
              this.regX = this. getMeasuredWidth()* 0.5;
              this.regY = this. getMeasuredHeight()* 0.5;
          }
          this.x =x;
          this.y =y;
      }
  }

 } 
 