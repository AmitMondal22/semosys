"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5234],{5234:(S,A,n)=>{n.r(A),n.d(A,{TableDemoModule:()=>G});var l=n(6814),h=n(95),t=n(3557),Z=n(5219),y=n(9862),e=n(4769),M=n(981),P=n(8814),T=n(9552),c=n(707),d=n(3714),u=n(4480),v=n(4104),a=n(1312),g=n(6340),b=n(3904);function _(o,f){if(1&o){const s=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(s);const r=e.oxw();return e.KtG(r.openNew())}),e.qZA()}}function C(o,f){if(1&o){const s=e.EpF();e.TgZ(0,"div",13)(1,"h5",14),e._uU(2,"Manage Organization"),e.qZA(),e.TgZ(3,"span",15),e._UZ(4,"i",16),e.TgZ(5,"input",17),e.NdJ("input",function(r){e.CHM(s),e.oxw();const p=e.MAs(5);return e.KtG(p.filterGlobal(r.target.value,"contains"))}),e.qZA()()()}}function w(o,f){1&o&&(e.TgZ(0,"tr")(1,"th",18),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"ID"),e.qZA(),e.TgZ(5,"th",19),e._uU(6,"Name "),e._UZ(7,"p-sortIcon",20),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Action"),e.qZA()())}function U(o,f){if(1&o){const s=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",21),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"button",22),e.NdJ("click",function(){const p=e.CHM(s).$implicit,m=e.oxw();return e.KtG(m.editProduct(p))}),e.qZA(),e.TgZ(9,"button",23),e.NdJ("click",function(){const p=e.CHM(s).$implicit,m=e.oxw();return e.KtG(m.deleteProduct(p))}),e.qZA()()()}if(2&o){const s=f.$implicit;e.xp6(2),e.Q6J("value",s),e.xp6(2),e.Oqu(s.origination_id),e.xp6(2),e.Oqu(s.origination_name)}}function N(o,f){if(1&o&&(e.TgZ(0,"div",13),e._uU(1),e.qZA()),2&o){const s=e.oxw();e.xp6(1),e.hij("In total there are ",s.products?s.products.length:0," Origination.")}}function J(o,f){1&o&&(e.TgZ(0,"small",28),e._uU(1,"origination Name is required."),e.qZA())}function O(o,f){if(1&o){const s=e.EpF();e.TgZ(0,"div",24)(1,"label",25),e._uU(2,"origination Name"),e.qZA(),e.TgZ(3,"input",26),e.NdJ("ngModelChange",function(r){e.CHM(s);const p=e.oxw();return e.KtG(p.product.origination_name=r)}),e.qZA(),e.YNc(4,J,2,0,"small",27),e.qZA()}if(2&o){const s=e.oxw();e.xp6(3),e.Q6J("ngModel",s.product.origination_name),e.xp6(1),e.Q6J("ngIf",s.submitted&&!s.product.origination_name)}}function E(o,f){if(1&o){const s=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(s);const r=e.oxw();return e.KtG(r.hideDialog())}),e.qZA(),e.TgZ(1,"button",30),e.NdJ("click",function(){e.CHM(s);const r=e.oxw();return e.KtG(r.saveProduct())}),e.qZA()}}const k=function(){return["name","country.name","representative.name","status"]},Y=function(){return{"min-width":"75rem"}},B=function(){return{width:"450px"}};let F=(()=>{var o;class f{constructor(i,r,p,m,x){this.http=i,this.productService=r,this.messageService=p,this.confirmationService=m,this.api=x,this.productDialog=!1,this.submitted=!1,this.data1=[]}ngOnInit(){this.getDeviceDATA()}getDeviceDATA(){const i=this.api.baseUrl,r=localStorage.getItem("token"),p=(new y.WM).set("Authorization",`Bearer ${r}`);this.http.get(i+"/master/list-origination",{headers:p}).subscribe(m=>{console.log(m),this.data1=m,this.products=this.data1.data},m=>{console.error(m)})}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected products?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products=this.products.filter(i=>!this.selectedProducts?.includes(i)),this.selectedProducts=null,this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})}editProduct(i){this.product={...i},this.productDialog=!0}deleteProduct(i){this.confirmationService.confirm({message:"Are you sure you want to delete "+i.origination_name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.DeleteCompany(i.origination_id)}})}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0,this.product.origination_name?.trim()&&(this.product.origination_id?this.updateCompany(this.product.origination_id,this.product.origination_name):this.AddCompany(this.product.origination_name),this.products=[...this.products],this.productDialog=!1,this.product={})}findIndexById(i){let r=-1;for(let p=0;p<this.products.length;p++)if(this.products[p].origination_id===i){r=p;break}return r}updateCompany(i,r){const p={origination_id:i,origination_name:r},m=this.api.baseUrl,x=localStorage.getItem("token"),D=(new y.WM).set("Authorization",`Bearer ${x}`);this.http.post(m+"/master/edit-origination",p,{headers:D}).subscribe(I=>{console.log(I),this.messageService.add({severity:"success",summary:"Successful",detail:"Organization Updated",life:3e3}),this.getDeviceDATA()},I=>{console.error(I)})}AddCompany(i){const r={origination_name:i},p=this.api.baseUrl,m=localStorage.getItem("token"),x=(new y.WM).set("Authorization",`Bearer ${m}`);this.http.post(p+"/master/add-origination",r,{headers:x}).subscribe(D=>{console.log(D),this.messageService.add({severity:"success",summary:"Successful",detail:"Organization Created",life:3e3}),this.getDeviceDATA()},D=>{console.error(D)})}DeleteCompany(i){const r={origination_id:i},p=this.api.baseUrl,m=localStorage.getItem("token"),x=(new y.WM).set("Authorization",`Bearer ${m}`);this.http.post(p+"/master/delete-origination",r,{headers:x}).subscribe(D=>{console.log(D),this.messageService.add({severity:"success",summary:"Successful",detail:"Organization Deleted",life:3e3}),this.getDeviceDATA()},D=>{console.error(D)})}}return(o=f).\u0275fac=function(i){return new(i||o)(e.Y36(y.eN),e.Y36(M.M),e.Y36(Z.ez),e.Y36(Z.YP),e.Y36(P.s))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e._Bn([Z.ez,Z.YP])],decls:14,vars:18,consts:[[1,"card"],["styleClass","mb-4 gap-2"],["pTemplate","left"],["dataKey","origination_id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Product Details","styleClass","p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-primary","mr-2",3,"click"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","4rem"],["pSortableColumn","name",2,"min-width","15rem"],["field","name"],[3,"value"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-primary","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger",3,"click"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-error",4,"ngIf"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"p-toolbar",1),e.YNc(3,_,1,0,"ng-template",2),e.qZA(),e.TgZ(4,"p-table",3,4),e.NdJ("selectionChange",function(m){return r.selectedProducts=m}),e.YNc(6,C,6,0,"ng-template",5),e.YNc(7,w,10,0,"ng-template",6),e.YNc(8,U,10,3,"ng-template",7),e.YNc(9,N,2,1,"ng-template",8),e.qZA()(),e.TgZ(10,"p-dialog",9),e.NdJ("visibleChange",function(m){return r.productDialog=m}),e.YNc(11,O,5,2,"ng-template",10),e.YNc(12,E,2,0,"ng-template",11),e.qZA(),e._UZ(13,"p-confirmDialog")),2&i&&(e.xp6(4),e.Q6J("value",r.products)("rows",4)("paginator",!0)("globalFilterFields",e.DdM(14,k))("tableStyle",e.DdM(15,Y))("selection",r.selectedProducts)("rowHover",!0)("showCurrentPageReport",!0),e.xp6(6),e.Akn(e.DdM(16,B)),e.Q6J("visible",r.productDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(17,B)))},dependencies:[l.O5,h.Fj,h.JJ,h.Q7,h.On,T.iA,Z.jx,T.lQ,T.fz,T.UA,T.Mo,c.Hq,d.o,u.H,v.FN,a.V,g.o,b.Q],encapsulation:2}),f})(),Q=(()=>{var o;class f{}return(o=f).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[t.Bz.forChild([{path:"",component:F}]),t.Bz]}),f})();var z=n(6804),R=n(4055),K=n(3965),H=n(6651),j=n(7902),W=n(6022);let G=(()=>{var o;class f{}return(o=f).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,Q,h.u5,T.U$,W.Xt,c.hJ,j.JH,d.j,z.KZ,u.T,R.q4,K.kW,H.q,v.EV,a.S,g.V,b.D]}),f})()},6651:(S,A,n)=>{n.d(A,{k:()=>P,q:()=>T});var l=n(1180),h=n(6814),t=n(4769);function Z(c,d){if(1&c&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&c){const u=t.oxw(2);t.Udp("display",null!=u.value&&0!==u.value?"flex":"none"),t.xp6(1),t.AsE("",u.value,"",u.unit,"")}}function y(c,d){if(1&c&&(t.TgZ(0,"div",3),t.YNc(1,Z,2,4,"div",4),t.qZA()),2&c){const u=t.oxw();t.Udp("width",u.value+"%")("background",u.color),t.xp6(1),t.Q6J("ngIf",u.showValue)}}function e(c,d){if(1&c&&(t.TgZ(0,"div",6),t._UZ(1,"div",7),t.qZA()),2&c){const u=t.oxw();t.xp6(1),t.Udp("background",u.color)}}const M=function(c,d){return{"p-progressbar p-component":!0,"p-progressbar-determinate":c,"p-progressbar-indeterminate":d}};let P=(()=>{var c;class d{constructor(){(0,l.Z)(this,"value",void 0),(0,l.Z)(this,"showValue",!0),(0,l.Z)(this,"styleClass",void 0),(0,l.Z)(this,"style",void 0),(0,l.Z)(this,"unit","%"),(0,l.Z)(this,"mode","determinate"),(0,l.Z)(this,"color",void 0)}}return c=d,(0,l.Z)(d,"\u0275fac",function(v){return new(v||c)}),(0,l.Z)(d,"\u0275cmp",t.Xpm({type:c,selectors:[["p-progressBar"]],hostAttrs:[1,"p-element"],inputs:{value:"value",showValue:"showValue",styleClass:"styleClass",style:"style",unit:"unit",mode:"mode",color:"color"},decls:3,vars:10,consts:[["role","progressbar","aria-valuemin","0","aria-valuemax","100",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:flex",3,"width","background",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","flex"],["class","p-progressbar-label",3,"display",4,"ngIf"],[1,"p-progressbar-label"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(v,a){1&v&&(t.TgZ(0,"div",0),t.YNc(1,y,2,5,"div",1),t.YNc(2,e,2,2,"div",2),t.qZA()),2&v&&(t.Tol(a.styleClass),t.Q6J("ngStyle",a.style)("ngClass",t.WLB(7,M,"determinate"===a.mode,"indeterminate"===a.mode)),t.uIk("aria-valuenow",a.value),t.xp6(1),t.Q6J("ngIf","determinate"===a.mode),t.xp6(1),t.Q6J("ngIf","indeterminate"===a.mode))},dependencies:[h.mk,h.O5,h.PC],styles:['.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],encapsulation:2,changeDetection:0})),d})(),T=(()=>{var c;class d{}return c=d,(0,l.Z)(d,"\u0275fac",function(v){return new(v||c)}),(0,l.Z)(d,"\u0275mod",t.oAB({type:c})),(0,l.Z)(d,"\u0275inj",t.cJS({imports:[h.ez]})),d})()},6340:(S,A,n)=>{n.d(A,{V:()=>v,o:()=>u});var l=n(1180),h=n(6814),t=n(4769),Z=n(5219);function y(a,g){1&a&&t.GkF(0)}function e(a,g){if(1&a&&(t.TgZ(0,"div",4),t.YNc(1,y,1,0,"ng-container",5),t.qZA()),2&a){const b=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",b.startTemplate)}}function M(a,g){1&a&&t.GkF(0)}function P(a,g){if(1&a&&(t.TgZ(0,"div",6),t.YNc(1,M,1,0,"ng-container",5),t.qZA()),2&a){const b=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",b.centerTemplate)}}function T(a,g){1&a&&t.GkF(0)}function c(a,g){if(1&a&&(t.TgZ(0,"div",7),t.YNc(1,T,1,0,"ng-container",5),t.qZA()),2&a){const b=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",b.endTemplate)}}const d=["*"];let u=(()=>{var a;class g{constructor(_){(0,l.Z)(this,"el",void 0),(0,l.Z)(this,"style",void 0),(0,l.Z)(this,"styleClass",void 0),(0,l.Z)(this,"templates",void 0),(0,l.Z)(this,"startTemplate",void 0),(0,l.Z)(this,"endTemplate",void 0),(0,l.Z)(this,"centerTemplate",void 0),this.el=_}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(_=>{switch(_.getType()){case"left":this.startTemplate=_.template;break;case"right":this.endTemplate=_.template;break;case"center":this.centerTemplate=_.template}})}}return a=g,(0,l.Z)(g,"\u0275fac",function(_){return new(_||a)(t.Y36(t.SBq))}),(0,l.Z)(g,"\u0275cmp",t.Xpm({type:a,selectors:[["p-toolbar"]],contentQueries:function(_,C,w){if(1&_&&t.Suo(w,Z.jx,4),2&_){let U;t.iGM(U=t.CRH())&&(C.templates=U)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:d,decls:5,vars:7,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(_,C){1&_&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.YNc(2,e,2,1,"div",1),t.YNc(3,P,2,1,"div",2),t.YNc(4,c,2,1,"div",3),t.qZA()),2&_&&(t.Tol(C.styleClass),t.Q6J("ngClass","p-toolbar p-component")("ngStyle",C.style),t.xp6(2),t.Q6J("ngIf",C.startTemplate),t.xp6(1),t.Q6J("ngIf",C.centerTemplate),t.xp6(1),t.Q6J("ngIf",C.endTemplate))},dependencies:[h.mk,h.O5,h.tP,h.PC],styles:[".p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0})),g})(),v=(()=>{var a;class g{}return a=g,(0,l.Z)(g,"\u0275fac",function(_){return new(_||a)}),(0,l.Z)(g,"\u0275mod",t.oAB({type:a})),(0,l.Z)(g,"\u0275inj",t.cJS({imports:[h.ez]})),g})()}}]);