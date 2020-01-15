require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/blue.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/admin-abo/admin-abo.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit{\n  width: 20px;\n}\nmat-table{\n  margin : auto 5%;\n  padding: 2%;\n  justify-content: center;\n}\n\nmat-select{\n  margin-top: 5%;\n}\n\nmat-cell{\n  justify-content: center;\n  font-size: large;\n}\n\nmat-header-cell{\n  font-size: larger;\n  justify-content: center;\n}\n\n.mat-column-Action{\n  flex: 0 0 20%;\n}\n\n.del-button {\n  font-size: large;\n  align-content: center;\n}\n");

/***/ }),

/***/ "./app/admin-abo/admin-abo.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"isLoading\" style=\"margin: auto\">\n  <mat-spinner style=\"margin: auto\"></mat-spinner>\n</mat-card>\n\n<mat-table *ngIf=\"!isLoading\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\n\n  <!-- LastName Column -->\n  <ng-container matColumnDef=\"LastName\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Nom</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.lastName}}</mat-cell>\n  </ng-container>\n\n  <!-- FirstName Column -->\n  <ng-container matColumnDef=\"FirstName\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Prenom</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.firstName}}</mat-cell>\n  </ng-container>\n\n  <!-- Abonnement Column -->\n  <ng-container matColumnDef=\"Abonnement\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Abonnement</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.abonnement}}</mat-cell>\n  </ng-container>\n\n  <!-- Abonnement Type Column -->\n  <ng-container matColumnDef=\"AboType\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Type Abonnement</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.AboType}}</mat-cell>\n  </ng-container>\n\n  <!-- Day Column -->\n  <ng-container matColumnDef=\"Day\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Jour</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.Day}}</mat-cell>\n  </ng-container>\n\n  <!-- ReSubscribe Column-->\n  <ng-container matColumnDef=\"Action\">\n\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n\n    <mat-cell *matCellDef=\"let element\">\n      <button mat-flat-button  color=\"primary\" matTooltip=\"Renew\">\n        <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"reSubcribe(element)\">replay</mat-icon>\n      </button>\n\n      <button mat-flat-button  color=\"primary\" matTooltip=\"Edit\" style=\"margin-left: 10%\">\n        <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"openDialog(element.firstName,\n        element.lastName,element.id,element.AboType)\">\n          edit\n        </mat-icon>\n      </button>\n\n      <button mat-flat-button  color=\"primary\" matTooltip=\"Delete\" style=\"margin-left: 10%\">\n        <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"openDeleteDialog(element)\">\n          delete\n        </mat-icon>\n      </button>\n    </mat-cell>\n\n  </ng-container>\n\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n  </mat-row>\n\n</mat-table>\n");

/***/ }),

/***/ "./app/admin-abo/admin-abo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowEditAboType", function() { return ShowEditAboType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAboComponent", function() { return AdminAboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/service/tool.service.ts");
/* harmony import */ var _del_abo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/admin-abo/del-abo.component.ts");








let ShowEditAboType = class ShowEditAboType {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ShowEditAboType.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
ShowEditAboType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-abo-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-abo/edit-abo-type.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], ShowEditAboType);

//todo display renew + edit error
let AdminAboComponent = class AdminAboComponent {
    constructor(api, dialog, tool, _snackBar) {
        this.api = api;
        this.dialog = dialog;
        this.tool = tool;
        this._snackBar = _snackBar;
        this.data = [];
        this.listUser = [];
        this.displayedColumns = ['LastName', 'FirstName', 'Abonnement', 'AboType', 'Action'];
        this.isLoading = true;
    }
    ngOnInit() {
        this.api.getAboJson().subscribe(urldata => {
            this.initData(urldata);
        });
    }
    initData(urldata) {
        let str = JSON.stringify(urldata);
        str = str.replace(/"day"/gi, "\"Day\"");
        str = str.replace(/"time"/gi, "\"Time\"");
        this.data = JSON.parse(str);
        this.listUser = [];
        for (let i = 0; i < this.data.length; i++) {
            this.listUser.push({
                id: this.data[i]["id"],
                username: this.data[i]["Username"],
                lastName: this.data[i]["LastName"],
                firstName: this.data[i]["FirstName"],
                abonnement: this.data[i]["Abonnement"],
                typeSessions: this.data[i]["IdTypeSession"].length > 0 ? this.tool.initTypeSession(JSON.stringify(this.data[i]["IdTypeSession"])) : [],
                Email: this.data[i]["Email"],
                Session: [],
                Role: this.data[i]["roles"],
                AboType: this.data[i]["AboType"]
            });
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.listUser);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
    }
    reSubcribe(user) {
        this.api.postAboRenew(user.id).subscribe(urldata => {
            if (urldata["result"]) {
                this.ngOnInit();
                let action = user.firstName + " " + user.lastName;
                this.openSnackBar("Abonnement actualiser pour", action);
            }
        });
    }
    openDialog(fname, lname, id, aboType) {
        let newAboType = {
            FirstName: fname,
            LastName: lname,
            Id: id,
            aboType: aboType,
        };
        const dialogRef = this.dialog.open(ShowEditAboType, {
            width: '250px',
            data: newAboType
        });
        dialogRef.afterClosed().subscribe(result => {
            newAboType.aboType = result;
            this.api.editAboType(newAboType).subscribe(urldata => {
                if (urldata["result"]) {
                    this.ngOnInit();
                }
            });
        });
    }
    openDeleteDialog(user) {
        const dialogRef = this.dialog.open(_del_abo_component__WEBPACK_IMPORTED_MODULE_7__["DelAboComponent"], {
            width: '550px',
            data: user
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
AdminAboComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_6__["ToolService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AdminAboComponent.prototype, "sort", void 0);
AdminAboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-abo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-abo/admin-abo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-abo/admin-abo.component.css")).default]
    })
], AdminAboComponent);



/***/ }),

/***/ "./app/admin-abo/del-abo.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>\n    <div>\n      Etes vous sur de vouloir supprimer\n    </div>\n\n    <div>\n      {{data.lastName}} {{data.firstName}}\n    </div>\n  </mat-card-title>\n  <div class=\"del-button\">\n    <button mat-flat-button color=\"warn\" (click)=\"Delete(data.id)\"> OUI! </button>\n    <button mat-flat-button color=\"primary\" style=\"margin-left: 5%\" (click)=\"onNoClick()\">Annuler</button>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./app/admin-abo/del-abo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelAboComponent", function() { return DelAboComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/api.service.ts");




let DelAboComponent = class DelAboComponent {
    constructor(dialogRef, api, data) {
        this.dialogRef = dialogRef;
        this.api = api;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    Delete(id) {
        this.api.delUser(id).subscribe(urldata => {
            if (urldata["result"]) {
                this.dialogRef.close();
            }
        }, error => {
            this.error = error;
        });
    }
};
DelAboComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DelAboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'del-abo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-abo/del-abo.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DelAboComponent);



/***/ }),

/***/ "./app/admin-abo/edit-abo-type.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Changer le type d'abonnement de {{data.LastName}} {{data.FirstName}}</h1>\n<div mat-dialog-content>\n  <p>Quelle type d'abonnement</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.aboType\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.aboType\" cdkFocusInitial>Ok</button>\n</div>\n");

/***/ }),

/***/ "./app/admin-create-session/admin-create-session.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\n  width: 20%;\n  margin: auto;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n");

/***/ }),

/***/ "./app/admin-create-session/admin-create-session.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <form (submit)=\"onCreate(signupForm)\" #signupForm=\"ngForm\">\n    <mat-error *ngIf=\"error\">{{error}}</mat-error>\n    <mat-form-field>\n      <input matInput ngModel [matDatepicker]=\"picker\" placeholder=\"Choose a date\" name=\"date\" required>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n<!--    <mat-form-field>-->\n<!--      <input matInput ngModel placeholder=\"Pick a time\" aria-label=\"pick a time\"-->\n<!--             [ngxTimepicker]=\"fullTime\" [format]=\"24\" name=\"time\" required>-->\n<!--      <ngx-material-timepicker #fullTime [theme]=\"darkTheme\"></ngx-material-timepicker>-->\n<!--    </mat-form-field>-->\n\n    <mat-form-field>\n      <input matInput ngModel name=\"bike\" placeholder=\"Number of bike\"\n             aria-label=\"Number of bike\" type=\"number\" required>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" type=\"submit\">Add</button>\n\n  </form>\n  <button mat-raised-button color=\"primary\" (click)=\"openDialog()\" style=\"margin-top: 10px\">\n    Generation auto\n  </button>\n</mat-card>\n\n\n");

/***/ }),

/***/ "./app/admin-create-session/admin-create-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfimGenerationComponent", function() { return ConfimGenerationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCreateSessionComponent", function() { return AdminCreateSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/service/tool.service.ts");






//todo display create error
let ConfimGenerationComponent = class ConfimGenerationComponent {
    constructor(dialogRef, api, tool, router) {
        this.dialogRef = dialogRef;
        this.api = api;
        this.tool = tool;
        this.router = router;
        this.isLoading = false;
        this.listTypeSession = [];
        this.listTypeSessionId = [];
    }
    ngOnInit() {
        this.api.getTypeSession().subscribe(urldata => {
            let data = JSON.parse(JSON.stringify(urldata));
            this.listTypeSession = [];
            for (let type of data) {
                this.listTypeSession.push({
                    Id: type["id"],
                    Day: this.tool.daySwith(type["Day"]),
                    Time: type["Time"].split(' ')[1]
                });
            }
        });
    }
    addTypeSession(Id) {
        if (this.listTypeSessionId.indexOf(Id) != -1) {
            this.listTypeSessionId.splice(this.listTypeSessionId.indexOf(Id), 1);
        }
        else {
            this.listTypeSessionId.push(Id);
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
    generateSession(form) {
        this.isLoading = true;
        this.api.postGenerateSessionAuto(form.value.year, this.listTypeSessionId, 9).subscribe(urldata => {
            if (urldata['result']) {
                this.dialogRef.close();
            }
        }, error => {
            this.error = error;
        });
    }
};
ConfimGenerationComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_5__["ToolService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ConfimGenerationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'confirm-generation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-create-session/confirm-generation.component.html")).default,
    })
], ConfimGenerationComponent);

let AdminCreateSessionComponent = class AdminCreateSessionComponent {
    constructor(api, router, dialog) {
        this.api = api;
        this.router = router;
        this.dialog = dialog;
        this.darkTheme = {
            container: {
                bodyBackgroundColor: '#424242',
                buttonColor: '#fff'
            },
            dial: {
                dialBackgroundColor: '#555',
            },
            clockFace: {
                clockFaceBackgroundColor: '#555',
                clockHandColor: '#9fbd90',
                clockFaceTimeInactiveColor: '#fff'
            }
        };
    }
    ngOnInit() {
        // this.generateSession(5);
    }
    onCreate(form) {
        let d = new Date(form.value.date);
        let newSess = {
            Date: d.toDateString(),
            Time: form.value.time,
            Bike: form.value.bike,
            Cancel: false,
            Id: 0
        };
        this.api.createNewSess(newSess).subscribe(urldata => {
            if (urldata['result']) {
                this.router.navigate(['admin/session']);
            }
        }, error => {
            this.error = error;
        });
    }
    //todo pop up to confirm 5 years generation
    openDialog() {
        const dialogRef = this.dialog.open(ConfimGenerationComponent, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("close");
            this.ngOnInit();
        });
    }
};
AdminCreateSessionComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
AdminCreateSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-create-session',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-create-session/admin-create-session.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-create-session/admin-create-session.component.css")).default]
    })
], AdminCreateSessionComponent);



/***/ }),

/***/ "./app/admin-create-session/confirm-generation.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-error *ngIf=\"error\">{{error}}</mat-error>\n<div *ngIf=\"!isLoading ; else loading\">\n  <h3>Génération automatique de sessions</h3>\n\n  <form #form=\"ngForm\">\n\n    <ng-container>\n      <ul *ngFor=\"let session of listTypeSession\" >\n        <mat-checkbox (change)=\"addTypeSession(session.Id)\">\n          {{session.Day}} {{session.Time}}\n        </mat-checkbox>\n      </ul>\n    </ng-container>\n\n    <mat-form-field>\n      <label>\n        <input matInput placeholder=\"nombre d'année\" type=\"number\" ngModel value=\"5\" name=\"year\">\n      </label>\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"generateSession(form)\"> je confirme la génération </button>\n    <button mat-raised-button color=\"primary\" style=\"margin-top: 10px\" (click)=\"onNoClick()\"> annuler </button>\n  </form>\n</div>\n\n<ng-template #loading>\n  <div style=\"justify-content: center\">\n    <mat-spinner></mat-spinner>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./app/admin-session/admin-session.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".delete{\n  margin-left: 5%;\n  width: 20px;\n}\n.select{\n  margin-left: 10%;\n}\nmat-select, input{\n  justify-content: center;\n  font-size: larger;\n}\nmat-tab{\n  width : 100%\n}\nform{\n  display: flex;\n  flex-direction: column;\n}\n\nform > * {\n  width: 100%;\n}\nmat-card{\n  width: 20%;\n  margin: 5% auto;\n}\n");

/***/ }),

/***/ "./app/admin-session/admin-session.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-grid-list cols=\"5\" rowHeight=\"100\">\n  <mat-grid-tile></mat-grid-tile>\n\n  <mat-grid-tile colspan=\"1\">\n    <mat-form-field>\n      <mat-select placeholder=\"Sélectionné le mois\" #matSelect [(ngModel)]=\"value\">\n        <mat-option *ngFor=\"let month of months\" [value]=\"month.num\" >\n          {{month.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-grid-tile>\n\n  <mat-grid-tile colspan=\"1\">\n    <mat-form-field class=\"select\">\n      <mat-select placeholder=\"Sélectionné l'année\" #matSelect2 [(ngModel)]=\"year\">\n        <mat-option *ngFor=\"let y of listYear\" [value]=\"y\" >\n          {{y}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-grid-tile>\n\n  <mat-grid-tile colspan=\"1\">\n    <mat-form-field>\n      <label>\n        <input matInput type=\"number\" placeholder=\"nombre de vélo disponible\" #nbrBike\n               [value]=\"nbrDispBike\" >\n      </label>\n    </mat-form-field>\n  </mat-grid-tile>\n\n  <mat-grid-tile></mat-grid-tile>\n\n</mat-grid-list>\n\n<mat-divider></mat-divider>\n\n<mat-card *ngIf=\"isLoading\" style=\"margin: auto\">\n  <mat-spinner style=\"margin: auto\"></mat-spinner>\n</mat-card>\n\n<mat-table *ngIf=\"!isLoading\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\n\n  <!-- Date Column -->\n  <ng-container matColumnDef=\"Id\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.Id}} </mat-cell>\n  </ng-container>\n\n  <!-- Date Column -->\n  <ng-container matColumnDef=\"Date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.Date}} </mat-cell>\n  </ng-container>\n\n  <!-- Time Column -->\n  <ng-container matColumnDef=\"Time\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Heure </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.Time}} </mat-cell>\n  </ng-container>\n\n  <!-- Bike Column -->\n  <ng-container matColumnDef=\"Bike\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> Velo libre </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.Bike}} </mat-cell>\n  </ng-container>\n\n  <!-- Status Column -->\n  <ng-container matColumnDef=\"Status\">\n    <mat-header-cell *matHeaderCellDef> Cours confirmé </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <mat-icon *ngIf=\"!element.Cancel; else cancel\" [ngStyle]=\"{'color':'green'}\" matTooltip=\"Confirmé\">check</mat-icon>\n      <ng-template #cancel>\n        <mat-icon [ngStyle]=\"{'color':'red'}\" matTooltip=\"Annulé\">cancel</mat-icon>\n      </ng-template>\n    </mat-cell>\n  </ng-container>\n\n  <!-- List inscrit Column-->\n  <ng-container matColumnDef=\"Info\">\n    <mat-header-cell *matHeaderCellDef> List inscrit </mat-header-cell>\n\n    <mat-cell *matCellDef=\"let element;let i = index\" >\n      <button mat-flat-button  color=\"primary\" matTooltip=\"List inscrit\">\n        <mat-icon (click)=\"openDialog(i)\" [ngStyle]=\"{'color':'white'}\">info</mat-icon>\n      </button>\n    </mat-cell>\n\n  </ng-container>\n\n  <!-- Cancel Session Column-->\n  <ng-container matColumnDef=\"Action\">\n\n    <mat-header-cell *matHeaderCellDef>\n      <mat-error *ngIf=\"error\"> {{ error }}</mat-error>\n      Annulation / Suppression\n    </mat-header-cell>\n\n    <mat-cell *matCellDef=\"let element\" >\n      <button mat-flat-button  color=\"primary\" matTooltip=\"Annuler\"\n              *ngIf=\"!element.Cancel; else replayBtn\">\n        <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"Cancel(element.Id)\">\n          cancel\n        </mat-icon>\n      </button>\n\n      <ng-template #replayBtn>\n        <button mat-flat-button  color=\"primary\" matTooltip=\"Recréer\">\n          <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"Replay(element.Id)\">replay</mat-icon>\n        </button>\n\n        <button mat-flat-button class=\"delete\" color=\"primary\" matTooltip=\"Supprimer\">\n          <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"Delete(element.Id)\">delete</mat-icon>\n        </button>\n\n      </ng-template>\n\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n  </mat-table>\n");

/***/ }),

/***/ "./app/admin-session/admin-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSessionComponent", function() { return AdminSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _month_month_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/month/month.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/service/tool.service.ts");








//todo display cancel + delete + recreate error
let AdminSessionComponent = class AdminSessionComponent {
    constructor(api, dialog, tool) {
        this.api = api;
        this.dialog = dialog;
        this.tool = tool;
        this.data = [];
        this.value = null;
        this.listSession = [];
        this.listPerson = [];
        this.listYear = [];
        this.nbrDispBike = "9";
        this.displayedColumns = ['Date', 'Time', 'Bike', 'Status', 'Info', 'Action'];
        this.months = [
            { name: "janvier", num: 1 },
            { name: "fevrirer", num: 2 },
            { name: "mars", num: 3 },
            { name: "avril", num: 4 },
            { name: "mai", num: 5 },
            { name: "juin", num: 6 },
            { name: "juillet", num: 7 },
            { name: "aout", num: 8 },
            { name: "septembre", num: 9 },
            { name: "octobre", num: 10 },
            { name: "novembre", num: 11 },
            { name: "decembre", num: 12 },
        ];
        this.isLoading = true;
    }
    ngOnInit() {
        let m = new Date();
        this.value = m.getMonth() + 1;
        this.year = m.getFullYear();
        this.getYear();
        this.api.getMonthJson(this.value, this.year.toString()).subscribe(urldata => {
            this.initSession(urldata);
        });
    }
    ngAfterViewInit() {
        this.matSelect.valueChange.subscribe(value => {
            this.value = value;
            this.api.getMonthJson(value, this.year.toString()).subscribe(urldata => {
                this.initSession(urldata);
            });
        });
        this.matSelect2.valueChange.subscribe(value => {
            this.year = value;
            this.api.getMonthJson(this.value, this.year.toString()).subscribe(urldata => {
                this.initSession(urldata);
            });
        });
        this.api.getMonthJson(this.value, this.year.toString()).subscribe(urldata => {
            this.initSession(urldata);
        });
    }
    initSession(urldata) {
        this.listSession = [];
        this.listPerson = [];
        this.data = JSON.parse(JSON.stringify(urldata));
        for (let i = 0; i < this.data.length; i++) {
            let tempSess = this.tool.initTempSess(this.data[i], this.data[i]["Date"]);
            tempSess.Date = this.tool.switchDate(new Date(tempSess.Date));
            this.listSession.push(tempSess);
            this.listPerson.push({
                user: this.data[i]["idInscription"]
            });
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.listSession);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
    }
    openDialog(id) {
        const dialogRef = this.dialog.open(_month_month_component__WEBPACK_IMPORTED_MODULE_3__["ListPersonDialog"], {
            width: '250px',
            data: this.listPerson[id].user
        });
    }
    getYear() {
        for (var i = (this.year); i <= (this.year + 10); i++) {
            this.listYear.push(i);
        }
    }
    Replay(id) {
        this.api.postRenewSess(id, this.nbrBike.value).subscribe(urldata => {
            if (urldata["result"]) {
                this.nbrDispBike = this.nbrBike.value;
                this.ngAfterViewInit();
            }
        }, error1 => (this.handelError(error1)));
    }
    Cancel(id) {
        this.api.postCancelSess(id).subscribe(urldata => {
            if (urldata["result"]) {
                this.ngAfterViewInit();
            }
        }, error1 => (this.handelError(error1)));
    }
    Delete(id) {
        this.api.deleteSess(id).subscribe(urldata => {
            if (urldata["result"]) {
                this.ngAfterViewInit();
            }
        }, error1 => (this.handelError(error1)));
    }
    handelError(error1) {
        this.error = error1;
    }
};
AdminSessionComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_7__["ToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSelect', { static: false })
], AdminSessionComponent.prototype, "matSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInput"], { static: false })
], AdminSessionComponent.prototype, "nbrBike", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSelect2', { static: false })
], AdminSessionComponent.prototype, "matSelect2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], AdminSessionComponent.prototype, "sort", void 0);
AdminSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-session',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-session/admin-session.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin-session/admin-session.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/month/month.component.css")).default]
    })
], AdminSessionComponent);



/***/ }),

/***/ "./app/admin/admin.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\n  width: 40%;\n}\n");

/***/ }),

/***/ "./app/admin/admin.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-list-item>\n    <a mat-flat-button routerLink=\"/admin/Session\"> Sessions </a>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n\n  <mat-list-item>\n    <a mat-flat-button routerLink=\"/admin/Abonnement\"> Abonnement </a>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n\n\n  <mat-list-item>\n    <a mat-flat-button routerLink=\"/admin/Session/Create\"> Nouvelle Session </a>\n  </mat-list-item>\n</mat-card>\n");

/***/ }),

/***/ "./app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");


let AdminComponent = class AdminComponent {
    //todo creation page gestion type de session disponible
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./app/app-routing.module.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _month_month_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/month/month.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/profile/profile.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/admin/admin.component.ts");
/* harmony import */ var _admin_session_admin_session_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/admin-session/admin-session.component.ts");
/* harmony import */ var _admin_abo_admin_abo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/admin-abo/admin-abo.component.ts");
/* harmony import */ var _admin_create_session_admin_create_session_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/admin-create-session/admin-create-session.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/guard/auth.guard.ts");
/* harmony import */ var _guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/guard/admin.guard.ts");
/* harmony import */ var _type_session_type_session_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/type-session/type-session.component.ts");















const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
    },
    {
        path: 'month',
        component: _month_month_component__WEBPACK_IMPORTED_MODULE_4__["MonthComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
        canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
    },
    {
        path: 'admin/Session',
        component: _admin_session_admin_session_component__WEBPACK_IMPORTED_MODULE_9__["AdminSessionComponent"],
        canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
    },
    {
        path: 'admin/Abonnement',
        component: _admin_abo_admin_abo_component__WEBPACK_IMPORTED_MODULE_10__["AdminAboComponent"],
        canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
    },
    {
        path: 'admin/Session/Create',
        component: _admin_create_session_admin_create_session_component__WEBPACK_IMPORTED_MODULE_11__["AdminCreateSessionComponent"],
        canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
    },
    {
        path: 'admin/Session/Type',
        component: _type_session_type_session_component__WEBPACK_IMPORTED_MODULE_14__["TypeSessionComponent"],
        canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./app/app.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*---------------------------------------------------------------------------*/\n/* NAV BAR */\n.sidenav-container {\n  height: 100%;\n}\n\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.hidden{\n  display: none;\n}\n\n\nmat-toolbar{\n  width: 100%;\n}\n\nmat-toolbar a{\n  margin-left: 20px;\n}\n\nmat-toolbar a{\n  font-weight: lighter;\n  font-size: larger;\n}\n");

/***/ }),

/***/ "./app/app.component.tns.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\"\n               fixedInViewport=\"flase\"\n               [ngClass]=\"{hidden : !(isHandset$ | async)}\"\n               [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n               [opened]=\"(isHandset$ | async) === false\">\n    <div *ngTemplateOutlet=\"menutemplate\"></div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" *ngIf=\"(isHandset$ | async); else desktopNav\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar>\n\n    <ng-container>\n      <body>\n      <router-outlet></router-outlet>\n      </body>\n    </ng-container>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n</html>\n\n<ng-template #desktopNav >\n  <mat-toolbar class=\"Navbar\" color=\"primary\">\n    <a mat-button routerLink=\".\" >\n      <mat-icon> home </mat-icon>\n      <span> Accueil </span>\n    </a>\n\n    <a mat-button routerLink=\"/month\">\n      <mat-icon> date_range </mat-icon>\n      <span> Mois </span>\n    </a>\n\n    <a mat-button routerLink=\"/login\" *ngIf=\"!isAuth ; else profile\">\n      <mat-icon> person </mat-icon>\n      <span> Login </span>\n    </a>\n  </mat-toolbar>\n</ng-template>\n\n<ng-template #menutemplate>\n  <mat-nav-list>\n    <a mat-list-item routerLink=\".\">\n      <mat-icon> home </mat-icon>\n      <span> Accueil </span>\n    </a>\n\n    <a mat-list-item routerLink=\"/month\">\n      <mat-icon> date_range </mat-icon>\n      <span> Mois </span>\n    </a>\n\n    <a mat-list-item routerLink=\"/login\" *ngIf=\"!isAuth; else profile\">\n      <mat-icon> person </mat-icon>\n      <span> Login </span>\n    </a>\n\n  </mat-nav-list>\n</ng-template>\n\n<ng-template #profile>\n  <a mat-list-item [matMenuTriggerFor]=\"menu\" *ngIf=\"isAuth\">\n    <mat-icon> person </mat-icon>\n    <span> {{user.lastName}} {{user.firstName}} </span>\n  </a>\n\n  <mat-menu #menu=\"matMenu\">\n    <a mat-menu-item routerLink=\"/profile\">Profil</a>\n    <a mat-menu-item (click)=\"logout()\">Déconnexion</a>\n  </mat-menu>\n\n  <a mat-list-item [matMenuTriggerFor]=\"admin\" *ngIf=\"user.Role[0] === 'ROLE_ADMIN'\">\n    <mat-icon>build</mat-icon>\n    <span> Admin</span>\n  </a>\n</ng-template>\n\n<mat-menu #admin=\"matMenu\">\n  <mat-nav-list>\n    <a mat-list-item routerLink=\"admin/Session\">Sessions</a>\n    <a mat-list-item routerLink=\"admin/Session/Create\">Nouvelle Sessions</a>\n    <a mat-list-item routerLink=\"admin/Abonnement\">Abonnement</a>\n    <a mat-list-item routerLink=\"admin/Session/Type\">Type Sessions</a>\n  </mat-nav-list>\n</mat-menu>\n");

/***/ }),

/***/ "./app/app.component.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/service/tool.service.ts");





