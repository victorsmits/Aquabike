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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vYWRtaW4tYWJvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vZGVsLWFiby5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tYWJvL2RlbC1hYm8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1hYm8vZWRpdC1hYm8tdHlwZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FkbWluLWNyZWF0ZS1zZXNzaW9uL2FkbWluLWNyZWF0ZS1zZXNzaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tY3JlYXRlLXNlc3Npb24vY29uZmlybS1nZW5lcmF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4tc2Vzc2lvbi9hZG1pbi1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudG5zLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50bnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50bnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9hdXRvLWdlbmVyYXRlZC9hdXRvLWdlbmVyYXRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2d1YXJkL2FkbWluLmd1YXJkLnRzIiwid2VicGFjazovLy8uL2FwcC9ndWFyZC9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tb250aC9saXN0LXBlcnNvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9tb250aC9tb250aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlL2FwaS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZS90b29sLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9hZGQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vYWRkLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9kZWwtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vZGVsLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi9lZGl0LXR5cGUtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL2VkaXQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvdHlwZS1zZXNzaW9uL2xpc3QtYWJvLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC90eXBlLXNlc3Npb24vdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3R5cGUtc2Vzc2lvbi90eXBlLXNlc3Npb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLCtHQUFpRSxtQkFBTyxDQUFDLDRIQUEwRjtBQUNuSyxnRUFBZ0UsbUJBQU8sQ0FBQyw0SEFBMEY7QUFDbEssaUVBQWlFLG1CQUFPLENBQUMsNEhBQTBGO0FBQ25LLGdFQUFnRSxtQkFBTyxDQUFDLDRIQUEwRixHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSxpRUFBaUUsRUFBRSxpRUFBaUUsRUFBRSwySkFBMko7QUFDcGdCLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFt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QVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBU3pDLFdBQU0sR0FBRztZQUNQLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLE9BQU8sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3pCLEVBQUMsSUFBSSxFQUFHLEtBQUssRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3ZCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzNCLEVBQUMsSUFBSSxFQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFHLFdBQVcsRUFBRSxHQUFHLEVBQUcsQ0FBQyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFHLFNBQVMsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFDO1NBQzlCLENBQUM7UUFRQSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUks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QyxVQUFVLEVBQUU7QUFDVDtDQUNsQjtBQUVELHNCQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLFFBQVU7S0FDaEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQVkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcblRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLiBcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLmVkaXR7XFxuICB3aWR0aDogMjBweDtcXG59XFxubWF0LXRhYmxle1xcbiAgbWFyZ2luIDogYXV0byA1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1hdC1zZWxlY3R7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuXFxubWF0LWNlbGx7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbm1hdC1oZWFkZXItY2VsbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYXQtY29sdW1uLUFjdGlvbntcXG4gIGZsZXg6IDAgMCAyMCU7XFxufVxcblxcbi5kZWwtYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+XFxuICA8bWF0LXNwaW5uZXIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+PC9tYXQtc3Bpbm5lcj5cXG48L21hdC1jYXJkPlxcblxcbjxtYXQtdGFibGUgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiIFtkYXRhU291cmNlXT1cXFwiZGF0YVNvdXJjZVxcXCIgY2xhc3M9XFxcIm1hdC1lbGV2YXRpb24tejhcXFwiIG1hdFNvcnQ+XFxuXFxuICA8IS0tIExhc3ROYW1lIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJMYXN0TmFtZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPk5vbTwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQubGFzdE5hbWV9fTwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gRmlyc3ROYW1lIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJGaXJzdE5hbWVcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5QcmVub208L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+e3tlbGVtZW50LmZpcnN0TmFtZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBBYm9ubmVtZW50IENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJBYm9ubmVtZW50XFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+QWJvbm5lbWVudDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuYWJvbm5lbWVudH19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBBYm9ubmVtZW50IFR5cGUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFib1R5cGVcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5UeXBlIEFib25uZW1lbnQ8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+e3tlbGVtZW50LkFib1R5cGV9fTwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gRGF5IENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJEYXlcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5Kb3VyPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPnt7ZWxlbWVudC5EYXl9fTwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gUmVTdWJzY3JpYmUgQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWN0aW9uXFxcIj5cXG5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj48L21hdC1oZWFkZXItY2VsbD5cXG5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+XFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJSZW5ld1xcXCI+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwicmVTdWJjcmliZShlbGVtZW50KVxcXCI+cmVwbGF5PC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkVkaXRcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogMTAlXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJvcGVuRGlhbG9nKGVsZW1lbnQuZmlyc3ROYW1lLFxcbiAgICAgICAgZWxlbWVudC5sYXN0TmFtZSxlbGVtZW50LmlkLGVsZW1lbnQuQWJvVHlwZSlcXFwiPlxcbiAgICAgICAgICBlZGl0XFxuICAgICAgICA8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiRGVsZXRlXFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDEwJVxcXCI+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwib3BlbkRlbGV0ZURpYWxvZyhlbGVtZW50KVxcXCI+XFxuICAgICAgICAgIGRlbGV0ZVxcbiAgICAgICAgPC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC9tYXQtY2VsbD5cXG5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcblxcbiAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XFxcImRpc3BsYXllZENvbHVtbnNcXFwiPjwvbWF0LWhlYWRlci1yb3c+XFxuICA8bWF0LXJvdyAqbWF0Um93RGVmPVxcXCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1xcXCI+XFxuICA8L21hdC1yb3c+XFxuXFxuPC9tYXQtdGFibGU+XFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQge2VkaXRBYm8sIFVzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXRTbmFja0Jhcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHtEZWxBYm9Db21wb25lbnR9IGZyb20gJy4vZGVsLWFiby5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbiBleHRlbmRzIFVzZXIge1xuICBBYm9UeXBlIDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0LWFiby10eXBlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtYWJvLXR5cGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTaG93RWRpdEFib1R5cGUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxTaG93RWRpdEFib1R5cGU+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogZWRpdEFibykge31cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG5cbi8vdG9kbyBkaXNwbGF5IHJlbmV3ICsgZWRpdCBlcnJvclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWRtaW4tYWJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLWFiby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkbWluLWFiby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5BYm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgRXJyb3I6IHN0cmluZztcbiAgcHVibGljIGRhdGE6IEpTT05bXSA9IFtdO1xuICBwdWJsaWMgbGlzdFVzZXI6IFBlcnNvbltdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydMYXN0TmFtZScsICdGaXJzdE5hbWUnLCAnQWJvbm5lbWVudCcsICdBYm9UeXBlJywgJ0FjdGlvbiddO1xuICBwdWJsaWMgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFBlcnNvbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sOiBUb29sU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG4gIH1cblxuICBAVmlld0NoaWxkKE1hdFNvcnQsIHtzdGF0aWM6IHRydWV9KSBzb3J0OiBNYXRTb3J0O1xuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBpLmdldEFib0pzb24oKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICB0aGlzLmluaXREYXRhKHVybGRhdGEpXG4gICAgfSlcbiAgfVxuXG4gIGluaXREYXRhKHVybGRhdGE6IE9iamVjdCkge1xuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeSh1cmxkYXRhKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXCJkYXlcIi9naSwgXCJcXFwiRGF5XFxcIlwiKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXCJ0aW1lXCIvZ2ksIFwiXFxcIlRpbWVcXFwiXCIpO1xuICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2Uoc3RyKTtcblxuICAgIHRoaXMubGlzdFVzZXIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RVc2VyLnB1c2goe1xuICAgICAgICBpZDogdGhpcy5kYXRhW2ldW1wiaWRcIl0sXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLmRhdGFbaV1bXCJVc2VybmFtZVwiXSxcbiAgICAgICAgbGFzdE5hbWU6IHRoaXMuZGF0YVtpXVtcIkxhc3ROYW1lXCJdLFxuICAgICAgICBmaXJzdE5hbWU6IHRoaXMuZGF0YVtpXVtcIkZpcnN0TmFtZVwiXSxcbiAgICAgICAgYWJvbm5lbWVudDogdGhpcy5kYXRhW2ldW1wiQWJvbm5lbWVudFwiXSxcbiAgICAgICAgdHlwZVNlc3Npb25zOiB0aGlzLmRhdGFbaV1bXCJJZFR5cGVTZXNzaW9uXCJdLmxlbmd0aCA+IDAgPyB0aGlzLnRvb2wuaW5pdFR5cGVTZXNzaW9uKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YVtpXVtcIklkVHlwZVNlc3Npb25cIl0pKSA6IFtdLFxuICAgICAgICBFbWFpbDogdGhpcy5kYXRhW2ldW1wiRW1haWxcIl0sXG4gICAgICAgIFNlc3Npb246IFtdLFxuICAgICAgICBSb2xlOiB0aGlzLmRhdGFbaV1bXCJyb2xlc1wiXSxcbiAgICAgICAgQWJvVHlwZTogdGhpcy5kYXRhW2ldW1wiQWJvVHlwZVwiXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmxpc3RVc2VyKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gIH1cblxuXG4gIHJlU3ViY3JpYmUodXNlciA6IFVzZXIpIHtcbiAgICB0aGlzLmFwaS5wb3N0QWJvUmVuZXcodXNlci5pZCkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgaWYgKHVybGRhdGFbXCJyZXN1bHRcIl0pIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICBsZXQgYWN0aW9uID0gdXNlci5maXJzdE5hbWUgKyBcIiBcIiArIHVzZXIubGFzdE5hbWU7XG4gICAgICAgIHRoaXMub3BlblNuYWNrQmFyKFwiQWJvbm5lbWVudCBhY3R1YWxpc2VyIHBvdXJcIiwgYWN0aW9uKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbkRpYWxvZyhmbmFtZSwgbG5hbWUsIGlkLCBhYm9UeXBlKTogdm9pZCB7XG4gICAgbGV0IG5ld0Fib1R5cGU6IGVkaXRBYm8gPSB7XG4gICAgICBGaXJzdE5hbWU6IGZuYW1lLFxuICAgICAgTGFzdE5hbWU6IGxuYW1lLFxuICAgICAgSWQ6IGlkLFxuICAgICAgYWJvVHlwZTogYWJvVHlwZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihTaG93RWRpdEFib1R5cGUsIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogbmV3QWJvVHlwZVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBuZXdBYm9UeXBlLmFib1R5cGUgPSByZXN1bHQ7XG4gICAgICB0aGlzLmFwaS5lZGl0QWJvVHlwZShuZXdBYm9UeXBlKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICAgIGlmICh1cmxkYXRhW1wicmVzdWx0XCJdKSB7XG4gICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5EZWxldGVEaWFsb2codXNlcjogVXNlcikge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGVsQWJvQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzU1MHB4JyxcbiAgICAgIGRhdGE6IHVzZXJcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5uZ09uSW5pdCgpXG4gICAgfSk7XG4gIH1cblxuICBvcGVuU25hY2tCYXIobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW4obWVzc2FnZSwgYWN0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQ+XFxuICA8bWF0LWNhcmQtdGl0bGU+XFxuICAgIDxkaXY+XFxuICAgICAgRXRlcyB2b3VzIHN1ciBkZSB2b3Vsb2lyIHN1cHByaW1lclxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdj5cXG4gICAgICB7e2RhdGEubGFzdE5hbWV9fSB7e2RhdGEuZmlyc3ROYW1lfX1cXG4gICAgPC9kaXY+XFxuICA8L21hdC1jYXJkLXRpdGxlPlxcbiAgPGRpdiBjbGFzcz1cXFwiZGVsLWJ1dHRvblxcXCI+XFxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVxcXCJ3YXJuXFxcIiAoY2xpY2spPVxcXCJEZWxldGUoZGF0YS5pZClcXFwiPiBPVUkhIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiA1JVxcXCIgKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPkFubnVsZXI8L2J1dHRvbj5cXG4gIDwvZGl2PlxcbjwvbWF0LWNhcmQ+XFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hcGkuc2VydmljZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUeXBlU2Vzc2lvbiwgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZWwtYWJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbC1hYm8uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxBYm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBlcnJvciA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGVsQWJvQ29tcG9uZW50PixcbiAgICBwdWJsaWMgYXBpIDogQXBpU2VydmljZSxcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFVzZXIsKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgRGVsZXRlKGlkOiBhbnkpIHtcbiAgICB0aGlzLmFwaS5kZWxVc2VyKGlkKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxlcnJvciA9PiB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8aDEgbWF0LWRpYWxvZy10aXRsZT5DaGFuZ2VyIGxlIHR5cGUgZCdhYm9ubmVtZW50IGRlIHt7ZGF0YS5MYXN0TmFtZX19IHt7ZGF0YS5GaXJzdE5hbWV9fTwvaDE+XFxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XFxuICA8cD5RdWVsbGUgdHlwZSBkJ2Fib25uZW1lbnQ8L3A+XFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cXFwiZGF0YS5hYm9UeXBlXFxcIj5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuPC9kaXY+XFxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XFxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPk5vIFRoYW5rczwvYnV0dG9uPlxcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cXFwiZGF0YS5hYm9UeXBlXFxcIiBjZGtGb2N1c0luaXRpYWw+T2s8L2J1dHRvbj5cXG48L2Rpdj5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwibWF0LWNhcmR7XFxuICB3aWR0aDogMjAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5tYXQtZm9ybS1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxubWF0LXNwaW5uZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1jYXJkPlxcbiAgPGZvcm0gKHN1Ym1pdCk9XFxcIm9uQ3JlYXRlKHNpZ251cEZvcm0pXFxcIiAjc2lnbnVwRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPnt7ZXJyb3J9fTwvbWF0LWVycm9yPlxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGlucHV0IG1hdElucHV0IG5nTW9kZWwgW21hdERhdGVwaWNrZXJdPVxcXCJwaWNrZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJDaG9vc2UgYSBkYXRlXFxcIiBuYW1lPVxcXCJkYXRlXFxcIiByZXF1aXJlZD5cXG4gICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cXFwicGlja2VyXFxcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cXG4gICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbjwhLS0gICAgPG1hdC1mb3JtLWZpZWxkPi0tPlxcbjwhLS0gICAgICA8aW5wdXQgbWF0SW5wdXQgbmdNb2RlbCBwbGFjZWhvbGRlcj1cXFwiUGljayBhIHRpbWVcXFwiIGFyaWEtbGFiZWw9XFxcInBpY2sgYSB0aW1lXFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgW25neFRpbWVwaWNrZXJdPVxcXCJmdWxsVGltZVxcXCIgW2Zvcm1hdF09XFxcIjI0XFxcIiBuYW1lPVxcXCJ0aW1lXFxcIiByZXF1aXJlZD4tLT5cXG48IS0tICAgICAgPG5neC1tYXRlcmlhbC10aW1lcGlja2VyICNmdWxsVGltZSBbdGhlbWVdPVxcXCJkYXJrVGhlbWVcXFwiPjwvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXI+LS0+XFxuPCEtLSAgICA8L21hdC1mb3JtLWZpZWxkPi0tPlxcblxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGlucHV0IG1hdElucHV0IG5nTW9kZWwgbmFtZT1cXFwiYmlrZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk51bWJlciBvZiBiaWtlXFxcIlxcbiAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJOdW1iZXIgb2YgYmlrZVxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiByZXF1aXJlZD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5BZGQ8L2J1dHRvbj5cXG5cXG4gIDwvZm9ybT5cXG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiIChjbGljayk9XFxcIm9wZW5EaWFsb2coKVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwcHhcXFwiPlxcbiAgICBHZW5lcmF0aW9uIGF1dG9cXG4gIDwvYnV0dG9uPlxcbjwvbWF0LWNhcmQ+XFxuXFxuXFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZX0gZnJvbSBcIm5neC1tYXRlcmlhbC10aW1lcGlja2VyXCI7XG5pbXBvcnQge1Nlc3Npb25zLCBUeXBlU2Vzc2lvbn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZS9hcGkuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5cbi8vdG9kbyBkaXNwbGF5IGNyZWF0ZSBlcnJvclxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbmZpcm0tZ2VuZXJhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWdlbmVyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maW1HZW5lcmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBwdWJsaWMgZXJyb3IgOiBzdHJpbmc7XG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGlzdFR5cGVTZXNzaW9uOiBUeXBlU2Vzc2lvbltdPVtdO1xuICBwcml2YXRlIGxpc3RUeXBlU2Vzc2lvbklkOiBudW1iZXJbXT1bXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmltR2VuZXJhdGlvbkNvbXBvbmVudD4sXG4gICAgcHVibGljIGFwaSA6IEFwaVNlcnZpY2UsXG4gICAgcHVibGljIHRvb2wgOiBUb29sU2VydmljZSxcbiAgICBwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFwaS5nZXRUeXBlU2Vzc2lvbigpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXJsZGF0YSkpO1xuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb24gPSBbXTtcbiAgICAgIGZvcihsZXQgdHlwZSBvZiBkYXRhKXtcbiAgICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb24gLnB1c2goe1xuICAgICAgICAgIElkIDogdHlwZVtcImlkXCJdLFxuICAgICAgICAgIERheSA6IHRoaXMudG9vbC5kYXlTd2l0aCh0eXBlW1wiRGF5XCJdKSxcbiAgICAgICAgICBUaW1lIDogdHlwZVtcIlRpbWVcIl0uc3BsaXQoJyAnKVsxXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkVHlwZVNlc3Npb24oSWQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLmluZGV4T2YoSWQpICE9IC0xKXtcbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuc3BsaWNlKHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuaW5kZXhPZihJZCksMSk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLnB1c2goSWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVTZXNzaW9uKGZvcm0gOiBOZ0Zvcm0pe1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFwaS5wb3N0R2VuZXJhdGVTZXNzaW9uQXV0byhmb3JtLnZhbHVlLnllYXIsdGhpcy5saXN0VHlwZVNlc3Npb25JZCw5KS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVsncmVzdWx0J10pe1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sZXJyb3IgPT57XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3JcbiAgICB9ICk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkbWluLWNyZWF0ZS1zZXNzaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLWNyZWF0ZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRtaW4tY3JlYXRlLXNlc3Npb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQ3JlYXRlU2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBlcnJvcjogYW55O1xuXG4gIGRhcmtUaGVtZTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWUgPSB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBib2R5QmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmYnXG4gICAgfSxcbiAgICBkaWFsOiB7XG4gICAgICBkaWFsQmFja2dyb3VuZENvbG9yOiAnIzU1NScsXG4gICAgfSxcbiAgICBjbG9ja0ZhY2U6IHtcbiAgICAgIGNsb2NrRmFjZUJhY2tncm91bmRDb2xvcjogJyM1NTUnLFxuICAgICAgY2xvY2tIYW5kQ29sb3I6ICcjOWZiZDkwJyxcbiAgICAgIGNsb2NrRmFjZVRpbWVJbmFjdGl2ZUNvbG9yOiAnI2ZmZidcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGRpYWxvZyA6IE1hdERpYWxvZykgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5nZW5lcmF0ZVNlc3Npb24oNSk7XG4gIH1cblxuICBvbkNyZWF0ZShmb3JtOiBOZ0Zvcm0pIHtcbiAgICBsZXQgZCA9IG5ldyBEYXRlKGZvcm0udmFsdWUuZGF0ZSk7XG4gICAgbGV0IG5ld1Nlc3MgOiBTZXNzaW9ucyA9e1xuICAgICAgRGF0ZSA6IGQudG9EYXRlU3RyaW5nKCksXG4gICAgICBUaW1lIDogZm9ybS52YWx1ZS50aW1lLFxuICAgICAgQmlrZSA6IGZvcm0udmFsdWUuYmlrZSxcbiAgICAgIENhbmNlbCA6IGZhbHNlLFxuICAgICAgSWQgOiAwXG4gICAgfTtcblxuICAgIHRoaXMuYXBpLmNyZWF0ZU5ld1Nlc3MobmV3U2Vzcykuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGlmKHVybGRhdGFbJ3Jlc3VsdCddKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhZG1pbi9zZXNzaW9uJ10pXG4gICAgICB9XG4gICAgfSxlcnJvciA9PntcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvclxuICAgIH0gKTtcbiAgfVxuXG4gIC8vdG9kbyBwb3AgdXAgdG8gY29uZmlybSA1IHllYXJzIGdlbmVyYXRpb25cblxuICBvcGVuRGlhbG9nKCl7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maW1HZW5lcmF0aW9uQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjbG9zZVwiKTtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtZXJyb3IgKm5nSWY9XFxcImVycm9yXFxcIj57e2Vycm9yfX08L21hdC1lcnJvcj5cXG48ZGl2ICpuZ0lmPVxcXCIhaXNMb2FkaW5nIDsgZWxzZSBsb2FkaW5nXFxcIj5cXG4gIDxoMz5Hw6luw6lyYXRpb24gYXV0b21hdGlxdWUgZGUgc2Vzc2lvbnM8L2gzPlxcblxcbiAgPGZvcm0gI2Zvcm09XFxcIm5nRm9ybVxcXCI+XFxuXFxuICAgIDxuZy1jb250YWluZXI+XFxuICAgICAgPHVsICpuZ0Zvcj1cXFwibGV0IHNlc3Npb24gb2YgbGlzdFR5cGVTZXNzaW9uXFxcIiA+XFxuICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVxcXCJhZGRUeXBlU2Vzc2lvbihzZXNzaW9uLklkKVxcXCI+XFxuICAgICAgICAgIHt7c2Vzc2lvbi5EYXl9fSB7e3Nlc3Npb24uVGltZX19XFxuICAgICAgICA8L21hdC1jaGVja2JveD5cXG4gICAgICA8L3VsPlxcbiAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxsYWJlbD5cXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cXFwibm9tYnJlIGQnYW5uw6llXFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG5nTW9kZWwgdmFsdWU9XFxcIjVcXFwiIG5hbWU9XFxcInllYXJcXFwiPlxcbiAgICAgIDwvbGFiZWw+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiIChjbGljayk9XFxcImdlbmVyYXRlU2Vzc2lvbihmb3JtKVxcXCI+IGplIGNvbmZpcm1lIGxhIGfDqW7DqXJhdGlvbiA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwcHhcXFwiIChjbGljayk9XFxcIm9uTm9DbGljaygpXFxcIj4gYW5udWxlciA8L2J1dHRvbj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cXG48bmctdGVtcGxhdGUgI2xvYWRpbmc+XFxuICA8ZGl2IHN0eWxlPVxcXCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcXCI+XFxuICAgIDxtYXQtc3Bpbm5lcj48L21hdC1zcGlubmVyPlxcbiAgPC9kaXY+XFxuPC9uZy10ZW1wbGF0ZT5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiLmRlbGV0ZXtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG4uc2VsZWN0e1xcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxubWF0LXNlbGVjdCwgaW5wdXR7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5tYXQtdGFie1xcbiAgd2lkdGggOiAxMDAlXFxufVxcbmZvcm17XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbm1hdC1jYXJke1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIlxcbjxtYXQtZ3JpZC1saXN0IGNvbHM9XFxcIjVcXFwiIHJvd0hlaWdodD1cXFwiMTAwXFxcIj5cXG4gIDxtYXQtZ3JpZC10aWxlPjwvbWF0LWdyaWQtdGlsZT5cXG5cXG4gIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XFxcIjFcXFwiPlxcbiAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XFxcIlPDqWxlY3Rpb25uw6kgbGUgbW9pc1xcXCIgI21hdFNlbGVjdCBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiPlxcbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVxcXCJsZXQgbW9udGggb2YgbW9udGhzXFxcIiBbdmFsdWVdPVxcXCJtb250aC5udW1cXFwiID5cXG4gICAgICAgICAge3ttb250aC5uYW1lfX1cXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cXG4gICAgICA8L21hdC1zZWxlY3Q+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVxcXCIxXFxcIj5cXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVxcXCJzZWxlY3RcXFwiPlxcbiAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVxcXCJTw6lsZWN0aW9ubsOpIGwnYW5uw6llXFxcIiAjbWF0U2VsZWN0MiBbKG5nTW9kZWwpXT1cXFwieWVhclxcXCI+XFxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XFxcImxldCB5IG9mIGxpc3RZZWFyXFxcIiBbdmFsdWVdPVxcXCJ5XFxcIiA+XFxuICAgICAgICAgIHt7eX19XFxuICAgICAgICA8L21hdC1vcHRpb24+XFxuICAgICAgPC9tYXQtc2VsZWN0PlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcbiAgPC9tYXQtZ3JpZC10aWxlPlxcblxcbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cXFwiMVxcXCI+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8bGFiZWw+XFxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwibm9tYnJlIGRlIHbDqWxvIGRpc3BvbmlibGVcXFwiICNuYnJCaWtlXFxuICAgICAgICAgICAgICAgW3ZhbHVlXT1cXFwibmJyRGlzcEJpa2VcXFwiID5cXG4gICAgICA8L2xhYmVsPlxcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxcbiAgPC9tYXQtZ3JpZC10aWxlPlxcblxcbiAgPG1hdC1ncmlkLXRpbGU+PC9tYXQtZ3JpZC10aWxlPlxcblxcbjwvbWF0LWdyaWQtbGlzdD5cXG5cXG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG5cXG48bWF0LWNhcmQgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+XFxuICA8bWF0LXNwaW5uZXIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+PC9tYXQtc3Bpbm5lcj5cXG48L21hdC1jYXJkPlxcblxcbjxtYXQtdGFibGUgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiIFtkYXRhU291cmNlXT1cXFwiZGF0YVNvdXJjZVxcXCIgY2xhc3M9XFxcIm1hdC1lbGV2YXRpb24tejhcXFwiIG1hdFNvcnQ+XFxuXFxuICA8IS0tIERhdGUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIklkXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IElEIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50LklkfX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBEYXRlIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJEYXRlXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IERhdGUgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuRGF0ZX19IDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gVGltZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiVGltZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBIZXVyZSA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+IHt7ZWxlbWVudC5UaW1lfX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBCaWtlIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJCaWtlXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IFZlbG8gbGlicmUgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuQmlrZX19IDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gU3RhdHVzIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJTdGF0dXNcXFwiPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb3VycyBjb25maXJtw6kgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPlxcbiAgICAgIDxtYXQtaWNvbiAqbmdJZj1cXFwiIWVsZW1lbnQuQ2FuY2VsOyBlbHNlIGNhbmNlbFxcXCIgW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzonZ3JlZW4nfVxcXCIgbWF0VG9vbHRpcD1cXFwiQ29uZmlybcOpXFxcIj5jaGVjazwvbWF0LWljb24+XFxuICAgICAgPG5nLXRlbXBsYXRlICNjYW5jZWw+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzoncmVkJ31cXFwiIG1hdFRvb2x0aXA9XFxcIkFubnVsw6lcXFwiPmNhbmNlbDwvbWF0LWljb24+XFxuICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBMaXN0IGluc2NyaXQgQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiSW5mb1xcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IExpc3QgaW5zY3JpdCA8L21hdC1oZWFkZXItY2VsbD5cXG5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudDtsZXQgaSA9IGluZGV4XFxcIiA+XFxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJMaXN0IGluc2NyaXRcXFwiPlxcbiAgICAgICAgPG1hdC1pY29uIChjbGljayk9XFxcIm9wZW5EaWFsb2coaSlcXFwiIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiPmluZm88L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L21hdC1jZWxsPlxcblxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIENhbmNlbCBTZXNzaW9uIENvbHVtbi0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkFjdGlvblxcXCI+XFxuXFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XFxuICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwiZXJyb3JcXFwiPiB7eyBlcnJvciB9fTwvbWF0LWVycm9yPlxcbiAgICAgIEFubnVsYXRpb24gLyBTdXBwcmVzc2lvblxcbiAgICA8L21hdC1oZWFkZXItY2VsbD5cXG5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCIgPlxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiQW5udWxlclxcXCJcXG4gICAgICAgICAgICAgICpuZ0lmPVxcXCIhZWxlbWVudC5DYW5jZWw7IGVsc2UgcmVwbGF5QnRuXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJDYW5jZWwoZWxlbWVudC5JZClcXFwiPlxcbiAgICAgICAgICBjYW5jZWxcXG4gICAgICAgIDwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgPG5nLXRlbXBsYXRlICNyZXBsYXlCdG4+XFxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIlJlY3LDqWVyXFxcIj5cXG4gICAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcIlJlcGxheShlbGVtZW50LklkKVxcXCI+cmVwbGF5PC9tYXQtaWNvbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY2xhc3M9XFxcImRlbGV0ZVxcXCIgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIlN1cHByaW1lclxcXCI+XFxuICAgICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJEZWxldGUoZWxlbWVudC5JZClcXFwiPmRlbGV0ZTwvbWF0LWljb24+XFxuICAgICAgICA8L2J1dHRvbj5cXG5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cXFwiZGlzcGxheWVkQ29sdW1uc1xcXCI+PC9tYXQtaGVhZGVyLXJvdz5cXG4gIDxtYXQtcm93ICptYXRSb3dEZWY9XFxcImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XFxcIj48L21hdC1yb3c+XFxuXFxuICA8L21hdC10YWJsZT5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Nlc3Npb25zfSBmcm9tIFwiLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGVcIjtcbmltcG9ydCB7TGlzdFBlcnNvbkRpYWxvZ30gZnJvbSBcIi4uL21vbnRoL21vbnRoLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xuaW1wb3J0IHtNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXRJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uICB7XG4gIHVzZXIgOiBKU09OO1xufVxuXG4vL3RvZG8gZGlzcGxheSBjYW5jZWwgKyBkZWxldGUgKyByZWNyZWF0ZSBlcnJvclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWRtaW4tc2Vzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi1zZXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRtaW4tc2Vzc2lvbi5jb21wb25lbnQuY3NzJywnLi4vbW9udGgvbW9udGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluU2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBkYXRhOiBKU09OW109W107XG4gIHB1YmxpYyB2YWx1ZSA6IG51bWJlciA9IG51bGw7XG4gIHB1YmxpYyBsaXN0U2Vzc2lvbiA6IFNlc3Npb25zW109W107XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8U2Vzc2lvbnM+O1xuICBwdWJsaWMgbGlzdFBlcnNvbiA6IFBlcnNvbltdPVtdO1xuICBwdWJsaWMgbGlzdFllYXI6IG51bWJlcltdPVtdO1xuICBwdWJsaWMgeWVhcjogbnVtYmVyO1xuICBwdWJsaWMgbmJyRGlzcEJpa2U6IFN0cmluZyA9IFwiOVwiO1xuICBwdWJsaWMgZXJyb3I6IFN0cmluZztcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydEYXRlJywgJ1RpbWUnLCAnQmlrZScsICdTdGF0dXMnLCdJbmZvJywnQWN0aW9uJ107XG5cbiAgQFZpZXdDaGlsZCgnbWF0U2VsZWN0Jyx7c3RhdGljOmZhbHNlfSkgbWF0U2VsZWN0IDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKE1hdElucHV0LHtzdGF0aWM6ZmFsc2V9KSBuYnJCaWtlIDogTWF0SW5wdXQ7XG4gIEBWaWV3Q2hpbGQoJ21hdFNlbGVjdDInLHtzdGF0aWM6ZmFsc2V9KSBtYXRTZWxlY3QyIDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKE1hdFNvcnQsIHtzdGF0aWM6IHRydWV9KSBzb3J0OiBNYXRTb3J0O1xuXG4gIG1vbnRocyA9IFtcbiAgICB7bmFtZSA6IFwiamFudmllclwiLCBudW0gOiAxfSxcbiAgICB7bmFtZSA6IFwiZmV2cmlyZXJcIiwgbnVtIDogMn0sXG4gICAge25hbWUgOiBcIm1hcnNcIiwgbnVtIDogM30sXG4gICAge25hbWUgOiBcImF2cmlsXCIsIG51bSA6IDR9LFxuICAgIHtuYW1lIDogXCJtYWlcIiwgbnVtIDogNX0sXG4gICAge25hbWUgOiBcImp1aW5cIiwgbnVtIDogNn0sXG4gICAge25hbWUgOiBcImp1aWxsZXRcIiwgbnVtIDogN30sXG4gICAge25hbWUgOiBcImFvdXRcIiwgbnVtIDogOH0sXG4gICAge25hbWUgOiBcInNlcHRlbWJyZVwiLCBudW0gOiA5fSxcbiAgICB7bmFtZSA6IFwib2N0b2JyZVwiLCBudW0gOiAxMH0sXG4gICAge25hbWUgOiBcIm5vdmVtYnJlXCIsIG51bSA6IDExfSxcbiAgICB7bmFtZSA6IFwiZGVjZW1icmVcIiwgbnVtIDogMTJ9LFxuICBdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHB1YmxpYyB0b29sIDogVG9vbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBtID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnZhbHVlID0gbS5nZXRNb250aCgpKzE7XG4gICAgdGhpcy55ZWFyID0gbS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZ2V0WWVhcigpO1xuICAgIHRoaXMuYXBpLmdldE1vbnRoSnNvbih0aGlzLnZhbHVlLHRoaXMueWVhci50b1N0cmluZygpKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICB0aGlzLmluaXRTZXNzaW9uKHVybGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5tYXRTZWxlY3QudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXBpLmdldE1vbnRoSnNvbih2YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmluaXRTZXNzaW9uKHVybGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hdFNlbGVjdDIudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMueWVhciA9IHZhbHVlO1xuICAgICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHRoaXMudmFsdWUsdGhpcy55ZWFyLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgICAgdGhpcy5pbml0U2Vzc2lvbih1cmxkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHRoaXMudmFsdWUsdGhpcy55ZWFyLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0U2Vzc2lvbih1cmxkYXRhKXtcblxuICAgIHRoaXMubGlzdFNlc3Npb24gPSBbXTtcblxuICAgIHRoaXMubGlzdFBlcnNvbiA9IFtdO1xuXG5cbiAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVybGRhdGEpKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IHRlbXBTZXNzID0gdGhpcy50b29sLmluaXRUZW1wU2Vzcyh0aGlzLmRhdGFbaV0sdGhpcy5kYXRhW2ldW1wiRGF0ZVwiXSk7XG4gICAgICB0ZW1wU2Vzcy5EYXRlID0gdGhpcy50b29sLnN3aXRjaERhdGUobmV3IERhdGUodGVtcFNlc3MuRGF0ZSkpO1xuICAgICAgdGhpcy5saXN0U2Vzc2lvbi5wdXNoKHRlbXBTZXNzKTtcbiAgICAgIHRoaXMubGlzdFBlcnNvbi5wdXNoKHtcbiAgICAgICAgdXNlciA6IHRoaXMuZGF0YVtpXVtcImlkSW5zY3JpcHRpb25cIl1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5saXN0U2Vzc2lvbik7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5EaWFsb2coaWQpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKExpc3RQZXJzb25EaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YTogdGhpcy5saXN0UGVyc29uW2lkXS51c2VyXG4gICAgfSk7XG4gIH1cblxuICBnZXRZZWFyKCl7XG4gICAgZm9yKHZhciBpID0gKHRoaXMueWVhcik7IGkgPD0gKHRoaXMueWVhcisxMCk7IGkrKyl7XG4gICAgICB0aGlzLmxpc3RZZWFyLnB1c2goaSk7fVxuICB9XG5cbiAgUmVwbGF5KGlkOiBhbnkpIHtcbiAgICB0aGlzLmFwaS5wb3N0UmVuZXdTZXNzKGlkLCB0aGlzLm5ickJpa2UudmFsdWUpLnN1YnNjcmliZShcbiAgICAgIHVybGRhdGE9PntcbiAgICAgIGlmKHVybGRhdGFbXCJyZXN1bHRcIl0pe1xuICAgICAgICB0aGlzLm5ickRpc3BCaWtlID0gdGhpcy5uYnJCaWtlLnZhbHVlO1xuICAgICAgICB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgICAgfVxuICAgIH0sIGVycm9yMSA9PiAodGhpcy5oYW5kZWxFcnJvcihlcnJvcjEpKSk7XG4gIH1cblxuICBDYW5jZWwoaWQ6IGFueSkge1xuICAgIHRoaXMuYXBpLnBvc3RDYW5jZWxTZXNzKGlkKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmdBZnRlclZpZXdJbml0KCk7XG4gICAgICB9XG4gICAgfSwgZXJyb3IxID0+ICh0aGlzLmhhbmRlbEVycm9yKGVycm9yMSkpKTtcbiAgfVxuXG4gIERlbGV0ZShpZDogYW55KSB7XG4gICAgdGhpcy5hcGkuZGVsZXRlU2VzcyhpZCkuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGlmKHVybGRhdGFbXCJyZXN1bHRcIl0pe1xuICAgICAgICB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgICAgfVxuICAgIH0sIGVycm9yMSA9PiAodGhpcy5oYW5kZWxFcnJvcihlcnJvcjEpKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRlbEVycm9yKGVycm9yMTogYW55KSB7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yMTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJtYXQtY2FyZHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQ+XFxuICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgPGEgbWF0LWZsYXQtYnV0dG9uIHJvdXRlckxpbms9XFxcIi9hZG1pbi9TZXNzaW9uXFxcIj4gU2Vzc2lvbnMgPC9hPlxcbiAgPC9tYXQtbGlzdC1pdGVtPlxcbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XFxuXFxuICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgPGEgbWF0LWZsYXQtYnV0dG9uIHJvdXRlckxpbms9XFxcIi9hZG1pbi9BYm9ubmVtZW50XFxcIj4gQWJvbm5lbWVudCA8L2E+XFxuICA8L21hdC1saXN0LWl0ZW0+XFxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG5cXG5cXG4gIDxtYXQtbGlzdC1pdGVtPlxcbiAgICA8YSBtYXQtZmxhdC1idXR0b24gcm91dGVyTGluaz1cXFwiL2FkbWluL1Nlc3Npb24vQ3JlYXRlXFxcIj4gTm91dmVsbGUgU2Vzc2lvbiA8L2E+XFxuICA8L21hdC1saXN0LWl0ZW0+XFxuPC9tYXQtY2FyZD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hZG1pbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkbWluLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLy90b2RvIGNyZWF0aW9uIHBhZ2UgZ2VzdGlvbiB0eXBlIGRlIHNlc3Npb24gZGlzcG9uaWJsZVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNb250aENvbXBvbmVudH0gZnJvbSBcIi4vbW9udGgvbW9udGguY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9hZG1pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QWRtaW5TZXNzaW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi1zZXNzaW9uL2FkbWluLXNlc3Npb24uY29tcG9uZW50XCI7XG5pbXBvcnQge0FkbWluQWJvQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi1hYm8vYWRtaW4tYWJvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBZG1pbkNyZWF0ZVNlc3Npb25Db21wb25lbnR9IGZyb20gXCIuL2FkbWluLWNyZWF0ZS1zZXNzaW9uL2FkbWluLWNyZWF0ZS1zZXNzaW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gJy4vZ3VhcmQvYXV0aC5ndWFyZCc7XG5pbXBvcnQge0FkbWluR3VhcmR9IGZyb20gJy4vZ3VhcmQvYWRtaW4uZ3VhcmQnO1xuaW1wb3J0IHtUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnLi90eXBlLXNlc3Npb24vdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOicnLFxuICAgIGNvbXBvbmVudCA6IEhvbWVDb21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGUgOiBbQXV0aEd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDonbG9naW4nLFxuICAgIGNvbXBvbmVudCA6IExvZ2luQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgcGF0aDonc2lnbnVwJyxcbiAgICBjb21wb25lbnQgOiBTaWdudXBDb21wb25lbnQsXG4gIH0sXG4gIHtcbiAgICBwYXRoOidtb250aCcsXG4gICAgY29tcG9uZW50IDogTW9udGhDb21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGUgOiBbQXV0aEd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDoncHJvZmlsZScsXG4gICAgY29tcG9uZW50IDogUHJvZmlsZUNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBdXRoR3VhcmRdXG4gIH0sXG4gIHtcbiAgICBwYXRoOidhZG1pbicsXG4gICAgY29tcG9uZW50IDogQWRtaW5Db21wb25lbnQsXG4gICAgY2FuQWN0aXZhdGUgOiBbQWRtaW5HdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6J2FkbWluL1Nlc3Npb24nLFxuICAgIGNvbXBvbmVudCA6IEFkbWluU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBZG1pbkd1YXJkXVxuXG4gIH0sXG4gIHtcbiAgICBwYXRoOidhZG1pbi9BYm9ubmVtZW50JyxcbiAgICBjb21wb25lbnQgOiBBZG1pbkFib0NvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZSA6IFtBZG1pbkd1YXJkXVxuXG4gIH0sXG4gIHtcbiAgICBwYXRoOidhZG1pbi9TZXNzaW9uL0NyZWF0ZScsXG4gICAgY29tcG9uZW50IDogQWRtaW5DcmVhdGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0FkbWluR3VhcmRdXG4gIH0sXG4gIHtcbiAgICBwYXRoOidhZG1pbi9TZXNzaW9uL1R5cGUnLFxuICAgIGNvbXBvbmVudCA6IFR5cGVTZXNzaW9uQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlIDogW0FkbWluR3VhcmRdXG4gIH0sXG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qIE5BViBCQVIgKi9cXG4uc2lkZW5hdi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4uc2lkZW5hdiB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbn1cXG5cXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5oaWRkZW57XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5tYXQtdG9vbGJhcntcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYXQtdG9vbGJhciBhe1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbm1hdC10b29sYmFyIGF7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWw+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuPC9oZWFkPlxcbjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XFxcInNpZGVuYXYtY29udGFpbmVyXFxcIj5cXG4gIDxtYXQtc2lkZW5hdiAjZHJhd2VyIGNsYXNzPVxcXCJzaWRlbmF2XFxcIlxcbiAgICAgICAgICAgICAgIGZpeGVkSW5WaWV3cG9ydD1cXFwiZmxhc2VcXFwiXFxuICAgICAgICAgICAgICAgW25nQ2xhc3NdPVxcXCJ7aGlkZGVuIDogIShpc0hhbmRzZXQkIHwgYXN5bmMpfVxcXCJcXG4gICAgICAgICAgICAgICBbYXR0ci5yb2xlXT1cXFwiKGlzSGFuZHNldCQgfCBhc3luYykgPyAnZGlhbG9nJyA6ICduYXZpZ2F0aW9uJ1xcXCJcXG4gICAgICAgICAgICAgICBbbW9kZV09XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpID8gJ292ZXInIDogJ3NpZGUnXFxcIlxcbiAgICAgICAgICAgICAgIFtvcGVuZWRdPVxcXCIoaXNIYW5kc2V0JCB8IGFzeW5jKSA9PT0gZmFsc2VcXFwiPlxcbiAgICA8ZGl2ICpuZ1RlbXBsYXRlT3V0bGV0PVxcXCJtZW51dGVtcGxhdGVcXFwiPjwvZGl2PlxcbiAgPC9tYXQtc2lkZW5hdj5cXG4gIDxtYXQtc2lkZW5hdi1jb250ZW50PlxcbiAgICA8bWF0LXRvb2xiYXIgY29sb3I9XFxcInByaW1hcnlcXFwiICpuZ0lmPVxcXCIoaXNIYW5kc2V0JCB8IGFzeW5jKTsgZWxzZSBkZXNrdG9wTmF2XFxcIj5cXG4gICAgICA8YnV0dG9uXFxuICAgICAgICB0eXBlPVxcXCJidXR0b25cXFwiXFxuICAgICAgICBhcmlhLWxhYmVsPVxcXCJUb2dnbGUgc2lkZW5hdlxcXCJcXG4gICAgICAgIG1hdC1pY29uLWJ1dHRvblxcbiAgICAgICAgKGNsaWNrKT1cXFwiZHJhd2VyLnRvZ2dsZSgpXFxcIlxcbiAgICAgICAgKm5nSWY9XFxcImlzSGFuZHNldCQgfCBhc3luY1xcXCI+XFxuICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvbWF0LXRvb2xiYXI+XFxuXFxuICAgIDxuZy1jb250YWluZXI+XFxuICAgICAgPGJvZHk+XFxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbiAgICAgIDwvYm9keT5cXG4gICAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XFxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XFxuXFxuPC9odG1sPlxcblxcbjxuZy10ZW1wbGF0ZSAjZGVza3RvcE5hdiA+XFxuICA8bWF0LXRvb2xiYXIgY2xhc3M9XFxcIk5hdmJhclxcXCIgY29sb3I9XFxcInByaW1hcnlcXFwiPlxcbiAgICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9XFxcIi5cXFwiID5cXG4gICAgICA8bWF0LWljb24+IGhvbWUgPC9tYXQtaWNvbj5cXG4gICAgICA8c3Bhbj4gQWNjdWVpbCA8L3NwYW4+XFxuICAgIDwvYT5cXG5cXG4gICAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVxcXCIvbW9udGhcXFwiPlxcbiAgICAgIDxtYXQtaWNvbj4gZGF0ZV9yYW5nZSA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBNb2lzIDwvc3Bhbj5cXG4gICAgPC9hPlxcblxcbiAgICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9XFxcIi9sb2dpblxcXCIgKm5nSWY9XFxcIiFpc0F1dGggOyBlbHNlIHByb2ZpbGVcXFwiPlxcbiAgICAgIDxtYXQtaWNvbj4gcGVyc29uIDwvbWF0LWljb24+XFxuICAgICAgPHNwYW4+IExvZ2luIDwvc3Bhbj5cXG4gICAgPC9hPlxcbiAgPC9tYXQtdG9vbGJhcj5cXG48L25nLXRlbXBsYXRlPlxcblxcbjxuZy10ZW1wbGF0ZSAjbWVudXRlbXBsYXRlPlxcbiAgPG1hdC1uYXYtbGlzdD5cXG4gICAgPGEgbWF0LWxpc3QtaXRlbSByb3V0ZXJMaW5rPVxcXCIuXFxcIj5cXG4gICAgICA8bWF0LWljb24+IGhvbWUgPC9tYXQtaWNvbj5cXG4gICAgICA8c3Bhbj4gQWNjdWVpbCA8L3NwYW4+XFxuICAgIDwvYT5cXG5cXG4gICAgPGEgbWF0LWxpc3QtaXRlbSByb3V0ZXJMaW5rPVxcXCIvbW9udGhcXFwiPlxcbiAgICAgIDxtYXQtaWNvbj4gZGF0ZV9yYW5nZSA8L21hdC1pY29uPlxcbiAgICAgIDxzcGFuPiBNb2lzIDwvc3Bhbj5cXG4gICAgPC9hPlxcblxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcIi9sb2dpblxcXCIgKm5nSWY9XFxcIiFpc0F1dGg7IGVsc2UgcHJvZmlsZVxcXCI+XFxuICAgICAgPG1hdC1pY29uPiBwZXJzb24gPC9tYXQtaWNvbj5cXG4gICAgICA8c3Bhbj4gTG9naW4gPC9zcGFuPlxcbiAgICA8L2E+XFxuXFxuICA8L21hdC1uYXYtbGlzdD5cXG48L25nLXRlbXBsYXRlPlxcblxcbjxuZy10ZW1wbGF0ZSAjcHJvZmlsZT5cXG4gIDxhIG1hdC1saXN0LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cXFwibWVudVxcXCIgKm5nSWY9XFxcImlzQXV0aFxcXCI+XFxuICAgIDxtYXQtaWNvbj4gcGVyc29uIDwvbWF0LWljb24+XFxuICAgIDxzcGFuPiB7e3VzZXIubGFzdE5hbWV9fSB7e3VzZXIuZmlyc3ROYW1lfX0gPC9zcGFuPlxcbiAgPC9hPlxcblxcbiAgPG1hdC1tZW51ICNtZW51PVxcXCJtYXRNZW51XFxcIj5cXG4gICAgPGEgbWF0LW1lbnUtaXRlbSByb3V0ZXJMaW5rPVxcXCIvcHJvZmlsZVxcXCI+UHJvZmlsPC9hPlxcbiAgICA8YSBtYXQtbWVudS1pdGVtIChjbGljayk9XFxcImxvZ291dCgpXFxcIj5Ew6ljb25uZXhpb248L2E+XFxuICA8L21hdC1tZW51PlxcblxcbiAgPGEgbWF0LWxpc3QtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVxcXCJhZG1pblxcXCIgKm5nSWY9XFxcInVzZXIuUm9sZVswXSA9PT0gJ1JPTEVfQURNSU4nXFxcIj5cXG4gICAgPG1hdC1pY29uPmJ1aWxkPC9tYXQtaWNvbj5cXG4gICAgPHNwYW4+IEFkbWluPC9zcGFuPlxcbiAgPC9hPlxcbjwvbmctdGVtcGxhdGU+XFxuXFxuPG1hdC1tZW51ICNhZG1pbj1cXFwibWF0TWVudVxcXCI+XFxuICA8bWF0LW5hdi1saXN0PlxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcImFkbWluL1Nlc3Npb25cXFwiPlNlc3Npb25zPC9hPlxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcImFkbWluL1Nlc3Npb24vQ3JlYXRlXFxcIj5Ob3V2ZWxsZSBTZXNzaW9uczwvYT5cXG4gICAgPGEgbWF0LWxpc3QtaXRlbSByb3V0ZXJMaW5rPVxcXCJhZG1pbi9BYm9ubmVtZW50XFxcIj5BYm9ubmVtZW50PC9hPlxcbiAgICA8YSBtYXQtbGlzdC1pdGVtIHJvdXRlckxpbms9XFxcImFkbWluL1Nlc3Npb24vVHlwZVxcXCI+VHlwZSBTZXNzaW9uczwvYT5cXG4gIDwvbWF0LW5hdi1saXN0PlxcbjwvbWF0LW1lbnU+XFxuXCIiLCJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2UvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0FmdGVyVmlld0luaXR9IGZyb20gXCJAbW9iaXNjcm9sbC9hbmd1bGFyLWxpdGUvc3JjL2pzL2ZyYW1ld29ya3MvYW5ndWxhclwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5cbi8vVE9ETyBncmFwaGljYWwgcmVzcG9uc2l2ZSBmb3IgZGV2aWNlc1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50LnRucy5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJWaWV3SW5pdCB7XG4gIHRpdGxlID0gJ0FxdWFiaWtlJztcbiAgcHVibGljIHVzZXI6IFVzZXI7XG4gIHB1YmxpYyBpc0F1dGg6IGJvb2xlYW47XG4gIHB1YmxpYyBpc0hhbmRzZXQkID0gdGhpcy50b29sLmlzSGFuZHNldCQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoIDogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuYXV0aC5nZXRBdXRoU3RhdHVzTGlzdGVuZXIoKS5zdWJzY3JpYmUoXG4gICAgICBhdXRoPT57XG4gICAgICAgIGlmKGF1dGgpe1xuICAgICAgICAgIHRoaXMuaXNBdXRoID0gdGhpcy5hdXRoLmdldElzQXV0aCgpO1xuICAgICAgICAgIHRoaXMudXNlciA9IHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBpZih0aGlzLmF1dGguZ2V0SXNBdXRoKCkpe1xuICAgICAgdGhpcy5pc0F1dGggPSB0aGlzLmF1dGguZ2V0SXNBdXRoKCk7XG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLm5nT25Jbml0KCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgdGhpcy5pc0F1dGggPSBmYWxzZVxuICB9XG59XG4iLCJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICdAc3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0UGVyc29uRGlhbG9nLCBNb250aENvbXBvbmVudCB9IGZyb20gJ0BzcmMvYXBwL21vbnRoL21vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BzcmMvYXBwL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICdAc3JjL2FwcC9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLCBOb29wQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL21lbnVcIjtcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvblwiO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvblwiO1xuaW1wb3J0IHtcbiAgRGF0ZUFkYXB0ZXIsXG4gIE1BVF9EQVRFX0ZPUk1BVFMsXG4gIE1BVF9EQVRFX0xPQ0FMRSxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgTWF0UmlwcGxlTW9kdWxlXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgeyBNYXRMaXN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2xpc3RcIjtcbmltcG9ydCB7XG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgTWF0U25hY2tCYXIsXG4gIE1hdFNuYWNrQmFyQ29udGFpbmVyLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0U29ydE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyXCI7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NhcmRcIjtcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyXCI7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQge0VkaXRQcm9maWxlQ29tcG9uZW50LCBQcm9maWxlQ29tcG9uZW50fSBmcm9tICdAc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdFwiO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICdAc3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRtaW5TZXNzaW9uQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvYWRtaW4tc2Vzc2lvbi9hZG1pbi1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0FkbWluQWJvQ29tcG9uZW50LCBTaG93RWRpdEFib1R5cGV9IGZyb20gJ0BzcmMvYXBwL2FkbWluLWFiby9hZG1pbi1hYm8uY29tcG9uZW50JztcbmltcG9ydCB7QWRtaW5DcmVhdGVTZXNzaW9uQ29tcG9uZW50LCBDb25maW1HZW5lcmF0aW9uQ29tcG9uZW50fSBmcm9tICdAc3JjL2FwcC9hZG1pbi1jcmVhdGUtc2Vzc2lvbi9hZG1pbi1jcmVhdGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGV9IGZyb20gXCJuZ3gtbWF0ZXJpYWwtdGltZXBpY2tlclwiO1xuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic1wiO1xuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XG5pbXBvcnQge1R5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICdAc3JjL2FwcC90eXBlLXNlc3Npb24vdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0FkZFR5cGVTZXNzaW9uQ29tcG9uZW50fSBmcm9tICdAc3JjL2FwcC90eXBlLXNlc3Npb24vYWRkLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtFZGl0VHlwZVNlc3Npb25Db21wb25lbnR9IGZyb20gJ0BzcmMvYXBwL3R5cGUtc2Vzc2lvbi9lZGl0LXR5cGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtEZWxBYm9Db21wb25lbnR9IGZyb20gJ0BzcmMvYXBwL2FkbWluLWFiby9kZWwtYWJvLmNvbXBvbmVudCc7XG5pbXBvcnQge2xpc3RBYm9TZXNzaW9ufSBmcm9tICdAc3JjL2FwcC90eXBlLXNlc3Npb24vbGlzdC1hYm8tc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtGbGV4TGF5b3V0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7RGVsVHlwZVNlc3Npb25Db21wb25lbnR9IGZyb20gJ0BzcmMvYXBwL3R5cGUtc2Vzc2lvbi9kZWwtdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRvR2VuZXJhdGVkQ29tcG9uZW50IH0gZnJvbSAnQHNyYy9hcHAvYXV0by1nZW5lcmF0ZWQvYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7QVBQX0JBU0VfSFJFRiwgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIE1vbnRoQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIExpc3RQZXJzb25EaWFsb2csXG4gICAgU2lnbnVwQ29tcG9uZW50LFxuICAgIFByb2ZpbGVDb21wb25lbnQsXG4gICAgQWRtaW5Db21wb25lbnQsXG4gICAgQWRtaW5TZXNzaW9uQ29tcG9uZW50LFxuICAgIEFkbWluQWJvQ29tcG9uZW50LFxuICAgIEFkbWluQ3JlYXRlU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBTaG93RWRpdEFib1R5cGUsXG4gICAgRWRpdFByb2ZpbGVDb21wb25lbnQsXG4gICAgVHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgQWRkVHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgQ29uZmltR2VuZXJhdGlvbkNvbXBvbmVudCxcbiAgICBFZGl0VHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgRGVsQWJvQ29tcG9uZW50LFxuICAgIGxpc3RBYm9TZXNzaW9uLFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgRGVsVHlwZVNlc3Npb25Db21wb25lbnQsXG4gICAgQXV0b0dlbmVyYXRlZENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgIExheW91dE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcblxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBNb250aENvbXBvbmVudCxcbiAgICBMaXN0UGVyc29uRGlhbG9nLFxuICAgIFNob3dFZGl0QWJvVHlwZSxcbiAgICBFZGl0UHJvZmlsZUNvbXBvbmVudCxcbiAgICBBZGRUeXBlU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBDb25maW1HZW5lcmF0aW9uQ29tcG9uZW50LFxuICAgIEVkaXRUeXBlU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBEZWxBYm9Db21wb25lbnQsXG4gICAgbGlzdEFib1Nlc3Npb24sXG4gICAgRGVsVHlwZVNlc3Npb25Db21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgQXBpU2VydmljZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgeyBwcm92aWRlOiBNQVRfRElBTE9HX0RFRkFVTFRfT1BUSU9OUywgdXNlVmFsdWU6IHsgaGFzQmFja2Ryb3A6IHRydWUgfSB9LFxuICAgIHsgcHJvdmlkZTogQVBQX0JBU0VfSFJFRiwgdXNlVmFsdWU6IFwiL1wiIH0sXG4gICAgeyBwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIENvb2tpZVNlcnZpY2UsXG4gICAgTWF0U25hY2tCYXIsXG5cbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hcyA6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPEJ1dHRvbiB0ZXh0PVxcXCJhdXRvLWdlbmVyYXRlZCB3b3JrcyFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPjwvQnV0dG9uPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWF1dG8tZ2VuZXJhdGVkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0by1nZW5lcmF0ZWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9HZW5lcmF0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoIDogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgIGlmKCB0aGlzLmF1dGguZ2V0SXNBdXRoKCkgJiYgdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCkuUm9sZVswXSA9PT0gXCJST0xFX0FETUlOXCIgKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoIDogQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgIGlmKCB0aGlzLmF1dGguZ2V0SXNBdXRoKCkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgICB9XG4gIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCIuY2VudGVye1xcbiAgbWFyZ2luOiAyJSAyMCUgO1xcbiAgcGFkZGluZzogMiU7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJjZW50ZXJcXFwiPlxcbiAgPG1hdC1jYXJkPlxcbiAgICA8bWF0LWNhcmQtdGl0bGU+XFxuICAgICAge3tkYXRlfX1cXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cXG4gIDwvbWF0LWNhcmQ+XFxuXFxuICA8bWF0LWxpc3QgKm5nRm9yPVxcXCJsZXQgaG91ciBvZiB0aW1lXFxcIj5cXG5cXG4gICAgPG1hdC1saXN0LWl0ZW0+PC9tYXQtbGlzdC1pdGVtPlxcbiAgICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgICA8bWF0LWNhcmQtc3VidGl0bGU+XFxuICAgICAgICB7e2hvdXJ9fVxcbiAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XFxuICAgIDwvbWF0LWxpc3QtaXRlbT5cXG5cXG4gICAgPG1hdC1saXN0ICpuZ0Zvcj1cXFwibGV0IHVzZXIgb2YgbGlzdFVzZXJbMF1cXFwiPlxcbiAgICAgIDxtYXQtbGlzdC1pdGVtPlxcbiAgICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+cGVyc29uPC9tYXQtaWNvbj5cXG4gICAgICAgIHt7dXNlci5sYXN0TmFtZX19IHt7dXNlci5maXJzdE5hbWV9fVxcbiAgICAgIDwvbWF0LWxpc3QtaXRlbT5cXG4gICAgICA8bWF0LWRpdmlkZXIgPjwvbWF0LWRpdmlkZXI+XFxuXFxuICAgIDwvbWF0LWxpc3Q+XFxuICA8L21hdC1saXN0PlxcbjwvZGl2PlxcblxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0JyZWFrcG9pbnRzfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZGF0YTogSlNPTltdPVtdO1xuICBwdWJsaWMgbGlzdFVzZXI6IGFueVtdID0gW107XG4gIHB1YmxpYyBkYXRlO1xuICBwdWJsaWMgdGltZSA6IGFueVtdPSBbXTtcbiAgcHVibGljIGlzSGFuZHNldCQgPSB0aGlzLnRvb2wuaXNIYW5kc2V0JDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBkYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuZGF0ZSA9IHRoaXMudG9vbC5zd2l0Y2hQcm9maWxlRGF0ZShkYXkudG9JU09TdHJpbmcoKSk7XG4gICAgdGhpcy5hcGkuZ2V0SG9tZUpzb24oKS5zdWJzY3JpYmUodXJsZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVybGRhdGEpKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy50aW1lLnB1c2godGhpcy5kYXRhW2pdW1widGltZVwiXS5zcGxpdCgnICcpWzFdKTtcblxuICAgICAgICBsZXQgaW5zY3JpcHRpb24gPSB0aGlzLmRhdGFbal1bXCJpZEluc2NyaXB0aW9uXCJdO1xuICAgICAgICBsZXQgdXNlcjogSlNPTltdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zY3JpcHRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB1c2VyLnB1c2goXG4gICAgICAgICAgICBpbnNjcmlwdGlvbltpXVtcImlkUGVyc29uXCJdXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdFVzZXIucHVzaCh1c2VyKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLmJ0bntcXG4gIG1hcmdpbi1sZWZ0OjMlXFxufVxcbm1hdC1mb3JtLWZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYXQtc3Bpbm5lciB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbm1hdC1jYXJke1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuYnV0dG9ue1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZD5cXG4gIDxtYXQtc3Bpbm5lciAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L21hdC1zcGlubmVyPlxcbiAgPGZvcm0gKHN1Ym1pdCk9XFxcIm9uTG9naW4obG9naW5Gb3JtKVxcXCIgI2xvZ2luRm9ybT1cXFwibmdGb3JtXFxcIiAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCI+PCEtLSBkb24ndCBmb3JnZXQgdGhlIFxcXCIhXFxcIiwgdGh1cyBub3QgaXNMb2FkaW5nLS0+XFxuICAgIDxzcGFuICpuZ0lmPVxcXCJFcnJvclxcXCIgY2xhc3M9XFxcIm1hdC1lcnJvclxcXCI+IHt7RXJyb3J9fSA8L3NwYW4+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwidXNlcm5hbWVcXFwiIG5nTW9kZWwgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIiAgcmVxdWlyZWQ+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwicGFzc3dvcmRcXFwiIG5nTW9kZWwgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJNb3QgZGUgcGFzc2VcXFwiICByZXF1aXJlZCBwYXNzd29yZD5cXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cXG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cXFwicHJpbWFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5Db25uZWN0aW9uPC9idXR0b24+XFxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiIGNsYXNzPVxcXCJidG5cXFwiIHJvdXRlckxpbms9XFxcIi9zaWdudXBcXFwiPlxcbiAgICAgIDxzcGFuPiBJbnNjcmlwdGlvbjwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICA8L2Zvcm0+XFxuPC9tYXQtY2FyZD5cXG5cIiIsImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Y2F0Y2hFcnJvcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG4vL3RvZG8gZGlzcGxheSBsb2dpbiBlcnJvclxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLCAvLyAtLT4gY2FuIGJlIG9tbWl0ZWQgYmVjYXVzZSBvZiB0aGUgcm91dGVzXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdHtcblxuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIEVycm9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIHJvdXRlciA6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKXt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aFN0YXR1c0xpc3RlbmVyKClcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgYXV0aCA9PiB7XG4gICAgICAgIGlmKGF1dGgpe1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRFcnJvckxpc3RlbmVyKCkuc3Vic2NyaWJlKG5leHQ9PntcbiAgICAgICAgICB0aGlzLkVycm9yID0gbmV4dDtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIH0sZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uTG9naW4oZm9ybTogTmdGb3JtKSB7XG4gICAgaWYgKGZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luVXNlcihmb3JtLnZhbHVlLnVzZXJuYW1lLCBmb3JtLnZhbHVlLnBhc3N3b3JkKTtcbiAgICB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiLnNpZGVuYXYtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNpZGVuYXYge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG59XFxuXFxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cXFwic2lkZW5hdi1jb250YWluZXJcXFwiPlxcbiAgPG1hdC1zaWRlbmF2ICNkcmF3ZXIgY2xhc3M9XFxcInNpZGVuYXZcXFwiIGZpeGVkSW5WaWV3cG9ydFxcbiAgICAgIFthdHRyLnJvbGVdPVxcXCIoaXNIYW5kc2V0JCB8IGFzeW5jKSA/ICdkaWFsb2cnIDogJ25hdmlnYXRpb24nXFxcIlxcbiAgICAgIFttb2RlXT1cXFwiKGlzSGFuZHNldCQgfCBhc3luYykgPyAnb3ZlcicgOiAnc2lkZSdcXFwiXFxuICAgICAgW29wZW5lZF09XFxcIihpc0hhbmRzZXQkIHwgYXN5bmMpID09PSBmYWxzZVxcXCI+XFxuICAgIDxtYXQtbmF2LWxpc3Q+XFxuXFxuICAgIDwvbWF0LW5hdi1saXN0PlxcbiAgPC9tYXQtc2lkZW5hdj5cXG4gIDxtYXQtc2lkZW5hdi1jb250ZW50PlxcbiAgICA8bWF0LXRvb2xiYXIgY29sb3I9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgIDxidXR0b25cXG4gICAgICAgIHR5cGU9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBzaWRlbmF2XFxcIlxcbiAgICAgICAgbWF0LWljb24tYnV0dG9uXFxuICAgICAgICAoY2xpY2spPVxcXCJkcmF3ZXIudG9nZ2xlKClcXFwiXFxuICAgICAgICAqbmdJZj1cXFwiaXNIYW5kc2V0JCB8IGFzeW5jXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVxcXCJTaWRlIG5hdiB0b2dnbGUgaWNvblxcXCI+bWVudTwvbWF0LWljb24+XFxuICAgICAgPC9idXR0b24+XFxuICAgICAgPHNwYW4+ZnJvbnRlbmQ8L3NwYW4+XFxuICAgIDwvbWF0LXRvb2xiYXI+XFxuICAgIDwhLS0gQWRkIENvbnRlbnQgSGVyZSAtLT5cXG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cXG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50cyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xuXG4gIGlzSGFuZHNldCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKEJyZWFrcG9pbnRzLkhhbmRzZXQpXG4gICAgLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5tYXRjaGVzKSxcbiAgICAgIHNoYXJlUmVwbGF5KClcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHt9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwibWF0LXJvdyBkZXRhaWwtcm93XFxcIj5cXG4gIDxtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVxcXCJkYXRhXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCI+XFxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJVc2VyXFxcIj5cXG4gICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBJbnNjcmlwdGlvbiA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50Lmxhc3ROYW1lfX0ge3tlbGVtZW50LmZpcnN0TmFtZX19PC9tYXQtY2VsbD5cXG4gICAgPC9uZy1jb250YWluZXI+XFxuXFxuICAgIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVxcXCJQZXJzb25Db2xcXFwiPjwvbWF0LWhlYWRlci1yb3c+XFxuICAgIDxtYXQtcm93ICptYXRSb3dEZWY9XFxcImxldCByb3c7IGNvbHVtbnM6IFBlcnNvbkNvbDtcXFwiPlxcbiAgICA8L21hdC1yb3c+XFxuICA8L21hdC10YWJsZT5cXG48L2Rpdj5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwibWF0LXRhYmxle1xcbiAgbWFyZ2luOiAzJSAyJSA7XFxuICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuLnNlbGVjdHtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbm1hdC1zZWxlY3R7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbm1hdC1jZWxse1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYXQtaGVhZGVyLWNlbGx7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYXQtZm9ybS1maWVsZHtcXG4gIHdpZHRoOiAxMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuLm1hdC1jb2x1bW4tRGF0ZSB7XFxuICBmbGV4OiAwIDAgMTAlO1xcbn1cXG5cXG4uYWN0aW9uLWJ0bntcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYxODY7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLm1hdC1jb2x1bW4tQWN0aW9uIHtcXG4gICAgZmxleDogMCAwIDMwJTtcXG4gIH1cXG4gIC5tYXQtY29sdW1uLURhdGUge1xcbiAgICBmbGV4OiAwIDAgMzAlO1xcbiAgfVxcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiXFxuPG1hdC1ncmlkLWxpc3QgY29scz1cXFwiNFxcXCIgcm93SGVpZ2h0PVxcXCIxMDBcXFwiPlxcbiAgPG1hdC1ncmlkLXRpbGU+PC9tYXQtZ3JpZC10aWxlPlxcblxcbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cXFwiMVxcXCI+XFxuICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cXFwiTW9pc1xcXCIgI21hdFNlbGVjdCBbKG5nTW9kZWwpXT1cXFwidmFsdWVcXFwiPlxcbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVxcXCJsZXQgbW9udGggb2YgbW9udGhzXFxcIiBbdmFsdWVdPVxcXCJtb250aC5udW1cXFwiID5cXG4gICAgICAgICAge3ttb250aC5uYW1lfX1cXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cXG4gICAgICA8L21hdC1zZWxlY3Q+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVxcXCIxXFxcIj5cXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVxcXCJzZWxlY3RcXFwiPlxcbiAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVxcXCJBbm7DqWVcXFwiICNtYXRTZWxlY3QyIFsobmdNb2RlbCldPVxcXCJ5ZWFyXFxcIj5cXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cXFwibGV0IHkgb2YgbGlzdFllYXJcXFwiIFt2YWx1ZV09XFxcInlcXFwiID5cXG4gICAgICAgICAge3t5fX1cXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cXG4gICAgICA8L21hdC1zZWxlY3Q+XFxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuPC9tYXQtZ3JpZC1saXN0PlxcblxcbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcblxcbjxtYXQtY2FyZCAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIiBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj5cXG4gIDxtYXQtc3Bpbm5lciBzdHlsZT1cXFwibWFyZ2luOiBhdXRvXFxcIj48L21hdC1zcGlubmVyPlxcbjwvbWF0LWNhcmQ+XFxuXFxuPG1hdC10YWJsZSAqbmdJZj1cXFwiIWlzTG9hZGluZ1xcXCIgW2RhdGFTb3VyY2VdPVxcXCJkYXRhU291cmNlXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCIgbWF0U29ydD5cXG5cXG4gIDwhLS0gRGF0ZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiRGF0ZVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPkRhdGU8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+e3tlbGVtZW50LkRhdGV9fTwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gVGltZSBDb2x1bW4gLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiVGltZVxcXCIgPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj5IZXVyZTwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuVGltZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBCaWtlIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJCaWtlXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+VmVsbyhzKSBsaWJyZShzKTwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj57e2VsZW1lbnQuQmlrZX19PC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBTdGF0dXMgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlN0YXR1c1xcXCIgPlxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxcbiAgICAgIENvdXJzIGNvbmZpcm3DqVxcbiAgICA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+XFxuICAgICAgPG1hdC1pY29uICpuZ0lmPVxcXCIhZWxlbWVudC5DYW5jZWw7IGVsc2UgY2FuY2VsXFxcIiBbbmdTdHlsZV09XFxcInsnY29sb3InOidncmVlbid9XFxcIlxcbiAgICAgICAgICAgICAgICBtYXRUb29sdGlwPVxcXCJDb25maXJtw6lcXFwiPmNoZWNrPC9tYXQtaWNvbj5cXG4gICAgICA8bmctdGVtcGxhdGUgI2NhbmNlbD5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOidyZWQnfVxcXCIgbWF0VG9vbHRpcD1cXFwiQW5udWxlclxcXCI+Y2FuY2VsPC9tYXQtaWNvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8IS0tIEJ1dHRvbiBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJJbmZvXFxcIiA+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XFxuICAgICAgTGlzdGUgUGFydGljaXBhbnQoZSlzXFxuICAgIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj5cXG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiTGlzdGUgUGFydGljaXBhbnQoZSlzXFxcIj5cXG4gICAgICAgICAgPG1hdC1pY29uIChjbGljayk9XFxcIm9wZW5EaWFsb2coZWxlbWVudClcXFwiIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiPmluZm88L21hdC1pY29uPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvbWF0LWNlbGw+XFxuXFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gQnV0dG9uIDIgQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWN0aW9uXFxcIj5cXG5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cXG4gICAgICBJbnNjcmlwdGlvbi9Ew6lzaW5zY3JpdHB0aW9uXFxuICAgIDwvbWF0LWhlYWRlci1jZWxsPlxcblxcbiAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIiA+XFxuICAgICAgPGRpdiAqbmdJZj1cXFwiY2hlY2tJZkRpc2FibGUoZWxlbWVudCkgO3RoZW4gY2FuY2VsQnRuIGVsc2UgQnRuXFxcIj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8bmctdGVtcGxhdGUgI2NhbmNlbEJ0bj5cXG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIG1hdFRvb2x0aXA9XFxcIkFubnVsZXJcXFwiIGRpc2FibGVkID5cXG4gICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVxcXCJjaGVja0lmU3ViKGVsZW1lbnQpO3RoZW4gdW5zdWIgZWxzZSBzdWJcXFwiPjwvbWF0LWljb24+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICAgIDxuZy10ZW1wbGF0ZSAjQnRuPlxcbiAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiID5cXG4gICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVxcXCJjaGVja0lmU3ViKGVsZW1lbnQpO3RoZW4gdW5zdWIyIGVsc2Ugc3ViXFxcIj48L21hdC1pY29uPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXG4gICAgICA8bmctdGVtcGxhdGUgI3N1Yj5cXG4gICAgICAgICAgPG1hdC1pY29uIGNvbG9yPVxcXCJ3aGl0ZVxcXCIgbWF0VG9vbHRpcD1cXFwiSW5zY3JpcHRpb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJzdWJzY3JpYmUoZWxlbWVudC5JZClcXFwiPmFkZDwvbWF0LWljb24+XFxuICAgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXG4gICAgICA8bmctdGVtcGxhdGUgI3Vuc3ViPlxcbiAgICAgICAgICA8bWF0LWljb24gY29sb3I9XFxcIndoaXRlXFxcIiBtYXRUb29sdGlwPVxcXCJEw6lzaW5zY3JpcHRpb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJ1blN1YnNjcmliZShlbGVtZW50LklkKVxcXCI+Y2hlY2s8L21hdC1pY29uPlxcbiAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgPG5nLXRlbXBsYXRlICN1bnN1YjI+XFxuICAgICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcIntjb2xvciA6ICcjNDRjMzQ0J31cXFwiIG1hdFRvb2x0aXA9XFxcIkTDqXNpbnNjcmlwdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcInVuU3Vic2NyaWJlKGVsZW1lbnQuSWQpXFxcIj5jaGVjazwvbWF0LWljb24+XFxuICAgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXG5cXG4gICAgPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XFxcImRpc3BsYXllZENvbHVtbnNcXFwiPjwvbWF0LWhlYWRlci1yb3c+XFxuICA8bWF0LXJvdyAqbWF0Um93RGVmPVxcXCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1xcXCI+XFxuICA8L21hdC1yb3c+XFxuXFxuPC9tYXQtdGFibGU+XFxuXFxuXFxuXFxuXFxuXCIiLCJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtJbnNjcmlwdGlvbiwgU2Vzc2lvbnMsIFVzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcblxuaW1wb3J0IHtNYXRTZWxlY3R9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXBlcnNvbi1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1wZXJzb24tZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFBlcnNvbkRpYWxvZyB7XG4gIFBlcnNvbkNvbDogc3RyaW5nW10gPSBbJ1VzZXInXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPExpc3RQZXJzb25EaWFsb2c+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVXNlcltdKSB7fVxuXG4gICAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuXG4vL3RvZG8gZGlzcGxheSBtb250aCBzZWxlY3Rpb24gKyB5ZWFyIHNlbGVjdGlvbiBlcnJvclxuLy90b2RvIGRpc3BsYXkgc3ViICsgdW5zdWIgZXJyb3Jcbi8vdG9kbyBibG9jayB1bnN1YiBpZiB0b2RheVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbW9udGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb250aC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgZGF0YTogSlNPTltdPVtdO1xuICBwdWJsaWMgdmFsdWUgOiBudW1iZXIgPSBudWxsO1xuICBwdWJsaWMgbGlzdFNlc3Npb24gOiBTZXNzaW9uc1tdO1xuICBwdWJsaWMgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFNlc3Npb25zPjtcbiAgcHVibGljIGxpc3RQZXJzb24gOiBVc2VyW107XG4gIHB1YmxpYyBsaXN0WWVhcjogbnVtYmVyW109W107XG4gIHB1YmxpYyB5ZWFyOiBudW1iZXI7XG4gIHB1YmxpYyB1c2VyOiBVc2VyO1xuICBwdWJsaWMgbGlzdElkU2Vzc2lvbjogbnVtYmVyW109W107XG4gIHB1YmxpYyB0b2RheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaXNIYW5kc2V0JCA9IHRoaXMudG9vbC5pc0hhbmRzZXQkO1xuXG4gIEBWaWV3Q2hpbGQoJ21hdFNlbGVjdCcse3N0YXRpYzpmYWxzZX0pbWF0U2VsZWN0IDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKCdtYXRTZWxlY3QyJyx7c3RhdGljOmZhbHNlfSltYXRTZWxlY3QyIDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKE1hdFNvcnQsIHtzdGF0aWM6IHRydWV9KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdIDtcblxuXG4gIG1vbnRocyA9IFtcbiAgICB7bmFtZSA6IFwiamFudmllclwiLCBudW0gOiAxfSxcbiAgICB7bmFtZSA6IFwiZsOpdnJpZXJcIiwgbnVtIDogMn0sXG4gICAge25hbWUgOiBcIm1hcnNcIiwgbnVtIDogM30sXG4gICAge25hbWUgOiBcImF2cmlsXCIsIG51bSA6IDR9LFxuICAgIHtuYW1lIDogXCJtYWlcIiwgbnVtIDogNX0sXG4gICAge25hbWUgOiBcImp1aW5cIiwgbnVtIDogNn0sXG4gICAge25hbWUgOiBcImp1aWxsZXRcIiwgbnVtIDogN30sXG4gICAge25hbWUgOiBcImFvw7t0XCIsIG51bSA6IDh9LFxuICAgIHtuYW1lIDogXCJzZXB0ZW1icmVcIiwgbnVtIDogOX0sXG4gICAge25hbWUgOiBcIm9jdG9icmVcIiwgbnVtIDogMTB9LFxuICAgIHtuYW1lIDogXCJub3ZlbWJyZVwiLCBudW0gOiAxMX0sXG4gICAge25hbWUgOiBcImTDqWNlbWJyZVwiLCBudW0gOiAxMn0sXG4gIF07XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBBcGlTZXJ2aWNlLFxuICAgICAgICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aDpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKTtcbiAgICB0aGlzLnRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy50b2RheS5nZXRNb250aCgpKzE7XG4gICAgdGhpcy55ZWFyID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZ2V0WWVhcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0hhbmRzZXQkLnN1YnNjcmliZSh2YWx1ZTEgPT5cbiAgICAgICF2YWx1ZTEgPyB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBbJ0RhdGUnLCAnVGltZScsICdCaWtlJywgJ1N0YXR1cycsJ0luZm8nLCdBY3Rpb24nXSA6IHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IFsnRGF0ZScsICdUaW1lJywnQWN0aW9uJ10gKSA7XG4gICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHRoaXMudmFsdWUsdGhpcy55ZWFyLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgIHRoaXMuaW5pdFNlc3Npb24odXJsZGF0YSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gICAgdGhpcy5tYXRTZWxlY3QudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYXBpLmdldE1vbnRoSnNvbih2YWx1ZSx0aGlzLnllYXIudG9TdHJpbmcoKSkuc3Vic2NyaWJlKHVybGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmluaXRTZXNzaW9uKHVybGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hdFNlbGVjdDIudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMueWVhciA9IHZhbHVlO1xuICAgICAgdGhpcy5hcGkuZ2V0TW9udGhKc29uKHRoaXMudmFsdWUsdGhpcy55ZWFyLnRvU3RyaW5nKCkpLnN1YnNjcmliZSh1cmxkYXRhID0+IHtcbiAgICAgICAgdGhpcy5pbml0U2Vzc2lvbih1cmxkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlKElkOiBudW1iZXIpIHtcbiAgICBsZXQgdGVtcEluc2NyaXB0aW9uIDogSW5zY3JpcHRpb249e1xuICAgICAgVXNlcm5hbWU6dGhpcy51c2VyLnVzZXJuYW1lLFxuICAgICAgSWQ6IElkXG4gICAgfTtcblxuICAgIHRoaXMuYXBpLmNyZWF0ZUluc2NyaXB0aW9uKHRlbXBJbnNjcmlwdGlvbikuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGlmKHVybGRhdGFbXCJyZXN1bHRcIl0pe1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1blN1YnNjcmliZShpZDogbnVtYmVyKSB7XG4gICAgbGV0IHRlbXBJbnNjcmlwdGlvbiA6IEluc2NyaXB0aW9uPXtcbiAgICAgIFVzZXJuYW1lOnRoaXMudXNlci51c2VybmFtZSxcbiAgICAgIElkOiBpZFxuICAgIH07XG5cbiAgICB0aGlzLmFwaS5kZWxJbnNjcmlwdGlvbih0ZW1wSW5zY3JpcHRpb24pLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBpZih1cmxkYXRhW1wicmVzdWx0XCJdKXtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdFNlc3Npb24odXJsZGF0YSl7XG4gICAgdGhpcy5hcGkuZ2V0UHJvZmlsZUpzb24odGhpcy51c2VyLnVzZXJuYW1lKS5zdWJzY3JpYmUoZGF0YT0+e1xuICAgICAgdGhpcy5hdXRoLmluaXRVc2VyKGRhdGEpO1xuICAgICAgdGhpcy5saXN0SWRTZXNzaW9uID0gW107XG4gICAgICB0aGlzLnVzZXIgPSB0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKTtcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudXNlci5TZXNzaW9uLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5saXN0SWRTZXNzaW9uLnB1c2godGhpcy51c2VyLlNlc3Npb25baV0uSWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5saXN0U2Vzc2lvbiA9IFtdO1xuXG4gICAgdGhpcy5saXN0UGVyc29uID0gW107XG5cbiAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHVybGRhdGEpKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy50b29sLmNoZWNrSWZCZWZvcmVUb2RheSh0aGlzLmRhdGFbaV1bXCJEYXRlXCJdKSl7XG4gICAgICAgIGxldCB0ZW1wU2VzcyA9IHRoaXMudG9vbC5pbml0VGVtcFNlc3ModGhpcy5kYXRhW2ldLHRoaXMuZGF0YVtpXVtcIkRhdGVcIl0pO1xuXG4gICAgICAgIHRlbXBTZXNzLkRhdGUgPSB0aGlzLnRvb2wuc3dpdGNoRGF0ZShuZXcgRGF0ZSh0ZW1wU2Vzcy5EYXRlKSk7XG4gICAgICAgIHRlbXBTZXNzLlBlcnNvbiA9IHRoaXMudG9vbC5pbml0TGlzdFBlcnNEZXRhaWwodGhpcy5kYXRhW2ldW1wiaWRJbnNjcmlwdGlvblwiXSk7XG4gICAgICAgIHRoaXMubGlzdFNlc3Npb24ucHVzaCh0ZW1wU2Vzcyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMubGlzdFNlc3Npb24pO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBvcGVuRGlhbG9nKFNlc3Npb24gOiBTZXNzaW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTGlzdFBlcnNvbkRpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiBTZXNzaW9uLlBlcnNvblxuICAgIH0pO1xuICB9XG5cbiAgZ2V0WWVhcigpe1xuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgZm9yKHZhciBpID0gKHRoaXMueWVhcik7IGkgPD0gKHRoaXMueWVhcisxMCk7IGkrKyl7XG4gICAgICB0aGlzLmxpc3RZZWFyLnB1c2goaSk7fVxuICB9XG5cblxuXG4gIGNoZWNrSWZEaXNhYmxlKGVsZW1lbnQpIDogYm9vbGVhbntcbiAgICByZXR1cm4gZWxlbWVudC5DYW5jZWwgfHwgZWxlbWVudC5CaWtlID09IDAgfHwgKHRoaXMudXNlci5hYm9ubmVtZW50ID09IDAgJiYgIXRoaXMuY2hlY2tJZlN1YihlbGVtZW50KSlcbiAgICAgIHx8IChlbGVtZW50LkRhdGUgPT09IHRoaXMudG9vbC5zd2l0Y2hEYXRlKHRoaXMudG9kYXkpICYmIHRoaXMuY2hlY2tJZlN1YihlbGVtZW50KSlcbiAgfVxuXG4gIGNoZWNrSWZTdWIoZWxlbWVudCkgOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLmxpc3RJZFNlc3Npb24uaW5jbHVkZXMoZWxlbWVudC5JZClcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSAobmdTdWJtaXQpPVxcXCJFZGl0UHJvZmlsZShlZGl0Rm9ybSlcXFwiICNlZGl0Rm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gIDxtYXQtc2VsZWN0ICpuZ0lmPVxcXCJlcnJvclxcXCI+IHt7ZXJyb3J9fTwvbWF0LXNlbGVjdD5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImRhdGEuRW1haWxcXFwiICBuYW1lPVxcXCJFbWFpbFxcXCIgPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XFxcIk5vbVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImRhdGEubGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiA+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cXFwiUHJlbm9tXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZGF0YS5maXJzdE5hbWVcXFwiICBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiID5cXG4gIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgPGlucHV0IG1hdElucHV0IG5nTW9kZWwgI3Bhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJNb3QgZGUgcGFzc2VcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwYXNzd29yZCBuYW1lPVxcXCJwYXNzd29yZFxcXCIgPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxuZy1jb250YWluZXI+XFxuICAgIDx1bCAqbmdGb3I9XFxcImxldCBzZXNzaW9uIG9mIGxpc3RUeXBlU2Vzc2lvblxcXCIgPlxcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XFxcIkVkaXRUeXBlU2Vzc2lvbihzZXNzaW9uKVxcXCIgW2NoZWNrZWRdID0gXFxcImNoZWNrU2Vzc2lvbihzZXNzaW9uKSAhPSBudWxsXFxcIj5cXG4gICAgICAgIHt7c2Vzc2lvbi5EYXl9fSB7e3Nlc3Npb24uVGltZX19XFxuICAgICAgPC9tYXQtY2hlY2tib3g+XFxuICAgIDwvdWw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+Tm8gVGhhbmtzPC9idXR0b24+XFxuICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cXFwic3VibWl0XFxcIj5PazwvYnV0dG9uPlxcblxcbjwvZm9ybT5cXG5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwibWF0LWNhcmR7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG5kaXZ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxuICBwYWRkaW5nOiAyJTtcXG59XFxuXFxubWF0LXNlbGVjdHtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgd2lkdGg6IDEwMCVcXG59XFxuXFxubWF0LWNlbGx7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbm1hdC1oZWFkZXItY2VsbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1hdC1mb3JtLWZpZWxke1xcbiAgd2lkdGg6IDExMHB4O1xcbn1cXG5cXG4ubWF0LWNvbHVtbi1EYXRlIHtcXG4gIGZsZXg6IDAgMCAzNSU7XFxufVxcblxcbmgze1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbnB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPG1hdC1ncmlkLWxpc3QgY29scz1cXFwiMlxcXCIgcm93SGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG5cXG4gIDxtYXQtZ3JpZC10aWxlIGNvbHNwYW49XFxcIjFcXFwiPlxcblxcbiAgICA8bWF0LWNhcmQgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+XFxuICAgICAgPG1hdC1zcGlubmVyIHN0eWxlPVxcXCJtYXJnaW46IGF1dG9cXFwiPjwvbWF0LXNwaW5uZXI+XFxuICAgIDwvbWF0LWNhcmQ+XFxuXFxuICAgIDxkaXYgPlxcbiAgICAgIDxtYXQtdGFibGUgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiIFtkYXRhU291cmNlXT1cXFwiZGF0YVNvdXJjZVxcXCIgY2xhc3M9XFxcIm1hdC1lbGV2YXRpb24tejhcXFwiPlxcblxcbiAgICAgICAgPCEtLSBEYXRlIENvbHVtbiAtLT5cXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJEYXRlXFxcIiA+XFxuICAgICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IERhdGUgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e3N3aXRjaERhdGUoZWxlbWVudC5EYXRlKX19IDwvbWF0LWNlbGw+XFxuICAgICAgICA8L25nLWNvbnRhaW5lciA+XFxuXFxuICAgICAgICA8IS0tIFRpbWUgQ29sdW1uIC0tPlxcbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIlRpbWVcXFwiID5cXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gSGV1cmUgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuVGltZX19IDwvbWF0LWNlbGw+XFxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gICAgICAgIDwhLS0gQmlrZSBDb2x1bW4gLS0+XFxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQmlrZVxcXCIgPlxcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBWZWxvIGxpYnJlIDwvbWF0LWhlYWRlci1jZWxsPlxcbiAgICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XFxcImxldCBlbGVtZW50XFxcIj4ge3tlbGVtZW50LkJpa2V9fSA8L21hdC1jZWxsPlxcbiAgICAgICAgPC9uZy1jb250YWluZXI+XFxuXFxuICAgICAgICA8IS0tIFN0YXR1cyBDb2x1bW4gLS0+XFxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiU3RhdHVzXFxcIiA+XFxuICAgICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN0YXR1cyA8L21hdC1oZWFkZXItY2VsbD5cXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudFxcXCI+XFxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVxcXCIhZWxlbWVudC5DYW5jZWw7IGVsc2UgY2FuY2VsXFxcIiBbbmdTdHlsZV09XFxcInsnY29sb3InOidncmVlbid9XFxcIj5jaGVjazwvbWF0LWljb24+XFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjYW5jZWw+XFxuICAgICAgICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzoncmVkJ31cXFwiPmNhbmNlbDwvbWF0LWljb24+XFxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgICAgPC9tYXQtY2VsbD5cXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxcblxcbiAgICAgICAgPCEtLSBCdXR0b24gQ29sdW1uLS0+XFxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWN0aW9uXFxcIiA+XFxuXFxuICAgICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+PC9tYXQtaGVhZGVyLWNlbGw+XFxuXFxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImNoZWNrSWZEaXNhYmxlKGVsZW1lbnQpIDt0aGVuIGNhbmNlbEJ0biBlbHNlIEJ0blxcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjYW5jZWxCdG4+XFxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIkluc2NyaXB0aW9uXFxcIiBkaXNhYmxlZD5cXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiIChjbGljayk9XFxcInVuU3Vic2NyaWJlKGVsZW1lbnQuSWQpXFxcIj5jaGVjazwvbWF0LWljb24+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjQnRuPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJJbnNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOicjNDRjMzQ0J31cXFwiIChjbGljayk9XFxcInVuU3Vic2NyaWJlKGVsZW1lbnQuSWQpXFxcIj5jaGVjazwvbWF0LWljb24+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgICA8L21hdC1jZWxsPlxcblxcbiAgICAgICAgPC9uZy1jb250YWluZXI+XFxuXFxuXFxuICAgICAgICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cXFwiZGlzcGxheWVkQ29sdW1uc1xcXCI+PC9tYXQtaGVhZGVyLXJvdz5cXG4gICAgICAgIDxtYXQtcm93ICptYXRSb3dEZWY9XFxcImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XFxcIj48L21hdC1yb3c+XFxuICAgICAgPC9tYXQtdGFibGU+XFxuXFxuICAgICAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XFxcIlsxMF1cXFwiIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5cXG4gICAgPC9kaXY+XFxuXFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuICA8bWF0LWdyaWQtdGlsZT5cXG4gICAgPG1hdC1jYXJkID5cXG4gICAgICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT5cXG4gICAgICAgICAgPG1hdC1pY29uPnBlcnNvbjwvbWF0LWljb24+XFxuICAgICAgICAgIDxzcGFuPiB7e1VzZXIubGFzdE5hbWV9fSB7e1VzZXIuZmlyc3ROYW1lfX08L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJMaXN0ZSBQYXJ0aWNpcGFudFxcXCIgc3R5bGU9XFxcImZsb2F0IDogcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDxtYXQtaWNvbiAoY2xpY2spPVxcXCJvcGVuRGlhbG9nKClcXFwiPmVkaXQ8L21hdC1pY29uPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XFxuICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG4gICAgICA8L21hdC1saXN0LWl0ZW0+XFxuXFxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XFxuICAgICAgICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgICAgICAgPGgzPkVtYWlsPC9oMz5cXG4gICAgICAgICAgPHA+e3tVc2VyLkVtYWlsfX08L3A+XFxuICAgICAgICAgIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxcbiAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxcblxcbiAgICAgICAgPG1hdC1saXN0LWl0ZW0+XFxuICAgICAgICAgIDxoMz5BYm9ubmVtZW50PC9oMz5cXG4gICAgICAgICAgPHA+e3tVc2VyLmFib25uZW1lbnR9fTwvcD5cXG4gICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XFxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XFxuXFxuICAgICAgICA8bWF0LWxpc3QtaXRlbT5cXG4gICAgICAgICAgPGgzPkpvdXI8L2gzPlxcbiAgICAgICAgICAgIDxwICpuZ0Zvcj1cXFwibGV0IHNlc3Mgb2YgVXNlci50eXBlU2Vzc2lvbnNcXFwiPnt7c2Vzcy5EYXl9fSB7e3Nlc3MuVGltZX19PC9wPlxcbiAgICAgICAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cXG4gICAgICAgIDwvbWF0LWxpc3QtaXRlbT5cXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XFxuXFxuICAgIDwvbWF0LWNhcmQ+XFxuICA8L21hdC1ncmlkLXRpbGU+XFxuXFxuPC9tYXQtZ3JpZC1saXN0PlxcblxcblxcblxcblxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvYXBpLnNlcnZpY2VcIjtcbmltcG9ydCB7TWF0U2VsZWN0fSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0XCI7XG5pbXBvcnQge2VkaXRQcm9maWxlSW50ZXJmYWNlLCBJbnNjcmlwdGlvbiwgU2Vzc2lvbnMsIFR5cGVTZXNzaW9uLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZS9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5cbi8vdG9kbyBkaXNwbGF5IHVuc3ViIGVycm9yXG4vL3RvZG8gZGlzcGxheSB0eXBlIGFib1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0LXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBkYXlzID0gdGhpcy50b29sLmRheXM7XG4gIHB1YmxpYyBkYXk7XG4gIHB1YmxpYyBlcnJvciA6IHN0cmluZztcbiAgcHVibGljIGxpc3RUeXBlU2Vzc2lvbjogVHlwZVNlc3Npb25bXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RWRpdFByb2ZpbGVDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVXNlcixcbiAgICBwcml2YXRlIGFwaSA6IEFwaVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UpIHtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2RheVNlbGVjdCcse3N0YXRpYzpmYWxzZX0pIGRheVNlbGVjdDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKCdkYXlTZWxlY3QyJyx7c3RhdGljOmZhbHNlfSkgZGF5U2VsZWN0MjogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKCd0aW1lU2VsZWN0Jyx7c3RhdGljOmZhbHNlfSkgdGltZVNlbGVjdDogTWF0U2VsZWN0O1xuICBAVmlld0NoaWxkKCd0aW1lU2VsZWN0Micse3N0YXRpYzpmYWxzZX0pIHRpbWVTZWxlY3QyOiBNYXRTZWxlY3Q7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hcGkuZ2V0VHlwZVNlc3Npb24oKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh1cmxkYXRhKTtcbiAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoL1wiaWRUeXBlU2Vzc2lvblwiL2dpLCBcIlxcXCJpZFBlcnNvblxcXCJcIik7XG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IHRoaXMudG9vbC5pbml0VHlwZVNlc3Npb24oZGF0YSk7XG4gICAgfSlcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgRWRpdFByb2ZpbGUoZm9ybSA6IE5nRm9ybSkge1xuICAgIGxldCBlZGl0UHJvZmlsZSA6IGVkaXRQcm9maWxlSW50ZXJmYWNlID0ge1xuICAgICAgaWQgOiB0aGlzLmRhdGEuaWQsXG4gICAgICBsYXN0TmFtZSA6IGZvcm0udmFsdWUubGFzdE5hbWUsXG4gICAgICBmaXJzdE5hbWUgOiBmb3JtLnZhbHVlLmZpcnN0TmFtZSxcbiAgICAgIEVtYWlsIDogZm9ybS52YWx1ZS5FbWFpbCxcbiAgICAgIHBhc3N3b3JkIDogZm9ybS52YWx1ZS5wYXNzd29yZCA/IGZvcm0udmFsdWUucGFzc3dvcmQgOiBudWxsLFxuICAgICAgdHlwZVNlc3Npb25zIDogdGhpcy5kYXRhLnR5cGVTZXNzaW9uc1xuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhlZGl0UHJvZmlsZSk7XG5cbiAgICB0aGlzLmFwaS5wb3N0RWRpdFByb2ZpbGUoZWRpdFByb2ZpbGUpLnN1YnNjcmliZShyZXN1bHQgPT57XG4gICAgICBpZihyZXN1bHQpe1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sZXJyb3IgPT4ge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH0pXG4gIH1cblxuICBFZGl0VHlwZVNlc3Npb24odHlwZSA6IFR5cGVTZXNzaW9uKSB7XG4gICAgaWYodGhpcy5jaGVja1Nlc3Npb24odHlwZSkgPT0gbnVsbCl7XG4gICAgICBjb25zb2xlLmxvZygnYWRkICcrIHR5cGUpO1xuICAgICAgdGhpcy5kYXRhLnR5cGVTZXNzaW9ucy5wdXNoKHR5cGUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coJ2RlbCAnKyB0eXBlKTtcblxuICAgICAgdGhpcy5kYXRhLnR5cGVTZXNzaW9ucy5zcGxpY2UodGhpcy5jaGVja1Nlc3Npb24odHlwZSksMSlcbiAgICB9XG4gIH1cblxuICBjaGVja1Nlc3Npb24oc2Vzc2lvbjogVHlwZVNlc3Npb24pIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgbGV0IGkgPTA7XG4gICAgZm9yKGxldCB0eXBlIG9mIHRoaXMuZGF0YS50eXBlU2Vzc2lvbnMpe1xuICAgICAgaSArKztcbiAgICAgIHNlc3Npb24uSWQgPT0gdHlwZS5JZCA/IHN0YXRlID0gaSA6IHN0YXRlID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIFVzZXI6IFVzZXI7XG4gIHB1YmxpYyBsaXN0U2Vzc2lvbiA6IFNlc3Npb25zW109W107XG4gIHB1YmxpYyBsaXN0WWVhcjogbnVtYmVyW109W107XG4gIHB1YmxpYyB5ZWFyOiBudW1iZXI7XG4gIHB1YmxpYyB2YWx1ZTogYW55O1xuICBwdWJsaWMgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ0RhdGUnLCAnVGltZScsICdCaWtlJywgJ1N0YXR1cycsJ0FjdGlvbiddO1xuICBwdWJsaWMgdG9kYXk6IERhdGU7XG5cbiAgQFZpZXdDaGlsZCgnbWF0U2VsZWN0Jyx7c3RhdGljOmZhbHNlfSltYXRTZWxlY3QgOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG5cbiAgbW9udGhzID0gW1xuICAgIHtuYW1lIDogXCJqYW52aWVyXCIsIG51bSA6IDF9LFxuICAgIHtuYW1lIDogXCJmZXZyaXJlclwiLCBudW0gOiAyfSxcbiAgICB7bmFtZSA6IFwibWFyc1wiLCBudW0gOiAzfSxcbiAgICB7bmFtZSA6IFwiYXZyaWxcIiwgbnVtIDogNH0sXG4gICAge25hbWUgOiBcIm1haVwiLCBudW0gOiA1fSxcbiAgICB7bmFtZSA6IFwianVpblwiLCBudW0gOiA2fSxcbiAgICB7bmFtZSA6IFwianVpbGxldFwiLCBudW0gOiA3fSxcbiAgICB7bmFtZSA6IFwiYW91dFwiLCBudW0gOiA4fSxcbiAgICB7bmFtZSA6IFwic2VwdGVtYnJlXCIsIG51bSA6IDl9LFxuICAgIHtuYW1lIDogXCJvY3RvYnJlXCIsIG51bSA6IDEwfSxcbiAgICB7bmFtZSA6IFwibm92ZW1icmVcIiwgbnVtIDogMTF9LFxuICAgIHtuYW1lIDogXCJkZWNlbWJyZVwiLCBudW0gOiAxMn0sXG4gIF07XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8U2Vzc2lvbnM+O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IEFwaVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aDpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvb2w6IFRvb2xTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy55ZWFyID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZ2V0WWVhcigpO1xuICAgIHRoaXMuVXNlciA9IHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpO1xuXG4gICAgdGhpcy5hcGkuZ2V0UHJvZmlsZUpzb24odGhpcy5Vc2VyLnVzZXJuYW1lKS5zdWJzY3JpYmUoZGF0YT0+e1xuICAgICAgdGhpcy5hdXRoLmluaXRVc2VyKGRhdGEpO1xuICAgICAgdGhpcy5Vc2VyID0gdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICBsZXQgc2VzcyA6IFNlc3Npb25zW10gPSB0aGlzLlVzZXIuU2Vzc2lvbjtcbiAgICAgIGZvcihsZXQgaSA9IDA7aSA8IHRoaXMuVXNlci5TZXNzaW9uLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzLnRvb2wuY2hlY2tJZkJlZm9yZVRvZGF5KHNlc3NbaV0uRGF0ZSkpe1xuICAgICAgICAgIHRoaXMubGlzdFNlc3Npb24ucHVzaChzZXNzW2ldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMubGlzdFNlc3Npb24pO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgdGhpc1snaXNMb2FkaW5nJ10gPSBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0WWVhcigpe1xuICAgIGZvcih2YXIgaSA9ICh0aGlzLnllYXIpOyBpIDw9ICh0aGlzLnllYXIrMTApOyBpKyspe1xuICAgICAgdGhpcy5saXN0WWVhci5wdXNoKGkpO31cbiAgfVxuXG4gIHVuU3Vic2NyaWJlKElkOiBudW1iZXIpIHtcbiAgICBsZXQgdGVtcEluc2NyaXB0aW9uIDogSW5zY3JpcHRpb24gPSB7XG4gICAgICBVc2VybmFtZTp0aGlzLlVzZXIudXNlcm5hbWUsXG4gICAgICBJZDogSWRcbiAgICB9O1xuXG4gICAgdGhpcy5hcGkuZGVsSW5zY3JpcHRpb24odGVtcEluc2NyaXB0aW9uKS5zdWJzY3JpYmUodXJsZGF0YT0+e1xuICAgICAgaWYodXJsZGF0YVtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrSWZEaXNhYmxlKGVsZW1lbnQpIDogYm9vbGVhbntcbiAgICByZXR1cm4gKGVsZW1lbnQuRGF0ZSA9PT0gdGhpcy50b29sLnN3aXRjaFByb2ZpbGVEYXRlKHRoaXMudG9kYXkpKVxuICB9XG5cbiAgb3BlbkRpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEVkaXRQcm9maWxlQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICAgIGRhdGE6IHRoaXMuVXNlclxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLm5nT25Jbml0KClcbiAgICB9KTtcbiAgfVxuXG4gIHN3aXRjaERhdGUoRGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnRvb2wuc3dpdGNoUHJvZmlsZURhdGUoRGF0ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXV0aExvZ2luRGF0YSwgQXV0aFNpZ251cERhdGEsIGVkaXRBYm8sIEluc2NyaXB0aW9uLCBTZXNzaW9ucywgVHlwZVNlc3Npb259IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge2NhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gIHB1YmxpYyBpcCA9IFwiaHR0cDovLzUxLjE3OC4yOS4xNjI6MzAwMFwiO1xuICAvLyBwdWJsaWMgaXAgPSBcImh0dHBzOi8vMTI3LjAuMC4xOjgwMDBcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOlJvdXRlcikgeyB9XG5cbiAgZ2V0SG9tZUpzb24oKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmlwICsgJy9hcGknKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBnZXRNb250aEpzb24obW9udGgseWVhcil7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvbW9udGgvXCIgKyBtb250aCArIFwiL1wiICsgeWVhcjtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGdldFByb2ZpbGVKc29uKHVzZXJuYW1lKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9wcm9maWxlL1wiICsgdXNlcm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBnZXRBYm9Kc29uKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5pcCArICcvYXBpL2FkbWluL2Fib25uZW1lbnQnKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBwb3N0QWJvUmVuZXcoaWQpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL3JlbmV3QWJvXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLHtJZDppZH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGVkaXRBYm9UeXBlKG5ld0Fib1R5cGUgOiBlZGl0QWJvKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi9lZGl0QWJvXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLG5ld0Fib1R5cGUpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIHBvc3RDYW5jZWxTZXNzKGlkKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi9DYW5jZWxcIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwse0lkOmlkfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgcG9zdFJlbmV3U2VzcyhpZCxiaWtlKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi9yZWNyZWF0ZVwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCx7SWQ6aWQsQmlrZTpiaWtlfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZGVsZXRlU2VzcyhpZCl7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvYWRtaW4vc2Vzc2lvbi9cIiArIGlkIDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGNyZWF0ZU5ld1Nlc3MobmV3U2VzcyA6IFNlc3Npb25zKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9hZG1pbi9zZXNzaW9uXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCxuZXdTZXNzKS5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgcG9zdEdlbmVyYXRlU2Vzc2lvbkF1dG8oeWVhcixsaXN0LGJpa2Upe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL2F1dG9jcmVhdGVcIjtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLHt5ZWFyOnllYXIsYmlrZTpiaWtlLGlkVHlwZVNlc3Npb246bGlzdH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGNyZWF0ZUluc2NyaXB0aW9uKG5ld0luc2NyaXB0aW9uIDogSW5zY3JpcHRpb24pe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL0luc2NyaXB0aW9uXCI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCxuZXdJbnNjcmlwdGlvbikucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZGVsSW5zY3JpcHRpb24obmV3SW5zY3JpcHRpb24gOiBJbnNjcmlwdGlvbil7XG4gICAgbGV0IHVybCA9IHRoaXMuaXAgKyBcIi9hcGkvRGVzaW5zY3JpcHRpb24vXCIgKyBuZXdJbnNjcmlwdGlvbi5Vc2VybmFtZSArIFwiL1wiICsgbmV3SW5zY3JpcHRpb24uSWQ7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBwb3N0TG9naW4oYXV0aERhdGEgOiBBdXRoTG9naW5EYXRhKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArJy9hcGkvbG9naW4nO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDx7cmVzdWx0OiBib29sZWFufT4odXJsLCBhdXRoRGF0YSkucGlwZShcbiAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBwb3N0RWRpdFByb2ZpbGUoZWRpdFByb2ZpbGUpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgJy9hcGkvZWRpdFByb2ZpbGUnO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0PHtyZXN1bHQgOiBib29sZWFufT4odXJsLCBlZGl0UHJvZmlsZSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZ2V0VHlwZVNlc3Npb24oKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9UeXBlU2Vzc2lvblwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZGVsVHlwZVNlc3Npb24oSWQgOiBudW1iZXIpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL1R5cGVTZXNzaW9uL1wiICsgSWQ7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRlbEVycm9yKSk7XG4gIH1cblxuICBhZGRUeXBlU2Vzc2lvbih0eXBlU2Vzc2lvbiA6IFR5cGVTZXNzaW9uKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9UeXBlU2Vzc2lvblwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsdHlwZVNlc3Npb24pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGVkaXRUeXBlU2Vzc2lvbih0eXBlU2Vzc2lvbiA6IFR5cGVTZXNzaW9uKXtcbiAgICBsZXQgdXJsID0gdGhpcy5pcCArIFwiL2FwaS9UeXBlU2Vzc2lvblwiO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCx0eXBlU2Vzc2lvbikucGlwZShcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kZWxFcnJvcikpO1xuICB9XG5cbiAgZGVsVXNlcihJZDpudW1iZXIpe1xuICAgIGxldCB1cmwgPSB0aGlzLmlwICsgXCIvYXBpL2FkbWluL3VzZXIvXCIgKyBJZDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGVsRXJyb3IpKTtcbiAgfVxuXG4gIGhhbmRlbEVycm9yKGVycil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2Upe1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyLmVycm9yLmVycm9yKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyci5tZXNzYWdlKVxuICAgIH1cblxuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N1YmplY3QsIE9ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBdXRoTG9naW5EYXRhLCBBdXRoU2lnbnVwRGF0YSwgU2Vzc2lvbnMsIFVzZXJ9IGZyb20gXCIuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZVwiO1xuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gXCIuL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQge2NhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4vdG9vbC5zZXJ2aWNlJztcblxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgcHVibGljIGF1dGhTdGF0dXNMaXN0ZW5lciA6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpOyAvLyBqdXN0IG5lZWQgdG8ga25vdyBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgcHVibGljIGRhdGE6IEpTT05bXTtcbiAgcHVibGljIFVzZXI6IFVzZXI7XG4gIHB1YmxpYyBlcnJvckxpc3RlbmVyIDogU3ViamVjdDxTdHJpbmc+ID0gIG5ldyBTdWJqZWN0PFN0cmluZz4oKTtcbiAgcHVibGljIGlwID0gXCJodHRwOi8vNTEuMTc4LjI5LjE2MjozMDAwXCI7XG4gIC8vIHB1YmxpYyBpcCA9IFwiaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMFwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb29raWUgOiBDb29raWVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGFwaTogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UpIHt9XG5cbiAgZ2V0SXNBdXRoKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuY29va2llLmdldCgnY29ubmVjdGVkJykpO1xuICB9XG5cbiAgZ2V0QXV0aFN0YXR1c0xpc3RlbmVyKCkgOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTdGF0dXNMaXN0ZW5lci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldEVycm9yTGlzdGVuZXIoKSA6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JMaXN0ZW5lci5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRVc2VyKCk6VXNlcntcbiAgICAvLyB0aGlzLnVwZGF0ZVVzZXIoKTtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNvb2tpZS5nZXQoJ3VzZXInKSk7XG4gIH1cblxuICBjcmVhdGVVc2VyKGF1dGhEYXRhIDogQXV0aFNpZ251cERhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmlwICsgJy9hcGkvcmVnaXN0ZXInLCBhdXRoRGF0YSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoXG4gICAgICAgIChlcnIgOiBhbnkpID0+IHtcbiAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIuZXJyb3IuZXJyb3JzKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVyci5tZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBsb2dpblVzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIGxldCBhdXRoRGF0YTogQXV0aExvZ2luRGF0YSA9IHtVc2VybmFtZTp1c2VybmFtZSxwYXNzd29yZDpwYXNzd29yZH07XG5cbiAgICB0aGlzLmFwaS5wb3N0TG9naW4oYXV0aERhdGEpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2VbXCJyZXN1bHRcIl0gPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVtcInVzZXJcIl0gKTtcbiAgICAgICAgICB0aGlzLmFwaS5nZXRQcm9maWxlSnNvbih1c2VybmFtZSkuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlOyAvLyBuZWVkZWQgdG8gdXBkYXRlIGF1dGhlbnRpY2F0aW9uIHN0YXR1c1xuICAgICAgICAgICAgdGhpcy5pbml0VXNlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuYXV0aFN0YXR1c0xpc3RlbmVyLm5leHQodHJ1ZSk7Ly8gdGVsbGluZyBldmVyeW9uZSB3aG8gaXMgaW50ZXJlc3RlZCB0aGF0IHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxlcnJvciA9PntcbiAgICAgICAgdGhpcy5lcnJvckxpc3RlbmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgdGhpcy5hdXRoU3RhdHVzTGlzdGVuZXIubmV4dChmYWxzZSk7XG4gICAgICAgIHRoaXMuZXJyb3JMaXN0ZW5lciA9IG5ldyBTdWJqZWN0PFN0cmluZz4oKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaW5pdFVzZXIoZGF0YSl7XG4gICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgdGhpcy5Vc2VyID0ge1xuICAgICAgaWQ6IHRoaXMuZGF0YVtcImlkXCJdLFxuICAgICAgdXNlcm5hbWUgOiB0aGlzLmRhdGFbXCJVc2VybmFtZVwiXSxcbiAgICAgIGxhc3ROYW1lOiB0aGlzLmRhdGFbXCJMYXN0TmFtZVwiXSxcbiAgICAgIGZpcnN0TmFtZTogdGhpcy5kYXRhW1wiRmlyc3ROYW1lXCJdLFxuICAgICAgYWJvbm5lbWVudDogdGhpcy5kYXRhW1wiQWJvbm5lbWVudFwiXSxcbiAgICAgIHR5cGVTZXNzaW9ucyA6IFtdLFxuICAgICAgRW1haWw6IHRoaXMuZGF0YVtcIkVtYWlsXCJdLFxuICAgICAgU2Vzc2lvbjogW10sXG4gICAgICBSb2xlOiB0aGlzLmRhdGFbXCJyb2xlc1wiXVxuICAgIH07XG5cbiAgICBmb3IobGV0IHR5cGVTZXNzIG9mIHRoaXMuZGF0YVtcIklkVHlwZVNlc3Npb25cIl0pe1xuICAgICB0aGlzLlVzZXIudHlwZVNlc3Npb25zLnB1c2goe1xuICAgICAgICBJZCA6IHR5cGVTZXNzW1wiSWRUeXBlU2Vzc2lvblwiXVtcImlkXCJdLFxuICAgICAgICBEYXkgOiB0aGlzLnRvb2wuZGF5U3dpdGgodHlwZVNlc3NbXCJJZFR5cGVTZXNzaW9uXCJdW1wiZGF5XCJdKSxcbiAgICAgICAgVGltZSA6IHR5cGVTZXNzW1wiSWRUeXBlU2Vzc2lvblwiXVtcInRpbWVcIl0uc3BsaXQoJyAnKVsxXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGluc2NyaXB0aW9uID0gdGhpcy5kYXRhW1wiaWRJbnNjcmlwdGlvblwiXTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnNjcmlwdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5Vc2VyLlNlc3Npb24ucHVzaCh0aGlzLnRvb2wuaW5pdFRlbXBTZXNzKGluc2NyaXB0aW9uW2ldW1wiaWRTZXNzaW9uXCJdLGluc2NyaXB0aW9uW2ldW1wiaWRTZXNzaW9uXCJdW1wiZGF0ZVwiXSkpO1xuICAgIH1cbiAgICB0aGlzLmNvb2tpZS5zZXQoJ3VzZXInLEpTT04uc3RyaW5naWZ5KHRoaXMuVXNlcikpO1xuICAgIHRoaXMuY29va2llLnNldCgnY29ubmVjdGVkJyxcInRydWVcIik7XG5cbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuYXV0aFN0YXR1c0xpc3RlbmVyLm5leHQoZmFsc2UpO1xuICAgIHRoaXMuY29va2llLmRlbGV0ZSgndXNlcicpO1xuICAgIHRoaXMuY29va2llLmRlbGV0ZSgnc2Vzc2lvbicpO1xuICAgIHRoaXMuY29va2llLmRlbGV0ZSgnY29ubmVjdGVkJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2Vzc2lvbnMsIFR5cGVTZXNzaW9uLCBVc2VyfSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5pbXBvcnQge05neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lfSBmcm9tICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcic7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHN9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERheXMge1xuICBjb2RlIDogc3RyaW5nLFxuICBub20gOiBzdHJpbmcsXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgVG9vbFNlcnZpY2Uge1xuICBnZXQgaXNIYW5kc2V0JCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5faXNIYW5kc2V0JDtcbiAgfVxuICBwcml2YXRlIF9pc0hhbmRzZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgQnJlYWtwb2ludHMuSGFuZHNldExhbmRzY2FwZSxcbiAgICBCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXQsXG4gICAgQnJlYWtwb2ludHMuVGFibGV0TGFuZHNjYXBlLFxuICAgIEJyZWFrcG9pbnRzLlRhYmxldFBvcnRyYWl0XSlcbiAgICAucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0Lm1hdGNoZXMpLFxuICAgICAgc2hhcmVSZXBsYXkoKVxuICAgICk7XG4gIGdldCBkYXlzKCk6IERheXNbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RheXM7XG4gIH1cbiAgZ2V0IGRhcmtUaGVtZSgpOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhcmtUaGVtZTtcbiAgfVxuXG4gIHByaXZhdGUgX2RhcmtUaGVtZTogTmd4TWF0ZXJpYWxUaW1lcGlja2VyVGhlbWUgPSB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBib2R5QmFja2dyb3VuZENvbG9yOiAnIzQyNDI0MicsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmYnXG4gICAgfSxcbiAgICBkaWFsOiB7XG4gICAgICBkaWFsQmFja2dyb3VuZENvbG9yOiAnIzU1NScsXG4gICAgfSxcbiAgICBjbG9ja0ZhY2U6IHtcbiAgICAgIGNsb2NrRmFjZUJhY2tncm91bmRDb2xvcjogJyM1NTUnLFxuICAgICAgY2xvY2tIYW5kQ29sb3I6ICcjOWZiZDkwJyxcbiAgICAgIGNsb2NrRmFjZVRpbWVJbmFjdGl2ZUNvbG9yOiAnI2ZmZidcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgX2RheXMgOiBEYXlzW10gPVtcbiAgICB7Y29kZTpcIk1vblwiLG5vbTpcIkx1bmRpXCJ9LFxuICAgIHtjb2RlOlwiVHVlXCIsbm9tOlwiTWFyZGlcIn0sXG4gICAge2NvZGU6XCJXZWRcIixub206XCJNZXJjcmVkaVwifSxcbiAgICB7Y29kZTpcIlRodVwiLG5vbTpcIkpldWRpXCJ9LFxuICAgIHtjb2RlOlwiRnJ5XCIsbm9tOlwiVmVuZHJlZGlcIn0sXG4gICAge2NvZGU6XCJTYXRcIixub206XCJTYW1lZGlcIn0sXG4gICAge2NvZGU6XCJTdW5cIixub206XCJEaW1hbmNoZVwifSxcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7IH1cblxuICBkYXlTd2l0aChkYXkpe1xuXG4gICAgbGV0IGo7XG4gICAgc3dpdGNoIChkYXkpIHtcbiAgICAgIGNhc2UgJ01vbicgOiB7aiA9ICdMdW5kaSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ1R1ZScgOiB7aiA9ICdNYXJkaSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ1dlZCcgOiB7aiA9ICdNZXJjcmVkaSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ1RodScgOiB7aiA9ICdKZXVkaSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ0ZyeScgOiB7aiA9ICdWZW5kcmVkaSc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ1NhdCcgOiB7aiA9ICdTYW1lZGknOyBicmVhazt9XG4gICAgICBjYXNlICdTdW4nIDoge2ogPSAnRGltYW5jaGUnOyBicmVhazt9XG4gICAgICBjYXNlICdOdWxsJyA6IHtqID0gJ051bGwnOyBicmVhazt9XG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBpbnZEYXlTd2l0Y2goZGF5KXtcbiAgICBsZXQgajtcbiAgICBzd2l0Y2ggKGRheSkge1xuICAgICAgY2FzZSAnTHVuZGknIDoge2ogPSAnTW9uJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnTWFyZGknIDoge2ogPSAnVHVlJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnTWVyY3JlZGknIDoge2ogPSAnV2VkJzsgYnJlYWs7fVxuICAgICAgY2FzZSAnSmV1ZGknIDoge2ogPSAnVGh1JzsgYnJlYWs7fVxuICAgICAgY2FzZSAnVmVuZHJlZGknIDoge2ogPSAnRnJ5JzsgYnJlYWs7fVxuICAgICAgY2FzZSAnU2FtZWRpJyA6IHtqID0gJ1NhdCc7IGJyZWFrO31cbiAgICAgIGNhc2UgJ0RpbWFuY2hlJyA6IHtqID0gJ1N1bic7IGJyZWFrO31cbiAgICAgIGNhc2UgJ051bGwnIDoge2ogPSAnTnVsbCc7IGJyZWFrO31cbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHN3aXRjaERhdGUoZCA6IERhdGUpIDogc3RyaW5ne1xuICAgIGxldCBqIDogc3RyaW5nO1xuICAgIHN3aXRjaCAoZC5nZXREYXkoKSkge1xuICAgICAgY2FzZSAxIDoge2ogPSBcIkx1bmRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgMiA6IHtqID0gXCJNYXJkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDMgOiB7aiA9IFwiTWVyY3JlZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSA0IDoge2ogPSBcIkpldWRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgNSA6IHtqID0gXCJWZW5kcmVkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDYgOiB7aiA9IFwiU2FtZWRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgMCA6IHtqID0gXCJEaW1hbmNoZSBcIjsgYnJlYWt9XG4gICAgfVxuICAgIHJldHVybiBqICsgZC5nZXREYXRlKClcbiAgfVxuXG4gIGluaXRUZW1wU2VzcyhkYXRhIDogSlNPTiwgZGF0ZSkgOiBTZXNzaW9uc3tcbiAgICBsZXQgZCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIHJldHVybiB7XG4gICAgICBEYXRlOiBkLnRvSVNPU3RyaW5nKCksXG4gICAgICBUaW1lOiBkYXRhW1widGltZVwiXS5zcGxpdCgnICcpWzFdLFxuICAgICAgQmlrZTogZGF0YVtcImJpa2VcIl0sXG4gICAgICBDYW5jZWw6IGRhdGFbXCJDYW5jZWxcIl0sXG4gICAgICBJZDogZGF0YVtcImlkXCJdLFxuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZCZWZvcmVUb2RheShkYXRlKXtcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XG4gICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpLTEpO1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKSA+PSBkXG4gIH1cblxuICBzd2l0Y2hQcm9maWxlRGF0ZShkKSA6IHN0cmluZ3tcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGQpO1xuICAgIGxldCBqO1xuICAgIHN3aXRjaCAoZGF0ZS5nZXREYXkoKSkge1xuICAgICAgY2FzZSAxOntqID0gXCJMdW5kaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDI6e2ogPSBcIk1hcmRpIFwiOyBicmVha31cbiAgICAgIGNhc2UgMzp7aiA9IFwiTWVyY3JlZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSA0OntqID0gXCJqZXVkaSBcIjsgYnJlYWt9XG4gICAgICBjYXNlIDU6e2ogPSBcIlZlbmRyZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSA2OntqID0gXCJTYW1lZGkgXCI7IGJyZWFrfVxuICAgICAgY2FzZSAwOntqID0gXCJEaW1hbmNoZSBcIjsgYnJlYWt9XG4gICAgfVxuICAgIGxldCBtb250aHMgPSBbXCJKYW52aWVyXCIsXCJGw6l2cmllclwiLFwiTWFyc1wiLFwiQXZyaWxcIixcIk1haVwiLFwiSnVpblwiLFwiSnVpbGxldFwiLFwiQW91dFwiLFwiU2VwdGVtYnJlXCIsXCJPY3RvYnJlXCIsXCJOb3ZlbWJyZVwiLFwiRGVjZW1icmVcIl07XG4gICAgcmV0dXJuIGogKyBkYXRlLmdldERhdGUoKSArIFwiIFwiICsgIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICsgXCIgXCIgKyBkYXRlLmdldEZ1bGxZZWFyKClcbiAgfVxuXG4gIGluaXRMaXN0UGVyc0RldGFpbChsaXN0UGVycyk6IFVzZXJbXXtcbiAgICBsZXQgdGVtcFBlcnMgOiBVc2VyW10gPSBbXTtcbiAgICBmb3IobGV0IHBlcnMgb2YgbGlzdFBlcnMpe1xuICAgICAgbGV0IGlkUGVyc29uO1xuICAgICAgaWYocGVyc1tcIklkUGVyc29uXCJdKXtcbiAgICAgICAgaWRQZXJzb24gPSBwZXJzW1wiSWRQZXJzb25cIl1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZFBlcnNvbiA9IHBlcnNbXCJpZFBlcnNvblwiXVxuICAgICAgfVxuICAgICAgdGVtcFBlcnMucHVzaCh7XG4gICAgICAgIGxhc3ROYW1lIDogaWRQZXJzb25bXCJsYXN0TmFtZVwiXSxcbiAgICAgICAgZmlyc3ROYW1lIDogaWRQZXJzb25bXCJmaXJzdE5hbWVcIl0sXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdGVtcFBlcnM7XG4gIH1cblxuICBpbml0VHlwZVNlc3Npb24oc3RyIDogc3RyaW5nKSA6IFR5cGVTZXNzaW9uW117XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1wiZGF5XCIvZ2ksIFwiXFxcIkRheVxcXCJcIik7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1widGltZVwiL2dpLCBcIlxcXCJUaW1lXFxcIlwiKTtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICBsZXQgdHlwZVNlc3Npb24gOiBUeXBlU2Vzc2lvbltdID0gW107XG4gICAgZm9yKGxldCB0eXBlIG9mIGRhdGEpe1xuICAgICAgbGV0IFR5cGVTZXNzO1xuICAgICAgaWYodHlwZVtcIklkVHlwZVNlc3Npb25cIl0pe1xuICAgICAgICBUeXBlU2VzcyA9IHR5cGVbXCJJZFR5cGVTZXNzaW9uXCJdXG4gICAgICB9ZWxzZSBpZih0eXBlW1wiaWRUeXBlU2Vzc2lvblwiXSl7XG4gICAgICAgIFR5cGVTZXNzID0gdHlwZVtcImlkVHlwZVNlc3Npb25cIl1cbiAgICAgIH1lbHNle1xuICAgICAgICBUeXBlU2VzcyA9IHR5cGVcbiAgICAgIH1cbiAgICAgIGxldCB0ZW1wVHlwZSA6IFR5cGVTZXNzaW9uID0ge1xuICAgICAgICBJZCA6IFR5cGVTZXNzW1wiaWRcIl0sXG4gICAgICAgIERheSA6IHRoaXMuZGF5U3dpdGgoVHlwZVNlc3NbXCJEYXlcIl0pLFxuICAgICAgICBUaW1lIDogVHlwZVNlc3NbXCJUaW1lXCJdLnNwbGl0KCcgJylbMV0sXG4gICAgICB9O1xuXG4gICAgICBpZih0eXBlW1wiaWRUeXBlU2Vzc2lvblwiXSl7XG4gICAgICAgIHRlbXBUeXBlLlBlcnNvbiA9IHRoaXMuaW5pdExpc3RQZXJzRGV0YWlsKFR5cGVTZXNzW1wiaWRUeXBlU2Vzc2lvblwiXSlcbiAgICAgIH1lbHNlIGlmKHR5cGVbXCJpZFBlcnNvblwiXSl7XG4gICAgICAgIHRlbXBUeXBlLlBlcnNvbiA9IHRoaXMuaW5pdExpc3RQZXJzRGV0YWlsKFR5cGVTZXNzW1wiaWRQZXJzb25cIl0pXG4gICAgICB9XG4gICAgICB0eXBlU2Vzc2lvbi5wdXNoKHRlbXBUeXBlKVxuICAgIH1cbiAgICByZXR1cm4gdHlwZVNlc3Npb247XG4gIH1cblxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIm1hdC1jYXJke1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxubWF0LWZvcm0tZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1hdC1zcGlubmVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIlxcbjxtYXQtY2FyZD5cXG4gIDxtYXQtZXJyb3IgKm5nSWY9XFxcImVycm9yXFxcIj4ge3tlcnJvcn19IDwvbWF0LWVycm9yPlxcblxcbiAgPG1hdC1zcGlubmVyICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvbWF0LXNwaW5uZXI+XFxuXFxuICA8Zm9ybSAoc3VibWl0KT1cXFwib25TaWdudXAoc2lnbnVwRm9ybSlcXFwiICNzaWdudXBGb3JtPVxcXCJuZ0Zvcm1cXFwiICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIj5cXG5cXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwiZW1haWxcXFwiIG5nTW9kZWwgdHlwZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJFLU1haWxcXFwiICNlbWFpbElucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCBlbWFpbD5cXG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XFxcImVtYWlsSW5wdXQuaW52YWxpZFxcXCI+cGxlYXNlIGVudGVyIHZhbGlkIGVtYWlsPC9tYXQtZXJyb3I+XFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwidXNlcm5hbWVcXFwiIG5nTW9kZWwgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVzZXJuYW1lXFxcIiAjdXNlcm5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgdXNlcm5hbWU+XFxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJ1c2VybmFtZUlucHV0LmludmFsaWRcXFwiPnBsZWFzZSBlbnRlciB2YWxpZCBVc2VybmFtZTwvbWF0LWVycm9yPlxcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcIk5vbVxcXCIgbmdNb2RlbCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiTm9tXFxcIiAjdXNlcm5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJ1c2VybmFtZUlucHV0LmludmFsaWRcXFwiPnBsZWFzZSBlbnRlciB2YWxpZCBVc2VybmFtZTwvbWF0LWVycm9yPlxcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcIlByZW5vbVxcXCIgbmdNb2RlbCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiUHJlbm9tXFxcIiAjdXNlcm5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJ1c2VybmFtZUlucHV0LmludmFsaWRcXFwiPnBsZWFzZSBlbnRlciB2YWxpZCBVc2VybmFtZTwvbWF0LWVycm9yPlxcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XFxuXFxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcIkFib25uZW1lbnRcXFwiIG5nTW9kZWwgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiQWJvbm5lbWVudFxcXCIgI3VzZXJuYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwidXNlcm5hbWVJbnB1dC5pbnZhbGlkXFxcIj5wbGVhc2UgZW50ZXIgdmFsaWQgVXNlcm5hbWU8L21hdC1lcnJvcj5cXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICAgIDxuZy1jb250YWluZXI+XFxuICAgICAgICA8dWwgKm5nRm9yPVxcXCJsZXQgc2Vzc2lvbiBvZiBsaXN0VHlwZVNlc3Npb25cXFwiID5cXG4gICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cXFwiYWRkVHlwZVNlc3Npb24oc2Vzc2lvbi5JZClcXFwiPlxcbiAgICAgICAgICAgIHt7c2Vzc2lvbi5EYXl9fSB7e3Nlc3Npb24uVGltZX19XFxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgICAgICA8bGFiZWw+XFxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBuYW1lPVxcXCJwYXNzd29yZFxcXCIgbmdNb2RlbCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIiAjcGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgcGFzc3dvcmQ+XFxuICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj5wbGVhc2UgZW50ZXIgdmFsaWQgcGFzc3dvcmQ8L21hdC1lcnJvcj5cXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgICAgIDxsYWJlbD5cXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IG5hbWU9XFxcInBhc3N3b3JkQ29uZmlybWF0aW9uXFxcIiBuZ01vZGVsIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiUmVwZWF0IFBhc3N3b3JkXFxcIiAjcGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgcGFzc3dvcmQ+XFxuICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj5wbGVhc2UgZW50ZXIgdmFsaWQgcGFzc3dvcmQ8L21hdC1lcnJvcj5cXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiPlMnaW5zY3JpcmU8L2J1dHRvbj5cXG4gICAgICA8cD5cXG4gICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT4qIDogY2hhbXBzIHJlcXVpczwvbWF0LWNhcmQtc3VidGl0bGU+XFxuICAgICAgPC9wPlxcbiAgPC9mb3JtPlxcbjwvbWF0LWNhcmQ+XFxuXFxuXCIiLCJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtNYXRTZWxlY3R9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3RcIjtcbmltcG9ydCB7QXV0aFNpZ251cERhdGEsIFNlc3Npb25zLCBUeXBlU2Vzc2lvbiwgVXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1Rvb2xTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL3Rvb2wuc2VydmljZSc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuXG4vL3RvZG8gYXV0byBzdWJzY3JpYmUgdG8gc2Vzc2lvbiBpbiBmdW5jdGlvbiBvZiBoaXMgc3Vic2NyaXB0aW9uXG4vL3RvZG8gbW9kaWZpY2F0aW9uIGJhc2UgZGUgZG9ubsOpZSBwb3VyIGxpYWlzb24gZW50cmUgdHlwZSBkZSBzZXNzaW9uIGV0IHV0aWxpc2F0ZXVyXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbnVwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXR7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgdXNlcjogVXNlcjtcbiAgZGF5cyA9IHRoaXMudG9vbC5kYXlzO1xuICBwdWJsaWMgbGlzdFR5cGVTZXNzaW9uOiBUeXBlU2Vzc2lvbltdO1xuICBlcnJvcjtcblxuICBAVmlld0NoaWxkKCdkYXlTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSBkYXlTZWxlY3Q6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZCgnZGF5U2VsZWN0Micse3N0YXRpYzpmYWxzZX0pIGRheVNlbGVjdDI6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZCgndGltZVNlbGVjdCcse3N0YXRpYzpmYWxzZX0pIHRpbWVTZWxlY3Q6IE1hdFNlbGVjdDtcbiAgQFZpZXdDaGlsZCgndGltZVNlbGVjdDInLHtzdGF0aWM6ZmFsc2V9KSB0aW1lU2VsZWN0MjogTWF0U2VsZWN0O1xuICBwcml2YXRlIGxpc3RUeXBlU2Vzc2lvbklkOiBudW1iZXJbXSA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgdG9vbCA6IFRvb2xTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGFwaSA6IEFwaVNlcnZpY2UpIHsgfVxuXG4gIG9uU2lnbnVwKGZvcm06IE5nRm9ybSkge1xuICAgIGlmIChmb3JtLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgYXV0aERhdGE6IEF1dGhTaWdudXBEYXRhID0ge1xuICAgICAgZW1haWw6IGZvcm0udmFsdWUuZW1haWwsXG4gICAgICB1c2VybmFtZTogZm9ybS52YWx1ZS51c2VybmFtZSxcbiAgICAgIE5vbTogZm9ybS52YWx1ZS5Ob20sXG4gICAgICBQcmVub206IGZvcm0udmFsdWUuUHJlbm9tLFxuICAgICAgQWJvbm5lbWVudDogTnVtYmVyKGZvcm0udmFsdWUuQWJvbm5lbWVudCksXG4gICAgICB0eXBlU2Vzc2lvbnMgOiBbXSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246IGZvcm0udmFsdWUucGFzc3dvcmRDb25maXJtYXRpb24sXG4gICAgfTtcblxuXG4gICAgZm9yKGxldCBzZXNzaW9uIG9mIHRoaXMubGlzdFR5cGVTZXNzaW9uKXtcbiAgICAgIGlmKHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuaW5kZXhPZihzZXNzaW9uLklkKSAhPSAtMSl7XG4gICAgICAgIGF1dGhEYXRhLnR5cGVTZXNzaW9ucy5wdXNoKHNlc3Npb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXV0aFNlcnZpY2UuY3JlYXRlVXNlcihhdXRoRGF0YSkuc3Vic2NyaWJlKChuZXh0KT0+e1xuICAgICAgaWYobmV4dFtcInJlc3VsdFwiXSl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgfVxuICAgIH0sZXJyb3IxID0+IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjE7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFwaS5nZXRUeXBlU2Vzc2lvbigpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXJsZGF0YSkpO1xuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb24gPSBbXTtcbiAgICAgIGZvcihsZXQgdHlwZSBvZiBkYXRhKXtcbiAgICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb24gLnB1c2goe1xuICAgICAgICAgIElkIDogdHlwZVtcImlkXCJdLFxuICAgICAgICAgIERheSA6IHRoaXMudG9vbC5kYXlTd2l0aCh0eXBlW1wiRGF5XCJdKSxcbiAgICAgICAgICBUaW1lIDogdHlwZVtcIlRpbWVcIl0uc3BsaXQoJyAnKVsxXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkVHlwZVNlc3Npb24oSWQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLmluZGV4T2YoSWQpICE9IC0xKXtcbiAgICAgIHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuc3BsaWNlKHRoaXMubGlzdFR5cGVTZXNzaW9uSWQuaW5kZXhPZihJZCksMSk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbklkLnB1c2goSWQpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+e3tlcnJvcn19PC9tYXQtZXJyb3I+XFxuXFxuPGZvcm0gI2Zvcm09XFxcIm5nRm9ybVxcXCI+XFxuICA8bWF0LWZvcm0tZmllbGQ+XFxuICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVxcXCJDaG9pc2kgbGUgSm91clxcXCIgI2RheVNlbGVjdD5cXG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XFxcImxldCBkYXkgb2YgZGF5c1xcXCIgW3ZhbHVlXT1cXFwiZGF5LmNvZGVcXFwiID5cXG4gICAgICAgIHt7ZGF5Lm5vbX19XFxuICAgICAgPC9tYXQtb3B0aW9uPlxcbiAgICA8L21hdC1zZWxlY3Q+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwic3RpbWVcXFwiIG5nTW9kZWwgcGxhY2Vob2xkZXI9XFxcIkNob2lzaXQgbCdoZXVyZVxcXCI+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9QWRkKGZvcm0pPk9rPC9idXR0b24+XFxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cXFwib25Ob0NsaWNrKClcXFwiPk5vIFRoYW5rczwvYnV0dG9uPlxcbjwvZm9ybT5cXG5cIiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VHlwZVNlc3Npb259IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWRkLXR5cGUtc2Vzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVHlwZVNlc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBkYXlzID0gdGhpcy50b29sLmRheXM7XG4gIHB1YmxpYyBlcnJvciA6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdkYXlTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSBkYXlTZWxlY3Q6IE1hdFNlbGVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8QWRkVHlwZVNlc3Npb25Db21wb25lbnQ+LFxuICAgIHByaXZhdGUgYXBpIDogQXBpU2VydmljZSxcbiAgICBwcml2YXRlIHRvb2wgOiBUb29sU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG4gIEFkZChmb3JtIDogTmdGb3JtKSB7XG4gICAgbGV0IHRlbXBUeXBlU2VzcyA6IFR5cGVTZXNzaW9uID0ge1xuICAgICAgSWQgOiAwLFxuICAgICAgRGF5IDogdGhpcy5kYXlTZWxlY3QudmFsdWUsXG4gICAgICBUaW1lIDogZm9ybS52YWx1ZS5zdGltZVxuICAgIH07XG5cbiAgICB0aGlzLmFwaS5hZGRUeXBlU2Vzc2lvbih0ZW1wVHlwZVNlc3MpLnN1YnNjcmliZShyZXN1bHQ9PntcbiAgICAgIGlmKHJlc3VsdFsncmVzdWx0J10pe1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRbJ3Jlc3VsdCddKTtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LGVycm9yID0+IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtY2FyZD5cXG4gIDxtYXQtY2FyZC10aXRsZT5cXG4gICAgPGRpdj5cXG4gICAgICBFdGVzIHZvdXMgc3VyIGRlIHZvdWxvaXIgc3VwcHJpbWVyXFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2PlxcbiAgICAgIHt7ZGF0YS5EYXl9fSB7e2RhdGEuVGltZX19XFxuICAgIDwvZGl2PlxcbiAgPC9tYXQtY2FyZC10aXRsZT5cXG4gIDxkaXYgY2xhc3M9XFxcImRlbC1idXR0b25cXFwiPlxcbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cXFwid2FyblxcXCIgKGNsaWNrKT1cXFwiRGVsZXRlKGRhdGEuSWQpXFxcIj4gT1VJISA8L2J1dHRvbj5cXG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XFxcInByaW1hcnlcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogNSVcXFwiIChjbGljayk9XFxcIm9uTm9DbGljaygpXFxcIj5Bbm51bGVyPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L21hdC1jYXJkPlxcblwiIiwiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTZWxlY3R9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VHlwZVNlc3Npb24sIFVzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVsLWFibycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWwtdHlwZS1zZXNzaW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsVHlwZVNlc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBlcnJvciA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGVsVHlwZVNlc3Npb25Db21wb25lbnQ+LFxuICAgIHB1YmxpYyBhcGkgOiBBcGlTZXJ2aWNlLFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVHlwZVNlc3Npb24sKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG5cbiAgRGVsZXRlKElkOiBhbnkpIHtcbiAgICB0aGlzLmFwaS5kZWxUeXBlU2Vzc2lvbihJZCkuc3Vic2NyaWJlKHJlc3VsdD0+e1xuICAgICAgaWYocmVzdWx0WydyZXN1bHQnXSl7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxtYXQtZXJyb3IgKm5nSWY9XFxcImVycm9yXFxcIj57e2Vycm9yfX08L21hdC1lcnJvcj5cXG48Zm9ybSAjZm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gIDxtYXQtZm9ybS1maWVsZD5cXG4gICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XFxcIkNob2lzaSBsZSBKb3VyXFxcIiAjZGF5U2VsZWN0IFsodmFsdWUpXT1cXFwic2VsZWN0RGF5XFxcIj5cXG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XFxcImxldCBkYXkgb2YgZGF5c1xcXCIgW3ZhbHVlXT1cXFwiZGF5LmNvZGVcXFwiID5cXG4gICAgICAgIHt7ZGF5Lm5vbX19XFxuICAgICAgPC9tYXQtb3B0aW9uPlxcbiAgICA8L21hdC1zZWxlY3Q+XFxuICA8L21hdC1mb3JtLWZpZWxkPlxcblxcbiAgPG1hdC1mb3JtLWZpZWxkPlxcbiAgICA8aW5wdXQgbWF0SW5wdXQgbmFtZT1cXFwic3RpbWVcXFwiIFsobmdNb2RlbCldPVxcXCJkYXRhLlRpbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJDaG9pc2l0IGwnaGV1cmVcXFwiPlxcbiAgPC9tYXQtZm9ybS1maWVsZD5cXG5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPUVkaXQoZm9ybSk+T2s8L2J1dHRvbj5cXG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVxcXCJvbk5vQ2xpY2soKVxcXCI+Tm8gVGhhbmtzPC9idXR0b24+XFxuPC9mb3JtPlxcblwiIiwiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTZWxlY3R9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHtUb29sU2VydmljZX0gZnJvbSAnLi4vc2VydmljZS90b29sLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VHlwZVNlc3Npb24sIFVzZXJ9IGZyb20gJy4uL0ludGVyZmFjZS9JbnRlcmZhY2UubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdC10eXBlLXNlc3Npb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC10eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0VHlwZVNlc3Npb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBkYXlzID0gdGhpcy50b29sLmRheXM7XG4gIHB1YmxpYyBlcnJvciA6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdkYXlTZWxlY3QnLHtzdGF0aWM6ZmFsc2V9KSBkYXlTZWxlY3Q6IE1hdFNlbGVjdDtcbiAgcHVibGljIHNlbGVjdERheTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxFZGl0VHlwZVNlc3Npb25Db21wb25lbnQ+LFxuICAgIHB1YmxpYyBhcGkgOiBBcGlTZXJ2aWNlLFxuICAgIHB1YmxpYyB0b29sIDogVG9vbFNlcnZpY2UsXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBUeXBlU2Vzc2lvbiwpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0RGF5ID0gdGhpcy50b29sLmludkRheVN3aXRjaCh0aGlzLmRhdGEuRGF5KVxuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBFZGl0KGZvcm0gOiBOZ0Zvcm0pIHtcbiAgICBsZXQgdGVtcFR5cGVTZXNzIDogVHlwZVNlc3Npb24gPSB7XG4gICAgICBJZCA6IHRoaXMuZGF0YS5JZCxcbiAgICAgIERheSA6IHRoaXMuZGF5U2VsZWN0LnZhbHVlLFxuICAgICAgVGltZSA6IGZvcm0udmFsdWUuc3RpbWVcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2codGVtcFR5cGVTZXNzKTtcblxuICAgIHRoaXMuYXBpLmVkaXRUeXBlU2Vzc2lvbih0ZW1wVHlwZVNlc3MpLnN1YnNjcmliZShyZXN1bHQ9PntcbiAgICAgIGlmKHJlc3VsdFsncmVzdWx0J10pe1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRbJ3Jlc3VsdCddKTtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LGVycm9yID0+IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vSW50ZXJmYWNlL0ludGVyZmFjZS5tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlZGl0LXR5cGUtc2Vzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi4vbW9udGgvbGlzdC1wZXJzb24tZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgbGlzdEFib1Nlc3Npb257XG4gIFBlcnNvbkNvbDogc3RyaW5nW10gPSBbJ1VzZXInXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGxpc3RBYm9TZXNzaW9uPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFVzZXJbXSkge31cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIi5kZWxldGV7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxufVxcbm1hdC10YWJsZXtcXG4gIG1hcmdpbjogMyUgMiUgO1xcbiAgcGFkZGluZzogMiU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWF0LWhlYWRlci1jZWxse1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5tYXQtY2VsbHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8bWF0LWNhcmQgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+XFxuICA8bWF0LXNwaW5uZXIgc3R5bGU9XFxcIm1hcmdpbjogYXV0b1xcXCI+PC9tYXQtc3Bpbm5lcj5cXG48L21hdC1jYXJkPlxcblxcbjxtYXQtdGFibGUgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiIFtkYXRhU291cmNlXT1cXFwibGlzdFR5cGVTZXNzaW9uXFxcIiBjbGFzcz1cXFwibWF0LWVsZXZhdGlvbi16OFxcXCI+XFxuXFxuICA8IS0tIERhdGUgQ29sdW1uIC0tPlxcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XFxcIkRheVxcXCI+XFxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEpvdXIgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuRGF5fX0gPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBUaW1lIENvbHVtbiAtLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJUaW1lXFxcIj5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gSGV1cmUgPC9tYXQtaGVhZGVyLWNlbGw+XFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnRcXFwiPiB7e2VsZW1lbnQuVGltZX19IDwvbWF0LWNlbGw+XFxuICA8L25nLWNvbnRhaW5lcj5cXG5cXG4gIDwhLS0gQ2FuY2VsIFNlc3Npb24gQ29sdW1uLS0+XFxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cXFwiQWN0aW9uXFxcIj5cXG5cXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cXG4gICAgICA8bWF0LWVycm9yICpuZ0lmPVxcXCJlcnJvclxcXCI+IHt7IGVycm9yIH19PC9tYXQtZXJyb3I+XFxuICAgICAgTW9kaWZpY2F0aW9uIC8gU3VwcHJlc3Npb25cXG4gICAgPC9tYXQtaGVhZGVyLWNlbGw+XFxuXFxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cXFwibGV0IGVsZW1lbnQ6IGxldCBpID0gaW5kZXhcXFwiID5cXG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XFxcInByaW1hcnlcXFwiIG1hdFRvb2x0aXA9XFxcIk1vZGlmaWNhdGlvblxcXCI+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwib3BlbkVkaXREaWFsb2coaSlcXFwiPmVkaXQ8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNsYXNzPVxcXCJkZWxldGVcXFwiIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJTdXBwcmVzc2lvblxcXCI+XFxuICAgICAgICA8bWF0LWljb24gW25nU3R5bGVdPVxcXCJ7J2NvbG9yJzond2hpdGUnfVxcXCIgKGNsaWNrKT1cXFwib3BlbkRlbGV0ZURpYWxvZyhpKVxcXCI+ZGVsZXRlPC9tYXQtaWNvbj5cXG4gICAgICA8L2J1dHRvbj5cXG5cXG4gICAgPC9tYXQtY2VsbD5cXG4gIDwvbmctY29udGFpbmVyPlxcblxcbiAgPCEtLSBDYW5jZWwgU2Vzc2lvbiBDb2x1bW4tLT5cXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVxcXCJBZGRcXFwiPlxcblxcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNsYXNzPVxcXCJkZWxldGVcXFwiIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBtYXRUb29sdGlwPVxcXCJBam91dFxcXCIgKGNsaWNrKT1cXFwib3BlbkRpYWxvZygpXFxcIj5cXG4gICAgICAgIDxzcGFuPkFqb3V0IGQndW5lIHNlc3Npb24gPC9zcGFuPlxcbiAgICAgICAgPG1hdC1pY29uIFtuZ1N0eWxlXT1cXFwieydjb2xvcic6J3doaXRlJ31cXFwiID5hZGQ8L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L21hdC1oZWFkZXItY2VsbD5cXG5cXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVxcXCJsZXQgZWxlbWVudDogbGV0IGkgPSBpbmRleFxcXCIgPlxcbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uICBjb2xvcj1cXFwicHJpbWFyeVxcXCIgbWF0VG9vbHRpcD1cXFwiTW9kaWZpY2F0aW9uXFxcIj5cXG4gICAgICAgIDxtYXQtaWNvbiBbbmdTdHlsZV09XFxcInsnY29sb3InOid3aGl0ZSd9XFxcIiAoY2xpY2spPVxcXCJvcGVuTGlzdERpYWxvZyhpKVxcXCI+aW5mb3JtYXRpb248L21hdC1pY29uPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICA8L21hdC1jZWxsPlxcbiAgPC9uZy1jb250YWluZXI+XFxuXFxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cXFwiZGlzcGxheWVkQ29sdW1uc1xcXCI+PC9tYXQtaGVhZGVyLXJvdz5cXG4gIDxtYXQtcm93ICptYXRSb3dEZWY9XFxcImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XFxcIj48L21hdC1yb3c+XFxuXFxuPC9tYXQtdGFibGU+XFxuXCIiLCJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7VG9vbFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvdG9vbC5zZXJ2aWNlJztcbmltcG9ydCB7IFR5cGVTZXNzaW9ufSBmcm9tICcuLi9JbnRlcmZhY2UvSW50ZXJmYWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7QWRkVHlwZVNlc3Npb25Db21wb25lbnR9IGZyb20gJy4vYWRkLXR5cGUtc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtFZGl0VHlwZVNlc3Npb25Db21wb25lbnR9IGZyb20gJy4vZWRpdC10eXBlLXNlc3Npb24uY29tcG9uZW50JztcbmltcG9ydCB7bGlzdEFib1Nlc3Npb259IGZyb20gJy4vbGlzdC1hYm8tc2Vzc2lvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtEZWxUeXBlU2Vzc2lvbkNvbXBvbmVudH0gZnJvbSAnLi9kZWwtdHlwZS1zZXNzaW9uLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXR5cGUtc2Vzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlLXNlc3Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90eXBlLXNlc3Npb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVTZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIGxpc3RUeXBlU2Vzc2lvbjogVHlwZVNlc3Npb25bXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnRGF5JywnVGltZScsJ0FjdGlvbicsJ0FkZCddO1xuICBlcnJvcjogYW55O1xuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpIDogQXBpU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0b29sIDogVG9vbFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZGlhbG9nIDogTWF0RGlhbG9nKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IFtdO1xuICAgIHRoaXMuYXBpLmdldFR5cGVTZXNzaW9uKCkuc3Vic2NyaWJlKHVybGRhdGE9PntcbiAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeSh1cmxkYXRhKTtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cImlkVHlwZVNlc3Npb25cIi9naSwgXCJcXFwiaWRQZXJzb25cXFwiXCIpO1xuXG4gICAgICB0aGlzLmxpc3RUeXBlU2Vzc2lvbiA9IHRoaXMudG9vbC5pbml0VHlwZVNlc3Npb24oc3RyKTtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5saXN0VHlwZVNlc3Npb24gPSBbXTtcbiAgICB0aGlzLmFwaS5nZXRUeXBlU2Vzc2lvbigpLnN1YnNjcmliZSh1cmxkYXRhPT57XG4gICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkodXJsZGF0YSk7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvXCJpZFR5cGVTZXNzaW9uXCIvZ2ksIFwiXFxcImlkUGVyc29uXFxcIlwiKTtcblxuICAgICAgdGhpcy5saXN0VHlwZVNlc3Npb24gPSB0aGlzLnRvb2wuaW5pdFR5cGVTZXNzaW9uKHN0cik7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIG9wZW5EaWFsb2coKXtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFkZFR5cGVTZXNzaW9uQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogJzI1MHB4JyxcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbkVkaXREaWFsb2coSWQgOiBudW1iZXIpe1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRWRpdFR5cGVTZXNzaW9uQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aCA6ICcyNTBweCcsXG4gICAgICBkYXRhIDogdGhpcy5saXN0VHlwZVNlc3Npb25bSWRdXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5MaXN0RGlhbG9nKElkOiBhbnkpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGxpc3RBYm9TZXNzaW9uLCB7XG4gICAgICB3aWR0aCA6ICcyNTBweCcsXG4gICAgICBkYXRhIDogdGhpcy5saXN0VHlwZVNlc3Npb25bSWRdLlBlcnNvblxuICAgIH0pO1xuICB9XG5cbiAgb3BlbkRlbGV0ZURpYWxvZyhJZCA6IGFueSl7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEZWxUeXBlU2Vzc2lvbkNvbXBvbmVudCwge1xuICAgICAgd2lkdGggOiAnNTUwcHgnLFxuICAgICAgZGF0YSA6IHRoaXMubGlzdFR5cGVTZXNzaW9uW0lkXVxuICAgIH0pO1xuICB9XG5cblxufVxuIiwiLy8gVGhpcyBmaWxlIGNhbiBiZSByZXBsYWNlZCBkdXJpbmcgYnVpbGQgYnkgdXNpbmcgdGhlIGBmaWxlUmVwbGFjZW1lbnRzYCBhcnJheS5cbi8vIGBuZyBidWlsZCAtLXByb2RgIHJlcGxhY2VzIGBlbnZpcm9ubWVudC50c2Agd2l0aCBgZW52aXJvbm1lbnQucHJvZC50c2AuXG4vLyBUaGUgbGlzdCBvZiBmaWxlIHJlcGxhY2VtZW50cyBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXIuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cbi8qXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cbiAqXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiaW1wb3J0ICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9