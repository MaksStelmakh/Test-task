parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qqlf":[function(require,module,exports) {
var e,t,s,n,l,i,c;for(e=document.getElementsByClassName("custom-select"),t=0;t<e.length;t++){for(n=e[t].getElementsByTagName("select")[0],(l=document.createElement("DIV")).setAttribute("class","select-selected"),l.innerHTML=n.options[n.selectedIndex].innerHTML,e[t].appendChild(l),(i=document.createElement("DIV")).setAttribute("class","select-items select-hide"),s=1;s<n.length;s++)(c=document.createElement("DIV")).innerHTML=n.options[s].innerHTML,"USA"===c.textContent&&c.setAttribute("class","same-as-selected"),c.addEventListener("click",function(e){var t,s,n,l,i;for(l=this.parentNode.parentNode.getElementsByTagName("select")[0],i=this.parentNode.previousSibling,s=0;s<l.length;s++)if(l.options[s].innerHTML==this.innerHTML){for(l.selectedIndex=s,i.innerHTML=this.innerHTML,t=this.parentNode.getElementsByClassName("same-as-selected"),n=0;n<t.length;n++)t[n].removeAttribute("class");this.setAttribute("class","same-as-selected");break}i.click()}),i.appendChild(c);e[t].appendChild(i),l.addEventListener("click",function(e){e.stopPropagation(),a(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function a(e){var t,s,n,l=[];for(t=document.getElementsByClassName("select-items"),s=document.getElementsByClassName("select-selected"),n=0;n<s.length;n++)e==s[n]?l.push(n):s[n].classList.remove("select-arrow-active");for(n=0;n<t.length;n++)l.indexOf(n)&&t[n].classList.add("select-hide")}document.addEventListener("click",a);
},{}]},{},["qqlf"], null)
//# sourceMappingURL=/parcel-project-template/selectLanguage.d5cb3bb6.js.map