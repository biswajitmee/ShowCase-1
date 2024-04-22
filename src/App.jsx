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
  


    <section className='bg-green-800		'>
    <h1 className="text-3xl font-bold underline">
      Hello world! section 2
    </h1>
    </section>



    <section className='bg-fuchsia-700		'>
    <h1 className="text-3xl font-bold underline">
      Hello world! section 3
    </h1>
    </section>



    <section className='bg-cyan-500		'>
    <h1 className="text-3xl font-bold underline">
      Hello world! section 4
    </h1>
    </section>
  </div>
</div>


   
    </>
  )
}

export default App
