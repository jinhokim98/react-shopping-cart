import{p as n,j as e}from"./styled-components.browser.esm-C_jzoV4G.js";import{i as I}from"./info-BuCr-knr.js";import{O as _}from"./constants-Qxp5stNU.js";import{P as a}from"./PriceInfo-J6-oZYBz.js";import"./index-l2PZgWEW.js";const j=n.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,y=n.article`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,P=n.p`
  ${r=>r.theme.typography.label};
`,i=n.hr`
  width: 100%;
  height: 0.1rem;
  border: 0.1rem solid ${r=>r.theme.color.black10};
`,u=({priceInfo:r})=>e.jsxs(j,{children:[e.jsxs(y,{children:[e.jsx("img",{src:I,alt:""}),e.jsx(P,{children:`총 주문 금액이 ${_.SHIPPING_FREE_PRICE.toLocaleString()}원 이상일 경우 무료 배송됩니다.`})]}),e.jsx(i,{}),e.jsx(a,{title:"주문 금액",price:r.order}),e.jsx(a,{title:"배송비",price:r.shipping}),e.jsx(i,{}),e.jsx(a,{title:"총 결제 금액",price:r.total})]});u.__docgenInfo={description:"",methods:[],displayName:"PaymentTotal",props:{priceInfo:{required:!0,tsType:{name:"IPriceInfo"},description:""}}};const O={title:"PaymentTotal",component:u},o={args:{priceInfo:{order:3e3,shipping:3e3,total:6e3}}},t={args:{priceInfo:{order:96999,shipping:3e3,total:99999}}},s={args:{priceInfo:{order:1e5,shipping:0,total:1e5}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    priceInfo: {
      order: 3000,
      shipping: 3000,
      total: 6000
    }
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,d,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    priceInfo: {
      order: 96999,
      shipping: 3000,
      total: 99999
    }
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    priceInfo: {
      order: 100000,
      shipping: 0,
      total: 100000
    }
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const $=["기본","배송비가_있을_때","배송비가_없을_때"];export{$ as __namedExportsOrder,O as default,o as 기본,s as 배송비가_없을_때,t as 배송비가_있을_때};
