(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"5d0e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-list",{attrs:{bordered:"",separator:""}},t._l(t.data,(function(a,i){return e("q-item",{key:i,attrs:{clickable:"",active:a.id==t.$store.getters.getSongData.id,"active-class":"bg-teal-3 text-cyan-10"},on:{click:function(e){return t.playMusic(a,t.data)}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{size:"50px"}},[e("img",{attrs:{src:a.picUrl,"spinner-color":"orange",alt:""}})])],1),e("q-item-section",[t._v(t._s(a.name))]),e("q-item-section",[e("span",[t._v("作者："+t._s(a.author))])])],1)})),1)},r=[],n=e("a9b3"),s={name:"album",props:{data:{type:Array}},mixins:[n["a"]],data(){return{}}},o=s,c=e("2877"),l=e("1c1c"),m=e("66e5"),u=e("4074"),h=e("cb32"),p=e("eebe"),g=e.n(p),d=Object(c["a"])(o,i,r,!1,null,null,null);a["default"]=d.exports;g()(d,"components",{QList:l["a"],QItem:m["a"],QItemSection:u["a"],QAvatar:h["a"]})},a9b3:function(t,a,e){"use strict";let i={data(){},methods:{playMusic(t,a){let e={id:t.id,name:t.name,avatar:t.picUrl||t.avatar,author:t.author||t.song.artists[0].name||"未命名"};localStorage.setItem("playHistory",JSON.stringify(e)),this.$store.commit("changePlaySwitch",!1),setTimeout((()=>{this.$store.commit("changePlaySwitch",!0)})),this.$store.commit("changeSongData",e),this.$store.commit("changePlayList",a)},playDj(t,a){let e=null;e=1==a?{id:t.mainSong.id,name:t.name,avatar:t.picUrl,author:t.mainSong.author}:{id:t.playId,name:t.name,avatar:t.author.avatar,author:t.author.nickname},localStorage.setItem("playHistory",JSON.stringify(e)),this.$store.commit("changePlaySwitch",!1),setTimeout((()=>{this.$store.commit("changePlaySwitch",!0)})),this.$store.commit("changeSongData",e)}}};a["a"]=i}}]);