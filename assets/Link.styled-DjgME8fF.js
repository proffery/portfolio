import{d as a,t,l as d}from"./index-DEOBjSkE.js";const l=a.a`
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  color: ${e=>e.color||(e.theme==="light"?t.light.color.text.link:t.dark.color.text.link)};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-shadow: ${e=>e.theme==="light"?t.light.shadow.text:t.dark.shadow.text};
  }
  ${e=>e.type==="button"&&d`
      border-radius: ${o=>o.borderRadius||"0px"};
      padding: ${o=>o.padding||"0px"};
      background-color: ${o=>o.background||(r=>r.theme==="light"?t.light.color.text.link:t.dark.color.text.link)};
      &:hover {
        box-shadow: ${o=>o.theme==="light"?t.light.shadow.card:t.dark.shadow.card};
      }
    `}
`;export{l as L};
