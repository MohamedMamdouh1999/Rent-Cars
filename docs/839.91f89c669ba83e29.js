"use strict";(self.webpackChunkRent_Cars=self.webpackChunkRent_Cars||[]).push([[839],{7839:(M,s,c)=>{c.r(s),c.d(s,{CarDetailsModule:()=>O});var r=c(6814),a=c(7472),g=c(8645),l=c(9773),n=c(4946),p=c(7664);function C(t,m){if(1&t&&(n.TgZ(0,"li",10),n._UZ(1,"img",17),n.TgZ(2,"span"),n._uU(3),n.qZA()()),2&t){const o=m.$implicit;n.xp6(3),n.Oqu(o)}}const d=[{path:"",component:(()=>{class t{constructor(o){this.carsService=o,this.car={},this.id=0,this.destroySubject=new g.x}ngOnInit(){this.id&&this.getSingleCar(this.id),window.scrollTo(0,0)}getSingleCar(o){this.carsService.getSingleCar(o).pipe((0,l.R)(this.destroySubject)).subscribe({next:e=>this.car=e})}ngOnDestroy(){this.destroySubject.next()}static#n=this.\u0275fac=function(e){return new(e||t)(n.Y36(p.y))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-car"]],inputs:{id:"id"},decls:43,vars:9,consts:[[1,"container","d-flex","align-items-center"],["routerLink","/home"],["routerLink","/all-cars"],[1,"intro-logo-mobile","d-xl-none","d-flex","align-items-start","justify-content-start","py-5"],["loading","lazy","src","assets/images/car-bg.png","alt","Rent Cars"],[1,"container","h-100","d-flex","align-items-center","justify-content-xl-end"],[1,"intro-title"],[1,"d-flex","align-items-center","justify-content-center"],[1,"list-unstyled"],["class","d-flex align-items-center",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],["loading","lazy","src","assets/icons/user.svg","alt","Rent Cars"],["loading","lazy","src","assets/icons/auto.svg","alt","Rent Cars"],[1,"fa-solid","fa-calendar-days"],["loading","lazy","src","assets/icons/door.svg","alt","Rent Cars"],[1,"fa-solid","fa-palette"],[1,"fa-solid","fa-gas-pump"],["loading","lazy","src","assets/icons/air.svg","alt","Rent Cars"]],template:function(e,i){1&e&&(n.TgZ(0,"section")(1,"h4",0)(2,"a",1),n._uU(3,"Home"),n.qZA(),n._uU(4,"/ "),n.TgZ(5,"a",2),n._uU(6,"Cars"),n.qZA(),n._uU(7),n.qZA(),n.TgZ(8,"div",3),n._UZ(9,"img",4),n.qZA(),n.TgZ(10,"div",5)(11,"div")(12,"div",6)(13,"span",7),n._uU(14,"WHY CHOOSE US"),n.qZA(),n.TgZ(15,"h2"),n._uU(16,"We offer the best experience with our rental deals"),n.qZA()(),n.TgZ(17,"ul",8),n.YNc(18,C,4,1,"li",9),n.TgZ(19,"li",10),n._UZ(20,"img",11),n.TgZ(21,"span"),n._uU(22),n.qZA()(),n.TgZ(23,"li",10),n._UZ(24,"img",12),n.TgZ(25,"span"),n._uU(26),n.qZA()(),n.TgZ(27,"li",10),n._UZ(28,"i",13),n.TgZ(29,"span"),n._uU(30),n.qZA()(),n.TgZ(31,"li",10),n._UZ(32,"img",14),n.TgZ(33,"span"),n._uU(34),n.qZA()(),n.TgZ(35,"li",10),n._UZ(36,"i",15),n.TgZ(37,"span"),n._uU(38),n.qZA()(),n.TgZ(39,"li",10),n._UZ(40,"i",16),n.TgZ(41,"span"),n._uU(42),n.qZA()()()()()()),2&e&&(n.xp6(7),n.AsE(" /",i.car.make," ",i.car.model," "),n.xp6(11),n.Q6J("ngForOf",i.car.features),n.xp6(4),n.hij("",i.car.owners," Passagers"),n.xp6(4),n.Oqu(i.car.transmission),n.xp6(4),n.Oqu(i.car.year),n.xp6(4),n.hij("",2*i.car.owners," Doors"),n.xp6(4),n.Oqu(i.car.color),n.xp6(4),n.Oqu(i.car.fuelType))},dependencies:[r.sg,a.rH],styles:["section[_ngcontent-%COMP%]{padding-block:40px}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:24px;font-weight:500;color:#959595;margin-bottom:20px}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-color)}section[_ngcontent-%COMP%]   .intro-logo-mobile[_ngcontent-%COMP%]{margin-block:24px;background-size:contain;background-repeat:no-repeat;background-position:left center;background-image:url(car-pattern.2a8f382fc662966b.svg)}section[_ngcontent-%COMP%]   .intro-logo-mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:95%}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .intro-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:181px;height:42px;font-size:14px;font-weight:500;border-radius:8px;color:var(--main-color);background-color:color-mix(in srgb,var(--main-color) 10%,#FFF)}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .intro-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;font-size:18px;font-weight:500;margin-top:16px;margin-bottom:24px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:4px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px;color:#959595;margin-right:6px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#959595}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type){margin-top:10px}@media screen and (min-width: 1200px){section[_ngcontent-%COMP%]{height:100vh;padding-block:0px;background-repeat:no-repeat;background-size:auto,contain;background-position:left center;background-image:url(car-bg.20b50cbb50967519.png),url(car-pattern.2a8f382fc662966b.svg)}section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:32px;margin-block:40px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:576px;padding-block:100px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .intro-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:38px;margin-top:32px;margin-bottom:80px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-of-type){margin-top:13px}}"]})}return t})()}];let u=(()=>{class t{static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[a.Bz.forChild(d),a.Bz]})}return t})(),O=(()=>{class t{static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[r.ez,u]})}return t})()}}]);