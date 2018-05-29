webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_component_app_component__ = __webpack_require__("./src/app/main-component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_uploader_uploader_component__ = __webpack_require__("./src/app/components/uploader/uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uploader_service__ = __webpack_require__("./src/app/services/uploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_downloader_service__ = __webpack_require__("./src/app/services/downloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_filetable_filetable_component__ = __webpack_require__("./src/app/components/filetable/filetable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_tabs_tabs_component__ = __webpack_require__("./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here







 //NEW!!!
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__main_component_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_uploader_uploader_component__["a" /* UploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_filetable_filetable_component__["a" /* FiletableComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_tabs_tabs_component__["a" /* TabsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* AppRoutingModule */] //NEW!!
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_uploader_service__["a" /* UploaderService */], __WEBPACK_IMPORTED_MODULE_7__services_downloader_service__["a" /* DownloaderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__main_component_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_uploader_uploader_component__ = __webpack_require__("./src/app/components/uploader/uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_filetable_filetable_component__ = __webpack_require__("./src/app/components/filetable/filetable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'uploader' },
    { path: 'uploader', component: __WEBPACK_IMPORTED_MODULE_2__components_uploader_uploader_component__["a" /* UploaderComponent */] },
    { path: 'files', component: __WEBPACK_IMPORTED_MODULE_3__components_filetable_filetable_component__["a" /* FiletableComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__components_uploader_uploader_component__["a" /* UploaderComponent */], __WEBPACK_IMPORTED_MODULE_3__components_filetable_filetable_component__["a" /* FiletableComponent */]];


/***/ }),

/***/ "./src/app/components/filetable/filetable.component.css":
/***/ (function(module, exports) {

module.exports = ".box {\n    margin-top: 30px;\n}\n"

/***/ }),

