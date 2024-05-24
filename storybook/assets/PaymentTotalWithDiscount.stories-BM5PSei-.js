import{p as a,j as t}from"./styled-components.browser.esm-C_jzoV4G.js";import{p as I,i as y}from"./selectors-ChrHjrq7.js";import{b as l,a as E,c}from"./index-D5ptoTbw.js";import{d as P}from"./atoms-W9rtZ_fn.js";import{O as z,R as O}from"./constants-Qxp5stNU.js";import{P as r}from"./PriceInfo-DS9dRlx7.js";import"./index-l2PZgWEW.js";import"./index-BXzUGxBp.js";const b=a.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,C=a.article`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,D=a.p`
  ${e=>e.theme.typography.label};
`,d=a.hr`
  width: 100%;
  height: 0.1rem;
  border: 0.1rem solid ${e=>e.theme.color.black10};
`,j=()=>{const e=l(I),o=l(P);return t.jsxs(b,{children:[t.jsxs(C,{children:[t.jsx("img",{src:y,alt:""}),t.jsx(D,{children:`총 주문 금액이 ${z.SHIPPING_FREE_PRICE.toLocaleString()}원 이상일 경우 무료 배송됩니다.`})]}),t.jsx(d,{}),t.jsx(r,{title:"주문 금액",price:e.order}),t.jsx(r,{title:"쿠폰 할인 금액",price:o===0?0:-o}),t.jsx(r,{title:"배송비",price:e.shipping}),t.jsx(d,{}),t.jsx(r,{title:"총 결제 금액",price:e.total})]})};j.__docgenInfo={description:"",methods:[],displayName:"PaymentTotalWithDiscount"};const L={title:"PaymentTotalWithDiscount",component:j},p=E({key:O.PRICE_INFO}),i={decorators:[e=>t.jsx(c,{initializeState:({set:o})=>{o(p,{order:3e3,shipping:3e3,total:6e3})},children:t.jsx(e,{})})]},n={decorators:[e=>t.jsx(c,{initializeState:({set:o})=>{o(p,{order:96999,shipping:3e3,total:99999})},children:t.jsx(e,{})})]},s={decorators:[e=>t.jsx(c,{initializeState:({set:o})=>{o(p,{order:1e5,shipping:0,total:1e5})},children:t.jsx(e,{})})]};var m,x,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <RecoilRoot initializeState={({
    set
  }) => {
    set(priceInfoState, {
      order: 3000,
      shipping: 3000,
      total: 6000
    });
  }}>
        <Story />
      </RecoilRoot>]
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,R,_;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <RecoilRoot initializeState={({
    set
  }) => {
    set(priceInfoState, {
      order: 96999,
      shipping: 3000,
      total: 99999
    });
  }}>
        <Story />
      </RecoilRoot>]
}`,...(_=(R=n.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var f,u,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <RecoilRoot initializeState={({
    set
  }) => {
    set(priceInfoState, {
      order: 100000,
      shipping: 0,
      total: 100000
    });
  }}>
        <Story />
      </RecoilRoot>]
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const w=["기본","배송비가_있을_때","배송비가_없을_때"];export{w as __namedExportsOrder,L as default,i as 기본,s as 배송비가_없을_때,n as 배송비가_있을_때};
