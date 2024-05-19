import{p as r,j as t}from"./styled-components.browser.esm-C_jzoV4G.js";const o="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.615723'%20y='0.5'%20width='23'%20height='23'%20rx='7.5'%20fill='black'%20stroke='black'/%3e%3cg%20clip-path='url(%23clip0_4813_51)'%3e%3cpath%20d='M9.1157%2016.17L4.9457%2012L3.5257%2013.41L9.1157%2019L21.1157%207L19.7057%205.59L9.1157%2016.17Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4813_51'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.115723)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",n="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.884277'%20width='24'%20height='24'%20rx='8'%20fill='white'/%3e%3crect%20x='1.38428'%20y='0.5'%20width='23'%20height='23'%20rx='7.5'%20stroke='black'%20stroke-opacity='0.1'/%3e%3cg%20clip-path='url(%23clip0_4664_1418)'%3e%3cpath%20d='M9.88425%2016.17L5.71425%2012L4.29425%2013.41L9.88425%2019L21.8843%207L20.4743%205.59L9.88425%2016.17Z'%20fill='black'%20fill-opacity='0.1'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4664_1418'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.884277)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",a=r.label`
  width: 2.5rem;
  height: 2.4rem;
  padding: 0;
  background-color: transparent;
  border: none;

  user-select: none;
  cursor: pointer;
`,s=r.input`
  appearance: none;
  border-radius: 0.35rem;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${n});

  &:checked {
    border-color: transparent;
    background-image: url(${o});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  cursor: pointer;
`,h=({id:e,isChecked:c,onChange:i})=>t.jsx(a,{htmlFor:`${e}`,children:t.jsx(s,{type:"checkbox",id:`${e}`,checked:c,onChange:i,name:"checkbox"})});h.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!0,tsType:{name:"number"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{h as C};
