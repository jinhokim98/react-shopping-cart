import{p as n,j as e}from"./styled-components.browser.esm-C_jzoV4G.js";import{i as S}from"./info-BuCr-knr.js";import{b as C,R as P,a as c}from"./index-C--EFurk.js";import{d as E}from"./atoms-D8OxZTKK.js";import{O as b,R as T}from"./constants-Qxp5stNU.js";import{P as r}from"./PriceInfo-J6-oZYBz.js";import"./index-l2PZgWEW.js";import"./index-BXzUGxBp.js";const z=n.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,$=n.article`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,O=n.p`
  ${o=>o.theme.typography.label};
`,d=n.hr`
  width: 100%;
  height: 0.1rem;
  border: 0.1rem solid ${o=>o.theme.color.black10};
`,w=n.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 4.2rem;
`,A=n.p`
  ${o=>o.theme.typography.boldLabel};
`,D=n.div``,N=n.p`
  ${o=>o.theme.typography.label};
  line-height: 160%;
  text-align: right;
`,R=({coupons:o})=>e.jsxs(w,{children:[e.jsx(A,{children:"쿠폰 내용"}),e.jsx(D,{children:o.map(t=>e.jsx(N,{children:t.description},t.id))})]});R.__docgenInfo={description:"",methods:[],displayName:"CouponInfo",props:{coupons:{required:!0,tsType:{name:"Array",elements:[{name:"Coupon"}],raw:"Coupon[]"},description:""}}};const _=({priceInfo:o,coupons:t})=>{const p=C(E);return e.jsxs(z,{children:[e.jsxs($,{children:[e.jsx("img",{src:S,alt:""}),e.jsx(O,{children:`총 주문 금액이 ${b.SHIPPING_FREE_PRICE.toLocaleString()}원 이상일 경우 무료 배송됩니다.`})]}),e.jsx(d,{}),e.jsx(r,{title:"주문 금액",price:o.order}),t.length>0&&e.jsx(R,{coupons:t}),e.jsx(r,{title:"쿠폰 할인 금액",price:p===0?0:-p,accent:p!==0}),e.jsx(r,{title:"배송비",price:o.shipping}),e.jsx(d,{}),e.jsx(r,{title:"총 결제 금액",price:o.total})]})};_.__docgenInfo={description:"",methods:[],displayName:"PaymentTotalWithDiscount",props:{priceInfo:{required:!0,tsType:{name:"IPriceInfo"},description:""},coupons:{required:!0,tsType:{name:"Array",elements:[{name:"Coupon"}],raw:"Coupon[]"},description:""}}};const K={title:"PaymentTotalWithDiscount",component:_},l=P({key:T.PRICE_INFO}),i={decorators:[o=>e.jsx(c,{initializeState:({set:t})=>{t(l,{order:3e3,shipping:3e3,total:6e3})},children:e.jsx(o,{})})],args:{priceInfo:{order:3e3,shipping:3e3,total:6e3},coupons:[]}},s={decorators:[o=>e.jsx(c,{initializeState:({set:t})=>{t(l,{order:96999,shipping:3e3,total:99999})},children:e.jsx(o,{})})],args:{priceInfo:{order:96999,shipping:3e3,total:99999},coupons:[]}},a={decorators:[o=>e.jsx(c,{initializeState:({set:t})=>{t(l,{order:1e5,shipping:0,total:1e5})},children:e.jsx(o,{})})],args:{priceInfo:{order:1e5,shipping:0,total:1e5},coupons:[]}};var m,h,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      </RecoilRoot>],
  args: {
    priceInfo: {
      order: 3000,
      shipping: 3000,
      total: 6000
    },
    coupons: []
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      </RecoilRoot>],
  args: {
    priceInfo: {
      order: 96999,
      shipping: 3000,
      total: 99999
    },
    coupons: []
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,j,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      </RecoilRoot>],
  args: {
    priceInfo: {
      order: 100000,
      shipping: 0,
      total: 100000
    },
    coupons: []
  }
}`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const Y=["기본","배송비가_있을_때","배송비가_없을_때"];export{Y as __namedExportsOrder,K as default,i as 기본,a as 배송비가_없을_때,s as 배송비가_있을_때};
