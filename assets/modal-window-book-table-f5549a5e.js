(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=document.querySelectorAll(".modal-button"),o=document.getElementById("modal"),u=document.getElementsByClassName("close")[0];d.forEach(function(n){n.addEventListener("click",function(){o.style.display="block"})});u.addEventListener("click",function(){o.style.display="none"});window.addEventListener("click",function(n){n.target==o&&(o.style.display="none")});const a=document.querySelectorAll(".modal-button-for-table"),l=document.getElementById("modal-for-table"),f=document.getElementsByClassName("close-for-table")[0];a.forEach(function(n){n.addEventListener("click",function(){l.style.display="block"})});f.addEventListener("click",function(){l.style.display="none"});window.addEventListener("click",function(n){n.target==l&&(l.style.display="none")});