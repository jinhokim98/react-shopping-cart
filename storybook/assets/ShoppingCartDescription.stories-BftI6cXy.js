import{p as n,j as r}from"./styled-components.browser.esm-C_jzoV4G.js";import"./index-l2PZgWEW.js";const m=n.hgroup`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,g=n.h1`
  ${e=>e.theme.typography.pageTitle};
`,h=n.p`
  ${e=>e.theme.typography.label};
  white-space: pre-line;
`,d=({title:e,descriptionShowingCondition:C,description:l})=>r.jsxs(m,{children:[r.jsx(g,{children:e}),C&&r.jsx(h,{children:l})]});d.__docgenInfo={description:"",methods:[],displayName:"ShoppingCartDescription",props:{title:{required:!0,tsType:{name:"string"},description:""},descriptionShowingCondition:{required:!0,tsType:{name:"boolean"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const x={title:"ShoppingCartDescription",component:d},t={args:{title:"안녕",descriptionShowingCondition:!0,description:"현재 1종류의 상품이 담겨있습니다."}},i={args:{title:"안녕",descriptionShowingCondition:!1,description:"현재 1종류의 상품이 담겨있습니다."}};var o,s,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: '안녕',
    descriptionShowingCondition: true,
    description: '현재 1종류의 상품이 담겨있습니다.'
  }
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,a,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: '안녕',
    descriptionShowingCondition: false,
    description: '현재 1종류의 상품이 담겨있습니다.'
  }
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const y=["기본","장바구니가_비었을_때"];export{y as __namedExportsOrder,x as default,t as 기본,i as 장바구니가_비었을_때};
