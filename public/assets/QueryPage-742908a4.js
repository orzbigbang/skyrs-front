import{_ as h,B as w,K as q,k as _,D as x,C as b,o as V,b as U,d as e,t as g,p as l,v as n,L as d,f as o,w as j,z as Q,A as S}from"./index-b832f491.js";const p=u=>(Q("data-v-f544879a"),u=u(),S(),u),I={class:"container"},B={class:"form-wrapper"},T={class:"type block"},C={class:"title"},D={class:"name block"},M=p(()=>e("div",{class:"title"},[o(" 名前 "),e("span",null,"※必須項目")],-1)),P={class:"eng name-wrapper wrapper"},K={class:"first-name n"},N={class:"last-name n"},R={class:"jpn name-wrapper wrapper"},z={class:"first-name n"},A={class:"last-name n"},E={class:"contact block"},H=p(()=>e("div",{class:"title"},[o(" 連絡方法 "),e("span",null,"※必須項目")],-1)),L={class:"contact-wrapper wrapper"},O={class:"first-name n"},F={class:"last-name n"},G={class:"radio-wrapper"},J={class:"query block"},W=p(()=>e("div",{class:"title"},[o(" お問い合わせ内容 "),e("span",null,"※必須項目")],-1)),X={class:"query-wrapper wrapper"},Y=["onClick"],Z={__name:"QueryPage",setup(u){const c=w(),v=q(),r=_(""),m=i=>{switch(i){case"sell":r.value="売買のお問い合わせ";break;case"rent":r.value="賃貸のお問い合わせ";break;case"any":r.value="お住まいの相談";break}},t=_({query_type:"any",last_name_kana:"",first_name_kana:"",last_name_kanji:"",first_name_kanji:"",email:"",phone:"",contact_type:"any",query_content:""});x(()=>c.params,i=>{m(i.mode),t.value.query_type=i.mode},{immediate:!0});const y=b(),k={},f=()=>{v.postQuery(k,y)};return(i,a)=>(V(),U("div",I,[e("div",B,[e("form",null,[e("div",T,[e("div",C,g(r.value),1)]),e("div",D,[M,e("div",P,[e("div",K,[l(e("input",{type:"text",placeholder:"例）タナカ",required:"","onUpdate:modelValue":a[0]||(a[0]=s=>t.value.last_name_kana=s)},null,512),[[n,t.value.last_name_kana]])]),e("div",N,[l(e("input",{type:"text",placeholder:"例）タロウ",required:"","onUpdate:modelValue":a[1]||(a[1]=s=>t.value.first_name_kana=s)},null,512),[[n,t.value.first_name_kana]])])]),e("div",R,[e("div",z,[l(e("input",{type:"text",placeholder:"例）田中",required:"","onUpdate:modelValue":a[2]||(a[2]=s=>t.value.last_name_kanji=s)},null,512),[[n,t.value.last_name_kanji]])]),e("div",A,[l(e("input",{type:"text",placeholder:"例）太郎",required:"","onUpdate:modelValue":a[3]||(a[3]=s=>t.value.first_name_kanji=s)},null,512),[[n,t.value.first_name_kanji]])])])]),e("div",E,[H,e("div",L,[e("div",O,[l(e("input",{type:"text",placeholder:"メールアドレス",required:"","onUpdate:modelValue":a[4]||(a[4]=s=>t.value.email=s)},null,512),[[n,t.value.email]])]),e("div",F,[l(e("input",{type:"text",placeholder:"電話番号","onUpdate:modelValue":a[5]||(a[5]=s=>t.value.phone=s)},null,512),[[n,t.value.phone]])])]),e("div",G,[e("label",null,[l(e("input",{type:"radio",name:"expect",value:"email","onUpdate:modelValue":a[6]||(a[6]=s=>t.value.contact_type=s)},null,512),[[d,t.value.contact_type]]),o(" メール連絡希望 ")]),e("label",null,[l(e("input",{type:"radio",name:"expect",value:"phone","onUpdate:modelValue":a[7]||(a[7]=s=>t.value.contact_type=s)},null,512),[[d,t.value.contact_type]]),o(" 電話連絡希望 ")]),e("label",null,[l(e("input",{type:"radio",name:"expect",value:"any","onUpdate:modelValue":a[8]||(a[8]=s=>t.value.contact_type=s)},null,512),[[d,t.value.contact_type]]),o(" 両方OK ")])])]),e("div",J,[W,e("div",X,[l(e("textarea",{class:"query-input",cols:"60",rows:"8",required:"","onUpdate:modelValue":a[9]||(a[9]=s=>t.value.query_content=s)},null,512),[[n,t.value.query_content]])])]),e("button",{id:"submit",onClick:j(f,["prevent"])},"送信",8,Y)])])]))}},ee=h(Z,[["__scopeId","data-v-f544879a"]]);export{ee as default};
