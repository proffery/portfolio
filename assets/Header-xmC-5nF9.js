import{d as i,t,j as o,r as h,s as v,u as m,l as d}from"./index-DOWGypmr.js";import{u as S,e as B}from"./extractNumberFromString-BnXydJJA.js";import{I as f}from"./Icon-CucjeiWd.js";import{u as g,f as L,F as k}from"./Font-Dov2GHGn.js";import{F as y}from"./index-Dr0g_MyY.js";import{L as u}from"./Link.styled-C8U3_2-G.js";import{B as C}from"./Button.styled-CtEhiYWo.js";import{C as z}from"./Container-BxjVWiH9.js";const x=e=>{const{t:r}=g();return o.jsx(I,{"aria-label":"Logotype main page link",href:"#",children:o.jsxs(H,{color:e.color,children:[" ",r("app_logo")," "]})})},I=i.a`
  display: flex;
  align-items: center;
  z-index: 1;
`,H=i.span`
  font-family: Caveat, sans-serif;
  font-weight: 700;
  font-size: 40px;
  white-space: nowrap;
  color: ${e=>e.color==="gray"?t.light.color.text.primary:t.light.color.text.second};
  @media ${t.media.mobile} {
    font-size: 26px;
  }
`,j=[{item_href:"#projects",item_name:"Projects"},{item_href:"#about",item_name:"About"},{item_href:"#interests",item_name:"Interests"},{item_href:"#skills",item_name:"Skills"},{item_href:"#contact",item_name:"Contacts"}],w=[{item_href:"#projects",item_name:"Проекты"},{item_href:"#about",item_name:"Обо мне"},{item_href:"#interests",item_name:"Интересы"},{item_href:"#skills",item_name:"Технологии"},{item_href:"#contact",item_name:"Контакты"}],$=()=>{const{i18n:{changeLanguage:e,language:r,resolvedLanguage:n},t:a}=g();h.useEffect(()=>{n&&(document.documentElement.lang=n),document.title=a("app_title")},[n]);const s=l=>{e(l.currentTarget.value)};return o.jsx("div",{style:{alignSelf:"center",zIndex:999999},children:o.jsx("select",{defaultValue:r,onChange:s,style:{cursor:"pointer"},children:Object.entries(v).map(([l,M])=>o.jsx("option",{value:l,children:M},l))})})},_=({className:e})=>{const{setTheme:r,theme:n}=m(),a=()=>{n==="light"?r==null||r("dark"):r==null||r("light")};return o.jsx(C,{"aria-label":"Theme change button",background:"transparent",border_color:"transparent",className:e,hover_background:"none",hover_shadow:"none",min_width:"0px",onClick:a,children:o.jsx(f,{height:"40px",iconId:n==="light"?"moon":"sun",viewBox:n==="light"?"0 0 45 50":"10 20 500 500",width:"40px"})})},E=i.nav`
  display: flex;
  width: 100%;
  justify-content: end;
  text-align: center;
  ul {
    display: flex;
    justify-content: end;
    list-style-type: none;
  }
  li {
    display: flex;
    margin-right: 25px;
    align-items: center;
    ${L({fMax:16,fMin:12})}
  }
  z-index: 999;
  @media ${t.media.tablet} {
    li {
      margin-right: 10px;
    }
  }
`,O=i(_)`
  display: inline-block;
  @media ${t.media.mobile} {
    display: none;
  }
`,b={DesktopMenu:E,HeaderThemeChangeButton:O},T=()=>{const{theme:e}=m(),{i18n:{language:r}}=g(),n=r==="en"?j:w;return o.jsxs(b.DesktopMenu,{children:[o.jsx("ul",{"aria-label":"menu",role:"menu",children:o.jsxs(y,{cascade:!0,duration:500,fraction:0,triggerOnce:!0,children:[n.map((a,s)=>o.jsx("li",{role:"menuitem",children:o.jsx(u,{color:e==="light"?t.light.color.text.primary:t.dark.color.text.primary,href:a.item_href,theme:e,children:a.item_name})},s)),o.jsx("li",{children:o.jsx($,{})})]})}),o.jsx(b.HeaderThemeChangeButton,{})]})},F=i.nav`
  opacity: 0.9;
`,R=i.div`
  display: none;

  ${e=>e.opened==="true"&&d`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      justify-content: center;
      text-align: center;
    `}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: ${e=>e.theme==="light"?t.light.color.background.primary:t.dark.color.background.primary};

  ul {
    align-items: center;
    list-style-type: none;
    font-size: 40px;
    font-weight: 700;
    line-height: 136%;
  }
  li + li {
    margin-top: 50px;
  }
`,Y=i.button`
  position: fixed;
  right: 25px;
  top: 5px;
  width: 30px;
  height: 30px;
  z-index: 99999;
  background-color: transparent;
  border: none;
  cursor: pointer;
  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${e=>e.theme==="light"?t.light.color.text.primary:t.dark.color.text.primary};

    ${e=>e.opened==="true"&&d`
        background-color: rgba(255, 255, 255, 0);
      `}

    position: absolute;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${e=>e.theme==="light"?t.light.color.text.primary:t.dark.color.text.primary};
      transform: translateY(-8px);

      ${e=>e.opened==="true"&&d`
          transform: translateY(0) rotate(-45deg);
        `}
    }

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${e=>e.theme==="light"?t.light.color.text.primary:t.dark.color.text.primary};
      transform: translateY(8px);

      ${e=>e.opened==="true"&&d`
          transform: translateY(0) rotate(45deg);
          width: 30px;
        `}
    }
  }
`,p={BurgerButton:Y,MobileMenu:F,MobileMenuPopup:R},D=()=>{const{theme:e}=m(),[r,n]=h.useState(!1),{i18n:{language:a}}=g(),s=a==="en"?j:w;return o.jsxs(p.MobileMenu,{children:[o.jsx(p.BurgerButton,{"aria-label":"Burger menu button",onClick:()=>{n(!r)},opened:r.toString(),theme:e,children:o.jsx("span",{})}),o.jsx(p.MobileMenuPopup,{opened:r.toString(),theme:e,children:o.jsxs("ul",{"aria-label":"menu",role:"menu",children:[o.jsx(y,{cascade:!0,duration:300,triggerOnce:!0,children:s.map(l=>o.jsx("li",{onClick:()=>{n(!r)},role:"menuitem",children:o.jsx(u,{color:e==="light"?t.light.color.text.primary:t.dark.color.text.primary,href:l.item_href,theme:e,children:l.item_name})},l.item_href))}),o.jsx("li",{children:o.jsx($,{})}),o.jsx("li",{children:o.jsx(_,{})})]})})]})},P=i.header`
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;
  background-color: ${e=>e.theme==="light"?t.light.color.background.primary:t.dark.color.background.primary};
  color: ${e=>e.theme==="light"?t.light.color.text.primary:t.dark.color.text.primary};
  box-shadow: ${e=>e.scrolled==="true"&&t.light.shadow.main};
  @media ${t.media.mobile} {
    height: 44px;
  }
`,A=i(z)`
  padding: 0;
  height: 75px;
  @media ${t.media.tablet} {
    width: 100vw;
  }
  @media ${t.media.mobile} {
    height: 44px;
  }
`,W=i(k)`
  position: relative;
  width: 10%;
  z-index: 0;
  background-color: ${e=>e.theme==="light"&&e.scrolled?t.light.color.background.primary:r=>r.theme==="light"?t.light.color.background.second:n=>n.theme==="dark"&&n.scrolled?t.dark.color.background.primary:t.dark.color.background.second};
  &::after {
    position: absolute;
    content: '';
    width: 300%;
    height: 100%;
    background-color: ${e=>e.theme==="light"&&e.scrolled==="true"?t.light.color.background.primary:r=>r.theme==="light"?t.light.color.background.second:n=>n.theme==="dark"&&n.scrolled==="true"?t.dark.color.background.primary:t.dark.color.background.second};

    @media ${t.media.tablet} {
      width: 500%;
    }
  }
`,G=i(k)`
  display: flex;
  background-color: ${e=>e.theme==="light"?t.light.color.background.primary:t.dark.color.background.primary};
`,N=i(u)`
  display: none;
  position: fixed;
  height: 50px;
  left: 0;
  top: 90%;
  transform-origin: top left;
  transform: rotate(-90deg);
  background-color: ${e=>e.theme==="light"?t.light.color.background.second:t.dark.color.background.second};
  border-radius: 0 0 22px 22px;
  border: 2px solid
    ${e=>e.theme==="light"?t.light.color.background.bannerBorder:t.dark.color.background.bannerBorder};

  color: ${e=>e.theme==="light"?t.light.color.text.second:t.dark.color.text.primary};
  z-index: -1;
  border-top: none;

  @media ${t.media.tablet} {
    display: flex;
    height: 40px;
    min-width: 80px;
    border-radius: 0 0 18px 18px;
  }

  @media ${t.media.mobile} {
    height: 30px;
    min-width: 70px;
    border-radius: 0 0 16px 16px;
  }
`,c={Header:P,HeaderContainer:A,Left:W,Right:G,TopButton:N},ee=()=>{const{theme:e}=m(),r=S(),[n,a]=h.useState(!1),s=B(t.media.mobile);return h.useEffect(()=>{const l=()=>{window.scrollY>50?a(!0):a(!1)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),o.jsxs(c.Header,{scrolled:n.toString(),theme:e,children:[o.jsxs(c.HeaderContainer,{justify:"space-between",width:"100%",children:[o.jsx(c.Left,{scrolled:n.toString(),theme:e,children:e==="light"&&n?o.jsx(x,{color:"gray"}):o.jsx(x,{color:"white"})}),o.jsx(c.Right,{align:"center",justify:"end",theme:e,children:r<s?o.jsx(D,{}):o.jsx(T,{})})]}),n&&o.jsx(c.TopButton,{href:"#",theme:e,type:"button",children:o.jsx(f,{"aria-label":"Go to top",height:"100%",iconId:"arrowRight",viewBox:"-6 -2 37 35",width:"100%"})})]})};export{ee as default};
