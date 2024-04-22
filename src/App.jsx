import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();

  // const scrollTo = () => {
  //   smoother.current.scrollTo('.box-c', true, 'center center');
  // };

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
        smoothTouch: 0.5, 
      });
      // ScrollTrigger.create({
      //   trigger: '.box-c',
      //   pin: true,
      //   start: 'center center',
      //   end: '+=300',
      //   markers: true,
      // });
    },
    { scope: main }
  );
  
  return (
    <>

<div id="smooth-wrapper" ref={main}>
  <div id="smooth-content">

    <section className='bg-red-900	'>
    <h1 className="text-3xl font-bold underline">
      Hello world! section 1
    </h1>
    </section>
  


<section className='bg-green-800 '> 

<div className="HorizetalScrollWraper">
<div className=" flex flex-nowrap">
 
  <div className="scrollBox">
    <h1> In publishing and graphic design, Lorem ipsum is a placeholder text
     commonly used to demonstrate the visual form of a document 
     or a typeface without relying on meaningful content. 
     Lorem ipsum may be used as a placeholder before the final copy 
     is available.</h1>
  </div>

  <div className="scrollBox">
    <h1> In publishing and graphic design, Lorem ipsum is a placeholder text
     commonly used to demonstrate the visual form of a document 
     or a typeface without relying on meaningful content. 
     Lorem ipsum may be used as a placeholder before the final copy 
     is available.</h1>
  </div>

  <div className="scrollBox">
    <h1> In publishing and graphic design, Lorem ipsum is a placeholder text
     commonly used to demonstrate the visual form of a document 
     or a typeface without relying on meaningful content. 
     Lorem ipsum may be used as a placeholder before the final copy 
     is available.</h1>
  </div>

  <div className="scrollBox">
    <h1> In publishing and graphic design, Lorem ipsum is a placeholder text
     commonly used to demonstrate the visual form of a document 
     or a typeface without relying on meaningful content. 
     Lorem ipsum may be used as a placeholder before the final copy 
     is available.</h1>
  </div>

  <div className="scrollBox">
    <h1> In publishing and graphic design, Lorem ipsum is a placeholder text
     commonly used to demonstrate the visual form of a document 
     or a typeface without relying on meaningful content. 
     Lorem ipsum may be used as a placeholder before the final copy 
     is available.</h1>
  </div>

  <div className="scrollBox">
    <h1> In publishing and graphic design, Lorem ipsum is a placeholder text
     commonly used to demonstrate the visual form of a document 
     or a typeface without relying on meaningful content. 
     Lorem ipsum may be used as a placeholder before the final copy 
     is available.</h1>
  </div>


</div>
</div>
</section>




  </div>
</div>


   
    </>
  )
}

export default App
