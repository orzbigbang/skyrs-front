import{_ as z,c as T,o,b as n,d as e,t as u,p as v,v as q,L,f as m,w as se,z as te,A as ae,j as le,N as oe,k as d,M as ne,m as ie,B as re,O as ue,P as ce,C as de,r as fe,g as b,E as H,e as h,n as Z,F as $,x as D,Q as ee,G as me,R as ye,h as he,s as ve,J as pe}from"./index-b832f491.js";import{M as X}from"./HouseCard.vue_vue_type_style_index_0_scoped_97b7a20f_lang-4743ec9f.js";const ke={class:"kv"},be={class:"key"},ge={class:"value"},we={class:"highlight1 fc"},xe={class:"highlight2"},$e={__name:"KeyValue",props:{highlight:Object},setup(c){const f=c,a=T(()=>Object.values(f.highlight._value)[0]),i=T(()=>Object.values(f.highlight._value)[1]);return(t,_)=>(o(),n("div",ke,[e("div",be,u(f.highlight._key),1),e("div",ge,[e("span",we,u(a.value),1),e("span",xe,u(i.value?"/"+i.value:""),1)])]))}},De=z($e,[["__scopeId","data-v-22efe585"]]);const je={class:"kv-wrapper"},qe={class:"key"},Ie={class:"value"},Le={__name:"KeyValue1",props:{base:Object},setup(c){const f=c,a=T(()=>{let i="";for(let t in f.base._value)i===""?i=f.base._value[t]:i+=" / "+f.base._value[t];return i});return(i,t)=>(o(),n("div",je,[e("div",qe,u(f.base._key),1),e("div",Ie,u(a.value),1)]))}},Ke=z(Le,[["__scopeId","data-v-b9f8f519"]]);const G=c=>(te("data-v-07beaee2"),c=c(),ae(),c),Te={class:"form-wrapper"},Se={class:"type block"},Ve={class:"title"},Oe={class:"name block"},Ue=G(()=>e("div",{class:"title"},[m(" 名前 "),e("span",null,"※必須項目")],-1)),Ce={class:"content-wrapper"},Pe={class:"eng name-wrapper wrapper"},Me={class:"first-name n"},Ee={class:"last-name n"},Re={class:"jpn name-wrapper wrapper"},Be={class:"first-name n"},He={class:"last-name n"},Qe={class:"contact block"},ze=G(()=>e("div",{class:"title"},[m(" 連絡方法 "),e("span",null,"※必須項目")],-1)),Ne={class:"content-wrapper"},Ae={class:"contact-wrapper wrapper"},Fe={class:"first-name n"},Je={class:"last-name n"},Xe={class:"radio-wrapper"},Ge={class:"query block"},We=G(()=>e("div",{class:"title"},[m(" ご相談内容 "),e("span",null,"※必須項目")],-1)),Ye={class:"query-wrapper wrapper content-wrapper"},Ze={__name:"HouseQuery",props:["queryType","queryTypeStr"],setup(c){const f=c,a={query_type:f.queryType,last_name_kana:"",first_name_kana:"",last_name_kanji:"",first_name_kanji:"",email:"",phone:"",contact_type:"any",query_content:""};return(i,t)=>(o(),n("div",Te,[e("form",null,[e("div",Se,[e("div",Ve,u(f.queryTypeStr),1)]),e("div",Oe,[Ue,e("div",Ce,[e("div",Pe,[e("div",Me,[v(e("input",{type:"text",placeholder:"例）タナカ","onUpdate:modelValue":t[0]||(t[0]=_=>a.last_name_kana=_),required:""},null,512),[[q,a.last_name_kana]])]),e("div",Ee,[v(e("input",{type:"text",placeholder:"例）タロウ","onUpdate:modelValue":t[1]||(t[1]=_=>a.first_name_kana=_),required:""},null,512),[[q,a.first_name_kana]])])]),e("div",Re,[e("div",Be,[v(e("input",{type:"text",placeholder:"例）田中","onUpdate:modelValue":t[2]||(t[2]=_=>a.last_name_kanji=_),required:""},null,512),[[q,a.last_name_kanji]])]),e("div",He,[v(e("input",{type:"text",placeholder:"例）太郎","onUpdate:modelValue":t[3]||(t[3]=_=>a.first_name_kanji=_),required:""},null,512),[[q,a.first_name_kanji]])])])])]),e("div",Qe,[ze,e("div",Ne,[e("div",Ae,[e("div",Fe,[v(e("input",{type:"text",placeholder:"メールアドレス","onUpdate:modelValue":t[4]||(t[4]=_=>a.email=_),required:""},null,512),[[q,a.email]])]),e("div",Je,[v(e("input",{type:"text",placeholder:"電話番号","onUpdate:modelValue":t[5]||(t[5]=_=>a.phone=_)},null,512),[[q,a.phone]])])]),e("div",Xe,[e("label",null,[v(e("input",{type:"radio",name:"expect",value:"email","onUpdate:modelValue":t[6]||(t[6]=_=>a.contact_type=_)},null,512),[[L,a.contact_type]]),m(" メール連絡希望 ")]),e("label",null,[v(e("input",{type:"radio",name:"expect",value:"phone","onUpdate:modelValue":t[7]||(t[7]=_=>a.contact_type=_)},null,512),[[L,a.contact_type]]),m(" 電話連絡希望 ")]),e("label",null,[v(e("input",{type:"radio",name:"expect",value:"any","onUpdate:modelValue":t[8]||(t[8]=_=>a.contact_type=_)},null,512),[[L,a.contact_type]]),m(" 両方OK ")])])])]),e("div",Ge,[We,e("div",Ye,[v(e("textarea",{class:"query-input",name:"",cols:"60",rows:"8","onUpdate:modelValue":t[9]||(t[9]=_=>a.query_content=_)},null,512),[[q,a.query_content]])])]),e("button",{id:"submit",onClick:t[10]||(t[10]=se(_=>console.log(a),["prevent"]))},"送信")])]))}},et=z(Ze,[["__scopeId","data-v-07beaee2"]]),j={};j.highlights={1:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"間取り/専有面積",_value:{layout:"1LDK",exclusive_area:"40.83㎡"}}],2:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"間取り/専有面積",_value:{layout:"1LDK",exclusive_area:"40.83㎡"}}],3:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"間取り/敷地面積",_value:{layout:"1LDK",land_area:"40.83㎡"}}],4:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"間取り/敷地面積",_value:{layout:"1LDK",land_area:"40.83㎡"}}],5:[{_key:"賃料",_value:{renting_price:"160,000円"}},{_key:"間取り/専有面積",_value:{layout:"1LDK",exclusive_area:"40.83㎡"}}],6:[{_key:"賃料",_value:{renting_price:"160,000円"}},{_key:"間取り/敷地面積",_value:{layout:"1LDK",land_area:"40.83㎡"}}],7:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"土地面积",_value:{land_area:"40.83㎡"}}],8:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"土地面积",_value:{land_area:"40.83㎡"}}],9:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"土地面积",_value:{land_area:"40.83㎡"}}]};j.bases={1:[{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"修繕積立金/管理費",_value:{repair_reserve_gold:"-",management_fee:"-"}},{_key:"諸費用",_value:{other_fee:"-"}}],2:[{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"修繕積立金/管理費",_value:{repair_reserve_gold:"-",management_fee:"-"}},{_key:"諸費用",_value:{other_fee:"-"}}],3:[{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"私道負担・道路",_value:{private_road:"道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"管理費",_value:{management_fee:"-"}},{_key:"諸費用",_value:{other_fee:"-"}}],4:[{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"私道負担・道路",_value:{private_road:"-"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"管理費",_value:{management_fee:"-"}},{_key:"諸費用",_value:{other_fee:"-"}}],5:[{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"完成時期",_value:{completion_date:"2000年10月"}},{_key:"管理費",_value:{management_fee:"-"}},{_key:"敷金/礼金",_value:{deposit:"-",key_money:"-"}},{_key:"保証金/敷引/償却",_value:{security_deposit:"-",quotation_fee:"-",amortization_fee:"-"}}],6:[{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"完成時期",_value:{completion_date:"2000年10月"}},{_key:"管理費",_value:{management_fee:"-"}},{_key:"敷金/礼金",_value:{deposit:"-",key_money:"-"}},{_key:"保証金/敷引/償却",_value:{security_deposit:"-",quotation_fee:"-",amortization_fee:"-"}}],7:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"私道負担・道路",_value:{private_road:"道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）"}},{_key:"建ペい率",_value:{building_coverage_ratio:"-"}},{_key:"容積率",_value:{floor_area_ratio:"-"}},{_key:"用途地域",_value:{land_usage_type:"-"}},{_key:"地目",_value:{land_category:"-"}},{_key:"土地所有权",_value:{land_ownership:"-"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}],8:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"私道負担・道路",_value:{private_road:"道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）"}},{_key:"建ペい率",_value:{building_coverage_ratio:"-"}},{_key:"容積率",_value:{floor_area_ratio:"-"}},{_key:"用途地域",_value:{land_usage_type:"-"}},{_key:"地目",_value:{land_category:"-"}},{_key:"土地所有权",_value:{land_ownership:"-"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}],9:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"私道負担・道路",_value:{private_road:"道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）"}},{_key:"建ペい率",_value:{building_coverage_ratio:"-"}},{_key:"容積率",_value:{floor_area_ratio:"-"}},{_key:"用途地域",_value:{land_usage_type:"-"}},{_key:"地目",_value:{land_category:"-"}},{_key:"土地所有权",_value:{land_ownership:"-"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}]};j.icons={1:[{title:"建物設備",items:[{name:"has_elevator",title:"エレベーター",offset:"0"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],2:[{title:"建物設備",items:[{name:"has_elevator",title:"エレベーター",offset:"0"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"has_on_site_trash_space",title:"敷地内ゴミ置場",offset:"-687"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],3:[{title:"建物設備",items:[{name:"has_private_garden",title:"専用庭",offset:"-728"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],4:[{title:"建物設備",items:[{name:"has_private_garden",title:"専用庭",offset:"-728"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"has_on_site_trash_space",title:"敷地内ゴミ置場",offset:"-687"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],5:[{title:"建物設備",items:[{name:"has_elevator",title:"エレベーター",offset:"0"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],6:[{title:"建物設備",items:[{name:"has_private_garden",title:"専用庭",offset:"-728"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}]};j.otherInfoTable={1:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"駐車場",_value1:{parking_lot:"-"},_key2:"駐輪場",_value2:{bicycle_parking_lot:"-"}},{_key1:"バイク置き場",_value1:{motocycle_parking_lot:"-"},_key2:"ミニバイク置き場",_value2:{mini_motocycle_parking_lot:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],2:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"駐車場",_value1:{parking_lot:"-"},_key2:"駐輪場",_value2:{bicycle_parking_lot:"-"}},{_key1:"バイク置き場",_value1:{motocycle_parking_lot:"-"},_key2:"ミニバイク置き場",_value2:{mini_motocycle_parking_lot:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],3:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"土地面積",_value1:{land_area:"-"},_key2:"建ぺい率",_value2:{building_coverage_ratio:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],4:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"土地面積",_value1:{land_area:"-"},_key2:"建ぺい率",_value2:{building_coverage_ratio:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],5:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"駐車場",_value1:{parking_lot:"-"},_key2:"駐輪場",_value2:{bicycle_parking_lot:"-"}},{_key1:"バイク置き場",_value1:{motocycle_parking_lot:"-"},_key2:"ミニバイク置き場",_value2:{mini_motocycle_parking_lot:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],6:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"土地面積",_value1:{land_area:"-"},_key2:"建ぺい率",_value2:{building_coverage_ratio:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}]};const Q=le(),tt=oe("dp",()=>{const c=d("レジディア神田東  602"),f=d(!1),a=d(j.highlights[Q.houseIndex]),i=d([]),t=d(j.bases[Q.houseIndex]),_=d("徒歩圏内にスーパーや公園、保育園、小学校などが揃う、子育て世帯にうれしい環境。ショッピングモール「BiVi南千住」も生活圏内です"),V=d("東京メトロ日比谷線「三ノ輪」駅まで徒歩7分（～560ｍ）、JR山手線「鶯谷」駅まで徒歩15分（～1200ｍ）、都電荒川線「三ノ輪橋」駅まで徒歩11分（～880ｍ）で、3沿線3駅が徒歩圏内。通勤や通学、お買い物などにも便利な立地です。また徒歩圏内にはスーパーや公園が揃うほか、キッズガーデン保育園まで徒歩7分（～495ｍ）、台東区立金曽木小学校まで徒歩3分（～196ｍ）で、子育て世帯にも嬉しいロケーションとなっています。"),I=d(["2019年10月築　鉄筋コンクリート造9階建て","線路に近いのですが、最高レベルのＴー４級という遮音性能なので室内は静かです。","ペット可（小型犬）で敷地内に専用の足洗い場もあります。","神田駅徒歩3分・淡路町駅、小川町駅徒歩4分、秋葉原駅徒歩5分など複数路線利用な可能な便利な立地となっております","嬉しいネット無料！","既にご成約済みの場合でも、同タイプ・別タイプに空室がある場合もございます","空室の待ち受けなども受け付けております。お電話かメールにてスタッフまでお申し付け下さい","ネット無料　ペット可　設備充実","掲載の写真は同マンション、類似タイプになります、ご参考になさって下さい","オートロック・防犯カメラ・宅配ＢＯＸ・メールＢＯＸ・駐輪場・敷地内ゴミ捨て場・エレベーター・ＢＳ・ＣＳ","また、〇〇階以上の募集が出たらとか、角部屋の募集が出たらとか、〇〇円以下の募集が出たらなどなど・・"]),O=d(j.icons[Q.houseIndex]),U=d(j.otherInfoTable[Q.houseIndex]),C=d(["ルームシェア可","ロフト","コンロ2口以上","プロパンガス","最上階","即入居可","角部屋","フローリング","保証人不要","モニタ付きインターホン","ペット相談可","カウンターキッチン","女性限定"]),P=d("");return{title:c,faved:f,highlights:a,images:i,bases:t,icons:O,otherInfoTable:U,bpTitle:_,bpDesc:V,bulletPoints:I,otherInfoList:C,address:P,getDP:(N,A,F)=>{ne.get(N,{params:A,headers:F}).then(M=>{const r=M.data;(()=>{const E=(g,k)=>{g.forEach(s=>{Object.keys(s._value).forEach(x=>{s._value[x]=r[k][x]?r[k][x]:s._value[x]})})},p=g=>{g.forEach(k=>{k.items.forEach(s=>{r.icons.includes(s.name)||(s.offset="")})})},J=g=>{g.forEach(({_value1:k,_value2:s})=>{k[Object.keys(k)[0]]=r.otherInfoTable[Object.keys(k)[0]]?r.otherInfoTable[Object.keys(k)[0]]:k[Object.keys(k)[0]],s[Object.keys(s)[0]]=r.otherInfoTable[Object.keys(s)[0]]?r.otherInfoTable[Object.keys(s)[0]]:s[Object.keys(s)[0]]})};c.value=r.meta.name,f.value=r.meta.faved,E(a.value,"highlights"),E(t.value,"bases"),_.value=r.bulletpoints.brief_title,V.value=r.bulletpoints.brief_desc,I.value=r.bulletpoints.bullet_point,p(O.value),J(U.value),C.value=r.otherInfoList,P.value=r.bases.address;const R=[];Object.values(r.img).forEach(g=>{g&&R.push(ie+g)}),i.value=R})()}).catch(M=>{console.log(M)})}}}),at=[{main_pic_url:"/imgs/img_thumbnail (4).jfif",house_id:"1",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_url:"/imgs/img_thumbnail (4).jfif",house_id:"2",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_url:"/imgs/img_thumbnail (4).jfif",house_id:"3",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_url:"/imgs/img_thumbnail (4).jfif",house_id:"4",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_url:"/imgs/img_thumbnail (4).jfif",house_id:"5",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_url:"/imgs/img_thumbnail (4).jfif",house_id:"6",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_url:"/imgs/img_thumbnail (4).jfif",house_id:"7",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"}];const S=c=>(te("data-v-ded0b911"),c=c(),ae(),c),_t={class:"container"},st={class:"title-wrapper block"},lt={class:"title"},ot={class:"brief kv-wrapper"},nt={class:"carousel-wrapper block"},it={class:"carousel"},rt=["src"],ut={class:"small-pic-outer"},ct=["src","onClick"],dt={class:"base-info"},ft={class:"kv"},mt=S(()=>e("div",{class:"divider"},null,-1)),yt={class:"bullet-point-wrapper block"},ht={class:"bullet-point-title"},vt={class:"bullet-point-desc"},pt={class:"bullet-point"},kt={class:"spec-wrapper block"},bt={class:"icon-info-wrapper"},gt={class:"icon-row"},wt={class:"icon-category"},xt={class:"icons-outer"},$t={class:"icons"},Dt={class:"icon-wrapper"},jt={class:"icon-title"},qt={class:"other-info-table-wrapper"},It={class:"other-info"},Lt={class:"other-info-list-wrapper"},Kt=S(()=>e("span",{class:"other"},[m("その他の特徴"),e("br")],-1)),Tt={class:"map-wrapper block"},St=["src"],Vt={class:"query-form-wrapper block"},Ot=S(()=>e("div",{class:"title"}," この物件にお問い合わせ ",-1)),Ut={class:"query-wrapper"},Ct=S(()=>e("span",{class:"desc"}," お問い合わせの内容を選択してください ",-1)),Pt={class:"wrapper"},Mt=S(()=>e("div",{class:"divider"},null,-1)),Et={__name:"DetailPage",setup(c){const f=re(),a=ue(),i=tt(),t=f.params.houseID,{title:_,highlights:V,images:I,bases:O,icons:U,otherInfoTable:C,bpTitle:P,bpDesc:W,bulletPoints:N,otherInfoList:A}=ce(i),F=de();(()=>{const B=`${pe.estate}/${t}`,y={};i.getDP(B,y,F)})();const r=T({get(){return i.faved},set(B){i.faved=B}}),E=()=>{he(r,t)},p=d(0),J=d(0),R=()=>{p.value=p.value?p.value-1:p.value},g=()=>{p.value=p.value===I.value.length-1?p.value:p.value+1},k=T(()=>`https://www.google.com/maps?q=${i.address}&output=embed`),s=d("お問い合わせ"),x=d("any");switch(s.value){case"最新の空室状況を知りたい":x.value="empty";break;case"実際に見学したい":x.value="see";break;case"お問い合わせ":x.value="any";break}return d(at),(B,y)=>{const K=fe("fa");return o(),n($,null,[e("div",_t,[b(X,null,{default:H(()=>[m("基本情報")]),_:1}),e("div",st,[e("h5",lt,[m(u(h(_))+" ",1),b(K,{class:Z(["icon",{active:r.value}]),icon:"star",onClick:y[0]||(y[0]=l=>E())},null,8,["class"])]),e("div",ot,[(o(!0),n($,null,D(h(V),l=>(o(),ve(De,{highlight:l},null,8,["highlight"]))),256))])]),e("div",nt,[e("div",it,[e("img",{class:"big-pic",src:h(I)[p.value]},null,8,rt),e("div",ut,[b(K,{class:"arrow-left arrow fc",icon:"angle-left",onClick:R}),b(K,{class:"arrow-right arrow fc",icon:"angle-right",onClick:g}),e("div",{class:"small-pic-wrapper",style:ee({transform:`translateX(${J.value}px)`})},[(o(!0),n($,null,D(h(I),(l,w)=>(o(),n("img",{class:Z(["small-pic",{active:p.value===w}]),src:l,onClick:Y=>p.value=w},null,10,ct))),256))],4)])]),e("ul",dt,[(o(!0),n($,null,D(h(O),l=>(o(),n("li",ft,[b(Ke,{base:l},null,8,["base"]),mt]))),256)),e("div",{class:"contact-method",onClick:y[1]||(y[1]=()=>{h(a).isQuerySelection=!0})},[b(K,{icon:"envelope"}),m(" お問い合わせ ")])])]),b(X,null,{default:H(()=>[m("おすすめポイント")]),_:1}),e("div",yt,[e("h4",ht,u(h(P)),1),e("p",vt,u(h(W)),1),(o(!0),n($,null,D(h(N),l=>(o(),n("p",pt,"◎"+u(l),1))),256))]),b(X,null,{default:H(()=>[m("設備・その他の情報")]),_:1}),e("div",kt,[e("ul",bt,[(o(!0),n($,null,D(h(U),l=>(o(),n("li",gt,[e("div",wt,u(l.title),1),e("div",xt,[e("ul",$t,[(o(!0),n($,null,D(l.items,w=>(o(),n("li",Dt,[e("i",{class:"icon",style:ee(w.offset?{backgroundPosition:`${w.offset}px 0`}:{})},null,4),e("div",jt,u(w.title),1)]))),256))])])]))),256))]),e("div",qt,[e("table",It,[e("tbody",null,[(o(!0),n($,null,D(h(C),({_key1:l,_value1:w,_key2:Y,_value2:_e})=>(o(),n("tr",null,[e("th",null,u(l),1),e("td",null,u(Object.values(w)[0]),1),e("th",null,u(Y),1),e("td",null,u(Object.values(_e)[0]),1)]))),256))])])]),e("div",Lt,[Kt,(o(!0),n($,null,D(h(A),(l,w)=>(o(),n("span",null,u(w===0?"":" / ")+" "+u(l),1))),256))])]),e("div",Tt,[e("iframe",{src:k.value,width:"99%",height:"99%",style:{border:"0"},loading:"lazy",referrerpolicy:"no-referrer-when-downgrade","data-aos":"fade-right"},`\r
            `,8,St)]),e("div",Vt,[Ot,e("div",Ut,[Ct,e("div",Pt,[e("label",null,[v(e("input",{type:"radio",name:"query-type",value:"最新の空室状況を知りたい","onUpdate:modelValue":y[2]||(y[2]=l=>s.value=l)},null,512),[[L,s.value]]),m(" 最新の空室状況を知りたい ")]),e("label",null,[v(e("input",{type:"radio",name:"query-type",value:"実際に見学したい ","onUpdate:modelValue":y[3]||(y[3]=l=>s.value=l)},null,512),[[L,s.value]]),m(" 実際に見学したい ")]),e("label",null,[v(e("input",{type:"radio",name:"query-type",value:"お問い合わせ","onUpdate:modelValue":y[4]||(y[4]=l=>s.value=l)},null,512),[[L,s.value]]),m(" その他の問い合わせ ")])]),e("div",{class:"contact-method",onClick:y[5]||(y[5]=()=>{h(a).isQuerySelection=!0})},[b(K,{icon:"envelope"}),m(" お問い合わせ ")]),Mt])])]),v(b(ye,{title:"お問い合わせ"},{default:H(()=>[b(et,{queryType:x.value,queryTypeStr:s.value},null,8,["queryType","queryTypeStr"])]),_:1},512),[[me,h(a).isQuerySelection]])],64)}}},Ht=z(Et,[["__scopeId","data-v-ded0b911"]]);export{Ht as default};
