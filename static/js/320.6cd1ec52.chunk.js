/*! For license information please see 320.6cd1ec52.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkezzo=self.webpackChunkezzo||[]).push([[320],{3320:(t,e,r)=>{r.r(e),r.d(e,{default:()=>z});var n=r(2905),o=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),a=function(t){var e,r=[];for(t=[].concat(t);t.length;)"string"==typeof(e=t.pop())?r.unshift.apply(r,e.split("\n")):Array.isArray(e)?t.push.apply(t,e):(0,n.i)(t)||r.unshift(""+e);return r},i=function(t,e,r){var n,o=[].concat(e),a=o.length,i=t.font,l=0;for(t.font=r.string,n=0;n<a;++n)l=Math.max(t.measureText(o[n]).width,l);return t.font=i,{height:a*r.lineHeight,width:l}},l=function(t,e,r){return Math.max(t,Math.min(e,r))},s=function(t,e){var r,n,o,a,i=t.slice(),l=[];for(r=0,o=e.length;r<o;++r)a=e[r],-1===(n=i.indexOf(a))?l.push([a,1]):i.splice(n,1);for(r=0,o=i.length;r<o;++r)l.push([i[r],-1]);return l};function u(t,e){var r=e.x,n=e.y;if(null===r)return{x:0,y:-1};if(null===n)return{x:1,y:0};var o=t.x-r,a=t.y-n,i=Math.sqrt(o*o+a*a);return{x:i?o/i:0,y:i?a/i:-1}}function c(t,e,r){var n=0;return t<r.left?n|=1:t>r.right&&(n|=2),e<r.top?n|=8:e>r.bottom&&(n|=4),n}function h(t,e){var r,n,o=e.anchor,a=t;return e.clamp&&(a=function(t,e){for(var r,n,o,a=t.x0,i=t.y0,l=t.x1,s=t.y1,u=c(a,i,e),h=c(l,s,e);u|h&&!(u&h);)8&(r=u||h)?(n=a+(l-a)*(e.top-i)/(s-i),o=e.top):4&r?(n=a+(l-a)*(e.bottom-i)/(s-i),o=e.bottom):2&r?(o=i+(s-i)*(e.right-a)/(l-a),n=e.right):1&r&&(o=i+(s-i)*(e.left-a)/(l-a),n=e.left),r===u?u=c(a=n,i=o,e):h=c(l=n,s=o,e);return{x0:a,x1:l,y0:i,y1:s}}(a,e.area)),"start"===o?(r=a.x0,n=a.y0):"end"===o?(r=a.x1,n=a.y1):(r=(a.x0+a.x1)/2,n=(a.y0+a.y1)/2),function(t,e,r,n,o){switch(o){case"center":r=n=0;break;case"bottom":r=0,n=1;break;case"right":r=1,n=0;break;case"left":r=-1,n=0;break;case"top":r=0,n=-1;break;case"start":r=-r,n=-n;break;case"end":break;default:o*=Math.PI/180,r=Math.cos(o),n=Math.sin(o)}return{x:t,y:e,vx:r,vy:n}}(r,n,t.vx,t.vy,e.align)}var d={arc:function(t,e){var r=(t.startAngle+t.endAngle)/2,n=Math.cos(r),o=Math.sin(r),a=t.innerRadius,i=t.outerRadius;return h({x0:t.x+n*a,y0:t.y+o*a,x1:t.x+n*i,y1:t.y+o*i,vx:n,vy:o},e)},point:function(t,e){var r=u(t,e.origin),n=r.x*t.options.radius,o=r.y*t.options.radius;return h({x0:t.x-n,y0:t.y-o,x1:t.x+n,y1:t.y+o,vx:r.x,vy:r.y},e)},bar:function(t,e){var r=u(t,e.origin),n=t.x,o=t.y,a=0,i=0;return t.horizontal?(n=Math.min(t.x,t.base),a=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),i=Math.abs(t.base-t.y)),h({x0:n,y0:o+i,x1:n+a,y1:o,vx:r.x,vy:r.y},e)},fallback:function(t,e){var r=u(t,e.origin);return h({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:r.x,vy:r.y},e)}},f=function(t){return Math.round(t*o)/o};function x(t,e){var r=e.chart.getDatasetMeta(e.datasetIndex).vScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var n=r.getBasePixel();return t.horizontal?{x:n,y:null}:{x:null,y:n}}function y(t){return t instanceof n.A?d.arc:t instanceof n.P?d.point:t instanceof n.B?d.bar:d.fallback}function v(t,e,r){var n=r.backgroundColor,o=r.borderColor,a=r.borderWidth;!n&&(!o||!a)||(t.beginPath(),function(t,e,r,n,o,a){var i=Math.PI/2;if(a){var l=Math.min(a,o/2,n/2),s=e+l,u=r+l,c=e+n-l,h=r+o-l;t.moveTo(e,u),s<c&&u<h?(t.arc(s,u,l,-Math.PI,-i),t.arc(c,u,l,-i,0),t.arc(c,h,l,0,i),t.arc(s,h,l,i,Math.PI)):s<c?(t.moveTo(s,r),t.arc(c,u,l,-i,i),t.arc(s,u,l,i,Math.PI+i)):u<h?(t.arc(s,u,l,-Math.PI,0),t.arc(s,h,l,0,Math.PI)):t.arc(s,u,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(e,r)}else t.rect(e,r,n,o)}(t,f(e.x)+a/2,f(e.y)+a/2,f(e.w)-a,f(e.h)-a,r.borderRadius),t.closePath(),n&&(t.fillStyle=n,t.fill()),o&&a&&(t.strokeStyle=o,t.lineWidth=a,t.lineJoin="miter",t.stroke()))}function _(t,e,r){var n=t.shadowBlur,o=r.stroked,a=f(r.x),i=f(r.y),l=f(r.w);o&&t.strokeText(e,a,i,l),r.filled&&(n&&o&&(t.shadowBlur=0),t.fillText(e,a,i,l),n&&o&&(t.shadowBlur=n))}var b=function(t,e,r,n){var o=this;o._config=t,o._index=n,o._model=null,o._rects=null,o._ctx=e,o._el=r};(0,n.m)(b.prototype,{_modelize:function(t,e,r,o){var a=this,l=a._index,s=(0,n.t)((0,n.r)([r.font,{}],o,l)),u=(0,n.r)([r.color,n.d.color],o,l);return{align:(0,n.r)([r.align,"center"],o,l),anchor:(0,n.r)([r.anchor,"center"],o,l),area:o.chart.chartArea,backgroundColor:(0,n.r)([r.backgroundColor,null],o,l),borderColor:(0,n.r)([r.borderColor,null],o,l),borderRadius:(0,n.r)([r.borderRadius,0],o,l),borderWidth:(0,n.r)([r.borderWidth,0],o,l),clamp:(0,n.r)([r.clamp,!1],o,l),clip:(0,n.r)([r.clip,!1],o,l),color:u,display:t,font:s,lines:e,offset:(0,n.r)([r.offset,4],o,l),opacity:(0,n.r)([r.opacity,1],o,l),origin:x(a._el,o),padding:(0,n.a)((0,n.r)([r.padding,4],o,l)),positioner:y(a._el),rotation:(0,n.r)([r.rotation,0],o,l)*(Math.PI/180),size:i(a._ctx,e,s),textAlign:(0,n.r)([r.textAlign,"start"],o,l),textShadowBlur:(0,n.r)([r.textShadowBlur,0],o,l),textShadowColor:(0,n.r)([r.textShadowColor,u],o,l),textStrokeColor:(0,n.r)([r.textStrokeColor,u],o,l),textStrokeWidth:(0,n.r)([r.textStrokeWidth,0],o,l)}},update:function(t){var e,r,o,i=this,l=null,s=null,u=i._index,c=i._config,h=(0,n.r)([c.display,!0],t,u);h&&(e=t.dataset.data[u],r=(0,n.v)((0,n.c)(c.formatter,[e,t]),e),(o=(0,n.i)(r)?[]:a(r)).length&&(s=function(t){var e=t.borderWidth||0,r=t.padding,n=t.size.height,o=t.size.width,a=-o/2,i=-n/2;return{frame:{x:a-r.left-e,y:i-r.top-e,w:o+r.width+2*e,h:n+r.height+2*e},text:{x:a,y:i,w:o,h:n}}}(l=i._modelize(h,o,c,t)))),i._model=l,i._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var r,n=t.ctx,o=this._model,a=this._rects;this.visible()&&(n.save(),o.clip&&(r=o.area,n.beginPath(),n.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),n.clip()),n.globalAlpha=l(0,o.opacity,1),n.translate(f(e.x),f(e.y)),n.rotate(o.rotation),v(n,a.frame,o),function(t,e,r,n){var o,a=n.textAlign,i=n.color,l=!!i,s=n.font,u=e.length,c=n.textStrokeColor,h=n.textStrokeWidth,d=c&&h;if(u&&(l||d))for(r=function(t,e,r){var n=r.lineHeight,o=t.w,a=t.x;return"center"===e?a+=o/2:("end"===e||"right"===e)&&(a+=o),{h:n,w:o,x:a,y:t.y+n/2}}(r,a,s),t.font=s.string,t.textAlign=a,t.textBaseline="middle",t.shadowBlur=n.textShadowBlur,t.shadowColor=n.textShadowColor,l&&(t.fillStyle=i),d&&(t.lineJoin="round",t.lineWidth=h,t.strokeStyle=c),o=0,u=e.length;o<u;++o)_(t,e[o],{stroked:d,filled:l,w:r.w,x:r.x,y:r.y+r.h*o})}(n,o.lines,a.text,o),n.restore())}});var p=Number.MIN_SAFE_INTEGER||-9007199254740991,g=Number.MAX_SAFE_INTEGER||9007199254740991;function m(t,e,r){var n=Math.cos(r),o=Math.sin(r),a=e.x,i=e.y;return{x:a+n*(t.x-a)-o*(t.y-i),y:i+o*(t.x-a)+n*(t.y-i)}}function w(t,e){var r,n,o,a,i,l=g,s=p,u=e.origin;for(r=0;r<t.length;++r)o=(n=t[r]).x-u.x,a=n.y-u.y,i=e.vx*o+e.vy*a,l=Math.min(l,i),s=Math.max(s,i);return{min:l,max:s}}function k(t,e){var r=e.x-t.x,n=e.y-t.y,o=Math.sqrt(r*r+n*n);return{vx:(e.x-t.x)/o,vy:(e.y-t.y)/o,origin:t,ln:o}}var M=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function C(t,e,r){var n=e.positioner(t,e),o=n.vx,a=n.vy;if(!o&&!a)return{x:n.x,y:n.y};var i=r.w,l=r.h,s=e.rotation,u=Math.abs(i/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),c=Math.abs(i/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),h=1/Math.max(Math.abs(o),Math.abs(a));return u*=o*h,c*=a*h,u+=e.offset*o,c+=e.offset*a,{x:n.x+u,y:n.y+c}}(0,n.m)(M.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,r){this._rotation=r,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this,r=e._rect;return!((t=m(t,e.center(),-e._rotation)).x<r.x-1||t.y<r.y-1||t.x>r.x+r.w+2||t.y>r.y+r.h+2)},intersects:function(t){var e,r,n,o=this._points(),a=t._points(),i=[k(o[0],o[1]),k(o[0],o[3])];for(this._rotation!==t._rotation&&i.push(k(a[0],a[1]),k(a[0],a[3])),e=0;e<i.length;++e)if(r=w(o,i[e]),n=w(a,i[e]),r.max<n.min||n.max<r.min)return!1;return!0},_points:function(){var t=this,e=t._rect,r=t._rotation,n=t.center();return[m({x:e.x,y:e.y},n,r),m({x:e.x+e.w,y:e.y},n,r),m({x:e.x+e.w,y:e.y+e.h},n,r),m({x:e.x,y:e.y+e.h},n,r)]}});var S={prepare:function(t){var e,r,n,o,a,i=[];for(e=0,n=t.length;e<n;++e)for(r=0,o=t[e].length;r<o;++r)a=t[e][r],i.push(a),a.$layout={_box:new M,_hidable:!1,_visible:!0,_set:e,_idx:a._index};return i.sort((function(t,e){var r=t.$layout,n=e.$layout;return r._idx===n._idx?n._set-r._set:n._idx-r._idx})),this.update(i),i},update:function(t){var e,r,n,o,a,i=!1;for(e=0,r=t.length;e<r;++e)o=(n=t[e]).model(),(a=n.$layout)._hidable=o&&"auto"===o.display,a._visible=n.visible(),i|=a._hidable;i&&function(t){var e,r,n,o,a,i,l;for(e=0,r=t.length;e<r;++e)(o=(n=t[e]).$layout)._visible&&(l=new Proxy(n._el,{get:(t,e)=>t.getProps([e],!0)[e]}),a=n.geometry(),i=C(l,n.model(),a),o._box.update(i,a,n.rotation()));(function(t,e){var r,n,o,a;for(r=t.length-1;r>=0;--r)for(o=t[r].$layout,n=r-1;n>=0&&o._visible;--n)(a=t[n].$layout)._visible&&o._box.intersects(a._box)&&e(o,a)})(t,(function(t,e){var r=t._hidable,n=e._hidable;r&&n||n?e._visible=!1:r&&(t._visible=!1)}))}(t)},lookup:function(t,e){var r,n;for(r=t.length-1;r>=0;--r)if((n=t[r].$layout)&&n._visible&&n._box.contains(e))return t[r];return null},draw:function(t,e){var r,n,o,a,i,l;for(r=0,n=e.length;r<n;++r)(a=(o=e[r]).$layout)._visible&&(i=o.geometry(),l=C(o._el,o.model(),i),a._box.update(l,i,o.rotation()),o.draw(t,l))}},P="$datalabels",I="$default";function $(t,e,r,o){if(e){var a,i=r.$context,l=r.$groups;e[l._set]&&((a=e[l._set][l._key])&&!0===(0,n.c)(a,[i,o])&&(t[P]._dirty=!0,r.update(i)))}}function A(t,e){var r,n,o=t[P],a=o._listeners;if(a.enter||a.leave){if("mousemove"===e.type)n=S.lookup(o._labels,e);else if("mouseout"!==e.type)return;r=o._hovered,o._hovered=n,function(t,e,r,n,o){var a,i;!r&&!n||(r?n?r!==n&&(i=a=!0):i=!0:a=!0,i&&$(t,e.leave,r,o),a&&$(t,e.enter,n,o))}(t,a,r,n,e)}}var z={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if((0,n.i)(t))return null;var e,r,o,a=t;if((0,n.b)(t))if((0,n.i)(t.label))if((0,n.i)(t.r))for(a="",o=0,r=(e=Object.keys(t)).length;o<r;++o)a+=(0!==o?", ":"")+e[o]+": "+t[e[o]];else a=t.r;else a=t.label;return""+a},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t[P]={_actives:[]}},beforeUpdate:function(t){var e=t[P];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,r){var o,a,i,l,s,u,c,h,d=e.index,f=t[P],x=f._datasets[d]=[],y=t.isDatasetVisible(d),v=t.data.datasets[d],_=function(t,e){var r,o,a=t.datalabels,i={},l=[];return!1===a?null:(!0===a&&(a={}),e=(0,n.m)({},[e,a]),r=e.labels||{},o=Object.keys(r),delete e.labels,o.length?o.forEach((function(t){r[t]&&l.push((0,n.m)({},[e,r[t],{_key:t}]))})):l.push(e),i=l.reduce((function(t,e){return(0,n.e)(e.listeners||{},(function(r,n){t[n]=t[n]||{},t[n][e._key||I]=r})),delete e.listeners,t}),{}),{labels:l,listeners:i})}(v,r),p=e.meta.data||[],g=t.ctx;for(g.save(),o=0,i=p.length;o<i;++o)if((c=p[o])[P]=[],y&&c&&t.getDataVisibility(o)&&!c.skip)for(a=0,l=_.labels.length;a<l;++a)u=(s=_.labels[a])._key,(h=new b(s,g,c,o)).$groups={_set:d,_key:u||I},h.$context={active:!1,chart:t,dataIndex:o,dataset:v,datasetIndex:d},h.update(h.$context),c[P].push(h),x.push(h);g.restore(),(0,n.m)(f._listeners,_.listeners,{merger:function(t,r,n){r[t]=r[t]||{},r[t][e.index]=n[t],f._listened=!0}})},afterUpdate:function(t){t[P]._labels=S.prepare(t[P]._datasets)},afterDatasetsDraw:function(t){S.draw(t,t[P]._labels)},beforeEvent:function(t,e){if(t[P]._listened){var r=e.event;switch(r.type){case"mousemove":case"mouseout":A(t,r);break;case"click":!function(t,e){var r=t[P],n=r._listeners.click,o=n&&S.lookup(r._labels,e);o&&$(t,n,o,e)}(t,r)}}},afterEvent:function(t){var e,r,n,o,a,i,l,u=t[P],c=u._actives,h=u._actives=t.getActiveElements(),d=s(c,h);for(e=0,r=d.length;e<r;++e)if((a=d[e])[1])for(n=0,o=(l=a[0].element[P]||[]).length;n<o;++n)(i=l[n]).$context.active=1===a[1],i.update(i.$context);(u._dirty||d.length)&&(S.update(u._labels),t.render()),delete u._dirty}}}}]);
//# sourceMappingURL=320.6cd1ec52.chunk.js.map