(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"f+ep":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),i=function(){return function(){}}(),r=u("pMnS"),t=u("oBZk"),o=u("ZZ/e"),b=u("gIcY"),a=u("ZYCi"),s=u("Ip0R"),d=u("XNvx"),g=function(){function l(l,n,u){this.authService=l,this.router=n,this.loadingCtrl=u,this.isLoading=!1,this.isLogin=!0}return l.prototype.ngOnInit=function(){alert(this.authService.userIsAuthenticated)},l.prototype.login=function(l){var n=this;this.isLoading=!0,this.authService.login(),this.loadingCtrl.create({keyboardClose:!0,message:"Logging in..."}).then((function(l){l.present(),setTimeout((function(){n.isLoading=!1,l.dismiss(),n.router.navigateByUrl("/dashboard")}),1500)}))},l}(),c=e.pb({encapsulation:0,styles:[[""]],data:{}});function h(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,6,"ion-header",[],null,null,null,t.u,t.f)),e.qb(1,49152,null,0,o.z,[e.h,e.k,e.z],null,null),(l()(),e.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,t.D,t.o)),e.qb(3,49152,null,0,o.Ab,[e.h,e.k,e.z],null,null),(l()(),e.rb(4,0,null,0,2,"ion-title",[],null,null,null,t.C,t.n)),e.qb(5,49152,null,0,o.yb,[e.h,e.k,e.z],null,null),(l()(),e.Gb(-1,0,["Revolute Fitness"])),(l()(),e.rb(7,0,null,null,54,"ion-content",[["color","light"]],null,null,null,t.s,t.d)),e.qb(8,49152,null,0,o.s,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.rb(9,0,null,0,52,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,r=l.component;return"submit"===n&&(i=!1!==e.Cb(l,11).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Cb(l,11).onReset()&&i),"ngSubmit"===n&&(i=!1!==r.login(e.Cb(l,11))&&i),i}),null,null)),e.qb(10,16384,null,0,b.v,[],null,null),e.qb(11,4210688,[["login_form",4]],0,b.n,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Db(2048,null,b.a,null,[b.n]),e.qb(13,16384,null,0,b.m,[[4,b.a]],null,null),(l()(),e.rb(14,0,null,null,47,"ion-grid",[],null,null,null,t.t,t.e)),e.qb(15,49152,null,0,o.y,[e.h,e.k,e.z],null,null),(l()(),e.rb(16,0,null,0,45,"ion-row",[["color","dark"],["justify-content-center",""]],null,null,null,t.y,t.j)),e.qb(17,49152,null,0,o.hb,[e.h,e.k,e.z],null,null),e.qb(18,16384,null,0,o.c,[e.k],null,null),(l()(),e.rb(19,0,null,0,42,"ion-col",[["align-self-center",""],["size-lg","7"],["size-md","8"],["size-xs","12"]],null,null,null,t.r,t.c)),e.qb(20,49152,null,0,o.r,[e.h,e.k,e.z],null,null),e.qb(21,16384,null,0,o.c,[e.k],null,null),(l()(),e.rb(22,0,null,0,3,"div",[["text-center",""]],null,null,null,null,null)),e.qb(23,16384,null,0,o.c,[e.k],null,null),(l()(),e.rb(24,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Login"])),(l()(),e.rb(26,0,null,0,24,"div",[["padding",""]],null,null,null,null,null)),e.qb(27,16384,null,0,o.c,[e.k],null,null),(l()(),e.rb(28,0,null,null,11,"ion-item",[],null,null,null,t.w,t.h)),e.qb(29,49152,null,0,o.F,[e.h,e.k,e.z],null,null),(l()(),e.rb(30,0,null,0,9,"ion-input",[["email",""],["name","email"],["ngModel",""],["placeholder","your@email.com"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,34)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Cb(l,34)._handleInputEvent(u.target)&&i),i}),t.v,t.g)),e.qb(31,16384,null,0,b.q,[],{required:[0,"required"]},null),e.qb(32,16384,null,0,b.b,[],{email:[0,"email"]},null),e.Db(1024,null,b.i,(function(l,n){return[l,n]}),[b.q,b.b]),e.qb(34,16384,null,0,o.Lb,[e.k],null,null),e.Db(1024,null,b.j,(function(l){return[l]}),[o.Lb]),e.qb(36,671744,null,0,b.o,[[2,b.a],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],model:[1,"model"]},null),e.Db(2048,null,b.k,null,[b.o]),e.qb(38,16384,null,0,b.l,[[4,b.k]],null,null),e.qb(39,49152,null,0,o.E,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.rb(40,0,null,null,10,"ion-item",[],null,null,null,t.w,t.h)),e.qb(41,49152,null,0,o.F,[e.h,e.k,e.z],null,null),(l()(),e.rb(42,0,null,0,8,"ion-input",[["minLength","6"],["name","password"],["ngModel",""],["password",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,45)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Cb(l,45)._handleInputEvent(u.target)&&i),i}),t.v,t.g)),e.qb(43,16384,null,0,b.q,[],{required:[0,"required"]},null),e.Db(1024,null,b.i,(function(l){return[l]}),[b.q]),e.qb(45,16384,null,0,o.Lb,[e.k],null,null),e.Db(1024,null,b.j,(function(l){return[l]}),[o.Lb]),e.qb(47,671744,null,0,b.o,[[2,b.a],[6,b.i],[8,null],[6,b.j]],{name:[0,"name"],model:[1,"model"]},null),e.Db(2048,null,b.k,null,[b.o]),e.qb(49,16384,null,0,b.l,[[4,b.k]],null,null),e.qb(50,49152,null,0,o.E,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.rb(51,0,null,0,4,"div",[["padding-top",""]],null,null,null,null,null)),e.qb(52,16384,null,0,o.c,[e.k],null,null),(l()(),e.rb(53,0,null,null,2,"ion-button",[["color","dark"],["expand","full"],["size","large"],["type","submit"]],null,null,null,t.q,t.b)),e.qb(54,49152,null,0,o.i,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(l()(),e.Gb(-1,0,["Login"])),(l()(),e.rb(56,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),e.rb(57,0,null,null,4,"ion-button",[["expand","full"],["routerLink","/register"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Cb(l,59).onClick()&&i),"click"===n&&(i=!1!==e.Cb(l,60).onClick(u)&&i),i}),t.q,t.b)),e.qb(58,49152,null,0,o.i,[e.h,e.k,e.z],{expand:[0,"expand"],size:[1,"size"]},null),e.qb(59,16384,null,0,a.n,[a.m,a.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.qb(60,737280,null,0,o.Jb,[s.g,o.Gb,e.k,a.m,[2,a.n]],null,null),(l()(),e.Gb(-1,0,["Register"]))],(function(l,n){l(n,8,0,"light"),l(n,31,0,""),l(n,32,0,""),l(n,36,0,"email",""),l(n,39,0,"email","your@email.com","","email"),l(n,43,0,""),l(n,47,0,"password",""),l(n,50,0,"password","Password","","password"),l(n,54,0,"dark","full","large","submit"),l(n,58,0,"full","large"),l(n,59,0,"/register"),l(n,60,0)}),(function(l,n){l(n,9,0,e.Cb(n,13).ngClassUntouched,e.Cb(n,13).ngClassTouched,e.Cb(n,13).ngClassPristine,e.Cb(n,13).ngClassDirty,e.Cb(n,13).ngClassValid,e.Cb(n,13).ngClassInvalid,e.Cb(n,13).ngClassPending),l(n,30,0,e.Cb(n,31).required?"":null,e.Cb(n,38).ngClassUntouched,e.Cb(n,38).ngClassTouched,e.Cb(n,38).ngClassPristine,e.Cb(n,38).ngClassDirty,e.Cb(n,38).ngClassValid,e.Cb(n,38).ngClassInvalid,e.Cb(n,38).ngClassPending),l(n,42,0,e.Cb(n,43).required?"":null,e.Cb(n,49).ngClassUntouched,e.Cb(n,49).ngClassTouched,e.Cb(n,49).ngClassPristine,e.Cb(n,49).ngClassDirty,e.Cb(n,49).ngClassValid,e.Cb(n,49).ngClassInvalid,e.Cb(n,49).ngClassPending)}))}function C(l){return e.Hb(0,[(l()(),e.rb(0,0,null,null,1,"app-login",[],null,null,null,h,c)),e.qb(1,114688,null,0,g,[d.a,a.m,o.Eb],null,null)],(function(l,n){l(n,1,0)}),null)}var p=e.nb("app-login",g,C,{},{},[]),q=function(){return function(){}}();u.d(n,"LoginPageModuleNgFactory",(function(){return m}));var m=e.ob(i,[],(function(l){return e.zb([e.Ab(512,e.j,e.ab,[[8,[r.a,p]],[3,e.j],e.x]),e.Ab(4608,s.i,s.h,[e.u,[2,s.o]]),e.Ab(4608,b.t,b.t,[]),e.Ab(4608,o.a,o.a,[e.z,e.g]),e.Ab(4608,o.Fb,o.Fb,[o.a,e.j,e.q]),e.Ab(4608,o.Ib,o.Ib,[o.a,e.j,e.q]),e.Ab(1073742336,s.b,s.b,[]),e.Ab(1073742336,b.s,b.s,[]),e.Ab(1073742336,b.h,b.h,[]),e.Ab(1073742336,o.Cb,o.Cb,[]),e.Ab(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),e.Ab(1073742336,q,q,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,a.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);