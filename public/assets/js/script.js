// // smoothScroll start
// const body = document.body,
//         jsScroll = document.getElementsByClassName('js-scroll')[0],
//         speed = 0.05;

//     let height, offset, lastScale;

//     function updateDimensions() {
//         height = jsScroll.getBoundingClientRect().height - window.innerHeight;
        
//         if (height < 0) {
//         height = 0;
//         }
//         offset = 0;
//         body.style.height = Math.floor(height + window.innerHeight) + "px";
//     }

//     // Initial setup and update on window resize
//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     function checkZoom() {
//         const currentScale = window.innerHeight / window.innerHeight;
//         if (currentScale !== lastScale) {
//         updateDimensions();
//         lastScale = currentScale;
//     }
//     // Schedule the next check after 200 milliseconds
//         setTimeout(checkZoom, 200);
//     }

//     // Start the periodic check
//     checkZoom();

//     function smoothScroll() {
//         offset += (window.scrollY - offset) * speed;
//         offset = Math.max(0, Math.min(offset, height));
//         const scroll = `translateY(-${offset}px) translateZ(0)`;
//         jsScroll.style.transform = scroll;
//         requestAnimationFrame(smoothScroll);
//     }

//     smoothScroll();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    smoothTouch: 0.5
})
