import{C as Q}from"./index-3124e750.js";import{A as P,e as o,D as m,y as g,u as S,M as X,j as ee,v as oe,q as ne,r as te,o as ae,c as se,w as U,C as _}from"./vue-libs-83dbabed.js";import{c as F,i as q,W as j,o as G,q as z,a as ce}from"./use-translate-0400f29b.js";import{t as B,b as M,m as L,c as ue,w as N,d as ie,a as V}from"./with-install-a78877b5.js";import{V as le}from"./index-4c6d2d8c.js";import{u as re}from"./use-refs-374c0fba.js";import{T as de,a as O}from"./index-3bb89b35.js";import{E as me}from"./index-42fe3702.js";import{F as pe}from"./index-f5629326.js";import{B as W}from"./index-33a62985.js";import{C as he}from"./index-f42d743d.js";import{s as ge}from"./function-call-b65aa903.js";import"./use-route-b1061918.js";import"./index-5a7b6df9.js";import"./index-c916422a.js";import"./use-expose-efcfdee3.js";import"./use-lock-scroll-1eff2e8c.js";import"./use-touch-8cd17a21.js";import"./constant-ee6e27d7.js";import"./use-lazy-render-2383afef.js";import"./on-popup-reopen-bcf43cef.js";import"./use-scope-id-e548748d.js";import"./index-b7134fb7.js";import"./interceptor-3c3c2616.js";import"./use-id-c5eb2431.js";import"./index-d928a42a.js";import"./index-e72b81d7.js";import"./index-e6476cbd.js";import"./Checker-a434ef6e.js";import"./mount-component-94eea14a.js";const[ve,Y,R]=F("coupon-cell"),Ce={title:String,border:B,editable:B,coupons:M(),currency:L("¥"),chosenCoupon:ue(-1)};function be({coupons:e,chosenCoupon:t,currency:i}){const s=e[+t];if(s){let n=0;return q(s.value)?{value:n}=s:q(s.denominations)&&(n=s.denominations),`-${i} ${(n/100).toFixed(2)}`}return e.length===0?R("noCoupon"):R("count",e.length)}const fe=P({name:ve,props:Ce,setup(e){return()=>{const t=e.coupons[+e.chosenCoupon];return o(Q,{class:Y(),value:be(e),title:e.title||R("title"),border:e.border,isLink:e.editable,valueClass:Y("value",{selected:t})},null)}}}),xe=N(fe),ye=xe;function Z(e){const t=new Date(e*1e3);return`${t.getFullYear()}.${j(t.getMonth()+1)}.${j(t.getDate())}`}const we=e=>(e/10).toFixed(e%10===0?0:1),J=e=>(e/100).toFixed(e%100===0?0:e%10===0?1:2),[Be,r,H]=F("coupon"),De=P({name:Be,props:{chosen:Boolean,coupon:ie(Object),disabled:Boolean,currency:L("¥")},setup(e){const t=m(()=>{const{startAt:n,endAt:c}=e.coupon;return`${Z(n)} - ${Z(c)}`}),i=m(()=>{const{coupon:n,currency:c}=e;if(n.valueDesc)return[n.valueDesc,o("span",null,[n.unitDesc||""])];if(n.denominations){const u=J(n.denominations);return[o("span",null,[c]),` ${u}`]}return n.discount?H("discount",we(n.discount)):""}),s=m(()=>{const n=J(e.coupon.originCondition||0);return n==="0"?H("unlimited"):H("condition",n)});return()=>{const{chosen:n,coupon:c,disabled:u}=e,h=u&&c.reason||c.description;return o("div",{class:r({disabled:u})},[o("div",{class:r("content")},[o("div",{class:r("head")},[o("h2",{class:r("amount")},[i.value]),o("p",{class:r("condition")},[c.condition||s.value])]),o("div",{class:r("body")},[o("p",{class:r("name")},[c.name]),o("p",{class:r("valid")},[t.value]),!u&&o(he,{class:r("corner"),modelValue:n},null)])]),h&&o("p",{class:r("description")},[h])])}}}),K=N(De),[Te,d,f]=F("coupon-list"),ke={code:L(""),coupons:M(),currency:L("¥"),showCount:B,emptyImage:String,chosenCoupon:V(-1),enabledTitle:String,disabledTitle:String,disabledCoupons:M(),showExchangeBar:B,showCloseButton:B,closeButtonText:String,inputPlaceholder:String,exchangeMinLength:V(1),exchangeButtonText:String,displayedCouponIndex:V(-1),exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean},$e=P({name:Te,props:ke,emits:["change","exchange","update:code"],setup(e,{emit:t,slots:i}){const[s,n]=re(),c=g(),u=g(),h=g(0),x=g(0),l=g(e.code),D=m(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!l.value||l.value.length<e.exchangeMinLength)),T=()=>{const p=z(c).height,b=z(u).height+44;x.value=(p>b?p:G.value)-b},A=()=>{t("exchange",l.value),e.code||(l.value="")},k=a=>{ne(()=>{var p;return(p=s.value[a])==null?void 0:p.scrollIntoView()})},v=()=>o(me,{image:e.emptyImage},{default:()=>[o("p",{class:d("empty-tip")},[f("noCoupon")])]}),C=()=>{if(e.showExchangeBar)return o("div",{ref:u,class:d("exchange-bar")},[o(pe,{modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,clearable:!0,border:!1,class:d("field"),placeholder:e.inputPlaceholder||f("placeholder"),maxlength:"20"},null),o(W,{plain:!0,type:"primary",class:d("exchange"),text:e.exchangeButtonText||f("exchange"),loading:e.exchangeButtonLoading,disabled:D.value,onClick:A},null)])},E=()=>{const{coupons:a}=e,p=e.showCount?` (${a.length})`:"",b=(e.enabledTitle||f("enable"))+p;return o(O,{title:b},{default:()=>{var y;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${x.value}px`}},[a.map((w,I)=>o(K,{key:w.id,ref:n(I),coupon:w,chosen:I===e.chosenCoupon,currency:e.currency,onClick:()=>t("change",I)},null)),!a.length&&v(),(y=i["list-footer"])==null?void 0:y.call(i)])]}})},$=()=>{const{disabledCoupons:a}=e,p=e.showCount?` (${a.length})`:"",b=(e.disabledTitle||f("disabled"))+p;return o(O,{title:b},{default:()=>{var y;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${x.value}px`}},[a.map(w=>o(K,{disabled:!0,key:w.id,coupon:w,currency:e.currency},null)),!a.length&&v(),(y=i["disabled-list-footer"])==null?void 0:y.call(i)])]}})};return S(()=>e.code,a=>{l.value=a}),S(G,T),S(l,a=>t("update:code",a)),S(()=>e.displayedCouponIndex,k),X(()=>{T(),k(e.displayedCouponIndex)}),()=>o("div",{ref:c,class:d()},[C(),o(de,{active:h.value,"onUpdate:active":a=>h.value=a,class:d("tab")},{default:()=>[E(),$()]}),o("div",{class:d("bottom")},[ee(o(W,{round:!0,block:!0,type:"primary",class:d("close"),text:e.closeButtonText||f("close"),onClick:()=>t("change",-1)},null),[[oe,e.showCloseButton]])])])}}),Se=N($e),_e=Se,co=P({__name:"index",setup(e){const t=ce({"zh-CN":{coupon:{name:"优惠券名称",reason:"优惠券不可用原因",description:"描述信息"},exchange:"兑换成功"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),i=(v=999999)=>String(Math.floor(Math.random()*v)+1),s=g(!1),n=g(-1),c=g([]),u=m(()=>({id:1,condition:`无门槛
最多优惠12元`,reason:"",value:150,name:t("coupon.name"),description:t("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"})),h=m(()=>({...u.value,id:2,value:12,valueDesc:"8.8",unitDesc:"折"})),x=m(()=>({...u.value,id:3,reason:t("coupon.reason")})),l=m(()=>({...h.value,valueDesc:"1",unitDesc:"折",id:4,reason:t("coupon.reason")})),D=m(()=>[u.value,h.value,...c.value]),T=m(()=>[x.value,l.value]),A=v=>{s.value=!1,n.value=v},k=()=>{ge(t("exchange")),c.value.push({...u.value,id:i()})};return(v,C)=>{const E=te("demo-block");return ae(),se(E,{title:_(t)("basicUsage")},{default:U(()=>[o(_(ye),{coupons:D.value,"chosen-coupon":n.value,onClick:C[0]||(C[0]=$=>s.value=!0)},null,8,["coupons","chosen-coupon"]),o(_(le),{show:s.value,"onUpdate:show":C[1]||(C[1]=$=>s.value=$),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:U(()=>[o(_(_e),{coupons:D.value,"chosen-coupon":n.value,"disabled-coupons":T.value,onChange:A,onExchange:k},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{co as default};
