import{d as n,t as i,u,j as t,r as h}from"./index-CDS9cnmU.js";import{C as f}from"./Container-Dk_IoGNN.js";import{F as c,f as g,u as v}from"./Font-DNYRbic6.js";import{S as w}from"./SectionTitle.styled-Odd9d8DB.js";import{F as y}from"./index-D37VuEst.js";import{I as x}from"./Icon-DjdeZnVn.js";import{B as I}from"./Button.styled-2TzD0nNA.js";const j=[{description:"I'm a web developer who loves creating visually appealing and user-friendly websites. From responsive designs to interactive features, I enjoy turning ideas into digital realities.",imageId:"code",title:"Web Development",viewBox:"0 0 24 24"},{description:"I'm an avid photographer capturing moments through my camera lens. I embrace the artistry and creativity of photography, exploring different techniques and developing my own unique prints.",imageId:"camera",title:"Photography",viewBox:"0 0 70 70"},{description:"Passionate about the ever-evolving IT industry, I stay up-to-date with the latest technologies and trends. From cloud computing to AI, I enjoy diving into new possibilities and contributing to growth and innovation.",imageId:"robot",title:"IT Industry",viewBox:"0 0 400 400"}],b=[{description:"Я веб-разработчик, который любит создавать визуально привлекательные и удобные для пользователя веб-сайты. От адаптивных дизайнов до интерактивных функций, мне нравится превращать идеи в цифровую реальность.",imageId:"code",title:"Веб-разработка",viewBox:"0 0 24 24"},{description:"Как увлеченный любитель фотографии, я с интересом запечатлеваю моменты через объектив своей камеры. Я открываю для себя искусство и творчество фотографии, исследую различные техники и создаю уникальные снимки",imageId:"camera",title:"Фотография",viewBox:"0 0 70 70"},{description:"Увлечённый постоянно развивающейся ИТ-индустрией, я слежу за последними технологиями и тенденциями. От облачных вычислений до ИИ. Я наслаждаюсь погружением в новые возможности и вношу свой вклад в рост и инновации.",imageId:"robot",title:"ИТ-индустрия",viewBox:"0 0 400 400"}],$=n.section`
  ${c} {
    gap: 30px;
    @media ${i.media.tablet} {
      gap: 26px;
    }
    @media ${i.media.mobile} {
      gap: 14px;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme==="light"?i.light.color.background.primary:i.dark.color.background.primary};
`,k={Services:$},F=n(c)`
  min-width: 320px;
  aspect-ratio: 3 / 4;
  width: 30%;
  padding: 0 45px;
  border-radius: 20px;
  cursor: pointer;
  color: ${e=>e.theme==="light"?i.light.color.text.primary:i.dark.color.text.primary};
  background-color: ${e=>e.theme==="light"?i.light.color.background.card:i.dark.color.background.card};
  box-shadow: ${e=>e.theme==="light"?i.light.shadow.card:i.dark.shadow.card};
  align-items: flex-start;
  justify-content: space-around;
  transition: all 0.6s;
  transform-style: preserve-3d;
  transform: ${e=>e.is_flip==="true"?"rotateY(-180deg)":"rotateY(0deg)"};
  p {
    ${g({fMax:24,fMin:14})}
    text-align: justify;
    hyphens: auto;
    transform: ${e=>e.is_flip==="true"?"rotateY(-180deg)":"rotateY(0deg)"};
  }

  @media ${i.media.tablet} {
    padding: 0 35px;
  }
`,S=n(c)`
  height: 173px;
  width: 173px;
  align-self: center;
  @media ${i.media.tablet} {
    width: 162px;
    height: 162px;
  }
  @media ${i.media.mobile} {
    width: 154px;
    height: 154px;
  }
`,C=n(I)`
  ${g({fMax:16,fMin:10,lineHeight:1.96,weight:400})}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  color: ${e=>e.theme==="light"?i.light.color.text.link:i.dark.color.text.link};
  transform: ${e=>e.is_flip==="true"?"rotateY(-180deg)":"rotateY(0deg)"};
  svg {
    transform: ${e=>e.is_flip==="true"?"rotateY(-180deg)":"rotateY(0deg)"};
  }
`,B=n.h3`
  ${g({fMax:32,fMin:15,lineHeight:1.25,weight:500})}
  color: ${e=>e.theme==="light"?i.light.color.text.primary:i.dark.color.text.primary};
`,l={ServicesCard:F,ServicesCardButton:C,ServicesCardIconWrapper:S,ServicesCardTitle:B},Y=({cardIndex:e,interest:r,interestsWithFlip:p,setInterestsWithFlip:s})=>{const{theme:a}=u(),d=()=>{s(p.map((o,m)=>m===e?{...o,isFlip:!o.isFlip}:{...o,isFlip:!1}))};return t.jsx(l.ServicesCard,{direction:"column",is_flip:r.isFlip.toString(),justify:"space-around",onClick:d,theme:a,width:"30%",children:r.isFlip?t.jsxs(t.Fragment,{children:[t.jsx(l.ServicesCardIconWrapper,{children:t.jsx(x,{height:"100%",iconId:r.imageId,viewBox:r.viewBox||"0 0 70 70",width:"100%"})}),t.jsx(y,{delay:300,children:t.jsx("p",{children:r.description})})]}):t.jsxs(t.Fragment,{children:[t.jsx(l.ServicesCardIconWrapper,{children:t.jsx(x,{height:"100%",iconId:r.imageId,viewBox:r.viewBox||"0 0 70 70",width:"100%"})}),t.jsx(l.ServicesCardTitle,{theme:a,children:r.title})]})})},A=()=>{const{theme:e}=u(),{i18n:{language:r},t:p}=v(),s=r==="en"?j:b,[a,d]=h.useState(s.map(o=>({...o,isFlip:!1})));return h.useEffect(()=>{d(s.map(o=>({...o,isFlip:!1})))},[r]),t.jsx(k.Services,{id:"interests",theme:e,children:t.jsxs(f,{direction:"column",children:[t.jsx(w,{theme:e,children:p("interests.title")}),t.jsx(c,{align:"center",justify:"center",wrap:"wrap",children:a.map((o,m)=>t.jsx(Y,{cardIndex:m,interest:o,interestsWithFlip:a,setInterestsWithFlip:d},o.imageId))})]})})};export{A as default};