//TODO graphical responsive for devices
let AppComponent = class AppComponent {
    constructor(auth, router, tool) {
        this.auth = auth;
        this.router = router;
        this.tool = tool;
        this.title = 'Aquabike';
        this.isHandset$ = this.tool.isHandset$;
    }
    ngOnInit() {
        this.auth.getAuthStatusListener().subscribe(auth => {
            if (auth) {
                this.isAuth = this.auth.getIsAuth();
                this.user = this.auth.getCurrentUser();
            }
        });
        if (this.auth.getIsAuth()) {
            this.isAuth = this.auth.getIsAuth();
            this.user = this.auth.getCurrentUser();
        }
    }
    ngAfterViewInit() {
        this.ngOnInit();
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['login']);
        this.isAuth = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/app.component.tns.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.tns.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.tns.ts");
/* harmony import */ var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _src_app_month_month_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/month/month.component.ts");
/* harmony import */ var _src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/service/auth.service.ts");
/* harmony import */ var _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _src_app_service_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _src_app_signup_signup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./app/signup/signup.component.ts");
/* harmony import */ var _src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./app/profile/profile.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("../node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _src_app_admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./app/admin/admin.component.ts");
/* harmony import */ var _src_app_admin_session_admin_session_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./app/admin-session/admin-session.component.ts");
/* harmony import */ var _src_app_admin_abo_admin_abo_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./app/admin-abo/admin-abo.component.ts");
/* harmony import */ var _src_app_admin_create_session_admin_create_session_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./app/admin-create-session/admin-create-session.component.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("../node_modules/ngx-material-timepicker/fesm5/ngx-material-timepicker.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("../node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _src_app_type_session_type_session_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./app/type-session/type-session.component.ts");
/* harmony import */ var _src_app_type_session_add_type_session_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("./app/type-session/add-type-session.component.ts");
/* harmony import */ var _src_app_type_session_edit_type_session_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("./app/type-session/edit-type-session.component.ts");
/* harmony import */ var _src_app_admin_abo_del_abo_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("./app/admin-abo/del-abo.component.ts");
/* harmony import */ var _src_app_type_session_list_abo_session_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("./app/type-session/list-abo-session.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _src_app_menu_menu_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("./app/menu/menu.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("../node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _src_app_type_session_del_type_session_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("./app/type-session/del-type-session.component.ts");
/* harmony import */ var _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("./app/auto-generated/auto-generated.component.ts");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("../node_modules/@angular/common/fesm5/common.js");





















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _src_app_month_month_component__WEBPACK_IMPORTED_MODULE_6__["MonthComponent"],
            _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _src_app_month_month_component__WEBPACK_IMPORTED_MODULE_6__["ListPersonDialog"],
            _src_app_signup_signup_component__WEBPACK_IMPORTED_MODULE_30__["SignupComponent"],
            _src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["ProfileComponent"],
            _src_app_admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"],
            _src_app_admin_session_admin_session_component__WEBPACK_IMPORTED_MODULE_34__["AdminSessionComponent"],
            _src_app_admin_abo_admin_abo_component__WEBPACK_IMPORTED_MODULE_35__["AdminAboComponent"],
            _src_app_admin_create_session_admin_create_session_component__WEBPACK_IMPORTED_MODULE_36__["AdminCreateSessionComponent"],
            _src_app_admin_abo_admin_abo_component__WEBPACK_IMPORTED_MODULE_35__["ShowEditAboType"],
            _src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["EditProfileComponent"],
            _src_app_type_session_type_session_component__WEBPACK_IMPORTED_MODULE_40__["TypeSessionComponent"],
            _src_app_type_session_add_type_session_component__WEBPACK_IMPORTED_MODULE_41__["AddTypeSessionComponent"],
            _src_app_admin_create_session_admin_create_session_component__WEBPACK_IMPORTED_MODULE_36__["ConfimGenerationComponent"],
            _src_app_type_session_edit_type_session_component__WEBPACK_IMPORTED_MODULE_42__["EditTypeSessionComponent"],
            _src_app_admin_abo_del_abo_component__WEBPACK_IMPORTED_MODULE_43__["DelAboComponent"],
            _src_app_type_session_list_abo_session_component__WEBPACK_IMPORTED_MODULE_44__["listAboSession"],
            _src_app_menu_menu_component__WEBPACK_IMPORTED_MODULE_46__["MenuComponent"],
            _src_app_type_session_del_type_session_component__WEBPACK_IMPORTED_MODULE_49__["DelTypeSessionComponent"],
            _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_50__["AutoGeneratedComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__["MatGridListModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_37__["NgxMaterialTimepickerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__["FlexLayoutModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_47__["LayoutModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_48__["MatSidenavModule"],
            nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_51__["NativeScriptModule"],
        ],
        entryComponents: [
            _src_app_month_month_component__WEBPACK_IMPORTED_MODULE_6__["MonthComponent"],
            _src_app_month_month_component__WEBPACK_IMPORTED_MODULE_6__["ListPersonDialog"],
            _src_app_admin_abo_admin_abo_component__WEBPACK_IMPORTED_MODULE_35__["ShowEditAboType"],
            _src_app_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["EditProfileComponent"],
            _src_app_type_session_add_type_session_component__WEBPACK_IMPORTED_MODULE_41__["AddTypeSessionComponent"],
            _src_app_admin_create_session_admin_create_session_component__WEBPACK_IMPORTED_MODULE_36__["ConfimGenerationComponent"],
            _src_app_type_session_edit_type_session_component__WEBPACK_IMPORTED_MODULE_42__["EditTypeSessionComponent"],
            _src_app_admin_abo_del_abo_component__WEBPACK_IMPORTED_MODULE_43__["DelAboComponent"],
            _src_app_type_session_list_abo_session_component__WEBPACK_IMPORTED_MODULE_44__["listAboSession"],
            _src_app_type_session_del_type_session_component__WEBPACK_IMPORTED_MODULE_49__["DelTypeSessionComponent"]
        ],
        providers: [
            _src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _src_app_service_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_52__["APP_BASE_HREF"], useValue: "/" },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_52__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_52__["HashLocationStrategy"] },
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_39__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSnackBar"],
        ],
        bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./app/auto-generated/auto-generated.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Add mobile styles for the component here.  */\n");

/***/ }),

/***/ "./app/auto-generated/auto-generated.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<Button text=\"auto-generated works!\" class=\"btn btn-primary\"></Button>");

/***/ }),

/***/ "./app/auto-generated/auto-generated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function() { return AutoGeneratedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");


let AutoGeneratedComponent = class AutoGeneratedComponent {
    constructor() { }
    ngOnInit() {
    }
};
AutoGeneratedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-generated',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/auto-generated/auto-generated.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/auto-generated/auto-generated.component.css")).default]
    })
], AutoGeneratedComponent);



/***/ }),

/***/ "./app/guard/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/auth.service.ts");




let AdminGuard = class AdminGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.getIsAuth() && this.auth.getCurrentUser().Role[0] === "ROLE_ADMIN") {
            return true;
        }
        else {
            return this.router.navigate(['/login']);
        }
    }
};
AdminGuard.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ "./app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.getIsAuth()) {
            return true;
        }
        else {
            return this.router.navigate(['/login']);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./app/home/home.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center{\n  margin: 2% 20% ;\n  padding: 2%;\n  align-content: center;\n}\n");

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">\n  <mat-card>\n    <mat-card-title>\n      {{date}}\n    </mat-card-title>\n  </mat-card>\n\n  <mat-list *ngFor=\"let hour of time\">\n\n    <mat-list-item></mat-list-item>\n    <mat-list-item>\n      <mat-card-subtitle>\n        {{hour}}\n      </mat-card-subtitle>\n    </mat-list-item>\n\n    <mat-list *ngFor=\"let user of listUser[0]\">\n      <mat-list-item>\n        <mat-icon mat-list-icon>person</mat-icon>\n        {{user.lastName}} {{user.firstName}}\n      </mat-list-item>\n      <mat-divider ></mat-divider>\n\n    </mat-list>\n  </mat-list>\n</div>\n\n");

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/tool.service.ts");




let HomeComponent = class HomeComponent {
    constructor(api, tool) {
        this.api = api;
        this.tool = tool;
        this.data = [];
        this.listUser = [];
        this.time = [];
        this.isHandset$ = this.tool.isHandset$;
    }
    ngOnInit() {
        let day = new Date();
        this.date = this.tool.switchProfileDate(day.toISOString());
        this.api.getHomeJson().subscribe(urldata => {
            this.data = JSON.parse(JSON.stringify(urldata));
            for (let j = 0; j < this.data.length; j++) {
                this.time.push(this.data[j]["time"].split(' ')[1]);
                let inscription = this.data[j]["idInscription"];
                let user = [];
                for (let i = 0; i < inscription.length; i++) {
                    user.push(inscription[i]["idPerson"]);
                }
                this.listUser.push(user);
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./app/login/login.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn{\n  margin-left:3%\n}\nmat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\nmat-card{\n  width: 20%;\n  margin: auto;\n}\nbutton{\n  font-size: large;\n}\n");

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\"><!-- don't forget the \"!\", thus not isLoading-->\n    <span *ngIf=\"Error\" class=\"mat-error\"> {{Error}} </span>\n    <mat-form-field>\n      <input matInput name=\"username\" ngModel type=\"text\" placeholder=\"Email\"  required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput name=\"password\" ngModel type=\"password\" placeholder=\"Mot de passe\"  required password>\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Connection</button>\n    <button mat-raised-button color=\"primary\" class=\"btn\" routerLink=\"/signup\">\n      <span> Inscription</span>\n    </button>\n  </form>\n</mat-card>\n");

/***/ }),

/***/ "./app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");




//todo display login error
let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.authService.getAuthStatusListener()
            .subscribe(auth => {
            if (auth) {
                this.router.navigate(['']);
            }
            this.authService.getErrorListener().subscribe(next => {
                this.Error = next;
                this.isLoading = true;
            }, error => {
                this.Error = error;
            });
        });
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.authService.loginUser(form.value.username, form.value.password);
        this.ngAfterViewInit();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./app/menu/menu.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n");

/***/ }),

/***/ "./app/menu/menu.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-nav-list>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>frontend</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");




let MenuComponent = class MenuComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./app/month/list-person-detail.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-row detail-row\">\n  <mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"User\">\n      <mat-header-cell *matHeaderCellDef> Inscription </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.lastName}} {{element.firstName}}</mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"PersonCol\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: PersonCol;\">\n    </mat-row>\n  </mat-table>\n</div>\n");

/***/ }),

/***/ "./app/month/month.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-table{\n  margin: 3% 2% ;\n  padding: 2%;\n}\n\n.select{\n  margin-left: 10%;\n}\n\nmat-select{\n  margin-top: 5%;\n  justify-content: center;\n  font-size: larger;\n}\n\nmat-cell{\n  font-size: large;\n  justify-content: center;\n}\n\nmat-header-cell{\n  font-size: larger;\n  justify-content: center;\n}\n\nmat-form-field{\n  width: 115px;\n  text-align: center;\n}\n\n\n.mat-column-Date {\n  flex: 0 0 10%;\n}\n\n.action-btn{\n  background-color: #006186;\n}\n\n@media (max-width: 960px) {\n  .mat-column-Action {\n    flex: 0 0 30%;\n  }\n  .mat-column-Date {\n    flex: 0 0 30%;\n  }\n}\n");

/***/ }),

/***/ "./app/month/month.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-grid-list cols=\"4\" rowHeight=\"100\">\n  <mat-grid-tile></mat-grid-tile>\n\n  <mat-grid-tile colspan=\"1\">\n    <mat-form-field>\n      <mat-select placeholder=\"Mois\" #matSelect [(ngModel)]=\"value\">\n        <mat-option *ngFor=\"let month of months\" [value]=\"month.num\" >\n          {{month.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-grid-tile>\n\n  <mat-grid-tile colspan=\"1\">\n    <mat-form-field class=\"select\">\n      <mat-select placeholder=\"Année\" #matSelect2 [(ngModel)]=\"year\">\n        <mat-option *ngFor=\"let y of listYear\" [value]=\"y\" >\n          {{y}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-grid-tile>\n\n</mat-grid-list>\n\n<mat-divider></mat-divider>\n\n<mat-card *ngIf=\"isLoading\" style=\"margin: auto\">\n  <mat-spinner style=\"margin: auto\"></mat-spinner>\n</mat-card>\n\n<mat-table *ngIf=\"!isLoading\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort>\n\n  <!-- Date Column -->\n  <ng-container matColumnDef=\"Date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.Date}}</mat-cell>\n  </ng-container>\n\n  <!-- Time Column -->\n  <ng-container matColumnDef=\"Time\" >\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Heure</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.Time}}</mat-cell>\n  </ng-container>\n\n  <!-- Bike Column -->\n  <ng-container matColumnDef=\"Bike\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Velo(s) libre(s)</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.Bike}}</mat-cell>\n  </ng-container>\n\n  <!-- Status Column -->\n  <ng-container matColumnDef=\"Status\" >\n    <mat-header-cell *matHeaderCellDef>\n      Cours confirmé\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <mat-icon *ngIf=\"!element.Cancel; else cancel\" [ngStyle]=\"{'color':'green'}\"\n                matTooltip=\"Confirmé\">check</mat-icon>\n      <ng-template #cancel>\n        <mat-icon [ngStyle]=\"{'color':'red'}\" matTooltip=\"Annuler\">cancel</mat-icon>\n      </ng-template>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Button Column-->\n  <ng-container matColumnDef=\"Info\" >\n    <mat-header-cell *matHeaderCellDef>\n      Liste Participant(e)s\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n        <button mat-flat-button  color=\"primary\" matTooltip=\"Liste Participant(e)s\">\n          <mat-icon (click)=\"openDialog(element)\" [ngStyle]=\"{'color':'white'}\">info</mat-icon>\n        </button>\n    </mat-cell>\n\n  </ng-container>\n\n  <!-- Button 2 Column-->\n  <ng-container matColumnDef=\"Action\">\n\n    <mat-header-cell *matHeaderCellDef>\n      Inscription/Désinscritption\n    </mat-header-cell>\n\n    <mat-cell *matCellDef=\"let element\" >\n      <div *ngIf=\"checkIfDisable(element) ;then cancelBtn else Btn\">\n      </div>\n\n      <ng-template #cancelBtn>\n        <button mat-flat-button matTooltip=\"Annuler\" disabled >\n          <mat-icon *ngIf=\"checkIfSub(element);then unsub else sub\"></mat-icon>\n        </button>\n      </ng-template>\n\n      <ng-template #Btn>\n        <button mat-flat-button color=\"primary\" >\n          <mat-icon *ngIf=\"checkIfSub(element);then unsub2 else sub\"></mat-icon>\n        </button>\n      </ng-template>\n\n      <ng-template #sub>\n          <mat-icon color=\"white\" matTooltip=\"Inscription\"\n                    (click)=\"subscribe(element.Id)\">add</mat-icon>\n      </ng-template>\n\n      <ng-template #unsub>\n          <mat-icon color=\"white\" matTooltip=\"Désinscription\"\n                    (click)=\"unSubscribe(element.Id)\">check</mat-icon>\n      </ng-template>\n\n      <ng-template #unsub2>\n          <mat-icon [ngStyle]=\"{color : '#44c344'}\" matTooltip=\"Désinscription\"\n                    (click)=\"unSubscribe(element.Id)\">check</mat-icon>\n      </ng-template>\n\n\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n  </mat-row>\n\n</mat-table>\n\n\n\n\n");

/***/ }),

/***/ "./app/month/month.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPersonDialog", function() { return ListPersonDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthComponent", function() { return MonthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/service/tool.service.ts");








let ListPersonDialog = class ListPersonDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.PersonCol = ['User'];
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ListPersonDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
ListPersonDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'list-person-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/month/list-person-detail.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], ListPersonDialog);

//todo display month selection + year selection error
//todo display sub + unsub error
//todo block unsub if today
let MonthComponent = class MonthComponent {
    constructor(api, dialog, auth, tool) {
        this.api = api;
        this.dialog = dialog;
        this.auth = auth;
        this.tool = tool;
        this.data = [];
        this.value = null;
        this.listYear = [];
        this.listIdSession = [];
        this.today = new Date();
        this.isLoading = true;
        this.isHandset$ = this.tool.isHandset$;
        this.months = [
            { name: "janvier", num: 1 },
            { name: "février", num: 2 },
            { name: "mars", num: 3 },
            { name: "avril", num: 4 },
            { name: "mai", num: 5 },
            { name: "juin", num: 6 },
            { name: "juillet", num: 7 },
            { name: "août", num: 8 },
            { name: "septembre", num: 9 },
            { name: "octobre", num: 10 },
            { name: "novembre", num: 11 },
            { name: "décembre", num: 12 },
        ];
        this.user = this.auth.getCurrentUser();
        this.today = new Date();
        this.value = this.today.getMonth() + 1;
        this.year = this.today.getFullYear();
        this.getYear();
    }
    ngOnInit() {
        this.isHandset$.subscribe(value1 => !value1 ? this.displayedColumns = ['Date', 'Time', 'Bike', 'Status', 'Info', 'Action'] : this.displayedColumns = ['Date', 'Time', 'Action']);
        this.api.getMonthJson(this.value, this.year.toString()).subscribe(urldata => {
            this.initSession(urldata);
        });
    }
    ngAfterViewInit() {
        this.matSelect.valueChange.subscribe(value => {
            this.value = value;
            this.api.getMonthJson(value, this.year.toString()).subscribe(urldata => {
                this.initSession(urldata);
            });
        });
        this.matSelect2.valueChange.subscribe(value => {
            this.year = value;
            this.api.getMonthJson(this.value, this.year.toString()).subscribe(urldata => {
                this.initSession(urldata);
            });
        });
    }
    subscribe(Id) {
        let tempInscription = {
            Username: this.user.username,
            Id: Id
        };
        this.api.createInscription(tempInscription).subscribe(urldata => {
            if (urldata["result"]) {
                this.ngOnInit();
            }
        });
    }
    unSubscribe(id) {
        let tempInscription = {
            Username: this.user.username,
            Id: id
        };
        this.api.delInscription(tempInscription).subscribe(urldata => {
            if (urldata["result"]) {
                this.ngOnInit();
            }
        });
    }
    initSession(urldata) {
        this.api.getProfileJson(this.user.username).subscribe(data => {
            this.auth.initUser(data);
            this.listIdSession = [];
            this.user = this.auth.getCurrentUser();
            for (let i = 0; i < this.user.Session.length; i++) {
                this.listIdSession.push(this.user.Session[i].Id);
            }
        });
        this.listSession = [];
        this.listPerson = [];
        this.data = JSON.parse(JSON.stringify(urldata));
        for (let i = 0; i < this.data.length; i++) {
            if (this.tool.checkIfBeforeToday(this.data[i]["Date"])) {
                let tempSess = this.tool.initTempSess(this.data[i], this.data[i]["Date"]);
                tempSess.Date = this.tool.switchDate(new Date(tempSess.Date));
                tempSess.Person = this.tool.initListPersDetail(this.data[i]["idInscription"]);
                this.listSession.push(tempSess);
            }
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.listSession);
        this.dataSource.sort = this.sort;
        this.isLoading = false;
    }
    openDialog(Session) {
        const dialogRef = this.dialog.open(ListPersonDialog, {
            width: '250px',
            data: Session.Person
        });
    }
    getYear() {
        var today = new Date();
        for (var i = (this.year); i <= (this.year + 10); i++) {
            this.listYear.push(i);
        }
    }
    checkIfDisable(element) {
        return element.Cancel || element.Bike == 0 || (this.user.abonnement == 0 && !this.checkIfSub(element))
            || (element.Date === this.tool.switchDate(this.today) && this.checkIfSub(element));
    }
    checkIfSub(element) {
        return this.listIdSession.includes(element.Id);
    }
};
MonthComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_7__["ToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSelect', { static: false })
], MonthComponent.prototype, "matSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSelect2', { static: false })
], MonthComponent.prototype, "matSelect2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], MonthComponent.prototype, "sort", void 0);
MonthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-month',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/month/month.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/month/month.component.css")).default]
    })
], MonthComponent);



/***/ }),

/***/ "./app/profile/edit-profile.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"EditProfile(editForm)\" #editForm=\"ngForm\">\n  <mat-select *ngIf=\"error\"> {{error}}</mat-select>\n  <mat-form-field>\n    <input matInput placeholder=\"Email\" type=\"text\" [(ngModel)]=\"data.Email\"  name=\"Email\" >\n  </mat-form-field>\n\n  <mat-form-field>\n      <input matInput placeholder=\"Nom\" type=\"text\" [(ngModel)]=\"data.lastName\" name=\"lastName\" >\n  </mat-form-field>\n\n  <mat-form-field>\n      <input matInput placeholder=\"Prenom\" type=\"text\" [(ngModel)]=\"data.firstName\"  name=\"firstName\" >\n  </mat-form-field>\n\n  <mat-form-field>\n      <input matInput ngModel #passwordInput=\"ngModel\" placeholder=\"Mot de passe\" type=\"password\" password name=\"password\" >\n  </mat-form-field>\n\n  <ng-container>\n    <ul *ngFor=\"let session of listTypeSession\" >\n      <mat-checkbox (change)=\"EditTypeSession(session)\" [checked] = \"checkSession(session) != null\">\n        {{session.Day}} {{session.Time}}\n      </mat-checkbox>\n    </ul>\n  </ng-container>\n\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button type=\"submit\">Ok</button>\n\n</form>\n\n");

/***/ }),

/***/ "./app/profile/profile.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\n  width: 50%;\n}\n\ndiv{\n  width: 100%;\n  margin-left: 2%;\n  margin-right: 2%;\n  padding: 2%;\n}\n\nmat-select{\n  margin-top: 5%;\n  width: 100%\n}\n\nmat-cell{\n  justify-content: center;\n  font-size: large;\n}\n\nmat-header-cell{\n  font-size: larger;\n  justify-content: center;\n}\n\nmat-form-field{\n  width: 110px;\n}\n\n.mat-column-Date {\n  flex: 0 0 35%;\n}\n\nh3{\n  font-size: larger;\n}\n\np{\n  font-size: large;\n}\n");

/***/ }),

/***/ "./app/profile/profile.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list cols=\"2\" rowHeight=\"100%\">\n\n  <mat-grid-tile colspan=\"1\">\n\n    <mat-card *ngIf=\"isLoading\" style=\"margin: auto\">\n      <mat-spinner style=\"margin: auto\"></mat-spinner>\n    </mat-card>\n\n    <div >\n      <mat-table *ngIf=\"!isLoading\" [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <!-- Date Column -->\n        <ng-container matColumnDef=\"Date\" >\n          <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{switchDate(element.Date)}} </mat-cell>\n        </ng-container >\n\n        <!-- Time Column -->\n        <ng-container matColumnDef=\"Time\" >\n          <mat-header-cell *matHeaderCellDef> Heure </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.Time}} </mat-cell>\n        </ng-container>\n\n        <!-- Bike Column -->\n        <ng-container matColumnDef=\"Bike\" >\n          <mat-header-cell *matHeaderCellDef> Velo libre </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.Bike}} </mat-cell>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container matColumnDef=\"Status\" >\n          <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <mat-icon *ngIf=\"!element.Cancel; else cancel\" [ngStyle]=\"{'color':'green'}\">check</mat-icon>\n            <ng-template #cancel>\n              <mat-icon [ngStyle]=\"{'color':'red'}\">cancel</mat-icon>\n            </ng-template>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Button Column-->\n        <ng-container matColumnDef=\"Action\" >\n\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n\n          <mat-cell *matCellDef=\"let element\">\n            <div *ngIf=\"checkIfDisable(element) ;then cancelBtn else Btn\">\n            </div>\n\n            <ng-template #cancelBtn>\n              <button mat-flat-button  color=\"primary\" matTooltip=\"Inscription\" disabled>\n                <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"unSubscribe(element.Id)\">check</mat-icon>\n              </button>\n            </ng-template>\n\n            <ng-template #Btn>\n              <button mat-flat-button  color=\"primary\" matTooltip=\"Inscription\">\n                <mat-icon [ngStyle]=\"{'color':'#44c344'}\" (click)=\"unSubscribe(element.Id)\">check</mat-icon>\n              </button>\n            </ng-template>\n          </mat-cell>\n\n        </ng-container>\n\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n\n      <mat-paginator [pageSizeOptions]=\"[10]\" showFirstLastButtons></mat-paginator>\n    </div>\n\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <mat-card >\n      <mat-list-item>\n        <mat-card-title>\n          <mat-icon>person</mat-icon>\n          <span> {{User.lastName}} {{User.firstName}}</span>\n          <button mat-flat-button color=\"primary\" matTooltip=\"Liste Participant\" style=\"float : right\">\n            <mat-icon (click)=\"openDialog()\">edit</mat-icon>\n          </button>\n        </mat-card-title>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n\n      <mat-card-content>\n        <mat-list-item>\n          <h3>Email</h3>\n          <p>{{User.Email}}</p>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n\n        <mat-list-item>\n          <h3>Abonnement</h3>\n          <p>{{User.abonnement}}</p>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n\n        <mat-list-item>\n          <h3>Jour</h3>\n            <p *ngFor=\"let sess of User.typeSessions\">{{sess.Day}} {{sess.Time}}</p>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n      </mat-card-content>\n\n    </mat-card>\n  </mat-grid-tile>\n\n</mat-grid-list>\n\n\n\n\n");

/***/ }),

/***/ "./app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/service/tool.service.ts");






//todo display unsub error
//todo display type abo
let EditProfileComponent = class EditProfileComponent {
    constructor(dialogRef, data, api, tool) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.tool = tool;
        this.days = this.tool.days;
    }
    ngOnInit() {
        this.api.getTypeSession().subscribe(urldata => {
            let data = JSON.stringify(urldata);
            data = data.replace(/"idTypeSession"/gi, "\"idPerson\"");
            this.listTypeSession = this.tool.initTypeSession(data);
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    EditProfile(form) {
        let editProfile = {
            id: this.data.id,
            lastName: form.value.lastName,
            firstName: form.value.firstName,
            Email: form.value.Email,
            password: form.value.password ? form.value.password : null,
            typeSessions: this.data.typeSessions
        };
        console.log(editProfile);
        this.api.postEditProfile(editProfile).subscribe(result => {
            if (result) {
                this.dialogRef.close();
            }
        }, error => {
            this.error = error;
        });
    }
    EditTypeSession(type) {
        if (this.checkSession(type) == null) {
            console.log('add ' + type);
            this.data.typeSessions.push(type);
        }
        else {
            console.log('del ' + type);
            this.data.typeSessions.splice(this.checkSession(type), 1);
        }
    }
    checkSession(session) {
        let state;
        let i = 0;
        for (let type of this.data.typeSessions) {
            i++;
            session.Id == type.Id ? state = i : state = null;
        }
        return state;
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_5__["ToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daySelect', { static: false })
], EditProfileComponent.prototype, "daySelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daySelect2', { static: false })
], EditProfileComponent.prototype, "daySelect2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeSelect', { static: false })
], EditProfileComponent.prototype, "timeSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeSelect2', { static: false })
], EditProfileComponent.prototype, "timeSelect2", void 0);
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/profile/edit-profile.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], EditProfileComponent);

