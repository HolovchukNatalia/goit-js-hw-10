import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form");function m(e,o){return new Promise((s,t)=>{setTimeout(()=>{o==="fulfilled"?s(e):t(e)},e)})}i.addEventListener("submit",e=>{e.preventDefault();const o=Number(e.target.delay.value),s=e.target.state.value;m(o,s).then(t=>{r.success({title:" Success",message:`Fulfilled promise in ${t}ms`,position:"topRight",color:"#00C635"})}).catch(t=>{r.error({title:" Error",message:`Rejected promise in ${t}ms`,position:"topRight",color:"#DE0000"})})});
//# sourceMappingURL=2-snackbar.js.map
