!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');document.querySelector('button[type="submit"]').addEventListener("click",(function(n){var t=function(n){var t,i,a=n+1;(t=a,i=o+n*r,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({number:t,delay:i}):n({number:t,delay:i})}),i)}))).then((function(n){var t=n.number,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){n.pos;var t=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(a," in ").concat(t,"ms"))}))};n.preventDefault();for(var o=+i.value,r=+a.value,l=+c.value,d=0;d<l;d++)t(d)}))}();
//# sourceMappingURL=03-promises.0af4c924.js.map