let ProfileComponent = class ProfileComponent {
    constructor(api, auth, dialog, tool) {
        this.api = api;
        this.auth = auth;
        this.dialog = dialog;
        this.tool = tool;
        this.listSession = [];
        this.listYear = [];
        this.displayedColumns = ['Date', 'Time', 'Bike', 'Status', 'Action'];
        this.months = [
            { name: "janvier", num: 1 },
            { name: "fevrirer", num: 2 },
            { name: "mars", num: 3 },
            { name: "avril", num: 4 },
            { name: "mai", num: 5 },
            { name: "juin", num: 6 },
            { name: "juillet", num: 7 },
            { name: "aout", num: 8 },
            { name: "septembre", num: 9 },
            { name: "octobre", num: 10 },
            { name: "novembre", num: 11 },
            { name: "decembre", num: 12 },
        ];
        this.isLoading = true;
    }
    ngOnInit() {
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.getYear();
        this.User = this.auth.getCurrentUser();
        this.api.getProfileJson(this.User.username).subscribe(data => {
            this.auth.initUser(data);
            this.User = this.auth.getCurrentUser();
            let sess = this.User.Session;
            for (let i = 0; i < this.User.Session.length; i++) {
                if (this.tool.checkIfBeforeToday(sess[i].Date)) {
                    this.listSession.push(sess[i]);
                }
            }
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.listSession);
            this.dataSource.paginator = this.paginator;
            this['isLoading'] = false;
        });
    }
    getYear() {
        for (var i = (this.year); i <= (this.year + 10); i++) {
            this.listYear.push(i);
        }
    }
    unSubscribe(Id) {
        let tempInscription = {
            Username: this.User.username,
            Id: Id
        };
        this.api.delInscription(tempInscription).subscribe(urldata => {
            if (urldata["result"]) {
                this.ngOnInit();
            }
        });
    }
    checkIfDisable(element) {
        return (element.Date === this.tool.switchProfileDate(this.today));
    }
    openDialog() {
        const dialogRef = this.dialog.open(EditProfileComponent, {
            width: '250px',
            data: this.User
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    switchDate(Date) {
        return this.tool.switchProfileDate(Date);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_5__["ToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matSelect', { static: false })
], ProfileComponent.prototype, "matSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], ProfileComponent.prototype, "paginator", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./app/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");






let ApiService = class ApiService {
    // public ip = "https://127.0.0.1:8000";
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.ip = "http://51.178.29.162:3000";
    }
    getHomeJson() {
        return this.http.get(this.ip + '/api').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    getMonthJson(month, year) {
        let url = this.ip + "/api/month/" + month + "/" + year;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    getProfileJson(username) {
        let url = this.ip + "/api/profile/" + username;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    getAboJson() {
        return this.http.get(this.ip + '/api/admin/abonnement').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    postAboRenew(id) {
        let url = this.ip + "/api/admin/renewAbo";
        return this.http.put(url, { Id: id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    editAboType(newAboType) {
        let url = this.ip + "/api/admin/editAbo";
        return this.http.put(url, newAboType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    postCancelSess(id) {
        let url = this.ip + "/api/admin/Cancel";
        return this.http.put(url, { Id: id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    postRenewSess(id, bike) {
        let url = this.ip + "/api/admin/recreate";
        return this.http.put(url, { Id: id, Bike: bike }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    deleteSess(id) {
        let url = this.ip + "/api/admin/session/" + id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    createNewSess(newSess) {
        let url = this.ip + "/api/admin/session";
        return this.http.post(url, newSess).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    postGenerateSessionAuto(year, list, bike) {
        let url = this.ip + "/api/admin/autocreate";
        return this.http.post(url, { year: year, bike: bike, idTypeSession: list }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    createInscription(newInscription) {
        let url = this.ip + "/api/Inscription";
        return this.http.post(url, newInscription).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    delInscription(newInscription) {
        let url = this.ip + "/api/Desinscription/" + newInscription.Username + "/" + newInscription.Id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    postLogin(authData) {
        let url = this.ip + '/api/login';
        return this.http.post(url, authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    postEditProfile(editProfile) {
        let url = this.ip + '/api/editProfile';
        return this.http.put(url, editProfile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    getTypeSession() {
        let url = this.ip + "/api/TypeSession";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    delTypeSession(Id) {
        let url = this.ip + "/api/TypeSession/" + Id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    addTypeSession(typeSession) {
        let url = this.ip + "/api/TypeSession";
        return this.http.post(url, typeSession).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    editTypeSession(typeSession) {
        let url = this.ip + "/api/TypeSession";
        return this.http.put(url, typeSession).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    delUser(Id) {
        let url = this.ip + "/api/admin/user/" + Id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handelError));
    }
    handelError(err) {
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err.error.error);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err.message);
        }
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _tool_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/service/tool.service.ts");









let AuthService = class AuthService {
    // public ip = "https://127.0.0.1:8000";
    constructor(http, cookie, router, api, tool) {
        this.http = http;
        this.cookie = cookie;
        this.router = router;
        this.api = api;
        this.tool = tool;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // just need to know if user is authenticated
        this.errorListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.ip = "http://51.178.29.162:3000";
    }
    getIsAuth() {
        return Boolean(this.cookie.get('connected'));
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getErrorListener() {
        return this.errorListener.asObservable();
    }
    getCurrentUser() {
        // this.updateUser();
        return JSON.parse(this.cookie.get('user'));
    }
    createUser(authData) {
        return this.http.put(this.ip + '/api/register', authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err.error.errors);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err.message);
            }
        }));
    }
    loginUser(username, password) {
        let authData = { Username: username, password: password };
        this.api.postLogin(authData)
            .subscribe(response => {
            if (response["result"] === true) {
                console.log(response["user"]);
                this.api.getProfileJson(username).subscribe(data => {
                    this.isAuthenticated = true; // needed to update authentication status
                    this.initUser(data);
                    this.authStatusListener.next(true); // telling everyone who is interested that the user is authenticated
                });
            }
        }, error => {
            this.errorListener.error(error);
            this.authStatusListener.next(false);
            this.errorListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        });
    }
    initUser(data) {
        this.data = JSON.parse(JSON.stringify(data));
        this.User = {
            id: this.data["id"],
            username: this.data["Username"],
            lastName: this.data["LastName"],
            firstName: this.data["FirstName"],
            abonnement: this.data["Abonnement"],
            typeSessions: [],
            Email: this.data["Email"],
            Session: [],
            Role: this.data["roles"]
        };
        for (let typeSess of this.data["IdTypeSession"]) {
            this.User.typeSessions.push({
                Id: typeSess["IdTypeSession"]["id"],
                Day: this.tool.daySwith(typeSess["IdTypeSession"]["day"]),
                Time: typeSess["IdTypeSession"]["time"].split(' ')[1]
            });
        }
        let inscription = this.data["idInscription"];
        for (let i = 0; i < inscription.length; i++) {
            this.User.Session.push(this.tool.initTempSess(inscription[i]["idSession"], inscription[i]["idSession"]["date"]));
        }
        this.cookie.set('user', JSON.stringify(this.User));
        this.cookie.set('connected', "true");
    }
    logout() {
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.cookie.delete('user');
        this.cookie.delete('session');
        this.cookie.delete('connected');
        this.router.navigate(['login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _tool_service__WEBPACK_IMPORTED_MODULE_8__["ToolService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./app/service/tool.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolService", function() { return ToolService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");




let ToolService = class ToolService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this._isHandset$ = this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].TabletLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].TabletPortrait
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this._darkTheme = {
            container: {
                bodyBackgroundColor: '#424242',
                buttonColor: '#fff'
            },
            dial: {
                dialBackgroundColor: '#555',
            },
            clockFace: {
                clockFaceBackgroundColor: '#555',
                clockHandColor: '#9fbd90',
                clockFaceTimeInactiveColor: '#fff'
            }
        };
        this._days = [
            { code: "Mon", nom: "Lundi" },
            { code: "Tue", nom: "Mardi" },
            { code: "Wed", nom: "Mercredi" },
            { code: "Thu", nom: "Jeudi" },
            { code: "Fry", nom: "Vendredi" },
            { code: "Sat", nom: "Samedi" },
            { code: "Sun", nom: "Dimanche" },
        ];
    }
    get isHandset$() {
        return this._isHandset$;
    }
    get days() {
        return this._days;
    }
    get darkTheme() {
        return this._darkTheme;
    }
    daySwith(day) {
        let j;
        switch (day) {
            case 'Mon': {
                j = 'Lundi';
                break;
            }
            case 'Tue': {
                j = 'Mardi';
                break;
            }
            case 'Wed': {
                j = 'Mercredi';
                break;
            }
            case 'Thu': {
                j = 'Jeudi';
                break;
            }
            case 'Fry': {
                j = 'Vendredi';
                break;
            }
            case 'Sat': {
                j = 'Samedi';
                break;
            }
            case 'Sun': {
                j = 'Dimanche';
                break;
            }
            case 'Null': {
                j = 'Null';
                break;
            }
        }
        return j;
    }
    invDaySwitch(day) {
        let j;
        switch (day) {
            case 'Lundi': {
                j = 'Mon';
                break;
            }
            case 'Mardi': {
                j = 'Tue';
                break;
            }
            case 'Mercredi': {
                j = 'Wed';
                break;
            }
            case 'Jeudi': {
                j = 'Thu';
                break;
            }
            case 'Vendredi': {
                j = 'Fry';
                break;
            }
            case 'Samedi': {
                j = 'Sat';
                break;
            }
            case 'Dimanche': {
                j = 'Sun';
                break;
            }
            case 'Null': {
                j = 'Null';
                break;
            }
        }
        return j;
    }
    switchDate(d) {
        let j;
        switch (d.getDay()) {
            case 1: {
                j = "Lundi ";
                break;
            }
            case 2: {
                j = "Mardi ";
                break;
            }
            case 3: {
                j = "Mercredi ";
                break;
            }
            case 4: {
                j = "Jeudi ";
                break;
            }
            case 5: {
                j = "Vendredi ";
                break;
            }
            case 6: {
                j = "Samedi ";
                break;
            }
            case 0: {
                j = "Dimanche ";
                break;
            }
        }
        return j + d.getDate();
    }
    initTempSess(data, date) {
        let d = new Date(date);
        return {
            Date: d.toISOString(),
            Time: data["time"].split(' ')[1],
            Bike: data["bike"],
            Cancel: data["Cancel"],
            Id: data["id"],
        };
    }
    checkIfBeforeToday(date) {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return new Date(date) >= d;
    }
    switchProfileDate(d) {
        let date = new Date(d);
        let j;
        switch (date.getDay()) {
            case 1: {
                j = "Lundi ";
                break;
            }
            case 2: {
                j = "Mardi ";
                break;
            }
            case 3: {
                j = "Mercredi ";
                break;
            }
            case 4: {
                j = "jeudi ";
                break;
            }
            case 5: {
                j = "Vendrdi ";
                break;
            }
            case 6: {
                j = "Samedi ";
                break;
            }
            case 0: {
                j = "Dimanche ";
                break;
            }
        }
        let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
        return j + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    }
    initListPersDetail(listPers) {
        let tempPers = [];
        for (let pers of listPers) {
            let idPerson;
            if (pers["IdPerson"]) {
                idPerson = pers["IdPerson"];
            }
            else {
                idPerson = pers["idPerson"];
            }
            tempPers.push({
                lastName: idPerson["lastName"],
                firstName: idPerson["firstName"],
            });
        }
        return tempPers;
    }
    initTypeSession(str) {
        str = str.replace(/"day"/gi, "\"Day\"");
        str = str.replace(/"time"/gi, "\"Time\"");
        let data = JSON.parse(str);
        let typeSession = [];
        for (let type of data) {
            let TypeSess;
            if (type["IdTypeSession"]) {
                TypeSess = type["IdTypeSession"];
            }
            else if (type["idTypeSession"]) {
                TypeSess = type["idTypeSession"];
            }
            else {
                TypeSess = type;
            }
            let tempType = {
                Id: TypeSess["id"],
                Day: this.daySwith(TypeSess["Day"]),
                Time: TypeSess["Time"].split(' ')[1],
            };
            if (type["idTypeSession"]) {
                tempType.Person = this.initListPersDetail(TypeSess["idTypeSession"]);
            }
            else if (type["idPerson"]) {
                tempType.Person = this.initListPersDetail(TypeSess["idPerson"]);
            }
            typeSession.push(tempType);
        }
        return typeSession;
    }
};
ToolService.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
ToolService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToolService);



/***/ }),

/***/ "./app/signup/signup.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card{\n  width: 20%;\n  margin: auto;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n");

/***/ }),

/***/ "./app/signup/signup.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card>\n  <mat-error *ngIf=\"error\"> {{error}} </mat-error>\n\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\n\n      <mat-form-field>\n        <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\n        <mat-error *ngIf=\"emailInput.invalid\">please enter valid email</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput name=\"username\" ngModel type=\"text\" placeholder=\"Username\" #usernameInput=\"ngModel\" required username>\n        <mat-error *ngIf=\"usernameInput.invalid\">please enter valid Username</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput name=\"Nom\" ngModel type=\"text\" placeholder=\"Nom\" #usernameInput=\"ngModel\" required>\n        <mat-error *ngIf=\"usernameInput.invalid\">please enter valid Username</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput name=\"Prenom\" ngModel type=\"text\" placeholder=\"Prenom\" #usernameInput=\"ngModel\" required>\n        <mat-error *ngIf=\"usernameInput.invalid\">please enter valid Username</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput name=\"Abonnement\" ngModel type=\"number\" placeholder=\"Abonnement\" #usernameInput=\"ngModel\" required>\n        <mat-error *ngIf=\"usernameInput.invalid\">please enter valid Username</mat-error>\n      </mat-form-field>\n\n      <ng-container>\n        <ul *ngFor=\"let session of listTypeSession\" >\n          <mat-checkbox (change)=\"addTypeSession(session.Id)\">\n            {{session.Day}} {{session.Time}}\n          </mat-checkbox>\n        </ul>\n      </ng-container>\n\n      <mat-form-field>\n        <label>\n          <input matInput name=\"password\" ngModel type=\"password\" placeholder=\"Password\" #passwordInput=\"ngModel\" required password>\n        </label>\n        <mat-error *ngIf=\"passwordInput.invalid\">please enter valid password</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <label>\n          <input matInput name=\"passwordConfirmation\" ngModel type=\"password\" placeholder=\"Repeat Password\" #passwordInput=\"ngModel\" required password>\n        </label>\n        <mat-error *ngIf=\"passwordInput.invalid\">please enter valid password</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!isLoading\">S'inscrire</button>\n      <p>\n        <mat-card-subtitle>* : champs requis</mat-card-subtitle>\n      </p>\n  </form>\n</mat-card>\n\n");

/***/ }),

/***/ "./app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/service/tool.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/service/api.service.ts");






//todo auto subscribe to session in function of his subscription
//todo modification base de donnée pour liaison entre type de session et utilisateur
let SignupComponent = class SignupComponent {
    constructor(authService, router, tool, api) {
        this.authService = authService;
        this.router = router;
        this.tool = tool;
        this.api = api;
        this.isLoading = false;
        this.days = this.tool.days;
        this.listTypeSessionId = [];
    }
    onSignup(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        const authData = {
            email: form.value.email,
            username: form.value.username,
            Nom: form.value.Nom,
            Prenom: form.value.Prenom,
            Abonnement: Number(form.value.Abonnement),
            typeSessions: [],
            password: form.value.password,
            passwordConfirmation: form.value.passwordConfirmation,
        };
        for (let session of this.listTypeSession) {
            if (this.listTypeSessionId.indexOf(session.Id) != -1) {
                authData.typeSessions.push(session);
            }
        }
        this.authService.createUser(authData).subscribe((next) => {
            if (next["result"]) {
                this.router.navigate(['']);
            }
        }, error1 => {
            this.error = error1;
        });
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.api.getTypeSession().subscribe(urldata => {
            let data = JSON.parse(JSON.stringify(urldata));
            this.listTypeSession = [];
            for (let type of data) {
                this.listTypeSession.push({
                    Id: type["id"],
                    Day: this.tool.daySwith(type["Day"]),
                    Time: type["Time"].split(' ')[1]
                });
            }
        });
    }
    addTypeSession(Id) {
        if (this.listTypeSessionId.indexOf(Id) != -1) {
            this.listTypeSessionId.splice(this.listTypeSessionId.indexOf(Id), 1);
        }
        else {
            this.listTypeSessionId.push(Id);
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daySelect', { static: false })
], SignupComponent.prototype, "daySelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daySelect2', { static: false })
], SignupComponent.prototype, "daySelect2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeSelect', { static: false })
], SignupComponent.prototype, "timeSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeSelect2', { static: false })
], SignupComponent.prototype, "timeSelect2", void 0);
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./app/type-session/add-type-session.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-error *ngIf=\"error\">{{error}}</mat-error>\n\n<form #form=\"ngForm\">\n  <mat-form-field>\n    <mat-select placeholder=\"Choisi le Jour\" #daySelect>\n      <mat-option *ngFor=\"let day of days\" [value]=\"day.code\" >\n        {{day.nom}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput name=\"stime\" ngModel placeholder=\"Choisit l'heure\">\n  </mat-form-field>\n\n  <button mat-button (click)=Add(form)>Ok</button>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n</form>\n");

/***/ }),

/***/ "./app/type-session/add-type-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTypeSessionComponent", function() { return AddTypeSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/service/tool.service.ts");





let AddTypeSessionComponent = class AddTypeSessionComponent {
    constructor(dialogRef, api, tool) {
        this.dialogRef = dialogRef;
        this.api = api;
        this.tool = tool;
        this.days = this.tool.days;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    Add(form) {
        let tempTypeSess = {
            Id: 0,
            Day: this.daySelect.value,
            Time: form.value.stime
        };
        this.api.addTypeSession(tempTypeSess).subscribe(result => {
            if (result['result']) {
                console.log(result['result']);
                this.dialogRef.close();
            }
        }, error => {
            this.error = error;
        });
    }
};
AddTypeSessionComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daySelect', { static: false })
], AddTypeSessionComponent.prototype, "daySelect", void 0);
AddTypeSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-type-session',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/type-session/add-type-session.component.html")).default,
    })
], AddTypeSessionComponent);



/***/ }),

/***/ "./app/type-session/del-type-session.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-title>\n    <div>\n      Etes vous sur de vouloir supprimer\n    </div>\n\n    <div>\n      {{data.Day}} {{data.Time}}\n    </div>\n  </mat-card-title>\n  <div class=\"del-button\">\n    <button mat-flat-button color=\"warn\" (click)=\"Delete(data.Id)\"> OUI! </button>\n    <button mat-flat-button color=\"primary\" style=\"margin-left: 5%\" (click)=\"onNoClick()\">Annuler</button>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./app/type-session/del-type-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelTypeSessionComponent", function() { return DelTypeSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/api.service.ts");




let DelTypeSessionComponent = class DelTypeSessionComponent {
    constructor(dialogRef, api, data) {
        this.dialogRef = dialogRef;
        this.api = api;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    Delete(Id) {
        this.api.delTypeSession(Id).subscribe(result => {
            if (result['result']) {
                this.ngOnInit();
            }
        });
    }
};
DelTypeSessionComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DelTypeSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'del-abo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/type-session/del-type-session.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DelTypeSessionComponent);



/***/ }),

/***/ "./app/type-session/edit-type-session.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-error *ngIf=\"error\">{{error}}</mat-error>\n<form #form=\"ngForm\">\n  <mat-form-field>\n    <mat-select placeholder=\"Choisi le Jour\" #daySelect [(value)]=\"selectDay\">\n      <mat-option *ngFor=\"let day of days\" [value]=\"day.code\" >\n        {{day.nom}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput name=\"stime\" [(ngModel)]=\"data.Time\" placeholder=\"Choisit l'heure\">\n  </mat-form-field>\n\n  <button mat-button (click)=Edit(form)>Ok</button>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n</form>\n");

/***/ }),

/***/ "./app/type-session/edit-type-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTypeSessionComponent", function() { return EditTypeSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/service/tool.service.ts");





let EditTypeSessionComponent = class EditTypeSessionComponent {
    constructor(dialogRef, api, tool, data) {
        this.dialogRef = dialogRef;
        this.api = api;
        this.tool = tool;
        this.data = data;
        this.days = this.tool.days;
    }
    ngOnInit() {
        this.selectDay = this.tool.invDaySwitch(this.data.Day);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    Edit(form) {
        let tempTypeSess = {
            Id: this.data.Id,
            Day: this.daySelect.value,
            Time: form.value.stime
        };
        console.log(tempTypeSess);
        this.api.editTypeSession(tempTypeSess).subscribe(result => {
            if (result['result']) {
                console.log(result['result']);
                this.dialogRef.close();
            }
        }, error => {
            this.error = error;
        });
    }
};
EditTypeSessionComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_4__["ToolService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daySelect', { static: false })
], EditTypeSessionComponent.prototype, "daySelect", void 0);
EditTypeSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-type-session',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/type-session/edit-type-session.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditTypeSessionComponent);



/***/ }),

/***/ "./app/type-session/list-abo-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAboSession", function() { return listAboSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");



let listAboSession = class listAboSession {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.PersonCol = ['User'];
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
listAboSession.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
listAboSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-type-session',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/month/list-person-detail.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], listAboSession);



/***/ }),

/***/ "./app/type-session/type-session.component.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".delete{\n  margin-left: 2%;\n}\nmat-table{\n  margin: 3% 2% ;\n  padding: 2%;\n  justify-content: center;\n}\n\nmat-header-cell{\n  font-size: large;\n  justify-content: center;\n\n}\nmat-cell{\n  font-size: larger;\n  justify-content: center;\n}\n");

/***/ }),

/***/ "./app/type-session/type-session.component.html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"isLoading\" style=\"margin: auto\">\n  <mat-spinner style=\"margin: auto\"></mat-spinner>\n</mat-card>\n\n<mat-table *ngIf=\"!isLoading\" [dataSource]=\"listTypeSession\" class=\"mat-elevation-z8\">\n\n  <!-- Date Column -->\n  <ng-container matColumnDef=\"Day\">\n    <mat-header-cell *matHeaderCellDef> Jour </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.Day}} </mat-cell>\n  </ng-container>\n\n  <!-- Time Column -->\n  <ng-container matColumnDef=\"Time\">\n    <mat-header-cell *matHeaderCellDef> Heure </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.Time}} </mat-cell>\n  </ng-container>\n\n  <!-- Cancel Session Column-->\n  <ng-container matColumnDef=\"Action\">\n\n    <mat-header-cell *matHeaderCellDef>\n      <mat-error *ngIf=\"error\"> {{ error }}</mat-error>\n      Modification / Suppression\n    </mat-header-cell>\n\n    <mat-cell *matCellDef=\"let element: let i = index\" >\n      <button mat-flat-button  color=\"primary\" matTooltip=\"Modification\">\n        <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"openEditDialog(i)\">edit</mat-icon>\n      </button>\n\n      <button mat-flat-button class=\"delete\" color=\"primary\" matTooltip=\"Suppression\">\n        <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"openDeleteDialog(i)\">delete</mat-icon>\n      </button>\n\n    </mat-cell>\n  </ng-container>\n\n  <!-- Cancel Session Column-->\n  <ng-container matColumnDef=\"Add\">\n\n    <mat-header-cell *matHeaderCellDef>\n      <button mat-flat-button class=\"delete\" color=\"primary\" matTooltip=\"Ajout\" (click)=\"openDialog()\">\n        <span>Ajout d'une session </span>\n        <mat-icon [ngStyle]=\"{'color':'white'}\" >add</mat-icon>\n      </button>\n    </mat-header-cell>\n\n    <mat-cell *matCellDef=\"let element: let i = index\" >\n      <button mat-flat-button  color=\"primary\" matTooltip=\"Modification\">\n        <mat-icon [ngStyle]=\"{'color':'white'}\" (click)=\"openListDialog(i)\">information</mat-icon>\n      </button>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n</mat-table>\n");

/***/ }),

