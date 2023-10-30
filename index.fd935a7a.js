/** Cursor */const e=document.querySelector("[data-cursor-dot]"),t=document.querySelector("[data-cursor-outline]");let o=!1,r=null;document.addEventListener("mousemove",n=>{r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{!function(r){let n=r.clientX,s=r.clientY;e.style.transform=`translate(${n-2.5}px, ${s-2.5}px)`,o?(t.style.transform=`translate(${n-25}px, ${s-25}px)`,t.classList.add("screen-cursor-outline--hover")):(t.style.transform=`translate(${n-10}px, ${s-10}px)`,t.classList.remove("screen-cursor-outline--hover"))}(n)})}),document.addEventListener("mouseover",e=>{(e.target.closest("a")||e.target.closest(".navigation__button"))&&(o=!0)}),document.addEventListener("mouseout",e=>{(e.target.closest("a")||e.target.closest(".navigation__button"))&&(o=!1)}),/** Preloader */window.addEventListener("load",()=>{// "load" event has occurred
let e=document.querySelector("#preloader");e&&(e.style.display="none")});/** Projects Reveal */const n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(e.target.classList.add("project-show"),setTimeout(()=>{e.target.classList.remove("project-hidden")},500)):e.target.classList.add("project-hidden")})}),s=document.querySelectorAll(".project-hidden");s.forEach(e=>n.observe(e));/** Project Animation */const a=document.querySelectorAll(".project__box");a.forEach(e=>{let t=e.clientHeight,o=e.clientWidth,r=o/t,n=null;e.addEventListener("mousemove",({layerX:s,layerY:a})=>{n&&cancelAnimationFrame(n),n=requestAnimationFrame(()=>{let n=(s-o/2)/o*30,c=(a-t/2)/t*30;e.classList.contains("project--mobile")&&(n=(s-o/2)/o*30,c=(a-t/2)/t*17/r);let l=`
        perspective(70rem)
        scale3d(1.1, 1.1, 1.1)
        rotateX(${c}deg)
        rotateY(${n}deg)`;e.style.transform=l})}),e.addEventListener("mouseout",()=>{n&&cancelAnimationFrame(n),e.style.transform=`
        scale3d(1, 1, 1)
        rotateX(0deg)
        rotateY(0deg)`})});/** Mobile Navigation */const c=document.querySelectorAll(".nav-mobile__list--link"),l=document.querySelector("#navigation__toggle");c.forEach(e=>{e.addEventListener("click",()=>{l.checked=!1})});//# sourceMappingURL=index.fd935a7a.js.map

//# sourceMappingURL=index.fd935a7a.js.map
