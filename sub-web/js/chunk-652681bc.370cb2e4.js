(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-652681bc"],{"04d1":function(e,t,o){var n=o("342f"),i=n.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"0cb2":function(e,t,o){var n=o("e330"),i=o("7b0b"),r=Math.floor,l=n("".charAt),a=n("".replace),s=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,n,d,f){var p=o+e.length,m=n.length,b=u;return void 0!==d&&(d=i(d),b=c),a(f,b,(function(i,a){var c;switch(l(a,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,o);case"'":return s(t,p);case"<":c=d[s(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>m){var f=r(u/10);return 0===f?i:f<=m?void 0===n[f-1]?l(a,1):n[f-1]+l(a,1):i}c=n[u-1]}return void 0===c?"":c}))}},"14c3":function(e,t,o){var n=o("da84"),i=o("c65b"),r=o("825a"),l=o("1626"),a=o("c6b6"),s=o("9263"),c=n.TypeError;e.exports=function(e,t){var o=e.exec;if(l(o)){var n=i(o,e,t);return null!==n&&r(n),n}if("RegExp"===a(e))return i(s,e,t);throw c("RegExp#exec called on incompatible receiver")}},"25f0":function(e,t,o){"use strict";var n=o("e330"),i=o("5e77").PROPER,r=o("6eeb"),l=o("825a"),a=o("3a9b"),s=o("577e"),c=o("d039"),u=o("ad6d"),d="toString",f=RegExp.prototype,p=f[d],m=n(u),b=c((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),h=i&&p.name!=d;(b||h)&&r(RegExp.prototype,d,(function(){var e=l(this),t=s(e.source),o=e.flags,n=s(void 0===o&&a(f,e)&&!("flags"in f)?m(e):o);return"/"+t+"/"+n}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var n=o("23e7"),i=o("b727").filter,r=o("1dde"),l=r("filter");n({target:"Array",proto:!0,forced:!l},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,o){"use strict";var n=o("23e7"),i=o("e330"),r=o("59ed"),l=o("7b0b"),a=o("07fa"),s=o("577e"),c=o("d039"),u=o("addb"),d=o("a640"),f=o("04d1"),p=o("d998"),m=o("2d00"),b=o("512c"),h=[],S=i(h.sort),g=i(h.push),v=c((function(){h.sort(void 0)})),C=c((function(){h.sort(null)})),_=d("sort"),y=!c((function(){if(m)return m<70;if(!(f&&f>3)){if(p)return!0;if(b)return b<603;var e,t,o,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(n=0;n<47;n++)h.push({k:t+n,v:o})}for(h.sort((function(e,t){return t.v-e.v})),n=0;n<h.length;n++)t=h[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),x=v||!C||!_||!y,A=function(e){return function(t,o){return void 0===o?-1:void 0===t?1:void 0!==e?+e(t,o)||0:s(t)>s(o)?1:-1}};n({target:"Array",proto:!0,forced:x},{sort:function(e){void 0!==e&&r(e);var t=l(this);if(y)return void 0===e?S(t):S(t,e);var o,n,i=[],s=a(t);for(n=0;n<s;n++)n in t&&g(i,t[n]);u(i,A(e)),o=i.length,n=0;while(n<o)t[n]=i[n++];while(n<s)delete t[n++];return t}})},"512c":function(e,t,o){var n=o("342f"),i=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},5319:function(e,t,o){"use strict";var n=o("2ba4"),i=o("c65b"),r=o("e330"),l=o("d784"),a=o("d039"),s=o("825a"),c=o("1626"),u=o("5926"),d=o("50c4"),f=o("577e"),p=o("1d80"),m=o("8aa5"),b=o("dc4a"),h=o("0cb2"),S=o("14c3"),g=o("b622"),v=g("replace"),C=Math.max,_=Math.min,y=r([].concat),x=r([].push),A=r("".indexOf),k=r("".slice),R=function(e){return void 0===e?e:String(e)},w=function(){return"$0"==="a".replace(/./,"$0")}(),L=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),U=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));l("replace",(function(e,t,o){var r=L?"$":"$0";return[function(e,o){var n=p(this),r=void 0==e?void 0:b(e,v);return r?i(r,e,n,o):i(t,f(n),e,o)},function(e,i){var l=s(this),a=f(e);if("string"==typeof i&&-1===A(i,r)&&-1===A(i,"$<")){var p=o(t,l,a,i);if(p.done)return p.value}var b=c(i);b||(i=f(i));var g=l.global;if(g){var v=l.unicode;l.lastIndex=0}var w=[];while(1){var L=S(l,a);if(null===L)break;if(x(w,L),!g)break;var U=f(L[0]);""===U&&(l.lastIndex=m(a,d(l.lastIndex),v))}for(var $="",O=0,N=0;N<w.length;N++){L=w[N];for(var M=f(L[0]),F=C(_(u(L.index),a.length),0),j=[],T=1;T<L.length;T++)x(j,R(L[T]));var G=L.groups;if(b){var I=y([M],j,F,a);void 0!==G&&x(I,G);var P=f(n(i,void 0,I))}else P=h(M,a,F,j,G,i);F>=O&&($+=k(a,O,F)+P,O=F+M.length)}return $+k(a,O)}]}),!U||!w||L)},"8aa5":function(e,t,o){"use strict";var n=o("6547").charAt;e.exports=function(e,t,o){return t+(o?n(e,t).length:1)}},a640:function(e,t,o){"use strict";var n=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&n((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Subscription Converter "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(e._s(e.backendVersion))])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess链接，多个链接每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"客户端:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.backendSearch,placeholder:"动动小手，（建议）自行搭建后端服务。例：http://127.0.0.1:25500/sub?"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},[o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoGayhub},slot:"append"},[e._v("前往项目仓库")])],1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},[e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),o("el-button",{attrs:{slot:"append",icon:"el-icon-link"},on:{click:e.gotoRemoteConfig},slot:"append"},[e._v("配置示例")])],2)],1),o("el-form-item",{attrs:{label:"Include:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"Exclude:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"FileName:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"输出为 Node List",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash New Field"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"启用 UDP"},on:{change:function(t){e.needUdp=!0}},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"过滤非法节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{placement:"bottom"}},[o("el-row",[o("el-checkbox",{attrs:{label:"Surge.DoH"},model:{value:e.form.tpl.surge.doh,callback:function(t){e.$set(e.form.tpl.surge,"doh",t)},expression:"form.tpl.surge.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"Clash.DoH"},model:{value:e.form.tpl.clash.doh,callback:function(t){e.$set(e.form.tpl.clash,"doh",t)},expression:"form.tpl.clash.doh"}})],1),o("el-row",[o("el-checkbox",{attrs:{label:"网易云"},model:{value:e.form.insert,callback:function(t){e.$set(e.form,"insert",t)},expression:"form.insert"}})],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("定制功能")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"5000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},i=[],r=(o("ac1f"),o("5319"),o("d3b7"),o("25f0"),o("4e82"),o("4de4"),o("e9c4"),"https://github.com/CareyWang/sub-web"),l="https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",a="https://github.com/tindy2013/subconverter/releases",s="https://api.wcc.best/sub?",c="https://suo.yt/short",u="https://api.wcc.best/config/upload",d="https://t.me/CareyWong_bot",f={data:function(){return{backendVersion:"",advanced:"2",isPC:!0,options:{clientTypes:{Clash:"clash",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan",QuantumultX:"quanx",Surfboard:"surfboard",Loon:"loon",SSAndroid:"sssub",V2Ray:"v2ray",ss:"ss",ssr:"ssr",ssd:"ssd",ClashR:"clashr",Surge2:"surge&ver=2"},customBackend:{"EdNovas自用后端":"https://subsc.ednovas.xyz/sub?","api.tsutsu.cc (つつ提供-国内裸奔小鸡)":"http://api.tsutsu.cc:520/sub?","api2.tsutsu.cc (つつ提供-香港稳定)":"https://api2.tsutsu.cc/sub?","api.v1.mk（肥羊提供-四端八核负载)":"https://api.v1.mk/sub?","subcon.dlj.tf (subconverter作者提供) ":"https://subcon.dlj.tf/sub?","api.dler.io (sub作者&lhie1提供)":"https://api.dler.io/sub?","api.wcc.best (sub-web作者提供)":"https://api.wcc.best/sub?","api.hope140.live (hope提供-vercel)":"https://api.hope140.live/sub?","sub.proxypoolv2.tk (Allen Xu提供-vercel)":"https://sub.proxypoolv2.tk/sub?","jp-aws.proxypoolv2.tk (Allen Xu提供-日本AWS）":"http://jp-aws.proxypoolv2.tk:25500/sub?","sub.id9.cc (品云提供)":"https://sub.id9.cc/sub?"},backendOptions:[{value:"https://subsc.ednovas.xyz/sub?"},{value:"http://api.tsutsu.cc:520/sub?"},{value:"https://api2.tsutsu.cc/sub?"},{value:"https://api.v1.mk/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://api.hope140.live/sub?"},{value:"https://sub.proxypoolv2.tk/sub?"},{value:"https://sub.id9.cc/sub?"}],remoteConfig:[{label:"universal",options:[{label:"No-Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"},{label:"Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"}]},{label:"ACL4SSR",options:[{label:"ACL4SSR_Online 默认版 分组比较全(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_Online_AdblockPlus 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Online_NoAuto 无自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_Online_NoReject 无广告拦截规则(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL4SSR_Online_Mini 精简版(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Online_Mini_MultiCountry.ini 精简版 带港美日国家(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL4SSR_Online_Full 全分组 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Online_Full_MultiMode.ini 全分组 多模式 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR_Online_Full_Google 全分组 重度用户使用 谷歌细分(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"},{label:"ACL4SSR 本地 默认版 分组比较全",value:"config/ACL4SSR.ini"},{label:"ACL4SSR_Mini 本地 精简版",value:"config/ACL4SSR_Mini.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",value:"config/ACL4SSR_Mini_NoAuto.ini"},{label:"ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",value:"config/ACL4SSR_Mini_Fallback.ini"},{label:"ACL4SSR_BackCN 本地 回国",value:"config/ACL4SSR_BackCN.ini"},{label:"ACL4SSR_NoApple 本地 无苹果分流",value:"config/ACL4SSR_NoApple.ini"},{label:"ACL4SSR_NoAuto 本地 无自动测速 ",value:"config/ACL4SSR_NoAuto.ini"},{label:"ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",value:"config/ACL4SSR_NoAuto_NoApple.ini"},{label:"ACL4SSR_NoMicrosoft 本地 无微软分流",value:"config/ACL4SSR_NoMicrosoft.ini"},{label:"ACL4SSR_WithGFW 本地 GFW列表",value:"config/ACL4SSR_WithGFW.ini"}]},{label:"customized",options:[{label:"Maying",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"},{label:"Ytoo",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"},{label:"FlowerCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"},{label:"NyanCAT",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nyancat.ini"},{label:"Nexitally",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"},{label:"SoCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"},{label:"ARK",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"},{label:"ssrCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,fdn:!1,appendType:!1,insert:!1,new_name:!0,tpl:{surge:{doh:!1},clash:{doh:!1}}},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:d,sampleConfig:l,needUdp:!1}},created:function(){document.title="Subscription Converter",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash",this.notify(),this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(r)},gotoGayhub:function(){window.open(a)},gotoRemoteConfig:function(){window.open(l)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var e=""===this.form.customBackend?s:this.form.customBackend,t=this.form.sourceSubUrl;t=t.replace(/(\n|\r|\n\r)/g,"|"),this.customSubUrl=e+"target="+this.form.clientType+"&url="+encodeURIComponent(t)+"&insert="+this.form.insert,"2"===this.advanced&&(""!==this.form.remoteConfig&&(this.customSubUrl+="&config="+encodeURIComponent(this.form.remoteConfig)),""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString(),this.needUdp&&(this.customSubUrl+="&udp="+this.form.udp.toString()),!0===this.form.tpl.surge.doh&&(this.customSubUrl+="&surge.doh=true"),"clash"===this.form.clientType&&(!0===this.form.tpl.clash.doh&&(this.customSubUrl+="&clash.doh=true"),this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},notify:function(){var e=this.$createElement;this.$notify({title:"隐私提示",type:"warning",message:e("i",{style:"color: teal"},"各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")})},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,n=e?o.filter(this.createFilter(e)):o;t(n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),n="";if(null!==o){var i=JSON.parse(o);i.expire>t?n=i.value:localStorage.removeItem(e)}return n},setLocalStorageItem:function(e,t){var o="86400",n=+new Date,i={setTime:n,ttl:parseInt(o),expire:n+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(i))}}},p=f,m=o("2877"),b=Object(m["a"])(p,n,i,!1,null,null,null);t["default"]=b.exports},addb:function(e,t,o){var n=o("f36a"),i=Math.floor,r=function(e,t){var o=e.length,s=i(o/2);return o<8?l(e,t):a(e,r(n(e,0,s),t),r(n(e,s),t),t)},l=function(e,t){var o,n,i=e.length,r=1;while(r<i){n=r,o=e[r];while(n&&t(e[n-1],o)>0)e[n]=e[--n];n!==r++&&(e[n]=o)}return e},a=function(e,t,o,n){var i=t.length,r=o.length,l=0,a=0;while(l<i||a<r)e[l+a]=l<i&&a<r?n(t[l],o[a])<=0?t[l++]:o[a++]:l<i?t[l++]:o[a++];return e};e.exports=r},d784:function(e,t,o){"use strict";o("ac1f");var n=o("e330"),i=o("6eeb"),r=o("9263"),l=o("d039"),a=o("b622"),s=o("9112"),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,o,d){var f=a(e),p=!l((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),m=p&&!l((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[c]=function(){return o},o.flags="",o[f]=/./[f]),o.exec=function(){return t=!0,null},o[f](""),!t}));if(!p||!m||o){var b=n(/./[f]),h=t(f,""[e],(function(e,t,o,i,l){var a=n(e),s=t.exec;return s===r||s===u.exec?p&&!l?{done:!0,value:b(t,o,i)}:{done:!0,value:a(o,t,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(u,f,h[1])}d&&s(u[f],"sham",!0)}},d998:function(e,t,o){var n=o("342f");e.exports=/MSIE|Trident/.test(n)},e9c4:function(e,t,o){var n=o("23e7"),i=o("da84"),r=o("d066"),l=o("2ba4"),a=o("e330"),s=o("d039"),c=i.Array,u=r("JSON","stringify"),d=a(/./.exec),f=a("".charAt),p=a("".charCodeAt),m=a("".replace),b=a(1..toString),h=/[\uD800-\uDFFF]/g,S=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,v=function(e,t,o){var n=f(o,t-1),i=f(o,t+1);return d(S,e)&&!d(g,i)||d(g,e)&&!d(S,n)?"\\u"+b(p(e,0),16):e},C=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:C},{stringify:function(e,t,o){for(var n=0,i=arguments.length,r=c(i);n<i;n++)r[n]=arguments[n];var a=l(u,null,r);return"string"==typeof a?m(a,h,v):a}})}}]);
//# sourceMappingURL=chunk-652681bc.370cb2e4.js.map