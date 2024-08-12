import{d as c,t,r as $,u as L,j as r,c as h}from"./index-CDS9cnmU.js";import{Z as P}from"./index-D37VuEst.js";import{C as W}from"./Container-Dk_IoGNN.js";import{f as w,F as m,u as H}from"./Font-DNYRbic6.js";import{S as R}from"./SectionTitle.styled-Odd9d8DB.js";import{I as p}from"./Icon-DjdeZnVn.js";import{L as g}from"./Link.styled-BmmvXbph.js";import{B as E}from"./Button.styled-2TzD0nNA.js";class k{constructor(i=0,o="Network Error"){this.status=i,this.text=o}}const M=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,i)=>Promise.resolve(localStorage.setItem(e,i)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},l={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:M()},v=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},V=(e,i="https://api.emailjs.com")=>{if(!e)return;const o=v(e);l.publicKey=o.publicKey,l.blockHeadless=o.blockHeadless,l.storageProvider=o.storageProvider,l.blockList=o.blockList,l.limitRate=o.limitRate,l.origin=o.origin||i},T=async(e,i,o={})=>{const a=await fetch(l.origin+e,{method:"POST",headers:o,body:i}),s=await a.text(),d=new k(a.status,s);if(a.ok)return d;throw d},C=(e,i,o)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!i||typeof i!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},D=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},F=e=>e.webdriver||!e.languages||e.languages.length===0,_=()=>new k(451,"Unavailable For Headless Browser"),K=(e,i)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof i!="string")throw"The BlockList watchVariable has to be a string"},q=e=>{var i;return!((i=e.list)!=null&&i.length)||!e.watchVariable},z=(e,i)=>e instanceof FormData?e.get(i):e[i],I=(e,i)=>{if(q(e))return!1;K(e.list,e.watchVariable);const o=z(i,e.watchVariable);return typeof o!="string"?!1:e.list.includes(o)},S=()=>new k(403,"Forbidden"),O=(e,i)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(i&&typeof i!="string")throw"The LimitRate ID has to be a non-empty string"},J=async(e,i,o)=>{const a=Number(await o.get(e)||0);return i-Date.now()+a},A=async(e,i,o)=>{if(!i.throttle||!o)return!1;O(i.throttle,i.id);const a=i.id||e;return await J(a,i.throttle,o)>0?!0:(await o.set(a,Date.now().toString()),!1)},B=()=>new k(429,"Too Many Requests"),N=async(e,i,o,a)=>{const s=v(a),d=s.publicKey||l.publicKey,f=s.blockHeadless||l.blockHeadless,u=s.storageProvider||l.storageProvider,x={...l.blockList,...s.blockList},j={...l.limitRate,...s.limitRate};return f&&F(navigator)?Promise.reject(_()):(C(d,e,i),D(o),o&&I(x,o)?Promise.reject(S()):await A(location.pathname,j,u)?Promise.reject(B()):T("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:d,service_id:e,template_id:i,template_params:o}),{"Content-type":"application/json"}))},Z=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},G=e=>typeof e=="string"?document.querySelector(e):e,U=async(e,i,o,a)=>{const s=v(a),d=s.publicKey||l.publicKey,f=s.blockHeadless||l.blockHeadless,u=l.storageProvider||s.storageProvider,x={...l.blockList,...s.blockList},j={...l.limitRate,...s.limitRate};if(f&&F(navigator))return Promise.reject(_());const y=G(o);C(d,e,i),Z(y);const b=new FormData(y);return I(x,b)?Promise.reject(S()):await A(location.pathname,j,u)?Promise.reject(B()):(b.append("lib_version","4.4.1"),b.append("service_id",e),b.append("template_id",i),b.append("user_id",d),T("/api/v1.0/email/send-form",b))},Y={init:V,send:N,sendForm:U,EmailJSResponseStatus:k},Q=c.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme==="light"?t.light.color.background.primary:t.dark.color.background.primary};
  gap: 20px;
  @media ${t.media.mobile} {
    padding-top: 60px 0;
  }
`,X=c(m)`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 53px 82px;
  background-color: ${e=>e.theme==="light"?t.light.color.background.form:t.dark.color.background.form};
  box-shadow: ${e=>e.theme==="light"?t.light.shadow.main:t.dark.shadow.main};
  max-width: 932px;
  min-width: 300px;
  @media ${t.media.tablet} {
    box-shadow: none;
    padding: 0;
  }
`,ee=c(m)`
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  @media ${t.media.tablet} {
    gap: 0;
  }
`,te=c.form`
  display: flex;
  align-items: center;
  min-width: 200px;
  width: 58%;
  textarea {
    width: 100%;
    height: 152px;
    padding: 10px 18px;
    &::placeholder {
      padding: 0;
    }
    &:focus {
      padding: 10px 18px;
    }
    @media ${t.media.mobile} {
      height: 92px;
    }
  }
  @media ${t.media.tablet} {
    box-shadow: ${e=>e.theme==="light"?t.light.shadow.main:t.dark.shadow.main};
    padding: 53px 82px;
    width: 100%;
  }
  @media ${t.media.mobile} {
    padding: 32px 50px;
  }
`,ie=c.h3`
  display: flex;
  align-self: flex-start;
  ${w({fMax:36,fMin:22,lineHeight:1.36,weight:500})}

  color: ${e=>e.theme==="light"?t.light.color.text.primary:t.dark.color.text.primary};
`,re=c.input`
  display: flex;
  width: 50%;
  ${w({fMax:13,fMin:10,lineHeight:1.36,weight:400})}

  padding: 0 18px;
  color: ${e=>e.theme==="light"?t.light.color.text.placeholder:t.dark.color.text.placeholder};
  background-color: ${e=>e.theme==="light"?t.light.color.background.input:t.dark.color.background.input};
  border-radius: 9px;
  height: 36px;
  border: none;

  &::placeholder {
    color: ${e=>e.theme==="light"?t.light.color.text.placeholder:t.dark.color.text.placeholder};
  }

  &:focus-visible {
    outline: 1px solid
      ${e=>e.theme==="light"?t.light.color.text.placeholder:t.dark.color.text.placeholder};
  }

  @media ${t.media.mobile} {
    height: 28px;
    border-radius: 6px;
  }
`,oe=c.textarea`
  display: flex;
  width: 50%;
  ${w({fMax:13,fMin:10,lineHeight:1.36,weight:400})}

  padding: 0 18px;
  color: ${e=>e.theme==="light"?t.light.color.text.placeholder:t.dark.color.text.placeholder};
  background-color: ${e=>e.theme==="light"?t.light.color.background.input:t.dark.color.background.input};
  border-radius: 9px;
  height: 36px;
  resize: none;
  border: none;

  &::placeholder {
    color: ${e=>e.theme==="light"?t.light.color.text.placeholder:t.dark.color.text.placeholder};
  }

  &:focus-visible {
    outline: 1px solid
      ${e=>e.theme==="light"?t.light.color.text.placeholder:t.dark.color.text.placeholder};
  }

  @media ${t.media.mobile} {
    height: 22px;
    border-radius: 6px;
  }
`,ae=c(E)`
  width: 118px;
  height: 44px;
  border-radius: 9px;
  background-color: ${e=>e.theme==="light"?t.light.color.text.link:t.dark.color.text.link};
  ${w({fMax:16,fMin:10,lineHeight:1.36,weight:500})}

  @media ${t.media.tablet} {
    min-width: 92px;
    width: 92px;
    height: 36px;
    border-radius: 5.5px;
  }

  @media ${t.media.mobile} {
    min-width: 72px;
    width: 72px;
    height: 26px;
  }
`,ne=c(m)`
  width: 28%;
  @media ${t.media.tablet} {
    box-shadow: ${e=>e.theme==="light"?t.light.shadow.main:t.dark.shadow.main};
    padding: 50px;
    width: 100%;
  }
`,le=c(m)`
  color: ${e=>e.theme==="light"?t.light.color.text.link:t.dark.color.text.link};
`,se=c.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 136%;
  color: ${e=>e.theme==="light"?t.light.color.text.primary:t.dark.color.text.primary};

  @media ${t.media.tablet} {
    font-size: 20px;
  }

  @media ${t.media.mobile} {
    font-size: 18px;
  }
`,ce=c(m)`
  height: 38px;
  width: 38px;
  @media ${t.media.tablet} {
    width: 72px;
    height: 72px;
  }
  @media ${t.media.mobile} {
    width: 44px;
    height: 44px;
  }
`,de=c.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 136%;
  color: ${e=>e.theme==="light"?t.light.color.text.placeholder:t.dark.color.text.placeholder};
  @media ${t.media.tablet} {
    font-size: 20px;
  }
  @media ${t.media.mobile} {
    font-size: 14px;
  }
`,he=c(m)`
  ${g} {
    color: ${e=>e.theme==="light"?t.light.color.background.primary:t.dark.color.background.primary};
  }
  margin-top: 65px;
  @media ${t.media.tablet} {
    margin-top: 43px;
  }
  @media ${t.media.mobile} {
    margin-top: 75px;
  }
`,me=c(m)`
  height: 200px;
  position: fixed;
  left: 0;
  top: 70%;
  ${g} {
    color: ${e=>e.theme==="light"?t.light.color.text.second:t.dark.color.text.primary};
  }
  background-color: ${e=>e.theme==="light"?t.light.color.background.second:t.dark.color.background.second};
  border-radius: 0 25px 25px 0;
  border: 2px solid
    ${e=>e.theme==="light"?t.light.color.background.bannerBorder:t.dark.color.background.bannerBorder};
  border-left: none;
  z-index: 200;
  @media ${t.media.tablet} {
    display: none;
  }
`,n={AddDescription:de,AddIconWrapper:ce,AddTitle:se,Contact:Q,ContactForm:te,ContactFormField:re,ContactFormSubmitButton:ae,ContactFormTextarea:oe,ContactFormTitle:ie,ContactFormWrapper:ee,ContactWrapper:X,ContactsAddWrapper:le,ContactsAddsWrapper:ne,FixedSocialIconsWrapper:me,SocialIconsWrapper:he},je=()=>{const e=$.useRef(null),{theme:i}=L(),{i18n:{language:o},t:a}=H(),[s,d]=$.useState(a("contacts.form.send_button"));$.useEffect(()=>{d(a("contacts.form.send_button"))},[o]);const f=u=>{u.preventDefault(),e.current&&Y.sendForm(h.emailJs.serviceID,h.emailJs.templateID,e.current,h.emailJs.API_KEY).then(x=>{console.log(x.text),d(a("contacts.form.sent_button")),setTimeout(()=>{u.target.reset(),d(a("contacts.form.send_button"))},2e3)},x=>{console.log(x.text),d("Error!")})};return r.jsx(n.Contact,{id:"contact",theme:i,children:r.jsxs(W,{align:"center",direction:"column",justify:"center",children:[r.jsx(R,{theme:i,children:a("contacts.title")}),r.jsx(n.ContactWrapper,{direction:"column",theme:i,children:r.jsxs(n.ContactFormWrapper,{align:"start",children:[r.jsx(n.ContactForm,{onSubmit:f,ref:e,children:r.jsxs(m,{align:"center",direction:"column",gap:"30px",justify:"center",width:"100%",children:[r.jsx(n.ContactFormTitle,{theme:i,children:a("contacts.form.title")}),r.jsxs(m,{gap:"10px",width:"100%",children:[r.jsx(n.ContactFormField,{"aria-label":"enter name",name:"user_name",placeholder:a("contacts.form.name"),required:!0,theme:i,type:"text"}),r.jsx(n.ContactFormField,{"aria-label":"enter email",name:"user_email",placeholder:a("contacts.form.email"),required:!0,theme:i,type:"email"})]}),r.jsx(n.ContactFormTextarea,{"aria-label":"enter your message",name:"message",placeholder:a("contacts.form.message"),required:!0,theme:i}),r.jsx(n.ContactFormSubmitButton,{color:"white",hover_background:"none",type:"submit",children:s})]})}),r.jsx(n.ContactsAddsWrapper,{align:"start",direction:"column",gap:"30px",height:"100%",width:"100%",children:r.jsxs(P,{cascade:!0,triggerOnce:!0,children:[r.jsxs(n.ContactsAddWrapper,{align:"center",theme:i,children:[r.jsx(n.AddIconWrapper,{children:r.jsx(p,{height:"100%",iconId:"location",viewBox:"94 405 47 47",width:"100%"})}),r.jsxs(m,{align:"left",direction:"column",children:[r.jsx(n.AddTitle,{theme:i,children:a("contacts.description.location")}),r.jsx(n.AddDescription,{theme:i,children:o==="en"?h.countryEn:h.countryRu})]})]}),r.jsxs(n.ContactsAddWrapper,{align:"center",theme:i,children:[r.jsx(n.AddIconWrapper,{children:r.jsx(p,{height:"100%",iconId:"phone",viewBox:"-3 -6 34 34",width:"100%"})}),r.jsxs(m,{align:"left",direction:"column",children:[r.jsx(n.AddTitle,{theme:i,children:a("contacts.description.phone")}),r.jsx(n.AddDescription,{theme:i,children:h.phone})]})]}),r.jsxs(n.ContactsAddWrapper,{align:"center",theme:i,children:[r.jsx(n.AddIconWrapper,{children:r.jsx(p,{height:"100%",iconId:"email",viewBox:"-3 -4 31 31",width:"100%"})}),r.jsxs(m,{align:"left",direction:"column",children:[r.jsx(n.AddTitle,{theme:i,children:a("contacts.description.email")}),r.jsx(n.AddDescription,{theme:i,children:h.email})]})]})]})})]})}),r.jsxs(n.SocialIconsWrapper,{theme:i,children:[r.jsx(g,{"aria-label":"Instagram link",href:h.link_instagram,rel:"noopener",target:"_blank",children:r.jsx(p,{height:"50px",iconId:"instagramColor",viewBox:"0 0 55 55"})}),r.jsx(g,{"aria-label":"WhatsApp link",href:h.link_whatsapp,rel:"noopener",target:"_blank",children:r.jsx(p,{height:"50px",iconId:"whatsappColor",viewBox:"-4 -3 59 59"})}),r.jsx(g,{"aria-label":"Viber link",href:h.link_viber,rel:"noopener",target:"_blank",children:r.jsx(p,{height:"50px",iconId:"viberColor",viewBox:"-100 -100 900 900"})})]}),r.jsxs(n.FixedSocialIconsWrapper,{align:"center",direction:"column",justify:"center",theme:i,children:[r.jsx(g,{"aria-label":"GitHub profile link",href:h.link_github,rel:"noopener",target:"_blank",children:r.jsx(p,{height:"50px",iconId:"gitHub",viewBox:"-35 -27 210 210",width:"50px"})}),r.jsx(g,{"aria-label":"LinkedIn account",href:h.link_linkedin,rel:"noopener",target:"_blank",children:r.jsx(p,{height:"50px",iconId:"linkedIn",viewBox:"-37 -59 220 220",width:"50px"})}),r.jsx(g,{"aria-label":"Telegram link",href:h.link_telegram,rel:"noopener",target:"_blank",children:r.jsx(p,{height:"50px",iconId:"aboutTelegram",viewBox:"0 -5 33 33",width:"50px"})})]})]})})};export{je as default};
