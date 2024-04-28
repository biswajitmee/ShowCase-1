import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import HeaderSection from './HeaderSection';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();
  const wrapperPinRef = useRef(null);




  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.5,
    });



    let scrollBoxAry = gsap.utils.toArray(".scrollBox");

    let containerWidth = document.querySelector('.HorizetalScroll').offsetWidth;

    let scrollTween = gsap.to(scrollBoxAry, {
      xPercent: -100 * (scrollBoxAry.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: "#wraperPinSection",
        pin: true,
        scrub: true,
        end: "+=" + containerWidth
      }
    });


  }, { scope: main });



  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <section className='header_section'>
            <HeaderSection />
          </section>

          {/* pins the section */}
          <section className=' pinWrapper' id='wraperPinSection' ref={wrapperPinRef}>

            {/* in active pin horizontal scroll the div - x axis */}
            <div className="HorizetalScroll"   >
              <div className="scrollBox subDiv">



              <div class="absolute inset-0 flex justify-center items-center">
  <div class=" p-4 rounded-lg horiBox1 text-2xl ">
 
<img src="round.svg" alt="Shape 2" />

</div>
</div>

<div class="absolute inset-0 flex justify-center items-center">
  <div class="p-4 rounded-lg horiBox1 text-3xl text-gray-300 ">
  "Biswajit’s Studio: Redefining brand storytelling with elegant design
                   and expert coding, backed by over a decade of digital mastery."
  </div>
</div>


      



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
                digital creativity,
              </div>
              <div className="scrollBox subDiv">
                empowering brands with high-design
              </div>
              <div className="scrollBox subDiv">
                and low-code synergy. last
              </div>
            </div>
          </section>
          <section className='bg-lime-400 section3'>
            <h1 className="text-3xl font-bold underline">
              Hello world! section 4
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
