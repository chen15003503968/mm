(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"20fb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-banner",{staticClass:"navgitor-banner q-my-md",attrs:{rounded:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"row items-center cursor-pointer",on:{click:function(){t.$router.back()}}},[a("q-icon",{attrs:{name:"arrow_back",size:"25px"}}),a("span",{staticClass:"backTitle q-ml-sm"},[t._v("返回")])],1)])]),a("q-card",{staticClass:"q-mx-md"},[a("q-card-section",{staticClass:"row justify-md-between q-gutter-md-x-md justify-xs-center items-start"},[a("q-card",{staticClass:"col-md-2 col-xs-12"},[a("q-card-section",{staticClass:"q-pa-none"},[a("q-img",{attrs:{src:t.djProgram.picUrl,"spinner-color":"orange"}})],1)],1),a("q-card",{staticClass:"col-md col-xs-12"},[a("q-card-section",[a("q-chip",{staticClass:"q-mr-sm glossy",attrs:{color:"teal","text-color":"white",icon:"audiotrack"}},[t._v("电台节目详情")]),t._v(t._s(t.djProgram.name)+"\n        ")],1),a("q-card-section",{staticClass:"q-pt-none row items-center"},[a("q-avatar",[a("img",{attrs:{src:t.djProgram.author.avatar,alt:""}})]),a("div",{staticClass:"q-ml-sm"},[a("p",[t._v(t._s(t.djProgram.author.nickname)+" "),0!=t.djProgram.author.gender?a("q-icon",{attrs:{name:1==t.djProgram.author.gender?"icon-male":"icon-female"}}):t._e()],1),a("p",[t._v(t._s(t.djProgram.author.birthday))])])],1),a("q-card-section",{staticClass:"q-pt-none"},[a("span",[t._v("播放："+t._s(t.farmatNumTenThousand(t.djProgram.listenerCount)))]),a("span",{staticClass:"q-mx-md"},[t._v("赞："+t._s(t.farmatNumTenThousand(t.djProgram.likedCount)))]),a("span",[t._v("创建时间："+t._s(t.timestampToTime(t.djProgram.createTime)))])]),a("q-card-section",{staticClass:"q-pt-none desc"},[a("q-badge",{staticClass:"q-mr-md",attrs:{outline:"",color:"orange"}},[t._v(t._s(t.djProgram.categoryName))]),t._v(" "+t._s(t.djProgram.description)+"\n        ")],1),a("q-card-section",{staticClass:"q-pt-none"},[a("q-btn",{attrs:{icon:"play_circle_outline",color:"teal-4",label:"播放 "+t.farmarS(t.djProgram.duration/1e3)},on:{click:function(e){return t.playDj(t.djProgram,2)}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{color:"teal-4",label:"电台详情"},on:{click:function(e){return t.gotoView("/djRadioDetail",t.djProgram.rid)}}})],1)],1)],1)],1),a("q-card",{staticClass:"q-mx-md q-mt-md"},[a("q-card-section",{staticClass:"text-bold text-h6"},[t._v("\n      节目评论 ("+t._s(t.topCommentList.length+t.hotCommentList.length+t.commentList.length)+")\n    ")]),0!=t.topCommentList.length?a("q-card-section",t._l(t.topCommentList,(function(e,s){return a("div",{key:"hot"+s,staticClass:"row items-center comment-item"},[a("q-avatar",[a("img",{attrs:{src:e.user.avatar,alt:""}})]),a("div",{staticClass:"q-ml-md col"},[a("div",{staticClass:"row justify-between"},[a("p",{staticClass:"nickname"},[t._v(t._s(e.user.nickname)+": "),a("q-badge",{staticClass:"q-ml-sm",attrs:{color:"blue",outline:""}},[t._v("置顶")])],1),a("p",[t._v(t._s(e.time))])]),a("p",{staticClass:"content"},[t._v(t._s(e.content))])])],1)})),0):t._e(),0!=t.hotCommentList.length?a("q-card-section",t._l(t.hotCommentList,(function(e,s){return a("div",{key:"hot"+s,staticClass:"row items-center comment-item"},[a("q-avatar",[a("img",{attrs:{src:e.user.avatar,alt:""}})]),a("div",{staticClass:"q-ml-md col"},[a("div",{staticClass:"row justify-between"},[a("p",{staticClass:"nickname"},[t._v(t._s(e.user.nickname)+": "),a("q-badge",{staticClass:"q-ml-sm",attrs:{color:"red",outline:""}},[t._v("热评"),a("q-icon",{staticClass:"q-ml-xs",attrs:{name:"favorite"}})],1)],1),a("p",[t._v(t._s(e.time))])]),a("p",{staticClass:"content"},[t._v(t._s(e.content))])])],1)})),0):t._e(),0!=t.commentList.length?a("q-card-section",{staticClass:"q-pt-none"},t._l(t.commentList,(function(e,s){return a("div",{key:s,staticClass:"row items-center comment-item"},[a("q-avatar",[a("img",{attrs:{src:e.user.avatar,alt:""}})]),a("div",{staticClass:"q-ml-md col"},[a("div",{staticClass:"row justify-between"},[a("p",{staticClass:"nickname"},[t._v(t._s(e.user.nickname)+":")]),a("p",[t._v(t._s(e.time))])]),a("p",{staticClass:"content"},[t._v(t._s(e.content))])])],1)})),0):a("q-card-section",{staticClass:"text-center"},[t._v("\n      ------------  这个节目没有评论`(*>﹏<*)′  -------------\n    ")])],1)],1)},r=[],o=(a("e01a"),a("bad0")),i=a("a9b3"),n={name:"djProgramDetail",data(){return{proId:"",djProgram:{id:"",playId:"",name:"",categoryName:"",picUrl:"",description:"",likedCount:"",listenerCount:"",author:""},commentList:[],hotCommentList:[],topCommentList:[],timestampToTime:o["a"].timestampToTime,farmatNumTenThousand:o["a"].farmatNumTenThousand,farmarS:o["a"].formatSeconds}},mixins:[i["a"]],created(){let t=this.$route.query.id;t&&(this.proId=t)},mounted(){this.getProgramDetail(),this.getCommentDJ()},methods:{gotoView(t,e){this.$router.push({path:t,query:{id:e}})},getProgramDetail(){o["a"].utils.getDJProgramDetail(this.proId,(t=>{if(console.log(t,"*--------*"),200==t.code){let e=t.program;this.djProgram={id:e.id,rid:e.radio.id,playId:e.mainTrackId,name:e.name,categoryName:e.categoryName,picUrl:e.coverUrl,description:e.description,likedCount:e.likedCount,listenerCount:e.listenerCount,createTime:e.createTime,duration:e.duration,author:{id:e.dj.userId,nickname:e.dj.nickname,birthday:this.timestampToTime(e.dj.birthday),avatar:e.dj.avatarUrl,gender:e.dj.gender}}}}),(()=>{}))},getCommentDJ(){o["a"].utils.getDJComment(this.proId,(t=>{let e=t.comments,a=t.hotComments,s=t.topComments;if(200==t.code){for(var r=0;r<e.length;r++){let t={id:e[r].commentId,content:e[r].content,likedCount:e[r].likedCount,time:this.timestampToTime(e[r].time),user:{id:e[r].user.userId,nickname:e[r].user.nickname,avatar:e[r].user.avatarUrl}};this.commentList.push(t)}for(var o=0;o<a.length;o++){let t={id:a[o].commentId,content:a[o].content,likedCount:a[o].likedCount,time:this.timestampToTime(a[o].time),user:{id:a[o].user.userId,nickname:a[o].user.nickname,avatar:a[o].user.avatarUrl}};this.hotCommentList.push(t)}for(var i=0;i<s.length;i++){let t={id:s[i].commentId,content:s[i].content,likedCount:s[i].likedCount,time:this.timestampToTime(s[i].time),user:{id:s[i].user.userId,nickname:s[i].user.nickname,avatar:s[i].user.avatarUrl}};this.topCommentList.push(t)}}}),(()=>{}))}}},m=n,l=(a("237a"),a("2877")),c=a("9989"),d=a("54e1"),u=a("0016"),g=a("f09f"),p=a("a370"),h=a("068f"),v=a("b047"),C=a("cb32"),q=a("58a81"),j=a("9c40"),_=a("eebe"),y=a.n(_),f=Object(l["a"])(m,s,r,!1,null,null,null);e["default"]=f.exports;y()(f,"components",{QPage:c["a"],QBanner:d["a"],QIcon:u["a"],QCard:g["a"],QCardSection:p["a"],QImg:h["a"],QChip:v["a"],QAvatar:C["a"],QBadge:q["a"],QBtn:j["a"]})},"237a":function(t,e,a){"use strict";a("da00")},a9b3:function(t,e,a){"use strict";let s={data(){},methods:{playMusic(t,e){let a={id:t.id,name:t.name,avatar:t.picUrl||t.avatar,author:t.author||t.song.artists[0].name||"未命名"};localStorage.setItem("playHistory",JSON.stringify(a)),this.$store.commit("changePlaySwitch",!1),setTimeout((()=>{this.$store.commit("changePlaySwitch",!0)})),this.$store.commit("changeSongData",a),this.$store.commit("changePlayList",e)},playDj(t,e){let a=null;a=1==e?{id:t.mainSong.id,name:t.name,avatar:t.picUrl,author:t.mainSong.author}:{id:t.playId,name:t.name,avatar:t.author.avatar,author:t.author.nickname},localStorage.setItem("playHistory",JSON.stringify(a)),this.$store.commit("changePlaySwitch",!1),setTimeout((()=>{this.$store.commit("changePlaySwitch",!0)})),this.$store.commit("changeSongData",a)}}};e["a"]=s},b3a7:function(t,e,a){"use strict";let s={historyList:[],searchType:1,serverUrl:"http://localhost:3000/",urlList:{playlist_hot:"/playlist/hot",reCommNewsone:"/personalized/newsong",reCommMv:"/personalized/mv",reCommDjprogram:"/personalized/djprogram",reCommProgram:"/program/recommend",songDetail:"/song/detail",songUrl:"/song/url",songLyric:"/lyric",song_new_top:"/top/song",banner:"/banner",finds:"/homepage/block/page",search:"/search",cloudsearch:"/cloudsearch",mvUrl:"/mv/url",vdoUrl:"/video/url",vdoDetail:"/video/detail",relatedVdo:"/related/allvideo",djHot:"/dj/hot",djProgramTop:"/dj/program/toplist",djPay:"/dj/toplist/pay",djProgramHours:"/dj/program/toplist/hours",djToplistHours:"/dj/toplist/hours",djNewComer:"/dj/toplist/newcomer",djPopular:"/dj/toplist/popular",djRecommend:"/dj/recommend",djSubscriber:"/dj/subscriber",djDetail:"/dj/detail",djProgram:"/dj/program",djProgramDetail:"/dj/program/detail",comment_dj:"/comment/dj",comment_video:"/comment/video",comment_hot:"/comment/hot",comment_music:"/comment/music",comment_mv:"/comment/mv",comment_playList:"/comment/playlist"}};e["a"]=s},bad0:function(t,e,a){"use strict";var s=a("b3a7"),r=(a("e6cf"),a("bc3a")),o=a.n(r),i=a("4328"),n=a.n(i);o.a.defaults.withCredentials=!0,o.a.defaults.baseURL=s["a"].serverUrl,o.a.interceptors.request.use((t=>("post"!==t.meth||t.data instanceof FormData||(t.headers={"Content-Type":"application/x-www-form-urlencoded"},t.data=n.a.stringify(t.data,{arrayFormat:"repeat"})),t)),(t=>{console.log(t)})),o.a.interceptors.response.use((t=>t),(t=>Promise.resolve(t)));var m=o.a,l=a("2a19"),c=a("436b");let d={netUtils:{requestDataAxios(t,e,a,s,r="post"){m({url:t,data:e,method:r,withCredentials:!0}).then((t=>{console.log(t),a(t.data)})).catch((t=>{s(t)}))},requestAxios(t,e,a,s="post"){m({url:t,method:s,withCredentials:!0}).then((t=>{console.log(t),e(t.data)})).catch((t=>{a(t)}))}},utils:{getHotMusic(t,e){d.netUtils.requestAxios(s["a"].urlList.hot,t,e,"post")},getReCommNewSone(t,e){d.netUtils.requestAxios(s["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeMv(t,e){d.netUtils.requestAxios(s["a"].urlList.reCommMv,t,e,"post")},getRecommSongList(t,e){d.netUtils.requestAxios(s["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeDJ(t,e){d.netUtils.requestAxios(s["a"].urlList.reCommDjprogram,t,e,"post")},getSongUrl(t,e,a){d.netUtils.requestDataAxios(s["a"].urlList.songUrl+"?id="+t.id,t,e,a,"get")},getSongDetail(t,e,a){d.netUtils.requestAxios(s["a"].urlList.songDetail+"?ids="+t.id,e,a,"get")},getMvUrl(t,e,a){d.netUtils.requestAxios(s["a"].urlList.mvUrl+"?id="+t,e,a,"get")},getSearchResult(t,e,a){d.netUtils.requestAxios(s["a"].urlList.search+"?keywords="+t.keywords,e,a,"get")},getCloudSearchResult(t,e,a){d.netUtils.requestAxios(s["a"].urlList.cloudsearch+"?keywords="+t.keywords+"&type="+t.type+"&limit=100&offset=0",e,a,"get")},getSongLyric(t,e,a){d.netUtils.requestAxios(s["a"].urlList.songLyric+"?id="+t,e,a,"get")},getBannerImageData(t,e){d.netUtils.requestAxios(s["a"].urlList.banner,t,e,"get")},getHomeBlock(t,e){d.netUtils.requestAxios(s["a"].urlList.finds,t,e,"get")},getDJHotData(t,e){d.netUtils.requestAxios(s["a"].urlList.djHot+"?limit=100",t,e,"get")},getDJProgramTopData(t,e){d.netUtils.requestAxios(s["a"].urlList.djProgramTop,t,e,"get")},getDJPayTopData(t,e){d.netUtils.requestAxios(s["a"].urlList.djPay,t,e,"get")},getDJSubscriber(t,e,a){d.netUtils.requestAxios(s["a"].urlList.djSubscriber+"?id="+t+"&limit=100",e,a,"get")},getDJDetail(t,e,a){d.netUtils.requestAxios(s["a"].urlList.djDetail+"?rid="+t,e,a,"get")},getDJProgram(t,e,a){d.netUtils.requestAxios(s["a"].urlList.djProgram+"?rid="+t,e,a,"get")},getDJProgramDetail(t,e,a){d.netUtils.requestAxios(s["a"].urlList.djProgramDetail+"?id="+t,e,a,"get")},getDJComment(t,e,a){d.netUtils.requestAxios(s["a"].urlList.comment_dj+"?id="+t,e,a,"get")},getVedioUrl(t,e,a){d.netUtils.requestAxios(s["a"].urlList.vdoUrl+"?id="+t,e,a,"get")},getVedioDetail(t,e,a){d.netUtils.requestAxios(s["a"].urlList.vdoDetail+"?id="+t,e,a,"get")}},formatSeconds(t){var e=parseInt(t),a=0,s="";return e>60&&(a=parseInt(e/60),e=parseInt(e%60)),s=a>0?(parseInt(a)>=10?parseInt(a):"0"+parseInt(a))+":"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)):"00:"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)),s},timestampToTime(t){var e=new Date(t),a=e.getFullYear()+"-",s=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=e.getDate()+1<10?"0"+(e.getDate()+1):e.getDate()+1;return a+s+r},AlertDialog(t,e,a){c["a"].create({title:t,message:e}).onOk((()=>{a()}))},ShowNotify(t){l["a"].create({message:t})},farmatNumTenThousand(t){return t>1e4?(t/1e4).toFixed(2)+"万":t}};e["a"]=d},da00:function(t,e,a){}}]);