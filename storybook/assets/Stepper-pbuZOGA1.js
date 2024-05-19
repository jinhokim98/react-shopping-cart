import{p as r,j as e}from"./styled-components.browser.esm-C_jzoV4G.js";const a=r.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`,i=r.button`
  width: 2.5rem;
  height: 2.4rem;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`,n=r.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,c=r.span`
  ${t=>t.theme.typography.label};
`,d="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.115723'%20y='0.5'%20width='24'%20height='24'%20rx='8'%20fill='white'/%3e%3crect%20x='0.615723'%20y='1'%20width='23'%20height='23'%20rx='7.5'%20stroke='black'%20stroke-opacity='0.1'/%3e%3cpath%20d='M6.11572%2012.5C10.802%2012.5%2013.4294%2012.5%2018.1157%2012.5'%20stroke='%23363636'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",l="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.115723'%20y='0.5'%20width='24'%20height='24'%20rx='8'%20fill='white'/%3e%3crect%20x='0.615723'%20y='1'%20width='23'%20height='23'%20rx='7.5'%20stroke='black'%20stroke-opacity='0.1'/%3e%3cpath%20d='M6.11572%2012.5H18.1157M12.1157%2018.5V6.50004'%20stroke='%23363636'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",h=({value:t,handleIncrement:o,handleDecrement:s})=>e.jsxs(a,{children:[e.jsx(i,{onClick:s,disabled:t<=1,children:e.jsx(n,{src:d,alt:""})}),e.jsx(c,{children:t}),e.jsx(i,{onClick:o,children:e.jsx(n,{src:l,alt:""})})]});h.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{value:{required:!0,tsType:{name:"number"},description:""},handleIncrement:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},handleDecrement:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""}}};export{h as S};
