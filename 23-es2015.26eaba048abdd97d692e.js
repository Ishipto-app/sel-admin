(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{IOBc:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r("5HBU"),n=r("bTqV"),o=r("kmnG"),i=r("NFeN"),s=r("qFsG"),c=r("wZkO"),l=r("/t3+"),u=r("bSwM"),m=r("+0xr"),f=r("FKr1"),b=r("MutI"),d=r("fXoL");let h=(()=>{class e{}return e.\u0275mod=d.Pb({type:e}),e.\u0275inj=d.Ob({factory:function(t){return new(t||e)},imports:[[a.a,n.c,o.e,i.b,s.c,c.c,l.b,u.b,f.t,b.c,m.k]]}),e})()},cfqv:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r("8LU1"),n=r("vxfF"),o=r("fXoL"),i=r("HDdC");class s{constructor(e=50){this._totalWeight=0,this._defaultItemSize=e,this._averageItemSize=e}getAverageItemSize(){return this._averageItemSize}addSample(e,t){const r=this._totalWeight+e.end-e.start;if(r){const e=(t+this._averageItemSize*this._totalWeight)/r;e&&(this._averageItemSize=e,this._totalWeight=r)}}reset(){this._averageItemSize=this._defaultItemSize,this._totalWeight=0}}class c{constructor(e,t,r=new s){this.scrolledIndexChange=new i.a(()=>{throw Error("cdk-virtual-scroll: scrolledIndexChange is currently not supported for the autosize scroll strategy")}),this._viewport=null,this._removalFailures=0,this._minBufferPx=e,this._maxBufferPx=t,this._averager=r}attach(e){this._averager.reset(),this._viewport=e,this._renderContentForCurrentOffset()}detach(){this._viewport=null}onContentScrolled(){this._viewport&&this._updateRenderedContentAfterScroll()}onDataLengthChanged(){this._viewport&&(this._renderContentForCurrentOffset(),this._checkRenderedContentSize())}onContentRendered(){this._viewport&&this._checkRenderedContentSize()}onRenderedOffsetChanged(){this._viewport&&this._checkRenderedContentOffset()}scrollToIndex(){throw Error("cdk-virtual-scroll: scrollToIndex is currently not supported for the autosize scroll strategy")}updateBufferSize(e,t){if(t<e)throw"CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx";this._minBufferPx=e,this._maxBufferPx=t}_updateRenderedContentAfterScroll(){const e=this._viewport,t=e.measureScrollOffset();let r=t-this._lastScrollOffset,a=Math.abs(r);const n=e.getRenderedRange();let o=0;if(r<0){const e=n.start*this._averager.getAverageItemSize();o=Math.round((e-this._lastRenderedContentOffset)*Math.max(0,Math.min(1,a/(t+a)))),r-=o,a=Math.abs(r)}const i=this._lastScrollOffset-this._lastRenderedContentOffset,s=this._lastRenderedContentOffset+this._lastRenderedContentSize-(this._lastScrollOffset+e.getViewportSize()),c=a+this._minBufferPx-(r<0?i:s);if(c>0)if(a>=e.getViewportSize())this._renderContentForCurrentOffset();else{const t=Math.max(0,Math.ceil((c-this._minBufferPx+this._maxBufferPx)/this._averager.getAverageItemSize())),l=(r<0?s:i)-this._minBufferPx+a,u=Math.floor(l/this._averager.getAverageItemSize()/(this._removalFailures+1)),m=Math.min(n.end-n.start,Math.max(0,u)),f=this._expandRange(n,r<0?t:0,r>0?t:0);let b,d;if(r<0?f.end=Math.max(f.start+1,f.end-m):f.start=Math.min(f.end-1,f.start+m),r<0){let t=e.measureRangeSize({start:f.end,end:n.end});t<=l?(b=this._lastRenderedContentOffset+this._lastRenderedContentSize-t,this._removalFailures=0):(f.end=n.end,b=this._lastRenderedContentOffset+this._lastRenderedContentSize,this._removalFailures++),d="to-end"}else{const t=e.measureRangeSize({start:n.start,end:f.start});t<=l?(b=this._lastRenderedContentOffset+t,this._removalFailures=0):(f.start=n.start,b=this._lastRenderedContentOffset,this._removalFailures++),d="to-start"}e.setRenderedRange(f),e.setRenderedContentOffset(b+o,d)}else o&&e.setRenderedContentOffset(this._lastRenderedContentOffset+o);this._lastScrollOffset=t}_checkRenderedContentSize(){const e=this._viewport;this._lastRenderedContentSize=e.measureRenderedContentSize(),this._averager.addSample(e.getRenderedRange(),this._lastRenderedContentSize),this._updateTotalContentSize(this._lastRenderedContentSize)}_checkRenderedContentOffset(){this._lastRenderedContentOffset=this._viewport.getOffsetToRenderedContentStart()}_renderContentForCurrentOffset(){const e=this._viewport,t=e.measureScrollOffset();this._lastScrollOffset=t,this._removalFailures=0;const r=this._averager.getAverageItemSize(),a=Math.min(e.getDataLength()-1,Math.floor(t/r)),n=Math.ceil(this._maxBufferPx/r),o=this._expandRange(this._getVisibleRangeForIndex(a),n,n);e.setRenderedRange(o),e.setRenderedContentOffset(r*o.start)}_getVisibleRangeForIndex(e){const t=this._viewport,r={start:e,end:e+Math.ceil(t.getViewportSize()/this._averager.getAverageItemSize())},a=r.end-t.getDataLength();return a>0&&(r.start=Math.max(0,r.start-a)),r}_expandRange(e,t,r){const a=this._viewport;return{start:Math.max(0,e.start-t),end:Math.min(a.getDataLength(),e.end+r)}}_updateTotalContentSize(e){const t=this._viewport,r=t.getRenderedRange(),a=e+(t.getDataLength()-(r.end-r.start))*this._averager.getAverageItemSize();t.setTotalContentSize(a)}}function l(e){return e._scrollStrategy}let u=(()=>{class e{constructor(){this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new c(this.minBufferPx,this.maxBufferPx)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=Object(a.f)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=Object(a.f)(e)}ngOnChanges(){this._scrollStrategy.updateBufferSize(this.minBufferPx,this.maxBufferPx)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=o.Mb({type:e,selectors:[["cdk-virtual-scroll-viewport","autosize",""]],inputs:{minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[o.Cb([{provide:n.h,useFactory:l,deps:[Object(o.V)(()=>e)]}]),o.Bb()]}),e})(),m=(()=>{class e{}return e.\u0275mod=o.Pb({type:e}),e.\u0275inj=o.Ob({factory:function(t){return new(t||e)}}),e})()},eZn4:function(e,t,r){"use strict";r.d(t,"a",(function(){return q}));var a=r("tyNb"),n=r("STbY"),o=r("/1cH"),i=r("iadO"),s=r("bTqV"),c=r("7EHt"),l=r("kmnG"),u=r("NFeN"),m=r("Qu3c"),f=r("qFsG"),b=r("wZkO"),d=r("d3UM"),h=r("QibW"),p=r("0IaG"),g=r("/t3+"),x=r("bSwM"),_=r("M9IT"),v=r("xHqg"),y=r("A5z7"),C=r("bv9b"),S=r("XhcP"),w=r("FKr1"),W=r("1jcm"),X=r("+0xr"),R=r("MutI"),L=r("f0Cb"),k=r("5HBU"),O=r("fXoL");let q=(()=>{class e{}return e.\u0275mod=O.Pb({type:e}),e.\u0275inj=O.Ob({factory:function(t){return new(t||e)},imports:[[a.k,n.b,k.a,o.b,i.c,s.c,c.b,l.e,u.b,m.b,f.c,b.c,d.b,h.c,p.e,g.b,x.b,_.b,v.d,y.e,C.b,S.b,W.b,X.k,R.c,L.b,w.t]]}),e})()},qPk3:function(e,t,r){"use strict";r.d(t,"a",(function(){return B}));var a=r("0IaG"),n=r("3Pt+"),o=r("JX91"),i=r("lJxs"),s=r("fXoL"),c=r("tyNb"),l=r("qXBG"),u=r("0Zc1"),m=r("ofXK"),f=r("/t3+"),b=r("XiUz"),d=r("bTqV"),h=r("NFeN"),p=r("EwFO"),g=r("kmnG"),x=r("qFsG"),_=r("/1cH"),v=r("d3UM"),y=r("FKr1"),C=r("ihCf");const S=["formDirective"];function w(e,t){if(1&e&&(s.Xb(0,"mat-option",35),s.Lc(1),s.Wb()),2&e){const e=t.$implicit;s.pc("value",e),s.Db(1),s.Nc(" ",e.name," ")}}function W(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Price is required "),s.Wb())}function X(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Volume is required "),s.Wb())}function R(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Amount is required "),s.Wb())}function L(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Tax is required "),s.Wb())}function k(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Tax Amount is required "),s.Wb())}function O(e,t){if(1&e&&(s.Xb(0,"mat-option",19),s.Lc(1),s.Wb()),2&e){const e=t.$implicit;s.pc("value",e),s.Db(1),s.Nc(" ",e.code," ")}}function q(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Currency is required "),s.Wb())}function I(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Ex_rate is required "),s.Wb())}function F(e,t){if(1&e&&(s.Xb(0,"mat-option",19),s.Lc(1),s.Wb()),2&e){const e=t.$implicit;s.pc("value",e),s.Db(1),s.Nc(" ",e.name," ")}}function z(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," Payment center is required "),s.Wb())}function D(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," W Tax is required "),s.Wb())}function P(e,t){1&e&&(s.Xb(0,"mat-error"),s.Lc(1," WT Amount is required "),s.Wb())}let B=(()=>{class e{constructor(e,t,r,a,o,i,s){switch(this.router=e,this.matDialogRef=t,this._data=r,this.authService=a,this.commonService=o,this.datePipe=i,this._formBuilder=s,this.errorMessage="",this.type="",this.form=this._formBuilder.group({price:[null,n.y.required],volume:[null,n.y.required],amount:[null,n.y.required],tax:[null,n.y.required],tax_amount:[null,n.y.required],currency:[null,n.y.required],ex_rate:[1,n.y.required],payment_center:[2,n.y.required],w_tax:[null,n.y.required],wt_amount:[0,n.y.required],info:[null]}),this.partnerColumn={Revenue:"pay_party",Cost:"issue_party"},this.label=r.label,this.shipmentId=r.shipmentId,this.price=r.price,this.currency=r.currency,this.partner=r.partner,this.country=r.country,this.user=r.user,this.permission=r.permission,!0){case this.label.includes("selling rate"):this.type="Revenue";break;case this.label.includes("cost"):this.type="Cost"}if(this.label.includes("Edit")){let e=JSON.parse(JSON.stringify(r.data));e.currency=this.currency.find(t=>t.id==e.currency.id),e.payment_center=this.country.find(t=>t.id==e.payment_center.id),this.form.patchValue(e)}else{let e=this.country.find(e=>e.id==r.customer.country);this.form.controls.payment_center.setValue(e)}}ngOnInit(){this.name=this.authService.name,this.filteredPrice=this.form.controls.price.valueChanges.pipe(Object(o.a)(""),Object(i.a)(e=>e?"string"==typeof e?e:e.price_name:null),Object(i.a)(e=>e?this.commonService.filterData(e,"price_name",this.price):[])),this.filteredCountry=this.form.controls.payment_center.valueChanges.pipe(Object(o.a)(""),Object(i.a)(e=>e?"string"==typeof e?e:e.name:null),Object(i.a)(e=>e?this.commonService.filterData(e,"name",this.country):[])),this.form.controls.amount.valueChanges.subscribe(e=>{e=e||0;let t=this.form.value.tax?this.form.value.tax:0;5.26==t&&(t=.05/.95*100);let r=Math.round(e*t/100);this.form.controls.tax_amount.setValue(r)}),this.form.controls.tax.valueChanges.subscribe(e=>{5.26==(e=e||0)&&(e=.05/.95*100);let t=Math.round((this.form.value.amount?this.form.value.amount:0)*e/100);this.form.controls.tax_amount.setValue(t)}),this.form.valueChanges.subscribe(e=>{this.errorMessage=""})}onFormSubmit(e){if(e.valid){if("string"==typeof e.value.price&&this.form.controls.price.setValue(null),!this.form.valid)return;this.matDialogRef.close(e.value)}}getExrate(e){this.form.controls.ex_rate.setValue(e.value.exrate)}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(c.g),s.Rb(a.f),s.Rb(a.a),s.Rb(l.a),s.Rb(u.a),s.Rb(m.f),s.Rb(n.d))},e.\u0275cmp=s.Lb({type:e,selectors:[["shipment-book-soa-modal-dialog"]],viewQuery:function(e,t){var r;1&e&&s.Sc(S,!0),2&e&&s.wc(r=s.gc())&&(t.shipmentNgForm=r.first)},decls:99,vars:32,consts:[[1,"dialog-content-wrapper"],[1,"mat-accent","m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title"],["mat-icon-button","","aria-label","Close dialog",3,"click"],["mat-dialog-content","","fusePerfectScrollbar","","id","shipment-book-revenue-modal","fxLayout","column",1,"p-16","pb-0","m-0",2,"overflow","auto"],["fxLayout","column","fxLayoutAlign","start","name","form",3,"formGroup","keydown.enter","ngSubmit"],["fxLayout","row wrap","fxLayoutAlign","start center","fxFlex","1 0 auto"],["floatLabel","always","fxFlex","100","fxFlex.gt-xs","80",1,"pr-8"],["inputCheck","","aria-label","price","matInput","","formControlName","price","required","",3,"matAutocomplete"],[3,"displayWith"],["autoPrice","matAutocomplete"],["style","font-size: 12px; overflow: visible; display: block;",3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["floatLabel","always","fxFlex","50","fxFlex.gt-xs","20",1,"pr-8"],["inputCheck","","matInput","",3,"value","readonly"],["inputCheck","","matInput","","formControlName","volume","min","1","type","number","required",""],["inputCheck","","matInput","","type","number","formControlName","amount","required",""],["formControlName","tax","required",""],[3,"value"],["inputCheck","","matInput","","type","number","formControlName","tax_amount","required",""],["formControlName","currency","required","",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["inputCheck","","type","number","matInput","","formControlName","ex_rate"],["inputCheck","","aria-label","payment_center","matInput","","formControlName","payment_center","required","",3,"matAutocomplete"],["autoCountry","matAutocomplete"],["inputCheck","","matInput","","type","number","formControlName","w_tax","required",""],["inputCheck","","matInput","","type","number","formControlName","wt_amount","required",""],["floatLabel","always","fxFlex","100",1,"pr-8"],["textareaCheck","","matInput","","formControlName","info","cdkTextareaAutosize","","cdkAutosizeMinRows","1","cdkAutosizeMaxRows","10"],["fxLayout","row","fxLayoutAlign","start center","fxFlex","1 0 auto"],[1,"mat-error"],["fxLayout","row","fxLayoutAlign","center","fxFlex","1 0 auto",1,"p-16"],["type","submit","mat-raised-button","","color","accent",1,"mr-8"],["type","button","mat-raised-button","","color","warn",1,"mr-8",3,"click"],[2,"font-size","12px","overflow","visible","display","block",3,"value"]],template:function(e,t){if(1&e&&(s.Xb(0,"div",0),s.Xb(1,"mat-toolbar",1),s.Xb(2,"mat-toolbar-row",2),s.Xb(3,"span",3),s.Lc(4),s.Wb(),s.Xb(5,"button",4),s.fc("click",(function(e){return t.matDialogRef.close()})),s.Xb(6,"mat-icon"),s.Lc(7,"close"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(8,"div",5),s.Xb(9,"div"),s.Xb(10,"form",6),s.fc("keydown.enter",(function(e){return"TEXTAREA"==e.target.tagName}))("ngSubmit",(function(e){return t.onFormSubmit(t.form)})),s.Xb(11,"div",7),s.Xb(12,"mat-form-field",8),s.Xb(13,"mat-label"),s.Lc(14,"Price"),s.Wb(),s.Sb(15,"input",9),s.Xb(16,"mat-autocomplete",10,11),s.Jc(18,w,2,2,"mat-option",12),s.kc(19,"async"),s.Wb(),s.Jc(20,W,2,0,"mat-error",13),s.Wb(),s.Xb(21,"mat-form-field",14),s.Xb(22,"mat-label"),s.Lc(23,"Unit"),s.Wb(),s.Sb(24,"input",15),s.Wb(),s.Xb(25,"mat-form-field",14),s.Xb(26,"mat-label"),s.Lc(27,"Volume"),s.Wb(),s.Sb(28,"input",16),s.Jc(29,X,2,0,"mat-error",13),s.Wb(),s.Xb(30,"mat-form-field",14),s.Xb(31,"mat-label"),s.Lc(32,"Amount"),s.Wb(),s.Sb(33,"input",17),s.Jc(34,R,2,0,"mat-error",13),s.Wb(),s.Xb(35,"mat-form-field",14),s.Xb(36,"mat-label"),s.Lc(37,"Tax(%)"),s.Wb(),s.Xb(38,"mat-select",18),s.Xb(39,"mat-option",19),s.Lc(40,"0"),s.Wb(),s.Xb(41,"mat-option",19),s.Lc(42,"5"),s.Wb(),s.Xb(43,"mat-option",19),s.Lc(44,"5.26"),s.Wb(),s.Xb(45,"mat-option",19),s.Lc(46,"7"),s.Wb(),s.Xb(47,"mat-option",19),s.Lc(48,"8"),s.Wb(),s.Xb(49,"mat-option",19),s.Lc(50,"10"),s.Wb(),s.Wb(),s.Jc(51,L,2,0,"mat-error",13),s.Wb(),s.Xb(52,"mat-form-field",14),s.Xb(53,"mat-label"),s.Lc(54,"Tax Amount"),s.Wb(),s.Sb(55,"input",20),s.Jc(56,k,2,0,"mat-error",13),s.Wb(),s.Xb(57,"mat-form-field",14),s.Xb(58,"mat-label"),s.Lc(59,"Currency"),s.Wb(),s.Xb(60,"mat-select",21),s.fc("selectionChange",(function(e){return t.getExrate(e)})),s.Jc(61,O,2,2,"mat-option",22),s.Wb(),s.Jc(62,q,2,0,"mat-error",13),s.Wb(),s.Xb(63,"mat-form-field",14),s.Xb(64,"mat-label"),s.Lc(65,"Ex-rate"),s.Wb(),s.Sb(66,"input",23),s.Jc(67,I,2,0,"mat-error",13),s.Wb(),s.Xb(68,"mat-form-field",14),s.Xb(69,"mat-label"),s.Lc(70,"Payment center"),s.Wb(),s.Sb(71,"input",24),s.Xb(72,"mat-autocomplete",10,25),s.Jc(74,F,2,2,"mat-option",22),s.kc(75,"async"),s.Wb(),s.Jc(76,z,2,0,"mat-error",13),s.Wb(),s.Xb(77,"mat-form-field",14),s.Xb(78,"mat-label"),s.Lc(79,"W Tax"),s.Wb(),s.Sb(80,"input",26),s.Jc(81,D,2,0,"mat-error",13),s.Wb(),s.Xb(82,"mat-form-field",14),s.Xb(83,"mat-label"),s.Lc(84,"WT Amount"),s.Wb(),s.Sb(85,"input",27),s.Jc(86,P,2,0,"mat-error",13),s.Wb(),s.Xb(87,"mat-form-field",28),s.Xb(88,"mat-label"),s.Lc(89,"Info"),s.Wb(),s.Sb(90,"textarea",29),s.Wb(),s.Wb(),s.Xb(91,"div",30),s.Xb(92,"div",31),s.Lc(93),s.Wb(),s.Wb(),s.Xb(94,"div",32),s.Xb(95,"button",33),s.Lc(96,"Submit"),s.Wb(),s.Xb(97,"button",34),s.fc("click",(function(e){return t.matDialogRef.close()})),s.Lc(98,"Cancel"),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&e){const e=s.xc(17),r=s.xc(73);s.Db(4),s.Mc(t.label),s.Db(6),s.pc("formGroup",t.form),s.Db(5),s.pc("matAutocomplete",e),s.Db(1),s.pc("displayWith",t.commonService.displayObjFn.bind(t,"name")),s.Db(2),s.pc("ngForOf",s.lc(19,28,t.filteredPrice)),s.Db(2),s.pc("ngIf",t.form.get("price").hasError("required")),s.Db(4),s.pc("value",null==t.form.value.price?null:t.form.value.price.unit_code)("readonly",!0),s.Db(5),s.pc("ngIf",t.form.get("volume").hasError("required")),s.Db(5),s.pc("ngIf",t.form.get("amount").hasError("required")),s.Db(5),s.pc("value",0),s.Db(2),s.pc("value",5),s.Db(2),s.pc("value",5.26),s.Db(2),s.pc("value",7),s.Db(2),s.pc("value",8),s.Db(2),s.pc("value",10),s.Db(2),s.pc("ngIf",t.form.get("tax").hasError("required")),s.Db(5),s.pc("ngIf",t.form.get("tax_amount").hasError("required")),s.Db(5),s.pc("ngForOf",t.currency),s.Db(1),s.pc("ngIf",t.form.get("currency").hasError("required")),s.Db(5),s.pc("ngIf",t.form.get("ex_rate").hasError("required")),s.Db(4),s.pc("matAutocomplete",r),s.Db(1),s.pc("displayWith",t.commonService.displayObjFn.bind(t,"name")),s.Db(2),s.pc("ngForOf",s.lc(75,30,t.filteredCountry)),s.Db(2),s.pc("ngIf",t.form.get("payment_center").hasError("required")),s.Db(5),s.pc("ngIf",t.form.get("w_tax").hasError("required")),s.Db(5),s.pc("ngIf",t.form.get("wt_amount").hasError("required")),s.Db(7),s.Mc(t.errorMessage)}},directives:[f.a,f.c,b.b,b.d,b.c,d.b,h.a,a.d,p.a,n.A,n.q,n.h,g.c,g.f,x.b,n.b,_.c,n.p,n.g,n.w,_.a,m.s,m.t,n.u,v.a,y.n,C.b,g.b],pipes:[m.b],styles:["@media screen and (min-width:600px)and (max-width:959px){.shipment-book-soa-modal-dialog{width:100%}}@media screen and (min-width:960px){.shipment-book-soa-modal-dialog{width:1080px}}.shipment-book-soa-modal-dialog .mat-dialog-container{padding:0}.shipment-book-soa-modal-dialog .dialog-content-wrapper{max-height:85vh;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.shipment-book-soa-modal-dialog .cdk-overlay-connected-position-bounding-box .mat-autocomplete-panel .mat-option .mat-active{background:#0ff!important}.shipment-book-soa-modal-dialog .cdk-overlay-connected-position-bounding-box .mat-autocomplete-panel .mat-option .mat-active .mat-option-text{color:red!important}"],encapsulation:2}),e})()}}]);