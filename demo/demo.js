(()=>{"use strict";var e={283:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.VoiceNotFoundError=void 0;class n extends Error{constructor(){super("Voice not found.")}}t.VoiceNotFoundError=n},300:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function u(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.resumeSpeech=t.pauseSpeech=t.speak=void 0;const c=n(232);t.speak=function(e){return o(this,void 0,void 0,(function*(){var t=yield(0,c.createSpeech)(e);window.speechSynthesis.speak(t)}))},t.pauseSpeech=function(){window.speechSynthesis.pause()},t.resumeSpeech=function(){window.speechSynthesis.resume()}},232:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(c,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function u(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.createSpeech=void 0;const c=n(780);t.createSpeech=function(e){return o(this,void 0,void 0,(function*(){var t=new SpeechSynthesisUtterance,n=(0,c.getVoice)(e.voice||16).then((e=>t.voice=e));return t.lang=e.lang||"pl",t.text=e.text,t.volume=e.volume||.1,yield n,t}))}},780:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVoice=void 0;const o=n(283);function c(e){return window.speechSynthesis.getVoices()[e]}t.getVoice=function(e){return function(e){return new Promise(((t,n)=>{const o=c(e);o?t(o):(window.speechSynthesis.onvoiceschanged=()=>{t(c(e))},setTimeout((()=>n()),1e3))}))}(e).then((e=>{if(!e)throw new o.VoiceNotFoundError;return e}))}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(()=>{const e=n(300),t=document.getElementById("speech-form"),o=document.getElementById("text-to-say"),c=document.getElementById("voice");t.addEventListener("submit",(t=>{t.preventDefault(),console.log({event:t});var n=o.value||"Demo text.",r=parseInt(c.value);(0,e.speak)({text:n,voice:r})}))})()})();