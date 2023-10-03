import{_ as R,d as E,o,c as l,a as e,t as i,w as h,I,l as r,v as $,E as oe,p as ee,q as te,u as le,J as ne,b as d,K as ie,s as re,L as ue,M as ce,z as de,A as fe,f as me,m as v,C as S,g as c,n as Y,F as k,j as g,N as Z,D as he,O as ye,P as pe,Q as ve,i as ke}from"./index-3368778a.js";import{M,H as be}from"./HouseCard-9b2684ff.js";const ge={class:"kv"},we={class:"key"},xe={class:"value"},$e={class:"highlight1 fc"},je={class:"highlight2"},De={__name:"KeyValue",props:{highlight:Object},setup(u){const a=u,y=E(()=>Object.values(a.highlight._value)[0]),t=E(()=>Object.values(a.highlight._value)[1]);return(s,L)=>(o(),l("div",ge,[e("div",we,i(a.highlight._key),1),e("div",xe,[e("span",$e,i(y.value),1),e("span",je,i(t.value?"/"+t.value:""),1)])]))}},Ie=R(De,[["__scopeId","data-v-22efe585"]]);const Le={class:"kv-wrapper"},qe={class:"key"},Ke={class:"value"},Ve={__name:"KeyValue1",props:{base:Object},setup(u){const a=u,y=E(()=>{let t="";for(let s in a.base._value)t===""?t=a.base._value[s]:t+=" / "+a.base._value[s];return t});return(t,s)=>(o(),l("div",Le,[e("div",qe,i(a.base._key),1),e("div",Ke,i(y.value),1)]))}},Se=R(Ve,[["__scopeId","data-v-b9f8f519"]]);const z=u=>(ee("data-v-97c93862"),u=u(),te(),u),Oe={class:"form-wrapper"},Ue={class:"type block"},Ce=z(()=>e("div",{class:"title"}," 相談タイプ ",-1)),Te={class:"content-wrapper"},Pe={class:"radio-wrapper"},He={class:"name block"},Me=z(()=>e("div",{class:"title"},[r(" 名前 "),e("span",null,"※必須項目")],-1)),Qe={class:"content-wrapper"},Ee={class:"eng name-wrapper wrapper"},Re={class:"first-name n"},ze={class:"last-name n"},Be={class:"jpn name-wrapper wrapper"},Ne={class:"first-name n"},Fe={class:"last-name n"},Ae={class:"contact block"},Je=z(()=>e("div",{class:"title"},[r(" 連絡方法 "),e("span",null,"※必須項目")],-1)),Xe={class:"content-wrapper"},Ge={class:"contact-wrapper wrapper"},We={class:"first-name n"},Ye={class:"last-name n"},Ze={class:"radio-wrapper"},et={class:"query block"},tt=z(()=>e("div",{class:"title"},[r(" ご相談内容 "),e("span",null,"※必須項目")],-1)),at={class:"query-wrapper wrapper content-wrapper"},st={__name:"HouseQuery",setup(u){const a={query_type:"other",last_name_kana:"",first_name_kana:"",last_name_kanji:"",first_name_kanji:"",email:"",phone:"",contact_type:"any",query_content:""};return(y,t)=>(o(),l("div",Oe,[e("form",null,[e("div",Ue,[Ce,e("div",Te,[e("div",Pe,[e("label",null,[h(e("input",{type:"radio",name:"type",value:"house_status","onUpdate:modelValue":t[0]||(t[0]=s=>a.query_type=s)},null,512),[[I,a.query_type]]),r(" 最新の空室状況を知りたい ")]),e("label",null,[h(e("input",{type:"radio",name:"type",value:"go2see","onUpdate:modelValue":t[1]||(t[1]=s=>a.query_type=s)},null,512),[[I,a.query_type]]),r(" 実際に見学したい ")]),e("label",null,[h(e("input",{type:"radio",name:"type",value:"other","onUpdate:modelValue":t[2]||(t[2]=s=>a.query_type=s)},null,512),[[I,a.query_type]]),r(" ただのお問い合わせ ")])])])]),e("div",He,[Me,e("div",Qe,[e("div",Ee,[e("div",Re,[h(e("input",{type:"text",placeholder:"例）タナカ","onUpdate:modelValue":t[3]||(t[3]=s=>a.last_name_kana=s),required:""},null,512),[[$,a.last_name_kana]])]),e("div",ze,[h(e("input",{type:"text",placeholder:"例）タロウ","onUpdate:modelValue":t[4]||(t[4]=s=>a.first_name_kana=s),required:""},null,512),[[$,a.first_name_kana]])])]),e("div",Be,[e("div",Ne,[h(e("input",{type:"text",placeholder:"例）田中","onUpdate:modelValue":t[5]||(t[5]=s=>a.last_name_kanji=s),required:""},null,512),[[$,a.last_name_kanji]])]),e("div",Fe,[h(e("input",{type:"text",placeholder:"例）太郎","onUpdate:modelValue":t[6]||(t[6]=s=>a.first_name_kanji=s),required:""},null,512),[[$,a.first_name_kanji]])])])])]),e("div",Ae,[Je,e("div",Xe,[e("div",Ge,[e("div",We,[h(e("input",{type:"text",placeholder:"メールアドレス","onUpdate:modelValue":t[7]||(t[7]=s=>a.email=s),required:""},null,512),[[$,a.email]])]),e("div",Ye,[h(e("input",{type:"text",placeholder:"電話番号","onUpdate:modelValue":t[8]||(t[8]=s=>a.phone=s)},null,512),[[$,a.phone]])])]),e("div",Ze,[e("label",null,[h(e("input",{type:"radio",name:"expect",value:"email","onUpdate:modelValue":t[9]||(t[9]=s=>a.contact_type=s)},null,512),[[I,a.contact_type]]),r(" メール連絡希望 ")]),e("label",null,[h(e("input",{type:"radio",name:"expect",value:"phone","onUpdate:modelValue":t[10]||(t[10]=s=>a.contact_type=s)},null,512),[[I,a.contact_type]]),r(" 電話連絡希望 ")]),e("label",null,[h(e("input",{type:"radio",name:"expect",value:"any","onUpdate:modelValue":t[11]||(t[11]=s=>a.contact_type=s)},null,512),[[I,a.contact_type]]),r(" 両方OK ")])])])]),e("div",et,[tt,e("div",at,[h(e("textarea",{class:"query-input",name:"",cols:"60",rows:"8","onUpdate:modelValue":t[12]||(t[12]=s=>a.query_content=s)},null,512),[[$,a.query_content]])])]),e("button",{id:"submit",onClick:t[13]||(t[13]=oe(s=>console.log(a),["prevent"]))},"送信")])]))}},_t=R(st,[["__scopeId","data-v-97c93862"]]),x={};x.highlights={1:[{_key:"価格/管理費",_value:{selling_price:"160,000円",management_fee:"15,000円"}},{_key:"間取り/専有面積",_value:{layout:"1LDK",exclusive_area:"40.83㎡"}}],2:[{_key:"価格/管理費",_value:{selling_price:"160,000円",management_fee:"15,000円"}},{_key:"間取り/専有面積",_value:{layout:"1LDK",exclusive_area:"40.83㎡"}}],3:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"間取り/建物面積",_value:{layout:"1LDK",total_building_area:"40.83㎡"}}],4:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"間取り/建物面積",_value:{layout:"1LDK",total_building_area:"40.83㎡"}}],5:[{_key:"賃料/管理費",_value:{renting_price:"160,000円",management_fee:"15,000円"}},{_key:"間取り/専有面積",_value:{layout:"1LDK",exclusive_area:"40.83㎡"}}],6:[{_key:"賃料/管理費",_value:{renting_price:"160,000円",management_fee:"15,000円"}},{_key:"間取り/建物面積",_value:{layout:"1LDK",total_building_area:"40.83㎡"}}],7:[{_key:"価格",_value:{selling_price:"160,000円"}},{_key:"土地面积",_value:{land_area:"40.83㎡"}}]};x.bases={1:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"修繕積立金/修繕積立基金",_value:{repair_reserve_gold:"-",repair_reserve_fund:"-"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)"}}],2:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"修繕積立金/修繕積立基金",_value:{repair_reserve_gold:"-",repair_reserve_fund:"-"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分, 東武伊勢崎線/東武動物公園駅 車38分(15.2km), ＪＲ宇都宮線/栗橋駅 車30分(12.1km)"}}],3:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"私道負担・道路",_value:{private_road:"道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"採光方向",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}],4:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"私道負担・道路",_value:{private_road:"-"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"完成時期/引渡可能時期",_value:{completion_date:"2000年10月",move_in_date:"2000年10月"}},{_key:"採光方向",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}],5:[{_key:"敷金/礼金",_value:{deposit:"-",key_money:"-"}},{_key:"保証金/敷引/償却",_value:{security_deposit:"-",quotation_fee:"-",amortization_fee:"-"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"完成時期",_value:{completion_date:"2000年10月"}},{_key:"向き",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}],6:[{_key:"敷金/礼金",_value:{deposit:"-",key_money:"-"}},{_key:"保証金/敷引/償却",_value:{security_deposit:"-",quotation_fee:"-",amortization_fee:"-"}},{_key:"間取り詳細",_value:{layout_detail:"1LDK"}},{_key:"完成時期",_value:{completion_date:"2000年10月"}},{_key:"採光方向",_value:{house_facing:"南"}},{_key:"階建",_value:{total_number_of_floors:"３階",number_of_floors:"３階"}},{_key:"建物構造",_value:{house_struction:"木造"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}],7:[{_key:"諸費用",_value:{other_fee:"-"}},{_key:"私道負担・道路",_value:{private_road:"道路幅：4ｍ・4.6ｍ、私道負担有り（私道：68.00m2持ち分1/6づつ、未利用地：約4.48m2持ち分1/6づつ）"}},{_key:"建ペい率",_value:{building_coverage_ratio:"-"}},{_key:"容積率",_value:{floor_area_ratio:"-"}},{_key:"用途地域",_value:{land_usage_type:"-"}},{_key:"地目",_value:{land_category:"-"}},{_key:"土地所有权",_value:{land_ownership:"-"}},{_key:"所在地",_value:{address:"東京都江東区 北砂７丁目９－５"}},{_key:"交通",_value:{station:"湘南新宿ライン高海/新町駅 歩22分"}}]};x.icons={1:[{title:"建物設備",items:[{name:"has_elevator",title:"エレベーター",offset:"0"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],2:[{title:"建物設備",items:[{name:"has_elevator",title:"エレベーター",offset:"0"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"has_on_site_trash_space",title:"敷地内ゴミ置場",offset:"-687"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],3:[{title:"建物設備",items:[{name:"has_private_garden",title:"専用庭",offset:"-728"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],4:[{title:"建物設備",items:[{name:"has_private_garden",title:"専用庭",offset:"-728"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"has_on_site_trash_space",title:"敷地内ゴミ置場",offset:"-687"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],5:[{title:"建物設備",items:[{name:"has_elevator",title:"エレベーター",offset:"0"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}],6:[{title:"建物設備",items:[{name:"has_private_garden",title:"専用庭",offset:"-728"},{name:"has_city_gas",title:"都市ガス",offset:"-1970"},{name:"has_underfloor_heating",title:"床暖房",offset:"-40"},{name:"has_delivery_box",title:"宅配ボックス",offset:"-80"},{name:"has_security_camera",title:"防犯カメラ",offset:"-120"},{name:"has_autolock",title:"オートロック",offset:"80"},{name:"is_reformed",title:"リフォーム",offset:"-163"}]},{title:"室内設備",items:[{name:"is_furniture_included",title:"家具家電付き",offset:"-220"},{name:"has_indoor_laundry_space",title:"室内洗濯機置き場",offset:"-1250"},{name:"has_aircon",title:"エアコン",offset:"-390"},{name:"has_walk_in_closet",title:"ウォークインクローゼット",offset:"-1870"},{name:"has_shoes_box",title:"シューズボックス",offset:"-294"},{name:"has_balcony",title:"バルコニー",offset:"-2010"},{name:"is_internet_applicable",title:"インターネット対応",offset:"-340"}]},{title:"バス・トイレ・キッチン",items:[{name:"is_separate_bath_and_toilet",title:"バストイレ別",offset:"-860"},{name:"has_reheating_bath",title:"追焚機能",offset:"-430"},{name:"has_bathroom_dryer",title:"浴室乾燥機",offset:"-470"},{name:"has_bidet",title:"温水洗浄便座",offset:"-510"},{name:"is_independent_washroom",title:"洗面所独立",offset:"-556"},{name:"has_dishwasher",title:"食器洗い乾燥機",offset:"-600"},{name:"has_system_kitchen",title:"システムキッチン",offset:"-640"}]}]};x.otherInfoTable={1:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"駐車場",_value1:{parking_lot:"-"},_key2:"駐輪場",_value2:{bicycle_parking_lot:"-"}},{_key1:"バイク置き場",_value1:{motocycle_parking_lot:"-"},_key2:"ミニバイク置き場",_value2:{mini_motocycle_parking_lot:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],2:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"駐車場",_value1:{parking_lot:"-"},_key2:"駐輪場",_value2:{bicycle_parking_lot:"-"}},{_key1:"バイク置き場",_value1:{motocycle_parking_lot:"-"},_key2:"ミニバイク置き場",_value2:{mini_motocycle_parking_lot:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],3:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"土地面積",_value1:{land_area:"-"},_key2:"建ぺい率",_value2:{building_coverage_ratio:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],4:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"土地面積",_value1:{land_area:"-"},_key2:"建ぺい率",_value2:{building_coverage_ratio:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],5:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"駐車場",_value1:{parking_lot:"-"},_key2:"駐輪場",_value2:{bicycle_parking_lot:"-"}},{_key1:"バイク置き場",_value1:{motocycle_parking_lot:"-"},_key2:"ミニバイク置き場",_value2:{mini_motocycle_parking_lot:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}],6:[{_key1:"用途地域",_value1:{land_usage_type:"-"},_key2:"地目",_value2:{land_category:"-"}},{_key1:"土地所有权",_value1:{land_ownership:"-"},_key2:"管理形态",_value2:{management_type:"-"}},{_key1:"バルコニー面積",_value1:{balcony_area:"-"},_key2:"その他の面積",_value2:{other_area:"-"}},{_key1:"土地面積",_value1:{land_area:"-"},_key2:"建ぺい率",_value2:{building_coverage_ratio:"-"}},{_key1:"制限事項",_value1:{striction:"-"},_key2:"その他の概要",_value2:{other_brief:"-"}},{_key1:"施工会社",_value1:{construction_company:"-"},_key2:"情報提供日",_value2:{information_date:"-"}}]};const Q=le(),ot=ne("dp",()=>{const u=d("レジディア神田東  602"),a=d(!1),y=d(x.highlights[Q.houseIndex]),t=d(["/imgs/img_thumbnail (1).jfif","/imgs/img_thumbnail (2).jfif","/imgs/img_thumbnail (3).jfif","/imgs/img_thumbnail (4).jfif","/imgs/img_thumbnail (5).jfif","/imgs/img_thumbnail (6).jfif"]),s=d(x.bases[Q.houseIndex]),L=d("徒歩圏内にスーパーや公園、保育園、小学校などが揃う、子育て世帯にうれしい環境。ショッピングモール「BiVi南千住」も生活圏内です"),O=d("東京メトロ日比谷線「三ノ輪」駅まで徒歩7分（～560ｍ）、JR山手線「鶯谷」駅まで徒歩15分（～1200ｍ）、都電荒川線「三ノ輪橋」駅まで徒歩11分（～880ｍ）で、3沿線3駅が徒歩圏内。通勤や通学、お買い物などにも便利な立地です。また徒歩圏内にはスーパーや公園が揃うほか、キッズガーデン保育園まで徒歩7分（～495ｍ）、台東区立金曽木小学校まで徒歩3分（～196ｍ）で、子育て世帯にも嬉しいロケーションとなっています。"),j=d(["2019年10月築　鉄筋コンクリート造9階建て","線路に近いのですが、最高レベルのＴー４級という遮音性能なので室内は静かです。","ペット可（小型犬）で敷地内に専用の足洗い場もあります。","神田駅徒歩3分・淡路町駅、小川町駅徒歩4分、秋葉原駅徒歩5分など複数路線利用な可能な便利な立地となっております","嬉しいネット無料！","既にご成約済みの場合でも、同タイプ・別タイプに空室がある場合もございます","空室の待ち受けなども受け付けております。お電話かメールにてスタッフまでお申し付け下さい","ネット無料　ペット可　設備充実","掲載の写真は同マンション、類似タイプになります、ご参考になさって下さい","オートロック・防犯カメラ・宅配ＢＯＸ・メールＢＯＸ・駐輪場・敷地内ゴミ捨て場・エレベーター・ＢＳ・ＣＳ","また、〇〇階以上の募集が出たらとか、角部屋の募集が出たらとか、〇〇円以下の募集が出たらなどなど・・"]),U=d(x.icons[Q.houseIndex]),C=d(x.otherInfoTable[Q.houseIndex]),T=d(["ルームシェア可","ロフト","コンロ2口以上","プロパンガス","最上階","即入居可","角部屋","フローリング","保証人不要","モニタ付きインターホン","ペット相談可","カウンターキッチン","女性限定"]),P=d("");return{title:u,faved:a,highlights:y,images:t,bases:s,icons:U,otherInfoTable:C,bpTitle:L,bpDesc:O,bulletPoints:j,otherInfoList:T,address:P,getDP:(N,F,H)=>{ie.get(N,{params:F,headers:H}).then(q=>{const f=q.data;(()=>{const K=(n,p)=>{n.forEach(m=>{Object.keys(m._value).forEach(D=>{m._value[D]=f[p][D]?f[p][D]:m._value[D]})})},A=n=>{n.forEach(p=>{p.items.forEach(m=>{f.icons.includes(m.name)||(m.offset="")})})},J=n=>{n.forEach(({_value1:p,_value2:m})=>{p[Object.keys(p)[0]]=f.otherInfoTable[Object.keys(p)[0]]?f.otherInfoTable[Object.keys(p)[0]]:p[Object.keys(p)[0]],m[Object.keys(m)[0]]=f.otherInfoTable[Object.keys(m)[0]]?f.otherInfoTable[Object.keys(m)[0]]:m[Object.keys(m)[0]]})};u.value=f.meta.name,a.value=f.meta.faved,K(y.value,"highlights"),K(s.value,"bases"),L.value=f.bulletpoints.brief_title,O.value=f.bulletpoints.brief_desc,j.value=f.bulletpoints.bullet_point,A(U.value),J(C.value),T.value=f.otherInfoList,P.value=f.bases.address})()}).catch(q=>{console.log(q)})}}}),lt=[{main_pic_path:"/imgs/img_thumbnail (4).jfif",house_id:"1",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_path:"/imgs/img_thumbnail (4).jfif",house_id:"2",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_path:"/imgs/img_thumbnail (4).jfif",house_id:"3",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_path:"/imgs/img_thumbnail (4).jfif",house_id:"4",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_path:"/imgs/img_thumbnail (4).jfif",house_id:"5",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_path:"/imgs/img_thumbnail (4).jfif",house_id:"6",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"},{main_pic_path:"/imgs/img_thumbnail (4).jfif",house_id:"7",name:"ＴＫＲ神田多町",price:"87,000円",address:"東京都千代田区 神田多町２丁目",area:"88",layout:"3LDK",station1:"ＪＲ川越線/西大宮駅 歩11分",house_struction:"2002年11月築",completion_date:"鉄骨",number_of_floors:"8階"}];const B=u=>(ee("data-v-81398e91"),u=u(),te(),u),nt={class:"container"},it={class:"title-wrapper block"},rt={class:"title"},ut={class:"brief kv-wrapper"},ct={class:"carousel-wrapper block"},dt={class:"carousel"},ft=["src"],mt={class:"small-pic-outer"},ht=["src","onClick"],yt={class:"base-info"},pt={class:"kv"},vt=B(()=>e("div",{class:"divider"},null,-1)),kt={class:"bullet-point-wrapper block"},bt={class:"bullet-point-title"},gt={class:"bullet-point-desc"},wt={class:"bullet-point"},xt={class:"spec-wrapper block"},$t={class:"icon-info-wrapper"},jt={class:"icon-row"},Dt={class:"icon-category"},It={class:"icons-outer"},Lt={class:"icons"},qt={class:"icon-wrapper"},Kt={class:"icon-title"},Vt={class:"other-info-table-wrapper"},St={class:"other-info"},Ot={class:"other-info-list-wrapper"},Ut=B(()=>e("span",{class:"other"},[r("その他の特徴"),e("br")],-1)),Ct={class:"map-wrapper block"},Tt=["src"],Pt={class:"query-form-wrapper block"},Ht=B(()=>e("div",{class:"title"}," この物件にお問い合わせ ",-1)),Mt={class:"query-wrapper"},Qt=pe('<span class="desc" data-v-81398e91> お問い合わせの内容を選択してください </span><div class="wrapper" data-v-81398e91><label data-v-81398e91><input type="radio" name="query-type" data-v-81398e91> 最新の空室状況を知りたい </label><label data-v-81398e91><input type="radio" name="query-type" data-v-81398e91> 実際に見学したい </label><label data-v-81398e91><input type="radio" name="query-type" checked data-v-81398e91> その他の問い合わせ </label></div>',2),Et=B(()=>e("div",{class:"divider"},null,-1)),Rt={class:"recommend-wrapper block"},zt={__name:"DetailPage",setup(u){const a=re(),y=ue(),t=ot(),s=a.params.houseID,{title:L,highlights:O,images:j,bases:U,icons:C,otherInfoTable:T,bpTitle:P,bpDesc:X,bulletPoints:N,otherInfoList:F}=ce(t),H=de("apiURL"),q=fe();(()=>{const G=`${H.estate}/${s}`,w={};t.getDP(G,w,q)})();const K=d(t.faved),A=H.addFavorate,J=()=>{ve(K,A,s)},n=d(0),p=d(0),m=()=>{n.value=n.value?n.value-1:n.value},D=()=>{n.value=n.value===j.value.length-1?n.value:n.value+1},ae=E(()=>`https://www.google.com/maps?q=${t.address}&output=embed`),se=d(lt);return(G,w)=>{const V=me("fa");return o(),l(k,null,[e("div",nt,[v(M,null,{default:S(()=>[r("基本情報")]),_:1}),e("div",it,[e("h5",rt,[r(i(c(L))+" ",1),v(V,{class:Y(["icon",{active:K.value}]),icon:"star",onClick:w[0]||(w[0]=_=>J())},null,8,["class"])]),e("div",ut,[(o(!0),l(k,null,g(c(O),_=>(o(),ke(Ie,{highlight:_},null,8,["highlight"]))),256))])]),e("div",ct,[e("div",dt,[e("img",{class:"big-pic",src:c(j)[n.value]},null,8,ft),e("div",mt,[v(V,{class:"arrow-left arrow fc",icon:"angle-left",onClick:m}),v(V,{class:"arrow-right arrow fc",icon:"angle-right",onClick:D}),e("div",{class:"small-pic-wrapper",style:Z({transform:`translateX(${p.value}px)`})},[(o(!0),l(k,null,g(c(j),(_,b)=>(o(),l("img",{class:Y(["small-pic",{active:n.value===b}]),src:_,onClick:W=>n.value=b},null,10,ht))),256))],4)])]),e("ul",yt,[(o(!0),l(k,null,g(c(U),_=>(o(),l("li",pt,[v(Se,{base:_},null,8,["base"]),vt]))),256)),e("div",{class:"contact-method",onClick:w[1]||(w[1]=(..._)=>c(y).showQuerySelection&&c(y).showQuerySelection(..._))},[v(V,{icon:"envelope"}),r(" お問い合わせ ")])])]),v(M,null,{default:S(()=>[r("おすすめポイント")]),_:1}),e("div",kt,[e("h4",bt,i(c(P)),1),e("p",gt,i(c(X)),1),(o(!0),l(k,null,g(c(N),_=>(o(),l("p",wt,"◎"+i(_),1))),256))]),v(M,null,{default:S(()=>[r("設備・その他の情報")]),_:1}),e("div",xt,[e("ul",$t,[(o(!0),l(k,null,g(c(C),_=>(o(),l("li",jt,[e("div",Dt,i(_.title),1),e("div",It,[e("ul",Lt,[(o(!0),l(k,null,g(_.items,b=>(o(),l("li",qt,[e("i",{class:"icon",style:Z({backgroundPosition:`${b.offset}px 0`})},null,4),e("div",Kt,i(b.title),1)]))),256))])])]))),256))]),e("div",Vt,[e("table",St,[e("tbody",null,[(o(!0),l(k,null,g(c(T),({_key1:_,_value1:b,_key2:W,_value2:_e})=>(o(),l("tr",null,[e("th",null,i(_),1),e("td",null,i(Object.values(b)[0]),1),e("th",null,i(W),1),e("td",null,i(Object.values(_e)[0]),1)]))),256))])])]),e("div",Ot,[Ut,(o(!0),l(k,null,g(c(F),(_,b)=>(o(),l("span",null,i(b===0?"":" / ")+" "+i(_),1))),256))])]),e("div",Ct,[e("iframe",{src:ae.value,width:"99%",height:"99%",style:{border:"0"},loading:"lazy",referrerpolicy:"no-referrer-when-downgrade","data-aos":"fade-right"},`\r
            `,8,Tt)]),e("div",Pt,[Ht,e("div",Mt,[Qt,e("div",{class:"contact-method",onClick:w[2]||(w[2]=(..._)=>c(y).showQuerySelection&&c(y).showQuerySelection(..._))},[v(V,{icon:"envelope"}),r(" お問い合わせ ")]),Et])]),v(M,null,{default:S(()=>[r("おすすめ部屋")]),_:1}),e("ul",Rt,[(o(!0),l(k,null,g(se.value,_=>(o(),l("li",null,[v(be,{keys:_.title,house:_},null,8,["keys","house"])]))),256))])]),h(v(ye,{title:"お問い合わせ"},{default:S(()=>[v(_t)]),_:1},512),[[he,c(y).isQuerySelection]])],64)}}},Ft=R(zt,[["__scopeId","data-v-81398e91"]]);export{Ft as default};
