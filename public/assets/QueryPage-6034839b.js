import{_ as o,x as v,b as p,A as r,u,o as f,c as _,a,l as c,F as h,H as y,p as m,q as b}from"./index-55a8b2d1.js";const x=e=>(m("data-v-95af49c9"),e=e(),b(),e),k={class:"container"},w={class:"form-wrapper"},q={class:"type block"},g=x(()=>a("div",{class:"title"}," 相談タイプ ",-1)),S={class:"radio-wrapper"},I=["checked"],V=["checked"],B=["checked"],N=y('<div class="name block" data-v-95af49c9><div class="title" data-v-95af49c9> 名前 <span data-v-95af49c9>※必須項目</span></div><div class="eng name-wrapper wrapper" data-v-95af49c9><div class="first-name n" data-v-95af49c9><input type="text" placeholder="例）タナカ" required data-v-95af49c9></div><div class="last-name n" data-v-95af49c9><input type="text" placeholder="例）タロウ" required data-v-95af49c9></div></div><div class="jpn name-wrapper wrapper" data-v-95af49c9><div class="first-name n" data-v-95af49c9><input type="text" placeholder="例）田中" required data-v-95af49c9></div><div class="last-name n" data-v-95af49c9><input type="text" placeholder="例）太郎" required data-v-95af49c9></div></div></div><div class="contact block" data-v-95af49c9><div class="title" data-v-95af49c9> 連絡方法 <span data-v-95af49c9>※必須項目</span></div><div class="contact-wrapper wrapper" data-v-95af49c9><div class="first-name n" data-v-95af49c9><input type="text" placeholder="メールアドレス" required data-v-95af49c9></div><div class="last-name n" data-v-95af49c9><input type="text" placeholder="電話番号" data-v-95af49c9></div></div><div class="radio-wrapper" data-v-95af49c9><label data-v-95af49c9><input type="radio" name="expect" value="email" data-v-95af49c9> メール連絡希望 </label><label data-v-95af49c9><input type="radio" name="expect" value="phone" data-v-95af49c9> 電話連絡希望 </label><label data-v-95af49c9><input type="radio" name="expect" value="both" checked data-v-95af49c9> 両方OK </label></div></div><div class="query block" data-v-95af49c9><div class="title" data-v-95af49c9> ご相談内容 </div><div class="query-wrapper wrapper" data-v-95af49c9><textarea class="query-input" name="" cols="60" rows="8" data-v-95af49c9></textarea></div></div><button id="submit" data-v-95af49c9>送信</button>',4),P={__name:"QueryPage",setup(e){const s=v(),t=p("any");r(()=>s.params.mode,(d,n)=>{t.value=d});const l=u(),i=()=>{console.log(l.houseIndex)};return(d,n)=>(f(),_(h,null,[a("button",{onClick:i},"123"),a("div",k,[a("div",w,[a("form",null,[a("div",q,[g,a("div",S,[a("label",null,[a("input",{type:"radio",name:"type",value:"sell",checked:t.value==="sell"},null,8,I),c(" 売買のお問い合わせ ")]),a("label",null,[a("input",{type:"radio",name:"type",value:"rent",checked:t.value==="rent"},null,8,V),c(" 賃貸のお問い合わせ ")]),a("label",null,[a("input",{type:"radio",name:"type",value:"any",checked:t.value==="any"},null,8,B),c(" ただのお問い合わせ ")])])]),N])])])],64))}},C=o(P,[["__scopeId","data-v-95af49c9"]]);export{C as default};
