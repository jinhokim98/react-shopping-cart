import{R as a}from"./index-D5ptoTbw.js";import{R as l,O as i}from"./constants-Qxp5stNU.js";import{s as d,i as h,d as g}from"./atoms-W9rtZ_fn.js";const E="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4664_1446)'%3e%3cpath%20d='M7.33331%204.66666H8.66665V5.99999H7.33331V4.66666ZM7.33331%207.33333H8.66665V11.3333H7.33331V7.33333ZM7.99998%201.33333C4.31998%201.33333%201.33331%204.31999%201.33331%207.99999C1.33331%2011.68%204.31998%2014.6667%207.99998%2014.6667C11.68%2014.6667%2014.6666%2011.68%2014.6666%207.99999C14.6666%204.31999%2011.68%201.33333%207.99998%201.33333ZM7.99998%2013.3333C5.05998%2013.3333%202.66665%2010.94%202.66665%207.99999C2.66665%205.05999%205.05998%202.66666%207.99998%202.66666C10.94%202.66666%2013.3333%205.05999%2013.3333%207.99999C13.3333%2010.94%2010.94%2013.3333%207.99998%2013.3333Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4664_1446'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",R=a({key:l.PRICE_INFO,get:({get:t})=>{const s=t(d),n=t(h),r=t(g),e=s.reduce((p,c)=>p+c.product.price*c.quantity,0),o=e>=i.SHIPPING_FREE_PRICE||e===0?0:n?i.SHIPPING_FEE+3e3:i.SHIPPING_FEE;return{order:e,shipping:o,total:e+o-r}}});export{E as i,R as p};
