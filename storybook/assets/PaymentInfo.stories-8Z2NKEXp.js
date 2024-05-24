import{u as d,a as g,K as u,$ as h}from"./index-Df_t1Jkf.js";import{p as r,j as o}from"./styled-components.browser.esm-C_jzoV4G.js";import{r as x}from"./index-l2PZgWEW.js";import{a as s}from"./constants-Qxp5stNU.js";import{F as f}from"./FloatingButton-8FbaUajh.js";import"./index-BXzUGxBp.js";const j=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70rem;
  gap: 2.4rem;
`,y=r.p`
  ${e=>e.theme.typography.pageTitle};
  text-align: center;
`,P=r.p`
  ${e=>e.theme.typography.label};
  white-space: pre-line;
  text-align: center;
`,R=r.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,$=r.p`
  ${e=>e.theme.typography.boldLabel};
  text-align: center;
`,C=r.p`
  ${e=>e.theme.typography.pageTitle};
  text-align: center;
`,p=()=>{const e=d(),a=g(),t=a.state;x.useEffect(()=>{t===null&&e(s.ERROR)},[a.pathname,e,t]);const m=()=>{e(s.MAIN)};return o.jsxs(o.Fragment,{children:[o.jsxs(j,{children:[o.jsx(y,{children:"결제 확인"}),o.jsx(P,{children:`총 ${t==null?void 0:t.kindCount}종류의 상품 ${t==null?void 0:t.productCount}개를 주문했습니다.
최종 결제 금액을 확인해 주세요.`}),o.jsxs(R,{children:[o.jsx($,{children:"총 결제 금액"}),o.jsxs(C,{children:[t==null?void 0:t.totalPrice.toLocaleString(),"원"]})]})]}),o.jsx(f,{label:"장바구니로 돌아가기",onClick:m})]})};p.__docgenInfo={description:"",methods:[],displayName:"PaymentInfo"};const v={title:"PaymentInfo",component:p,decorators:[u],parameters:{reactRouter:h({location:{state:{kindCount:2,productCount:4,totalPrice:15e3}},routing:{path:"/order-info"}})}},n={};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const F=["기본"];export{F as __namedExportsOrder,v as default,n as 기본};
