(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"765b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-banner",{staticClass:"navgitor-banner q-my-md",attrs:{rounded:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"row items-center cursor-pointer",on:{click:function(){t.$router.back()}}},[a("q-icon",{attrs:{name:"arrow_back",size:"25px"}}),a("span",{staticClass:"backTitle q-ml-sm"},[t._v("返回")])],1)])]),a("q-card",{staticClass:"q-mx-md"},[a("q-card-section",{staticClass:"row justify-md-between q-gutter-md-x-md justify-xs-center\n    "},[a("q-card",{staticClass:"img-box col-md-2 col-xs-12"},[a("q-card-section",{staticClass:"q-pa-none"},[a("q-img",{attrs:{src:t.djDetail.picUrl}})],1)],1),a("q-card",{staticClass:"col-md col-xs-12"},[a("q-card-section",[a("q-chip",{staticClass:"q-mr-sm glossy",attrs:{color:"teal","text-color":"white",icon:"audiotrack"}},[t._v("电台")]),t._v(t._s(t.djDetail.name)+"\n        ")],1),a("q-card-section",{staticClass:"q-pt-none row items-center"},[a("q-avatar",[a("img",{attrs:{src:t.djDetail.author.avatar,alt:""}})]),a("div",{staticClass:"q-ml-sm"},[a("p",[t._v(t._s(t.djDetail.author.nickName)+" "),0!=t.djDetail.author.gender?a("q-icon",{attrs:{name:1==t.djDetail.author.gender?"icon-male":"icon-female"}}):t._e()],1),a("p",[t._v(t._s(t.djDetail.author.birthday))])])],1),a("q-card-section",[a("span",{staticClass:"q-mr-md"},[t._v("订阅数："+t._s(t.farmatNumTenThousand(t.djDetail.subCount)))]),a("span",[t._v("分享数："+t._s(t.farmatNumTenThousand(t.djDetail.shareCount)))])]),a("q-card-section",[a("q-badge",{staticClass:"q-mr-sm",attrs:{outline:"",color:"orange",label:t.djDetail.category}}),t._v(t._s(t.djDetail.desc)+"\n        ")],1)],1)],1)],1),a("q-card",{staticClass:"q-mx-md q-mt-md"},[a("q-card-section",[t._v("\n      节目列表 共"+t._s(t.djProgramList.length)+"期\n    ")]),a("q-card-section",{},[a("q-list",{attrs:{bordered:"",separator:""}},t._l(t.djProgramList,(function(e,s){return a("q-item",{key:s,attrs:{clickable:"",active:e.mainSong.id==t.returnID,"active-class":"bg-teal-3 text-cyan-10"}},[a("q-item-section",{staticClass:"text-center",attrs:{avatar:""}},[t._v(t._s(s+1))]),a("q-item-section",{on:{click:function(a){return t.gotoView("/djProgramDetail",e.id)}}},[t._v(t._s(e.name))]),a("q-item-section",{staticClass:"gt-xs"},[t._v("播放："+t._s(t.farmatNumTenThousand(e.listenerCount)))]),a("q-item-section",{staticClass:"gt-xs"},[t._v("赞："+t._s(t.farmatNumTenThousand(e.liked)))]),a("q-item-section",{staticClass:"gt-xs"},[t._v(t._s(t.timestampToTime(e.createTime)))]),a("q-item-section",{staticClass:"gt-xs"},[t._v(t._s(t.formatSeconds(e.duration/1e3)))]),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{color:"green",name:e.mainSong.id==t.returnID?"pause_circle_outline":"play_circle_outline"},on:{click:function(a){return t.playDj(e,1)}}})],1)],1)})),1)],1)],1)],1)},r=[],i=a("bad0"),o=a("a9b3"),n={name:"djDetail",data(){return{djId:"",djDetail:{id:"",name:"",picUrl:"",shareCount:"",subCount:"",desc:"",category:"",author:""},djProgramList:[],farmatNumTenThousand:i["a"].farmatNumTenThousand,formatSeconds:i["a"].formatSeconds,timestampToTime:i["a"].timestampToTime}},mixins:[o["a"]],computed:{returnID(){return this.$store.getters.getSongData.id}},created(){this.djId=this.$route.query.id},mounted(){this.getDjDetail(),this.getDjProgram()},methods:{gotoView(t,e){this.$router.push({path:t,query:{id:e}})},getDjDetail(){i["a"].utils.getDJDetail(this.djId,(t=>{if(200==t.code){let e=t.data;this.djDetail={id:e.id,name:e.name,picUrl:e.picUrl,shareCount:e.shareCount,subCount:e.subCount,desc:e.desc,category:e.category,author:{uid:e.dj.userId,nickName:e.dj.nickname,avatar:e.dj.avatarUrl,gender:e.dj.gender,birthday:i["a"].timestampToTime(e.dj.birthday)}}}}),(()=>{}))},getDjProgram(){i["a"].utils.getDJProgram(this.djId,(t=>{if(200==t.code){let s=t.programs;for(var e=0;e<s.length;e++){var a={};a.id=s[e].id,a.mainSong={id:s[e].mainSong.id,author:s[e].mainSong.artists[0].name||"(未命名)",avatar:s[e].mainSong.artists[0].picUrl},a.name=s[e].name,a.picUrl=s[e].coverUrl,a.createTime=s[e].createTime,a.liked=s[e].likedCount,a.listenerCount=s[e].listenerCount,a.duration=s[e].duration,this.djProgramList.push(a)}}}),(()=>{}))}}},l=n,m=a("2877"),d=a("9989"),c=a("54e1"),u=a("0016"),g=a("f09f"),p=a("a370"),h=a("068f"),j=a("b047"),q=a("cb32"),D=a("58a81"),v=a("1c1c"),y=a("66e5"),C=a("4074"),b=a("eebe"),_=a.n(b),U=Object(m["a"])(l,s,r,!1,null,null,null);e["default"]=U.exports;_()(U,"components",{QPage:d["a"],QBanner:c["a"],QIcon:u["a"],QCard:g["a"],QCardSection:p["a"],QImg:h["a"],QChip:j["a"],QAvatar:q["a"],QBadge:D["a"],QList:v["a"],QItem:y["a"],QItemSection:C["a"]})},a9b3:function(t,e,a){"use strict";let s={data(){},methods:{playMusic(t,e){let a={id:t.id,name:t.name,avatar:t.picUrl||t.avatar,author:t.author||t.song.artists[0].name||"未命名"};localStorage.setItem("playHistory",JSON.stringify(a)),this.$store.commit("changePlaySwitch",!1),setTimeout((()=>{this.$store.commit("changePlaySwitch",!0)})),this.$store.commit("changeSongData",a),this.$store.commit("changePlayList",e)},playDj(t,e){let a=null;a=1==e?{id:t.mainSong.id,name:t.name,avatar:t.picUrl,author:t.mainSong.author}:{id:t.playId,name:t.name,avatar:t.author.avatar,author:t.author.nickname},localStorage.setItem("playHistory",JSON.stringify(a)),this.$store.commit("changePlaySwitch",!1),setTimeout((()=>{this.$store.commit("changePlaySwitch",!0)})),this.$store.commit("changeSongData",a)}}};e["a"]=s},b3a7:function(t,e,a){"use strict";let s={historyList:[],searchType:1,serverUrl:"http://localhost:3000/",urlList:{playlist_hot:"/playlist/hot",reCommNewsone:"/personalized/newsong",reCommMv:"/personalized/mv",reCommDjprogram:"/personalized/djprogram",reCommProgram:"/program/recommend",songDetail:"/song/detail",songUrl:"/song/url",songLyric:"/lyric",song_new_top:"/top/song",banner:"/banner",finds:"/homepage/block/page",search:"/search",cloudsearch:"/cloudsearch",mvUrl:"/mv/url",vdoUrl:"/video/url",vdoDetail:"/video/detail",relatedVdo:"/related/allvideo",djHot:"/dj/hot",djProgramTop:"/dj/program/toplist",djPay:"/dj/toplist/pay",djProgramHours:"/dj/program/toplist/hours",djToplistHours:"/dj/toplist/hours",djNewComer:"/dj/toplist/newcomer",djPopular:"/dj/toplist/popular",djRecommend:"/dj/recommend",djSubscriber:"/dj/subscriber",djDetail:"/dj/detail",djProgram:"/dj/program",djProgramDetail:"/dj/program/detail",comment_dj:"/comment/dj",comment_video:"/comment/video",comment_hot:"/comment/hot",comment_music:"/comment/music",comment_mv:"/comment/mv",comment_playList:"/comment/playlist"}};e["a"]=s},bad0:function(t,e,a){"use strict";var s=a("b3a7"),r=(a("e6cf"),a("bc3a")),i=a.n(r),o=a("4328"),n=a.n(o);i.a.defaults.withCredentials=!0,i.a.defaults.baseURL=s["a"].serverUrl,i.a.interceptors.request.use((t=>("post"!==t.meth||t.data instanceof FormData||(t.headers={"Content-Type":"application/x-www-form-urlencoded"},t.data=n.a.stringify(t.data,{arrayFormat:"repeat"})),t)),(t=>{console.log(t)})),i.a.interceptors.response.use((t=>t),(t=>Promise.resolve(t)));var l=i.a,m=a("2a19"),d=a("436b");let c={netUtils:{requestDataAxios(t,e,a,s,r="post"){l({url:t,data:e,method:r,withCredentials:!0}).then((t=>{console.log(t),a(t.data)})).catch((t=>{s(t)}))},requestAxios(t,e,a,s="post"){l({url:t,method:s,withCredentials:!0}).then((t=>{console.log(t),e(t.data)})).catch((t=>{a(t)}))}},utils:{getHotMusic(t,e){c.netUtils.requestAxios(s["a"].urlList.hot,t,e,"post")},getReCommNewSone(t,e){c.netUtils.requestAxios(s["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeMv(t,e){c.netUtils.requestAxios(s["a"].urlList.reCommMv,t,e,"post")},getRecommSongList(t,e){c.netUtils.requestAxios(s["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeDJ(t,e){c.netUtils.requestAxios(s["a"].urlList.reCommDjprogram,t,e,"post")},getSongUrl(t,e,a){c.netUtils.requestDataAxios(s["a"].urlList.songUrl+"?id="+t.id,t,e,a,"get")},getSongDetail(t,e,a){c.netUtils.requestAxios(s["a"].urlList.songDetail+"?ids="+t.id,e,a,"get")},getMvUrl(t,e,a){c.netUtils.requestAxios(s["a"].urlList.mvUrl+"?id="+t,e,a,"get")},getSearchResult(t,e,a){c.netUtils.requestAxios(s["a"].urlList.search+"?keywords="+t.keywords,e,a,"get")},getCloudSearchResult(t,e,a){c.netUtils.requestAxios(s["a"].urlList.cloudsearch+"?keywords="+t.keywords+"&type="+t.type+"&limit=100&offset=0",e,a,"get")},getSongLyric(t,e,a){c.netUtils.requestAxios(s["a"].urlList.songLyric+"?id="+t,e,a,"get")},getBannerImageData(t,e){c.netUtils.requestAxios(s["a"].urlList.banner,t,e,"get")},getHomeBlock(t,e){c.netUtils.requestAxios(s["a"].urlList.finds,t,e,"get")},getDJHotData(t,e){c.netUtils.requestAxios(s["a"].urlList.djHot+"?limit=100",t,e,"get")},getDJProgramTopData(t,e){c.netUtils.requestAxios(s["a"].urlList.djProgramTop,t,e,"get")},getDJPayTopData(t,e){c.netUtils.requestAxios(s["a"].urlList.djPay,t,e,"get")},getDJSubscriber(t,e,a){c.netUtils.requestAxios(s["a"].urlList.djSubscriber+"?id="+t+"&limit=100",e,a,"get")},getDJDetail(t,e,a){c.netUtils.requestAxios(s["a"].urlList.djDetail+"?rid="+t,e,a,"get")},getDJProgram(t,e,a){c.netUtils.requestAxios(s["a"].urlList.djProgram+"?rid="+t,e,a,"get")},getDJProgramDetail(t,e,a){c.netUtils.requestAxios(s["a"].urlList.djProgramDetail+"?id="+t,e,a,"get")},getDJComment(t,e,a){c.netUtils.requestAxios(s["a"].urlList.comment_dj+"?id="+t,e,a,"get")},getVedioUrl(t,e,a){c.netUtils.requestAxios(s["a"].urlList.vdoUrl+"?id="+t,e,a,"get")},getVedioDetail(t,e,a){c.netUtils.requestAxios(s["a"].urlList.vdoDetail+"?id="+t,e,a,"get")}},formatSeconds(t){var e=parseInt(t),a=0,s="";return e>60&&(a=parseInt(e/60),e=parseInt(e%60)),s=a>0?(parseInt(a)>=10?parseInt(a):"0"+parseInt(a))+":"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)):"00:"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)),s},timestampToTime(t){var e=new Date(t),a=e.getFullYear()+"-",s=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=e.getDate()+1<10?"0"+(e.getDate()+1):e.getDate()+1;return a+s+r},AlertDialog(t,e,a){d["a"].create({title:t,message:e}).onOk((()=>{a()}))},ShowNotify(t){m["a"].create({message:t})},farmatNumTenThousand(t){return t>1e4?(t/1e4).toFixed(2)+"万":t}};e["a"]=c}}]);