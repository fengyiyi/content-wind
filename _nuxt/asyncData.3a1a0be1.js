import{a4 as P,r as d,a5 as C,a6 as w,a7 as x,a as m,a0 as b,j as O,N as B,a8 as M,a9 as k}from"./entry.06b29e0d.js";function R(...i){var h;const u=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(u);let[a,l,e={}]=i;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=O(),D=()=>null,v=()=>t.isHydrating?t.payload.data[a]:t.static.data[a];e.server=e.server??!0,e.default=e.default??D,e.getCachedData=e.getCachedData??v,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??P.deep;const f=()=>![null,void 0].includes(e.getCachedData(a));if(!t._asyncData[a]||!e.immediate){(h=t.payload._errors)[a]??(h[a]=null);const n=e.deep?d:C;t._asyncData[a]={data:n(e.getCachedData(a)??e.default()),pending:d(!f()),error:w(t.payload._errors,a),status:d("idle")}}const r={...t._asyncData[a]};r.refresh=r.execute=(n={})=>{if(t._asyncDataPromises[a]){if(n.dedupe===!1)return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if((n._initial||t.isHydrating&&n._initial!==!1)&&f())return Promise.resolve(e.getCachedData(a));r.pending.value=!0,r.status.value="pending";const c=new Promise((s,o)=>{try{s(l(t))}catch(g){o(g)}}).then(s=>{if(c.cancelled)return t._asyncDataPromises[a];let o=s;e.transform&&(o=e.transform(s)),e.pick&&(o=E(o,e.pick)),r.data.value=o,r.error.value=null,r.status.value="success"}).catch(s=>{if(c.cancelled)return t._asyncDataPromises[a];r.error.value=s,r.data.value=B(e.default()),r.status.value="error"}).finally(()=>{c.cancelled||(r.pending.value=!1,t.payload.data[a]=r.data.value,r.error.value&&(t.payload._errors[a]=M(r.error.value)),delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=c,t._asyncDataPromises[a]};const y=()=>r.refresh({_initial:!0}),_=e.server!==!1&&t.payload.serverRendered;{const n=k();if(n&&!n._nuxtOnBeforeMountCbs){n._nuxtOnBeforeMountCbs=[];const s=n._nuxtOnBeforeMountCbs;n&&(x(()=>{s.forEach(o=>{o()}),s.splice(0,s.length)}),m(()=>s.splice(0,s.length)))}_&&t.isHydrating&&(r.error.value||f())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):n&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?n._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&b(e.watch,()=>r.refresh());const c=t.hook("app:data:refresh",async s=>{(!s||s.includes(a))&&await r.refresh()});n&&m(c)}const p=Promise.resolve(t._asyncDataPromises[a]).then(()=>r);return Object.assign(p,r),p}function E(i,u){const a={};for(const l of u)a[l]=i[l];return a}export{R as u};
