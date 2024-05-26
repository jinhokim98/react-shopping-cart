import{p as b,j as l}from"./styled-components.browser.esm-C_jzoV4G.js";import{r as m}from"./index-l2PZgWEW.js";import{c as C}from"./index-C--EFurk.js";import{s as f}from"./atoms-D8OxZTKK.js";import{S as k}from"./SelectAll-D0MRrRMb.js";import{S as y}from"./ShoppingCartItem-dPj3gzXh.js";import"./index-BXzUGxBp.js";import"./constants-Qxp5stNU.js";import"./Checkbox-BMlQR7lG.js";import"./Stepper-pbuZOGA1.js";const _=t=>{const[o,n]=C(f),[i,r]=m.useState(t.length===o.length);return m.useEffect(()=>{r(t.length===o.length)},[t,o]),{all:i,onSelectAllClick:()=>{i?(n([]),r(!1)):(n(t),r(!0))}}};function x(t,o,n){const i=new Set(t.map(e=>e[n])),r=new Set(o.map(e=>e[n])),s=[];return r.forEach(e=>{if(i.has(e)){const c=o.find(a=>a[n]===e);c&&s.push(c)}}),s}const A=t=>{const[o,n]=C(f);m.useEffect(()=>{t.length!==0&&n(e=>i([...e],t))},[t,n]);const i=(e,c)=>x(e,c,"id"),r=e=>o.find(c=>c.id===e)!==void 0;return{selectedItems:o,onCheckboxClick:e=>{const c=r(e.id);n(c?a=>a.filter(S=>S.id!==e.id):a=>[...a,e])},isSelected:r}},I=b.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,h=({cartItems:t,refetch:o})=>{const{onCheckboxClick:n,isSelected:i}=A(t),{all:r,onSelectAllClick:s}=_(t);return l.jsxs(I,{children:[l.jsx(k,{isSelectAll:r,onSelectAllClick:s}),t.map(e=>l.jsx(y,{cartItem:e,isSelected:i,onCheckboxClick:n,refetch:o},e.id))]})};h.__docgenInfo={description:"",methods:[],displayName:"ShoppingCartList",props:{cartItems:{required:!0,tsType:{name:"Array",elements:[{name:"CartItem"}],raw:"CartItem[]"},description:""},refetch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};const R={title:"ShoppingCartList",component:h},d={args:{cartItems:[{id:1,quantity:2,product:{id:1,name:"춘식이",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:2,quantity:2,product:{id:2,name:"춘식이2",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:3,quantity:2,product:{id:3,name:"춘식이3",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}}],refetch:async()=>console.log("쿠키")}};var p,u,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    cartItems: [{
      id: 1,
      quantity: 2,
      product: {
        id: 1,
        name: '춘식이',
        price: 15000000,
        imageUrl: 'https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171',
        category: '고양이'
      }
    }, {
      id: 2,
      quantity: 2,
      product: {
        id: 2,
        name: '춘식이2',
        price: 15000000,
        imageUrl: 'https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171',
        category: '고양이'
      }
    }, {
      id: 3,
      quantity: 2,
      product: {
        id: 3,
        name: '춘식이3',
        price: 15000000,
        imageUrl: 'https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171',
        category: '고양이'
      }
    }],
    refetch: async () => console.log('쿠키')
  }
}`,...(g=(u=d.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const T=["기본"];export{T as __namedExportsOrder,R as default,d as 기본};
