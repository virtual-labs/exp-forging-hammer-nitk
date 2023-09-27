class System  {
    constructor(x, y, _w, _h)   {
        this.width = _w;
        this.h = _h
        this.x_equilibrium = x;
        this.y_equilibrium = y;
        this.x1 = 0;
        this.x2 = 0;
        this.k1 = 0;
        this.m1 = 0;
        this.k2 = 0;
        this.m2 = 0;
        this.k3=0;
        this.w1 =0;
        this.w2 =0;
        this.x10 = 0;
        this.x20 = 0;
        this.x10d = 0;
        this.x20d = 0;
        this.x1dd = 0;
        this.x2dd = 0;
        this.ar1 = 0;
        this.ar2 = 0;
        this.masscoordinates = [];
    
        this.k3 = 0;
        this.ratio= 0;
        this.n1 = 0;
        this.n2 = 0;
        this.r1 = 0;
        this.r2 = 0;
       this.F0 = 0;
        this.l =  0
        this.s1 = 0;
        this.s2 = 0;
        this.ph1 = 0;
        this.ph2 = 0;
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.w1sq = 0;
        this.w2sq= 0;
        this.term1=0 ;
        this.term2 = 0;


        
    }

    initialise(_F0 ,  _k3, _k1,_m1 ,_k2 ,_m2 , _x10 , _x20)  {
        
  
        this.k1 = _k1;
        this.m1 = _m1;
        this.k2 = _k2;
        this.k3 = 0;
        this.m2 = _m2;
        this.F0 = _F0;
        // this.k1 = 30;
        // this.k2= 5;
        // this.k3 = 0;
        // this.m1 = 10;
        // this.m2 = 1;
        this.x10 = _x10;
        this.x20 = _x20;
        this.x10d= 1;
        this.x20d = 1;
        this.a = this.m1*this.m2;
        this.b = -(this.k2*this.m1 + this.k3*this.m1 + this.k1*this.m2 + this.k2*this.m2);
        this.c = this.k1*this.k2 + this.k2*this.k3 + this.k1*this.k3;
      //  console.log(this.c)
        this.w1sq = (-this.b+ Math.pow(this.b*this.b-4*this.a*this.c , 0.5))/(2*this.a);
        this.w2sq = (-this.b - Math.pow(this.b*this.b-4*this.a*this.c , 0.5))/(2*this.a);
        this.w1 = Math.pow(this.w1sq , 0.5);
        this.w2 = Math.pow(this.w2sq , 0.5);
      //  console.log(this.w1 , this.w2);
        
        
        this.r1 = (this.k1 - this.m1*this.w1*this.w1)/(this.k3 - this.m2*this.w1*this.w1);
        this.r2 = (this.k1 - this.m1*this.w2*this.w2)/(this.k3 - this.m2*this.w2*this.w2);
       // console.log(this.r2)
       // this.ratio = this.F0/this.m1;
       this.s1 = (this.x20 - this.x10*this.r2)/(this.r1 - this.r2+0.001);
       this.s2 = (this.x10*this.r1 - this.x20)/(this.r1 - this.r2+0.0001);
       //console.log(this.s1 , this.s2);

       this.term1 = (this.x10d*this.r2 - this.x20d)/((this.r1 - this.r2+0.001)*this.w1*this.s1);
       this.term2 = (this.x20d - this.x10d*this.r1)/((this.r1- this.r2+0.0001)*this.w2*this.s2);
 

       this.ph1 = Math.asin(this.term1*3.1428/180);
       this.ph2 = Math.asin(this.term2*3.1428/180);

       console.log("w1", this.w1);
       console.log("w2",this.w2);


    }

    update(t, _mulfact)  {
        //this.fi = atan((-2*this.z*this.w / this.wn) / (1 - (this.w*this.w)/(this.wn*this.wn)));
    
        this.l +=0.1
        this.t = this.l;
        
        this.x1 = this.s1*Math.cos(this.w1*this.t + this.ph1) + this.s2*Math.cos(this.w2*this.t + this.ph2);
        this.x2 = this.s1*this.r1*Math.cos(this.w1*this.t + this.ph1) + this.s2*this.r2*Math.cos(this.w2*this.t + this.ph2);
      //  console.log(this.x1 , this.x2);
        this.x2 = this.x2*10;
        this.x1 = this.x1*10;
        this.y1 = this.x1;
        this.y2 = this.x2;


    }

    show(_stroke, _strockweight, _fill) {
        push();
        let wid = spr.width-50;
        let hei = spr.height-140;
        textSize(15)
        fill(0,0,0)
        if(this.x1==0 && this.x2==0){
            fill(139,69,19);
            text("Enter the value of initial excitation",330,145);
            text('of mass m1 and m2 (Xo1 and Xo2)',330,165)
            text('respectively.',410,185)
            fill(0,0,0);
            text("Xo1", 495,245);
        strokeWeight(1);
        line(450,210,510,210);
        line(510,210,510,230);
        line(505,225,510,230);
        line(510,230,515,225);
        
        line(450,295,510,295);
        line(510,295,510,315);
        line(505,310,510,315);
        line(510,315,515,310);
        strokeWeight(0);
        text("Xo2", 495,330);
        }

        // spring
        image(spr, this.x_equilibrium - (wid/2), this.y_equilibrium -12.5 -hei +this.y1+10 , wid, hei-this.y1);
        fill(0,0,0)
        textSize(15)
        text("k1",this.x_equilibrium - (wid/2)-30, this.y_equilibrium -12.5 -(hei/2) +this.y1+10)
        image(spr, this.x_equilibrium -(wid/2), this.y_equilibrium -12.5-25 -(2*hei) + this.y2 +10, wid, hei-this.y2 + this.y1)
      //  console.log(this.y_equilibrium -12.5-164 -(2*hei) +this.y2+this.y1+10,hei+this.y1);
        fill(0,0,0)
        textSize(15)
        text("k2",this.x_equilibrium -(wid/2)-30, this.y_equilibrium -12.5-25 -(1.5*hei) + this.y2 +10)

        // base
        rectMode(CENTER)
        fill(0,0,0)
        rect(this.x_equilibrium, this.y_equilibrium, this.width+40, this.h-20)
        
        // mass
        rect()
        stroke(_stroke);
        strokeWeight(_strockweight);
        fill(_fill);
        rectMode(CENTER)
        fill(139,69,19);
        rect(this.x_equilibrium ,this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2) +10, this.width-20, this.h) // bottom mass
        fill(255,255,255)
        textSize(12)
        text("m1",this.x_equilibrium-5 ,this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2)+13)
        rectMode(CENTER)
        fill(139,69,19);
        rect(this.x_equilibrium ,this.y_equilibrium -50 -(2*hei) +this.y2 +10, this.width-20, this.h) // top mass
        fill(255,255,255);
        textSize(12)
        text("m2",this.x_equilibrium-10,this.y_equilibrium -40 -(2*hei)-10 + this.y2+13)
        
        fill(255,255,255);  
       // ellipse(370+50 +30,this.y_equilibrium -(2*hei) +this.y2-15-25, 20, 20);
  //fill(255,0,255);
        let r = 5.6;
        fill(255,0,0);
        let x = r * Math.sin( this.t +10);
        let y = r * Math.cos( this.t +10);
      //  ellipse(this.x_equilibrium+ x  ,this.y_equilibrium +y + this.y2 -2*hei -40, 4, 4);
        pop();
        this.masscoordinates = [this.x_equilibrium ,this.y_equilibrium -(this.h/2) -hei +this.y1 -(this.h/2) +10, this.x_equilibrium ,this.y_equilibrium -50 -(2*hei)  +this.y2 +10]
    }

    static mag_func1(x, obj)  {

        let mu = obj.m1/obj.m2;
        let temp1 = x/2;
        let temp2 = Math.pow(((obj.w2*x)/obj.w1),2);
        let denom = ((1+mu)*temp2) + Math.pow(temp1,2);
        let solution = (1-Math.pow(temp1,2)) / ((Math.pow(temp1,2)*temp2)-denom+1)
        if (abs(solution)<200){
            return(abs(solution));
        }
        else{
            return (200);
        }
    }
    static mag_func2(x, obj)  {
        let mu = obj.m1/obj.m2;
        let temp1 = x/2;
        let temp2 = Math.pow(((obj.w2*x**x)/obj.w1),2);
        let denom = ((1+mu)*temp2) +Math.pow(temp1,2);
        let solution = (1)/ ((Math.pow(temp1,2)*temp2)-denom+1);
        if (abs(solution)<200){
            return(abs(solution));
        }
        else {
            return (200);
        }
    }
}
