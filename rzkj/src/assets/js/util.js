function json2form(data) {
    let result = new FormData();
    for (let key in data) {
        result.append(key, data[key]);
    }
    return result;
}

const util = {
    initContext: function (router, store) {
        this.router = router;
        this.store = store;
        this.storageKey = "rzkjlx";
        var data = this.getStorage("data");
        if (data) {
            store.state.taskList = data.taskList;
            store.state.config = data.config;
        }
    },
    checkPhone: function (val) {
        const reg = /^1[3456789]\d{9}$/;
        return reg.test(val);
    },
    setStorage: function (key, data) {
        let storage = localStorage.getItem(this.storageKey);
        if (storage) {
            storage = JSON.parse(storage);
            storage[key] = data;
        } else {
            storage = {
                [key]: data
            };
        }
        localStorage.setItem(this.storageKey, JSON.stringify(storage));
    },
    getStorage: function (key) {
        let storage = localStorage.getItem(this.storageKey);
        if (storage) {
            storage = JSON.parse(storage);
            if (storage[key] === 0 || storage[key]) {
                return storage[key];
            } else {
                return null;
            }
        } else {
            return null;
        }
    },
    removeStorage: function (key) {
        let storage = localStorage.getItem(this.storageKey);
        if (storage) {
            storage = JSON.parse(storage);
            if (storage[key] === 0 || storage[key]) {
                delete storage[key];
                localStorage.setItem(this.storageKey, JSON.stringify(storage));
            }
        }
    },
    ajax: function () {
        let pArr = arguments;
        if (pArr.length === 2) {
            ajax(pArr[0], null, "get", pArr[1]);
        } else if (pArr.length === 3) {
            if (typeof pArr[1] === "function") {
                ajax(pArr[0], null, "get", pArr[1], pArr[2]);
            } else {
                ajax(pArr[0], pArr[1], "post", pArr[2]);
            }
        } else {
            ajax(pArr[0], pArr[1], "post", pArr[2], pArr[3]);
        }
    },
    timerBack: function (fn, time = 300) {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            fn && fn();
        }, time);
    },
    sendCmd: function (cmd, params = {}) {
        console.log(JSON.stringify({ cmd: cmd, params }));
    }
};

function ajax(url, params, method, fnSuccess, fnError) {

    let env = process.env.NODE_ENV;
    let baseUrl = "http://192.168.31.32:80/ht/public/index.php/api/v1/";
    if (env === "development") {
        baseUrl = "https://test.api.huataixh.com/api/v1/";
        // baseUrl = "http://api2.huataixh.com/api/v1/";
    } else {
        baseUrl = "https://api.huataixh.com/api/v1/";
    }
    baseUrl = "https://api.huataixh.com/api/v1/";
    const xhr = new XMLHttpRequest();

    xhr.open(method, baseUrl + url);

    if (util.getStorage("token")) {
        xhr.setRequestHeader("token", util.getStorage("token"));
    }

    if (params) {
        xhr.send(json2form(params));
    } else {
        xhr.send();
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                const ret = JSON.parse(xhr.responseText);
                if (ret.statusCode === 1) {
                    fnSuccess(ret.result);
                } else {
                    fnError && fnError();
                    mui.hideLoading();
                }
            } else {
                fnError && fnError();
                mui.hideLoading();
            }
        }
    };

    xhr.timeout = 10000;

    xhr.ontimeout = function () {
        mui.hideLoading();
    };

    util.router.beforeEach((to, from, next) => {
        xhr.abort();
        next();
    });
}

window.setJsBridge = function () {
    util.store.state.autoService = true;
};

window.changeRoute = function (path) {
    util.router.replace(path);
}

window.changeService = function () {
    util.store.state.autoService = true;
    util.store.state.floatyService = true;
}

export default util;
