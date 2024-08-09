import{d as i,t,u as l,j as e,c as d}from"./index-DX2VFDie.js";import{L as c}from"./Link.styled-DSSzyAQx.js";import{f as a,F as s,u as g}from"./Font-B0-_PHdm.js";const h=i.footer`
  height: 200px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-bottom: 1px solid;
  background-color: ${o=>o.theme==="light"?t.light.color.background.primary:t.dark.color.background.primary};
`,m=i.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${a({fMax:16,fMin:13,family:"Inter, sans-serif",lineHeight:1,weight:700})}

  color: ${o=>o.theme==="light"?t.light.color.text.second:t.dark.color.text.primary};
  outline: 2px solid
    ${o=>o.theme==="light"?t.light.color.background.second:t.dark.color.background.second};
  background-color: ${o=>o.theme==="light"?t.light.color.background.second:t.dark.color.background.second};
  ${c} {
    color: ${o=>o.theme==="light"?t.light.color.text.second:t.dark.color.text.primary};
  }
`,p=i.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${a({fMax:11,fMin:10,family:"Inter, sans-serif",lineHeight:1,weight:400})}
  color: ${o=>o.theme==="light"?t.light.color.text.second:t.dark.color.text.primary};
  padding-top: 6px;
  background-color: ${o=>o.theme==="light"?t.light.color.background.second:t.dark.color.background.second};
`,u=i(s)`
  background-image: url(${o=>o.theme==="light"?"./images/wave-light.svg":"./images/wave-dark.svg"});
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center bottom;
`,k=i(s)`
  height: 70%;
  background-color: ${o=>o.theme==="light"?t.light.color.background.second:t.dark.color.background.second};
`,r={BackgroundBottom:k,BackgroundImgTop:u,Copyrights:p,Footer:h,Name:m},y=()=>{const{theme:o}=l(),{t:n}=g();return e.jsxs(r.Footer,{theme:o,children:[e.jsx(r.BackgroundImgTop,{height:"100%",theme:o,width:"100%"}),e.jsxs(r.BackgroundBottom,{direction:"column",theme:o,width:"100%",children:[e.jsxs(r.Name,{theme:o,children:[n("copyrights.coded")," ",e.jsx(c,{href:`mailto:${d.email}?subject=${n("app_title")}`,children:n("copyrights.name")})]}),e.jsxs(r.Copyrights,{theme:o,children:[n("copyrights.rights")," ",new Date().getFullYear()]})]})]})};export{y as default};
