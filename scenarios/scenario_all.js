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
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-primary-c447fe24578911fc3d91d6cd7be988de4ef42833961fe7f3a4975980dc181063.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/aetna-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/cigna-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/humana-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/anthem-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/oscar-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/emblemhealth-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/molina-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/healthcare-logo.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/find_a_doctor-ba9762abbbe485dccff2e6756e6bf0e30b3bdb56abd76227130d284456732379.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/help_with_bills-31eed194f81091bfdf6cfa735ded6138f539a392c57c978f5bf64a390ac6cac1.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/check_coverage-27469e18283def101a7ac50214e5be14202f27475deb9f81169898f7ecba22ab.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/joany-heart-36d694cc90e38267d903a6280071c4d078b212ba9b36797a5e3ff54521b2b42c.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/enroll_in_a_plan-6f6aa244a028950d193a9c0a3b2f2f163703d0972294e5b91ecd46a0bdf95d5c.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/quote_right.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/quote_left.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/hero.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/fontawesome-webfont-2adefcbc041e7d18fcf2d417879dc5a09997aa64d675b7a3c4b6ce33da13f3fe.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/bootstrap/glyphicons-halflings-regular-fe185d11a49676890d47bb783312a0cda5a44c4039214094e7957b4c040ef11c.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(2.23);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/coverage_area/33305",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "IQ98/W5h0Jq4Al07aQBka04NsTr/lIsfu8U5cB3tM6ySx/T5I7Jc0ZQ5GO2qj5EkM3CrCenPlGbLGd99EG3FrA==",
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
                "authenticity_token": "IQ98/W5h0Jq4Al07aQBka04NsTr/lIsfu8U5cB3tM6ySx/T5I7Jc0ZQ5GO2qj5EkM3CrCenPlGbLGd99EG3FrA==",
                "zipcode": "33305",
                "commit": "Get Started"
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
            "url": config.baseUrl + "/basicinfo",
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
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.65);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.02);
    });
    group("page_03 - /save_profile", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/save_profile",
            "body": {
                "utf8": "✓",
                "authenticity_token": "Za8IYldpopaRUM3yG22pU2Pzej53cj6w/YPs3/XA0yrWZ4BmGrou3b1riCTY4lwcHo5gDWEpIcmNXwrS+EAlKg==",
                "basic_info": "",
                "uuid": "c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
                "age": "43",
                "spouse_age": "40",
                "kids": "2",
                "kid1_age": "10",
                "kid2_age": "7",
                "kid3_age": "",
                "commit": "Next"
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
                    "referer": config.baseUrl + "/basicinfo",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/medications",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/basicinfo",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.77);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.02);
    });
    group("page_04 - /addmedications", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/addmedications",
            "body": {
                "utf8": "✓",
                "authenticity_token": "8gz8+8qc5vLzmanYJOYdjo8n15zWpAbF6BXqtl1sNM9BxHT/h09qud+i7A7naejB8lrNr8D/GbyYyQy7UOzCzw==",
                "uuid": "c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
                "commit": "Yes"
            },
            "params": {
                "headers": {
                    "content-length": "187",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/medications",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.80);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/bootstrap/glyphicons-halflings-regular-fe185d11a49676890d47bb783312a0cda5a44c4039214094e7957b4c040ef11c.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.54);
        req = [{
            "method": "post",
            "url": config.baseUrl + "/profile/add_prescription/c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
            "body": "drugs%5B0%5D%5Bname%5D=I&drugs%5B0%5D%5Bndc%5D=27437020602&drugs%5B0%5D%5Bdrug_name%5D=Suprax++%C2%A0+75ml+of+200mg%2F5ml&drugs%5B1%5D%5Bname%5D=I&drugs%5B1%5D%5Bndc%5D=00781313980&drugs%5B1%5D%5Bdrug_name%5D=Dacogen++%C2%A0+50mg&clear_drug=true",
            "params": {
                "headers": {
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "7tnn1dkOnqOuLl//jzenjR+GbBbjnQP6tOb8+0pufmZdEW/RlN0S6IIVGilMuFLCYvt2JfXGHIPEOhr2R+6IZg==",
                    "accept-language": "en-US,en;q=0.9",
                    "x-requested-with": "XMLHttpRequest",
                    "content-length": "245",
                    "pragma": "no-cache",
                    "user-agent": config.userAgent,
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.02);
    });
    group("page_05 - /doctorvisits", function () {
        let req, res;
        req = [{
            "method": "get",
            "url": config.baseUrl + "/doctorvisits",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/addmedications",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.74);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.67);
    });
    group("page_06 - /profile/add_doctor_visit_details", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/profile/add_doctor_visit_details",
            "body": {
                "utf8": "✓",
                "authenticity_token": "AWgvl/2cp2kaGGX70yriW/CUPraTxvOwerOP6zTBPqayoKeTsE8rIjYjIC0QpRcUjekkhYWd7MkKb2nmOUHIpg==",
                "uuid": "c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
                "doctor_visit": "15",
                "commit": "Next"
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
                    "referer": config.baseUrl + "/doctorvisits",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/subsidy",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/doctorvisits",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.73);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.02);
    });
    group("page_07 - /profile/add_subsidy", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/profile/add_subsidy",
            "body": {
                "utf8": "✓",
                "authenticity_token": "tN/VPl/t+4g6ns5rqSuI6IWeOn0vXHDqZ5UCm2XPFAYHF106Ej53wxali71qpH2n+OMgTjkHb5MXSeSWaE/iBg==",
                "household": "4",
                "subsidy": "90,000",
                "commit": "Find My Perfect Plan"
            },
            "params": {
                "headers": {
                    "content-length": "193",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/subsidy",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/createaccount",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/subsidy",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.68);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.65);
    });
    group("page_08 - /users", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/users",
            "body": {
                "utf8": "✓",
                "authenticity_token": "Ikz7wHk7a2r8KqF9hPcQkv3x4psJRaIUJqtHscB0IUqRhHPENOjnIdAR5KtHeOXdgIz4qB8evW1Wd6G8zfTXSg==",
                "uuid": "c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
                "user[email]": "test4@test.org",
                "commit": "Show me the best plans for me!"
            },
            "params": {
                "headers": {
                    "content-length": "241",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/createaccount",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/prescriptions/c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/createaccount",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
        sleep(1.49);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/mybestplans",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/createaccount",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-white-sm-de1c090c2f1e81b3d9b9be83a6246202ab917a70183bfdbb5e17ca6541819d46.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/editbasicinfo-414443bbcb5f3e296229c9639c8c5c0394fed992e6c48262e5196eb0ddbcb943.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/editmedication-bcc11dbc1bb2797bc53e7ab959dfeabfed5b775b71392bf1d66305afa9621578.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/deductible-7c25a647c9c748cabb7081c78ed2fd027581a31947da24263a143b0983836f21.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/editdoctor-a31c56bd4045792b040703dd7bee850b8a964c55741e5082097b5a1d9a62688c.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/out_of_pocket_max-c2a14e62c2a1e6a7f5694078e294f4730194f4c19d532bb4af3ada60872dd336.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/doctor_visits-3a2dbbbd74ed11ca8414f8f0073f30fc479a6fed3f853ede281ae91eb86a8588.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.80);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/fontawesome-webfont-2adefcbc041e7d18fcf2d417879dc5a09997aa64d675b7a3c4b6ce33da13f3fe.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/recommendations/c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "T8jHum6+Uv9KONbpjUBAjm34cpzhDalnGxkXgbPBQA38AE++I23etGYDkz9Oz7XBEIVor/dWth5rxfGMvkG2DQ==",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "x-requested-with": "XMLHttpRequest",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "post",
            "url": config.baseUrl + "/send_hope_you_love_email",
            "params": {
                "headers": {
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "T8jHum6+Uv9KONbpjUBAjm34cpzhDalnGxkXgbPBQA38AE++I23etGYDkz9Oz7XBEIVor/dWth5rxfGMvkG2DQ==",
                    "accept-language": "en-US,en;q=0.9",
                    "x-requested-with": "XMLHttpRequest",
                    "content-length": "336938",
                    "pragma": "no-cache",
                    "user-agent": config.userAgent,
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/recommended.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/MedicationNOTCOVERED.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/MedPill.svg",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.03);
    });
    group("page_09 - /enroll", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/enroll",
            "body": {
                "uuid": "c9af54a9-71c2-4110-b39e-2da8fb4b7c11",
                "plan_id": "16842FL0120062-01"
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
                    "referer": config.baseUrl + "/mybestplans",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-primary-c447fe24578911fc3d91d6cd7be988de4ef42833961fe7f3a4975980dc181063.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.79);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(1.33);
    });
    group("page_10 - /enrollbasics", function () {
        let req, res;
        req = [{
            "method": "get",
            "url": config.baseUrl + "/enrollbasics",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/enroll",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-primary-c447fe24578911fc3d91d6cd7be988de4ef42833961fe7f3a4975980dc181063.png",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.65);
        req = [{
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Bold-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": config.userAgent,
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css",
                    "dnt": "1"
                }
            }
        }];
        res = http.batch(req);
        sleep(0.02);
    });
    group("page_11 - /enrollment/update_user_profile", function () {
        let req, res;
        req = [{
            "method": "post",
            "url": config.baseUrl + "/enrollment/update_user_profile",
            "body": {
                "utf8": "✓",
                "authenticity_token": "bSI1V1sR4IC4sy4kot4ARCorNHsslkwEGQ+J1xMHAJTe6r1TFsJsy5SIa/JhUfULV1YuSDrNU31p02/aHof2lA==",
                "user_profile[first_name]": "Test",
                "user_profile[last_name]": "Test",
                "user_profile[middle_name]": "",
                "commit": "Save & Continue"
            },
            "params": {
                "headers": {
                    "content-length": "255",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": config.userAgent,
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                    "dnt": "1",
                    "referer": config.baseUrl + "/enrollbasics",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9"
                }
            }
        }];
        res = http.batch(req);
    });
}
