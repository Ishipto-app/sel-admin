(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"47pV":function(e,t,r){"use strict";r.r(t);var a=r("tyNb"),i=r("nmyD"),n=r("STbY"),o=r("/1cH"),c=r("iadO"),s=r("bTqV"),l=r("7EHt"),b=r("kmnG"),d=r("NFeN"),p=r("Qu3c"),h=r("qFsG"),u=r("wZkO"),m=r("d3UM"),f=r("QibW"),g=r("0IaG"),x=r("/t3+"),v=r("bSwM"),C=r("M9IT"),w=r("xHqg"),y=r("A5z7"),D=r("bv9b"),X=r("XhcP"),W=r("1jcm"),S=r("+0xr"),k=r("5HBU"),_=r("LPQX"),F=r("yrbL"),L=r("XNiG"),I=r("fXoL"),q=r("1G5W"),O=r("3Pt+"),M=r("JX91"),P=r("lJxs"),A=r("Ivtv"),V=r("qXBG"),N=r("0Zc1"),T=r("XiUz"),j=r("ofXK"),z=r("FKr1");const J=["formDirective"];function H(e,t){if(1&e&&(I.Xb(0,"mat-option",39),I.Xb(1,"span",40),I.Lc(2),I.Wb(),I.Xb(3,"span",41),I.Lc(4),I.Wb(),I.Xb(5,"span",40),I.Lc(6),I.kc(7,"date"),I.kc(8,"date"),I.Wb(),I.Wb()),2&e){const e=t.$implicit;I.pc("value",e),I.Db(2),I.Mc(e.owner_short_name),I.Db(2),I.Mc(e.code),I.Db(2),I.Oc("From: ",I.mc(7,5,e.start_date,"MM/dd/yy")," To: ",I.mc(8,8,e.end_date,"MM/dd/yy"),"")}}function B(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Lease is required "),I.Wb())}function E(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Cont number is required "),I.Wb())}function R(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Cont number is too long (max length = 11); "),I.Wb())}function U(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Invalid container number "),I.Wb())}function G(e,t){if(1&e&&(I.Xb(0,"mat-option",31),I.Lc(1),I.Wb()),2&e){const e=t.$implicit;I.pc("value",e.id),I.Db(1),I.Mc(e.code)}}function Q(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Cont type is required "),I.Wb())}function $(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," On Hire is required "),I.Wb())}function K(e,t){if(1&e&&(I.Xb(0,"mat-option",31),I.Lc(1),I.Wb()),2&e){const e=t.$implicit;I.pc("value",e.id),I.Db(1),I.Nc(" ",e.name," ")}}function Y(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," On port is required "),I.Wb())}function Z(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Off Hire is required "),I.Wb())}function ee(e,t){if(1&e&&(I.Xb(0,"mat-option",31),I.Lc(1),I.Wb()),2&e){const e=t.$implicit;I.pc("value",e.id),I.Db(1),I.Nc(" ",e.name," ")}}function te(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Status is required "),I.Wb())}function re(e,t){if(1&e&&(I.Xb(0,"mat-option",31),I.Lc(1),I.Wb()),2&e){const e=t.$implicit;I.pc("value",e.id),I.Db(1),I.Mc(e.code)}}function ae(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Code is required "),I.Wb())}function ie(e,t){1&e&&(I.Xb(0,"mat-error"),I.Lc(1," Grade is required "),I.Wb())}let ne=(()=>{class e{constructor(e,t,r){this.authService=e,this.fb=t,this.commonService=r,this.isFormValid=new I.o,this.filterLease=[],this.filteredContType=[]}ngOnInit(){if(this.name=this.authService.name,this.formContainer=this.initFormContainerModel(),this.containerDetailValue)this.filterLease=this.lease.slice(),this.containerDetailValue.lease_id=this.lease.find(e=>e.id==this.containerDetailValue.lease_id),this.formContainer.controls.lease_date.setValue(null),this.getContType({value:this.containerDetailValue.lease_id}),this.formContainer.patchValue(this.containerDetailValue);else{let e=(new Date).getTime();this.filterLease=this.lease.filter(t=>t.end_date>e)}this.filteredSeaport1=this.formContainer.controls.on_port.valueChanges.pipe(Object(M.a)(""),Object(P.a)(e=>e?"string"==typeof e?e:e.name:null),Object(P.a)(e=>e?this.commonService.filterData(e,"name",this.seaport):[])),this.filteredSeaport2=this.formContainer.controls.off_port.valueChanges.pipe(Object(M.a)(""),Object(P.a)(e=>e?"string"==typeof e?e:e.name:null),Object(P.a)(e=>e?this.commonService.filterData(e,"name",this.seaport):[])),this.formContainer.valueChanges.subscribe(e=>{}),this.formContainer.controls.lease_date.valueChanges.subscribe(e=>{if(e){let t=new Date(e).getTime();this.filterLease=this.lease.filter(e=>e.end_date>t)}else this.filterLease=this.lease.slice()})}initFormContainerModel(){return this.fb.group({id:[""],cont_number:["",[O.y.required,A.a]],cont_type:["",O.y.required],lease_id:["",O.y.required],lease_date:[new Date],on_hire:["",O.y.required],on_port:["",O.y.required],off_hire:[null],off_port:[null],status:[0,O.y.required],code:[1,O.y.required],grade:["U",O.y.required],info:[""],update_by:[this.authService.user,O.y.required]})}getContType(e){this.formContainer.controls.cont_type.setValue(null);let t=this.leaseDetail.filter(t=>t.lease==e.value.id);this.filteredContType=[],t.map(e=>{this.filteredContType.push({id:e.cont_type,code:e.cont_type_code})})}resetForm(){this.containerNgForm.reset(),this.formContainer.controls.lease_date.setValue(new Date),this.formContainer.controls.status.setValue(0),this.formContainer.controls.code.setValue(1),this.formContainer.controls.grade.setValue("U"),this.formContainer.controls.update_by.setValue(this.authService.user)}validateFormDetail(e){!0===e&&(this.markFormGroupTouched(this.formContainer),!0===this.formContainer.valid)&&this.isFormValid.emit(!0)}markFormGroupTouched(e){Object.values(e.controls).forEach(e=>{e.markAsTouched(),e.controls&&this.markFormGroupTouched(e)})}}return e.\u0275fac=function(t){return new(t||e)(I.Rb(V.a),I.Rb(O.d),I.Rb(N.a))},e.\u0275cmp=I.Lb({type:e,selectors:[["container-form-detail"]],viewQuery:function(e,t){var r;1&e&&I.Sc(J,!0),2&e&&I.wc(r=I.gc())&&(t.containerNgForm=r.first)},inputs:{lease:"lease",leaseDetail:"leaseDetail",seaport:"seaport",containerCode:"containerCode",containerDetailValue:"containerDetailValue"},outputs:{isFormValid:"isFormValid"},decls:120,vars:42,consts:[["fxLayout","column",1,"profile-box","info-box","general"],[1,"accent"],[1,"title"],[1,"content",3,"formGroup"],["formDirective","ngForm"],["fxLayout","row wrap"],[2,"display","none"],["inputCheck","","matInput","","formControlName","id"],["fxFlex","100","fxFlex.gt-md","80",1,"info-line"],["floatLabel","always",1,"w-100-p","pr-sm-8"],["formControlName","lease_id","required","",3,"selectionChange"],["fxLayout","row",3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["fxFlex","100","fxFlex.gt-sm","20",1,"info-line"],["inputCheck","","matInput","","name","lease_date","formControlName","lease_date","readonly","true",3,"matDatepicker","change"],["matSuffix","",3,"for"],["lease_date",""],["fxFlex","100","fxFlex.gt-sm","50",1,"info-line"],["inputCheck","","matInput","","maxlength","11","formControlName","cont_number","required",""],["formControlName","cont_type","required","",3,"disabled"],[3,"value",4,"ngFor","ngForOf"],["inputCheck","","matInput","","name","on_hire","formControlName","on_hire",3,"matDatepicker","change"],["on_hire",""],["inputCheck","","type","text","matInput","","formControlName","on_port","required","",3,"matAutocomplete"],[3,"displayWith"],["autoOnport","matAutocomplete"],["inputCheck","","matInput","","name","off_hire","formControlName","off_hire",3,"matDatepicker","change"],["off_hire",""],["inputCheck","","type","text","matInput","","formControlName","off_port",3,"matAutocomplete"],["autoOffport","matAutocomplete"],["formControlName","status","required",""],[3,"value"],["fxFlex","100","fxFlex.gt-sm","25",1,"info-line"],["formControlName","code","required",""],["formControlName","grade","required",""],["fxFlex","100",1,"info-line"],["inputCheck","","matInput","",3,"readonly","value"],["inputCheck","","matInput","","formControlName","update_by",2,"display","none"],["inputCheck","","matInput","","formControlName","info"],["fxLayout","row",3,"value"],["fxFlex","25",1,"text-truncate","font-size-14"],["fxFlex","50",1,"text-truncate","font-size-14"]],template:function(e,t){if(1&e&&(I.Xb(0,"div",0),I.Xb(1,"header",1),I.Xb(2,"div",2),I.Lc(3),I.Wb(),I.Wb(),I.Xb(4,"form",3,4),I.Xb(6,"div",5),I.Xb(7,"div",6),I.Sb(8,"input",7),I.Wb(),I.Xb(9,"div",8),I.Xb(10,"mat-form-field",9),I.Xb(11,"mat-label"),I.Lc(12,"Lease"),I.Wb(),I.Xb(13,"mat-select",10),I.fc("selectionChange",(function(e){return t.getContType(e)})),I.Jc(14,H,9,11,"mat-option",11),I.Wb(),I.Jc(15,B,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(16,"div",13),I.Xb(17,"mat-form-field",9),I.Xb(18,"mat-label"),I.Lc(19,"Filter lease end date"),I.Wb(),I.Xb(20,"input",14),I.fc("change",(function(e){return t.commonService.setDateStr(e)})),I.Wb(),I.Sb(21,"mat-datepicker-toggle",15),I.Sb(22,"mat-datepicker",null,16),I.Wb(),I.Wb(),I.Xb(24,"div",17),I.Xb(25,"mat-form-field",9),I.Xb(26,"mat-label"),I.Lc(27,"Cont number"),I.Wb(),I.Sb(28,"input",18),I.Jc(29,E,2,0,"mat-error",12),I.Jc(30,R,2,0,"mat-error",12),I.Jc(31,U,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(32,"div",17),I.Xb(33,"mat-form-field",9),I.Xb(34,"mat-label"),I.Lc(35,"Cont type"),I.Wb(),I.Xb(36,"mat-select",19),I.Jc(37,G,2,2,"mat-option",20),I.Wb(),I.Jc(38,Q,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(39,"div",17),I.Xb(40,"mat-form-field",9),I.Xb(41,"mat-label"),I.Lc(42,"On hire"),I.Wb(),I.Xb(43,"input",21),I.fc("change",(function(e){return t.commonService.setDateStr(e)})),I.Wb(),I.Sb(44,"mat-datepicker-toggle",15),I.Sb(45,"mat-datepicker",null,22),I.Jc(47,$,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(48,"div",17),I.Xb(49,"mat-form-field",9),I.Xb(50,"mat-label"),I.Lc(51,"On Port"),I.Wb(),I.Sb(52,"input",23),I.Xb(53,"mat-autocomplete",24,25),I.Jc(55,K,2,2,"mat-option",20),I.kc(56,"async"),I.Wb(),I.Jc(57,Y,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(58,"div",17),I.Xb(59,"mat-form-field",9),I.Xb(60,"mat-label"),I.Lc(61,"Off hire"),I.Wb(),I.Xb(62,"input",26),I.fc("change",(function(e){return t.commonService.setDateStr(e)})),I.Wb(),I.Sb(63,"mat-datepicker-toggle",15),I.Sb(64,"mat-datepicker",null,27),I.Jc(66,Z,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(67,"div",17),I.Xb(68,"mat-form-field",9),I.Xb(69,"mat-label"),I.Lc(70,"Off Port"),I.Wb(),I.Sb(71,"input",28),I.Xb(72,"mat-autocomplete",24,29),I.Jc(74,ee,2,2,"mat-option",20),I.kc(75,"async"),I.Wb(),I.Wb(),I.Wb(),I.Xb(76,"div",17),I.Xb(77,"mat-form-field",9),I.Xb(78,"mat-label"),I.Lc(79,"Status"),I.Wb(),I.Xb(80,"mat-select",30),I.Xb(81,"mat-option",31),I.Lc(82,"Invalid"),I.Wb(),I.Xb(83,"mat-option",31),I.Lc(84,"Valid"),I.Wb(),I.Wb(),I.Jc(85,te,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(86,"div",32),I.Xb(87,"mat-form-field",9),I.Xb(88,"mat-label"),I.Lc(89,"Code"),I.Wb(),I.Xb(90,"mat-select",33),I.Jc(91,re,2,2,"mat-option",20),I.Wb(),I.Jc(92,ae,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(93,"div",32),I.Xb(94,"mat-form-field",9),I.Xb(95,"mat-label"),I.Lc(96,"Grade"),I.Wb(),I.Xb(97,"mat-select",34),I.Xb(98,"mat-option",31),I.Lc(99,"A"),I.Wb(),I.Xb(100,"mat-option",31),I.Lc(101,"B"),I.Wb(),I.Xb(102,"mat-option",31),I.Lc(103,"C"),I.Wb(),I.Xb(104,"mat-option",31),I.Lc(105,"D"),I.Wb(),I.Xb(106,"mat-option",31),I.Lc(107,"U"),I.Wb(),I.Wb(),I.Jc(108,ie,2,0,"mat-error",12),I.Wb(),I.Wb(),I.Xb(109,"div",35),I.Xb(110,"mat-form-field",9),I.Xb(111,"mat-label"),I.Lc(112,"Update by"),I.Wb(),I.Sb(113,"input",36),I.Sb(114,"input",37),I.Wb(),I.Wb(),I.Xb(115,"div",35),I.Xb(116,"mat-form-field",9),I.Xb(117,"mat-label"),I.Lc(118,"Info"),I.Wb(),I.Sb(119,"input",38),I.Wb(),I.Wb(),I.Wb(),I.Wb(),I.Wb()),2&e){const e=I.xc(23),r=I.xc(46),a=I.xc(54),i=I.xc(65),n=I.xc(73);I.Db(3),I.Nc("",t.containerDetailValue?"Edit":"New"," Container"),I.Db(1),I.pc("formGroup",t.formContainer),I.Db(10),I.pc("ngForOf",t.filterLease),I.Db(1),I.pc("ngIf",t.formContainer.get("lease_id").hasError("required")),I.Db(5),I.pc("matDatepicker",e),I.Db(1),I.pc("for",e),I.Db(8),I.pc("ngIf",t.formContainer.get("cont_number").hasError("required")),I.Db(1),I.pc("ngIf",!t.formContainer.get("cont_number").hasError("required")&&t.formContainer.get("cont_number").hasError("maxLength")),I.Db(1),I.pc("ngIf",t.formContainer.get("cont_number").errors&&t.formContainer.get("cont_number").dirty&&t.formContainer.get("cont_number").errors.validConNum),I.Db(5),I.pc("disabled",!t.formContainer.get("lease_id").value),I.Db(1),I.pc("ngForOf",t.filteredContType),I.Db(1),I.pc("ngIf",t.formContainer.get("cont_type").hasError("required")),I.Db(5),I.pc("matDatepicker",r),I.Db(1),I.pc("for",r),I.Db(3),I.pc("ngIf",t.formContainer.get("on_hire").hasError("required")),I.Db(5),I.pc("matAutocomplete",a),I.Db(1),I.pc("displayWith",t.commonService.displayFn.bind(t,"name",t.seaport)),I.Db(2),I.pc("ngForOf",I.lc(56,38,t.filteredSeaport1)),I.Db(2),I.pc("ngIf",t.formContainer.get("on_port").hasError("required")),I.Db(5),I.pc("matDatepicker",i),I.Db(1),I.pc("for",i),I.Db(3),I.pc("ngIf",t.formContainer.get("off_hire").hasError("required")),I.Db(5),I.pc("matAutocomplete",n),I.Db(1),I.pc("displayWith",t.commonService.displayFn.bind(t,"name",t.seaport)),I.Db(2),I.pc("ngForOf",I.lc(75,40,t.filteredSeaport2)),I.Db(7),I.pc("value",0),I.Db(2),I.pc("value",1),I.Db(2),I.pc("ngIf",t.formContainer.get("status").hasError("required")),I.Db(6),I.pc("ngForOf",t.containerCode),I.Db(1),I.pc("ngIf",t.formContainer.get("code").hasError("required")),I.Db(6),I.pc("value","A"),I.Db(2),I.pc("value","B"),I.Db(2),I.pc("value","C"),I.Db(2),I.pc("value","D"),I.Db(2),I.pc("value","U"),I.Db(2),I.pc("ngIf",t.formContainer.get("grade").hasError("required")),I.Db(5),I.pc("readonly",!0)("value",t.name)}},directives:[T.d,O.A,O.q,O.h,h.b,O.b,O.p,O.g,T.b,b.c,b.f,m.a,O.w,j.s,j.t,c.b,c.d,b.h,c.a,O.k,o.c,o.a,z.n,b.b],pipes:[j.b,j.f],styles:["container-form-detail .profile-box{border-radius:4px;overflow:hidden;margin-bottom:16px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}container-form-detail .profile-box header{padding:16px}container-form-detail .profile-box header .title{font-size:17px}container-form-detail .profile-box header .more{cursor:pointer}container-form-detail .profile-box .content{padding:16px}container-form-detail .profile-box .content .partner-table{font-size:12px}container-form-detail .profile-box .content .partner-table td,container-form-detail .profile-box .content .partner-table th{padding:8px!important}container-form-detail .profile-box footer{padding:8px;border-top:1px solid}container-form-detail .profile-box.info-box .info-line .title{font-size:15px;font-weight:600;padding-bottom:4px}container-form-detail .profile-box.info-box .info-line:last-child{margin-bottom:0}"],encapsulation:2}),e})();var oe=r("EwFO");const ce=["formDirective"];let se=(()=>{class e{constructor(e,t,r,a,i){this._formBuilder=e,this.router=t,this.route=r,this.authService=a,this.datePipe=i,this.height=560,this.createContainer=new I.o,this.clearMessage=new I.o,this._unsubscribeAll=new L.a}ngOnInit(){this.authService.windowSizeChanged.pipe(Object(q.a)(this._unsubscribeAll)).subscribe(e=>{this.height=e.height-64-12-12-54-62}),this.authService.changeScreen.pipe(Object(q.a)(this._unsubscribeAll)).subscribe(e=>{this.height=e?this.authService.screenHeight-12-12-54-62:this.authService.screenHeight-64-12-12-54-62})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}submitForm(){if(this.containerFormDetailComponent.validateFormDetail(!0),this.formDetailValid){let t=this.containerFormDetailComponent.formContainer.value,r={};for(var e in t)r[e]=0==t[e]?0:""!=t[e]?t[e]:null;this.createContainer.emit(r)}}resetForm(){this.containerFormDetailComponent.resetForm()}isFormDetailValid(e){this.formDetailValid=e}}return e.\u0275fac=function(t){return new(t||e)(I.Rb(O.d),I.Rb(a.g),I.Rb(a.a),I.Rb(V.a),I.Rb(j.f))},e.\u0275cmp=I.Lb({type:e,selectors:[["container-form-content"]],viewQuery:function(e,t){var r;1&e&&(I.Sc(ce,!0),I.Sc(ne,!0)),2&e&&(I.wc(r=I.gc())&&(t.containerNgForm=r.first),I.wc(r=I.gc())&&(t.containerFormDetailComponent=r.first))},inputs:{lease:"lease",leaseDetail:"leaseDetail",seaport:"seaport",containerCode:"containerCode",containerDetailValue:"containerDetailValue"},outputs:{createContainer:"createContainer",clearMessage:"clearMessage"},decls:5,vars:7,consts:[["fxLayout","column",1,"w-100-p"],["fxLayout","column","fusePerfectScrollbar","",2,"overflow","auto"],["id","container","fxLayout","row wrap"],["fxLayout","column","fxFlex","100",1,"container-content","mr-8"],[3,"lease","leaseDetail","seaport","containerCode","containerDetailValue","isFormValid"]],template:function(e,t){1&e&&(I.Xb(0,"div",0),I.Xb(1,"div",1),I.Xb(2,"div",2),I.Xb(3,"div",3),I.Xb(4,"container-form-detail",4),I.fc("isFormValid",(function(e){return t.isFormDetailValid(e)})),I.Wb(),I.Wb(),I.Wb(),I.Wb(),I.Wb()),2&e&&(I.Db(1),I.Ic("height",t.height,"px"),I.Db(3),I.pc("lease",t.lease)("leaseDetail",t.leaseDetail)("seaport",t.seaport)("containerCode",t.containerCode)("containerDetailValue",t.containerDetailValue))},directives:[T.d,oe.a,T.b,ne],styles:["container-form-content #container{max-width:1200px}"],encapsulation:2}),e})();var le=r("HX77"),be=r("2Vo4"),de=r("tk/3");let pe=(()=>{class e{constructor(e,t){this._httpClient=e,this.authService=t,this.onDataChanged=new be.a([]),this.onContainerChanged=new be.a([])}resolve(e){return this.authService.routerData=e,this.containerId=e.params.id,0==this.containerId?(this.onContainerChanged.next([]),this.getData()):new Promise((e,t)=>{Promise.all([this.getContainerById(this.containerId),this.getData()]).then(()=>{e()},t)})}getContainerById(e){let t={headers:new de.c({"Content-Type":"application/json",Authorization:this.authService.accessToken})};return new Promise((r,a)=>{this._httpClient.get(this.authService.apiUrl+"/sel/container/id/"+e,t).subscribe(e=>{this.container=e,this.onContainerChanged.next(e),r(e)},a)})}getData(){let e={headers:new de.c({"Content-Type":"application/json",Authorization:this.authService.accessToken})};return new Promise((t,r)=>{this._httpClient.get(this.authService.apiUrl+"/sel/container/data",e).subscribe(e=>{this.lease=e[0],this.leaseDetail=e[1],this.packageType=e[2],this.supplier=e[3],this.seaport=e[4],this.containerCode=e[5],this.onDataChanged.next(e),t(e)},r)})}createContainer(e){let t={headers:new de.c({"Content-Type":"application/json",Authorization:this.authService.accessToken})};return new Promise((r,a)=>{this._httpClient.post(this.authService.apiUrl+"/sel/container",e,t).subscribe(e=>{r(e)},a)})}updateContainer(e){let t={headers:new de.c({"Content-Type":"application/json",Authorization:this.authService.accessToken})};return new Promise((r,a)=>{this._httpClient.put(this.authService.apiUrl+"/sel/container",e,t).subscribe(e=>{r(e)},a)})}}return e.\u0275fac=function(t){return new(t||e)(I.bc(de.a),I.bc(V.a))},e.\u0275prov=I.Nb({token:e,factory:e.\u0275fac}),e})();var he=r("B9zo"),ue=r("Kj3r"),me=r("/uUt"),fe=r("0JVi"),ge=r("znSr");function xe(e,t){1&e&&(I.Xb(0,"span"),I.Lc(1,"Error:\xa0"),I.Wb())}function ve(e,t){if(1&e&&(I.Xb(0,"span",15),I.Lc(1,"Error\xa0"),I.Wb()),2&e){const e=I.jc();I.pc("matTooltip",e.errorMessage.value)("matTooltipPosition","left")}}function Ce(e,t){1&e&&(I.Xb(0,"span"),I.Lc(1,"Success\xa0"),I.Wb())}function we(e,t){if(1&e){const e=I.Yb();I.Xb(0,"button",16),I.fc("click",(function(t){I.Bc(e);const r=I.jc();return t.stopPropagation(),r.changeScreen(!0)})),I.Xb(1,"mat-icon"),I.Lc(2,"flip_to_front"),I.Wb(),I.Wb()}}function ye(e,t){if(1&e){const e=I.Yb();I.Xb(0,"button",16),I.fc("click",(function(t){I.Bc(e);const r=I.jc();return t.stopPropagation(),r.changeScreen(!1)})),I.Xb(1,"mat-icon"),I.Lc(2,"flip_to_back"),I.Wb(),I.Wb()}}const De=function(e,t){return{"red-600-fg":e,"green-600-fg":t}};let Xe=(()=>{class e{constructor(e,t){this.authService=e,this._fuseConfigService=t,this.collapsed=!0,this.fullScreen=!1,this.toggleSidebar=new I.o,this.showHideBar=new I.o,this.refreshPage=new I.o,this.submitForm=new I.o,this.input=new I.o,this._unsubscribeAll=new L.a}ngOnInit(){this.searchInput=new O.e(""),this.searchInput.valueChanges.pipe(Object(q.a)(this._unsubscribeAll),Object(ue.a)(300),Object(me.a)()).subscribe(e=>{this.input.emit(e)})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}changeScreen(e){this.fullScreen=e,this.authService.changeScreen.next(e),this._fuseConfigService.config=this.fullScreen?{layout:{navbar:{hidden:!0},toolbar:{hidden:!0},footer:{hidden:!0},sidepanel:{hidden:!0}}}:{layout:{navbar:{hidden:!1},toolbar:{hidden:!1},footer:{hidden:!0},sidepanel:{hidden:!0}}}}collapse(){this.collapsed=!0}expand(){this.collapsed=!1}}return e.\u0275fac=function(t){return new(t||e)(I.Rb(V.a),I.Rb(fe.b))},e.\u0275cmp=I.Lb({type:e,selectors:[["container-form-header"]],inputs:{sidebarName:"sidebarName",errorMessage:"errorMessage",validForm:"validForm"},outputs:{toggleSidebar:"toggleSidebar",showHideBar:"showHideBar",refreshPage:"refreshPage",submitForm:"submitForm",input:"input"},decls:25,vars:14,consts:[[1,"p-0","mat-elevation-z1"],["fxFlex","","fxFill","","fxLayout","row","fxLayoutAlign","start center"],["fxFlex","1 0 auto","fxLayout","row","fxLayoutAlign","start center"],[1,"px-8","px-md-16"],["mat-icon-button","","fxHide.gt-sm","","fxFlex","10","fxFlex.gt-sm","0",1,"sidebar-toggle","mr-12",3,"click"],["mat-icon-button","","fxHide","","fxShow.gt-sm","","fxFlex","10","fxFlex.gt-sm","0",1,"sidebar-toggle","mr-12",3,"click"],["fxHide","","fxShow.gt-sm","",1,"m-8","font-size-12",3,"ngClass"],[4,"ngIf"],["fxHide.gt-sm","",1,"m-8","font-size-12",3,"ngClass"],[3,"matTooltip","matTooltipPosition",4,"ngIf"],["fxFlex","0 1 auto","fxLayout","row","fxLayoutAlign","start center",1,""],[1,"toolbar-separator"],["type","button","mat-raised-button","","color","accent",1,"m-8",3,"click"],["mat-icon-button","","class","ml-8",3,"click",4,"ngIf"],["fxHide","","fxShow.gt-xs","",1,"toolbar-separator"],[3,"matTooltip","matTooltipPosition"],["mat-icon-button","",1,"ml-8",3,"click"]],template:function(e,t){1&e&&(I.Xb(0,"mat-toolbar",0),I.Xb(1,"div",1),I.Xb(2,"div",2),I.Xb(3,"div",3),I.Xb(4,"button",4),I.fc("click",(function(e){return t.toggleSidebar.emit(t.sidebarName)})),I.Xb(5,"mat-icon"),I.Lc(6,"menu"),I.Wb(),I.Wb(),I.Xb(7,"button",5),I.fc("click",(function(e){return t.showHideBar.emit()})),I.Xb(8,"mat-icon"),I.Lc(9,"menu"),I.Wb(),I.Wb(),I.Wb(),I.Xb(10,"div",6),I.Jc(11,xe,2,0,"span",7),I.Xb(12,"span"),I.Lc(13),I.Wb(),I.Wb(),I.Xb(14,"div",8),I.Jc(15,ve,2,2,"span",9),I.Jc(16,Ce,2,0,"span",7),I.Wb(),I.Wb(),I.Xb(17,"div",10),I.Sb(18,"div",11),I.Xb(19,"button",12),I.fc("click",(function(e){return t.submitForm.emit()})),I.Lc(20,"Submit"),I.Wb(),I.Sb(21,"div",11),I.Jc(22,we,3,0,"button",13),I.Jc(23,ye,3,0,"button",13),I.Sb(24,"div",14),I.Wb(),I.Wb(),I.Wb()),2&e&&(I.Db(10),I.pc("ngClass",I.sc(8,De,t.errorMessage.status,!t.errorMessage.status)),I.Db(1),I.pc("ngIf",t.errorMessage.status),I.Db(2),I.Mc(t.errorMessage.value),I.Db(1),I.pc("ngClass",I.sc(11,De,t.errorMessage.status,!t.errorMessage.status)),I.Db(1),I.pc("ngIf",t.errorMessage.status),I.Db(1),I.pc("ngIf",!t.errorMessage.status&&t.errorMessage.value),I.Db(6),I.pc("ngIf",!t.fullScreen),I.Db(1),I.pc("ngIf",t.fullScreen))},directives:[x.a,T.b,T.e,T.d,T.c,s.b,ge.b,d.a,j.q,ge.a,j.t,p.a],styles:["container-form-header{position:relative;display:-webkit-box;display:flex;-webkit-box-flex:0;flex:0 0 auto;z-index:4}container-form-header.below{z-index:2}container-form-header .mat-toolbar{position:relative;background:#fff!important;color:inherit!important}container-form-header .logo{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}container-form-header .logo .logo-icon{width:38px}container-form-header .chat-panel-toggle-button,container-form-header .language-button,container-form-header .quick-panel-toggle-button,container-form-header .user-button,container-form-header fuse-search-bar{min-width:64px;height:64px}@media screen and (max-width:599px){container-form-header .chat-panel-toggle-button,container-form-header .language-button,container-form-header .quick-panel-toggle-button,container-form-header .user-button,container-form-header fuse-search-bar{height:56px}}container-form-header .navbar-toggle-button{min-width:56px;height:56px}container-form-header .toolbar-separator{height:64px;width:1px;background:#e6e6e6}@media screen and (max-width:599px){container-form-header .toolbar-separator{height:56px}}container-form-header #container-detail-search-bar{display:-webkit-box;display:flex;-webkit-box-flex:0;flex:0 1 auto;min-width:64px;height:64px;font-size:13px}@media screen and (max-width:599px){container-form-header #container-detail-search-bar{height:56px}}container-form-header #container-detail-search-bar .container-detail-search-bar-content{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}container-form-header #container-detail-search-bar .container-detail-search-bar-content .container-detail-search-bar-collapser,container-form-header #container-detail-search-bar .container-detail-search-bar-content .container-detail-search-bar-expander{cursor:pointer;padding:0 20px;margin:0;width:64px!important;height:64px!important;line-height:64px!important}@media screen and (max-width:599px){container-form-header #container-detail-search-bar .container-detail-search-bar-content .container-detail-search-bar-collapser,container-form-header #container-detail-search-bar .container-detail-search-bar-content .container-detail-search-bar-expander{height:56px!important;line-height:56px!important}}container-form-header #container-detail-search-bar .container-detail-search-bar-content .container-detail-search-bar-loader{width:64px!important;height:64px!important;line-height:64px!important}@media screen and (max-width:599px){container-form-header #container-detail-search-bar .container-detail-search-bar-content .container-detail-search-bar-loader{height:56px!important;line-height:56px!important}}container-form-header #container-detail-search-bar .container-detail-search-bar-content .container-detail-search-bar-collapser{display:none}container-form-header #container-detail-search-bar .container-detail-search-bar-content #container-detail-search-bar-input{display:none;-webkit-box-flex:1;flex:1 0 auto;min-height:64px;font-size:16px;background-color:transparent;color:currentColor}container-form-header #container-detail-search-bar.expanded{position:absolute;top:0;right:0;bottom:0;left:0;z-index:10;background:#f5f5f5}container-form-header #container-detail-search-bar.expanded .container-detail-search-bar-content #container-detail-search-bar-input{display:-webkit-box;display:flex}container-form-header #container-detail-search-bar.expanded .container-detail-search-bar-content .container-detail-search-bar-collapser{display:block}"],encapsulation:2}),e})();var We=r("fE3o");const Se=["formDirective"];let ke=(()=>{class e{constructor(e){this.authService=e,this.height=560,this._unsubscribeAll=new L.a}ngOnInit(){this.authService.windowSizeChanged.pipe(Object(q.a)(this._unsubscribeAll)).subscribe(e=>{this.height=e.height-64-64-12}),this.authService.changeScreen.pipe(Object(q.a)(this._unsubscribeAll)).subscribe(e=>{this.height=e?this.authService.screenHeight-64-12:this.authService.screenHeight-64-64-12})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}}return e.\u0275fac=function(t){return new(t||e)(I.Rb(V.a))},e.\u0275cmp=I.Lb({type:e,selectors:[["container-form-sidebar"]],viewQuery:function(e,t){var r;1&e&&I.Sc(Se,!0),2&e&&I.wc(r=I.gc())&&(t.searchNgForm=r.first)},decls:5,vars:2,consts:[[1,"navbar-top"],["fxLayout","row","fxLayoutAlign","space-between center"],["fusePerfectScrollbar","",1,"navbar-scroll-container"],[1,"navbar-content"],[1,"nav","material2"]],template:function(e,t){1&e&&(I.Xb(0,"div",0),I.Sb(1,"div",1),I.Wb(),I.Xb(2,"div",2),I.Xb(3,"div",3),I.Sb(4,"div",4),I.Wb(),I.Wb()),2&e&&(I.Db(2),I.Ic("height",t.height,"px"))},directives:[T.d,T.c,oe.a],styles:["container-form-sidebar .navbar-top{background:#fff!important;padding:13px 0;-webkit-box-pack:center;justify-content:center;height:65px;border-bottom:1px solid #a3a3a3}container-form-sidebar .navbar-scroll-container{background:#fff!important}container-form-sidebar .navbar-scroll-container .navbar-content{padding-top:0}container-form-sidebar .navbar-scroll-container .navbar-content .nav.material2{overflow:hidden}container-form-sidebar .navbar-scroll-container .navbar-content .nav.material2 .info-line{padding-left:8px;padding-right:8px;margin-bottom:-4px}container-form-sidebar .navbar-scroll-container .navbar-content .nav.material2 .info-line .search-shortcut{font-size:12px;padding:4px;border:1px solid #039be5;border-radius:4px;margin-right:4px;margin-bottom:4px;cursor:pointer}container-form-sidebar .navbar-scroll-container .navbar-content .nav.material2 .group{margin:16px 16px 16px 8px;display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 0 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:relative;border-radius:2px;padding:28px 16px 8px;border:1px solid rgba(0,0,0,.12)}container-form-sidebar .navbar-scroll-container .navbar-content .nav.material2 .group h2{position:absolute;top:-8px;left:8px;margin:0;padding:0 8px;font-size:12px;font-weight:600;background:#fafafa;color:rgba(0,0,0,.54)}navbar .navbar-top{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-flex:1;flex:1 0 auto;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;min-height:64px;max-height:64px;height:64px;padding:12px 12px 12px 20px}@media screen and (max-width:599px){navbar .navbar-top{min-height:56px;max-height:56px;height:56px}}navbar .navbar-scroll-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:1;flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;background:-webkit-gradient(linear,left top,left bottom,color-stop(30%,transparent),color-stop(30%,transparent)),-webkit-gradient(linear,left top,left bottom,color-stop(0,rgba(0,0,0,.25)),color-stop(40%,transparent));background:linear-gradient(transparent 30%,transparent 0),linear-gradient(rgba(0,0,0,.25),transparent 40%);background-repeat:no-repeat;background-size:100% 40px,100% 10px;background-attachment:local,scroll}navbar .navbar-scroll-container .navbar-content{-webkit-box-flex:1;flex:1 1 auto;padding-top:32px}"],encapsulation:2}),e})();function _e(e,t){1&e&&(I.Xb(0,"div",7),I.Xb(1,"div",8),I.Xb(2,"div",9),I.Sb(3,"div",10),I.Xb(4,"div",11),I.Sb(5,"div",12),I.Wb(),I.Xb(6,"div",13),I.Sb(7,"div",12),I.Wb(),I.Wb(),I.Wb(),I.Wb())}function Fe(e,t){1&e&&(I.Xb(0,"fuse-sidebar",14),I.Xb(1,"div",15),I.Sb(2,"container-form-sidebar"),I.Wb(),I.Wb())}let Le=(()=>{class e{constructor(e,t,r,a,i,n){this._fuseSidebarService=e,this.authService=t,this.containerService=r,this.router=a,this.route=i,this.datePipe=n,this.height=560,this.sidebarPanel=!1,this.requestProcessing=!1,this.errorMessage={status:!1,value:""},this._unsubscribeAll=new L.a}ngOnInit(){this.id=parseInt(this.route.snapshot.params.id),this.authService.windowSizeChanged.pipe(Object(F.takeUntil)(this._unsubscribeAll)).subscribe(e=>{this.height=e.height-64-12-12-54-62}),this.authService.changeScreen.pipe(Object(F.takeUntil)(this._unsubscribeAll)).subscribe(e=>{this.height=e?this.authService.screenHeight-12-12-54-62:this.authService.screenHeight-64-12-12-54-62}),this.containerService.onContainerChanged.pipe(Object(F.takeUntil)(this._unsubscribeAll)).subscribe(e=>{e[0]&&e[0][0]&&(this.container=e[0][0])}),this.containerService.onDataChanged.pipe(Object(F.takeUntil)(this._unsubscribeAll)).subscribe(e=>{this.lease=e[0],this.leaseDetail=e[1],this.packageType=e[2],this.supplier=e[3],this.seaport=e[4],this.containerCode=e[5]})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}toggleSidebar(e){this._fuseSidebarService.getSidebar(e).toggleOpen()}newContainer(e){this.router.navigate(["/apps/workflow/container/list"])}showHideBar(e){this.sidebarPanel=!this.sidebarPanel}refreshPage(e){this.authService.refreshData(this.containerService)}submitForm(e){this.containerFormContentComponent.submitForm()}createContainer(e){this.requestProcessing=!0,delete e.lease_date,e.lease_id=e.lease_id.id,e.on_hire=this.datePipe.transform(e.on_hire,"yyyy-MM-dd"),e.off_hire&&""!=e.off_hire&&(e.off_hire=this.datePipe.transform(e.off_hire,"yyyy-MM-dd")),this.container?this.containerService.updateContainer(e).then(e=>{this.requestProcessing=!1,1==e.affectedRows?this.errorMessage={status:!1,value:"Success"}:(console.error(e),this.errorMessage={status:!0,value:"No id"})}).catch(e=>{this.requestProcessing=!1,console.error(e),this.errorMessage={status:!0,value:e.error&&e.error.sqlMessage?e.error.sqlMessage:"check console"}}):this.containerService.createContainer(e).then(e=>{this.requestProcessing=!1,e.insertId>0?(alert("success"),this.containerFormContentComponent.resetForm()):(console.error(e),this.errorMessage={status:!0,value:"No id"})}).catch(e=>{this.requestProcessing=!1,console.error(e),this.errorMessage={status:!0,value:e.error&&e.error.sqlMessage?e.error.sqlMessage:"check console"}})}clearMessage(e){this.errorMessage={status:!0,value:""}}}return e.\u0275fac=function(t){return new(t||e)(I.Rb(le.a),I.Rb(V.a),I.Rb(pe),I.Rb(a.g),I.Rb(a.a),I.Rb(j.f))},e.\u0275cmp=I.Lb({type:e,selectors:[["container-form"]],viewQuery:function(e,t){var r;1&e&&I.Sc(se,!0),2&e&&I.wc(r=I.gc())&&(t.containerFormContentComponent=r.first)},decls:7,vars:10,consts:[["class","spinner-wrapper",4,"ngIf"],[1,"page-layout","simple","left-sidebar","inner-scroll"],["class","sidebar","name","container-form-sidebar","position","left","lockedOpen","gt-md",4,"ngIf"],["fusePerfectScrollbar","",1,"center"],[3,"sidebarName","validForm","errorMessage","showHideBar","refreshPage","toggleSidebar","submitForm"],[1,"content","p-8"],[3,"lease","leaseDetail","seaport","containerCode","containerDetailValue","createContainer"],[1,"spinner-wrapper"],[1,"spinner"],[1,"inner"],[1,"gap"],[1,"left"],[1,"half-circle"],[1,"right"],["name","container-form-sidebar","position","left","lockedOpen","gt-md",1,"sidebar"],[1,"content"]],template:function(e,t){1&e&&(I.Jc(0,_e,8,0,"div",0),I.Xb(1,"div",1),I.Jc(2,Fe,3,0,"fuse-sidebar",2),I.Xb(3,"div",3),I.Xb(4,"container-form-header",4),I.fc("showHideBar",(function(e){return t.showHideBar(e)}))("refreshPage",(function(e){return t.refreshPage(e)}))("toggleSidebar",(function(e){return t.toggleSidebar(e)}))("submitForm",(function(e){return t.submitForm(e)})),I.Wb(),I.Xb(5,"div",5),I.Xb(6,"container-form-content",6),I.fc("createContainer",(function(e){return t.createContainer(e)})),I.Wb(),I.Wb(),I.Wb(),I.Wb()),2&e&&(I.pc("ngIf",t.requestProcessing),I.Db(2),I.pc("ngIf",t.sidebarPanel),I.Db(2),I.pc("sidebarName","container-form-sidebar")("validForm",t.errorMessage)("errorMessage",t.errorMessage),I.Db(2),I.pc("lease",t.lease)("leaseDetail",t.leaseDetail)("seaport",t.seaport)("containerCode",t.containerCode)("containerDetailValue",t.container))},directives:[j.t,he.a,oe.a,Xe,se,We.a,ke],styles:[""]}),e})();r.d(t,"ContainerFormModule",(function(){return qe}));const Ie=[{path:":id",component:Le,resolve:{data:pe}}];let qe=(()=>{class e{}return e.\u0275mod=I.Pb({type:e}),e.\u0275inj=I.Ob({factory:function(t){return new(t||e)},providers:[pe],imports:[[a.k.forChild(Ie),n.b,k.a,o.b,c.c,s.c,l.b,b.e,d.b,p.b,h.c,u.c,m.b,f.c,g.e,x.b,v.b,C.b,w.d,y.e,D.b,X.b,W.b,S.k,_.f,i.a]]}),e})()}}]);