/***/ "./app/type-session/type-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSessionComponent", function() { return TypeSessionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/service/api.service.ts");
/* harmony import */ var _service_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/service/tool.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_type_session_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/type-session/add-type-session.component.ts");
/* harmony import */ var _edit_type_session_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/type-session/edit-type-session.component.ts");
/* harmony import */ var _list_abo_session_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/type-session/list-abo-session.component.ts");
/* harmony import */ var _del_type_session_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/type-session/del-type-session.component.ts");









let TypeSessionComponent = class TypeSessionComponent {
    constructor(api, tool, dialog) {
        this.api = api;
        this.tool = tool;
        this.dialog = dialog;
        this.listTypeSession = [];
        this.displayedColumns = ['Day', 'Time', 'Action', 'Add'];
        this.isLoading = true;
    }
    ngOnInit() {
        this.listTypeSession = [];
        this.api.getTypeSession().subscribe(urldata => {
            let str = JSON.stringify(urldata);
            str = str.replace(/"idTypeSession"/gi, "\"idPerson\"");
            this.listTypeSession = this.tool.initTypeSession(str);
            this.isLoading = false;
        });
    }
    ngAfterViewInit() {
        this.listTypeSession = [];
        this.api.getTypeSession().subscribe(urldata => {
            let str = JSON.stringify(urldata);
            str = str.replace(/"idTypeSession"/gi, "\"idPerson\"");
            this.listTypeSession = this.tool.initTypeSession(str);
            this.isLoading = false;
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(_add_type_session_component__WEBPACK_IMPORTED_MODULE_5__["AddTypeSessionComponent"], {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    openEditDialog(Id) {
        const dialogRef = this.dialog.open(_edit_type_session_component__WEBPACK_IMPORTED_MODULE_6__["EditTypeSessionComponent"], {
            width: '250px',
            data: this.listTypeSession[Id]
        });
        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    openListDialog(Id) {
        const dialogRef = this.dialog.open(_list_abo_session_component__WEBPACK_IMPORTED_MODULE_7__["listAboSession"], {
            width: '250px',
            data: this.listTypeSession[Id].Person
        });
    }
    openDeleteDialog(Id) {
        const dialogRef = this.dialog.open(_del_type_session_component__WEBPACK_IMPORTED_MODULE_8__["DelTypeSessionComponent"], {
            width: '550px',
            data: this.listTypeSession[Id]
        });
    }
};
TypeSessionComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_tool_service__WEBPACK_IMPORTED_MODULE_3__["ToolService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
TypeSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-session',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/type-session/type-session.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/type-session/type-session.component.css")).default]
    })
], TypeSessionComponent);



/***/ }),

/***/ "./environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.tns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./environments/environment.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        





if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"main.tns.js\",\"android\":{\"v8Flags\":\"--expose_gc\",\"markingMode\":\"none\"}}");

/***/ })

},[["./main.tns.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vYWRtaW4tYWJvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vZGVsLWFiby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tYWJvL2RlbC1hYm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vZWRpdC1hYm8tdHlwZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWNyZWF0ZS1zZXNzaW9uL2FkbWluLWNyZWF0ZS1zZXNzaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vY29uZmlybS1nZW5lcmF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tc2Vzc2lvbi9hZG1pbi1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50bnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2d1YXJkL2FkbWluLmd1YXJkLnRzIiwid2VicGFjazovLy8uL2FwcC9ndWFyZC9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tb250aC9saXN0LXBlcnNvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tb250aC9tb250aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlL2FwaS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZS90b29sLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9hZGQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vYWRkLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9kZWwtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vZGVsLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9lZGl0LXR5cGUtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL2VkaXQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL2xpc3QtYWJvLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLCtHQUFpRSxtQkFBTyxDQUFDLDRIQUEwRjtBQUNuSyxnRUFBZ0UsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbEssaUVBQWlFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ25LLGdFQUFnRSxtQkFBTyxDQUFDLDRIQUEwRixHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSxpRUFBaUUsRUFBRSxpRUFBaUUsRUFBRSwySkFBMko7QUFDcGdCLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFt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QVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBU3pDLFdBQU0sR0FBRztZQUNQLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLE9BQU8sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3pCLEVBQUMsSUFBSSxFQUFHLEtBQUssRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3ZCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLFdBQVcsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1NBQzlCLENBQUM7UUFRQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUks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QUFpQjtDQUNsQjtBQUVELFlBQW1EO0tBQ2hELEtBQUssQ0FBQyxDQUEyQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuZWRpdHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5tYXQtdGFibGV7XFxuICBtYXJnaW4gOiBhdXRvIDUlO1xcbiAgcGFkZGluZzogMiU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWF0LXNlbGVjdHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG5tYXQtY2VsbHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxubWF0LWhlYWRlci1jZWxse1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1hdC1jb2x1bW4tQWN0aW9ue1xcbiAgZmxleDogMCAwIDIwJTtcXG59XFxuXFxuLmRlbC1idXR0b24ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZCAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj5cXG4gIDxtYXQtc3Bpbm5lciBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj48L21hdC1zcGlubmVyPlxcbjwvbWF0LWNhcmQ+XFxuXFxuPG1hdC10YWJsZSAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCIgW2RhdGFTb3VyY2VdPVxcXCJkYXRhU291cmNlXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCIgbWF0U29ydD5cXG5cXG4gIDwhLS0gTGFzdE5hbWUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkxhc3ROYW1lXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+Tm9tPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5sYXN0TmFtZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBGaXJzdE5hbWUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkZpcnN0TmFtZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPlByZW5vbTwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuZmlyc3ROYW1lfX08L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEFib25uZW1lbnQgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFib25uZW1lbnRcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5BYm9ubmVtZW50PC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5hYm9ubmVtZW50fX08L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEFib25uZW1lbnQgVHlwZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWJvVHlwZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPlR5cGUgQWJvbm5lbWVudDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuQWJvVHlwZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBEYXkgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkRheVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPkpvdXI8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+e3tlbGVtZW50LkRheX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBSZVN1YnNjcmliZSBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJBY3Rpb25cXFwiPlxcblxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPjwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIlJlbmV3XFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJyZVN1YmNyaWJlKGVsZW1lbnQpXFxcIj5yZXBsYXk8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiRWRpdFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiAxMCVcXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIm9wZW5EaWFsb2coZWxlbWVudC5maXJzdE5hbWUsXFxuICAgICAgICBlbGVtZW50Lmxhc3ROYW1lLGVsZW1lbnQuaWQsZWxlbWVudC5BYm9UeXBlKVxcXCI+XFxuICAgICAgICAgIGVkaXRcXG4gICAgICAgIDwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJEZWxldGVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogMTAlXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJvcGVuRGVsZXRlRGlhbG9nKGVsZW1lbnQpXFxcIj5cXG4gICAgICAgICAgZGVsZXRlXFxuICAgICAgICA8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L21hdC1jZWxsPlxcblxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuXFxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cXFwiZGlzcGxheWVkQ29sdW1uc1xcXCI+PC9tYXQtaGVhZGVyLXJvdz5cXG4gIDxtYXQtcm93ICptYXRSb3dEZWY9XFxcImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XFxcIj5cXG4gIDwvbWF0LXJvdz5cXG5cXG48L21hdC10YWJsZT5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7ZWRpdEFibywgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdFNuYWNrQmFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge0RlbEFib0NvbXBvbmVudH0gZnJvbSAnLi9kZWwtYWJvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uIGV4dGVuZHMgVXNlciB7XG4gIEFib1R5cGUgOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXQtYWJvLXR5cGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1hYm8tdHlwZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNob3dFZGl0QWJvVHlwZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFNob3dFZGl0QWJvVHlwZT4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBlZGl0QWJvKSB7fVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cblxuLy90b2RvIGRpc3BsYXkgcmVuZXcgKyBlZGl0IGVycm9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZG1pbi1hYm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tYWJvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRtaW4tYWJvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkFib0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBFcnJvcjogc3RyaW5nO1xuICBwdWJsaWMgZGF0YTogSlNPTltdID0gW107XG4gIHB1YmxpYyBsaXN0VXNlcjogUGVyc29uW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ0xhc3ROYW1lJywgJ0ZpcnN0TmFtZScsICdBYm9ubmVtZW50JywgJ0Fib1R5cGUnLCAnQWN0aW9uJ107XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8UGVyc29uPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2w6IFRvb2xTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGkuZ2V0QWJvSnNvbigpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgIHRoaXMuaW5pdERhdGEodXJsZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgaW5pdERhdGEodXJsZGF0YTogT2JqZWN0KSB7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHVybGRhdGEpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cImRheVwiL2dpLCBcIlxcXCJEYXlcXFwiXCIpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cInRpbWVcIi9naSwgXCJcXFwiVGltZVxcXCJcIik7XG4gICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShzdHIpO1xuXG4gICAgdGhpcy5saXN0VXNlciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdFVzZXIucHVzaCh7XG4gICAgICAgIGlkOiB0aGlzLmRhdGFbaV1bXCJpZFwiXSxcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuZGF0YVtpXVtcIlVzZXJuYW1lXCJdLFxuICAgICAgICBsYXN0TmFtZTogdGhpcy5kYXRhW2ldW1wiTGFzdE5hbWVcIl0sXG4gICAgICAgIGZpcnN0TmFtZTogdGhpcy5kYXRhW2ldW1wiRmlyc3ROYW1lXCJdLFxuICAgICAgICBhYm9ubmVtZW50OiB0aGlzLmRhdGFbaV1bXCJBYm9ubmVtZW50XCJdLFxuICAgICAgICB0eXBlU2Vzc2lvbnM6IHRoaXMuZGF0YVtpXVtcIklkVHlwZVNlc3Npb25cIl0ubGVuZ3RoID4gMCA/IHRoaXMudG9vbC5pbml0VHlwZVNlc3Npb24oSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhW2ldW1wiSWRUeXBlU2Vzc2lvblwiXSkpIDogW10sXG4gICAgICAgIEVtYWlsOiB0aGlzLmRhdGFbaV1bXCJFbWFpbFwiXSxcbiAgICAgICAgU2Vzc2lvbjogW10sXG4gICAgICAgIFJvbGU6IHRoaXMuZGF0YVtpXVtcInJvbGVzXCJdLFxuICAgICAgICBBYm9UeXBlOiB0aGlzLmRhdGFbaV1bXCJBYm9UeXBlXCJdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMubGlzdFVzZXIpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG5cbiAgcmVTdWJjcmliZSh1c2VyIDogVXNlcikge1xuICAgIHRoaXMuYXBpLnBvc3RBYm9SZW5ldyh1c2VyLmlkKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICBpZiAodXJsZGF0YVtcInJlc3VsdFwiXSkge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSB1c2VyLmZpcnN0TmFtZSArIFwiIFwiICsgdXNlci5sYXN0TmFtZTtcbiAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoXCJBYm9ubmVtZW50IGFjdHVhbGlzZXIgcG91clwiLCBhY3Rpb24pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRGlhbG9nKGZuYW1lLCBsbmFtZSwgaWQsIGFib1R5cGUpOiB2b2lkIHtcbiAgICBsZXQgbmV3QWJvVHlwZTogZWRpdEFibyA9IHtcbiAgICAgIEZpcnN0TmFtZTogZm5hbWUsXG4gICAgICBMYXN0TmFtZTogbG5hbWUsXG4gICAgICBJZDogaWQsXG4gICAgICBhYm9UeXBlOiBhYm9UeXBlLFxuICAgIH07XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFNob3dFZGl0QWJvVHlwZSwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiBuZXdBYm9UeXBlXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIG5ld0Fib1R5cGUuYWJvVHlwZSA9IHJlc3VsdDtcbiAgICAgIHRoaXMuYXBpLmVkaXRBYm9UeXBlKG5ld0Fib1R5cGUpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgICAgaWYgKHVybGRhdGFbXCJyZXN1bHRcIl0pIHtcbiAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkRlbGV0ZURpYWxvZyh1c2VyOiBVc2VyKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEZWxBYm9Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNTUwcHgnLFxuICAgICAgZGF0YTogdXNlclxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLm5nT25Jbml0KClcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5TbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZD5cXG4gIDxtYXQtY2FyZC10aXRsZT5cXG4gICAgPGRpdj5cXG4gICAgICBFdGVzIHZvdXMgc3VyIGRlIHZvdWxvaXIgc3VwcHJpbWVyXFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2PlxcbiAgICAgIHt7ZGF0YS5sYXN0TmFtZX19IHt7ZGF0YS5maXJzdE5hbWV9fVxcbiAgICA8L2Rpdj5cXG4gIDwvbWF0LWNhcmQtdGl0bGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJkZWwtYnV0dG9uXFxcIj5cXG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XFxcIndhcm5cXFwiIChjbGljayk9XFxcIkRlbGV0ZShkYXRhLmlkKVxcXCI+IE9VSSEgPC9idXR0b24+XFxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDUlXFxcIiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+QW5udWxlcjwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9tYXQtY2FyZD5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R5cGVTZXNzaW9uLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlbC1hYm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVsLWFiby5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERlbEFib0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGVycm9yIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZWxBYm9Db21wb25lbnQ+LFxuICAgIHB1YmxpYyBhcGkgOiBBcGlTZXJ2aWNlLFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVXNlciwpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBEZWxldGUoaWQ6IGFueSkge1xuICAgIHRoaXMuYXBpLmRlbFVzZXIoaWQpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhW1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LGVycm9yID0+IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkNoYW5nZXIgbGUgdHlwZSBkJ2Fib25uZW1lbnQgZGUge3tkYXRhLkxhc3ROYW1lfX0ge3tkYXRhLkZpcnN0TmFtZX19PC9oMT5cXG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cXG4gIDxwPlF1ZWxsZSB0eXBlIGQnYWJvbm5lbWVudDwvcD5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVxcXCJkYXRhLmFib1R5cGVcXFwiPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG48L2Rpdj5cXG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+Tm8gVGhhbmtzPC9idXR0b24+XFxuICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVxcXCJkYXRhLmFib1R5cGVcXFwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxcbjwvZGl2PlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJtYXQtY2FyZHtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbm1hdC1mb3JtLWZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYXQtc3Bpbm5lciB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQ+XFxuICA8Zm9ybSAoc3VibWl0KT1cXFwib25DcmVhdGUoc2lnbnVwRm9ybSlcXFwiICNzaWdudXBGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+e3tlcnJvcn19PC9tYXQtZXJyb3I+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgbmdNb2RlbCBbbWF0RGF0ZXBpY2tlcl09XFxcInBpY2tlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBhIGRhdGVcXFwiIG5hbWU9XFxcImRhdGVcXFwiIHJlcXVpcmVkPlxcbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVxcXCJwaWNrZXJcXFwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxcbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuPCEtLSAgICA8bWF0LWZvcm0tZmllbGQ+LS0+XFxuPCEtLSAgICAgIDxpbnB1dCBtYXRJbnB1dCBuZ01vZGVsIHBsYWNlaG9sZGVyPVxcXCJQaWNrIGEgdGltZVxcXCIgYXJpYS1sYWJlbD1cXFwicGljayBhIHRpbWVcXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICBbbmd4VGltZXBpY2tlcl09XFxcImZ1bGxUaW1lXFxcIiBbZm9ybWF0XT1cXFwiMjRcXFwiIG5hbWU9XFxcInRpbWVcXFwiIHJlcXVpcmVkPi0tPlxcbjwhLS0gICAgICA8bmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIgI2Z1bGxUaW1lIFt0aGVtZV09XFxcImRhcmtUaGVtZVxcXCI+PC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcj4tLT5cXG48IS0tICAgIDwvbWF0LWZvcm0tZmllbGQ+LS0+XFxuXFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgbmdNb2RlbCBuYW1lPVxcXCJiaWtlXFxcIiBwbGFjZWhvbGRlcj1cXFwiTnVtYmVyIG9mIGJpa2VcXFwiXFxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIk51bWJlciBvZiBiaWtlXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHJlcXVpcmVkPlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPkFkZDwvYnV0dG9uPlxcblxcbiAgPC9mb3JtPlxcbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwib3BlbkRpYWxvZygpXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTBweFxcXCI+XFxuICAgIEdlbmVyYXRpb24gYXV0b1xcbiAgPC9idXR0b24+XFxuPC9tYXQtY2FyZD5cXG5cXG5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge05neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lfSBmcm9tIFwibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXJcIjtcbmltcG9ydCB7U2Vzc2lvbnMsIFR5cGVTZXNzaW9ufSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuLy90b2RvIGRpc3BsYXkgY3JlYXRlIGVycm9yXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybS1nZW5lcmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZ2VuZXJhdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpbUdlbmVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBlcnJvciA6IHN0cmluZztcbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBsaXN0VHlwZVNlc3Npb246IFR5cGVTZXNzaW9uW109W107XG4gIHByaXZhdGUgbGlzdFR5cGVTZXNzaW9uSWQ6IG51bWJlcltdPVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maW1HZW5lcmF0aW9uQ29tcG9uZW50PixcbiAgICBwdWJsaWMgYXBpIDogQXBpU2VydmljZSxcbiAgICBwdWJsaWMgdG9vbCA6IFRvb2xTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXBpLmdldFR5cGVTZXNzaW9uKCkuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1cmxkYXRhKSk7XG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IFtdO1xuICAgICAgZm9yKGxldCB0eXBlIG9mIGRhdGEpe1xuICAgICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiAucHVzaCh7XG4gICAgICAgICAgSWQgOiB0eXBlW1wiaWRcIl0sXG4gICAgICAgICAgRGF5IDogdGhpcy50b29sLmRheVN3aXRoKHR5cGVbXCJEYXlcIl0pLFxuICAgICAgICAgIFRpbWUgOiB0eXBlW1wiVGltZVwiXS5zcGxpdCgnICcpWzFdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGRUeXBlU2Vzc2lvbihJZDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuaW5kZXhPZihJZCkgIT0gLTEpe1xuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb25JZC5zcGxpY2UodGhpcy5saXN0VHlwZVNlc3Npb25JZC5pbmRleE9mKElkKSwxKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uSWQucHVzaChJZCk7XG4gICAgfVxuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBnZW5lcmF0ZVNlc3Npb24oZm9ybSA6IE5nRm9ybSl7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXBpLnBvc3RHZW5lcmF0ZVNlc3Npb25BdXRvKGZvcm0udmFsdWUueWVhcix0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLDkpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhWydyZXN1bHQnXSl7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxlcnJvciA9PntcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvclxuICAgIH0gKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWRtaW4tY3JlYXRlLXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZG1pbi1jcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5DcmVhdGVTZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGVycm9yOiBhbnk7XG5cbiAgZGFya1RoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGJvZHlCYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZidcbiAgICB9LFxuICAgIGRpYWw6IHtcbiAgICAgIGRpYWxCYWNrZ3JvdW5kQ29sb3I6ICcjNTU1JyxcbiAgICB9LFxuICAgIGNsb2NrRmFjZToge1xuICAgICAgY2xvY2tGYWNlQmFja2dyb3VuZENvbG9yOiAnIzU1NScsXG4gICAgICBjbG9ja0hhbmRDb2xvcjogJyM5ZmJkOTAnLFxuICAgICAgY2xvY2tGYWNlVGltZUluYWN0aXZlQ29sb3I6ICcjZmZmJ1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGlhbG9nIDogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLmdlbmVyYXRlU2Vzc2lvbig1KTtcbiAgfVxuXG4gIG9uQ3JlYXRlKGZvcm06IE5nRm9ybSkge1xuICAgIGxldCBkID0gbmV3IERhdGUoZm9ybS52YWx1ZS5kYXRlKTtcbiAgICBsZXQgbmV3U2VzcyA6IFNlc3Npb25zID17XG4gICAgICBEYXRlIDogZC50b0RhdGVTdHJpbmcoKSxcbiAgICAgIFRpbWUgOiBmb3JtLnZhbHVlLnRpbWUsXG4gICAgICBCaWtlIDogZm9ybS52YWx1ZS5iaWtlLFxuICAgICAgQ2FuY2VsIDogZmFsc2UsXG4gICAgICBJZCA6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5hcGkuY3JlYXRlTmV3U2VzcyhuZXdTZXNzKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVsncmVzdWx0J10pe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL3Nlc3Npb24nXSlcbiAgICAgIH1cbiAgICB9LGVycm9yID0+e1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yXG4gICAgfSApO1xuICB9XG5cbiAgLy90b2RvIHBvcCB1cCB0byBjb25maXJtIDUgeWVhcnMgZ2VuZXJhdGlvblxuXG4gIG9wZW5EaWFsb2coKXtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpbUdlbmVyYXRpb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNsb3NlXCIpO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPnt7ZXJyb3J9fTwvbWF0LWVycm9yPlxcbjxkaXYgKm5nSWY9XFxcIiFpc0xvYWRpbmcgOyBlbHNlIGxvYWRpbmdcXFwiPlxcbiAgPGgzPkfDqW7DqXJhdGlvbiBhdXRvbWF0aXF1ZSBkZSBzZXNzaW9uczwvaDM+XFxuXFxuICA8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIj5cXG5cXG4gICAgPG5nLWNvbnRhaW5lcj5cXG4gICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc2Vzc2lvbiBvZiBsaXN0VHlwZVNlc3Npb25cXFwiID5cXG4gICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XFxcImFkZFR5cGVTZXNzaW9uKHNlc3Npb24uSWQpXFxcIj5cXG4gICAgICAgICAge3tzZXNzaW9uLkRheX19IHt7c2Vzc2lvbi5UaW1lfX1cXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxcbiAgICAgIDwvdWw+XFxuICAgIDwvbmctY29udGFpbmVyPlxcblxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGxhYmVsPlxcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVxcXCJub21icmUgZCdhbm7DqWVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbmdNb2RlbCB2YWx1ZT1cXFwiNVxcXCIgbmFtZT1cXFwieWVhclxcXCI+XFxuICAgICAgPC9sYWJlbD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZ2VuZXJhdGVTZXNzaW9uKGZvcm0pXFxcIj4gamUgY29uZmlybWUgbGEgZ8OpbsOpcmF0aW9uIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTBweFxcXCIgKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPiBhbm51bGVyIDwvYnV0dG9uPlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cXG4gIDxkaXYgc3R5bGU9XFxcImp1c3RpZnktY29udGVudDogY2VudGVyXFxcIj5cXG4gICAgPG1hdC1zcGlubmVyPjwvbWF0LXNwaW5uZXI+XFxuICA8L2Rpdj5cXG48L25nLXRlbXBsYXRlPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCIuZGVsZXRle1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5zZWxlY3R7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5tYXQtc2VsZWN0LCBpbnB1dHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcbm1hdC10YWJ7XFxuICB3aWR0aCA6IDEwMCVcXG59XFxuZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb3JtID4gKiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWF0LWNhcmR7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiA1JSBhdXRvO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxuPG1hdC1ncmlkLWxpc3QgY29scz1cXFwiNVxcXCIgcm93SGVpZ2h0PVxcXCIxMDBcXFwiPlxcbiAgPG1hdC1ncmlkLXRpbGU+PC9tYXQtZ3JpZC10aWxlPlxcblxcbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cXFwiMVxcXCI+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cXFwiU8OpbGVjdGlvbm7DqSBsZSBtb2lzXFxcIiAjbWF0U2VsZWN0IFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCI+XFxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XFxcImxldCBtb250aCBvZiBtb250aHNcXFwiIFt2YWx1ZV09XFxcIm1vbnRoLm51bVxcXCIgPlxcbiAgICAgICAgICB7e21vbnRoLm5hbWV9fVxcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxcbiAgICAgIDwvbWF0LXNlbGVjdD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gIDwvbWF0LWdyaWQtdGlsZT5cXG5cXG4gIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XFxcIjFcXFwiPlxcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XFxcInNlbGVjdFxcXCI+XFxuICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XFxcIlPDqWxlY3Rpb25uw6kgbCdhbm7DqWVcXFwiICNtYXRTZWxlY3QyIFsobmdNb2RlbCldPVxcXCJ5ZWFyXFxcIj5cXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cXFwibGV0IHkgb2YgbGlzdFllYXJcXFwiIFt2YWx1ZV09XFxcInlcXFwiID5cXG4gICAgICAgICAge3t5fX1cXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cXG4gICAgICA8L21hdC1zZWxlY3Q+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVxcXCIxXFxcIj5cXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxsYWJlbD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJub21icmUgZGUgdsOpbG8gZGlzcG9uaWJsZVxcXCIgI25ickJpa2VcXG4gICAgICAgICAgICAgICBbdmFsdWVdPVxcXCJuYnJEaXNwQmlrZVxcXCIgPlxcbiAgICAgIDwvbGFiZWw+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZT48L21hdC1ncmlkLXRpbGU+XFxuXFxuPC9tYXQtZ3JpZC1saXN0PlxcblxcbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcblxcbjxtYXQtY2FyZCAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj5cXG4gIDxtYXQtc3Bpbm5lciBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj48L21hdC1zcGlubmVyPlxcbjwvbWF0LWNhcmQ+XFxuXFxuPG1hdC10YWJsZSAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCIgW2RhdGFTb3VyY2VdPVxcXCJkYXRhU291cmNlXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCIgbWF0U29ydD5cXG5cXG4gIDwhLS0gRGF0ZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiSWRcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gSUQgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuSWR9fSA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIERhdGUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkRhdGVcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gRGF0ZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5EYXRlfX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBUaW1lIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJUaW1lXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IEhldXJlIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50LlRpbWV9fSA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEJpa2UgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkJpa2VcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gVmVsbyBsaWJyZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5CaWtlfX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBTdGF0dXMgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlN0YXR1c1xcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IENvdXJzIGNvbmZpcm3DqSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+XFxuICAgICAgPG1hdC1pY29uICpuZ0lmPVxcXCIhZWxlbWVudC5DYW5jZWw7IGVsc2UgY2FuY2VsXFxcIiBbbmdTdHlsZV09XFxcInsnY29sb3InOidncmVlbid9XFxcIiBtYXRUb29sdGlwPVxcXCJDb25maXJtw6lcXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICA8bmctdGVtcGxhdGUgI2NhbmNlbD5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOidyZWQnfVxcXCIgbWF0VG9vbHRpcD1cXFwiQW5udWzDqVxcXCI+Y2FuY2VsPC9tYXQtaWNvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIExpc3QgaW5zY3JpdCBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJJbmZvXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTGlzdCBpbnNjcml0IDwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50O2xldCBpID0gaW5kZXhcXFwiID5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkxpc3QgaW5zY3JpdFxcXCI+XFxuICAgICAgICA8bWF0LWljb24gKGNsaWNrKT1cXFwib3BlbkRpYWxvZyhpKVxcXCIgW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCI+aW5mbzwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvbWF0LWNlbGw+XFxuXFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gQ2FuY2VsIFNlc3Npb24gQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWN0aW9uXFxcIj5cXG5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cXG4gICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+IHt7IGVycm9yIH19PC9tYXQtZXJyb3I+XFxuICAgICAgQW5udWxhdGlvbiAvIFN1cHByZXNzaW9uXFxuICAgIDwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIiA+XFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJBbm51bGVyXFxcIlxcbiAgICAgICAgICAgICAgKm5nSWY9XFxcIiFlbGVtZW50LkNhbmNlbDsgZWxzZSByZXBsYXlCdG5cXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIkNhbmNlbChlbGVtZW50LklkKVxcXCI+XFxuICAgICAgICAgIGNhbmNlbFxcbiAgICAgICAgPC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICA8bmctdGVtcGxhdGUgI3JlcGxheUJ0bj5cXG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiUmVjcsOpZXJcXFwiPlxcbiAgICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwiUmVwbGF5KGVsZW1lbnQuSWQpXFxcIj5yZXBsYXk8L21hdC1pY29uPlxcbiAgICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjbGFzcz1cXFwiZGVsZXRlXFxcIiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiU3VwcHJpbWVyXFxcIj5cXG4gICAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIkRlbGV0ZShlbGVtZW50LklkKVxcXCI+ZGVsZXRlPC9tYXQtaWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgIDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVxcXCJkaXNwbGF5ZWRDb2x1bW5zXFxcIj48L21hdC1oZWFkZXItcm93PlxcbiAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cXFwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcXFwiPjwvbWF0LXJvdz5cXG5cXG4gIDwvbWF0LXRhYmxlPlxcblwiIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7U2Vzc2lvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZVwiO1xuaW1wb3J0IHtMaXN0UGVyc29uRGlhbG9nfSBmcm9tIFwiLi4vbW9udGgvbW9udGguY29tcG9uZW50XCI7XG5cbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdElucHV0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb24gIHtcbiAgdXNlciA6IEpTT047XG59XG5cbi8vdG9kbyBkaXNwbGF5IGNhbmNlbCArIGRlbGV0ZSArIHJlY3JlYXRlIGVycm9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZG1pbi1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZG1pbi1zZXNzaW9uLmNvbXBvbmVudC5jc3MnLCcuLi9tb250aC9tb250aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5TZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGRhdGE6IEpTT05bXT1bXTtcbiAgcHVibGljIHZhbHVlIDogbnVtYmVyID0gbnVsbDtcbiAgcHVibGljIGxpc3RTZXNzaW9uIDogU2Vzc2lvbnNbXT1bXTtcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxTZXNzaW9ucz47XG4gIHB1YmxpYyBsaXN0UGVyc29uIDogUGVyc29uW109W107XG4gIHB1YmxpYyBsaXN0WWVhcjogbnVtYmVyW109W107XG4gIHB1YmxpYyB5ZWFyOiBudW1iZXI7XG4gIHB1YmxpYyBuYnJEaXNwQmlrZTogU3RyaW5nID0gXCI5XCI7XG4gIHB1YmxpYyBlcnJvcjogU3RyaW5nO1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ0RhdGUnLCAnVGltZScsICdCaWtlJywgJ1N0YXR1cycsJ0luZm8nLCdBY3Rpb24nXTtcblxuICBAVmlld0NoaWxkKCdtYXRTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSBtYXRTZWxlY3QgOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQse3N0YXRpYzpmYWxzZX0pIG5ickJpa2UgOiBNYXRJbnB1dDtcbiAgQFZpZXdDaGlsZCgnbWF0U2VsZWN0Micse3N0YXRpYzpmYWxzZX0pIG1hdFNlbGVjdDIgOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgbW9udGhzID0gW1xuICAgIHtuYW1lIDogXCJqYW52aWVyXCIsIG51bSA6IDF9LFxuICAgIHtuYW1lIDogXCJmZXZyaXJlclwiLCBudW0gOiAyfSxcbiAgICB7bmFtZSA6IFwibWFyc1wiLCBudW0gOiAzfSxcbiAgICB7bmFtZSA6IFwiYXZyaWxcIiwgbnVtIDogNH0sXG4gICAge25hbWUgOiBcIm1haVwiLCBudW0gOiA1fSxcbiAgICB7bmFtZSA6IFwianVpblwiLCBudW0gOiA2fSxcbiAgICB7bmFtZSA6IFwianVpbGxldFwiLCBudW0gOiA3fSxcbiAgICB7bmFtZSA6IFwiYW91dFwiLCBudW0gOiA4fSxcbiAgICB7bmFtZSA6IFwic2VwdGVtYnJlXCIsIG51bSA6IDl9LFxuICAgIHtuYW1lIDogXCJvY3RvYnJlXCIsIG51bSA6IDEwfSxcbiAgICB7bmFtZSA6IFwibm92ZW1icmVcIiwgbnVtIDogMTF9LFxuICAgIHtuYW1lIDogXCJkZWNlbWJyZVwiLCBudW0gOiAxMn0sXG4gIF07XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHVibGljIHRvb2wgOiBUb29sU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG0gPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudmFsdWUgPSBtLmdldE1vbnRoKCkrMTtcbiAgICB0aGlzLnllYXIgPSBtLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5nZXRZZWFyKCk7XG4gICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHRoaXMudmFsdWUsdGhpcy55ZWFyLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLm1hdFNlbGVjdC52YWx1ZUNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHZhbHVlLHRoaXMueWVhci50b1N0cmluZygpKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWF0U2VsZWN0Mi52YWx1ZUNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy55ZWFyID0gdmFsdWU7XG4gICAgICB0aGlzLmFwaS5nZXRNb250aEpzb24odGhpcy52YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmluaXRTZXNzaW9uKHVybGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwaS5nZXRNb250aEpzb24odGhpcy52YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgdGhpcy5pbml0U2Vzc2lvbih1cmxkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTZXNzaW9uKHVybGRhdGEpe1xuXG4gICAgdGhpcy5saXN0U2Vzc2lvbiA9IFtdO1xuXG4gICAgdGhpcy5saXN0UGVyc29uID0gW107XG5cblxuICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXJsZGF0YSkpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgdGVtcFNlc3MgPSB0aGlzLnRvb2wuaW5pdFRlbXBTZXNzKHRoaXMuZGF0YVtpXSx0aGlzLmRhdGFbaV1bXCJEYXRlXCJdKTtcbiAgICAgIHRlbXBTZXNzLkRhdGUgPSB0aGlzLnRvb2wuc3dpdGNoRGF0ZShuZXcgRGF0ZSh0ZW1wU2Vzcy5EYXRlKSk7XG4gICAgICB0aGlzLmxpc3RTZXNzaW9uLnB1c2godGVtcFNlc3MpO1xuICAgICAgdGhpcy5saXN0UGVyc29uLnB1c2goe1xuICAgICAgICB1c2VyIDogdGhpcy5kYXRhW2ldW1wiaWRJbnNjcmlwdGlvblwiXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmxpc3RTZXNzaW9uKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgb3BlbkRpYWxvZyhpZCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTGlzdFBlcnNvbkRpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB0aGlzLmxpc3RQZXJzb25baWRdLnVzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGdldFllYXIoKXtcbiAgICBmb3IodmFyIGkgPSAodGhpcy55ZWFyKTsgaSA8PSAodGhpcy55ZWFyKzEwKTsgaSsrKXtcbiAgICAgIHRoaXMubGlzdFllYXIucHVzaChpKTt9XG4gIH1cblxuICBSZXBsYXkoaWQ6IGFueSkge1xuICAgIHRoaXMuYXBpLnBvc3RSZW5ld1Nlc3MoaWQsIHRoaXMubmJyQmlrZS52YWx1ZSkuc3Vic2NyaWJlKFxuICAgICAgdXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmJyRGlzcEJpa2UgPSB0aGlzLm5ickJpa2UudmFsdWU7XG4gICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XG4gICAgICB9XG4gICAgfSwgZXJyb3IxID0+ICh0aGlzLmhhbmRlbEVycm9yKGVycm9yMSkpKTtcbiAgfVxuXG4gIENhbmNlbChpZDogYW55KSB7XG4gICAgdGhpcy5hcGkucG9zdENhbmNlbFNlc3MoaWQpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhW1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAgIH1cbiAgICB9LCBlcnJvcjEgPT4gKHRoaXMuaGFuZGVsRXJyb3IoZXJyb3IxKSkpO1xuICB9XG5cbiAgRGVsZXRlKGlkOiBhbnkpIHtcbiAgICB0aGlzLmFwaS5kZWxldGVTZXNzKGlkKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XG4gICAgICB9XG4gICAgfSwgZXJyb3IxID0+ICh0aGlzLmhhbmRlbEVycm9yKGVycm9yMSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGVsRXJyb3IoZXJyb3IxOiBhbnkpIHtcbiAgICB0aGlzLmVycm9yID0gZXJyb3IxO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIm1hdC1jYXJke1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZD5cXG4gIDxtYXQtbGlzdC1pdGVtPlxcbiAgICA8YSBtYXQtZmxhdC1idXR0b24gcm91dGVyTGluaz1cXFwiL2FkbWluL1Nlc3Npb25cXFwiPiBTZXNzaW9ucyA8L2E+XFxuICA8L21hdC1saXN0LWl0ZW0+XFxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG5cXG4gIDxtYXQtbGlzdC1pdGVtPlxcbiAgICA8YSBtYXQtZmxhdC1idXR0b24gcm91dGVyTGluaz1cXFwiL2FkbWluL0Fib25uZW1lbnRcXFwiPiBBYm9ubmVtZW50IDwvYT5cXG4gIDwvbWF0LWxpc3QtaXRlbT5cXG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcblxcblxcbiAgPG1hdC1saXN0LWl0ZW0+XFxuICAgIDxhIG1hdC1mbGF0LWJ1dHRvbiByb3V0ZXJMaW5rPVxcXCIvYWRtaW4vU2Vzc2lvbi9DcmVhdGVcXFwiPiBOb3V2ZWxsZSBTZXNzaW9uIDwvYT5cXG4gIDwvbWF0LWxpc3QtaXRlbT5cXG48L21hdC1jYXJkPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkbWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRtaW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvL3RvZG8gY3JlYXRpb24gcGFnZSBnZXN0aW9uIHR5cGUgZGUgc2Vzc2lvbiBkaXNwb25pYmxlXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge01vbnRoQ29tcG9uZW50fSBmcm9tIFwiLi9tb250aC9tb250aC5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5Db21wb25lbnR9IGZyb20gXCIuL2FkbWluL2FkbWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pblNlc3Npb25Db21wb25lbnR9IGZyb20gXCIuL2FkbWluLXNlc3Npb24vYWRtaW4tc2Vzc2lvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5BYm9Db21wb25lbnR9IGZyb20gXCIuL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluQ3JlYXRlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi9ndWFyZC9hdXRoLmd1YXJkJztcbmltcG9ydCB7QWRtaW5HdWFyZH0gZnJvbSAnLi9ndWFyZC9hZG1pbi5ndWFyZCc7XG5pbXBvcnQge1R5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICcuL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50JztcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6JycsXG4gICAgY29tcG9uZW50IDogSG9tZUNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBdXRoR3VhcmRdXG4gIH0sXG4gIHtcbiAgICBwYXRoOidsb2dpbicsXG4gICAgY29tcG9uZW50IDogTG9naW5Db21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOidzaWdudXAnLFxuICAgIGNvbXBvbmVudCA6IFNpZ251cENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6J21vbnRoJyxcbiAgICBjb21wb25lbnQgOiBNb250aENvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBdXRoR3VhcmRdXG4gIH0sXG4gIHtcbiAgICBwYXRoOidwcm9maWxlJyxcbiAgICBjb21wb25lbnQgOiBQcm9maWxlQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0F1dGhHdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluJyxcbiAgICBjb21wb25lbnQgOiBBZG1pbkNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBZG1pbkd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDonYWRtaW4vU2Vzc2lvbicsXG4gICAgY29tcG9uZW50IDogQWRtaW5TZXNzaW9uQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0FkbWluR3VhcmRdXG5cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluL0Fib25uZW1lbnQnLFxuICAgIGNvbXBvbmVudCA6IEFkbWluQWJvQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0FkbWluR3VhcmRdXG5cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluL1Nlc3Npb24vQ3JlYXRlJyxcbiAgICBjb21wb25lbnQgOiBBZG1pbkNyZWF0ZVNlc3Npb25Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGUgOiBbQWRtaW5HdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluL1Nlc3Npb24vVHlwZScsXG4gICAgY29tcG9uZW50IDogVHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGUgOiBbQWRtaW5HdWFyZF1cbiAgfSxcblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyogTkFWIEJBUiAqL1xcbi5zaWRlbmF2LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi5zaWRlbmF2IHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmhpZGRlbntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbm1hdC10b29sYmFye1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1hdC10b29sYmFyIGF7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxubWF0LXRvb2xiYXIgYXtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbD5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG48L2hlYWQ+XFxuPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cXFwic2lkZW5hdi1jb250YWluZXJcXFwiPlxcbiAgPG1hdC1zaWRlbmF2ICNkcmF3ZXIgY2xhc3M9XFxcInNpZGVuYXZcXFwiXFxuICAgICAgICAgICAgICAgZml4ZWRJblZpZXdwb3J0PVxcXCJmbGFzZVxcXCJcXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XFxcIntoaWRkZW4gOiAhKGlzSGFuZHNldCQgfCBhc3luYyl9XFxcIlxcbiAgICAgICAgICAgICAgIFthdHRyLnJvbGVdPVxcXCIoaXNIYW5kc2V0JCB8IGFzeW5jKSA/ICdkaWFsb2cnIDogJ25hdmlnYXRpb24nXFxcIlxcbiAgICAgICAgICAgICAgIFttb2RlXT1cXFwiKGlzSGFuZHNldCQgfCBhc3luYykgPyAnb3ZlcicgOiAnc2lkZSdcXFwiXFxuICAgICAgICAgICAgICAgW29wZW5lZF09XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpID09PSBmYWxzZVxcXCI+XFxuICAgIDxkaXYgKm5nVGVtcGxhdGVPdXRsZXQ9XFxcIm1lbnV0ZW1wbGF0ZVxcXCI+PC9kaXY+XFxuICA8L21hdC1zaWRlbmF2PlxcbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XFxuICAgIDxtYXQtdG9vbGJhciBjb2xvcj1cXFwicHJpbWFyeVxcXCIgKm5nSWY9XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpOyBlbHNlIGRlc2t0b3BOYXZcXFwiPlxcbiAgICAgIDxidXR0b25cXG4gICAgICAgIHR5cGU9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBzaWRlbmF2XFxcIlxcbiAgICAgICAgbWF0LWljb24tYnV0dG9uXFxuICAgICAgICAoY2xpY2spPVxcXCJkcmF3ZXIudG9nZ2xlKClcXFwiXFxuICAgICAgICAqbmdJZj1cXFwiaXNIYW5kc2V0JCB8IGFzeW5jXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC9tYXQtdG9vbGJhcj5cXG5cXG4gICAgPG5nLWNvbnRhaW5lcj5cXG4gICAgICA8Ym9keT5cXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgPC9ib2R5PlxcbiAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cXG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cXG5cXG48L2h0bWw+XFxuXFxuPG5nLXRlbXBsYXRlICNkZXNrdG9wTmF2ID5cXG4gIDxtYXQtdG9vbGJhciBjbGFzcz1cXFwiTmF2YmFyXFxcIiBjb2xvcj1cXFwicHJpbWFyeVxcXCI+XFxuICAgIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz1cXFwiLlxcXCIgPlxcbiAgICAgIDxtYXQtaWNvbj4gaG9tZSA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBBY2N1ZWlsIDwvc3Bhbj5cXG4gICAgPC9hPlxcblxcbiAgICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9XFxcIi9tb250aFxcXCI+XFxuICAgICAgPG1hdC1pY29uPiBkYXRlX3JhbmdlIDwvbWF0LWljb24+XFxuICAgICAgPHNwYW4+IE1vaXMgPC9zcGFuPlxcbiAgICA8L2E+XFxuXFxuICAgIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz1cXFwiL2xvZ2luXFxcIiAqbmdJZj1cXFwiIWlzQXV0aCA7IGVsc2UgcHJvZmlsZVxcXCI+XFxuICAgICAgPG1hdC1pY29uPiBwZXJzb24gPC9tYXQtaWNvbj5cXG4gICAgICA8c3Bhbj4gTG9naW4gPC9zcGFuPlxcbiAgICA8L2E+XFxuICA8L21hdC10b29sYmFyPlxcbjwvbmctdGVtcGxhdGU+XFxuXFxuPG5nLXRlbXBsYXRlICNtZW51dGVtcGxhdGU+XFxuICA8bWF0LW5hdi1saXN0PlxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcIi5cXFwiPlxcbiAgICAgIDxtYXQtaWNvbj4gaG9tZSA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBBY2N1ZWlsIDwvc3Bhbj5cXG4gICAgPC9hPlxcblxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcIi9tb250aFxcXCI+XFxuICAgICAgPG1hdC1pY29uPiBkYXRlX3JhbmdlIDwvbWF0LWljb24+XFxuICAgICAgPHNwYW4+IE1vaXMgPC9zcGFuPlxcbiAgICA8L2E+XFxuXFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiL2xvZ2luXFxcIiAqbmdJZj1cXFwiIWlzQXV0aDsgZWxzZSBwcm9maWxlXFxcIj5cXG4gICAgICA8bWF0LWljb24+IHBlcnNvbiA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBMb2dpbiA8L3NwYW4+XFxuICAgIDwvYT5cXG5cXG4gIDwvbWF0LW5hdi1saXN0PlxcbjwvbmctdGVtcGxhdGU+XFxuXFxuPG5nLXRlbXBsYXRlICNwcm9maWxlPlxcbiAgPGEgbWF0LWxpc3QtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVxcXCJtZW51XFxcIiAqbmdJZj1cXFwiaXNBdXRoXFxcIj5cXG4gICAgPG1hdC1pY29uPiBwZXJzb24gPC9tYXQtaWNvbj5cXG4gICAgPHNwYW4+IHt7dXNlci5sYXN0TmFtZX19IHt7dXNlci5maXJzdE5hbWV9fSA8L3NwYW4+XFxuICA8L2E+XFxuXFxuICA8bWF0LW1lbnUgI21lbnU9XFxcIm1hdE1lbnVcXFwiPlxcbiAgICA8YSBtYXQtbWVudS1pdGVtIHJvdXRlckxpbms9XFxcIi9wcm9maWxlXFxcIj5Qcm9maWw8L2E+XFxuICAgIDxhIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPkTDqWNvbm5leGlvbjwvYT5cXG4gIDwvbWF0LW1lbnU+XFxuXFxuICA8YSBtYXQtbGlzdC1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XFxcImFkbWluXFxcIiAqbmdJZj1cXFwidXNlci5Sb2xlWzBdID09PSAnUk9MRV9BRE1JTidcXFwiPlxcbiAgICA8bWF0LWljb24+YnVpbGQ8L21hdC1pY29uPlxcbiAgICA8c3Bhbj4gQWRtaW48L3NwYW4+XFxuICA8L2E+XFxuPC9uZy10ZW1wbGF0ZT5cXG5cXG48bWF0LW1lbnUgI2FkbWluPVxcXCJtYXRNZW51XFxcIj5cXG4gIDxtYXQtbmF2LWxpc3Q+XFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiYWRtaW4vU2Vzc2lvblxcXCI+U2Vzc2lvbnM8L2E+XFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiYWRtaW4vU2Vzc2lvbi9DcmVhdGVcXFwiPk5vdXZlbGxlIFNlc3Npb25zPC9hPlxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcImFkbWluL0Fib25uZW1lbnRcXFwiPkFib25uZW1lbnQ8L2E+XFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiYWRtaW4vU2Vzc2lvbi9UeXBlXFxcIj5UeXBlIFNlc3Npb25zPC9hPlxcbiAgPC9tYXQtbmF2LWxpc3Q+XFxuPC9tYXQtbWVudT5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdH0gZnJvbSBcIkBtb2Jpc2Nyb2xsL2FuZ3VsYXItbGl0ZS9zcmMvanMvZnJhbWV3b3Jrcy9hbmd1bGFyXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuLy9UT0RPIGdyYXBoaWNhbCByZXNwb25zaXZlIGZvciBkZXZpY2VzXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQudG5zLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0IHtcbiAgdGl0bGUgPSAnQXF1YWJpa2UnO1xuICBwdWJsaWMgdXNlcjogVXNlcjtcbiAgcHVibGljIGlzQXV0aDogYm9vbGVhbjtcbiAgcHVibGljIGlzSGFuZHNldCQgPSB0aGlzLnRvb2wuaXNIYW5kc2V0JDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGggOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5hdXRoLmdldEF1dGhTdGF0dXNMaXN0ZW5lcigpLnN1YnNjcmliZShcbiAgICAgIGF1dGg9PntcbiAgICAgICAgaWYoYXV0aCl7XG4gICAgICAgICAgdGhpcy5pc0F1dGggPSB0aGlzLmF1dGguZ2V0SXNBdXRoKCk7XG4gICAgICAgICAgdGhpcy51c2VyID0gdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGlmKHRoaXMuYXV0aC5nZXRJc0F1dGgoKSl7XG4gICAgICB0aGlzLmlzQXV0aCA9IHRoaXMuYXV0aC5nZXRJc0F1dGgoKTtcbiAgICAgIHRoaXMudXNlciA9IHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcbiAgICB0aGlzLmlzQXV0aCA9IGZhbHNlXG4gIH1cbn1cbiIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJ0BzcmMvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RQZXJzb25EaWFsb2csIE1vbnRoQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvbW9udGgvbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsIE5vb3BBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkXCI7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJsZVwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uXCI7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uXCI7XG5pbXBvcnQge1xuICBEYXRlQWRhcHRlcixcbiAgTUFUX0RBVEVfRk9STUFUUyxcbiAgTUFUX0RBVEVfTE9DQUxFLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGVcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdFwiO1xuaW1wb3J0IHtcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdERpYWxvZ01vZHVsZSxcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICBNYXRTbmFja0JhcixcbiAgTWF0U25hY2tCYXJDb250YWluZXIsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXRTb3J0TW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXJcIjtcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2lucHV0XCI7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXJcIjtcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZFwiO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXJcIjtcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7RWRpdFByb2ZpbGVDb21wb25lbnQsIFByb2ZpbGVDb21wb25lbnR9IGZyb20gJ0BzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0R3JpZExpc3RNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0XCI7XG5pbXBvcnQgeyBBZG1pbkNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pblNlc3Npb25Db21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7QWRtaW5BYm9Db21wb25lbnQsIFNob3dFZGl0QWJvVHlwZX0gZnJvbSAnQHNyYy9hcHAvYWRtaW4tYWJvL2FkbWluLWFiby5jb21wb25lbnQnO1xuaW1wb3J0IHtBZG1pbkNyZWF0ZVNlc3Npb25Db21wb25lbnQsIENvbmZpbUdlbmVyYXRpb25Db21wb25lbnR9IGZyb20gJ0BzcmMvYXBwL2FkbWluLWNyZWF0ZS1zZXNzaW9uL2FkbWluLWNyZWF0ZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge05neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZX0gZnJvbSBcIm5neC1tYXRlcmlhbC10aW1lcGlja2VyXCI7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90YWJzXCI7XG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcbmltcG9ydCB7VHlwZVNlc3Npb25Db21wb25lbnR9IGZyb20gJ0BzcmMvYXBwL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7QWRkVHlwZVNlc3Npb25Db21wb25lbnR9IGZyb20gJ0BzcmMvYXBwL3R5cGUtc2Vzc2lvbi9hZGQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0VkaXRUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvdHlwZS1zZXNzaW9uL2VkaXQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbEFib0NvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvYWRtaW4tYWJvL2RlbC1hYm8uY29tcG9uZW50JztcbmltcG9ydCB7bGlzdEFib1Nlc3Npb259IGZyb20gJ0BzcmMvYXBwL3R5cGUtc2Vzc2lvbi9saXN0LWFiby1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZsZXhMYXlvdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgTWF0U2lkZW5hdk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHtEZWxUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvdHlwZS1zZXNzaW9uL2RlbC10eXBlLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHtBUFBfQkFTRV9IUkVGLCBIYXNoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgTW9udGhDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgTGlzdFBlcnNvbkRpYWxvZyxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gICAgUHJvZmlsZUNvbXBvbmVudCxcbiAgICBBZG1pbkNvbXBvbmVudCxcbiAgICBBZG1pblNlc3Npb25Db21wb25lbnQsXG4gICAgQWRtaW5BYm9Db21wb25lbnQsXG4gICAgQWRtaW5DcmVhdGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIFNob3dFZGl0QWJvVHlwZSxcbiAgICBFZGl0UHJvZmlsZUNvbXBvbmVudCxcbiAgICBUeXBlU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBBZGRUeXBlU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBDb25maW1HZW5lcmF0aW9uQ29tcG9uZW50LFxuICAgIEVkaXRUeXBlU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBEZWxBYm9Db21wb25lbnQsXG4gICAgbGlzdEFib1Nlc3Npb24sXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBEZWxUeXBlU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBBdXRvR2VuZXJhdGVkQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXG4gICAgTGF5b3V0TW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE1vbnRoQ29tcG9uZW50LFxuICAgIExpc3RQZXJzb25EaWFsb2csXG4gICAgU2hvd0VkaXRBYm9UeXBlLFxuICAgIEVkaXRQcm9maWxlQ29tcG9uZW50LFxuICAgIEFkZFR5cGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIENvbmZpbUdlbmVyYXRpb25Db21wb25lbnQsXG4gICAgRWRpdFR5cGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIERlbEFib0NvbXBvbmVudCxcbiAgICBsaXN0QWJvU2Vzc2lvbixcbiAgICBEZWxUeXBlU2Vzc2lvbkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBdXRoU2VydmljZSxcbiAgICBBcGlTZXJ2aWNlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICB7IHByb3ZpZGU6IE1BVF9ESUFMT0dfREVGQVVMVF9PUFRJT05TLCB1c2VWYWx1ZTogeyBoYXNCYWNrZHJvcDogdHJ1ZSB9IH0sXG4gICAgeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogXCIvXCIgfSxcbiAgICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9LFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgQ29va2llU2VydmljZSxcbiAgICBNYXRTbmFja0JhcixcblxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzIDogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8QnV0dG9uIHRleHQ9XFxcImF1dG8tZ2VuZXJhdGVkIHdvcmtzIVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+PC9CdXR0b24+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYXV0by1nZW5lcmF0ZWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXV0b0dlbmVyYXRlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGggOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIHJvdXRlciA6IFJvdXRlcikge1xuICB9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XG4gICAgaWYoIHRoaXMuYXV0aC5nZXRJc0F1dGgoKSAmJiB0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKS5Sb2xlWzBdID09PSBcIlJPTEVfQURNSU5cIiApe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGggOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIHJvdXRlciA6IFJvdXRlcikge1xuICB9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XG4gICAgaWYoIHRoaXMuYXV0aC5nZXRJc0F1dGgoKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICAgIH1cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5jZW50ZXJ7XFxuICBtYXJnaW46IDIlIDIwJSA7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImNlbnRlclxcXCI+XFxuICA8bWF0LWNhcmQ+XFxuICAgIDxtYXQtY2FyZC10aXRsZT5cXG4gICAgICB7e2RhdGV9fVxcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxcbiAgPC9tYXQtY2FyZD5cXG5cXG4gIDxtYXQtbGlzdCAqbmdGb3I9XFxcImxldCBob3VyIG9mIHRpbWVcXFwiPlxcblxcbiAgICA8bWF0LWxpc3QtaXRlbT48L21hdC1saXN0LWl0ZW0+XFxuICAgIDxtYXQtbGlzdC1pdGVtPlxcbiAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5cXG4gICAgICAgIHt7aG91cn19XFxuICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cXG4gICAgPC9tYXQtbGlzdC1pdGVtPlxcblxcbiAgICA8bWF0LWxpc3QgKm5nRm9yPVxcXCJsZXQgdXNlciBvZiBsaXN0VXNlclswXVxcXCI+XFxuICAgICAgPG1hdC1saXN0LWl0ZW0+XFxuICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5wZXJzb248L21hdC1pY29uPlxcbiAgICAgICAge3t1c2VyLmxhc3ROYW1lfX0ge3t1c2VyLmZpcnN0TmFtZX19XFxuICAgICAgPC9tYXQtbGlzdC1pdGVtPlxcbiAgICAgIDxtYXQtZGl2aWRlciA+PC9tYXQtZGl2aWRlcj5cXG5cXG4gICAgPC9tYXQtbGlzdD5cXG4gIDwvbWF0LWxpc3Q+XFxuPC9kaXY+XFxuXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZS9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QnJlYWtwb2ludHN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBkYXRhOiBKU09OW109W107XG4gIHB1YmxpYyBsaXN0VXNlcjogYW55W10gPSBbXTtcbiAgcHVibGljIGRhdGU7XG4gIHB1YmxpYyB0aW1lIDogYW55W109IFtdO1xuICBwdWJsaWMgaXNIYW5kc2V0JCA9IHRoaXMudG9vbC5pc0hhbmRzZXQkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGRheSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5kYXRlID0gdGhpcy50b29sLnN3aXRjaFByb2ZpbGVEYXRlKGRheS50b0lTT1N0cmluZygpKTtcbiAgICB0aGlzLmFwaS5nZXRIb21lSnNvbigpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXJsZGF0YSkpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLnRpbWUucHVzaCh0aGlzLmRhdGFbal1bXCJ0aW1lXCJdLnNwbGl0KCcgJylbMV0pO1xuXG4gICAgICAgIGxldCBpbnNjcmlwdGlvbiA9IHRoaXMuZGF0YVtqXVtcImlkSW5zY3JpcHRpb25cIl07XG4gICAgICAgIGxldCB1c2VyOiBKU09OW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnNjcmlwdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHVzZXIucHVzaChcbiAgICAgICAgICAgIGluc2NyaXB0aW9uW2ldW1wiaWRQZXJzb25cIl1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0VXNlci5wdXNoKHVzZXIpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuYnRue1xcbiAgbWFyZ2luLWxlZnQ6MyVcXG59XFxubWF0LWZvcm0tZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1hdC1zcGlubmVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxubWF0LWNhcmR7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5idXR0b257XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1jYXJkPlxcbiAgPG1hdC1zcGlubmVyICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvbWF0LXNwaW5uZXI+XFxuICA8Zm9ybSAoc3VibWl0KT1cXFwib25Mb2dpbihsb2dpbkZvcm0pXFxcIiAjbG9naW5Gb3JtPVxcXCJuZ0Zvcm1cXFwiICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIj48IS0tIGRvbid0IGZvcmdldCB0aGUgXFxcIiFcXFwiLCB0aHVzIG5vdCBpc0xvYWRpbmctLT5cXG4gICAgPHNwYW4gKm5nSWY9XFxcIkVycm9yXFxcIiBjbGFzcz1cXFwibWF0LWVycm9yXFxcIj4ge3tFcnJvcn19IDwvc3Bhbj5cXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgbmdNb2RlbCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiICByZXF1aXJlZD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJwYXNzd29yZFxcXCIgbmdNb2RlbCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1vdCBkZSBwYXNzZVxcXCIgIHJlcXVpcmVkIHBhc3N3b3JkPlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPkNvbm5lY3Rpb248L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgY2xhc3M9XFxcImJ0blxcXCIgcm91dGVyTGluaz1cXFwiL3NpZ251cFxcXCI+XFxuICAgICAgPHNwYW4+IEluc2NyaXB0aW9uPC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gIDwvZm9ybT5cXG48L21hdC1jYXJkPlxcblwiIiwiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbi8vdG9kbyBkaXNwbGF5IGxvZ2luIGVycm9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsIC8vIC0tPiBjYW4gYmUgb21taXRlZCBiZWNhdXNlIG9mIHRoZSByb3V0ZXNcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0e1xuXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgRXJyb3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpe31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRBdXRoU3RhdHVzTGlzdGVuZXIoKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBhdXRoID0+IHtcbiAgICAgICAgaWYoYXV0aCl7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEVycm9yTGlzdGVuZXIoKS5zdWJzY3JpYmUobmV4dD0+e1xuICAgICAgICAgIHRoaXMuRXJyb3IgPSBuZXh0O1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgfSxlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5FcnJvciA9IGVycm9yO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25Mb2dpbihmb3JtOiBOZ0Zvcm0pIHtcbiAgICBpZiAoZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5Vc2VyKGZvcm0udmFsdWUudXNlcm5hbWUsIGZvcm0udmFsdWUucGFzc3dvcmQpO1xuICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuc2lkZW5hdi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2lkZW5hdiB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVxcXCJzaWRlbmF2LWNvbnRhaW5lclxcXCI+XFxuICA8bWF0LXNpZGVuYXYgI2RyYXdlciBjbGFzcz1cXFwic2lkZW5hdlxcXCIgZml4ZWRJblZpZXdwb3J0XFxuICAgICAgW2F0dHIucm9sZV09XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpID8gJ2RpYWxvZycgOiAnbmF2aWdhdGlvbidcXFwiXFxuICAgICAgW21vZGVdPVxcXCIoaXNIYW5kc2V0JCB8IGFzeW5jKSA/ICdvdmVyJyA6ICdzaWRlJ1xcXCJcXG4gICAgICBbb3BlbmVkXT1cXFwiKGlzSGFuZHNldCQgfCBhc3luYykgPT09IGZhbHNlXFxcIj5cXG4gICAgPG1hdC1uYXYtbGlzdD5cXG5cXG4gICAgPC9tYXQtbmF2LWxpc3Q+XFxuICA8L21hdC1zaWRlbmF2PlxcbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XFxuICAgIDxtYXQtdG9vbGJhciBjb2xvcj1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgPGJ1dHRvblxcbiAgICAgICAgdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgYXJpYS1sYWJlbD1cXFwiVG9nZ2xlIHNpZGVuYXZcXFwiXFxuICAgICAgICBtYXQtaWNvbi1idXR0b25cXG4gICAgICAgIChjbGljayk9XFxcImRyYXdlci50b2dnbGUoKVxcXCJcXG4gICAgICAgICpuZ0lmPVxcXCJpc0hhbmRzZXQkIHwgYXN5bmNcXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XFxcIlNpZGUgbmF2IHRvZ2dsZSBpY29uXFxcIj5tZW51PC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgICA8c3Bhbj5mcm9udGVuZDwvc3Bhbj5cXG4gICAgPC9tYXQtdG9vbGJhcj5cXG4gICAgPCEtLSBBZGQgQ29udGVudCBIZXJlIC0tPlxcbiAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxcbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCB7XG5cbiAgaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoQnJlYWtwb2ludHMuSGFuZHNldClcbiAgICAucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpLFxuICAgICAgc2hhcmVSZXBsYXkoKVxuICAgICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge31cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtYXQtcm93IGRldGFpbC1yb3dcXFwiPlxcbiAgPG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XFxcImRhdGFcXFwiIGNsYXNzPVxcXCJtYXQtZWxldmF0aW9uLXo4XFxcIj5cXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlVzZXJcXFwiPlxcbiAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEluc2NyaXB0aW9uIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQubGFzdE5hbWV9fSB7e2VsZW1lbnQuZmlyc3ROYW1lfX08L21hdC1jZWxsPlxcbiAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gICAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XFxcIlBlcnNvbkNvbFxcXCI+PC9tYXQtaGVhZGVyLXJvdz5cXG4gICAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cXFwibGV0IHJvdzsgY29sdW1uczogUGVyc29uQ29sO1xcXCI+XFxuICAgIDwvbWF0LXJvdz5cXG4gIDwvbWF0LXRhYmxlPlxcbjwvZGl2PlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJtYXQtdGFibGV7XFxuICBtYXJnaW46IDMlIDIlIDtcXG4gIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uc2VsZWN0e1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuXFxubWF0LXNlbGVjdHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxubWF0LWNlbGx7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1hdC1oZWFkZXItY2VsbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1hdC1mb3JtLWZpZWxke1xcbiAgd2lkdGg6IDExNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ubWF0LWNvbHVtbi1EYXRlIHtcXG4gIGZsZXg6IDAgMCAxMCU7XFxufVxcblxcbi5hY3Rpb24tYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjE4NjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAubWF0LWNvbHVtbi1BY3Rpb24ge1xcbiAgICBmbGV4OiAwIDAgMzAlO1xcbiAgfVxcbiAgLm1hdC1jb2x1bW4tRGF0ZSB7XFxuICAgIGZsZXg6IDAgMCAzMCU7XFxuICB9XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJcXG48bWF0LWdyaWQtbGlzdCBjb2xzPVxcXCI0XFxcIiByb3dIZWlnaHQ9XFxcIjEwMFxcXCI+XFxuICA8bWF0LWdyaWQtdGlsZT48L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVxcXCIxXFxcIj5cXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVxcXCJNb2lzXFxcIiAjbWF0U2VsZWN0IFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCI+XFxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XFxcImxldCBtb250aCBvZiBtb250aHNcXFwiIFt2YWx1ZV09XFxcIm1vbnRoLm51bVxcXCIgPlxcbiAgICAgICAgICB7e21vbnRoLm5hbWV9fVxcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxcbiAgICAgIDwvbWF0LXNlbGVjdD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gIDwvbWF0LWdyaWQtdGlsZT5cXG5cXG4gIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XFxcIjFcXFwiPlxcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XFxcInNlbGVjdFxcXCI+XFxuICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XFxcIkFubsOpZVxcXCIgI21hdFNlbGVjdDIgWyhuZ01vZGVsKV09XFxcInllYXJcXFwiPlxcbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVxcXCJsZXQgeSBvZiBsaXN0WWVhclxcXCIgW3ZhbHVlXT1cXFwieVxcXCIgPlxcbiAgICAgICAgICB7e3l9fVxcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxcbiAgICAgIDwvbWF0LXNlbGVjdD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gIDwvbWF0LWdyaWQtdGlsZT5cXG5cXG48L21hdC1ncmlkLWxpc3Q+XFxuXFxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XFxuXFxuPG1hdC1jYXJkICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiIHN0eWxlPVxcXCJtYXJnaW46IGF1dG9cXFwiPlxcbiAgPG1hdC1zcGlubmVyIHN0eWxlPVxcXCJtYXJnaW46IGF1dG9cXFwiPjwvbWF0LXNwaW5uZXI+XFxuPC9tYXQtY2FyZD5cXG5cXG48bWF0LXRhYmxlICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIiBbZGF0YVNvdXJjZV09XFxcImRhdGFTb3VyY2VcXFwiIGNsYXNzPVxcXCJtYXQtZWxldmF0aW9uLXo4XFxcIiBtYXRTb3J0PlxcblxcbiAgPCEtLSBEYXRlIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJEYXRlXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+RGF0ZTwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuRGF0ZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBUaW1lIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJUaW1lXFxcIiA+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPkhldXJlPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5UaW1lfX08L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEJpa2UgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkJpa2VcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5WZWxvKHMpIGxpYnJlKHMpPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5CaWtlfX08L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIFN0YXR1cyBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiU3RhdHVzXFxcIiA+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XFxuICAgICAgQ291cnMgY29uZmlybcOpXFxuICAgIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj5cXG4gICAgICA8bWF0LWljb24gKm5nSWY9XFxcIiFlbGVtZW50LkNhbmNlbDsgZWxzZSBjYW5jZWxcXFwiIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J2dyZWVuJ31cXFwiXFxuICAgICAgICAgICAgICAgIG1hdFRvb2x0aXA9XFxcIkNvbmZpcm3DqVxcXCI+Y2hlY2s8L21hdC1pY29uPlxcbiAgICAgIDxuZy10ZW1wbGF0ZSAjY2FuY2VsPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3JlZCd9XFxcIiBtYXRUb29sdGlwPVxcXCJBbm51bGVyXFxcIj5jYW5jZWw8L21hdC1pY29uPlxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gQnV0dG9uIENvbHVtbi0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkluZm9cXFwiID5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cXG4gICAgICBMaXN0ZSBQYXJ0aWNpcGFudChlKXNcXG4gICAgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJMaXN0ZSBQYXJ0aWNpcGFudChlKXNcXFwiPlxcbiAgICAgICAgICA8bWF0LWljb24gKGNsaWNrKT1cXFwib3BlbkRpYWxvZyhlbGVtZW50KVxcXCIgW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCI+aW5mbzwvbWF0LWljb24+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9tYXQtY2VsbD5cXG5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBCdXR0b24gMiBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJBY3Rpb25cXFwiPlxcblxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxcbiAgICAgIEluc2NyaXB0aW9uL0TDqXNpbnNjcml0cHRpb25cXG4gICAgPC9tYXQtaGVhZGVyLWNlbGw+XFxuXFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiID5cXG4gICAgICA8ZGl2ICpuZ0lmPVxcXCJjaGVja0lmRGlzYWJsZShlbGVtZW50KSA7dGhlbiBjYW5jZWxCdG4gZWxzZSBCdG5cXFwiPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxuZy10ZW1wbGF0ZSAjY2FuY2VsQnRuPlxcbiAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gbWF0VG9vbHRpcD1cXFwiQW5udWxlclxcXCIgZGlzYWJsZWQgPlxcbiAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XFxcImNoZWNrSWZTdWIoZWxlbWVudCk7dGhlbiB1bnN1YiBlbHNlIHN1YlxcXCI+PC9tYXQtaWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgPG5nLXRlbXBsYXRlICNCdG4+XFxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgPlxcbiAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XFxcImNoZWNrSWZTdWIoZWxlbWVudCk7dGhlbiB1bnN1YjIgZWxzZSBzdWJcXFwiPjwvbWF0LWljb24+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICAgIDxuZy10ZW1wbGF0ZSAjc3ViPlxcbiAgICAgICAgICA8bWF0LWljb24gY29sb3I9XFxcIndoaXRlXFxcIiBtYXRUb29sdGlwPVxcXCJJbnNjcmlwdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcInN1YnNjcmliZShlbGVtZW50LklkKVxcXCI+YWRkPC9tYXQtaWNvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICAgIDxuZy10ZW1wbGF0ZSAjdW5zdWI+XFxuICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj1cXFwid2hpdGVcXFwiIG1hdFRvb2x0aXA9XFxcIkTDqXNpbnNjcmlwdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcInVuU3Vic2NyaWJlKGVsZW1lbnQuSWQpXFxcIj5jaGVjazwvbWF0LWljb24+XFxuICAgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXG4gICAgICA8bmctdGVtcGxhdGUgI3Vuc3ViMj5cXG4gICAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwie2NvbG9yIDogJyM0NGMzNDQnfVxcXCIgbWF0VG9vbHRpcD1cXFwiRMOpc2luc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwidW5TdWJzY3JpYmUoZWxlbWVudC5JZClcXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcblxcblxcbiAgICA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cXFwiZGlzcGxheWVkQ29sdW1uc1xcXCI+PC9tYXQtaGVhZGVyLXJvdz5cXG4gIDxtYXQtcm93ICptYXRSb3dEZWY9XFxcImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XFxcIj5cXG4gIDwvbWF0LXJvdz5cXG5cXG48L21hdC10YWJsZT5cXG5cXG5cXG5cXG5cXG5cIiIsImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0luc2NyaXB0aW9uLCBTZXNzaW9ucywgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuXG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3QtcGVyc29uLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0LXBlcnNvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0UGVyc29uRGlhbG9nIHtcbiAgUGVyc29uQ29sOiBzdHJpbmdbXSA9IFsnVXNlciddO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TGlzdFBlcnNvbkRpYWxvZz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBVc2VyW10pIHt9XG5cbiAgICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG5cbi8vdG9kbyBkaXNwbGF5IG1vbnRoIHNlbGVjdGlvbiArIHllYXIgc2VsZWN0aW9uIGVycm9yXG4vL3RvZG8gZGlzcGxheSBzdWIgKyB1bnN1YiBlcnJvclxuLy90b2RvIGJsb2NrIHVuc3ViIGlmIHRvZGF5XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb250aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vbnRoLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBkYXRhOiBKU09OW109W107XG4gIHB1YmxpYyB2YWx1ZSA6IG51bWJlciA9IG51bGw7XG4gIHB1YmxpYyBsaXN0U2Vzc2lvbiA6IFNlc3Npb25zW107XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8U2Vzc2lvbnM+O1xuICBwdWJsaWMgbGlzdFBlcnNvbiA6IFVzZXJbXTtcbiAgcHVibGljIGxpc3RZZWFyOiBudW1iZXJbXT1bXTtcbiAgcHVibGljIHllYXI6IG51bWJlcjtcbiAgcHVibGljIHVzZXI6IFVzZXI7XG4gIHB1YmxpYyBsaXN0SWRTZXNzaW9uOiBudW1iZXJbXT1bXTtcbiAgcHVibGljIHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBpc0hhbmRzZXQkID0gdGhpcy50b29sLmlzSGFuZHNldCQ7XG5cbiAgQFZpZXdDaGlsZCgnbWF0U2VsZWN0Jyx7c3RhdGljOmZhbHNlfSltYXRTZWxlY3QgOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ21hdFNlbGVjdDInLHtzdGF0aWM6ZmFsc2V9KW1hdFNlbGVjdDIgOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gO1xuXG5cbiAgbW9udGhzID0gW1xuICAgIHtuYW1lIDogXCJqYW52aWVyXCIsIG51bSA6IDF9LFxuICAgIHtuYW1lIDogXCJmw6l2cmllclwiLCBudW0gOiAyfSxcbiAgICB7bmFtZSA6IFwibWFyc1wiLCBudW0gOiAzfSxcbiAgICB7bmFtZSA6IFwiYXZyaWxcIiwgbnVtIDogNH0sXG4gICAge25hbWUgOiBcIm1haVwiLCBudW0gOiA1fSxcbiAgICB7bmFtZSA6IFwianVpblwiLCBudW0gOiA2fSxcbiAgICB7bmFtZSA6IFwianVpbGxldFwiLCBudW0gOiA3fSxcbiAgICB7bmFtZSA6IFwiYW/Du3RcIiwgbnVtIDogOH0sXG4gICAge25hbWUgOiBcInNlcHRlbWJyZVwiLCBudW0gOiA5fSxcbiAgICB7bmFtZSA6IFwib2N0b2JyZVwiLCBudW0gOiAxMH0sXG4gICAge25hbWUgOiBcIm5vdmVtYnJlXCIsIG51bSA6IDExfSxcbiAgICB7bmFtZSA6IFwiZMOpY2VtYnJlXCIsIG51bSA6IDEyfSxcbiAgXTtcblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpO1xuICAgIHRoaXMudG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnRvZGF5LmdldE1vbnRoKCkrMTtcbiAgICB0aGlzLnllYXIgPSB0aGlzLnRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5nZXRZZWFyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzSGFuZHNldCQuc3Vic2NyaWJlKHZhbHVlMSA9PlxuICAgICAgIXZhbHVlMSA/IHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IFsnRGF0ZScsICdUaW1lJywgJ0Jpa2UnLCAnU3RhdHVzJywnSW5mbycsJ0FjdGlvbiddIDogdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gWydEYXRlJywgJ1RpbWUnLCdBY3Rpb24nXSApIDtcbiAgICB0aGlzLmFwaS5nZXRNb250aEpzb24odGhpcy52YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgdGhpcy5pbml0U2Vzc2lvbih1cmxkYXRhKTtcbiAgICB9KTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgICB0aGlzLm1hdFNlbGVjdC52YWx1ZUNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHZhbHVlLHRoaXMueWVhci50b1N0cmluZygpKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWF0U2VsZWN0Mi52YWx1ZUNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy55ZWFyID0gdmFsdWU7XG4gICAgICB0aGlzLmFwaS5nZXRNb250aEpzb24odGhpcy52YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmluaXRTZXNzaW9uKHVybGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmUoSWQ6IG51bWJlcikge1xuICAgIGxldCB0ZW1wSW5zY3JpcHRpb24gOiBJbnNjcmlwdGlvbj17XG4gICAgICBVc2VybmFtZTp0aGlzLnVzZXIudXNlcm5hbWUsXG4gICAgICBJZDogSWRcbiAgICB9O1xuXG4gICAgdGhpcy5hcGkuY3JlYXRlSW5zY3JpcHRpb24odGVtcEluc2NyaXB0aW9uKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVuU3Vic2NyaWJlKGlkOiBudW1iZXIpIHtcbiAgICBsZXQgdGVtcEluc2NyaXB0aW9uIDogSW5zY3JpcHRpb249e1xuICAgICAgVXNlcm5hbWU6dGhpcy51c2VyLnVzZXJuYW1lLFxuICAgICAgSWQ6IGlkXG4gICAgfTtcblxuICAgIHRoaXMuYXBpLmRlbEluc2NyaXB0aW9uKHRlbXBJbnNjcmlwdGlvbikuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGlmKHVybGRhdGFbXCJyZXN1bHRcIl0pe1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0U2Vzc2lvbih1cmxkYXRhKXtcbiAgICB0aGlzLmFwaS5nZXRQcm9maWxlSnNvbih0aGlzLnVzZXIudXNlcm5hbWUpLnN1YnNjcmliZShkYXRhPT57XG4gICAgICB0aGlzLmF1dGguaW5pdFVzZXIoZGF0YSk7XG4gICAgICB0aGlzLmxpc3RJZFNlc3Npb24gPSBbXTtcbiAgICAgIHRoaXMudXNlciA9IHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpO1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy51c2VyLlNlc3Npb24ubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLmxpc3RJZFNlc3Npb24ucHVzaCh0aGlzLnVzZXIuU2Vzc2lvbltpXS5JZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmxpc3RTZXNzaW9uID0gW107XG5cbiAgICB0aGlzLmxpc3RQZXJzb24gPSBbXTtcblxuICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXJsZGF0YSkpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICBpZih0aGlzLnRvb2wuY2hlY2tJZkJlZm9yZVRvZGF5KHRoaXMuZGF0YVtpXVtcIkRhdGVcIl0pKXtcbiAgICAgICAgbGV0IHRlbXBTZXNzID0gdGhpcy50b29sLmluaXRUZW1wU2Vzcyh0aGlzLmRhdGFbaV0sdGhpcy5kYXRhW2ldW1wiRGF0ZVwiXSk7XG5cbiAgICAgICAgdGVtcFNlc3MuRGF0ZSA9IHRoaXMudG9vbC5zd2l0Y2hEYXRlKG5ldyBEYXRlKHRlbXBTZXNzLkRhdGUpKTtcbiAgICAgICAgdGVtcFNlc3MuUGVyc29uID0gdGhpcy50b29sLmluaXRMaXN0UGVyc0RldGFpbCh0aGlzLmRhdGFbaV1bXCJpZEluc2NyaXB0aW9uXCJdKTtcbiAgICAgICAgdGhpcy5saXN0U2Vzc2lvbi5wdXNoKHRlbXBTZXNzKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5saXN0U2Vzc2lvbik7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coU2Vzc2lvbiA6IFNlc3Npb25zKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihMaXN0UGVyc29uRGlhbG9nLCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IFNlc3Npb24uUGVyc29uXG4gICAgfSk7XG4gIH1cblxuICBnZXRZZWFyKCl7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBmb3IodmFyIGkgPSAodGhpcy55ZWFyKTsgaSA8PSAodGhpcy55ZWFyKzEwKTsgaSsrKXtcbiAgICAgIHRoaXMubGlzdFllYXIucHVzaChpKTt9XG4gIH1cblxuXG5cbiAgY2hlY2tJZkRpc2FibGUoZWxlbWVudCkgOiBib29sZWFue1xuICAgIHJldHVybiBlbGVtZW50LkNhbmNlbCB8fCBlbGVtZW50LkJpa2UgPT0gMCB8fCAodGhpcy51c2VyLmFib25uZW1lbnQgPT0gMCAmJiAhdGhpcy5jaGVja0lmU3ViKGVsZW1lbnQpKVxuICAgICAgfHwgKGVsZW1lbnQuRGF0ZSA9PT0gdGhpcy50b29sLnN3aXRjaERhdGUodGhpcy50b2RheSkgJiYgdGhpcy5jaGVja0lmU3ViKGVsZW1lbnQpKVxuICB9XG5cbiAgY2hlY2tJZlN1YihlbGVtZW50KSA6IGJvb2xlYW57XG4gICAgcmV0dXJuIHRoaXMubGlzdElkU2Vzc2lvbi5pbmNsdWRlcyhlbGVtZW50LklkKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIChuZ1N1Ym1pdCk9XFxcIkVkaXRQcm9maWxlKGVkaXRGb3JtKVxcXCIgI2VkaXRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgPG1hdC1zZWxlY3QgKm5nSWY9XFxcImVycm9yXFxcIj4ge3tlcnJvcn19PC9tYXQtc2VsZWN0PlxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZGF0YS5FbWFpbFxcXCIgIG5hbWU9XFxcIkVtYWlsXFxcIiA+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cXFwiTm9tXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZGF0YS5sYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiID5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVxcXCJQcmVub21cXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJkYXRhLmZpcnN0TmFtZVxcXCIgIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgbmdNb2RlbCAjcGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1vdCBkZSBwYXNzZVxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHBhc3N3b3JkIG5hbWU9XFxcInBhc3N3b3JkXFxcIiA+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPG5nLWNvbnRhaW5lcj5cXG4gICAgPHVsICpuZ0Zvcj1cXFwibGV0IHNlc3Npb24gb2YgbGlzdFR5cGVTZXNzaW9uXFxcIiA+XFxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cXFwiRWRpdFR5cGVTZXNzaW9uKHNlc3Npb24pXFxcIiBbY2hlY2tlZF0gPSBcXFwiY2hlY2tTZXNzaW9uKHNlc3Npb24pICE9IG51bGxcXFwiPlxcbiAgICAgICAge3tzZXNzaW9uLkRheX19IHt7c2Vzc2lvbi5UaW1lfX1cXG4gICAgICA8L21hdC1jaGVja2JveD5cXG4gICAgPC91bD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XFxcIm9uTm9DbGljaygpXFxcIj5ObyBUaGFua3M8L2J1dHRvbj5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPk9rPC9idXR0b24+XFxuXFxuPC9mb3JtPlxcblxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJtYXQtY2FyZHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbmRpdntcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG5tYXQtc2VsZWN0e1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICB3aWR0aDogMTAwJVxcbn1cXG5cXG5tYXQtY2VsbHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxubWF0LWhlYWRlci1jZWxse1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWF0LWZvcm0tZmllbGR7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcblxcbi5tYXQtY29sdW1uLURhdGUge1xcbiAgZmxleDogMCAwIDM1JTtcXG59XFxuXFxuaDN7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxucHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWdyaWQtbGlzdCBjb2xzPVxcXCIyXFxcIiByb3dIZWlnaHQ9XFxcIjEwMCVcXFwiPlxcblxcbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cXFwiMVxcXCI+XFxuXFxuICAgIDxtYXQtY2FyZCAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj5cXG4gICAgICA8bWF0LXNwaW5uZXIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+PC9tYXQtc3Bpbm5lcj5cXG4gICAgPC9tYXQtY2FyZD5cXG5cXG4gICAgPGRpdiA+XFxuICAgICAgPG1hdC10YWJsZSAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCIgW2RhdGFTb3VyY2VdPVxcXCJkYXRhU291cmNlXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCI+XFxuXFxuICAgICAgICA8IS0tIERhdGUgQ29sdW1uIC0tPlxcbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkRhdGVcXFwiID5cXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gRGF0ZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7c3dpdGNoRGF0ZShlbGVtZW50LkRhdGUpfX0gPC9tYXQtY2VsbD5cXG4gICAgICAgIDwvbmctY29udGFpbmVyID5cXG5cXG4gICAgICAgIDwhLS0gVGltZSBDb2x1bW4gLS0+XFxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiVGltZVxcXCIgPlxcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBIZXVyZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5UaW1lfX0gPC9tYXQtY2VsbD5cXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxcblxcbiAgICAgICAgPCEtLSBCaWtlIENvbHVtbiAtLT5cXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJCaWtlXFxcIiA+XFxuICAgICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFZlbG8gbGlicmUgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuQmlrZX19IDwvbWF0LWNlbGw+XFxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gICAgICAgIDwhLS0gU3RhdHVzIENvbHVtbiAtLT5cXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJTdGF0dXNcXFwiID5cXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3RhdHVzIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj5cXG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XFxcIiFlbGVtZW50LkNhbmNlbDsgZWxzZSBjYW5jZWxcXFwiIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J2dyZWVuJ31cXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NhbmNlbD5cXG4gICAgICAgICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOidyZWQnfVxcXCI+Y2FuY2VsPC9tYXQtaWNvbj5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICA8L21hdC1jZWxsPlxcbiAgICAgICAgPC9uZy1jb250YWluZXI+XFxuXFxuICAgICAgICA8IS0tIEJ1dHRvbiBDb2x1bW4tLT5cXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJBY3Rpb25cXFwiID5cXG5cXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj48L21hdC1oZWFkZXItY2VsbD5cXG5cXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+XFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiY2hlY2tJZkRpc2FibGUoZWxlbWVudCkgO3RoZW4gY2FuY2VsQnRuIGVsc2UgQnRuXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NhbmNlbEJ0bj5cXG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiSW5zY3JpcHRpb25cXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwidW5TdWJzY3JpYmUoZWxlbWVudC5JZClcXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNCdG4+XFxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkluc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6JyM0NGMzNDQnfVxcXCIgKGNsaWNrKT1cXFwidW5TdWJzY3JpYmUoZWxlbWVudC5JZClcXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgIDwvbWF0LWNlbGw+XFxuXFxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG5cXG4gICAgICAgIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVxcXCJkaXNwbGF5ZWRDb2x1bW5zXFxcIj48L21hdC1oZWFkZXItcm93PlxcbiAgICAgICAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cXFwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcXFwiPjwvbWF0LXJvdz5cXG4gICAgICA8L21hdC10YWJsZT5cXG5cXG4gICAgICA8bWF0LXBhZ2luYXRvciBbcGFnZVNpemVPcHRpb25zXT1cXFwiWzEwXVxcXCIgc2hvd0ZpcnN0TGFzdEJ1dHRvbnM+PC9tYXQtcGFnaW5hdG9yPlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvbWF0LWdyaWQtdGlsZT5cXG5cXG4gIDxtYXQtZ3JpZC10aWxlPlxcbiAgICA8bWF0LWNhcmQgPlxcbiAgICAgIDxtYXQtbGlzdC1pdGVtPlxcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPlxcbiAgICAgICAgICA8bWF0LWljb24+cGVyc29uPC9tYXQtaWNvbj5cXG4gICAgICAgICAgPHNwYW4+IHt7VXNlci5sYXN0TmFtZX19IHt7VXNlci5maXJzdE5hbWV9fTwvc3Bhbj5cXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkxpc3RlIFBhcnRpY2lwYW50XFxcIiBzdHlsZT1cXFwiZmxvYXQgOiByaWdodFxcXCI+XFxuICAgICAgICAgICAgPG1hdC1pY29uIChjbGljayk9XFxcIm9wZW5EaWFsb2coKVxcXCI+ZWRpdDwvbWF0LWljb24+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cXG4gICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcbiAgICAgIDwvbWF0LWxpc3QtaXRlbT5cXG5cXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cXG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxcbiAgICAgICAgICA8aDM+RW1haWw8L2gzPlxcbiAgICAgICAgICA8cD57e1VzZXIuRW1haWx9fTwvcD5cXG4gICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XFxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XFxuXFxuICAgICAgICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgICAgICAgPGgzPkFib25uZW1lbnQ8L2gzPlxcbiAgICAgICAgICA8cD57e1VzZXIuYWJvbm5lbWVudH19PC9wPlxcbiAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cXG5cXG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxcbiAgICAgICAgICA8aDM+Sm91cjwvaDM+XFxuICAgICAgICAgICAgPHAgKm5nRm9yPVxcXCJsZXQgc2VzcyBvZiBVc2VyLnR5cGVTZXNzaW9uc1xcXCI+e3tzZXNzLkRheX19IHt7c2Vzcy5UaW1lfX08L3A+XFxuICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcbiAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cXG5cXG4gICAgPC9tYXQtY2FyZD5cXG4gIDwvbWF0LWdyaWQtdGlsZT5cXG5cXG48L21hdC1ncmlkLWxpc3Q+XFxuXFxuXFxuXFxuXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZS9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHtNYXRTZWxlY3R9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3RcIjtcbmltcG9ydCB7ZWRpdFByb2ZpbGVJbnRlcmZhY2UsIEluc2NyaXB0aW9uLCBTZXNzaW9ucywgVHlwZVNlc3Npb24sIFVzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXRQYWdpbmF0b3IsIE1hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuLy90b2RvIGRpc3BsYXkgdW5zdWIgZXJyb3Jcbi8vdG9kbyBkaXNwbGF5IHR5cGUgYWJvXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXQtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGRheXMgPSB0aGlzLnRvb2wuZGF5cztcbiAgcHVibGljIGRheTtcbiAgcHVibGljIGVycm9yIDogc3RyaW5nO1xuICBwdWJsaWMgbGlzdFR5cGVTZXNzaW9uOiBUeXBlU2Vzc2lvbltdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxFZGl0UHJvZmlsZUNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBVc2VyLFxuICAgIHByaXZhdGUgYXBpIDogQXBpU2VydmljZSxcbiAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSkge1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnZGF5U2VsZWN0Jyx7c3RhdGljOmZhbHNlfSkgZGF5U2VsZWN0OiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ2RheVNlbGVjdDInLHtzdGF0aWM6ZmFsc2V9KSBkYXlTZWxlY3QyOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ3RpbWVTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSB0aW1lU2VsZWN0OiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ3RpbWVTZWxlY3QyJyx7c3RhdGljOmZhbHNlfSkgdGltZVNlbGVjdDI6IE1hdFNlbGVjdDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFwaS5nZXRUeXBlU2Vzc2lvbigpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHVybGRhdGEpO1xuICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvXCJpZFR5cGVTZXNzaW9uXCIvZ2ksIFwiXFxcImlkUGVyc29uXFxcIlwiKTtcbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uID0gdGhpcy50b29sLmluaXRUeXBlU2Vzc2lvbihkYXRhKTtcbiAgICB9KVxuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBFZGl0UHJvZmlsZShmb3JtIDogTmdGb3JtKSB7XG4gICAgbGV0IGVkaXRQcm9maWxlIDogZWRpdFByb2ZpbGVJbnRlcmZhY2UgPSB7XG4gICAgICBpZCA6IHRoaXMuZGF0YS5pZCxcbiAgICAgIGxhc3ROYW1lIDogZm9ybS52YWx1ZS5sYXN0TmFtZSxcbiAgICAgIGZpcnN0TmFtZSA6IGZvcm0udmFsdWUuZmlyc3ROYW1lLFxuICAgICAgRW1haWwgOiBmb3JtLnZhbHVlLkVtYWlsLFxuICAgICAgcGFzc3dvcmQgOiBmb3JtLnZhbHVlLnBhc3N3b3JkID8gZm9ybS52YWx1ZS5wYXNzd29yZCA6IG51bGwsXG4gICAgICB0eXBlU2Vzc2lvbnMgOiB0aGlzLmRhdGEudHlwZVNlc3Npb25zXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGVkaXRQcm9maWxlKTtcblxuICAgIHRoaXMuYXBpLnBvc3RFZGl0UHJvZmlsZShlZGl0UHJvZmlsZSkuc3Vic2NyaWJlKHJlc3VsdCA9PntcbiAgICAgIGlmKHJlc3VsdCl7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxlcnJvciA9PiB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfSlcbiAgfVxuXG4gIEVkaXRUeXBlU2Vzc2lvbih0eXBlIDogVHlwZVNlc3Npb24pIHtcbiAgICBpZih0aGlzLmNoZWNrU2Vzc2lvbih0eXBlKSA9PSBudWxsKXtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQgJysgdHlwZSk7XG4gICAgICB0aGlzLmRhdGEudHlwZVNlc3Npb25zLnB1c2godHlwZSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnZGVsICcrIHR5cGUpO1xuXG4gICAgICB0aGlzLmRhdGEudHlwZVNlc3Npb25zLnNwbGljZSh0aGlzLmNoZWNrU2Vzc2lvbih0eXBlKSwxKVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2Vzc2lvbihzZXNzaW9uOiBUeXBlU2Vzc2lvbikge1xuICAgIGxldCBzdGF0ZTtcbiAgICBsZXQgaSA9MDtcbiAgICBmb3IobGV0IHR5cGUgb2YgdGhpcy5kYXRhLnR5cGVTZXNzaW9ucyl7XG4gICAgICBpICsrO1xuICAgICAgc2Vzc2lvbi5JZCA9PSB0eXBlLklkID8gc3RhdGUgPSBpIDogc3RhdGUgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgVXNlcjogVXNlcjtcbiAgcHVibGljIGxpc3RTZXNzaW9uIDogU2Vzc2lvbnNbXT1bXTtcbiAgcHVibGljIGxpc3RZZWFyOiBudW1iZXJbXT1bXTtcbiAgcHVibGljIHllYXI6IG51bWJlcjtcbiAgcHVibGljIHZhbHVlOiBhbnk7XG4gIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnRGF0ZScsICdUaW1lJywgJ0Jpa2UnLCAnU3RhdHVzJywnQWN0aW9uJ107XG4gIHB1YmxpYyB0b2RheTogRGF0ZTtcblxuICBAVmlld0NoaWxkKCdtYXRTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KW1hdFNlbGVjdCA6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcblxuICBtb250aHMgPSBbXG4gICAge25hbWUgOiBcImphbnZpZXJcIiwgbnVtIDogMX0sXG4gICAge25hbWUgOiBcImZldnJpcmVyXCIsIG51bSA6IDJ9LFxuICAgIHtuYW1lIDogXCJtYXJzXCIsIG51bSA6IDN9LFxuICAgIHtuYW1lIDogXCJhdnJpbFwiLCBudW0gOiA0fSxcbiAgICB7bmFtZSA6IFwibWFpXCIsIG51bSA6IDV9LFxuICAgIHtuYW1lIDogXCJqdWluXCIsIG51bSA6IDZ9LFxuICAgIHtuYW1lIDogXCJqdWlsbGV0XCIsIG51bSA6IDd9LFxuICAgIHtuYW1lIDogXCJhb3V0XCIsIG51bSA6IDh9LFxuICAgIHtuYW1lIDogXCJzZXB0ZW1icmVcIiwgbnVtIDogOX0sXG4gICAge25hbWUgOiBcIm9jdG9icmVcIiwgbnVtIDogMTB9LFxuICAgIHtuYW1lIDogXCJub3ZlbWJyZVwiLCBudW0gOiAxMX0sXG4gICAge25hbWUgOiBcImRlY2VtYnJlXCIsIG51bSA6IDEyfSxcbiAgXTtcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxTZXNzaW9ucz47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHByaXZhdGUgdG9vbDogVG9vbFNlcnZpY2Upe31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnllYXIgPSB0aGlzLnRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5nZXRZZWFyKCk7XG4gICAgdGhpcy5Vc2VyID0gdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCk7XG5cbiAgICB0aGlzLmFwaS5nZXRQcm9maWxlSnNvbih0aGlzLlVzZXIudXNlcm5hbWUpLnN1YnNjcmliZShkYXRhPT57XG4gICAgICB0aGlzLmF1dGguaW5pdFVzZXIoZGF0YSk7XG4gICAgICB0aGlzLlVzZXIgPSB0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgIGxldCBzZXNzIDogU2Vzc2lvbnNbXSA9IHRoaXMuVXNlci5TZXNzaW9uO1xuICAgICAgZm9yKGxldCBpID0gMDtpIDwgdGhpcy5Vc2VyLlNlc3Npb24ubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXMudG9vbC5jaGVja0lmQmVmb3JlVG9kYXkoc2Vzc1tpXS5EYXRlKSl7XG4gICAgICAgICAgdGhpcy5saXN0U2Vzc2lvbi5wdXNoKHNlc3NbaV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5saXN0U2Vzc2lvbik7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICB0aGlzWydpc0xvYWRpbmcnXSA9IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBnZXRZZWFyKCl7XG4gICAgZm9yKHZhciBpID0gKHRoaXMueWVhcik7IGkgPD0gKHRoaXMueWVhcisxMCk7IGkrKyl7XG4gICAgICB0aGlzLmxpc3RZZWFyLnB1c2goaSk7fVxuICB9XG5cbiAgdW5TdWJzY3JpYmUoSWQ6IG51bWJlcikge1xuICAgIGxldCB0ZW1wSW5zY3JpcHRpb24gOiBJbnNjcmlwdGlvbiA9IHtcbiAgICAgIFVzZXJuYW1lOnRoaXMuVXNlci51c2VybmFtZSxcbiAgICAgIElkOiBJZFxuICAgIH07XG5cbiAgICB0aGlzLmFwaS5kZWxJbnNjcmlwdGlvbih0ZW1wSW5zY3JpcHRpb24pLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhW1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tJZkRpc2FibGUoZWxlbWVudCkgOiBib29sZWFue1xuICAgIHJldHVybiAoZWxlbWVudC5EYXRlID09PSB0aGlzLnRvb2wuc3dpdGNoUHJvZmlsZURhdGUodGhpcy50b2RheSkpXG4gIH1cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRWRpdFByb2ZpbGVDb21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogdGhpcy5Vc2VyXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMubmdPbkluaXQoKVxuICAgIH0pO1xuICB9XG5cbiAgc3dpdGNoRGF0ZShEYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMudG9vbC5zd2l0Y2hQcm9maWxlRGF0ZShEYXRlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBdXRoTG9naW5EYXRhLCBBdXRoU2lnbnVwRGF0YSwgZWRpdEFibywgSW5zY3JpcHRpb24sIFNlc3Npb25zLCBUeXBlU2Vzc2lvbn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Y2F0Y2hFcnJvcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0LCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgcHVibGljIGlwID0gXCJodHRwOi8vNTEuMTc4LjI5LjE2MjozMDAwXCI7XG4gIC8vIHB1YmxpYyBpcCA9IFwiaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMFwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7IH1cblxuICBnZXRIb21lSnNvbigpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaXAgKyAnL2FwaScpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGdldE1vbnRoSnNvbihtb250aCx5ZWFyKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9tb250aC9cIiArIG1vbnRoICsgXCIvXCIgKyB5ZWFyO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZ2V0UHJvZmlsZUpzb24odXNlcm5hbWUpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL3Byb2ZpbGUvXCIgKyB1c2VybmFtZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGdldEFib0pzb24oKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmlwICsgJy9hcGkvYWRtaW4vYWJvbm5lbWVudCcpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIHBvc3RBYm9SZW5ldyhpZCl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vcmVuZXdBYm9cIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwse0lkOmlkfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZWRpdEFib1R5cGUobmV3QWJvVHlwZSA6IGVkaXRBYm8pe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL2VkaXRBYm9cIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsbmV3QWJvVHlwZSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgcG9zdENhbmNlbFNlc3MoaWQpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL0NhbmNlbFwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCx7SWQ6aWR9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBwb3N0UmVuZXdTZXNzKGlkLGJpa2Upe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL3JlY3JlYXRlXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLHtJZDppZCxCaWtlOmJpa2V9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBkZWxldGVTZXNzKGlkKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi9zZXNzaW9uL1wiICsgaWQgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgY3JlYXRlTmV3U2VzcyhuZXdTZXNzIDogU2Vzc2lvbnMpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL3Nlc3Npb25cIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLG5ld1Nlc3MpLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBwb3N0R2VuZXJhdGVTZXNzaW9uQXV0byh5ZWFyLGxpc3QsYmlrZSl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vYXV0b2NyZWF0ZVwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwse3llYXI6eWVhcixiaWtlOmJpa2UsaWRUeXBlU2Vzc2lvbjpsaXN0fSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgY3JlYXRlSW5zY3JpcHRpb24obmV3SW5zY3JpcHRpb24gOiBJbnNjcmlwdGlvbil7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvSW5zY3JpcHRpb25cIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLG5ld0luc2NyaXB0aW9uKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBkZWxJbnNjcmlwdGlvbihuZXdJbnNjcmlwdGlvbiA6IEluc2NyaXB0aW9uKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9EZXNpbnNjcmlwdGlvbi9cIiArIG5ld0luc2NyaXB0aW9uLlVzZXJuYW1lICsgXCIvXCIgKyBuZXdJbnNjcmlwdGlvbi5JZDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIHBvc3RMb2dpbihhdXRoRGF0YSA6IEF1dGhMb2dpbkRhdGEpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsnL2FwaS9sb2dpbic7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHtyZXN1bHQ6IGJvb2xlYW59Pih1cmwsIGF1dGhEYXRhKS5waXBlKFxuICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIHBvc3RFZGl0UHJvZmlsZShlZGl0UHJvZmlsZSl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyAnL2FwaS9lZGl0UHJvZmlsZSc7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8e3Jlc3VsdCA6IGJvb2xlYW59Pih1cmwsIGVkaXRQcm9maWxlKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBnZXRUeXBlU2Vzc2lvbigpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL1R5cGVTZXNzaW9uXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBkZWxUeXBlU2Vzc2lvbihJZCA6IG51bWJlcil7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvVHlwZVNlc3Npb24vXCIgKyBJZDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGFkZFR5cGVTZXNzaW9uKHR5cGVTZXNzaW9uIDogVHlwZVNlc3Npb24pe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL1R5cGVTZXNzaW9uXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCx0eXBlU2Vzc2lvbikucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZWRpdFR5cGVTZXNzaW9uKHR5cGVTZXNzaW9uIDogVHlwZVNlc3Npb24pe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL1R5cGVTZXNzaW9uXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLHR5cGVTZXNzaW9uKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBkZWxVc2VyKElkOm51bWJlcil7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vdXNlci9cIiArIElkO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgaGFuZGVsRXJyb3IoZXJyKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSl7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIuZXJyb3IuZXJyb3IpO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgfVxuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U3ViamVjdCwgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0F1dGhMb2dpbkRhdGEsIEF1dGhTaWdudXBEYXRhLCBTZXNzaW9ucywgVXNlcn0gZnJvbSBcIi4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlXCI7XG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSBcIi4vYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7Y2F0Y2hFcnJvcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi90b29sLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICBwdWJsaWMgYXV0aFN0YXR1c0xpc3RlbmVyIDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7IC8vIGp1c3QgbmVlZCB0byBrbm93IGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICBwdWJsaWMgZGF0YTogSlNPTltdO1xuICBwdWJsaWMgVXNlcjogVXNlcjtcbiAgcHVibGljIGVycm9yTGlzdGVuZXIgOiBTdWJqZWN0PFN0cmluZz4gPSAgbmV3IFN1YmplY3Q8U3RyaW5nPigpO1xuICBwdWJsaWMgaXAgPSBcImh0dHA6Ly81MS4xNzguMjkuMTYyOjMwMDBcIjtcbiAgLy8gcHVibGljIGlwID0gXCJodHRwczovLzEyNy4wLjAuMTo4MDAwXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIGNvb2tpZSA6IENvb2tpZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSkge31cblxuICBnZXRJc0F1dGgoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5jb29raWUuZ2V0KCdjb25uZWN0ZWQnKSk7XG4gIH1cblxuICBnZXRBdXRoU3RhdHVzTGlzdGVuZXIoKSA6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFN0YXR1c0xpc3RlbmVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0RXJyb3JMaXN0ZW5lcigpIDogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5lcnJvckxpc3RlbmVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFVzZXIoKTpVc2Vye1xuICAgIC8vIHRoaXMudXBkYXRlVXNlcigpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY29va2llLmdldCgndXNlcicpKTtcbiAgfVxuXG4gIGNyZWF0ZVVzZXIoYXV0aERhdGEgOiBBdXRoU2lnbnVwRGF0YSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuaXAgKyAnL2FwaS9yZWdpc3RlcicsIGF1dGhEYXRhKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihcbiAgICAgICAgKGVyciA6IGFueSkgPT4ge1xuICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKXtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyci5lcnJvci5lcnJvcnMpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGxvZ2luVXNlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgbGV0IGF1dGhEYXRhOiBBdXRoTG9naW5EYXRhID0ge1VzZXJuYW1lOnVzZXJuYW1lLHBhc3N3b3JkOnBhc3N3b3JkfTtcblxuICAgIHRoaXMuYXBpLnBvc3RMb2dpbihhdXRoRGF0YSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZVtcInJlc3VsdFwiXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlW1widXNlclwiXSApO1xuICAgICAgICAgIHRoaXMuYXBpLmdldFByb2ZpbGVKc29uKHVzZXJuYW1lKS5zdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWU7IC8vIG5lZWRlZCB0byB1cGRhdGUgYXV0aGVudGljYXRpb24gc3RhdHVzXG4gICAgICAgICAgICB0aGlzLmluaXRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzTGlzdGVuZXIubmV4dCh0cnVlKTsvLyB0ZWxsaW5nIGV2ZXJ5b25lIHdobyBpcyBpbnRlcmVzdGVkIHRoYXQgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LGVycm9yID0+e1xuICAgICAgICB0aGlzLmVycm9yTGlzdGVuZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLmF1dGhTdGF0dXNMaXN0ZW5lci5uZXh0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5lcnJvckxpc3RlbmVyID0gbmV3IFN1YmplY3Q8U3RyaW5nPigpO1xuICAgICAgfSk7XG4gIH1cblxuICBpbml0VXNlcihkYXRhKXtcbiAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB0aGlzLlVzZXIgPSB7XG4gICAgICBpZDogdGhpcy5kYXRhW1wiaWRcIl0sXG4gICAgICB1c2VybmFtZSA6IHRoaXMuZGF0YVtcIlVzZXJuYW1lXCJdLFxuICAgICAgbGFzdE5hbWU6IHRoaXMuZGF0YVtcIkxhc3ROYW1lXCJdLFxuICAgICAgZmlyc3ROYW1lOiB0aGlzLmRhdGFbXCJGaXJzdE5hbWVcIl0sXG4gICAgICBhYm9ubmVtZW50OiB0aGlzLmRhdGFbXCJBYm9ubmVtZW50XCJdLFxuICAgICAgdHlwZVNlc3Npb25zIDogW10sXG4gICAgICBFbWFpbDogdGhpcy5kYXRhW1wiRW1haWxcIl0sXG4gICAgICBTZXNzaW9uOiBbXSxcbiAgICAgIFJvbGU6IHRoaXMuZGF0YVtcInJvbGVzXCJdXG4gICAgfTtcblxuICAgIGZvcihsZXQgdHlwZVNlc3Mgb2YgdGhpcy5kYXRhW1wiSWRUeXBlU2Vzc2lvblwiXSl7XG4gICAgIHRoaXMuVXNlci50eXBlU2Vzc2lvbnMucHVzaCh7XG4gICAgICAgIElkIDogdHlwZVNlc3NbXCJJZFR5cGVTZXNzaW9uXCJdW1wiaWRcIl0sXG4gICAgICAgIERheSA6IHRoaXMudG9vbC5kYXlTd2l0aCh0eXBlU2Vzc1tcIklkVHlwZVNlc3Npb25cIl1bXCJkYXlcIl0pLFxuICAgICAgICBUaW1lIDogdHlwZVNlc3NbXCJJZFR5cGVTZXNzaW9uXCJdW1widGltZVwiXS5zcGxpdCgnICcpWzFdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgaW5zY3JpcHRpb24gPSB0aGlzLmRhdGFbXCJpZEluc2NyaXB0aW9uXCJdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGluc2NyaXB0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLlVzZXIuU2Vzc2lvbi5wdXNoKHRoaXMudG9vbC5pbml0VGVtcFNlc3MoaW5zY3JpcHRpb25baV1bXCJpZFNlc3Npb25cIl0saW5zY3JpcHRpb25baV1bXCJpZFNlc3Npb25cIl1bXCJkYXRlXCJdKSk7XG4gICAgfVxuICAgIHRoaXMuY29va2llLnNldCgndXNlcicsSlNPTi5zdHJpbmdpZnkodGhpcy5Vc2VyKSk7XG4gICAgdGhpcy5jb29raWUuc2V0KCdjb25uZWN0ZWQnLFwidHJ1ZVwiKTtcblxuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5hdXRoU3RhdHVzTGlzdGVuZXIubmV4dChmYWxzZSk7XG4gICAgdGhpcy5jb29raWUuZGVsZXRlKCd1c2VyJyk7XG4gICAgdGhpcy5jb29raWUuZGVsZXRlKCdzZXNzaW9uJyk7XG4gICAgdGhpcy5jb29raWUuZGVsZXRlKCdjb25uZWN0ZWQnKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZXNzaW9ucywgVHlwZVNlc3Npb24sIFVzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcbmltcG9ydCB7Tmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWV9IGZyb20gJ25neC1tYXRlcmlhbC10aW1lcGlja2VyJztcbmltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50c30gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5cyB7XG4gIGNvZGUgOiBzdHJpbmcsXG4gIG5vbSA6IHN0cmluZyxcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb29sU2VydmljZSB7XG4gIGdldCBpc0hhbmRzZXQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9pc0hhbmRzZXQkO1xuICB9XG4gIHByaXZhdGUgX2lzSGFuZHNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICBCcmVha3BvaW50cy5IYW5kc2V0TGFuZHNjYXBlLFxuICAgIEJyZWFrcG9pbnRzLkhhbmRzZXRQb3J0cmFpdCxcbiAgICBCcmVha3BvaW50cy5UYWJsZXRMYW5kc2NhcGUsXG4gICAgQnJlYWtwb2ludHMuVGFibGV0UG9ydHJhaXRdKVxuICAgIC5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWF0Y2hlcyksXG4gICAgICBzaGFyZVJlcGxheSgpXG4gICAgKTtcbiAgZ2V0IGRheXMoKTogRGF5c1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF5cztcbiAgfVxuICBnZXQgZGFya1RoZW1lKCk6IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lIHtcbiAgICByZXR1cm4gdGhpcy5fZGFya1RoZW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGFya1RoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGJvZHlCYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZidcbiAgICB9LFxuICAgIGRpYWw6IHtcbiAgICAgIGRpYWxCYWNrZ3JvdW5kQ29sb3I6ICcjNTU1JyxcbiAgICB9LFxuICAgIGNsb2NrRmFjZToge1xuICAgICAgY2xvY2tGYWNlQmFja2dyb3VuZENvbG9yOiAnIzU1NScsXG4gICAgICBjbG9ja0hhbmRDb2xvcjogJyM5ZmJkOTAnLFxuICAgICAgY2xvY2tGYWNlVGltZUluYWN0aXZlQ29sb3I6ICcjZmZmJ1xuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSBfZGF5cyA6IERheXNbXSA9W1xuICAgIHtjb2RlOlwiTW9uXCIsbm9tOlwiTHVuZGlcIn0sXG4gICAge2NvZGU6XCJUdWVcIixub206XCJNYXJkaVwifSxcbiAgICB7Y29kZTpcIldlZFwiLG5vbTpcIk1lcmNyZWRpXCJ9LFxuICAgIHtjb2RlOlwiVGh1XCIsbm9tOlwiSmV1ZGlcIn0sXG4gICAge2NvZGU6XCJGcnlcIixub206XCJWZW5kcmVkaVwifSxcbiAgICB7Y29kZTpcIlNhdFwiLG5vbTpcIlNhbWVkaVwifSxcbiAgICB7Y29kZTpcIlN1blwiLG5vbTpcIkRpbWFuY2hlXCJ9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHsgfVxuXG4gIGRheVN3aXRoKGRheSl7XG5cbiAgICBsZXQgajtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgY2FzZSAnTW9uJyA6IHtqID0gJ0x1bmRpJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnVHVlJyA6IHtqID0gJ01hcmRpJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnV2VkJyA6IHtqID0gJ01lcmNyZWRpJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnVGh1JyA6IHtqID0gJ0pldWRpJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnRnJ5JyA6IHtqID0gJ1ZlbmRyZWRpJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnU2F0JyA6IHtqID0gJ1NhbWVkaSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ1N1bicgOiB7aiA9ICdEaW1hbmNoZSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ051bGwnIDoge2ogPSAnTnVsbCc7IGJyZWFrO31cbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIGludkRheVN3aXRjaChkYXkpe1xuICAgIGxldCBqO1xuICAgIHN3aXRjaCAoZGF5KSB7XG4gICAgICBjYXNlICdMdW5kaScgOiB7aiA9ICdNb24nOyBicmVhazt9XG4gICAgICBjYXNlICdNYXJkaScgOiB7aiA9ICdUdWUnOyBicmVhazt9XG4gICAgICBjYXNlICdNZXJjcmVkaScgOiB7aiA9ICdXZWQnOyBicmVhazt9XG4gICAgICBjYXNlICdKZXVkaScgOiB7aiA9ICdUaHUnOyBicmVhazt9XG4gICAgICBjYXNlICdWZW5kcmVkaScgOiB7aiA9ICdGcnknOyBicmVhazt9XG4gICAgICBjYXNlICdTYW1lZGknIDoge2ogPSAnU2F0JzsgYnJlYWs7fVxuICAgICAgY2FzZSAnRGltYW5jaGUnIDoge2ogPSAnU3VuJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnTnVsbCcgOiB7aiA9ICdOdWxsJzsgYnJlYWs7fVxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc3dpdGNoRGF0ZShkIDogRGF0ZSkgOiBzdHJpbmd7XG4gICAgbGV0IGogOiBzdHJpbmc7XG4gICAgc3dpdGNoIChkLmdldERheSgpKSB7XG4gICAgICBjYXNlIDEgOiB7aiA9IFwiTHVuZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSAyIDoge2ogPSBcIk1hcmRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgMyA6IHtqID0gXCJNZXJjcmVkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDQgOiB7aiA9IFwiSmV1ZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSA1IDoge2ogPSBcIlZlbmRyZWRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgNiA6IHtqID0gXCJTYW1lZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSAwIDoge2ogPSBcIkRpbWFuY2hlIFwiOyBicmVha31cbiAgICB9XG4gICAgcmV0dXJuIGogKyBkLmdldERhdGUoKVxuICB9XG5cbiAgaW5pdFRlbXBTZXNzKGRhdGEgOiBKU09OLCBkYXRlKSA6IFNlc3Npb25ze1xuICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIERhdGU6IGQudG9JU09TdHJpbmcoKSxcbiAgICAgIFRpbWU6IGRhdGFbXCJ0aW1lXCJdLnNwbGl0KCcgJylbMV0sXG4gICAgICBCaWtlOiBkYXRhW1wiYmlrZVwiXSxcbiAgICAgIENhbmNlbDogZGF0YVtcIkNhbmNlbFwiXSxcbiAgICAgIElkOiBkYXRhW1wiaWRcIl0sXG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZkJlZm9yZVRvZGF5KGRhdGUpe1xuICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICBkLnNldERhdGUoZC5nZXREYXRlKCktMSk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpID49IGRcbiAgfVxuXG4gIHN3aXRjaFByb2ZpbGVEYXRlKGQpIDogc3RyaW5ne1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoZCk7XG4gICAgbGV0IGo7XG4gICAgc3dpdGNoIChkYXRlLmdldERheSgpKSB7XG4gICAgICBjYXNlIDE6e2ogPSBcIkx1bmRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgMjp7aiA9IFwiTWFyZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSAzOntqID0gXCJNZXJjcmVkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDQ6e2ogPSBcImpldWRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgNTp7aiA9IFwiVmVuZHJkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDY6e2ogPSBcIlNhbWVkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDA6e2ogPSBcIkRpbWFuY2hlIFwiOyBicmVha31cbiAgICB9XG4gICAgbGV0IG1vbnRocyA9IFtcIkphbnZpZXJcIixcIkbDqXZyaWVyXCIsXCJNYXJzXCIsXCJBdnJpbFwiLFwiTWFpXCIsXCJKdWluXCIsXCJKdWlsbGV0XCIsXCJBb3V0XCIsXCJTZXB0ZW1icmVcIixcIk9jdG9icmVcIixcIk5vdmVtYnJlXCIsXCJEZWNlbWJyZVwiXTtcbiAgICByZXR1cm4gaiArIGRhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyAgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKVxuICB9XG5cbiAgaW5pdExpc3RQZXJzRGV0YWlsKGxpc3RQZXJzKTogVXNlcltde1xuICAgIGxldCB0ZW1wUGVycyA6IFVzZXJbXSA9IFtdO1xuICAgIGZvcihsZXQgcGVycyBvZiBsaXN0UGVycyl7XG4gICAgICBsZXQgaWRQZXJzb247XG4gICAgICBpZihwZXJzW1wiSWRQZXJzb25cIl0pe1xuICAgICAgICBpZFBlcnNvbiA9IHBlcnNbXCJJZFBlcnNvblwiXVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlkUGVyc29uID0gcGVyc1tcImlkUGVyc29uXCJdXG4gICAgICB9XG4gICAgICB0ZW1wUGVycy5wdXNoKHtcbiAgICAgICAgbGFzdE5hbWUgOiBpZFBlcnNvbltcImxhc3ROYW1lXCJdLFxuICAgICAgICBmaXJzdE5hbWUgOiBpZFBlcnNvbltcImZpcnN0TmFtZVwiXSxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB0ZW1wUGVycztcbiAgfVxuXG4gIGluaXRUeXBlU2Vzc2lvbihzdHIgOiBzdHJpbmcpIDogVHlwZVNlc3Npb25bXXtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXCJkYXlcIi9naSwgXCJcXFwiRGF5XFxcIlwiKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXCJ0aW1lXCIvZ2ksIFwiXFxcIlRpbWVcXFwiXCIpO1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShzdHIpO1xuICAgIGxldCB0eXBlU2Vzc2lvbiA6IFR5cGVTZXNzaW9uW10gPSBbXTtcbiAgICBmb3IobGV0IHR5cGUgb2YgZGF0YSl7XG4gICAgICBsZXQgVHlwZVNlc3M7XG4gICAgICBpZih0eXBlW1wiSWRUeXBlU2Vzc2lvblwiXSl7XG4gICAgICAgIFR5cGVTZXNzID0gdHlwZVtcIklkVHlwZVNlc3Npb25cIl1cbiAgICAgIH1lbHNlIGlmKHR5cGVbXCJpZFR5cGVTZXNzaW9uXCJdKXtcbiAgICAgICAgVHlwZVNlc3MgPSB0eXBlW1wiaWRUeXBlU2Vzc2lvblwiXVxuICAgICAgfWVsc2V7XG4gICAgICAgIFR5cGVTZXNzID0gdHlwZVxuICAgICAgfVxuICAgICAgbGV0IHRlbXBUeXBlIDogVHlwZVNlc3Npb24gPSB7XG4gICAgICAgIElkIDogVHlwZVNlc3NbXCJpZFwiXSxcbiAgICAgICAgRGF5IDogdGhpcy5kYXlTd2l0aChUeXBlU2Vzc1tcIkRheVwiXSksXG4gICAgICAgIFRpbWUgOiBUeXBlU2Vzc1tcIlRpbWVcIl0uc3BsaXQoJyAnKVsxXSxcbiAgICAgIH07XG5cbiAgICAgIGlmKHR5cGVbXCJpZFR5cGVTZXNzaW9uXCJdKXtcbiAgICAgICAgdGVtcFR5cGUuUGVyc29uID0gdGhpcy5pbml0TGlzdFBlcnNEZXRhaWwoVHlwZVNlc3NbXCJpZFR5cGVTZXNzaW9uXCJdKVxuICAgICAgfWVsc2UgaWYodHlwZVtcImlkUGVyc29uXCJdKXtcbiAgICAgICAgdGVtcFR5cGUuUGVyc29uID0gdGhpcy5pbml0TGlzdFBlcnNEZXRhaWwoVHlwZVNlc3NbXCJpZFBlcnNvblwiXSlcbiAgICAgIH1cbiAgICAgIHR5cGVTZXNzaW9uLnB1c2godGVtcFR5cGUpXG4gICAgfVxuICAgIHJldHVybiB0eXBlU2Vzc2lvbjtcbiAgfVxuXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwibWF0LWNhcmR7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5tYXQtZm9ybS1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubWF0LXNwaW5uZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxuPG1hdC1jYXJkPlxcbiAgPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPiB7e2Vycm9yfX0gPC9tYXQtZXJyb3I+XFxuXFxuICA8bWF0LXNwaW5uZXIgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9tYXQtc3Bpbm5lcj5cXG5cXG4gIDxmb3JtIChzdWJtaXQpPVxcXCJvblNpZ251cChzaWdudXBGb3JtKVxcXCIgI3NpZ251cEZvcm09XFxcIm5nRm9ybVxcXCIgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiPlxcblxcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJlbWFpbFxcXCIgbmdNb2RlbCB0eXBlPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkUtTWFpbFxcXCIgI2VtYWlsSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIGVtYWlsPlxcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwiZW1haWxJbnB1dC5pbnZhbGlkXFxcIj5wbGVhc2UgZW50ZXIgdmFsaWQgZW1haWw8L21hdC1lcnJvcj5cXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgbmdNb2RlbCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiVXNlcm5hbWVcXFwiICN1c2VybmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCB1c2VybmFtZT5cXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcInVzZXJuYW1lSW5wdXQuaW52YWxpZFxcXCI+cGxlYXNlIGVudGVyIHZhbGlkIFVzZXJuYW1lPC9tYXQtZXJyb3I+XFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwiTm9tXFxcIiBuZ01vZGVsIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJOb21cXFwiICN1c2VybmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD5cXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcInVzZXJuYW1lSW5wdXQuaW52YWxpZFxcXCI+cGxlYXNlIGVudGVyIHZhbGlkIFVzZXJuYW1lPC9tYXQtZXJyb3I+XFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwiUHJlbm9tXFxcIiBuZ01vZGVsIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJQcmVub21cXFwiICN1c2VybmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD5cXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcInVzZXJuYW1lSW5wdXQuaW52YWxpZFxcXCI+cGxlYXNlIGVudGVyIHZhbGlkIFVzZXJuYW1lPC9tYXQtZXJyb3I+XFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwiQWJvbm5lbWVudFxcXCIgbmdNb2RlbCB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJBYm9ubmVtZW50XFxcIiAjdXNlcm5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJ1c2VybmFtZUlucHV0LmludmFsaWRcXFwiPnBsZWFzZSBlbnRlciB2YWxpZCBVc2VybmFtZTwvbWF0LWVycm9yPlxcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICAgICAgPG5nLWNvbnRhaW5lcj5cXG4gICAgICAgIDx1bCAqbmdGb3I9XFxcImxldCBzZXNzaW9uIG9mIGxpc3RUeXBlU2Vzc2lvblxcXCIgPlxcbiAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVxcXCJhZGRUeXBlU2Vzc2lvbihzZXNzaW9uLklkKVxcXCI+XFxuICAgICAgICAgICAge3tzZXNzaW9uLkRheX19IHt7c2Vzc2lvbi5UaW1lfX1cXG4gICAgICAgICAgPC9tYXQtY2hlY2tib3g+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvbmctY29udGFpbmVyPlxcblxcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcInBhc3N3b3JkXFxcIiBuZ01vZGVsIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBwYXNzd29yZD5cXG4gICAgICAgIDwvbGFiZWw+XFxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmludmFsaWRcXFwiPnBsZWFzZSBlbnRlciB2YWxpZCBwYXNzd29yZDwvbWF0LWVycm9yPlxcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwicGFzc3dvcmRDb25maXJtYXRpb25cXFwiIG5nTW9kZWwgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJSZXBlYXQgUGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBwYXNzd29yZD5cXG4gICAgICAgIDwvbGFiZWw+XFxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmludmFsaWRcXFwiPnBsZWFzZSBlbnRlciB2YWxpZCBwYXNzd29yZDwvbWF0LWVycm9yPlxcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCI+UydpbnNjcmlyZTwvYnV0dG9uPlxcbiAgICAgIDxwPlxcbiAgICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlPiogOiBjaGFtcHMgcmVxdWlzPC9tYXQtY2FyZC1zdWJ0aXRsZT5cXG4gICAgICA8L3A+XFxuICA8L2Zvcm0+XFxuPC9tYXQtY2FyZD5cXG5cXG5cIiIsImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xuaW1wb3J0IHtBdXRoU2lnbnVwRGF0YSwgU2Vzc2lvbnMsIFR5cGVTZXNzaW9uLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5cbi8vdG9kbyBhdXRvIHN1YnNjcmliZSB0byBzZXNzaW9uIGluIGZ1bmN0aW9uIG9mIGhpcyBzdWJzY3JpcHRpb25cbi8vdG9kbyBtb2RpZmljYXRpb24gYmFzZSBkZSBkb25uw6llIHBvdXIgbGlhaXNvbiBlbnRyZSB0eXBlIGRlIHNlc3Npb24gZXQgdXRpbGlzYXRldXJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWdudXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdHtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyB1c2VyOiBVc2VyO1xuICBkYXlzID0gdGhpcy50b29sLmRheXM7XG4gIHB1YmxpYyBsaXN0VHlwZVNlc3Npb246IFR5cGVTZXNzaW9uW107XG4gIGVycm9yO1xuXG4gIEBWaWV3Q2hpbGQoJ2RheVNlbGVjdCcse3N0YXRpYzpmYWxzZX0pIGRheVNlbGVjdDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKCdkYXlTZWxlY3QyJyx7c3RhdGljOmZhbHNlfSkgZGF5U2VsZWN0MjogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKCd0aW1lU2VsZWN0Jyx7c3RhdGljOmZhbHNlfSkgdGltZVNlbGVjdDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKCd0aW1lU2VsZWN0Micse3N0YXRpYzpmYWxzZX0pIHRpbWVTZWxlY3QyOiBNYXRTZWxlY3Q7XG4gIHByaXZhdGUgbGlzdFR5cGVTZXNzaW9uSWQ6IG51bWJlcltdID0gW107XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpIDogQXBpU2VydmljZSkgeyB9XG5cbiAgb25TaWdudXAoZm9ybTogTmdGb3JtKSB7XG4gICAgaWYgKGZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBhdXRoRGF0YTogQXV0aFNpZ251cERhdGEgPSB7XG4gICAgICBlbWFpbDogZm9ybS52YWx1ZS5lbWFpbCxcbiAgICAgIHVzZXJuYW1lOiBmb3JtLnZhbHVlLnVzZXJuYW1lLFxuICAgICAgTm9tOiBmb3JtLnZhbHVlLk5vbSxcbiAgICAgIFByZW5vbTogZm9ybS52YWx1ZS5QcmVub20sXG4gICAgICBBYm9ubmVtZW50OiBOdW1iZXIoZm9ybS52YWx1ZS5BYm9ubmVtZW50KSxcbiAgICAgIHR5cGVTZXNzaW9ucyA6IFtdLFxuICAgICAgcGFzc3dvcmQ6IGZvcm0udmFsdWUucGFzc3dvcmQsXG4gICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogZm9ybS52YWx1ZS5wYXNzd29yZENvbmZpcm1hdGlvbixcbiAgICB9O1xuXG5cbiAgICBmb3IobGV0IHNlc3Npb24gb2YgdGhpcy5saXN0VHlwZVNlc3Npb24pe1xuICAgICAgaWYodGhpcy5saXN0VHlwZVNlc3Npb25JZC5pbmRleE9mKHNlc3Npb24uSWQpICE9IC0xKXtcbiAgICAgICAgYXV0aERhdGEudHlwZVNlc3Npb25zLnB1c2goc2Vzc2lvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdXRoU2VydmljZS5jcmVhdGVVc2VyKGF1dGhEYXRhKS5zdWJzY3JpYmUoKG5leHQpPT57XG4gICAgICBpZihuZXh0W1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgICB9XG4gICAgfSxlcnJvcjEgPT4ge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yMTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXBpLmdldFR5cGVTZXNzaW9uKCkuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1cmxkYXRhKSk7XG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IFtdO1xuICAgICAgZm9yKGxldCB0eXBlIG9mIGRhdGEpe1xuICAgICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiAucHVzaCh7XG4gICAgICAgICAgSWQgOiB0eXBlW1wiaWRcIl0sXG4gICAgICAgICAgRGF5IDogdGhpcy50b29sLmRheVN3aXRoKHR5cGVbXCJEYXlcIl0pLFxuICAgICAgICAgIFRpbWUgOiB0eXBlW1wiVGltZVwiXS5zcGxpdCgnICcpWzFdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGRUeXBlU2Vzc2lvbihJZDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuaW5kZXhPZihJZCkgIT0gLTEpe1xuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb25JZC5zcGxpY2UodGhpcy5saXN0VHlwZVNlc3Npb25JZC5pbmRleE9mKElkKSwxKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uSWQucHVzaChJZCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtZXJyb3IgKm5nSWY9XFxcImVycm9yXFxcIj57e2Vycm9yfX08L21hdC1lcnJvcj5cXG5cXG48Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XFxcIkNob2lzaSBsZSBKb3VyXFxcIiAjZGF5U2VsZWN0PlxcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cXFwibGV0IGRheSBvZiBkYXlzXFxcIiBbdmFsdWVdPVxcXCJkYXkuY29kZVxcXCIgPlxcbiAgICAgICAge3tkYXkubm9tfX1cXG4gICAgICA8L21hdC1vcHRpb24+XFxuICAgIDwvbWF0LXNlbGVjdD5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJzdGltZVxcXCIgbmdNb2RlbCBwbGFjZWhvbGRlcj1cXFwiQ2hvaXNpdCBsJ2hldXJlXFxcIj5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1BZGQoZm9ybSk+T2s8L2J1dHRvbj5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+Tm8gVGhhbmtzPC9idXR0b24+XFxuPC9mb3JtPlxcblwiIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUeXBlU2Vzc2lvbn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZGQtdHlwZS1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRUeXBlU2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGRheXMgPSB0aGlzLnRvb2wuZGF5cztcbiAgcHVibGljIGVycm9yIDogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2RheVNlbGVjdCcse3N0YXRpYzpmYWxzZX0pIGRheVNlbGVjdDogTWF0U2VsZWN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBZGRUeXBlU2Vzc2lvbkNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBhcGkgOiBBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgQWRkKGZvcm0gOiBOZ0Zvcm0pIHtcbiAgICBsZXQgdGVtcFR5cGVTZXNzIDogVHlwZVNlc3Npb24gPSB7XG4gICAgICBJZCA6IDAsXG4gICAgICBEYXkgOiB0aGlzLmRheVNlbGVjdC52YWx1ZSxcbiAgICAgIFRpbWUgOiBmb3JtLnZhbHVlLnN0aW1lXG4gICAgfTtcblxuICAgIHRoaXMuYXBpLmFkZFR5cGVTZXNzaW9uKHRlbXBUeXBlU2Vzcykuc3Vic2NyaWJlKHJlc3VsdD0+e1xuICAgICAgaWYocmVzdWx0WydyZXN1bHQnXSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFsncmVzdWx0J10pO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sZXJyb3IgPT4ge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1jYXJkPlxcbiAgPG1hdC1jYXJkLXRpdGxlPlxcbiAgICA8ZGl2PlxcbiAgICAgIEV0ZXMgdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXJcXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXY+XFxuICAgICAge3tkYXRhLkRheX19IHt7ZGF0YS5UaW1lfX1cXG4gICAgPC9kaXY+XFxuICA8L21hdC1jYXJkLXRpdGxlPlxcbiAgPGRpdiBjbGFzcz1cXFwiZGVsLWJ1dHRvblxcXCI+XFxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVxcXCJ3YXJuXFxcIiAoY2xpY2spPVxcXCJEZWxldGUoZGF0YS5JZClcXFwiPiBPVUkhIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiA1JVxcXCIgKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPkFubnVsZXI8L2J1dHRvbj5cXG4gIDwvZGl2PlxcbjwvbWF0LWNhcmQ+XFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUeXBlU2Vzc2lvbiwgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZWwtYWJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbC10eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxUeXBlU2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGVycm9yIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZWxUeXBlU2Vzc2lvbkNvbXBvbmVudD4sXG4gICAgcHVibGljIGFwaSA6IEFwaVNlcnZpY2UsXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBUeXBlU2Vzc2lvbiwpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBEZWxldGUoSWQ6IGFueSkge1xuICAgIHRoaXMuYXBpLmRlbFR5cGVTZXNzaW9uKElkKS5zdWJzY3JpYmUocmVzdWx0PT57XG4gICAgICBpZihyZXN1bHRbJ3Jlc3VsdCddKXtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPnt7ZXJyb3J9fTwvbWF0LWVycm9yPlxcbjxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cXFwiQ2hvaXNpIGxlIEpvdXJcXFwiICNkYXlTZWxlY3QgWyh2YWx1ZSldPVxcXCJzZWxlY3REYXlcXFwiPlxcbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cXFwibGV0IGRheSBvZiBkYXlzXFxcIiBbdmFsdWVdPVxcXCJkYXkuY29kZVxcXCIgPlxcbiAgICAgICAge3tkYXkubm9tfX1cXG4gICAgICA8L21hdC1vcHRpb24+XFxuICAgIDwvbWF0LXNlbGVjdD5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJzdGltZVxcXCIgWyhuZ01vZGVsKV09XFxcImRhdGEuVGltZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNob2lzaXQgbCdoZXVyZVxcXCI+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9RWRpdChmb3JtKT5PazwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XFxcIm9uTm9DbGljaygpXFxcIj5ObyBUaGFua3M8L2J1dHRvbj5cXG48L2Zvcm0+XFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUeXBlU2Vzc2lvbiwgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0LXR5cGUtc2Vzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LXR5cGUtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRUeXBlU2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGRheXMgPSB0aGlzLnRvb2wuZGF5cztcbiAgcHVibGljIGVycm9yIDogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2RheVNlbGVjdCcse3N0YXRpYzpmYWxzZX0pIGRheVNlbGVjdDogTWF0U2VsZWN0O1xuICBwdWJsaWMgc2VsZWN0RGF5OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEVkaXRUeXBlU2Vzc2lvbkNvbXBvbmVudD4sXG4gICAgcHVibGljIGFwaSA6IEFwaVNlcnZpY2UsXG4gICAgcHVibGljIHRvb2wgOiBUb29sU2VydmljZSxcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFR5cGVTZXNzaW9uLCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3REYXkgPSB0aGlzLnRvb2wuaW52RGF5U3dpdGNoKHRoaXMuZGF0YS5EYXkpXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIEVkaXQoZm9ybSA6IE5nRm9ybSkge1xuICAgIGxldCB0ZW1wVHlwZVNlc3MgOiBUeXBlU2Vzc2lvbiA9IHtcbiAgICAgIElkIDogdGhpcy5kYXRhLklkLFxuICAgICAgRGF5IDogdGhpcy5kYXlTZWxlY3QudmFsdWUsXG4gICAgICBUaW1lIDogZm9ybS52YWx1ZS5zdGltZVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyh0ZW1wVHlwZVNlc3MpO1xuXG4gICAgdGhpcy5hcGkuZWRpdFR5cGVTZXNzaW9uKHRlbXBUeXBlU2Vzcykuc3Vic2NyaWJlKHJlc3VsdD0+e1xuICAgICAgaWYocmVzdWx0WydyZXN1bHQnXSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdFsncmVzdWx0J10pO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sZXJyb3IgPT4ge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXQtdHlwZS1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuLi9tb250aC9saXN0LXBlcnNvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBsaXN0QWJvU2Vzc2lvbntcbiAgUGVyc29uQ29sOiBzdHJpbmdbXSA9IFsnVXNlciddO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8bGlzdEFib1Nlc3Npb24+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVXNlcltdKSB7fVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLmRlbGV0ZXtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxubWF0LXRhYmxle1xcbiAgbWFyZ2luOiAzJSAyJSA7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYXQtaGVhZGVyLWNlbGx7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcbm1hdC1jZWxse1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZCAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj5cXG4gIDxtYXQtc3Bpbm5lciBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj48L21hdC1zcGlubmVyPlxcbjwvbWF0LWNhcmQ+XFxuXFxuPG1hdC10YWJsZSAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCIgW2RhdGFTb3VyY2VdPVxcXCJsaXN0VHlwZVNlc3Npb25cXFwiIGNsYXNzPVxcXCJtYXQtZWxldmF0aW9uLXo4XFxcIj5cXG5cXG4gIDwhLS0gRGF0ZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiRGF5XFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gSm91ciA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5EYXl9fSA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIFRpbWUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlRpbWVcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBIZXVyZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5UaW1lfX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBDYW5jZWwgU2Vzc2lvbiBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJBY3Rpb25cXFwiPlxcblxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxcbiAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcImVycm9yXFxcIj4ge3sgZXJyb3IgfX08L21hdC1lcnJvcj5cXG4gICAgICBNb2RpZmljYXRpb24gLyBTdXBwcmVzc2lvblxcbiAgICA8L21hdC1oZWFkZXItY2VsbD5cXG5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudDogbGV0IGkgPSBpbmRleFxcXCIgPlxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiTW9kaWZpY2F0aW9uXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJvcGVuRWRpdERpYWxvZyhpKVxcXCI+ZWRpdDwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY2xhc3M9XFxcImRlbGV0ZVxcXCIgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIlN1cHByZXNzaW9uXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJvcGVuRGVsZXRlRGlhbG9nKGkpXFxcIj5kZWxldGU8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcblxcbiAgICA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIENhbmNlbCBTZXNzaW9uIENvbHVtbi0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFkZFxcXCI+XFxuXFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY2xhc3M9XFxcImRlbGV0ZVxcXCIgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkFqb3V0XFxcIiAoY2xpY2spPVxcXCJvcGVuRGlhbG9nKClcXFwiPlxcbiAgICAgICAgPHNwYW4+QWpvdXQgZCd1bmUgc2Vzc2lvbiA8L3NwYW4+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgPmFkZDwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50OiBsZXQgaSA9IGluZGV4XFxcIiA+XFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJNb2RpZmljYXRpb25cXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIm9wZW5MaXN0RGlhbG9nKGkpXFxcIj5pbmZvcm1hdGlvbjwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVxcXCJkaXNwbGF5ZWRDb2x1bW5zXFxcIj48L21hdC1oZWFkZXItcm93PlxcbiAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cXFwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcXFwiPjwvbWF0LXJvdz5cXG5cXG48L21hdC10YWJsZT5cXG5cIiIsImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHlwZVNlc3Npb259IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcbmltcG9ydCB7IE1hdERpYWxvZ30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtBZGRUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnLi9hZGQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0VkaXRUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnLi9lZGl0LXR5cGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtsaXN0QWJvU2Vzc2lvbn0gZnJvbSAnLi9saXN0LWFiby1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbFR5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICcuL2RlbC10eXBlLXNlc3Npb24uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdHlwZS1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3R5cGUtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3R5cGUtc2Vzc2lvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHlwZVNlc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgbGlzdFR5cGVTZXNzaW9uOiBUeXBlU2Vzc2lvbltdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydEYXknLCdUaW1lJywnQWN0aW9uJywnQWRkJ107XG4gIGVycm9yOiBhbnk7XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGkgOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkaWFsb2cgOiBNYXREaWFsb2cpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uID0gW107XG4gICAgdGhpcy5hcGkuZ2V0VHlwZVNlc3Npb24oKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHVybGRhdGEpO1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1wiaWRUeXBlU2Vzc2lvblwiL2dpLCBcIlxcXCJpZFBlcnNvblxcXCJcIik7XG5cbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uID0gdGhpcy50b29sLmluaXRUeXBlU2Vzc2lvbihzdHIpO1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IFtdO1xuICAgIHRoaXMuYXBpLmdldFR5cGVTZXNzaW9uKCkuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeSh1cmxkYXRhKTtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cImlkVHlwZVNlc3Npb25cIi9naSwgXCJcXFwiaWRQZXJzb25cXFwiXCIpO1xuXG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IHRoaXMudG9vbC5pbml0VHlwZVNlc3Npb24oc3RyKTtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgb3BlbkRpYWxvZygpe1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQWRkVHlwZVNlc3Npb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRWRpdERpYWxvZyhJZCA6IG51bWJlcil7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihFZGl0VHlwZVNlc3Npb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoIDogJzI1MHB4JyxcbiAgICAgIGRhdGEgOiB0aGlzLmxpc3RUeXBlU2Vzc2lvbltJZF1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3Blbkxpc3REaWFsb2coSWQ6IGFueSkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4obGlzdEFib1Nlc3Npb24sIHtcbiAgICAgIHdpZHRoIDogJzI1MHB4JyxcbiAgICAgIGRhdGEgOiB0aGlzLmxpc3RUeXBlU2Vzc2lvbltJZF0uUGVyc29uXG4gICAgfSk7XG4gIH1cblxuICBvcGVuRGVsZXRlRGlhbG9nKElkIDogYW55KXtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERlbFR5cGVTZXNzaW9uQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aCA6ICc1NTBweCcsXG4gICAgICBkYXRhIDogdGhpcy5saXN0VHlwZVNlc3Npb25bSWRdXG4gICAgfSk7XG4gIH1cblxuXG59XG4iLCIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxuLy8gYG5nIGJ1aWxkIC0tcHJvZGAgcmVwbGFjZXMgYGVudmlyb25tZW50LnRzYCB3aXRoIGBlbnZpcm9ubWVudC5wcm9kLnRzYC5cbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiBmYWxzZVxufTtcblxuLypcbiAqIEZvciBlYXNpZXIgZGVidWdnaW5nIGluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBjYW4gaW1wb3J0IHRoZSBmb2xsb3dpbmcgZmlsZVxuICogdG8gaWdub3JlIHpvbmUgcmVsYXRlZCBlcnJvciBzdGFjayBmcmFtZXMgc3VjaCBhcyBgem9uZS5ydW5gLCBgem9uZURlbGVnYXRlLmludm9rZVRhc2tgLlxuICpcbiAqIFRoaXMgaW1wb3J0IHNob3VsZCBiZSBjb21tZW50ZWQgb3V0IGluIHByb2R1Y3Rpb24gbW9kZSBiZWNhdXNlIGl0IHdpbGwgaGF2ZSBhIG5lZ2F0aXZlIGltcGFjdFxuICogb24gcGVyZm9ybWFuY2UgaWYgYW4gZXJyb3IgaXMgdGhyb3duLlxuICovXG4vLyBpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLWVycm9yJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG4iLCJpbXBvcnQgJ2hhbW1lcmpzJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=