(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,a){},45:function(e,t,a){e.exports=a(62)},50:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},52:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(41),r=a.n(s),l=(a(50),a(51),a(52),a(13)),i=a(2),c=a(3),m=a(4),u=a(6),d=a(5),p=(a(31),a(53),a(23)),h=a(12),g=a(67),f="box",b=a(66),v=a(39),E=a(33),C={border:"none",cursor:"move",width:"100px",height:"50px",textAlign:"center"},O=function(e){var t=e.title,a=(e.yellow,"Teacher Desk"===t?"#00c2cb":"white");return o.a.createElement("div",{style:Object(E.a)(Object(E.a)({},C),{},{backgroundColor:a})},t)};function y(e,t,a){var n="translate3d(".concat(e,"px, ").concat(t,"px, 0)");return{position:"absolute",transform:n,WebkitTransform:n,opacity:a?0:1,height:a?0:""}}var w=function(e){var t=e.id,a=e.title,s=e.left,r=e.top,l=Object(b.a)({item:{type:f,id:t,left:s,top:r,title:a},collect:function(e){return{isDragging:e.isDragging()}}}),i=Object(h.a)(l,3),c=i[0].isDragging,m=i[1],u=i[2];return Object(n.useEffect)((function(){u(Object(v.a)(),{captureDraggingState:!0})}),[]),o.a.createElement("div",{ref:m,style:y(s,r,c)},o.a.createElement(O,{title:a}))};function k(e,t){return[30*Math.round(e/30),30*Math.round(t/30)]}var N=a(43),x=a.n(N),S={width:"900px",height:"600px",position:"relative"};var j=function(e){var t=e.snapToGrid,a=Object(n.useState)({a:{top:0,left:0,title:"Teacher Desk"},c:{top:0,left:0,title:"Student Desk"},d:{top:0,left:0,title:"Student Desk"},e:{top:0,left:0,title:"Student Desk"},f:{top:0,left:0,title:"Student Desk"},g:{top:0,left:0,title:"Student Desk"},h:{top:0,left:0,title:"Student Desk"},b:{top:0,left:0,title:"Student Desk"}}),s=Object(h.a)(a,2),r=s[0],l=s[1],i=Object(n.useCallback)((function(e,t,a){l(x()(r,Object(p.a)({},e,{$merge:{left:t,top:a}})))}),[r]),c=Object(g.a)({accept:f,drop:function(e,a){var n=a.getDifferenceFromInitialOffset(),o=Math.round(e.left+n.x),s=Math.round(e.top+n.y);if(t){var r=k(o,s),l=Object(h.a)(r,2);o=l[0],s=l[1]}i(e.id,o,s)}}),m=Object(h.a)(c,2)[1];return o.a.createElement("div",{ref:m,style:S},Object.keys(r).map((function(e){return function(e,t){return o.a.createElement(w,Object.assign({key:t,id:t},e))}(r[e],e)})))},P=a(64),L={},B=Object(n.memo)((function(e){var t=e.title,a=Object(n.useState)(!1),s=Object(h.a)(a,2),r=s[0],l=s[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return l(!r)}),500);return function(){return clearInterval(e)}}),[r]),o.a.createElement("div",{style:L},o.a.createElement(O,{title:t,yellow:r}))})),D={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function R(e,t,a){if(!e||!t)return{display:"none"};var n=t.x,o=t.y;if(a){var s=k(n-=e.x,o-=e.y),r=Object(h.a)(s,2);n=r[0],o=r[1],n+=e.x,o+=e.y}var l="translate(".concat(n,"px, ").concat(o,"px)");return{transform:l,WebkitTransform:l}}var I=function(e){var t=Object(P.a)((function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})),a=t.itemType,n=t.isDragging,s=t.item,r=t.initialOffset,l=t.currentOffset;return n?o.a.createElement("div",{style:D},o.a.createElement("div",{style:R(r,l,e.snapToGrid)},function(){switch(a){case f:return o.a.createElement(B,{title:s.title});default:return null}}())):null},T=function(){return o.a.createElement("div",null,o.a.createElement(j,{snapToGrid:!0}),o.a.createElement(I,{snapToGrid:!1}))},W=a(65),V=a(32),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={onClassroom:!0,first:!0},e}return Object(m.a)(a,[{key:"getClass",value:function(e){var t=document.getElementById("classSection"),a=document.getElementById("studentSection");return e?this.state.onClassroom?(t&&setTimeout((function(){t.classList.remove("hidden")}),300),"classRoomSection fade-in-left"):(t&&setTimeout((function(){t.classList.add("hidden")}),300),"classroomSection fade-out-left"):this.state.onClassroom?(a&&setTimeout((function(){a.classList.add("hidden")}),300),this.state.first?"studentSection fade-out-right hidden":"studentSection fade-out-right"):(a&&a.classList.remove("hidden"),"studentSection fade-in-right")}},{key:"handleChange",value:function(e){this.setState({first:!1}),e?(this.setState({onClassroom:!0}),document.getElementById("classroomNavButton").classList.add("blackText"),document.getElementById("studentsNavButton").classList.remove("blackText"),document.getElementById("line").classList.remove("forward"),document.getElementById("line").classList.add("reverse")):(this.setState({onClassroom:!1}),document.getElementById("studentsNavButton").classList.add("blackText"),document.getElementById("classroomNavButton").classList.remove("blackText"),document.getElementById("line").classList.remove("reverse"),document.getElementById("line").classList.add("forward"))}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"bgSection"},o.a.createElement("nav",{id:"navbar2"},o.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"}),o.a.createElement("path",{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"}),o.a.createElement("path",{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"})),o.a.createElement("span",{className:"logoText"},"CLASSBOOSTER "),o.a.createElement("img",{draggable:"false",id:"userProfilePicture",src:"https://www.pathcenter.co.il/wp-content/uploads/2014/03/user_icon.png"})),o.a.createElement("nav",{className:"secondaryNav"},o.a.createElement("button",{onClick:function(){return e.handleChange(1)},id:"classroomNavButton",className:"blackText"},"Classroom"),o.a.createElement("button",{onClick:function(){return e.handleChange(0)},id:"studentsNavButton"},"Students")),o.a.createElement("span",{className:"lineContainer"},o.a.createElement("span",{className:"line",id:"line"})),o.a.createElement("div",{className:"tabContainer"},o.a.createElement("section",{className:this.getClass(1),id:"classSection"},o.a.createElement("span",{className:"chivo classname"},"Class Name"),o.a.createElement("div",{className:"roomSpace"},o.a.createElement("div",{className:"whiteboard overpass"},"Whiteboard"),o.a.createElement("div",{className:"deskSpace"},o.a.createElement(W.a,{backend:V.a},o.a.createElement(T,null)))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"whiteButton"},"Create Seating Chart"))),o.a.createElement("section",{className:this.getClass(0),id:"studentSection"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-5"},o.a.createElement("h3",{className:"blackText chivo"},"Class Name")))))))}}]),a}(n.Component),U=a(21);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var F=o.a.createElement("rect",{x:13.1818,width:2.63636,height:29,rx:1.31818,fill:"black"}),G=o.a.createElement("rect",{y:15.8182,width:2.63636,height:29,rx:1.31818,transform:"rotate(-90 0 15.8182)",fill:"black"}),z=function(e){var t=e.svgRef,a=e.title,n=H(e,["svgRef","title"]);return o.a.createElement("svg",M({width:29,height:29,viewBox:"0 0 29 29",fill:"none",ref:t},n),a?o.a.createElement("title",null,a):null,F,G)},Z=o.a.forwardRef((function(e,t){return o.a.createElement(z,M({svgRef:t},e))}));a.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var $=o.a.createElement("circle",{cx:22,cy:22,r:22,fill:"#C4C4C4"}),_=o.a.createElement("path",{d:"M11 35.3309C11 29.073 16.1487 24 22.5 24C28.8513 24 34 29.073 34 35.3309",stroke:"black",strokeWidth:2}),K=o.a.createElement("path",{d:"M28.5522 16.875C28.5522 20.1464 25.8566 22.8235 22.5 22.8235C19.1434 22.8235 16.4478 20.1464 16.4478 16.875C16.4478 13.6036 19.1434 10.9265 22.5 10.9265C25.8566 10.9265 28.5522 13.6036 28.5522 16.875Z",stroke:"black",strokeWidth:2}),Q=function(e){var t=e.svgRef,a=e.title,n=J(e,["svgRef","title"]);return o.a.createElement("svg",q({width:44,height:44,viewBox:"0 0 44 44",fill:"none",ref:t},n),a?o.a.createElement("title",null,a):null,$,_,K)},X=o.a.forwardRef((function(e,t){return o.a.createElement(Q,q({svgRef:t},e))})),Y=(a.p,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("nav",{className:"dashboard-navbar-container"},o.a.createElement("div",{className:"dashboard-navbar"},o.a.createElement("a",{href:"http://localhost:3000",className:"dashboard-logo"},"CLASSBOOSTER"),o.a.createElement("button",{className:"dashboard-plus",onClick:function(){return e.props.toggleRenameClassroomPopup(-1)}},o.a.createElement(Z,null)),o.a.createElement("button",{id:"dashboard-profile",onClick:this.props.toggleProfileDropdown},o.a.createElement(X,null)),this.props.profileDropdownVisible&&o.a.createElement(ee,null)))}}]),a}(n.Component));function ee(){return o.a.createElement("div",{id:"dashboard-profile-dropdown"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap",rel:"stylesheet"}),o.a.createElement("a",{href:"#",id:"dashboard-account-link"},"Account"),o.a.createElement("a",{href:"#",id:"dashboard-support-link"},"Support"))}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var ne=o.a.createElement("circle",{cx:3.70588,cy:3.70588,r:2.70588,stroke:"black",strokeWidth:2}),oe=o.a.createElement("circle",{cx:3.70588,cy:14.2059,r:2.70588,stroke:"black",strokeWidth:2}),se=o.a.createElement("circle",{cx:3.70588,cy:24.2941,r:2.70588,stroke:"black",strokeWidth:2}),re=function(e){var t=e.svgRef,a=e.title,n=ae(e,["svgRef","title"]);return o.a.createElement("svg",te({width:8,height:28,viewBox:"0 0 8 28",fill:"none",ref:t},n),a?o.a.createElement("title",null,a):null,ne,oe,se)},le=o.a.forwardRef((function(e,t){return o.a.createElement(re,te({svgRef:t},e))})),ie=(a.p,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.classroomName,n=e.nickname,s=e.numOfStudents,r=e.classroomOptionsVisible,l=e.toggleClassroomOptions,i=e.toggleRenameClassroomPopup,c=e.toggleDeleteClassroomPopup,m=e.link;return o.a.createElement("div",{className:"dashboard-classroom"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap",rel:"stylesheet"}),o.a.createElement("div",{className:"dashboard-classroom-top-section"},o.a.createElement("a",{href:m,className:"dashboard-classroom-name"},a),o.a.createElement("button",{id:"verticalEllipsisButton"+t,className:"dashboard-vertical-ellipsis",onClick:function(){return l(t)}},o.a.createElement(le,null)),o.a.createElement("div",{className:"dashboard-nickname"},n),r&&o.a.createElement(ce,{toggleRenameClassroomPopup:i,toggleDeleteClassroomPopup:c,classroomIndex:t})),o.a.createElement("div",{className:"dashboard-classroom-bottom-section"},o.a.createElement("span",{className:"dashboard-students"},s," students")))}}]),a}(n.Component));function ce(e){return o.a.createElement("div",{className:"dashboard-classroom-options-dropdown"},o.a.createElement("button",{id:"renameClassroomOption"+e.classroomIndex,className:"dashboard-rename-classroom",onClick:function(){return e.toggleRenameClassroomPopup(e.classroomIndex)}},"Rename classroom"),o.a.createElement("button",{id:"deleteClassroomOption"+e.classroomIndex,className:"dashboard-delete-classroom",onClick:function(){return e.toggleDeleteClassroomPopup(e.classroomIndex)}},"Delete classroom"))}var me=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){for(var e=this.props,t=e.columnsPerRow,a=e.maxNumOfColumns,n=e.classrooms,s=e.toggleRenameClassroomPopup,r=e.toggleClassroomOptions,l=e.toggleDeleteClassroomPopup,i=[],c=0;c<t.length;c++)i.push(o.a.createElement(ue,{key:c,rowNumber:c,columns:t[c],maxNumOfColumns:a,classrooms:n,toggleRenameClassroomPopup:s,toggleClassroomOptions:r,toggleDeleteClassroomPopup:l}));return o.a.createElement("div",null,i)}}]),a}(n.Component);function ue(e){for(var t=[],a=e.classrooms,n=e.columns,s=e.maxNumOfColumns,r=e.rowNumber,l=0;l<n;l++)t.push(a[r*s+l]);return o.a.createElement("div",{className:"dashboard-classroom-row"},t.map((function(t){return o.a.createElement(ie,{key:t.index,index:t.index,classroomName:t.name,nickname:t.nickname,numOfStudents:t.numOfStudents,classroomOptionsVisible:t.classroomOptionsVisible,toggleClassroomOptions:e.toggleClassroomOptions,toggleRenameClassroomPopup:e.toggleRenameClassroomPopup,toggleDeleteClassroomPopup:e.toggleDeleteClassroomPopup,link:t.link})})))}var de=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={noClassnameWarning:""},e}return Object(m.a)(a,[{key:"checkInputs",value:function(){var e=this.props.selectedClassroom.index;document.getElementById("dashboard-classname").value.trim().length>0?(this.props.setClassroomName(e,document.getElementById("dashboard-classname").value,document.getElementById("dashboard-nickname").value),this.props.toggleClassroomOptions(e)):this.setState({noClassnameWarning:"This field is required"})}},{key:"render",value:function(){var e,t,a,n,s,r=this,l=this.props.selectedClassroom;return-1===l.index?(e="Name classroom",t="Classname (required)",a="Nickname",n="",s=""):(e="Rename classroom",t="Classname",a="Nickname",n=l.name,s=l.nickname),o.a.createElement("div",{className:"dashboard-popup-background"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap",rel:"stylesheet"}),o.a.createElement("div",{className:"dashboard-popup-classname"},o.a.createElement("p",null,e),o.a.createElement("label",{htmlFor:"classname"},t),o.a.createElement("span",{style:{color:"#e60000"}},this.state.noClassnameWarning),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"dashboard-classname",name:"classname",maxLength:"40",size:"20",defaultValue:n,autoComplete:"off"}),o.a.createElement("label",{htmlFor:"nickname",id:"dashboard-nickname-label"},a),o.a.createElement("br",null),o.a.createElement("input",{type:"text",id:"dashboard-nickname",name:"nickname",maxLength:"40",size:"20",defaultValue:s,autoComplete:"off"}),o.a.createElement("br",null),o.a.createElement("button",{className:"dashboard-popup-classname-save",onClick:function(){return r.checkInputs()}},"Save"),o.a.createElement("button",{className:"dashboard-popup-classname-cancel",onClick:this.props.toggleRenameClassroomPopup},"Cancel")))}}]),a}(n.Component),pe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.deleteClassroom,a=e.selectedClassroom,n=e.toggleDeleteClassroomPopup;return o.a.createElement("div",{className:"dashboard-popup-background"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Chivo&family=Overpass:wght@300&display=swap",rel:"stylesheet"}),o.a.createElement("div",{className:"dashboard-popup-delete-classroom"},o.a.createElement("p",null,"Are you sure you want to delete this classroom?"),o.a.createElement("div",{className:"dashboard-popup-delete-classroom-warning"},"This action cannot be reversed."),o.a.createElement("button",{className:"dashboard-popup-delete-classroom-delete",onClick:function(){return t(a.index)}},"Delete"),o.a.createElement("button",{className:"dashboard-popup-delete-classroom-cancel",onClick:n},"Cancel")))}}]),a}(n.Component),he=(a(56),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={columnsPerRow:[],maxNumOfColumns:0,renameClassroomPopup:{show:!1,indexOfClassroom:0},deleteClassroomPopup:{show:!1,indexOfClassroom:0},classroomWithOptionsOn:-1,classrooms:[],findClassnameWidth:"",findNicknameWidth:"",profileDropdownVisible:!1},e.handleClick=function(t){var a=e.state.classroomWithOptionsOn,n=t.target;if(a>-1){var o=Object(U.a)(e.state.classrooms);n===document.getElementById("renameClassroomOption"+a)||n===document.getElementById("deleteClassroomOption"+a)||n===document.getElementById("verticalEllipsisButton"+a)||document.getElementById("verticalEllipsisButton"+a).contains(t.target)||!0===e.state.renameClassroomPopup.show||!0===e.state.deleteClassroomPopup.show||(o[a].classroomOptionsVisible=!1,e.setState({classrooms:o,classroomWithOptionsOn:-1}))}e.state.profileDropdownVisible&&(n===document.getElementById("dashboard-profile")||document.getElementById("dashboard-profile").contains(n)||document.getElementById("dashboard-profile-dropdown").contains(n)||e.setState({profileDropdownVisible:!1}))},e.toggleProfileDropdown=function(){e.setState({profileDropdownVisible:!e.state.profileDropdownVisible})},e.addClassroom=function(t,a){var n=Object(U.a)(e.state.classrooms);n.push({index:n.length,name:t,nickname:a,numOfStudents:0,classroomOptionsVisible:!1,link:"#"}),e.calculateRows(n)},e.deleteClassroom=function(t){e.toggleDeleteClassroomPopup();var a=e.state.classrooms.filter((function(e){return e.index!==t}));e.updateClassroomIndexes(t,a)},e.toggleDeleteClassroomPopup=function(t){var a=e.state.deleteClassroomPopup;a.show=!a.show,a.indexOfClassroom=t,e.setState({deleteClassroomPopup:a})},e.toggleClassroomOptions=function(t){var a=Object(U.a)(e.state.classrooms);t>-1&&(a[t].classroomOptionsVisible=!a[t].classroomOptionsVisible,a[t].classroomOptionsVisible?e.setState({classrooms:a,classroomWithOptionsOn:t}):e.setState({classrooms:a,classroomWithOptionsOn:-1}))},e.calculateRows=function(t){var a=window.innerWidth-50;if(a>350){var n=t.length,o=Math.floor(a/350),s=n/o,r=Math.floor(s),l=s-r>0?n-o*r:0;t.length===e.state.classrooms.length&&o===e.state.maxNumOfColumns||e.addRowsToState(t,o,r,l)}},e.addRowsToState=function(t,a,n,o){for(var s=[],r=0;r<n;r++)s.push(a);o>0&&s.push(o),e.setState({classrooms:t,columnsPerRow:s,maxNumOfColumns:a,classroomWithOptionsOn:-1},(function(){return e.checkForVerticalScrollbar(s.length)}))},e.toggleRenameClassroomPopup=function(t){var a=e.state.renameClassroomPopup;a.show=!a.show,a.indexOfClassroom=t,e.setState({renameClassroomPopup:a})},e.setClassroomName=function(t,a,n){if(a=a.trim(),n=n.trim(),e.toggleRenameClassroomPopup(),-1===t)e.addClassroom(a,n);else{var o=Object(U.a)(e.state.classrooms);o[t].name=a,o[t].nickname=n,e.setState({classrooms:o})}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.calculateRows(e.state.classrooms)})),document.addEventListener("mousedown",this.handleClick),document.body.classList.add("dashboard-noscroll")}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",(function(){return e.calculateRows(e.state.classrooms)})),document.removeEventListener("mousedown",this.handleClick),document.body.classList.remove("dashboard-noscroll")}},{key:"updateClassroomIndexes",value:function(e,t){for(var a=e;a<t.length;a++)t[a].index=a;this.calculateRows(t)}},{key:"checkForVerticalScrollbar",value:function(e){360*e+65>visualViewport.height?document.getElementById("dashboard-page").style.paddingBottom="40px":document.getElementById("dashboard-page").style.paddingBottom="0px"}},{key:"render",value:function(){return o.a.createElement("div",{id:"dashboard-page"},o.a.createElement(Y,{toggleRenameClassroomPopup:this.toggleRenameClassroomPopup,toggleProfileDropdown:this.toggleProfileDropdown,profileDropdownVisible:this.state.profileDropdownVisible}),o.a.createElement(me,{columnsPerRow:this.state.columnsPerRow,maxNumOfColumns:this.state.maxNumOfColumns,classrooms:this.state.classrooms,toggleRenameClassroomPopup:this.toggleRenameClassroomPopup,toggleClassroomOptions:this.toggleClassroomOptions,toggleDeleteClassroomPopup:this.toggleDeleteClassroomPopup}),this.state.renameClassroomPopup.show&&o.a.createElement(de,{selectedClassroom:this.state.renameClassroomPopup.indexOfClassroom>-1?this.state.classrooms[this.state.renameClassroomPopup.indexOfClassroom]:{index:-1},setClassroomName:this.setClassroomName,toggleRenameClassroomPopup:this.toggleRenameClassroomPopup,toggleClassroomOptions:this.toggleClassroomOptions}),this.state.deleteClassroomPopup.show&&o.a.createElement(pe,{selectedClassroom:this.state.classrooms[this.state.deleteClassroomPopup.indexOfClassroom],deleteClassroom:this.deleteClassroom,toggleDeleteClassroomPopup:this.toggleDeleteClassroomPopup}))}}]),a}(n.Component)),ge=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",ConfirmPassword:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.handleConfirmPassword=function(t){e.setState({ConfirmPassword:t.target.value})},e.handleSubmit=function(e){e.preventDefault()},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"signupLogin-main"},o.a.createElement("div",null,o.a.createElement("nav",{id:"signupLogin-navbar"},o.a.createElement(l.b,{to:"/landing",className:"signupLogin-logoText"},"CLASSBOOSTER "),o.a.createElement("button",{className:"signupLogin-support"},"Support"),o.a.createElement("button",{className:"signupLogin-updates"},"Updates"),o.a.createElement(l.b,{to:"/Login",className:"signupLogin-ButtonA"},"LOGIN"))),o.a.createElement("div",{className:"signupLogin-basicBackground"},o.a.createElement("div",{className:"signupContainer"},o.a.createElement("div",null,o.a.createElement("center",null,o.a.createElement("h1",{className:"loginTitle"},"Sign Up"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Username",className:"placeHolderTextSignup",value:this.state.username,onChange:this.handleUsername}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Password",className:"placeHolderTextSignup",value:this.state.password,onChange:this.handlePassword}),o.a.createElement("input",{type:"text",placeholder:"Confirm Password",className:"placeHolderTextSignup",value:this.state.ConfirmPassword,onChange:this.handleConfirmPassword}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",className:"signupLogin-ButtonB",value:"Sign Up"})),o.a.createElement("button",{className:"signupLogin-forgotPassword"},"Forgot Password?"),o.a.createElement("h2",{class:"signupLogin-background"},o.a.createElement("span",{className:"signupLogin-orLine"},"or")),o.a.createElement(l.b,{to:"/Login",className:"signupLogin-ButtonC"},"Login"))))))}}]),a}(o.a.Component),fe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.handleSubmit=function(e){e.preventDefault()},e.handleSignUp=function(){},e}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"signupLogin-main"},o.a.createElement("section",null,o.a.createElement("nav",{id:"signupLogin-navbar"},o.a.createElement(l.b,{to:"/landing",className:"signupLogin-logoText"},"CLASSBOOSTER "),o.a.createElement("button",{className:"signupLogin-support "},"Support"),o.a.createElement("button",{className:"signupLogin-updates "},"Updates"),o.a.createElement(l.b,{to:"/Signup",className:"signupLogin-ButtonA"},"SIGN UP"))),o.a.createElement("section",{className:"signupLogin-basicBackground"},o.a.createElement("section",{className:"loginContainer"},o.a.createElement("center",null,o.a.createElement("h1",{className:"loginTitle"},"LOGIN"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Username",className:"placeHolderTextLogin",value:this.state.username,onChange:this.handleUsername}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Password",className:"placeHolderTextLogin",value:this.state.password,onChange:this.handlePassword}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",className:"signupLogin-ButtonB",value:"Login"})),o.a.createElement("button",{className:"signupLogin-forgotPassword"},"Forgot Password?"),o.a.createElement("h2",{className:"signupLogin-background"},o.a.createElement("span",{className:"signupLogin-orLine"},"or")),o.a.createElement(l.b,{to:"/Signup",className:"signupLogin-ButtonC"},"Sign Up")))))}}]),a}(o.a.Component),be=(a(61),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"all"},o.a.createElement("a",{href:"http://localhost:3000/editor"},"Class Editor"),o.a.createElement("br",null),o.a.createElement("a",{href:"http://localhost:3000/home"},"Dashboard"),o.a.createElement("br",null),o.a.createElement("a",{href:"http://localhost:3000/login"},"Login"),o.a.createElement("br",null),o.a.createElement("a",{href:"http://localhost:3000/signup"},"Signup"))}}]),a}(n.Component));function ve(){return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/login"},o.a.createElement(fe,null)),o.a.createElement(i.a,{path:"/signup"},o.a.createElement(ge,null)),o.a.createElement(i.a,{path:"/home"},o.a.createElement(he,null)),o.a.createElement(i.a,{path:"/editor"},o.a.createElement(A,null)),o.a.createElement(i.a,{path:"/"},o.a.createElement(be,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ce700caf.chunk.js.map