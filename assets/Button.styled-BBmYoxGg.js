import{d as t,t as r}from"./index-De8iRDRw.js";const a=t.button`
  background-color: ${o=>o.background||(d=>d.theme==="light"?r.light.color.background.primary:r.dark.color.background.primary)};
  color: ${o=>o.color||(d=>d.theme==="light"?r.light.color.text.primary:r.dark.color.text.primary)};
  border-radius: ${o=>o.border_radius||"100px"};
  padding: ${o=>o.padding||"0px"};
  border-color: ${o=>o.border_color||(d=>d.theme==="light"?r.light.color.background.second:r.dark.color.background.second)};
  border-width: ${o=>o.border_width||"0px"};
  border-style: ${o=>o.border_style||"none"};
  min-width: ${o=>o.min_width||"100px"};
  cursor: pointer;
  transition: all ease-in 0.2s;
  &:hover {
    box-shadow: ${o=>o.hover_shadow||(d=>d.theme==="light"?r.light.shadow.card:r.dark.shadow.card)};
    background-color: ${o=>o.hover_background||(d=>d.theme==="light"?r.light.color.background.second:r.dark.color.background.second)};
    color: ${o=>o.hover_color||(d=>d.theme==="light"?r.light.color.text.primary:r.dark.color.text.primary)};
  }
`;export{a as B};
