import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();
  const wrapperPinRef = useRef(null);

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 2.5,
    });

 
    let scrollBox = gsap.utils.toArray(".scrollBox");

    let containerWidth = document.querySelector('.HorizetalScroll').offsetWidth;
    
    let scrollTween = gsap.to(scrollBox, {
      xPercent: -100 * (scrollBox.length - 1),
      duration:50,
      ease: "none", // <-- IMPORTANT!
  });
  
  ScrollTrigger.create({
      trigger: "#wraperPinSection",
      pin: true,
      scrub: 0.0001, // Adjust the scrub value for scroll sensitivity
      end: "+=" + containerWidth,
      animation: scrollTween
  });
 
 
  }, { scope: main });

 
  
  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <section className='bg-red-900'>
            <h1 className="text-3xl font-bold underline">
              Hello world! section 1
            </h1>
          </section>

          {/* pins the section */}
          <section className='bg-pink-700 pinWrapper'  id='wraperPinSection' ref={wrapperPinRef}>

        {/* in active pin horizontal scroll the div - x axis */}
            <div className="HorizetalScroll"   >
              <div className="scrollBox subDiv">
                We're revolutionizing section 3
              </div>
              <div className="scrollBox subDiv">
                digital creativity,
              </div>
              <div className="scrollBox subDiv">
                empowering brands with high-design
              </div>
              <div className="scrollBox subDiv">
                and low-code synergy.
              </div>
              <div className="scrollBox subDiv">
                We're revolutionizing
              </div>
              {/* <div className="scrollBox subDiv">
                digital creativity,
              </div>
              <div className="scrollBox subDiv">
                empowering brands with high-design
              </div> */}
            </div>
          </section>
          <section className='bg-lime-400 section3'>
            <h1 className="text-3xl font-bold underline">
              Hello world! section last
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
