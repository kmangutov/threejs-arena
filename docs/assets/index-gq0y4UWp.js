var om=Object.defineProperty;var am=(s,e,t)=>e in s?om(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var I=(s,e,t)=>am(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="160",zd=0,Fl=1,Hd=2,Ic=1,Lc=2,bn=3,fn=0,qt=1,At=2,Cn=0,Ri=1,Pi=2,Ol=3,kl=4,Gd=5,ni=100,Vd=101,Wd=102,Bl=103,zl=104,Xd=200,jd=201,qd=202,Yd=203,Wo=204,Xo=205,Kd=206,$d=207,Zd=208,Jd=209,Qd=210,ef=211,tf=212,nf=213,sf=214,rf=0,of=1,af=2,ir=3,lf=4,cf=5,hf=6,uf=7,_r=0,df=1,ff=2,Wn=0,Dc=1,Uc=2,Nc=3,ra=4,pf=5,Fc=6,Hl="attached",mf="detached",Oc=300,Ii=301,Li=302,sr=303,jo=304,xr=306,vn=1e3,Rt=1001,rr=1002,Tt=1003,qo=1004,Js=1005,wt=1006,kc=1007,li=1008,Xn=1009,gf=1010,_f=1011,oa=1012,Bc=1013,Gn=1014,An=1015,Pn=1016,zc=1017,Hc=1018,ri=1020,xf=1021,on=1023,yf=1024,vf=1025,oi=1026,Di=1027,Mf=1028,Gc=1029,Sf=1030,Vc=1031,Wc=1033,Fo=33776,Oo=33777,ko=33778,Bo=33779,Gl=35840,Vl=35841,Wl=35842,Xl=35843,Xc=36196,jl=37492,ql=37496,Yl=37808,Kl=37809,$l=37810,Zl=37811,Jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,zo=36492,lc=36494,cc=36495,wf=36283,hc=36284,uc=36285,dc=36286,Yo=2200,jc=2201,bf=2202,_s=2300,Ui=2301,Ho=2302,Ei=2400,Ai=2401,or=2402,aa=2500,Tf=2501,Ef=0,qc=1,Ko=2,Yc=3e3,ai=3001,Af=3200,Rf=3201,yr=0,Cf=1,en="",tt="srgb",Pt="srgb-linear",la="display-p3",vr="display-p3-linear",ar="linear",at="srgb",lr="rec709",cr="p3",Si=7680,fc=519,Pf=512,If=513,Lf=514,Kc=515,Df=516,Uf=517,Nf=518,Ff=519,$o=35044,pc="300 es",Zo=1035,Rn=2e3,hr=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const ps=Math.PI/180,xs=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function $c(s,e){return(s%e+e)%e}function lm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cm(s,e,t){return s!==e?(t-s)/(e-s):0}function Qs(s,e,t){return(1-t)*s+t*e}function hm(s,e,t,n){return Qs(s,e,1-Math.exp(-t*n))}function um(s,e=1){return e-Math.abs($c(s,e*2)-e)}function dm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function fm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function pm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function mm(s,e){return s+Math.random()*(e-s)}function gm(s){return s*(.5-Math.random())}function _m(s){s!==void 0&&(Ch=s);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xm(s){return s*ps}function ym(s){return s*xs}function mc(s){return(s&s-1)===0&&s!==0}function vm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const pt={DEG2RAD:ps,RAD2DEG:xs,generateUUID:yn,clamp:Et,euclideanModulo:$c,mapLinear:lm,inverseLerp:cm,lerp:Qs,damp:hm,pingpong:um,smoothstep:dm,smootherstep:fm,randInt:pm,randFloat:mm,randFloatSpread:gm,seededRandom:_m,degToRad:xm,radToDeg:ym,isPowerOfTwo:mc,ceilPowerOfTwo:vm,floorPowerOfTwo:Jo,setQuaternionFromProperEuler:Mm,normalize:st,denormalize:En};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],x=i[4],v=i[7],E=i[2],w=i[5],T=i[8];return r[0]=o*_+a*y+l*E,r[3]=o*p+a*x+l*w,r[6]=o*m+a*v+l*T,r[1]=c*_+h*y+u*E,r[4]=c*p+h*x+u*w,r[7]=c*m+h*v+u*T,r[2]=d*_+f*y+g*E,r[5]=d*p+f*x+g*w,r[8]=d*m+f*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new He;function Of(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kf(){const s=ur("canvas");return s.style.display="block",s}const Ph={};function er(s){s in Ph||(Ph[s]=!0,console.warn(s))}const Ih=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lh=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[Pt]:{transfer:ar,primaries:lr,toReference:s=>s,fromReference:s=>s},[tt]:{transfer:at,primaries:lr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[vr]:{transfer:ar,primaries:cr,toReference:s=>s.applyMatrix3(Lh),fromReference:s=>s.applyMatrix3(Ih)},[la]:{transfer:at,primaries:cr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Lh),fromReference:s=>s.applyMatrix3(Ih).convertLinearToSRGB()}},Sm=new Set([Pt,vr]),Qe={enabled:!0,_workingColorSpace:Pt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Sm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=zr[e].toReference,i=zr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return zr[s].primaries},getTransfer:function(s){return s===en?ar:zr[s].transfer}};function ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zi;class Zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=ur("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ms(t[n]/255)*255):t[n]=ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wm=0;class Jc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(La(i[o].image)):r.push(La(i[o]))}else r=La(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function La(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bm=0;class yt extends fi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Rt,i=Rt,r=wt,o=li,a=on,l=Xn,c=yt.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=yn(),this.name="",this.source=new Jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ai?tt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?ai:Yc}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ai?tt:en}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Oc;yt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(f+1)/2,E=(m+1)/2,w=(h+d)/4,T=(u+_)/4,L=(g+p)/4;return x>v&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=T/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bf extends fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?tt:en),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Bf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qc extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zf extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,m*y);p=Math.sin(p*w)/E,a=Math.sin(a*w)/E}const v=a*y;if(l=l*p+d*v,c=c*p+f*v,h=h*p+g*v,u=u*p+_*v,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new C,Dh=new mt;class an{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Gr.subVectors(this.max,Us),Hi.subVectors(e.a,Us),Gi.subVectors(e.b,Us),Vi.subVectors(e.c,Us),qn.subVectors(Gi,Hi),Yn.subVectors(Vi,Gi),_i.subVectors(Hi,Vi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-_i.z,_i.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,_i.z,0,-_i.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-_i.y,_i.x,0];return!Ua(t,Hi,Gi,Vi,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,Hi,Gi,Vi,Gr))?!1:(Vr.crossVectors(qn,Yn),t=[Vr.x,Vr.y,Vr.z],Ua(t,Hi,Gi,Vi,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new C,new C,new C,new C,new C,new C,new C,new C],pn=new C,Hr=new an,Hi=new C,Gi=new C,Vi=new C,qn=new C,Yn=new C,_i=new C,Us=new C,Gr=new C,Vr=new C,xi=new C;function Ua(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xi.fromArray(s,r);const a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Tm=new an,Ns=new C,Na=new C;class Mn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Na)),this.expandByPoint(Ns.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new C,Fa=new C,Wr=new C,Kn=new C,Oa=new C,Xr=new C,ka=new C;class As{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fa.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Fa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),a=Kn.dot(this.direction),l=-Kn.dot(Wr),c=Kn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(Wr,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){Oa.subVectors(t,e),Xr.subVectors(n,e),ka.crossVectors(Oa,Xr);let o=this.direction.dot(ka),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Xr.crossVectors(Kn,Xr));if(l<0)return null;const c=a*this.direction.dot(Oa.cross(Kn));if(c<0||l+c>o)return null;const h=-a*Kn.dot(ka);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,p){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,p)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Am)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),$n.crossVectors(n,sn),$n.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),$n.crossVectors(n,sn)),$n.normalize(),jr.crossVectors(sn,$n),i[0]=$n.x,i[4]=jr.x,i[8]=sn.x,i[1]=$n.y,i[5]=jr.y,i[9]=sn.y,i[2]=$n.z,i[6]=jr.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],x=n[7],v=n[11],E=n[15],w=i[0],T=i[4],L=i[8],M=i[12],S=i[1],O=i[5],k=i[9],N=i[13],R=i[2],F=i[6],D=i[10],z=i[14],V=i[3],K=i[7],Y=i[11],J=i[15];return r[0]=o*w+a*S+l*R+c*V,r[4]=o*T+a*O+l*F+c*K,r[8]=o*L+a*k+l*D+c*Y,r[12]=o*M+a*N+l*z+c*J,r[1]=h*w+u*S+d*R+f*V,r[5]=h*T+u*O+d*F+f*K,r[9]=h*L+u*k+d*D+f*Y,r[13]=h*M+u*N+d*z+f*J,r[2]=g*w+_*S+p*R+m*V,r[6]=g*T+_*O+p*F+m*K,r[10]=g*L+_*k+p*D+m*Y,r[14]=g*M+_*N+p*z+m*J,r[3]=y*w+x*S+v*R+E*V,r[7]=y*T+x*O+v*F+E*K,r[11]=y*L+x*k+v*D+E*Y,r[15]=y*M+x*N+v*z+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,x=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,E=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,w=t*y+n*x+i*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(_*d*r-u*p*r-_*i*f+n*p*f+u*i*m-n*d*m)*T,e[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=x*T,e[5]=(h*p*r-g*d*r+g*i*f-t*p*f-h*i*m+t*d*m)*T,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=v*T,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*m-t*u*m)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=E*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*p+t*u*p)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,y=l*c,x=l*h,v=l*u,E=n.x,w=n.y,T=n.z;return i[0]=(1-(_+m))*E,i[1]=(f+v)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(g+x)*T,i[9]=(p-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Wi.set(i[0],i[1],i[2]).length();const o=Wi.set(i[4],i[5],i[6]).length(),a=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const c=1/r,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Rn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Rn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===hr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Rn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let g,_;if(a===Rn)g=(o+r)*u,_=-2*u;else if(a===hr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new C,mn=new fe,Em=new C(0,0,0),Am=new C(1,1,1),$n=new C,jr=new C,sn=new C,Uh=new fe,Nh=new mt;class jt{constructor(e=0,t=0,n=0,i=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class ca{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rm=0;const Fh=new C,Xi=new mt,On=new fe,qr=new C,Fs=new C,Cm=new C,Pm=new mt,Oh=new C(1,0,0),kh=new C(0,1,0),Bh=new C(0,0,1),Im={type:"added"},Lm={type:"removed"};class et extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const e=new C,t=new jt,n=new mt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new He}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Fs,qr,this.up):On.lookAt(qr,Fs,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(On),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DEFAULT_UP=new C(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new C,kn=new C,Ba=new C,Bn=new C,ji=new C,qi=new C,zh=new C,za=new C,Ha=new C,Ga=new C;let Yr=!1;class tn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gn.subVectors(i,t),kn.subVectors(n,t),Ba.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(kn),l=gn.dot(Ba),c=kn.dot(kn),h=kn.dot(Ba),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,i,r,o,a,l){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),kn.subVectors(e,t),gn.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ji.subVectors(i,n),qi.subVectors(r,n),za.subVectors(e,n);const l=ji.dot(za),c=qi.dot(za);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,i);const h=ji.dot(Ha),u=qi.dot(Ha);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ji,o);Ga.subVectors(e,r);const f=ji.dot(Ga),g=qi.dot(Ga);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qi,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return zh.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(zh,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(ji,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Va(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Q{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=$c(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){const n=Hf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Qe.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Et(Vt.r*255,0,255))*65536+Math.round(Et(Vt.g*255,0,255))*256+Math.round(Et(Vt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=tt){Qe.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Kr);const n=Qs(Zn.h,Kr.h,t),i=Qs(Zn.s,Kr.s,t),r=Qs(Zn.l,Kr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Q;Q.NAMES=Hf;let Dm=0;class Yt extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Ri,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ct extends Yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new C,$r=new ue;class rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}}class ha extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eh extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ue extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Um=0;const cn=new fe,Wa=new et,Yi=new C,rn=new an,Os=new an,Ft=new C;class ot extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?eh:ha)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ue(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(rn.min,Os.min),rn.expandByPoint(Ft),Ft.addVectors(rn.max,Os.max),rn.expandByPoint(Ft)):(rn.expandByPoint(Os.min),rn.expandByPoint(Os.max))}rn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),Ft.add(Yi)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new C,h[S]=new C;const u=new C,d=new C,f=new C,g=new ue,_=new ue,p=new ue,m=new C,y=new C;function x(S,O,k){u.fromArray(i,S*3),d.fromArray(i,O*3),f.fromArray(i,k*3),g.fromArray(o,S*2),_.fromArray(o,O*2),p.fromArray(o,k*2),d.sub(u),f.sub(u),_.sub(g),p.sub(g);const N=1/(_.x*p.y-p.x*_.y);isFinite(N)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(N),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(N),c[S].add(m),c[O].add(m),c[k].add(m),h[S].add(y),h[O].add(y),h[k].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let S=0,O=v.length;S<O;++S){const k=v[S],N=k.start,R=k.count;for(let F=N,D=N+R;F<D;F+=3)x(n[F+0],n[F+1],n[F+2])}const E=new C,w=new C,T=new C,L=new C;function M(S){T.fromArray(r,S*3),L.copy(T);const O=c[S];E.copy(O),E.sub(T.multiplyScalar(T.dot(O))).normalize(),w.crossVectors(L,O);const N=w.dot(h[S])<0?-1:1;l[S*4]=E.x,l[S*4+1]=E.y,l[S*4+2]=E.z,l[S*4+3]=N}for(let S=0,O=v.length;S<O;++S){const k=v[S],N=k.start,R=k.count;for(let F=N,D=N+R;F<D;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ot,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new fe,yi=new As,Zr=new Mn,Gh=new C,Ki=new C,$i=new C,Zi=new C,Xa=new C,Jr=new C,Qr=new ue,eo=new ue,to=new ue,Vh=new C,Wh=new C,Xh=new C,no=new C,io=new C;class $ extends et{constructor(e=new ot,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Xa.fromBufferAttribute(u,e),o?Jr.addScaledVector(Xa,h):Jr.addScaledVector(Xa.sub(t),h))}t.add(Jr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Zr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Zr,Gh)===null||yi.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Hh.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,E=x;v<E;v+=3){const w=a.getX(v),T=a.getX(v+1),L=a.getX(v+2);i=so(this,m,e,n,c,h,u,w,T,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);i=so(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,E=x;v<E;v+=3){const w=v,T=v+1,L=v+2;i=so(this,m,e,n,c,h,u,w,T,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,x=p+1,v=p+2;i=so(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Nm(s,e,t,n,i,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===fn,a),l===null)return null;io.copy(a),io.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:s}}function so(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ki),s.getVertexPosition(l,$i),s.getVertexPosition(c,Zi);const h=Nm(s,e,t,n,Ki,$i,Zi,no);if(h){i&&(Qr.fromBufferAttribute(i,a),eo.fromBufferAttribute(i,l),to.fromBufferAttribute(i,c),h.uv=tn.getInterpolation(no,Ki,$i,Zi,Qr,eo,to,new ue)),r&&(Qr.fromBufferAttribute(r,a),eo.fromBufferAttribute(r,l),to.fromBufferAttribute(r,c),h.uv1=tn.getInterpolation(no,Ki,$i,Zi,Qr,eo,to,new ue),h.uv2=h.uv1),o&&(Vh.fromBufferAttribute(o,a),Wh.fromBufferAttribute(o,l),Xh.fromBufferAttribute(o,c),h.normal=tn.getInterpolation(no,Ki,$i,Zi,Vh,Wh,Xh,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};tn.getNormal(Ki,$i,Zi,u.normal),h.face=u}return h}class me extends ot{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(_,p,m,y,x,v,E,w,T,L,M){const S=v/T,O=E/L,k=v/2,N=E/2,R=w/2,F=T+1,D=L+1;let z=0,V=0;const K=new C;for(let Y=0;Y<D;Y++){const J=Y*O-N;for(let ie=0;ie<F;ie++){const H=ie*S-k;K[_]=H*y,K[p]=J*x,K[m]=R,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[m]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(ie/T),u.push(1-Y/L),z+=1}}for(let Y=0;Y<L;Y++)for(let J=0;J<T;J++){const ie=d+J+F*Y,H=d+J+F*(Y+1),Z=d+(J+1)+F*(Y+1),ae=d+(J+1)+F*Y;l.push(ie,H,ae),l.push(H,Z,ae),V+=6}a.addGroup(f,V,M),f+=V,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new me(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(s){const e={};for(let t=0;t<s.length;t++){const n=ys(s[t]);for(const i in n)e[i]=n[i]}return e}function Fm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gf(s){return s.getRenderTarget()===null?s.outputColorSpace:Qe.workingColorSpace}const vs={clone:ys,merge:Jt};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends Yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class th extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends th{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Vf extends et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(Ji,Qi,e,t);i.layers=this.layers,this.add(i);const r=new kt(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const o=new kt(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new kt(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const l=new kt(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new kt(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nh extends yt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wf extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ai?tt:en),this.texture=new nh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new me(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Cn});r.uniforms.tEquirect.value=t;const o=new $(i,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=wt),new Vf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ja=new C,Bm=new C,zm=new He;class ei{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ja.subVectors(n,t).cross(Bm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zm.getNormalMatrix(e),i=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Mn,ro=new C;class ua{constructor(e=new ei,t=new ei,n=new ei,i=new ei,r=new ei,o=new ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,p-f,v-m).normalize(),n[1].setComponents(l+r,d+c,p+f,v+m).normalize(),n[2].setComponents(l+o,d+h,p+g,v+y).normalize(),n[3].setComponents(l-o,d-h,p-g,v-y).normalize(),n[4].setComponents(l-a,d-u,p-_,v-x).normalize(),t===Rn)n[5].setComponents(l+a,d+u,p+_,v+x).normalize();else if(t===hr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ro.x=i.normal.x>0?e.max.x:e.min.x,ro.y=i.normal.y>0?e.max.y:e.min.y,ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hm(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class jn extends ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-y,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,v=y+c*(m+1),E=y+1+c*(m+1),w=y+1+c*m;f.push(x,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ng=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Gm,alphahash_pars_fragment:Vm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:jm,alphatest_pars_fragment:qm,aomap_fragment:Ym,aomap_pars_fragment:Km,batching_pars_vertex:$m,batching_vertex:Zm,begin_vertex:Jm,beginnormal_vertex:Qm,bsdfs:eg,iridescence_fragment:tg,bumpmap_pars_fragment:ng,clipping_planes_fragment:ig,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:rg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:hg,common:ug,cube_uv_reflection_fragment:dg,defaultnormal_vertex:fg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:gg,emissivemap_pars_fragment:_g,colorspace_fragment:xg,colorspace_pars_fragment:yg,envmap_fragment:vg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Sg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Ng,envmap_vertex:bg,fog_vertex:Tg,fog_pars_vertex:Eg,fog_fragment:Ag,fog_pars_fragment:Rg,gradientmap_pars_fragment:Cg,lightmap_fragment:Pg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ug,lights_toon_fragment:Fg,lights_toon_pars_fragment:Og,lights_phong_fragment:kg,lights_phong_pars_fragment:Bg,lights_physical_fragment:zg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Gg,lights_fragment_maps:Vg,lights_fragment_end:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:Yg,map_fragment:Kg,map_pars_fragment:$g,map_particle_fragment:Zg,map_particle_pars_fragment:Jg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:e0,morphcolor_vertex:t0,morphnormal_vertex:n0,morphtarget_pars_vertex:i0,morphtarget_vertex:s0,normal_fragment_begin:r0,normal_fragment_maps:o0,normal_pars_fragment:a0,normal_pars_vertex:l0,normal_vertex:c0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:p0,opaque_fragment:m0,packing:g0,premultiplied_alpha_fragment:_0,project_vertex:x0,dithering_fragment:y0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:b0,shadowmap_vertex:T0,shadowmask_pars_fragment:E0,skinbase_vertex:A0,skinning_pars_vertex:R0,skinning_vertex:C0,skinnormal_vertex:P0,specularmap_fragment:I0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:F0,uv_pars_fragment:O0,uv_pars_vertex:k0,uv_vertex:B0,worldpos_vertex:z0,background_vert:H0,background_frag:G0,backgroundCube_vert:V0,backgroundCube_frag:W0,cube_vert:X0,cube_frag:j0,depth_vert:q0,depth_frag:Y0,distanceRGBA_vert:K0,distanceRGBA_frag:$0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:Q0,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:o_,meshnormal_vert:a_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:h_,meshphysical_vert:u_,meshphysical_frag:d_,meshtoon_vert:f_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:__,shadow_frag:x_,sprite_vert:y_,sprite_frag:v_},re={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xn={basic:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Q(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Jt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Jt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Jt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Q(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Jt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Jt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Jt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Jt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Jt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Jt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Jt([re.lights,re.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};xn.physical={uniforms:Jt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const oo={r:0,b:0,g:0};function M_(s,e,t,n,i,r,o){const a=new Q(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(p,m){let y=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),y=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xr)?(h===void 0&&(h=new $(new me(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:ys(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $(new jn(2,2),new bt({name:"BackgroundMaterial",uniforms:ys(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(oo,Gf(s)),n.buffers.color.setClear(oo.r,oo.g,oo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function S_(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(R,F,D,z,V){let K=!1;if(o){const Y=_(z,D,F);c!==Y&&(c=Y,f(c.object)),K=m(R,z,D,V),K&&y(R,z,D,V)}else{const Y=F.wireframe===!0;(c.geometry!==z.id||c.program!==D.id||c.wireframe!==Y)&&(c.geometry=z.id,c.program=D.id,c.wireframe=Y,K=!0)}V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,L(R,F,D,z),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,F,D){const z=D.wireframe===!0;let V=a[R.id];V===void 0&&(V={},a[R.id]=V);let K=V[F.id];K===void 0&&(K={},V[F.id]=K);let Y=K[z];return Y===void 0&&(Y=p(d()),K[z]=Y),Y}function p(R){const F=[],D=[],z=[];for(let V=0;V<i;V++)F[V]=0,D[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:D,attributeDivisors:z,object:R,attributes:{},index:null}}function m(R,F,D,z){const V=c.attributes,K=F.attributes;let Y=0;const J=D.getAttributes();for(const ie in J)if(J[ie].location>=0){const Z=V[ie];let ae=K[ie];if(ae===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;Y++}return c.attributesNum!==Y||c.index!==z}function y(R,F,D,z){const V={},K=F.attributes;let Y=0;const J=D.getAttributes();for(const ie in J)if(J[ie].location>=0){let Z=K[ie];Z===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),V[ie]=ae,Y++}c.attributes=V,c.attributesNum=Y,c.index=z}function x(){const R=c.newAttributes;for(let F=0,D=R.length;F<D;F++)R[F]=0}function v(R){E(R,0)}function E(R,F){const D=c.newAttributes,z=c.enabledAttributes,V=c.attributeDivisors;D[R]=1,z[R]===0&&(s.enableVertexAttribArray(R),z[R]=1),V[R]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),V[R]=F)}function w(){const R=c.newAttributes,F=c.enabledAttributes;for(let D=0,z=F.length;D<z;D++)F[D]!==R[D]&&(s.disableVertexAttribArray(D),F[D]=0)}function T(R,F,D,z,V,K,Y){Y===!0?s.vertexAttribIPointer(R,F,D,V,K):s.vertexAttribPointer(R,F,D,z,V,K)}function L(R,F,D,z){if(n.isWebGL2===!1&&(R.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=z.attributes,K=D.getAttributes(),Y=F.defaultAttributeValues;for(const J in K){const ie=K[J];if(ie.location>=0){let H=V[J];if(H===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){const Z=H.normalized,ae=H.itemSize,ye=t.get(H);if(ye===void 0)continue;const ge=ye.buffer,be=ye.type,Pe=ye.bytesPerElement,Ae=n.isWebGL2===!0&&(be===s.INT||be===s.UNSIGNED_INT||H.gpuType===Bc);if(H.isInterleavedBufferAttribute){const Ye=H.data,G=Ye.stride,Dt=H.offset;if(Ye.isInstancedInterleavedBuffer){for(let Te=0;Te<ie.locationSize;Te++)E(ie.location+Te,Ye.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Te=0;Te<ie.locationSize;Te++)v(ie.location+Te);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Te=0;Te<ie.locationSize;Te++)T(ie.location+Te,ae/ie.locationSize,be,Z,G*Pe,(Dt+ae/ie.locationSize*Te)*Pe,Ae)}else{if(H.isInstancedBufferAttribute){for(let Ye=0;Ye<ie.locationSize;Ye++)E(ie.location+Ye,H.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ye=0;Ye<ie.locationSize;Ye++)v(ie.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Ye=0;Ye<ie.locationSize;Ye++)T(ie.location+Ye,ae/ie.locationSize,be,Z,ae*Pe,ae/ie.locationSize*Ye*Pe,Ae)}}else if(Y!==void 0){const Z=Y[J];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ie.location,Z);break;case 3:s.vertexAttrib3fv(ie.location,Z);break;case 4:s.vertexAttrib4fv(ie.location,Z);break;default:s.vertexAttrib1fv(ie.location,Z)}}}}w()}function M(){k();for(const R in a){const F=a[R];for(const D in F){const z=F[D];for(const V in z)g(z[V].object),delete z[V];delete F[D]}delete a[R]}}function S(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const D in F){const z=F[D];for(const V in z)g(z[V].object),delete z[V];delete F[D]}delete a[R.id]}function O(R){for(const F in a){const D=a[F];if(D[R.id]===void 0)continue;const z=D[R.id];for(const V in z)g(z[V].object),delete z[V];delete D[R.id]}}function k(){N(),h=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function w_(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function b_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,v=o||e.has("OES_texture_float"),E=x&&v,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:w}}function T_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ei,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,x=y*4;let v=m.clippingState||null;l.value=v,v=h(g,d,x,f);for(let E=0;E!==x;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function E_(s){let e=new WeakMap;function t(o,a){return a===sr?o.mapping=Ii:a===jo&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sr||a===jo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wf(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Rs extends th{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const us=4,jh=[.125,.215,.35,.446,.526,.582],bi=20,qa=new Rs,qh=new Q;let Ya=null,Ka=0,$a=0;const wi=(1+Math.sqrt(5))/2,es=1/wi,Yh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,wi,es),new C(0,wi,-es),new C(es,0,wi),new C(-es,0,wi),new C(wi,es,0),new C(-wi,es,0)];class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,Ka,$a),e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Pn,format:on,colorSpace:Pt,depthBuffer:!1},i=Kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A_(r)),this._blurMaterial=R_(r,e,t)}return i}_compileMaterial(e){const t=new $(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,i){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(qh),h.toneMapping=Wn,h.autoClear=!1;const f=new Ct({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new $(new me,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(qh),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;ao(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ii||e.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yh[(i-1)%Yh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):bi;p>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);const m=[];let y=0;for(let T=0;T<bi;++T){const L=T/_,M=Math.exp(-L*L/2);m.push(M),T===0?y+=M:T<p&&(y+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],E=3*v*(i>x-us?i-x+us:0),w=4*(this._cubeSize-v);ao(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(u,qa)}}function A_(s){const e=[],t=[],n=[];let i=s;const r=s-us+1+jh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-us?l=jh[o-s+us-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),x=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,L=w>2?0:-1,M=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];y.set(M,_*g*w),x.set(d,p*g*w);const S=[w,w,w,w,w,w];v.set(S,m*g*w)}const E=new ot;E.setAttribute("position",new rt(y,_)),E.setAttribute("uv",new rt(x,p)),E.setAttribute("faceIndex",new rt(v,m)),e.push(E),i>us&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kh(s,e,t){const n=new dn(s,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function R_(s,e,t){const n=new Float32Array(bi),i=new C(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function $h(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Zh(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sr||l===jo,h=l===Ii||l===Li;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new gc(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new gc(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function P_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I_(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],w=y[x+1],T=y[x+2];d.push(E,w,w,T,T,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,w=x+1,T=x+2;d.push(E,w,w,T,T,E)}}else return;const p=new(Of(d)?eh:ha)(d,1);p.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function L_(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*l,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function D_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function U_(s,e){return s[0]-e[0]}function N_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function F_(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let F=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var f=F;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),E===!0&&(M=3);let S=h.attributes.position.count*M,O=1;S>e.maxTextureSize&&(O=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*O*4*_),N=new Qc(k,S,O,_);N.type=An,N.needsUpdate=!0;const R=M*4;for(let D=0;D<_;D++){const z=w[D],V=T[D],K=L[D],Y=S*O*4*D;for(let J=0;J<z.count;J++){const ie=J*R;x===!0&&(o.fromBufferAttribute(z,J),k[Y+ie+0]=o.x,k[Y+ie+1]=o.y,k[Y+ie+2]=o.z,k[Y+ie+3]=0),v===!0&&(o.fromBufferAttribute(V,J),k[Y+ie+4]=o.x,k[Y+ie+5]=o.y,k[Y+ie+6]=o.z,k[Y+ie+7]=0),E===!0&&(o.fromBufferAttribute(K,J),k[Y+ie+8]=o.x,k[Y+ie+9]=o.y,k[Y+ie+10]=o.z,k[Y+ie+11]=K.itemSize===4?o.w:1)}}p={count:_,texture:N,size:new ue(S,O)},r.set(h,p),h.addEventListener("dispose",F)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];const y=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<g;v++){const E=_[v];E[0]=v,E[1]=d[v]}_.sort(N_);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(U_);const p=h.morphAttributes.position,m=h.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const E=a[v],w=E[0],T=E[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+v)!==p[w]&&h.setAttribute("morphTarget"+v,p[w]),m&&h.getAttribute("morphNormal"+v)!==m[w]&&h.setAttribute("morphNormal"+v,m[w]),i[v]=T,y+=T):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function O_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class sh extends yt{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:oi,h!==oi&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=Gn),n===void 0&&h===Di&&(n=ri),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jf=new yt,qf=new sh(1,1);qf.compareFunction=Kc;const Yf=new Qc,Kf=new zf,$f=new nh,Jh=[],Qh=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function Cs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Jh[i];if(r===void 0&&(r=new Float32Array(i),Jh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function da(s,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function k_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function B_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function H_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function G_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;nu.set(n),s.uniformMatrix2fv(this.addr,!1,nu),Lt(t,n)}}function V_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;tu.set(n),s.uniformMatrix3fv(this.addr,!1,tu),Lt(t,n)}}function W_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;eu.set(n),s.uniformMatrix4fv(this.addr,!1,eu),Lt(t,n)}}function X_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function Y_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function K_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function Q_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?qf:jf;t.setTexture2D(e||r,i)}function ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kf,i)}function tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$f,i)}function nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yf,i)}function ix(s){switch(s){case 5126:return k_;case 35664:return B_;case 35665:return z_;case 35666:return H_;case 35674:return G_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return j_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return K_;case 36294:return $_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(s,e){s.uniform1fv(this.addr,e)}function rx(s,e){const t=Cs(e,this.size,2);s.uniform2fv(this.addr,t)}function ox(s,e){const t=Cs(e,this.size,3);s.uniform3fv(this.addr,t)}function ax(s,e){const t=Cs(e,this.size,4);s.uniform4fv(this.addr,t)}function lx(s,e){const t=Cs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cx(s,e){const t=Cs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hx(s,e){const t=Cs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ux(s,e){s.uniform1iv(this.addr,e)}function dx(s,e){s.uniform2iv(this.addr,e)}function fx(s,e){s.uniform3iv(this.addr,e)}function px(s,e){s.uniform4iv(this.addr,e)}function mx(s,e){s.uniform1uiv(this.addr,e)}function gx(s,e){s.uniform2uiv(this.addr,e)}function _x(s,e){s.uniform3uiv(this.addr,e)}function xx(s,e){s.uniform4uiv(this.addr,e)}function yx(s,e,t){const n=this.cache,i=e.length,r=da(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jf,r[o])}function vx(s,e,t){const n=this.cache,i=e.length,r=da(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kf,r[o])}function Mx(s,e,t){const n=this.cache,i=e.length,r=da(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$f,r[o])}function Sx(s,e,t){const n=this.cache,i=e.length,r=da(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yf,r[o])}function wx(s){switch(s){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}class bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ix(t.type)}}class Tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wx(t.type)}}class Ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function iu(s,e){s.seq.push(e),s.map[e.id]=e}function Ax(s,e,t){const n=s.name,i=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),o=Za.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){iu(t,c===void 0?new bx(a,s,e):new Tx(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ex(a),iu(t,u)),t=u}}}class Go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ax(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function su(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Rx=37297;let Cx=0;function Px(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ix(s){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(s);let n;switch(e===t?n="":e===cr&&t===lr?n="LinearDisplayP3ToLinearSRGB":e===lr&&t===cr&&(n="LinearSRGBToLinearDisplayP3"),s){case Pt:case vr:return[n,"LinearTransferOETF"];case tt:case la:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ru(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Px(s.getShaderSource(e),o)}else return i}function Lx(s,e){const t=Ix(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dx(s,e){let t;switch(e){case Dc:t="Linear";break;case Uc:t="Reinhard";break;case Nc:t="OptimizedCineon";break;case ra:t="ACESFilmic";break;case Fc:t="AgX";break;case pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ux(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function Nx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function Fx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ox(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ds(s){return s!==""}function ou(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(s){return s.replace(kx,zx)}const Bx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zx(s,e){let t=Be[e];if(t===void 0){const n=Bx.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(s){return s.replace(Hx,Gx)}function Gx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case Li:e="ENVMAP_TYPE_CUBE";break;case xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function jx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _r:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case ff:e="ENVMAP_BLENDING_ADD";break}return e}function qx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Vx(t),c=Wx(t),h=Xx(t),u=jx(t),d=qx(t),f=t.isWebGL2?"":Ux(t),g=Nx(t),_=Fx(r),p=i.createProgram();let m,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ds).join(`
`),y.length>0&&(y+=`
`)):(m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),y=[f,cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Wn?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=_c(o),o=ou(o,t),o=au(o,t),a=_c(a),a=ou(a,t),a=au(a,t),o=lu(o),a=lu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const v=x+m+o,E=x+y+a,w=su(i,i.VERTEX_SHADER,v),T=su(i,i.FRAGMENT_SHADER,E);i.attachShader(p,w),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function L(k){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(T).trim();let D=!0,z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,T);else{const V=ru(i,w,"vertex"),K=ru(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+V+`
`+K)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||F==="")&&(z=!1);z&&(k.diagnostics={runnable:D,programLog:N,vertexShader:{log:R,prefix:m},fragmentShader:{log:F,prefix:y}})}i.deleteShader(w),i.deleteShader(T),M=new Go(i,p),S=Ox(i,p)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(p,Rx)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let Kx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zx(e),t.set(e,n)),n}}class Zx{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}}function Jx(s,e,t,n,i,r,o){const a=new ca,l=new $x,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,S,O,k,N){const R=k.fog,F=N.geometry,D=M.isMeshStandardMaterial?k.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||D),V=z&&z.mapping===xr?z.image.height:null,K=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Y=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,J=Y!==void 0?Y.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let H,Z,ae,ye;if(K){const Kt=xn[K];H=Kt.vertexShader,Z=Kt.fragmentShader}else H=M.vertexShader,Z=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const ge=s.getRenderTarget(),be=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,Ae=!!M.map,Ye=!!M.matcap,G=!!z,Dt=!!M.aoMap,Te=!!M.lightMap,Ne=!!M.bumpMap,ve=!!M.normalMap,dt=!!M.displacementMap,Ge=!!M.emissiveMap,P=!!M.metalnessMap,b=!!M.roughnessMap,X=M.anisotropy>0,ne=M.clearcoat>0,te=M.iridescence>0,se=M.sheen>0,Me=M.transmission>0,he=X&&!!M.anisotropyMap,_e=ne&&!!M.clearcoatMap,Ce=ne&&!!M.clearcoatNormalMap,Ve=ne&&!!M.clearcoatRoughnessMap,ee=te&&!!M.iridescenceMap,it=te&&!!M.iridescenceThicknessMap,Ke=se&&!!M.sheenColorMap,De=se&&!!M.sheenRoughnessMap,we=!!M.specularMap,xe=!!M.specularColorMap,ze=!!M.specularIntensityMap,nt=Me&&!!M.transmissionMap,_t=Me&&!!M.thicknessMap,je=!!M.gradientMap,oe=!!M.alphaMap,U=M.alphaTest>0,le=!!M.alphaHash,ce=!!M.extensions,Ie=!!F.attributes.uv1,Ee=!!F.attributes.uv2,lt=!!F.attributes.uv3;let ct=Wn;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ct=s.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:Z,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Pe,instancing:be,instancingColor:be&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Pt,map:Ae,matcap:Ye,envMap:G,envMapMode:G&&z.mapping,envMapCubeUVHeight:V,aoMap:Dt,lightMap:Te,bumpMap:Ne,normalMap:ve,displacementMap:d&&dt,emissiveMap:Ge,normalMapObjectSpace:ve&&M.normalMapType===Cf,normalMapTangentSpace:ve&&M.normalMapType===yr,metalnessMap:P,roughnessMap:b,anisotropy:X,anisotropyMap:he,clearcoat:ne,clearcoatMap:_e,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ve,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:it,sheen:se,sheenColorMap:Ke,sheenRoughnessMap:De,specularMap:we,specularColorMap:xe,specularIntensityMap:ze,transmission:Me,transmissionMap:nt,thicknessMap:_t,gradientMap:je,opaque:M.transparent===!1&&M.blending===Ri,alphaMap:oe,alphaTest:U,alphaHash:le,combine:M.combine,mapUv:Ae&&_(M.map.channel),aoMapUv:Dt&&_(M.aoMap.channel),lightMapUv:Te&&_(M.lightMap.channel),bumpMapUv:Ne&&_(M.bumpMap.channel),normalMapUv:ve&&_(M.normalMap.channel),displacementMapUv:dt&&_(M.displacementMap.channel),emissiveMapUv:Ge&&_(M.emissiveMap.channel),metalnessMapUv:P&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:_e&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:xe&&_(M.specularColorMap.channel),specularIntensityMapUv:ze&&_(M.specularIntensityMap.channel),transmissionMapUv:nt&&_(M.transmissionMap.channel),thicknessMapUv:_t&&_(M.thicknessMap.channel),alphaMapUv:oe&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ve||X),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ee,vertexUv3s:lt,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ae||oe),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===At,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)S.push(O),S.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){const S=g[M.type];let O;if(S){const k=xn[S];O=vs.clone(k.uniforms)}else O=M.uniforms;return O}function E(M,S){let O;for(let k=0,N=c.length;k<N;k++){const R=c[k];if(R.cacheKey===S){O=R,++O.usedTimes;break}}return O===void 0&&(O=new Yx(s,S,M,r),c.push(O)),O}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:L}}function Qx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ey(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||ey),n.length>1&&n.sort(d||hu),i.length>1&&i.sort(d||hu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function ty(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new uu,s.set(n,[o])):i>=r.length?(o=new uu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ny(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Q};break;case"SpotLight":t={position:new C,direction:new C,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Q,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":t={color:new Q,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function iy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sy=0;function ry(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function oy(s,e){const t=new ny,n=iy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,o=new fe,a=new fe;function l(h,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,p=0,m=0,y=0,x=0,v=0,E=0,w=0,T=0,L=0,M=0;h.sort(ry);const S=u===!0?Math.PI:1;for(let k=0,N=h.length;k<N;k++){const R=h[k],F=R.color,D=R.intensity,z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=F.r*D*S,f+=F.g*D*S,g+=F.b*D*S;else if(R.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(R.sh.coefficients[K],D);M++}else if(R.isDirectionalLight){const K=t.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){const Y=R.shadow,J=n.get(R);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=R.shadow.matrix,v++}i.directional[_]=K,_++}else if(R.isSpotLight){const K=t.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(F).multiplyScalar(D*S),K.distance=z,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,i.spot[m]=K;const Y=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,Y.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[m]=Y.matrix,R.castShadow){const J=n.get(R);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,i.spotShadow[m]=J,i.spotShadowMap[m]=V,w++}m++}else if(R.isRectAreaLight){const K=t.get(R);K.color.copy(F).multiplyScalar(D),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=K,y++}else if(R.isPointLight){const K=t.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*S),K.distance=R.distance,K.decay=R.decay,R.castShadow){const Y=R.shadow,J=n.get(R);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=R.shadow.matrix,E++}i.point[p]=K,p++}else if(R.isHemisphereLight){const K=t.get(R);K.skyColor.copy(R.color).multiplyScalar(D*S),K.groundColor.copy(R.groundColor).multiplyScalar(D*S),i.hemi[x]=K,x++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==_||O.pointLength!==p||O.spotLength!==m||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==v||O.numPointShadows!==E||O.numSpotShadows!==w||O.numSpotMaps!==T||O.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=M,O.directionalLength=_,O.pointLength=p,O.spotLength=m,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=v,O.numPointShadows=E,O.numSpotShadows=w,O.numSpotMaps=T,O.numLightProbes=M,i.version=sy++)}function c(h,u){let d=0,f=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const v=h[y];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(v.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),o.copy(v.matrixWorld),o.premultiply(m),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function du(s,e){const t=new oy(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ay(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new du(s,e),t.set(r,[l])):o>=a.length?(l=new du(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Zf extends Yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jf extends Yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hy(s,e,t){let n=new ua;const i=new ue,r=new ue,o=new Je,a=new Zf({depthPacking:Rf}),l=new Jf,c={},h=t.maxTextureSize,u={[fn]:qt,[qt]:fn,[At]:At},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ot;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let m=this.type;this.render=function(w,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Cn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=m!==bn&&this.type===bn,R=m===bn&&this.type!==bn;for(let F=0,D=w.length;F<D;F++){const z=w[F],V=z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const K=V.getFrameExtents();if(i.multiply(K),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||N===!0||R===!0){const J=this.type!==bn?{minFilter:Tt,magFilter:Tt}:{};V.map!==null&&V.map.dispose(),V.map=new dn(i.x,i.y,J),V.map.texture.name=z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const Y=V.getViewportCount();for(let J=0;J<Y;J++){const ie=V.getViewport(J);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),k.viewport(o),V.updateMatrices(z,J),n=V.getFrustum(),v(T,L,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===bn&&y(V,L),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,S,O)};function y(w,T){const L=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new dn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,L,f,_,null)}function x(w,T,L,M){let S=null;const O=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)S=O;else if(S=L.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=S.uuid,N=T.uuid;let R=c[k];R===void 0&&(R={},c[k]=R);let F=R[N];F===void 0&&(F=S.clone(),R[N]=F,T.addEventListener("dispose",E)),S=F}if(S.visible=T.visible,S.wireframe=T.wireframe,M===bn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=s.properties.get(S);k.light=L}return S}function v(w,T,L,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===bn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const N=e.update(w),R=w.material;if(Array.isArray(R)){const F=N.groups;for(let D=0,z=F.length;D<z;D++){const V=F[D],K=R[V.materialIndex];if(K&&K.visible){const Y=x(w,K,M,S);w.onBeforeShadow(s,w,T,L,N,Y,V),s.renderBufferDirect(L,null,N,Y,w,V),w.onAfterShadow(s,w,T,L,N,Y,V)}}}else if(R.visible){const F=x(w,R,M,S);w.onBeforeShadow(s,w,T,L,N,F,null),s.renderBufferDirect(L,null,N,F,w,null),w.onAfterShadow(s,w,T,L,N,F,null)}}const k=w.children;for(let N=0,R=k.length;N<R;N++)v(k[N],T,L,M,S)}function E(w){w.target.removeEventListener("dispose",E);for(const L in c){const M=c[L],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function uy(s,e,t){const n=t.isWebGL2;function i(){let U=!1;const le=new Je;let ce=null;const Ie=new Je(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!U&&(s.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,lt,ct,Ut,Kt){Kt===!0&&(Ee*=Ut,lt*=Ut,ct*=Ut),le.set(Ee,lt,ct,Ut),Ie.equals(le)===!1&&(s.clearColor(Ee,lt,ct,Ut),Ie.copy(le))},reset:function(){U=!1,ce=null,Ie.set(-1,0,0,0)}}}function r(){let U=!1,le=null,ce=null,Ie=null;return{setTest:function(Ee){Ee?Pe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Ee){le!==Ee&&!U&&(s.depthMask(Ee),le=Ee)},setFunc:function(Ee){if(ce!==Ee){switch(Ee){case rf:s.depthFunc(s.NEVER);break;case of:s.depthFunc(s.ALWAYS);break;case af:s.depthFunc(s.LESS);break;case ir:s.depthFunc(s.LEQUAL);break;case lf:s.depthFunc(s.EQUAL);break;case cf:s.depthFunc(s.GEQUAL);break;case hf:s.depthFunc(s.GREATER);break;case uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ee}},setLocked:function(Ee){U=Ee},setClear:function(Ee){Ie!==Ee&&(s.clearDepth(Ee),Ie=Ee)},reset:function(){U=!1,le=null,ce=null,Ie=null}}}function o(){let U=!1,le=null,ce=null,Ie=null,Ee=null,lt=null,ct=null,Ut=null,Kt=null;return{setTest:function(ht){U||(ht?Pe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(ht){le!==ht&&!U&&(s.stencilMask(ht),le=ht)},setFunc:function(ht,$t,wn){(ce!==ht||Ie!==$t||Ee!==wn)&&(s.stencilFunc(ht,$t,wn),ce=ht,Ie=$t,Ee=wn)},setOp:function(ht,$t,wn){(lt!==ht||ct!==$t||Ut!==wn)&&(s.stencilOp(ht,$t,wn),lt=ht,ct=$t,Ut=wn)},setLocked:function(ht){U=ht},setClear:function(ht){Kt!==ht&&(s.clearStencil(ht),Kt=ht)},reset:function(){U=!1,le=null,ce=null,Ie=null,Ee=null,lt=null,ct=null,Ut=null,Kt=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,v=null,E=null,w=null,T=null,L=null,M=new Q(0,0,0),S=0,O=!1,k=null,N=null,R=null,F=null,D=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=K>=2);let J=null,ie={};const H=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ae=new Je().fromArray(H),ye=new Je().fromArray(Z);function ge(U,le,ce,Ie){const Ee=new Uint8Array(4),lt=s.createTexture();s.bindTexture(U,lt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<ce;ct++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(le+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return lt}const be={};be[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(s.DEPTH_TEST),l.setFunc(ir),Ge(!1),P(Fl),Pe(s.CULL_FACE),ve(Cn);function Pe(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function Ae(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function Ye(U,le){return f[U]!==le?(s.bindFramebuffer(U,le),f[U]=le,n&&(U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=le),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=le)),!0):!1}function G(U,le){let ce=_,Ie=!1;if(U)if(ce=g.get(le),ce===void 0&&(ce=[],g.set(le,ce)),U.isWebGLMultipleRenderTargets){const Ee=U.texture;if(ce.length!==Ee.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,ct=Ee.length;lt<ct;lt++)ce[lt]=s.COLOR_ATTACHMENT0+lt;ce.length=Ee.length,Ie=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Ie=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ie=!0);Ie&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Dt(U){return p!==U?(s.useProgram(U),p=U,!0):!1}const Te={[ni]:s.FUNC_ADD,[Vd]:s.FUNC_SUBTRACT,[Wd]:s.FUNC_REVERSE_SUBTRACT};if(n)Te[Bl]=s.MIN,Te[zl]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Te[Bl]=U.MIN_EXT,Te[zl]=U.MAX_EXT)}const Ne={[Xd]:s.ZERO,[jd]:s.ONE,[qd]:s.SRC_COLOR,[Wo]:s.SRC_ALPHA,[Qd]:s.SRC_ALPHA_SATURATE,[Zd]:s.DST_COLOR,[Kd]:s.DST_ALPHA,[Yd]:s.ONE_MINUS_SRC_COLOR,[Xo]:s.ONE_MINUS_SRC_ALPHA,[Jd]:s.ONE_MINUS_DST_COLOR,[$d]:s.ONE_MINUS_DST_ALPHA,[ef]:s.CONSTANT_COLOR,[tf]:s.ONE_MINUS_CONSTANT_COLOR,[nf]:s.CONSTANT_ALPHA,[sf]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(U,le,ce,Ie,Ee,lt,ct,Ut,Kt,ht){if(U===Cn){m===!0&&(Ae(s.BLEND),m=!1);return}if(m===!1&&(Pe(s.BLEND),m=!0),U!==Gd){if(U!==y||ht!==O){if((x!==ni||w!==ni)&&(s.blendEquation(s.FUNC_ADD),x=ni,w=ni),ht)switch(U){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pi:s.blendFunc(s.ONE,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,E=null,T=null,L=null,M.set(0,0,0),S=0,y=U,O=ht}return}Ee=Ee||le,lt=lt||ce,ct=ct||Ie,(le!==x||Ee!==w)&&(s.blendEquationSeparate(Te[le],Te[Ee]),x=le,w=Ee),(ce!==v||Ie!==E||lt!==T||ct!==L)&&(s.blendFuncSeparate(Ne[ce],Ne[Ie],Ne[lt],Ne[ct]),v=ce,E=Ie,T=lt,L=ct),(Ut.equals(M)===!1||Kt!==S)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Kt),M.copy(Ut),S=Kt),y=U,O=!1}function dt(U,le){U.side===At?Ae(s.CULL_FACE):Pe(s.CULL_FACE);let ce=U.side===qt;le&&(ce=!ce),Ge(ce),U.blending===Ri&&U.transparent===!1?ve(Cn):ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ie=U.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),X(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){k!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),k=U)}function P(U){U!==zd?(Pe(s.CULL_FACE),U!==N&&(U===Fl?s.cullFace(s.BACK):U===Hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),N=U}function b(U){U!==R&&(V&&s.lineWidth(U),R=U)}function X(U,le,ce){U?(Pe(s.POLYGON_OFFSET_FILL),(F!==le||D!==ce)&&(s.polygonOffset(le,ce),F=le,D=ce)):Ae(s.POLYGON_OFFSET_FILL)}function ne(U){U?Pe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function te(U){U===void 0&&(U=s.TEXTURE0+z-1),J!==U&&(s.activeTexture(U),J=U)}function se(U,le,ce){ce===void 0&&(J===null?ce=s.TEXTURE0+z-1:ce=J);let Ie=ie[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},ie[ce]=Ie),(Ie.type!==U||Ie.texture!==le)&&(J!==ce&&(s.activeTexture(ce),J=ce),s.bindTexture(U,le||be[U]),Ie.type=U,Ie.texture=le)}function Me(){const U=ie[J];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(U){ae.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function nt(U){ye.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ye.copy(U))}function _t(U,le){let ce=u.get(le);ce===void 0&&(ce=new WeakMap,u.set(le,ce));let Ie=ce.get(U);Ie===void 0&&(Ie=s.getUniformBlockIndex(le,U.name),ce.set(U,Ie))}function je(U,le){const Ie=u.get(le).get(U);h.get(le)!==Ie&&(s.uniformBlockBinding(le,Ie,U.__bindingPointIndex),h.set(le,Ie))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,ie={},f={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,v=null,E=null,w=null,T=null,L=null,M=new Q(0,0,0),S=0,O=!1,k=null,N=null,R=null,F=null,D=null,ae.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Ae,bindFramebuffer:Ye,drawBuffers:G,useProgram:Dt,setBlending:ve,setMaterial:dt,setFlipSided:Ge,setCullFace:P,setLineWidth:b,setPolygonOffset:X,setScissorTest:ne,activeTexture:te,bindTexture:se,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:_e,texImage2D:we,texImage3D:xe,updateUBOMapping:_t,uniformBlockBinding:je,texStorage2D:Ke,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:Ve,compressedTexSubImage2D:ee,compressedTexSubImage3D:it,scissor:ze,viewport:nt,reset:oe}}function dy(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):ur("canvas")}function _(P,b,X,ne){let te=1;if((P.width>ne||P.height>ne)&&(te=ne/Math.max(P.width,P.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const se=b?Jo:Math.floor,Me=se(te*P.width),he=se(te*P.height);u===void 0&&(u=g(Me,he));const _e=X?g(Me,he):u;return _e.width=Me,_e.height=he,_e.getContext("2d").drawImage(P,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Me+"x"+he+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return mc(P.width)&&mc(P.height)}function m(P){return a?!1:P.wrapS!==Rt||P.wrapT!==Rt||P.minFilter!==Tt&&P.minFilter!==wt}function y(P,b){return P.generateMipmaps&&b&&P.minFilter!==Tt&&P.minFilter!==wt}function x(P){s.generateMipmap(P)}function v(P,b,X,ne,te=!1){if(a===!1)return b;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=b;if(b===s.RED&&(X===s.FLOAT&&(se=s.R32F),X===s.HALF_FLOAT&&(se=s.R16F),X===s.UNSIGNED_BYTE&&(se=s.R8)),b===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(se=s.R8UI),X===s.UNSIGNED_SHORT&&(se=s.R16UI),X===s.UNSIGNED_INT&&(se=s.R32UI),X===s.BYTE&&(se=s.R8I),X===s.SHORT&&(se=s.R16I),X===s.INT&&(se=s.R32I)),b===s.RG&&(X===s.FLOAT&&(se=s.RG32F),X===s.HALF_FLOAT&&(se=s.RG16F),X===s.UNSIGNED_BYTE&&(se=s.RG8)),b===s.RGBA){const Me=te?ar:Qe.getTransfer(ne);X===s.FLOAT&&(se=s.RGBA32F),X===s.HALF_FLOAT&&(se=s.RGBA16F),X===s.UNSIGNED_BYTE&&(se=Me===at?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(P,b,X){return y(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==Tt&&P.minFilter!==wt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){return P===Tt||P===qo||P===Js?s.NEAREST:s.LINEAR}function T(P){const b=P.target;b.removeEventListener("dispose",T),M(b),b.isVideoTexture&&h.delete(b)}function L(P){const b=P.target;b.removeEventListener("dispose",L),O(b)}function M(P){const b=n.get(P);if(b.__webglInit===void 0)return;const X=P.source,ne=d.get(X);if(ne){const te=ne[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(P),Object.keys(ne).length===0&&d.delete(X)}n.remove(P)}function S(P){const b=n.get(P);s.deleteTexture(b.__webglTexture);const X=P.source,ne=d.get(X);delete ne[b.__cacheKey],o.memory.textures--}function O(P){const b=P.texture,X=n.get(P),ne=n.get(b);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(X.__webglFramebuffer[te]))for(let se=0;se<X.__webglFramebuffer[te].length;se++)s.deleteFramebuffer(X.__webglFramebuffer[te][se]);else s.deleteFramebuffer(X.__webglFramebuffer[te]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[te])}else{if(Array.isArray(X.__webglFramebuffer))for(let te=0;te<X.__webglFramebuffer.length;te++)s.deleteFramebuffer(X.__webglFramebuffer[te]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let te=0;te<X.__webglColorRenderbuffer.length;te++)X.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[te]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let te=0,se=b.length;te<se;te++){const Me=n.get(b[te]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(b[te])}n.remove(b),n.remove(P)}let k=0;function N(){k=0}function R(){const P=k;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),k+=1,P}function F(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function D(P,b){const X=n.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(X,P,b);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function z(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){ae(X,P,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function V(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){ae(X,P,b);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function K(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){ye(X,P,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}const Y={[vn]:s.REPEAT,[Rt]:s.CLAMP_TO_EDGE,[rr]:s.MIRRORED_REPEAT},J={[Tt]:s.NEAREST,[qo]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[kc]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},ie={[Pf]:s.NEVER,[Ff]:s.ALWAYS,[If]:s.LESS,[Kc]:s.LEQUAL,[Lf]:s.EQUAL,[Nf]:s.GEQUAL,[Df]:s.GREATER,[Uf]:s.NOTEQUAL};function H(P,b,X){if(X?(s.texParameteri(P,s.TEXTURE_WRAP_S,Y[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Y[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Y[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,J[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,J[b.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Rt||b.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,w(b.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==Tt&&b.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ie[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Tt||b.minFilter!==Js&&b.minFilter!==li||b.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Pn&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Z(P,b){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",T));const ne=b.source;let te=d.get(ne);te===void 0&&(te={},d.set(ne,te));const se=F(b);if(se!==P.__cacheKey){te[se]===void 0&&(te[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),te[se].usedTimes++;const Me=te[P.__cacheKey];Me!==void 0&&(te[P.__cacheKey].usedTimes--,Me.usedTimes===0&&S(b)),P.__cacheKey=se,P.__webglTexture=te[se].texture}return X}function ae(P,b,X){let ne=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=s.TEXTURE_3D);const te=Z(P,b),se=b.source;t.bindTexture(ne,P.__webglTexture,s.TEXTURE0+X);const Me=n.get(se);if(se.version!==Me.__version||te===!0){t.activeTexture(s.TEXTURE0+X);const he=Qe.getPrimaries(Qe.workingColorSpace),_e=b.colorSpace===en?null:Qe.getPrimaries(b.colorSpace),Ce=b.colorSpace===en||he===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ve=m(b)&&p(b.image)===!1;let ee=_(b.image,Ve,!1,i.maxTextureSize);ee=Ge(b,ee);const it=p(ee)||a,Ke=r.convert(b.format,b.colorSpace);let De=r.convert(b.type),we=v(b.internalFormat,Ke,De,b.colorSpace,b.isVideoTexture);H(ne,b,it);let xe;const ze=b.mipmaps,nt=a&&b.isVideoTexture!==!0&&we!==Xc,_t=Me.__version===void 0||te===!0,je=E(b,ee,it);if(b.isDepthTexture)we=s.DEPTH_COMPONENT,a?b.type===An?we=s.DEPTH_COMPONENT32F:b.type===Gn?we=s.DEPTH_COMPONENT24:b.type===ri?we=s.DEPTH24_STENCIL8:we=s.DEPTH_COMPONENT16:b.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===oi&&we===s.DEPTH_COMPONENT&&b.type!==oa&&b.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Gn,De=r.convert(b.type)),b.format===Di&&we===s.DEPTH_COMPONENT&&(we=s.DEPTH_STENCIL,b.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ri,De=r.convert(b.type))),_t&&(nt?t.texStorage2D(s.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,Ke,De,null));else if(b.isDataTexture)if(ze.length>0&&it){nt&&_t&&t.texStorage2D(s.TEXTURE_2D,je,we,ze[0].width,ze[0].height);for(let oe=0,U=ze.length;oe<U;oe++)xe=ze[oe],nt?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,xe.width,xe.height,Ke,De,xe.data):t.texImage2D(s.TEXTURE_2D,oe,we,xe.width,xe.height,0,Ke,De,xe.data);b.generateMipmaps=!1}else nt?(_t&&t.texStorage2D(s.TEXTURE_2D,je,we,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,Ke,De,ee.data)):t.texImage2D(s.TEXTURE_2D,0,we,ee.width,ee.height,0,Ke,De,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,je,we,ze[0].width,ze[0].height,ee.depth);for(let oe=0,U=ze.length;oe<U;oe++)xe=ze[oe],b.format!==on?Ke!==null?nt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ee.depth,Ke,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,we,xe.width,xe.height,ee.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,xe.width,xe.height,ee.depth,Ke,De,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,we,xe.width,xe.height,ee.depth,0,Ke,De,xe.data)}else{nt&&_t&&t.texStorage2D(s.TEXTURE_2D,je,we,ze[0].width,ze[0].height);for(let oe=0,U=ze.length;oe<U;oe++)xe=ze[oe],b.format!==on?Ke!==null?nt?t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,xe.width,xe.height,Ke,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,xe.width,xe.height,Ke,De,xe.data):t.texImage2D(s.TEXTURE_2D,oe,we,xe.width,xe.height,0,Ke,De,xe.data)}else if(b.isDataArrayTexture)nt?(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,je,we,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ke,De,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,Ke,De,ee.data);else if(b.isData3DTexture)nt?(_t&&t.texStorage3D(s.TEXTURE_3D,je,we,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ke,De,ee.data)):t.texImage3D(s.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,Ke,De,ee.data);else if(b.isFramebufferTexture){if(_t)if(nt)t.texStorage2D(s.TEXTURE_2D,je,we,ee.width,ee.height);else{let oe=ee.width,U=ee.height;for(let le=0;le<je;le++)t.texImage2D(s.TEXTURE_2D,le,we,oe,U,0,Ke,De,null),oe>>=1,U>>=1}}else if(ze.length>0&&it){nt&&_t&&t.texStorage2D(s.TEXTURE_2D,je,we,ze[0].width,ze[0].height);for(let oe=0,U=ze.length;oe<U;oe++)xe=ze[oe],nt?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Ke,De,xe):t.texImage2D(s.TEXTURE_2D,oe,we,Ke,De,xe);b.generateMipmaps=!1}else nt?(_t&&t.texStorage2D(s.TEXTURE_2D,je,we,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ke,De,ee)):t.texImage2D(s.TEXTURE_2D,0,we,Ke,De,ee);y(b,it)&&x(ne),Me.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ye(P,b,X){if(b.image.length!==6)return;const ne=Z(P,b),te=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+X);const se=n.get(te);if(te.version!==se.__version||ne===!0){t.activeTexture(s.TEXTURE0+X);const Me=Qe.getPrimaries(Qe.workingColorSpace),he=b.colorSpace===en?null:Qe.getPrimaries(b.colorSpace),_e=b.colorSpace===en||Me===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Ve=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!Ce&&!Ve?ee[oe]=_(b.image[oe],!1,!0,i.maxCubemapSize):ee[oe]=Ve?b.image[oe].image:b.image[oe],ee[oe]=Ge(b,ee[oe]);const it=ee[0],Ke=p(it)||a,De=r.convert(b.format,b.colorSpace),we=r.convert(b.type),xe=v(b.internalFormat,De,we,b.colorSpace),ze=a&&b.isVideoTexture!==!0,nt=se.__version===void 0||ne===!0;let _t=E(b,it,Ke);H(s.TEXTURE_CUBE_MAP,b,Ke);let je;if(Ce){ze&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_t,xe,it.width,it.height);for(let oe=0;oe<6;oe++){je=ee[oe].mipmaps;for(let U=0;U<je.length;U++){const le=je[U];b.format!==on?De!==null?ze?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,0,0,le.width,le.height,De,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,0,0,le.width,le.height,De,we,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U,xe,le.width,le.height,0,De,we,le.data)}}}else{je=b.mipmaps,ze&&nt&&(je.length>0&&_t++,t.texStorage2D(s.TEXTURE_CUBE_MAP,_t,xe,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(Ve){ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,De,we,ee[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,ee[oe].width,ee[oe].height,0,De,we,ee[oe].data);for(let U=0;U<je.length;U++){const ce=je[U].image[oe].image;ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,0,0,ce.width,ce.height,De,we,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,xe,ce.width,ce.height,0,De,we,ce.data)}}else{ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,we,ee[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,xe,De,we,ee[oe]);for(let U=0;U<je.length;U++){const le=je[U];ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,0,0,De,we,le.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,U+1,xe,De,we,le.image[oe])}}}y(b,Ke)&&x(s.TEXTURE_CUBE_MAP),se.__version=te.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ge(P,b,X,ne,te,se){const Me=r.convert(X.format,X.colorSpace),he=r.convert(X.type),_e=v(X.internalFormat,Me,he,X.colorSpace);if(!n.get(b).__hasExternalTextures){const Ve=Math.max(1,b.width>>se),ee=Math.max(1,b.height>>se);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,se,_e,Ve,ee,b.depth,0,Me,he,null):t.texImage2D(te,se,_e,Ve,ee,0,Me,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ve(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,te,n.get(X).__webglTexture,0,Ne(b)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,te,n.get(X).__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(P,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let ne=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||ve(b)){const te=b.depthTexture;te&&te.isDepthTexture&&(te.type===An?ne=s.DEPTH_COMPONENT32F:te.type===Gn&&(ne=s.DEPTH_COMPONENT24));const se=Ne(b);ve(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,ne,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,se,ne,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const ne=Ne(b);X&&ve(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,b.width,b.height):ve(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<ne.length;te++){const se=ne[te],Me=r.convert(se.format,se.colorSpace),he=r.convert(se.type),_e=v(se.internalFormat,Me,he,se.colorSpace),Ce=Ne(b);X&&ve(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,_e,b.width,b.height):ve(b)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,_e,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_e,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);const ne=n.get(b.depthTexture).__webglTexture,te=Ne(b);if(b.depthTexture.format===oi)ve(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(b.depthTexture.format===Di)ve(b)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(P){const b=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Pe(b.__webglFramebuffer,P)}else if(X){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=s.createRenderbuffer(),be(b.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),be(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(P,b,X){const ne=n.get(P);b!==void 0&&ge(ne.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Ae(P)}function G(P){const b=P.texture,X=n.get(P),ne=n.get(b);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=b.version,o.memory.textures++);const te=P.isWebGLCubeRenderTarget===!0,se=P.isWebGLMultipleRenderTargets===!0,Me=p(P)||a;if(te){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let _e=0;_e<b.mipmaps.length;_e++)X.__webglFramebuffer[he][_e]=s.createFramebuffer()}else X.__webglFramebuffer[he]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)X.__webglFramebuffer[he]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(se)if(i.drawBuffers){const he=P.texture;for(let _e=0,Ce=he.length;_e<Ce;_e++){const Ve=n.get(he[_e]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ve(P)===!1){const he=se?b:[b];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _e=0;_e<he.length;_e++){const Ce=he[_e];X.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[_e]);const Ve=r.convert(Ce.format,Ce.colorSpace),ee=r.convert(Ce.type),it=v(Ce.internalFormat,Ve,ee,Ce.colorSpace,P.isXRRenderTarget===!0),Ke=Ne(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,it,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,X.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),be(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),H(s.TEXTURE_CUBE_MAP,b,Me);for(let he=0;he<6;he++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ge(X.__webglFramebuffer[he][_e],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else ge(X.__webglFramebuffer[he],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(b,Me)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const he=P.texture;for(let _e=0,Ce=he.length;_e<Ce;_e++){const Ve=he[_e],ee=n.get(Ve);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),H(s.TEXTURE_2D,Ve,Me),ge(X.__webglFramebuffer,P,Ve,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,0),y(Ve,Me)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?he=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),H(he,b,Me),a&&b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ge(X.__webglFramebuffer[_e],P,b,s.COLOR_ATTACHMENT0,he,_e);else ge(X.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,he,0);y(b,Me)&&x(he),t.unbindTexture()}P.depthBuffer&&Ae(P)}function Dt(P){const b=p(P)||a,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,te=X.length;ne<te;ne++){const se=X[ne];if(y(se,b)){const Me=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,he=n.get(se).__webglTexture;t.bindTexture(Me,he),x(Me),t.unbindTexture()}}}function Te(P){if(a&&P.samples>0&&ve(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,ne=P.height;let te=s.COLOR_BUFFER_BIT;const se=[],Me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(P),_e=P.isWebGLMultipleRenderTargets===!0;if(_e)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){se.push(s.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&se.push(Me);const Ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ve===!1&&(P.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),_e&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),Ve===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Me]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Me])),_e){const ee=n.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,X,ne,0,0,X,ne,te,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const Ve=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ne(P){return Math.min(i.maxSamples,P.samples)}function ve(P){const b=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Ge(P,b){const X=P.colorSpace,ne=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Zo||X!==Pt&&X!==en&&(Qe.getTransfer(X)===at?a===!1?e.has("EXT_sRGB")===!0&&ne===on?(P.format=Zo,P.minFilter=wt,P.generateMipmaps=!1):b=Zc.sRGBToLinear(b):(ne!==on||te!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Ye,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve}function Qf(s,e,t){const n=t.isWebGL2;function i(r,o=en){let a;const l=Qe.getTransfer(o);if(r===Xn)return s.UNSIGNED_BYTE;if(r===zc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Hc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===gf)return s.BYTE;if(r===_f)return s.SHORT;if(r===oa)return s.UNSIGNED_SHORT;if(r===Bc)return s.INT;if(r===Gn)return s.UNSIGNED_INT;if(r===An)return s.FLOAT;if(r===Pn)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xf)return s.ALPHA;if(r===on)return s.RGBA;if(r===yf)return s.LUMINANCE;if(r===vf)return s.LUMINANCE_ALPHA;if(r===oi)return s.DEPTH_COMPONENT;if(r===Di)return s.DEPTH_STENCIL;if(r===Zo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mf)return s.RED;if(r===Gc)return s.RED_INTEGER;if(r===Sf)return s.RG;if(r===Vc)return s.RG_INTEGER;if(r===Wc)return s.RGBA_INTEGER;if(r===Fo||r===Oo||r===ko||r===Bo)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gl||r===Vl||r===Wl||r===Xl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Gl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jl||r===ql)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===jl)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ql)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yl||r===Kl||r===$l||r===Zl||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===sc||r===rc||r===oc||r===ac)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Yl)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kl)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$l)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zl)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jl)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ql)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ec)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ic)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oc)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ac)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zo||r===lc||r===cc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===zo)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wf||r===hc||r===uc||r===dc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===zo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===hc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ri?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class ep extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class de extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fy={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class py extends fi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const y=[],x=[],v=new ue;let E=null;const w=new kt;w.layers.enable(1),w.viewport=new Je;const T=new kt;T.layers.enable(2),T.viewport=new Je;const L=[w,T],M=new ep;M.layers.enable(1),M.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=y[H];return Z===void 0&&(Z=new Ja,y[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=y[H];return Z===void 0&&(Z=new Ja,y[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=y[H];return Z===void 0&&(Z=new Ja,y[H]=Z),Z.getHandSpace()};function k(H){const Z=x.indexOf(H.inputSource);if(Z===-1)return;const ae=y[Z];ae!==void 0&&(ae.update(H.inputSource,H.frame,c||o),ae.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",R);for(let H=0;H<y.length;H++){const Z=x[H];Z!==null&&(x[H]=null,y[H].disconnect(Z))}S=null,O=null,e.setRenderTarget(p),f=null,d=null,u=null,i=null,m=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",N),i.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new dn(f.framebufferWidth,f.framebufferHeight,{format:on,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ae=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Di:oi,ae=_.stencil?ri:Gn);const ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new dn(d.textureWidth,d.textureHeight,{format:on,type:Xn,depthTexture:new sh(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(m);be.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(H){for(let Z=0;Z<H.removed.length;Z++){const ae=H.removed[Z],ye=x.indexOf(ae);ye>=0&&(x[ye]=null,y[ye].disconnect(ae))}for(let Z=0;Z<H.added.length;Z++){const ae=H.added[Z];let ye=x.indexOf(ae);if(ye===-1){for(let be=0;be<y.length;be++)if(be>=x.length){x.push(ae),ye=be;break}else if(x[be]===null){x[be]=ae,ye=be;break}if(ye===-1)break}const ge=y[ye];ge&&ge.connect(ae)}}const F=new C,D=new C;function z(H,Z,ae){F.setFromMatrixPosition(Z.matrixWorld),D.setFromMatrixPosition(ae.matrixWorld);const ye=F.distanceTo(D),ge=Z.projectionMatrix.elements,be=ae.projectionMatrix.elements,Pe=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),Ye=(ge[9]+1)/ge[5],G=(ge[9]-1)/ge[5],Dt=(ge[8]-1)/ge[0],Te=(be[8]+1)/be[0],Ne=Pe*Dt,ve=Pe*Te,dt=ye/(-Dt+Te),Ge=dt*-Dt;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ge),H.translateZ(dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const P=Pe+dt,b=Ae+dt,X=Ne-Ge,ne=ve+(ye-Ge),te=Ye*Ae/b*P,se=G*Ae/b*P;H.projectionMatrix.makePerspective(X,ne,te,se,P,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=T.near=w.near=H.near,M.far=T.far=w.far=H.far,(S!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,O=M.far);const Z=H.parent,ae=M.cameras;V(M,Z);for(let ye=0;ye<ae.length;ye++)V(ae[ye],Z);ae.length===2?z(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),K(H,M,Z)};function K(H,Z,ae){ae===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ae.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=xs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let Y=null;function J(H,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let ye=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let ge=0;ge<ae.length;ge++){const be=ae[ge];let Pe=null;if(f!==null)Pe=f.getViewport(be);else{const Ye=u.getViewSubImage(d,be);Pe=Ye.viewport,ge===0&&(e.setRenderTargetTextures(m,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(m))}let Ae=L[ge];Ae===void 0&&(Ae=new kt,Ae.layers.enable(ge),Ae.viewport=new Je,L[ge]=Ae),Ae.matrix.fromArray(be.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(be.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ge===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(Ae)}}for(let ae=0;ae<y.length;ae++){const ye=x[ae],ge=y[ae];ye!==null&&ge!==void 0&&ge.update(ye,Z,c||o)}Y&&Y(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ie=new Xf;ie.setAnimationLoop(J),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}function my(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gy(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(y,E);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const v=s.createBuffer(),E=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],v=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,T=v.length;w<T;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=L.length;M<S;M++){const O=L[M];if(f(O,w,M,E)===!0){const k=O.__offset,N=Array.isArray(O.value)?O.value:[O.value];let R=0;for(let F=0;F<N.length;F++){const D=N[F],z=_(D);typeof D=="number"||typeof D=="boolean"?(O.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,k+R,O.__data)):D.isMatrix3?(O.__data[0]=D.elements[0],O.__data[1]=D.elements[1],O.__data[2]=D.elements[2],O.__data[3]=0,O.__data[4]=D.elements[3],O.__data[5]=D.elements[4],O.__data[6]=D.elements[5],O.__data[7]=0,O.__data[8]=D.elements[6],O.__data[9]=D.elements[7],O.__data[10]=D.elements[8],O.__data[11]=0):(D.toArray(O.__data,R),R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,v,E){const w=y.value,T=x+"_"+v;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const L=E[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return E[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(y){const x=y.uniforms;let v=0;const E=16;for(let T=0,L=x.length;T<L;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,O=M.length;S<O;S++){const k=M[S],N=Array.isArray(k.value)?k.value:[k.value];for(let R=0,F=N.length;R<F;R++){const D=N[R],z=_(D),V=v%E;V!==0&&E-V<z.boundary&&(v+=E-V),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=z.storage}}}const w=v%E;return w>0&&(v+=E-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class rh{constructor(e={}){const{canvas:t=kf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let v=!1,E=0,w=0,T=null,L=-1,M=null;const S=new Je,O=new Je;let k=null;const N=new Q(0);let R=0,F=t.width,D=t.height,z=1,V=null,K=null;const Y=new Je(0,0,F,D),J=new Je(0,0,F,D);let ie=!1;const H=new ua;let Z=!1,ae=!1,ye=null;const ge=new fe,be=new ue,Pe=new C,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return T===null?z:1}let G=n;function Dt(A,B){for(let j=0;j<A.length;j++){const q=A[j],W=t.getContext(q,B);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",le,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),G=Dt(B,A),G===null)throw Dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,Ne,ve,dt,Ge,P,b,X,ne,te,se,Me,he,_e,Ce,Ve,ee,it,Ke,De,we,xe,ze,nt;function _t(){Te=new P_(G),Ne=new b_(G,Te,e),Te.init(Ne),xe=new Qf(G,Te,Ne),ve=new uy(G,Te,Ne),dt=new D_(G),Ge=new Qx,P=new dy(G,Te,ve,Ge,Ne,xe,dt),b=new E_(x),X=new C_(x),ne=new Hm(G,Ne),ze=new S_(G,Te,ne,Ne),te=new I_(G,ne,dt,ze),se=new O_(G,te,ne,dt),Ke=new F_(G,Ne,P),Ve=new T_(Ge),Me=new Jx(x,b,X,Te,Ne,ze,Ve),he=new my(x,Ge),_e=new ty,Ce=new ay(Te,Ne),it=new M_(x,b,X,ve,se,d,l),ee=new hy(x,se,Ne),nt=new gy(G,dt,Ne,ve),De=new w_(G,Te,dt,Ne),we=new L_(G,Te,dt,Ne),dt.programs=Me.programs,x.capabilities=Ne,x.extensions=Te,x.properties=Ge,x.renderLists=_e,x.shadowMap=ee,x.state=ve,x.info=dt}_t();const je=new py(x,G);this.xr=je,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(F,D,!1))},this.getSize=function(A){return A.set(F,D)},this.setSize=function(A,B,j=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,D=B,t.width=Math.floor(A*z),t.height=Math.floor(B*z),j===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(F*z,D*z).floor()},this.setDrawingBufferSize=function(A,B,j){F=A,D=B,z=j,t.width=Math.floor(A*j),t.height=Math.floor(B*j),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,B,j,q){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,B,j,q),ve.viewport(S.copy(Y).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,B,j,q){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,B,j,q),ve.scissor(O.copy(J).multiplyScalar(z).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){ve.setScissorTest(ie=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(A=!0,B=!0,j=!0){let q=0;if(A){let W=!1;if(T!==null){const pe=T.texture.format;W=pe===Wc||pe===Vc||pe===Gc}if(W){const pe=T.texture.type,Se=pe===Xn||pe===Gn||pe===oa||pe===ri||pe===zc||pe===Hc,Re=it.getClearColor(),Le=it.getClearAlpha(),We=Re.r,Fe=Re.g,ke=Re.b;Se?(f[0]=We,f[1]=Fe,f[2]=ke,f[3]=Le,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=We,g[1]=Fe,g[2]=ke,g[3]=Le,G.clearBufferiv(G.COLOR,0,g))}else q|=G.COLOR_BUFFER_BIT}B&&(q|=G.DEPTH_BUFFER_BIT),j&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",le,!1),_e.dispose(),Ce.dispose(),Ge.dispose(),b.dispose(),X.dispose(),se.dispose(),ze.dispose(),nt.dispose(),Me.dispose(),je.dispose(),je.removeEventListener("sessionstart",Kt),je.removeEventListener("sessionend",ht),ye&&(ye.dispose(),ye=null),$t.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=dt.autoReset,B=ee.enabled,j=ee.autoUpdate,q=ee.needsUpdate,W=ee.type;_t(),dt.autoReset=A,ee.enabled=B,ee.autoUpdate=j,ee.needsUpdate=q,ee.type=W}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const B=A.target;B.removeEventListener("dispose",ce),Ie(B)}function Ie(A){Ee(A),Ge.remove(A)}function Ee(A){const B=Ge.get(A).programs;B!==void 0&&(B.forEach(function(j){Me.releaseProgram(j)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,j,q,W,pe){B===null&&(B=Ae);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Re=nm(A,B,j,q,W);ve.setMaterial(q,Se);let Le=j.index,We=1;if(q.wireframe===!0){if(Le=te.getWireframeAttribute(j),Le===void 0)return;We=2}const Fe=j.drawRange,ke=j.attributes.position;let vt=Fe.start*We,nn=(Fe.start+Fe.count)*We;pe!==null&&(vt=Math.max(vt,pe.start*We),nn=Math.min(nn,(pe.start+pe.count)*We)),Le!==null?(vt=Math.max(vt,0),nn=Math.min(nn,Le.count)):ke!=null&&(vt=Math.max(vt,0),nn=Math.min(nn,ke.count));const Nt=nn-vt;if(Nt<0||Nt===1/0)return;ze.setup(W,q,Re,j,Le);let Un,ft=De;if(Le!==null&&(Un=ne.get(Le),ft=we,ft.setIndex(Un)),W.isMesh)q.wireframe===!0?(ve.setLineWidth(q.wireframeLinewidth*Ye()),ft.setMode(G.LINES)):ft.setMode(G.TRIANGLES);else if(W.isLine){let qe=q.linewidth;qe===void 0&&(qe=1),ve.setLineWidth(qe*Ye()),W.isLineSegments?ft.setMode(G.LINES):W.isLineLoop?ft.setMode(G.LINE_LOOP):ft.setMode(G.LINE_STRIP)}else W.isPoints?ft.setMode(G.POINTS):W.isSprite&&ft.setMode(G.TRIANGLES);if(W.isBatchedMesh)ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ft.renderInstances(vt,Nt,W.count);else if(j.isInstancedBufferGeometry){const qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ea=Math.min(j.instanceCount,qe);ft.renderInstances(vt,Nt,Ea)}else ft.render(vt,Nt)};function lt(A,B,j){A.transparent===!0&&A.side===At&&A.forceSinglePass===!1?(A.side=qt,A.needsUpdate=!0,Br(A,B,j),A.side=fn,A.needsUpdate=!0,Br(A,B,j),A.side=At):Br(A,B,j)}this.compile=function(A,B,j=null){j===null&&(j=A),p=Ce.get(j),p.init(),y.push(p),j.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==j&&A.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(x._useLegacyLights);const q=new Set;return A.traverse(function(W){const pe=W.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Re=pe[Se];lt(Re,j,W),q.add(Re)}else lt(pe,j,W),q.add(pe)}),y.pop(),p=null,q},this.compileAsync=function(A,B,j=null){const q=this.compile(A,B,j);return new Promise(W=>{function pe(){if(q.forEach(function(Se){Ge.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){W(A);return}setTimeout(pe,10)}Te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ct=null;function Ut(A){ct&&ct(A)}function Kt(){$t.stop()}function ht(){$t.start()}const $t=new Xf;$t.setAnimationLoop(Ut),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(A){ct=A,je.setAnimationLoop(A),A===null?$t.stop():$t.start()},je.addEventListener("sessionstart",Kt),je.addEventListener("sessionend",ht),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(B),B=je.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,T),p=Ce.get(A,y.length),p.init(),y.push(p),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,Z=Ve.init(this.clippingPlanes,ae),_=_e.get(A,m.length),_.init(),m.push(_),wn(A,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,K),this.info.render.frame++,Z===!0&&Ve.beginShadows();const j=p.state.shadowsArray;if(ee.render(j,A,B),Z===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(_,A),p.setupLights(x._useLegacyLights),B.isArrayCamera){const q=B.cameras;for(let W=0,pe=q.length;W<pe;W++){const Se=q[W];wh(_,A,Se,Se.viewport)}}else wh(_,A,B);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,B),ze.resetDefaultState(),L=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function wn(A,B,j,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){q&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);const Se=se.update(A),Re=A.material;Re.visible&&_.push(A,Se,Re,j,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){const Se=se.update(A),Re=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Pe.copy(Se.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Re)){const Le=Se.groups;for(let We=0,Fe=Le.length;We<Fe;We++){const ke=Le[We],vt=Re[ke.materialIndex];vt&&vt.visible&&_.push(A,Se,vt,j,Pe.z,ke)}}else Re.visible&&_.push(A,Se,Re,j,Pe.z,null)}}const pe=A.children;for(let Se=0,Re=pe.length;Se<Re;Se++)wn(pe[Se],B,j,q)}function wh(A,B,j,q){const W=A.opaque,pe=A.transmissive,Se=A.transparent;p.setupLightsView(j),Z===!0&&Ve.setGlobalState(x.clippingPlanes,j),pe.length>0&&tm(W,pe,B,j),q&&ve.viewport(S.copy(q)),W.length>0&&kr(W,B,j),pe.length>0&&kr(pe,B,j),Se.length>0&&kr(Se,B,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function tm(A,B,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const pe=Ne.isWebGL2;ye===null&&(ye=new dn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Pn:Xn,minFilter:li,samples:pe?4:0})),x.getDrawingBufferSize(be),pe?ye.setSize(be.x,be.y):ye.setSize(Jo(be.x),Jo(be.y));const Se=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(N),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Wn,kr(A,j,q),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye);let Le=!1;for(let We=0,Fe=B.length;We<Fe;We++){const ke=B[We],vt=ke.object,nn=ke.geometry,Nt=ke.material,Un=ke.group;if(Nt.side===At&&vt.layers.test(q.layers)){const ft=Nt.side;Nt.side=qt,Nt.needsUpdate=!0,bh(vt,j,q,nn,Nt,Un),Nt.side=ft,Nt.needsUpdate=!0,Le=!0}}Le===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye)),x.setRenderTarget(Se),x.setClearColor(N,R),x.toneMapping=Re}function kr(A,B,j){const q=B.isScene===!0?B.overrideMaterial:null;for(let W=0,pe=A.length;W<pe;W++){const Se=A[W],Re=Se.object,Le=Se.geometry,We=q===null?Se.material:q,Fe=Se.group;Re.layers.test(j.layers)&&bh(Re,B,j,Le,We,Fe)}}function bh(A,B,j,q,W,pe){A.onBeforeRender(x,B,j,q,W,pe),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,B,j,q,A,pe),W.transparent===!0&&W.side===At&&W.forceSinglePass===!1?(W.side=qt,W.needsUpdate=!0,x.renderBufferDirect(j,B,q,W,A,pe),W.side=fn,W.needsUpdate=!0,x.renderBufferDirect(j,B,q,W,A,pe),W.side=At):x.renderBufferDirect(j,B,q,W,A,pe),A.onAfterRender(x,B,j,q,W,pe)}function Br(A,B,j){B.isScene!==!0&&(B=Ae);const q=Ge.get(A),W=p.state.lights,pe=p.state.shadowsArray,Se=W.state.version,Re=Me.getParameters(A,W.state,pe,B,j),Le=Me.getProgramCacheKey(Re);let We=q.programs;q.environment=A.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(A.isMeshStandardMaterial?X:b).get(A.envMap||q.environment),We===void 0&&(A.addEventListener("dispose",ce),We=new Map,q.programs=We);let Fe=We.get(Le);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Se)return Eh(A,Re),Fe}else Re.uniforms=Me.getUniforms(A),A.onBuild(j,Re,x),A.onBeforeCompile(Re,x),Fe=Me.acquireProgram(Re,Le),We.set(Le,Fe),q.uniforms=Re.uniforms;const ke=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Ve.uniform),Eh(A,Re),q.needsLights=sm(A),q.lightsStateVersion=Se,q.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function Th(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Go.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Eh(A,B){const j=Ge.get(A);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function nm(A,B,j,q,W){B.isScene!==!0&&(B=Ae),P.resetTextureUnits();const pe=B.fog,Se=q.isMeshStandardMaterial?B.environment:null,Re=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Pt,Le=(q.isMeshStandardMaterial?X:b).get(q.envMap||Se),We=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,nn=!!j.morphAttributes.color;let Nt=Wn;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=x.toneMapping);const Un=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=Un!==void 0?Un.length:0,qe=Ge.get(q),Ea=p.state.lights;if(Z===!0&&(ae===!0||A!==M)){const ln=A===M&&q.id===L;Ve.setState(q,A,ln)}let xt=!1;q.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ea.state.version||qe.outputColorSpace!==Re||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||qe.envMap!==Le||q.fog===!0&&qe.fog!==pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==We||qe.vertexTangents!==Fe||qe.morphTargets!==ke||qe.morphNormals!==vt||qe.morphColors!==nn||qe.toneMapping!==Nt||Ne.isWebGL2===!0&&qe.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,qe.__version=q.version);let mi=qe.currentProgram;xt===!0&&(mi=Br(q,B,W));let Ah=!1,Ds=!1,Aa=!1;const Ht=mi.getUniforms(),gi=qe.uniforms;if(ve.useProgram(mi.program)&&(Ah=!0,Ds=!0,Aa=!0),q.id!==L&&(L=q.id,Ds=!0),Ah||M!==A){Ht.setValue(G,"projectionMatrix",A.projectionMatrix),Ht.setValue(G,"viewMatrix",A.matrixWorldInverse);const ln=Ht.map.cameraPosition;ln!==void 0&&ln.setValue(G,Pe.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&Ht.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ht.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Ds=!0,Aa=!0)}if(W.isSkinnedMesh){Ht.setOptional(G,W,"bindMatrix"),Ht.setOptional(G,W,"bindMatrixInverse");const ln=W.skeleton;ln&&(Ne.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Ht.setValue(G,"boneTexture",ln.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ht.setOptional(G,W,"batchingTexture"),Ht.setValue(G,"batchingTexture",W._matricesTexture,P));const Ra=j.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0&&Ne.isWebGL2===!0)&&Ke.update(W,j,mi),(Ds||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,Ht.setValue(G,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gi.envMap.value=Le,gi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ds&&(Ht.setValue(G,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&im(gi,Aa),pe&&q.fog===!0&&he.refreshFogUniforms(gi,pe),he.refreshMaterialUniforms(gi,q,z,D,ye),Go.upload(G,Th(qe),gi,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Go.upload(G,Th(qe),gi,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ht.setValue(G,"center",W.center),Ht.setValue(G,"modelViewMatrix",W.modelViewMatrix),Ht.setValue(G,"normalMatrix",W.normalMatrix),Ht.setValue(G,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ln=q.uniformsGroups;for(let Ca=0,rm=ln.length;Ca<rm;Ca++)if(Ne.isWebGL2){const Rh=ln[Ca];nt.update(Rh,mi),nt.bind(Rh,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function im(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function sm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,B,j){Ge.get(A.texture).__webglTexture=B,Ge.get(A.depthTexture).__webglTexture=j;const q=Ge.get(A);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const j=Ge.get(A);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,j=0){T=A,E=B,w=j;let q=!0,W=null,pe=!1,Se=!1;if(A){const Le=Ge.get(A);Le.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(G.FRAMEBUFFER,null),q=!1):Le.__webglFramebuffer===void 0?P.setupRenderTarget(A):Le.__hasExternalTextures&&P.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Se=!0);const Fe=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?W=Fe[B][j]:W=Fe[B],pe=!0):Ne.isWebGL2&&A.samples>0&&P.useMultisampledRTT(A)===!1?W=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[j]:W=Fe,S.copy(A.viewport),O.copy(A.scissor),k=A.scissorTest}else S.copy(Y).multiplyScalar(z).floor(),O.copy(J).multiplyScalar(z).floor(),k=ie;if(ve.bindFramebuffer(G.FRAMEBUFFER,W)&&Ne.drawBuffers&&q&&ve.drawBuffers(A,W),ve.viewport(S),ve.scissor(O),ve.setScissorTest(k),pe){const Le=Ge.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,j)}else if(Se){const Le=Ge.get(A.texture),We=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Le.__webglTexture,j||0,We)}L=-1},this.readRenderTargetPixels=function(A,B,j,q,W,pe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){ve.bindFramebuffer(G.FRAMEBUFFER,Re);try{const Le=A.texture,We=Le.format,Fe=Le.type;if(We!==on&&xe.convert(We)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Pn&&(Te.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Fe!==Xn&&xe.convert(Fe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===An&&(Ne.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&j>=0&&j<=A.height-W&&G.readPixels(B,j,q,W,xe.convert(We),xe.convert(Fe),pe)}finally{const Le=T!==null?Ge.get(T).__webglFramebuffer:null;ve.bindFramebuffer(G.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,B,j=0){const q=Math.pow(2,-j),W=Math.floor(B.image.width*q),pe=Math.floor(B.image.height*q);P.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,A.x,A.y,W,pe),ve.unbindTexture()},this.copyTextureToTexture=function(A,B,j,q=0){const W=B.image.width,pe=B.image.height,Se=xe.convert(j.format),Re=xe.convert(j.type);P.setTexture2D(j,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,q,A.x,A.y,W,pe,Se,Re,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,q,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Se,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,q,A.x,A.y,Se,Re,B.image),q===0&&j.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,B,j,q,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Le=xe.convert(q.format),We=xe.convert(q.type);let Fe;if(q.isData3DTexture)P.setTexture3D(q,0),Fe=G.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)P.setTexture2DArray(q,0),Fe=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ke=G.getParameter(G.UNPACK_ROW_LENGTH),vt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),nn=G.getParameter(G.UNPACK_SKIP_PIXELS),Nt=G.getParameter(G.UNPACK_SKIP_ROWS),Un=G.getParameter(G.UNPACK_SKIP_IMAGES),ft=j.isCompressedTexture?j.mipmaps[W]:j.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?G.texSubImage3D(Fe,W,B.x,B.y,B.z,pe,Se,Re,Le,We,ft.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,W,B.x,B.y,B.z,pe,Se,Re,Le,ft.data)):G.texSubImage3D(Fe,W,B.x,B.y,B.z,pe,Se,Re,Le,We,ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,ke),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Un),W===0&&q.generateMipmaps&&G.generateMipmap(Fe),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,ve.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===la?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?ai:Yc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ai?tt:Pt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tp extends rh{}tp.prototype.isWebGL1Renderer=!0;class Mr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Q(e),this.near=t,this.far=n}clone(){return new Mr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class np extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class oh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new C;class Ms{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ms(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sr extends Yt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ts;const ks=new C,ns=new C,is=new C,ss=new ue,Bs=new ue,ip=new fe,lo=new C,zs=new C,co=new C,fu=new ue,Qa=new ue,pu=new ue;class fa extends et{constructor(e=new Sr){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oh(t,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new Ms(n,3,0,!1)),ts.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=ts,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ho(lo.set(-.5,-.5,0),is,o,ns,i,r),ho(zs.set(.5,-.5,0),is,o,ns,i,r),ho(co.set(.5,.5,0),is,o,ns,i,r),fu.set(0,0),Qa.set(1,0),pu.set(1,1);let a=e.ray.intersectTriangle(lo,zs,co,!1,ks);if(a===null&&(ho(zs.set(-.5,.5,0),is,o,ns,i,r),Qa.set(0,1),a=e.ray.intersectTriangle(lo,co,zs,!1,ks),a===null))return;const l=e.ray.origin.distanceTo(ks);l<e.near||l>e.far||t.push({distance:l,point:ks.clone(),uv:tn.getInterpolation(ks,lo,zs,co,fu,Qa,pu,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ho(s,e,t,n,i,r){ss.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Bs.x=r*ss.x-i*ss.y,Bs.y=i*ss.x+r*ss.y):Bs.copy(ss),s.copy(e),s.x+=Bs.x,s.y+=Bs.y,s.applyMatrix4(ip)}const mu=new C,gu=new Je,_u=new Je,_y=new C,xu=new fe,uo=new C,el=new Mn,yu=new fe,tl=new As;class ah extends ${constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hl,this.bindMatrix=new fe,this.bindMatrixInverse=new fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(i),e.ray.intersectsSphere(el)!==!1&&(yu.copy(i).invert(),tl.copy(e.ray).applyMatrix4(yu),!(this.boundingBox!==null&&tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;gu.fromBufferAttribute(i.attributes.skinIndex,e),_u.fromBufferAttribute(i.attributes.skinWeight,e),mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=_u.getComponent(r);if(o!==0){const a=gu.getComponent(r);xu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_y.copy(mu).applyMatrix4(xu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class dr extends et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sp extends yt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Tt,h=Tt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new fe,xy=new fe;class wr{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:xy;vu.multiplyMatrices(a,t[r]),vu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sp(t,e,e,on,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new dr),this.bones.push(o),this.boneInverses.push(new fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ss extends rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new fe,Mu=new fe,fo=[],Su=new an,yy=new fe,Hs=new $,Gs=new Mn;class ci extends ${constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Su.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(Su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Gs.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rs),Mu.multiplyMatrices(n,rs),Hs.matrixWorld=Mu,Hs.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=r,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wu=new C,bu=new C,Tu=new fe,nl=new As,po=new Mn;class br extends et{constructor(e=new ot,t=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)wu.fromBufferAttribute(t,i-1),bu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wu.distanceTo(bu);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Tu.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=m,v=y-1;x<v;x+=f){const E=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(p,E),h.fromBufferAttribute(p,w),nl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let x=m,v=y-1;x<v;x+=f){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),nl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Eu=new C,Au=new C;class Tr extends br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Eu.fromBufferAttribute(t,i),Au.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eu.distanceTo(Au);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rp extends br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pa extends Yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ru=new fe,xc=new As,mo=new Mn,go=new C;class ma extends et{constructor(e=new ot,t=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Ru.copy(i).invert(),xc.copy(e.ray).applyMatrix4(Ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);go.fromBufferAttribute(u,p),Cu(go,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)go.fromBufferAttribute(u,g),Cu(go,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cu(s,e,t,n,i,r,o){const a=xc.distanceSqToPoint(s);if(a<t){const l=new C;xc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Er extends yt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lh{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ue:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],o=[],a=new C,l=new fe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Et(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Et(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function ch(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const _o=new C,il=new ch,sl=new ch,rl=new ch;class op extends lh{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(_o.subVectors(i[0],i[1]).add(i[0]),c=_o);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(_o.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),rl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),rl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ga extends ot{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Et(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,d=new ue,f=new C,g=new C,_=new C;let p=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){const x=n+y*h*i,v=Math.sin(x),E=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*E,o.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),a.push(d.x,d.y);const T=l[3*w+0]*v,L=l[3*w+1],M=l[3*w+0]*E;c.push(T,L,M)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,E=v,w=v+e.length,T=v+e.length+1,L=v+1;r.push(E,w,L),r.push(T,L,w)}this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("uv",new Ue(a,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.points,e.segments,e.phiStart,e.phiLength)}}class Ar extends ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new C,h=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zt extends ot{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function y(){const v=new C,E=new C;let w=0;const T=(t-e)/n;for(let L=0;L<=r;L++){const M=[],S=L/r,O=S*(t-e)+e;for(let k=0;k<=i;k++){const N=k/i,R=N*l+a,F=Math.sin(R),D=Math.cos(R);E.x=O*F,E.y=-S*n+p,E.z=O*D,u.push(E.x,E.y,E.z),v.set(F,T,D).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-S),M.push(g++)}_.push(M)}for(let L=0;L<i;L++)for(let M=0;M<r;M++){const S=_[M][L],O=_[M+1][L],k=_[M+1][L+1],N=_[M][L+1];h.push(S,O,N),h.push(O,k,N),w+=6}c.addGroup(m,w,0),m+=w}function x(v){const E=g,w=new ue,T=new C;let L=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,p*S,0),d.push(0,S,0),f.push(.5,.5),g++;const O=g;for(let k=0;k<=i;k++){const R=k/i*l+a,F=Math.cos(R),D=Math.sin(R);T.x=M*D,T.y=p*S,T.z=M*F,u.push(T.x,T.y,T.z),d.push(0,S,0),w.x=F*.5+.5,w.y=D*.5*S+.5,f.push(w.x,w.y),g++}for(let k=0;k<i;k++){const N=E+k,R=O+k;v===!0?h.push(R,R+1,N):h.push(R+1,R,N),L+=3}c.addGroup(m,L,v===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pi extends zt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rr extends ot{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new C,v=new C,E=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],v),f(t[w+2],E),l(x,v,E,y)}function l(y,x,v,E){const w=E+1,T=[];for(let L=0;L<=w;L++){T[L]=[];const M=y.clone().lerp(v,L/w),S=x.clone().lerp(v,L/w),O=w-L;for(let k=0;k<=O;k++)k===0&&L===w?T[L][k]=M:T[L][k]=M.clone().lerp(S,k/O)}for(let L=0;L<w;L++)for(let M=0;M<2*(w-L)-1;M++){const S=Math.floor(M/2);M%2===0?(d(T[L][S+1]),d(T[L+1][S]),d(T[L][S])):(d(T[L][S+1]),d(T[L+1][S+1]),d(T[L+1][S]))}}function c(y){const x=new C;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=p(y)/2/Math.PI+.5,E=m(y)/Math.PI+.5;o.push(v,1-E)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],E=o[y+4],w=Math.max(x,v,E),T=Math.min(x,v,E);w>.9&&T<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const y=new C,x=new C,v=new C,E=new C,w=new ue,T=new ue,L=new ue;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),E.copy(y).add(x).add(v).divideScalar(3);const O=p(E);_(w,S+0,y,O),_(T,S+2,x,O),_(L,S+4,v,O)}}function _(y,x,v,E){E<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=E/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.vertices,e.indices,e.radius,e.details)}}class _a extends Rr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _a(e.radius,e.detail)}}const xo=new C,yo=new C,ol=new C,vo=new tn;class xa extends ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ps*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=vo;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),vo.getNormal(ol),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=u[y],E=u[x],w=vo[h[y]],T=vo[h[x]],L=`${v}_${E}`,M=`${E}_${v}`;M in d&&d[M]?(ol.dot(d[M].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(T.x,T.y,T.z)),d[M]=null):L in d||(d[L]={index0:c[y],index1:c[x],normal:ol.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];xo.fromBufferAttribute(a,_),yo.fromBufferAttribute(a,p),f.push(xo.x,xo.y,xo.z),f.push(yo.x,yo.y,yo.z)}this.setAttribute("position",new Ue(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const vy={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ap(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=Ty(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return fr(r,o,t,a,l,f,0),o}};function ap(s,e,t,n,i){let r,o;if(i===Fy(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Pu(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Pu(r,s[r],s[r+1],o);return o&&ya(o,o.next)&&(mr(o),o=o.next),o}function Ni(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ya(t,t.next)||gt(t.prev,t,t.next)===0)){if(mr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Py(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Sy(s,n,i,r):My(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),mr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=wy(Ni(s),e,t),fr(s,e,t,n,i,r,2)):o===2&&by(s,e,t,n,i,r):fr(Ni(s),e,t,n,i,r,1);break}}}function My(s){const e=s.prev,t=s,n=s.next;if(gt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fs(i,a,r,l,o,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sy(s,e,t,n){const i=s.prev,r=s,o=s.next;if(gt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=yc(f,g,e,t,n),y=yc(_,p,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&fs(a,h,l,u,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&fs(a,h,l,u,c,d,v.x,v.y)&&gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&fs(a,h,l,u,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&fs(a,h,l,u,c,d,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wy(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ya(i,r)&&lp(i,n,n.next,r)&&pr(i,r)&&pr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),mr(n),mr(n.next),n=s=r),n=n.next}while(n!==s);return Ni(n)}function by(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dy(o,a)){let l=cp(o,a);o=Ni(o,o.next),l=Ni(l,l.next),fr(o,e,t,n,i,r,0),fr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ty(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=ap(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ly(c));for(i.sort(Ey),r=0;r<i.length;r++)t=Ay(i[r],t);return t}function Ey(s,e){return s.x-e.x}function Ay(s,e){const t=Ry(s,e);if(!t)return e;const n=cp(t,s);return Ni(n,n.next),Ni(t,t.next)}function Ry(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&fs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),pr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Cy(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Cy(s,e){return gt(s.prev,s,e.prev)<0&&gt(e.next,s,s.next)<0}function Py(s,e,t,n){let i=s;do i.z===0&&(i.z=yc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Iy(i)}function Iy(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function yc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ly(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function fs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Dy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Uy(s,e)&&(pr(s,e)&&pr(e,s)&&Ny(s,e)&&(gt(s.prev,s,e.prev)||gt(s,e.prev,e))||ya(s,e)&&gt(s.prev,s,s.next)>0&&gt(e.prev,e,e.next)>0)}function gt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ya(s,e){return s.x===e.x&&s.y===e.y}function lp(s,e,t,n){const i=So(gt(s,e,t)),r=So(gt(s,e,n)),o=So(gt(t,n,s)),a=So(gt(t,n,e));return!!(i!==r&&o!==a||i===0&&Mo(s,t,e)||r===0&&Mo(s,n,e)||o===0&&Mo(t,s,n)||a===0&&Mo(t,e,n))}function Mo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function So(s){return s>0?1:s<0?-1:0}function Uy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&lp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function pr(s,e){return gt(s.prev,s,s.next)<0?gt(s,e,s.next)>=0&&gt(s,s.prev,e)>=0:gt(s,e,s.prev)<0||gt(s,s.next,e)<0}function Ny(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function cp(s,e){const t=new vc(s.i,s.x,s.y),n=new vc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pu(s,e,t,n){const i=new vc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fy(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class va{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return va.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Iu(e),Lu(n,e);let o=e.length;t.forEach(Iu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Lu(n,t[l]);const a=vy.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Iu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Lu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Cr extends Rr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cr(e.radius,e.detail)}}class Pr extends ot{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new C,g=new ue;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const y=m+p,x=y,v=y+n+1,E=y+n+2,w=y+1;a.push(x,v,w),a.push(v,E,w)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bt extends ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const w=E/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(w+v,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const x=h[m][y+1],v=h[m][y],E=h[m+1][y],w=h[m+1][y+1];(m!==0||o>0)&&f.push(x,v,w),(m!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hp extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oe extends Yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vo extends Yt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Q(16777215),this.specular=new Q(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Yt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function wo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Oy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ky(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Du(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function up(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ps{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dp extends Ps{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ei,endingEnd:Ei}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ai:r=e,a=2*t-n;break;case or:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ai:o=e,l=2*n-t;break;case or:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,y=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+y*o[c+E]+x*o[l+E]+v*o[u+E];return r}}class hh extends Ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class fp extends Ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case Ui:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return Ui;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Oy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ui;class ki extends Sn{}ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=_s;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;class uh extends Sn{}uh.prototype.ValueTypeName="color";class ui extends Sn{}ui.prototype.ValueTypeName="number";class pp extends Ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)mt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class In extends Sn{InterpolantFactoryMethodLinear(e){return new pp(this.times,this.values,this.getValueSize(),e)}}In.prototype.ValueTypeName="quaternion";In.prototype.DefaultInterpolation=Ui;In.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends Sn{}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=_s;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class di extends Sn{}di.prototype.ValueTypeName="vector";class ws{constructor(e,t=-1,n,i=aa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zy(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=ky(l);l=Du(l,1,h),c=Du(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ui(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];up(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new ui(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(di,f+".position",d,"pos",i),n(In,f+".quaternion",d,"rot",i),n(di,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function By(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ui;case"vector":case"vector2":case"vector3":case"vector4":return di;case"color":return uh;case"quaternion":return In;case"bool":case"boolean":return ki;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function zy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=By(s.type);if(s.times===void 0){const t=[],n=[];up(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mp{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const gp=new mp;class Ln{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ln.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class Hy extends Error{constructor(e,t){super(e),this.response=t}}class Ma extends Ln{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:i});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=zn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:v})=>{if(x)m.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,T=h.length;w<T;w++){const L=h[w];L.onProgress&&L.onProgress(E)}m.enqueue(v),y()}})}}});return new Response(p)}else throw new Hy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Vn.add(e,c);const h=zn[e];delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _p extends Ln{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ur("img");function l(){h(),Vn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ir extends Ln{constructor(e){super(e)}load(e,t,n,i){const r=new yt,o=new _p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Is extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Q(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class xp extends Is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const al=new fe,Uu=new C,Nu=new C;class dh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gy extends dh{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fh extends Is{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fu=new fe,Vs=new C,ll=new C;class Vy extends dh{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),i.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class Qo extends Is{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wy extends dh{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sa extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new Wy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ph extends Is{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ci{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yp extends Ln{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Vn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vn.add(e,l),r.manager.itemStart(e)}}class mh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ou();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ou(){return(typeof performance>"u"?Date:performance).now()}class vp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){mt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;mt.multiplyQuaternionsFlat(e,o,e,t,e,n),mt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const gh="\\[\\]\\.:\\/",Xy=new RegExp("["+gh+"]","g"),_h="[^"+gh+"]",jy="[^"+gh.replace("\\.","")+"]",qy=/((?:WC+[\/:])*)/.source.replace("WC",_h),Yy=/(WCOD+)?/.source.replace("WCOD",jy),Ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),$y=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),Zy=new RegExp("^"+qy+Yy+Ky+$y+"$"),Jy=["material","materials","bones","map"];class Qy{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xy,"")}static parseTrackName(e){const t=Zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Jy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Qy;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ei,endingEnd:Ei};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Tf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case aa:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===bf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Yo){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ai,i.endingEnd=Ai):(e?i.endingStart=this.zeroSlopeAtStart?Ai:Ei:i.endingStart=or,t?i.endingEnd=this.zeroSlopeAtEnd?Ai:Ei:i.endingEnd=or)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const ev=new Float32Array(1);class Sp extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new vp(Ze.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hh(new Float32Array(2),new Float32Array(2),1,ev),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?ws.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=aa),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Mp(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ws.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class xh{constructor(e,t,n=0,i=1/0){this.ray=new As(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(ku),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mc(e[i],this,n,t);return n.sort(ku),n}}function ku(s,e){return s.distance-e.distance}function Mc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)Mc(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);const wp=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ra,AddEquation:ni,AddOperation:ff,AdditiveAnimationBlendMode:Tf,AdditiveBlending:Pi,AgXToneMapping:Fc,AlphaFormat:xf,AlwaysCompare:Ff,AlwaysDepth:of,AlwaysStencilFunc:fc,AmbientLight:ph,AnimationAction:Mp,AnimationClip:ws,AnimationMixer:Sp,ArrayCamera:ep,AttachedBindMode:Hl,BackSide:qt,BasicDepthPacking:Af,Bone:dr,BooleanKeyframeTrack:ki,Box3:an,BoxGeometry:me,BufferAttribute:rt,BufferGeometry:ot,ByteType:gf,Cache:Vn,Camera:th,CanvasTexture:Er,CatmullRomCurve3:op,CineonToneMapping:Nc,CircleGeometry:Ar,ClampToEdgeWrapping:Rt,Clock:mh,Color:Q,ColorKeyframeTrack:uh,ColorManagement:Qe,ConeGeometry:pi,ConstantAlphaFactor:nf,ConstantColorFactor:ef,CubeCamera:Vf,CubeReflectionMapping:Ii,CubeRefractionMapping:Li,CubeTexture:nh,CubeUVReflectionMapping:xr,CubicInterpolant:dp,CullFaceBack:Fl,CullFaceFront:Hd,CullFaceNone:zd,Curve:lh,CustomBlending:Gd,CustomToneMapping:pf,CylinderGeometry:zt,Data3DTexture:zf,DataArrayTexture:Qc,DataTexture:sp,DefaultLoadingManager:gp,DepthFormat:oi,DepthStencilFormat:Di,DepthTexture:sh,DetachedBindMode:mf,DirectionalLight:Sa,DiscreteInterpolant:fp,DisplayP3ColorSpace:la,DodecahedronGeometry:_a,DoubleSide:At,DstAlphaFactor:Kd,DstColorFactor:Zd,EdgesGeometry:xa,EqualCompare:Lf,EqualDepth:lf,EquirectangularReflectionMapping:sr,EquirectangularRefractionMapping:jo,Euler:jt,EventDispatcher:fi,FileLoader:Ma,Float32BufferAttribute:Ue,FloatType:An,Fog:Mr,FrontSide:fn,Frustum:ua,GLSL3:pc,GreaterCompare:Df,GreaterDepth:hf,GreaterEqualCompare:Nf,GreaterEqualDepth:cf,Group:de,HalfFloatType:Pn,HemisphereLight:xp,IcosahedronGeometry:Cr,ImageBitmapLoader:yp,ImageLoader:_p,ImageUtils:Zc,InstancedBufferAttribute:Ss,InstancedMesh:ci,IntType:Bc,InterleavedBuffer:oh,InterleavedBufferAttribute:Ms,Interpolant:Ps,InterpolateDiscrete:_s,InterpolateLinear:Ui,InterpolateSmooth:Ho,KeepStencilOp:Si,KeyframeTrack:Sn,LatheGeometry:ga,Layers:ca,LessCompare:If,LessDepth:af,LessEqualCompare:Kc,LessEqualDepth:ir,Light:Is,Line:br,LineBasicMaterial:Oi,LineLoop:rp,LineSegments:Tr,LinearDisplayP3ColorSpace:vr,LinearEncoding:Yc,LinearFilter:wt,LinearInterpolant:hh,LinearMipmapLinearFilter:li,LinearMipmapNearestFilter:kc,LinearSRGBColorSpace:Pt,LinearToneMapping:Dc,LinearTransfer:ar,Loader:Ln,LoaderUtils:Ci,LoadingManager:mp,LoopOnce:Yo,LoopPingPong:bf,LoopRepeat:jc,LuminanceAlphaFormat:vf,LuminanceFormat:yf,Material:Yt,MathUtils:pt,Matrix3:He,Matrix4:fe,MaxEquation:zl,Mesh:$,MeshBasicMaterial:Ct,MeshDepthMaterial:Zf,MeshDistanceMaterial:Jf,MeshLambertMaterial:hi,MeshPhongMaterial:Vo,MeshPhysicalMaterial:Dn,MeshStandardMaterial:Oe,MinEquation:Bl,MirroredRepeatWrapping:rr,MixOperation:df,MultiplyBlending:kl,MultiplyOperation:_r,NearestFilter:Tt,NearestMipmapLinearFilter:Js,NearestMipmapNearestFilter:qo,NeverCompare:Pf,NeverDepth:rf,NoBlending:Cn,NoColorSpace:en,NoToneMapping:Wn,NormalAnimationBlendMode:aa,NormalBlending:Ri,NotEqualCompare:Uf,NotEqualDepth:uf,NumberKeyframeTrack:ui,Object3D:et,ObjectSpaceNormalMap:Cf,OneFactor:jd,OneMinusConstantAlphaFactor:sf,OneMinusConstantColorFactor:tf,OneMinusDstAlphaFactor:$d,OneMinusDstColorFactor:Jd,OneMinusSrcAlphaFactor:Xo,OneMinusSrcColorFactor:Yd,OrthographicCamera:Rs,P3Primaries:cr,PCFShadowMap:Ic,PCFSoftShadowMap:Lc,PMREMGenerator:gc,PerspectiveCamera:kt,Plane:ei,PlaneGeometry:jn,PointLight:Qo,Points:ma,PointsMaterial:pa,PolyhedronGeometry:Rr,PropertyBinding:Ze,PropertyMixer:vp,Quaternion:mt,QuaternionKeyframeTrack:In,QuaternionLinearInterpolant:pp,RED_GREEN_RGTC2_Format:uc,RED_RGTC1_Format:wf,REVISION:sa,RGBADepthPacking:Rf,RGBAFormat:on,RGBAIntegerFormat:Wc,RGBA_ASTC_10x10_Format:rc,RGBA_ASTC_10x5_Format:nc,RGBA_ASTC_10x6_Format:ic,RGBA_ASTC_10x8_Format:sc,RGBA_ASTC_12x10_Format:oc,RGBA_ASTC_12x12_Format:ac,RGBA_ASTC_4x4_Format:Yl,RGBA_ASTC_5x4_Format:Kl,RGBA_ASTC_5x5_Format:$l,RGBA_ASTC_6x5_Format:Zl,RGBA_ASTC_6x6_Format:Jl,RGBA_ASTC_8x5_Format:Ql,RGBA_ASTC_8x6_Format:ec,RGBA_ASTC_8x8_Format:tc,RGBA_BPTC_Format:zo,RGBA_ETC2_EAC_Format:ql,RGBA_PVRTC_2BPPV1_Format:Xl,RGBA_PVRTC_4BPPV1_Format:Wl,RGBA_S3TC_DXT1_Format:Oo,RGBA_S3TC_DXT3_Format:ko,RGBA_S3TC_DXT5_Format:Bo,RGB_BPTC_SIGNED_Format:lc,RGB_BPTC_UNSIGNED_Format:cc,RGB_ETC1_Format:Xc,RGB_ETC2_Format:jl,RGB_PVRTC_2BPPV1_Format:Vl,RGB_PVRTC_4BPPV1_Format:Gl,RGB_S3TC_DXT1_Format:Fo,RGFormat:Sf,RGIntegerFormat:Vc,RawShaderMaterial:hp,Ray:As,Raycaster:xh,Rec709Primaries:lr,RedFormat:Mf,RedIntegerFormat:Gc,ReinhardToneMapping:Uc,RenderTarget:Bf,RepeatWrapping:vn,ReverseSubtractEquation:Wd,RingGeometry:Pr,SIGNED_RED_GREEN_RGTC2_Format:dc,SIGNED_RED_RGTC1_Format:hc,SRGBColorSpace:tt,SRGBTransfer:at,Scene:np,ShaderChunk:Be,ShaderLib:xn,ShaderMaterial:bt,ShapeUtils:va,ShortType:_f,Skeleton:wr,SkinnedMesh:ah,Source:Jc,Sphere:Mn,SphereGeometry:Bt,SpotLight:fh,Sprite:fa,SpriteMaterial:Sr,SrcAlphaFactor:Wo,SrcAlphaSaturateFactor:Qd,SrcColorFactor:qd,StaticDrawUsage:$o,StringKeyframeTrack:Bi,SubtractEquation:Vd,SubtractiveBlending:Ol,TangentSpaceNormalMap:yr,Texture:yt,TextureLoader:Ir,Triangle:tn,TriangleFanDrawMode:Ko,TriangleStripDrawMode:qc,TrianglesDrawMode:Ef,UVMapping:Oc,Uint16BufferAttribute:ha,Uint32BufferAttribute:eh,UniformsLib:re,UniformsUtils:vs,UnsignedByteType:Xn,UnsignedInt248Type:ri,UnsignedIntType:Gn,UnsignedShort4444Type:zc,UnsignedShort5551Type:Hc,UnsignedShortType:oa,VSMShadowMap:bn,Vector2:ue,Vector3:C,Vector4:Je,VectorKeyframeTrack:di,WebGL1Renderer:tp,WebGLCoordinateSystem:Rn,WebGLCubeRenderTarget:Wf,WebGLRenderTarget:dn,WebGLRenderer:rh,WebGLUtils:Qf,WebGPUCoordinateSystem:hr,WrapAroundEnding:or,ZeroCurvatureEnding:Ei,ZeroFactor:Xd,ZeroSlopeEnding:Ai,_SRGBAFormat:Zo,createCanvasElement:kf,sRGBEncoding:ai},Symbol.toStringTag,{value:"Module"})),tv=new C(0,1,0),Bu=new C(1,0,0),zu=new C(0,0,-1);function nv(s){return new C(-Math.sin(s),0,-Math.cos(s))}function iv(s){return Math.atan2(-s.x,-s.z)}function sv(s){return new C(s.x,0,s.z)}function rv(s,e="vector"){if(!Number.isFinite(s.x)||!Number.isFinite(s.y)||!Number.isFinite(s.z))throw new Error(`${e} has non-finite values: ${ea(s)}`)}function ea(s,e=2){return`(${s.x.toFixed(e)}, ${s.y.toFixed(e)}, ${s.z.toFixed(e)})`}function ov(s=2){const e=new de;e.name="AxisGizmo";const t=(n,i,r)=>{const o=new de;o.name=r;const a=new zt(.02,.02,s*.85,8),l=new Ct({color:i}),c=new $(a,l);c.position.y=s*.85/2,o.add(c);const h=new pi(.06,s*.15,8),u=new Ct({color:i}),d=new $(h,u);return d.position.y=s*.925,o.add(d),n.equals(Bu)?o.rotation.z=-Math.PI/2:n.equals(zu)&&(o.rotation.x=Math.PI/2),o.userData={isAxisArrow:!0,direction:n.clone(),label:r,color:i},o};return e.add(t(Bu,16711680,"X-Axis (Red)")),e.add(t(tv,65280,"Y-Axis (Green)")),e.add(t(zu,35071,"Z-Axis (Blue)")),e}function yh(s){let e=s;return function(){return e=e*1103515245+12345&2147483647,e/2147483647}}function ta(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=s-n,o=e-i,a=(g,_)=>{const p=g+_*57+t;return yh(p*13)()},l=a(n,i),c=a(n+1,i),h=a(n,i+1),u=a(n+1,i+1),d=r*r*(3-2*r),f=o*o*(3-2*o);return l*(1-d)*(1-f)+c*d*(1-f)+h*(1-d)*f+u*d*f}function av(s,e,t,n=4,i=2.1,r=.55){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*ta(s*a,e*a,t+h*17),c+=o,o*=r,a*=i;return l/c}const Ot={baseColor:[140,135,130],speckleCount:400,speckleSize:1.5,speckleVariation:30,crackCount:8,crackColor:[100,95,90],crackWidth:.8,edgeDarkening:.15,noiseScale:.03,noiseStrength:15};function lv(s,e){const t=document.createElement("canvas");t.width=s,t.height=s;const n=t.getContext("2d"),i=yh(e),r=n.createImageData(s,s),o=r.data;for(let a=0;a<s;a++)for(let l=0;l<s;l++){const h=(ta(l*Ot.noiseScale,a*Ot.noiseScale,e)-.5)*Ot.noiseStrength,u=Math.min(l,s-l)/(s*.2),d=Math.min(a,s-a)/(s*.2),f=1-Math.max(0,1-Math.min(u,d))*Ot.edgeDarkening,g=(a*s+l)*4;o[g]=Math.max(0,Math.min(255,(Ot.baseColor[0]+h)*f)),o[g+1]=Math.max(0,Math.min(255,(Ot.baseColor[1]+h)*f)),o[g+2]=Math.max(0,Math.min(255,(Ot.baseColor[2]+h)*f)),o[g+3]=255}n.putImageData(r,0,0);for(let a=0;a<Ot.speckleCount;a++){const l=i()*s,c=i()*s,h=.5+i()*Ot.speckleSize,u=(i()-.5)*Ot.speckleVariation,d=Math.max(0,Math.min(255,Ot.baseColor[0]+u)),f=Math.max(0,Math.min(255,Ot.baseColor[1]+u)),g=Math.max(0,Math.min(255,Ot.baseColor[2]+u));n.fillStyle=`rgb(${d}, ${f}, ${g})`,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}n.strokeStyle=`rgba(${Ot.crackColor[0]}, ${Ot.crackColor[1]}, ${Ot.crackColor[2]}, 0.3)`,n.lineWidth=Ot.crackWidth;for(let a=0;a<Ot.crackCount;a++){let l=i()*s,c=i()*s;const h=3+Math.floor(i()*4);n.beginPath(),n.moveTo(l,c);for(let u=0;u<h;u++){const d=i()*Math.PI*2,f=15+i()*30;l+=Math.cos(d)*f,c+=Math.sin(d)*f,n.lineTo(l,c)}n.stroke()}return t}function cv(s,e=256,t=Date.now()){const n=lv(e,t),i=new s.CanvasTexture(n);return i.wrapS=s.RepeatWrapping,i.wrapT=s.RepeatWrapping,i}const Wt={boulderCount:5,boulderRadius:.45,boulderEdgeSoftness:.35,boulderRaise:.35,fbmOctaves:5,fbmGain:.58,fbmLacunarity:2.2,fbmStrength:.9,contrast:1.55,speckCount:700,speckMaxR:2.4,crackCount:9,crackBaseWidth:1.4,crackHaloWidth:6,crackJitter:.6,edgeFalloff:.08};function hv(s,e){const t=document.createElement("canvas");t.width=s,t.height=s;const n=t.getContext("2d"),i=yh(e),r=[];for(let h=0;h<Wt.boulderCount;h++)r.push({cx:i()*s,cy:i()*s,r:Wt.boulderRadius*s*(.7+i()*.6),jx:(i()-.5)*.8,jy:(i()-.5)*.8});const o=n.createImageData(s,s),a=o.data;for(let h=0;h<s;h++)for(let u=0;u<s;u++){let d=0;for(const E of r){const w=u+ta(u*.02,h*.02,e+31)*18*E.jx,T=h+ta(u*.02,h*.02,e+47)*18*E.jy,L=w-E.cx,M=T-E.cy,S=Math.sqrt(L*L+M*M)/E.r,O=Math.max(0,1-S),k=Math.pow(O,1+Wt.boulderEdgeSoftness*2);k>d&&(d=k)}const f=av(u*.012,h*.012,e,Wt.fbmOctaves,Wt.fbmLacunarity,Wt.fbmGain);let g=.42+d*Wt.boulderRaise+(f-.5)*Wt.fbmStrength;g=.5+(g-.5)*Wt.contrast;const _=Math.min(u,s-u)/s,p=Math.min(h,s-h)/s,m=Math.min(_,p)/Wt.edgeFalloff,y=Math.min(1,m);g=g*(.85+.15*y);const x=Math.max(0,Math.min(255,g*255)),v=(h*s+u)*4;a[v]=x,a[v+1]=x,a[v+2]=x,a[v+3]=255}n.putImageData(o,0,0);for(let h=0;h<Wt.speckCount;h++){const u=i()*s,d=i()*s,f=.6+i()*Wt.speckMaxR;n.fillStyle=`rgba(0,0,0,${.25+i()*.2})`,n.beginPath(),n.arc(u+f*.4,d+f*.4,f*1.05,0,Math.PI*2),n.fill();const g=215+Math.floor(i()*40);n.fillStyle=`rgba(${g},${g},${g},0.95)`,n.beginPath(),n.arc(u,d,f,0,Math.PI*2),n.fill()}const l=(h,u)=>{n.strokeStyle=`rgba(0,0,0,${h})`,n.lineWidth=u,n.lineCap="round",n.lineJoin="round"},c=[];for(let h=0;h<Wt.crackCount;h++){const u=[];let d=i()*s,f=i()*s;u.push([d,f]);const g=4+Math.floor(i()*4);let _=i()*Math.PI*2;for(let p=0;p<g;p++){_+=(i()-.5)*Math.PI*Wt.crackJitter;const m=18+i()*32;d+=Math.cos(_)*m,f+=Math.sin(_)*m,u.push([d,f])}c.push(u)}l(.45,Wt.crackHaloWidth);for(const h of c){n.beginPath(),n.moveTo(h[0][0],h[0][1]);for(let u=1;u<h.length;u++)n.lineTo(h[u][0],h[u][1]);n.stroke()}l(.95,Wt.crackBaseWidth);for(const h of c){n.beginPath(),n.moveTo(h[0][0],h[0][1]);for(let u=1;u<h.length;u++)n.lineTo(h[u][0],h[u][1]);n.stroke()}return t}function uv(s,e=256,t=Date.now()){const n=hv(e,t),i=new s.CanvasTexture(n);return i.wrapS=s.RepeatWrapping,i.wrapT=s.RepeatWrapping,i}const bp=Math.sqrt(3),dv=.5*(bp-1),Ws=(3-bp)/6,Hu=s=>Math.floor(s)|0,Gu=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Tp(s=Math.random){const e=fv(s),t=new Float64Array(e).map(i=>Gu[i%12*2]),n=new Float64Array(e).map(i=>Gu[i%12*2+1]);return function(r,o){let a=0,l=0,c=0;const h=(r+o)*dv,u=Hu(r+h),d=Hu(o+h),f=(u+d)*Ws,g=u-f,_=d-f,p=r-g,m=o-_;let y,x;p>m?(y=1,x=0):(y=0,x=1);const v=p-y+Ws,E=m-x+Ws,w=p-1+2*Ws,T=m-1+2*Ws,L=u&255,M=d&255;let S=.5-p*p-m*m;if(S>=0){const N=L+e[M],R=t[N],F=n[N];S*=S,a=S*S*(R*p+F*m)}let O=.5-v*v-E*E;if(O>=0){const N=L+y+e[M+x],R=t[N],F=n[N];O*=O,l=O*O*(R*v+F*E)}let k=.5-w*w-T*T;if(k>=0){const N=L+1+e[M+1],R=t[N],F=n[N];k*=k,c=k*k*(R*w+F*T)}return 70*(a+l+c)}}function fv(s){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=t[n];t[n]=t[i],t[i]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const ii=100,Tn=100,Ep=3,Vu=50,Wu=25;function pv(s,e){const t=Tp(),n=s*e,i=new Uint8Array(n);for(let r=0;r<n;r++){const o=r%s,a=Math.floor(r/s);let l=t(o/Vu,a/Vu)*.5+t(o/Wu,a/Wu)*.25;i[r]=(l+.75)*128}return i}function Hn(s,e,t){if(!t)return 0;const n=ii/2,i=ii/2,r=Math.floor(s+n),o=Math.floor(e+i),a=Math.max(0,Math.min(Tn-1,r)),c=Math.max(0,Math.min(Tn-1,o))*Tn+a;return t[c]/255*Ep}function mv(){const s=pv(Tn,Tn),e=new jn(ii,ii,Tn-1,Tn-1);e.rotateX(-Math.PI/2);const t=e.toNonIndexed(),n=t.getAttribute("position");for(let c=0;c<n.count;c++){const h=Math.floor(n.getX(c)+ii/2),u=Math.floor(n.getZ(c)+ii/2),d=Math.max(0,Math.min(Tn-1,h)),g=Math.max(0,Math.min(Tn-1,u))*Tn+d,_=s[g]/255*Ep;n.setY(c,_)}t.computeVertexNormals();const i=[],r=new Q,o=Tp();for(let c=0;c<n.count;c++){const h=n.getX(c),u=n.getY(c),d=n.getZ(c);u<.5?r.setHex(3833183):u<1.2?r.setHex(5938559):u<1.8?r.setHex(8042911):u<2.3?r.setHex(11180390):r.setHex(13421772);const f=o(h*.06,d*.06),g=o(h*.4+13.3,d*.4-7.1)*.5,_=f*.1+g*.05;r.r=Math.max(0,Math.min(1,r.r+_)),r.g=Math.max(0,Math.min(1,r.g+_*.9)),r.b=Math.max(0,Math.min(1,r.b+_*.6)),i.push(r.r,r.g,r.b)}t.setAttribute("color",new Ue(i,3));const a=new hi({vertexColors:!0,flatShading:!0,side:At}),l=new $(t,a);return l.receiveShadow=!0,l.name="Terrain",{mesh:l,heightData:s}}function gv(){const s=new jn(ii,ii);s.rotateX(-Math.PI/2);const e=new Oe({color:1728383,roughness:.3,metalness:.8,transparent:!0,opacity:.4,depthWrite:!1}),t=new $(s,e);return t.position.y=.05,t.name="Water",t}function _v(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,x=a.length;y<x;y++){const v=a[y],E=s.attributes[v];l[v]=new rt(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const w=s.morphAttributes[v];w&&(c[v]=new rt(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized))}const f=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),p=f*_;for(let y=0;y<r;y++){const x=n?n.getX(y):y;let v="";for(let E=0,w=a.length;E<w;E++){const T=a[E],L=s.getAttribute(T),M=L.itemSize;for(let S=0;S<M;S++)v+=`${~~(L[u[S]](x)*_+p)},`}if(v in t)h.push(t[v]);else{for(let E=0,w=a.length;E<w;E++){const T=a[E],L=s.getAttribute(T),M=s.morphAttributes[T],S=L.itemSize,O=l[T],k=c[T];for(let N=0;N<S;N++){const R=u[N],F=d[N];if(O[F](o,L[R](x)),M)for(let D=0,z=M.length;D<z;D++)k[D][F](o,M[D][R](x))}}t[v]=o,h.push(o),o++}}const m=s.clone();for(const y in s.attributes){const x=l[y];if(m.setAttribute(y,new rt(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),y in c)for(let v=0;v<c[y].length;v++){const E=c[y][v];m.morphAttributes[y][v]=new rt(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return m.setIndex(h),m}function Xu(s,e){if(e===Ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ko||e===qc){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ko)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class xv extends Ln{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Fv(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ci.extractUrlBase(e);o=Ci.resolveURL(c,this.path)}else o=Ci.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ma(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ap){try{o[$e.KHR_BINARY_GLTF]=new Ov(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $v(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new Mv;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new kv(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new Bv;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new zv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function yv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vv{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Q(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Pt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Sa(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qo(h),c.distance=u;break;case"spot":c=new fh(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Mv{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){const i=[];e.color=new Q(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(i)}}class Sv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class wv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(r)}}class bv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Tv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Q(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Pt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Ev{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Av{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Q().setRGB(a[0],a[1],a[2],Pt),Promise.all(r)}}class Rv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Cv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Q().setRGB(a[0],a[1],a[2],Pt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,tt)),Promise.all(r)}}class Pv{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Iv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Lv{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Dv{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Uv{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Nv{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Fv{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new fe,p=new C,m=new mt,y=new C(1,1,1),x=new ci(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(p,m,y));for(const v in l)if(v==="_COLOR_0"){const E=l[v];x.instanceColor=new Ss(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);et.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ap="glTF",Xs=12,ju={JSON:1313821514,BIN:5130562};class Ov{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xs,r=new DataView(e,Xs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ju.JSON){const c=new Uint8Array(e,Xs+o,a);this.content=n.decode(c)}else if(l===ju.BIN){const c=Xs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Sc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Sc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=gs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(f)},a,c,Pt,d)})})}}class Bv{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zv{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Rp extends Ps{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,y=1-p,x=m-d+u;for(let v=0;v!==a;v++){const E=o[_+v+a],w=o[_+v+l]*h,T=o[g+v+a],L=o[g+v]*h;r[v]=y*E+x*w+p*T+m*L}return r}}const Hv=new mt;class Gv extends Rp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Hv.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qu={9728:Tt,9729:wt,9984:qo,9985:kc,9986:Js,9987:li},Yu={33071:Rt,33648:rr,10497:vn},cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vv={CUBICSPLINE:void 0,LINEAR:Ui,STEP:_s},hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),s.DefaultMaterial}function Mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function jv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qv(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ul(t.attributes):e=s.indices+":"+ul(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ul(s.targets[n]);return e}function ul(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function wc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Kv=new fe;class $v{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ir(this.options.manager):this.textureLoader=new yp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ma(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Mi(r,a,i),ti(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ci.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=cl[i.type],a=gs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new rt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=cl[i.type],c=gs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(y);x||(_=new c(a,m*f,i.count*f/h),x=new oh(_,f/h),t.cache.add(y,x)),p=new Ms(x,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),p=new rt(_,l,g);if(i.sparse!==void 0){const m=cl.SCALAR,y=gs[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new y(o[1],x,i.sparse.count*m),w=new c(o[2],v,i.sparse.count*l);a!==null&&(p=new rt(p.array.slice(),p.itemSize,p.normalized));for(let T=0,L=E.length;T<L;T++){const M=E[T];if(p.setX(M,w[T*l]),l>=2&&p.setY(M,w[T*l+1]),l>=3&&p.setZ(M,w[T*l+2]),l>=4&&p.setW(M,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=qu[d.magFilter]||wt,h.minFilter=qu[d.minFilter]||li,h.wrapS=Yu[d.wrapS]||vn,h.wrapT=Yu[d.wrapT]||vn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new yt(_);p.needsUpdate=!0,d(p)}),t.load(Ci.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||Yv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new pa,Yt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Oi,Yt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Oe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Q(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=At);const h=r.alphaMode||hl.OPAQUE;if(h===hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ct&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ct){const u=r.emissiveFactor;a.emissive=new Q().setRGB(u[0],u[1],u[2],Pt)}return r.emissiveTexture!==void 0&&o!==Ct&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,tt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ti(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mi(i,u,r),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ku(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=qv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ku(new ot,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Wv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=o[f];let m;const y=c[f];if(p.mode===hn.TRIANGLES||p.mode===hn.TRIANGLE_STRIP||p.mode===hn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ah(_,y):new $(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===hn.TRIANGLE_STRIP?m.geometry=Xu(m.geometry,qc):p.mode===hn.TRIANGLE_FAN&&(m.geometry=Xu(m.geometry,Ko));else if(p.mode===hn.LINES)m=new Tr(_,y);else if(p.mode===hn.LINE_STRIP)m=new br(_,y);else if(p.mode===hn.LINE_LOOP)m=new rp(_,y);else if(p.mode===hn.POINTS)m=new ma(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&jv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ti(m,r),p.extensions&&Mi(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Mi(i,u[0],r),u[0];const d=new de;r.extensions&&Mi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(pt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Rs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new fe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wr(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let y=0,x=d.length;y<x;y++){const v=d[y],E=f[y],w=g[y],T=_[y],L=p[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,E,w,T,L);if(M)for(let S=0;S<M.length;S++)m.push(M[S])}return new ws(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Kv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new dr:c.length>1?h=new de:c.length===1?h=c[0]:h=new et,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ti(h,r),r.extensions&&Mi(n,h,r),r.matrix!==void 0){const u=new fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new de;n.name&&(r.name=i.createUniqueName(n.name)),ti(r,n),n.extensions&&Mi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Yt||d instanceof yt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Jn[r.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Jn[r.path]){case Jn.weights:c=ui;break;case Jn.rotation:c=In;break;case Jn.position:case Jn.scale:c=di;break;default:switch(n.itemSize){case 1:c=ui;break;case 2:case 3:default:c=di;break}break}const h=i.interpolation!==void 0?Vv[i.interpolation]:Ui,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Jn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof In?Gv:Rp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Zv(s,e,t){const n=e.attributes,i=new an;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=wc(gs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=wc(gs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ku(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Sc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ti(s,e),Zv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Xv(s,e.targets,t):s})}const Cp="/threejs-arena/",Jv=`${Cp}trees/tree.glb`,Pp=`${Cp}trees/foliage_alpha3.png`,Ti={u_effectBlend:{value:1},u_inflate:{value:0},u_scale:{value:1},u_windSpeed:{value:1},u_windTime:{value:0}};let $u=!1;function Ip(){if($u)return;$u=!0;let s=performance.now();const e=t=>{const n=(t-s)/1e3;s=t,Ti.u_windTime.value+=Ti.u_windSpeed.value*n,requestAnimationFrame(e)};requestAnimationFrame(e)}function Qv(s,e=4156705){const t=Lp(s);return t.color.setHex(e),t}function eM(){const s=new Ir;return s.setCrossOrigin("anonymous"),new Promise((e,t)=>{s.load(Pp,n=>{n.colorSpace=en,n.wrapS=Rt,n.wrapT=Rt,Ip(),e(n)},void 0,t)})}function Lp(s){const e=new Oe({color:new Q("#3f6d21"),alphaMap:s,alphaTest:.5,transparent:!1,side:fn,roughness:.9,metalness:0});return e.onBeforeCompile=t=>{t.uniforms.u_effectBlend=Ti.u_effectBlend,t.uniforms.u_inflate=Ti.u_inflate,t.uniforms.u_scale=Ti.u_scale,t.uniforms.u_windSpeed=Ti.u_windSpeed,t.uniforms.u_windTime=Ti.u_windTime,t.vertexShader=t.vertexShader.replace("#include <common>",`
      #include <common>
      uniform float u_effectBlend;
      uniform float u_inflate;
      uniform float u_scale;
      uniform float u_windSpeed;
      uniform float u_windTime;

      float inverseLerp(float v, float minValue, float maxValue) {
        return (v - minValue) / (maxValue - minValue);
      }
      float remap(float v, float inMin, float inMax, float outMin, float outMax) {
        return mix(outMin, outMax, inverseLerp(v, inMin, inMax));
      }
      mat4 rotateZ(float radians) {
        float c = cos(radians);
        float s = sin(radians);
        return mat4(c, -s, 0, 0,  s, c, 0, 0,  0, 0, 1, 0,  0, 0, 0, 1);
      }
      vec4 applyWind(vec4 v) {
        float boundedYNormal = remap(normal.y, -1.0, 1.0, 0.0, 1.0);
        float posXZ = position.x + position.z;
        float power = u_windSpeed / 5.0 * -0.5;
        float topFacing = remap(sin(u_windTime + posXZ), -1.0, 1.0, 0.0, power);
        float bottomFacing = remap(cos(u_windTime + posXZ), -1.0, 1.0, 0.0, 0.05);
        float radians = mix(bottomFacing, topFacing, boundedYNormal);
        return rotateZ(radians) * v;
      }
      vec2 calcInitialOffsetFromUVs() {
        vec2 offset = vec2(
          remap(uv.x, 0.0, 1.0, -1.0, 1.0),
          remap(uv.y, 0.0, 1.0, -1.0, 1.0)
        );
        offset *= vec2(-1.0, 1.0);
        offset = normalize(offset) * u_scale;
        return offset;
      }
      vec3 inflateOffset(vec3 offset) {
        return offset + normal.xyz * u_inflate;
      }
      `),t.vertexShader=t.vertexShader.replace("#include <project_vertex>",`
      vec4 mvPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      mvPosition = modelViewMatrix * mvPosition;

      vec2 vertexOffset = calcInitialOffsetFromUVs();
      vec3 inflatedVertexOffset = inflateOffset(vec3(vertexOffset, 0.0));
      mvPosition += vec4(mix(vec3(0.0), inflatedVertexOffset, u_effectBlend), 0.0);
      mvPosition = applyWind(mvPosition);

      gl_Position = projectionMatrix * mvPosition;
      `)},e}let bo=null;function tM(){if(bo)return bo;const s=new xv,e=new Ir;e.setCrossOrigin("anonymous");const t=new Promise((i,r)=>{s.setCrossOrigin("anonymous"),s.load(Jv,o=>i(o.scene),void 0,r)}),n=new Promise((i,r)=>{e.load(Pp,o=>i(o),void 0,r)});return bo=Promise.all([t,n]).then(([i,r])=>{r.colorSpace=en,r.wrapS=Rt,r.wrapT=Rt;let o=null,a=null;if(i.updateMatrixWorld(!0),i.traverse(h=>{if(h.isMesh){const u=h;u.name==="trunk"?o=u:u.name==="foliage"&&(a=u)}}),!o||!a)throw new Error('tree.glb missing expected "trunk" or "foliage" mesh');const l=Lp(r),c=new Ct({color:0});return Ip(),{trunkMesh:o,foliageMesh:a,foliageMaterial:l,trunkMaterial:c}}),bo}function nM(s,e){const t=new de;t.name="Tree";const n=new $(s.trunkMesh.geometry,s.trunkMaterial);n.position.copy(s.trunkMesh.position),n.quaternion.copy(s.trunkMesh.quaternion),n.scale.copy(s.trunkMesh.scale),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const i=new $(s.foliageMesh.geometry,s.foliageMaterial);return i.position.copy(s.foliageMesh.position),i.quaternion.copy(s.foliageMesh.quaternion),i.scale.copy(s.foliageMesh.scale),i.castShadow=!0,i.receiveShadow=!0,t.add(i),t.scale.setScalar(e),t}function iM(s){const e=new de;e.name="Forest";const t=16,n=40,i=14,r=[];for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,l=t+Math.random()*(n-t),c=Math.cos(a)*l,h=Math.sin(a)*l;let u=0;if(s){const d=Math.max(0,Math.min(99,Math.floor(c+50))),f=Math.max(0,Math.min(99,Math.floor(h+50)));u=s[f*100+d]/255*3}r.push({x:c,z:h,y:u,scale:1.6+Math.random()*1,rotY:Math.random()*Math.PI*2})}return tM().then(o=>{for(const a of r){const l=nM(o,a.scale);l.position.set(a.x,a.y,a.z),l.rotation.y=a.rotY,e.add(l)}}).catch(o=>{console.error("[trees] failed to load tree assets",o)}),e}const Zu=40,dl=4,fl=1.2,Lr=[];let bc=null,js,qs;function sM(){return js||(js=cv(wp,512,54321),js.repeat.set(1,2),js)}function rM(){return qs||(qs=uv(wp,512,54321),qs.repeat.set(1,2),qs)}function To(s,e){const t=new zt(fl,fl*1.1,dl,16),n=new Oe({map:sM(),bumpMap:rM(),bumpScale:1.6,roughness:.95,metalness:.04}),i=new $(t,n);return i.position.set(s,dl/2,e),i.castShadow=!0,i.receiveShadow=!0,i.name="Pillar",Lr.push({type:"cylinder",x:s,z:e,radius:fl*1.1,height:dl}),i}function Ju(s,e,t,n,i,r=0){const o=new de,a=new me(t,i,n),l=new Oe({color:7035727,roughness:.85,metalness:.05}),c=new $(a,l);return c.position.y=i/2,c.castShadow=!0,c.receiveShadow=!0,o.add(c),o.position.set(s,0,e),o.rotation.y=r,o.name="Ramp",Lr.push({type:"box",x:s,z:e,width:t,depth:n,height:i,rotation:r}),o}function oM(){const s=new de;s.name="BoundaryWalls";const e=1.5,t=.5,n=Zu/2,i=6,r=new Oe({color:5592405,roughness:.7,metalness:.2}),o=(c,h,u,d)=>{const f=new me(c,e,t),g=new $(f,r);return g.position.set(h,e/2,u),g.rotation.y=d,g.castShadow=!0,g.receiveShadow=!0,s.add(g),Lr.push({type:"box",x:h,z:u,width:d===0?c:t,depth:d===0?t:c,height:e,rotation:d}),g},a=(Zu-i)/2,l=a/2+i/2;return o(a,-l,-n,0),o(a,l,-n,0),o(a,-l,n,0),o(a,l,n,0),o(a,-n,-l,Math.PI/2),o(a,-n,l,Math.PI/2),o(a,n,-l,Math.PI/2),o(a,n,l,Math.PI/2),s}function aM(){return Lr}function os(){return bc}function lM(){Lr.length=0;const s=new de;s.name="Arena";const{mesh:e,heightData:t}=mv();bc=t,s.add(e),s.add(gv());const n=8;return s.add(To(-n,-n)),s.add(To(n,-n)),s.add(To(-n,n)),s.add(To(n,n)),s.add(Ju(-3,0,2,4,1.2,Math.PI/6)),s.add(Ju(3,0,2,4,1.2,-Math.PI/6)),s.add(oM()),s.add(iM(bc)),s}const cM={distance:8,minDistance:3,maxDistance:20,height:1.2,pitchMin:-20*Math.PI/180,pitchMax:70*Math.PI/180,sensitivity:.003,smoothing:.1};class hM{constructor(e={}){I(this,"camera");I(this,"pivot");I(this,"config");I(this,"targetYaw",0);I(this,"targetPitch",.3);I(this,"currentYaw",0);I(this,"currentPitch",.3);I(this,"targetDistance");I(this,"leftDown",!1);I(this,"rightDown",!1);I(this,"lastMouseX",0);I(this,"lastMouseY",0);I(this,"pendingPlayerYawDelta",0);this.config={...cM,...e},this.targetDistance=this.config.distance,this.camera=new kt(60,window.innerWidth/window.innerHeight,.1,1e3),this.pivot=new et,this.pivot.name="CameraPivot",this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onWheel=this.onWheel.bind(this),this.onContextMenu=this.onContextMenu.bind(this)}attach(e){e.addEventListener("mousedown",this.onMouseDown),e.addEventListener("mouseup",this.onMouseUp),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("wheel",this.onWheel),e.addEventListener("contextmenu",this.onContextMenu),window.addEventListener("mouseup",this.onMouseUp)}detach(e){e.removeEventListener("mousedown",this.onMouseDown),e.removeEventListener("mouseup",this.onMouseUp),e.removeEventListener("mousemove",this.onMouseMove),e.removeEventListener("wheel",this.onWheel),e.removeEventListener("contextmenu",this.onContextMenu),window.removeEventListener("mouseup",this.onMouseUp)}onMouseDown(e){e.button===0&&(this.leftDown=!0),e.button===2&&(this.rightDown=!0),(e.button===0||e.button===2)&&(this.lastMouseX=e.clientX,this.lastMouseY=e.clientY)}onMouseUp(e){e.button===0&&(this.leftDown=!1),e.button===2&&(this.rightDown=!1)}onMouseMove(e){if(!this.leftDown&&!this.rightDown)return;const t=e.clientX-this.lastMouseX,n=e.clientY-this.lastMouseY,i=-t*this.config.sensitivity;this.targetYaw+=i,this.targetPitch+=n*this.config.sensitivity,this.rightDown&&(this.pendingPlayerYawDelta+=i),this.targetPitch=Math.max(this.config.pitchMin,Math.min(this.config.pitchMax,this.targetPitch)),this.lastMouseX=e.clientX,this.lastMouseY=e.clientY}onWheel(e){this.targetDistance+=e.deltaY*.01,this.targetDistance=Math.max(this.config.minDistance,Math.min(this.config.maxDistance,this.targetDistance))}onContextMenu(e){e.preventDefault()}get yaw(){return this.currentYaw}get dragging(){return this.leftDown||this.rightDown}get bothHeld(){return this.leftDown&&this.rightDown}consumePlayerYawDelta(){const e=this.pendingPlayerYawDelta;return this.pendingPlayerYawDelta=0,e}setYaw(e){this.targetYaw=e}recenterBehindPlayer(e){this.targetYaw=e}update(e){this.currentYaw+=(this.targetYaw-this.currentYaw)*this.config.smoothing,this.currentPitch+=(this.targetPitch-this.currentPitch)*this.config.smoothing;const t=new C(Math.sin(this.currentYaw)*Math.cos(this.currentPitch),Math.sin(this.currentPitch),Math.cos(this.currentYaw)*Math.cos(this.currentPitch)).multiplyScalar(this.targetDistance);this.pivot.position.copy(e),this.pivot.position.y+=this.config.height,this.camera.position.copy(this.pivot.position).add(t),this.camera.lookAt(this.pivot.position)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}const Eo=6,na=8,Qu=20,Xt=25,uM={moveSpeed:6,jumpForce:8,gravity:20,groundY:0,radius:.35};class dM{constructor(e,t={}){I(this,"position");I(this,"velocity");I(this,"mesh",null);I(this,"facingYaw",0);I(this,"config");I(this,"isGrounded",!0);I(this,"groundLevel",0);I(this,"colliders",[]);I(this,"terrainHeightData",null);I(this,"keys",new Set);this.config={...uM,...t},this.position=e.clone(),this.velocity=new C,this.groundLevel=this.config.groundY,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this)}setColliders(e){this.colliders=e}setTerrainHeightData(e){this.terrainHeightData=e}attach(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}detach(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}onKeyDown(e){this.keys.add(e.code.toLowerCase()),e.code==="Space"&&this.isGrounded&&(this.velocity.y=this.config.jumpForce,this.isGrounded=!1)}onKeyUp(e){this.keys.delete(e.code.toLowerCase())}isKeyPressed(e){return this.keys.has(e.toLowerCase())}getInputDirection(){const e=new C;return(this.isKeyPressed("keyw")||this.isKeyPressed("arrowup"))&&(e.z-=1),(this.isKeyPressed("keys")||this.isKeyPressed("arrowdown"))&&(e.z+=1),(this.isKeyPressed("keya")||this.isKeyPressed("arrowleft"))&&(e.x-=1),(this.isKeyPressed("keyd")||this.isKeyPressed("arrowright"))&&(e.x+=1),e.lengthSq()>0&&e.normalize(),e}update(e,t=!1){const n=this.getInputDirection();if(t&&(n.z-=1,n.lengthSq()>0&&n.normalize()),n.lengthSq()>0){const i=nv(this.facingYaw),r=new C(-i.z,0,i.x),o=new C().addScaledVector(r,n.x).addScaledVector(i,-n.z);o.normalize(),this.velocity.x=o.x*this.config.moveSpeed,this.velocity.z=o.z*this.config.moveSpeed}else this.velocity.x=0,this.velocity.z=0;this.isGrounded||(this.velocity.y-=this.config.gravity*e),this.position.addScaledVector(this.velocity,e),this.resolveCollisions(),this.position.y<=this.groundLevel?(this.position.y=this.groundLevel,this.velocity.y=0,this.isGrounded=!0):this.isGrounded=!1,this.position.x=Math.max(-Xt,Math.min(Xt,this.position.x)),this.position.z=Math.max(-Xt,Math.min(Xt,this.position.z)),this.mesh&&this.mesh.position.copy(this.position),rv(this.position,"PlayerPosition")}resolveCollisions(){let e=Hn(this.position.x,this.position.z,this.terrainHeightData);for(const t of this.colliders)if(t.type==="cylinder"){const n=this.resolveCylinder(t);n!==null&&n>e&&(e=n)}else if(t.type==="box"){const n=this.resolveBox(t);n>e&&(e=n)}this.groundLevel=e}resolveCylinder(e){const t=this.position.x-e.x,n=this.position.z-e.z,i=Math.sqrt(t*t+n*n),r=e.radius+this.config.radius;if(e.climbable&&e.topY!==void 0&&i<e.radius+this.config.radius*.8&&this.position.y>=e.topY-.05)return e.topY;if(!(e.topY!==void 0&&this.position.y>=e.topY-.05)&&i<r&&i>.001){const a=r-i,l=t/i,c=n/i;this.position.x+=l*a,this.position.z+=c*a;const h=this.velocity.x*l+this.velocity.z*c;h<0&&(this.velocity.x-=h*l,this.velocity.z-=h*c)}return null}resolveBox(e){const t=Math.cos(e.rotation),n=Math.sin(e.rotation),i=this.position.x-e.x,r=this.position.z-e.z,o=i*t-r*n,a=i*n+r*t,l=e.width/2,c=e.depth/2,h=Math.abs(o)<l+this.config.radius,u=Math.abs(a)<c+this.config.radius;if(!h||!u)return this.config.groundY;const d=this.position.y,f=d>=e.height-.05,g=Math.abs(o)<l+this.config.radius*.8&&Math.abs(a)<c+this.config.radius*.8;if(f&&g)return e.height;if(d<e.height){const _=l+this.config.radius-Math.abs(o),p=c+this.config.radius-Math.abs(a);if(_>0&&p>0){let m=0,y=0;_<p?m=_*Math.sign(o):y=p*Math.sign(a);const x=m*t-y*n,v=m*n+y*t;if(this.position.x+=x,this.position.z+=v,x!==0||v!==0){const E=Math.sqrt(x*x+v*v),w=x/E,T=v/E,L=this.velocity.x*w+this.velocity.z*T;L<0&&(this.velocity.x-=L*w,this.velocity.z-=L*T)}}}return this.config.groundY}getDebugInfo(){return`Pos: ${ea(this.position)} | Vel: ${ea(this.velocity)} | Grounded: ${this.isGrounded}`}}class fM{constructor(e,t){I(this,"raycaster");I(this,"mouse");I(this,"camera");I(this,"scene");I(this,"targetables");I(this,"currentTarget",null);I(this,"targetRing");I(this,"nameElement",null);I(this,"infoElement",null);I(this,"healthElement",null);I(this,"healthFillElement",null);I(this,"healthTextElement",null);this.raycaster=new xh,this.mouse=new ue,this.camera=e,this.scene=t,this.targetables=new Map,this.targetRing=this.createTargetRing(),this.onClick=this.onClick.bind(this)}createTargetRing(){const e=new $(new Pr(1,1.12,48),new Ct({color:16763904,transparent:!0,opacity:.9,side:At,depthWrite:!1}));return e.name="TargetRing",e.rotation.x=-Math.PI/2,e.position.y=.04,e.renderOrder=997,e.visible=!1,e.userData.editorIgnore=!0,e}attach(e){e.addEventListener("click",this.onClick),this.targetRing.parent||this.scene.add(this.targetRing),this.nameElement=document.getElementById("target-name"),this.infoElement=document.getElementById("target-info"),this.healthElement=document.getElementById("target-health"),this.healthFillElement=document.getElementById("target-health-fill"),this.healthTextElement=document.getElementById("target-health-text")}detach(e){e.removeEventListener("click",this.onClick)}registerTargetable(e,t,n,i){this.targetables.set(e,{id:t,name:n,team:i}),e.userData.targetable=!0,e.userData.entityId=t}unregisterTargetable(e){this.targetables.delete(e)}onClick(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=Array.from(this.targetables.keys()),n=this.raycaster.intersectObjects(t,!0);if(n.length>0){let i=null,r=n[0].object;for(;r;){if(this.targetables.has(r)){i=r;break}r=r.parent}i&&this.setTarget(i)}else this.clearTarget()}setTarget(e){const t=this.targetables.get(e);if(!t)return;const n=new C;e.getWorldPosition(n),this.currentTarget={id:t.id,name:t.name,team:t.team,mesh:e,distance:0,direction:n},this.updateTargetRing(),this.updateUI(),console.log(`Target set: ${t.name} (${t.id})`)}clearTarget(){this.currentTarget=null,this.targetRing.visible=!1,this.updateUI(),console.log("Target cleared")}update(e){if(!this.currentTarget)return;const t=new C;this.currentTarget.mesh.getWorldPosition(t),this.currentTarget.distance=e.distanceTo(t),this.currentTarget.direction=t.clone().sub(e),this.updateTargetRing(),this.updateUI()}updateTargetRing(){if(!this.currentTarget)return;const e=this.currentTarget.mesh.userData.gameEntity,t=new C;this.currentTarget.mesh.getWorldPosition(t);const n=Math.max(.45,(e==null?void 0:e.radius)??.7);this.targetRing.position.set(t.x,t.y+.045,t.z),this.targetRing.scale.setScalar(n),this.targetRing.visible=!0}updateUI(){if(!(!this.nameElement||!this.infoElement))if(!this.currentTarget)this.nameElement.textContent="No Target",this.nameElement.style.color="#888",this.infoElement.textContent="",this.healthElement&&(this.healthElement.style.display="none");else{const{name:e,team:t,distance:n,direction:i}=this.currentTarget,r=this.currentTarget.mesh.userData.gameEntity;if(this.nameElement.textContent=e,this.nameElement.style.color=t==="friendly"?"#00ff88":t==="neutral"?"#ffcc00":"#ff4444",this.healthElement&&this.healthFillElement&&this.healthTextElement&&r&&r.maxHp>0){const a=Math.max(0,Math.min(1,r.hp/r.maxHp));this.healthElement.style.display="block",this.healthFillElement.style.width=`${a*100}%`,this.healthTextElement.textContent=`${Math.ceil(r.hp)} / ${r.maxHp}`}else this.healthElement&&(this.healthElement.style.display="none");const o=(iv(i)*180/Math.PI).toFixed(0);this.infoElement.innerHTML=`
        Distance: ${n.toFixed(1)}m<br>
        Direction: ${ea(sv(i).normalize())}<br>
        Bearing: ${o}°
      `}}getRaycaster(){return this.raycaster}}const as={radius:.35,height:1.8},pl=[{id:"player",name:"Player (Rogue)",team:"friendly",position:[0,0,8],collider:{...as},color:16776960,class:"Rogue"},{id:"ally1",name:"Mage",team:"friendly",position:[-3,0,10],collider:{...as},color:43775,class:"Mage"},{id:"ally2",name:"Priest",team:"friendly",position:[3,0,10],collider:{...as},color:16777215,class:"Priest"},{id:"enemy1",name:"Enemy Warrior",team:"enemy",position:[0,0,-8],collider:{...as},color:16737792,class:"Warrior"},{id:"enemy2",name:"Enemy Druid",team:"enemy",position:[-4,0,-10],collider:{...as},color:16737792,class:"Druid"},{id:"enemy3",name:"Enemy Shaman",team:"enemy",position:[4,0,-10],collider:{...as},color:16737792,class:"Shaman"}];class ed{constructor(e=16776960){I(this,"root");I(this,"hips");I(this,"torso");I(this,"head");I(this,"leftArm");I(this,"rightArm");I(this,"leftLeg");I(this,"rightLeg");I(this,"state","idle");I(this,"speed01",0);I(this,"phase",0);I(this,"targetYaw",0);I(this,"currentYaw",0);I(this,"color");I(this,"isCasting",!1);I(this,"attackAnimTime",0);I(this,"attackAnimDuration",0);I(this,"isDebuffed",!1);I(this,"debuffMesh",null);this.color=e,this.root=new de,this.root.name="CharacterRoot",this.hips=this.createHips(),this.torso=this.createTorso(),this.head=this.createHead(),this.leftArm=this.createArm("left"),this.rightArm=this.createArm("right"),this.leftLeg=this.createLeg("left"),this.rightLeg=this.createLeg("right"),this.root.add(this.hips),this.hips.add(this.torso),this.hips.add(this.leftLeg),this.hips.add(this.rightLeg),this.torso.add(this.head),this.torso.add(this.leftArm),this.torso.add(this.rightArm)}createMaterial(){return new Oe({color:this.color,roughness:.7,metalness:.2})}createHips(){const e=new de;e.name="Hips",e.position.y=.9;const t=new me(.35,.15,.2),n=new $(t,this.createMaterial());return n.castShadow=!0,e.add(n),e}createTorso(){const e=new de;e.name="Torso",e.position.y=.3;const t=new me(.35,.45,.2),n=new $(t,this.createMaterial());return n.position.y=.225,n.castShadow=!0,e.add(n),e}createHead(){const e=new Bt(.12,12,8),t=new $(e,this.createMaterial());return t.name="Head",t.position.y=.55,t.castShadow=!0,t}createArm(e){const t=new de;t.name=`${e}Arm`;const n=e==="left"?-.25:.25;t.position.set(n,.4,0);const i=new zt(.04,.04,.25,8),r=new $(i,this.createMaterial());r.position.y=-.125,r.castShadow=!0,t.add(r);const o=new de;o.position.y=-.25;const a=new zt(.035,.035,.22,8),l=new $(a,this.createMaterial());return l.position.y=-.11,l.castShadow=!0,o.add(l),t.add(o),t}createLeg(e){const t=new de;t.name=`${e}Leg`;const n=e==="left"?-.1:.1;t.position.set(n,0,0);const i=new zt(.06,.05,.4,8),r=new $(i,this.createMaterial());r.position.y=-.2,r.castShadow=!0,t.add(r);const o=new de;o.position.y=-.4;const a=new zt(.05,.04,.4,8),l=new $(a,this.createMaterial());l.position.y=-.2,l.castShadow=!0,o.add(l);const c=new me(.08,.05,.15),h=new $(c,this.createMaterial());return h.position.set(0,-.425,.03),h.castShadow=!0,o.add(h),t.add(o),t}setFacingYaw(e){this.targetYaw=e}setLocomotion(e,t,n){this.state=e,this.speed01=Math.max(0,Math.min(1,t))}triggerOneShot(e){this.attackAnimTime=0,this.attackAnimDuration=.5}startCasting(e){this.isCasting=!0}stopCasting(){this.isCasting=!1}setDebuffed(e){if(e!==this.isDebuffed)if(this.isDebuffed=e,e){if(this.hips.visible=!1,!this.debuffMesh){const t=new me(.8,.8,.8),n=new Oe({color:8930559,roughness:.5,metalness:.3});this.debuffMesh=new $(t,n),this.debuffMesh.position.y=.9,this.debuffMesh.castShadow=!0,this.root.add(this.debuffMesh)}this.debuffMesh.visible=!0}else this.hips.visible=!0,this.debuffMesh&&(this.debuffMesh.visible=!1)}update(e){let n=(this.targetYaw-this.currentYaw+Math.PI)%(Math.PI*2)-Math.PI;if(n<-Math.PI&&(n+=Math.PI*2),this.currentYaw+=n*Math.min(1,e*10),this.root.rotation.y=this.currentYaw,this.isDebuffed&&this.debuffMesh){this.debuffMesh.rotation.y+=e*2,this.debuffMesh.rotation.x+=e*.5;return}this.attackAnimDuration>0&&(this.attackAnimTime+=e,this.attackAnimTime>=this.attackAnimDuration&&(this.attackAnimDuration=0,this.attackAnimTime=0));const i=this.state==="run"?12:6;switch((this.state==="walk"||this.state==="run")&&(this.phase+=e*i*this.speed01),this.state){case"idle":this.applyIdlePose(e);break;case"walk":case"run":this.applyWalkPose();break;case"jump":case"fall":this.applyJumpPose();break}(this.isCasting||this.attackAnimDuration>0)&&this.applyCastingPose()}applyIdlePose(e){const t=Date.now()*.002,n=Math.sin(t)*.01;this.torso.position.y=.3+n,this.hips.position.y=.9,this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0}applyWalkPose(){const e=Math.sin(this.phase),t=this.state==="run"?.6:.35;this.leftLeg.rotation.x=e*t,this.rightLeg.rotation.x=-e*t,this.leftArm.rotation.x=-e*t*.7,this.rightArm.rotation.x=e*t*.7;const n=Math.abs(Math.sin(this.phase*2))*.03;this.hips.position.y=.9+n}applyJumpPose(){this.leftLeg.rotation.x=-.4,this.rightLeg.rotation.x=-.4,this.leftArm.rotation.x=-.8,this.rightArm.rotation.x=-.8,this.leftArm.rotation.z=.3,this.rightArm.rotation.z=-.3}applyCastingPose(){this.leftArm.rotation.x=-1.2,this.rightArm.rotation.x=-1.2,this.leftArm.rotation.z=.2,this.rightArm.rotation.z=-.2}dispose(){this.root.traverse(e=>{e instanceof $&&(e.geometry.dispose(),e.material instanceof Yt&&e.material.dispose())})}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var td=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(td(""))}catch{td=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var un=Uint8Array,si=Uint16Array,Tc=Uint32Array,Dp=new un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Up=new un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pM=new un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Np=function(s,e){for(var t=new si(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Tc(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},Fp=Np(Dp,2),Op=Fp[0],mM=Fp[1];Op[28]=258,mM[258]=28;var gM=Np(Up,0),_M=gM[0],Ec=new si(32768);for(var ut=0;ut<32768;++ut){var Qn=(ut&43690)>>>1|(ut&21845)<<1;Qn=(Qn&52428)>>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>>4|(Qn&3855)<<4,Ec[ut]=((Qn&65280)>>>8|(Qn&255)<<8)>>>1}var tr=function(s,e,t){for(var n=s.length,i=0,r=new si(e);i<n;++i)++r[s[i]-1];var o=new si(e);for(i=0;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new si(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=o[s[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Ec[u]>>>l]=c}else for(a=new si(n),i=0;i<n;++i)s[i]&&(a[i]=Ec[o[s[i]-1]++]>>>15-s[i]);return a},Dr=new un(288);for(var ut=0;ut<144;++ut)Dr[ut]=8;for(var ut=144;ut<256;++ut)Dr[ut]=9;for(var ut=256;ut<280;++ut)Dr[ut]=7;for(var ut=280;ut<288;++ut)Dr[ut]=8;var kp=new un(32);for(var ut=0;ut<32;++ut)kp[ut]=5;var xM=tr(Dr,9,1),yM=tr(kp,5,1),ml=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},_n=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},gl=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},vM=function(s){return(s/8|0)+(s&7&&1)},MM=function(s,e,t){(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof si?si:s instanceof Tc?Tc:un)(t-e);return n.set(s.subarray(e,t)),n},SM=function(s,e,t){var n=s.length;if(!n||t&&!t.l&&n<5)return e||new un(0);var i=!e||t,r=!t||t.i;t||(t={}),e||(e=new un(n*3));var o=function(ye){var ge=e.length;if(ye>ge){var be=new un(Math.max(ge*2,ye));be.set(e),e=be}},a=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,d=t.m,f=t.n,g=n*8;do{if(!h){t.f=a=_n(s,l,1);var _=_n(s,l+1,3);if(l+=3,_)if(_==1)h=xM,u=yM,d=9,f=5;else if(_==2){var x=_n(s,l,31)+257,v=_n(s,l+10,15)+4,E=x+_n(s,l+5,31)+1;l+=14;for(var w=new un(E),T=new un(19),L=0;L<v;++L)T[pM[L]]=_n(s,l+L*3,7);l+=v*3;for(var M=ml(T),S=(1<<M)-1,O=tr(T,M,1),L=0;L<E;){var k=O[_n(s,l,S)];l+=k&15;var p=k>>>4;if(p<16)w[L++]=p;else{var N=0,R=0;for(p==16?(R=3+_n(s,l,3),l+=2,N=w[L-1]):p==17?(R=3+_n(s,l,7),l+=3):p==18&&(R=11+_n(s,l,127),l+=7);R--;)w[L++]=N}}var F=w.subarray(0,x),D=w.subarray(x);d=ml(F),f=ml(D),h=tr(F,d,1),u=tr(D,f,1)}else throw"invalid block type";else{var p=vM(l)+4,m=s[p-4]|s[p-3]<<8,y=p+m;if(y>n){if(r)throw"unexpected EOF";break}i&&o(c+m),e.set(s.subarray(p,y),c),t.b=c+=m,t.p=l=y*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}i&&o(c+131072);for(var z=(1<<d)-1,V=(1<<f)-1,K=l;;K=l){var N=h[gl(s,l)&z],Y=N>>>4;if(l+=N&15,l>g){if(r)throw"unexpected EOF";break}if(!N)throw"invalid length/literal";if(Y<256)e[c++]=Y;else if(Y==256){K=l,h=null;break}else{var J=Y-254;if(Y>264){var L=Y-257,ie=Dp[L];J=_n(s,l,(1<<ie)-1)+Op[L],l+=ie}var H=u[gl(s,l)&V],Z=H>>>4;if(!H)throw"invalid distance";l+=H&15;var D=_M[Z];if(Z>3){var ie=Up[Z];D+=gl(s,l)&(1<<ie)-1,l+=ie}if(l>g){if(r)throw"unexpected EOF";break}i&&o(c+131072);for(var ae=c+J;c<ae;c+=4)e[c]=e[c-D],e[c+1]=e[c+1-D],e[c+2]=e[c+2-D],e[c+3]=e[c+3-D];c=ae}}t.l=h,t.p=K,t.b=c,h&&(a=1,t.m=d,t.d=u,t.n=f)}while(!a);return c==e.length?e:MM(e,0,c)},wM=new un(0),bM=function(s){if((s[0]&15)!=8||s[0]>>>4>7||(s[0]<<8|s[1])%31)throw"invalid zlib data";if(s[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function TM(s,e){return SM((bM(s),s.subarray(2,-4)),e)}var EM=typeof TextDecoder<"u"&&new TextDecoder,AM=0;try{EM.decode(wM,{stream:!0}),AM=1}catch{}function Bp(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function RM(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=r[a-c],d=i[c]/(h+u);i[c]=l+h*d,l=u*d}i[a]=l}return i}function CM(s,e,t,n){const i=Bp(s,n,e),r=RM(i,n,s,e),o=new Je(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function PM(s,e,t,n,i){const r=[];for(let u=0;u<=t;++u)r[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[s+1-u],c[u]=i[s+u]-e;let d=0;for(let f=0;f<u;++f){const g=c[f+1],_=l[u-f];a[u][f]=g+_;const p=a[f][u-1]/a[u][f];a[f][u]=d+g*p,d=_*p}a[u][u]=d}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let d=0,f=1;const g=[];for(let _=0;_<=t;++_)g[_]=r.slice(0);g[0][0]=1;for(let _=1;_<=n;++_){let p=0;const m=u-_,y=t-_;u>=_&&(g[f][0]=g[d][0]/a[y+1][m],p=g[f][0]*a[m][y]);const x=m>=-1?1:-m,v=u-1<=y?_-1:t-u;for(let w=x;w<=v;++w)g[f][w]=(g[d][w]-g[d][w-1])/a[y+1][m+w],p+=g[f][w]*a[m+w][y];u<=y&&(g[f][_]=-g[d][_-1]/a[y+1][u],p+=g[f][_]*a[u][y]),o[_][u]=p;const E=d;d=f,f=E}}let h=t;for(let u=1;u<=n;++u){for(let d=0;d<=t;++d)o[u][d]*=h;h*=t-u}return o}function IM(s,e,t,n,i){const r=i<s?i:s,o=[],a=Bp(s,n,e),l=PM(a,n,s,r,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=r;++h){const u=c[a-s].clone().multiplyScalar(l[h][0]);for(let d=1;d<=s;++d)u.add(c[a-s+d].clone().multiplyScalar(l[h][d]));o[h]=u}for(let h=r+1;h<=i+1;++h)o[h]=new Je(0,0,0);return o}function LM(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function DM(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new C(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(LM(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function UM(s,e,t,n,i){const r=IM(s,e,t,n,i);return DM(r)}class NM extends lh{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Je(a.x,a.y,a.z,a.w)}}getPoint(e,t=new C){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=CM(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new C){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=UM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let Xe,Mt,Qt;class FM extends Ln{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?Ci.extractUrlBase(e):r.path,a=new Ma(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(GM(e))Xe=new HM().parse(e);else{const i=Vp(e);if(!VM(i))throw new Error("THREE.FBXLoader: Unknown format.");if(id(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+id(i));Xe=new zM().parse(i)}const n=new Ir(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new OM(n,this.manager).parse(Xe)}}class OM{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Mt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new kM().parse(i);return this.parseScene(i,r,n),Qt}parseConnections(){const e=new Map;return"Connections"in Xe&&Xe.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Xe.Objects){const n=Xe.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in Xe.Objects){const n=Xe.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?vn:Rt,n.wrapT=a===0?vn:Rt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,r=Mt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new yt):(l.setPath(this.textureLoader.path),o=l.load(n))}else if(a==="dds"){const l=this.manager.getHandler(".dds");l===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",e.RelativeFilename),o=new yt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new yt):o=this.textureLoader.load(n);return this.textureLoader.setPath(i),o}parseMaterials(e){const t=new Map;if("Material"in Xe.Objects){const n=Xe.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Mt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new Vo;break;case"lambert":a=new hi;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new Vo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Q().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Q().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Q().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Q().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Q().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Q().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return Mt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=tt);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=tt);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=sr,i.envMap.colorSpace=tt);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=tt);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Xe.Objects&&t in Xe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Mt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Xe.Objects){const n=Xe.Objects.Deformer;for(const i in n){const r=n[i],o=Mt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new fe().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Mt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Qt=new de;const i=this.parseModels(e.skeletons,t,n),r=Xe.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),Mt.get(l.ID).parents.forEach(function(u){const d=i.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&Qt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Qt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Hp(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new BM().parse();Qt.children.length===1&&Qt.children[0].isGroup&&(Qt.children[0].animations=a,Qt=Qt.children[0]),Qt.animations=a}parseModels(e,t,n){const i=new Map,r=Xe.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=Mt.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new dr;break;case"Null":default:h=new de;break}h.name=l.attrName?Ze.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=r;r=new dr,r.matrixWorld.copy(c.transformLink),r.name=i?Ze.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[h]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=Xe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new et;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new kt(h,c,r,o),u!==null&&t.setFocalLength(u);break;case 1:t=new Rs(-a/2,a/2,l/2,-l/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new et;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=Xe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new et;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new Q().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Qo(r,o,a,l);break;case 1:t=new Sa(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=pt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=pt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new fh(r,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Qo(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Vo({name:Ln.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(i=new ah(r,o),i.normalizeSkinWeights()):i=new $(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new Oi({name:Ln.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new br(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Gp(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Mt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=Xe.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Qt.add(e.target)):e.lookAt(new C().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];Mt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Mt.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new wr(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Xe.Objects){const t=Xe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new fe().fromArray(r.Matrix.a)}):e[i.Node]=new fe().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Xe){if("AmbientColor"in Xe.GlobalSettings){const e=Xe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Q(t,n,i).convertSRGBToLinear();Qt.add(new ph(r,1))}}"UnitScaleFactor"in Xe.GlobalSettings&&(Qt.userData.unitScaleFactor=Xe.GlobalSettings.UnitScaleFactor.value)}}}class kM{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Xe.Objects){const n=Xe.Objects.Geometry;for(const i in n){const r=Mt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(u){return Xe.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,d){return i[d.ID]!==void 0&&(u=i[d.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Gp(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Hp(c);return this.genGeometry(t,a,r,h)}genGeometry(e,t,n,i){const r=new ot;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Ue(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new Ue(a.colors,3)),t&&(r.setAttribute("skinIndex",new ha(a.weightsIndices,4)),r.setAttribute("skinWeight",new Ue(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new He().getNormalMatrix(i),h=new Ue(a.normal,3);h.applyNormalMatrix(c),r.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;r.setAttribute(u,new Ue(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,d){u!==c&&(r.addGroup(h,d-h,c),c=u,h=d)}),r.groups.length>0){const u=r.groups[r.groups.length-1],d=u.start+u.count;d!==a.materialIndex.length&&r.addGroup(d,a.materialIndex.length-d,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(f,g){let _,p=!1;f<0&&(f=f^-1,p=!0);let m=[],y=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const x=Ao(g,n,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){y.push(x.weight),m.push(x.id)}),y.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],v=[0,0,0,0];y.forEach(function(E,w){let T=E,L=m[w];v.forEach(function(M,S,O){if(T>M){O[S]=T,T=M;const k=x[S];x[S]=L,L=k}})}),m=x,y=v}for(;y.length<4;)y.push(0),m.push(0);for(let x=0;x<4;++x)h.push(y[x]),u.push(m[x])}if(e.normal){const x=Ao(g,n,f,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=Ao(g,n,f,e.material)[0],_<0&&(d.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(x,v){const E=Ao(g,n,f,x);c[v]===void 0&&(c[v]=[]),c[v].push(E[0]),c[v].push(E[1])}),i++,p&&(d.genFace(t,e,o,_,a,l,c,h,u,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new C(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new C(0,1,0):new C(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new ue(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,h){let u;if(h>3){const d=[];for(let p=0;p<n.length;p+=3)d.push(new C(t.vertexPositions[n[p]],t.vertexPositions[n[p+1]],t.vertexPositions[n[p+2]]));const{tangent:f,bitangent:g}=this.getNormalTangentAndBitangent(d),_=[];for(const p of d)_.push(this.flattenVertex(p,f,g));u=va.triangulateShape(_,[])}else u=[[0,1,2]];for(const[d,f,g]of u)e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[g*3]]),e.vertex.push(t.vertexPositions[n[g*3+1]]),e.vertex.push(t.vertexPositions[n[g*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[g*4]),e.vertexWeights.push(l[g*4+1]),e.vertexWeights.push(l[g*4+2]),e.vertexWeights.push(l[g*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[g*4]),e.weightsIndices.push(c[g*4+1]),e.weightsIndices.push(c[g*4+2]),e.weightsIndices.push(c[g*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[g*3]),e.colors.push(o[g*3+1]),e.colors.push(o[g*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[g*3]),e.normal.push(r[g*3+1]),e.normal.push(r[g*3+2])),t.uv&&t.uv.forEach(function(_,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][d*2]),e.uvs[p].push(a[p][d*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][g*2]),e.uvs[p].push(a[p][g*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Xe.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let g=0;g<l.length;g++){const _=l[g]*3;h[_]=a[g*3],h[_+1]=a[g*3+1],h[_+2]=a[g*3+2]}const u={vertexIndices:o,vertexPositions:h},d=this.genBuffers(u),f=new Ue(d.vertex,3);f.name=r||n.attrName,f.applyMatrix4(i),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Q;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new ot;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,d=o.length;u<d;u+=4)r.push(new Je().fromArray(o,u));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}const h=new NM(n,i,r,a,l).getPoints(r.length*12);return new ot().setFromPoints(h)}}class BM{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(Xe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Xe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=Xe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(WM),values:t[n].KeyValueFloat.a},r=Mt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Xe.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=Mt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(r[c]===void 0){const u=Mt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=Xe.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?Ze.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Qt.traverse(function(g){g.ID===d.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new fe),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),r[c]=f}}r[c]&&(r[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(r[c]===void 0){const u=Mt.get(l.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,d=Mt.get(u).parents[0].ID,f=Mt.get(d).parents[0].ID,g=Mt.get(f).parents[0].ID,_=Xe.Objects.Model[g],p={modelName:_.attrName?Ze.sanitizeNodeName(_.attrName):"",morphName:Xe.Objects.Deformer[u].attrName};r[c]=p}r[c][h.attr]=h}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=Xe.Objects.AnimationStack,n={};for(const i in t){const r=Mt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new ws(e.name,-1,t)}generateTracks(e){const t=[];let n=new C,i=new C;if(e.transform&&e.transform.decompose(n,new mt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new di(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const u=this.interpolateRotations(t.x,t.y,t.z,r);o=u[0],a=u[1]}n!==void 0&&(n=n.map(pt.degToRad),n.push(r),n=new jt().fromArray(n),n=new mt().setFromEuler(n)),i!==void 0&&(i=i.map(pt.degToRad),i.push(r),i=new jt().fromArray(i),i=new mt().setFromEuler(i).invert());const l=new mt,c=new jt,h=[];if(!a||!o)return new In(e+".quaternion",[],[]);for(let u=0;u<a.length;u+=3)c.set(a[u],a[u+1],a[u+2],r),l.setFromEuler(c),n!==void 0&&l.premultiply(n),i!==void 0&&l.multiply(i),u>2&&new mt().fromArray(h,(u-3)/3*4).dot(l)<0&&l.set(-l.x,-l.y,-l.z,-l.w),l.toArray(h,u/3*4);return new In(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Qt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ui(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const h=t.x.values[o];r.push(h),i[0]=h}else r.push(i[0]);if(a!==-1){const h=t.y.values[a];r.push(h),i[1]=h}else r.push(i[1]);if(l!==-1){const h=t.z.values[l];r.push(h),i[2]=h}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(pt.degToRad(e.values[0])),o.push(pt.degToRad(t.values[0])),o.push(pt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(pt.degToRad),h=[e.values[a],t.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(pt.degToRad),d=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const _=Math.max(...f)/180,p=new jt(...c,i),m=new jt(...u,i),y=new mt().setFromEuler(p),x=new mt().setFromEuler(m);y.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const v=e.times[a-1],E=e.times[a]-v,w=new mt,T=new jt;for(let L=0;L<1;L+=1/_)w.copy(y.clone().slerp(x.clone(),L)),r.push(v+L*E),T.setFromQuaternion(w,i),o.push(T.x),o.push(T.y),o.push(T.z)}else r.push(e.times[a]),o.push(pt.degToRad(e.values[a])),o.push(pt.degToRad(t.values[a])),o.push(pt.degToRad(n.values[a]))}return[r,o]}}class zM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new zp,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",r=[c,h],jM(r,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=xl(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=xl(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=xl(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class HM{parse(e){const t=new nd(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new zp;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let d=0;d<r;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=TM(new Uint8Array(e.getArrayBuffer(o))),l=new nd(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class nd{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class zp{add(e,t){this[e]=t}}function GM(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Vp(s,0,e.length)}function VM(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function id(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function WM(s){return s/46186158e3}const XM=[];function Ao(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return qM(XM,n.buffer,r,o)}const _l=new jt,ls=new C;function Hp(s){const e=new fe,t=new fe,n=new fe,i=new fe,r=new fe,o=new fe,a=new fe,l=new fe,c=new fe,h=new fe,u=new fe,d=new fe,f=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(ls.fromArray(s.translation)),s.preRotation){const S=s.preRotation.map(pt.degToRad);S.push(s.eulerOrder||jt.DEFAULT_ORDER),t.makeRotationFromEuler(_l.fromArray(S))}if(s.rotation){const S=s.rotation.map(pt.degToRad);S.push(s.eulerOrder||jt.DEFAULT_ORDER),n.makeRotationFromEuler(_l.fromArray(S))}if(s.postRotation){const S=s.postRotation.map(pt.degToRad);S.push(s.eulerOrder||jt.DEFAULT_ORDER),i.makeRotationFromEuler(_l.fromArray(S)),i.invert()}s.scale&&r.scale(ls.fromArray(s.scale)),s.scalingOffset&&a.setPosition(ls.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(ls.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(ls.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(ls.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),h.copy(s.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),_=new fe;_.extractRotation(h);const p=new fe;p.copyPosition(h);const m=p.clone().invert().multiply(h),y=_.clone().invert().multiply(m),x=r,v=new fe;if(f===0)v.copy(_).multiply(g).multiply(y).multiply(x);else if(f===1)v.copy(_).multiply(y).multiply(g).multiply(x);else{const O=new fe().scale(new C().setFromMatrixScale(u)).clone().invert(),k=y.clone().multiply(O);v.copy(_).multiply(g).multiply(k).multiply(x)}const E=c.clone().invert(),w=o.clone().invert();let T=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(E).multiply(a).multiply(o).multiply(r).multiply(w);const L=new fe().copyPosition(T),M=h.clone().multiply(L);return d.copyPosition(M),T=d.clone().multiply(v),T.premultiply(h.invert()),T}function Gp(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function xl(s){return s.split(",").map(function(t){return parseFloat(t)})}function Vp(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function jM(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function qM(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}function YM(s){s.tracks.forEach(e=>{if(!(e.name.toLowerCase().includes("hips")&&e.name.endsWith(".position")))return;const n=e.values;for(let i=0;i<n.length;i+=3)n[i]=0,n[i+2]=0})}const KM={idle:"idle.fbx",walk:"walk.fbx",walk_back:"walk_back.fbx",walk_left:"walk_left.fbx",walk_right:"walk_right.fbx",run:"run.fbx",run_back:"run_back.fbx",run_left:"run_left.fbx",run_right:"run_right.fbx",run_stop:"run_stop.fbx",turn_left:"turn_left.fbx",turn_right:"turn_right.fbx",jump:"jump_mutant.fbx"},$M={cast_spell:"cast_spell.fbx",cast_heal:"cast_heal.fbx",swipe:"mutant_swiping.fbx"},ZM={idle:"mutant_breathing_idle.fbx",walk:"mutant_walking.fbx",run:"mutant_run.fbx",run_stop:"mutant_run.fbx",turn_left:"mutant_left_turn_45.fbx",turn_right:"mutant_right_turn_45.fbx",jump:"mutant_jumping.fbx"},JM={cast_spell:"mutant_swiping.fbx",cast_heal:"mutant_flexing_muscles.fbx",swipe:"mutant_swiping.fbx"},nr=class nr{constructor(e,t){I(this,"root");I(this,"mixer");I(this,"clips",new Map);I(this,"current",null);I(this,"currentName",null);I(this,"FADE",.2);I(this,"prevState","idle");I(this,"groundState","idle");I(this,"targetYaw",0);I(this,"currentYaw",0);I(this,"prevYaw",0);I(this,"yawVel",0);I(this,"jumpLandTimer",null);I(this,"isCastingActive",!1);I(this,"upperBodyAction",null);I(this,"upperBodyFadeTimer",null);I(this,"moveLocal",new C(0,0,-1));I(this,"ONE_SHOTS",new Set(["run_stop","turn_left","turn_right","jump","cast_spell","cast_heal","swipe"]));this.root=e,this.mixer=t}static async load(e="models",t="character"){const n=new FM,i=_=>new Promise((p,m)=>n.load(_,p,void 0,m)),r=t==="mutant",o=r?ZM:KM,a=r?JM:$M,l=Object.entries(o),[c,...h]=await Promise.all([i(`${e}/${t}.fbx`),...l.map(([,_])=>i(`${e}/${_}`))]);c.scale.setScalar(.01),c.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0)});const u=new Sp(c),d=new nr(c,u),f=(_,p)=>{const m=p.animations[0];if(!m){console.warn(`No clip in ${_}`);return}m.name=_,m.tracks.forEach(y=>{y.name=y.name.replace(/^[^|]+\|/,"")}),YM(m),d.clips.set(_,u.clipAction(m)),console.log(`✓ ${_} (${m.duration.toFixed(2)}s)`),_==="swipe"&&d.buildUpperBodyAction(m)};h.forEach((_,p)=>f(l[p][0],_)),d.play("idle");const g=Object.entries(a);return Promise.allSettled(g.map(([,_])=>i(`${e}/${_}`))).then(_=>{_.forEach((p,m)=>{p.status==="fulfilled"?f(g[m][0],p.value):console.warn(`⚠ Optional anim failed: ${g[m][0]}`)})}),d}setFacingYaw(e){this.targetYaw=-e+Math.PI}setLocomotion(e,t,n){n&&this.moveLocal.copy(n);const i=this.prevState==="walk"||this.prevState==="run",r=e==="walk"||e==="run";(e==="walk"||e==="run"||e==="idle")&&(this.groundState=e);const o=this.prevState==="jump"||this.prevState==="fall",a=e==="jump"||e==="fall";if(e!==this.prevState)a&&!o?this.startAirborne():!a&&o?this.finishLanding():i&&this.prevState==="run"&&e==="idle"&&this.dirSuffix()===""?this.oneShot("run_stop","idle"):r?this.play(this.pickMoveClip(t>.55?"run":"walk")):a||this.play("idle"),this.prevState=e;else if(r){const l=this.pickMoveClip(t>.55?"run":"walk");l!==this.currentName&&this.play(l)}}pickMoveClip(e){const t=this.dirSuffix();if(t==="")return e;const n=`${e}${t}`;return this.clips.has(n)?n:e}dirSuffix(){const e=-this.moveLocal.z,t=this.moveLocal.x;return Math.abs(e)>=Math.abs(t)?e>=0?"":"_back":t>=0?"_right":"_left"}triggerOneShot(e){const t={attack:{anim:"cast_spell",dur:.6},cast_spell:{anim:"cast_spell",dur:.6},cast_heal:{anim:"cast_heal",dur:.6},rogue_hemorrhage:{anim:"swipe",dur:.45},rogue_shadowstep:{anim:"swipe",dur:.3},rogue_blind:{anim:"cast_spell",dur:.5},mage_blink:{anim:"swipe",dur:.25},priest_fear:{anim:"cast_spell",dur:.5},priest_heal:{anim:"cast_heal",dur:.6}},{anim:n,dur:i}=t[e]??{anim:"cast_spell",dur:.6};this.oneShot(n,this.groundState,i)}startCasting(e){var n;if(this.isCastingActive&&this.currentName==="cast_spell")return;this.isCastingActive=!0,this.replay("cast_spell");const t=this.clips.get("cast_spell");if(t&&e&&e>0){const i=(n=t._clip)==null?void 0:n.duration;i&&i>0&&(t.timeScale=i/e)}}stopCasting(){this.isCastingActive&&(this.isCastingActive=!1,(this.currentName==="cast_spell"||this.currentName==="cast_heal")&&this.play(this.groundState))}setDebuffed(e){this.mixer.timeScale=e?.5:1}triggerUpperBodyAttack(e=.5){var i;const t=this.upperBodyAction;if(!t){this.triggerOneShot("rogue_hemorrhage");return}const n=(i=t._clip)==null?void 0:i.duration;n&&n>0&&(t.timeScale=n/e),t.setEffectiveWeight(1).reset().fadeIn(.08).play(),this.upperBodyFadeTimer!==null&&clearTimeout(this.upperBodyFadeTimer),this.upperBodyFadeTimer=window.setTimeout(()=>{this.upperBodyFadeTimer=null,t.fadeOut(.15)},Math.max(50,e*1e3-100))}buildUpperBodyAction(e){const t=e.tracks.filter(i=>{const r=i.name.toLowerCase();return/(hips|upleg|leg|foot|toe)/.test(r)?!1:/(spine|chest|neck|head|shoulder|arm|hand)/.test(r)});if(t.length===0){console.warn("upper-body filter matched 0 tracks — autoattack will fall back to full-body");return}const n=new ws("swipe_upper",e.duration,t);this.upperBodyAction=this.mixer.clipAction(n),this.upperBodyAction.loop=Yo,this.upperBodyAction.clampWhenFinished=!1,this.upperBodyAction.setEffectiveWeight(0),console.log(`✓ swipe_upper (${t.length}/${e.tracks.length} tracks)`)}setAirborne(e,t){var o;const n=this.clips.get("jump");if(!n||this.currentName!=="jump")return;const i=(o=n._clip)==null?void 0:o.duration;if(!i)return;const r=pt.clamp((t-e)/(2*t),0,1);n.time=r*nr.JUMP_AIR_END*i}update(e){this.mixer.update(e);const t=this.targetYaw-this.currentYaw,n=Math.atan2(Math.sin(t),Math.cos(t));this.currentYaw+=n*Math.min(1,e*12),this.yawVel=(this.currentYaw-this.prevYaw)/e,this.prevYaw=this.currentYaw,this.root.rotation.y=this.currentYaw,this.prevState==="idle"&&this.currentName==="idle"&&(this.yawVel>1.5?this.play("turn_left"):this.yawVel<-1.5&&this.play("turn_right")),(this.currentName==="turn_left"||this.currentName==="turn_right")&&Math.abs(this.yawVel)<.3&&this.play("idle")}dispose(){this.mixer.stopAllAction(),this.root.traverse(e=>{var t,n;(t=e.geometry)==null||t.dispose(),Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):(n=e.material)==null||n.dispose()})}play(e){e!==this.currentName&&this.startClip(e)}replay(e){this.startClip(e)}startClip(e){const t=this.clips.get(e);if(!t)return;this.jumpLandTimer!==null&&(clearTimeout(this.jumpLandTimer),this.jumpLandTimer=null),this.current&&this.current!==t&&this.current.fadeOut(this.FADE);const n=!this.ONE_SHOTS.has(e);t.loop=n?jc:Yo,t.clampWhenFinished=!n,t.timeScale=1,t.paused=!1,t.reset().fadeIn(this.FADE).play(),this.current=t,this.currentName=e}oneShot(e,t,n){var l;if(!this.clips.get(e)){this.play(t);return}this.replay(e);const r=this.clips.get(e),o=(l=r._clip)==null?void 0:l.duration;n&&o&&o>0&&(r.timeScale=o/n);const a=(o??1)/(r.timeScale||1);setTimeout(()=>{this.currentName===e&&this.play(t)},a*1e3)}startAirborne(){const e=this.clips.get("jump");if(!e){this.play(this.groundState);return}this.replay("jump"),e.paused=!0,e.time=0}finishLanding(){var i;const e=this.clips.get("jump");if(!e){this.play(this.groundState);return}const t=(i=e._clip)==null?void 0:i.duration;if(!t){this.play(this.groundState);return}e.paused=!1;const n=Math.max(0,t-e.time);this.jumpLandTimer!==null&&clearTimeout(this.jumpLandTimer),this.jumpLandTimer=window.setTimeout(()=>{this.jumpLandTimer=null,this.currentName==="jump"&&this.play(this.groundState)},n*1e3)}};I(nr,"JUMP_AIR_END",.7);let Ac=nr;class QM{constructor(){I(this,"cooldowns",new Map)}startCooldown(e,t){this.cooldowns.set(e,Date.now()+t*1e3)}getRemaining(e){const t=this.cooldowns.get(e);return t?Math.max(0,(t-Date.now())/1e3):0}isReady(e){return this.getRemaining(e)<=0}reset(e){this.cooldowns.delete(e)}resetAll(){this.cooldowns.clear()}}class eS{constructor(){I(this,"debuffs",new Map)}applyDebuff(e,t){this.debuffs.has(e)||this.debuffs.set(e,[]);const n=this.debuffs.get(e),i=n.findIndex(r=>r.id===t.id);i>=0&&n.splice(i,1),n.push({...t,expiresAt:Date.now()+t.duration*1e3})}hasDebuff(e,t){const n=this.debuffs.get(e);return n?n.some(i=>i.id===t&&i.expiresAt>Date.now()):!1}getDebuffs(e){const t=this.debuffs.get(e);return t?t.filter(n=>n.expiresAt>Date.now()):[]}getDebuffRemaining(e,t){const n=this.debuffs.get(e);if(!n)return 0;const i=n.find(r=>r.id===t);return i?Math.max(0,(i.expiresAt-Date.now())/1e3):0}removeDebuff(e,t){const n=this.debuffs.get(e);if(!n)return;const i=n.findIndex(r=>r.id===t);i>=0&&n.splice(i,1)}update(){const e=Date.now();for(const[t,n]of this.debuffs){const i=n.filter(r=>r.expiresAt>e);i.length===0?this.debuffs.delete(t):this.debuffs.set(t,i)}}clear(e){this.debuffs.delete(e)}clearAll(){this.debuffs.clear()}}class tS{constructor(){I(this,"currentCast",null)}get isCasting(){return this.currentCast!==null}get castProgress(){if(!this.currentCast)return 0;const e=(Date.now()-this.currentCast.startedAt)/1e3;return Math.min(1,e/this.currentCast.castTime)}get currentCastInfo(){return this.currentCast}beginCast(e){return this.isCasting?!1:(this.currentCast={...e,startedAt:Date.now()},!0)}interrupt(){this.currentCast=null}update(){if(!this.currentCast)return;if((Date.now()-this.currentCast.startedAt)/1e3>=this.currentCast.castTime){const t=this.currentCast.onComplete;this.currentCast=null,t()}}}class nS{constructor(e){I(this,"projectiles",[]);I(this,"nextId",0);I(this,"scene");this.scene=e}spawn(e,t,n,i,r,o){const a=new C().subVectors(t,e).normalize(),l=a.clone().multiplyScalar(i),c=e.clone().add(a.clone().multiplyScalar(1)),h=new $(new Bt(.4,12,12),new Ct({color:r}));h.position.copy(c),this.scene.add(h),this.projectiles.push({id:this.nextId++,object:h,velocity:l,targetPos:t.clone(),targetId:n,speed:i,maxLifetime:5,createdAt:Date.now(),onHit:o})}update(e){const t=Date.now(),n=[];for(const i of this.projectiles){if(i.object.position.addScaledVector(i.velocity,e),i.object.position.distanceTo(i.targetPos)<.5){i.onHit(),n.push(i);continue}(t-i.createdAt)/1e3>i.maxLifetime&&n.push(i)}for(const i of n){this.scene.remove(i.object),this.disposeProjectileObject(i.object);const r=this.projectiles.indexOf(i);r>=0&&this.projectiles.splice(r,1)}}disposeProjectileObject(e){e.traverse(t=>{t instanceof $&&(t.geometry.dispose(),t.material instanceof Yt&&t.material.dispose())})}clear(){for(const e of this.projectiles)this.scene.remove(e.object),this.disposeProjectileObject(e.object);this.projectiles=[]}}const iS=[{id:"rogue_teleport",name:"Shadowstep",key:"1",cooldown:15,castTime:0,range:15,requiresTarget:!0,execute:s=>{if(!s.targetId||!s.targetPos)return;const e=s.targetPos.clone().sub(s.casterPos).normalize(),t=s.targetPos.clone().add(e.multiplyScalar(1.5));t.y=0,s.setEntityPos(s.casterId,t),s.cooldowns.startCooldown("rogue_teleport",15)}},{id:"rogue_hemorrhage",name:"Hemorrhage",key:"2",cooldown:3,castTime:0,range:3,requiresTarget:!0,execute:s=>{s.targetId&&(s.flashHit(s.targetId),s.spawnDamage(s.targetId,18,32),s.cooldowns.startCooldown("rogue_hemorrhage",3))}},{id:"rogue_blind",name:"Blind",key:"3",cooldown:25,castTime:0,range:8,requiresTarget:!0,execute:s=>{s.targetId&&(s.applyDebuff(s.targetId,{id:"blind",name:"Blind",duration:9,tags:["cc","incapacitate"]}),s.cooldowns.startCooldown("rogue_blind",25))}}],sS=[{id:"mage_blink",name:"Blink",key:"1",cooldown:15,castTime:0,range:0,requiresTarget:!1,execute:s=>{const e=new C(-Math.sin(s.casterYaw),0,-Math.cos(s.casterYaw)),t=s.casterPos.clone().add(e.multiplyScalar(8));t.y=0,t.x=Math.max(-Xt,Math.min(Xt,t.x)),t.z=Math.max(-Xt,Math.min(Xt,t.z)),s.setEntityPos(s.casterId,t),s.cooldowns.startCooldown("mage_blink",15)}},{id:"mage_frostbolt",name:"Frostbolt",key:"2",cooldown:0,castTime:1.5,range:30,requiresTarget:!0,execute:s=>{if(!s.targetId||!s.targetPos)return;const e=s.targetId,t=s.targetPos.clone();s.casts.beginCast({abilityId:"mage_frostbolt",abilityName:"Frostbolt",castTime:1.5,targetId:e,onComplete:()=>{const n=s.casterPos.clone();n.y=1,t.y=1,s.projectiles.spawn(n,t,e,20,8965375,()=>{s.flashHit(e),s.spawnDamage(e,28,44)})}})}},{id:"mage_polymorph",name:"Polymorph",key:"3",cooldown:25,castTime:1.5,range:20,requiresTarget:!0,execute:s=>{if(!s.targetId)return;const e=s.targetId;s.casts.beginCast({abilityId:"mage_polymorph",abilityName:"Polymorph",castTime:1.5,targetId:e,onComplete:()=>{s.applyDebuff(e,{id:"polymorph",name:"Polymorph",duration:9,tags:["cc","incapacitate"]}),s.cooldowns.startCooldown("mage_polymorph",25)}})}}],rS=[{id:"priest_heal",name:"Heal",key:"1",cooldown:0,castTime:2,range:30,requiresTarget:!0,execute:s=>{s.targetId&&s.casts.beginCast({abilityId:"priest_heal",abilityName:"Heal",castTime:2,targetId:s.targetId,onComplete:()=>{s.flashHit(s.targetId),s.spawnHeal(s.targetId,30,50)}})}},{id:"priest_smite",name:"Smite",key:"2",cooldown:0,castTime:1.5,range:30,requiresTarget:!0,execute:s=>{if(!s.targetId||!s.targetPos)return;const e=s.targetId,t=s.targetPos.clone();s.casts.beginCast({abilityId:"priest_smite",abilityName:"Smite",castTime:1.5,targetId:e,onComplete:()=>{const n=s.casterPos.clone();n.y=1,t.y=1,s.projectiles.spawn(n,t,e,15,16777096,()=>{s.flashHit(e),s.spawnDamage(e,22,38)})}})}},{id:"priest_fear",name:"Psychic Scream",key:"3",cooldown:30,castTime:0,range:0,requiresTarget:!1,execute:s=>{s.cooldowns.startCooldown("priest_fear",30)}}],Wp={Rogue:iS,Mage:sS,Priest:rS};function oS(s,e){return Wp[s].find(t=>t.key===e)}function aS(s){return Wp[s]}function lS(){const s=new URLSearchParams(window.location.search),t=s.get("mode")==="multiplayer"?"multiplayer":"standalone",n=s.get("server")||cS();return{mode:t,config:{serverUrl:n}}}function cS(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"ws://localhost:8080":`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws`}function hS(s){return JSON.stringify(s)}function uS(s){try{return JSON.parse(s)}catch{return null}}class dS{constructor(e){I(this,"ws",null);I(this,"state","disconnected");I(this,"reconnectAttempts",0);I(this,"reconnectTimeout",null);I(this,"config");I(this,"playerId",null);this.config=e}getState(){return this.state}getPlayerId(){return this.playerId}connect(){if(this.state==="disconnected"){this.setState("connecting");try{this.ws=new WebSocket(this.config.url),this.ws.onopen=()=>{console.log("[Socket] WebSocket open, waiting for Welcome..."),this.reconnectAttempts=0},this.ws.onmessage=e=>{this.handleMessage(e.data)},this.ws.onclose=()=>{console.log("[Socket] Disconnected"),this.ws=null,this.setState("disconnected"),this.scheduleReconnect()},this.ws.onerror=e=>{console.error("[Socket] Error:",e)}}catch(e){console.error("[Socket] Failed to connect:",e),this.setState("disconnected"),this.scheduleReconnect()}}}disconnect(){this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.ws&&(this.ws.close(),this.ws=null),this.setState("disconnected"),this.playerId=null}send(e){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return!1;try{return this.ws.send(hS(e)),!0}catch(t){return console.error("[Socket] Send error:",t),!1}}isConnected(){return this.state==="connected"}setState(e){this.state!==e&&(this.state=e,this.config.onStateChange(e))}handleMessage(e){const t=uS(e);if(!t){console.warn("[Socket] Failed to decode message");return}t.type==="Welcome"&&(this.playerId=t.playerId,this.setState("connected"),this.config.onWelcome(t)),this.config.onMessage(t)}scheduleReconnect(){if(this.reconnectTimeout)return;this.reconnectAttempts++;const e=Math.min(this.config.reconnectDelay*Math.pow(2,this.reconnectAttempts-1),this.config.maxReconnectDelay);console.log(`[Socket] Reconnecting in ${e}ms (attempt ${this.reconnectAttempts})`),this.reconnectTimeout=setTimeout(()=>{this.reconnectTimeout=null,this.connect()},e)}}class fS{constructor(e){I(this,"socket");I(this,"state",{rtt:0,serverOffset:0,lastPingTime:0,sampleCount:0});I(this,"pingInterval",null);I(this,"pendingPingTime",null);I(this,"smoothingFactor",.2);this.socket=e}start(e=2e3){this.stop(),this.pingInterval=setInterval(()=>{this.sendPing()},e),this.sendPing()}stop(){this.pingInterval&&(clearInterval(this.pingInterval),this.pingInterval=null)}handlePong(e){if(this.pendingPingTime===null)return;const t=Date.now(),n=t-e.clientTime,i=n/2,r=e.serverTime+i,o=t-r;this.state.sampleCount++,this.state.sampleCount===1?(this.state.rtt=n,this.state.serverOffset=o,console.log(`[Clock] First RTT sample: ${n.toFixed(0)}ms, offset: ${o.toFixed(0)}ms`)):(this.state.rtt=this.state.rtt*(1-this.smoothingFactor)+n*this.smoothingFactor,this.state.serverOffset=this.state.serverOffset*(1-this.smoothingFactor)+o*this.smoothingFactor,this.state.sampleCount%5===0&&console.log(`[Clock] RTT: ${this.state.rtt.toFixed(0)}ms (sample #${this.state.sampleCount})`)),this.state.lastPingTime=t,this.pendingPingTime=null}getRTT(){return this.state.rtt}getLatency(){return this.state.rtt/2}toServerTime(e){return e-this.state.serverOffset}toLocalTime(e){return e+this.state.serverOffset}getServerTime(){return this.toServerTime(Date.now())}isSynced(){return this.state.sampleCount>=3}getDebugInfo(){return`RTT: ${this.state.rtt.toFixed(0)}ms | Offset: ${this.state.serverOffset.toFixed(0)}ms | Samples: ${this.state.sampleCount}`}sendPing(){if(!this.socket.isConnected())return;const e=Date.now();this.pendingPingTime=e,this.socket.send({type:"Ping",clientTime:e})}}class pS{constructor(e,t={}){I(this,"socket");I(this,"config");I(this,"sequence",0);I(this,"pendingInputs",[]);I(this,"lastAckedSeq",0);this.socket=e,this.config={maxPendingInputs:120,...t}}sendMoveInput(e,t,n,i,r){if(!this.socket.isConnected())return null;const o=++this.sequence,a={type:"MoveInput",seq:o,dx:t,dz:e,jump:n,yaw:i,dt:r},l={seq:o,type:"move",input:a,timestamp:Date.now()};return this.addPendingInput(l),this.socket.send(a),l}sendAbilityInput(e,t){if(!this.socket.isConnected())return null;const n=++this.sequence,i={type:"AbilityInput",seq:n,abilityId:e,targetId:t},r={seq:n,type:"ability",input:i,timestamp:Date.now()};return this.addPendingInput(r),this.socket.send(i),r}acknowledgeUpTo(e){if(e<=this.lastAckedSeq)return[];const t=this.lastAckedSeq;this.lastAckedSeq=e,e-t>5&&console.log(`[InputManager] Acked ${e-t} inputs (${t} -> ${e})`);const n=[];return this.pendingInputs=this.pendingInputs.filter(i=>i.seq<=e?(n.push(i),!1):!0),n}getUnacknowledgedInputs(){return[...this.pendingInputs]}getUnacknowledgedMoveInputs(){return this.pendingInputs.filter(e=>e.type==="move").map(e=>e.input)}getSequence(){return this.sequence}getLastAckedSeq(){return this.lastAckedSeq}getPendingCount(){return this.pendingInputs.length}reset(){this.sequence=0,this.pendingInputs=[],this.lastAckedSeq=0}addPendingInput(e){for(this.pendingInputs.push(e);this.pendingInputs.length>this.config.maxPendingInputs;)this.pendingInputs.shift()}}class mS{constructor(e={}){I(this,"config");I(this,"snapshots",[]);I(this,"interpolatedEntities",new Map);I(this,"projectiles",[]);I(this,"localPlayerId",null);I(this,"serverTick",0);I(this,"serverTime",0);I(this,"pendingEvents",[]);this.config={interpolationDelay:100,snapshotBufferSize:30,...e}}setLocalPlayerId(e){this.localPlayerId=e}getLocalPlayerId(){return this.localPlayerId}addSnapshot(e){const t={snapshot:e,receivedAt:Date.now()};for(this.snapshots.push(t),this.serverTick=e.tick,this.serverTime=e.serverTime,this.projectiles=e.projectiles;this.snapshots.length>this.config.snapshotBufferSize;)this.snapshots.shift()}addEvents(e){this.pendingEvents.push(...e)}consumeEvents(){const e=this.pendingEvents;return this.pendingEvents=[],e}updateInterpolation(e){const t=e-this.config.interpolationDelay,{before:n,after:i}=this.findSnapshotsForTime(t);if(!n)return;if(!i){this.applySnapshot(n.snapshot,0);return}const r=i.receivedAt-n.receivedAt,o=r>0?(t-n.receivedAt)/r:0,a=Math.max(0,Math.min(1,o));this.interpolateBetween(n.snapshot,i.snapshot,a)}getInterpolatedEntity(e){return this.interpolatedEntities.get(e)}getAllInterpolatedEntities(){return Array.from(this.interpolatedEntities.values())}getLocalPlayerServerState(){return!this.localPlayerId||this.snapshots.length===0?void 0:this.snapshots[this.snapshots.length-1].snapshot.entities.find(t=>t.id===this.localPlayerId)}getProjectiles(){return this.projectiles}getServerTick(){return this.serverTick}getServerTime(){return this.serverTime}getLatestSnapshot(){if(this.snapshots.length!==0)return this.snapshots[this.snapshots.length-1].snapshot}getSnapshotCount(){return this.snapshots.length}reset(){this.snapshots=[],this.interpolatedEntities.clear(),this.projectiles=[],this.localPlayerId=null,this.serverTick=0,this.serverTime=0,this.pendingEvents=[]}findSnapshotsForTime(e){let t,n;for(const i of this.snapshots)if(i.receivedAt<=e)t=i;else{n=i;break}return{before:t,after:n}}applySnapshot(e,t){const n=new Map;for(const i of e.entities)i.id!==this.localPlayerId&&n.set(i.id,{id:i.id,name:i.name,className:i.class,team:i.team,pos:{...i.pos},vel:{...i.vel},yaw:i.yaw,hp:i.hp,maxHp:i.maxHp,alive:i.alive,debuffs:[...i.debuffs],castingAbilityId:i.castingAbilityId,castProgress:i.castProgress});this.interpolatedEntities=n}interpolateBetween(e,t,n){const i=new Map,r=new Map;for(const o of t.entities)r.set(o.id,o);for(const o of e.entities){if(o.id===this.localPlayerId)continue;const a=r.get(o.id);if(!a){i.set(o.id,this.entityFromSnapshot(o));continue}const l=this.lerpVec3(o.pos,a.pos,n);i.set(o.id,{id:a.id,name:a.name,className:a.class,team:a.team,pos:l,vel:a.vel,yaw:this.lerpAngle(o.yaw,a.yaw,n),hp:a.hp,maxHp:a.maxHp,alive:a.alive,debuffs:[...a.debuffs],castingAbilityId:a.castingAbilityId,castProgress:a.castProgress})}for(const o of t.entities)o.id!==this.localPlayerId&&(i.has(o.id)||i.set(o.id,this.entityFromSnapshot(o)));this.interpolatedEntities=i}entityFromSnapshot(e){return{id:e.id,name:e.name,className:e.class,team:e.team,pos:{...e.pos},vel:{...e.vel},yaw:e.yaw,hp:e.hp,maxHp:e.maxHp,alive:e.alive,debuffs:[...e.debuffs],castingAbilityId:e.castingAbilityId,castProgress:e.castProgress}}lerpVec3(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n,z:e.z+(t.z-e.z)*n}}lerpAngle(e,t,n){let i=t-e;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return e+i*n}}class gS{constructor(e,t,n={}){I(this,"config");I(this,"inputManager");I(this,"keys",new Set);I(this,"jumpPressed",!1);I(this,"lastSendTime",0);I(this,"sendInterval");I(this,"getYaw");I(this,"onInputSent");I(this,"boundKeyDown");I(this,"boundKeyUp");this.inputManager=e,this.getYaw=t,this.config={sendRate:20,...n},this.sendInterval=1e3/this.config.sendRate,this.boundKeyDown=this.onKeyDown.bind(this),this.boundKeyUp=this.onKeyUp.bind(this)}setOnInputSent(e){this.onInputSent=e}attach(){window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp)}detach(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),this.keys.clear(),this.jumpPressed=!1}getInputState(){return{forward:this.getForward(),right:this.getRight(),jump:this.jumpPressed,yaw:this.getYaw()}}update(e){var h;const t=Date.now(),n=t-this.lastSendTime;if(n<this.sendInterval)return this.jumpPressed=!1,null;const i=this.getForward(),r=this.getRight(),o=this.getYaw(),a=this.jumpPressed,l=i!==0||r!==0||a;if(this.jumpPressed=!1,!l&&n<this.sendInterval*5)return null;const c=this.inputManager.sendMoveInput(i,r,a,o,e);return c&&(this.lastSendTime=t,(h=this.onInputSent)==null||h.call(this,c)),c}sendAbility(e,t){return this.inputManager.sendAbilityInput(e,t)}isKeyPressed(e){return this.keys.has(e.toLowerCase())}onKeyDown(e){const t=e.code.toLowerCase();this.keys.add(t),e.code==="Space"&&(this.jumpPressed=!0)}onKeyUp(e){this.keys.delete(e.code.toLowerCase())}getForward(){let e=0;return(this.keys.has("keyw")||this.keys.has("arrowup"))&&(e+=1),(this.keys.has("keys")||this.keys.has("arrowdown"))&&(e-=1),e}getRight(){let e=0;return(this.keys.has("keyd")||this.keys.has("arrowright"))&&(e+=1),(this.keys.has("keya")||this.keys.has("arrowleft"))&&(e-=1),e}}class _S{constructor(e={}){I(this,"config");I(this,"predicted",{pos:{x:0,y:0,z:0},vel:{x:0,y:0,z:0},yaw:0,isGrounded:!0});I(this,"serverState",null);I(this,"positionError",{x:0,y:0,z:0});this.config={snapThreshold:.5,blendSpeed:10,maxPredictionError:3,...e}}initialize(e,t=0){this.predicted={pos:{...e},vel:{x:0,y:0,z:0},yaw:t,isGrounded:e.y<=.01},this.serverState=null,this.positionError={x:0,y:0,z:0}}applyInput(e){const t={x:-Math.sin(e.yaw),z:-Math.cos(e.yaw)},n={x:t.z,z:-t.x};let i=n.x*e.dx+t.x*e.dz,r=n.z*e.dx+t.z*e.dz;const o=Math.sqrt(i*i+r*r);return o>1&&(i/=o,r/=o),o>0?(this.predicted.vel.x=i*Eo,this.predicted.vel.z=r*Eo):(this.predicted.vel.x=0,this.predicted.vel.z=0),e.jump&&this.predicted.isGrounded&&(this.predicted.vel.y=na,this.predicted.isGrounded=!1),this.predicted.isGrounded||(this.predicted.vel.y-=Qu*e.dt),this.predicted.pos.x+=this.predicted.vel.x*e.dt,this.predicted.pos.y+=this.predicted.vel.y*e.dt,this.predicted.pos.z+=this.predicted.vel.z*e.dt,this.predicted.pos.y<=0&&(this.predicted.pos.y=0,this.predicted.vel.y=0,this.predicted.isGrounded=!0),this.predicted.pos.x=Math.max(-Xt,Math.min(Xt,this.predicted.pos.x)),this.predicted.pos.z=Math.max(-Xt,Math.min(Xt,this.predicted.pos.z)),this.predicted.yaw=e.yaw,{...this.predicted}}reconcile(e,t,n){this.serverState={pos:{...e.pos},vel:{...e.vel},yaw:e.yaw,isGrounded:e.pos.y<=.01};const i={pos:{...e.pos},vel:{...e.vel},yaw:e.yaw,isGrounded:e.pos.y<=.01};for(const c of n)this.applyInputToState(i,c);const r=this.predicted.pos.x-i.pos.x,o=this.predicted.pos.y-i.pos.y,a=this.predicted.pos.z-i.pos.z,l=Math.sqrt(r*r+o*o+a*a);return l>this.config.maxPredictionError?(console.warn(`[Prediction] Large error ${l.toFixed(2)} > ${this.config.maxPredictionError}, snapping to server pos`),this.predicted={...i},this.positionError={x:0,y:0,z:0}):l>this.config.snapThreshold?(console.log(`[Prediction] Correction needed: error=${l.toFixed(3)}`),this.predicted={...i},this.positionError={x:r,y:o,z:a}):(this.predicted={...i},this.positionError={x:0,y:0,z:0}),{...this.predicted}}updateErrorSmoothing(e){const t=this.config.blendSpeed*e,n=Math.sqrt(this.positionError.x**2+this.positionError.y**2+this.positionError.z**2);if(n<.01){this.positionError={x:0,y:0,z:0};return}const i=Math.min(t,n),r=(n-i)/n;this.positionError.x*=r,this.positionError.y*=r,this.positionError.z*=r}getRenderPosition(){return{x:this.predicted.pos.x+this.positionError.x,y:this.predicted.pos.y+this.positionError.y,z:this.predicted.pos.z+this.positionError.z}}getPredicted(){return{...this.predicted}}getServerState(){return this.serverState?{...this.serverState}:null}getErrorMagnitude(){return Math.sqrt(this.positionError.x**2+this.positionError.y**2+this.positionError.z**2)}isGrounded(){return this.predicted.isGrounded}getDebugInfo(){const e=this.getErrorMagnitude();return`Predicted: (${this.predicted.pos.x.toFixed(1)}, ${this.predicted.pos.y.toFixed(1)}, ${this.predicted.pos.z.toFixed(1)}) | Error: ${e.toFixed(3)}`}applyInputToState(e,t){const n={x:-Math.sin(t.yaw),z:-Math.cos(t.yaw)},i={x:n.z,z:-n.x};let r=i.x*t.dx+n.x*t.dz,o=i.z*t.dx+n.z*t.dz;const a=Math.sqrt(r*r+o*o);a>1&&(r/=a,o/=a),a>0?(e.vel.x=r*Eo,e.vel.z=o*Eo):(e.vel.x=0,e.vel.z=0),t.jump&&e.isGrounded&&(e.vel.y=na,e.isGrounded=!1),e.isGrounded||(e.vel.y-=Qu*t.dt),e.pos.x+=e.vel.x*t.dt,e.pos.y+=e.vel.y*t.dt,e.pos.z+=e.vel.z*t.dt,e.pos.y<=0&&(e.pos.y=0,e.vel.y=0,e.isGrounded=!0),e.pos.x=Math.max(-Xt,Math.min(Xt,e.pos.x)),e.pos.z=Math.max(-Xt,Math.min(Xt,e.pos.z)),e.yaw=t.yaw}}class xS{constructor(e,t){I(this,"config");I(this,"socket");I(this,"clock");I(this,"inputManager");I(this,"inputCapture");I(this,"networkState");I(this,"prediction");I(this,"localPlayerId",null);I(this,"initialized",!1);this.config=e,this.socket=new dS({url:e.serverUrl,reconnectDelay:1e3,maxReconnectDelay:3e4,onMessage:n=>this.handleMessage(n),onStateChange:n=>{var i,r;(r=(i=this.config).onConnectionChange)==null||r.call(i,n),n==="disconnected"&&this.handleDisconnect()},onWelcome:n=>this.handleWelcome(n)}),this.clock=new fS(this.socket),this.inputManager=new pS(this.socket),this.inputCapture=new gS(this.inputManager,t),this.networkState=new mS,this.prediction=new _S}connect(){this.socket.connect()}disconnect(){this.inputCapture.detach(),this.clock.stop(),this.socket.disconnect(),this.reset()}initializeLocalPlayer(e,t){this.prediction.initialize(e,t),this.inputCapture.attach(),this.initialized=!0}update(e){var r,o;if(!this.initialized||!this.localPlayerId)return null;this.inputCapture.update(e),this.networkState.updateInterpolation(Date.now()),this.prediction.updateErrorSmoothing(e);const t=this.networkState.consumeEvents();t.length>0&&((o=(r=this.config).onEvents)==null||o.call(r,t));const n=this.prediction.getPredicted(),i=this.prediction.getRenderPosition();return{id:this.localPlayerId,pos:i,vel:n.vel,yaw:n.yaw,isGrounded:this.prediction.isGrounded()}}applyLocalInput(e){return this.prediction.applyInput(e)}useAbility(e,t){this.inputCapture.sendAbility(e,t)}getInputState(){return this.inputCapture.getInputState()}getRemoteEntities(){return this.networkState.getAllInterpolatedEntities()}getRemoteEntity(e){return this.networkState.getInterpolatedEntity(e)}getLocalPlayerId(){return this.localPlayerId}isReady(){return this.socket.isConnected()&&this.initialized}getConnectionState(){return this.socket.getState()}getRTT(){return this.clock.getRTT()}getDebugInfo(){const e=this.socket.getState(),t=this.clock.getDebugInfo(),n=this.prediction.getDebugInfo(),i=this.inputManager.getPendingCount();return`Conn: ${e} | ${t} | Pending: ${i} | ${n}`}handleMessage(e){switch(e.type){case"Pong":this.clock.handlePong(e);break;case"Snapshot":this.handleSnapshot(e);break;case"Events":this.networkState.addEvents(e.events);break}}handleWelcome(e){var t,n;console.log("[NetworkGame] Welcome received, playerId:",e.playerId),this.localPlayerId=e.playerId,this.networkState.setLocalPlayerId(e.playerId),this.clock.start(),(n=(t=this.config).onWelcome)==null||n.call(t,e)}handleSnapshot(e){if(this.networkState.addSnapshot(e),this.localPlayerId&&this.initialized){const t=this.networkState.getLocalPlayerServerState();if(t){const n=this.inputManager.acknowledgeUpTo(e.ackedSeq),i=this.inputManager.getUnacknowledgedMoveInputs();e.tick%20===0&&console.log(`[NetworkGame] Snapshot tick=${e.tick} ackedSeq=${e.ackedSeq} acked=${n.length} unacked=${i.length} entities=${e.entities.length}`),this.prediction.reconcile(t,e.ackedSeq,i)}}}handleDisconnect(){console.log("[NetworkGame] Disconnected, resetting state"),this.initialized=!1,this.inputCapture.detach(),this.clock.stop()}reset(){this.localPlayerId=null,this.initialized=!1,this.inputManager.reset(),this.networkState.reset(),this.prediction.initialize({x:0,y:0,z:0})}}const sd={vertexShader:`
    varying vec3 vWorldPosition;

    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;

      vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_Position = pos.xyww;
    }
  `,fragmentShader:`
    precision mediump float;

    varying vec3 vWorldPosition;

    uniform float uSunAzimuth;
    uniform float uSunElevation;
    uniform vec3 uSunColor;
    uniform vec3 uSkyColorLow;
    uniform vec3 uSkyColorHigh;
    uniform float uSunSize;

    void main() {
      vec3 direction = normalize(vWorldPosition);
      vec3 skyColor = mix(
        uSkyColorLow,
        uSkyColorHigh,
        clamp(direction.y * 0.5 + 0.5, 0.0, 1.0)
      );

      float azimuth = radians(uSunAzimuth);
      float elevation = radians(uSunElevation);
      vec3 sunDirection = normalize(vec3(
        cos(elevation) * sin(azimuth),
        sin(elevation),
        cos(elevation) * cos(azimuth)
      ));

      float sunIntensity = pow(max(dot(direction, sunDirection), 0.0), 1000.0 / uSunSize);
      vec3 sunColor = uSunColor * sunIntensity;

      gl_FragColor = vec4(skyColor + sunColor, 1.0);
    }
  `},rd={vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;

      vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      gl_Position = pos.xyww;
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform vec3 uCloudColor;
    uniform vec3 cameraPos;

    varying vec2 vUv;

    vec3 permute(vec3 x) {
      return mod(((x * 34.0) + 1.0) * x, 289.0);
    }

    float snoise(vec2 v) {
      const vec4 C = vec4(
        0.211324865405187,
        0.366025403784439,
        -0.577350269189626,
        0.024390243902439
      );
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(
        permute(i.y + vec3(0.0, i1.y, 1.0)) +
        i.x + vec3(0.0, i1.x, 1.0)
      );
      vec3 m = max(
        0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)),
        0.0
      );
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 cloudUV = vUv * 6.0 + vec2(
        cameraPos.x / 1000.0 + uTime / 100.0,
        cameraPos.z / 1000.0
      );

      float n = snoise(cloudUV * 3.0 + uTime / 50.0) * 0.6
              + snoise(cloudUV * 6.0 + uTime / 40.0) * 0.3
              + snoise(cloudUV * 12.0 + uTime / 30.0) * 0.1;

      float cloudDensity = smoothstep(0.1, 0.9, 0.5 * n + 0.5);
      float horizonFade = smoothstep(0.0, 0.3, 1.0 - abs(vUv.y - 0.5) * 2.0);
      float edgeFade = (1.0 - pow(abs(vUv.x - 0.5) * 2.0, 2.0)) *
        (1.0 - pow(abs(vUv.y - 0.5) * 2.0, 2.0));

      float finalOpacity = cloudDensity * horizonFade * edgeFade * 0.45;

      gl_FragColor = vec4(uCloudColor, finalOpacity);
      if (finalOpacity < 0.01) discard;
    }
  `},od={vertexShader:`
    attribute float size;
    attribute vec3 color;
    attribute float phase;
    attribute float freq;

    varying vec3 vColor;
    varying float vDepth;

    uniform float time;

    void main() {
      vColor = color;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vDepth = mvPosition.z;

      float twinkle = sin(time * freq + phase) * 0.2 + 0.8;
      gl_PointSize = size * twinkle;

      vec4 pos = projectionMatrix * mvPosition;
      pos.z = pos.w * 0.999999;
      gl_Position = pos;
    }
  `,fragmentShader:`
    varying vec3 vColor;
    varying float vDepth;

    void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center) * 2.0;

      float core = (1.0 - smoothstep(0.0, 0.2, dist)) * 0.8;
      float glow = (1.0 - smoothstep(0.2, 0.5, dist)) * 0.1;
      float brightness = core + glow;
      float reflectionFactor = smoothstep(0.0, -1000.0, vDepth) * 0.5;

      vec3 finalColor = mix(vec3(1.0), vColor, 0.8) * 0.6;
      gl_FragColor = vec4(finalColor, brightness * reflectionFactor);
    }
  `};function yS(s){const e=new Float32Array(s*3);for(let t=0;t<s;t++){const n=Math.random(),i=Math.random()*.5+.5,r=2*Math.PI*n,o=Math.acos(2*i-1),a=Math.sin(o)*Math.cos(r),l=Math.cos(o),c=Math.sin(o)*Math.sin(r);e.set([a,l,c],t*3)}return e}function vS(s){const e=s.length/3,t=new Float32Array(s.length*2);t.set(s,0);for(let n=0;n<e;n++){const i=s[n*3+0],r=s[n*3+1],o=s[n*3+2];t.set([i,-r,o],(n+e)*3)}return t}function Ro(s){const e=new Float32Array(s.length*2);return e.set(s,0),e.set(s,s.length),e}function MS(s){const e=new Float32Array(s*3);for(let t=0;t<s;t++){const n=Math.random(),i=n<.15?[.8,.85,1]:n<.3?[1,.95,.8]:[1,1,1];e.set(i,t*3)}return e}function SS(s){const e=new Float32Array(s);for(let t=0;t<s;t++){const n=Math.random();e[t]=n<.01?40+Math.random()*20:n<.05?25+Math.random()*15:n<.2?15+Math.random()*10:5+Math.random()*5}return e}function ad(s,e,t){const n=new Float32Array(s);for(let i=0;i<s;i++)n[i]=e+Math.random()*(t-e);return n}function wS(s=5e3){const e=Math.floor(s/2),t=new ot,n=yS(e),i=vS(n),r=Ro(MS(e)),o=Ro(SS(e)),a=Ro(ad(e,0,Math.PI*2)),l=Ro(ad(e,1,3));t.setAttribute("position",new rt(i,3)),t.setAttribute("color",new rt(r,3)),t.setAttribute("size",new rt(o,1)),t.setAttribute("phase",new rt(a,1)),t.setAttribute("freq",new rt(l,1));const c=new bt({uniforms:{time:{value:0}},vertexShader:od.vertexShader,fragmentShader:od.fragmentShader,transparent:!0,depthWrite:!1,depthTest:!0,blending:Pi}),h=new ma(t,c);return h.frustumCulled=!1,h.renderOrder=-1,h.scale.setScalar(950),h}class bS extends de{constructor(){super();I(this,"skyMaterial");I(this,"cloudMaterial");I(this,"starsMaterial");I(this,"sky");I(this,"clouds");I(this,"stars");I(this,"ambient");I(this,"hemi");I(this,"sun");I(this,"fogColor",new Q);I(this,"sunDirection",new C);I(this,"lowerSkyColor",new Q);I(this,"upperSkyColor",new Q);I(this,"sunColor",new Q);I(this,"elapsedTime",0);I(this,"gameMinutes",9*60);this.name="SkyEnvironment",this.skyMaterial=new bt({vertexShader:sd.vertexShader,fragmentShader:sd.fragmentShader,uniforms:{uSunAzimuth:{value:216},uSunElevation:{value:25},uSunColor:{value:new Q(16770480)},uSkyColorLow:{value:new Q(7316207)},uSkyColorHigh:{value:new Q(2118655)},uSunSize:{value:1}},side:qt,depthWrite:!1,fog:!1}),this.sky=new $(new Bt(1,32,16),this.skyMaterial),this.sky.frustumCulled=!1,this.sky.scale.setScalar(900),this.cloudMaterial=new bt({vertexShader:rd.vertexShader,fragmentShader:rd.fragmentShader,uniforms:{uTime:{value:0},uCloudColor:{value:new Q(1,1,1)},cameraPos:{value:new C}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Pi,side:fn,fog:!1}),this.clouds=new $(new jn(2,2),this.cloudMaterial),this.clouds.frustumCulled=!1,this.clouds.renderOrder=-1,this.clouds.rotation.x=Math.PI/2,this.clouds.position.y=350,this.clouds.scale.setScalar(1400),this.stars=wS(),this.starsMaterial=this.stars.material,this.ambient=new ph(16777215,.35),this.hemi=new xp(8900331,2371608,.25),this.sun=new Sa(16777198,1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=300,this.sun.shadow.camera.left=-35,this.sun.shadow.camera.right=35,this.sun.shadow.camera.top=35,this.sun.shadow.camera.bottom=-35,this.sun.shadow.normalBias=.02,this.sun.shadow.bias=-1e-4,this.add(this.sky),this.add(this.clouds),this.add(this.stars),this.add(this.ambient),this.add(this.hemi),this.add(this.sun),this.add(this.sun.target)}update(t,n,i,r){this.elapsedTime+=t,this.gameMinutes=(this.gameMinutes+t*6)%(24*60);const o=this.gameMinutes/60,a=6,l=21,c=20.42,h=6.58,u=42,d=new Q(16777215),f=new Q(16729344),g=new Q(16766720),_=new Q(16737095),p=new Q(13840175),m=new Q(8900331),y=new Q(1383204),x=new Q(2107702),v=new Q(15791359),E=o>=c&&o<=l||o>=a&&o<=h,w=o>=a&&o<=l;let T;w?T=(o-a)/(l-a):T=((o>=l?o:o+24)-l)/(24-l+a);let L=Math.cos(Math.PI*(T-.5))*u-5;const M=180+180*T;let S="Nighttime";if(w&&(T<=.25?S="Sunrise":T<=.75?S="Midday":S="Sunset"),w){const N=Math.min(Math.max(L/u,0),1),R=Math.pow(1-N,3);this.sunColor.lerpColors(d,f,R);let F=m.clone();S==="Sunrise"?F=g.clone().lerp(_,T/.25):S==="Sunset"&&(F=_.clone().lerp(p,(T-.75)/.25)),this.lowerSkyColor.copy(F),this.upperSkyColor.lerpColors(m,y,R),this.sun.intensity=E?.25:Math.min(3.5,Math.pow(N,1.2)*3.5),this.ambient.intensity=.2+N*.3,this.hemi.intensity=.15+N*.35,this.clouds.visible=!0,this.stars.visible=!1,this.cloudMaterial.uniforms.uCloudColor.value.copy(S==="Sunrise"?new Q(.85,.5,.45):S==="Sunset"?new Q(.85,.38,.35):new Q(1,1,1))}else L*=.5,this.sunColor.copy(v).multiplyScalar(1.45),this.lowerSkyColor.copy(y),this.upperSkyColor.copy(x),this.sun.intensity=.42,this.ambient.intensity=.2,this.hemi.intensity=.18,this.clouds.visible=!1,this.stars.visible=!0;this.skyMaterial.uniforms.uSunColor.value.copy(this.sunColor),this.skyMaterial.uniforms.uSkyColorLow.value.copy(this.lowerSkyColor),this.skyMaterial.uniforms.uSkyColorHigh.value.copy(this.upperSkyColor),this.skyMaterial.uniforms.uSunAzimuth.value=(270-M)%360-180,this.skyMaterial.uniforms.uSunElevation.value=L;const O=pt.degToRad(L),k=pt.degToRad((270-M)%360-180);this.sunDirection.set(Math.cos(O)*Math.sin(k),Math.sin(O),Math.cos(O)*Math.cos(k)).normalize(),this.sky.position.copy(i.position),this.stars.position.copy(i.position),this.clouds.position.set(i.position.x,350,i.position.z),this.sun.position.copy(n).addScaledVector(this.sunDirection,120),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld(),this.sun.color.copy(this.sunColor),this.hemi.color.copy(this.upperSkyColor),this.hemi.groundColor.set(w?4021309:1053711),this.cloudMaterial.uniforms.uTime.value+=t,this.cloudMaterial.uniforms.cameraPos.value.copy(i.position),this.starsMaterial.uniforms.time.value=this.elapsedTime,this.fogColor.copy(this.lowerSkyColor).lerp(this.upperSkyColor,.35),r.background=this.upperSkyColor.clone(),r.fog instanceof Mr&&r.fog.color.copy(this.fogColor)}}const TS=1.2,ES=1.3,Co=128,AS=.55,RS={damage:"#ff2a2a",heal:"#2cd64a"};let ld=!1;const CS='RuneScape, "RuneScape UF", "Press Start 2P", Impact, sans-serif';function PS(){var s;ld||(ld=!0,(s=document.fonts)!=null&&s.load&&document.fonts.load("bold 64px RuneScape").catch(()=>{}))}function IS(s,e){PS();const t=document.createElement("canvas");t.width=Co,t.height=Co;const n=t.getContext("2d"),i=Co/2,r=Co/2,o=String(s);n.font=`bold 64px ${CS}`,n.textAlign="center",n.textBaseline="middle",n.lineWidth=8,n.lineJoin="round",n.strokeStyle="rgba(0,0,0,0.95)",n.strokeText(o,i,r),n.fillStyle=e,n.fillText(o,i,r);const a=new Er(t);return a.minFilter=wt,a.magFilter=wt,a.needsUpdate=!0,a}class LS{constructor(e){I(this,"scene");I(this,"active",[]);this.scene=e}spawnDamage(e,t){this.spawn(e,t,"damage")}spawnHeal(e,t){this.spawn(e,t,"heal")}spawn(e,t,n="damage"){const i=IS(t,RS[n]),r=new Sr({map:i,transparent:!0,depthTest:!1,depthWrite:!1}),o=new fa(r);o.scale.set(1.3,1.3,1),o.renderOrder=999;const l=2.3+this.active.reduce((h,u)=>u.followTarget===e?h+1:h,0)*AS,c=e.position.clone();c.x+=(Math.random()-.5)*.5,c.z+=(Math.random()-.5)*.3,o.position.copy(c),o.position.y+=l,this.scene.add(o),this.active.push({sprite:o,age:0,life:TS,basePos:c,followTarget:e,baseY:l,riseOffset:0})}update(e){var t;for(let n=this.active.length-1;n>=0;n--){const i=this.active[n];i.age+=e;const r=i.age/i.life;if(r>=1){this.scene.remove(i.sprite),(t=i.sprite.material.map)==null||t.dispose(),i.sprite.material.dispose(),this.active.splice(n,1);continue}i.followTarget&&i.followTarget.parent&&(i.basePos.x=i.followTarget.position.x,i.basePos.z=i.followTarget.position.z),i.sprite.position.x=i.basePos.x,i.sprite.position.z=i.basePos.z,i.sprite.position.y=i.basePos.y+i.baseY+r*ES;const o=r<.1?r/.1:r>.7?Math.max(0,1-(r-.7)/.3):1;i.sprite.material.opacity=o;const a=1.3*(r<.1?.7+r/.1*.3:1);i.sprite.scale.set(a,a,1)}}}function wa(s){return{hp:s,maxHp:s,dead:!1,deadTimer:0,fleeUntil:0,fleeFromX:0,fleeFromZ:0,lastHitAt:0,combatTarget:null,attackTimer:0}}function DS(s,e){const t=s.x,n=s.z;return s.x=Math.max(-e,Math.min(e,s.x)),s.z=Math.max(-e,Math.min(e,s.z)),s.x!==t||s.z!==n}function Ur(s,e){var t,n;(n=(t=s.userData.damageSplats)==null?void 0:t.spawnDamage)==null||n.call(t,s,e)}function Nr(s,e){var t,n;(n=(t=s.userData.damageSplats)==null?void 0:t.spawnHeal)==null||n.call(t,s,e)}function ba(s,e){if(s.dead||s.hp>=s.maxHp)return 0;const t=s.hp;return s.hp=Math.min(s.maxHp,s.hp+e),s.lastHitAt=performance.now(),s.hp-t}function bs(s,e,t=.15){return s+e.radius+t}function Fr(s,e,t){const n=s.x-e.pos.x,i=s.z-e.pos.z,r=Math.hypot(n,i),o=t*.9;if(r<=.001||r>=o)return;const a=o-r;s.x+=n/r*a,s.z+=i/r*a}function Or(s,e){let t=Hn(s.x,s.z,e.heightData);for(const n of e.colliders)if(n.type==="cylinder"){const i=s.x-n.x,r=s.z-n.z,o=Math.hypot(i,r),a=n.radius+e.radius;if(n.climbable&&n.topY!==void 0&&o<n.radius+e.radius*.8)t=Math.max(t,n.topY);else if(o<a&&o>.001){const l=a-o;s.x+=i/o*l,s.z+=r/o*l}}else{const i=Math.cos(n.rotation),r=Math.sin(n.rotation),o=s.x-n.x,a=s.z-n.z,l=o*i-a*r,c=o*r+a*i,h=n.width/2,u=n.depth/2;if(Math.abs(l)>=h+e.radius||Math.abs(c)>=u+e.radius)continue;const d=h+e.radius-Math.abs(l),f=u+e.radius-Math.abs(c);if(d<=0||f<=0)continue;if(d<f){const g=d*Math.sign(l||1);s.x+=g*i,s.z+=g*r}else{const g=f*Math.sign(c||1);s.x-=g*r,s.z+=g*i}}return DS(s,e.bounds),t}const US=1.6,cd=2.4,hd=1.2,NS=.25,yl=[1.5,4],vl=.45,ud=[{body:9137991,belly:13214842},{body:4864810,belly:7034690},{body:14275269,belly:15920611},{body:2960685,belly:4473924},{body:10713174,belly:13739134}];function FS(){const s=ud[Math.floor(Math.random()*ud.length)],e=new Oe({color:s.body,roughness:.85,metalness:0}),t=new Oe({color:s.belly,roughness:.85,metalness:0}),n=new Oe({color:1118481,roughness:.6}),i=new de;i.name="Dog";const r=new me(.5,.45,.95),o=new $(r,e);o.position.y=.55,o.castShadow=!0,i.add(o);const a=new me(.48,.18,.85),l=new $(a,t);l.position.set(0,.4,0),i.add(l);const c=new de;c.position.set(0,.7,.5),i.add(c);const h=new me(.32,.32,.28),u=new $(h,e);u.position.set(0,-.05,.05),u.castShadow=!0,c.add(u);const d=new me(.36,.34,.42),f=new $(d,e);f.position.set(0,.05,.32),f.castShadow=!0,c.add(f);const g=new me(.22,.18,.22),_=new $(g,t);_.position.set(0,-.04,.55),c.add(_);const p=new me(.1,.08,.06),m=new $(p,n);m.position.set(0,-.02,.69),c.add(m);const y=new me(.08,.18,.14),x=new $(y,e);x.position.set(-.13,.22,.22),x.rotation.z=.2,c.add(x);const v=x.clone();v.position.x=.13,v.rotation.z=-.2,c.add(v);const E=new de;E.position.set(0,.68,-.5),E.rotation.x=-.5,i.add(E);const w=new me(.1,.1,.4),T=new $(w,e);T.position.z=-.2,T.castShadow=!0,E.add(T);const L=[],M=[[-.18,.38,0,1],[.18,.38,Math.PI,1],[-.18,-.38,Math.PI,0],[.18,-.38,0,0]];for(const[S,O,k]of M){const N=new de;N.position.set(S,.45,O),i.add(N);const R=new me(.12,.45,.12),F=new $(R,e);F.position.y=-.22,F.castShadow=!0,N.add(F);const D=new me(.14,.08,.18),z=new $(D,n);z.position.y=-.43,N.add(z),L.push({mesh:N,phase:k})}return{group:i,legs:L,tail:E,head:c,body:o}}function cs(s){const e=s*.85;return new C((Math.random()*2-1)*e,0,(Math.random()*2-1)*e)}class OS{constructor(e,t,n,i){I(this,"dogs",[]);I(this,"group");I(this,"bounds");I(this,"heightData");I(this,"colliders",[]);this.bounds=n,this.heightData=i,this.group=new de,this.group.name="DogPack",e.add(this.group);for(let r=0;r<t;r++)this.spawnDog()}spawnDog(){const e=FS(),t=cs(this.bounds),n={parts:e,pos:t.clone(),yaw:Math.random()*Math.PI*2,target:cs(this.bounds),pauseTimer:0,walkPhase:Math.random()*Math.PI*2,bounds:this.bounds,heightData:this.heightData,held:!1,prey:wa(55),id:`dog-${this.dogs.length+1}`,name:"Dog"};e.group.position.copy(t),e.group.rotation.y=n.yaw,this.group.add(e.group),this.dogs.push(n)}update(e){for(const t of this.dogs){if(t.prey.dead){t.prey.deadTimer+=e,t.prey.deadTimer>6&&(t.prey.hp=t.prey.maxHp,t.prey.dead=!1,t.prey.deadTimer=0,t.prey.combatTarget=null,t.parts.group.rotation.x=0,t.target=cs(t.bounds));continue}t.held||this.updateDog(t,e)}}setColliders(e){this.colliders=e}findNearestPrey(e,t){let n=null,i=t*t;for(const r of this.dogs){if(r.held||r.prey.dead)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makePreyRef(n):null}forEachPrey(e){for(const t of this.dogs)!t.held&&!t.prey.dead&&e(this.makePreyRef(t))}makePreyRef(e){return{id:e.id,name:e.name,team:"neutral",mesh:e.parts.group,get pos(){return e.pos},get alive(){return!e.prey.dead},get hp(){return e.prey.hp},get maxHp(){return e.prey.maxHp},get radius(){return vl},damage:(t,n)=>e.prey.dead?!1:(e.prey.hp-=t,e.prey.lastHitAt=performance.now(),Ur(e.parts.group,t),n!=null&&n.alive&&(e.prey.combatTarget=n),e.prey.hp<=0?(e.prey.hp=0,e.prey.dead=!0,e.prey.combatTarget=null,e.parts.group.rotation.x=Math.PI/2*.9,!0):!1),heal:t=>{const n=ba(e.prey,t);return n>0&&Nr(e.parts.group,n),n},scare:(t,n,i)=>{e.prey.dead||(e.prey.fleeUntil=performance.now()+i,e.prey.fleeFromX=t,e.prey.fleeFromZ=n)}}}findNearestHoldable(e,t){let n=null,i=t*t;for(const r of this.dogs){if(r.held)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makeHoldable(n):null}makeHoldable(e){return{mesh:e.parts.group,get held(){return e.held},set held(t){e.held=t},pickUp:()=>{e.held=!0},releaseAt:(t,n)=>{e.held=!1,e.pos.set(t.x,0,t.z),e.yaw=n,e.target=cs(e.bounds),e.pauseTimer=.6+Math.random()*.6;for(const i of e.parts.legs)i.mesh.rotation.x=0;e.parts.body.position.y=.55,e.parts.head.rotation.x=0,e.parts.tail.rotation.y=0}}}updateDog(e,t){if(this.updateCombat(e,t),!(e.pauseTimer<=0)){e.pauseTimer-=t,e.parts.tail.rotation.y=Math.sin(performance.now()*.008)*.6;for(const _ of e.parts.legs)_.mesh.rotation.x*=.9;this.applyTerrain(e);return}const i=e.target.x-e.pos.x,r=e.target.z-e.pos.z;if(i*i+r*r<hd*hd){Math.random()<NS&&(e.pauseTimer=yl[0]+Math.random()*(yl[1]-yl[0])),e.target=cs(e.bounds);return}let l=Math.atan2(i,r)-e.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;const c=Math.max(-cd*t,Math.min(cd*t,l));e.yaw+=c;const h=1-Math.min(1,Math.abs(l)/Math.PI)*.6,u=US*h;e.pos.x+=Math.sin(e.yaw)*u*t,e.pos.z+=Math.cos(e.yaw)*u*t,(Math.abs(e.pos.x)>e.bounds||Math.abs(e.pos.z)>e.bounds)&&(e.target=cs(e.bounds)),e.walkPhase+=t*9*h;const d=Math.sin(e.walkPhase)*.7,f=Math.sin(e.walkPhase+Math.PI)*.7;e.parts.legs[0].mesh.rotation.x=d,e.parts.legs[1].mesh.rotation.x=f,e.parts.legs[2].mesh.rotation.x=f,e.parts.legs[3].mesh.rotation.x=d;const g=Math.abs(Math.sin(e.walkPhase*2))*.04;e.parts.body.position.y=.55+g,e.parts.tail.rotation.y=Math.sin(e.walkPhase*1.5)*.5,e.parts.head.rotation.x=Math.sin(e.walkPhase)*.08,this.applyTerrain(e)}applyTerrain(e){const t=this.resolvePosition(e);e.parts.group.position.set(e.pos.x,t,e.pos.z),e.parts.group.rotation.y=e.yaw}resolvePosition(e){return Or(e.pos,{radius:vl,bounds:e.bounds,heightData:e.heightData,colliders:this.colliders})}updateCombat(e,t){e.prey.attackTimer=Math.max(0,e.prey.attackTimer-t);const n=e.prey.combatTarget;if(!(n!=null&&n.alive)){e.prey.combatTarget=null;return}const i=n.pos.x-e.pos.x,r=n.pos.z-e.pos.z,o=i*i+r*r,a=bs(vl,n);if(o>a*a){e.target.set(n.pos.x,0,n.pos.z),e.pauseTimer=0;return}Fr(e.pos,n,a),e.yaw=Math.atan2(i,r),e.prey.attackTimer<=0&&(n.damage(6,this.makePreyRef(e)),e.prey.attackTimer=1.6)}}const dd=2.6,kS=.45,Ml=[.2,.5],fd=4.5,pd=.8,BS=.45,Sl=[1.5,4.5],wl=.28,md=[{body:15393746,belly:16775920},{body:9073752,belly:14272943},{body:4473408,belly:7039076},{body:13215866,belly:15259055}];function zS(){const s=md[Math.floor(Math.random()*md.length)],e=new Oe({color:s.body,roughness:.9,metalness:0}),t=new Oe({color:s.belly,roughness:.9,metalness:0}),n=new Oe({color:1118481,roughness:.5}),i=new Oe({color:16747162,roughness:.7}),r=new de;r.name="Rabbit";const o=new Bt(.22,10,8),a=new $(o,e);a.scale.set(1.1,.9,1.4),a.position.y=.27,a.castShadow=!0,r.add(a);const l=new Bt(.18,8,6),c=new $(l,t);c.scale.set(1,.5,1.2),c.position.set(0,.18,0),r.add(c);const h=new de;h.position.set(0,.34,.28),r.add(h);const u=new Bt(.16,10,8),d=new $(u,e);d.scale.set(1,.95,1.05),d.castShadow=!0,h.add(d);const f=new Bt(.025,6,6),g=new $(f,i);g.position.set(0,-.02,.16),h.add(g);const _=new Bt(.022,6,6),p=new $(_,n);p.position.set(-.07,.04,.12),h.add(p);const m=p.clone();m.position.x=.07,h.add(m);const y=new me(.05,.28,.07),x=new de;x.position.set(-.07,.12,-.02),h.add(x);const v=new $(y,e);v.position.y=.14,v.castShadow=!0,x.add(v),x.rotation.z=.1;const E=new de;E.position.set(.07,.12,-.02),h.add(E);const w=new $(y,e);w.position.y=.14,w.castShadow=!0,E.add(w),E.rotation.z=-.1;const T=new Bt(.08,8,6),L=new $(T,t);L.position.set(0,.3,-.32),r.add(L);const M=new me(.07,.14,.08),S=[];for(const N of[-.1,.1]){const R=new de;R.position.set(N,.18,.18),r.add(R);const F=new $(M,e);F.position.y=-.07,F.castShadow=!0,R.add(F),S.push(R)}const O=new me(.1,.18,.18),k=[];for(const N of[-.13,.13]){const R=new de;R.position.set(N,.18,-.15),r.add(R);const F=new $(O,e);F.position.y=-.09,F.castShadow=!0,R.add(F),k.push(R)}return{group:r,body:a,head:h,earL:x,earR:E,legsBack:k,legsFront:S,tail:L}}function hs(s){const e=s*.85;return new C((Math.random()*2-1)*e,0,(Math.random()*2-1)*e)}class HS{constructor(e,t,n,i){I(this,"rabbits",[]);I(this,"group");I(this,"bounds");I(this,"heightData");I(this,"targetCount");I(this,"respawnTimer",4);I(this,"colliders",[]);this.bounds=n,this.heightData=i,this.targetCount=t,this.group=new de,this.group.name="RabbitWarren",e.add(this.group);for(let r=0;r<t;r++)this.spawnRabbit()}spawnRabbit(){const e=zS(),t=hs(this.bounds),n={parts:e,pos:t.clone(),yaw:Math.random()*Math.PI*2,target:hs(this.bounds),state:"rest",stateTimer:Math.random()*1.5,hopPhase:0,bounds:this.bounds,heightData:this.heightData,held:!1,prey:wa(30),id:`rabbit-${this.rabbits.length+1}`,name:"Rabbit"};e.group.position.copy(t),e.group.rotation.y=n.yaw,this.group.add(e.group),this.rabbits.push(n)}update(e){for(const t of this.rabbits)if(!t.held){if(t.prey.dead){this.updateDead(t,e);continue}this.updateRabbit(t,e)}this.respawnTimer-=e,this.respawnTimer<=0&&this.rabbits.length<this.targetCount&&(this.spawnRabbit(),this.respawnTimer=4+Math.random()*4)}findNearestPrey(e,t){let n=null,i=t*t;for(const r of this.rabbits){if(r.prey.dead||r.held)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makePreyRef(n):null}makePreyRef(e){return{id:e.id,name:e.name,team:"neutral",mesh:e.parts.group,get pos(){return e.pos},get alive(){return!e.prey.dead},get hp(){return e.prey.hp},get maxHp(){return e.prey.maxHp},get radius(){return wl},damage:(t,n)=>e.prey.dead?!1:(e.prey.hp-=t,e.prey.lastHitAt=performance.now(),Ur(e.parts.group,t),n!=null&&n.alive&&(e.prey.combatTarget=n),e.prey.hp<=0?(e.prey.hp=0,e.prey.dead=!0,e.prey.combatTarget=null,e.parts.group.rotation.x=Math.PI/2*.9,!0):!1),heal:t=>{const n=ba(e.prey,t);return n>0&&Nr(e.parts.group,n),n},scare:(t,n,i)=>{e.prey.dead||(e.prey.fleeUntil=performance.now()+i,e.prey.fleeFromX=t,e.prey.fleeFromZ=n)}}}forEachPrey(e){for(const t of this.rabbits)!t.held&&!t.prey.dead&&e(this.makePreyRef(t))}setColliders(e){this.colliders=e}updateDead(e,t){e.prey.deadTimer+=t;const n=3,i=6;if(e.prey.deadTimer>=i){this.group.remove(e.parts.group);const r=this.rabbits.indexOf(e);r>=0&&this.rabbits.splice(r,1);return}if(e.prey.deadTimer>n){const r=(e.prey.deadTimer-n)/(i-n);e.parts.group.scale.setScalar(1-r)}}findNearestHoldable(e,t){let n=null,i=t*t;for(const o of this.rabbits){if(o.held)continue;const a=o.pos.x-e.x,l=o.pos.z-e.z,c=a*a+l*l;c<i&&(i=c,n=o)}if(!n)return null;const r=n;return{mesh:r.parts.group,get held(){return r.held},set held(o){r.held=o},pickUp:()=>{r.held=!0},releaseAt:(o,a)=>{r.held=!1,r.pos.set(o.x,0,o.z),r.yaw=a,r.target=hs(r.bounds),r.state="rest",r.stateTimer=.4+Math.random()*.6,r.hopPhase=0;for(const l of r.parts.legsBack)l.rotation.x=0;for(const l of r.parts.legsFront)l.rotation.x=0;r.parts.body.position.y=.27,r.parts.head.position.y=.34,r.parts.head.rotation.y=0,r.parts.tail.position.y=.3}}}updateRabbit(e,t){const n=performance.now();if(this.updateCombat(e,t),e.prey.fleeUntil>n){const r=e.pos.x-e.prey.fleeFromX,o=e.pos.z-e.prey.fleeFromZ,a=Math.hypot(r,o)||1,l=8;e.target.set(Math.max(-e.bounds,Math.min(e.bounds,e.pos.x+r/a*l)),0,Math.max(-e.bounds,Math.min(e.bounds,e.pos.z+o/a*l))),(e.state==="stopped"||e.state==="rest")&&(e.state="hop",e.hopPhase=0,e.stateTimer=0)}if(e.state!=="stopped"){const r=e.target.x-e.pos.x,o=e.target.z-e.pos.z;let l=Math.atan2(r,o)-e.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;e.yaw+=Math.max(-fd*t,Math.min(fd*t,l))}if(e.state==="hop"){e.hopPhase+=t/kS;const r=Math.min(1,e.hopPhase),o=Math.sin(r*Math.PI);e.pos.x+=Math.sin(e.yaw)*dd*o*t,e.pos.z+=Math.cos(e.yaw)*dd*o*t;const a=Math.sin(r*Math.PI)*.18;e.parts.body.position.y=.27+a,e.parts.head.position.y=.34+a,e.parts.tail.position.y=.3+a;const l=Math.sin(r*Math.PI);if(e.parts.legsBack[0].rotation.x=-.6*l,e.parts.legsBack[1].rotation.x=-.6*l,e.parts.legsFront[0].rotation.x=.4*l,e.parts.legsFront[1].rotation.x=.4*l,e.parts.earL.rotation.x=-.1*l,e.parts.earR.rotation.x=-.1*l,r>=1){e.state="rest",e.stateTimer=Ml[0]+Math.random()*(Ml[1]-Ml[0]),e.hopPhase=0;for(const c of e.parts.legsBack)c.rotation.x=0;for(const c of e.parts.legsFront)c.rotation.x=0;e.parts.body.position.y=.27,e.parts.head.position.y=.34,e.parts.tail.position.y=.3}}else if(e.state==="rest"){e.stateTimer-=t;const r=Math.sin(n*.005)*.005;e.parts.body.position.y=.27+r;const o=e.target.x-e.pos.x,a=e.target.z-e.pos.z;o*o+a*a<pd*pd?Math.random()<BS?(e.state="stopped",e.stateTimer=Sl[0]+Math.random()*(Sl[1]-Sl[0])):(e.target=hs(e.bounds),e.stateTimer=0):e.stateTimer<=0&&(e.state="hop",e.hopPhase=0)}else{e.stateTimer-=t;const r=Math.sin(n*.012)*.15,o=Math.sin(n*.012+1.7)*.15;e.parts.earL.rotation.z=.1+r,e.parts.earR.rotation.z=-.1+o,e.parts.head.rotation.y=Math.sin(n*.0015)*.6,e.stateTimer<=0&&(e.parts.head.rotation.y=0,e.target=hs(e.bounds),e.state="rest",e.stateTimer=.2)}(Math.abs(e.pos.x)>e.bounds||Math.abs(e.pos.z)>e.bounds)&&(e.target=hs(e.bounds)),e.state!=="stopped"&&(e.parts.earL.rotation.z+=(.1-e.parts.earL.rotation.z)*.1,e.parts.earR.rotation.z+=(-.1-e.parts.earR.rotation.z)*.1);const i=Or(e.pos,{radius:wl,bounds:e.bounds,heightData:e.heightData,colliders:this.colliders});e.parts.group.position.set(e.pos.x,i,e.pos.z),e.parts.group.rotation.y=e.yaw}updateCombat(e,t){e.prey.attackTimer=Math.max(0,e.prey.attackTimer-t);const n=e.prey.combatTarget;if(!(n!=null&&n.alive)){e.prey.combatTarget=null;return}const i=n.pos.x-e.pos.x,r=n.pos.z-e.pos.z,o=bs(wl,n);i*i+r*r>o*o||(Fr(e.pos,n,o),e.yaw=Math.atan2(i,r),e.prey.attackTimer<=0&&(n.damage(3,this.makePreyRef(e)),e.prey.attackTimer=1.8))}}const GS=1.4,gd=2.6,_d=1.2,VS=.35,bl=[1.5,4.5],WS=4,Tl=.38,xd=[{body:2763306,belly:4868682},{body:15262421,belly:16118246},{body:13210453,belly:15253642},{body:7037013,belly:10128766},{body:5913124,belly:9069632}];function XS(){const s=xd[Math.floor(Math.random()*xd.length)],e=new Oe({color:s.body,roughness:.85,metalness:0}),t=new Oe({color:s.belly,roughness:.85,metalness:0}),n=new Oe({color:13662858,roughness:.6}),i=new Oe({color:8969557,roughness:.4}),r=new de;r.name="Cat";const o=new me(.36,.34,.78),a=new $(o,e);a.position.y=.48,a.castShadow=!0,r.add(a);const l=new me(.34,.14,.7),c=new $(l,t);c.position.set(0,.36,0),r.add(c);const h=new de;h.position.set(0,.6,.42),r.add(h);const u=new me(.32,.3,.32),d=new $(u,e);d.position.set(0,.06,.16),d.castShadow=!0,h.add(d);const f=new me(.16,.12,.12),g=new $(f,t);g.position.set(0,-.02,.32),h.add(g);const _=new me(.06,.05,.04),p=new $(_,n);p.position.set(0,0,.4),h.add(p);const m=new me(.05,.05,.04),y=new $(m,i);y.position.set(-.09,.07,.31),h.add(y);const x=new $(m,i);x.position.set(.09,.07,.31),h.add(x);const v=new pi(.08,.18,4),E=new $(v,e);E.position.set(-.11,.28,.1),E.rotation.z=.15,E.rotation.y=Math.PI/4,h.add(E);const w=E.clone();w.position.x=.11,w.rotation.z=-.15,h.add(w);const T=new de;T.position.set(0,.6,-.4),r.add(T);const L=.22,M=[];let S=T;for(let N=0;N<WS;N++){const R=new de;R.position.set(0,0,N===0?0:-L),S.add(R);const F=1-N*.15,D=new me(.08*F,.08*F,L),z=new $(D,e);z.position.z=-L/2,z.castShadow=!0,R.add(z),M.push(R),S=R}const O=[],k=[[-.14,.32,0],[.14,.32,Math.PI],[-.14,-.32,Math.PI],[.14,-.32,0]];for(const[N,R,F]of k){const D=new de;D.position.set(N,.4,R),r.add(D);const z=new me(.09,.4,.09),V=new $(z,e);V.position.y=-.2,V.castShadow=!0,D.add(V);const K=new me(.11,.06,.14),Y=new $(K,t);Y.position.y=-.4,D.add(Y),O.push({mesh:D,phase:F})}return{group:r,legs:O,tail:T,tailSegments:M,head:h,body:a}}function Ys(s){const e=s*.85;return new C((Math.random()*2-1)*e,0,(Math.random()*2-1)*e)}class jS{constructor(e,t,n,i){I(this,"cats",[]);I(this,"group");I(this,"bounds");I(this,"heightData");I(this,"targetCount");I(this,"respawnTimer",6);I(this,"colliders",[]);this.bounds=n,this.heightData=i,this.targetCount=t,this.group=new de,this.group.name="CatColony",e.add(this.group);for(let r=0;r<t;r++)this.spawnCat()}spawnCat(){const e=XS(),t=Ys(this.bounds),n={parts:e,pos:t.clone(),yaw:Math.random()*Math.PI*2,target:Ys(this.bounds),pauseTimer:0,walkPhase:Math.random()*Math.PI*2,bounds:this.bounds,heightData:this.heightData,held:!1,prey:wa(45),id:`cat-${this.cats.length+1}`,name:"Cat"};e.group.position.copy(t),e.group.rotation.y=n.yaw,this.group.add(e.group),this.cats.push(n)}update(e){for(const t of this.cats)if(!t.held){if(t.prey.dead){if(t.prey.deadTimer+=e,t.prey.deadTimer>6){this.group.remove(t.parts.group);const n=this.cats.indexOf(t);n>=0&&this.cats.splice(n,1)}else if(t.prey.deadTimer>3){const n=(t.prey.deadTimer-3)/3;t.parts.group.scale.setScalar(1-n)}continue}this.updateCat(t,e)}this.respawnTimer-=e,this.respawnTimer<=0&&this.cats.length<this.targetCount&&(this.spawnCat(),this.respawnTimer=8+Math.random()*4)}findNearestPrey(e,t){let n=null,i=t*t;for(const r of this.cats){if(r.held||r.prey.dead)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makePreyRef(n):null}makePreyRef(e){return{id:e.id,name:e.name,team:"neutral",mesh:e.parts.group,get pos(){return e.pos},get alive(){return!e.prey.dead},get hp(){return e.prey.hp},get maxHp(){return e.prey.maxHp},get radius(){return Tl},damage:(t,n)=>e.prey.dead?!1:(e.prey.hp-=t,e.prey.lastHitAt=performance.now(),Ur(e.parts.group,t),n!=null&&n.alive&&(e.prey.combatTarget=n),e.prey.hp<=0?(e.prey.hp=0,e.prey.dead=!0,e.prey.combatTarget=null,e.parts.group.rotation.x=Math.PI/2*.9,!0):!1),heal:t=>{const n=ba(e.prey,t);return n>0&&Nr(e.parts.group,n),n},scare:(t,n,i)=>{if(e.prey.dead)return;e.prey.fleeUntil=performance.now()+i,e.prey.fleeFromX=t,e.prey.fleeFromZ=n;const r=e.pos.x-t,o=e.pos.z-n,a=Math.hypot(r,o)||1;e.target.set(e.pos.x+r/a*6,0,e.pos.z+o/a*6),e.pauseTimer=0}}}forEachPrey(e){for(const t of this.cats)!t.held&&!t.prey.dead&&e(this.makePreyRef(t))}setColliders(e){this.colliders=e}findNearestHoldable(e,t){let n=null,i=t*t;for(const r of this.cats){if(r.held)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makeHoldable(n):null}makeHoldable(e){return{mesh:e.parts.group,get held(){return e.held},set held(t){e.held=t},pickUp:()=>{e.held=!0},releaseAt:(t,n)=>{e.held=!1,e.pos.set(t.x,0,t.z),e.yaw=n,e.target=Ys(e.bounds),e.pauseTimer=.6+Math.random()*.6;for(const i of e.parts.legs)i.mesh.rotation.x=0;e.parts.body.position.y=.48,e.parts.head.rotation.x=0,e.parts.tail.rotation.y=0;for(const i of e.parts.tailSegments)i.rotation.set(0,0,0)}}}updateCat(e,t){if(this.updateCombat(e,t),!(e.pauseTimer<=0)){e.pauseTimer-=t;const p=performance.now()*.004;e.parts.tail.rotation.y=Math.sin(p)*.3,e.parts.tailSegments.forEach((m,y)=>{m.rotation.y=Math.sin(p-y*.4)*.25}),e.parts.head.rotation.y=Math.sin(p*.5)*.3;for(const m of e.parts.legs)m.mesh.rotation.x*=.9;this.applyTerrain(e);return}e.parts.head.rotation.y*=.9;const i=e.target.x-e.pos.x,r=e.target.z-e.pos.z;if(i*i+r*r<_d*_d){Math.random()<VS&&(e.pauseTimer=bl[0]+Math.random()*(bl[1]-bl[0])),e.target=Ys(e.bounds);return}let l=Math.atan2(i,r)-e.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;const c=Math.max(-gd*t,Math.min(gd*t,l));e.yaw+=c;const h=1-Math.min(1,Math.abs(l)/Math.PI)*.6,u=GS*h;e.pos.x+=Math.sin(e.yaw)*u*t,e.pos.z+=Math.cos(e.yaw)*u*t,(Math.abs(e.pos.x)>e.bounds||Math.abs(e.pos.z)>e.bounds)&&(e.target=Ys(e.bounds)),e.walkPhase+=t*10*h;const d=Math.sin(e.walkPhase)*.6,f=Math.sin(e.walkPhase+Math.PI)*.6;e.parts.legs[0].mesh.rotation.x=d,e.parts.legs[1].mesh.rotation.x=f,e.parts.legs[2].mesh.rotation.x=f,e.parts.legs[3].mesh.rotation.x=d;const g=Math.abs(Math.sin(e.walkPhase*2))*.025;e.parts.body.position.y=.48+g;const _=e.walkPhase*.6;e.parts.tail.rotation.y=Math.sin(_)*.4,e.parts.tailSegments.forEach((p,m)=>{p.rotation.y=Math.sin(_-(m+1)*.5)*(.25+m*.05),p.rotation.x=-.08}),e.parts.head.rotation.x=Math.sin(e.walkPhase)*.05,this.applyTerrain(e)}applyTerrain(e){const t=Or(e.pos,{radius:Tl,bounds:e.bounds,heightData:e.heightData,colliders:this.colliders});e.parts.group.position.set(e.pos.x,t,e.pos.z),e.parts.group.rotation.y=e.yaw}updateCombat(e,t){e.prey.attackTimer=Math.max(0,e.prey.attackTimer-t);const n=e.prey.combatTarget;if(!(n!=null&&n.alive)){e.prey.combatTarget=null;return}const i=n.pos.x-e.pos.x,r=n.pos.z-e.pos.z,o=bs(Tl,n);if(i*i+r*r>o*o){e.target.set(n.pos.x,0,n.pos.z),e.pauseTimer=0;return}Fr(e.pos,n,o),e.yaw=Math.atan2(i,r),e.prey.attackTimer<=0&&(n.damage(5,this.makePreyRef(e)),e.prey.attackTimer=1.4)}}const qS=1,yd=1.6,vd=1.5,YS=.5,El=[2.5,6],Al=.7,Md=[{body:15920611,spot:1710618},{body:12092506,spot:16777215},{body:2761762,spot:15258792},{body:14271904,spot:7028258}],KS=2.2,Rl=[3,12],Cl=[8,22];let Pl=null;function $S(){if(Pl)return Pl;const s=document.createElement("canvas");s.width=256,s.height=128;const e=s.getContext("2d");e.clearRect(0,0,256,128),e.font="bold 80px Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#000000",e.fillText("Moo",131,67),e.fillStyle="#ffff00",e.fillText("Moo",128,64);const t=new Er(s);return t.colorSpace=tt,t.minFilter=wt,Pl=t,t}function ZS(s,e){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d"),i=a=>"#"+a.toString(16).padStart(6,"0");n.fillStyle=i(s),n.fillRect(0,0,256,256),n.fillStyle=i(e);const r=6+Math.floor(Math.random()*5);for(let a=0;a<r;a++){const l=Math.random()*256,c=Math.random()*256,h=3+Math.floor(Math.random()*4);for(let u=0;u<h;u++){const d=(Math.random()-.5)*60,f=(Math.random()-.5)*60,g=18+Math.random()*28,_=18+Math.random()*28,p=Math.random()*Math.PI;n.beginPath(),n.ellipse(l+d,c+f,g,_,p,0,Math.PI*2),n.fill()}}const o=new Er(t);return o.colorSpace=tt,o.wrapS=vn,o.wrapT=vn,o}function JS(){const s=Md[Math.floor(Math.random()*Md.length)],e=ZS(s.body,s.spot),t=new Oe({map:e,roughness:.9,metalness:0}),n=new Oe({color:s.body,roughness:.9,metalness:0}),i=new Oe({color:s.spot,roughness:.9}),r=new Oe({color:15260864,roughness:.5}),o=new Oe({color:14263460,roughness:.7}),a=new Oe({color:15247528,roughness:.8}),l=new Oe({color:1709072,roughness:.7}),c=new de;c.name="Cow";const h=new me(.75,.7,1.4),u=new $(h,t);u.position.y=.95,u.castShadow=!0,c.add(u);const d=new de;d.position.set(0,1.05,.78),c.add(d);const f=new me(.42,.42,.32),g=new $(f,n);g.position.set(0,-.06,.04),g.castShadow=!0,d.add(g);const _=new me(.46,.42,.5),p=new $(_,n);p.position.set(0,.04,.38),p.castShadow=!0,d.add(p);const m=new me(.34,.22,.2),y=new $(m,o);y.position.set(0,-.08,.62),d.add(y);const x=new me(.05,.05,.04),v=new $(x,l);v.position.set(-.08,-.05,.72),d.add(v);const E=v.clone();E.position.x=.08,d.add(E);const w=new me(.07,.07,.04),T=new $(w,l);T.position.set(-.13,.1,.62),d.add(T);const L=T.clone();L.position.x=.13,d.add(L);const M=new me(.16,.1,.22),S=new $(M,n);S.position.set(-.27,.16,.22),S.rotation.z=.4,d.add(S);const O=S.clone();O.position.x=.27,O.rotation.z=-.4,d.add(O);const k=new pi(.05,.18,6),N=new $(k,r);N.position.set(-.16,.28,.22),N.rotation.z=.5,d.add(N);const R=N.clone();R.position.x=.16,R.rotation.z=-.5,d.add(R);const F=new me(.32,.18,.32),D=new $(F,a);D.position.set(0,.55,-.4),c.add(D);const z=new me(.05,.08,.05);for(const[ye,ge]of[[-.08,-.32],[.08,-.32],[-.08,-.48],[.08,-.48]]){const be=new $(z,a);be.position.set(ye,.43,ge),c.add(be)}const V=new de;V.position.set(0,1.2,-.7),V.rotation.x=-.2,c.add(V);const K=new me(.07,.07,.6),Y=new $(K,n);Y.position.z=-.3,Y.castShadow=!0,V.add(Y);const J=new de;J.position.set(0,0,-.6),V.add(J);const ie=new me(.16,.16,.18),H=new $(ie,i);H.position.z=-.09,H.castShadow=!0,J.add(H);const Z=[],ae=[[-.28,.55,0],[.28,.55,Math.PI],[-.28,-.55,Math.PI],[.28,-.55,0]];for(const[ye,ge,be]of ae){const Pe=new de;Pe.position.set(ye,.78,ge),c.add(Pe);const Ae=new me(.18,.7,.18),Ye=new $(Ae,n);Ye.position.y=-.35,Ye.castShadow=!0,Pe.add(Ye);const G=new me(.2,.1,.22),Dt=new $(G,l);Dt.position.y=-.74,Pe.add(Dt),Z.push({mesh:Pe,phase:be})}return{group:c,legs:Z,tail:V,tailTuft:J,head:d,body:u}}function Ks(s){const e=s*.85;return new C((Math.random()*2-1)*e,0,(Math.random()*2-1)*e)}class QS{constructor(e,t,n,i){I(this,"cows",[]);I(this,"group");I(this,"bounds");I(this,"heightData");I(this,"moos",[]);I(this,"scene");I(this,"targetCount");I(this,"respawnTimer",8);I(this,"colliders",[]);this.bounds=n,this.heightData=i,this.targetCount=t,this.scene=e,this.group=new de,this.group.name="CowHerd",e.add(this.group);for(let r=0;r<t;r++)this.spawnCow()}spawnCow(){const e=JS(),t=Ks(this.bounds),n={parts:e,pos:t.clone(),yaw:Math.random()*Math.PI*2,target:Ks(this.bounds),pauseTimer:Math.random()*2,walkPhase:Math.random()*Math.PI*2,bounds:this.bounds,heightData:this.heightData,held:!1,mooCooldown:Rl[0]+Math.random()*(Rl[1]-Rl[0]),prey:wa(120),id:`cow-${this.cows.length+1}`,name:"Cow"};e.group.position.copy(t),e.group.rotation.y=n.yaw,this.group.add(e.group),this.cows.push(n)}update(e){for(const t of this.cows)if(!t.held){if(t.prey.dead){if(t.prey.deadTimer+=e,t.prey.deadTimer>8){this.group.remove(t.parts.group);const n=this.cows.indexOf(t);n>=0&&this.cows.splice(n,1)}else if(t.prey.deadTimer>4){const n=(t.prey.deadTimer-4)/4;t.parts.group.scale.setScalar(1-n)}continue}this.updateCow(t,e),t.mooCooldown-=e,t.mooCooldown<=0&&(this.spawnMoo(t),t.mooCooldown=Cl[0]+Math.random()*(Cl[1]-Cl[0]))}this.updateMoos(e),this.respawnTimer-=e,this.respawnTimer<=0&&this.cows.length<this.targetCount&&(this.spawnCow(),this.respawnTimer=12+Math.random()*6)}findNearestPrey(e,t){let n=null,i=t*t;for(const r of this.cows){if(r.held||r.prey.dead)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makePreyRef(n):null}makePreyRef(e){return{id:e.id,name:e.name,team:"neutral",mesh:e.parts.group,get pos(){return e.pos},get alive(){return!e.prey.dead},get hp(){return e.prey.hp},get maxHp(){return e.prey.maxHp},get radius(){return Al},damage:(t,n)=>e.prey.dead?!1:(e.prey.hp-=t,e.prey.lastHitAt=performance.now(),Ur(e.parts.group,t),n!=null&&n.alive&&(e.prey.combatTarget=n),e.prey.hp<=0?(e.prey.hp=0,e.prey.dead=!0,e.prey.combatTarget=null,e.parts.group.rotation.x=Math.PI/2*.9,!0):!1),heal:t=>{const n=ba(e.prey,t);return n>0&&Nr(e.parts.group,n),n},scare:(t,n,i)=>{if(e.prey.dead)return;e.prey.fleeUntil=performance.now()+i,e.prey.fleeFromX=t,e.prey.fleeFromZ=n;const r=e.pos.x-t,o=e.pos.z-n,a=Math.hypot(r,o)||1;e.target.set(e.pos.x+r/a*4,0,e.pos.z+o/a*4),e.pauseTimer=0}}}forEachPrey(e){for(const t of this.cows)!t.held&&!t.prey.dead&&e(this.makePreyRef(t))}setColliders(e){this.colliders=e}spawnMoo(e){const t=new Sr({map:$S(),transparent:!0,depthTest:!1,depthWrite:!1}),n=new fa(t);n.scale.set(1.4,.7,1),this.scene.add(n);const i=e.parts.group.position;n.position.set(i.x,i.y+2,i.z),n.renderOrder=999,this.moos.push({sprite:n,cow:e,age:0,lifetime:KS})}updateMoos(e){for(let t=this.moos.length-1;t>=0;t--){const n=this.moos[t];n.age+=e;const i=n.age/n.lifetime;if(i>=1){this.scene.remove(n.sprite),n.sprite.material.dispose(),this.moos.splice(t,1);continue}const r=n.cow.parts.group.position;n.sprite.position.set(r.x,r.y+2+i*.6,r.z),n.sprite.material.opacity=i<.7?1:1-(i-.7)/.3}}findNearestHoldable(e,t){let n=null,i=t*t;for(const r of this.cows){if(r.held)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makeHoldable(n):null}makeHoldable(e){return{mesh:e.parts.group,get held(){return e.held},set held(t){e.held=t},pickUp:()=>{e.held=!0},releaseAt:(t,n)=>{e.held=!1,e.pos.set(t.x,0,t.z),e.yaw=n,e.target=Ks(e.bounds),e.pauseTimer=.6+Math.random()*.6;for(const i of e.parts.legs)i.mesh.rotation.x=0;e.parts.body.position.y=.95,e.parts.head.rotation.x=0,e.parts.tail.rotation.y=0,e.parts.tailTuft.rotation.set(0,0,0)}}}updateCow(e,t){if(this.updateCombat(e,t),!(e.pauseTimer<=0)){e.pauseTimer-=t;const _=performance.now()*.003;e.parts.tail.rotation.y=Math.sin(_)*.25,e.parts.tailTuft.rotation.y=Math.sin(_-.6)*.5,e.parts.head.rotation.x=.2+Math.sin(_*.4)*.15;for(const p of e.parts.legs)p.mesh.rotation.x*=.9;this.applyTerrain(e);return}e.parts.head.rotation.x*=.9;const i=e.target.x-e.pos.x,r=e.target.z-e.pos.z;if(i*i+r*r<vd*vd){Math.random()<YS&&(e.pauseTimer=El[0]+Math.random()*(El[1]-El[0])),e.target=Ks(e.bounds);return}let l=Math.atan2(i,r)-e.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;const c=Math.max(-yd*t,Math.min(yd*t,l));e.yaw+=c;const h=1-Math.min(1,Math.abs(l)/Math.PI)*.6,u=qS*h;e.pos.x+=Math.sin(e.yaw)*u*t,e.pos.z+=Math.cos(e.yaw)*u*t,(Math.abs(e.pos.x)>e.bounds||Math.abs(e.pos.z)>e.bounds)&&(e.target=Ks(e.bounds)),e.walkPhase+=t*6*h;const d=Math.sin(e.walkPhase)*.55,f=Math.sin(e.walkPhase+Math.PI)*.55;e.parts.legs[0].mesh.rotation.x=d,e.parts.legs[1].mesh.rotation.x=f,e.parts.legs[2].mesh.rotation.x=f,e.parts.legs[3].mesh.rotation.x=d;const g=Math.abs(Math.sin(e.walkPhase*2))*.06;e.parts.body.position.y=.95+g,e.parts.tail.rotation.y=Math.sin(e.walkPhase*.7)*.3,e.parts.tailTuft.rotation.y=Math.sin(e.walkPhase*.7-.6)*.7,e.parts.head.rotation.x=Math.sin(e.walkPhase)*.06,this.applyTerrain(e)}applyTerrain(e){const t=Or(e.pos,{radius:Al,bounds:e.bounds,heightData:e.heightData,colliders:this.colliders});e.parts.group.position.set(e.pos.x,t,e.pos.z),e.parts.group.rotation.y=e.yaw}updateCombat(e,t){e.prey.attackTimer=Math.max(0,e.prey.attackTimer-t);const n=e.prey.combatTarget;if(!(n!=null&&n.alive)){e.prey.combatTarget=null;return}const i=n.pos.x-e.pos.x,r=n.pos.z-e.pos.z,o=bs(Al,n);if(i*i+r*r>o*o){e.target.set(n.pos.x,0,n.pos.z),e.pauseTimer=0;return}Fr(e.pos,n,o),e.yaw=Math.atan2(i,r),e.prey.attackTimer<=0&&(n.damage(9,this.makePreyRef(e)),e.prey.attackTimer=1.9)}}const ew="Backquote";class tw{constructor(e,t,n){I(this,"open",!1);I(this,"selected",null);I(this,"scene");I(this,"camera");I(this,"canvas");I(this,"raycaster",new xh);I(this,"panel");I(this,"listeners",new Set);I(this,"highlight",null);this.scene=e,this.camera=t,this.canvas=n,this.panel=this.buildPanel(),document.body.appendChild(this.panel),window.addEventListener("keydown",i=>{i.code===ew&&(i.preventDefault(),this.toggle()),i.code==="Escape"&&this.open&&this.select(null)}),n.addEventListener("pointerdown",i=>{this.open&&i.button===0&&(i.stopPropagation(),i.preventDefault(),this.pickAt(i.clientX,i.clientY))},!0)}onSelectionChange(e){this.listeners.add(e)}toggle(){this.open=!this.open,this.panel.style.display=this.open?"block":"none",this.open?this.render():this.clearHighlight()}select(e){this.selected=e,this.updateHighlight(),this.render();for(const t of this.listeners)t(e)}update(){if(!this.highlight||!this.selected)return;let e;if(this.selected.userData.isInstanceProxy){const i=this.selected.userData.source;i.geometry.boundingBox||i.geometry.computeBoundingBox();const r=i.geometry.boundingBox;e=new an(r.min.clone().multiply(this.selected.scale).add(this.selected.position),r.max.clone().multiply(this.selected.scale).add(this.selected.position))}else this.selected.updateWorldMatrix(!0,!0),e=new an().setFromObject(this.selected);if(e.isEmpty())return;const t=new C,n=new C;e.getSize(t),e.getCenter(n),this.highlight.position.copy(n),this.highlight.scale.set(Math.max(t.x,.01),Math.max(t.y,.01),Math.max(t.z,.01))}pickAt(e,t){const n=this.canvas.getBoundingClientRect(),i=new ue((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const o=this.raycaster.intersectObjects(this.scene.children,!0).find(l=>{var h;let c=l.object;for(;c;){if((h=c.userData)!=null&&h.editorIgnore||c.name==="SkyEnvironment")return!1;c=c.parent}return!0});if(!o)return;if(o.instanceId!==void 0&&o.object.isInstancedMesh){const l=nw(o.object,o.instanceId);this.select(l);return}let a=o.object;for(;a.parent&&a.parent!==this.scene&&!a.name;)a=a.parent;this.select(a)}updateHighlight(){if(this.clearHighlight(),!this.selected)return;const e=new xa(new me(1,1,1)),t=new Oi({color:16776960,depthTest:!1,transparent:!0,opacity:.9}),n=new Tr(e,t);n.renderOrder=999,n.userData.editorIgnore=!0,this.scene.add(n),this.highlight=n,this.update()}clearHighlight(){this.highlight&&(this.scene.remove(this.highlight),this.highlight.geometry.dispose(),this.highlight.material.dispose(),this.highlight=null)}buildPanel(){const e=document.createElement("div");return e.id="scene-editor",e.style.cssText=`
      position: fixed; top: 20px; right: 20px; width: 320px;
      max-height: calc(100vh - 40px); overflow: auto;
      background: rgba(20, 20, 28, 0.92); border: 1px solid #555;
      border-radius: 6px; color: #ddd; font: 12px/1.4 monospace;
      padding: 10px; z-index: 1000; display: none;
    `,e}render(){var c;if(!this.open)return;const e=this.selected;this.panel.innerHTML="";const t=document.createElement("div");if(t.innerHTML='<b style="color:#ffd57a">Scene Editor</b> <span style="color:#888">[`] toggle · click to pick · [Esc] deselect</span>',t.style.marginBottom="8px",this.panel.appendChild(t),!e){const h=document.createElement("div");h.style.color="#888",h.textContent="Click anything in the scene to select it.",this.panel.appendChild(h),this.appendQuickList();return}const n=document.createElement("div");n.style.cssText="margin-bottom:6px;color:#9cf",n.textContent=`${e.type}  "${e.name||"(unnamed)"}"`,this.panel.appendChild(n);const i=document.createElement("div");if(i.style.cssText="margin-bottom:8px;display:flex;gap:6px;flex-wrap:wrap",e.parent&&e.parent!==this.scene){const h=Po("↑ parent",()=>this.select(e.parent));i.appendChild(h)}if(e.children.length){const h=document.createElement("select");h.style.cssText="background:#222;color:#ddd;border:1px solid #444;padding:2px",h.innerHTML=`<option>↓ child (${e.children.length})…</option>`,e.children.forEach((u,d)=>{const f=document.createElement("option");f.value=String(d),f.textContent=`${d}: ${u.type} ${u.name||""}`,h.appendChild(f)}),h.addEventListener("change",()=>{const u=parseInt(h.value,10);isNaN(u)||this.select(e.children[u])}),i.appendChild(h)}this.panel.appendChild(i);const r=()=>{var h,u;this.update(),(u=(h=e.userData)==null?void 0:h.onMutate)==null||u.call(h)};this.appendSection("Position",["x","y","z"].map(h=>Sd(e.position,h,.05,r))),this.appendSection("Rotation (deg)",["x","y","z"].map(h=>iw(e.rotation,h,r))),this.appendSection("Scale",["x","y","z"].map(h=>Sd(e.scale,h,.05,r))),this.panel.appendChild(sw("Visible",e.visible,h=>{e.visible=h}));const o=(c=e.userData)==null?void 0:c.editableParams;o&&typeof o.get=="function"&&typeof o.set=="function"&&Array.isArray(o.schema)&&this.appendEditableParams(o);const a=e.material;if(a){const h=Array.isArray(a)?a:[a];h.forEach((u,d)=>this.appendMaterial(u,h.length>1?` [${d}]`:""))}const l=Po("Delete from scene",()=>{var h;if(e.userData.isInstanceProxy){const u=e.userData.source,d=new fe().makeScale(0,0,0);u.setMatrixAt(e.userData.instanceId,d),u.instanceMatrix.needsUpdate=!0}else(h=e.parent)==null||h.remove(e);this.select(null)});l.style.cssText+="margin-top:10px;background:#5a1a1a;color:#fbb",this.panel.appendChild(l)}appendQuickList(){var n;const e=document.createElement("div");e.style.cssText="margin-top:10px;color:#888",e.textContent="Top-level scene roots:",this.panel.appendChild(e);const t=document.createElement("div");for(const i of this.scene.children){if((n=i.userData)!=null&&n.editorIgnore)continue;const r=Po(`${i.name||i.type}`,()=>this.select(i));r.style.cssText+="display:block;width:100%;text-align:left;margin:2px 0",t.appendChild(r)}this.panel.appendChild(t)}appendSection(e,t){const n=document.createElement("div");n.style.cssText="margin:6px 0;padding:4px;border-top:1px solid #333";const i=document.createElement("div");i.style.cssText="color:#888;margin-bottom:2px",i.textContent=e,n.appendChild(i),t.forEach(r=>n.appendChild(r)),this.panel.appendChild(n)}appendEditableParams(e){const t=document.createElement("div");t.style.cssText="margin:6px 0;padding:4px;border-top:1px solid #333";const n=document.createElement("div");n.style.cssText="color:#ffd57a;margin-bottom:4px",n.textContent="Generator Parameters",t.appendChild(n);const i=e.get();for(const r of e.schema){const o=i[r.key];if(r.type==="select"&&r.options){const a=document.createElement("select");a.style.cssText="flex:1;background:#222;color:#ddd;border:1px solid #444;padding:2px 4px;font:11px monospace";for(const l of r.options){const c=document.createElement("option");c.value=l,c.textContent=l,l===o&&(c.selected=!0),a.appendChild(c)}a.addEventListener("change",()=>e.set({[r.key]:a.value})),t.appendChild(Fi(r.label,a))}else{const a=r.step??(r.type==="int"?1:.05),l=vh(Number(o??0),a,c=>{e.set({[r.key]:r.type==="int"?Math.round(c):c})});r.min!==void 0&&(l.min=String(r.min)),r.max!==void 0&&(l.max=String(r.max)),t.appendChild(Fi(r.label,l))}}if(e.regenerate){const r=Po("Regenerate (randomize seed)",()=>{e.set({seed:Math.floor(Math.random()*99999)})});r.style.cssText+="margin-top:6px;background:#2a3a5a;color:#cde;width:100%",t.appendChild(r)}this.panel.appendChild(t)}appendMaterial(e,t){const n=document.createElement("div");n.style.cssText="margin:6px 0;padding:4px;border-top:1px solid #333";const i=document.createElement("div");i.style.cssText="color:#888;margin-bottom:2px",i.textContent=`Material ${e.type}${t}`,n.appendChild(i);const r=e;r.color&&n.appendChild(wd("color",r.color)),"emissive"in r&&r.emissive&&n.appendChild(wd("emissive",r.emissive)),"roughness"in r&&typeof r.roughness=="number"&&n.appendChild(Il("roughness",r.roughness,0,1,.01,o=>{r.roughness=o})),"metalness"in r&&typeof r.metalness=="number"&&n.appendChild(Il("metalness",r.metalness,0,1,.01,o=>{r.metalness=o})),"opacity"in r&&n.appendChild(Il("opacity",r.opacity,0,1,.01,o=>{r.opacity=o,r.transparent=o<1,r.needsUpdate=!0})),this.panel.appendChild(n)}}function nw(s,e){var i;const t=new et;t.name=`${s.name||((i=s.parent)==null?void 0:i.name)||"Instance"}[${e}]`;const n=new fe;return s.getMatrixAt(e,n),n.decompose(t.position,t.quaternion,t.scale),t.userData.isInstanceProxy=!0,t.userData.source=s,t.userData.instanceId=e,t.userData.onMutate=()=>{const r=new fe;r.compose(t.position,t.quaternion,t.scale),s.setMatrixAt(e,r),s.instanceMatrix.needsUpdate=!0},t}function Po(s,e){const t=document.createElement("button");return t.textContent=s,t.style.cssText="background:#2a2a3a;color:#ddd;border:1px solid #555;border-radius:3px;padding:3px 6px;cursor:pointer;font:11px monospace",t.addEventListener("click",e),t}function Fi(s,e){const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;gap:6px;margin:2px 0";const n=document.createElement("label");return n.textContent=s,n.style.cssText="width:64px;color:#aaa",t.appendChild(n),t.appendChild(e),t}function vh(s,e,t){const n=document.createElement("input");return n.type="number",n.step=String(e),n.value=s.toFixed(4),n.style.cssText="flex:1;background:#222;color:#ddd;border:1px solid #444;padding:2px 4px;font:11px monospace",n.addEventListener("input",()=>{const i=parseFloat(n.value);isNaN(i)||t(i)}),n}function Sd(s,e,t,n){return Fi(e.toUpperCase(),vh(s[e],t,i=>{s[e]=i,n==null||n()}))}function iw(s,e,t){const n=s[e]*180/Math.PI;return Fi(e.toUpperCase(),vh(n,1,i=>{s[e]=i*Math.PI/180,t==null||t()}))}function Il(s,e,t,n,i,r){const o=document.createElement("input");o.type="range",o.min=String(t),o.max=String(n),o.step=String(i),o.value=String(e),o.style.cssText="flex:1";const a=document.createElement("span");a.textContent=e.toFixed(2),a.style.cssText="width:36px;text-align:right;color:#9cf",o.addEventListener("input",()=>{const c=parseFloat(o.value);r(c),a.textContent=c.toFixed(2)});const l=Fi(s,o);return l.appendChild(a),l}function wd(s,e){const t=document.createElement("input");return t.type="color",t.value="#"+e.getHexString(),t.style.cssText="width:48px;height:22px;background:transparent;border:1px solid #444;cursor:pointer",t.addEventListener("input",()=>e.set(t.value)),Fi(s,t)}function sw(s,e,t){const n=document.createElement("input");return n.type="checkbox",n.checked=e,n.addEventListener("change",()=>t(n.checked)),Fi(s,n)}const Rc="wow-arena.snapshots.v1",bd=30;class rw{constructor(e){I(this,"hooks");I(this,"records",[]);I(this,"panel");I(this,"open",!1);this.hooks=e,this.records=aw(),this.panel=this.buildPanel(),document.body.appendChild(this.panel),window.addEventListener("keydown",t=>{t.code==="F2"&&(t.preventDefault(),this.capture()),t.code==="F3"&&(t.preventDefault(),this.toggle())}),this.renderList()}capture(e){this.hooks.renderer.render(this.hooks.scene,this.hooks.camera);const t=this.hooks.renderer.domElement,n=t.toDataURL("image/png"),i=ow(t,192),r=this.readPose(),o=`snap-${Date.now()}`,a={id:o,label:e??new Date().toLocaleTimeString(),timestamp:Date.now(),thumbnail:i,pose:r};return this.records.unshift(a),this.records.length>bd&&(this.records.length=bd),Ed(this.records),Dl(n,`${o}.png`),Dl(Td(r),`${o}.json`),this.renderList(),console.log("[snapshot]",o,r),a}restore(e){const t=this.records.find(n=>n.id===e);t&&this.applyPose(t.pose)}toggle(){this.open=!this.open,this.panel.style.display=this.open?"block":"none"}readPose(){const e=this.hooks.camera,t=this.hooks.rig;return{camera:{position:[e.position.x,e.position.y,e.position.z],yaw:t.currentYaw??t.targetYaw??0,pitch:t.currentPitch??t.targetPitch??0,distance:t.targetDistance??8},player:{position:[this.hooks.player.position.x,this.hooks.player.position.y,this.hooks.player.position.z],facingYaw:this.hooks.player.facingYaw}}}applyPose(e){this.hooks.player.position.set(...e.player.position),this.hooks.player.facingYaw=e.player.facingYaw;const t=this.hooks.rig;t.targetYaw=e.camera.yaw,t.currentYaw=e.camera.yaw,t.targetPitch=e.camera.pitch,t.currentPitch=e.camera.pitch,t.targetDistance=e.camera.distance}buildPanel(){const e=document.createElement("div");return e.id="snapshot-panel",e.style.cssText=`
      position: fixed; bottom: 20px; right: 20px; width: 240px;
      max-height: 60vh; overflow: auto;
      background: rgba(20, 20, 28, 0.92); border: 1px solid #555;
      border-radius: 6px; color: #ddd; font: 11px/1.4 monospace;
      padding: 8px; z-index: 1000; display: none;
    `,e}renderList(){this.panel.innerHTML="";const e=document.createElement("div");e.innerHTML='<b style="color:#ffd57a">Snapshots</b> <span style="color:#888">[F2] capture · [F3] toggle</span>',e.style.marginBottom="6px",this.panel.appendChild(e);const t=document.createElement("button");if(t.textContent="Capture now (F2)",t.style.cssText="width:100%;background:#2a4a2a;color:#dfd;border:1px solid #4f6;padding:4px;cursor:pointer;margin-bottom:6px;font:11px monospace",t.addEventListener("click",()=>this.capture()),this.panel.appendChild(t),!this.records.length){const n=document.createElement("div");n.style.color="#888",n.textContent="No snapshots yet.",this.panel.appendChild(n);return}for(const n of this.records){const i=document.createElement("div");i.style.cssText="display:flex;gap:6px;margin:4px 0;padding:4px;border:1px solid #333;border-radius:3px";const r=document.createElement("img");r.src=n.thumbnail,r.style.cssText="width:64px;height:36px;object-fit:cover;border:1px solid #222",i.appendChild(r);const o=document.createElement("div");o.style.cssText="flex:1;display:flex;flex-direction:column;gap:2px";const a=document.createElement("div");a.textContent=n.label,a.style.color="#9cf",o.appendChild(a);const l=document.createElement("div");l.style.cssText="display:flex;gap:4px",l.appendChild(Ll("Restore",()=>this.restore(n.id))),l.appendChild(Ll("JSON",()=>Dl(Td(n.pose),`${n.id}.json`))),l.appendChild(Ll("×",()=>{this.records=this.records.filter(c=>c.id!==n.id),Ed(this.records),this.renderList()})),o.appendChild(l),i.appendChild(o),this.panel.appendChild(i)}}}function Ll(s,e){const t=document.createElement("button");return t.textContent=s,t.style.cssText="background:#2a2a3a;color:#ddd;border:1px solid #555;border-radius:3px;padding:2px 4px;cursor:pointer;font:10px monospace",t.addEventListener("click",e),t}function ow(s,e){const t=s.height/s.width,n=Math.min(e,s.width),i=Math.round(n*t),r=document.createElement("canvas");return r.width=n,r.height=i,r.getContext("2d").drawImage(s,0,0,n,i),r.toDataURL("image/jpeg",.7)}function Dl(s,e){const t=document.createElement("a");t.href=s,t.download=e,document.body.appendChild(t),t.click(),t.remove()}function Td(s){const e=new Blob([JSON.stringify(s,null,2)],{type:"application/json"});return URL.createObjectURL(e)}function aw(){try{const s=localStorage.getItem(Rc);if(!s)return[];const e=JSON.parse(s);return Array.isArray(e)?e:[]}catch{return[]}}function Ed(s){try{localStorage.setItem(Rc,JSON.stringify(s))}catch(e){try{localStorage.setItem(Rc,JSON.stringify(s.slice(0,10)))}catch{console.warn("[snapshot] failed to persist:",e)}}}const lw={seed:1337,count:12e3,innerRadius:9,outerRadius:38,bladeHeight:.85,bladeWidth:.1,windStrength:.18,windSpeed:1.6,baseColor:2574870,tipColor:9421386,hueJitter:.18,patchiness:.65,crossPlanes:!0};function cw(s){let e=s|0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ia=8,hw=`
  varying vec2 vUv;
  varying vec3 vInstanceTint;
  attribute vec3 aTint;
  attribute float aPhase;

  uniform float uTime;
  uniform float uWindStrength;
  uniform float uWindSpeed;
  // Each vec4 = (worldX, worldY, worldZ, pressRadius). Slot ignored when w<=0.
  uniform vec4 uActors[${ia}];

  void main() {
    vUv = uv;
    vInstanceTint = aTint;

    vec4 mvPosition = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      mvPosition = instanceMatrix * mvPosition;
    #endif

    // Wind: base stays put, tip sways the most. The per-blade phase (aPhase)
    // makes neighbouring blades fall out of sync, producing a wave-like gust.
    float dispPower = 1.0 - cos(uv.y * 1.5707963);
    float wave = sin(mvPosition.x * 0.25 + mvPosition.z * 0.18 + uTime * uWindSpeed + aPhase);
    float wDisp = wave * uWindStrength * dispPower;
    mvPosition.x += wDisp;
    mvPosition.z += wDisp * 0.5;

    // Actor collision: bend tip away from any actor within their press radius.
    // Base position is the instance origin in world space.
    vec3 bladeBase = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    vec3 push = vec3(0.0);
    for (int i = 0; i < ${ia}; i++) {
      vec4 actor = uActors[i];
      if (actor.w <= 0.0001) continue;
      vec2 d = bladeBase.xz - actor.xz;
      float dist = length(d);
      if (dist < actor.w) {
        // Smooth falloff: full bend at center, zero at edge.
        float t = 1.0 - dist / actor.w;
        float k = t * t * (3.0 - 2.0 * t);
        // Direction away from actor.
        vec2 dir = dist > 0.0001 ? d / dist : vec2(1.0, 0.0);
        // Tip is pushed; UV.y scales so base stays planted.
        // Push magnitude: ~half the press radius so the blade lays mostly flat.
        float mag = k * actor.w * 0.55 * dispPower;
        push.x += dir.x * mag;
        push.z += dir.y * mag;
        // Slight downward squish at the tip — feels like the blade is mashed.
        push.y -= k * 0.25 * dispPower;
      }
    }
    mvPosition.xyz += push;

    gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
  }
`,uw=`
  varying vec2 vUv;
  varying vec3 vInstanceTint;

  uniform vec3 uBaseColor;
  uniform vec3 uTipColor;

  void main() {
    // Tip-to-base gradient: clarity = darker at base (0.5), brighter at tip (1.0).
    float clarity = vUv.y * 0.5 + 0.5;
    vec3 col = mix(uBaseColor, uTipColor, vUv.y) * vInstanceTint;
    gl_FragColor = vec4(col * clarity, 1.0);
  }
`;class dw extends de{constructor(t,n={}){super();I(this,"params");I(this,"material",null);I(this,"heightSampler");this.name="GrassField",this.heightSampler=t,this.params={...lw,...n},this.userData.editableParams={schema:fw(),get:()=>this.params,set:i=>{this.params={...this.params,...i},this.rebuild()},regenerate:()=>this.rebuild()},this.rebuild()}update(t){this.material&&(this.material.uniforms.uTime.value=t)}setActors(t){if(!this.material)return;const n=this.material.uniforms.uActors.value;for(let i=0;i<ia;i++){const r=t[i];r?n[i].set(r.pos.x,r.pos.y,r.pos.z,r.radius):n[i].set(0,0,0,0)}}rebuild(){for(const g of[...this.children])this.remove(g),g.geometry&&g.geometry.dispose();this.material&&this.material.dispose();const t=this.params,n=new jn(t.bladeWidth,t.bladeHeight,1,4);n.translate(0,t.bladeHeight*.5,0);let i=n;if(t.crossPlanes){const g=n.clone(),_=new fe().makeRotationY(Math.PI/3);g.applyMatrix4(_),i=gw(n,g),n.dispose()}const r=[];for(let g=0;g<ia;g++)r.push(new Je(0,0,0,0));this.material=new bt({vertexShader:hw,fragmentShader:uw,side:At,uniforms:{uTime:{value:0},uWindStrength:{value:t.windStrength},uWindSpeed:{value:t.windSpeed},uBaseColor:{value:new Q(t.baseColor)},uTipColor:{value:new Q(t.tipColor)},uActors:{value:r}}});const o=new ci(i,this.material,t.count);o.frustumCulled=!0,o.castShadow=!1,o.receiveShadow=!1;const a=new Float32Array(t.count*3),l=new Float32Array(t.count),c=cw(t.seed),h=pw(c,t.innerRadius,t.outerRadius,t.count,t.patchiness),u=new et,d=new Q(t.tipColor),f={h:0,s:0,l:0};d.getHSL(f);for(let g=0;g<t.count;g++){const[_,p]=h[g],m=this.heightSampler(_,p);u.position.set(_,m,p),u.rotation.y=c()*Math.PI*2;const y=.7+c()*.6;u.scale.set(y,.85+c()*.5,y),u.updateMatrix(),o.setMatrixAt(g,u.matrix);const x=(c()-.5)*t.hueJitter,v=(c()-.5)*t.hueJitter*.4,E=new Q().setHSL((f.h+x+1)%1,Math.max(0,Math.min(1,f.s)),Math.max(0,Math.min(1,f.l+v)));a[g*3+0]=E.r/Math.max(.001,d.r),a[g*3+1]=E.g/Math.max(.001,d.g),a[g*3+2]=E.b/Math.max(.001,d.b),l[g]=c()*Math.PI*2}o.instanceMatrix.needsUpdate=!0,i.setAttribute("aTint",new Ss(a,3)),i.setAttribute("aPhase",new Ss(l,1)),this.add(o)}}function fw(){return[{key:"seed",label:"Seed",type:"int",min:0,max:99999,step:1},{key:"count",label:"Blades",type:"int",min:0,max:5e4,step:500},{key:"innerRadius",label:"Inner radius",type:"float",min:0,max:40,step:.5},{key:"outerRadius",label:"Outer radius",type:"float",min:5,max:60,step:.5},{key:"bladeHeight",label:"Blade height",type:"float",min:.1,max:2.5,step:.05},{key:"bladeWidth",label:"Blade width",type:"float",min:.02,max:.5,step:.01},{key:"windStrength",label:"Wind strength",type:"float",min:0,max:1,step:.01},{key:"windSpeed",label:"Wind speed",type:"float",min:0,max:5,step:.05},{key:"hueJitter",label:"Hue jitter",type:"float",min:0,max:.5,step:.01},{key:"patchiness",label:"Patchiness",type:"float",min:0,max:1,step:.05}]}function pw(s,e,t,n,i){const r=[],o=Math.floor(s()*1e9),a=(h,u)=>mw(h*.07,u*.07,o);let l=0;const c=n*6;for(;r.length<n&&l<c;){l++;const h=s()*Math.PI*2,u=Math.sqrt(s()*(t*t-e*e)+e*e),d=Math.cos(h)*u,f=Math.sin(h)*u,g=(a(d,f)+1)*.5,_=1-i+i*g;s()<_&&r.push([d,f])}return r}function mw(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=s-n,o=e-i,a=Io(n,i,t),l=Io(n+1,i,t),c=Io(n,i+1,t),h=Io(n+1,i+1,t),u=r*r*(3-2*r),d=o*o*(3-2*o);return((a*(1-u)+l*u)*(1-d)+(c*(1-u)+h*u)*d)*2-1}function Io(s,e,t){let n=Math.imul(s|0,374761393)^Math.imul(e|0,668265263)^(t|0);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function gw(s,e){const t=s.index?s.toNonIndexed():s,n=e.index?e.toNonIndexed():e,i=new ot,r=t.getAttribute("position"),o=n.getAttribute("position"),a=t.getAttribute("uv"),l=n.getAttribute("uv"),c=new Float32Array(r.array.length+o.array.length);c.set(r.array,0),c.set(o.array,r.array.length);const h=new Float32Array(a.array.length+l.array.length);return h.set(a.array,0),h.set(l.array,a.array.length),i.setAttribute("position",new rt(c,3)),i.setAttribute("uv",new rt(h,2)),i.computeVertexNormals(),i}const Lo={seed:1337,biome:"grassland",innerRadius:9,outerRadius:38,flowerCount:350,rockCount:220,mushroomCount:60,hutCount:6,rockScale:1},_w={grassland:{grass:[5209898,7316800],flower:[15909198,15228277,15788788,11038692],rock:8024936,mushroomCap:12864063,mushroomStem:15985364,hutWall:9071165,hutRoof:6961695,ground:5933626},autumn:{grass:[9067034,12092224],flower:[15228202,14270266,13189152],rock:7035720,mushroomCap:11024416,mushroomStem:15127984,hutWall:8016672,hutRoof:4857616,ground:8017184},tundra:{grass:[12637392,10139315],flower:[15397365,12047594,14214124],rock:9476250,mushroomCap:6982304,mushroomStem:15397359,hutWall:12103840,hutRoof:6186864,ground:12372420},arid:{grass:[13215064,10911802],flower:[14173728,15777594,15235621],rock:10123861,mushroomCap:12607536,mushroomStem:15653040,hutWall:12094026,hutRoof:6961690,ground:13017960}};function Xp(s){let e=s|0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class xw extends de{constructor(t,n,i={}){super();I(this,"params");I(this,"grass");I(this,"heightSampler");this.name="Ecosystem",this.heightSampler=n,this.grass=new dw(n,{seed:(i.seed??Lo.seed)^42405,innerRadius:i.innerRadius??Lo.innerRadius,outerRadius:i.outerRadius??Lo.outerRadius}),this.add(this.grass),this.params={...Lo,...i},this.userData.editableParams={schema:yw(),get:()=>this.params,set:r=>{this.params={...this.params,...r},this.regenerate()},regenerate:()=>this.regenerate()},this.regenerate()}regenerate(){for(const l of[...this.children])l!==this.grass&&(this.remove(l),Aw(l));const t=Xp(this.params.seed),n=_w[this.params.biome];this.grass.params={...this.grass.params,seed:this.params.seed^42405,innerRadius:this.params.innerRadius,outerRadius:this.params.outerRadius,baseColor:n.grass[0],tipColor:n.grass[1]},this.grass.rebuild();const i=Tw(t,this.params,n,this.heightSampler),r=i.children.map(l=>({x:l.position.x,z:l.position.z,r:jp*(l.scale.x||1)+.5})),o=[{x:-8,z:-8,r:1.6},{x:8,z:-8,r:1.6},{x:-8,z:8,r:1.6},{x:8,z:8,r:1.6}],a=[...r,...o];this.add(i),this.add(vw(t,this.params,n,this.heightSampler)),this.add(Mw(t,this.params,n,this.heightSampler,a)),this.add(bw(t,this.params,n,this.heightSampler))}update(t){this.grass.update(t)}getColliders(){const t=[];for(const n of this.children){if(n.name==="Huts")for(const i of n.children){const r=i.userData.collider;if(!r)continue;const o=i.scale.x||1;t.push({type:"cylinder",x:i.position.x,z:i.position.z,radius:r.radius*o,height:r.height*o})}if(n.name==="Rocks"){const i=n.userData.colliders;i&&t.push(...i)}}return t}}function yw(){return[{key:"seed",label:"Seed",type:"int",min:0,max:99999,step:1},{key:"biome",label:"Biome",type:"select",options:["grassland","autumn","tundra","arid"]},{key:"innerRadius",label:"Inner radius",type:"float",min:0,max:40,step:.5},{key:"outerRadius",label:"Outer radius",type:"float",min:5,max:50,step:.5},{key:"flowerCount",label:"Flowers",type:"int",min:0,max:1e3,step:25},{key:"rockCount",label:"Rocks",type:"int",min:0,max:300,step:5},{key:"mushroomCount",label:"Mushrooms",type:"int",min:0,max:300,step:5},{key:"hutCount",label:"Huts",type:"int",min:0,max:20,step:1},{key:"rockScale",label:"Rock scale",type:"float",min:.3,max:3,step:.05}]}function gr(s,e,t){const n=s()*Math.PI*2,i=Math.sqrt(s()*(t*t-e*e)+e*e);return[Math.cos(n)*i,Math.sin(n)*i]}function vw(s,e,t,n){const i=new de;i.name="Flowers";const r=new zt(.015,.015,.25,4);r.translate(0,.125,0);const o=new hi({color:3889690}),a=new ci(r,o,e.flowerCount);a.name="FlowerStems";const l=new Ar(.08,6);l.rotateX(-Math.PI/2),l.translate(0,.27,0);const c=new hi({color:16777215,side:At}),h=new ci(l,c,e.flowerCount);h.name="FlowerHeads";const u=new fe,d=new mt,f=new C,g=new C(1,1,1),_=new Q;for(let p=0;p<e.flowerCount;p++){const[m,y]=gr(s,e.innerRadius,e.outerRadius),x=n(m,y),v=.8+s()*.6;f.set(m,x,y),g.set(v,v,v),d.setFromAxisAngle(new C(0,1,0),s()*Math.PI*2),u.compose(f,d,g),a.setMatrixAt(p,u),h.setMatrixAt(p,u),_.set(t.flower[Math.floor(s()*t.flower.length)]),h.setColorAt(p,_)}return a.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),i.add(a),i.add(h),i}function Mw(s,e,t,n,i=[]){const r=new de;r.name="Rocks";const o=new Cr(.35,1);o.deleteAttribute("uv"),o.deleteAttribute("normal");const a=_v(o,.001),l=a.attributes.position,c=Xp(49374);for(let N=0;N<l.count;N++){const R=.78+c()*.42;l.setXYZ(N,l.getX(N)*R,l.getY(N)*R,l.getZ(N)*R)}const h=a.toNonIndexed();h.computeVertexNormals(),o.dispose(),a.dispose();const u=new Oe({color:t.rock,roughness:1,metalness:0,flatShading:!0}),d=e.outerRadius-e.innerRadius,f=Math.max(5,Math.round(d/6)),g=[];for(let N=0;N<f;N++){const[R,F]=gr(s,e.innerRadius+1,e.outerRadius-2);g.push({x:R,z:F,spread:2+s()*4,weight:1/(N+1),boulder:s()<.6})}const _=g.reduce((N,R)=>N+R.weight,0),p=[],m=(N,R,F,D)=>{const z=F*.6;for(const V of i){const K=N-V.x,Y=R-V.z;if(K*K+Y*Y<(V.r+z)*(V.r+z))return!1}return p.push({x:N,z:R,size:F,squash:D}),!0};for(const N of g){if(!N.boulder)continue;const R=3+s()*2.5;if(!m(N.x,N.z,R,.55+s()*.25))continue;const F=4+Math.floor(s()*5);for(let D=0;D<F;D++){const z=s()*Math.PI*2,V=R*(.35+s()*.75);m(N.x+Math.cos(z)*V,N.z+Math.sin(z)*V,R*(.25+s()*.4),.5+s()*.5)}}const y=Math.max(0,e.rockCount-p.length);let x=0,v=0;for(;x<y&&v<y*6;){v++;let N,R,F;if(s()<.15)[N,R]=gr(s,e.innerRadius+1,e.outerRadius);else{let D=s()*_,z=g[0];for(const Y of g)if(D-=Y.weight,D<=0){z=Y;break}const V=s()*Math.PI*2,K=Math.abs(ww(s))*z.spread;N=z.x+Math.cos(V)*K,R=z.z+Math.sin(V)*K}F=Sw(s)*e.rockScale,s()<.08&&(F=Math.max(F,1.6+s()*1)),m(N,R,F,.5+s()*.5)&&x++}const E=new ci(h,u,p.length);E.castShadow=!0,E.receiveShadow=!0;const w=new fe,T=new mt,L=new C,M=new C,S=.35;for(let N=0;N<p.length;N++){const R=p[N],F=R.size*S*R.squash,D=R.size>2?F*.3:0,z=n(R.x,R.z)+F-D;L.set(R.x,z,R.z),M.set(R.size,R.size*R.squash,R.size),T.setFromEuler(new jt(s()*.4,s()*Math.PI*2,s()*.4)),w.compose(L,T,M),E.setMatrixAt(N,w)}E.instanceMatrix.needsUpdate=!0,r.add(E);const O=.9,k=[];for(const N of p){if(N.size<O)continue;const R=N.size*S*N.squash,F=N.size>2?R*.3:0,z=n(N.x,N.z)-F+2*R;k.push({type:"cylinder",x:N.x,z:N.z,radius:N.size*S*.9,height:z,topY:z,climbable:!0})}return r.userData.colliders=k,r}function Sw(s){const e=Math.max(1e-4,s());return Math.min(4,.5/Math.pow(e,1/1.7))}function ww(s){const e=Math.max(1e-9,s()),t=s();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function bw(s,e,t,n){const i=new de;i.name="Mushrooms";const r=new zt(.05,.07,.2,6);r.translate(0,.1,0);const o=new hi({color:t.mushroomStem}),a=new ci(r,o,e.mushroomCount);a.name="MushroomStems",a.castShadow=!0;const l=new Bt(.13,8,5,0,Math.PI*2,0,Math.PI/2);l.translate(0,.2,0);const c=new hi({color:t.mushroomCap}),h=new ci(l,c,e.mushroomCount);h.name="MushroomCaps",h.castShadow=!0;const u=new fe,d=new mt,f=new C,g=new C;for(let _=0;_<e.mushroomCount;_++){const[p,m]=gr(s,e.innerRadius+1,e.outerRadius),y=n(p,m),x=.7+s()*1;f.set(p,y,m),g.set(x,x,x),d.setFromAxisAngle(new C(0,1,0),s()*Math.PI*2),u.compose(f,d,g),a.setMatrixAt(_,u),h.setMatrixAt(_,u)}return a.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,i.add(a),i.add(h),i}function Tw(s,e,t,n){const i=new de;i.name="Huts";for(let r=0;r<e.hutCount;r++){const[o,a]=gr(s,e.innerRadius+4,e.outerRadius-8),l=n(o,a),c=Ew(t,s);c.name=`Hut_${r}`,c.position.set(o,l,a),c.rotation.y=s()*Math.PI*2;const h=.9+s()*.5;c.scale.setScalar(h),i.add(c)}return i}const Ad=1.6,Rd=1.75,$s=2.2,jp=2.2,Ul=1.7;function Ew(s,e){const t=new de,n=new zt(Ad,Rd,$s,8),i=new Oe({color:s.hutWall,roughness:.95,flatShading:!0}),r=new $(n,i);r.position.y=$s/2,r.castShadow=!0,r.receiveShadow=!0,r.name="Walls",t.add(r);const o=new pi(jp,Ul,8),a=new Oe({color:s.hutRoof,roughness:1,flatShading:!0}),l=new $(o,a);l.position.y=$s+Ul/2,l.castShadow=!0,l.name="Roof",t.add(l);const c=new jn(.85,1.3),h=new Ct({color:1708552,side:At}),u=new $(c,h);if(u.position.set(0,.65,Ad+.01),u.name="Door",t.add(u),e()<.3){const d=new Bt(.32,8,6),f=new Ct({color:14211288,transparent:!0,opacity:.6}),g=new $(d,f);g.position.set(.5,$s+Ul+.4,0),g.name="Smoke",t.add(g)}return t.userData.collider={type:"cylinder",radius:Rd,height:$s},t}function Aw(s){s.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&n.dispose()})}const Rw={seed:42,trunkHeight:3.4,trunkRadius:.22,trunkColor:1708552,branchCount:6,foliageColor:4156705,foliageScale:1.6,foliagePuff:.55,bend:.18};function Cw(s){let e=s|0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}let Do=null;class Cd extends de{constructor(t={}){super();I(this,"params");this.name="ProceduralTree",this.params={...Rw,...t},this.userData.editableParams={schema:Pw(),get:()=>this.params,set:n=>{this.params={...this.params,...n},this.rebuild()},regenerate:()=>this.rebuild()},Do||eM().then(n=>{Do=n,this.rebuild()}).catch(n=>console.warn("[proceduralTree] foliage alpha load failed",n)),this.rebuild()}rebuild(){for(const l of[...this.children])this.remove(l),Dw(l);const t=this.params,n=Cw(t.seed),i=Iw(t.trunkHeight,t.trunkRadius,t.bend,n),r=new Oe({color:t.trunkColor,roughness:1,flatShading:!0}),o=new $(i,r);if(o.name="Trunk",o.castShadow=!0,o.receiveShadow=!0,this.add(o),!Do)return;const a=Qv(Do,t.foliageColor);Lw(a,"u_scale",t.foliagePuff);for(let l=0;l<t.branchCount;l++){const c=new $(new Cr(.55*t.foliageScale,1),a),h=t.trunkHeight*(.6+n()*.5),u=t.trunkRadius*3*(.4+n()*.8),d=n()*Math.PI*2;c.position.set(Math.cos(d)*u+t.bend*h,h+(n()-.5)*.4,Math.sin(d)*u);const f=.7+n()*.7;c.scale.setScalar(f),c.castShadow=!0,c.receiveShadow=!0,c.name=`FoliageCluster_${l}`,this.add(c)}}}function Pw(){return[{key:"seed",label:"Seed",type:"int",min:0,max:99999,step:1},{key:"trunkHeight",label:"Trunk height",type:"float",min:1,max:8,step:.1},{key:"trunkRadius",label:"Trunk radius",type:"float",min:.05,max:.8,step:.01},{key:"branchCount",label:"Clusters",type:"int",min:1,max:20,step:1},{key:"foliageScale",label:"Canopy scale",type:"float",min:.3,max:4,step:.05},{key:"foliagePuff",label:"Leaf puff",type:"float",min:.1,max:1.5,step:.02},{key:"bend",label:"Trunk bend",type:"float",min:-.4,max:.4,step:.02}]}function Iw(s,e,t,n){const o=[];for(let c=0;c<=7;c++){const h=c/7,u=e*(1-h*.55)*(.9+(n()-.5)*.15);o.push(new ue(u,h*s))}const a=new ga(o,8),l=a.attributes.position;for(let c=0;c<l.count;c++)l.setX(c,l.getX(c)+t*l.getY(c));return a.computeVertexNormals(),a}function Lw(s,e,t){const n=s.onBeforeCompile;s.onBeforeCompile=(i,r)=>{n&&n(i,r),i.uniforms[e]&&(i.uniforms[e]={value:t})},s.needsUpdate=!0}function Dw(s){s.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const n=t.material;Array.isArray(n)?n.forEach(i=>i.dispose()):n&&n.dispose()})}class Uw{constructor(e){I(this,"visible",!1);I(this,"scene");I(this,"getColliders");I(this,"root");I(this,"badge");this.scene=e.scene,this.getColliders=e.getColliders,this.root=new de,this.root.name="ColliderDebug",this.root.visible=!1,this.root.userData.editorIgnore=!0,this.scene.add(this.root),this.badge=document.createElement("div"),this.badge.style.cssText=`
      position: fixed; top: 10px; left: 50%; transform: translateX(-50%);
      background: rgba(20,20,28,0.85); color: #ffd57a; border: 1px solid #555;
      border-radius: 4px; padding: 4px 10px; font: 11px monospace;
      z-index: 1000; pointer-events: auto; cursor: pointer;
    `,this.badge.textContent="F4 · Hitboxes: OFF",this.badge.title="Toggle collider visualization",this.badge.addEventListener("click",()=>this.toggle()),document.body.appendChild(this.badge),window.addEventListener("keydown",t=>{t.code==="F4"&&(t.preventDefault(),this.toggle())})}toggle(){this.visible=!this.visible,this.root.visible=this.visible,this.badge.textContent=`F4 · Hitboxes: ${this.visible?"ON":"OFF"}`,this.badge.style.color=this.visible?"#7ef07e":"#ffd57a",this.visible&&this.rebuild()}update(){this.visible&&this.rebuild()}rebuild(){var t;for(const n of[...this.root.children]){this.root.remove(n),(t=n.geometry)==null||t.dispose();const i=n.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i==null||i.dispose()}const e=this.getColliders();for(const n of e){const i=Nw(n);i&&this.root.add(i)}}}function Nw(s){return s.type==="cylinder"?Fw(s):s.type==="box"?Ow(s):null}function Fw(s){const e=new xa(new zt(s.radius,s.radius,s.height,16)),t=new Oi({color:65416,depthTest:!1,transparent:!0,opacity:.85}),n=new Tr(e,t);return n.position.set(s.x,s.height/2,s.z),n.renderOrder=999,n}function Ow(s){const e=new xa(new me(s.width,s.height,s.depth)),t=new Oi({color:43775,depthTest:!1,transparent:!0,opacity:.85}),n=new Tr(e,t);return n.position.set(s.x,s.height/2,s.z),n.rotation.y=s.rotation,n.renderOrder=999,n}const Pd=1.8,kw=4,Id=3,Ld=1,Nl=6,Bw=18,Dd=8,zw=1.4,Hw=3,Gw=6,Uo=.5,Ud=[{body:4868687,belly:6974066,ears:2236966},{body:3026478,belly:4473928,ears:1118481},{body:7234393,belly:9865852,ears:3814444}];function Vw(){const s=Ud[Math.floor(Math.random()*Ud.length)],e=new Oe({color:s.body,roughness:.85,flatShading:!0}),t=new Oe({color:s.belly,roughness:.85,flatShading:!0}),n=new Oe({color:s.ears,roughness:.9,flatShading:!0}),i=new Ct({color:15255098}),r=new Oe({color:1118481,roughness:.6}),o=new de;o.name="Wolf";const a=new $(new me(.55,.5,1.15),e);a.position.y=.62,a.castShadow=!0,o.add(a);const l=new $(new me(.53,.2,1.05),t);l.position.set(0,.46,0),o.add(l);const c=new $(new me(.18,.12,.85),e);c.position.set(0,.92,.05),o.add(c);const h=new de;h.position.set(0,.7,.6),h.rotation.x=.05,o.add(h);const u=new $(new me(.38,.36,.34),e);u.position.set(0,-.08,.05),h.add(u);const d=new $(new me(.42,.36,.4),e);d.position.set(0,.05,.32),h.add(d);const f=new $(new me(.24,.2,.32),e);f.position.set(0,-.05,.6),h.add(f);const g=new de;g.position.set(0,-.15,.58),h.add(g);const _=new $(new me(.22,.08,.3),t);_.position.set(0,-.04,0),g.add(_);const p=new $(new me(.12,.1,.08),r);p.position.set(0,-.02,.77),h.add(p);const m=new pi(.12,.28,4),y=new $(m,n);y.position.set(-.15,.32,.18),y.rotation.z=.18,h.add(y);const x=y.clone();x.position.x=.15,x.rotation.z=-.18,h.add(x);for(const L of[-1,1]){const M=new $(new Bt(.045,6,4),i);M.position.set(.11*L,.12,.48),h.add(M)}const v=new de;v.position.set(0,.68,-.6),v.rotation.x=-.7,o.add(v);const E=new $(new me(.11,.11,.55),e);E.position.z=-.28,E.castShadow=!0,v.add(E);const w=[],T=[[-.2,.5,0],[.2,.5,Math.PI],[-.2,-.45,Math.PI],[.2,-.45,0]];for(const[L,M,S]of T){const O=new de;O.position.set(L,.5,M),o.add(O);const k=new $(new me(.12,.52,.12),e);k.position.y=-.26,k.castShadow=!0,O.add(k);const N=new $(new me(.14,.08,.18),r);N.position.y=-.5,O.add(N),O.userData.phase=S,w.push(O)}return{group:o,legs:w,tail:v,head:h,body:a,jaw:g}}function Ww(){const s=new de;s.name="WolvesSpawningGround";const e=new Oe({color:5590856,roughness:1,flatShading:!0}),t=new Ct({color:657930}),n=[1.6,1.3,1.5],i=[Math.PI*.2,Math.PI*.95,Math.PI*1.5];for(let a=0;a<n.length;a++){const l=n[a],c=i[a],h=Math.cos(c)*2,u=Math.sin(c)*2,d=new $(new _a(l,0),e);d.position.set(h,l*.55,u),d.rotation.y=c,d.castShadow=!0,d.receiveShadow=!0,s.add(d)}const r=new $(new zt(1.3,1.4,.5,12,1,!0),e);r.position.y=1.55,r.rotation.x=Math.PI/2,r.rotation.z=0,s.add(r);const o=new $(new Ar(1.05,16),t);o.position.set(0,1.2,.01),o.rotation.x=0,s.add(o);for(let a=0;a<4;a++){const l=new $(new me(.05,.05,.3),new Oe({color:15327951,roughness:.9}));l.position.set((Math.random()-.5)*2.6,.04,.8+Math.random()*1.4),l.rotation.y=Math.random()*Math.PI*2,s.add(l)}return s}class Xw{constructor(e,t,n,i,r,o=new C(-14,0,-14)){I(this,"wolves",[]);I(this,"group");I(this,"den");I(this,"denPos");I(this,"bounds");I(this,"heightData");I(this,"preyProviders");I(this,"colliders",[]);this.bounds=n,this.heightData=i,this.preyProviders=r,this.denPos=o.clone(),this.group=new de,this.group.name="WolfPack",e.add(this.group),this.den=Ww(),this.den.position.set(o.x,Hn(o.x,o.z,i),o.z),e.add(this.den);for(let a=0;a<t;a++)this.spawnWolf()}spawnWolf(){const e=Vw(),t=this.wolves.length,n=t*2.399963+Math.random()*.45,i=2.5+t%3*1.4+Math.random()*1.2,r=new C(Math.cos(n)*i,0,Math.sin(n)*i),o=this.denPos.clone().add(r),a={parts:e,pos:o,yaw:Math.random()*Math.PI*2,state:"wander",target:new C,prey:null,attackTimer:0,stateTimer:0,walkPhase:Math.random()*Math.PI*2,hp:60,maxHp:60,dead:!1,deadTimer:0,lastHitAt:0,id:`wolf-${this.wolves.length+1}`,name:"Wolf",aggro:new Map,prowlCenter:o.clone()};a.target.copy(this.pickWanderTarget(a)),e.group.position.copy(o),e.group.rotation.y=a.yaw,this.group.add(e.group),this.wolves.push(a)}pickWanderTarget(e){const t=(e==null?void 0:e.prowlCenter)??this.denPos,n=Math.random()*Math.PI*2,i=Nl*Math.sqrt(Math.random());return new C(t.x+Math.cos(n)*i,0,t.z+Math.sin(n)*i)}update(e){for(const t of this.wolves){if(t.dead){t.deadTimer+=e,t.deadTimer>10&&(t.dead=!1,t.deadTimer=0,t.hp=t.maxHp,t.aggro.clear(),t.parts.group.rotation.x=0,t.pos.copy(this.denPos).add(new C((Math.random()-.5)*3,0,(Math.random()-.5)*3)),t.prowlCenter.copy(t.pos),t.target.copy(this.pickWanderTarget(t)),t.state="wander");continue}this.updateWolf(t,e)}}setColliders(e){this.colliders=e}getPositions(){return this.wolves.map(e=>e.pos)}findNearestHuntTarget(e,t){let n=null,i=t*t;for(const r of this.preyProviders){const o=r.findNearestPrey(e,t);if(!o)continue;const a=o.pos.x-e.x,l=o.pos.z-e.z,c=a*a+l*l;c<i&&(i=c,n=o)}return n}findNearestPrey(e,t){let n=null,i=t*t;for(const r of this.wolves){if(r.dead)continue;const o=r.pos.x-e.x,a=r.pos.z-e.z,l=o*o+a*a;l<i&&(i=l,n=r)}return n?this.makePreyRef(n):null}forEachPrey(e){for(const t of this.wolves)t.dead||e(this.makePreyRef(t))}makePreyRef(e){return{id:e.id,name:e.name,team:"enemy",mesh:e.parts.group,get pos(){return e.pos},get alive(){return!e.dead},get hp(){return e.hp},get maxHp(){return e.maxHp},get radius(){return Uo},damage:(t,n)=>e.dead?!1:(e.hp-=t,e.lastHitAt=performance.now(),Ur(e.parts.group,t),n!=null&&n.alive&&(this.addAggro(e,n,t+40),e.prey=n,e.state="hunt",e.stateTimer=0),e.hp<=0?(e.hp=0,e.dead=!0,e.prey=null,e.aggro.clear(),e.parts.group.rotation.x=Math.PI/2*.9,!0):!1),heal:t=>{if(e.dead||e.hp>=e.maxHp)return 0;const n=e.hp;e.hp=Math.min(e.maxHp,e.hp+t),e.lastHitAt=performance.now();const i=e.hp-n;return i>0&&Nr(e.parts.group,i),i},scare:()=>{}}}addAggro(e,t,n){if(t.id===e.id)return;const i=e.aggro.get(t.id);e.aggro.set(t.id,{ref:t,score:((i==null?void 0:i.score)??0)+n})}chooseAggroTarget(e){let t=null,n=0;for(const[i,r]of e.aggro){if(r.score*=.995,!r.ref.alive||r.score<1){e.aggro.delete(i);continue}r.score>n&&(n=r.score,t=r.ref)}return t}updateWolf(e,t){e.attackTimer>0&&(e.attackTimer=Math.max(0,e.attackTimer-t)),e.stateTimer+=t;const n=this.chooseAggroTarget(e);if(n&&n!==e.prey&&(e.prey=n,e.state="hunt",e.stateTimer=0),e.state==="wander"||e.state==="return"){const d=this.findNearestHuntTarget(e.pos,Bw);d&&(e.prey=d,this.addAggro(e,d,10),e.state="hunt",e.stateTimer=0)}e.prey&&!e.prey.alive&&(e.prey=null,(e.state==="hunt"||e.state==="attack")&&(e.state="feed",e.stateTimer=0));let i=Pd,r=e.target.x,o=e.target.z;switch(e.state){case"wander":{const d=e.target.x-e.pos.x,f=e.target.z-e.pos.z;d*d+f*f<Ld*Ld&&e.target.copy(this.pickWanderTarget(e));break}case"hunt":{if(!e.prey){e.state="wander";break}r=e.prey.pos.x,o=e.prey.pos.z,i=kw,e.prey.scare(e.pos.x,e.pos.z,1500);const d=r-e.pos.x,f=o-e.pos.z,g=bs(Uo,e.prey);d*d+f*f<g*g&&(e.state="attack",e.stateTimer=0);break}case"attack":{if(!e.prey){e.state="feed",e.stateTimer=0;break}r=e.prey.pos.x,o=e.prey.pos.z,i=0;const d=r-e.pos.x,f=o-e.pos.z,g=bs(Uo,e.prey);if(Fr(e.pos,e.prey,g),d*d+f*f>g*1.6*(g*1.6)){e.state="hunt";break}if(e.attackTimer<=0){const _=this.makePreyRef(e),p=e.prey.damage(Dd,_);this.addAggro(e,e.prey,Dd),e.attackTimer=zw,e.parts.jaw.rotation.x=-.6,p&&(e.prey=null,e.state="feed",e.stateTimer=0)}break}case"feed":{i=0,e.stateTimer>=Hw&&(e.state="return",e.stateTimer=0,e.target.set(this.denPos.x,0,this.denPos.z));break}case"return":{const d=this.denPos.x-e.pos.x,f=this.denPos.z-e.pos.z;d*d+f*f<Nl*.8*(Nl*.8)&&(e.state="wander",e.target.copy(this.pickWanderTarget(e)));break}}const a=r-e.pos.x,l=o-e.pos.z;let h=Math.atan2(a,l)-e.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;if(e.yaw+=Math.max(-Id*t,Math.min(Id*t,h)),i>0){const d=1-Math.min(1,Math.abs(h)/Math.PI)*.55,f=i*d;e.pos.x+=Math.sin(e.yaw)*f*t,e.pos.z+=Math.cos(e.yaw)*f*t,e.pos.x=Math.max(-this.bounds,Math.min(this.bounds,e.pos.x)),e.pos.z=Math.max(-this.bounds,Math.min(this.bounds,e.pos.z)),e.walkPhase+=t*(i>Pd?14:9)*d;const g=Math.sin(e.walkPhase)*.75,_=Math.sin(e.walkPhase+Math.PI)*.75;e.parts.legs[0].rotation.x=g,e.parts.legs[1].rotation.x=_,e.parts.legs[2].rotation.x=_,e.parts.legs[3].rotation.x=g,e.parts.body.position.y=.62+Math.abs(Math.sin(e.walkPhase*2))*.05,e.parts.tail.rotation.y=Math.sin(e.walkPhase*1.2)*.4}else for(const d of e.parts.legs)d.rotation.x*=.85;e.parts.jaw.rotation.x=Math.min(0,e.parts.jaw.rotation.x+t*3);const u=Or(e.pos,{radius:Uo,bounds:this.bounds,heightData:this.heightData,colliders:this.colliders});if(e.parts.group.position.set(e.pos.x,u,e.pos.z),e.parts.group.rotation.y=e.yaw,e.state!=="hunt"&&e.state!=="attack"){const d=this.findNearestHuntTarget(e.pos,Gw);d&&d.scare(e.pos.x,e.pos.z,800)}}}const jw={seed:7,riverCount:2,width:6.5,segments:120,span:110,meander:18,shallowColor:7258312,deepColor:1456982,flowSpeed:.25};function qw(s){let e=s|0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Yw=`
  varying vec2 vUv;
  varying float vDepth;     // 0 at bank, 1 at center
  attribute float aDepth;

  void main() {
    vUv = uv;
    vDepth = aDepth;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Kw=`
  precision mediump float;
  varying vec2 vUv;
  varying float vDepth;
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform float uTime;
  uniform float uFlow;

  // Cheap sin-based ripples — two layers crossing at different angles for
  // a flowing-water shimmer without sampling a texture.
  float ripple(vec2 p, float t) {
    return sin(p.x * 18.0 + t * 2.4) * 0.5
         + sin((p.x + p.y * 0.5) * 11.0 - t * 1.7) * 0.5;
  }

  void main() {
    vec2 p = vUv;
    p.y -= uTime * uFlow;
    float r = ripple(p, uTime);
    float shimmer = smoothstep(-0.2, 1.0, r) * 0.18;
    vec3 col = mix(uShallow, uDeep, vDepth) + vec3(shimmer);
    // Soft alpha edge — blend with terrain at the banks.
    float alpha = mix(0.55, 0.92, vDepth);
    gl_FragColor = vec4(col, alpha);
  }
`;class $w extends de{constructor(t,n={}){super();I(this,"params");I(this,"heightSampler");I(this,"material",null);this.name="Rivers",this.heightSampler=t,this.params={...jw,...n},this.userData.editableParams={schema:Zw(),get:()=>this.params,set:i=>{this.params={...this.params,...i},this.rebuild()},regenerate:()=>this.rebuild()},this.rebuild()}update(t){this.material&&(this.material.uniforms.uTime.value=t)}rebuild(){var r;for(const o of[...this.children])this.remove(o),(r=o.geometry)==null||r.dispose();this.material&&(this.material.dispose(),this.material=null);const t=this.params;this.material=new bt({vertexShader:Yw,fragmentShader:Kw,uniforms:{uShallow:{value:new Q(t.shallowColor)},uDeep:{value:new Q(t.deepColor)},uTime:{value:0},uFlow:{value:t.flowSpeed}},transparent:!0,depthWrite:!1,side:At});const n=qw(t.seed),i=new hi({color:13084794,side:At});for(let o=0;o<t.riverCount;o++){const a=Jw(n,t,this.heightSampler,this.material,i);this.add(a)}}}function Zw(){return[{key:"seed",label:"Seed",type:"int",min:0,max:99999,step:1},{key:"riverCount",label:"Rivers",type:"int",min:0,max:6,step:1},{key:"width",label:"Width",type:"float",min:.5,max:8,step:.1},{key:"meander",label:"Meander",type:"float",min:0,max:25,step:.5},{key:"flowSpeed",label:"Flow speed",type:"float",min:-1,max:1,step:.02}]}function Jw(s,e,t,n,i){const r=e.span*.5,o=s()*Math.PI*2,a=o+Math.PI+(s()-.5)*.8,l=new C(Math.cos(o)*r,0,Math.sin(o)*r),c=new C(Math.cos(a)*r,0,Math.sin(a)*r),h=new C().subVectors(c,l),u=new C(-h.z,0,h.x).normalize(),d=6,f=[];for(let O=0;O<=d;O++){const k=O/d,N=new C().lerpVectors(l,c,k),R=Math.sin(k*Math.PI)*e.meander*(s()-.5)*2;N.addScaledVector(u,R),f.push(N)}const g=new op(f,!1,"catmullrom",.5),_=e.segments,p=[],m=[],y=[],x=[],v=.06;for(let O=0;O<=_;O++){const k=O/_,N=g.getPoint(k),R=g.getTangent(k),F=new C(-R.z,0,R.x).normalize(),D=e.width*(.85+.15*Math.sin(k*Math.PI*4)),V=t(N.x,N.z)-.18,K=N.clone().addScaledVector(F,-D*.5),Y=N.clone().addScaledVector(F,D*.5),J=t(K.x,K.z),ie=t(Y.x,Y.z);if(p.push(K.x,Math.min(J,V)+v,K.z),p.push(N.x,V+v,N.z),p.push(Y.x,Math.min(ie,V)+v,Y.z),m.push(0,k*10),m.push(.5,k*10),m.push(1,k*10),y.push(0,1,0),O<_){const H=O*3;x.push(H,H+1,H+3),x.push(H+3,H+1,H+4),x.push(H+1,H+2,H+4),x.push(H+4,H+2,H+5)}}const E=new ot;E.setAttribute("position",new Ue(p,3)),E.setAttribute("uv",new Ue(m,2)),E.setAttribute("aDepth",new Ue(y,1)),E.setIndex(x),E.computeVertexNormals();const w=new $(E,n);w.name="RiverWater",w.renderOrder=-1;const T=e.width*.45,L=Nd(g,e.segments,-e.width*.5-T*.5,T,t),M=Nd(g,e.segments,e.width*.5+T*.5,T,t),S=new de;return S.name="River",S.add(new $(L,i)),S.add(new $(M,i)),S.add(w),S}function Nd(s,e,t,n,i){const r=[],o=[],a=[];for(let h=0;h<=e;h++){const u=h/e,d=s.getPoint(u),f=s.getTangent(u),g=new C(-f.z,0,f.x).normalize(),_=d.clone().addScaledVector(g,t),p=_.clone().addScaledVector(g,-n*.5),m=_.clone().addScaledVector(g,n*.5),y=i(p.x,p.z),x=i(m.x,m.z);if(r.push(p.x,y+.04,p.z),r.push(m.x,x+.04,m.z),o.push(0,u*6,1,u*6),h<e){const v=h*2;a.push(v,v+1,v+2),a.push(v+2,v+1,v+3)}}const c=new ot;return c.setAttribute("position",new Ue(r,3)),c.setAttribute("uv",new Ue(o,2)),c.setIndex(a),c.computeVertexNormals(),c}const Fd=4e3;class Qw{constructor(e,t){I(this,"scene");I(this,"getEntities");I(this,"tracked",new Map);this.scene=e,this.getEntities=t}update(){const e=performance.now(),t=new Set;for(const n of this.getEntities()){if(!(n.hp<n.maxHp))return;const r=n.mesh.uuid;t.add(r);let o=this.tracked.get(r);o||(o=this.makeBar(n.mesh),this.tracked.set(r,o)),(o.lastHp!==n.hp||o.lastMax!==n.maxHp)&&(this.paint(o,n.hp,n.maxHp),o.lastHp=n.hp,o.lastMax=n.maxHp),o.lastSeen=e,n.mesh.updateWorldMatrix(!0,!1);const a=new C;n.mesh.getWorldPosition(a),o.sprite.position.set(a.x,a.y+1.6,a.z),o.sprite.visible=!0}for(const[n,i]of this.tracked)(!t.has(n)||e-i.lastSeen>Fd)&&(i.sprite.visible=!1,(e-i.lastSeen>Fd+4e3||!i.meshRef.parent)&&(this.scene.remove(i.sprite),i.texture.dispose(),i.sprite.material.dispose(),this.tracked.delete(n)))}makeBar(e){const t=document.createElement("canvas");t.width=128,t.height=24;const n=t.getContext("2d"),i=new Er(t);i.minFilter=wt,i.magFilter=wt;const r=new Sr({map:i,transparent:!0,depthTest:!1,depthWrite:!1}),o=new fa(r);return o.scale.set(1.4,.26,1),o.renderOrder=998,this.scene.add(o),{sprite:o,canvas:t,ctx:n,texture:i,lastHp:-1,lastMax:-1,lastSeen:0,meshRef:e}}paint(e,t,n){const{ctx:i,canvas:r,texture:o}=e;i.clearRect(0,0,r.width,r.height);const a=Math.max(0,Math.min(1,t/n));i.fillStyle="rgba(0,0,0,0.7)",i.fillRect(0,0,r.width,r.height),i.fillStyle="#3a2222",i.fillRect(4,4,r.width-8,r.height-8);let l=80,c=200,h=60;a<.6&&(l=220,c=160,h=50),a<.3&&(l=220,c=60,h=50),i.fillStyle=`rgb(${l},${c},${h})`,i.fillRect(4,4,(r.width-8)*a,r.height-8),i.fillStyle="#fff",i.font="bold 14px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(`${Math.ceil(t)}/${n}`,r.width/2,r.height/2),o.needsUpdate=!0}}const qp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const eb=new Rs(-1,1,1,-1,0,1);class tb extends ot{constructor(){super(),this.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ue([0,2,0,0,2,0],2))}}const nb=new tb;class Mh{constructor(e){this._mesh=new $(nb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cc extends Ls{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vs.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Mh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Od extends Ls{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class ib extends Ls{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cc(qp),this.copyPass.material.blending=Cn,this.clock=new mh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Od!==void 0&&(o instanceof Od?n=!0:o instanceof ib&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rb extends Ls{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Q}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const ob={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ts extends Ls{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new dn(r,o,{type:Pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new dn(r,o,{type:Pn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=ob;this.highPassUniforms=vs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=qp;this.copyUniforms=vs.clone(h.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Q,this.oldClearAlpha=1,this.basic=new Ct,this.fsQuad=new Mh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ts.BlurDirectionX=new ue(1,0);Ts.BlurDirectionY=new ue(0,1);const ab={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class lb extends Ls{constructor(){super();const e=ab;this.uniforms=vs.clone(e.uniforms),this.material=new hp({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Mh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const cb={name:"VignetteShader",uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float offset;
		uniform float darkness;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// Eskil's vignette

			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );

		}`},hb={uniforms:{tDiffuse:{value:null},uSaturation:{value:1.18},uContrast:{value:1.05},uWarmth:{value:.05},uShadowCool:{value:.04},uExposure:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uWarmth;
    uniform float uShadowCool;
    uniform float uExposure;
    varying vec2 vUv;

    vec3 saturate(vec3 c, float amt) {
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      return mix(vec3(l), c, amt);
    }

    // Mild S-curve: lifts midtones a touch, deepens darks, rolls highlights.
    vec3 sCurve(vec3 c, float k) {
      return mix(c, smoothstep(vec3(0.0), vec3(1.0), c), k - 1.0);
    }

    void main() {
      vec4 src = texture2D(tDiffuse, vUv);
      vec3 col = src.rgb * uExposure;

      // Hue shift: warmth into highlights, coolness into shadows.
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      vec3 warm = vec3(uWarmth, uWarmth * 0.5, -uWarmth * 0.4);
      vec3 cool = vec3(-uShadowCool, -uShadowCool * 0.3, uShadowCool);
      col += warm * smoothstep(0.4, 0.95, lum);
      col += cool * (1.0 - smoothstep(0.0, 0.45, lum));

      col = sCurve(col, uContrast);
      col = saturate(col, uSaturation);

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), src.a);
    }
  `};class ub{constructor(e,t,n,i={}){I(this,"composer");I(this,"bloom");I(this,"grade");I(this,"vignette");I(this,"motes");I(this,"moteVelocities");I(this,"moteBounds");const r=new ue;e.getSize(r),this.composer=new sb(e),this.composer.setSize(r.x,r.y),this.composer.setPixelRatio(e.getPixelRatio()),this.composer.addPass(new rb(t,n)),this.bloom=new Ts(r,i.bloomStrength??.28,i.bloomRadius??.45,i.bloomThreshold??.88),this.composer.addPass(this.bloom),this.grade=new Cc(hb),this.grade.uniforms.uSaturation.value=i.saturation??1.12,this.grade.uniforms.uContrast.value=i.contrast??1.04,this.grade.uniforms.uWarmth.value=i.warmth??.05,this.grade.uniforms.uShadowCool.value=i.shadowCool??.015,this.composer.addPass(this.grade),this.vignette=new Cc(cb),this.vignette.uniforms.offset.value=1.1,this.vignette.uniforms.darkness.value=i.vignette??1.1,this.composer.addPass(this.vignette),this.composer.addPass(new lb);const o=240,a=new Float32Array(o*3);this.moteVelocities=new Float32Array(o*3),this.moteBounds=new an(new C(-25,.5,-25),new C(25,6.5,25));for(let h=0;h<o;h++){const u=h*3;a[u+0]=pt.lerp(this.moteBounds.min.x,this.moteBounds.max.x,Math.random()),a[u+1]=pt.lerp(this.moteBounds.min.y,this.moteBounds.max.y,Math.random()),a[u+2]=pt.lerp(this.moteBounds.min.z,this.moteBounds.max.z,Math.random()),this.moteVelocities[u+0]=(Math.random()-.5)*.25,this.moteVelocities[u+1]=Math.random()*.08+.02,this.moteVelocities[u+2]=(Math.random()-.5)*.25}const l=new ot;l.setAttribute("position",new rt(a,3));const c=new pa({size:.09,color:16774344,transparent:!0,opacity:.55,blending:Pi,depthWrite:!1,sizeAttenuation:!0});this.motes=new ma(l,c),this.motes.name="AmbientMotes",this.motes.userData.editorIgnore=!0,t.add(this.motes)}setSize(e,t){this.composer.setSize(e,t),this.bloom.setSize(e,t)}render(e){const t=this.motes.geometry.getAttribute("position"),n=t.array,i=this.moteBounds.min,r=this.moteBounds.max;for(let o=0;o<n.length;o+=3)n[o+0]+=this.moteVelocities[o+0]*e,n[o+1]+=this.moteVelocities[o+1]*e,n[o+2]+=this.moteVelocities[o+2]*e,n[o+1]>r.y&&(n[o+1]=i.y),n[o+0]<i.x&&(n[o+0]=r.x),n[o+0]>r.x&&(n[o+0]=i.x),n[o+2]<i.z&&(n[o+2]=r.z),n[o+2]>r.z&&(n[o+2]=i.z);t.needsUpdate=!0,this.composer.render(e)}}class Yp{constructor(e,t,n,i){I(this,"id");I(this,"name");I(this,"team");I(this,"mesh");this.id=e,this.name=t,this.team=n,this.mesh=i}applyDebuff(e,t){e.applyDebuff(this.id,t)}getDebuffs(e){return e.getDebuffs(this.id)}}class db extends Yp{constructor(t){super(t.id,t.name,t.team,t.mesh);I(this,"ref");this.ref=t}get pos(){return this.ref.pos}get alive(){return this.ref.alive}get hp(){return this.ref.hp}get maxHp(){return this.ref.maxHp}get radius(){return this.ref.radius??.6}damage(t,n){return this.ref.damage(t,n)}heal(t){return this.ref.heal(t)}}class Pc extends Yp{constructor(t){super(t.id,t.name,t.team,t.mesh);I(this,"position");I(this,"currentHp");I(this,"maximumHp");I(this,"collisionRadius");I(this,"splats");this.maximumHp=t.hp,this.currentHp=t.hp,this.collisionRadius=t.radius??.6,this.splats=t.splats,this.position=t.position??t.mesh.position}get pos(){return this.position}get alive(){return this.currentHp>0}get hp(){return this.currentHp}get maxHp(){return this.maximumHp}get radius(){return this.collisionRadius}damage(t){var n;return this.alive?(this.currentHp=Math.max(0,this.currentHp-t),(n=this.splats)==null||n.spawnDamage(this.mesh,t),this.currentHp<=0):!1}heal(t){var r;if(!this.alive||this.currentHp>=this.maximumHp)return 0;const n=this.currentHp;this.currentHp=Math.min(this.maximumHp,this.currentHp+t);const i=this.currentHp-n;return i>0&&((r=this.splats)==null||r.spawnHeal(this.mesh,i)),i}}class fb{constructor(){I(this,"entities",new Map)}register(e){return this.entities.set(e.id,e),e.mesh.userData.gameEntity=e,e}get(e){return e?this.entities.get(e)??null:null}all(){return this.entities.values()}}async function Kp(s,e){if(s)try{const n=new URL(window.location.href).searchParams.get("char")||"character";return await Ac.load("models",n)}catch(t){return console.warn("Failed to load Mixamo character, falling back to procedural:",t),new ed(e||16776960)}return new ed(e||16776960)}function pb(s){const e=new de;e.name=s.id;const{radius:t,height:n}=s.collider,i=n-t*2,r=new zt(t,t,i,16),o=new Oe({color:s.color,roughness:.7,metalness:.2}),a=new $(r,o);a.position.y=n/2,a.castShadow=!0,e.add(a);const l=new Bt(t,16,8,0,Math.PI*2,0,Math.PI/2),c=new $(l,o.clone());c.position.y=n-t,c.castShadow=!0,e.add(c);const h=new Bt(t,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),u=new $(h,o.clone());u.position.y=t,u.castShadow=!0,e.add(u);const d=new Pr(t+.05,t+.15,32),f=new Ct({color:s.team==="friendly"?65416:16729156,side:At}),g=new $(d,f);return g.rotation.x=-Math.PI/2,g.position.y=.01,e.add(g),e.position.set(...s.position),e.userData={entityId:s.id,entityName:s.name,entityTeam:s.team,entityClass:s.class},e}function mb(s){const e=document.getElementById("connection-status");e&&(e.textContent=s,e.className=`connection-status ${s}`)}function Ta(s){const e=aS(s.currentClass);document.querySelectorAll(".action-slot").forEach((n,i)=>{const r=e[i],o=n.querySelector(".ability-name"),a=n.querySelector(".keybind");if(!o||!a)return;const l=n.querySelector(".cooldown-overlay");if(l&&l.remove(),r){o.textContent=r.name,a.textContent=r.key.toUpperCase();const c=s.cooldowns.getRemaining(r.id);if(c>0){n.classList.add("on-cooldown");const h=document.createElement("div");h.className="cooldown-overlay",h.textContent=Math.ceil(c).toString(),n.appendChild(h)}else n.classList.remove("on-cooldown")}else o.textContent="",a.textContent=""})}function gb(s){const e=document.getElementById("cast-bar"),t=document.getElementById("cast-bar-fill"),n=document.getElementById("cast-bar-text");if(s.casts.isCasting){e.classList.add("active");const i=s.casts.currentCastInfo,r=s.casts.castProgress*100;t.style.width=`${r}%`,n.textContent=i.abilityName,s.playerView.startCasting(i.castTime)}else e.classList.remove("active"),s.playerView.stopCasting()}function _b(s){const e=document.getElementById("target-debuffs");e.innerHTML="";const t=s.targeting.currentTarget;if(!t)return;const n=s.debuffs.getDebuffs(t.id);for(const i of n){const r=Math.ceil((i.expiresAt-Date.now())/1e3),o=document.createElement("div");o.className="debuff-icon",o.textContent=`${i.name} (${r}s)`,e.appendChild(o)}}const xb=["blind","polymorph"];function yb(s){for(const e of s.entityRegistry.all()){if(e.id==="player")continue;const n=e.getDebuffs(s.debuffs).some(i=>xb.includes(i.id));if(n&&!s.ccCubes.has(e.id)){const i=new $(new me(1,1,1),new Oe({color:8930559,roughness:.5,metalness:.3}));i.position.copy(e.mesh.position),i.position.y=1,i.castShadow=!0,s.scene.add(i),s.ccCubes.set(e.id,i),e.mesh.visible=!1}else if(!n&&s.ccCubes.has(e.id)){const i=s.ccCubes.get(e.id);s.scene.remove(i),i.geometry.dispose(),i.material.dispose(),s.ccCubes.delete(e.id),e.mesh.visible=!0}else if(n&&s.ccCubes.has(e.id)){const i=s.ccCubes.get(e.id);i.position.copy(e.mesh.position),i.position.y=1,i.rotation.y+=.02,i.rotation.x+=.01}}}function Sh(s){for(const e of s.livingProviders)e.forEachPrey(t=>{t.mesh.userData.damageSplats=s.damageSplats,t.mesh.userData.livingRef=t;const n=s.entityRegistry.register(new db(t));s.entities.set(t.id,t.mesh),s.targeting.registerTargetable(t.mesh,n.id,n.name,n.team)})}function Es(s,e){return s.entityRegistry.get(e)}async function vb(s,e){s.currentClass=e,s.cooldowns.resetAll(),s.casts.interrupt(),document.getElementById("class-name").textContent=e,Ta(s);const t={Rogue:16776960,Mage:6933744,Priest:16777215};s.scene.remove(s.playerView.root),s.playerView.dispose();const n=new URL(window.location.href).searchParams.get("mixamo")==="1";s.playerView=await Kp(n,t[e]),s.playerView.root.position.copy(s.player.position),s.scene.add(s.playerView.root),s.player.mesh=s.playerView.root,s.entityRegistry.register(new Pc({id:"player",name:`Player (${e})`,team:"friendly",mesh:s.playerView.root,hp:100,radius:.35,splats:s.damageSplats,position:s.player.position}))}function kd(s){s.classSelectOpen=!s.classSelectOpen,document.getElementById("class-selector").classList.toggle("active",s.classSelectOpen)}function Mb(s,e){var r,o;const t=oS(s.currentClass,e);if(!t)return;if(s.mode==="multiplayer"&&s.network){const a=s.targeting.currentTarget;s.network.useAbility(t.id,(a==null?void 0:a.id)||null),Bd(e);return}if(!s.cooldowns.isReady(t.id)){No(e);return}if(s.casts.isCasting&&t.castTime===0){No(e);return}const n=s.targeting.currentTarget;if(t.requiresTarget&&!n){No(e);return}if(t.requiresTarget&&n&&t.range>0&&s.player.position.distanceTo(n.mesh.position)>t.range){No(e);return}const i={casterId:"player",casterPos:s.player.position.clone(),casterYaw:s.player.facingYaw,targetId:(n==null?void 0:n.id)||null,targetPos:n?n.mesh.position.clone():null,cooldowns:s.cooldowns,debuffs:s.debuffs,casts:s.casts,projectiles:s.projectiles,getEntityPos:a=>{const l=Es(s,a);return l?l.pos.clone():null},setEntityPos:(a,l)=>{var c;if(a==="player")s.player.position.copy(l),(c=s.player.mesh)==null||c.position.copy(l);else{const h=s.entities.get(a);h&&h.position.copy(l)}},flashHit:a=>{Jp(s,a)},spawnDamage:(a,l,c)=>{$p(s,a,l,c)},spawnHeal:(a,l,c)=>{wb(s,a,l,c)},applyDebuff:(a,l)=>{const c=Es(s,a);c&&c.applyDebuff(s.debuffs,l)}};Bd(e),t.castTime===0&&(t.id==="rogue_hemorrhage"?(o=(r=s.playerView).triggerUpperBodyAttack)==null||o.call(r,.45):s.playerView.triggerOneShot(t.id)),t.id==="rogue_hemorrhage"&&n&&(s.autoAttackTargetId=n.id,s.autoAttackRange=t.range,s.autoAttackSwingTimer=1.5,s.autoAttackOORTime=0),t.execute(i)}function Bd(s){const e=document.querySelector(`.action-slot[data-key="${s}"]`);e&&(e.classList.add("pressed"),setTimeout(()=>e.classList.remove("pressed"),100))}function No(s){const e=document.querySelector(`.action-slot[data-key="${s}"]`);e&&(e.classList.add("pressed"),e.style.borderColor="#f00",setTimeout(()=>{e.classList.remove("pressed"),e.style.borderColor=""},150))}function Sb(s,e){var r,o;if(!s.autoAttackTargetId)return;const t=Es(s,s.autoAttackTargetId);if(!(t!=null&&t.alive)){s.autoAttackTargetId=null;return}s.player.position.distanceTo(t.pos)<=s.autoAttackRange+.5?(s.autoAttackOORTime=0,s.autoAttackSwingTimer-=e,s.autoAttackSwingTimer<=0&&((o=(r=s.playerView).triggerUpperBodyAttack)==null||o.call(r,.45),Jp(s,s.autoAttackTargetId),$p(s,s.autoAttackTargetId,8,16),s.autoAttackSwingTimer=1.5)):(s.autoAttackOORTime+=e,s.autoAttackOORTime>3&&(s.autoAttackTargetId=null))}function $p(s,e,t,n){const i=Es(s,e);if(!i)return;const r=Math.floor(t+Math.random()*(n-t+1));i.damage(r,Es(s,"player")??void 0)}function wb(s,e,t,n){const i=Es(s,e);if(!i)return;const r=Math.floor(t+Math.random()*(n-t+1));i.heal(r)}function bb(s){s.heldAnimal?Eb(s):Tb(s)}function Tb(s){const e=s.player.position,t=2.5,n=[],i=s.dogs.findNearestHoldable(e,t);i&&n.push(i);const r=s.rabbits.findNearestHoldable(e,t);r&&n.push(r);const o=s.cats.findNearestHoldable(e,t);o&&n.push(o);const a=s.cows.findNearestHoldable(e,t);if(a&&n.push(a),!n.length)return;let l=n[0],c=l.mesh.position.distanceToSquared(e);for(let h=1;h<n.length;h++){const u=n[h].mesh.position.distanceToSquared(e);u<c&&(l=n[h],c=u)}l.pickUp(),s.carrySlot.add(l.mesh),l.mesh.position.set(0,0,-.4),l.mesh.rotation.set(-.25,0,0),s.heldAnimal=l}function Zp(s){s.carrySlot.position.set(s.player.position.x,s.player.position.y+1.1,s.player.position.z),s.carrySlot.rotation.y=s.player.facingYaw}function Eb(s){const e=s.heldAnimal;if(!e)return;const t=new C(-Math.sin(s.player.facingYaw),0,-Math.cos(s.player.facingYaw)),n=s.player.position.clone().add(t.multiplyScalar(1));s.scene.add(e.mesh),e.mesh.position.set(n.x,0,n.z),e.mesh.rotation.set(0,s.player.facingYaw,0),e.releaseAt(n,s.player.facingYaw),s.heldAnimal=null}function Jp(s,e){const t=s.entities.get(e);t&&t.traverse(n=>{if(n instanceof $&&n.material){const i=n.material;if(i.emissive){const r=i.emissive.clone(),o=i.emissiveIntensity||0;i.emissive.set(16777215),i.emissiveIntensity=.5,setTimeout(()=>{i.emissive.copy(r),i.emissiveIntensity=o},100)}}})}function Ab(s){window.addEventListener("keydown",e=>{if(e.code==="Tab"){e.preventDefault(),kd(s);return}if(s.classSelectOpen)return;const t=e.key.toLowerCase();["1","2","3","q","e","r","f","g"].includes(t)&&Mb(s,t),t==="c"&&bb(s)}),document.querySelectorAll(".class-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-class");vb(s,t),kd(s)})})}async function Rb(){const{mode:s,config:e}=lS();console.log(`[Game] Starting in ${s} mode`),s==="multiplayer"&&console.log(`[Game] Server URL: ${e.serverUrl}`);const t=new np;t.background=new Q(7048629),t.fog=new Mr(10204873,45,110);const n=new rh({antialias:!0});n.getContext()||console.error("[Game] WebGL context failed!"),n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Lc,n.toneMapping=ra,n.toneMappingExposure=1.15,n.outputColorSpace=tt,document.body.appendChild(n.domElement);const i=new hM;i.attach(n.domElement);const r=lM();t.add(r);const o=os(),a=new xw(o,(D,z)=>Hn(D,z,o));t.add(a);const l=new $w((D,z)=>Hn(D,z,o));t.add(l);const c=new Cd({seed:42});c.position.set(6,Hn(6,-7,o),-7),c.scale.setScalar(1.4),t.add(c);for(let D=0;D<5;D++){const z=D/5*Math.PI*2+.5,V=22+D%2*4,K=Math.cos(z)*V,Y=Math.sin(z)*V,J=new Cd({seed:100+D*7});J.position.set(K,Hn(K,Y,o),Y),J.scale.setScalar(1.1+D%3*.2),t.add(J)}const h=new bS;t.add(h);const u=ov(2);u.position.set(0,.01,0),t.add(u);const d=new Map;if(s==="standalone"){for(const D of pl)if(D.id!=="player"){const z=pb(D);z.position.y=Hn(z.position.x,z.position.z,o),t.add(z),d.set(D.id,z)}}const f=pl.find(D=>D.id==="player"),g=new URL(window.location.href).searchParams.get("mixamo")==="1",_=await Kp(g,f.color);_.root.position.set(...f.position),_.root.position.y=Hn(_.root.position.x,_.root.position.z,o),t.add(_.root),d.set("player",_.root);const p=new dM(_.root.position.clone());p.mesh=_.root;const m=()=>[...aM(),...a.getColliders()];let y=null;const x=()=>{var z,V,K,Y,J;const D=m();p.setColliders(D),(z=y==null?void 0:y.dogs)==null||z.setColliders(D),(V=y==null?void 0:y.rabbits)==null||V.setColliders(D),(K=y==null?void 0:y.cats)==null||K.setColliders(D),(Y=y==null?void 0:y.cows)==null||Y.setColliders(D),(J=y==null?void 0:y.wolves)==null||J.setColliders(D)};x(),p.setTerrainHeightData(os()),s==="standalone"&&p.attach();const v=new fM(i.camera,t);v.attach(n.domElement);const E=document.getElementById("debug-info");window.addEventListener("resize",()=>{var D;i.resize(window.innerWidth,window.innerHeight),n.setSize(window.innerWidth,window.innerHeight),(D=R.atmosphere)==null||D.setSize(window.innerWidth,window.innerHeight)});const w=new mh,T=new QM,L=new eS,M=new tS,S=new nS(t),O=new LS(t),k=new fb;let N=null;s==="multiplayer"&&(N=new xS({serverUrl:e.serverUrl,onConnectionChange:D=>{console.log(`[Game] Connection state: ${D}`),mb(D)},onWelcome:D=>{console.log(`[Game] Welcome! Player ID: ${D.playerId}`),N.initializeLocalPlayer({x:f.position[0],y:f.position[1],z:f.position[2]},i.yaw)},onEvents:D=>{console.log(`[Game] Received ${D.length} events`)}},()=>i.yaw),N.connect());const R={scene:t,renderer:n,cameraRig:i,sky:h,player:p,playerView:_,targeting:v,entities:d,clock:w,debugElement:E,currentClass:"Rogue",cooldowns:T,debuffs:L,casts:M,projectiles:S,damageSplats:O,dogs:new OS(t,6,18,os()),rabbits:new HS(t,14,18,os()),cats:new jS(t,5,18,os()),cows:new QS(t,4,18,os()),carrySlot:(()=>{const D=new de;return D.name="CarrySlot",t.add(D),D})(),heldAnimal:null,classSelectOpen:!1,ccCubes:new Map,mode:s,network:N,airborneTime:0,autoAttackTargetId:null,autoAttackRange:0,autoAttackSwingTimer:0,autoAttackOORTime:0,editor:void 0,snapshots:void 0,ecosystem:a,colliderDebug:void 0,rivers:l,wolves:void 0,hpBars:void 0,atmosphere:void 0,livingProviders:[],entityRegistry:k};if(y=R,k.register(new Pc({id:"player",name:f.name,team:f.team,mesh:_.root,hp:100,radius:f.collider.radius,splats:O,position:p.position})),s==="standalone")for(const[D,z]of d){if(D==="player")continue;const V=pl.find(Y=>Y.id===D),K=k.register(new Pc({id:D,name:V.name,team:V.team,mesh:z,hp:100,radius:V.collider.radius,splats:O}));v.registerTargetable(z,K.id,K.name,K.team)}R.editor=new tw(t,i.camera,n.domElement),R.snapshots=new rw({renderer:n,scene:t,camera:i.camera,rig:i,player:p}),R.colliderDebug=new Uw({scene:t,getColliders:m});const F=a.userData.editableParams.set;a.userData.editableParams.set=D=>{F(D),x()},R.wolves=new Xw(t,5,18,o,[R.dogs,R.rabbits,R.cats,R.cows],new C(-14,0,-14)),R.livingProviders=[R.dogs,R.rabbits,R.cats,R.cows,R.wolves];for(const D of R.livingProviders)D.forEachPrey(z=>{z.mesh.userData.damageSplats=R.damageSplats});return x(),Sh(R),R.hpBars=new Qw(t,()=>R.entityRegistry.all()),R.atmosphere=new ub(n,t,i.camera),Ab(R),Ta(R),R}const Zs=[];function Qp(s){Zs.length=0,Zs.push({pos:s.player.position.clone(),radius:1.1,d2:0});const e=s.player.position,t=["DogPack","RabbitWarren","CatColony","CowHerd","WolfPack"],n=new C;for(const i of t){const r=s.scene.getObjectByName(i);if(r)for(const o of r.children){o.getWorldPosition(n);const a=n.x-e.x,l=n.z-e.z,c=a*a+l*l;c>18*18||Zs.push({pos:n.clone(),radius:.75,d2:c})}}Zs.sort((i,r)=>i.d2-r.d2),s.ecosystem.grass.setActors(Zs.slice(0,8))}function em(s){requestAnimationFrame(()=>em(s));const e=s.clock.getDelta();s.mode==="multiplayer"&&s.network?Pb(s,e):Cb(s,e),s.atmosphere.render(e)}function Cb(s,e){var h,u;if(s.casts.isCasting){const d=s.player.velocity;Math.sqrt(d.x*d.x+d.z*d.z)>.5&&s.casts.interrupt()}s.player.facingYaw+=s.cameraRig.consumePlayerYawDelta(),s.player.update(e,s.cameraRig.bothHeld);const t=s.player.velocity,n=Math.sqrt(t.x*t.x+t.z*t.z),i=s.player.isGrounded;i?s.airborneTime=0:s.airborneTime+=e;const r=!i&&(t.y>.5||s.airborneTime>.12);let o="idle";r?o=t.y>0?"jump":"fall":n>4?o="run":n>.1&&(o="walk");const a=Math.cos(s.player.facingYaw),l=Math.sin(s.player.facingYaw),c=new C(t.x*a-t.z*l,0,t.x*l+t.z*a);s.playerView.setLocomotion(o,n/6,c),r&&((u=(h=s.playerView).setAirborne)==null||u.call(h,t.y,na)),s.playerView.setFacingYaw(-s.player.facingYaw),s.playerView.update(e),s.cameraRig.update(s.player.position),s.sky.update(e,s.player.position,s.cameraRig.camera,s.scene),s.targeting.update(s.player.position),s.debuffs.update(),s.casts.update(),s.projectiles.update(e),s.damageSplats.update(e),s.dogs.update(e),s.rabbits.update(e),s.cats.update(e),s.cows.update(e),Zp(s),Sb(s,e),s.editor.update(),s.ecosystem.update(s.clock.elapsedTime),s.rivers.update(s.clock.elapsedTime),s.wolves.update(e),Sh(s),s.hpBars.update(),s.colliderDebug.update(),Qp(s),Ta(s),gb(s),_b(s),yb(s),s.debugElement&&(s.debugElement.textContent=`${s.currentClass} | ${s.player.getDebugInfo()}`)}function Pb(s,e){var r,o;const t=s.network,n=t.update(e);if(n){s.player.position.set(n.pos.x,n.pos.y,n.pos.z),s.playerView.root.position.copy(s.player.position);const a=Math.sqrt(n.vel.x**2+n.vel.z**2);n.isGrounded?s.airborneTime=0:s.airborneTime+=e;const l=!n.isGrounded&&(n.vel.y>.5||s.airborneTime>.12);let c="idle";if(l?c=n.vel.y>0?"jump":"fall":a>4?c="run":a>.1&&(c="walk"),s.playerView.setLocomotion(c,a/6),l&&((o=(r=s.playerView).setAirborne)==null||o.call(r,n.vel.y,na)),a>.1){const h=Math.atan2(n.vel.x,n.vel.z);s.playerView.setFacingYaw(-h)}}s.playerView.update(e),s.cameraRig.update(s.player.position),s.sky.update(e,s.player.position,s.cameraRig.camera,s.scene),s.targeting.update(s.player.position),s.damageSplats.update(e),s.dogs.update(e),s.rabbits.update(e),s.cats.update(e),s.cows.update(e),Zp(s),s.editor.update(),s.ecosystem.update(s.clock.elapsedTime),s.rivers.update(s.clock.elapsedTime),s.wolves.update(e),Sh(s),s.hpBars.update(),s.colliderDebug.update(),Qp(s);const i=t.getRemoteEntities();for(const a of i){let l=s.entities.get(a.id);if(!l){console.log(`[Game] Creating mesh for remote entity: ${a.id}`);const c=new de;c.name=a.id;const h=new $(new zt(.35,.35,1.3,16),new Oe({color:a.team==="friendly"?65416:16729156,roughness:.7}));h.position.y=1,h.castShadow=!0,c.add(h),s.scene.add(c),s.entities.set(a.id,c),s.targeting.registerTargetable(c,a.id,a.name,a.team),l=c}l.position.set(a.pos.x,a.pos.y,a.pos.z),l.rotation.y=-a.yaw,l.visible=a.alive}if(Ta(s),s.debugElement){const a=t.getConnectionState(),l=t.getRTT();s.debugElement.textContent=`${s.currentClass} | ${a} | RTT: ${l.toFixed(0)}ms | ${t.getDebugInfo()}`}}Rb().then(s=>{window.__game=s,em(s),console.log("WoW Arena Sandbox - Phase 4"),console.log("Controls:"),console.log("  WASD: Move | Space: Jump"),console.log("  Tab: Class Selection"),console.log("  1-3: Abilities | Click: Target"),console.log(""),console.log("URL params:"),console.log("  ?mode=standalone  - Local only (default)"),console.log("  ?mode=multiplayer - Connect to server"),console.log("  ?server=ws://localhost:8080 - Custom server"),console.log("  ?mixamo=1 - Load Mixamo character (place at public/models/character.glb)")}).catch(s=>{console.error("Failed to initialize game:",s)});
