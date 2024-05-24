import{p as s,j as e}from"./styled-components.browser.esm-C_jzoV4G.js";import{p as I,i as y}from"./selectors-ChrHjrq7.js";import{b as u,a as E,c}from"./index-D5ptoTbw.js";import{O as P,R as z}from"./constants-Qxp5stNU.js";import{P as a}from"./PriceInfo-DS9dRlx7.js";import"./index-l2PZgWEW.js";import"./atoms-W9rtZ_fn.js";import"./index-BXzUGxBp.js";const O=s.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,b=s.article`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,C=s.p`
  ${t=>t.theme.typography.label};
`,l=s.hr`
  width: 100%;
  height: 0.1rem;
  border: 0.1rem solid ${t=>t.theme.color.black10};
`,j=()=>{const t=u(I);return e.jsxs(O,{children:[e.jsxs(b,{children:[e.jsx("img",{src:y,alt:""}),e.jsx(C,{children:`총 주문 금액이 ${P.SHIPPING_FREE_PRICE.toLocaleString()}원 이상일 경우 무료 배송됩니다.`})]}),e.jsx(l,{}),e.jsx(a,{title:"주문 금액",price:t.order}),e.jsx(a,{title:"배송비",price:t.shipping}),e.jsx(l,{}),e.jsx(a,{title:"총 결제 금액",price:t.total})]})};j.__docgenInfo={description:"",methods:[],displayName:"PaymentTotal"};const D={title:"PaymentTotal",component:j},p=E({key:z.PRICE_INFO}),r={decorators:[t=>e.jsx(c,{initializeState:({set:o})=>{o(p,{order:3e3,shipping:3e3,total:6e3})},children:e.jsx(t,{})})]},i={decorators:[t=>e.jsx(c,{initializeState:({set:o})=>{o(p,{order:96999,shipping:3e3,total:99999})},children:e.jsx(t,{})})]},n={decorators:[t=>e.jsx(c,{initializeState:({set:o})=>{o(p,{order:1e5,shipping:0,total:1e5})},children:e.jsx(t,{})})]};var d,m,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var R,S,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const G=["기본","배송비가_있을_때","배송비가_없을_때"];export{G as __namedExportsOrder,D as default,r as 기본,n as 배송비가_없을_때,i as 배송비가_있을_때};
