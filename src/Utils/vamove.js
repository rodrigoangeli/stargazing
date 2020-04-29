"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var instaTouch = require("instatouch");
var request = require("request");
var fetch = require("node-fetch");
var dadosGerais = {};
var instaUser = process.argv[2];
var resultado = {};
var proxyurl = "https://cors-anywhere.herokuapp.com/";
var BaseURL = "https://angelidev.com/instaphp/index.php";
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var options, user, i, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    count: 20,
                    timeout: 32
                };
                request({
                    url: "https://www.instagram.com/" + instaUser + "/?__a=1",
                    json: true
                }, function (err, response, body) {
                    dadosGerais["alias"] = body.graphql.user.username;
                    dadosGerais["name"] = body.graphql.user.full_name;
                    dadosGerais["profilePicture"] = body.graphql.user.profile_pic_url_hd;
                    dadosGerais["description"] = body.graphql.user.biography;
                    dadosGerais["numberPosts"] =
                        body.graphql.user.edge_owner_to_timeline_media.count;
                    dadosGerais["numberFollowers"] = body.graphql.user.edge_followed_by.count;
                    dadosGerais["numberFollowing"] = body.graphql.user.edge_follow.count;
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 6]);
                return [4 /*yield*/, instaTouch.user(instaUser, options)];
            case 2:
                user = _a.sent();
                resultado = Object.assign(dadosGerais, user);
                dadosGerais["data_recolhida"] = new Date()
                    .toISOString()
                    .replace(/T/, " ")
                    .replace(/\..+/, "");
                for (i = 0; i < dadosGerais.collector.length; i++) {
                    dadosGerais.collector[i].takenAtGMT = new Date(dadosGerais.collector[i].takenAtGMT)
                        .toISOString()
                        .replace(/T/, " ")
                        .replace(/\..+/, "");
                    dadosGerais.collector[i]["engagement"] =
                        ((dadosGerais.collector[i].likes + dadosGerais.collector[i].comments) /
                            dadosGerais.numberFollowers) *
                            100;
                    dadosGerais.collector[i]["engagement"] = parseFloat(dadosGerais.collector[i]["engagement"].toFixed(2));
                    if (dadosGerais.collector[i]["isVideo"]) {
                        dadosGerais.collector[i]["tipoPost"] = "vid";
                    }
                    else {
                        dadosGerais.collector[i]["tipoPost"] = "img";
                    }
                }
                return [3 /*break*/, 6];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, fetch(BaseURL + "?tp=addPosts", {
                    method: "post",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dadosGerais)
                })
                    .then(function (response) {
                    return response.text().then(function (res) {
                        console.log(res);
                    });
                })["catch"](function (error) {
                    console.log(error);
                })];
            case 5:
                _a.sent();
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); })();
