import gsap from 'gsap';
import React, { useEffect } from 'react';

function HeaderSection() {




useEffect( ()=> {
  var tl1 = gsap.timeline();
  tl1.fromTo(".anm1", {scale:1,duration: 1.2, }, {scale:1.1, duration: 1.2,  repeat:-1, yoyo:true,});


  var tl2 = gsap.timeline();
  tl2.fromTo(".anm2", {scale:1,duration: 1.2, }, {scale:1.1, duration: 1.2,  repeat:-1, yoyo:true,});



  var tl3 = gsap.timeline();
  tl3.fromTo(".anm3", {scale:1,duration: 1.2, }, {scale:1.1, duration: 1.2,  repeat:-1, yoyo:true,});



  var tl4 = gsap.timeline();
  tl4.fromTo(".anm4", {scale:1,duration: 1.2, }, {scale:1.1, duration: 1.2,  repeat:-1, yoyo:true,});


 
})




  return (
    <div className="relative w-screen h-screen  ">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-screen absolute bottom-6 left-5 flex  items-center">
          
          <div className="shape anm1  ">
            <img src="/shape1.svg" alt="Shape 1" />
          </div>
       
          <div className="shape anm2 ">
            <img src="/shape2.svg" alt="Shape 2" />
          </div>
      
          <div className="shape anm3 ">
            <img src="/shape3.svg" alt="Shape 3" />
          </div>
         
          <div className="shape anm4 ">
            <img src="/shape4.svg" alt="Shape 4" />
          </div>




        </div>

<div className="header_text w-screen absolute z-10 text-center	 ">

<h1>
    <span class="gradient_text1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">New</span>
    <span class="gradient_text2 text-4xl md:text-6xl lg:text-7xl xl:text-8xl">Creative</span>
</h1>
<h2 className=' text-9xl font-bold text-fuchsia-50 uppercase gency_fnt'>digital Agency</h2>
</div>


      </div>
    </div>
  );
}

export default HeaderSection;
