import{r as b,a as I,d as c,t as n,u as W,j as r}from"./index-DOWGypmr.js";import{H as X}from"./index-Dr0g_MyY.js";import{u as z,e as O}from"./extractNumberFromString-BnXydJJA.js";import{f as v,F as x,u as B}from"./Font-Dov2GHGn.js";import{I as E}from"./Icon-CucjeiWd.js";import{L as P}from"./Link.styled-C8U3_2-G.js";import{C as Y}from"./Container-BxjVWiH9.js";function R(i,e,t,o){return new(t||(t=Promise))(function(s,h){function l(d){try{g(o.next(d))}catch(m){h(m)}}function p(d){try{g(o.throw(d))}catch(m){h(m)}}function g(d){var m;d.done?s(d.value):(m=d.value,m instanceof t?m:new t(function(u){u(m)})).then(l,p)}g((o=o.apply(i,[])).next())})}const L=(i,e,t,o)=>{i.style.transition=`${e} ${t}ms ${o}`},w=(i,e,t)=>Math.min(Math.max(i,e),t);class C{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=l=>{const{width:p,height:g}=l,d=Math.sqrt(Math.pow(p,2)+Math.pow(g,2));return{width:d,height:d}},this.setSize=l=>{const p=this.calculateGlareSize(l);this.glareEl.style.width=`${p.width}px`,this.glareEl.style.height=`${p.height}px`},this.update=(l,p,g,d)=>{this.updateAngle(l,p.glareReverse),this.updateOpacity(l,p,g,d)},this.updateAngle=(l,p)=>{const{xPercentage:g,yPercentage:d}=l,m=180/Math.PI,u=g?Math.atan2(d,-g)*m:0;this.glareAngle=u-(p?180:0)},this.updateOpacity=(l,p,g,d)=>{const{xPercentage:m,yPercentage:u}=l,{glarePosition:A,glareReverse:y,glareMaxOpacity:M}=p,$=g?-1:1,j=d?-1:1,k=y?-1:1;let f=0;switch(A){case"top":f=-m*$*k;break;case"right":f=u*j*k;break;case"bottom":case void 0:f=m*$*k;break;case"left":f=-u*j*k;break;case"all":f=Math.hypot(m,u)}const S=w(f,0,100);this.glareOpacity=S*M/100},this.render=l=>{const{glareColor:p}=l;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${p} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const o={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},s=this.calculateGlareSize(e),h={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${s.width}px`,height:`${s.height}px`};Object.assign(this.glareWrapperEl.style,o),Object.assign(this.glareEl.style,h)}}class D{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:o,yPercentage:s}=e,{tiltMaxAngleX:h,tiltMaxAngleY:l}=t;this.tiltAngleX=o*h/100,this.tiltAngleY=s*l/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:o,tiltAngleYManual:s,tiltMaxAngleX:h,tiltMaxAngleY:l}=t;(o!==null||s!==null)&&(this.tiltAngleX=o!==null?o:0,this.tiltAngleY=s!==null?s:0,e.xPercentage=100*this.tiltAngleX/h,e.yPercentage=100*this.tiltAngleY/l)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=w(this.tiltAngleX,-90,90),this.tiltAngleY=w(this.tiltAngleY,-90,90),t&&(this.tiltAngleX=t==="x"?this.tiltAngleX:0,this.tiltAngleY=t==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:o}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/o*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const H=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class T extends b.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>R(this,void 0,void 0,function*(){if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?(yield e())==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)}),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const o=new CustomEvent("autoreset");this.onMove(o)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:o,tiltAngleYInitial:s,tiltMaxAngleX:h,tiltMaxAngleY:l}=this.props,p=s/l*100;this.wrapperEl.clientPosition.xPercentage=w(o/h*100,-100,100),this.wrapperEl.clientPosition.yPercentage=w(p,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:o}=this.props,s=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=s/o*100,this.wrapperEl.clientPosition.xPercentage=w(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=w(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:o,flipHorizontally:s}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,o,s)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,o;if(e){const{x:s,y:h}=this.wrapperEl.clientPosition;t=h/window.innerHeight*200-100,o=s/window.innerWidth*200-100}else{const{size:{width:s,height:h,left:l,top:p},clientPosition:{x:g,y:d}}=this.wrapperEl;t=(d-p)/h*200-100,o=(g-l)/s*200-100}this.wrapperEl.clientPosition.xPercentage=w(t,-100,100),this.wrapperEl.clientPosition.yPercentage=w(o,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new D,this.initGlare(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new C(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let o=0,s=0;this.glare&&(o=this.glare.glareAngle,s=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:o,glareOpacity:s,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;L(this.wrapperEl.node,"all",e,t),this.glare&&L(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:o}=this.props;return I.createElement("div",{ref:s=>this.wrapperEl.node=s,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:o},e)}}T.defaultProps=H;const F=""+new URL("photo-dark-BHZu_QIS.webp",import.meta.url).href,N=""+new URL("photo-light-C3nTBk7C.webp",import.meta.url).href,V=["WEB DEVELOPER","JS/TS DEVELOPER","REACT DEVELOPER","NEXT.JS DEVELOPER"],J=["WEB РАЗРАБОТЧИК","JS/TS РАЗРАБОТЧИК","REACT РАЗРАБОТЧИК","NEXT.JS РАЗРАБОТЧИК"],_=i=>{const[e,t]=b.useState(0),[o,s]=b.useState(!1),[h,l]=b.useState(""),[p,g]=b.useState(300-Math.random()*100),d=2e3;b.useEffect(()=>{const u=setInterval(()=>{m()},p);return()=>{clearInterval(u)}},[h]);const m=()=>{const u=e%i.length,A=i[u],y=o?A.substring(0,h.length-1):A.substring(0,h.length+1);l(y),o&&g(M=>M/2),!o&&y===A?(s(!0),g(d)):o&&y===""&&(s(!1),t(e+1),g(500))};return h},G=c.section`
  display: flex;
  height: fit-content;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  background-color: ${i=>i.theme==="light"?n.light.color.background.primary:n.dark.color.background.primary};
  color: ${i=>i.theme==="light"?n.light.color.text.primary:n.dark.color.text.primary};
  z-index: 0;
  overflow-x: hidden;
  padding-top: 60px;
  @media ${n.media.mobile} {
    padding-top: 10px;
  }
`,U=c(Y)`
  padding: 0;
  max-height: 1080px;
  @media ${n.media.tablet} {
    width: 100vw;
  }
`,q=c(x)`
  margin: 60px auto;
  position: relative;
  padding: 50px;

  max-width: 1400px;
  width: 90vw;
  min-width: 360px;
  left: 50%;
  flex-wrap: wrap;
  gap: 20px;
  transform: translateX(-50%);
  background: ${i=>i.theme==="light"?n.light.gradient.banner:n.dark.gradient.banner};
  backdrop-filter: blur(10px);
  border: 2px solid
    ${i=>i.theme==="light"?n.light.color.background.bannerBorder:n.dark.color.background.bannerBorder};
  border-radius: 200px 0;
  z-index: 999999;
  @media ${n.media.mobile} {
    border-radius: 112px 0;
    margin: 50px auto;
    min-width: 95vw;
  }
`,Q=c(x)`
  position: absolute;
  width: 9%;
  height: 100vh;
  background-color: ${i=>i.theme==="light"?n.light.color.background.second:n.dark.color.background.second};
  &::after {
    position: absolute;
    content: '';
    width: 300%;
    max-width: 432px;
    height: 100%;
    background-color: ${i=>i.theme==="light"?n.light.color.background.second:n.dark.color.background.second};
    @media ${n.media.tablet} {
      width: 555%;
    }
  }
`,Z=c(x)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 100vh;
  z-index: 1;
  @media ${n.media.tablet} {
    height: 100vh;
  }
  &::before {
    content: '+';
    position: absolute;
    transform: rotate(45deg) translate(-20%, -1%);
    height: 88px;
    width: 88px;
    ${v({fMax:150,fMin:100,lineHeight:1.36,weight:600})}
    color: ${i=>i.theme==="light"?n.light.color.background.second:n.dark.color.background.second};
    z-index: 0;
    @media ${n.media.tablet} {
      top: 7%;
      left: 80%;
      transform: rotate(45deg) translate(-80%, -10%);
    }
    @media ${n.media.mobile} {
      top: 60px;
      left: 80%;
      transform: rotate(45deg) translate(-80%, -8%);
    }
  }

  &::after {
    content: '';
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50% 50%;
    border: 25px solid
      ${i=>i.theme==="light"?n.light.color.background.second:n.dark.color.background.second};
    bottom: 0;
    right: 0;
    z-index: -1;
    @media ${n.media.mobile} {
      height: 100px;
      width: 100px;
      border-width: 15px;
    }
  }
`,K=c.img`
  display: flex;
  max-width: 400px;
  min-width: 250px;
  height: auto;
  border-radius: 50% 50%;
  background-color: ${i=>i.theme==="light"?n.light.color.background.primary:n.dark.color.background.primary};
  border: 15px solid
    ${i=>i.theme==="light"?n.light.color.background.primary:n.dark.color.background.primary};
  object-fit: cover;
`,ee=c.h1`
  ${v({fMax:30,fMin:20,lineHeight:1.68,weight:700})}
  text-shadow: ${i=>i.theme==="light"?n.light.shadow.text:n.dark.shadow.text};
`,te=c.div`
  ${v({fMax:60,fMin:28,family:"Montserrat",lineHeight:1,weight:700})}
  text-shadow: ${i=>i.theme==="light"?n.light.shadow.text:n.dark.shadow.text};
  text-align: end;
`,ie=c(x)`
  min-width: 376px;
  gap: 20px;
  @media ${n.media.tablet} {
    gap: 15px;
  }
  @media ${n.media.mobile} {
    min-width: 210px;
    gap: 10px;
  }
`,ne=c.p`
  text-align: left;
  ${v({fMax:20,fMin:11,lineHeight:1.5,weight:400})}
`,re=c(x)`
  gap: 26px;
  @media ${n.media.mobile} {
    gap: 16px;
  }
`,oe=c(P)`
  ${v({fMax:18,fMin:12,lineHeight:1.5,weight:600})}
  max-width: 200px;
  min-height: 54px;
  border-radius: 12px;
  padding: 5px 30px;
  @media ${n.media.tablet} {
    min-width: 132px;
    min-height: 40px;
    border-radius: 10px;
    padding: 0px 10px;
  }
`,ae=c(P)`
  ${v({fMax:18,fMin:12,lineHeight:1.5,weight:600})}
  @media ${n.media.mobile} {
    margin-left: 10px;
  }
`,se=c(x)`
  height: 30px;
  width: 30px;
  align-items: center;
`,le=c(x)`
  width: 30%;
  z-index: 0;
  background-color: ${i=>i.theme==="light"?n.light.color.background.second:n.dark.color.background.second};
  @media ${n.media.tablet} {
    width: 0;
  }
`,pe=c(x)`
  width: 70%;
  padding-left: 32px;
  z-index: 10;
  @media ${n.media.tablet} {
    width: 100%;
    padding-left: 0;
  }
  @media ${n.media.mobile} {
    width: 100%;
  }
`,he=c(x)`
  bottom: 0;
  margin-right: auto;
  z-index: 0;
`,de=c.div`
  position: relative;
  min-width: 160px;
  min-height: 90px;
  margin: 80px 0;
  &::before {
    position: absolute;
    content: '';
    display: flex;
    flex-direction: column;
    min-width: 160px;
    min-height: 90px;
    border-radius: 24px;
    outline: 1px solid
      ${i=>i.theme==="light"?n.light.color.background.primary:n.dark.color.background.primary};
    background-color: ${i=>i.theme==="light"?n.light.color.background.second:n.dark.color.background.second};

    @media ${n.media.tablet} {
      margin-bottom: 0;
      min-width: 270px;
      min-height: 152px;
    }

    @media ${n.media.mobile} {
      margin-bottom: 0;
      min-width: 146px;
      min-height: 82px;
    }
  }
  @media ${n.media.tablet} {
    margin-bottom: 0;
    min-width: 270px;
    min-height: 152px;
  }

  @media ${n.media.mobile} {
    margin-bottom: 0;
    min-width: 146px;
    min-height: 82px;
  }
`,ce=c.div`
  position: absolute;
  border: 10px solid
    ${i=>i.theme==="light"?n.light.color.background.primary:n.dark.color.background.primary};
  border-radius: 50%;
  left: 50%;
  top: -50%;
  transform: translate(-50%, 10%);
  background-color: black;
  overflow: hidden;
  width: 75px;
  height: 75px;

  @media ${n.media.tablet} {
    border: 16px solid
      ${i=>i.theme==="light"?n.light.color.background.primary:n.dark.color.background.primary};
    width: 125px;
    height: 125px;
  }

  @media ${n.media.mobile} {
    border: 9px solid
      ${i=>i.theme==="light"?n.light.color.background.primary:n.dark.color.background.primary};
    width: 72px;
    height: 72px;
  }
`,ge=c.span`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  color: ${n.light.color.text.second};
  font-size: 20px;
  font-weight: 600;
  line-height: 80%;
  @media ${n.media.tablet} {
    font-size: 30px;
  }

  @media ${n.media.mobile} {
    font-size: 18px;
  }
`,a={App:de,AppIconWrapper:ce,AppText:ge,AppsLeft:le,AppsRight:pe,AppsWrapper:he,ArrowIconWrapper:se,BannerDescription:ne,BannerLeft:Q,BannerLinksWrapper:re,BannerPhoto:K,BannerRight:Z,BannerTitleMain:ee,BannerTitleSecond:te,BannerTitleWrapper:ie,BannerWrapper:q,Main:G,MainContainer:U,ProjectsLink:oe,ResumeLink:ae},ve=()=>{const{theme:i}=W(),{i18n:{language:e},t}=B(),o=z(),s=O(n.media.tablet),h=_(e==="en"?V:J),[l,p]=b.useState(!0);return b.useEffect(()=>{setTimeout(()=>{p(!1)},5e3)},[]),r.jsxs(a.Main,{id:"main",theme:i,children:[r.jsxs(a.MainContainer,{children:[r.jsx(a.BannerLeft,{theme:i}),r.jsx(a.BannerRight,{justify:"center",theme:i,children:r.jsx(T,{perspective:4e3,tiltEnable:o>=s,transitionSpeed:800,children:r.jsxs(a.BannerWrapper,{align:"center",justify:"center",theme:i,children:[r.jsx(x,{align:"center",justify:"center",width:"49%",children:r.jsx(a.BannerPhoto,{alt:"Photography",src:i==="light"?N:F,theme:i})}),r.jsxs(a.BannerTitleWrapper,{direction:"column",width:"47%",children:[r.jsxs(x,{align:"start",direction:"column",justify:"center",children:[r.jsxs(a.BannerTitleSecond,{theme:i,children:[t("main.title_hi"),r.jsx(P,{href:"#contact",children:t("main.title_name")})]}),r.jsxs(a.BannerTitleMain,{"aria-label":"Web Developer",theme:i,children:[h," "]})]}),r.jsx(a.BannerDescription,{children:t("main.title_description")}),r.jsxs(a.BannerLinksWrapper,{align:"center",justify:"start",wrap:"wrap",children:[r.jsxs(a.ProjectsLink,{color:n.light.color.text.second,href:"#projects",type:"button",children:[t("main.projects_button"),r.jsx(a.ArrowIconWrapper,{children:r.jsx(E,{iconId:"arrowRight",viewBox:"-8 -5 37 35"})})]}),r.jsx(a.ResumeLink,{download:!0,href:`./cv/cv-${e}-${i}.pdf`,children:t("main.download_button")})]})]})]})})})]}),r.jsxs(a.MainContainer,{children:[r.jsx(a.AppsLeft,{theme:i}),r.jsx(a.AppsRight,{direction:"column",justify:"end",children:r.jsxs(a.AppsWrapper,{gap:"12px",justify:"center",wrap:"wrap",children:[l&&r.jsx(X,{delay:3e3,duration:2e3,triggerOnce:!0,children:r.jsxs(a.App,{theme:i,children:[r.jsx(a.AppIconWrapper,{theme:i,children:r.jsx(E,{height:"100%",iconId:"javaScript",viewBox:"-26 -28 180 180",width:"100%"})}),r.jsx(a.AppText,{children:"JavaScript"})]})}),r.jsxs(a.App,{theme:i,children:[r.jsx(a.AppIconWrapper,{theme:i,children:r.jsx(E,{height:"100%",iconId:"typeScript",viewBox:"-26 -28 180 180",width:"100%"})}),r.jsx(a.AppText,{children:"TypeScript"})]}),r.jsxs(a.App,{theme:i,children:[r.jsx(a.AppIconWrapper,{theme:i,children:r.jsx(E,{height:"100%",iconId:"react",viewBox:"-10 -12 150 150",width:"100%"})}),r.jsx(a.AppText,{children:"React"})]}),r.jsxs(a.App,{theme:i,children:[r.jsx(a.AppIconWrapper,{theme:i,children:r.jsx(E,{height:"100%",iconId:"redux",viewBox:"-18 -11 165 165",width:"100%"})}),r.jsx(a.AppText,{children:"Redux"})]}),r.jsxs(a.App,{theme:i,children:[r.jsx(a.AppIconWrapper,{theme:i,children:r.jsx(E,{height:"100%",iconId:"styled",viewBox:"2 -0 30 30",width:"100%"})}),r.jsx(a.AppText,{children:"Styled Components"})]})]})})]})]})};export{ve as default};
