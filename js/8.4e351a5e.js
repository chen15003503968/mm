(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1c66":function(e,t,r){},b3a7:function(e,t,r){"use strict";let a={historyList:[],searchType:1,serverUrl:"https://netease-cloud-music-api-alpha-two.vercel.app/",urlList:{playlist_hot:"/playlist/hot",reCommNewsone:"/personalized/newsong",reCommMv:"/personalized/mv",reCommDjprogram:"/personalized/djprogram",reCommProgram:"/program/recommend",songDetail:"/song/detail",songUrl:"/song/url",songLyric:"/lyric",song_new_top:"/top/song",banner:"/banner",finds:"/homepage/block/page",search:"/search",cloudsearch:"/cloudsearch",mvUrl:"/mv/url",vdoUrl:"/video/url",vdoDetail:"/video/detail",relatedVdo:"/related/allvideo",djHot:"/dj/hot",djProgramTop:"/dj/program/toplist",djPay:"/dj/toplist/pay",djProgramHours:"/dj/program/toplist/hours",djToplistHours:"/dj/toplist/hours",djNewComer:"/dj/toplist/newcomer",djPopular:"/dj/toplist/popular",djRecommend:"/dj/recommend",djSubscriber:"/dj/subscriber",djDetail:"/dj/detail",djProgram:"/dj/program",djProgramDetail:"/dj/program/detail",comment_dj:"/comment/dj",comment_video:"/comment/video",comment_hot:"/comment/hot",comment_music:"/comment/music",comment_mv:"/comment/mv",comment_playList:"/comment/playlist"}};t["a"]=a},bad0:function(e,t,r){"use strict";var a=r("b3a7"),o=(r("e6cf"),r("bc3a")),s=r.n(o),i=r("4328"),n=r.n(i);s.a.defaults.withCredentials=!0,s.a.defaults.baseURL=a["a"].serverUrl,s.a.interceptors.request.use((e=>("post"!==e.meth||e.data instanceof FormData||(e.headers={"Content-Type":"application/x-www-form-urlencoded"},e.data=n.a.stringify(e.data,{arrayFormat:"repeat"})),e)),(e=>{console.log(e)})),s.a.interceptors.response.use((e=>e),(e=>Promise.resolve(e)));var l=s.a,c=r("2a19"),d=r("436b");let m={netUtils:{requestDataAxios(e,t,r,a,o="post"){l({url:e,data:t,method:o,withCredentials:!0}).then((e=>{console.log(e),r(e.data)})).catch((e=>{a(e)}))},requestAxios(e,t,r,a="post"){l({url:e,method:a,withCredentials:!0}).then((e=>{console.log(e),t(e.data)})).catch((e=>{r(e)}))}},utils:{getHotMusic(e,t){m.netUtils.requestAxios(a["a"].urlList.hot,e,t,"post")},getReCommNewSone(e,t){m.netUtils.requestAxios(a["a"].urlList.reCommNewsone+"?limit=100",e,t,"post")},getRecomeMv(e,t){m.netUtils.requestAxios(a["a"].urlList.reCommMv,e,t,"post")},getRecommSongList(e,t){m.netUtils.requestAxios(a["a"].urlList.reCommNewsone+"?limit=100",e,t,"post")},getRecomeDJ(e,t){m.netUtils.requestAxios(a["a"].urlList.reCommDjprogram,e,t,"post")},getSongUrl(e,t,r){m.netUtils.requestDataAxios(a["a"].urlList.songUrl+"?id="+e.id,e,t,r,"get")},getSongDetail(e,t,r){m.netUtils.requestAxios(a["a"].urlList.songDetail+"?ids="+e.id,t,r,"get")},getMvUrl(e,t,r){m.netUtils.requestAxios(a["a"].urlList.mvUrl+"?id="+e,t,r,"get")},getSearchResult(e,t,r){m.netUtils.requestAxios(a["a"].urlList.search+"?keywords="+e.keywords,t,r,"get")},getCloudSearchResult(e,t,r){m.netUtils.requestAxios(a["a"].urlList.cloudsearch+"?keywords="+e.keywords+"&type="+e.type+"&limit=100&offset=0",t,r,"get")},getSongLyric(e,t,r){m.netUtils.requestAxios(a["a"].urlList.songLyric+"?id="+e,t,r,"get")},getBannerImageData(e,t){m.netUtils.requestAxios(a["a"].urlList.banner,e,t,"get")},getHomeBlock(e,t){m.netUtils.requestAxios(a["a"].urlList.finds,e,t,"get")},getDJHotData(e,t){m.netUtils.requestAxios(a["a"].urlList.djHot+"?limit=100",e,t,"get")},getDJProgramTopData(e,t){m.netUtils.requestAxios(a["a"].urlList.djProgramTop,e,t,"get")},getDJPayTopData(e,t){m.netUtils.requestAxios(a["a"].urlList.djPay,e,t,"get")},getDJSubscriber(e,t,r){m.netUtils.requestAxios(a["a"].urlList.djSubscriber+"?id="+e+"&limit=100",t,r,"get")},getDJDetail(e,t,r){m.netUtils.requestAxios(a["a"].urlList.djDetail+"?rid="+e,t,r,"get")},getDJProgram(e,t,r){m.netUtils.requestAxios(a["a"].urlList.djProgram+"?rid="+e,t,r,"get")},getDJProgramDetail(e,t,r){m.netUtils.requestAxios(a["a"].urlList.djProgramDetail+"?id="+e,t,r,"get")},getDJComment(e,t,r){m.netUtils.requestAxios(a["a"].urlList.comment_dj+"?id="+e,t,r,"get")},getVedioUrl(e,t,r){m.netUtils.requestAxios(a["a"].urlList.vdoUrl+"?id="+e,t,r,"get")},getVedioDetail(e,t,r){m.netUtils.requestAxios(a["a"].urlList.vdoDetail+"?id="+e,t,r,"get")}},formatSeconds(e){var t=parseInt(e),r=0,a="";return t>60&&(r=parseInt(t/60),t=parseInt(t%60)),a=r>0?(parseInt(r)>=10?parseInt(r):"0"+parseInt(r))+":"+(parseInt(t)>=10?parseInt(t):"0"+parseInt(t)):"00:"+(parseInt(t)>=10?parseInt(t):"0"+parseInt(t)),a},timestampToTime(e){var t=new Date(e),r=t.getFullYear()+"-",a=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=t.getDate()+1<10?"0"+(t.getDate()+1):t.getDate()+1;return r+a+o},AlertDialog(e,t,r){d["a"].create({title:e,message:t}).onOk((()=>{r()}))},ShowNotify(e){c["a"].create({message:e})},farmatNumTenThousand(e){return e>1e4?(e/1e4).toFixed(2)+"万":e}};t["a"]=m},bc13:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"homePage"},[r("div",{staticClass:"q-py-md w100 row justify-center"},[r("q-input",{staticClass:"col-md-4 col-sm-6 col-xs-10",attrs:{placeholder:"单曲/歌手/歌词",color:"light-green",type:"text",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotoSearchView("/search")}},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"search",color:"orange"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotoSearchView("/search")},click:function(t){return e.gotoSearchView("/search")}}})]},proxy:!0}]),model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}})],1),r("q-card",{staticClass:"no-bg",attrs:{flat:""}},[r("q-card-section",{staticClass:"row justify-center q-gutter-x-md q-py-none"},e._l(e.linkList,(function(t,a){return r("q-card",{key:a,staticClass:"cards-item col-md-2 col-xs-5 text-white text-bold q-mb-md animate__animated",class:t.animation,style:"background-image: linear-gradient(20deg, "+t.color[0]+" , "+t.color[1]+");",on:{click:function(r){return e.gotoView(t.value)}}},[r("q-card-section",{staticClass:"q-pa-none"},[e._v(e._s(t.label))])],1)})),1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{attrs:{flat:""}},[r("q-card-section",{},[r("q-carousel",{attrs:{animated:"",arrows:"",navigation:"",infinite:"",height:"500px"},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.bannerList,(function(e,t){return r("q-carousel-slide",{key:t,attrs:{name:t+1,"img-src":e.imgUrl}})})),1)],1)],1)},i=[],n=r("bad0"),l={name:"bannerslide",data(){return{slide:1,bannerList:[]}},created(){this.getBannerImage()},methods:{getBannerImage(){n["a"].utils.getBannerImageData((e=>{if(200===e.code)for(var t in e.banners){var r={};r.imgUrl=e.banners[t].imageUrl,r.title=e.banners[t].typeTitle,r.link=e.banners[t].url,this.bannerList.push(r)}}),(e=>{}))}}},c=l,d=r("2877"),m=r("f09f"),u=r("a370"),g=r("880c"),p=r("62cd"),h=r("eebe"),f=r.n(h),y=Object(d["a"])(c,s,i,!1,null,null,null),b=y.exports;f()(y,"components",{QCard:m["a"],QCardSection:u["a"],QCarousel:g["a"],QCarouselSlide:p["a"]});var w=r("b3a7"),q={name:"home",components:{BannerSlide:b},data(){return{searchKeyword:"",linkList:[{label:"推荐",value:"/recommend",color:["#31CCEC","#ec1231"],animation:"animate__zoomInDown"},{label:"发现",value:"/finds",color:["#cbef08","#13beff"],animation:"animate__flipInY"},{label:"电台",value:"/radiostation",color:["#1976D2","#26A69A"],animation:"animate__lightSpeedInRight"}],color:"",color1:""}},created(){},methods:{rgb(){var e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),r=Math.floor(256*Math.random());return"rgb("+e+","+t+","+r+")"},gotoView(e){this.$router.push({path:e})},gotoSearchView(e){w["a"].searchType=1,this.$router.push({path:e,query:{keyword:this.searchKeyword}})}}},v=q,j=(r("c17b"),r("9989")),x=r("27f9"),U=r("0016"),D=Object(d["a"])(v,a,o,!1,null,"f37038e0",null);t["default"]=D.exports;f()(D,"components",{QPage:j["a"],QInput:x["a"],QIcon:U["a"],QCard:m["a"],QCardSection:u["a"]})},c17b:function(e,t,r){"use strict";r("1c66")}}]);