/***/ "./src/app/components/filetable/filetable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box has-text-centered\" id=\"tabella_utenti\">\n  <h3 class=\"subtitle\"><b>Uploaded Files</b></h3>\n\n  <table class=\"table is-striped\" style=\"margin: 0px auto;\">\n    <thead>\n    <tr>\n      <th>TITLE</th>\n      <td>DESCRIPTION</td>\n      <td>PATH</td>\n      <td>CREATION DATE</td>\n      <td>DELETE</td>\n    </tr>\n    </thead>\n    <tbody *ngIf=\"files\">\n      <tr *ngFor=\"let file of files\" id=\"{{file.id}}\">\n        <th>{{file.title}}</th>\n        <td>{{file.description}}</td>\n        <td><a target=\"_blank\" href=\"http://localhost:8585/open/file?filename={{file.path}}\">{{file.path}}</a></td>\n        <td>{{file.creationDate | date: 'dd/MM/yyyy'}}</td>\n        <td><p class='delete' (click)='delete(file.id)'></p></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/filetable/filetable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiletableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_downloader_service__ = __webpack_require__("./src/app/services/downloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiletableComponent = /** @class */ (function () {
    function FiletableComponent(downloaderService) {
        this.downloaderService = downloaderService;
        this.files = null;
    }
    FiletableComponent.prototype.ngOnInit = function () {
        this.fillTable();
    };
    FiletableComponent.prototype.fillTable = function () {
        var _this = this;
        this.downloaderService.fetchList().subscribe(function (results) { return _this.manageResults(results.body); }, function (error) { alert("Error in uploading!"); console.log(error); });
    };
    FiletableComponent.prototype.delete = function (id) {
        this.downloaderService.deleteOne(id);
        this.fillTable();
        //document.getElementById("" + id).remove();
        //var elem = document.getElementById("" + id);
        //elem.parentNode.removeChild(elem);
        //this.ngOnInit();
        window.location.reload();
    };
    FiletableComponent.prototype.manageResults = function (result) {
        if (result.status == 200) {
            this.files = result.data;
        }
        else {
            alert("Error while uploading!");
        }
    };
    FiletableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filetable',
            template: __webpack_require__("./src/app/components/filetable/filetable.component.html"),
            styles: [__webpack_require__("./src/app/components/filetable/filetable.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_downloader_service__["a" /* DownloaderService */]])
    ], FiletableComponent);
    return FiletableComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/tabs.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1025px) {\n   .navbar-menu {display: none;}\n}\n@media (max-width: 1024px) {\n   .tabs {display: none;}\n}\n"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs\">\n  <ul>\n    <li id=\"uploader_tab\" class=\"tab is-active\" routerLink=\"/uploader\"><a  (click)=\"uploader()\">Upload</a></li>\n    <li id=\"show_tab\" class=\"tab\"><a (click)=\"showFiles()\" routerLink=\"/files\">Show</a></li>\n  </ul>\n</div>\n\n\n<button class=\"button navbar-burger\" data-target=\"navMenu\">\n  <span></span>\n  <span></span>\n  <span></span>\n</button>\n<div class=\"navbar-menu\" id=\"navMenu\">\n  <a class=\"navbar-item\" (click)=\"uploader()\" routerLink=\"/uploader\">Upload</a>\n  <a class=\"navbar-item\" (click)=\"showFiles()\" routerLink=\"/files\">Show</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.uploader = function () {
        document.getElementById('show_tab').classList.remove('is-active');
        document.getElementById('uploader_tab').classList.add('is-active');
    };
    TabsComponent.prototype.showFiles = function () {
        document.getElementById('show_tab').classList.add('is-active');
        document.getElementById('uploader_tab').classList.remove('is-active');
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tabs',
            template: __webpack_require__("./src/app/components/tabs/tabs.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/components/uploader/uploader.component.css":
/***/ (function(module, exports) {

module.exports = "\n.box {\n    margin-top: 30px;\n    margin-left: auto;\n    margin-right: auto;\n    width : 40%;\n    heigth: 40%;\n}\n\ninput[type='text']{\n    height:35px;\n    width:90%;\n    margin-left:auto;\n    margin-left:auto;\n    margin-top:5px;\n}\n\ninput[type='file']{\n    margin-top: 5px;\n    margin-bottom: 20px;\n    height:35px;\n}\n"

/***/ }),

/***/ "./src/app/components/uploader/uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group box has-text-centered\">\n\n  <h2 class=\"subtitle\">Insert some data here...</h2>\n\n  <p><input type=\"text\" placeholder=\"title\" [(ngModel)]=\"title\"></p>\n  <p><input type=\"text\" placeholder=\"description\" [(ngModel)]=\"description\"></p><br />\n  <h2 class=\"subtitle\">Choose your file...</h2>\n  <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n  <p><a class=\"button is-rounded is-primary\" (click)=\"uploadFile()\">Upload</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/uploader/uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uploader_service__ = __webpack_require__("./src/app/services/uploader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploaderComponent = /** @class */ (function () {
    function UploaderComponent(uploaderService) {
        this.uploaderService = uploaderService;
        this.fileToUpload = null;
        this.title = null;
        this.description = null;
    }
    UploaderComponent.prototype.ngOnInit = function () {
    };
    UploaderComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    UploaderComponent.prototype.uploadFile = function () {
        var _this = this;
        if (this.fileToUpload == null || this.title == null || this.description == null) {
            alert("You must choose a file and define a title and a description first!");
        }
        else {
            this.uploaderService.postFile(this.title, this.description, this.fileToUpload)
                .subscribe(function (data) { return _this.success(); }, function (error) { alert("Error in uploading!"); console.log(error); });
            //  window.location.reload(true);
        }
    };
    UploaderComponent.prototype.success = function () {
        alert("file " + this.title + " uploaded!");
        this.title = null;
        this.description = null;
        this.fileToUpload = null;
        //   this.handleFileInput(null);
        //   (<HTMLInputElement>document.getElementById("file")).value = null;
    };
    UploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-uploader',
            template: __webpack_require__("./src/app/components/uploader/uploader.component.html"),
            styles: [__webpack_require__("./src/app/components/uploader/uploader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_uploader_service__["a" /* UploaderService */]])
    ], UploaderComponent);
    return UploaderComponent;
}());



/***/ }),

/***/ "./src/app/main-component/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-tabs></app-tabs>\n<div style=\"text-align:center\">\n  <h1 class=\"title\">\n    {{ title }}\n  </h1>\n</div>\n\n<div class=”container”>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main-component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'File Uploader';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/main-component/app.component.html"),
            styles: [__webpack_require__("./src/app/main-component/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/services/downloader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloaderService = /** @class */ (function () {
    function DownloaderService(http) {
        this.http = http;
    }
    DownloaderService.prototype.fetchList = function () {
        var endpoint = 'http://localhost:8585/get/files';
        return this.http.get(endpoint, { observe: 'response' });
    };
    DownloaderService.prototype.deleteOne = function (id) {
        var endpoint = 'http://localhost:8585/delete/file/' + id;
        this.http.get(endpoint).subscribe();
    };
    DownloaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DownloaderService);
    return DownloaderService;
}());



/***/ }),

/***/ "./src/app/services/uploader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploaderService = /** @class */ (function () {
    function UploaderService(http) {
        this.http = http;
    }
    UploaderService.prototype.postFile = function (title, description, fileToUpload) {
        var endpoint = 'http://localhost:8585/api/upload';
        var formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('files', fileToUpload, fileToUpload.name);
        return this.http.post(endpoint, formData, { observe: 'response' });
    };
    UploaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UploaderService);
    return UploaderService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map