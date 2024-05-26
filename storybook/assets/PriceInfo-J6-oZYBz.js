import{p as r,j as t}from"./styled-components.browser.esm-C_jzoV4G.js";const i=r.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 4.2rem;
`,s=r.p`
  ${e=>e.theme.typography.boldLabel};
`,a=r.p`
  ${e=>e.theme.typography.pageTitle};
`,c=r.span`
  padding: 0.3rem 1rem;
  border-radius: 0.2rem;
  background-color: ${e=>e.theme.color.lightOrange};
  ${e=>e.theme.typography.boldLabel};

  color: ${e=>e.theme.color.orange};
`,p=({title:e,price:o,accent:n=!1})=>t.jsxs(i,{children:[t.jsxs(s,{children:[e," ",n&&t.jsx(c,{children:"최대 할인 적용"})]}),t.jsxs(a,{children:[o.toLocaleString(),"원"]})]});p.__docgenInfo={description:"",methods:[],displayName:"PriceInfo",props:{title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},accent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{p as P};
