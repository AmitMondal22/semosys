"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[3611],{3611:(nt,C,n)=>{n.r(C),n.d(C,{MediaDemoModule:()=>st});var A=n(6814),g=n(95),S=n(7327),J=n(6760),I=n(1480),D=n(3965),k=n(9663),z=n(5167),P=n(8062),Y=n(4055),B=n(6218),h=n(3714),G=n(4037),Q=n(8052),F=n(1825),O=n(6022),Z=n(707),x=n(9552),T=n(2947),b=n(4104),u=n(5219),f=n(5118),_=n(7680),y=n(1312),N=n(3557),c=n(9862),q=n(3026),t=n(4769),w=n(8814),U=n(981);const L=["view"];function $(i,l){if(1&i){const s=t.EpF();t.TgZ(0,"span",13),t._UZ(1,"i",14),t.TgZ(2,"button",15),t.NdJ("click",function(){t.CHM(s);const e=t.oxw();return t.KtG(e.openNew())}),t.qZA()()}}function H(i,l){1&i&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Cust ID"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Dealer Name"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Mobile No"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Address"),t.qZA(),t.TgZ(9,"th",16),t._uU(10,"Edit Details"),t.qZA()())}function R(i,l){if(1&i){const s=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",17)(10,"button",18),t.NdJ("click",function(){const a=t.CHM(s).$implicit,r=t.oxw();return t.KtG(r.editProduct(a))}),t.qZA()()()}if(2&i){const s=l.$implicit;t.xp6(2),t.Oqu(s.id),t.xp6(2),t.Oqu(s.shop_name),t.xp6(2),t.Oqu(s.contact),t.xp6(2),t.Oqu(s.adress)}}function W(i,l){1&i&&(t.TgZ(0,"div",19),t._UZ(1,"p-progressSpinner"),t.qZA())}function j(i,l){1&i&&(t.TgZ(0,"small",26),t._uU(1,"Dealer Name is required."),t.qZA())}function K(i,l){1&i&&(t.TgZ(0,"small",26),t._uU(1,"Dealer Contact is required."),t.qZA())}function E(i,l){1&i&&(t.TgZ(0,"small",26),t._uU(1,"Dealer Address is required."),t.qZA())}function X(i,l){if(1&i){const s=t.EpF();t.TgZ(0,"div",20)(1,"label",21),t._uU(2,"Full Name"),t.qZA(),t.TgZ(3,"input",22),t.NdJ("ngModelChange",function(e){t.CHM(s);const a=t.oxw();return t.KtG(a.product.shop_name=e)}),t.qZA(),t.YNc(4,j,2,0,"small",23),t.qZA(),t.TgZ(5,"div",20)(6,"label",21),t._uU(7,"Mobile"),t.qZA(),t.TgZ(8,"input",24),t.NdJ("ngModelChange",function(e){t.CHM(s);const a=t.oxw();return t.KtG(a.product.contact=e)}),t.qZA(),t.YNc(9,K,2,0,"small",23),t.qZA(),t.TgZ(10,"div",20)(11,"label",21),t._uU(12,"Address"),t.qZA(),t.TgZ(13,"input",25),t.NdJ("ngModelChange",function(e){t.CHM(s);const a=t.oxw();return t.KtG(a.product.adress=e)}),t.qZA(),t.YNc(14,E,2,0,"small",23),t.qZA()}if(2&i){const s=t.oxw();t.xp6(3),t.Q6J("ngModel",s.product.shop_name),t.xp6(1),t.Q6J("ngIf",s.submitted&&!s.product.shop_name),t.xp6(4),t.Q6J("ngModel",s.product.contact),t.xp6(1),t.Q6J("ngIf",s.submitted&&!s.product.contact),t.xp6(4),t.Q6J("ngModel",s.product.adress),t.xp6(1),t.Q6J("ngIf",s.submitted&&!s.product.adress)}}function V(i,l){if(1&i){const s=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(s);const e=t.oxw();return t.KtG(e.hideDialog())}),t.qZA(),t.TgZ(1,"button",28),t.NdJ("click",function(){t.CHM(s);const e=t.oxw();return t.KtG(e.saveProduct())}),t.qZA()}}const tt=function(){return{"min-width":"50rem"}},et=function(){return{width:"450px"}};let ot=(()=>{var i;class l{constructor(o,e,a,r,p,d){this.api=o,this.productService=e,this.http=a,this.billID=r,this.dialogService=p,this.messageService=d,this.modelList=[],this.lastAddedIndex=-1,this.stockList=[],this.spinner=!1,this.first=0,this.rows=2,this.productDialog=!1,this.submitted=!1,this.data1=[]}ngOnInit(){this.getAllseller()}onPageChange(o){this.first=o.first,this.rows=o.rows,this.goingPage=o.page+1,this.loadNewPage(this.goingPage)}loadNewPage(o){this.spinner=!0;const e=this.api.baseUrl,a=localStorage.getItem("token"),r=(new c.WM).set("Authorization",`Bearer ${a}`);this.http.get(e+"/report/my_bill?page="+o,{headers:r}).subscribe(p=>{this.spinner=!1,this.stockApi=p,this.stockList=this.stockApi.data})}getAllseller(){this.totalPGNO=0,this.spinner=!0;const o=this.api.baseUrl,e=localStorage.getItem("token"),a=(new c.WM).set("Authorization",`Bearer ${e}`);this.http.get(o+"/seller/list",{headers:a}).subscribe(r=>{this.spinner=!1,console.log(r),this.stockApi=r,this.stockList=this.stockApi.data,this.totalPGNO=this.stockApi.total},r=>{this.spinner=!1,console.error(r)})}searchAll(o){this.spinner=!0;const e=this.api.baseUrl,a=localStorage.getItem("token"),r=(new c.WM).set("Authorization",`Bearer ${a}`);this.http.get(e+"/report/my_bill?page=1&search="+o.target.value.toString(),{headers:r}).subscribe(p=>{this.spinner=!1,this.stockApi=p,this.stockList=this.stockApi.data,this.totalPGNO=this.stockApi.total})}hideDialog(){this.productDialog=!1,this.submitted=!1}editProduct(o){this.product={...o},this.productDialog=!0}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}AddCompany(o,e,a){const r={shop_name:o,adress:e,contact:a},p=this.api.baseUrl,d=localStorage.getItem("token"),v=(new c.WM).set("Authorization",`Bearer ${d}`);this.http.post(p+"/seller/add",r,{headers:v}).subscribe(m=>{m&&(this.hideDialog(),console.log(m),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Created",life:3e3}),this.getAllseller())},m=>{console.error(m)})}DeleteCompany(o){const e={company_id:o},a=this.api.baseUrl,r=localStorage.getItem("token"),p=(new c.WM).set("Authorization",`Bearer ${r}`);this.http.post(a+"/master/delete_company_name",e,{headers:p}).subscribe(d=>{console.log(d),this.messageService.add({severity:"success",summary:"Successful",detail:"Company Deleted",life:3e3}),this.getAllseller()},d=>{console.error(d)})}show(o){this.billID.cust_id=0,this.billID.cust_id=o.id,this.ref=this.dialogService.open(q.D,{header:"Customer Full Details",data:{id:o.cust_id},width:"70%",contentStyle:{overflow:"auto"},baseZIndex:1e4,maximizable:!0}),this.ref.onClose.subscribe(e=>{e&&this.messageService.add({severity:"info",summary:"Product Selected",detail:e.name})}),this.ref.onMaximize.subscribe(e=>{this.messageService.add({severity:"info",summary:"Maximized",detail:`maximized: ${e.maximized}`})})}saveProduct(){this.submitted=!0,this.product.shop_name?.trim()&&(this.product.id?this.updateCompany(this.product.id,this.product.shop_name,this.product.adress,this.product.contact):this.AddCompany(this.product.shop_name,this.product.adress,this.product.contact),this.products=[...this.products],this.productDialog=!1,this.product={})}updateCompany(o,e,a,r){const p={id:o,shop_name:e,adress:a,contact:r},d=this.api.baseUrl,v=localStorage.getItem("token"),m=(new c.WM).set("Authorization",`Bearer ${v}`);this.http.post(d+"/seller/edit",p,{headers:m}).subscribe(M=>{this.hideDialog(),console.log(M),this.messageService.add({severity:"success",summary:"Successful",detail:"Dealer Updated",life:3e3}),this.getAllseller()},M=>{console.error(M)})}ngOnDestroy(){this.ref&&this.ref.close()}}return(i=l).\u0275fac=function(o){return new(o||i)(t.Y36(w.s),t.Y36(U.M),t.Y36(c.eN),t.Y36(U.M),t.Y36(f.xA),t.Y36(u.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],viewQuery:function(o,e){if(1&o&&t.Gf(L,7),2&o){let a;t.iGM(a=t.CRH())&&(e.view=a.first)}},features:[t._Bn([f.xA,u.ez])],decls:14,vars:12,consts:[[1,"grid"],[1,"col-12",2,"max-height","600px","overflow","scroll"],[3,"value","tableStyle"],["dt2",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"card","flex","justify-content-center"],[3,"first","rows","totalRecords","onPageChange"],["class","spinner_overlay",4,"ngIf"],["header","Dealer Details","styleClass","p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pButton","","pRipple","","label","Add New Dealer","icon","pi pi-plus",1,"p-button-primary","mr-2",3,"click"],[2,"width","10rem"],[2,"text-align","center"],["type","button","pButton","","pRipple","","icon","pi pi-pencil",3,"click"],[1,"spinner_overlay"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-error",4,"ngIf"],["type","text","pInputText","","id","mobile","required","","autofocus","",3,"ngModel","ngModelChange"],["type","text","pInputText","","id","address","required","","autofocus","",3,"ngModel","ngModelChange"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"p-toast"),t.TgZ(2,"div",1)(3,"p-table",2,3),t.YNc(5,$,3,0,"ng-template",4),t.YNc(6,H,11,0,"ng-template",5),t.YNc(7,R,11,4,"ng-template",6),t.qZA(),t.TgZ(8,"div",7)(9,"p-paginator",8),t.NdJ("onPageChange",function(r){return e.onPageChange(r)}),t.qZA()()(),t.YNc(10,W,2,0,"div",9),t.qZA(),t.TgZ(11,"p-dialog",10),t.NdJ("visibleChange",function(r){return e.productDialog=r}),t.YNc(12,X,15,6,"ng-template",11),t.YNc(13,V,2,0,"ng-template",12),t.qZA()),2&o&&(t.xp6(3),t.Q6J("value",e.stockList)("tableStyle",t.DdM(10,tt)),t.xp6(6),t.Q6J("first",e.first)("rows",e.rows)("totalRecords",e.totalPGNO),t.xp6(1),t.Q6J("ngIf",e.spinner),t.xp6(1),t.Akn(t.DdM(11,et)),t.Q6J("visible",e.productDialog)("modal",!0))},dependencies:[A.O5,g.Fj,g.JJ,g.Q7,g.On,u.jx,Z.Hq,h.o,_.G,b.FN,T.D,x.iA,y.V],encapsulation:2}),l})(),it=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[N.Bz.forChild([{path:"",component:ot}]),N.Bz]}),l})(),st=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[u.ez,u.YP],imports:[A.ez,g.u5,it,S.WN,J._8,I.Gg,D.kW,k.zz,z.L$,P.XH,Y.q4,B.A,h.j,G.FI,Q.f,F.C,h.j,D.kW,O.Xt,Z.hJ,_.L,f.DL,b.EV,T.U,x.U$,y.S]}),l})()}}]);