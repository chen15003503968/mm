(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"6fbe":function(t,e,s){},"74be":function(t,e,s){"use strict";s("6fbe")},b3a7:function(t,e,s){"use strict";let a={historyList:[],searchType:1,serverUrl:"http://localhost:3000/",urlList:{playlist_hot:"/playlist/hot",reCommNewsone:"/personalized/newsong",reCommMv:"/personalized/mv",reCommDjprogram:"/personalized/djprogram",reCommProgram:"/program/recommend",songDetail:"/song/detail",songUrl:"/song/url",songLyric:"/lyric",song_new_top:"/top/song",banner:"/banner",finds:"/homepage/block/page",search:"/search",cloudsearch:"/cloudsearch",mvUrl:"/mv/url",vdoUrl:"/video/url",vdoDetail:"/video/detail",relatedVdo:"/related/allvideo",djHot:"/dj/hot",djProgramTop:"/dj/program/toplist",djPay:"/dj/toplist/pay",djProgramHours:"/dj/program/toplist/hours",djToplistHours:"/dj/toplist/hours",djNewComer:"/dj/toplist/newcomer",djPopular:"/dj/toplist/popular",djRecommend:"/dj/recommend",djSubscriber:"/dj/subscriber",djDetail:"/dj/detail",djProgram:"/dj/program",djProgramDetail:"/dj/program/detail",comment_dj:"/comment/dj",comment_video:"/comment/video",comment_hot:"/comment/hot",comment_music:"/comment/music",comment_mv:"/comment/mv",comment_playList:"/comment/playlist"}};e["a"]=a},bad0:function(t,e,s){"use strict";var a=s("b3a7"),r=(s("e6cf"),s("bc3a")),o=s.n(r),i=s("4328"),l=s.n(i);o.a.defaults.withCredentials=!0,o.a.defaults.baseURL=a["a"].serverUrl,o.a.interceptors.request.use((t=>("post"!==t.meth||t.data instanceof FormData||(t.headers={"Content-Type":"application/x-www-form-urlencoded"},t.data=l.a.stringify(t.data,{arrayFormat:"repeat"})),t)),(t=>{console.log(t)})),o.a.interceptors.response.use((t=>t),(t=>Promise.resolve(t)));var n=o.a,d=s("2a19"),m=s("436b");let u={netUtils:{requestDataAxios(t,e,s,a,r="post"){n({url:t,data:e,method:r,withCredentials:!0}).then((t=>{console.log(t),s(t.data)})).catch((t=>{a(t)}))},requestAxios(t,e,s,a="post"){n({url:t,method:a,withCredentials:!0}).then((t=>{console.log(t),e(t.data)})).catch((t=>{s(t)}))}},utils:{getHotMusic(t,e){u.netUtils.requestAxios(a["a"].urlList.hot,t,e,"post")},getReCommNewSone(t,e){u.netUtils.requestAxios(a["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeMv(t,e){u.netUtils.requestAxios(a["a"].urlList.reCommMv,t,e,"post")},getRecommSongList(t,e){u.netUtils.requestAxios(a["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeDJ(t,e){u.netUtils.requestAxios(a["a"].urlList.reCommDjprogram,t,e,"post")},getSongUrl(t,e,s){u.netUtils.requestDataAxios(a["a"].urlList.songUrl+"?id="+t.id,t,e,s,"get")},getSongDetail(t,e,s){u.netUtils.requestAxios(a["a"].urlList.songDetail+"?ids="+t.id,e,s,"get")},getMvUrl(t,e,s){u.netUtils.requestAxios(a["a"].urlList.mvUrl+"?id="+t,e,s,"get")},getSearchResult(t,e,s){u.netUtils.requestAxios(a["a"].urlList.search+"?keywords="+t.keywords,e,s,"get")},getCloudSearchResult(t,e,s){u.netUtils.requestAxios(a["a"].urlList.cloudsearch+"?keywords="+t.keywords+"&type="+t.type+"&limit=100&offset=0",e,s,"get")},getSongLyric(t,e,s){u.netUtils.requestAxios(a["a"].urlList.songLyric+"?id="+t,e,s,"get")},getBannerImageData(t,e){u.netUtils.requestAxios(a["a"].urlList.banner,t,e,"get")},getHomeBlock(t,e){u.netUtils.requestAxios(a["a"].urlList.finds,t,e,"get")},getDJHotData(t,e){u.netUtils.requestAxios(a["a"].urlList.djHot+"?limit=100",t,e,"get")},getDJProgramTopData(t,e){u.netUtils.requestAxios(a["a"].urlList.djProgramTop,t,e,"get")},getDJPayTopData(t,e){u.netUtils.requestAxios(a["a"].urlList.djPay,t,e,"get")},getDJSubscriber(t,e,s){u.netUtils.requestAxios(a["a"].urlList.djSubscriber+"?id="+t+"&limit=100",e,s,"get")},getDJDetail(t,e,s){u.netUtils.requestAxios(a["a"].urlList.djDetail+"?rid="+t,e,s,"get")},getDJProgram(t,e,s){u.netUtils.requestAxios(a["a"].urlList.djProgram+"?rid="+t,e,s,"get")},getDJProgramDetail(t,e,s){u.netUtils.requestAxios(a["a"].urlList.djProgramDetail+"?id="+t,e,s,"get")},getDJComment(t,e,s){u.netUtils.requestAxios(a["a"].urlList.comment_dj+"?id="+t,e,s,"get")},getVedioUrl(t,e,s){u.netUtils.requestAxios(a["a"].urlList.vdoUrl+"?id="+t,e,s,"get")},getVedioDetail(t,e,s){u.netUtils.requestAxios(a["a"].urlList.vdoDetail+"?id="+t,e,s,"get")}},formatSeconds(t){var e=parseInt(t),s=0,a="";return e>60&&(s=parseInt(e/60),e=parseInt(e%60)),a=s>0?(parseInt(s)>=10?parseInt(s):"0"+parseInt(s))+":"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)):"00:"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)),a},timestampToTime(t){var e=new Date(t),s=e.getFullYear()+"-",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=e.getDate()+1<10?"0"+(e.getDate()+1):e.getDate()+1;return s+a+r},AlertDialog(t,e,s){m["a"].create({title:t,message:e}).onOk((()=>{s()}))},ShowNotify(t){d["a"].create({message:t})},farmatNumTenThousand(t){return t>1e4?(t/1e4).toFixed(2)+"万":t}};e["a"]=u},ca1b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("q-banner",{staticClass:"navgitor-banner q-my-md",attrs:{rounded:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"row items-center cursor-pointer",on:{click:function(){t.$router.back()}}},[s("q-icon",{attrs:{name:"arrow_back",size:"25px"}}),s("span",{staticClass:"backTitle q-ml-sm"},[t._v("返回")])],1)])]),s("q-card",{staticClass:"q-mx-md"},[s("q-card-section",{staticClass:"flex justify-center"},[s("video",{ref:"vdoPlay",staticStyle:{width:"1400px"},attrs:{src:t.vdoData.url,controls:""},on:{play:t.onPlayVideo,pause:t.onPauseVideo}})]),s("q-card-section",[s("p",{staticClass:"title"},[t._v(t._s(t.vdoData.title))]),s("p",{staticClass:"desc"},[t._v(t._s(t.vdoData.description))])])],1)],1)},r=[],o=(s("e01a"),s("bad0")),i={name:"videoplay",data(){return{vdoData:{},vid:""}},computed:{switchs(){return this.$store.getters.getPlaySwitch}},watch:{switchs(t,e){t&&(console.log(this.$refs.vdoPlay),this.$refs.vdoPlay.pause())}},created(){this.$route.query.id&&(this.vid=this.$route.query.id)},mounted(){this.getVedioDetail()},methods:{onPlayVideo(){this.$store.commit("changePlaySwitch",!1)},onPauseVideo(){},getVideoUrl(t){o["a"].utils.getVedioUrl(t,(t=>{let e=t.urls;200==t.code&&e.map(((t,e)=>{this.vdoData.url=t.url}))}),(()=>{}))},getVedioDetail(t){o["a"].utils.getVedioDetail(this.vid,(t=>{if(200==t.code){let e=t.data;this.vdoData={id:e.vid,avatar:e.avatarUrl,title:e.title,description:e.description,durationms:o["a"].formatSeconds(e.durationms),url:""},this.getVideoUrl(e.vid)}}),(()=>{}))}}},l=i,n=(s("74be"),s("2877")),d=s("9989"),m=s("54e1"),u=s("0016"),c=s("f09f"),g=s("a370"),p=s("eebe"),h=s.n(p),v=Object(n["a"])(l,a,r,!1,null,"42e46c4d",null);e["default"]=v.exports;h()(v,"components",{QPage:d["a"],QBanner:m["a"],QIcon:u["a"],QCard:c["a"],QCardSection:g["a"]})}}]);