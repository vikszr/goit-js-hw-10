import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as m}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".form");function r(e,i){return new Promise((s,t)=>{setTimeout(()=>{i==="fulfilled"?s(e):t(e)},e)})}o.addEventListener("submit",e=>{e.preventDefault();const i=Number(o.elements.delay.value),s=o.elements.state.value;r(i,s).then(t=>{m.show({message:`✓ Fulfilled promise in ${t}ms`,messageColor:"white",backgroundColor:"#40CC8C",position:"topRight",imageWidth:200,timeout:3e3})}).catch(t=>{m.show({message:`✗ Rejected promise in ${t}ms`,messageColor:"white",backgroundColor:"#FF5C54",position:"topRight",timeout:3e3})}),o.reset()});
//# sourceMappingURL=2-snackbar.js.map