"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[767],{767:(E,v,t)=>{t.r(v),t.d(v,{CrudModule:()=>O});var e=t(6814),i=t(95),p=t(3557),c=t(3026),u=t(4769);let m=(()=>{var s;class g{}return(s=g).\u0275fac=function(M){return new(M||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[p.Bz.forChild([{path:"",component:c.D}]),p.Bz]}),g})();var l=t(9552),o=t(323),d=t(707),n=t(4480),a=t(4104),h=t(6340),r=t(6022),z=t(3714),y=t(6218),C=t(3965),S=t(1865),B=t(5167),R=t(1312),D=t(7680),Z=t(5118),I=t(9920);let O=(()=>{var s;class g{}return(s=g).\u0275fac=function(M){return new(M||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[e.ez,m,l.U$,o.O,i.u5,d.hJ,n.T,a.EV,h.V,r.Xt,z.j,y.A,C.kW,S.cc,B.L$,R.S,D.L,Z.DL,I.K]}),g})()},6218:(E,v,t)=>{t.d(v,{A:()=>m,g:()=>u});var e=t(1180),i=t(4769),p=t(6814),c=t(95);let u=(()=>{var l;class o{constructor(n,a,h,r){(0,e.Z)(this,"el",void 0),(0,e.Z)(this,"ngModel",void 0),(0,e.Z)(this,"control",void 0),(0,e.Z)(this,"cd",void 0),(0,e.Z)(this,"autoResize",void 0),(0,e.Z)(this,"onResize",new i.vpe),(0,e.Z)(this,"filled",void 0),(0,e.Z)(this,"cachedScrollHeight",void 0),(0,e.Z)(this,"ngModelSubscription",void 0),(0,e.Z)(this,"ngControlSubscription",void 0),this.el=n,this.ngModel=a,this.control=h,this.cd=r}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(n){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(n){this.autoResize&&this.resize(n)}onBlur(n){this.autoResize&&this.resize(n)}resize(n){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(n||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return l=o,(0,e.Z)(o,"\u0275fac",function(n){return new(n||l)(i.Y36(i.SBq),i.Y36(c.On,8),i.Y36(c.a5,8),i.Y36(i.sBO))}),(0,e.Z)(o,"\u0275dir",i.lG2({type:l,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(n,a){1&n&&i.NdJ("input",function(r){return a.onInput(r)})("focus",function(r){return a.onFocus(r)})("blur",function(r){return a.onBlur(r)}),2&n&&i.ekj("p-filled",a.filled)("p-inputtextarea-resizable",a.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})),o})(),m=(()=>{var l;class o{}return l=o,(0,e.Z)(o,"\u0275fac",function(n){return new(n||l)}),(0,e.Z)(o,"\u0275mod",i.oAB({type:l})),(0,e.Z)(o,"\u0275inj",i.cJS({imports:[p.ez]})),o})()}}]);