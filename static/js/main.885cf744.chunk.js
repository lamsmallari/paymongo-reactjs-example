(this["webpackJsonppaymongo-test"]=this["webpackJsonppaymongo-test"]||[]).push([[0],{111:function(e,a,t){e.exports=t(124)},124:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),o=t(14),i=t(8),m=t(21),u=t(12),s=t(63),d=t.n(s),p=t(70),g=function(){var e=Object(p.a)(d.a.mark((function e(a,t,n){var r,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("cGtfdGVzdF9XN0hMWnRqOFFmMjg3UEZCdkNydjhaMUc=","c2tfdGVzdF91cDREd2g3ckhGZDRta0RwejVXNG15aGY=",null!==(r="public"===n?"cGtfdGVzdF9XN0hMWnRqOFFmMjg3UEZCdkNydjhaMUc=":"secret"===n?"c2tfdGVzdF91cDREd2g3ckhGZDRta0RwejVXNG15aGY=":null)){e.next=5;break}return e.abrupt("return",{status:"error",data:(o="invalid_parameter",i="key parameter invalid",{errors:[{code:o,detail:i}]})});case 5:return e.next=7,fetch(a,{method:"POST",headers:{accept:"application/json","content-type":"application/json",authorization:"Basic ".concat(r)},body:JSON.stringify(t)});case 7:return l=e.sent,e.next=10,l.json();case 10:return c=e.sent,e.abrupt("return",c.hasOwnProperty("errors")?{status:"error",data:c}:{status:"success",data:c});case 12:case"end":return e.stop()}var o,i}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),E={},h=function(e){return{code:e.code,message:e.detail}};E.createToken=function(e){return new Promise((function(a,t){e?g("https://api.paymongo.com/v1/tokens",e,"public").then((function(e){"error"===e.status&&t(h(e.data.errors[0])),a(e.data)})):t(h("no_data"))}))},E.createPayment=function(e){return new Promise((function(a,t){e?g("https://api.paymongo.com/v1/payments",e,"secret").then((function(e){"error"===e.status&&t(h(e.data.errors[0])),a(e.data)})):t(h("no_token"))}))};var f=E,b=t(56),y=t.n(b),v=t(197),C=t(88),j=t(167),x=t(196),N=t(198),T={predefinedCreditCardData:{data:{attributes:{number:"4123450131000508",exp_month:12,exp_year:25,cvc:"111",billing:{address:{line1:"address",city:"Bi\xf1an",state:"Laguna",country:"PH",postal_code:"4024"},name:"John",email:"johnmail@gmail.com",phone:"09988909890"}}}},predefinedAmount:function(e,a){return{data:{attributes:{amount:1e4,currency:"PHP",source:{id:e,type:a}}}}},productDummyData:[{id:"1",title:"Product Item",price:5e3,details:"Product short description",image:"https://placeimg.com/640/480/tech"},{id:"2",title:"Product Item with a long name",price:8e3,details:"Product short description",image:"https://placeimg.com/640/480/tech"}]},O=t(2),k=t(71),P=t.n(k),B=function(e){return P()(e,{symbol:"\u20b1",decimal:".",separator:","}).format(!0)},F=t(170),I=t(173),w=t(172),S=t(57),D=t(175),W=t(72),_=t.n(W),q=t(176),R=t(174),A=t(199),G=Object(j.a)((function(e){return{root:{maxWidth:600,marginBottom:e.spacing(2)},actions:{padding:"0 16px 8px"},price:{marginBottom:e.spacing(1)}}})),M=function(e){var a=e.data,t=e.handleAddToCart,n=(Object(O.a)(e,["data","handleAddToCart"]),G());return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{className:n.root},r.a.createElement(w.a,null,r.a.createElement(S.a,{gutterBottom:!0,variant:"h6",component:"h2"},a.title),r.a.createElement(S.a,{className:n.price,color:"textSecondary"},"".concat(B(a.price))),r.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},a.details)),r.a.createElement(I.a,{className:n.actions},r.a.createElement(R.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(D.a,{size:"small",color:"primary",variant:"contained",disableElevation:!0,onClick:function(){return t(a)}},"Add to cart"),r.a.createElement(A.a,null,r.a.createElement(q.a,{"aria-label":"add to likes"},r.a.createElement(_.a,null)))))))},z=t(177),Q=t(178),U=t(73),V=t.n(U),H=t(34),L=t.n(H),J=function(e){var a=e.dialogState,t=e.handleDialogClose,n=e.itemName;return r.a.createElement(z.a,{open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Q.a,null,r.a.createElement(A.a,{component:"div",display:"flex",justifyContent:"center",mb:2},r.a.createElement(V.a,{style:{color:L.a[500]},fontSize:"large"})),r.a.createElement(S.a,{variant:"h6",component:"h6",align:"center",gutterBottom:!0},n),r.a.createElement(S.a,{component:"p",align:"center",color:"textPrimary",gutterBottom:!0},"Added to cart")))},X=function(e){var a=e.handleAddToCart,t=Object(n.useState)({open:!1,itemName:""}),l=Object(u.a)(t,2),c=l[0],o=l[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),d=s[0],p=s[1];Object(n.useEffect)((function(){var e=!1;return d&&(e=setTimeout((function(){e=!1,p(!1),o(Object(m.a)({},c,{open:!1}))}),3e3)),function(){e&&clearTimeout(e)}}),[d,o,c]);var g=Object(j.a)((function(e){return{title:{marginBottom:e.spacing(3)}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"h4",component:"h1",className:g.title},"Products"),!!T.productDummyData&&T.productDummyData.map((function(e){return r.a.createElement(M,{key:e.id,data:e,handleAddToCart:function(){a(e),o({open:!0,itemName:e.title}),p(!0)}})})),r.a.createElement(J,{handleDialogClose:function(){o(Object(m.a)({},c,{open:!1})),p(!1)},dialogState:c.open,itemName:c.itemName}))},Y=t(184),Z=t(90),$=t(126),K=t(180),ee=t(179),ae=t(202),te=t(74),ne=t.n(te),re=t(75),le=t.n(re),ce=function(e){var a=e.item,t=e.handleItemQuantity;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{divider:!0},r.a.createElement(ee.a,null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,null))),r.a.createElement(K.a,{primary:a.title,primaryTypographyProps:{gutterBottom:!0,component:"p"},secondary:r.a.createElement(r.a.Fragment,null,"Price: ".concat(B(a.price)),r.a.createElement("br",null),"Quantity: ".concat(a.quantity),r.a.createElement("br",null),"Subtotal: ".concat(B(a.subTotal)))}),r.a.createElement(A.a,{component:"div"},r.a.createElement(q.a,{onClick:function(){return t(a)},"aria-label":"add to likes"},r.a.createElement(le.a,null)))))},oe=t(206),ie=t(205),me=t(77),ue=t.n(me),se=t(76),de=t.n(se),pe=t(79),ge=t.n(pe),Ee=t(78),he=t.n(Ee),fe=function(e){var a=e.item,t=e.open,n=e.handleDrawerClose,l=e.handleCartQuantity,c=e.handRemoveFromCart,o=Object(j.a)((function(e){return{main:{width:"100%",maxWidth:260,paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},quantityFieldContainer:{paddingTop:e.spacing(2),paddingBottom:e.spacing(3)},quantityField:{maxWidth:100,textAlign:"center"},delete:{marginBottom:e.spacing(1)}}}))();return r.a.createElement(oe.a,{anchor:"bottom",open:t,onClose:n},r.a.createElement(R.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(R.a,{item:!0,xs:12,className:o.main},r.a.createElement(S.a,{component:"p",align:"center",color:"textPrimary",gutterBottom:!0},a.title),r.a.createElement(R.a,{container:!0,direction:"row",justify:"space-between",className:o.quantityFieldContainer},r.a.createElement("div",null,r.a.createElement(q.a,{onClick:function(){return l(a.id,"decrement")},"aria-label":"decrement"},r.a.createElement(de.a,null))),r.a.createElement("div",null,r.a.createElement(ie.a,{id:"quantity",label:"Quantity",variant:"outlined",value:a.quantity,className:o.quantityField})),r.a.createElement("div",null,r.a.createElement(q.a,{onClick:function(){return l(a.id,"increment")},"aria-label":"increment"},r.a.createElement(ue.a,null)))),r.a.createElement(R.a,{container:!0,direction:"column",justify:"center"},r.a.createElement(D.a,{variant:"contained",color:"secondary",disableElevation:!0,onClick:function(){n(),c(a.id)},startIcon:r.a.createElement(he.a,null),className:o.delete},"Remove from Cart"),r.a.createElement(D.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:n,startIcon:r.a.createElement(ge.a,null)},"Close")))))},be=Object(j.a)((function(e){return{title:{marginBottom:e.spacing(3)},cartList:{width:"100%",maxWidth:600,backgroundColor:e.palette.background.paper},total:{marginTop:e.spacing(3),padding:e.spacing(2)}}})),ye=function(e){var a=e.cart,t=e.cartTotal,l=e.handleCartQuantity,c=e.handRemoveFromCart,o=e.setIndex,i=Object(n.useState)({open:!1,item:{title:"",quantity:""}}),s=Object(u.a)(i,2),d=s[0],p=s[1],g=function(e){p({open:!0,item:e})},E=be();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"h4",component:"h4",gutterBottom:!0,className:E.title},"Cart"),a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{component:"nav",className:E.cartList,disablePadding:!0},a.map((function(e){return r.a.createElement(ce,{key:e.id,item:e,open:d.open,handleItemQuantity:g})}))),r.a.createElement(Z.a,{square:!0,className:E.total},r.a.createElement(R.a,{container:!0,justify:"space-between"},r.a.createElement(R.a,{item:!0},r.a.createElement(S.a,{variant:"h6",component:"h6"},"Total: ",B(t))),r.a.createElement(R.a,{item:!0},r.a.createElement(D.a,{color:"primary",onClick:function(){return o(2)}},"Checkout"))))),a.length<=0&&r.a.createElement("p",null,"Cart is empty. Please add products your cart."),r.a.createElement(fe,{open:d.open,item:d.item,handleDrawerClose:function(){p(Object(m.a)({},d,{open:!1}))},handleCartQuantity:l,handRemoveFromCart:c}))},ve=t(192),Ce=function(){for(var e=(new Date).getFullYear(),a=[],t=e;t<e+20;t++){var n=t.toString().substring(2);a.push({value:n,text:n})}return a},je=t(203),xe=t(185),Ne=t(183),Te=t(200),Oe=t(187),ke=t(191),Pe=t(190),Be=t(186),Fe=t(188),Ie=t(189),we=t(201),Se=t(81),De=t.n(Se),We=t(82),_e=t.n(We),qe=t(83),Re=t.n(qe),Ae=t(80),Ge=t.n(Ae),Me=function(e){var a=e.cart,t=e.cartTotal,n=e.handlePayment,l=e.handleFieldChange,c=e.billingInfo,o=e.errors,i=Object(j.a)((function(e){return{title:{marginBottom:e.spacing(3)},form:{"& .MuiInput-root":{marginBottom:e.spacing(1)}},formTitle:{padding:4},formTitleIcon:{marginRight:e.spacing(1)},paper:{padding:e.spacing(2),marginBottom:e.spacing(2)},table:{marginTop:e.spacing(1)},grandTotal:{"& td":{backgroundColor:Ge.a[50],borderBottom:"none"},"& .MuiTableCell-root":{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}},pay:{marginTop:e.spacing(2),backgroundColor:L.a[600],"&:hover, &:focus, &:active":{backgroundColor:L.a[900]}},error:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}))();return r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement("form",{className:i.form,onSubmit:n},r.a.createElement(Z.a,{className:i.paper},o&&r.a.createElement(we.a,{severity:"error",className:i.error},o),r.a.createElement(R.a,{container:!0,alignItems:"center",spacing:1,className:i.formTitle},r.a.createElement(De.a,{className:i.formTitleIcon,color:"secondary"}),r.a.createElement(S.a,{variant:"h6",component:"h6"},"Credit Card")),r.a.createElement(R.a,{container:!0,spacing:1},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(ie.a,{id:"number",name:"number",fullWidth:!0,label:"Credit Card Number",onChange:l,value:c.number})),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(Ne.a,{className:i.formControl,fullWidth:!0},r.a.createElement(je.a,{id:"exp-month-label"},"Exp. Month"),r.a.createElement(Te.a,{labelId:"exp-month-label",id:"exp_month",name:"exp_month",value:c.exp_month,fullWidth:!0,onChange:l},r.a.createElement(xe.a,{value:1},"1"),r.a.createElement(xe.a,{value:2},"2"),r.a.createElement(xe.a,{value:3},"3"),r.a.createElement(xe.a,{value:4},"4"),r.a.createElement(xe.a,{value:5},"5"),r.a.createElement(xe.a,{value:6},"6"),r.a.createElement(xe.a,{value:7},"7"),r.a.createElement(xe.a,{value:8},"8"),r.a.createElement(xe.a,{value:9},"9"),r.a.createElement(xe.a,{value:10},"10"),r.a.createElement(xe.a,{value:11},"11"),r.a.createElement(xe.a,{value:12},"12")))),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(Ne.a,{className:i.formControl,fullWidth:!0},r.a.createElement(je.a,{id:"exp-year-label"},"Exp. Year"),r.a.createElement(Te.a,{labelId:"exp-year-label",id:"exp_year",name:"exp_year",value:c.exp_year,fullWidth:!0,onChange:l},Ce().map((function(e){return r.a.createElement(xe.a,{key:e.value,value:e.value},e.text)}))))),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(ie.a,{id:"cvc",name:"cvc",value:c.cvc,fullWidth:!0,label:"CVC",onChange:l})))),r.a.createElement(Z.a,{className:i.paper},r.a.createElement(R.a,{container:!0,alignItems:"center",spacing:1,className:i.formTitle},r.a.createElement(_e.a,{className:i.formTitleIcon,color:"secondary"}),r.a.createElement(S.a,{variant:"h6",component:"h6"},"Billing Details")),r.a.createElement(R.a,{container:!0,spacing:1},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(ie.a,{id:"name",name:"name",value:c.name,onChange:l,fullWidth:!0,label:"Full Name"})),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(ie.a,{id:"email",name:"email",type:"email",value:c.email,fullWidth:!0,label:"Email",onChange:l})),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(ie.a,{id:"phone",value:c.phone,name:"phone",fullWidth:!0,label:"Phone No.",onChange:l})),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(ie.a,{id:"address",name:"line1",value:c.line1,fullWidth:!0,label:"Address",onChange:l})),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(ie.a,{id:"city",name:"city",value:c.city,fullWidth:!0,label:"City",onChange:l})),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(ie.a,{id:"state",name:"state",value:c.state,fullWidth:!0,label:"State",onChange:l})),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(ie.a,{id:"country",name:"country",value:c.country,fullWidth:!0,label:"Country",onChange:l})),r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(ie.a,{id:"postal_code",name:"postal_code",value:c.postal_code,fullWidth:!0,label:"Postal Code",onChange:l})))),r.a.createElement(Z.a,{className:i.paper},r.a.createElement(R.a,{container:!0,alignItems:"center",spacing:1,className:i.formTitle},r.a.createElement(Re.a,{className:i.formTitleIcon,color:"secondary"}),r.a.createElement(S.a,{variant:"h6",component:"h6"},"Order Review")),r.a.createElement(Be.a,null,r.a.createElement(Oe.a,{className:i.table,"aria-label":"review order table",size:"small"},r.a.createElement(Fe.a,null,r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null,"Item"),r.a.createElement(Pe.a,{align:"right"},"Subtotal"))),r.a.createElement(ke.a,null,a.map((function(e){return r.a.createElement(Ie.a,{key:e.id},r.a.createElement(Pe.a,{component:"th",scope:"row"},e.title,r.a.createElement(S.a,{variant:"body2",component:"p",color:"textSecondary"},"Price: ".concat(B(e.price)),r.a.createElement("br",null),"Quantity: ".concat(e.quantity))),r.a.createElement(Pe.a,{align:"right"},B(e.subTotal)))})),r.a.createElement(Ie.a,{className:i.grandTotal},r.a.createElement(Pe.a,null,r.a.createElement("strong",null,"Grand Total"),":"),r.a.createElement(Pe.a,{align:"right"},r.a.createElement("strong",null,B(t))))))),r.a.createElement(D.a,{type:"submit",variant:"contained",color:"primary",className:i.pay,size:"large",fullWidth:!0,onClick:n},"Pay with PayMongo"))))},ze=t(84),Qe=t.n(ze),Ue=function(e){var a=e.data,t=e.handleConfirm,n=Object(m.a)({},a.data),l=B((n.attributes.amount/100).toFixed(2)),c=n.attributes.billing,o=c.email,i=c.name,u=c.phone,s=n.attributes.billing.address,d=s.line1,p=s.city,g=s.postal_code,E=s.state,h=s.country,f=Object(j.a)((function(e){return{paper:{padding:e.spacing(2),marginBottom:e.spacing(2)},paperTitle:{padding:4},paperTitleIcon:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},purchaseDetails:{marginBottom:e.spacing(2)},billingDetails:{marginBottom:e.spacing(4)}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{className:f.paper},r.a.createElement(R.a,{container:!0,justify:"center",spacing:1},r.a.createElement(Qe.a,{className:f.paperTitleIcon,style:{color:L.a[500]}})),r.a.createElement(S.a,{variant:"h5",className:f.paperTitle,component:"h5",align:"center",gutterBottom:!0},"Payment Successful!"),r.a.createElement(Be.a,{className:f.purchaseDetails},r.a.createElement(Oe.a,null,r.a.createElement(Fe.a,null,r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,{colSpan:2},"Purchase Details"))),r.a.createElement(ke.a,null,r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null,"Amount"),r.a.createElement(Pe.a,null,l)),r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null,"Paymongo Reference No."),r.a.createElement(Pe.a,null,n.id))))),r.a.createElement(Be.a,{className:f.billingDetails},r.a.createElement(Oe.a,null,r.a.createElement(Fe.a,null,r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,{colSpan:2},"Billing Details"))),r.a.createElement(ke.a,null,r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null,"Name"),r.a.createElement(Pe.a,null,i)),r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null,"Email"),r.a.createElement(Pe.a,null,o)),r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null,"Phone"),r.a.createElement(Pe.a,null,u)),r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null,"Address"),r.a.createElement(Pe.a,null,d,", ",p,", ",g,", ",E,", ",h))))),r.a.createElement(D.a,{variant:"contained",color:"primary",className:f.pay,size:"large",fullWidth:!0,onClick:t},"Confirm")))},Ve=function(e){var a=e.cart,t=e.cartTotal,n=e.handlePayment,l=e.handleFieldChange,c=e.billingInfo,o=e.orderCompleteData,i=e.handleConfirm,m=e.paymentTransitionDelay,u=e.errors,s=Object(j.a)((function(e){return{title:{marginBottom:e.spacing(3)},paymentTransitionDelay:{paddingTop:e.spacing(5),paddingBottom:e.spacing(4),paddingRight:e.spacing(2),paddingLeft:e.spacing(2)},spinner:{marginBottom:e.spacing(2)}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"h4",component:"h4",className:s.title,gutterBottom:!0},"Checkout"),m&&r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{container:!0,justify:"center"},r.a.createElement(R.a,{item:!0},r.a.createElement(R.a,{container:!0,direction:"column",justify:"center",alignItems:"center",component:Z.a,className:s.paymentTransitionDelay},r.a.createElement(R.a,{item:!0,className:s.spinner},r.a.createElement(ve.a,null)),r.a.createElement(R.a,{item:!0},r.a.createElement(S.a,{component:"p",align:"center"},"Performing payment transaction, please wait.")))))),a.length<=0&&!!o&&!m&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,{data:o,handleConfirm:i})),a.length>0&&!o&&!m&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,{cart:a,cartTotal:t,handlePayment:n,handleFieldChange:l,billingInfo:c,errors:u})),a.length<=0&&!o&&!m&&r.a.createElement("p",null,"Cart is empty. Please add products your cart."))},He=t(193),Le=t(194),Je=t(86),Xe=t.n(Je),Ye=t(85),Ze=t.n(Ye),$e=t(87),Ke=t.n($e),ea=t(195),aa=Object(j.a)({root:{height:80},buttons:{"& svg":{marginBottom:5}}}),ta=function(e){var a=e.onChange,t=e.index,n=e.cartCount,l=aa();return r.a.createElement(He.a,{value:t,onChange:function(e,t){a(t)},showLabels:!0,className:l.root},r.a.createElement(Le.a,{className:l.buttons,label:"Products",icon:r.a.createElement(Ze.a,null)}),r.a.createElement(Le.a,{className:l.buttons,label:"Cart",icon:r.a.createElement(ea.a,{color:"secondary",badgeContent:n},r.a.createElement(Xe.a,null))}),r.a.createElement(Le.a,{className:l.buttons,label:"Checkout",icon:r.a.createElement(Ke.a,null)}))},na=Object(C.a)({palette:{background:{default:"#e3e3e3"}},typography:{fontFamily:["Roboto","-apple-system","BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),ra=Object(j.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},footer:{marginTop:"auto"}}}));var la=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),s=Object(u.a)(c,2),d=s[0],p=s[1],g=Object(n.useState)(),E=Object(u.a)(g,2),h=E[0],b=E[1],C=Object(n.useState)(!1),j=Object(u.a)(C,2),T=j[0],O=j[1],k=Object(n.useState)(null),P=Object(u.a)(k,2),B=P[0],F=P[1],I=Object(n.useState)(null),w=Object(u.a)(I,2),S=w[0],D=w[1],W=Object(n.useState)({number:"4123450131000508",exp_month:12,exp_year:25,cvc:"111",line1:"blk 1 lot 1 address example",city:"Bi\xf1an",state:"Laguna",country:"PH",postal_code:"4024",name:"John",email:"johnmail@gmail.com",phone:"09988909890"}),_=Object(u.a)(W,2),q=_[0],R=_[1];Object(n.useEffect)((function(){var e=!1;return T&&(e=setTimeout((function(){e=!1,O(!1)}),5e3)),function(){e&&clearTimeout(e)}}),[T]);var A=ra();return r.a.createElement(x.a,{theme:na},r.a.createElement("div",{className:A.root},r.a.createElement(v.a,null),r.a.createElement(N.a,{component:"main",className:A.main,maxWidth:"sm"},0===t&&r.a.createElement(X,{handleAddToCart:function(e){var a=Object(o.a)(d),t=y.a.findIndex(a,{id:e.id});if(t>=0){var n=a[t].quantity+1,r=a[t].price*n;a[t]=Object(m.a)({},e,{quantity:n,subTotal:r})}else a.push(Object(m.a)({},e,{quantity:1,subTotal:e.price}));var l=a.reduce((function(e,a){return e+a.subTotal}),0);b(l),p(a),F(null)}}),1===t&&r.a.createElement(ye,{cart:d,cartTotal:h,handleCartQuantity:function(e,a){var t=Object(o.a)(d),n=y.a.findIndex(t,{id:e});switch(a){case"increment":t[n].quantity++;break;case"decrement":t[n].quantity>1&&t[n].quantity--}var r=t[n].price,l=t[n].quantity;t[n].subTotal=r*l;var c=t.reduce((function(e,a){return e+a.subTotal}),0);b(c),p(t)},handRemoveFromCart:function(e){var a=Object(o.a)(d),t=(a=y.a.filter(a,(function(a){return a.id!==e}))).reduce((function(e,a){return e+a.subTotal}),0);b(t),p(a)},setIndex:l}),2===t&&r.a.createElement(Ve,{cart:d,cartTotal:h,handlePayment:function(e){e.preventDefault();var a=q.number,t=q.exp_month,n=q.exp_year,r=q.cvc,l=q.line1,c=q.city,o=q.state,i=q.country,m=q.postal_code,u=q.name,s=q.email,d=q.phone,g={data:{attributes:{number:a,exp_month:parseInt(t),exp_year:parseInt(n),cvc:r,billing:{name:u,email:s,phone:d,address:{line1:l,city:c,state:o,country:i,postal_code:m}}}}},E=parseInt(h.toFixed(2).toString().replace(".",""));O(!0),f.createToken(g).then((function(e){var a=e.data.id,t=e.data.type;f.createPayment(function(e,a){return{data:{attributes:{amount:E,currency:"PHP",source:{id:e,type:a}}}}}(a,t)).then((function(e){F(e),p([]),b(null)})).catch((function(e){var a=e.code,t=e.message;console.log(a,t)}))})).catch((function(e){var a=e.code,t=e.message;console.log(a,t),D(t)}))},handleFieldChange:function(e){var a=e.target,t=a.name,n=a.value;R(Object(m.a)({},q,Object(i.a)({},t,n)))},billingInfo:q,orderCompleteData:B,handleConfirm:function(){l(0),F(null)},paymentTransitionDelay:T,errors:S})),r.a.createElement(N.a,{component:"footer",className:A.footer,maxWidth:"sm"},r.a.createElement(ta,{onChange:l,index:t,cartCount:d.length}))))};t(123),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(la,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.885cf744.chunk.js.map