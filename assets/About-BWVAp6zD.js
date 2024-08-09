import{d as a,t as e,u as h,j as i,c as l}from"./index-DX2VFDie.js";import{u as b,e as g}from"./extractNumberFromString-5Vxek9Ov.js";import{f as c,F as s,u as x}from"./Font-B0-_PHdm.js";import{S as u}from"./SectionTitle.styled-BHotmXTo.js";import{I as d}from"./Icon-B3STHLRY.js";import{L as n}from"./Link.styled-DSSzyAQx.js";import{C as f}from"./Container-Cp-UtfxX.js";const k=""+new URL("map-Dja_7-Xc.svg",import.meta.url).href,j=""+new URL("photo-about-CX_jqGxh.webp",import.meta.url).href,w=a.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${t=>t.theme==="light"?e.light.color.background.primary:e.dark.color.background.primary};
  color: ${t=>t.theme==="light"?e.light.color.text.primary:e.dark.color.text.primary};
`,$=a(f)`
  position: relative;
  height: 100vh;
  padding-top: 60px;
  background-color: ${t=>t.theme==="light"?e.light.color.background.second:e.dark.color.background.second};
  background-image: url(${j}), url(${k});
  background-repeat: no-repeat;
  background-position:
    bottom right,
    center;
  background-size: contain, cover;
  @media ${e.media.tablet} {
    width: 100vw;
  }

  @media ${e.media.mobile} {
    height: 70vh;
  }
`,y=a(s)`
  position: absolute;
  top: 90%;
  left: 10%;
  transform: translate(-10%, -90%);
  background: ${t=>t.theme==="light"?e.light.gradient.banner:e.dark.gradient.banner};
  backdrop-filter: blur(10px);
  border: 2px solid
    ${t=>t.theme==="light"?e.light.color.background.bannerBorder:e.dark.color.background.bannerBorder};
  border-radius: 100px 0;
  min-width: 250px;
  padding: 20px 30px 30px;
  @media ${e.media.tablet} {
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    width: auto;
  }

  @media ${e.media.mobile} {
    padding-top: 10px;
    border-radius: 54px 0;
  }
`,A=a(s)`
  align-self: flex-end;
  ${n} {
    color: ${t=>t.theme==="light"?e.light.color.text.second:e.dark.color.text.primary};
  }
`,B=a.h2`
  white-space: nowrap;
  align-self: center;
  display: none;
  ${c({fMax:30,fMin:20,family:"Montserrat",lineHeight:1.36,weight:700})}
  @media ${e.media.tablet} {
    display: flex;
  }
`,v=a.ul`
  position: relative;
  ${c({fMax:20,fMin:12,lineHeight:1.36,weight:400})}
  li {
    display: flex;
    align-items: flex-start;
    text-align: left;
    margin-left: 28px;

    @media ${e.media.tablet} {
      margin-left: 18px;
    }

    @media ${e.media.mobile} {
      margin-left: 14px;
    }
  }

  li::before {
    position: absolute;
    display: flex;
    align-self: center;
    content: '';
    border-radius: 50% 50%;
    left: 0;
    width: 18px;
    height: 18px;
    background-image: ${t=>t.theme==="light"?e.light.gradient.dot:e.dark.gradient.dot};

    @media ${e.media.tablet} {
      width: 14px;
      height: 14px;
    }

    @media ${e.media.mobile} {
      align-self: flex-start;
      width: 10px;
      height: 10px;
      margin-top: 2px;
    }
  }
`,o={About:w,AboutBanner:y,AboutBannerList:v,AboutBannerTitle:B,AboutContainer:$,SocialLinksWrapper:A},H=()=>{const{theme:t}=h(),m=b(),{t:r}=x(),p=g(e.media.mobile);return i.jsx(o.About,{id:"about",theme:t,children:i.jsxs(o.AboutContainer,{direction:"column",theme:t,children:[m>p&&i.jsx(u,{color:"white",theme:t,children:r("about.title")}),i.jsxs(o.AboutBanner,{align:"center",direction:"column",justify:"center",theme:t,wrap:"wrap",children:[i.jsxs(o.SocialLinksWrapper,{align:"center",children:[i.jsx(n,{"aria-label":"GitHub page link",href:l.link_github,rel:"noopener",target:"_blank",children:i.jsx(d,{height:"50px",iconId:"gitHub",viewBox:"-90 -60 260 260",width:"50px"})}),i.jsx(n,{"aria-label":"LinkedIn account",href:l.link_linkedin,rel:"noopener",target:"_blank",children:i.jsx(d,{iconId:"linkedIn",viewBox:"-25 -12 158 158",width:"30px"})}),i.jsx(n,{"aria-label":"Telegram link",href:l.link_telegram,rel:"noopener",target:"_blank",children:i.jsx(d,{iconId:"aboutTelegram",viewBox:"-4 0 35 35",width:"46px"})})]}),i.jsxs(s,{align:"flex-start",direction:"column",gap:"10px",wrap:"wrap",children:[i.jsxs(o.AboutBannerTitle,{children:[r("about.title"),":"]}),i.jsxs(o.AboutBannerList,{theme:t,children:[i.jsx("li",{children:r("about.items.item1")}),i.jsx("li",{children:r("about.items.item2")}),i.jsx("li",{children:r("about.items.item3")}),i.jsx("li",{children:r("about.items.item4")}),i.jsx("li",{children:r("about.items.item5")})]})]})]})]})})};export{H as default};
