(self.webpackChunkwallet_client=self.webpackChunkwallet_client||[]).push([[422],{5422:(e,r,o)=>{"use strict";o.r(r),o.d(r,{AuthModule:()=>g});var t=o(8583),i=o(8994),n=o(665),s=o(639),l=o(3071),u=o(3928),a=o(4207),c=o(9529);function p(e,r){if(1&e&&(s.TgZ(0,"div",11),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij(" ",e.errors,"")}}const d=[{path:"login",component:(()=>{class e{constructor(e,r,o){this.fb=e,this.userService=r,this.router=o,this.users=[{email:"tom@gmail.com",password:"12345678"},{email:"jerry@gmail.com",password:"12345678"}],this.currentUser=this.users[0],this.errors="",this.loginForm=this.fb.group({email:[this.currentUser.email,[n.kI.required,n.kI.email]],password:[this.currentUser.password,[n.kI.required,n.kI.minLength(6)]]})}ngOnInit(){}onSubmit(){this.userService.login({user:this.loginForm.value}).subscribe(e=>{localStorage.setItem("token",`Bearer ${e.token}`),this.router.navigate(["/my-wallet"])},e=>{var r;this.errors=(null===(r=e.error.message)||void 0===r?void 0:r.join(", "))||e.error.error})}selectUser(e){this.currentUser=e,this.loginForm.patchValue({email:e.email,password:e.password})}}return e.\u0275fac=function(r){return new(r||e)(s.Y36(n.qu),s.Y36(l.K),s.Y36(i.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-login"]],decls:23,vars:4,consts:[[1,"form_login",3,"formGroup","ngSubmit"],[1,"mb-3"],["style","color:red;",4,"ngIf"],[1,"field","grid"],["for","email",1,"col-fixed",2,"width","300px"],[1,"col"],["id","email","formControlName","email","type","text","pInputText",""],["for","password",1,"col-fixed",2,"width","300px"],["id","password","formControlName","password","type","password","pInputText",""],["pButton","","type","submit","label","Login"],["optionLabel","email",3,"options","ngModel","ngModelChange","onChange"],[2,"color","red"]],template:function(e,r){1&e&&(s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return r.onSubmit()}),s.TgZ(1,"h2",1),s._uU(2,"Login form"),s.qZA(),s.YNc(3,p,2,1,"div",2),s.TgZ(4,"div",3),s.TgZ(5,"label",4),s._uU(6,"Email"),s.qZA(),s.TgZ(7,"div",5),s._UZ(8,"input",6),s.qZA(),s.qZA(),s._UZ(9,"br"),s.TgZ(10,"div",3),s.TgZ(11,"label",7),s._uU(12,"Password"),s.qZA(),s.TgZ(13,"div",5),s._UZ(14,"input",8),s.qZA(),s.qZA(),s._UZ(15,"br"),s._UZ(16,"button",9),s._UZ(17,"br"),s._UZ(18,"br"),s.qZA(),s.TgZ(19,"div"),s.TgZ(20,"div"),s._uU(21,"Select user:"),s.qZA(),s.TgZ(22,"p-dropdown",10),s.NdJ("ngModelChange",function(e){return r.currentUser=e})("onChange",function(e){return r.selectUser(e.value)}),s.qZA(),s.qZA()),2&e&&(s.Q6J("formGroup",r.loginForm),s.xp6(3),s.Q6J("ngIf",r.errors),s.xp6(19),s.Q6J("options",r.users)("ngModel",r.currentUser))},directives:[n._Y,n.JL,n.sg,t.O5,n.Fj,n.JJ,n.u,u.o,a.Hq,c.Lt,n.On],styles:[".form_login[_ngcontent-%COMP%]{left:50%;top:40%;position:absolute;transform:translate(-50%,-50%);width:300px;height:500px;background-color:#ccc;padding:16px}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.Bz.forChild(d)],i.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[t.ez,m,n.u5,n.UX,u.j,a.hJ,c.kW]]}),e})()}}]);