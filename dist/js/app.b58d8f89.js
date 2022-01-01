(function(t){function e(e){for(var r,c,s=e[0],u=e[1],i=e[2],d=0,b=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"000f":function(t,e,n){},"09c8":function(t,e,n){"use strict";n("c075")},1520:function(t,e,n){},"2d13":function(t,e,n){"use strict";n("9f81")},"2d57":function(t,e,n){},4103:function(t,e,n){"use strict";n("2d57")},4163:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(t,e,n,a,o,c){var s=Object(r["o"])("home"),u=Object(r["o"])("game");return t.isRunning?(Object(r["j"])(),Object(r["c"])(u,{key:1})):(Object(r["j"])(),Object(r["c"])(s,{key:0}))}var o=n("5502"),c=function(t){return Object(r["l"])("data-v-93a5852e"),t=t(),Object(r["k"])(),t},s={class:"container"},u=c((function(){return Object(r["f"])("div",{class:"logo"},[Object(r["f"])("img",{src:"/logo.png"})],-1)})),i=c((function(){return Object(r["f"])("div",{class:"heading"},"Dart Scoreboard",-1)}));function l(t,e,n,a,o,c){var l=Object(r["o"])("game-menu");return Object(r["j"])(),Object(r["e"])("div",s,[u,i,Object(r["g"])(l)])}var d={class:"menu"};function b(t,e,n,a,o,c){var s=Object(r["o"])("game-type-select"),u=Object(r["o"])("player-select");return Object(r["j"])(),Object(r["e"])("div",d,[Object(r["g"])(s),Object(r["g"])(u),Object(r["f"])("div",{class:"start",onClick:e[0]||(e[0]=function(){return t.startGame&&t.startGame.apply(t,arguments)})},"Start")])}var f=function(t){return Object(r["l"])("data-v-19470bc9"),t=t(),Object(r["k"])(),t},h={class:"container"},p={class:"type-select"},j=["onClick"],O={key:0,class:"double-options"},y=["checked"],m=f((function(){return Object(r["f"])("label",{for:"swd"},"Start with Double",-1)})),v=["checked"],g=f((function(){return Object(r["f"])("label",{for:"ewd"},"End with Double",-1)}));function k(t,e,n,a,o,c){return Object(r["j"])(),Object(r["e"])("div",h,[Object(r["f"])("div",p,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(t.types,(function(e,n){return Object(r["j"])(),Object(r["e"])("div",{key:n,class:Object(r["i"])({box:!0,selected:n===t.selected}),onClick:function(t){return c.changeGameType(n)}},Object(r["p"])(e.initialScore),11,j)})),128))]),t.enableDoublesRule?(Object(r["j"])(),Object(r["e"])("div",O,[Object(r["f"])("div",null,[(Object(r["j"])(),Object(r["e"])("input",{id:"swd",type:"checkbox",checked:t.swd,key:t.uiUpdateHack,onChange:e[0]||(e[0]=function(){return c.onChangeGameType&&c.onChangeGameType.apply(c,arguments)})},null,40,y)),m]),Object(r["f"])("div",null,[(Object(r["j"])(),Object(r["e"])("input",{id:"ewd",type:"checkbox",checked:t.ewd,key:t.uiUpdateHack,onChange:e[1]||(e[1]=function(){return c.onChangeGameType&&c.onChangeGameType.apply(c,arguments)})},null,40,v)),g])])):Object(r["d"])("",!0)])}var C=n("5530"),R=(n("d3b7"),n("159b"),{name:"GameTypeSelect",data:function(){return{selected:1,types:[{initialScore:101,swd:!1,ewd:!1},{initialScore:301,swd:!0,ewd:!0},{initialScore:501,swd:!1,ewd:!0}],swd:!1,ewd:!1,uiUpdateHack:1}},created:function(){var t=this;this.types.forEach((function(e,n){var r=e.initialScore;t.selectedInitialScore===r&&(t.selected=n)})),this.updateDoubleOptions()},computed:Object(o["d"])({selectedInitialScore:function(t){return t.gameOptions.initialScore},enableDoublesRule:function(t){return t.gameOptions.enableDoublesRule}}),methods:Object(C["a"])(Object(C["a"])({},Object(o["c"])(["updateGameOptions"])),{},{changeGameType:function(t){this.selected=t,this.updateDoubleOptions(),this.onChangeGameType()},updateDoubleOptions:function(){this.swd=this.types[this.selected].swd,this.ewd=this.types[this.selected].ewd,this.uiUpdateHack=1-this.uiUpdateHack},onChangeGameType:function(){this.updateGameOptions({initialScore:this.types[this.selected].initialScore,swd:this.swd,ewd:this.ewd})}})}),S=(n("cdce"),n("6b0d")),w=n.n(S);const P=w()(R,[["render",k],["__scopeId","data-v-19470bc9"]]);var I=P,N=function(t){return Object(r["l"])("data-v-78d6c838"),t=t(),Object(r["k"])(),t},D=N((function(){return Object(r["f"])("label",null,"Players",-1)})),_=N((function(){return Object(r["f"])("option",{value:2},"2",-1)})),G=N((function(){return Object(r["f"])("option",{value:3},"3",-1)})),x=N((function(){return Object(r["f"])("option",{value:4},"4",-1)})),T=N((function(){return Object(r["f"])("option",{value:5},"5",-1)})),F=[_,G,x,T],A=["onUpdate:modelValue","placeholder"];function U(t,e,n,a,o,c){return Object(r["j"])(),Object(r["e"])("div",null,[Object(r["f"])("div",null,[D,Object(r["t"])(Object(r["f"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.count=e}),onChange:e[1]||(e[1]=function(){return c.onChangePlayersInfo&&c.onChangePlayersInfo.apply(c,arguments)})},F,544),[[r["q"],t.count]])]),(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(t.count,(function(n){return Object(r["j"])(),Object(r["e"])("div",{class:"name",key:n},[Object(r["f"])("label",null,"Player"+Object(r["p"])(n),1),Object(r["t"])(Object(r["f"])("input",{"onUpdate:modelValue":function(e){return t.names[n-1]=e},type:"text",placeholder:"Player".concat(n),onChange:e[2]||(e[2]=function(){return c.onChangePlayersInfo&&c.onChangePlayersInfo.apply(c,arguments)})},null,40,A),[[r["r"],t.names[n-1]]])])})),128))])}var E={name:"PlayerSelect",data:function(){return{count:2,names:[]}},created:function(){this.count=this.totalPlayers,this.names=this.playerNames},computed:Object(o["d"])(["totalPlayers","playerNames"]),methods:Object(C["a"])(Object(C["a"])({},Object(o["b"])(["updatePlayersInfo"])),{},{onChangePlayersInfo:function(){this.updatePlayersInfo({count:this.count,names:this.names})}})};n("bf09");const H=w()(E,[["render",U],["__scopeId","data-v-78d6c838"]]);var M=H,B={name:"Menu",components:{GameTypeSelect:I,PlayerSelect:M},methods:Object(o["c"])(["startGame"])};n("2d13");const K=w()(B,[["render",b],["__scopeId","data-v-31b813ba"]]);var L=K,V={name:"Home",components:{GameMenu:L}};n("09c8");const z=w()(V,[["render",l],["__scopeId","data-v-93a5852e"]]);var J=z,q={key:1,class:"container"},Q={class:"current-player"};function W(t,e,n,a,o,c){var s=Object(r["o"])("game-over"),u=Object(r["o"])("current-round"),i=Object(r["o"])("score-board"),l=Object(r["o"])("score-input");return t.gameover?(Object(r["j"])(),Object(r["c"])(s,{key:0})):(Object(r["j"])(),Object(r["e"])("div",q,[Object(r["f"])("div",Q,Object(r["p"])(t.playerName),1),Object(r["f"])("div",{class:Object(r["i"])({undo:!0,disabled:t.disableUndo}),onClick:e[0]||(e[0]=function(){return c.undo&&c.undo.apply(c,arguments)})},"UNDO",2),Object(r["g"])(u),Object(r["g"])(i),Object(r["g"])(l)]))}n("b0c0");var X=function(t){return Object(r["l"])("data-v-536b2dff"),t=t(),Object(r["k"])(),t},Y={class:"container"},Z=X((function(){return Object(r["f"])("div",{class:"heading"},"Game Over",-1)})),$={class:"rankings"},tt=X((function(){return Object(r["f"])("tr",{class:"thead"},[Object(r["f"])("td",null,"Rank"),Object(r["f"])("td",null,"Player"),Object(r["f"])("td",{class:"center"},"Best Round")],-1)})),et={class:"center"},nt={class:"buttons"};function rt(t,e,n,a,o,c){return Object(r["j"])(),Object(r["e"])("div",Y,[Z,Object(r["f"])("div",$,[Object(r["f"])("table",null,[tt,(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(t.totalPlayers,(function(t){return Object(r["j"])(),Object(r["e"])("tr",{key:t},[Object(r["f"])("td",null,Object(r["p"])(c.formattedRank(t)),1),Object(r["f"])("td",null,Object(r["p"])(c.name(t-1)),1),Object(r["f"])("td",et,Object(r["p"])(c.bestRound(t-1)),1)])})),128))])]),Object(r["f"])("div",nt,[Object(r["f"])("div",{onClick:e[0]||(e[0]=function(){return t.startGame&&t.startGame.apply(t,arguments)})},"REMATCH"),Object(r["f"])("div",{onClick:e[1]||(e[1]=function(){return t.showMenu&&t.showMenu.apply(t,arguments)})},"BACK TO MENU")])])}n("d81d"),n("4e82"),n("cb29"),n("a15b");var at={name:"GameOver",computed:Object(C["a"])(Object(C["a"])({},Object(o["d"])({totalPlayers:function(t){return t.gameController.playerController.total},names:function(t){return t.gameController.playerController.names},bestRounds:function(t){return t.gameController.playerController.bestRounds},ranks:function(t){return t.gameController.playerController.ranks}})),{},{rankedOrder:function(){var t=this;return Array(this.totalPlayers).fill().map((function(e,n){return{i:n,rank:t.ranks[n]}})).sort((function(t,e){return t.rank-e.rank})).map((function(t){var e=t.i;return e}))}}),methods:Object(C["a"])(Object(C["a"])({},Object(o["c"])(["startGame","showMenu"])),{},{formattedRank:function(t){return"".concat(t,1===t?"st":2===t?"nd":3===t?"rd":"th")},name:function(t){var e=this.rankedOrder[t];return this.names[e]||"Player".concat(e+1)},bestRound:function(t){var e=this,n=this.rankedOrder[t];return Array(3).fill().map((function(t,r){return e.bestRounds[n][r]||"-"})).join(" ")}})};n("befd");const ot=w()(at,[["render",rt],["__scopeId","data-v-536b2dff"]]);var ct=ot,st={class:"darts"};function ut(t,e,n,a,o,c){return Object(r["j"])(),Object(r["e"])("div",st,[(Object(r["j"])(),Object(r["e"])(r["a"],null,Object(r["n"])(3,(function(e){return Object(r["f"])("div",{key:e,class:Object(r["i"])(["row",c.shotClass(e-1)])},Object(r["p"])(t.darts[e-1]?t.darts[e-1]:"-"),3)})),64))])}var it={name:"CurrentRound",computed:Object(o["d"])({darts:function(t){return t.gameController.dartController.darts},isFoul:function(t){return t.gameController.dartController.isFoul}}),methods:{shotClass:function(t){return this.isFoul?"foul":this.darts[t]?"valid":""}}};n("7013");const lt=w()(it,[["render",ut],["__scopeId","data-v-7f05849b"]]);var dt=lt,bt=function(t){return Object(r["l"])("data-v-f7031648"),t=t(),Object(r["k"])(),t},ft={class:"scoreboard"},ht=bt((function(){return Object(r["f"])("tr",{class:"heading"},[Object(r["f"])("td",null,"Player"),Object(r["f"])("td"),Object(r["f"])("td",{class:"center"},"Score"),Object(r["f"])("td",{class:"center",style:{"font-size":"14px"}},"Best Round"),Object(r["f"])("td",{class:"center",style:{"font-size":"14px"}},"Last Round")],-1)})),pt={class:"center"},jt={class:"center",style:{"font-size":"14px"}};function Ot(t,e,n,a,o,c){return Object(r["j"])(),Object(r["e"])("div",ft,[Object(r["f"])("table",null,[ht,(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(t.totalPlayers,(function(e){return Object(r["j"])(),Object(r["e"])("tr",{key:e,class:Object(r["i"])({curr:e-1===t.currentPlayer})},[Object(r["f"])("td",null,Object(r["p"])(t.names[e-1]||"Player".concat(e)),1),Object(r["f"])("td",null,Object(r["p"])(c.rank(e-1)),1),Object(r["f"])("td",pt,Object(r["p"])(t.scores[e-1]),1),Object(r["f"])("td",jt,Object(r["p"])(c.bestRound(e-1)),1),Object(r["f"])("td",{class:Object(r["i"])({center:!0,foul:t.lastRoundFouls[e-1]}),style:{"font-size":"14px"}},Object(r["p"])(c.lastRound(e-1)),3)],2)})),128))])])}var yt={name:"ScoreBoard",computed:Object(C["a"])({},Object(o["d"])({currentPlayer:function(t){return t.gameController.currentPlayer},totalPlayers:function(t){return t.gameController.playerController.total},names:function(t){return t.gameController.playerController.names},scores:function(t){return t.gameController.playerController.scores},bestRounds:function(t){return t.gameController.playerController.bestRounds},lastRounds:function(t){return t.gameController.playerController.lastRounds},lastRoundFouls:function(t){return t.gameController.playerController.lastRoundFouls},ranks:function(t){return t.gameController.playerController.ranks}})),methods:{bestRound:function(t){var e=this;return Array(3).fill().map((function(n,r){return e.bestRounds[t][r]||"-"})).join(" ")},lastRound:function(t){var e=this;return Array(3).fill().map((function(n,r){return e.lastRounds[t][r]||"-"})).join(" ")},rank:function(t){var e=this.ranks[t];return e<1||e>this.totalPlayers?"":"".concat(e,1===e?"st":2===e?"nd":3===e?"rd":"th")}}};n("591e");const mt=w()(yt,[["render",Ot],["__scopeId","data-v-f7031648"]]);var vt=mt,gt={class:"scoreinput"},kt={class:"input"},Ct=["onClick"],Rt={class:"input"},St=["onClick"],wt=["onClick"];function Pt(t,e,n,a,o,c){return Object(r["j"])(),Object(r["e"])("div",gt,[Object(r["f"])("div",kt,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(t.input1a,(function(e){return Object(r["j"])(),Object(r["e"])("div",{key:e,class:Object(r["i"])({box:!0,selected:t.select1===e}),onClick:function(t){return c.handleInput1Click(e)}},Object(r["p"])(e),11,Ct)})),128))]),Object(r["f"])("div",Rt,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(t.input1b,(function(e){return Object(r["j"])(),Object(r["e"])("div",{key:e,class:Object(r["i"])({box:!0,selected:t.select1===e}),onClick:function(t){return c.handleInput1Click(e)}},Object(r["p"])(e),11,St)})),128))]),Object(r["f"])("div",{class:Object(r["i"])({input:!0,input2:!0,disabled:c.isInput2Disabled})},[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(t.input2,(function(e){return Object(r["j"])(),Object(r["e"])("div",{key:e,class:Object(r["i"])({box:!0,selected:t.select2===e}),onClick:function(t){return c.handleInput2Click(e)}},Object(r["p"])(e),11,wt)})),128))],2)])}n("caad"),n("2532");var It={name:"ScoreInput",data:function(){return{input1a:["B","BE","✗"],input1b:["S","D","T"],input2:Array(20).fill().map((function(t,e){return e+1})),select1:null,select2:null}},computed:Object(C["a"])(Object(C["a"])({},Object(o["d"])(["gameController"])),{},{isInput2Disabled:function(){return!this.input1b.includes(this.select1)}}),methods:{handleInput1Click:function(t){this.select1=t,this.isInput2Disabled&&this.updateCurrentDart(this.select1)},handleInput2Click:function(t){this.isInput2Disabled||(this.select2=t,this.updateCurrentDart(this.select1+this.select2))},updateCurrentDart:function(t){var e=this;this.gameController.throwDart(t),setTimeout((function(){e.select1=null,e.select2=null}),100)}}};n("9bed");const Nt=w()(It,[["render",Pt],["__scopeId","data-v-b02a05ec"]]);var Dt=Nt,_t={name:"Game",components:{GameOver:ct,CurrentRound:dt,ScoreBoard:vt,ScoreInput:Dt},computed:Object(o["d"])({playerName:function(t){return t.gameController.currentPlayerName},gameController:function(t){return t.gameController},disableUndo:function(t){return 0===t.gameController.history.length},gameover:function(t){return t.gameController.gameover}}),methods:{undo:function(){this.gameController.undo()}}};n("965b");const Gt=w()(_t,[["render",W],["__scopeId","data-v-354efb9d"]]);var xt=Gt,Tt={name:"App",components:{Home:J,Game:xt},computed:Object(o["d"])({isRunning:function(t){return t.isGameRunning}})};n("4103");const Ft=w()(Tt,[["render",a]]);var At=Ft,Ut=(n("25eb"),n("a9e3"),n("9129"),n("e9c4"),n("1da1")),Et=n("d4ec"),Ht=n("bee2"),Mt=(n("96cf"),n("2909"));n("fb6a");function Bt(t){return["S","D","T"].indexOf(t)+1}var Kt=function(){function t(e){Object(Et["a"])(this,t),this.darts=[],this.isFoul=!1,this.swd=e.swd,this.ewd=e.ewd,this.enableDoublesRule=e.enableDoublesRule}return Object(Ht["a"])(t,[{key:"state",get:function(){return{darts:Object(Mt["a"])(this.darts),isFoul:this.isFoul}}},{key:"isLastShot",get:function(){return 3===this.darts.length}},{key:"reset",value:function(){this.darts=[],this.isFoul=!1}},{key:"throw",value:function(e){this.darts.push(e);var n=t.calcScore(e);return n}},{key:"foul",value:function(t){this.isFoul=t}},{key:"restoreState",value:function(t){this.darts=t.darts,this.isFoul=t.isFoul}}],[{key:"calcScore",value:function(t){return"✗"===t?0:"B"===t?25:"BE"===t?50:Bt(t[0])*t.slice(1)}},{key:"sumScore",value:function(t){var e=this;return t.reduce((function(t,n){return t+e.calcScore(n)}),0)}}]),t}(),Lt=Kt,Vt=n("ade3"),zt=(n("4de4"),function(){function t(e){Object(Et["a"])(this,t),this.curr=0,this.total=e.total,this.names=e.names,this.currRoundScores=Array(this.total).fill(0),this.remainingScores=Array(this.total).fill(e.initialScore),this.bestRounds=Array(this.total).fill().map((function(){return[]})),this.lastRounds=Array(this.total).fill().map((function(){return[]})),this.lastRoundFouls=Array(this.total).fill(!1),this.ranks=Array(this.total).fill(t.UNRANKED),this._rank=1}return Object(Ht["a"])(t,[{key:"state",get:function(){return{curr:this.curr,currRoundScore:this.currRoundScores[this.curr],remainingScore:this.remainingScores[this.curr],bestRound:Object(Mt["a"])(this.bestRounds[this.curr]),lastRound:Object(Mt["a"])(this.lastRounds[this.curr]),lastRoundFouls:this.lastRoundFouls[this.curr]}}},{key:"currName",get:function(){return this.names[this.curr]||"Player".concat(this.curr+1)}},{key:"ranked",get:function(){return this.ranks[this.curr]!==t.UNRANKED}},{key:"gameover",get:function(){var e=this.ranks.filter((function(e){return e===t.UNRANKED})).length;return e<=1}},{key:"scores",get:function(){var t=this;return this.remainingScores.map((function(e,n){return e-t.currRoundScores[n]}))}},{key:"next",value:function(){var t=0;do{this.curr=(this.curr+1)%this.total,t+=1}while(this.ranked&&t<this.total)}},{key:"updateScore",value:function(t,e){this.currRoundScores[this.curr]+=t;var n=this.currRoundScores[this.curr],r=this.remainingScores[this.curr]-n;return r<0?(this.currRoundScores[this.curr]=0,!0):((e||0===r)&&(this.remainingScores[this.curr]=r,this.currRoundScores[this.curr]=0),0===r&&(this.ranks[this.curr]=this._rank,this._rank+=1),!1)}},{key:"updateLastRound",value:function(t){this.lastRounds[this.curr]=t.darts,this.lastRoundFouls[this.curr]=t.isFoul,t.isFoul||this.updateBestRound(t.darts)}},{key:"updateBestRound",value:function(t){var e=Lt.sumScore(this.bestRounds[this.curr]),n=Lt.sumScore(t);n>=e&&(this.bestRounds[this.curr]=t)}},{key:"restoreState",value:function(t){this.curr=t.curr,this.currRoundScores[this.curr]=t.currRoundScore,this.remainingScores[this.curr]=t.remainingScore,this.bestRounds[this.curr]=t.bestRound,this.lastRounds[this.curr]=t.lastRound,this.lastRoundFouls[this.curr]=t.lastRoundFouls}}]),t}());Object(Vt["a"])(zt,"UNRANKED",999);var Jt=zt,qt=function(t){return new Promise((function(e){return setTimeout(e,t)}))},Qt=function(){function t(e){Object(Et["a"])(this,t),this.dartController=new Lt({swd:e.swd,ewd:e.ewd,enableDoublesRule:e.enableDoublesRule}),this.playerController=new Jt({total:e.totalPlayers,names:e.playerNames,initialScore:e.initialScore}),this.history=[],this.gameover=!1,this._canThrow=!0}return Object(Ht["a"])(t,[{key:"currentPlayer",get:function(){return this.playerController.curr}},{key:"currentPlayerName",get:function(){return this.playerController.currName}},{key:"EOR",get:function(){return this.playerController.ranked||this.dartController.isFoul||this.dartController.isLastShot}},{key:"throwDart",value:function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this._canThrow){t.next=2;break}return t.abrupt("return");case 2:if(this._canThrow=!1,this.updateHistory(),n=this.dartController.throw(e),r=this.playerController.updateScore(n,this.dartController.isLastShot),this.dartController.foul(r),!this.EOR){t.next=10;break}return t.next=10,this.handleEndOfRound();case 10:this._canThrow=!0;case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"handleEndOfRound",value:function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,qt(300);case 2:this.playerController.updateLastRound(this.dartController.state),this.playerController.next(),this.dartController.reset(),this.gameover=this.playerController.gameover;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateHistory",value:function(){var t={dart:this.dartController.state,player:this.playerController.state};this.history.push(t)}},{key:"isStateValid",value:function(t){if(!t)return!0;var e=this.playerController.ranks[t.player.curr];return e===Jt.UNRANKED}},{key:"popHistory",value:function(){var t;do{t=this.history.pop()}while(!this.isStateValid(t));return t}},{key:"undo",value:function(){var t=this.popHistory();t&&(this.dartController.restoreState(t.dart),this.playerController.restoreState(t.player))}}]),t}(),Wt=Qt;function Xt(t,e,n){return t<e?e:t>n?n:t}function Yt(){var t=Number.parseInt(localStorage.getItem("totalPlayers"),10);return Number.isNaN(t)?2:t}function Zt(){try{return JSON.parse(localStorage.getItem("playerNames"))||[]}catch(t){return[]}}var $t=Object(o["a"])({state:{gameController:null,totalPlayers:Yt(),playerNames:Zt(),gameOptions:{initialScore:501,swd:!1,ewd:!0,enableDoublesRule:!1},isGameRunning:!1},mutations:{updateTotalPlayers:function(t,e){t.totalPlayers=e,localStorage.setItem("totalPlayers",e)},updatePlayerNames:function(t,e){t.playerNames=e,localStorage.setItem("playerNames",JSON.stringify(e))},updateGameOptions:function(t,e){t.gameOptions.initialScore=e.initialScore,t.gameOptions.swd=e.swd,t.gameOptions.ewd=e.ewd},startGame:function(t){t.isGameRunning=!0,t.gameController=new Wt(Object(C["a"])({totalPlayers:t.totalPlayers,playerNames:t.playerNames},t.gameOptions))},showMenu:function(t){t.isGameRunning=!1}},actions:{updatePlayersInfo:function(t,e){var n=t.commit,r=e.count,a=e.names,o=Xt(r,2,5),c=Array(o).fill().map((function(t,e){return a[e]||null}));n("updateTotalPlayers",o),n("updatePlayerNames",c)}}});Object(r["b"])(At).use($t).mount("#app")},"591e":function(t,e,n){"use strict";n("68a0")},6881:function(t,e,n){},"68a0":function(t,e,n){},"6b44":function(t,e,n){},7013:function(t,e,n){"use strict";n("6881")},"965b":function(t,e,n){"use strict";n("9aa3")},"9aa3":function(t,e,n){},"9bed":function(t,e,n){"use strict";n("6b44")},"9f81":function(t,e,n){},befd:function(t,e,n){"use strict";n("1520")},bf09:function(t,e,n){"use strict";n("4163")},c075:function(t,e,n){},cdce:function(t,e,n){"use strict";n("000f")}});
//# sourceMappingURL=app.b58d8f89.js.map