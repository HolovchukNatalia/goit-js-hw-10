import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as p,i as s}from"./assets/vendor-BbbuE1sJ.js";const u="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M16%200c-8.837%200-16%207.163-16%2016s7.163%2016%2016%2016%2016-7.163%2016-16-7.163-16-16-16zM16%2029c-7.18%200-13-5.82-13-13s5.82-13%2013-13%2013%205.82%2013%2013-5.82%2013-13%2013z'%3e%3c/path%3e%3cpath%20d='M21%208l-5%205-5-5-3%203%205%205-5%205%203%203%205-5%205%205%203-3-5-5%205-5z'%3e%3c/path%3e%3c/svg%3e",l="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='M27%204l-15%2015-7-7-5%205%2012%2012%2020-20z'%3e%3c/path%3e%3c/svg%3e",n=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]");o.setAttribute("disabled",!0);const w={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let i;const a={titleColor:"#fff",titleSize:"16px",messageColor:"#fff",messageSize:"16px",theme:"dark",closeOnClick:!0,position:"topRight",transitionIn:"flipInX",transitionOut:"fadeOutRight"},v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){i=e[0].getTime(),i<Date.now()?(s.show({...a,title:"Error",message:"Please choose a date in the future",color:"#DE0000",iconUrl:u}),o.setAttribute("disabled",!0)):(s.show({...a,title:"Ok",message:"Your timer is ready to run",color:"#00C635",iconUrl:l}),o.removeAttribute("disabled"))}};p(n,v);function y(e){const m=Math.floor(e/864e5),h=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),g=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:h,minutes:f,seconds:g}}function S(e){return{days:String(e.days).padStart(2,"0"),hours:String(e.hours).padStart(2,"0"),minutes:String(e.minutes).padStart(2,"0"),seconds:String(e.seconds).padStart(2,"0")}}function b(e,r){Object.keys(r).forEach(t=>{r[t].textContent=e[t]})}o.addEventListener("click",()=>{if(i<=Date.now()){s.show({...a,title:"Error",message:"Please choose a future date to start the timer.",color:"#DE0000",iconUrl:u});return}let e=r();function r(){return setInterval(()=>{let t=i-Date.now(),c=y(t);if(t<=0){clearInterval(e),s.show({message:"Time is up! Choose a new timer",color:"#03a14d",titleColor:"#fff",titleSize:"16px",messageColor:"#fff",messageSize:"16px",iconUrl:l,position:"topRight",transitionIn:"bounceInLeft",closeOnClick:!0}),n.removeAttribute("disabled"),o.removeAttribute("disabled");return}let d=S(c);b(d,w)},1e3)}o.setAttribute("disabled",!0),n.setAttribute("disabled",!0)});
//# sourceMappingURL=1-timer.js.map
