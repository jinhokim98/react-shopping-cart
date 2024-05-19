import{j as u}from"./styled-components.browser.esm-C_jzoV4G.js";import{r as d}from"./index-l2PZgWEW.js";import{S as p}from"./Stepper-pbuZOGA1.js";const g={title:"Stepper",component:p},e={decorators:[o=>{const[c,t]=d.useState(0),m=async()=>{t(n=>n+1)},l=async()=>{t(n=>Math.max(n-1,0))};return u.jsx(o,{args:{value:c,handleIncrement:m,handleDecrement:l}})}],args:{value:0,handleIncrement:async()=>console.log("올리"),handleDecrement:async()=>console.log("쿠키")}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [Story => {
    const [quantity, setQuantity] = useState<number>(0);
    const handleIncrement = async () => {
      setQuantity(prev => prev + 1);
    };
    const handleDecrement = async () => {
      setQuantity(prev => Math.max(prev - 1, 0));
    };
    return <Story args={{
      value: quantity,
      handleIncrement: handleIncrement,
      handleDecrement: handleDecrement
    }} />;
  }],
  args: {
    value: 0,
    handleIncrement: async () => console.log('올리'),
    handleDecrement: async () => console.log('쿠키')
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const v=["기본"];export{v as __namedExportsOrder,g as default,e as 기본};
