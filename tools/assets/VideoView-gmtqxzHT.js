import{d as j,r as y,o as n,c as i,a as f,b as e,w as p,F as c,e as t,f as V,g,E as v,_ as q}from"./index-DFrWJJtT.js";const k=["src"],C=j({__name:"VideoView",setup(B){const l=y({url:"",videoUrl:"",api:0}),r=[{value:"https://www.ckplayer.vip/jiexi/?url=",label:"Ckplayer"},{value:"https://yparse.ik9.cc/index.php?url=",label:"云析"},{value:"https://www.8090g.cn/?url=",label:"8090"},{value:" https://www.ckplayer.vip/jiexi/?url=",label:"ckplayer"},{value:"https://jx.qqwtt.com/?url=",label:"qqwtt"},{value:"https://www.pouyun.com/?url=",label:"剖元"},{value:"https://jx.m3u8.tv/jiexi/?url=",label:"⑤号接口"},{value:"https://z1.m1907.top/?jx=",label:"m1907解析"},{value:"https://www.8090.la/8090/?url=",label:"全能vip接口②"},{value:"https://www.pangujiexi.com/jiexi/?url=",label:"盘古"},{value:"https://dmjx.m3u8.tv/?url=",label:"eptept"},{value:"https://vip.bljiex.com/?v=",label:"BL"},{value:"https://www.mtosz.com/m3u8.php?url=",label:"Mao解析"},{value:"https://www.playm3u8.cn/jiexi.php?url=",label:"play"},{value:"https://www.yemu.xyz/?url=",label:"夜幕"},{value:"https://jx.m3u8.tv/jiexi/?url=",label:"TV解析[腾讯 (芒果)]"},{value:"https://api.qianqi.net/vip/?url=",label:"冰豆"},{value:"https://jx.playerjy.com/?url=",label:"JY"},{value:"https://jx.we-vip.com/?url=",label:"JY解析"},{value:"https://www.8090g.cn/jiexi/?url=",label:"⑸号解析接口"},{value:"https://jx.jsonplayer.com/player/?url=",label:"综合/B站"},{value:"https://jx.playerjy.com/?url=",label:"Player-JY"},{value:"https://jx.xmflv.com/?url=",label:"虾米1"},{value:"https://jx.xmflv.cc/?url=",label:"虾米2"},{value:"https://im1907.top/?jx=",label:"m1907"},{value:"https://jx.m3u8.tv/jiexi/?url=",label:"CK"},{value:"https://www.8090g.cn/?url=",label:"8090"},{value:"https://api.qianqi.net/vip/?url=",label:"qianqi"},{value:"https://jx.yangtu.top/?url=",label:"样图内置"}],m=()=>{if(l.url==""){v({message:"请输入要解析的视频地址",type:"error"});return}if(!r[l.api]){v({message:"请选择要使用的解析接口",type:"error"});return}l.videoUrl=r[l.api].value+l.url};return(U,a)=>{const w=t("el-divider"),d=t("el-option"),b=t("el-select"),o=t("el-col"),_=t("el-button"),x=t("el-input"),h=t("el-row");return n(),i(c,null,[f("iframe",{class:"video-player",src:l.videoUrl,allowtransparency:"true",frameborder:"0",scrolling:"no",allowfullscreen:"true"},null,8,k),e(w),e(h,{class:"mb-10 pl-20 pr-20"},{default:p(()=>[e(o,{span:3},{default:p(()=>[e(b,{modelValue:l.api,"onUpdate:modelValue":a[0]||(a[0]=u=>l.api=u),placeholder:"解析接口"},{default:p(()=>[(n(),i(c,null,V(r,(u,s)=>e(d,{key:s,label:u.label,value:s},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(o,{span:18},{default:p(()=>[e(x,{modelValue:l.url,"onUpdate:modelValue":a[1]||(a[1]=u=>l.url=u),placeholder:"请输入视频地址"},{append:p(()=>[e(_,{type:"primary",onClick:m},{default:p(()=>a[2]||(a[2]=[g("解析")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}}),E=q(C,[["__scopeId","data-v-f4995ed6"]]);export{E as default};
