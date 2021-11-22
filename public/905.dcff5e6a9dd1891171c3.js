(self.webpackChunkwallet_client=self.webpackChunkwallet_client||[]).push([[905],{905:(e,t,s)=>{"use strict";s.r(t),s.d(t,{TeamModule:()=>q});var r=s(8583),n=s(8994),i=s(8668),l=s(5240),a=s(639),o=s(8002),c=s(2340),d=s(1841);let u=(()=>{class e{constructor(e){this.http=e,this.baseUrl=`${c.N.baseUrl}`}getTeams(){return this.http.get(`${this.baseUrl}/api/teams`).pipe((0,o.U)(e=>e.teams))}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(d.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=s(4853),g=s(3013),p=s(9529),m=s(665),v=s(6516),T=s(3928),Z=s(4207);function f(e,t){if(1&e&&(a.TgZ(0,"div",14),a._uU(1),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.hij(" ",e.errors,"")}}const b=[{path:"",component:(()=>{class e{constructor(e,t,s){this.teamService=e,this.walletService=t,this.messageService=s,this.transfer=0,this.transferDescription="",this.query="",this.teams=[],this.wallets=[],this.selectedTeam=null,this.selectedWallet=new l.w,this.errors=""}ngOnInit(){this.teamService.getTeams().subscribe(e=>{this.teams=e})}onTransfer(){var e,t;this.walletService.transfer(null===(e=this.selectedWallet)||void 0===e?void 0:e.id,this.transfer,this.transferDescription,null===(t=this.selectedTeam)||void 0===t?void 0:t.wallet_id).subscribe(e=>{this.messageService.add({severity:"success",summary:"SUCCESS",detail:e.message}),window.location.reload()},e=>{var t;this.errors=(null===(t=e.error.message)||void 0===t?void 0:t.join(", "))||e.error.error})}searchWallets(){this.walletService.searchWallets(this.query).subscribe(e=>{this.wallets=e})}selectWallet(e){this.selectedWallet=e}onDeposit(){var e,t;this.walletService.deposit(this.transfer,this.transferDescription,null===(e=this.selectedTeam)||void 0===e?void 0:e.wallet_id,null===(t=this.selectedTeam)||void 0===t?void 0:t.wallet_id).subscribe(e=>{this.selectedTeam.balance=+this.selectedTeam.balance+ +this.transfer,this.transferDescription="",this.errors="",this.messageService.add({severity:"success",summary:"SUCCESS",detail:e.message})},e=>{var t;this.errors=(null===(t=e.error.message)||void 0===t?void 0:t.join(", "))||e.error.error})}onWithdraw(){var e,t;this.walletService.withdraw(this.transfer,this.transferDescription,null===(e=this.selectedTeam)||void 0===e?void 0:e.wallet_id,null===(t=this.selectedTeam)||void 0===t?void 0:t.wallet_id).subscribe(e=>{this.selectedTeam.balance=+this.selectedTeam.balance-+this.transfer,this.transferDescription="",this.errors="",this.messageService.add({severity:"success",summary:"SUCCESS",detail:e.message})},e=>{var t;this.errors=(null===(t=e.error.message)||void 0===t?void 0:t.join(", "))||e.error.error})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(u),a.Y36(h.X),a.Y36(g.ez))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-team"]],decls:39,vars:13,consts:[[1,"grid"],[1,"col-6"],[1,"mb-2"],[1,"grid","mb-4"],[1,"col-4"],["placeholder","Select team","optionLabel","name",1,"col-4",3,"options","ngModel","ngModelChange"],["field","description","placeholder","Ex: 4bfc1524-ccd3-490a-9dee-a0c1a46c8bc0",1,"col-4",3,"ngModel","autofocus","size","suggestions","ngModelChange","completeMethod","onSelect"],["type","number","pInputText","",1,"col-4",3,"ngModel","ngModelChange"],["type","text","pInputText","",1,"col-4",3,"ngModel","ngModelChange"],["style","color:red;",4,"ngIf"],["pButton","","type","button","label","Deposit",1,"mt-4","mr-2",3,"click"],["pButton","","type","button","label","Withdraw",1,"mt-4","mr-2",3,"click"],["pButton","","type","button","label","Transfer",1,"mt-4",3,"click"],[1,"mt-4","team-info"],[2,"color","red"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h4",2),a._uU(3," Transfer money to wallet: "),a.qZA(),a.TgZ(4,"div"),a.TgZ(5,"div",3),a.TgZ(6,"span",4),a._uU(7,"Select team: "),a.qZA(),a.TgZ(8,"p-dropdown",5),a.NdJ("ngModelChange",function(e){return t.selectedTeam=e}),a.qZA(),a.qZA(),a.TgZ(9,"div",3),a.TgZ(10,"span",4),a._uU(11,"Find wallet address: User, team or Stock (Skip for Deposit and Withdraw)"),a.qZA(),a.TgZ(12,"p-autoComplete",6),a.NdJ("ngModelChange",function(e){return t.query=e})("completeMethod",function(){return t.searchWallets()})("onSelect",function(e){return t.selectWallet(e)}),a.qZA(),a.qZA(),a.TgZ(13,"div",3),a.TgZ(14,"span",4),a._uU(15,"Amount: "),a.qZA(),a.TgZ(16,"input",7),a.NdJ("ngModelChange",function(e){return t.transfer=e}),a.qZA(),a.qZA(),a.TgZ(17,"div",0),a.TgZ(18,"span",4),a._uU(19,"Description: "),a.qZA(),a.TgZ(20,"input",8),a.NdJ("ngModelChange",function(e){return t.transferDescription=e}),a.qZA(),a.qZA(),a.qZA(),a.YNc(21,f,2,1,"div",9),a.TgZ(22,"button",10),a.NdJ("click",function(){return t.onDeposit()}),a.qZA(),a.TgZ(23,"button",11),a.NdJ("click",function(){return t.onWithdraw()}),a.qZA(),a.TgZ(24,"button",12),a.NdJ("click",function(){return t.onTransfer()}),a.qZA(),a.qZA(),a.TgZ(25,"div",1),a.TgZ(26,"div",13),a.TgZ(27,"div"),a._uU(28," Team: "),a.TgZ(29,"strong"),a._uU(30),a.qZA(),a.qZA(),a.TgZ(31,"div"),a._uU(32," Balance: "),a.TgZ(33,"strong"),a._uU(34),a.qZA(),a.qZA(),a.TgZ(35,"div"),a._uU(36," Wallet address: "),a.TgZ(37,"strong"),a._uU(38),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(8),a.Q6J("options",t.teams)("ngModel",t.selectedTeam),a.xp6(4),a.Q6J("ngModel",t.query)("autofocus",!0)("size",30)("suggestions",t.wallets),a.xp6(4),a.Q6J("ngModel",t.transfer),a.xp6(4),a.Q6J("ngModel",t.transferDescription),a.xp6(1),a.Q6J("ngIf",t.errors),a.xp6(9),a.Oqu(null==t.selectedTeam?null:t.selectedTeam.name),a.xp6(4),a.AsE("",(+(null==t.selectedTeam?null:t.selectedTeam.balance)).toFixed(2)," ",null==t.selectedTeam?null:t.selectedTeam.currency,""),a.xp6(4),a.Oqu(null==t.selectedTeam?null:t.selectedTeam.wallet_address))},directives:[p.Lt,m.JJ,m.On,v.Qc,m.wV,m.Fj,T.o,r.O5,Z.Hq],styles:[".team-info[_ngcontent-%COMP%]{background:#ccc;border-radius:12px;padding:16px}"]}),e})(),canActivate:[i.a]}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.Bz.forChild(b)],n.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.ez,w,m.u5,m.UX,T.j,Z.hJ,p.kW,v.WN]]}),e})()}}]);