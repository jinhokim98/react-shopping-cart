import{p as S,j as p}from"./styled-components.browser.esm-C_jzoV4G.js";import{r as l}from"./index-l2PZgWEW.js";import{d as C}from"./index-efxvOAgQ.js";import{s as f}from"./atoms-BG0H7hR-.js";import{S as b}from"./SelectAll-DNOMBh8w.js";import{S as k}from"./ShoppingCartItem-VlALYt8P.js";import"./index-BXzUGxBp.js";import"./constants-COjtpt9k.js";import"./Checkbox-BXgcN7v8.js";import"./Stepper-pbuZOGA1.js";const I=t=>{const[o,r]=C(f),[c,i]=l.useState(t.length===o.length);return l.useEffect(()=>{i(t.length===o.length)},[t,o]),{all:c,onSelectAllClick:()=>{c?(r([]),i(!1)):(r(t.map(e=>({cartItemId:e.id,quantity:e.quantity,price:e.product.price}))),i(!0))}}};function _(t,o,r){const c=new Set(t.map(e=>e[r])),i=new Set(o.map(e=>e[r])),a=[];return i.forEach(e=>{if(c.has(e)){const n=o.find(s=>s[r]===e);n&&a.push(n)}}),a}const q=t=>{const[o,r]=C(f);l.useEffect(()=>{if(t.length!==0){const e=t.map(n=>({cartItemId:n.id,quantity:n.quantity,price:n.product.price}));r(n=>c([...n],e))}},[t,r]);const c=(e,n)=>_(e,n,"cartItemId"),i=e=>o.find(n=>n.cartItemId===e)!==void 0;return{selectedItems:o,onCheckboxClick:e=>{const n=i(e.id);r(n?s=>s.filter(y=>y.cartItemId!==e.id):s=>[...s,{cartItemId:e.id,price:e.product.price,quantity:e.quantity}])},isSelected:i}},x=S.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,h=({cartItems:t,refetch:o})=>{const{onCheckboxClick:r,isSelected:c}=q(t),{all:i,onSelectAllClick:a}=I(t);return p.jsxs(x,{children:[p.jsx(b,{isSelectAll:i,onSelectAllClick:a}),t.map(e=>p.jsx(k,{cartItem:e,isSelected:c,onCheckboxClick:r,refetch:o},e.id))]})};h.__docgenInfo={description:"",methods:[],displayName:"ShoppingCartList",props:{cartItems:{required:!0,tsType:{name:"Array",elements:[{name:"CartItem"}],raw:"CartItem[]"},description:""},refetch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};const R={title:"ShoppingCartList",component:h},d={args:{cartItems:[{id:1,quantity:2,product:{id:1,name:"춘식이",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:2,quantity:2,product:{id:2,name:"춘식이2",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}},{id:3,quantity:2,product:{id:3,name:"춘식이3",price:15e6,imageUrl:"https://t1.kakaocdn.net/together_action_prod/admin/20230730/b8d3ba0648d64f5c8564b2e7e908a171",category:"고양이"}}],refetch:async()=>console.log("쿠키")}};var m,u,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
