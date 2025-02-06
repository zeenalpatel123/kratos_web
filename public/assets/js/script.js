// tabs js start 
$(document).ready(function () {
    $('.tab_title li a').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('.tab_title li a').removeClass('active');
    $('.tab_main').removeClass('active');
    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
    });
    });

    function toggleActive(Id, db) {
    var element = document.querySelector(Id);
    element.classList.toggle(db);
    }
// tabs js end 
// swiper silder js 1 start 
var swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    speed: 1500,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2.01,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2.01,
            spaceBetween: 25,
        },
        1280: {
            slidesPerView: 2.01,
            spaceBetween: 16,
        },
    }
    });
// swiper silder js 1 end 
// swiper silder js 2 start 
var swiper = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true,
    speed: 1500,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    autoplay: {
    delay: 3000,
    disableOnInteraction: true
    },
    breakpoints: {
    450: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    640: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 15,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 25,
    },
    1280: {
        slidesPerView: 7,
        spaceBetween: 40,
    },
    },
});
// swiper silder js 2 end 
// swiper silder js 3 start 
var swiper = new Swiper(".mySwiper3", {
    grabCursor: false,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: true
    // },
    // loop:true,
    autoHeight: true,
    mousewheel: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
});
// swiper silder js 3 end 
// swiper silder js 4 start
var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
	loop: true,
	centeredSlides: true,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	speed: 4000,
        autoplay: {
            delay: 0,
            enabled: true,
	    }
});
// swiper silder js 4 end 
// swiper silder js 5 start
var swiper = new Swiper(".swiper5", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
  
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
  
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
  
      },
      1560: {
        slidesPerView: 3,
        spaceBetween: 10,
  
      }
    }
  });
// swiper silder js 5 end
// onscroll js start 
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("main_header");          

    if (prevScrollpos > currentScrollPos) {
    navbar?.classList.remove("navbar_down");
    navbar?.classList.add("navbar_up");
    } else {
    navbar?.classList.remove("navbar_up");
    navbar?.classList.add("navbar_down");
    }
    prevScrollpos = currentScrollPos;
}
if (window.innerWidth <= 450) {
    var prevScrollpos = window.pageYOffset;
};
// onscroll js end 
// toogle js start 
function toggleActive(Id, db) {
    var element = document.querySelector(Id);
    element.classList.toggle(db);
}
// toogle js end 
// ScrollTrigger and ScrollSmoother js start 
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    smoothTouch: 0.5
})
// ScrollTrigger and ScrollSmoother js end 

