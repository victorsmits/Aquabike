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

/***/ "./app/app.component.html":
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__("./app/app.component.html")).default,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vYWRtaW4tYWJvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vZGVsLWFiby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tYWJvL2RlbC1hYm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vZWRpdC1hYm8tdHlwZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWNyZWF0ZS1zZXNzaW9uL2FkbWluLWNyZWF0ZS1zZXNzaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vY29uZmlybS1nZW5lcmF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tc2Vzc2lvbi9hZG1pbi1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRucy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0by1nZW5lcmF0ZWQvYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0by1nZW5lcmF0ZWQvYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZ3VhcmQvYWRtaW4uZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2d1YXJkL2F1dGguZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9tZW51L21lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21lbnUvbWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vbnRoL2xpc3QtcGVyc29uLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbW9udGgvbW9udGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9udGgvbW9udGguY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2UvYXBpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2UvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlL3Rvb2wuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL2FkZC10eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9hZGQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL2RlbC10eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9kZWwtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL2VkaXQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vZWRpdC10eXBlLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vbGlzdC1hYm8tc2Vzc2lvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL3R5cGUtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL3R5cGUtc2Vzc2lvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL21haW4udG5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEsK0dBQWlFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ25LLGdFQUFnRSxtQkFBTyxDQUFDLDRIQUEwRjtBQUNsSyxpRUFBaUUsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbkssZ0VBQWdFLG1CQUFPLENBQUMsNEhBQTBGLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLGlFQUFpRSxFQUFFLGlFQUFpRSxFQUFFLDJKQUEySjtBQUNwZ0IsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ1RBO0FBQWUsc0VBQU8sZ0JBQWdCLEdBQUcsWUFBWSxxQkFBcUIsZ0JBQWdCLDRCQUE0QixHQUFHLGVBQWUsbUJBQW1CLEdBQUcsYUFBYSw0QkFBNEIscUJBQXFCLEdBQUcsb0JBQW9CLHNCQUFzQiw0QkFBNEIsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsaUJBQWlCLHFCQUFxQiwwQkFBMEIsR0FBRyxHOzs7Ozs7OztBQ0F2WjtBQUFlLGllQUFrYSxrQkFBa0IseU9BQXlPLG1CQUFtQiwrT0FBK08sb0JBQW9CLHNQQUFzUCxpQkFBaUIsMk5BQTJOLGFBQWEsNFRBQTRULGdCQUFnQiwwTUFBME0sZ0JBQWdCLGdTQUFnUyxnQkFBZ0Isd1BBQXdQLDJCQUEyQixvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdjlFO0FBQ2pCO0FBRUg7QUFDWTtBQUM2QjtBQUNwQztBQUNBO0FBVXBELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFMUIsWUFDUyxTQUF3QyxFQUNmLElBQWE7UUFEdEMsY0FBUyxHQUFULFNBQVMsQ0FBK0I7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFTO0lBQUcsQ0FBQztJQUVuRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBRUY7O1lBUHFCLDhEQUFZOzRDQUM3QixvREFBTSxTQUFDLGlFQUFlOztBQUpkLGVBQWU7SUFKM0IsK0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDRJQUE2QztLQUM5QyxDQUFDO0lBS0csNkdBQU0sQ0FBQyxpRUFBZSxDQUFDO0dBSmYsZUFBZSxDQVUzQjtBQVYyQjtBQVk1QixpQ0FBaUM7QUFPakMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFPNUIsWUFBb0IsR0FBZSxFQUNoQixNQUFpQixFQUNoQixJQUFpQixFQUNqQixTQUFzQjtRQUh0QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBUm5DLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUMvQixxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQVUxRixjQUFTLEdBQVksSUFBSSxDQUFDO0lBSDFCLENBQUM7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFlO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztnQkFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3BDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDdEMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEksS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUM1QixPQUFPLEVBQUUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUNqQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSwwRUFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUs7SUFDeEIsQ0FBQztJQUdELFVBQVUsQ0FBQyxJQUFXO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakQsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUM7YUFDeEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTztRQUNsQyxJQUFJLFVBQVUsR0FBWTtZQUN4QixTQUFTLEVBQUUsS0FBSztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLEVBQUUsRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLE9BQU87U0FDakIsQ0FBQztRQUVGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNsRCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBVTtRQUN6QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrRUFBZSxFQUFFO1lBQ2xELEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWUsRUFBRSxNQUFjO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7WUFDbkMsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7O1lBN0YwQiwrREFBVTtZQUNSLDJEQUFTO1lBQ1YsaUVBQVc7WUFDTiw2REFBVzs7QUFHTjtJQUFuQywrREFBUyxDQUFDLDhEQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7K0NBQWU7QUFidkMsaUJBQWlCO0lBTDdCLCtEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6Qix3SUFBeUM7O0tBRTFDLENBQUM7R0FDVyxpQkFBaUIsQ0FvRzdCO0FBcEc2Qjs7Ozs7Ozs7O0FDcEM5QjtBQUFlLHNMQUF1SCxlQUFlLEdBQUcsZ0JBQWdCLG1TOzs7Ozs7Ozs7Ozs7Ozs7QUNBckc7QUFFSDtBQUNkO0FBU2xELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFHMUIsWUFDUyxTQUF3QyxFQUN4QyxHQUFnQixFQUNTLElBQVU7UUFGbkMsY0FBUyxHQUFULFNBQVMsQ0FBK0I7UUFDeEMsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNTLFNBQUksR0FBSixJQUFJLENBQU07SUFDNUMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFPO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRTtZQUN0QyxJQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxLQUFLLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRjs7WUFyQnFCLDhEQUFZO1lBQ2pCLCtEQUFVOzRDQUN0QixvREFBTSxTQUFDLGlFQUFlOztBQU5kLGVBQWU7SUFKM0IsK0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO1FBQ25CLHNJQUF1QztLQUN4QyxDQUFDO0lBT0csNkdBQU0sQ0FBQyxpRUFBZSxDQUFDO0dBTmYsZUFBZSxDQXlCM0I7QUF6QjJCOzs7Ozs7Ozs7QUNaNUI7QUFBZSx1SEFBd0QsZUFBZSxHQUFHLGdCQUFnQixrVzs7Ozs7Ozs7QUNBekc7QUFBZSx5RUFBVSxlQUFlLGlCQUFpQixHQUFHLG9CQUFvQixnQkFBZ0IsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsSzs7Ozs7Ozs7QUNBeEk7QUFBZSxnTEFBaUgsT0FBTywwakM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1RTtBQUlUO0FBQ1g7QUFDbUI7QUFDTjtBQUVwRCwyQkFBMkI7QUFPM0IsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFNcEMsWUFDUyxTQUFrRCxFQUNsRCxHQUFnQixFQUNoQixJQUFrQixFQUNsQixNQUFlO1FBSGYsY0FBUyxHQUFULFNBQVMsQ0FBeUM7UUFDbEQsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFSakIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUNsQyxvQkFBZSxHQUFnQixFQUFFLENBQUM7UUFDMUIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO0lBT3ZDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFFO1lBQzNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFDO2dCQUNuQixJQUFJLENBQUMsZUFBZSxDQUFFLElBQUksQ0FBQztvQkFDekIsRUFBRSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2YsR0FBRyxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckMsSUFBSSxFQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNsQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxjQUFjLENBQUMsRUFBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUM7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO2FBQUk7WUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBYTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFFO1lBQzVGLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ3BCLENBQUMsQ0FBRSxDQUFDO0lBQ04sQ0FBQztDQUNGOztZQTFDcUIsOERBQVk7WUFDakIsK0RBQVU7WUFDVCxpRUFBVztZQUNULHNEQUFNOztBQVZiLHlCQUF5QjtJQUpyQywrREFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qiw0SkFBa0Q7S0FDbkQsQ0FBQztHQUNXLHlCQUF5QixDQWlEckM7QUFqRHFDO0FBd0R0QyxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQWtCdEMsWUFBb0IsR0FBZSxFQUNmLE1BQWUsRUFDZixNQUFrQjtRQUZsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLFdBQU0sR0FBTixNQUFNLENBQVk7UUFqQnRDLGNBQVMsR0FBK0I7WUFDdEMsU0FBUyxFQUFFO2dCQUNULG1CQUFtQixFQUFFLFNBQVM7Z0JBQzlCLFdBQVcsRUFBRSxNQUFNO2FBQ3BCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLG1CQUFtQixFQUFFLE1BQU07YUFDNUI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsd0JBQXdCLEVBQUUsTUFBTTtnQkFDaEMsY0FBYyxFQUFFLFNBQVM7Z0JBQ3pCLDBCQUEwQixFQUFFLE1BQU07YUFDbkM7U0FDRixDQUFDO0lBSXdDLENBQUM7SUFFM0MsUUFBUTtRQUNOLDJCQUEyQjtJQUM3QixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBYTtZQUN0QixJQUFJLEVBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUN2QixJQUFJLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3RCLElBQUksRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDdEIsTUFBTSxFQUFHLEtBQUs7WUFDZCxFQUFFLEVBQUcsQ0FBQztTQUNQLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFFO1lBQ2pELElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO2dCQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxFQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ3BCLENBQUMsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUVELDJDQUEyQztJQUUzQyxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDNUQsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGOztZQXhDMEIsK0RBQVU7WUFDTixzREFBTTtZQUNOLDJEQUFTOztBQXBCM0IsMkJBQTJCO0lBTHZDLCtEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLDhKQUFvRDs7S0FFckQsQ0FBQztHQUNXLDJCQUEyQixDQTBEdkM7QUExRHVDOzs7Ozs7Ozs7QUN4RXhDO0FBQWUsNkZBQThCLE9BQU8sdUNBQXVDLHVQQUF1UCxhQUFhLEdBQUcsY0FBYyx5bkI7Ozs7Ozs7O0FDQWhYO0FBQWUsd0VBQVMsb0JBQW9CLGdCQUFnQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsb0JBQW9CLDRCQUE0QixzQkFBc0IsR0FBRyxVQUFVLG1CQUFtQixPQUFPLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLGdCQUFnQixHQUFHLFdBQVcsZUFBZSxvQkFBb0IsR0FBRyxHOzs7Ozs7OztBQ0FoVjtBQUFlLDZYQUE4VCxZQUFZLDBVQUEwVSxHQUFHLHExQkFBcTFCLFlBQVksaU9BQWlPLGNBQWMsa09BQWtPLGNBQWMsdU9BQXVPLGNBQWMsc1FBQXNRLDRCQUE0QixnQkFBZ0IseUdBQXlHLGNBQWMsa1NBQWtTLDJKQUEySixnQkFBZ0IsdU9BQXVPLFNBQVMsb09BQW9PLG1EQUFtRCxnQkFBZ0IsMk9BQTJPLGdCQUFnQix5TUFBeU0sZ0JBQWdCLG1QQUFtUCwyQkFBMkIsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaHdJO0FBQ3hCO0FBRVE7QUFHMkI7QUFDdEM7QUFDWTtBQUNQO0FBTXBELCtDQUErQztBQU8vQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQW1DaEMsWUFBbUIsR0FBZSxFQUNmLE1BQWlCLEVBQ2pCLElBQWtCO1FBRmxCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQWM7UUFwQzlCLFNBQUksR0FBUyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUU1QixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFFMUIscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBT3ZGLFdBQU0sR0FBRztZQUNQLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLE9BQU8sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3pCLEVBQUMsSUFBSSxFQUFHLEtBQUssRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3ZCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLFdBQVcsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1NBQzlCLENBQUM7UUFDRixjQUFTLEdBQVksSUFBSSxDQUFDO0lBTWUsQ0FBQztJQUUxQyxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQU87UUFFakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFHckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVoRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDdkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDbkIsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLDBFQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVLENBQUMsRUFBRTtRQUNYLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVFQUFnQixFQUFFO1lBQ25ELEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUNMLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBTztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDdEQsT0FBTyxHQUFFO1lBQ1QsSUFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUFPO1FBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRTtZQUM3QyxJQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQztnQkFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQU87UUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFFO1lBQ3pDLElBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDO2dCQUNuQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxXQUFXLENBQUMsTUFBVztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0NBQ0Y7O1lBbEd5QiwrREFBVTtZQUNQLDJEQUFTO1lBQ1YsaUVBQVc7O0FBekJFO0lBQXRDLCtEQUFTLENBQUMsV0FBVyxFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxDQUFDO3dEQUF1QjtBQUN6QjtJQUFuQywrREFBUyxDQUFDLDBEQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLENBQUM7c0RBQW9CO0FBQ2Y7SUFBdkMsK0RBQVMsQ0FBQyxZQUFZLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLENBQUM7eURBQXdCO0FBQzNCO0lBQW5DLCtEQUFTLENBQUMsOERBQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzttREFBZTtBQWZ2QyxxQkFBcUI7SUFMakMsK0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsZ0pBQTZDOztLQUU5QyxDQUFDO0dBQ1cscUJBQXFCLENBcUlqQztBQXJJaUM7Ozs7Ozs7OztBQ3RCbEM7QUFBZSx5RUFBVSxlQUFlLEdBQUcsRzs7Ozs7Ozs7QUNBM0M7QUFBZSxzZjs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU9sRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBRXpCLHVEQUF1RDtJQUV2RCxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGO0FBVFksY0FBYztJQUwxQiwrREFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsZ0lBQXFDOztLQUV0QyxDQUFDO0dBQ1csY0FBYyxDQVMxQjtBQVQwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGM7QUFDYztBQUNIO0FBQ0c7QUFDQTtBQUNHO0FBQ0c7QUFDTjtBQUN1QjtBQUNaO0FBQ2dDO0FBQ3JEO0FBQ0U7QUFDNEI7QUFHM0UsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUMsRUFBRTtRQUNQLFNBQVMsRUFBRyxrRUFBYTtRQUN6QixXQUFXLEVBQUcsQ0FBQyw0REFBUyxDQUFDO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsT0FBTztRQUNaLFNBQVMsRUFBRyxxRUFBYztLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFDLFFBQVE7UUFDYixTQUFTLEVBQUcsd0VBQWU7S0FDNUI7SUFDRDtRQUNFLElBQUksRUFBQyxPQUFPO1FBQ1osU0FBUyxFQUFHLHFFQUFjO1FBQzFCLFdBQVcsRUFBRyxDQUFDLDREQUFTLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBQyxTQUFTO1FBQ2QsU0FBUyxFQUFHLDJFQUFnQjtRQUM1QixXQUFXLEVBQUcsQ0FBQyw0REFBUyxDQUFDO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsT0FBTztRQUNaLFNBQVMsRUFBRyxxRUFBYztRQUMxQixXQUFXLEVBQUcsQ0FBQyw4REFBVSxDQUFDO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsZUFBZTtRQUNwQixTQUFTLEVBQUcsNEZBQXFCO1FBQ2pDLFdBQVcsRUFBRyxDQUFDLDhEQUFVLENBQUM7S0FFM0I7SUFDRDtRQUNFLElBQUksRUFBQyxrQkFBa0I7UUFDdkIsU0FBUyxFQUFHLGlGQUFpQjtRQUM3QixXQUFXLEVBQUcsQ0FBQyw4REFBVSxDQUFDO0tBRTNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUMsc0JBQXNCO1FBQzNCLFNBQVMsRUFBRyxpSEFBMkI7UUFDdkMsV0FBVyxFQUFHLENBQUMsOERBQVUsQ0FBQztLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFDLG9CQUFvQjtRQUN6QixTQUFTLEVBQUcsMEZBQW9CO1FBQ2hDLFdBQVcsRUFBRyxDQUFDLDhEQUFVLENBQUM7S0FDM0I7Q0FFRixDQUFDO0FBTUYsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBSTtBQUFwQixnQkFBZ0I7SUFKNUIsOERBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLDREQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLDREQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQUo7Ozs7Ozs7OztBQzFFN0I7QUFBZSxvTEFBcUgsaUJBQWlCLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw4QkFBOEIscUJBQXFCLFdBQVcsZUFBZSxHQUFHLFVBQVUsa0JBQWtCLEdBQUcsa0JBQWtCLGdCQUFnQixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxrQkFBa0IseUJBQXlCLHNCQUFzQixHQUFHLEc7Ozs7Ozs7O0FDQXJmO0FBQWUsMlNBQTRPLCtCQUErQixpWEFBaVgseXpCQUF5ekIsNmRBQTZkLCtRQUErUSxlQUFlLEdBQUcsZ0JBQWdCLHd0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FscUU7QUFDRztBQUdaO0FBSVk7QUFFbkQsdUNBQXVDO0FBT3ZDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFNdkIsWUFBb0IsSUFBa0IsRUFDbEIsTUFBZSxFQUNmLElBQWtCO1FBRmxCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLFNBQUksR0FBSixJQUFJLENBQWM7UUFQdEMsVUFBSyxHQUFHLFVBQVUsQ0FBQztRQUdaLGVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUlBLENBQUM7SUFFMUMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxTQUFTLENBQ3pDLElBQUksR0FBRTtZQUNKLElBQUcsSUFBSSxFQUFDO2dCQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLO0lBQ3JCLENBQUM7Q0FDRjs7WUEzQjRCLGlFQUFXO1lBQ1Qsc0RBQU07WUFDUixpRUFBVzs7QUFSM0IsWUFBWTtJQUx4QiwrREFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsd0hBQW1DOztLQUVwQyxDQUFDO0dBQ1csWUFBWSxDQWlDeEI7QUFqQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmlDO0FBQ0Q7QUFDTTtBQUNUO0FBQ087QUFDcUI7QUFDdEI7QUFDSTtBQUNSO0FBQ0U7QUFDMkM7QUFDbkM7QUFDUDtBQUNGO0FBQ1M7QUFDWDtBQUNBO0FBQ0k7QUFDTTtBQU9qQztBQUN1QjtBQVM1QjtBQUMyQztBQUNUO0FBQ007QUFDVjtBQUNJO0FBQ047QUFDdUI7QUFDWDtBQUN1QjtBQUMxQjtBQUNBO0FBQ3VCO0FBQ0c7QUFDMEM7QUFDaEU7QUFDZjtBQUNKO0FBQ2lDO0FBQ087QUFDRTtBQUN0QjtBQUNXO0FBQzFCO0FBQ087QUFDVjtBQUNVO0FBQzRCO0FBQ0M7QUFHWjtBQUNRO0FBNEZ0RixJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQ3JCO0FBRFksU0FBUztJQTFGckIsOERBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLG1FQUFZO1lBQ1osMEVBQWE7WUFDYiw2RUFBYztZQUNkLDZFQUFjO1lBQ2QsK0VBQWdCO1lBQ2hCLGlGQUFlO1lBQ2Ysb0ZBQWdCO1lBQ2hCLDhFQUFjO1lBQ2QscUdBQXFCO1lBQ3JCLHlGQUFpQjtZQUNqQix5SEFBMkI7WUFDM0IsdUZBQWU7WUFDZix3RkFBb0I7WUFDcEIsa0dBQW9CO1lBQ3BCLHlHQUF1QjtZQUN2Qix1SEFBeUI7WUFDekIsMkdBQXdCO1lBQ3hCLHFGQUFlO1lBQ2YsZ0dBQWM7WUFDZCwyRUFBYTtZQUNiLHlHQUF1QjtZQUN2Qix3R0FBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1RUFBYTtZQUNiLDRFQUFnQjtZQUNoQixxRUFBZ0I7WUFDaEIsNkZBQXVCO1lBQ3ZCLGdGQUFrQjtZQUNsQix5RUFBZTtZQUNmLHVFQUFjO1lBQ2QsbUVBQW1CO1lBQ25CLDJEQUFXO1lBQ1gscUVBQWE7WUFDYixxRUFBYTtZQUNiLHlFQUFlO1lBQ2YsK0VBQWtCO1lBQ2xCLHVFQUFlO1lBQ2YscUVBQWE7WUFDYixrRUFBZTtZQUNmLDZGQUF1QjtZQUN2QiwyRUFBZ0I7WUFDaEIsaUZBQW1CO1lBQ25CLHVFQUFjO1lBQ2QsMkVBQW1CO1lBQ25CLDJFQUFnQjtZQUNoQixxRUFBYTtZQUNiLDRGQUF3QjtZQUN4Qiw4RUFBaUI7WUFDakIsb0ZBQTJCO1lBQzNCLHFFQUFhO1lBQ2IsZ0VBQWE7WUFDYixvRUFBaUI7WUFDakIsb0VBQWlCO1lBQ2pCLHFFQUFrQjtZQUNsQixzRUFBZ0I7WUFDaEIsaUVBQVk7WUFDWiwyRUFBZ0I7WUFDaEIsNEZBQWtCO1NBRW5CO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsNkVBQWM7WUFDZCwrRUFBZ0I7WUFDaEIsdUZBQWU7WUFDZix3RkFBb0I7WUFDcEIseUdBQXVCO1lBQ3ZCLHVIQUF5QjtZQUN6QiwyR0FBd0I7WUFDeEIscUZBQWU7WUFDZixnR0FBYztZQUNkLHlHQUF1QjtTQUN4QjtRQUNELFNBQVMsRUFBRTtZQUNULHlFQUFXO1lBQ1gsd0VBQVU7WUFDVixrRUFBZTtZQUNmLEVBQUUsT0FBTyxFQUFFLG9GQUEwQixFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN4RSxFQUFFLE9BQU8sRUFBRSw4REFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDekMsRUFBRSxPQUFPLEVBQUUsaUVBQWdCLEVBQUUsUUFBUSxFQUFFLHFFQUFvQixFQUFFO1lBQzdELGlGQUFtQjtZQUNuQixpRUFBYTtZQUNiLDhEQUFXO1NBRVo7UUFDRCxTQUFTLEVBQUUsQ0FBQyxtRUFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRyxDQUFDLDhEQUFnQixDQUFDO0tBQzdCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRHFCOzs7Ozs7Ozs7QUMvSnRCO0FBQWUsbUg7Ozs7Ozs7O0FDQWY7QUFBZSwySTs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU9sRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUVqQyxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGO0FBUFksc0JBQXNCO0lBTGxDLCtEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLGtKQUE4Qzs7S0FFL0MsQ0FBQztHQUNXLHNCQUFzQixDQU9sQztBQVBrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BRO0FBQytEO0FBRXREO0FBS3BELElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFFckIsWUFBbUIsSUFBa0IsRUFDbEIsTUFBZTtRQURmLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUNsQyxDQUFDO0lBRUQsV0FBVyxDQUNULElBQTRCLEVBQzVCLEtBQTBCO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLEVBQUU7WUFDaEYsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFJO1lBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztDQUVGOztZQWQyQixpRUFBVztZQUNULHNEQUFNOztBQUh2QixVQUFVO0lBSHRCLGdFQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csVUFBVSxDQWdCdEI7QUFoQnNCOzs7Ozs7Ozs7Ozs7Ozs7O0FDUm9CO0FBQytEO0FBRXREO0FBS3BELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFFcEIsWUFBbUIsSUFBa0IsRUFDbEIsTUFBZTtRQURmLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUNsQyxDQUFDO0lBRUQsV0FBVyxDQUNULElBQTRCLEVBQzVCLEtBQTBCO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQztZQUN4QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQUk7WUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBRUY7O1lBZDJCLGlFQUFXO1lBQ1Qsc0RBQU07O0FBSHZCLFNBQVM7SUFIckIsZ0VBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxTQUFTLENBZ0JyQjtBQWhCcUI7Ozs7Ozs7OztBQ1J0QjtBQUFlLHdFQUFTLG9CQUFvQixnQkFBZ0IsMEJBQTBCLEdBQUcsRzs7Ozs7Ozs7QUNBekY7QUFBZSxvSUFBcUUsTUFBTSxxTEFBcUwsTUFBTSw2TEFBNkwsZUFBZSxHQUFHLGdCQUFnQiwyRzs7Ozs7Ozs7Ozs7Ozs7O0FDQWxjO0FBQ0E7QUFDRTtBQVlwRCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBT3hCLFlBQW9CLEdBQWUsRUFDZixJQUFrQjtRQURsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBYztRQVAvQixTQUFJLEdBQVMsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFFckIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFHQyxDQUFDO0lBRTNDLFFBQVE7UUFDTixJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRWhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbkQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEdBQVcsRUFBRSxDQUFDO2dCQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0MsSUFBSSxDQUFDLElBQUksQ0FDUCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQzNCO2lCQUNGO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGOztZQXhCMEIsK0RBQVU7WUFDUixpRUFBVzs7QUFSM0IsYUFBYTtJQVB6QiwrREFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsOEhBQW9DOztLQUVyQyxDQUFDO0dBR1csYUFBYSxDQStCekI7QUEvQnlCOzs7Ozs7Ozs7QUNkMUI7QUFBZSxxRUFBTSxxQkFBcUIsa0JBQWtCLGdCQUFnQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRyxhQUFhLGVBQWUsaUJBQWlCLEdBQUcsU0FBUyxxQkFBcUIsR0FBRyxHOzs7Ozs7OztBQ0FyTTtBQUFlLHVUQUF3UCxPQUFPLDZpQjs7Ozs7Ozs7Ozs7Ozs7O0FDQS9NO0FBRVQ7QUFDZjtBQUl2QywwQkFBMEI7QUFPMUIsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUt6QixZQUFtQixXQUF3QixFQUN4QixNQUFlO1FBRGYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUpsQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSW9CLENBQUM7SUFFdkMsUUFBUSxLQUFHLENBQUM7SUFFWixlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRTthQUN2QyxTQUFTLENBQ1IsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFHLElBQUksRUFBQztnQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUU7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUVGOztZQTlCaUMsaUVBQVc7WUFDZixzREFBTTs7QUFOdkIsY0FBYztJQUwxQiwrREFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsZ0lBQXFDOztLQUV0QyxDQUFDO0dBQ1csY0FBYyxDQW1DMUI7QUFuQzBCOzs7Ozs7Ozs7QUNkM0I7QUFBZSxvRkFBcUIsaUJBQWlCLEdBQUcsY0FBYyxpQkFBaUIsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsOEJBQThCLHFCQUFxQixXQUFXLGVBQWUsR0FBRyxHOzs7Ozs7OztBQ0FoTztBQUFlLDgyQjs7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQzRCO0FBRXBCO0FBT2xELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFReEIsWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOMUQsZUFBVSxHQUF3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLCtEQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25GLElBQUksQ0FDSCwwREFBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUM3QixrRUFBVyxFQUFFLENBQ2QsQ0FBQztJQUV5RCxDQUFDO0NBRS9EOztZQUZ5QyxzRUFBa0I7O0FBUi9DLGFBQWE7SUFMekIsK0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLDhIQUFvQzs7S0FFckMsQ0FBQztHQUNXLGFBQWEsQ0FVekI7QUFWeUI7Ozs7Ozs7OztBQ1YxQjtBQUFlLHVVQUF3USxrQkFBa0IsR0FBRyxtQkFBbUIsNElBQTRJLG9CQUFvQiw4Qzs7Ozs7Ozs7QUNBL2Q7QUFBZSwwRUFBVyxtQkFBbUIsZ0JBQWdCLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxlQUFlLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEdBQUcsYUFBYSxxQkFBcUIsNEJBQTRCLEdBQUcsb0JBQW9CLHNCQUFzQiw0QkFBNEIsR0FBRyxtQkFBbUIsaUJBQWlCLHVCQUF1QixHQUFHLHdCQUF3QixrQkFBa0IsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsK0JBQStCLHdCQUF3QixvQkFBb0IsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssR0FBRyxHOzs7Ozs7OztBQ0FubUI7QUFBZSw4V0FBK1MsWUFBWSw0VEFBNFQsR0FBRyx3aUJBQXdpQixjQUFjLCtOQUErTixjQUFjLHlPQUF5TyxjQUFjLGtSQUFrUiw0QkFBNEIsZ0JBQWdCLDBIQUEwSCxjQUFjLGdkQUFnZCxnQkFBZ0IscVZBQXFWLCtMQUErTCw2TUFBNk0sc2dCQUFzZ0Isa0JBQWtCLHVSQUF1UiwyQkFBMkIsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWxpSTtBQUNoQztBQUNFO0FBSXVCO0FBQzVCO0FBQ1k7QUFDUDtBQU1wRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUUzQixZQUNTLFNBQXlDLEVBQ2hCLElBQVk7UUFEckMsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUg5QyxjQUFTLEdBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUdrQixDQUFDO0lBRWhELFNBQVM7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FFRjs7WUFQcUIsOERBQVk7d0NBQzdCLG9EQUFNLFNBQUMsaUVBQWU7O0FBSmQsZ0JBQWdCO0lBSjVCLCtEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDZJQUFrRDtLQUNuRCxDQUFDO0lBS0csNkdBQU0sQ0FBQyxpRUFBZSxDQUFDO0dBSmYsZ0JBQWdCLENBVTVCO0FBVjRCO0FBWTdCLHFEQUFxRDtBQUNyRCxnQ0FBZ0M7QUFDaEMsMkJBQTJCO0FBUTNCLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFzQ3pCLFlBQW9CLEdBQWUsRUFDaEIsTUFBaUIsRUFDaEIsSUFBZ0IsRUFDaEIsSUFBa0I7UUFIbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQXhDL0IsU0FBSSxHQUFTLEVBQUUsQ0FBQztRQUNoQixVQUFLLEdBQVksSUFBSSxDQUFDO1FBSXRCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsVUFBSyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixlQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFTekMsV0FBTSxHQUFHO1lBQ1AsRUFBQyxJQUFJLEVBQUcsU0FBUyxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDM0IsRUFBQyxJQUFJLEVBQUcsU0FBUyxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDM0IsRUFBQyxJQUFJLEVBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDeEIsRUFBQyxJQUFJLEVBQUcsT0FBTyxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDekIsRUFBQyxJQUFJLEVBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDdkIsRUFBQyxJQUFJLEVBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDeEIsRUFBQyxJQUFJLEVBQUcsU0FBUyxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDM0IsRUFBQyxJQUFJLEVBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDeEIsRUFBQyxJQUFJLEVBQUcsV0FBVyxFQUFFLEdBQUcsRUFBRyxDQUFDLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUcsU0FBUyxFQUFFLEdBQUcsRUFBRyxFQUFFLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUcsVUFBVSxFQUFFLEdBQUcsRUFBRyxFQUFFLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUcsVUFBVSxFQUFFLEdBQUcsRUFBRyxFQUFFLEVBQUM7U0FDOUIsQ0FBQztRQVFBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFH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QVUsRUFBRTtBQUNUO0NBQ2xCO0FBRUQsc0JBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsUUFBVTtLQUNoRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuZWRpdHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5tYXQtdGFibGV7XFxuICBtYXJnaW4gOiBhdXRvIDUlO1xcbiAgcGFkZGluZzogMiU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWF0LXNlbGVjdHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbn1cXG5cXG5tYXQtY2VsbHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxubWF0LWhlYWRlci1jZWxse1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1hdC1jb2x1bW4tQWN0aW9ue1xcbiAgZmxleDogMCAwIDIwJTtcXG59XFxuXFxuLmRlbC1idXR0b24ge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZCAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj5cXG4gIDxtYXQtc3Bpbm5lciBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj48L21hdC1zcGlubmVyPlxcbjwvbWF0LWNhcmQ+XFxuXFxuPG1hdC10YWJsZSAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCIgW2RhdGFTb3VyY2VdPVxcXCJkYXRhU291cmNlXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCIgbWF0U29ydD5cXG5cXG4gIDwhLS0gTGFzdE5hbWUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkxhc3ROYW1lXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+Tm9tPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5sYXN0TmFtZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBGaXJzdE5hbWUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkZpcnN0TmFtZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPlByZW5vbTwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuZmlyc3ROYW1lfX08L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEFib25uZW1lbnQgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFib25uZW1lbnRcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5BYm9ubmVtZW50PC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5hYm9ubmVtZW50fX08L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEFib25uZW1lbnQgVHlwZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWJvVHlwZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPlR5cGUgQWJvbm5lbWVudDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuQWJvVHlwZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBEYXkgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkRheVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPkpvdXI8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+e3tlbGVtZW50LkRheX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBSZVN1YnNjcmliZSBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJBY3Rpb25cXFwiPlxcblxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPjwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIlJlbmV3XFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJyZVN1YmNyaWJlKGVsZW1lbnQpXFxcIj5yZXBsYXk8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiRWRpdFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiAxMCVcXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIm9wZW5EaWFsb2coZWxlbWVudC5maXJzdE5hbWUsXFxuICAgICAgICBlbGVtZW50Lmxhc3ROYW1lLGVsZW1lbnQuaWQsZWxlbWVudC5BYm9UeXBlKVxcXCI+XFxuICAgICAgICAgIGVkaXRcXG4gICAgICAgIDwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJEZWxldGVcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogMTAlXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJvcGVuRGVsZXRlRGlhbG9nKGVsZW1lbnQpXFxcIj5cXG4gICAgICAgICAgZGVsZXRlXFxuICAgICAgICA8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L21hdC1jZWxsPlxcblxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuXFxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cXFwiZGlzcGxheWVkQ29sdW1uc1xcXCI+PC9tYXQtaGVhZGVyLXJvdz5cXG4gIDxtYXQtcm93ICptYXRSb3dEZWY9XFxcImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XFxcIj5cXG4gIDwvbWF0LXJvdz5cXG5cXG48L21hdC10YWJsZT5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7ZWRpdEFibywgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdFNuYWNrQmFyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge0RlbEFib0NvbXBvbmVudH0gZnJvbSAnLi9kZWwtYWJvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uIGV4dGVuZHMgVXNlciB7XG4gIEFib1R5cGUgOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXQtYWJvLXR5cGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1hYm8tdHlwZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNob3dFZGl0QWJvVHlwZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFNob3dFZGl0QWJvVHlwZT4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBlZGl0QWJvKSB7fVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cblxuLy90b2RvIGRpc3BsYXkgcmVuZXcgKyBlZGl0IGVycm9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZG1pbi1hYm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tYWJvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRtaW4tYWJvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkFib0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBFcnJvcjogc3RyaW5nO1xuICBwdWJsaWMgZGF0YTogSlNPTltdID0gW107XG4gIHB1YmxpYyBsaXN0VXNlcjogUGVyc29uW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ0xhc3ROYW1lJywgJ0ZpcnN0TmFtZScsICdBYm9ubmVtZW50JywgJ0Fib1R5cGUnLCAnQWN0aW9uJ107XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8UGVyc29uPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2w6IFRvb2xTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGkuZ2V0QWJvSnNvbigpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgIHRoaXMuaW5pdERhdGEodXJsZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgaW5pdERhdGEodXJsZGF0YTogT2JqZWN0KSB7XG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHVybGRhdGEpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cImRheVwiL2dpLCBcIlxcXCJEYXlcXFwiXCIpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cInRpbWVcIi9naSwgXCJcXFwiVGltZVxcXCJcIik7XG4gICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShzdHIpO1xuXG4gICAgdGhpcy5saXN0VXNlciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdFVzZXIucHVzaCh7XG4gICAgICAgIGlkOiB0aGlzLmRhdGFbaV1bXCJpZFwiXSxcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuZGF0YVtpXVtcIlVzZXJuYW1lXCJdLFxuICAgICAgICBsYXN0TmFtZTogdGhpcy5kYXRhW2ldW1wiTGFzdE5hbWVcIl0sXG4gICAgICAgIGZpcnN0TmFtZTogdGhpcy5kYXRhW2ldW1wiRmlyc3ROYW1lXCJdLFxuICAgICAgICBhYm9ubmVtZW50OiB0aGlzLmRhdGFbaV1bXCJBYm9ubmVtZW50XCJdLFxuICAgICAgICB0eXBlU2Vzc2lvbnM6IHRoaXMuZGF0YVtpXVtcIklkVHlwZVNlc3Npb25cIl0ubGVuZ3RoID4gMCA/IHRoaXMudG9vbC5pbml0VHlwZVNlc3Npb24oSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhW2ldW1wiSWRUeXBlU2Vzc2lvblwiXSkpIDogW10sXG4gICAgICAgIEVtYWlsOiB0aGlzLmRhdGFbaV1bXCJFbWFpbFwiXSxcbiAgICAgICAgU2Vzc2lvbjogW10sXG4gICAgICAgIFJvbGU6IHRoaXMuZGF0YVtpXVtcInJvbGVzXCJdLFxuICAgICAgICBBYm9UeXBlOiB0aGlzLmRhdGFbaV1bXCJBYm9UeXBlXCJdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMubGlzdFVzZXIpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgfVxuXG5cbiAgcmVTdWJjcmliZSh1c2VyIDogVXNlcikge1xuICAgIHRoaXMuYXBpLnBvc3RBYm9SZW5ldyh1c2VyLmlkKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICBpZiAodXJsZGF0YVtcInJlc3VsdFwiXSkge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSB1c2VyLmZpcnN0TmFtZSArIFwiIFwiICsgdXNlci5sYXN0TmFtZTtcbiAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIoXCJBYm9ubmVtZW50IGFjdHVhbGlzZXIgcG91clwiLCBhY3Rpb24pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuRGlhbG9nKGZuYW1lLCBsbmFtZSwgaWQsIGFib1R5cGUpOiB2b2lkIHtcbiAgICBsZXQgbmV3QWJvVHlwZTogZWRpdEFibyA9IHtcbiAgICAgIEZpcnN0TmFtZTogZm5hbWUsXG4gICAgICBMYXN0TmFtZTogbG5hbWUsXG4gICAgICBJZDogaWQsXG4gICAgICBhYm9UeXBlOiBhYm9UeXBlLFxuICAgIH07XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFNob3dFZGl0QWJvVHlwZSwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiBuZXdBYm9UeXBlXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIG5ld0Fib1R5cGUuYWJvVHlwZSA9IHJlc3VsdDtcbiAgICAgIHRoaXMuYXBpLmVkaXRBYm9UeXBlKG5ld0Fib1R5cGUpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgICAgaWYgKHVybGRhdGFbXCJyZXN1bHRcIl0pIHtcbiAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkRlbGV0ZURpYWxvZyh1c2VyOiBVc2VyKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEZWxBYm9Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnNTUwcHgnLFxuICAgICAgZGF0YTogdXNlclxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLm5nT25Jbml0KClcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5TbmFja0JhcihtZXNzYWdlOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5fc25hY2tCYXIub3BlbihtZXNzYWdlLCBhY3Rpb24sIHtcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZD5cXG4gIDxtYXQtY2FyZC10aXRsZT5cXG4gICAgPGRpdj5cXG4gICAgICBFdGVzIHZvdXMgc3VyIGRlIHZvdWxvaXIgc3VwcHJpbWVyXFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2PlxcbiAgICAgIHt7ZGF0YS5sYXN0TmFtZX19IHt7ZGF0YS5maXJzdE5hbWV9fVxcbiAgICA8L2Rpdj5cXG4gIDwvbWF0LWNhcmQtdGl0bGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJkZWwtYnV0dG9uXFxcIj5cXG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XFxcIndhcm5cXFwiIChjbGljayk9XFxcIkRlbGV0ZShkYXRhLmlkKVxcXCI+IE9VSSEgPC9idXR0b24+XFxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDUlXFxcIiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+QW5udWxlcjwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9tYXQtY2FyZD5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R5cGVTZXNzaW9uLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlbC1hYm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVsLWFiby5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERlbEFib0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIGVycm9yIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZWxBYm9Db21wb25lbnQ+LFxuICAgIHB1YmxpYyBhcGkgOiBBcGlTZXJ2aWNlLFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVXNlciwpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBEZWxldGUoaWQ6IGFueSkge1xuICAgIHRoaXMuYXBpLmRlbFVzZXIoaWQpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhW1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LGVycm9yID0+IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkNoYW5nZXIgbGUgdHlwZSBkJ2Fib25uZW1lbnQgZGUge3tkYXRhLkxhc3ROYW1lfX0ge3tkYXRhLkZpcnN0TmFtZX19PC9oMT5cXG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cXG4gIDxwPlF1ZWxsZSB0eXBlIGQnYWJvbm5lbWVudDwvcD5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVxcXCJkYXRhLmFib1R5cGVcXFwiPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG48L2Rpdj5cXG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+Tm8gVGhhbmtzPC9idXR0b24+XFxuICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVxcXCJkYXRhLmFib1R5cGVcXFwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxcbjwvZGl2PlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJtYXQtY2FyZHtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbm1hdC1mb3JtLWZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYXQtc3Bpbm5lciB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQ+XFxuICA8Zm9ybSAoc3VibWl0KT1cXFwib25DcmVhdGUoc2lnbnVwRm9ybSlcXFwiICNzaWdudXBGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+e3tlcnJvcn19PC9tYXQtZXJyb3I+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgbmdNb2RlbCBbbWF0RGF0ZXBpY2tlcl09XFxcInBpY2tlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkNob29zZSBhIGRhdGVcXFwiIG5hbWU9XFxcImRhdGVcXFwiIHJlcXVpcmVkPlxcbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVxcXCJwaWNrZXJcXFwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxcbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuPCEtLSAgICA8bWF0LWZvcm0tZmllbGQ+LS0+XFxuPCEtLSAgICAgIDxpbnB1dCBtYXRJbnB1dCBuZ01vZGVsIHBsYWNlaG9sZGVyPVxcXCJQaWNrIGEgdGltZVxcXCIgYXJpYS1sYWJlbD1cXFwicGljayBhIHRpbWVcXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICBbbmd4VGltZXBpY2tlcl09XFxcImZ1bGxUaW1lXFxcIiBbZm9ybWF0XT1cXFwiMjRcXFwiIG5hbWU9XFxcInRpbWVcXFwiIHJlcXVpcmVkPi0tPlxcbjwhLS0gICAgICA8bmd4LW1hdGVyaWFsLXRpbWVwaWNrZXIgI2Z1bGxUaW1lIFt0aGVtZV09XFxcImRhcmtUaGVtZVxcXCI+PC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcj4tLT5cXG48IS0tICAgIDwvbWF0LWZvcm0tZmllbGQ+LS0+XFxuXFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgbmdNb2RlbCBuYW1lPVxcXCJiaWtlXFxcIiBwbGFjZWhvbGRlcj1cXFwiTnVtYmVyIG9mIGJpa2VcXFwiXFxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIk51bWJlciBvZiBiaWtlXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHJlcXVpcmVkPlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiPkFkZDwvYnV0dG9uPlxcblxcbiAgPC9mb3JtPlxcbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwib3BlbkRpYWxvZygpXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTBweFxcXCI+XFxuICAgIEdlbmVyYXRpb24gYXV0b1xcbiAgPC9idXR0b24+XFxuPC9tYXQtY2FyZD5cXG5cXG5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge05neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lfSBmcm9tIFwibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXJcIjtcbmltcG9ydCB7U2Vzc2lvbnMsIFR5cGVTZXNzaW9ufSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuLy90b2RvIGRpc3BsYXkgY3JlYXRlIGVycm9yXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybS1nZW5lcmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZ2VuZXJhdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpbUdlbmVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBlcnJvciA6IHN0cmluZztcbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBsaXN0VHlwZVNlc3Npb246IFR5cGVTZXNzaW9uW109W107XG4gIHByaXZhdGUgbGlzdFR5cGVTZXNzaW9uSWQ6IG51bWJlcltdPVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maW1HZW5lcmF0aW9uQ29tcG9uZW50PixcbiAgICBwdWJsaWMgYXBpIDogQXBpU2VydmljZSxcbiAgICBwdWJsaWMgdG9vbCA6IFRvb2xTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXBpLmdldFR5cGVTZXNzaW9uKCkuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1cmxkYXRhKSk7XG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IFtdO1xuICAgICAgZm9yKGxldCB0eXBlIG9mIGRhdGEpe1xuICAgICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiAucHVzaCh7XG4gICAgICAgICAgSWQgOiB0eXBlW1wiaWRcIl0sXG4gICAgICAgICAgRGF5IDogdGhpcy50b29sLmRheVN3aXRoKHR5cGVbXCJEYXlcIl0pLFxuICAgICAgICAgIFRpbWUgOiB0eXBlW1wiVGltZVwiXS5zcGxpdCgnICcpWzFdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGRUeXBlU2Vzc2lvbihJZDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuaW5kZXhPZihJZCkgIT0gLTEpe1xuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb25JZC5zcGxpY2UodGhpcy5saXN0VHlwZVNlc3Npb25JZC5pbmRleE9mKElkKSwxKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uSWQucHVzaChJZCk7XG4gICAgfVxuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBnZW5lcmF0ZVNlc3Npb24oZm9ybSA6IE5nRm9ybSl7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXBpLnBvc3RHZW5lcmF0ZVNlc3Npb25BdXRvKGZvcm0udmFsdWUueWVhcix0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLDkpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhWydyZXN1bHQnXSl7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxlcnJvciA9PntcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvclxuICAgIH0gKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWRtaW4tY3JlYXRlLXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZG1pbi1jcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5DcmVhdGVTZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGVycm9yOiBhbnk7XG5cbiAgZGFya1RoZW1lOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGJvZHlCYWNrZ3JvdW5kQ29sb3I6ICcjNDI0MjQyJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZidcbiAgICB9LFxuICAgIGRpYWw6IHtcbiAgICAgIGRpYWxCYWNrZ3JvdW5kQ29sb3I6ICcjNTU1JyxcbiAgICB9LFxuICAgIGNsb2NrRmFjZToge1xuICAgICAgY2xvY2tGYWNlQmFja2dyb3VuZENvbG9yOiAnIzU1NScsXG4gICAgICBjbG9ja0hhbmRDb2xvcjogJyM5ZmJkOTAnLFxuICAgICAgY2xvY2tGYWNlVGltZUluYWN0aXZlQ29sb3I6ICcjZmZmJ1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGlhbG9nIDogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLmdlbmVyYXRlU2Vzc2lvbig1KTtcbiAgfVxuXG4gIG9uQ3JlYXRlKGZvcm06IE5nRm9ybSkge1xuICAgIGxldCBkID0gbmV3IERhdGUoZm9ybS52YWx1ZS5kYXRlKTtcbiAgICBsZXQgbmV3U2VzcyA6IFNlc3Npb25zID17XG4gICAgICBEYXRlIDogZC50b0RhdGVTdHJpbmcoKSxcbiAgICAgIFRpbWUgOiBmb3JtLnZhbHVlLnRpbWUsXG4gICAgICBCaWtlIDogZm9ybS52YWx1ZS5iaWtlLFxuICAgICAgQ2FuY2VsIDogZmFsc2UsXG4gICAgICBJZCA6IDBcbiAgICB9O1xuXG4gICAgdGhpcy5hcGkuY3JlYXRlTmV3U2VzcyhuZXdTZXNzKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVsncmVzdWx0J10pe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL3Nlc3Npb24nXSlcbiAgICAgIH1cbiAgICB9LGVycm9yID0+e1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yXG4gICAgfSApO1xuICB9XG5cbiAgLy90b2RvIHBvcCB1cCB0byBjb25maXJtIDUgeWVhcnMgZ2VuZXJhdGlvblxuXG4gIG9wZW5EaWFsb2coKXtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpbUdlbmVyYXRpb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNsb3NlXCIpO1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPnt7ZXJyb3J9fTwvbWF0LWVycm9yPlxcbjxkaXYgKm5nSWY9XFxcIiFpc0xvYWRpbmcgOyBlbHNlIGxvYWRpbmdcXFwiPlxcbiAgPGgzPkfDqW7DqXJhdGlvbiBhdXRvbWF0aXF1ZSBkZSBzZXNzaW9uczwvaDM+XFxuXFxuICA8Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIj5cXG5cXG4gICAgPG5nLWNvbnRhaW5lcj5cXG4gICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc2Vzc2lvbiBvZiBsaXN0VHlwZVNlc3Npb25cXFwiID5cXG4gICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XFxcImFkZFR5cGVTZXNzaW9uKHNlc3Npb24uSWQpXFxcIj5cXG4gICAgICAgICAge3tzZXNzaW9uLkRheX19IHt7c2Vzc2lvbi5UaW1lfX1cXG4gICAgICAgIDwvbWF0LWNoZWNrYm94PlxcbiAgICAgIDwvdWw+XFxuICAgIDwvbmctY29udGFpbmVyPlxcblxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGxhYmVsPlxcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVxcXCJub21icmUgZCdhbm7DqWVcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbmdNb2RlbCB2YWx1ZT1cXFwiNVxcXCIgbmFtZT1cXFwieWVhclxcXCI+XFxuICAgICAgPC9sYWJlbD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZ2VuZXJhdGVTZXNzaW9uKGZvcm0pXFxcIj4gamUgY29uZmlybWUgbGEgZ8OpbsOpcmF0aW9uIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTBweFxcXCIgKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPiBhbm51bGVyIDwvYnV0dG9uPlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cXG4gIDxkaXYgc3R5bGU9XFxcImp1c3RpZnktY29udGVudDogY2VudGVyXFxcIj5cXG4gICAgPG1hdC1zcGlubmVyPjwvbWF0LXNwaW5uZXI+XFxuICA8L2Rpdj5cXG48L25nLXRlbXBsYXRlPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCIuZGVsZXRle1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5zZWxlY3R7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5tYXQtc2VsZWN0LCBpbnB1dHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcbm1hdC10YWJ7XFxuICB3aWR0aCA6IDEwMCVcXG59XFxuZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb3JtID4gKiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxubWF0LWNhcmR7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiA1JSBhdXRvO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxuPG1hdC1ncmlkLWxpc3QgY29scz1cXFwiNVxcXCIgcm93SGVpZ2h0PVxcXCIxMDBcXFwiPlxcbiAgPG1hdC1ncmlkLXRpbGU+PC9tYXQtZ3JpZC10aWxlPlxcblxcbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cXFwiMVxcXCI+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cXFwiU8OpbGVjdGlvbm7DqSBsZSBtb2lzXFxcIiAjbWF0U2VsZWN0IFsobmdNb2RlbCldPVxcXCJ2YWx1ZVxcXCI+XFxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XFxcImxldCBtb250aCBvZiBtb250aHNcXFwiIFt2YWx1ZV09XFxcIm1vbnRoLm51bVxcXCIgPlxcbiAgICAgICAgICB7e21vbnRoLm5hbWV9fVxcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxcbiAgICAgIDwvbWF0LXNlbGVjdD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gIDwvbWF0LWdyaWQtdGlsZT5cXG5cXG4gIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XFxcIjFcXFwiPlxcbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XFxcInNlbGVjdFxcXCI+XFxuICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XFxcIlPDqWxlY3Rpb25uw6kgbCdhbm7DqWVcXFwiICNtYXRTZWxlY3QyIFsobmdNb2RlbCldPVxcXCJ5ZWFyXFxcIj5cXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cXFwibGV0IHkgb2YgbGlzdFllYXJcXFwiIFt2YWx1ZV09XFxcInlcXFwiID5cXG4gICAgICAgICAge3t5fX1cXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cXG4gICAgICA8L21hdC1zZWxlY3Q+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVxcXCIxXFxcIj5cXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxsYWJlbD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJub21icmUgZGUgdsOpbG8gZGlzcG9uaWJsZVxcXCIgI25ickJpa2VcXG4gICAgICAgICAgICAgICBbdmFsdWVdPVxcXCJuYnJEaXNwQmlrZVxcXCIgPlxcbiAgICAgIDwvbGFiZWw+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZT48L21hdC1ncmlkLXRpbGU+XFxuXFxuPC9tYXQtZ3JpZC1saXN0PlxcblxcbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcblxcbjxtYXQtY2FyZCAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj5cXG4gIDxtYXQtc3Bpbm5lciBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj48L21hdC1zcGlubmVyPlxcbjwvbWF0LWNhcmQ+XFxuXFxuPG1hdC10YWJsZSAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCIgW2RhdGFTb3VyY2VdPVxcXCJkYXRhU291cmNlXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCIgbWF0U29ydD5cXG5cXG4gIDwhLS0gRGF0ZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiSWRcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gSUQgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuSWR9fSA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIERhdGUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkRhdGVcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gRGF0ZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5EYXRlfX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBUaW1lIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJUaW1lXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IEhldXJlIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50LlRpbWV9fSA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEJpa2UgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkJpa2VcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gVmVsbyBsaWJyZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5CaWtlfX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBTdGF0dXMgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlN0YXR1c1xcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IENvdXJzIGNvbmZpcm3DqSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+XFxuICAgICAgPG1hdC1pY29uICpuZ0lmPVxcXCIhZWxlbWVudC5DYW5jZWw7IGVsc2UgY2FuY2VsXFxcIiBbbmdTdHlsZV09XFxcInsnY29sb3InOidncmVlbid9XFxcIiBtYXRUb29sdGlwPVxcXCJDb25maXJtw6lcXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICA8bmctdGVtcGxhdGUgI2NhbmNlbD5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOidyZWQnfVxcXCIgbWF0VG9vbHRpcD1cXFwiQW5udWzDqVxcXCI+Y2FuY2VsPC9tYXQtaWNvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIExpc3QgaW5zY3JpdCBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJJbmZvXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTGlzdCBpbnNjcml0IDwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50O2xldCBpID0gaW5kZXhcXFwiID5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkxpc3QgaW5zY3JpdFxcXCI+XFxuICAgICAgICA8bWF0LWljb24gKGNsaWNrKT1cXFwib3BlbkRpYWxvZyhpKVxcXCIgW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCI+aW5mbzwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvbWF0LWNlbGw+XFxuXFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gQ2FuY2VsIFNlc3Npb24gQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWN0aW9uXFxcIj5cXG5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cXG4gICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+IHt7IGVycm9yIH19PC9tYXQtZXJyb3I+XFxuICAgICAgQW5udWxhdGlvbiAvIFN1cHByZXNzaW9uXFxuICAgIDwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIiA+XFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJBbm51bGVyXFxcIlxcbiAgICAgICAgICAgICAgKm5nSWY9XFxcIiFlbGVtZW50LkNhbmNlbDsgZWxzZSByZXBsYXlCdG5cXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIkNhbmNlbChlbGVtZW50LklkKVxcXCI+XFxuICAgICAgICAgIGNhbmNlbFxcbiAgICAgICAgPC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICA8bmctdGVtcGxhdGUgI3JlcGxheUJ0bj5cXG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiUmVjcsOpZXJcXFwiPlxcbiAgICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwiUmVwbGF5KGVsZW1lbnQuSWQpXFxcIj5yZXBsYXk8L21hdC1pY29uPlxcbiAgICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjbGFzcz1cXFwiZGVsZXRlXFxcIiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiU3VwcHJpbWVyXFxcIj5cXG4gICAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIkRlbGV0ZShlbGVtZW50LklkKVxcXCI+ZGVsZXRlPC9tYXQtaWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgIDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVxcXCJkaXNwbGF5ZWRDb2x1bW5zXFxcIj48L21hdC1oZWFkZXItcm93PlxcbiAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cXFwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcXFwiPjwvbWF0LXJvdz5cXG5cXG4gIDwvbWF0LXRhYmxlPlxcblwiIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7U2Vzc2lvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZVwiO1xuaW1wb3J0IHtMaXN0UGVyc29uRGlhbG9nfSBmcm9tIFwiLi4vbW9udGgvbW9udGguY29tcG9uZW50XCI7XG5cbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdElucHV0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb24gIHtcbiAgdXNlciA6IEpTT047XG59XG5cbi8vdG9kbyBkaXNwbGF5IGNhbmNlbCArIGRlbGV0ZSArIHJlY3JlYXRlIGVycm9yXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZG1pbi1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZG1pbi1zZXNzaW9uLmNvbXBvbmVudC5jc3MnLCcuLi9tb250aC9tb250aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5TZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGRhdGE6IEpTT05bXT1bXTtcbiAgcHVibGljIHZhbHVlIDogbnVtYmVyID0gbnVsbDtcbiAgcHVibGljIGxpc3RTZXNzaW9uIDogU2Vzc2lvbnNbXT1bXTtcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxTZXNzaW9ucz47XG4gIHB1YmxpYyBsaXN0UGVyc29uIDogUGVyc29uW109W107XG4gIHB1YmxpYyBsaXN0WWVhcjogbnVtYmVyW109W107XG4gIHB1YmxpYyB5ZWFyOiBudW1iZXI7XG4gIHB1YmxpYyBuYnJEaXNwQmlrZTogU3RyaW5nID0gXCI5XCI7XG4gIHB1YmxpYyBlcnJvcjogU3RyaW5nO1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ0RhdGUnLCAnVGltZScsICdCaWtlJywgJ1N0YXR1cycsJ0luZm8nLCdBY3Rpb24nXTtcblxuICBAVmlld0NoaWxkKCdtYXRTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSBtYXRTZWxlY3QgOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQse3N0YXRpYzpmYWxzZX0pIG5ickJpa2UgOiBNYXRJbnB1dDtcbiAgQFZpZXdDaGlsZCgnbWF0U2VsZWN0Micse3N0YXRpYzpmYWxzZX0pIG1hdFNlbGVjdDIgOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgbW9udGhzID0gW1xuICAgIHtuYW1lIDogXCJqYW52aWVyXCIsIG51bSA6IDF9LFxuICAgIHtuYW1lIDogXCJmZXZyaXJlclwiLCBudW0gOiAyfSxcbiAgICB7bmFtZSA6IFwibWFyc1wiLCBudW0gOiAzfSxcbiAgICB7bmFtZSA6IFwiYXZyaWxcIiwgbnVtIDogNH0sXG4gICAge25hbWUgOiBcIm1haVwiLCBudW0gOiA1fSxcbiAgICB7bmFtZSA6IFwianVpblwiLCBudW0gOiA2fSxcbiAgICB7bmFtZSA6IFwianVpbGxldFwiLCBudW0gOiA3fSxcbiAgICB7bmFtZSA6IFwiYW91dFwiLCBudW0gOiA4fSxcbiAgICB7bmFtZSA6IFwic2VwdGVtYnJlXCIsIG51bSA6IDl9LFxuICAgIHtuYW1lIDogXCJvY3RvYnJlXCIsIG51bSA6IDEwfSxcbiAgICB7bmFtZSA6IFwibm92ZW1icmVcIiwgbnVtIDogMTF9LFxuICAgIHtuYW1lIDogXCJkZWNlbWJyZVwiLCBudW0gOiAxMn0sXG4gIF07XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHVibGljIHRvb2wgOiBUb29sU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IG0gPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudmFsdWUgPSBtLmdldE1vbnRoKCkrMTtcbiAgICB0aGlzLnllYXIgPSBtLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy5nZXRZZWFyKCk7XG4gICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHRoaXMudmFsdWUsdGhpcy55ZWFyLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLm1hdFNlbGVjdC52YWx1ZUNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHZhbHVlLHRoaXMueWVhci50b1N0cmluZygpKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWF0U2VsZWN0Mi52YWx1ZUNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy55ZWFyID0gdmFsdWU7XG4gICAgICB0aGlzLmFwaS5nZXRNb250aEpzb24odGhpcy52YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmluaXRTZXNzaW9uKHVybGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwaS5nZXRNb250aEpzb24odGhpcy52YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgdGhpcy5pbml0U2Vzc2lvbih1cmxkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTZXNzaW9uKHVybGRhdGEpe1xuXG4gICAgdGhpcy5saXN0U2Vzc2lvbiA9IFtdO1xuXG4gICAgdGhpcy5saXN0UGVyc29uID0gW107XG5cblxuICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXJsZGF0YSkpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgdGVtcFNlc3MgPSB0aGlzLnRvb2wuaW5pdFRlbXBTZXNzKHRoaXMuZGF0YVtpXSx0aGlzLmRhdGFbaV1bXCJEYXRlXCJdKTtcbiAgICAgIHRlbXBTZXNzLkRhdGUgPSB0aGlzLnRvb2wuc3dpdGNoRGF0ZShuZXcgRGF0ZSh0ZW1wU2Vzcy5EYXRlKSk7XG4gICAgICB0aGlzLmxpc3RTZXNzaW9uLnB1c2godGVtcFNlc3MpO1xuICAgICAgdGhpcy5saXN0UGVyc29uLnB1c2goe1xuICAgICAgICB1c2VyIDogdGhpcy5kYXRhW2ldW1wiaWRJbnNjcmlwdGlvblwiXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmxpc3RTZXNzaW9uKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgb3BlbkRpYWxvZyhpZCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTGlzdFBlcnNvbkRpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB0aGlzLmxpc3RQZXJzb25baWRdLnVzZXJcbiAgICB9KTtcbiAgfVxuXG4gIGdldFllYXIoKXtcbiAgICBmb3IodmFyIGkgPSAodGhpcy55ZWFyKTsgaSA8PSAodGhpcy55ZWFyKzEwKTsgaSsrKXtcbiAgICAgIHRoaXMubGlzdFllYXIucHVzaChpKTt9XG4gIH1cblxuICBSZXBsYXkoaWQ6IGFueSkge1xuICAgIHRoaXMuYXBpLnBvc3RSZW5ld1Nlc3MoaWQsIHRoaXMubmJyQmlrZS52YWx1ZSkuc3Vic2NyaWJlKFxuICAgICAgdXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmJyRGlzcEJpa2UgPSB0aGlzLm5ickJpa2UudmFsdWU7XG4gICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XG4gICAgICB9XG4gICAgfSwgZXJyb3IxID0+ICh0aGlzLmhhbmRlbEVycm9yKGVycm9yMSkpKTtcbiAgfVxuXG4gIENhbmNlbChpZDogYW55KSB7XG4gICAgdGhpcy5hcGkucG9zdENhbmNlbFNlc3MoaWQpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhW1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAgIH1cbiAgICB9LCBlcnJvcjEgPT4gKHRoaXMuaGFuZGVsRXJyb3IoZXJyb3IxKSkpO1xuICB9XG5cbiAgRGVsZXRlKGlkOiBhbnkpIHtcbiAgICB0aGlzLmFwaS5kZWxldGVTZXNzKGlkKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XG4gICAgICB9XG4gICAgfSwgZXJyb3IxID0+ICh0aGlzLmhhbmRlbEVycm9yKGVycm9yMSkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGVsRXJyb3IoZXJyb3IxOiBhbnkpIHtcbiAgICB0aGlzLmVycm9yID0gZXJyb3IxO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIm1hdC1jYXJke1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZD5cXG4gIDxtYXQtbGlzdC1pdGVtPlxcbiAgICA8YSBtYXQtZmxhdC1idXR0b24gcm91dGVyTGluaz1cXFwiL2FkbWluL1Nlc3Npb25cXFwiPiBTZXNzaW9ucyA8L2E+XFxuICA8L21hdC1saXN0LWl0ZW0+XFxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG5cXG4gIDxtYXQtbGlzdC1pdGVtPlxcbiAgICA8YSBtYXQtZmxhdC1idXR0b24gcm91dGVyTGluaz1cXFwiL2FkbWluL0Fib25uZW1lbnRcXFwiPiBBYm9ubmVtZW50IDwvYT5cXG4gIDwvbWF0LWxpc3QtaXRlbT5cXG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcblxcblxcbiAgPG1hdC1saXN0LWl0ZW0+XFxuICAgIDxhIG1hdC1mbGF0LWJ1dHRvbiByb3V0ZXJMaW5rPVxcXCIvYWRtaW4vU2Vzc2lvbi9DcmVhdGVcXFwiPiBOb3V2ZWxsZSBTZXNzaW9uIDwvYT5cXG4gIDwvbWF0LWxpc3QtaXRlbT5cXG48L21hdC1jYXJkPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkbWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRtaW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvL3RvZG8gY3JlYXRpb24gcGFnZSBnZXN0aW9uIHR5cGUgZGUgc2Vzc2lvbiBkaXNwb25pYmxlXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge01vbnRoQ29tcG9uZW50fSBmcm9tIFwiLi9tb250aC9tb250aC5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5Db21wb25lbnR9IGZyb20gXCIuL2FkbWluL2FkbWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pblNlc3Npb25Db21wb25lbnR9IGZyb20gXCIuL2FkbWluLXNlc3Npb24vYWRtaW4tc2Vzc2lvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5BYm9Db21wb25lbnR9IGZyb20gXCIuL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluQ3JlYXRlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi9ndWFyZC9hdXRoLmd1YXJkJztcbmltcG9ydCB7QWRtaW5HdWFyZH0gZnJvbSAnLi9ndWFyZC9hZG1pbi5ndWFyZCc7XG5pbXBvcnQge1R5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICcuL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50JztcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6JycsXG4gICAgY29tcG9uZW50IDogSG9tZUNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBdXRoR3VhcmRdXG4gIH0sXG4gIHtcbiAgICBwYXRoOidsb2dpbicsXG4gICAgY29tcG9uZW50IDogTG9naW5Db21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOidzaWdudXAnLFxuICAgIGNvbXBvbmVudCA6IFNpZ251cENvbXBvbmVudCxcbiAgfSxcbiAge1xuICAgIHBhdGg6J21vbnRoJyxcbiAgICBjb21wb25lbnQgOiBNb250aENvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBdXRoR3VhcmRdXG4gIH0sXG4gIHtcbiAgICBwYXRoOidwcm9maWxlJyxcbiAgICBjb21wb25lbnQgOiBQcm9maWxlQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0F1dGhHdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluJyxcbiAgICBjb21wb25lbnQgOiBBZG1pbkNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBZG1pbkd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDonYWRtaW4vU2Vzc2lvbicsXG4gICAgY29tcG9uZW50IDogQWRtaW5TZXNzaW9uQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0FkbWluR3VhcmRdXG5cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluL0Fib25uZW1lbnQnLFxuICAgIGNvbXBvbmVudCA6IEFkbWluQWJvQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0FkbWluR3VhcmRdXG5cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluL1Nlc3Npb24vQ3JlYXRlJyxcbiAgICBjb21wb25lbnQgOiBBZG1pbkNyZWF0ZVNlc3Npb25Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGUgOiBbQWRtaW5HdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluL1Nlc3Npb24vVHlwZScsXG4gICAgY29tcG9uZW50IDogVHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGUgOiBbQWRtaW5HdWFyZF1cbiAgfSxcblxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyogTkFWIEJBUiAqL1xcbi5zaWRlbmF2LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi5zaWRlbmF2IHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmhpZGRlbntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbm1hdC10b29sYmFye1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1hdC10b29sYmFyIGF7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxubWF0LXRvb2xiYXIgYXtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbD5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG48L2hlYWQ+XFxuPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cXFwic2lkZW5hdi1jb250YWluZXJcXFwiPlxcbiAgPG1hdC1zaWRlbmF2ICNkcmF3ZXIgY2xhc3M9XFxcInNpZGVuYXZcXFwiXFxuICAgICAgICAgICAgICAgZml4ZWRJblZpZXdwb3J0PVxcXCJmbGFzZVxcXCJcXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XFxcIntoaWRkZW4gOiAhKGlzSGFuZHNldCQgfCBhc3luYyl9XFxcIlxcbiAgICAgICAgICAgICAgIFthdHRyLnJvbGVdPVxcXCIoaXNIYW5kc2V0JCB8IGFzeW5jKSA/ICdkaWFsb2cnIDogJ25hdmlnYXRpb24nXFxcIlxcbiAgICAgICAgICAgICAgIFttb2RlXT1cXFwiKGlzSGFuZHNldCQgfCBhc3luYykgPyAnb3ZlcicgOiAnc2lkZSdcXFwiXFxuICAgICAgICAgICAgICAgW29wZW5lZF09XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpID09PSBmYWxzZVxcXCI+XFxuICAgIDxkaXYgKm5nVGVtcGxhdGVPdXRsZXQ9XFxcIm1lbnV0ZW1wbGF0ZVxcXCI+PC9kaXY+XFxuICA8L21hdC1zaWRlbmF2PlxcbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XFxuICAgIDxtYXQtdG9vbGJhciBjb2xvcj1cXFwicHJpbWFyeVxcXCIgKm5nSWY9XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpOyBlbHNlIGRlc2t0b3BOYXZcXFwiPlxcbiAgICAgIDxidXR0b25cXG4gICAgICAgIHR5cGU9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBzaWRlbmF2XFxcIlxcbiAgICAgICAgbWF0LWljb24tYnV0dG9uXFxuICAgICAgICAoY2xpY2spPVxcXCJkcmF3ZXIudG9nZ2xlKClcXFwiXFxuICAgICAgICAqbmdJZj1cXFwiaXNIYW5kc2V0JCB8IGFzeW5jXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC9tYXQtdG9vbGJhcj5cXG5cXG4gICAgPG5nLWNvbnRhaW5lcj5cXG4gICAgICA8Ym9keT5cXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgPC9ib2R5PlxcbiAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cXG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cXG5cXG48L2h0bWw+XFxuXFxuPG5nLXRlbXBsYXRlICNkZXNrdG9wTmF2ID5cXG4gIDxtYXQtdG9vbGJhciBjbGFzcz1cXFwiTmF2YmFyXFxcIiBjb2xvcj1cXFwicHJpbWFyeVxcXCI+XFxuICAgIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz1cXFwiLlxcXCIgPlxcbiAgICAgIDxtYXQtaWNvbj4gaG9tZSA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBBY2N1ZWlsIDwvc3Bhbj5cXG4gICAgPC9hPlxcblxcbiAgICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9XFxcIi9tb250aFxcXCI+XFxuICAgICAgPG1hdC1pY29uPiBkYXRlX3JhbmdlIDwvbWF0LWljb24+XFxuICAgICAgPHNwYW4+IE1vaXMgPC9zcGFuPlxcbiAgICA8L2E+XFxuXFxuICAgIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz1cXFwiL2xvZ2luXFxcIiAqbmdJZj1cXFwiIWlzQXV0aCA7IGVsc2UgcHJvZmlsZVxcXCI+XFxuICAgICAgPG1hdC1pY29uPiBwZXJzb24gPC9tYXQtaWNvbj5cXG4gICAgICA8c3Bhbj4gTG9naW4gPC9zcGFuPlxcbiAgICA8L2E+XFxuICA8L21hdC10b29sYmFyPlxcbjwvbmctdGVtcGxhdGU+XFxuXFxuPG5nLXRlbXBsYXRlICNtZW51dGVtcGxhdGU+XFxuICA8bWF0LW5hdi1saXN0PlxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcIi5cXFwiPlxcbiAgICAgIDxtYXQtaWNvbj4gaG9tZSA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBBY2N1ZWlsIDwvc3Bhbj5cXG4gICAgPC9hPlxcblxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcIi9tb250aFxcXCI+XFxuICAgICAgPG1hdC1pY29uPiBkYXRlX3JhbmdlIDwvbWF0LWljb24+XFxuICAgICAgPHNwYW4+IE1vaXMgPC9zcGFuPlxcbiAgICA8L2E+XFxuXFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiL2xvZ2luXFxcIiAqbmdJZj1cXFwiIWlzQXV0aDsgZWxzZSBwcm9maWxlXFxcIj5cXG4gICAgICA8bWF0LWljb24+IHBlcnNvbiA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBMb2dpbiA8L3NwYW4+XFxuICAgIDwvYT5cXG5cXG4gIDwvbWF0LW5hdi1saXN0PlxcbjwvbmctdGVtcGxhdGU+XFxuXFxuPG5nLXRlbXBsYXRlICNwcm9maWxlPlxcbiAgPGEgbWF0LWxpc3QtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVxcXCJtZW51XFxcIiAqbmdJZj1cXFwiaXNBdXRoXFxcIj5cXG4gICAgPG1hdC1pY29uPiBwZXJzb24gPC9tYXQtaWNvbj5cXG4gICAgPHNwYW4+IHt7dXNlci5sYXN0TmFtZX19IHt7dXNlci5maXJzdE5hbWV9fSA8L3NwYW4+XFxuICA8L2E+XFxuXFxuICA8bWF0LW1lbnUgI21lbnU9XFxcIm1hdE1lbnVcXFwiPlxcbiAgICA8YSBtYXQtbWVudS1pdGVtIHJvdXRlckxpbms9XFxcIi9wcm9maWxlXFxcIj5Qcm9maWw8L2E+XFxuICAgIDxhIG1hdC1tZW51LWl0ZW0gKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPkTDqWNvbm5leGlvbjwvYT5cXG4gIDwvbWF0LW1lbnU+XFxuXFxuICA8YSBtYXQtbGlzdC1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XFxcImFkbWluXFxcIiAqbmdJZj1cXFwidXNlci5Sb2xlWzBdID09PSAnUk9MRV9BRE1JTidcXFwiPlxcbiAgICA8bWF0LWljb24+YnVpbGQ8L21hdC1pY29uPlxcbiAgICA8c3Bhbj4gQWRtaW48L3NwYW4+XFxuICA8L2E+XFxuPC9uZy10ZW1wbGF0ZT5cXG5cXG48bWF0LW1lbnUgI2FkbWluPVxcXCJtYXRNZW51XFxcIj5cXG4gIDxtYXQtbmF2LWxpc3Q+XFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiYWRtaW4vU2Vzc2lvblxcXCI+U2Vzc2lvbnM8L2E+XFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiYWRtaW4vU2Vzc2lvbi9DcmVhdGVcXFwiPk5vdXZlbGxlIFNlc3Npb25zPC9hPlxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcImFkbWluL0Fib25uZW1lbnRcXFwiPkFib25uZW1lbnQ8L2E+XFxuICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cXFwiYWRtaW4vU2Vzc2lvbi9UeXBlXFxcIj5UeXBlIFNlc3Npb25zPC9hPlxcbiAgPC9tYXQtbmF2LWxpc3Q+XFxuPC9tYXQtbWVudT5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdH0gZnJvbSBcIkBtb2Jpc2Nyb2xsL2FuZ3VsYXItbGl0ZS9zcmMvanMvZnJhbWV3b3Jrcy9hbmd1bGFyXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuLy9UT0RPIGdyYXBoaWNhbCByZXNwb25zaXZlIGZvciBkZXZpY2VzXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xuICB0aXRsZSA9ICdBcXVhYmlrZSc7XG4gIHB1YmxpYyB1c2VyOiBVc2VyO1xuICBwdWJsaWMgaXNBdXRoOiBib29sZWFuO1xuICBwdWJsaWMgaXNIYW5kc2V0JCA9IHRoaXMudG9vbC5pc0hhbmRzZXQkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aCA6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlciA6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmF1dGguZ2V0QXV0aFN0YXR1c0xpc3RlbmVyKCkuc3Vic2NyaWJlKFxuICAgICAgYXV0aD0+e1xuICAgICAgICBpZihhdXRoKXtcbiAgICAgICAgICB0aGlzLmlzQXV0aCA9IHRoaXMuYXV0aC5nZXRJc0F1dGgoKTtcbiAgICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgaWYodGhpcy5hdXRoLmdldElzQXV0aCgpKXtcbiAgICAgIHRoaXMuaXNBdXRoID0gdGhpcy5hdXRoLmdldElzQXV0aCgpO1xuICAgICAgdGhpcy51c2VyID0gdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xuICAgIHRoaXMuaXNBdXRoID0gZmFsc2VcbiAgfVxufVxuIiwiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnQHNyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFBlcnNvbkRpYWxvZywgTW9udGhDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9tb250aC9tb250aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnQHNyYy9hcHAvc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSwgTm9vcEFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGRcIjtcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3RcIjtcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYmxlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9tZW51XCI7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9idXR0b25cIjtcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb25cIjtcbmltcG9ydCB7XG4gIERhdGVBZGFwdGVyLFxuICBNQVRfREFURV9GT1JNQVRTLFxuICBNQVRfREFURV9MT0NBTEUsXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gIE1hdFJpcHBsZU1vZHVsZVxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuaW1wb3J0IHsgTWF0TGlzdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9saXN0XCI7XG5pbXBvcnQge1xuICBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFNuYWNrQmFyLFxuICBNYXRTbmFja0JhckNvbnRhaW5lcixcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhclwiO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jYXJkXCI7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lclwiO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuaW1wb3J0IHtFZGl0UHJvZmlsZUNvbXBvbmVudCwgUHJvZmlsZUNvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRHcmlkTGlzdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3RcIjtcbmltcG9ydCB7IEFkbWluQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFkbWluU2Vzc2lvbkNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2FkbWluLXNlc3Npb24vYWRtaW4tc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtBZG1pbkFib0NvbXBvbmVudCwgU2hvd0VkaXRBYm9UeXBlfSBmcm9tICdAc3JjL2FwcC9hZG1pbi1hYm8vYWRtaW4tYWJvLmNvbXBvbmVudCc7XG5pbXBvcnQge0FkbWluQ3JlYXRlU2Vzc2lvbkNvbXBvbmVudCwgQ29uZmltR2VuZXJhdGlvbkNvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7Tmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlfSBmcm9tIFwibmd4LW1hdGVyaWFsLXRpbWVwaWNrZXJcIjtcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3RhYnNcIjtcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSBcIm5neC1jb29raWUtc2VydmljZVwiO1xuaW1wb3J0IHtUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvdHlwZS1zZXNzaW9uL3R5cGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtBZGRUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnQHNyYy9hcHAvdHlwZS1zZXNzaW9uL2FkZC10eXBlLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7RWRpdFR5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICdAc3JjL2FwcC90eXBlLXNlc3Npb24vZWRpdC10eXBlLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7RGVsQWJvQ29tcG9uZW50fSBmcm9tICdAc3JjL2FwcC9hZG1pbi1hYm8vZGVsLWFiby5jb21wb25lbnQnO1xuaW1wb3J0IHtsaXN0QWJvU2Vzc2lvbn0gZnJvbSAnQHNyYy9hcHAvdHlwZS1zZXNzaW9uL2xpc3QtYWJvLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7RmxleExheW91dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBNYXRTaWRlbmF2TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQge0RlbFR5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICdAc3JjL2FwcC90eXBlLXNlc3Npb24vZGVsLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0b0dlbmVyYXRlZENvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQge0FQUF9CQVNFX0hSRUYsIEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBNb250aENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBMaXN0UGVyc29uRGlhbG9nLFxuICAgIFNpZ251cENvbXBvbmVudCxcbiAgICBQcm9maWxlQ29tcG9uZW50LFxuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIEFkbWluU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBBZG1pbkFib0NvbXBvbmVudCxcbiAgICBBZG1pbkNyZWF0ZVNlc3Npb25Db21wb25lbnQsXG4gICAgU2hvd0VkaXRBYm9UeXBlLFxuICAgIEVkaXRQcm9maWxlQ29tcG9uZW50LFxuICAgIFR5cGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIEFkZFR5cGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIENvbmZpbUdlbmVyYXRpb25Db21wb25lbnQsXG4gICAgRWRpdFR5cGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIERlbEFib0NvbXBvbmVudCxcbiAgICBsaXN0QWJvU2Vzc2lvbixcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIERlbFR5cGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIEF1dG9HZW5lcmF0ZWRDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG5cbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTW9udGhDb21wb25lbnQsXG4gICAgTGlzdFBlcnNvbkRpYWxvZyxcbiAgICBTaG93RWRpdEFib1R5cGUsXG4gICAgRWRpdFByb2ZpbGVDb21wb25lbnQsXG4gICAgQWRkVHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgQ29uZmltR2VuZXJhdGlvbkNvbXBvbmVudCxcbiAgICBFZGl0VHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgRGVsQWJvQ29tcG9uZW50LFxuICAgIGxpc3RBYm9TZXNzaW9uLFxuICAgIERlbFR5cGVTZXNzaW9uQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGhTZXJ2aWNlLFxuICAgIEFwaVNlcnZpY2UsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIHsgcHJvdmlkZTogTUFUX0RJQUxPR19ERUZBVUxUX09QVElPTlMsIHVzZVZhbHVlOiB7IGhhc0JhY2tkcm9wOiB0cnVlIH0gfSxcbiAgICB7IHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiBcIi9cIiB9LFxuICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBDb29raWVTZXJ2aWNlLFxuICAgIE1hdFNuYWNrQmFyLFxuXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIHNjaGVtYXMgOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxCdXR0b24gdGV4dD1cXFwiYXV0by1nZW5lcmF0ZWQgd29ya3MhXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hdXRvLWdlbmVyYXRlZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aCA6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7XG4gIH1cblxuICBjYW5BY3RpdmF0ZShcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICBpZiggdGhpcy5hdXRoLmdldElzQXV0aCgpICYmIHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpLlJvbGVbMF0gPT09IFwiUk9MRV9BRE1JTlwiICl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aCA6IEF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7XG4gIH1cblxuICBjYW5BY3RpdmF0ZShcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICBpZiggdGhpcy5hdXRoLmdldElzQXV0aCgpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgfVxuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLmNlbnRlcntcXG4gIG1hcmdpbjogMiUgMjAlIDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwiY2VudGVyXFxcIj5cXG4gIDxtYXQtY2FyZD5cXG4gICAgPG1hdC1jYXJkLXRpdGxlPlxcbiAgICAgIHt7ZGF0ZX19XFxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XFxuICA8L21hdC1jYXJkPlxcblxcbiAgPG1hdC1saXN0ICpuZ0Zvcj1cXFwibGV0IGhvdXIgb2YgdGltZVxcXCI+XFxuXFxuICAgIDxtYXQtbGlzdC1pdGVtPjwvbWF0LWxpc3QtaXRlbT5cXG4gICAgPG1hdC1saXN0LWl0ZW0+XFxuICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlPlxcbiAgICAgICAge3tob3VyfX1cXG4gICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxcbiAgICA8L21hdC1saXN0LWl0ZW0+XFxuXFxuICAgIDxtYXQtbGlzdCAqbmdGb3I9XFxcImxldCB1c2VyIG9mIGxpc3RVc2VyWzBdXFxcIj5cXG4gICAgICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnBlcnNvbjwvbWF0LWljb24+XFxuICAgICAgICB7e3VzZXIubGFzdE5hbWV9fSB7e3VzZXIuZmlyc3ROYW1lfX1cXG4gICAgICA8L21hdC1saXN0LWl0ZW0+XFxuICAgICAgPG1hdC1kaXZpZGVyID48L21hdC1kaXZpZGVyPlxcblxcbiAgICA8L21hdC1saXN0PlxcbiAgPC9tYXQtbGlzdD5cXG48L2Rpdj5cXG5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtCcmVha3BvaW50c30gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGRhdGE6IEpTT05bXT1bXTtcbiAgcHVibGljIGxpc3RVc2VyOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgZGF0ZTtcbiAgcHVibGljIHRpbWUgOiBhbnlbXT0gW107XG4gIHB1YmxpYyBpc0hhbmRzZXQkID0gdGhpcy50b29sLmlzSGFuZHNldCQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmRhdGUgPSB0aGlzLnRvb2wuc3dpdGNoUHJvZmlsZURhdGUoZGF5LnRvSVNPU3RyaW5nKCkpO1xuICAgIHRoaXMuYXBpLmdldEhvbWVKc29uKCkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1cmxkYXRhKSk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMudGltZS5wdXNoKHRoaXMuZGF0YVtqXVtcInRpbWVcIl0uc3BsaXQoJyAnKVsxXSk7XG5cbiAgICAgICAgbGV0IGluc2NyaXB0aW9uID0gdGhpcy5kYXRhW2pdW1wiaWRJbnNjcmlwdGlvblwiXTtcbiAgICAgICAgbGV0IHVzZXI6IEpTT05bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc2NyaXB0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdXNlci5wdXNoKFxuICAgICAgICAgICAgaW5zY3JpcHRpb25baV1bXCJpZFBlcnNvblwiXVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RVc2VyLnB1c2godXNlcilcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5idG57XFxuICBtYXJnaW4tbGVmdDozJVxcbn1cXG5tYXQtZm9ybS1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubWF0LXNwaW5uZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5tYXQtY2FyZHtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbmJ1dHRvbntcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQ+XFxuICA8bWF0LXNwaW5uZXIgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9tYXQtc3Bpbm5lcj5cXG4gIDxmb3JtIChzdWJtaXQpPVxcXCJvbkxvZ2luKGxvZ2luRm9ybSlcXFwiICNsb2dpbkZvcm09XFxcIm5nRm9ybVxcXCIgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiPjwhLS0gZG9uJ3QgZm9yZ2V0IHRoZSBcXFwiIVxcXCIsIHRodXMgbm90IGlzTG9hZGluZy0tPlxcbiAgICA8c3BhbiAqbmdJZj1cXFwiRXJyb3JcXFwiIGNsYXNzPVxcXCJtYXQtZXJyb3JcXFwiPiB7e0Vycm9yfX0gPC9zcGFuPlxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcInVzZXJuYW1lXFxcIiBuZ01vZGVsIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgIHJlcXVpcmVkPlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcInBhc3N3b3JkXFxcIiBuZ01vZGVsIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiTW90IGRlIHBhc3NlXFxcIiAgcmVxdWlyZWQgcGFzc3dvcmQ+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+Q29ubmVjdGlvbjwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBjbGFzcz1cXFwiYnRuXFxcIiByb3V0ZXJMaW5rPVxcXCIvc2lnbnVwXFxcIj5cXG4gICAgICA8c3Bhbj4gSW5zY3JpcHRpb248L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgPC9mb3JtPlxcbjwvbWF0LWNhcmQ+XFxuXCIiLCJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2NhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLy90b2RvIGRpc3BsYXkgbG9naW4gZXJyb3JcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJywgLy8gLS0+IGNhbiBiZSBvbW1pdGVkIGJlY2F1c2Ugb2YgdGhlIHJvdXRlc1xuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXR7XG5cbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBFcnJvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCl7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEF1dGhTdGF0dXNMaXN0ZW5lcigpXG4gICAgLnN1YnNjcmliZShcbiAgICAgIGF1dGggPT4ge1xuICAgICAgICBpZihhdXRoKXtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0RXJyb3JMaXN0ZW5lcigpLnN1YnNjcmliZShuZXh0PT57XG4gICAgICAgICAgdGhpcy5FcnJvciA9IG5leHQ7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9LGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLkVycm9yID0gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvbkxvZ2luKGZvcm06IE5nRm9ybSkge1xuICAgIGlmIChmb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dpblVzZXIoZm9ybS52YWx1ZS51c2VybmFtZSwgZm9ybS52YWx1ZS5wYXNzd29yZCk7XG4gICAgdGhpcy5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5zaWRlbmF2LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaWRlbmF2IHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxufVxcblxcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XFxcInNpZGVuYXYtY29udGFpbmVyXFxcIj5cXG4gIDxtYXQtc2lkZW5hdiAjZHJhd2VyIGNsYXNzPVxcXCJzaWRlbmF2XFxcIiBmaXhlZEluVmlld3BvcnRcXG4gICAgICBbYXR0ci5yb2xlXT1cXFwiKGlzSGFuZHNldCQgfCBhc3luYykgPyAnZGlhbG9nJyA6ICduYXZpZ2F0aW9uJ1xcXCJcXG4gICAgICBbbW9kZV09XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpID8gJ292ZXInIDogJ3NpZGUnXFxcIlxcbiAgICAgIFtvcGVuZWRdPVxcXCIoaXNIYW5kc2V0JCB8IGFzeW5jKSA9PT0gZmFsc2VcXFwiPlxcbiAgICA8bWF0LW5hdi1saXN0PlxcblxcbiAgICA8L21hdC1uYXYtbGlzdD5cXG4gIDwvbWF0LXNpZGVuYXY+XFxuICA8bWF0LXNpZGVuYXYtY29udGVudD5cXG4gICAgPG1hdC10b29sYmFyIGNvbG9yPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICA8YnV0dG9uXFxuICAgICAgICB0eXBlPVxcXCJidXR0b25cXFwiXFxuICAgICAgICBhcmlhLWxhYmVsPVxcXCJUb2dnbGUgc2lkZW5hdlxcXCJcXG4gICAgICAgIG1hdC1pY29uLWJ1dHRvblxcbiAgICAgICAgKGNsaWNrKT1cXFwiZHJhd2VyLnRvZ2dsZSgpXFxcIlxcbiAgICAgICAgKm5nSWY9XFxcImlzSGFuZHNldCQgfCBhc3luY1xcXCI+XFxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cXFwiU2lkZSBuYXYgdG9nZ2xlIGljb25cXFwiPm1lbnU8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxzcGFuPmZyb250ZW5kPC9zcGFuPlxcbiAgICA8L21hdC10b29sYmFyPlxcbiAgICA8IS0tIEFkZCBDb250ZW50IEhlcmUgLS0+XFxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XFxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcblxuICBpc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShCcmVha3BvaW50cy5IYW5kc2V0KVxuICAgIC5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQubWF0Y2hlcyksXG4gICAgICBzaGFyZVJlcGxheSgpXG4gICAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7fVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1hdC1yb3cgZGV0YWlsLXJvd1xcXCI+XFxuICA8bWF0LXRhYmxlIFtkYXRhU291cmNlXT1cXFwiZGF0YVxcXCIgY2xhc3M9XFxcIm1hdC1lbGV2YXRpb24tejhcXFwiPlxcbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiVXNlclxcXCI+XFxuICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gSW5zY3JpcHRpb24gPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5sYXN0TmFtZX19IHt7ZWxlbWVudC5maXJzdE5hbWV9fTwvbWF0LWNlbGw+XFxuICAgIDwvbmctY29udGFpbmVyPlxcblxcbiAgICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cXFwiUGVyc29uQ29sXFxcIj48L21hdC1oZWFkZXItcm93PlxcbiAgICA8bWF0LXJvdyAqbWF0Um93RGVmPVxcXCJsZXQgcm93OyBjb2x1bW5zOiBQZXJzb25Db2w7XFxcIj5cXG4gICAgPC9tYXQtcm93PlxcbiAgPC9tYXQtdGFibGU+XFxuPC9kaXY+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIm1hdC10YWJsZXtcXG4gIG1hcmdpbjogMyUgMiUgO1xcbiAgcGFkZGluZzogMiU7XFxufVxcblxcbi5zZWxlY3R7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG5tYXQtc2VsZWN0e1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5tYXQtY2VsbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWF0LWhlYWRlci1jZWxse1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWF0LWZvcm0tZmllbGR7XFxuICB3aWR0aDogMTE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5tYXQtY29sdW1uLURhdGUge1xcbiAgZmxleDogMCAwIDEwJTtcXG59XFxuXFxuLmFjdGlvbi1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MTg2O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5tYXQtY29sdW1uLUFjdGlvbiB7XFxuICAgIGZsZXg6IDAgMCAzMCU7XFxuICB9XFxuICAubWF0LWNvbHVtbi1EYXRlIHtcXG4gICAgZmxleDogMCAwIDMwJTtcXG4gIH1cXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIlxcbjxtYXQtZ3JpZC1saXN0IGNvbHM9XFxcIjRcXFwiIHJvd0hlaWdodD1cXFwiMTAwXFxcIj5cXG4gIDxtYXQtZ3JpZC10aWxlPjwvbWF0LWdyaWQtdGlsZT5cXG5cXG4gIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XFxcIjFcXFwiPlxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XFxcIk1vaXNcXFwiICNtYXRTZWxlY3QgWyhuZ01vZGVsKV09XFxcInZhbHVlXFxcIj5cXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cXFwibGV0IG1vbnRoIG9mIG1vbnRoc1xcXCIgW3ZhbHVlXT1cXFwibW9udGgubnVtXFxcIiA+XFxuICAgICAgICAgIHt7bW9udGgubmFtZX19XFxuICAgICAgICA8L21hdC1vcHRpb24+XFxuICAgICAgPC9tYXQtc2VsZWN0PlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcbiAgPC9tYXQtZ3JpZC10aWxlPlxcblxcbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cXFwiMVxcXCI+XFxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cXFwic2VsZWN0XFxcIj5cXG4gICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cXFwiQW5uw6llXFxcIiAjbWF0U2VsZWN0MiBbKG5nTW9kZWwpXT1cXFwieWVhclxcXCI+XFxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XFxcImxldCB5IG9mIGxpc3RZZWFyXFxcIiBbdmFsdWVdPVxcXCJ5XFxcIiA+XFxuICAgICAgICAgIHt7eX19XFxuICAgICAgICA8L21hdC1vcHRpb24+XFxuICAgICAgPC9tYXQtc2VsZWN0PlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcbiAgPC9tYXQtZ3JpZC10aWxlPlxcblxcbjwvbWF0LWdyaWQtbGlzdD5cXG5cXG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG5cXG48bWF0LWNhcmQgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+XFxuICA8bWF0LXNwaW5uZXIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+PC9tYXQtc3Bpbm5lcj5cXG48L21hdC1jYXJkPlxcblxcbjxtYXQtdGFibGUgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiIFtkYXRhU291cmNlXT1cXFwiZGF0YVNvdXJjZVxcXCIgY2xhc3M9XFxcIm1hdC1lbGV2YXRpb24tejhcXFwiIG1hdFNvcnQ+XFxuXFxuICA8IS0tIERhdGUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkRhdGVcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5EYXRlPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5EYXRlfX08L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIFRpbWUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlRpbWVcXFwiID5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+SGV1cmU8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+e3tlbGVtZW50LlRpbWV9fTwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gQmlrZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQmlrZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPlZlbG8ocykgbGlicmUocyk8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+e3tlbGVtZW50LkJpa2V9fTwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gU3RhdHVzIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJTdGF0dXNcXFwiID5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cXG4gICAgICBDb3VycyBjb25maXJtw6lcXG4gICAgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPlxcbiAgICAgIDxtYXQtaWNvbiAqbmdJZj1cXFwiIWVsZW1lbnQuQ2FuY2VsOyBlbHNlIGNhbmNlbFxcXCIgW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzonZ3JlZW4nfVxcXCJcXG4gICAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cXFwiQ29uZmlybcOpXFxcIj5jaGVjazwvbWF0LWljb24+XFxuICAgICAgPG5nLXRlbXBsYXRlICNjYW5jZWw+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzoncmVkJ31cXFwiIG1hdFRvb2x0aXA9XFxcIkFubnVsZXJcXFwiPmNhbmNlbDwvbWF0LWljb24+XFxuICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBCdXR0b24gQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiSW5mb1xcXCIgPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxcbiAgICAgIExpc3RlIFBhcnRpY2lwYW50KGUpc1xcbiAgICA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+XFxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkxpc3RlIFBhcnRpY2lwYW50KGUpc1xcXCI+XFxuICAgICAgICAgIDxtYXQtaWNvbiAoY2xpY2spPVxcXCJvcGVuRGlhbG9nKGVsZW1lbnQpXFxcIiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIj5pbmZvPC9tYXQtaWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICA8L21hdC1jZWxsPlxcblxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEJ1dHRvbiAyIENvbHVtbi0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFjdGlvblxcXCI+XFxuXFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XFxuICAgICAgSW5zY3JpcHRpb24vRMOpc2luc2NyaXRwdGlvblxcbiAgICA8L21hdC1oZWFkZXItY2VsbD5cXG5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCIgPlxcbiAgICAgIDxkaXYgKm5nSWY9XFxcImNoZWNrSWZEaXNhYmxlKGVsZW1lbnQpIDt0aGVuIGNhbmNlbEJ0biBlbHNlIEJ0blxcXCI+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPG5nLXRlbXBsYXRlICNjYW5jZWxCdG4+XFxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBtYXRUb29sdGlwPVxcXCJBbm51bGVyXFxcIiBkaXNhYmxlZCA+XFxuICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cXFwiY2hlY2tJZlN1YihlbGVtZW50KTt0aGVuIHVuc3ViIGVsc2Ugc3ViXFxcIj48L21hdC1pY29uPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXG4gICAgICA8bmctdGVtcGxhdGUgI0J0bj5cXG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiA+XFxuICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cXFwiY2hlY2tJZlN1YihlbGVtZW50KTt0aGVuIHVuc3ViMiBlbHNlIHN1YlxcXCI+PC9tYXQtaWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgPG5nLXRlbXBsYXRlICNzdWI+XFxuICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj1cXFwid2hpdGVcXFwiIG1hdFRvb2x0aXA9XFxcIkluc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwic3Vic2NyaWJlKGVsZW1lbnQuSWQpXFxcIj5hZGQ8L21hdC1pY29uPlxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgPG5nLXRlbXBsYXRlICN1bnN1Yj5cXG4gICAgICAgICAgPG1hdC1pY29uIGNvbG9yPVxcXCJ3aGl0ZVxcXCIgbWF0VG9vbHRpcD1cXFwiRMOpc2luc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwidW5TdWJzY3JpYmUoZWxlbWVudC5JZClcXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICAgIDxuZy10ZW1wbGF0ZSAjdW5zdWIyPlxcbiAgICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7Y29sb3IgOiAnIzQ0YzM0NCd9XFxcIiBtYXRUb29sdGlwPVxcXCJEw6lzaW5zY3JpcHRpb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJ1blN1YnNjcmliZShlbGVtZW50LklkKVxcXCI+Y2hlY2s8L21hdC1pY29uPlxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuXFxuICAgIDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVxcXCJkaXNwbGF5ZWRDb2x1bW5zXFxcIj48L21hdC1oZWFkZXItcm93PlxcbiAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cXFwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcXFwiPlxcbiAgPC9tYXQtcm93PlxcblxcbjwvbWF0LXRhYmxlPlxcblxcblxcblxcblxcblwiIiwiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7SW5zY3JpcHRpb24sIFNlc3Npb25zLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5cbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1wZXJzb24tZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QtcGVyc29uLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RQZXJzb25EaWFsb2cge1xuICBQZXJzb25Db2w6IHN0cmluZ1tdID0gWydVc2VyJ107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxMaXN0UGVyc29uRGlhbG9nPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFVzZXJbXSkge31cblxuICAgIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbn1cblxuLy90b2RvIGRpc3BsYXkgbW9udGggc2VsZWN0aW9uICsgeWVhciBzZWxlY3Rpb24gZXJyb3Jcbi8vdG9kbyBkaXNwbGF5IHN1YiArIHVuc3ViIGVycm9yXG4vL3RvZG8gYmxvY2sgdW5zdWIgaWYgdG9kYXlcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1vbnRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9udGguY29tcG9uZW50LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIE1vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGRhdGE6IEpTT05bXT1bXTtcbiAgcHVibGljIHZhbHVlIDogbnVtYmVyID0gbnVsbDtcbiAgcHVibGljIGxpc3RTZXNzaW9uIDogU2Vzc2lvbnNbXTtcbiAgcHVibGljIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxTZXNzaW9ucz47XG4gIHB1YmxpYyBsaXN0UGVyc29uIDogVXNlcltdO1xuICBwdWJsaWMgbGlzdFllYXI6IG51bWJlcltdPVtdO1xuICBwdWJsaWMgeWVhcjogbnVtYmVyO1xuICBwdWJsaWMgdXNlcjogVXNlcjtcbiAgcHVibGljIGxpc3RJZFNlc3Npb246IG51bWJlcltdPVtdO1xuICBwdWJsaWMgdG9kYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGlzSGFuZHNldCQgPSB0aGlzLnRvb2wuaXNIYW5kc2V0JDtcblxuICBAVmlld0NoaWxkKCdtYXRTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KW1hdFNlbGVjdCA6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZCgnbWF0U2VsZWN0Micse3N0YXRpYzpmYWxzZX0pbWF0U2VsZWN0MiA6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZChNYXRTb3J0LCB7c3RhdGljOiB0cnVlfSkgc29ydDogTWF0U29ydDtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA7XG5cblxuICBtb250aHMgPSBbXG4gICAge25hbWUgOiBcImphbnZpZXJcIiwgbnVtIDogMX0sXG4gICAge25hbWUgOiBcImbDqXZyaWVyXCIsIG51bSA6IDJ9LFxuICAgIHtuYW1lIDogXCJtYXJzXCIsIG51bSA6IDN9LFxuICAgIHtuYW1lIDogXCJhdnJpbFwiLCBudW0gOiA0fSxcbiAgICB7bmFtZSA6IFwibWFpXCIsIG51bSA6IDV9LFxuICAgIHtuYW1lIDogXCJqdWluXCIsIG51bSA6IDZ9LFxuICAgIHtuYW1lIDogXCJqdWlsbGV0XCIsIG51bSA6IDd9LFxuICAgIHtuYW1lIDogXCJhb8O7dFwiLCBudW0gOiA4fSxcbiAgICB7bmFtZSA6IFwic2VwdGVtYnJlXCIsIG51bSA6IDl9LFxuICAgIHtuYW1lIDogXCJvY3RvYnJlXCIsIG51bSA6IDEwfSxcbiAgICB7bmFtZSA6IFwibm92ZW1icmVcIiwgbnVtIDogMTF9LFxuICAgIHtuYW1lIDogXCJkw6ljZW1icmVcIiwgbnVtIDogMTJ9LFxuICBdO1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGg6QXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgdGhpcy50b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudG9kYXkuZ2V0TW9udGgoKSsxO1xuICAgIHRoaXMueWVhciA9IHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmdldFllYXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNIYW5kc2V0JC5zdWJzY3JpYmUodmFsdWUxID0+XG4gICAgICAhdmFsdWUxID8gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gWydEYXRlJywgJ1RpbWUnLCAnQmlrZScsICdTdGF0dXMnLCdJbmZvJywnQWN0aW9uJ10gOiB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBbJ0RhdGUnLCAnVGltZScsJ0FjdGlvbiddICkgO1xuICAgIHRoaXMuYXBpLmdldE1vbnRoSnNvbih0aGlzLnZhbHVlLHRoaXMueWVhci50b1N0cmluZygpKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICB0aGlzLmluaXRTZXNzaW9uKHVybGRhdGEpO1xuICAgIH0pO1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICAgIHRoaXMubWF0U2VsZWN0LnZhbHVlQ2hhbmdlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmFwaS5nZXRNb250aEpzb24odmFsdWUsdGhpcy55ZWFyLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgICAgdGhpcy5pbml0U2Vzc2lvbih1cmxkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYXRTZWxlY3QyLnZhbHVlQ2hhbmdlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnllYXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXBpLmdldE1vbnRoSnNvbih0aGlzLnZhbHVlLHRoaXMueWVhci50b1N0cmluZygpKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZShJZDogbnVtYmVyKSB7XG4gICAgbGV0IHRlbXBJbnNjcmlwdGlvbiA6IEluc2NyaXB0aW9uPXtcbiAgICAgIFVzZXJuYW1lOnRoaXMudXNlci51c2VybmFtZSxcbiAgICAgIElkOiBJZFxuICAgIH07XG5cbiAgICB0aGlzLmFwaS5jcmVhdGVJbnNjcmlwdGlvbih0ZW1wSW5zY3JpcHRpb24pLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhW1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdW5TdWJzY3JpYmUoaWQ6IG51bWJlcikge1xuICAgIGxldCB0ZW1wSW5zY3JpcHRpb24gOiBJbnNjcmlwdGlvbj17XG4gICAgICBVc2VybmFtZTp0aGlzLnVzZXIudXNlcm5hbWUsXG4gICAgICBJZDogaWRcbiAgICB9O1xuXG4gICAgdGhpcy5hcGkuZGVsSW5zY3JpcHRpb24odGVtcEluc2NyaXB0aW9uKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTZXNzaW9uKHVybGRhdGEpe1xuICAgIHRoaXMuYXBpLmdldFByb2ZpbGVKc29uKHRoaXMudXNlci51c2VybmFtZSkuc3Vic2NyaWJlKGRhdGE9PntcbiAgICAgIHRoaXMuYXV0aC5pbml0VXNlcihkYXRhKTtcbiAgICAgIHRoaXMubGlzdElkU2Vzc2lvbiA9IFtdO1xuICAgICAgdGhpcy51c2VyID0gdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCk7XG5cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXIuU2Vzc2lvbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMubGlzdElkU2Vzc2lvbi5wdXNoKHRoaXMudXNlci5TZXNzaW9uW2ldLklkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubGlzdFNlc3Npb24gPSBbXTtcblxuICAgIHRoaXMubGlzdFBlcnNvbiA9IFtdO1xuXG4gICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh1cmxkYXRhKSk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKHRoaXMudG9vbC5jaGVja0lmQmVmb3JlVG9kYXkodGhpcy5kYXRhW2ldW1wiRGF0ZVwiXSkpe1xuICAgICAgICBsZXQgdGVtcFNlc3MgPSB0aGlzLnRvb2wuaW5pdFRlbXBTZXNzKHRoaXMuZGF0YVtpXSx0aGlzLmRhdGFbaV1bXCJEYXRlXCJdKTtcblxuICAgICAgICB0ZW1wU2Vzcy5EYXRlID0gdGhpcy50b29sLnN3aXRjaERhdGUobmV3IERhdGUodGVtcFNlc3MuRGF0ZSkpO1xuICAgICAgICB0ZW1wU2Vzcy5QZXJzb24gPSB0aGlzLnRvb2wuaW5pdExpc3RQZXJzRGV0YWlsKHRoaXMuZGF0YVtpXVtcImlkSW5zY3JpcHRpb25cIl0pO1xuICAgICAgICB0aGlzLmxpc3RTZXNzaW9uLnB1c2godGVtcFNlc3MpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmxpc3RTZXNzaW9uKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgb3BlbkRpYWxvZyhTZXNzaW9uIDogU2Vzc2lvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKExpc3RQZXJzb25EaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogU2Vzc2lvbi5QZXJzb25cbiAgICB9KTtcbiAgfVxuXG4gIGdldFllYXIoKXtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGZvcih2YXIgaSA9ICh0aGlzLnllYXIpOyBpIDw9ICh0aGlzLnllYXIrMTApOyBpKyspe1xuICAgICAgdGhpcy5saXN0WWVhci5wdXNoKGkpO31cbiAgfVxuXG5cblxuICBjaGVja0lmRGlzYWJsZShlbGVtZW50KSA6IGJvb2xlYW57XG4gICAgcmV0dXJuIGVsZW1lbnQuQ2FuY2VsIHx8IGVsZW1lbnQuQmlrZSA9PSAwIHx8ICh0aGlzLnVzZXIuYWJvbm5lbWVudCA9PSAwICYmICF0aGlzLmNoZWNrSWZTdWIoZWxlbWVudCkpXG4gICAgICB8fCAoZWxlbWVudC5EYXRlID09PSB0aGlzLnRvb2wuc3dpdGNoRGF0ZSh0aGlzLnRvZGF5KSAmJiB0aGlzLmNoZWNrSWZTdWIoZWxlbWVudCkpXG4gIH1cblxuICBjaGVja0lmU3ViKGVsZW1lbnQpIDogYm9vbGVhbntcbiAgICByZXR1cm4gdGhpcy5saXN0SWRTZXNzaW9uLmluY2x1ZGVzKGVsZW1lbnQuSWQpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0gKG5nU3VibWl0KT1cXFwiRWRpdFByb2ZpbGUoZWRpdEZvcm0pXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICA8bWF0LXNlbGVjdCAqbmdJZj1cXFwiZXJyb3JcXFwiPiB7e2Vycm9yfX08L21hdC1zZWxlY3Q+XFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cXFwiRW1haWxcXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJkYXRhLkVtYWlsXFxcIiAgbmFtZT1cXFwiRW1haWxcXFwiID5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVxcXCJOb21cXFwiIHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJkYXRhLmxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XFxcIlByZW5vbVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImRhdGEuZmlyc3ROYW1lXFxcIiAgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiA+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBuZ01vZGVsICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiTW90IGRlIHBhc3NlXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGFzc3dvcmQgbmFtZT1cXFwicGFzc3dvcmRcXFwiID5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8bmctY29udGFpbmVyPlxcbiAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc2Vzc2lvbiBvZiBsaXN0VHlwZVNlc3Npb25cXFwiID5cXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVxcXCJFZGl0VHlwZVNlc3Npb24oc2Vzc2lvbilcXFwiIFtjaGVja2VkXSA9IFxcXCJjaGVja1Nlc3Npb24oc2Vzc2lvbikgIT0gbnVsbFxcXCI+XFxuICAgICAgICB7e3Nlc3Npb24uRGF5fX0ge3tzZXNzaW9uLlRpbWV9fVxcbiAgICAgIDwvbWF0LWNoZWNrYm94PlxcbiAgICA8L3VsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPk5vIFRoYW5rczwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+T2s8L2J1dHRvbj5cXG5cXG48L2Zvcm0+XFxuXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIm1hdC1jYXJke1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuZGl2e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgcGFkZGluZzogMiU7XFxufVxcblxcbm1hdC1zZWxlY3R7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHdpZHRoOiAxMDAlXFxufVxcblxcbm1hdC1jZWxse1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5tYXQtaGVhZGVyLWNlbGx7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYXQtZm9ybS1maWVsZHtcXG4gIHdpZHRoOiAxMTBweDtcXG59XFxuXFxuLm1hdC1jb2x1bW4tRGF0ZSB7XFxuICBmbGV4OiAwIDAgMzUlO1xcbn1cXG5cXG5oM3tcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG5we1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtZ3JpZC1saXN0IGNvbHM9XFxcIjJcXFwiIHJvd0hlaWdodD1cXFwiMTAwJVxcXCI+XFxuXFxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVxcXCIxXFxcIj5cXG5cXG4gICAgPG1hdC1jYXJkICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiIHN0eWxlPVxcXCJtYXJnaW46IGF1dG9cXFwiPlxcbiAgICAgIDxtYXQtc3Bpbm5lciBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj48L21hdC1zcGlubmVyPlxcbiAgICA8L21hdC1jYXJkPlxcblxcbiAgICA8ZGl2ID5cXG4gICAgICA8bWF0LXRhYmxlICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIiBbZGF0YVNvdXJjZV09XFxcImRhdGFTb3VyY2VcXFwiIGNsYXNzPVxcXCJtYXQtZWxldmF0aW9uLXo4XFxcIj5cXG5cXG4gICAgICAgIDwhLS0gRGF0ZSBDb2x1bW4gLS0+XFxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiRGF0ZVxcXCIgPlxcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBEYXRlIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tzd2l0Y2hEYXRlKGVsZW1lbnQuRGF0ZSl9fSA8L21hdC1jZWxsPlxcbiAgICAgICAgPC9uZy1jb250YWluZXIgPlxcblxcbiAgICAgICAgPCEtLSBUaW1lIENvbHVtbiAtLT5cXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJUaW1lXFxcIiA+XFxuICAgICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEhldXJlIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50LlRpbWV9fSA8L21hdC1jZWxsPlxcbiAgICAgICAgPC9uZy1jb250YWluZXI+XFxuXFxuICAgICAgICA8IS0tIEJpa2UgQ29sdW1uIC0tPlxcbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkJpa2VcXFwiID5cXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gVmVsbyBsaWJyZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5CaWtlfX0gPC9tYXQtY2VsbD5cXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxcblxcbiAgICAgICAgPCEtLSBTdGF0dXMgQ29sdW1uIC0tPlxcbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlN0YXR1c1xcXCIgPlxcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTdGF0dXMgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPlxcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cXFwiIWVsZW1lbnQuQ2FuY2VsOyBlbHNlIGNhbmNlbFxcXCIgW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzonZ3JlZW4nfVxcXCI+Y2hlY2s8L21hdC1pY29uPlxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2FuY2VsPlxcbiAgICAgICAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3JlZCd9XFxcIj5jYW5jZWw8L21hdC1pY29uPlxcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICAgIDwvbWF0LWNlbGw+XFxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gICAgICAgIDwhLS0gQnV0dG9uIENvbHVtbi0tPlxcbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFjdGlvblxcXCIgPlxcblxcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPjwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJjaGVja0lmRGlzYWJsZShlbGVtZW50KSA7dGhlbiBjYW5jZWxCdG4gZWxzZSBCdG5cXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2FuY2VsQnRuPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJJbnNjcmlwdGlvblxcXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJ1blN1YnNjcmliZShlbGVtZW50LklkKVxcXCI+Y2hlY2s8L21hdC1pY29uPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI0J0bj5cXG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiSW5zY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzonIzQ0YzM0NCd9XFxcIiAoY2xpY2spPVxcXCJ1blN1YnNjcmliZShlbGVtZW50LklkKVxcXCI+Y2hlY2s8L21hdC1pY29uPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgPC9tYXQtY2VsbD5cXG5cXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxcblxcblxcbiAgICAgICAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XFxcImRpc3BsYXllZENvbHVtbnNcXFwiPjwvbWF0LWhlYWRlci1yb3c+XFxuICAgICAgICA8bWF0LXJvdyAqbWF0Um93RGVmPVxcXCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1xcXCI+PC9tYXQtcm93PlxcbiAgICAgIDwvbWF0LXRhYmxlPlxcblxcbiAgICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVxcXCJbMTBdXFxcIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9tYXQtZ3JpZC10aWxlPlxcblxcbiAgPG1hdC1ncmlkLXRpbGU+XFxuICAgIDxtYXQtY2FyZCA+XFxuICAgICAgPG1hdC1saXN0LWl0ZW0+XFxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+XFxuICAgICAgICAgIDxtYXQtaWNvbj5wZXJzb248L21hdC1pY29uPlxcbiAgICAgICAgICA8c3Bhbj4ge3tVc2VyLmxhc3ROYW1lfX0ge3tVc2VyLmZpcnN0TmFtZX19PC9zcGFuPlxcbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiTGlzdGUgUGFydGljaXBhbnRcXFwiIHN0eWxlPVxcXCJmbG9hdCA6IHJpZ2h0XFxcIj5cXG4gICAgICAgICAgICA8bWF0LWljb24gKGNsaWNrKT1cXFwib3BlbkRpYWxvZygpXFxcIj5lZGl0PC9tYXQtaWNvbj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxcbiAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XFxuICAgICAgPC9tYXQtbGlzdC1pdGVtPlxcblxcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxcbiAgICAgICAgPG1hdC1saXN0LWl0ZW0+XFxuICAgICAgICAgIDxoMz5FbWFpbDwvaDM+XFxuICAgICAgICAgIDxwPnt7VXNlci5FbWFpbH19PC9wPlxcbiAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cXG5cXG4gICAgICAgIDxtYXQtbGlzdC1pdGVtPlxcbiAgICAgICAgICA8aDM+QWJvbm5lbWVudDwvaDM+XFxuICAgICAgICAgIDxwPnt7VXNlci5hYm9ubmVtZW50fX08L3A+XFxuICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcbiAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxcblxcbiAgICAgICAgPG1hdC1saXN0LWl0ZW0+XFxuICAgICAgICAgIDxoMz5Kb3VyPC9oMz5cXG4gICAgICAgICAgICA8cCAqbmdGb3I9XFxcImxldCBzZXNzIG9mIFVzZXIudHlwZVNlc3Npb25zXFxcIj57e3Nlc3MuRGF5fX0ge3tzZXNzLlRpbWV9fTwvcD5cXG4gICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XFxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XFxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxcblxcbiAgICA8L21hdC1jYXJkPlxcbiAgPC9tYXQtZ3JpZC10aWxlPlxcblxcbjwvbWF0LWdyaWQtbGlzdD5cXG5cXG5cXG5cXG5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xuaW1wb3J0IHtlZGl0UHJvZmlsZUludGVyZmFjZSwgSW5zY3JpcHRpb24sIFNlc3Npb25zLCBUeXBlU2Vzc2lvbiwgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuXG4vL3RvZG8gZGlzcGxheSB1bnN1YiBlcnJvclxuLy90b2RvIGRpc3BsYXkgdHlwZSBhYm9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdC1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgZGF5cyA9IHRoaXMudG9vbC5kYXlzO1xuICBwdWJsaWMgZGF5O1xuICBwdWJsaWMgZXJyb3IgOiBzdHJpbmc7XG4gIHB1YmxpYyBsaXN0VHlwZVNlc3Npb246IFR5cGVTZXNzaW9uW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEVkaXRQcm9maWxlQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFVzZXIsXG4gICAgcHJpdmF0ZSBhcGkgOiBBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlKSB7XG4gIH1cblxuICBAVmlld0NoaWxkKCdkYXlTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSBkYXlTZWxlY3Q6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZCgnZGF5U2VsZWN0Micse3N0YXRpYzpmYWxzZX0pIGRheVNlbGVjdDI6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZCgndGltZVNlbGVjdCcse3N0YXRpYzpmYWxzZX0pIHRpbWVTZWxlY3Q6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZCgndGltZVNlbGVjdDInLHtzdGF0aWM6ZmFsc2V9KSB0aW1lU2VsZWN0MjogTWF0U2VsZWN0O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXBpLmdldFR5cGVTZXNzaW9uKCkuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodXJsZGF0YSk7XG4gICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC9cImlkVHlwZVNlc3Npb25cIi9naSwgXCJcXFwiaWRQZXJzb25cXFwiXCIpO1xuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb24gPSB0aGlzLnRvb2wuaW5pdFR5cGVTZXNzaW9uKGRhdGEpO1xuICAgIH0pXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIEVkaXRQcm9maWxlKGZvcm0gOiBOZ0Zvcm0pIHtcbiAgICBsZXQgZWRpdFByb2ZpbGUgOiBlZGl0UHJvZmlsZUludGVyZmFjZSA9IHtcbiAgICAgIGlkIDogdGhpcy5kYXRhLmlkLFxuICAgICAgbGFzdE5hbWUgOiBmb3JtLnZhbHVlLmxhc3ROYW1lLFxuICAgICAgZmlyc3ROYW1lIDogZm9ybS52YWx1ZS5maXJzdE5hbWUsXG4gICAgICBFbWFpbCA6IGZvcm0udmFsdWUuRW1haWwsXG4gICAgICBwYXNzd29yZCA6IGZvcm0udmFsdWUucGFzc3dvcmQgPyBmb3JtLnZhbHVlLnBhc3N3b3JkIDogbnVsbCxcbiAgICAgIHR5cGVTZXNzaW9ucyA6IHRoaXMuZGF0YS50eXBlU2Vzc2lvbnNcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coZWRpdFByb2ZpbGUpO1xuXG4gICAgdGhpcy5hcGkucG9zdEVkaXRQcm9maWxlKGVkaXRQcm9maWxlKS5zdWJzY3JpYmUocmVzdWx0ID0+e1xuICAgICAgaWYocmVzdWx0KXtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LGVycm9yID0+IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9KVxuICB9XG5cbiAgRWRpdFR5cGVTZXNzaW9uKHR5cGUgOiBUeXBlU2Vzc2lvbikge1xuICAgIGlmKHRoaXMuY2hlY2tTZXNzaW9uKHR5cGUpID09IG51bGwpe1xuICAgICAgY29uc29sZS5sb2coJ2FkZCAnKyB0eXBlKTtcbiAgICAgIHRoaXMuZGF0YS50eXBlU2Vzc2lvbnMucHVzaCh0eXBlKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWwgJysgdHlwZSk7XG5cbiAgICAgIHRoaXMuZGF0YS50eXBlU2Vzc2lvbnMuc3BsaWNlKHRoaXMuY2hlY2tTZXNzaW9uKHR5cGUpLDEpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tTZXNzaW9uKHNlc3Npb246IFR5cGVTZXNzaW9uKSB7XG4gICAgbGV0IHN0YXRlO1xuICAgIGxldCBpID0wO1xuICAgIGZvcihsZXQgdHlwZSBvZiB0aGlzLmRhdGEudHlwZVNlc3Npb25zKXtcbiAgICAgIGkgKys7XG4gICAgICBzZXNzaW9uLklkID09IHR5cGUuSWQgPyBzdGF0ZSA9IGkgOiBzdGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBVc2VyOiBVc2VyO1xuICBwdWJsaWMgbGlzdFNlc3Npb24gOiBTZXNzaW9uc1tdPVtdO1xuICBwdWJsaWMgbGlzdFllYXI6IG51bWJlcltdPVtdO1xuICBwdWJsaWMgeWVhcjogbnVtYmVyO1xuICBwdWJsaWMgdmFsdWU6IGFueTtcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydEYXRlJywgJ1RpbWUnLCAnQmlrZScsICdTdGF0dXMnLCdBY3Rpb24nXTtcbiAgcHVibGljIHRvZGF5OiBEYXRlO1xuXG4gIEBWaWV3Q2hpbGQoJ21hdFNlbGVjdCcse3N0YXRpYzpmYWxzZX0pbWF0U2VsZWN0IDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuXG4gIG1vbnRocyA9IFtcbiAgICB7bmFtZSA6IFwiamFudmllclwiLCBudW0gOiAxfSxcbiAgICB7bmFtZSA6IFwiZmV2cmlyZXJcIiwgbnVtIDogMn0sXG4gICAge25hbWUgOiBcIm1hcnNcIiwgbnVtIDogM30sXG4gICAge25hbWUgOiBcImF2cmlsXCIsIG51bSA6IDR9LFxuICAgIHtuYW1lIDogXCJtYWlcIiwgbnVtIDogNX0sXG4gICAge25hbWUgOiBcImp1aW5cIiwgbnVtIDogNn0sXG4gICAge25hbWUgOiBcImp1aWxsZXRcIiwgbnVtIDogN30sXG4gICAge25hbWUgOiBcImFvdXRcIiwgbnVtIDogOH0sXG4gICAge25hbWUgOiBcInNlcHRlbWJyZVwiLCBudW0gOiA5fSxcbiAgICB7bmFtZSA6IFwib2N0b2JyZVwiLCBudW0gOiAxMH0sXG4gICAge25hbWUgOiBcIm5vdmVtYnJlXCIsIG51bSA6IDExfSxcbiAgICB7bmFtZSA6IFwiZGVjZW1icmVcIiwgbnVtIDogMTJ9LFxuICBdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFNlc3Npb25zPjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGg6QXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sOiBUb29sU2VydmljZSl7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMueWVhciA9IHRoaXMudG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmdldFllYXIoKTtcbiAgICB0aGlzLlVzZXIgPSB0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKTtcblxuICAgIHRoaXMuYXBpLmdldFByb2ZpbGVKc29uKHRoaXMuVXNlci51c2VybmFtZSkuc3Vic2NyaWJlKGRhdGE9PntcbiAgICAgIHRoaXMuYXV0aC5pbml0VXNlcihkYXRhKTtcbiAgICAgIHRoaXMuVXNlciA9IHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgbGV0IHNlc3MgOiBTZXNzaW9uc1tdID0gdGhpcy5Vc2VyLlNlc3Npb247XG4gICAgICBmb3IobGV0IGkgPSAwO2kgPCB0aGlzLlVzZXIuU2Vzc2lvbi5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpcy50b29sLmNoZWNrSWZCZWZvcmVUb2RheShzZXNzW2ldLkRhdGUpKXtcbiAgICAgICAgICB0aGlzLmxpc3RTZXNzaW9uLnB1c2goc2Vzc1tpXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmxpc3RTZXNzaW9uKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIHRoaXNbJ2lzTG9hZGluZyddID0gZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldFllYXIoKXtcbiAgICBmb3IodmFyIGkgPSAodGhpcy55ZWFyKTsgaSA8PSAodGhpcy55ZWFyKzEwKTsgaSsrKXtcbiAgICAgIHRoaXMubGlzdFllYXIucHVzaChpKTt9XG4gIH1cblxuICB1blN1YnNjcmliZShJZDogbnVtYmVyKSB7XG4gICAgbGV0IHRlbXBJbnNjcmlwdGlvbiA6IEluc2NyaXB0aW9uID0ge1xuICAgICAgVXNlcm5hbWU6dGhpcy5Vc2VyLnVzZXJuYW1lLFxuICAgICAgSWQ6IElkXG4gICAgfTtcblxuICAgIHRoaXMuYXBpLmRlbEluc2NyaXB0aW9uKHRlbXBJbnNjcmlwdGlvbikuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGlmKHVybGRhdGFbXCJyZXN1bHRcIl0pe1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0lmRGlzYWJsZShlbGVtZW50KSA6IGJvb2xlYW57XG4gICAgcmV0dXJuIChlbGVtZW50LkRhdGUgPT09IHRoaXMudG9vbC5zd2l0Y2hQcm9maWxlRGF0ZSh0aGlzLnRvZGF5KSlcbiAgfVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihFZGl0UHJvZmlsZUNvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB0aGlzLlVzZXJcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5uZ09uSW5pdCgpXG4gICAgfSk7XG4gIH1cblxuICBzd2l0Y2hEYXRlKERhdGUpIHtcbiAgICByZXR1cm4gdGhpcy50b29sLnN3aXRjaFByb2ZpbGVEYXRlKERhdGUpXG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0F1dGhMb2dpbkRhdGEsIEF1dGhTaWdudXBEYXRhLCBlZGl0QWJvLCBJbnNjcmlwdGlvbiwgU2Vzc2lvbnMsIFR5cGVTZXNzaW9ufSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcblxuICBwdWJsaWMgaXAgPSBcImh0dHA6Ly81MS4xNzguMjkuMTYyOjMwMDBcIjtcbiAgLy8gcHVibGljIGlwID0gXCJodHRwczovLzEyNy4wLjAuMTo4MDAwXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHsgfVxuXG4gIGdldEhvbWVKc29uKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5pcCArICcvYXBpJykucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZ2V0TW9udGhKc29uKG1vbnRoLHllYXIpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL21vbnRoL1wiICsgbW9udGggKyBcIi9cIiArIHllYXI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBnZXRQcm9maWxlSnNvbih1c2VybmFtZSl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvcHJvZmlsZS9cIiArIHVzZXJuYW1lO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZ2V0QWJvSnNvbigpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaXAgKyAnL2FwaS9hZG1pbi9hYm9ubmVtZW50JykucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgcG9zdEFib1JlbmV3KGlkKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi9yZW5ld0Fib1wiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCx7SWQ6aWR9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBlZGl0QWJvVHlwZShuZXdBYm9UeXBlIDogZWRpdEFibyl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vZWRpdEFib1wiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCxuZXdBYm9UeXBlKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBwb3N0Q2FuY2VsU2VzcyhpZCl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vQ2FuY2VsXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLHtJZDppZH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIHBvc3RSZW5ld1Nlc3MoaWQsYmlrZSl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vcmVjcmVhdGVcIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwse0lkOmlkLEJpa2U6YmlrZX0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGRlbGV0ZVNlc3MoaWQpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL3Nlc3Npb24vXCIgKyBpZCA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBjcmVhdGVOZXdTZXNzKG5ld1Nlc3MgOiBTZXNzaW9ucyl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vc2Vzc2lvblwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsbmV3U2VzcykucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIHBvc3RHZW5lcmF0ZVNlc3Npb25BdXRvKHllYXIsbGlzdCxiaWtlKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi9hdXRvY3JlYXRlXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCx7eWVhcjp5ZWFyLGJpa2U6YmlrZSxpZFR5cGVTZXNzaW9uOmxpc3R9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBjcmVhdGVJbnNjcmlwdGlvbihuZXdJbnNjcmlwdGlvbiA6IEluc2NyaXB0aW9uKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9JbnNjcmlwdGlvblwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsbmV3SW5zY3JpcHRpb24pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGRlbEluc2NyaXB0aW9uKG5ld0luc2NyaXB0aW9uIDogSW5zY3JpcHRpb24pe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL0Rlc2luc2NyaXB0aW9uL1wiICsgbmV3SW5zY3JpcHRpb24uVXNlcm5hbWUgKyBcIi9cIiArIG5ld0luc2NyaXB0aW9uLklkO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgcG9zdExvZ2luKGF1dGhEYXRhIDogQXV0aExvZ2luRGF0YSl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKycvYXBpL2xvZ2luJztcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8e3Jlc3VsdDogYm9vbGVhbn0+KHVybCwgYXV0aERhdGEpLnBpcGUoXG4gICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgcG9zdEVkaXRQcm9maWxlKGVkaXRQcm9maWxlKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArICcvYXBpL2VkaXRQcm9maWxlJztcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDx7cmVzdWx0IDogYm9vbGVhbn0+KHVybCwgZWRpdFByb2ZpbGUpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGdldFR5cGVTZXNzaW9uKCl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvVHlwZVNlc3Npb25cIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGRlbFR5cGVTZXNzaW9uKElkIDogbnVtYmVyKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9UeXBlU2Vzc2lvbi9cIiArIElkO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgYWRkVHlwZVNlc3Npb24odHlwZVNlc3Npb24gOiBUeXBlU2Vzc2lvbil7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvVHlwZVNlc3Npb25cIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLHR5cGVTZXNzaW9uKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBlZGl0VHlwZVNlc3Npb24odHlwZVNlc3Npb24gOiBUeXBlU2Vzc2lvbil7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvVHlwZVNlc3Npb25cIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsdHlwZVNlc3Npb24pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGRlbFVzZXIoSWQ6bnVtYmVyKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi91c2VyL1wiICsgSWQ7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBoYW5kZWxFcnJvcihlcnIpe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKXtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyci5lcnJvci5lcnJvcik7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIubWVzc2FnZSlcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTdWJqZWN0LCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QXV0aExvZ2luRGF0YSwgQXV0aFNpZ251cERhdGEsIFNlc3Npb25zLCBVc2VyfSBmcm9tIFwiLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGVcIjtcbmltcG9ydCB7Q29va2llU2VydmljZX0gZnJvbSBcIm5neC1jb29raWUtc2VydmljZVwiO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tIFwiLi9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHtjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuL3Rvb2wuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gIHB1YmxpYyBhdXRoU3RhdHVzTGlzdGVuZXIgOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTsgLy8ganVzdCBuZWVkIHRvIGtub3cgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gIHB1YmxpYyBkYXRhOiBKU09OW107XG4gIHB1YmxpYyBVc2VyOiBVc2VyO1xuICBwdWJsaWMgZXJyb3JMaXN0ZW5lciA6IFN1YmplY3Q8U3RyaW5nPiA9ICBuZXcgU3ViamVjdDxTdHJpbmc+KCk7XG4gIHB1YmxpYyBpcCA9IFwiaHR0cDovLzUxLjE3OC4yOS4xNjI6MzAwMFwiO1xuICAvLyBwdWJsaWMgaXAgPSBcImh0dHBzOi8vMTI3LjAuMC4xOjgwMDBcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29va2llIDogQ29va2llU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlKSB7fVxuXG4gIGdldElzQXV0aCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmNvb2tpZS5nZXQoJ2Nvbm5lY3RlZCcpKTtcbiAgfVxuXG4gIGdldEF1dGhTdGF0dXNMaXN0ZW5lcigpIDogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU3RhdHVzTGlzdGVuZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXRFcnJvckxpc3RlbmVyKCkgOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmVycm9yTGlzdGVuZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXRDdXJyZW50VXNlcigpOlVzZXJ7XG4gICAgLy8gdGhpcy51cGRhdGVVc2VyKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5jb29raWUuZ2V0KCd1c2VyJykpO1xuICB9XG5cbiAgY3JlYXRlVXNlcihhdXRoRGF0YSA6IEF1dGhTaWdudXBEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5pcCArICcvYXBpL3JlZ2lzdGVyJywgYXV0aERhdGEpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKFxuICAgICAgICAoZXJyIDogYW55KSA9PiB7XG4gICAgICAgICAgaWYoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2Upe1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyLmVycm9yLmVycm9ycyk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbG9naW5Vc2VyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBsZXQgYXV0aERhdGE6IEF1dGhMb2dpbkRhdGEgPSB7VXNlcm5hbWU6dXNlcm5hbWUscGFzc3dvcmQ6cGFzc3dvcmR9O1xuXG4gICAgdGhpcy5hcGkucG9zdExvZ2luKGF1dGhEYXRhKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlW1wicmVzdWx0XCJdID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VbXCJ1c2VyXCJdICk7XG4gICAgICAgICAgdGhpcy5hcGkuZ2V0UHJvZmlsZUpzb24odXNlcm5hbWUpLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTsgLy8gbmVlZGVkIHRvIHVwZGF0ZSBhdXRoZW50aWNhdGlvbiBzdGF0dXNcbiAgICAgICAgICAgIHRoaXMuaW5pdFVzZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXNMaXN0ZW5lci5uZXh0KHRydWUpOy8vIHRlbGxpbmcgZXZlcnlvbmUgd2hvIGlzIGludGVyZXN0ZWQgdGhhdCB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sZXJyb3IgPT57XG4gICAgICAgIHRoaXMuZXJyb3JMaXN0ZW5lci5lcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMuYXV0aFN0YXR1c0xpc3RlbmVyLm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLmVycm9yTGlzdGVuZXIgPSBuZXcgU3ViamVjdDxTdHJpbmc+KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGluaXRVc2VyKGRhdGEpe1xuICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHRoaXMuVXNlciA9IHtcbiAgICAgIGlkOiB0aGlzLmRhdGFbXCJpZFwiXSxcbiAgICAgIHVzZXJuYW1lIDogdGhpcy5kYXRhW1wiVXNlcm5hbWVcIl0sXG4gICAgICBsYXN0TmFtZTogdGhpcy5kYXRhW1wiTGFzdE5hbWVcIl0sXG4gICAgICBmaXJzdE5hbWU6IHRoaXMuZGF0YVtcIkZpcnN0TmFtZVwiXSxcbiAgICAgIGFib25uZW1lbnQ6IHRoaXMuZGF0YVtcIkFib25uZW1lbnRcIl0sXG4gICAgICB0eXBlU2Vzc2lvbnMgOiBbXSxcbiAgICAgIEVtYWlsOiB0aGlzLmRhdGFbXCJFbWFpbFwiXSxcbiAgICAgIFNlc3Npb246IFtdLFxuICAgICAgUm9sZTogdGhpcy5kYXRhW1wicm9sZXNcIl1cbiAgICB9O1xuXG4gICAgZm9yKGxldCB0eXBlU2VzcyBvZiB0aGlzLmRhdGFbXCJJZFR5cGVTZXNzaW9uXCJdKXtcbiAgICAgdGhpcy5Vc2VyLnR5cGVTZXNzaW9ucy5wdXNoKHtcbiAgICAgICAgSWQgOiB0eXBlU2Vzc1tcIklkVHlwZVNlc3Npb25cIl1bXCJpZFwiXSxcbiAgICAgICAgRGF5IDogdGhpcy50b29sLmRheVN3aXRoKHR5cGVTZXNzW1wiSWRUeXBlU2Vzc2lvblwiXVtcImRheVwiXSksXG4gICAgICAgIFRpbWUgOiB0eXBlU2Vzc1tcIklkVHlwZVNlc3Npb25cIl1bXCJ0aW1lXCJdLnNwbGl0KCcgJylbMV1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBpbnNjcmlwdGlvbiA9IHRoaXMuZGF0YVtcImlkSW5zY3JpcHRpb25cIl07XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5zY3JpcHRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuVXNlci5TZXNzaW9uLnB1c2godGhpcy50b29sLmluaXRUZW1wU2VzcyhpbnNjcmlwdGlvbltpXVtcImlkU2Vzc2lvblwiXSxpbnNjcmlwdGlvbltpXVtcImlkU2Vzc2lvblwiXVtcImRhdGVcIl0pKTtcbiAgICB9XG4gICAgdGhpcy5jb29raWUuc2V0KCd1c2VyJyxKU09OLnN0cmluZ2lmeSh0aGlzLlVzZXIpKTtcbiAgICB0aGlzLmNvb2tpZS5zZXQoJ2Nvbm5lY3RlZCcsXCJ0cnVlXCIpO1xuXG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmF1dGhTdGF0dXNMaXN0ZW5lci5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLmNvb2tpZS5kZWxldGUoJ3VzZXInKTtcbiAgICB0aGlzLmNvb2tpZS5kZWxldGUoJ3Nlc3Npb24nKTtcbiAgICB0aGlzLmNvb2tpZS5kZWxldGUoJ2Nvbm5lY3RlZCcpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Nlc3Npb25zLCBUeXBlU2Vzc2lvbiwgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHtOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZX0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXlzIHtcbiAgY29kZSA6IHN0cmluZyxcbiAgbm9tIDogc3RyaW5nLFxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFRvb2xTZXJ2aWNlIHtcbiAgZ2V0IGlzSGFuZHNldCQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSGFuZHNldCQ7XG4gIH1cbiAgcHJpdmF0ZSBfaXNIYW5kc2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xuICAgIEJyZWFrcG9pbnRzLkhhbmRzZXRMYW5kc2NhcGUsXG4gICAgQnJlYWtwb2ludHMuSGFuZHNldFBvcnRyYWl0LFxuICAgIEJyZWFrcG9pbnRzLlRhYmxldExhbmRzY2FwZSxcbiAgICBCcmVha3BvaW50cy5UYWJsZXRQb3J0cmFpdF0pXG4gICAgLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKSxcbiAgICAgIHNoYXJlUmVwbGF5KClcbiAgICApO1xuICBnZXQgZGF5cygpOiBEYXlzW10ge1xuICAgIHJldHVybiB0aGlzLl9kYXlzO1xuICB9XG4gIGdldCBkYXJrVGhlbWUoKTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWUge1xuICAgIHJldHVybiB0aGlzLl9kYXJrVGhlbWU7XG4gIH1cblxuICBwcml2YXRlIF9kYXJrVGhlbWU6IE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lID0ge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgYm9keUJhY2tncm91bmRDb2xvcjogJyM0MjQyNDInLFxuICAgICAgYnV0dG9uQ29sb3I6ICcjZmZmJ1xuICAgIH0sXG4gICAgZGlhbDoge1xuICAgICAgZGlhbEJhY2tncm91bmRDb2xvcjogJyM1NTUnLFxuICAgIH0sXG4gICAgY2xvY2tGYWNlOiB7XG4gICAgICBjbG9ja0ZhY2VCYWNrZ3JvdW5kQ29sb3I6ICcjNTU1JyxcbiAgICAgIGNsb2NrSGFuZENvbG9yOiAnIzlmYmQ5MCcsXG4gICAgICBjbG9ja0ZhY2VUaW1lSW5hY3RpdmVDb2xvcjogJyNmZmYnXG4gICAgfVxuICB9O1xuICBwcml2YXRlIF9kYXlzIDogRGF5c1tdID1bXG4gICAge2NvZGU6XCJNb25cIixub206XCJMdW5kaVwifSxcbiAgICB7Y29kZTpcIlR1ZVwiLG5vbTpcIk1hcmRpXCJ9LFxuICAgIHtjb2RlOlwiV2VkXCIsbm9tOlwiTWVyY3JlZGlcIn0sXG4gICAge2NvZGU6XCJUaHVcIixub206XCJKZXVkaVwifSxcbiAgICB7Y29kZTpcIkZyeVwiLG5vbTpcIlZlbmRyZWRpXCJ9LFxuICAgIHtjb2RlOlwiU2F0XCIsbm9tOlwiU2FtZWRpXCJ9LFxuICAgIHtjb2RlOlwiU3VuXCIsbm9tOlwiRGltYW5jaGVcIn0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikgeyB9XG5cbiAgZGF5U3dpdGgoZGF5KXtcblxuICAgIGxldCBqO1xuICAgIHN3aXRjaCAoZGF5KSB7XG4gICAgICBjYXNlICdNb24nIDoge2ogPSAnTHVuZGknOyBicmVhazt9XG4gICAgICBjYXNlICdUdWUnIDoge2ogPSAnTWFyZGknOyBicmVhazt9XG4gICAgICBjYXNlICdXZWQnIDoge2ogPSAnTWVyY3JlZGknOyBicmVhazt9XG4gICAgICBjYXNlICdUaHUnIDoge2ogPSAnSmV1ZGknOyBicmVhazt9XG4gICAgICBjYXNlICdGcnknIDoge2ogPSAnVmVuZHJlZGknOyBicmVhazt9XG4gICAgICBjYXNlICdTYXQnIDoge2ogPSAnU2FtZWRpJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnU3VuJyA6IHtqID0gJ0RpbWFuY2hlJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnTnVsbCcgOiB7aiA9ICdOdWxsJzsgYnJlYWs7fVxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgaW52RGF5U3dpdGNoKGRheSl7XG4gICAgbGV0IGo7XG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgIGNhc2UgJ0x1bmRpJyA6IHtqID0gJ01vbic7IGJyZWFrO31cbiAgICAgIGNhc2UgJ01hcmRpJyA6IHtqID0gJ1R1ZSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ01lcmNyZWRpJyA6IHtqID0gJ1dlZCc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ0pldWRpJyA6IHtqID0gJ1RodSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ1ZlbmRyZWRpJyA6IHtqID0gJ0ZyeSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ1NhbWVkaScgOiB7aiA9ICdTYXQnOyBicmVhazt9XG4gICAgICBjYXNlICdEaW1hbmNoZScgOiB7aiA9ICdTdW4nOyBicmVhazt9XG4gICAgICBjYXNlICdOdWxsJyA6IHtqID0gJ051bGwnOyBicmVhazt9XG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBzd2l0Y2hEYXRlKGQgOiBEYXRlKSA6IHN0cmluZ3tcbiAgICBsZXQgaiA6IHN0cmluZztcbiAgICBzd2l0Y2ggKGQuZ2V0RGF5KCkpIHtcbiAgICAgIGNhc2UgMSA6IHtqID0gXCJMdW5kaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDIgOiB7aiA9IFwiTWFyZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSAzIDoge2ogPSBcIk1lcmNyZWRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgNCA6IHtqID0gXCJKZXVkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDUgOiB7aiA9IFwiVmVuZHJlZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSA2IDoge2ogPSBcIlNhbWVkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDAgOiB7aiA9IFwiRGltYW5jaGUgXCI7IGJyZWFrfVxuICAgIH1cbiAgICByZXR1cm4gaiArIGQuZ2V0RGF0ZSgpXG4gIH1cblxuICBpbml0VGVtcFNlc3MoZGF0YSA6IEpTT04sIGRhdGUpIDogU2Vzc2lvbnN7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgRGF0ZTogZC50b0lTT1N0cmluZygpLFxuICAgICAgVGltZTogZGF0YVtcInRpbWVcIl0uc3BsaXQoJyAnKVsxXSxcbiAgICAgIEJpa2U6IGRhdGFbXCJiaWtlXCJdLFxuICAgICAgQ2FuY2VsOiBkYXRhW1wiQ2FuY2VsXCJdLFxuICAgICAgSWQ6IGRhdGFbXCJpZFwiXSxcbiAgICB9XG4gIH1cblxuICBjaGVja0lmQmVmb3JlVG9kYXkoZGF0ZSl7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKS0xKTtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkgPj0gZFxuICB9XG5cbiAgc3dpdGNoUHJvZmlsZURhdGUoZCkgOiBzdHJpbmd7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkKTtcbiAgICBsZXQgajtcbiAgICBzd2l0Y2ggKGRhdGUuZ2V0RGF5KCkpIHtcbiAgICAgIGNhc2UgMTp7aiA9IFwiTHVuZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSAyOntqID0gXCJNYXJkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDM6e2ogPSBcIk1lcmNyZWRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgNDp7aiA9IFwiamV1ZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSA1OntqID0gXCJWZW5kcmRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgNjp7aiA9IFwiU2FtZWRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgMDp7aiA9IFwiRGltYW5jaGUgXCI7IGJyZWFrfVxuICAgIH1cbiAgICBsZXQgbW9udGhzID0gW1wiSmFudmllclwiLFwiRsOpdnJpZXJcIixcIk1hcnNcIixcIkF2cmlsXCIsXCJNYWlcIixcIkp1aW5cIixcIkp1aWxsZXRcIixcIkFvdXRcIixcIlNlcHRlbWJyZVwiLFwiT2N0b2JyZVwiLFwiTm92ZW1icmVcIixcIkRlY2VtYnJlXCJdO1xuICAgIHJldHVybiBqICsgZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArICBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiIFwiICsgZGF0ZS5nZXRGdWxsWWVhcigpXG4gIH1cblxuICBpbml0TGlzdFBlcnNEZXRhaWwobGlzdFBlcnMpOiBVc2VyW117XG4gICAgbGV0IHRlbXBQZXJzIDogVXNlcltdID0gW107XG4gICAgZm9yKGxldCBwZXJzIG9mIGxpc3RQZXJzKXtcbiAgICAgIGxldCBpZFBlcnNvbjtcbiAgICAgIGlmKHBlcnNbXCJJZFBlcnNvblwiXSl7XG4gICAgICAgIGlkUGVyc29uID0gcGVyc1tcIklkUGVyc29uXCJdXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWRQZXJzb24gPSBwZXJzW1wiaWRQZXJzb25cIl1cbiAgICAgIH1cbiAgICAgIHRlbXBQZXJzLnB1c2goe1xuICAgICAgICBsYXN0TmFtZSA6IGlkUGVyc29uW1wibGFzdE5hbWVcIl0sXG4gICAgICAgIGZpcnN0TmFtZSA6IGlkUGVyc29uW1wiZmlyc3ROYW1lXCJdLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBQZXJzO1xuICB9XG5cbiAgaW5pdFR5cGVTZXNzaW9uKHN0ciA6IHN0cmluZykgOiBUeXBlU2Vzc2lvbltde1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cImRheVwiL2dpLCBcIlxcXCJEYXlcXFwiXCIpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cInRpbWVcIi9naSwgXCJcXFwiVGltZVxcXCJcIik7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHN0cik7XG4gICAgbGV0IHR5cGVTZXNzaW9uIDogVHlwZVNlc3Npb25bXSA9IFtdO1xuICAgIGZvcihsZXQgdHlwZSBvZiBkYXRhKXtcbiAgICAgIGxldCBUeXBlU2VzcztcbiAgICAgIGlmKHR5cGVbXCJJZFR5cGVTZXNzaW9uXCJdKXtcbiAgICAgICAgVHlwZVNlc3MgPSB0eXBlW1wiSWRUeXBlU2Vzc2lvblwiXVxuICAgICAgfWVsc2UgaWYodHlwZVtcImlkVHlwZVNlc3Npb25cIl0pe1xuICAgICAgICBUeXBlU2VzcyA9IHR5cGVbXCJpZFR5cGVTZXNzaW9uXCJdXG4gICAgICB9ZWxzZXtcbiAgICAgICAgVHlwZVNlc3MgPSB0eXBlXG4gICAgICB9XG4gICAgICBsZXQgdGVtcFR5cGUgOiBUeXBlU2Vzc2lvbiA9IHtcbiAgICAgICAgSWQgOiBUeXBlU2Vzc1tcImlkXCJdLFxuICAgICAgICBEYXkgOiB0aGlzLmRheVN3aXRoKFR5cGVTZXNzW1wiRGF5XCJdKSxcbiAgICAgICAgVGltZSA6IFR5cGVTZXNzW1wiVGltZVwiXS5zcGxpdCgnICcpWzFdLFxuICAgICAgfTtcblxuICAgICAgaWYodHlwZVtcImlkVHlwZVNlc3Npb25cIl0pe1xuICAgICAgICB0ZW1wVHlwZS5QZXJzb24gPSB0aGlzLmluaXRMaXN0UGVyc0RldGFpbChUeXBlU2Vzc1tcImlkVHlwZVNlc3Npb25cIl0pXG4gICAgICB9ZWxzZSBpZih0eXBlW1wiaWRQZXJzb25cIl0pe1xuICAgICAgICB0ZW1wVHlwZS5QZXJzb24gPSB0aGlzLmluaXRMaXN0UGVyc0RldGFpbChUeXBlU2Vzc1tcImlkUGVyc29uXCJdKVxuICAgICAgfVxuICAgICAgdHlwZVNlc3Npb24ucHVzaCh0ZW1wVHlwZSlcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVTZXNzaW9uO1xuICB9XG5cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJtYXQtY2FyZHtcXG4gIHdpZHRoOiAyMCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbm1hdC1mb3JtLWZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYXQtc3Bpbm5lciB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCJcXG48bWF0LWNhcmQ+XFxuICA8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+IHt7ZXJyb3J9fSA8L21hdC1lcnJvcj5cXG5cXG4gIDxtYXQtc3Bpbm5lciAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L21hdC1zcGlubmVyPlxcblxcbiAgPGZvcm0gKHN1Ym1pdCk9XFxcIm9uU2lnbnVwKHNpZ251cEZvcm0pXFxcIiAjc2lnbnVwRm9ybT1cXFwibmdGb3JtXFxcIiAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCI+XFxuXFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcImVtYWlsXFxcIiBuZ01vZGVsIHR5cGU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiRS1NYWlsXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgZW1haWw+XFxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJlbWFpbElucHV0LmludmFsaWRcXFwiPnBsZWFzZSBlbnRlciB2YWxpZCBlbWFpbDwvbWF0LWVycm9yPlxcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcInVzZXJuYW1lXFxcIiBuZ01vZGVsIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc2VybmFtZVxcXCIgI3VzZXJuYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIHVzZXJuYW1lPlxcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwidXNlcm5hbWVJbnB1dC5pbnZhbGlkXFxcIj5wbGVhc2UgZW50ZXIgdmFsaWQgVXNlcm5hbWU8L21hdC1lcnJvcj5cXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJOb21cXFwiIG5nTW9kZWwgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIk5vbVxcXCIgI3VzZXJuYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwidXNlcm5hbWVJbnB1dC5pbnZhbGlkXFxcIj5wbGVhc2UgZW50ZXIgdmFsaWQgVXNlcm5hbWU8L21hdC1lcnJvcj5cXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJQcmVub21cXFwiIG5nTW9kZWwgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlByZW5vbVxcXCIgI3VzZXJuYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwidXNlcm5hbWVJbnB1dC5pbnZhbGlkXFxcIj5wbGVhc2UgZW50ZXIgdmFsaWQgVXNlcm5hbWU8L21hdC1lcnJvcj5cXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJBYm9ubmVtZW50XFxcIiBuZ01vZGVsIHR5cGU9XFxcIm51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIkFib25uZW1lbnRcXFwiICN1c2VybmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD5cXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcInVzZXJuYW1lSW5wdXQuaW52YWxpZFxcXCI+cGxlYXNlIGVudGVyIHZhbGlkIFVzZXJuYW1lPC9tYXQtZXJyb3I+XFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgICA8bmctY29udGFpbmVyPlxcbiAgICAgICAgPHVsICpuZ0Zvcj1cXFwibGV0IHNlc3Npb24gb2YgbGlzdFR5cGVTZXNzaW9uXFxcIiA+XFxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XFxcImFkZFR5cGVTZXNzaW9uKHNlc3Npb24uSWQpXFxcIj5cXG4gICAgICAgICAgICB7e3Nlc3Npb24uRGF5fX0ge3tzZXNzaW9uLlRpbWV9fVxcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9uZy1jb250YWluZXI+XFxuXFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgICAgPGxhYmVsPlxcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwicGFzc3dvcmRcXFwiIG5nTW9kZWwgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCIgI3Bhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIHBhc3N3b3JkPlxcbiAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+cGxlYXNlIGVudGVyIHZhbGlkIHBhc3N3b3JkPC9tYXQtZXJyb3I+XFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJwYXNzd29yZENvbmZpcm1hdGlvblxcXCIgbmdNb2RlbCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlJlcGVhdCBQYXNzd29yZFxcXCIgI3Bhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIHBhc3N3b3JkPlxcbiAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+cGxlYXNlIGVudGVyIHZhbGlkIHBhc3N3b3JkPC9tYXQtZXJyb3I+XFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIj5TJ2luc2NyaXJlPC9idXR0b24+XFxuICAgICAgPHA+XFxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGU+KiA6IGNoYW1wcyByZXF1aXM8L21hdC1jYXJkLXN1YnRpdGxlPlxcbiAgICAgIDwvcD5cXG4gIDwvZm9ybT5cXG48L21hdC1jYXJkPlxcblxcblwiIiwiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XG5pbXBvcnQge0F1dGhTaWdudXBEYXRhLCBTZXNzaW9ucywgVHlwZVNlc3Npb24sIFVzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcblxuLy90b2RvIGF1dG8gc3Vic2NyaWJlIHRvIHNlc3Npb24gaW4gZnVuY3Rpb24gb2YgaGlzIHN1YnNjcmlwdGlvblxuLy90b2RvIG1vZGlmaWNhdGlvbiBiYXNlIGRlIGRvbm7DqWUgcG91ciBsaWFpc29uIGVudHJlIHR5cGUgZGUgc2Vzc2lvbiBldCB1dGlsaXNhdGV1clxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ251cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ251cC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0e1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHVzZXI6IFVzZXI7XG4gIGRheXMgPSB0aGlzLnRvb2wuZGF5cztcbiAgcHVibGljIGxpc3RUeXBlU2Vzc2lvbjogVHlwZVNlc3Npb25bXTtcbiAgZXJyb3I7XG5cbiAgQFZpZXdDaGlsZCgnZGF5U2VsZWN0Jyx7c3RhdGljOmZhbHNlfSkgZGF5U2VsZWN0OiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ2RheVNlbGVjdDInLHtzdGF0aWM6ZmFsc2V9KSBkYXlTZWxlY3QyOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ3RpbWVTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSB0aW1lU2VsZWN0OiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ3RpbWVTZWxlY3QyJyx7c3RhdGljOmZhbHNlfSkgdGltZVNlbGVjdDI6IE1hdFNlbGVjdDtcbiAgcHJpdmF0ZSBsaXN0VHlwZVNlc3Npb25JZDogbnVtYmVyW10gPSBbXTtcblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGkgOiBBcGlTZXJ2aWNlKSB7IH1cblxuICBvblNpZ251cChmb3JtOiBOZ0Zvcm0pIHtcbiAgICBpZiAoZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGF1dGhEYXRhOiBBdXRoU2lnbnVwRGF0YSA9IHtcbiAgICAgIGVtYWlsOiBmb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgdXNlcm5hbWU6IGZvcm0udmFsdWUudXNlcm5hbWUsXG4gICAgICBOb206IGZvcm0udmFsdWUuTm9tLFxuICAgICAgUHJlbm9tOiBmb3JtLnZhbHVlLlByZW5vbSxcbiAgICAgIEFib25uZW1lbnQ6IE51bWJlcihmb3JtLnZhbHVlLkFib25uZW1lbnQpLFxuICAgICAgdHlwZVNlc3Npb25zIDogW10sXG4gICAgICBwYXNzd29yZDogZm9ybS52YWx1ZS5wYXNzd29yZCxcbiAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBmb3JtLnZhbHVlLnBhc3N3b3JkQ29uZmlybWF0aW9uLFxuICAgIH07XG5cblxuICAgIGZvcihsZXQgc2Vzc2lvbiBvZiB0aGlzLmxpc3RUeXBlU2Vzc2lvbil7XG4gICAgICBpZih0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLmluZGV4T2Yoc2Vzc2lvbi5JZCkgIT0gLTEpe1xuICAgICAgICBhdXRoRGF0YS50eXBlU2Vzc2lvbnMucHVzaChzZXNzaW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmNyZWF0ZVVzZXIoYXV0aERhdGEpLnN1YnNjcmliZSgobmV4dCk9PntcbiAgICAgIGlmKG5leHRbXCJyZXN1bHRcIl0pe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgIH1cbiAgICB9LGVycm9yMSA9PiB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3IxO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hcGkuZ2V0VHlwZVNlc3Npb24oKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVybGRhdGEpKTtcbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uID0gW107XG4gICAgICBmb3IobGV0IHR5cGUgb2YgZGF0YSl7XG4gICAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uIC5wdXNoKHtcbiAgICAgICAgICBJZCA6IHR5cGVbXCJpZFwiXSxcbiAgICAgICAgICBEYXkgOiB0aGlzLnRvb2wuZGF5U3dpdGgodHlwZVtcIkRheVwiXSksXG4gICAgICAgICAgVGltZSA6IHR5cGVbXCJUaW1lXCJdLnNwbGl0KCcgJylbMV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZFR5cGVTZXNzaW9uKElkOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5saXN0VHlwZVNlc3Npb25JZC5pbmRleE9mKElkKSAhPSAtMSl7XG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLnNwbGljZSh0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLmluZGV4T2YoSWQpLDEpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb25JZC5wdXNoKElkKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPnt7ZXJyb3J9fTwvbWF0LWVycm9yPlxcblxcbjxmb3JtICNmb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cXFwiQ2hvaXNpIGxlIEpvdXJcXFwiICNkYXlTZWxlY3Q+XFxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVxcXCJsZXQgZGF5IG9mIGRheXNcXFwiIFt2YWx1ZV09XFxcImRheS5jb2RlXFxcIiA+XFxuICAgICAgICB7e2RheS5ub219fVxcbiAgICAgIDwvbWF0LW9wdGlvbj5cXG4gICAgPC9tYXQtc2VsZWN0PlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcInN0aW1lXFxcIiBuZ01vZGVsIHBsYWNlaG9sZGVyPVxcXCJDaG9pc2l0IGwnaGV1cmVcXFwiPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPUFkZChmb3JtKT5PazwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XFxcIm9uTm9DbGljaygpXFxcIj5ObyBUaGFua3M8L2J1dHRvbj5cXG48L2Zvcm0+XFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTZWxlY3R9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R5cGVTZXNzaW9ufSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FkZC10eXBlLXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFR5cGVTZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgZGF5cyA9IHRoaXMudG9vbC5kYXlzO1xuICBwdWJsaWMgZXJyb3IgOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnZGF5U2VsZWN0Jyx7c3RhdGljOmZhbHNlfSkgZGF5U2VsZWN0OiBNYXRTZWxlY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFkZFR5cGVTZXNzaW9uQ29tcG9uZW50PixcbiAgICBwcml2YXRlIGFwaSA6IEFwaVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBBZGQoZm9ybSA6IE5nRm9ybSkge1xuICAgIGxldCB0ZW1wVHlwZVNlc3MgOiBUeXBlU2Vzc2lvbiA9IHtcbiAgICAgIElkIDogMCxcbiAgICAgIERheSA6IHRoaXMuZGF5U2VsZWN0LnZhbHVlLFxuICAgICAgVGltZSA6IGZvcm0udmFsdWUuc3RpbWVcbiAgICB9O1xuXG4gICAgdGhpcy5hcGkuYWRkVHlwZVNlc3Npb24odGVtcFR5cGVTZXNzKS5zdWJzY3JpYmUocmVzdWx0PT57XG4gICAgICBpZihyZXN1bHRbJ3Jlc3VsdCddKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WydyZXN1bHQnXSk7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxlcnJvciA9PiB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQ+XFxuICA8bWF0LWNhcmQtdGl0bGU+XFxuICAgIDxkaXY+XFxuICAgICAgRXRlcyB2b3VzIHN1ciBkZSB2b3Vsb2lyIHN1cHByaW1lclxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdj5cXG4gICAgICB7e2RhdGEuRGF5fX0ge3tkYXRhLlRpbWV9fVxcbiAgICA8L2Rpdj5cXG4gIDwvbWF0LWNhcmQtdGl0bGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJkZWwtYnV0dG9uXFxcIj5cXG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XFxcIndhcm5cXFwiIChjbGljayk9XFxcIkRlbGV0ZShkYXRhLklkKVxcXCI+IE9VSSEgPC9idXR0b24+XFxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDUlXFxcIiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+QW5udWxlcjwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9tYXQtY2FyZD5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R5cGVTZXNzaW9uLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlbC1hYm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVsLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERlbFR5cGVTZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgZXJyb3IgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERlbFR5cGVTZXNzaW9uQ29tcG9uZW50PixcbiAgICBwdWJsaWMgYXBpIDogQXBpU2VydmljZSxcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFR5cGVTZXNzaW9uLCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIERlbGV0ZShJZDogYW55KSB7XG4gICAgdGhpcy5hcGkuZGVsVHlwZVNlc3Npb24oSWQpLnN1YnNjcmliZShyZXN1bHQ9PntcbiAgICAgIGlmKHJlc3VsdFsncmVzdWx0J10pe1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+e3tlcnJvcn19PC9tYXQtZXJyb3I+XFxuPGZvcm0gI2Zvcm09XFxcIm5nRm9ybVxcXCI+XFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVxcXCJDaG9pc2kgbGUgSm91clxcXCIgI2RheVNlbGVjdCBbKHZhbHVlKV09XFxcInNlbGVjdERheVxcXCI+XFxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVxcXCJsZXQgZGF5IG9mIGRheXNcXFwiIFt2YWx1ZV09XFxcImRheS5jb2RlXFxcIiA+XFxuICAgICAgICB7e2RheS5ub219fVxcbiAgICAgIDwvbWF0LW9wdGlvbj5cXG4gICAgPC9tYXQtc2VsZWN0PlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcInN0aW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwiZGF0YS5UaW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2hvaXNpdCBsJ2hldXJlXFxcIj5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1FZGl0KGZvcm0pPk9rPC9idXR0b24+XFxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPk5vIFRoYW5rczwvYnV0dG9uPlxcbjwvZm9ybT5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R5cGVTZXNzaW9uLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VkaXQtdHlwZS1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFR5cGVTZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgZGF5cyA9IHRoaXMudG9vbC5kYXlzO1xuICBwdWJsaWMgZXJyb3IgOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnZGF5U2VsZWN0Jyx7c3RhdGljOmZhbHNlfSkgZGF5U2VsZWN0OiBNYXRTZWxlY3Q7XG4gIHB1YmxpYyBzZWxlY3REYXk6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RWRpdFR5cGVTZXNzaW9uQ29tcG9uZW50PixcbiAgICBwdWJsaWMgYXBpIDogQXBpU2VydmljZSxcbiAgICBwdWJsaWMgdG9vbCA6IFRvb2xTZXJ2aWNlLFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVHlwZVNlc3Npb24sKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdERheSA9IHRoaXMudG9vbC5pbnZEYXlTd2l0Y2godGhpcy5kYXRhLkRheSlcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgRWRpdChmb3JtIDogTmdGb3JtKSB7XG4gICAgbGV0IHRlbXBUeXBlU2VzcyA6IFR5cGVTZXNzaW9uID0ge1xuICAgICAgSWQgOiB0aGlzLmRhdGEuSWQsXG4gICAgICBEYXkgOiB0aGlzLmRheVNlbGVjdC52YWx1ZSxcbiAgICAgIFRpbWUgOiBmb3JtLnZhbHVlLnN0aW1lXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHRlbXBUeXBlU2Vzcyk7XG5cbiAgICB0aGlzLmFwaS5lZGl0VHlwZVNlc3Npb24odGVtcFR5cGVTZXNzKS5zdWJzY3JpYmUocmVzdWx0PT57XG4gICAgICBpZihyZXN1bHRbJ3Jlc3VsdCddKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0WydyZXN1bHQnXSk7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxlcnJvciA9PiB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdC10eXBlLXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJy4uL21vbnRoL2xpc3QtcGVyc29uLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIGxpc3RBYm9TZXNzaW9ue1xuICBQZXJzb25Db2w6IHN0cmluZ1tdID0gWydVc2VyJ107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxsaXN0QWJvU2Vzc2lvbj4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBVc2VyW10pIHt9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuZGVsZXRle1xcbiAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5tYXQtdGFibGV7XFxuICBtYXJnaW46IDMlIDIlIDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1hdC1oZWFkZXItY2VsbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxubWF0LWNlbGx7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1jYXJkICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiIHN0eWxlPVxcXCJtYXJnaW46IGF1dG9cXFwiPlxcbiAgPG1hdC1zcGlubmVyIHN0eWxlPVxcXCJtYXJnaW46IGF1dG9cXFwiPjwvbWF0LXNwaW5uZXI+XFxuPC9tYXQtY2FyZD5cXG5cXG48bWF0LXRhYmxlICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIiBbZGF0YVNvdXJjZV09XFxcImxpc3RUeXBlU2Vzc2lvblxcXCIgY2xhc3M9XFxcIm1hdC1lbGV2YXRpb24tejhcXFwiPlxcblxcbiAgPCEtLSBEYXRlIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJEYXlcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBKb3VyIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50LkRheX19IDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gVGltZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiVGltZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEhldXJlIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50LlRpbWV9fSA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIENhbmNlbCBTZXNzaW9uIENvbHVtbi0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFjdGlvblxcXCI+XFxuXFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XFxuICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPiB7eyBlcnJvciB9fTwvbWF0LWVycm9yPlxcbiAgICAgIE1vZGlmaWNhdGlvbiAvIFN1cHByZXNzaW9uXFxuICAgIDwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50OiBsZXQgaSA9IGluZGV4XFxcIiA+XFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJNb2RpZmljYXRpb25cXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIm9wZW5FZGl0RGlhbG9nKGkpXFxcIj5lZGl0PC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjbGFzcz1cXFwiZGVsZXRlXFxcIiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiU3VwcHJlc3Npb25cXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIm9wZW5EZWxldGVEaWFsb2coaSlcXFwiPmRlbGV0ZTwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuXFxuICAgIDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gQ2FuY2VsIFNlc3Npb24gQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWRkXFxcIj5cXG5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjbGFzcz1cXFwiZGVsZXRlXFxcIiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiQWpvdXRcXFwiIChjbGljayk9XFxcIm9wZW5EaWFsb2coKVxcXCI+XFxuICAgICAgICA8c3Bhbj5Bam91dCBkJ3VuZSBzZXNzaW9uIDwvc3Bhbj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiA+YWRkPC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC9tYXQtaGVhZGVyLWNlbGw+XFxuXFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnQ6IGxldCBpID0gaW5kZXhcXFwiID5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIk1vZGlmaWNhdGlvblxcXCI+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwib3Blbkxpc3REaWFsb2coaSlcXFwiPmluZm9ybWF0aW9uPC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XFxcImRpc3BsYXllZENvbHVtbnNcXFwiPjwvbWF0LWhlYWRlci1yb3c+XFxuICA8bWF0LXJvdyAqbWF0Um93RGVmPVxcXCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1xcXCI+PC9tYXQtcm93PlxcblxcbjwvbWF0LXRhYmxlPlxcblwiIiwiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQgeyBUeXBlU2Vzc2lvbn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge0FkZFR5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICcuL2FkZC10eXBlLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7RWRpdFR5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICcuL2VkaXQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge2xpc3RBYm9TZXNzaW9ufSBmcm9tICcuL2xpc3QtYWJvLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7RGVsVHlwZVNlc3Npb25Db21wb25lbnR9IGZyb20gJy4vZGVsLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10eXBlLXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUeXBlU2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBsaXN0VHlwZVNlc3Npb246IFR5cGVTZXNzaW9uW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ0RheScsJ1RpbWUnLCdBY3Rpb24nLCdBZGQnXTtcbiAgZXJyb3I6IGFueTtcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaSA6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGRpYWxvZyA6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saXN0VHlwZVNlc3Npb24gPSBbXTtcbiAgICB0aGlzLmFwaS5nZXRUeXBlU2Vzc2lvbigpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkodXJsZGF0YSk7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXCJpZFR5cGVTZXNzaW9uXCIvZ2ksIFwiXFxcImlkUGVyc29uXFxcIlwiKTtcblxuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb24gPSB0aGlzLnRvb2wuaW5pdFR5cGVTZXNzaW9uKHN0cik7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uID0gW107XG4gICAgdGhpcy5hcGkuZ2V0VHlwZVNlc3Npb24oKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHVybGRhdGEpO1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1wiaWRUeXBlU2Vzc2lvblwiL2dpLCBcIlxcXCJpZFBlcnNvblxcXCJcIik7XG5cbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uID0gdGhpcy50b29sLmluaXRUeXBlU2Vzc2lvbihzdHIpO1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBvcGVuRGlhbG9nKCl7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBZGRUeXBlU2Vzc2lvbkNvbXBvbmVudCwge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5FZGl0RGlhbG9nKElkIDogbnVtYmVyKXtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEVkaXRUeXBlU2Vzc2lvbkNvbXBvbmVudCwge1xuICAgICAgd2lkdGggOiAnMjUwcHgnLFxuICAgICAgZGF0YSA6IHRoaXMubGlzdFR5cGVTZXNzaW9uW0lkXVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuTGlzdERpYWxvZyhJZDogYW55KSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihsaXN0QWJvU2Vzc2lvbiwge1xuICAgICAgd2lkdGggOiAnMjUwcHgnLFxuICAgICAgZGF0YSA6IHRoaXMubGlzdFR5cGVTZXNzaW9uW0lkXS5QZXJzb25cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5EZWxldGVEaWFsb2coSWQgOiBhbnkpe1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGVsVHlwZVNlc3Npb25Db21wb25lbnQsIHtcbiAgICAgIHdpZHRoIDogJzU1MHB4JyxcbiAgICAgIGRhdGEgOiB0aGlzLmxpc3RUeXBlU2Vzc2lvbltJZF1cbiAgICB9KTtcbiAgfVxuXG5cbn1cbiIsIi8vIFRoaXMgZmlsZSBjYW4gYmUgcmVwbGFjZWQgZHVyaW5nIGJ1aWxkIGJ5IHVzaW5nIHRoZSBgZmlsZVJlcGxhY2VtZW50c2AgYXJyYXkuXG4vLyBgbmcgYnVpbGQgLS1wcm9kYCByZXBsYWNlcyBgZW52aXJvbm1lbnQudHNgIHdpdGggYGVudmlyb25tZW50LnByb2QudHNgLlxuLy8gVGhlIGxpc3Qgb2YgZmlsZSByZXBsYWNlbWVudHMgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG4vKlxuICogRm9yIGVhc2llciBkZWJ1Z2dpbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGNhbiBpbXBvcnQgdGhlIGZvbGxvd2luZyBmaWxlXG4gKiB0byBpZ25vcmUgem9uZSByZWxhdGVkIGVycm9yIHN0YWNrIGZyYW1lcyBzdWNoIGFzIGB6b25lLnJ1bmAsIGB6b25lRGVsZWdhdGUuaW52b2tlVGFza2AuXG4gKlxuICogVGhpcyBpbXBvcnQgc2hvdWxkIGJlIGNvbW1lbnRlZCBvdXQgaW4gcHJvZHVjdGlvbiBtb2RlIGJlY2F1c2UgaXQgd2lsbCBoYXZlIGEgbmVnYXRpdmUgaW1wYWN0XG4gKiBvbiBwZXJmb3JtYW5jZSBpZiBhbiBlcnJvciBpcyB0aHJvd24uXG4gKi9cbi8vIGltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUtZXJyb3InOyAgLy8gSW5jbHVkZWQgd2l0aCBBbmd1bGFyIENMSS5cbiIsImltcG9ydCAnaGFtbWVyanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==