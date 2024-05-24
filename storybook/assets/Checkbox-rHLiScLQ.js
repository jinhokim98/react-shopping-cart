import{p as n,j as e}from"./styled-components.browser.esm-C_jzoV4G.js";const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEASURBVHgBtdWLDcIgEAbgq3EARsANOgKjOIIbtBvoBnUTdAJ1gnYDRsDDgCH0aHj1kj8hfdxXQgMA6+KYG2bG6MS8MBNGQEJdMxrHMtkPJWtqALjMGBYCQ0PARfoA3wFwEQ65tGrKOY/ORrYA+r7XSik9DIN/XRnggDlBZSEAUkpgjEHXdf4ts/jcDJYWMzA1jiP1TB2SANQhiUA5kgHQiPk7gj+kBlgjQgjtioIKAHom5mUKKgTiaxJCFcD2wvtQBfBHZOwBHyoEftvKEfOEyImGjclxRn3cgFlR75CzLzbb7r1MQNS9ITDDxjk/NgAeQJzvYXE7q3dG48W+I6iGX2YVWWLu4harAAAAAElFTkSuQmCC",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBrZbZjcIwFEUdsyOQ+ELij1QwdDB0MpRABzN0QAdQAh1MC3QQEJsQIIVFILF57o0IYnE02e5HHNvxO/F7tp8NodFoNKpLKb8Mw6ijWhU+pJTqo+gfj8eWaZoDzw8tyypNp9Pf+XyuttutOp1Oyq9gXNm2rTh2Mpl8awGz2awKgLVer1UUnc9ntVqtCOq8QdDY3Ww2Ki4tl0s1Ho+btG3wgUojlUp1yuWyiEuXy0UAZB8OB1OygUEuFAoiDiE2TplIJEQ2my2l0+mmvPXVcrmciKrdbicQD6ekMpmMwAr9TDLgmEkJFRFFNIwV6bwjJE6JELCoShGDHgF0e7FYfOqPDPkPEBniBxAJ4heghTBoXCHYuSIOgBaCzeOsdS9QUIAWks/nncHX6/UNFAaghVAc/AoKC6CSXh2uERpfLBb39qAASlYqlQEOM9vdpa+gxzMtKICHJDR03dVnwHVyQWFmsN/v6fKevBFbXhAXFBTAWdAmsmvv3si0y5QbZ9JCIvx5It/yuxUVBPe4gK52ijz22cnLAPwZ6CLBb/mDsMG02360a3jA6vijBl5ryDMfwp+GDDJg7dcr0R9K1qXEGUThSgAAAABJRU5ErkJggg==",s=n.label`
  width: 2.5rem;
  height: 2.4rem;
  padding: 0;
  background-color: transparent;
  border: none;

  user-select: none;
  cursor: pointer;
`,g=n.input`
  appearance: none;
  border-radius: 0.35rem;
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${r});

  &:checked {
    border-color: transparent;
    background-image: url(${a});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  &:disabled {
    cursor: not-allowed;
    background-image: url(${r});
  }

  cursor: pointer;
`,d=({id:A,isChecked:o,disabled:t,onChange:i})=>e.jsx(s,{htmlFor:`${A}`,children:e.jsx(g,{type:"checkbox",id:`${A}`,disabled:t??!1,checked:o,onChange:i,name:"checkbox"})});d.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{d as C};
