(self.webpackChunkwallet_client=self.webpackChunkwallet_client||[]).push([[757],{757:(e,t,s)=>{"use strict";s.r(t),s.d(t,{StockModule:()=>w});var r=s(8583),o=s(8994),n=s(8668),i=s(5240),c=s(639),l=s(8002),a=s(2340),d=s(1841);let u=(()=>{class e{constructor(e){this.http=e,this.baseUrl=`${a.N.baseUrl}`}getStocks(){return this.http.get(`${this.baseUrl}/api/stocks`).pipe((0,l.U)(e=>e.stocks))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(d.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=s(4853),g=s(3013),p=s(9529),v=s(665),Z=s(6516),f=s(3928),k=s(4207);function S(e,t){if(1&e&&(c.TgZ(0,"div",14),c._uU(1),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.hij(" ",e.errors,"")}}const m=[{path:"",component:(()=>{class e{constructor(e,t,s){this.stockService=e,this.walletService=t,this.messageService=s,this.transfer=0,this.transferDescription="",this.query="",this.stocks=[],this.wallets=[],this.selectedStock=null,this.selectedWallet=new i.w,this.errors=""}ngOnInit(){this.stockService.getStocks().subscribe(e=>{this.stocks=e})}onTransfer(){var e,t;this.walletService.transfer(null===(e=this.selectedWallet)||void 0===e?void 0:e.id,this.transfer,this.transferDescription,null===(t=this.selectedStock)||void 0===t?void 0:t.wallet_id).subscribe(e=>{window.location.reload(),this.messageService.add({severity:"success",summary:"SUCCESS",detail:e.message})},e=>{var t;this.errors=(null===(t=e.error.message)||void 0===t?void 0:t.join(", "))||e.error.error})}searchWallets(){this.walletService.searchWallets(this.query).subscribe(e=>{this.wallets=e})}selectWallet(e){this.selectedWallet=e}onDeposit(){var e,t;this.walletService.deposit(this.transfer,this.transferDescription,null===(e=this.selectedStock)||void 0===e?void 0:e.wallet_id,null===(t=this.selectedStock)||void 0===t?void 0:t.wallet_id).subscribe(e=>{this.selectedStock.balance=+this.selectedStock.balance+ +this.transfer,this.transferDescription="",this.errors="",this.messageService.add({severity:"success",summary:"SUCCESS",detail:e.message})},e=>{var t;this.errors=(null===(t=e.error.message)||void 0===t?void 0:t.join(", "))||e.error.error})}onWithdraw(){var e,t;this.walletService.withdraw(this.transfer,this.transferDescription,null===(e=this.selectedStock)||void 0===e?void 0:e.wallet_id,null===(t=this.selectedStock)||void 0===t?void 0:t.wallet_id).subscribe(e=>{this.selectedStock.balance=+this.selectedStock.balance-+this.transfer,this.transferDescription="",this.errors="",this.messageService.add({severity:"success",summary:"SUCCESS",detail:e.message})},e=>{var t;this.errors=(null===(t=e.error.message)||void 0===t?void 0:t.join(", "))||e.error.error})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(u),c.Y36(h.X),c.Y36(g.ez))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-stock"]],decls:39,vars:13,consts:[[1,"grid"],[1,"col-6"],[1,"mb-2"],[1,"grid","mb-4"],[1,"col-4"],["placeholder","Select stock","optionLabel","name",1,"col-4",3,"options","ngModel","ngModelChange"],["field","description","placeholder","Ex: 4bfc1524-ccd3-490a-9dee-a0c1a46c8bc0",1,"col-4",3,"ngModel","autofocus","size","suggestions","ngModelChange","completeMethod","onSelect"],["type","number","pInputText","",1,"col-4",3,"ngModel","ngModelChange"],["type","text","pInputText","",1,"col-4",3,"ngModel","ngModelChange"],["style","color:red;",4,"ngIf"],["pButton","","type","button","label","Deposit",1,"mt-4","mr-2",3,"click"],["pButton","","type","button","label","Withdraw",1,"mt-4","mr-2",3,"click"],["pButton","","type","button","label","Transfer",1,"mt-4",3,"click"],[1,"mt-4","stock-info"],[2,"color","red"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h4",2),c._uU(3," Transfer money to wallet: "),c.qZA(),c.TgZ(4,"div"),c.TgZ(5,"div",3),c.TgZ(6,"span",4),c._uU(7,"Select stock: "),c.qZA(),c.TgZ(8,"p-dropdown",5),c.NdJ("ngModelChange",function(e){return t.selectedStock=e}),c.qZA(),c.qZA(),c.TgZ(9,"div",3),c.TgZ(10,"span",4),c._uU(11,"Find wallet address: User, stock or Stock (Skip for Deposit and Withdraw)"),c.qZA(),c.TgZ(12,"p-autoComplete",6),c.NdJ("ngModelChange",function(e){return t.query=e})("completeMethod",function(){return t.searchWallets()})("onSelect",function(e){return t.selectWallet(e)}),c.qZA(),c.qZA(),c.TgZ(13,"div",3),c.TgZ(14,"span",4),c._uU(15,"Amount: "),c.qZA(),c.TgZ(16,"input",7),c.NdJ("ngModelChange",function(e){return t.transfer=e}),c.qZA(),c.qZA(),c.TgZ(17,"div",0),c.TgZ(18,"span",4),c._uU(19,"Description: "),c.qZA(),c.TgZ(20,"input",8),c.NdJ("ngModelChange",function(e){return t.transferDescription=e}),c.qZA(),c.qZA(),c.qZA(),c.YNc(21,S,2,1,"div",9),c.TgZ(22,"button",10),c.NdJ("click",function(){return t.onDeposit()}),c.qZA(),c.TgZ(23,"button",11),c.NdJ("click",function(){return t.onWithdraw()}),c.qZA(),c.TgZ(24,"button",12),c.NdJ("click",function(){return t.onTransfer()}),c.qZA(),c.qZA(),c.TgZ(25,"div",1),c.TgZ(26,"div",13),c.TgZ(27,"div"),c._uU(28," Stock: "),c.TgZ(29,"strong"),c._uU(30),c.qZA(),c.qZA(),c.TgZ(31,"div"),c._uU(32," Balance: "),c.TgZ(33,"strong"),c._uU(34),c.qZA(),c.qZA(),c.TgZ(35,"div"),c._uU(36," Wallet address: "),c.TgZ(37,"strong"),c._uU(38),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(8),c.Q6J("options",t.stocks)("ngModel",t.selectedStock),c.xp6(4),c.Q6J("ngModel",t.query)("autofocus",!0)("size",30)("suggestions",t.wallets),c.xp6(4),c.Q6J("ngModel",t.transfer),c.xp6(4),c.Q6J("ngModel",t.transferDescription),c.xp6(1),c.Q6J("ngIf",t.errors),c.xp6(9),c.Oqu(null==t.selectedStock?null:t.selectedStock.name),c.xp6(4),c.AsE("",(+(null==t.selectedStock?null:t.selectedStock.balance)).toFixed(2)," ",null==t.selectedStock?null:t.selectedStock.currency,""),c.xp6(4),c.Oqu(null==t.selectedStock?null:t.selectedStock.wallet_address))},directives:[p.Lt,v.JJ,v.On,Z.Qc,v.wV,v.Fj,f.o,r.O5,k.Hq],styles:[".stock-info[_ngcontent-%COMP%]{background:#ccc;border-radius:12px;padding:16px}"]}),e})(),canActivate:[n.a]}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.Bz.forChild(m)],o.Bz]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.ez,b,v.u5,v.UX,f.j,k.hJ,p.kW,Z.WN]]}),e})()}}]);