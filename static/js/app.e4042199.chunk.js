(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{239:function(e,t,a){e.exports=a(305)},305:function(e,t,a){"use strict";a.r(t);var r=a(325),n=a(43),o=a(164),i=a(326),s=a(324),c=a(16),l=a.n(c),h=a(36),u=a(20),d=a(53),p=a(39),m=a(0),f=a.n(m),g=a(5),y=a.n(g),b=a(7),w=a.n(b),v=a(8),R=a.n(v),I=a(9),S=a.n(I),C=a(1),E=a.n(C),P=a(11),O=a(3),_=a(95);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var T=function(e){R()(a,e);var t=k(a);function a(){return y()(this,a),t.apply(this,arguments)}return w()(a,[{key:"render",value:function(){var e,t=(e=this.props,O.a.create({style:{justifyContent:"center",backgroundColor:e.color,alignItems:"center",height:e.height,width:e.width}})).style;return this.props.nudge&&(t=O.a.compose(t,function(e){return O.a.create({style:{top:e.top,bottom:e.bottom,left:e.left,right:e.right}})}(this.props).style)),this.props.horizontal&&(t=O.a.compose(t,(this.props,O.a.create({style:{justifyContent:"flex-start",flexDirection:"row"}})).style)),this.props.apart&&(t=O.a.compose(t,(this.props,O.a.create({style:{justifyContent:"space-between"}})).style)),this.props.radius&&(t=O.a.compose(t,function(e){return O.a.create({style:{borderRadius:e.radius}})}(this.props).style)),this.props.onPress?f.a.createElement(_.c,{onPress:this.props.onPress,style:t},this.props.children):f.a.createElement(P.a,{style:t},this.props.children)}}]),a}(f.a.Component),A=a(13),B=a(58),N=(a(4),function(e){return{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/"+e}}),x=function(e){return"https://yahtzeerage.github.io/CYOA-Assets/assets/"+e},z=function(e,t,a){return{text:e,border:t,background:a}},L={HomeScreenImage:{height:2880,width:5120,src:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/031_cover_noword.png"}},themeImage:{Sad:{height:2880,width:5120,src:N("028_sad_nosign.png")},Pumped:{height:2880,width:5120,src:N("032_pumped_nosign.png")},Cloudy:{height:2880,width:5120,src:N("034_cloud_nosign.png")},Romantic:{height:2880,width:5120,src:N("036_romantic_nosign.png")},Icy:{height:2880,width:5120,src:N("038_snow_nosign.png")},Party:{height:2880,width:5120,src:N("039_party_nosign.png")},Beach:{height:2880,width:5120,src:N("042_beach_nosign.png")},Weird:{height:2880,width:5120,src:N("043_weird_nosign.png")},Home:{height:2880,width:5120,src:N("044_home_nosign.png")},Space:{height:2880,width:5120,src:N("045_space_nosign.png")},Happy:{height:2880,width:5120,src:N("046_happy_nosign.png")},Lazy:{height:2880,width:5120,src:N("047_lazy_nosign.png")}},themeColors:{Home:z("#ffffff","#b4a7d6","#8e7cc380"),Pumped:z("#ead1dc","#d5a6bd","#4c11305f"),Lazy:z("#d9ead3","#b6d7a8","#274e135e"),Happy:z("#fff2cc","#ffe599","#7f60005c"),Weird:z("#ead1dc","#d5a6bd","#4c11305f"),Sad:z("#f3f3f3","#efefef","#6666665e"),Romantic:z("#ead1dc","#d5a6bd","#4c11305f"),Home:z("#fce5cd","#f9cb9c","#783f045e"),Cloudy:z("#c9daf8","#a4c2f4","#1c458760"),Beach:z("#cfe2f3","#9fc5e8","#0737635e"),Party:z("#d9d2e9","#b4a7d6","#20124d5f"),Icy:z("#d9d2e9","#b4a7d6","#20124d5f"),Space:z("#d9d2e9","#b4a7d6","#20124d5f")},themeTitleNames:{Pumped:"Pumped!",Lazy:"Lazy...",Happy:"Happy!",Weird:"~ Weird ~",Sad:"A Little Sad...",Romantic:"Romantic",Home:"Home",Cloudy:"Through the Clouds",Beach:"The Beach",Party:"To A Party!",Icy:"Somewhere Icy",Space:"Outer Space"},themeTitleBoxSize:{Pumped:"60%",Lazy:"60%",Happy:"50%",Weird:"70%",Sad:"100%",Romantic:"60%",Home:"40%",Cloudy:"100%",Beach:"70%",Party:"80%",Icy:"100%",Space:"80%"},moodThemes:{Sad:"Sad",Pumped:"Pumped",Romantic:"Romantic",Weird:"Weird",Happy:"Happy",Lazy:"Lazy"},placeThemes:{Cloudy:"Cloudy",Icy:"Icy",Party:"Party",Beach:"Beach",Home:"Home",Space:"Space"},themes:{Sad:"Sad",Pumped:"Pumped",Cloudy:"Cloudy",Romantic:"Romantic",Icy:"Icy",Party:"Party",Beach:"Beach",Weird:"Weird",Home:"Home",Space:"Space",Happy:"Happy",Lazy:"Lazy"},icons:{Back:{uri:x("back.png"),name:"Back"},Home:{uri:x("home.png"),name:"Home"},Cloudy:{uri:x("clouds.png"),name:"Cloudy"},Beach:{uri:x("beach.png"),name:"Beach"},Party:{uri:x("party.png"),name:"Party"},Icy:{uri:x("cold%20updated.png"),name:"Icy"},Space:{uri:x("space.png"),name:"Space"},Random:{uri:x("random.png"),name:"Random"},Weird:{uri:x("weird.png"),name:"Random"},Lazy:{uri:x("lazy.png"),name:"Lazy"}},themePlaylists:{Beach:[{name:"Limonada Fria",artist:"FutureYou",track:N("FutureYou_Limonada%20Fria.wav")},{name:"Verano En Playa Azul",artist:"Michelle Lugo",track:N("Michelle_VeranoEnPlayaAzul.wav")},{name:"By the Bay",artist:"Raydee99",track:N("BytheBay.wav")}],Icy:[{name:"Wintersong",artist:'Carlos "insaneintherainmusic" Eiene',track:N("Carlos_Wintersong.wav")}],Party:[{name:"Luminous",artist:"Pascal Garoute",track:N("Pascal_Luminous.wav")}],Home:[{name:"Comfort",artist:"Dayna Ambrosio",track:N("DaynaAmbrosio_Comfort.wav")}],Space:[{name:"Space",artist:"Brian Mowat",track:N("Space_BrianMowat_Audioventure_v02.wav")},{name:"Drifting",artist:"Raydee99",track:N("Drifting%20-%20Mastered.wav")}],Cloudy:[{name:"Gliding Above the Cloud Sea",artist:"Achilles Jiang (Composerkiwi)",track:N("Gliding_Above_the%20Cloud_Sea.wav")}],Lazy:[{name:"Afternoon Lounging",artist:"Ben Lipkin",track:N("Ben_AfternoonLounging.wav")},{name:"Lazy Tunes",artist:"Raydee99",track:N("Raydee99_LazyTunes.wav")}],Pumped:[{name:"Level Up",artist:"Keromusic",track:N("Trey_Level Up.wav")}],Romantic:[{name:"Madison",artist:"Devon Gardner",track:N("Madison_Romantic01.wav")}],Weird:[{name:"Duck Tape Medicine",artist:"Gregory Osborne",track:N("Greg_DuctTapeMedicine_FirstMix.wav")}]},BACKGROUND_IMAGE_HEIGHT:867,BACKGROUND_IMAGE_WIDTH:1542,BUTTON_BORDER_WIDTH:7,GOOGLE_DOCS_TEXT_CONVERSION_RATIO:2,TILE_FONT_SIZE:48,SUBTITLE_FONT_SIZE:48,CLOUDS_TITLE_FONT_SIZE:38,CLICK_FONT_SIZE:28,ENTRY_FONT_SIZE:42,LINE_SPACING:1.15},H=a(133);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var W=function(e){R()(a,e);var t=M(a);function a(){var e;y()(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={fadeAnimation:new A.a.Value(0),cycleIndex:0},e.fadeIn=function(){A.a.timing(e.state.fadeAnimation,{toValue:1,duration:500}).start((function(t){t.finished&&e.props.cycling&&e.fadeOut(4e3+Math.floor(e.props.cycleOffset*Math.random()))}))},e.fadeOut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;A.a.timing(e.state.fadeAnimation,{toValue:0,delay:t,duration:500}).start((function(t){if(t.finished&&e.props.cycling){if("Mood"===e.props.cycleTheme)var a=Object.keys(L.moodThemes);else{if("Place"!==e.props.cycleTheme)return void console.error("cycle theme not found");a=Object.keys(L.placeThemes)}var r=Math.floor(Math.random()*a.length);r===e.state.cycleIndex&&(r=Math.floor(Math.random()*a.length))===e.state.cycleIndex&&(r=Math.floor(Math.random()*a.length));var n=a[r];console.log(L.themeImage,n,a,r),e.props.setBackground(L.themeImage[n].src.uri),e.fadeIn(),e.setState({cycleIndex:r})}}))},e}return w()(a,[{key:"render",value:function(){var e,t=(e=this.props,O.a.create({style:{justifyContent:"center",alignItems:"center",height:e.height,width:e.width,resizeMode:"center",backgroundColor:"black",overflow:"hidden"}}));return f.a.createElement(A.a.View,{style:[D.fadingContainer,{opacity:this.state.fadeAnimation,position:this.props.position}]},f.a.createElement(B.a,{resizeMode:"center",style:t.style,source:this.props.image,onLoad:this.fadeIn},this.props.children))}}]),a}(f.a.Component),D=O.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},fadingContainer:{paddingVertical:5,paddingHorizontal:25,backgroundColor:"black"},fadingText:{fontSize:28,textAlign:"center",margin:10,color:"#fff"},buttonRow:{flexDirection:"row",marginVertical:16}}),j={calculate_scaledImageDim:function(e,t){var a=e.width/e.height;if(t.width/t.height<a){var r=e.height/t.height;return{height:e.height,width:r*t.width,scalingRatio:r}}var n=e.width/t.width;return{height:n*t.height,width:e.width,scalingRatio:n}}},G=a(34);function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var U=function(e){R()(a,e);var t=F(a);function a(){return y()(this,a),t.apply(this,arguments)}return w()(a,[{key:"render",value:function(){var e,t=(e=this.props,O.a.create({scroll:{flexWrap:"wrap",overflow:"scroll",showsVerticalScrollIndicato:!1},default:{borderWidth:e.borderWidth,borderColor:e.borderColor,backgroundColor:e.backgroundColor,width:e.width,height:e.height,borderRadius:3,justifyContent:"center",flexWrap:"wrap",overflow:"hidden",alignItems:"center",opacity:1},justLeft:{borderWidth:0,borderLeftWidth:e.borderWidth,width:e.width,height:e.height,borderRadius:0,justifyContent:"center",alignItems:"center"},noTop:{borderWidth:e.borderWidth,borderTopWidth:0,width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderTopLeftRadius:0,borderTopRightRadius:0},noBottom:{borderWidth:e.borderWidth,borderBottomWidth:0,width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderBottomLeftRadius:0,borderBottomRightRadius:0},bottomCorners:{borderWidth:e.borderWidth,width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderBottomLeftRadius:0,borderBottomRightRadius:0,flexWrap:"wrap",overflow:"hidden"},corners:{borderWidth:e.borderWidth,width:e.width,height:e.height,borderRadius:0,justifyContent:"center",alignItems:"center"},justBorder:{borderWidth:e.borderWidth,width:e.width,height:e.height,justifyContent:"center",alignItems:"center"},fontStyle:{fontFamily:"PressStart2P_400Regular",fontSize:e.fontSize,textAlign:"center",textAlignVertical:"center",color:e.fontColor,opacity:1,lineHeight:e.lineHeight}})),a=t.default;return this.props.justLeft?a=O.a.compose(a,t.justLeft):this.props.noTop?a=O.a.compose(a,t.noTop):this.props.noBottom?a=O.a.compose(a,t.noBottom):this.props.bottomCorners?a=O.a.compose(a,t.bottomCorners):this.props.justBorder?a=O.a.compose(a,t.justBorder):this.props.corners&&(a=O.a.compose(a,t.corners)),this.props.absolute&&(a=O.a.compose(a,O.a.create({position:"absolute"}))),this.props.noLeft&&(a=O.a.compose(a,O.a.create({borderLeftWidth:0}))),this.props.noRight&&(a=O.a.compose(a,O.a.create({borderRightWidth:0}))),this.props.touchable?f.a.createElement(h.a,{style:a},f.a.createElement(T,{height:"100%",width:"100%"},f.a.createElement(G.a,{style:t.fontStyle},this.props.children))):f.a.createElement(P.a,{style:a},f.a.createElement(G.a,{style:t.fontStyle},this.props.children))}}]),a}(f.a.Component),Y=function(e){var t=e.navigation,a=Object(m.useState)(u.a.get("window")),r=l()(a,2),n=r[0],o=r[1];window.addEventListener("resize",(function(){return o(u.a.get("window"))}));var i=Object.keys(L.moodThemes),s=Object.keys(L.placeThemes),c=Math.floor(Math.random()*i.length),g=Math.floor(Math.random()*s.length),y=Object(m.useState)(L.themeImage[i[c]].src.uri),b=l()(y,2),w=b[0],v=b[1],R=Object(m.useState)(L.themeImage[s[g]].src.uri),I=l()(R,2),S=I[0],C=I[1],E=Object(p.b)({PressStart2P_400Regular:p.a});if(!l()(E,1)[0])return f.a.createElement(d.a,null);var P={height:L.BACKGROUND_IMAGE_HEIGHT,width:L.BACKGROUND_IMAGE_WIDTH},O=j.calculate_scaledImageDim(n,P),_=O.scalingRatio*L.BUTTON_BORDER_WIDTH,k=O.scalingRatio*L.TILE_FONT_SIZE,A=k*L.LINE_SPACING;O.scalingRatio,L.CLICK_FONT_SIZE,L.LINE_SPACING;return f.a.createElement(T,{color:"white",height:"100%",width:"100%",horizontal:!0},f.a.createElement(h.a,{onPress:function(){t.navigate("MatchMyMood")},style:{overflow:"hidden",backgroundColor:"rgb(238,238,238)",height:"100%",width:"50%",justifyContent:"center",alignItems:"center"}},f.a.createElement(W,{image:w,height:O.height,width:O.width,cycling:!0,cycleTheme:"Mood",setBackground:v,cycleOffset:2e3,position:"absolute"}),f.a.createElement(U,{borderWidth:_,fontColor:"#ffffff",borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",fontSize:k,lineHeight:A,height:"20%",width:"100%",absolute:!0,corners:!0,noRight:!0,noLeft:!0},"[Match My",f.a.createElement("br",null),"Mood!]")),f.a.createElement(h.a,{onPress:function(){t.navigate("TakeMeSomewhere")},style:{overflow:"hidden",backgroundColor:"#8e7cc3c6",height:"100%",width:"50%",justifyContent:"center",alignItems:"center"}},f.a.createElement(W,{image:S,height:O.height,width:O.width,cycling:!0,cycleTheme:"Place",setBackground:C,cycleOffset:1e3,position:"absolute"}),f.a.createElement(U,{fontColor:"#ffffff",borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",borderWidth:_,fontSize:k,lineHeight:A,height:"20%",width:"100%",absolute:!0,corners:!0,noLeft:!0,noRight:!0},"[Take Me",f.a.createElement("br",null),"Somewhere!]")))},K=a(18),Z=a.n(K),V=a(41),J=a(2),X=a.n(J);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){X()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var ee=function(e){R()(a,e);var t=$(a);function a(e){var r;return y()(this,a),(r=t.call(this,e)).fillRectangle=function(e,t){var a=r.fillRectangleHeight,n=Math.ceil(r.radius),o=a*e,i={width:n-Math.ceil(Math.sqrt(Math.pow(r.radius,2)-Math.pow(o,2))),height:a},s=o+n,c={};"topLeft"===t?c={left:0,bottom:s}:"bottomLeft"===t?c={left:0,top:s}:"topRight"===t?c={right:0,top:s}:"bottomRight"===t&&(c={right:0,bottom:s});var l=""+e+t;return f.a.createElement(P.a,{key:l,style:Q(Q(Q({},r.baseRectangleStyle),i),c)})},r.renderLines=function(e){return Z()(Array(r.numberOfRectangles)).map((function(t,a){return r.fillRectangle(a+1,e)}))},r.fillRectangles=function(){return f.a.createElement(f.a.Fragment,null,r.renderLines("topLeft"),r.renderLines("bottomLeft"),r.renderLines("topRight"),r.renderLines("bottomRight"))},r.numberOfRectangles=15,r.radius=r.props.circleDiameter/2,r.fillRectangleHeight=r.radius/(r.numberOfRectangles+1),r.baseRectangleStyle={position:"absolute",zIndex:10,elevation:10},r}return w()(a,[{key:"render",value:function(){var e=te(this.props);return f.a.createElement(P.a,{style:e.container},f.a.createElement(h.a,{activeOpacity:.2,style:e.button,onPress:this.props.onPress},this.props.children),this.fillRectangles())}}]),a}(f.a.Component),te=function(e){return O.a.create({container:{position:"relative",zIndex:0},button:{backgroundColor:"clear",justifyContent:"center",alignContent:"center",borderRadius:e.circleDiameter/2,width:e.circleDiameter,height:e.circleDiameter,top:e.top,bottom:e.bottom,right:e.right,left:e.left}})};function ae(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var re=function(e){R()(a,e);var t=ae(a);function a(){return y()(this,a),t.apply(this,arguments)}return w()(a,[{key:"render",value:function(){return f.a.createElement(P.a,{style:{bottom:this.props.centerHeight+this.props.displaceRadius*Math.sin(this.props.angle),left:this.props.centerWidth+this.props.displaceRadius*Math.cos(this.props.angle),position:"absolute"}},f.a.createElement(ee,{circleDiameter:this.props.iconSize,onPress:this.props.onPress},f.a.createElement(V.a,{style:{height:this.props.iconSize,width:this.props.iconSize,borderRadius:100},source:this.props.image})))}}]),a}(f.a.Component),ne=a(321),oe={Back:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/back.png",name:"Back"},Pumped:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/pumped.png",name:"Pumped"},Lazy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/lazy.png",name:"Lazy"},Happy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/happy.png",name:"Happy"},Weird:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/weird.png",name:"Weird"},Sad:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/sad.png",name:"Sad"},Romantic:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/romance.png",name:"Romantic"},Random:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/random.png",name:"Random"}},ie=["Back","Pumped","Lazy","Happy","Weird","Sad","Romantic","Random"],se=function(e){var t=e.navigation,a=Object(m.useState)(u.a.get("window")),r=l()(a,2),n=r[0],o=r[1];window.addEventListener("resize",(function(){return o(u.a.get("window"))}));var i=Object(p.b)({PressStart2P_400Regular:p.a}),s=l()(i,1)[0],c=Object.values(L.icons).map((function(e){return e.uri})),h=Object(ne.a)(Z()(c)),g=l()(h,1)[0];if(!s||!g)return f.a.createElement(d.a,null);var y={height:L.BACKGROUND_IMAGE_HEIGHT,width:L.BACKGROUND_IMAGE_WIDTH},b=j.calculate_scaledImageDim(n,y),w=(b.scalingRatio,L.BUTTON_BORDER_WIDTH,b.scalingRatio,L.TILE_FONT_SIZE,L.LINE_SPACING,b.scalingRatio,L.CLICK_FONT_SIZE,L.LINE_SPACING,b.height/2-180*b.scalingRatio/2),v=b.width/2-180*b.scalingRatio/2,R=320*b.scalingRatio,I=ie.map((function(e,a){return"Back"===e?f.a.createElement(re,{key:e,centerHeight:w,centerWidth:v,displaceRadius:R,image:oe[e],angle:Math.PI/2+Math.PI/4*a,iconSize:180*b.scalingRatio,onPress:function(){t.navigate("ChooseMoodOrPlace")}}):f.a.createElement(re,{key:e,centerHeight:w,centerWidth:v,displaceRadius:R,image:oe[e],angle:Math.PI/2+Math.PI/4*a,iconSize:180*b.scalingRatio,onPress:function(){t.navigate("Playlist",{themeName:e,themeType:"Mood"})}})}));return f.a.createElement(T,{color:"black",height:"100%",width:"100%"},f.a.createElement(W,{image:L.HomeScreenImage.src.uri,height:b.height,width:b.width},I))},ce={Back:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/back.png",name:"Back"},Home:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/home.png",name:"Home"},Cloudy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/clouds.png",name:"cloudy"},Beach:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/beach.png",name:"Beach"},Party:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/party.png",name:"Party"},Icy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/cold%20updated.png",name:"Icy"},Space:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/space.png",name:"Space"},Random:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/random.png",name:"Random"}},le=["Back","Home","Cloudy","Beach","Party","Icy","Space","Random"],he=function(e){var t=e.navigation,a=Object(m.useState)(u.a.get("window")),r=l()(a,2),n=r[0],o=r[1];window.addEventListener("resize",(function(){return o(u.a.get("window"))}));var i=Object(p.b)({PressStart2P_400Regular:p.a}),s=l()(i,1)[0],c=Object.values(L.icons).map((function(e){return e.uri})),h=Object(ne.a)(Z()(c)),g=l()(h,1)[0];if(!s||!g)return f.a.createElement(d.a,null);L.HomeScreenImage.height,L.HomeScreenImage.width;var y={height:L.BACKGROUND_IMAGE_HEIGHT,width:L.BACKGROUND_IMAGE_WIDTH},b=j.calculate_scaledImageDim(n,y),w=(b.scalingRatio,L.BUTTON_BORDER_WIDTH,b.scalingRatio,L.TILE_FONT_SIZE,L.LINE_SPACING,b.scalingRatio,L.CLICK_FONT_SIZE,L.LINE_SPACING,b.height/2-180*b.scalingRatio/2),v=b.width/2-180*b.scalingRatio/2,R=320*b.scalingRatio,I=le.map((function(e,a){return"Back"===e?f.a.createElement(re,{key:e,centerHeight:w,centerWidth:v,displaceRadius:R,image:ce[e],angle:Math.PI/2+Math.PI/4*a,iconSize:180*b.scalingRatio,onPress:function(){t.navigate("ChooseMoodOrPlace")}}):f.a.createElement(re,{key:e,centerHeight:w,centerWidth:v,displaceRadius:R,image:ce[e],angle:Math.PI/2+Math.PI/4*a,iconSize:180*b.scalingRatio,onPress:function(){t.navigate("Playlist",{themeName:e,themeType:"Place"})}})}));return f.a.createElement(T,{color:"black",height:"100%",width:"100%"},f.a.createElement(W,{image:L.HomeScreenImage.src.uri,height:b.height,width:b.width},I))},ue=a(153),de=a(6),pe=a.n(de),me=a(44);function fe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var ge=function(e){R()(a,e);var t=fe(a);function a(){return y()(this,a),t.apply(this,arguments)}return w()(a,[{key:"render",value:function(){var e,t=(e=this.props,O.a.create({default:{borderColor:e.borderColor,backgroundColor:e.backgroundColor,width:e.width,height:e.height,borderRadius:3,justifyContent:"center",flexWrap:"wrap",overflow:"hidden",borderWidth:e.borderWidth}})).default;return this.props.noBackground&&(t=O.a.compose(t,O.a.create({backgroundColor:"clear"}))),this.props.noTop&&(t=O.a.compose(t,O.a.create({borderTopWidth:0}))),this.props.noBottom&&(t=O.a.compose(t,O.a.create({borderBottomWidth:0}))),this.props.noBorder&&(t=O.a.compose(t,O.a.create({borderWidth:0}))),this.props.corners&&(t=O.a.compose(t,O.a.create({borderRadius:0}))),this.props.touchable?f.a.createElement(h.a,{style:t},f.a.createElement(T,{height:"100%",width:"100%"},this.props.children)):f.a.createElement(P.a,{style:t},this.props.children)}}]),a}(f.a.Component),ye=a(322),be=a(323),we=a(128);function ve(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var Re=.5,Ie=1,Se=function(e){R()(a,e);var t=ve(a);function a(e){var r;return y()(this,a),(r=t.call(this,e)).state={isNexting:!1,flatListRef:null,isPlaying:!1,playbackInstance:null,currentIndex:0,volume:1,isBuffering:!1,opacities:Object.assign.apply(Object,[{}].concat(Z()(r.props.playlist.map((function(e){return X()({},e.name,Ie)})))))},r.onPlayPause_dispatchSideEffects=function(e){var t=function(e,t){var a=Object.entries(e).map((function(e){var t=l()(e,2),a=t[0];t[1];return X()({},a,Ie)}));return a[t.type]=t.payload,a}(r.state.opacities,{type:r.props.playlist[r.state.currentIndex].name,payload:e?Re:Ie});r.state.flatListRef.scrollToIndex({animated:!0,index:r.state.currentIndex}),r.setState({opacities:t})},r.onPlaybackStatusUpdate=function(e){if(r.setState({isBuffering:e.isBuffering}),e.didJustFinish){if(r.state.currentIndex===r.props.playlist.length-1)return void r.handlePlayPause();r.handleNextTrack()}},r.handleSongButton=function(e){var t,a;return pe.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("song button",e),console.log(r.props.playlist[r.state.currentIndex]),r.state.currentIndex,e!==r.props.playlist[r.state.currentIndex].name){n.next=9;break}return console.log("try to pause",e),n.next=7,pe.a.awrap(r.handlePlayPause());case 7:n.next=26;break;case 9:if(-1===(t=r.props.playlist.findIndex((function(t){return t.name===e})))&&console.warn("ERROR: SONG NOT FOUND: 103"),n.prev=11,-1===t&&(t=0),!(a=r.state.playbackInstance)){n.next=20;break}return n.next=17,pe.a.awrap(a.unloadAsync());case 17:r.setState({currentIndex:t}),r.setState({isPlaying:!0}),r.loadAudio();case 20:r.onPlayPause_dispatchSideEffects(!0),n.next=26;break;case 23:n.prev=23,n.t0=n.catch(11),console.error(n.t0);case 26:case"end":return n.stop()}}),null,null,[[11,23]],Promise)},r.handlePlayPause=function(){var e,t,a;return pe.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=r.state,t=e.isPlaying,a=e.playbackInstance,!t){n.next=6;break}return n.next=4,pe.a.awrap(a.pauseAsync());case 4:n.next=8;break;case 6:return n.next=8,pe.a.awrap(a.playAsync());case 8:r.onPlayPause_dispatchSideEffects(!t),r.setState({isPlaying:!t});case 10:case"end":return n.stop()}}),null,null,null,Promise)},r.handlePreviousTrack=function(){var e,t,a;return pe.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=r.state,t=e.playbackInstance,a=e.currentIndex,e.isPlaying||0!==a){n.next=6;break}return n.next=4,pe.a.awrap(r.handlePlayPause());case 4:n.next=17;break;case 6:if(0!==a){n.next=10;break}return n.abrupt("return");case 10:if(!t){n.next=17;break}return n.next=13,pe.a.awrap(t.unloadAsync());case 13:a>0?a-=1:a=0,r.setState({currentIndex:a}),r.setState({isPlaying:!0}),r.loadAudio();case 17:r.onPlayPause_dispatchSideEffects(!0);case 18:case"end":return n.stop()}}),null,null,null,Promise)},r.handleNextTrack=function(){var e,t,a,n;return pe.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=r.state,t=e.playbackInstance,a=e.currentIndex,n=e.isPlaying,!r.state.isNexting){o.next=5;break}return o.abrupt("return");case 5:if(n||0!==a){o.next=10;break}return o.next=8,pe.a.awrap(r.handlePlayPause());case 8:o.next=18;break;case 10:if(!t){o.next=18;break}return r.state.isNexting=!0,o.next=14,pe.a.awrap(t.unloadAsync());case 14:a<r.props.playlist.length-1?a+=1:a=0,r.setState({currentIndex:a}),r.setState({isPlaying:!0}),r.loadAudio();case 18:r.onPlayPause_dispatchSideEffects(!0),r.state.isNexting=!1;case 20:case"end":return o.stop()}}),null,null,null,Promise)},r}return w()(a,[{key:"loadAudio",value:function(){var e,t,a,r,n,o,i;return pe.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=this.state,t=e.currentIndex,a=e.isPlaying,r=e.volume,s.prev=1,n=new we.a.Sound,o={uri:this.props.playlist[t].track.uri},i={shouldPlay:a,volume:r},n.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate),s.next=8,pe.a.awrap(n.loadAsync(o,i,!1));case 8:this.setState({playbackInstance:n}),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),console.log(s.t0);case 14:case"end":return s.stop()}}),null,this,[[1,11]],Promise)}},{key:"componentDidMount",value:function(){return pe.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.a.awrap(we.a.setAudioModeAsync({allowsRecordingIOS:!1,interruptionModeIOS:we.a.INTERRUPTION_MODE_IOS_DO_NOT_MIX,playsInSilentModeIOS:!0,interruptionModeAndroid:we.a.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,shouldDuckAndroid:!0,staysActiveInBackground:!1,playThroughEarpieceAndroid:!0}));case 3:return e.next=5,pe.a.awrap(this.loadAudio());case 5:this.handlePlayPause(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),null,this,[[0,8]],Promise)}},{key:"componentWillUnmount",value:function(){return pe.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.a.awrap(this.state.playbackInstance.unloadAsync());case 2:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this;return f.a.createElement(T,{color:"clear",height:"54.5454545%",width:"50%",nudge:!0},f.a.createElement(T,{height:"17%",width:L.themeTitleBoxSize[this.props.themeName]},f.a.createElement(U,{borderColor:L.themeColors[this.props.themeName].border,backgroundColor:L.themeColors[this.props.themeName].background,fontColor:L.themeColors[this.props.themeName].text,noBottom:!0,height:"100%",width:"100%",borderWidth:this.props.bannerBorderWidth,fontSize:this.props.themeName===L.themes.Cloudy?this.props.cloudTitleFontSize:this.props.subtitleFontSize,lineHeight:this.props.themeName===L.themes.Cloudy?this.props.cloudLineHeight:this.props.subtitleLineHeight},this.props.themeTitle)),f.a.createElement(ge,{borderColor:L.themeColors[this.props.themeName].border,backgroundColor:L.themeColors[this.props.themeName].background,height:"69%",width:"100%",borderWidth:this.props.bannerBorderWidth,corners:!0},f.a.createElement(_.a,{ref:function(t){e.state.flatListRef=t},vertical:!0,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,keyExtractor:function(e){return e.name},data:this.props.playlist,renderItem:function(t){var a=t.item;return f.a.createElement(ge,{height:"100%",width:"100%",corners:!0,noBorder:!0,noBackground:!0},f.a.createElement(h.a,{onPress:function(){e.handleSongButton(a.name)}},f.a.createElement(P.a,{style:{opacity:e.state.opacities[a.name]}},f.a.createElement(me.a,{style:{flexDirection:"row"},horizontal:!0,showsHorizontalScrollIndicator:!1,nestedScrollEnabled:!0,contentContainerStyle:{width:"100%"}},f.a.createElement(P.a,{style:{width:(a.name+" / "+a.artist).length>35?void 0:"100%"}},f.a.createElement(G.a,{style:[e.props.fontStyle(e.props.subtitleFontSize,e.props.subtitleLineHeight,"center",(a.name+" / "+a.artist).length>35?e.props.subtitleFontSize/8:void 0,"Tinos_400Regular").style]},a.name," / ",a.artist))),f.a.createElement(me.a,null,f.a.createElement(P.a,null,f.a.createElement(G.a,{style:e.props.fontStyle(e.props.titleFontSize,e.props.titleLineHeight,"center",0,"PressStart2P_400Regular").style},"--------------"))))))}})),f.a.createElement(T,{color:"clear",height:"13%",width:"100%"},f.a.createElement(U,{noTop:!0,borderColor:L.themeColors[this.props.themeName].border,backgroundColor:L.themeColors[this.props.themeName].background,fontColor:L.themeColors[this.props.themeName].text,height:"100%",width:"100%",borderWidth:this.props.bannerBorderWidth,fontSize:this.props.entryFontSize,lineHeight:this.props.entryLineHeight},f.a.createElement(h.a,{onPress:this.handlePreviousTrack},f.a.createElement(ye.a,{name:"play-skip-back-circle",color:"white",size:this.props.titleFontSize,color:L.themeColors[this.props.themeName].border})),f.a.createElement(G.a,null," "),f.a.createElement(h.a,{onPress:this.handlePlayPause},this.state.isPlaying?f.a.createElement(be.a,{name:"pausecircle",size:this.props.titleFontSize,color:L.themeColors[this.props.themeName].border}):f.a.createElement(be.a,{name:"play",size:this.props.titleFontSize,color:L.themeColors[this.props.themeName].border})),f.a.createElement(G.a,null," "),f.a.createElement(h.a,{onPress:this.handleNextTrack},f.a.createElement(ye.a,{name:"play-skip-forward-circle",size:this.props.titleFontSize,color:L.themeColors[this.props.themeName].border})))))}}]),a}(f.a.Component),Ce=function(e){var t=e.navigation,a=t.getParam("themeName"),r=a;if("Random"===a){var n=null;"Mood"===t.getParam("themeType")?n=Object.keys(L.moodThemes):"Place"===t.getParam("themeType")?n=Object.keys(L.placeThemes):console.error("no theme type found that matches: "+t.getParam("themeType"));var o=Math.floor(Object(H.a)(n.length));r=n[o]}var i,s,c=L.themeTitleNames[r];switch(r){case L.themes.Beach:case L.themes.Cloudy:i=L.themeImage[r],s=L.themePlaylists[r];break;case L.themes.Happy:i=L.themeImage[r];break;case L.themes.Home:case L.themes.Party:case L.themes.Pumped:case L.themes.Romantic:i=L.themeImage[r],s=L.themePlaylists[r];break;case L.themes.Sad:i=L.themeImage[r];break;case L.themes.Icy:case L.themes.Space:case L.themes.Weird:i=L.themeImage[r],s=L.themePlaylists[r];break;case L.themes.Lazy:i=L.themeImage[r],s=L.themePlaylists[r];default:console.warn("No Theme Found For Image")}s||(s=L.themePlaylists.Beach);var h=Object(m.useState)(u.a.get("window")),g=l()(h,2),y=g[0],b=g[1];window.addEventListener("resize",(function(){return b(u.a.get("window"))}));var w=Object(p.b)({PressStart2P_400Regular:p.a,Tinos_400Regular:ue.a});if(!l()(w,1)[0])return f.a.createElement(d.a,null);var v=L.HomeScreenImage.height,R=L.HomeScreenImage.width,I=R/L.BACKGROUND_IMAGE_WIDTH,S={height:v,width:R},C=j.calculate_scaledImageDim(y,S),E=C.scalingRatio*L.BUTTON_BORDER_WIDTH*I,P=C.scalingRatio*L.TILE_FONT_SIZE*I,_=1*P,k=C.scalingRatio*L.SUBTITLE_FONT_SIZE*I,A=1.5*k,B=C.scalingRatio*L.ENTRY_FONT_SIZE*I,N=1.15*B,x=C.scalingRatio*L.CLOUDS_TITLE_FONT_SIZE*I;return f.a.createElement(T,{color:"black",height:"100%",width:"100%"},f.a.createElement(W,{image:i.src,height:C.height,width:C.width},f.a.createElement(Se,{navigation:t,themeName:r,themeTitle:c,playlist:s,fontStyle:function(e,t,a,n,o){return O.a.create({style:{fontFamily:o,fontSize:e,textAlign:a,textAlignVertical:"center",color:L.themeColors[r].text,opacity:1,paddingLeft:n,lineHeight:t}})},subtitleFontSize:k,subtitleLineHeight:A,titleFontSize:P,titleLineHeight:_,bannerBorderWidth:E,entryFontSize:B,entryLineHeight:N,cloudTitleFontSize:x,cloudLineHeight:x})))};function Ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=E()(e);if(t){var n=E()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return S()(this,a)}}var Pe=function(e){R()(a,e);var t=Ee(a);function a(e){var r;return y()(this,a),(r=t.call(this,e)).props=e,console.log(r.props),r}return w()(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return(0,this.props.props.navigation.navigate)("Home"),f.a.createElement(d.a,null)}}]),a}(f.a.Component);Pe.navigationOptions={title:"First"};var Oe=function(e){var t=Object(m.useState)(u.a.get("window")),a=l()(t,2),r=a[0],n=a[1];window.addEventListener("resize",(function(){return n(u.a.get("window"))}));var o=Object(p.b)({PressStart2P_400Regular:p.a});if(!l()(o,1)[0])return f.a.createElement(d.a,null);var i={height:L.BACKGROUND_IMAGE_HEIGHT,width:L.BACKGROUND_IMAGE_WIDTH};j.calculate_scaledImageDim(r,i);return f.a.createElement(P.a,null,f.a.createElement(Pe,{props:e}))},_e=a(14),ke=function(e){var t=e.navigation;console.log(t);var a=Object(m.useState)(u.a.get("window")),r=l()(a,2),n=r[0],o=r[1];window.addEventListener("resize",(function(){return o(u.a.get("window"))}));var i=Object(p.b)({PressStart2P_400Regular:p.a,Tinos_400Regular:ue.a}),s=l()(i,1)[0],c=Object.values(L.icons).map((function(e){return e.uri})),d=Object.values(L.themeImage).map((function(e){return e.src.uri})),g=L.themePlaylists.Beach.map((function(e){return e.track.uri})),y=Object(ne.a)([L.themeImage.Beach.src.uri].concat(Z()(c),Z()(g),Z()(d))),b=l()(y,1)[0];if(!s&&!b)return f.a.createElement(T,{color:"black",height:"100%",width:"100%"});var w=L.HomeScreenImage.height,v=L.HomeScreenImage.width,R=v/L.BACKGROUND_IMAGE_WIDTH,I={height:w,width:v},S=j.calculate_scaledImageDim(n,I),C=L.BUTTON_BORDER_WIDTH*S.scalingRatio*R,E=L.TILE_FONT_SIZE*S.scalingRatio*R,P=E*L.LINE_SPACING,O=S.scalingRatio*L.CLICK_FONT_SIZE*R,_=O*L.LINE_SPACING;return f.a.createElement(T,{color:"black",height:"100%",width:"100%"},f.a.createElement(h.a,{onPress:function(){t.navigate("ChooseMoodOrPlace")}},f.a.createElement(W,{image:L.HomeScreenImage.src.uri,height:S.height,width:S.width},f.a.createElement(T,{apart:!0,nudge:!0,color:"clear",height:"84.5%",width:"50%",top:".6%"},f.a.createElement(T,{color:"clear",height:"36%",width:"100%"},f.a.createElement(U,{fontColor:"#ffffff",borderColor:"#b4a7d6",backgroundColor:"#8e7cc380",borderWidth:C,fontSize:E,lineHeight:P,height:"78%",width:"100%",bottomCorners:!0},"Choose Your ",f.a.createElement("br",null),"Own",f.a.createElement("br",null),"Audioventure!"),f.a.createElement(U,{fontColor:"#ffffff",borderColor:"#b4a7d6",backgroundColor:"#8e7cc380",borderWidth:C,fontSize:O,lineHeight:_,height:"22%",width:"100%",noTop:!0},"Click anywhere to start!")),f.a.createElement(U,{fontColor:"#ffffff",borderColor:"#b4a7d6",backgroundColor:"#8e7cc380",borderWidth:C,fontSize:O,lineHeight:_,height:"9%",width:"33%",touchable:!0},"Credits")))))},Te=Object(i.a)({Root:Oe,Home:ke,ChooseMoodOrPlace:Y,MatchMyMood:se,TakeMeSomewhere:he,Playlist:Ce},{initialRouteName:"Root",headerMode:"none",defaultNavigationOptions:{title:"App",cardStyle:{backgroundColor:"black"},cardStyleInterpolator:s.a.forNoAnimation}}),Ae=_e.a.select({web:function(e){return Object(o.createBrowserApp)(e,{history:"hash"})},default:function(e){return Object(n.createAppContainer)(e)}})(Te);Object(r.a)(Ae)}},[[239,1,2]]]);
//# sourceMappingURL=app.e4042199.chunk.js.map