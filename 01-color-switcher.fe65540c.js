const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(t){t.currentTarget.setAttribute("disabled","true"),a=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.removeAttribute("disabled","false")})),e.addEventListener("click",(function(e){e.currentTarget.setAttribute("disabled","true"),t.removeAttribute("disabled","false"),clearInterval(a)}));let a=null;
//# sourceMappingURL=01-color-switcher.fe65540c.js.map
