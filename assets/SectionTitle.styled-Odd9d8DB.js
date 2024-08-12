import{d as o,t}from"./index-CDS9cnmU.js";import{f as r}from"./Font-DNYRbic6.js";const l=o.h2`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  color: ${e=>e.color||(i=>i.theme==="light"?t.light.color.text.primary:t.dark.color.text.primary)};
  ${r({fMax:32,fMin:20,lineHeight:1.36,weight:600})}
  &::before {
    position: absolute;
    content: '';
    border-radius: 50% 50%;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: ${e=>e.theme==="light"?t.light.gradient.dot:t.dark.gradient.dot};
    @media ${t.media.tablet} {
      width: 16px;
      height: 16px;
    }

    @media ${t.media.mobile} {
      width: 12px;
      height: 12px;
    }
  }
`;export{l as S};
