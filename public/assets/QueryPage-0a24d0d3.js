import{_,s as v,B as m,b as y,o as c,c as q,a as e,w as n,I as u,l as s,v as o,E as f,p as k,q as w}from"./index-5e261fae.js";const d=p=>(k("data-v-de798f24"),p=p(),w(),p),x={class:"container"},V={class:"form-wrapper"},b={class:"type block"},U=d(()=>e("div",{class:"title"}," 相談タイプ ",-1)),h={class:"radio-wrapper"},j={class:"name block"},g=d(()=>e("div",{class:"title"},[s(" 名前 "),e("span",null,"※必須項目")],-1)),I={class:"eng name-wrapper wrapper"},B={class:"first-name n"},M={class:"last-name n"},P={class:"jpn name-wrapper wrapper"},Q={class:"first-name n"},S={class:"last-name n"},E={class:"contact block"},N=d(()=>e("div",{class:"title"},[s(" 連絡方法 "),e("span",null,"※必須項目")],-1)),R={class:"contact-wrapper wrapper"},T={class:"first-name n"},C={class:"last-name n"},D={class:"radio-wrapper"},K={class:"query block"},O=d(()=>e("div",{class:"title"},[s(" ご相談内容 "),e("span",null,"※必須項目")],-1)),$={class:"query-wrapper wrapper"},z={__name:"QueryPage",setup(p){const r=v();m(()=>r.params,i=>{t.value.query_type=i.mode});const t=y({query_type:"any",last_name_kana:"",first_name_kana:"",last_name_kanji:"",first_name_kanji:"",email:"",phone:"",contact_type:"any",query_content:""});return(i,a)=>(c(),q("div",x,[e("div",V,[e("form",null,[e("div",b,[U,e("div",h,[e("label",null,[n(e("input",{type:"radio",name:"type",value:"sell","onUpdate:modelValue":a[0]||(a[0]=l=>t.value.query_type=l)},null,512),[[u,t.value.query_type]]),s(" 売買のお問い合わせ ")]),e("label",null,[n(e("input",{type:"radio",name:"type",value:"rent","onUpdate:modelValue":a[1]||(a[1]=l=>t.value.query_type=l)},null,512),[[u,t.value.query_type]]),s(" 賃貸のお問い合わせ ")]),e("label",null,[n(e("input",{type:"radio",name:"type",value:"any","onUpdate:modelValue":a[2]||(a[2]=l=>t.value.query_type=l)},null,512),[[u,t.value.query_type]]),s(" ただのお問い合わせ ")])])]),e("div",j,[g,e("div",I,[e("div",B,[n(e("input",{type:"text",placeholder:"例）タナカ",required:"","onUpdate:modelValue":a[3]||(a[3]=l=>t.value.last_name_kana=l)},null,512),[[o,t.value.last_name_kana]])]),e("div",M,[n(e("input",{type:"text",placeholder:"例）タロウ",required:"","onUpdate:modelValue":a[4]||(a[4]=l=>t.value.first_name_kana=l)},null,512),[[o,t.value.first_name_kana]])])]),e("div",P,[e("div",Q,[n(e("input",{type:"text",placeholder:"例）田中",required:"","onUpdate:modelValue":a[5]||(a[5]=l=>t.value.last_name_kanji=l)},null,512),[[o,t.value.last_name_kanji]])]),e("div",S,[n(e("input",{type:"text",placeholder:"例）太郎",required:"","onUpdate:modelValue":a[6]||(a[6]=l=>t.value.first_name_kanji=l)},null,512),[[o,t.value.first_name_kanji]])])])]),e("div",E,[N,e("div",R,[e("div",T,[n(e("input",{type:"text",placeholder:"メールアドレス",required:"","onUpdate:modelValue":a[7]||(a[7]=l=>t.value.email=l)},null,512),[[o,t.value.email]])]),e("div",C,[n(e("input",{type:"text",placeholder:"電話番号","onUpdate:modelValue":a[8]||(a[8]=l=>t.value.phone=l)},null,512),[[o,t.value.phone]])])]),e("div",D,[e("label",null,[n(e("input",{type:"radio",name:"expect",value:"email","onUpdate:modelValue":a[9]||(a[9]=l=>t.value.contact_type=l)},null,512),[[u,t.value.contact_type]]),s(" メール連絡希望 ")]),e("label",null,[n(e("input",{type:"radio",name:"expect",value:"phone","onUpdate:modelValue":a[10]||(a[10]=l=>t.value.contact_type=l)},null,512),[[u,t.value.contact_type]]),s(" 電話連絡希望 ")]),e("label",null,[n(e("input",{type:"radio",name:"expect",value:"any","onUpdate:modelValue":a[11]||(a[11]=l=>t.value.contact_type=l)},null,512),[[u,t.value.contact_type]]),s(" 両方OK ")])])]),e("div",K,[O,e("div",$,[n(e("textarea",{class:"query-input",cols:"60",rows:"8",required:"","onUpdate:modelValue":a[12]||(a[12]=l=>t.value.query_content=l)},null,512),[[o,t.value.query_content]])])]),e("button",{id:"submit",onClick:a[13]||(a[13]=f(l=>console.log(t.value),["prevent"]))},"送信")])])]))}},F=_(z,[["__scopeId","data-v-de798f24"]]);export{F as default};
