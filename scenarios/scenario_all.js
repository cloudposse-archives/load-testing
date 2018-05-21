import {check, group, sleep} from 'k6';
import http from 'k6/http';
import {config} from "./config.js";

export default function () {

    group("page_01 - home", function () {
        let req, res;
        req = [{
            "method": "get",
            "url": config.baseUrl + "/",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(2.00);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/zip/33305",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "x-requested-with": "XMLHttpRequest",
                    "referer": config.baseUrl + "/"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.02);
    });
    group("page_02 - /profile", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/profile",
            "body": {
                "utf8": "✓",
                "zip": "33305"
            },
            "params": {
                "headers": {
                    "content-length": "165",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/info",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.65);
    });
    group("page_03 - /save_profile", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/save_profile",
            "body": {
                "utf8": "✓",
                "age": "37",
                "spouse_age": "35"
            },
            "params": {
                "headers": {
                    "content-length": "259",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/info",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.77);
    });
    group("page_04 - /add_categories", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/add_categories",
            "body": {
                "utf8": "✓",
                "categories": "1,2,3"
            },
            "params": {
                "headers": {
                    "content-length": "126",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.80);
    });
    group("page_05 - /add_features", function () {
        let req, res;
        req = [{
            "method": "get",
            "url": config.baseUrl + "/add_features",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/add_categories",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.74);
    });
    group("page_06 - /add_details", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/add_details",
            "body": {
                "utf8": "✓",
                "details_count": "5"
            },
            "params": {
                "headers": {
                    "content-length": "200",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.73);
    });
    group("page_07 - /add_details2", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/add_details2",
            "body": {
                "utf8": "✓",
                "amount": "4"
            },
            "params": {
                "headers": {
                    "content-length": "103",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/add_details",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.68);
    });
    group("page_08 - /users", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/users",
            "body": {
                "utf8": "✓",
                "email": "test4@test.org"
            },
            "params": {
                "headers": {
                    "content-length": "143",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/add_details2",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.80);
    });
    group("page_09 - /enrollment", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/enrollment",
            "body": {
                "id": "123456789"
            },
            "params": {
                "headers": {
                    "content-length": "67",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.79);
    });
    group("page_10 - /enrollment2", function () {
        let req, res;
        req = [{
            "method": "get",
            "url": config.baseUrl + "/enrollment2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/enrollment",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.65);
    });
    group("page_11 - /update_profile", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/update_profile",
            "body": {
                "utf8": "✓",
                "first_name": "Test",
                "last_name": "Test",
                "commit": "1"
            },
            "params": {
                "headers": {
                    "content-length": "212",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/enrollment2",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
    });
}
