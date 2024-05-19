import{p as c,j as t}from"./styled-components.browser.esm-C_jzoV4G.js";import{P as a}from"./PriceInfo-DS9dRlx7.js";import{b as w,c as H,R as F,a as p}from"./index-efxvOAgQ.js";import{R as u,O as l}from"./constants-COjtpt9k.js";import{s as z}from"./atoms-BG0H7hR-.js";import"./index-l2PZgWEW.js";import"./index-BXzUGxBp.js";const N="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4664_1446)'%3e%3cpath%20d='M7.33331%204.66666H8.66665V5.99999H7.33331V4.66666ZM7.33331%207.33333H8.66665V11.3333H7.33331V7.33333ZM7.99998%201.33333C4.31998%201.33333%201.33331%204.31999%201.33331%207.99999C1.33331%2011.68%204.31998%2014.6667%207.99998%2014.6667C11.68%2014.6667%2014.6666%2011.68%2014.6666%207.99999C14.6666%204.31999%2011.68%201.33333%207.99998%201.33333ZM7.99998%2013.3333C5.05998%2013.3333%202.66665%2010.94%202.66665%207.99999C2.66665%205.05999%205.05998%202.66666%207.99998%202.66666C10.94%202.66666%2013.3333%205.05999%2013.3333%207.99999C13.3333%2010.94%2010.94%2013.3333%207.99998%2013.3333Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4664_1446'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",O=c.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,b=c.article`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,v=c.p`
  ${e=>e.theme.typography.label};
`,g=c.hr`
  width: 100%;
  height: 0.1rem;
  border: 0.1rem solid ${e=>e.theme.color.black10};
`,k=w({key:u.PRICE_INFO,get:({get:e})=>{const r=e(z).reduce((E,h)=>E+=h.price*h.quantity,0),m=r>=l.SHIPPING_FREE_PRICE||r===0?0:l.SHIPPING_FEE;return{order:r,shipping:m,total:r+m}}}),C=()=>{const e=H(k);return t.jsxs(O,{children:[t.jsxs(b,{children:[t.jsx("img",{src:N,alt:""}),t.jsx(v,{children:`총 주문 금액이 ${l.SHIPPING_FREE_PRICE.toLocaleString()}원 이상일 경우 무료 배송됩니다.`})]}),t.jsx(g,{}),t.jsx(a,{title:"주문 금액",price:e.order}),t.jsx(a,{title:"배송비",price:e.shipping}),t.jsx(g,{}),t.jsx(a,{title:"총 결제 금액",price:e.total})]})};C.__docgenInfo={description:"",methods:[],displayName:"PaymentTotal"};const B={title:"PaymentTotal",component:C},d=F({key:u.PRICE_INFO}),i={decorators:[e=>t.jsx(p,{initializeState:({set:o})=>{o(d,{order:3e3,shipping:3e3,total:6e3})},children:t.jsx(e,{})})]},s={decorators:[e=>t.jsx(p,{initializeState:({set:o})=>{o(d,{order:96999,shipping:3e3,total:99999})},children:t.jsx(e,{})})]},n={decorators:[e=>t.jsx(p,{initializeState:({set:o})=>{o(d,{order:1e5,shipping:0,total:1e5})},children:t.jsx(e,{})})]};var _,x,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var S,f,I;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var j,y,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(y=n.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const D=["기본","배송비가_있을_때","배송비가_없을_때"];export{D as __namedExportsOrder,B as default,i as 기본,n as 배송비가_없을_때,s as 배송비가_있을_때};
