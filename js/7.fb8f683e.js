(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{5347:function(t,e,s){},"9bc0":function(t,e,s){t.exports=s.p+"img/noSearchResult.e08a56a0.png"},ad6dc:function(t,e,s){"use strict";s("5347")},b3a7:function(t,e,s){"use strict";let a={historyList:[],searchType:1,serverUrl:"http://localhost:3000/",urlList:{playlist_hot:"/playlist/hot",reCommNewsone:"/personalized/newsong",reCommMv:"/personalized/mv",reCommDjprogram:"/personalized/djprogram",reCommProgram:"/program/recommend",songDetail:"/song/detail",songUrl:"/song/url",songLyric:"/lyric",song_new_top:"/top/song",banner:"/banner",finds:"/homepage/block/page",search:"/search",cloudsearch:"/cloudsearch",mvUrl:"/mv/url",vdoUrl:"/video/url",vdoDetail:"/video/detail",relatedVdo:"/related/allvideo",djHot:"/dj/hot",djProgramTop:"/dj/program/toplist",djPay:"/dj/toplist/pay",djProgramHours:"/dj/program/toplist/hours",djToplistHours:"/dj/toplist/hours",djNewComer:"/dj/toplist/newcomer",djPopular:"/dj/toplist/popular",djRecommend:"/dj/recommend",djSubscriber:"/dj/subscriber",djDetail:"/dj/detail",djProgram:"/dj/program",djProgramDetail:"/dj/program/detail",comment_dj:"/comment/dj",comment_video:"/comment/video",comment_hot:"/comment/hot",comment_music:"/comment/music",comment_mv:"/comment/mv",comment_playList:"/comment/playlist"}};e["a"]=a},bad0:function(t,e,s){"use strict";var a=s("b3a7"),i=(s("e6cf"),s("bc3a")),r=s.n(i),l=s("4328"),o=s.n(l);r.a.defaults.withCredentials=!0,r.a.defaults.baseURL=a["a"].serverUrl,r.a.interceptors.request.use((t=>("post"!==t.meth||t.data instanceof FormData||(t.headers={"Content-Type":"application/x-www-form-urlencoded"},t.data=o.a.stringify(t.data,{arrayFormat:"repeat"})),t)),(t=>{console.log(t)})),r.a.interceptors.response.use((t=>t),(t=>Promise.resolve(t)));var n=r.a,u=s("2a19"),d=s("436b");let c={netUtils:{requestDataAxios(t,e,s,a,i="post"){n({url:t,data:e,method:i,withCredentials:!0}).then((t=>{console.log(t),s(t.data)})).catch((t=>{a(t)}))},requestAxios(t,e,s,a="post"){n({url:t,method:a,withCredentials:!0}).then((t=>{console.log(t),e(t.data)})).catch((t=>{s(t)}))}},utils:{getHotMusic(t,e){c.netUtils.requestAxios(a["a"].urlList.hot,t,e,"post")},getReCommNewSone(t,e){c.netUtils.requestAxios(a["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeMv(t,e){c.netUtils.requestAxios(a["a"].urlList.reCommMv,t,e,"post")},getRecommSongList(t,e){c.netUtils.requestAxios(a["a"].urlList.reCommNewsone+"?limit=100",t,e,"post")},getRecomeDJ(t,e){c.netUtils.requestAxios(a["a"].urlList.reCommDjprogram,t,e,"post")},getSongUrl(t,e,s){c.netUtils.requestDataAxios(a["a"].urlList.songUrl+"?id="+t.id,t,e,s,"get")},getSongDetail(t,e,s){c.netUtils.requestAxios(a["a"].urlList.songDetail+"?ids="+t.id,e,s,"get")},getMvUrl(t,e,s){c.netUtils.requestAxios(a["a"].urlList.mvUrl+"?id="+t,e,s,"get")},getSearchResult(t,e,s){c.netUtils.requestAxios(a["a"].urlList.search+"?keywords="+t.keywords,e,s,"get")},getCloudSearchResult(t,e,s){c.netUtils.requestAxios(a["a"].urlList.cloudsearch+"?keywords="+t.keywords+"&type="+t.type+"&limit=100&offset=0",e,s,"get")},getSongLyric(t,e,s){c.netUtils.requestAxios(a["a"].urlList.songLyric+"?id="+t,e,s,"get")},getBannerImageData(t,e){c.netUtils.requestAxios(a["a"].urlList.banner,t,e,"get")},getHomeBlock(t,e){c.netUtils.requestAxios(a["a"].urlList.finds,t,e,"get")},getDJHotData(t,e){c.netUtils.requestAxios(a["a"].urlList.djHot+"?limit=100",t,e,"get")},getDJProgramTopData(t,e){c.netUtils.requestAxios(a["a"].urlList.djProgramTop,t,e,"get")},getDJPayTopData(t,e){c.netUtils.requestAxios(a["a"].urlList.djPay,t,e,"get")},getDJSubscriber(t,e,s){c.netUtils.requestAxios(a["a"].urlList.djSubscriber+"?id="+t+"&limit=100",e,s,"get")},getDJDetail(t,e,s){c.netUtils.requestAxios(a["a"].urlList.djDetail+"?rid="+t,e,s,"get")},getDJProgram(t,e,s){c.netUtils.requestAxios(a["a"].urlList.djProgram+"?rid="+t,e,s,"get")},getDJProgramDetail(t,e,s){c.netUtils.requestAxios(a["a"].urlList.djProgramDetail+"?id="+t,e,s,"get")},getDJComment(t,e,s){c.netUtils.requestAxios(a["a"].urlList.comment_dj+"?id="+t,e,s,"get")},getVedioUrl(t,e,s){c.netUtils.requestAxios(a["a"].urlList.vdoUrl+"?id="+t,e,s,"get")},getVedioDetail(t,e,s){c.netUtils.requestAxios(a["a"].urlList.vdoDetail+"?id="+t,e,s,"get")}},formatSeconds(t){var e=parseInt(t),s=0,a="";return e>60&&(s=parseInt(e/60),e=parseInt(e%60)),a=s>0?(parseInt(s)>=10?parseInt(s):"0"+parseInt(s))+":"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)):"00:"+(parseInt(e)>=10?parseInt(e):"0"+parseInt(e)),a},timestampToTime(t){var e=new Date(t),s=e.getFullYear()+"-",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=e.getDate()+1<10?"0"+(e.getDate()+1):e.getDate()+1;return s+a+i},AlertDialog(t,e,s){d["a"].create({title:t,message:e}).onOk((()=>{s()}))},ShowNotify(t){u["a"].create({message:t})},farmatNumTenThousand(t){return t>1e4?(t/1e4).toFixed(2)+"万":t}};e["a"]=c},cc74:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-px-sm"},[a("q-banner",{staticClass:"navgitor-banner q-my-md",attrs:{rounded:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"row items-center cursor-pointer",on:{click:function(e){return t.gotoView("/home")}}},[a("q-icon",{attrs:{name:"arrow_back",size:"25px"}}),a("span",{staticClass:"backTitle q-ml-sm"},[t._v("返回")])],1)])]),a("q-card",{staticClass:"q-my-sm",attrs:{flat:""}},[a("q-card-section",{staticClass:"row justify-center q-py-none"},[a("q-input",{staticClass:"col-md-3 col-xs-10",attrs:{type:"text",outlined:"",dense:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.gotoSearchView("/search")}},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"search",color:"orange"},on:{click:function(e){return t.gotoSearchView("/search")}}})]},proxy:!0}]),model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1),a("q-tabs",{staticClass:"bg-teal text-white shadow-2",on:{click:t.onSearch},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.types,(function(e,s){return a("q-tab",{key:s,attrs:{name:e.value}},[t._v(t._s(e.label))])})),1),t.noDataShow?a("q-card",{staticClass:"noData-box columns flex-center",attrs:{flat:""}},[a("q-card-section",{staticClass:"text-center"},[a("q-img",{attrs:{src:s("9bc0"),width:"500px"}})],1),a("q-card-section",{staticClass:"subtitle text-blue-grey-3 text-center"},[t._v("暂无搜索结果，请换一个关键字")])],1):a("q-card",{staticClass:"bg-teal-1"},[a("q-card-section",[a("span",[t._v("共 "),a("span",{staticClass:"text-blue"},[t._v(t._s(t.resultNum))]),t._v(" 条结果")])]),a("q-card-section",{staticClass:"text-blue-grey-8 overflow-hidden q-pa-none"},[a("q-tab-panels",{staticClass:"bg-transparent q-pa-none",attrs:{animated:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[a("q-tab-panel",{attrs:{name:t.types[0].value}},[a("Single",{attrs:{data:t.singlesList}})],1),a("q-tab-panel",{attrs:{name:t.types[1].value}},[a("Album",{attrs:{data:t.albumsList}})],1),a("q-tab-panel",{attrs:{name:t.types[2].value}},[a("Singers",{attrs:{data:t.singersList}})],1),a("q-tab-panel",{attrs:{name:t.types[3].value}},[a("SongList",{attrs:{data:t.songPlayList}})],1),a("q-tab-panel",{attrs:{name:t.types[4].value}},[a("UserProfile",{attrs:{data:t.userProfileList}})],1),a("q-tab-panel",{attrs:{name:t.types[5].value}},[a("Mvs",{attrs:{data:t.mvsList}})],1),a("q-tab-panel",{attrs:{name:t.types[6].value}},[a("Lyrics",{attrs:{data:t.lyricsList}})],1),a("q-tab-panel",{attrs:{name:t.types[7].value}},[a("DjRadios",{attrs:{data:t.djRadiosList}})],1),a("q-tab-panel",{attrs:{name:t.types[8].value}},[a("Videos",{attrs:{data:t.videosList}})],1)],1)],1)],1)],1)},i=[],r=(s("e01a"),s("e6cf"),s("bad0")),l=s("b3a7"),o=s("4515");const n=()=>Promise.all([s.e(0),s.e(23)]).then(s.bind(null,"d041")),u=()=>Promise.all([s.e(0),s.e(22)]).then(s.bind(null,"5d0e")),d=()=>Promise.all([s.e(0),s.e(13)]).then(s.bind(null,"004d")),c=()=>Promise.all([s.e(0),s.e(15)]).then(s.bind(null,"5529")),m=()=>Promise.all([s.e(0),s.e(16)]).then(s.bind(null,"5386")),p=()=>s.e(14).then(s.bind(null,"5a2f")),h=()=>Promise.all([s.e(0),s.e(12)]).then(s.bind(null,"973b")),g=()=>s.e(11).then(s.bind(null,"f875")),b=()=>s.e(17).then(s.bind(null,"f421"));var y={name:"searchresult",components:{Single:n,Album:u,Singers:d,SongList:c,UserProfile:m,Mvs:p,Lyrics:h,DjRadios:g,Videos:b},data(){return{resultNum:0,keyword:"",noDataShow:!1,singlesList:[],albumsList:[],singersList:[],songPlayList:[],userProfileList:[],mvsList:[],lyricsList:[],djRadiosList:[],videosList:[],complexList:[],type:l["a"].searchType,types:[{label:"单曲",value:1},{label:"专辑",value:10},{label:"歌手",value:100},{label:"歌单",value:1e3},{label:"用户",value:1002},{label:"MV",value:1004},{label:"歌词",value:1006},{label:"电台",value:1009},{label:"视频",value:1014},{label:"综合",value:1018}]}},created(){let t=this.$route.query.keyword;""==t&&null==t&&void 0==t||(this.keyword=t,this.onSearch())},methods:{gotoView(t){this.$router.push({path:t})},gotoSearchView(t){this.$router.push({path:t,query:{keyword:this.keyword}}),this.onSearch()},onSearch(){if(l["a"].searchType=this.type,this.initResult(),""==this.keyword)return void r["a"].ShowNotify("关键字不能为空");this.$q.loading.show({spinner:o["a"],spinnerColor:"red"});let t={keywords:this.keyword,type:this.type};r["a"].utils.getCloudSearchResult(t,(t=>{if(console.log("搜索结果---------------",t),200==t.code){this.noDataShow=!1,this.$q.loading.hide();let r=t.result;switch(this.type){case 1:var e=r.songs;for(let t=0;t<e.length;t++){let s={};s.id=e[t].id,s.name=e[t].name,s.albumName=e[t].al.name,s.picUrl=e[t].al.picUrl,s.author=e[t].ar[0].name,this.singlesList.push(s)}this.resultNum=this.singlesList.length;break;case 10:for(var s=r.albums,a=0;a<s.length;a++){let t={};t.id=s[a].id,t.name=s[a].name,t.picUrl=s[a].blurPicUrl,t.author=s[a].artist.name,t.avatar=s[a].artist.picUrl,this.albumsList.push(t)}this.resultNum=this.albumsList.length;break;case 100:var i=r.artists;for(a=0;a<i.length;a++){let t={};t.id=i[a].id,t.name=i[a].name,t.alias=i[a].alias,t.picUrl=i[a].picUrl,t.albumSize=i[a].albumSize,t.mvSize=i[a].mvSize,this.singersList.push(t)}this.resultNum=this.singersList.length;break;case 1e3:var l=r.playlists;for(a=0;a<l.length;a++){let t={};t.id=l[a].id,t.name=l[a].name,t.description=l[a].description,t.creator=l[a].creator,t.picUrl=l[a].coverImgUrl,t.trackCount=l[a].trackCount,t.playCount=l[a].playCount,t.bookCount=l[a].bookCount,this.songPlayList.push(t)}this.resultNum=this.songPlayList.length;break;case 1002:var o=r.userprofiles;for(a=0;a<o.length;a++){let t={};t.id=o[a].userId,t.name=o[a].nickname,t.picUrl=o[a].avatarUrl,t.gender=o[a].gender,t.playlistCount=o[a].playlistCount,t.followeds=o[a].followeds,t.signature=o[a].signature,this.userProfileList.push(t)}this.resultNum=this.userProfileList.length;break;case 1004:var n=r.mvs;for(a=0;a<n.length;a++){let t={};t.id=n[a].id,t.name=n[a].name,t.author=n[a].artistName,t.picUrl=n[a].cover,t.playCount=n[a].playCount,t.duration=n[a].duration,this.mvsList.push(t)}this.resultNum=this.mvsList.length;break;case 1006:for(e=r.songs,a=0;a<e.length;a++){let t={};t.id=e[a].id,t.lid=e[a].al.id,t.name=e[a].name,t.picUrl=e[a].al.picUrl,t.lyricStr=e[a].lyrics.join(""),t.author=e[a].ar[0].name,this.lyricsList.push(t)}this.resultNum=this.lyricsList.length;break;case 1009:var u=r.djRadios;for(a=0;a<u.length;a++){let t={};t.id=u[a].id,t.name=u[a].name,t.picUrl=u[a].picUrl,t.likedCount=u[a].likedCount,t.playCount=u[a].playCount,t.programCount=u[a].programCount,t.shareCount=u[a].shareCount,t.subCount=u[a].subCount,t.purchaseCount=u[a].purchaseCount,this.djRadiosList.push(t)}this.resultNum=this.djRadiosList.length;break;case 1014:var d=r.videos;for(a=0;a<d.length;a++){let t={};t.id=d[a].vid,t.title=d[a].title,t.picUrl=d[a].coverUrl,t.playTime=d[a].playTime,t.creator=d[a].creator,t.durationms=d[a].durationms,this.videosList.push(t)}this.resultNum=this.videosList.length;break;case 1018:for(d=r.videos,a=0;a<d.length;a++){let t={};t.id=d[a].vid,t.title=d[a].title,t.picUrl=d[a].coverUrl,t.playTime=d[a].playTime,t.creator=d[a].creator,t.durationms=d[a].durationms,this.complexList.push(t)}this.resultNum=this.complexList.length;break}}else this.$q.loading.hide(),r["a"].ShowNotify(t.msg)}),(t=>{this.$q.loading.hide(),this.noDataShow=!0}))},initResult(){this.singlesList=[],this.albumsList=[],this.singersList=[],this.songPlayList=[],this.userProfileList=[],this.mvsList=[],this.lyricsList=[],this.djRadiosList=[],this.videosList=[],this.complexList=[]}}},v=y,L=(s("ad6dc"),s("2877")),f=s("9989"),q=s("54e1"),w=s("0016"),C=s("f09f"),U=s("a370"),k=s("27f9"),x=s("429b"),j=s("7460"),D=s("068f"),S=s("adad"),P=s("823b"),A=s("eebe"),_=s.n(A),N=Object(L["a"])(v,a,i,!1,null,null,null);e["default"]=N.exports;_()(N,"components",{QPage:f["a"],QBanner:q["a"],QIcon:w["a"],QCard:C["a"],QCardSection:U["a"],QInput:k["a"],QTabs:x["a"],QTab:j["a"],QImg:D["a"],QTabPanels:S["a"],QTabPanel:P["a"]})}}]);