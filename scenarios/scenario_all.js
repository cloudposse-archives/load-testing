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
                "cookies": {
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnZreUJrOHUyQW1tS2xVZHJYQ0pnTEowOGFXalo2ZUdZYWZyc0lUdkdRNGR0bCtUSTlITHBtYVYzK0t2M3kvMW00cUdnT0ZRTkJTaHh5dDNzSWZ2RDBNZ1c5VVN2Q1RNY1pqYVczbStwM3FVZzQvTEY4bGNvYkV0WjhOWUlCd3VmdTFmbXJoVDhDZmVUUTFaVDU5cmJBPT0tLVBQc2ZMcVVmSkZtaGY0Z2NTY2Q1aEE9PQ%3D%3D--5a63b1ba0c2822e3961de505fb924ec36b3e7355"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-primary-c447fe24578911fc3d91d6cd7be988de4ef42833961fe7f3a4975980dc181063.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/aetna-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/cigna-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/humana-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/anthem-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/oscar-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/emblemhealth-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/molina-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/insurance_logo/healthcare-logo.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/find_a_doctor-ba9762abbbe485dccff2e6756e6bf0e30b3bdb56abd76227130d284456732379.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/help_with_bills-31eed194f81091bfdf6cfa735ded6138f539a392c57c978f5bf64a390ac6cac1.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/check_coverage-27469e18283def101a7ac50214e5be14202f27475deb9f81169898f7ecba22ab.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/joany-heart-36d694cc90e38267d903a6280071c4d078b212ba9b36797a5e3ff54521b2b42c.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/how_it_works/enroll_in_a_plan-6f6aa244a028950d193a9c0a3b2f2f163703d0972294e5b91ecd46a0bdf95d5c.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/quote_right.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/quote_left.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/hero.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/assets/application-2e4d510fce0657231ca944671c1f1a0d879cdc7e8b6d77feb4577f5beffcb624.css"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/Graphik-Regular-Web.woff2",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "_gat": "1",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "RnNScDJYN2ZvYlRhd2RXVkpESHhqYjVJZkR1VWpQdVdXemxVNXpaTWhkeS8zd1BPMUtPbkNXNjhuQUd0U1RDMjVkVWdKY2F0YWZ6Nk5CdTBUZk1BMVpvZ2FLdU9tQmphd1dyMlg4eklhbkR4TUUyV21YeitiMGRRQk9Ub1BCbzFlcFpUZG1RZFIzRVdaRFZqdmNTT1d3PT0tLTMweFhqN2daS0JlUDJ0WWRaT3NORlE9PQ%3D%3D--a5c7f34cc62b0aa4383b747918b2566ec4a784f1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "IQ98/W5h0Jq4Al07aQBka04NsTr/lIsfu8U5cB3tM6ySx/T5I7Jc0ZQ5GO2qj5EkM3CrCenPlGbLGd99EG3FrA==",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "N3lpejhINzh0OHVlb3dvbUJrQUZkb2ZIYzJYRUh6d0t4NHpGeXRCL0s1YjQ3clBnekQzSVFxRWxER1p5Z2ptNWJZUXZTTUtoUWQ5akk1a2RFTDJya2k2OVJpTCt4bC9Hb0NrTDRHMHdoeEZMSmRwMUY2ZVQyZ1dyQnovak9SS3I3dGI3Ukk4dVMrdnhJTnNpWEZxOVdnPT0tLVBKK1pzdGdZSXZFVHloVEVTejIrTVE9PQ%3D%3D--7c0718c560ebcbbd81a676c4bf7c6de308e33928"
                },
                "headers": {
                    "content-length": "165",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "dmhXQVZvUEwxUFdqMWNKSEt4U2hLMFVEWno2ZWI5ZDcwUmZSMlRPS0F2VXlpeVBabnVwRDRwKzE1S0o1MzhJZUlDU2RxU2NrVHJFYlpadlUvejd5UnAxRDdjVkw1bnExUzVhb05DK0l3blBIMWZvSmVFZW9mSzhSTjZLbjlBc0VLNVZKcmVzR2pBWnZzYXpJdEU3ZExMVFl1WEloUzlKcmkrWlNoTTY4WU9ueENDWmhhOGZaeVFEaldyNUZKVkJhZnJYZTc2YmdjZ0t4REpYVnJjbVg4Y3krL3A4Z3R1ejYyNG1LcHBJellOYkNsbnFSQWRoUVFQWlh3VUVhT0h1b01FcHAzeDVvN2pZcmdwd0lGaUhUa3AyVC8rUGg0MFJZdkJobTJsSTJVTUU9LS1TR1hoRWNVZWJwZjJVeHRHL0tiYkF3PT0%3D--77b29a3505d3238fa7b23daa406ef7d73745c8bd"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/basicinfo"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "S244NTRpdFdHeGljVi9aUDA4emtFdUJUc0lDa1NyZDdGQ1FaejhLU0o2eTNHa2lnL0JBNll0ajIrQnVielNTQkJ6cGhGOStUeTR0QWZ6MGhrTStOSHQrYXhGRUMrVDN6b0dEa3gvdGNuNW52ODVBUTlqQXU5Q2pTanNnRnQ1RzFvbnAvODl6U0ZjWU9OdC82UUtkVVpkUUJ4NkYwUnJvaDV2d3l1VnhRcStiOGlpdFVtVDBNVFJpYzlzcTU0Q1BtSzUzYWhlQ0FIcEU5RnFoTENPbzBtRXdSNkt0amtyQXQzQ3pIWFo5aGVjdVNscjhEalZiR1E1QnNITWxoK2ZTbm9mODBNRHUrOUt4TmJzSWM4NlVzQ2lyZzZRRGdRUytRQ2tNTDh4NWFnYzQ9LS1JTHA3R0hnZy9OSVpZZDMwUHgvbWFnPT0%3D--0786cdf977a9fc2c7477c456137c33b674a2c34d",
                    "_gat": "1"
                },
                "headers": {
                    "content-length": "259",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "Nzh3OExnbEtaUld0Wk5rcXRJVnE3N2NydkkyUzZhZWFLOVY1eWlmU3dmTEptTUpIQVZaZkRvbmJWbHkweXhSTXV2YXhZZjlQR3RBTkdwOTROT21FVmt5Z3FIWjU5UXdTS00zdVRrVy9FN0JvZlV3K0Y3OHpPdnNLUTl1amFkOXRnbHV5d1V2UVM2RjZvY0J2ZU5QS3ZkSndLYktqcUNJNVp6MXcxL0l0NTNzSTNEK1NCZ2VjL0RTY3BsVzFTekViYjVIcFlvbUZPTjRCb0Y0b3FDUXFiUlg1VG1EYkpGcDVZWHIyaTE2alhKQ3pJZjM3R256d1lYV3ViRm9UZzBsbVRXQ01MM1prNkNFNVprcmlLeCtBdjRPbTdvRVJlNG82allZcHBZNS9JN0U9LS1KeFlEN00rTEFremZhZ21aMUpzak13PT0%3D--fb935054131ea5b6ad187d4f027ffcabe7fd2689"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/medications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "S1Z2UGVJQUhHeURCcG5GMDYvRTZzdlVUV28yaUJzck5iZGFqTVVadjJMK1pPdjJaSytIR3YrTmJGVFRWZW1BZjFiYzEyRjVlRkpjcTFHcWdCeU83SUZvdStRVWo4VFpuVEVJYWthdFN2VDdwUURnTWY5cklSOGp5V0NrSGIxNHJ0d2svV0xXVXU5QWxWbWJTVkE5ZGxMMTJ4QjdRa2VjRFBTekNmTW80MVRDMkdhK0ZwQ1FDZ0dpbHpYSkpBMXdkOUtZMXVRWHY4ajNuVmJMMmZQT1luYks1a24za0JaMDV0aG9xcWd5aFJPUHdZYjVWMTZJVnlmcWQyWXJUbEpVaDh2bnhmQk1ydkJUWmh1K2gwRjNtV3UralJ5cy80T2c1eGh3ZnJmK0NhZjA9LS1WaEZjY0NxMFpURE9KelJHWlhmS1RnPT0%3D--aece159136695e17de99a45645a1dcd05330b91f"
                },
                "headers": {
                    "content-length": "187",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/addmedications"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "dktwMFFoT3dDUmhYeGNCZ0lkdXFqNk5IMGNQVXVyL0w5UlRNemVCdEVoU1VGc1ZFRmYra3VZWHdKMGMwMkZxZHppbDNWWHNWaGZiTEhIRE5rRm11d2Fhbm9Hc3dzaFVUNDhwU1ZWWGJCWlQ3aVRBdWY1OFJPVjFFMHNPOGxtenNFRm5MclpSbHdjc2RCdkVLZTVRM2loVXBibzg5K2prakdidndWOVdRbE9tUmMySDgxanNRczVxS1NpQmtxNGE1aXRlV29pbWlBS05GL2I1Yi9HL3NJWHVVSzVlOVJJY1czbFZTS2R5TXFGR2doWjFlTFNNTXhaMHcrN1Q5THFlbVBVZjFjKzNoN0tvUVhxamJ6ZlY4b09FdjdZakUwejRvNEE1MXc1Mkk2QWs9LS1SaXo0OS9vSFhyV0tmQTdKZUZvZEVnPT0%3D--dfd12101d0dd5257b8e805b284cf04a1931ddb44"
                },
                "headers": {
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "7tnn1dkOnqOuLl//jzenjR+GbBbjnQP6tOb8+0pufmZdEW/RlN0S6IIVGilMuFLCYvt2JfXGHIPEOhr2R+6IZg==",
                    "accept-language": "en-US,en;q=0.9",
                    "x-requested-with": "XMLHttpRequest",
                    "content-length": "245",
                    "pragma": "no-cache",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "QWxnSHVlOFN4TXRQSUNqdHNxUGxVdGpzWjh0VkRhNjBrUzlSRlNOSzJPbVlmem1ycWpKNW95b2k2WWRQVEtUckZZQnhuakptNVl5dmVlTDUxdDdoanhyT0o2cVdBeXMzWWpoQTFwOWxpZ21tZlFGaEJCeTVsT3lOUnBLNjlzRHJDUDg4MGM1ZzEvTVppMnBaTkJQK2Y5K3JmRW9zWEl0UWorajhiVmJsWE5uYXFnTk9JeDR6Q1RxM1lBVS83d2gxREVpY2I5cjBiMHNCRmQ0czZiM1Yvd3VIc09vcjVIUzZJQ2tFNDNlK3BoNTh0bE9lb3lGMWFONW5JRHZlUnhYQTJtSkpWeFdFL0YzcmkrOFhYajZ3WDJxMlRieUd1RE9EZTlWUWR4aTRzcDA9LS1ERXV5bjUxSEdDUmNOM09iZEFZQnRRPT0%3D--1575f103ff328b1d21a561d85653f08dd0ed1911"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/doctorvisits"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "N3RkQWdWYktGM2hsRzJNMHExTmZ6MnVDOE5naXdQU3hJLy9JTGIwbTVjVjZ6czNDZ2ZoazFVbEU2QUFjOGxmNlRPTDBoTlBWWXZNcHhWVVFscEdTY3Z5TlBTMlA3YkNtOExCRnVmdENnT2tuaXdNM2FYTXY5bmdwdUJ4cXYxVVJkWHh0RDIyT3pBYmczUVNLdzhmM0t6WG9rcGFYbmJDcGVuemVyQTNya2xTSEYzajd5Z1F3RVYvdWZJeVJYN3d1eU03ZzBxdFpGRkVVMnFHUjBSV3l4ckdWR3pSOXRjaUtheThjek0yTk1RNFhxcXVTS214RGxjNnNYQ1UyaEVhTzBFVmpLZ3p3MEg4S3Q4ZHF4U1VTS2didVJjU09YYVZ5NnJkSnVBS2xUSTQ9LS1hK0lHdXVkWW5YdFBLSTFPMWFkeFNnPT0%3D--8dee4a5533d1a9dd736eefcf9091c3f70b4196c6"
                },
                "headers": {
                    "content-length": "200",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "YWVNMjhoSjgzRSt5QXhwV1FQcy9TNkxoVDl0b01TdHMwcjVaSjhwNk5QVmJDNnNxL2RQMGE2UVJteFR5cU8yYUNRSE1mTEZWdXZ2aGo4akpJWWRNTFFWQmRvK0pOYnFBdEorckNrNGp3WkRsZzhxMVBCVVpFM1EvMXJZRWdnLytrOEVWT1RwTk1wRVE1aXBpb1NJNk5laVNidFI5NGpkMmM4YWsxMWJobkMxdG1xZ3RpdTV2cERqYmdOVjJNOFdTS0ZyeWt2MS9LMnBQd2JwTTNNQ3RjR1dMcmYwNmdkbzdQVjRvTUpjeUYxT1hjSUtMSUlOUDBlckE5T00yTisyblU4bFBjM1NuSENkMjNCZ2RXb1R0aVpUcTFMbVZ3QkRKMkNibFNQMDZqU009LS03UUloSHhMMEdJRHpFUUJkdTRBTWpRPT0%3D--bbc08d373a8eed7fd3e85f63bd03f3d4c7295d91"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/subsidy"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3",
                    "_gat": "1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3",
                    "_gat": "1"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "clh5aytiT01KU01MR3AxWU05Yzh1QmRKVnlNeEt2SUlNR1FJSEwwWDVUbmR5MjZZclcwVkFDNzJzT2k0VjY0NTNDcjhXQXJGQmF6ZnNHVUxaYkNlUGphckZ4bWEwVWc3UGdOZnR2UTcwVVJyTHVGVlY2SjN2d244VVY2amdSQm00NjFLbE5oWlRRT0UyZnBndnR0ampzVkhQWS80RHJER215MzJscmYvOWlaWEpNZlh5V2Z2NkM1M0xXNWJlOHNLcU9YZ0NvRDVjZFZkaWVaaEY5a2lMQUFRRXZ4N0wydWNLTCtRckhCN2tRUFhRWFFtQkVMNG9NY3k5SWpES0c4bk5xQ0NEeHRZVERpNTBTUEZweXZxU2oxbXB5TU00T1l3dU5TeTRrRERWYzQ9LS1Jc0htdy9ad25NQkpYZmFXODI1ZGpBPT0%3D--57f054539070aad5e3c38cfe3f2e6c34bcb976e3",
                    "_gat": "1"
                },
                "headers": {
                    "content-length": "193",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "WVhEc3d6dXJteU56MlkzMHpLUC91SWlVT2RuQk54RmdJL01jT3NTT3luc3JESm11VDB3ZytKSDNBdkpQVGFRUXF2akg3bm9YbG1WZzNHUTlIS3lPZStpUHNKTlJhMERhQkF1bFZsTGxFRjZUV1dIb2V0RStGU0Rqb25tNUVldkZTYThGRkpoK0lMUW01MU12Q3hISmIwUVpnek1jQnJRNEVyN1hFWkRnem01UnVwWldNdnBFazBWOFNQTGRLZWNFSlJHMHZEZ3FVTytVZnZmYW9CbFQ3amx3akJDRk50TkRUVDJ0Q3VJVjNlTW0wQm4vOTQvRlR4eVQvWUNqTnlSN1J2K21nZGFUN3YyTEJUeCsvVGZTM05MMVBzU2psd0xhTXFjdm9pZXhQQmc9LS1obFpuV3ZQUERkekVDelBOclNZUmZRPT0%3D--9b19e2224e81b61f97d8364fb25a83c0dd82ad3d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-4774fbc1d7011635e2f0ee4ebff3969eff3d2537d32aeef1cf2679859a0e6048.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/createaccount"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "K0ZqbTZmNFBYM3hMcW9xeGdQSWFFUVkxUkQ1UjhLeW81aE5RRGlGdlJBeGF2eVJrSzJTYllKai9XVGxvZWhza0tuc3YxeHNOTVBOMndYdmwyT1pXTWFlSUU0Qm45cjg0bmllcy9mNktiem9QbHc1VVVxWE9XaExMUldPU1FlRk44bDdnU2JsYkUxSTZWTjhIdTBTMG4xWkxKWCs1M1liZExhbWYzVlJwbTRJMGcvait3dEVEL29rYXBsenlXQ0oyQmxvaWptanYxdUhHZzhsOEkyd25tdXBsZlZ2WS9wMTBoMjR1SVNJYlYxd0lCRGgyVU9MQ21UVkhWR1cwVFdROU5PYTNBdWZmWEN6QnhFOWFWblp5OUhaTzExeEdXbmFha0t2b3RuNnQzZTA9LS1RZkZtcDZZSnFOM0pVbk1ZZUtpUUZBPT0%3D--eceff3cb45d6c9a3a6b8f93b0d966596f812e6cf"
                },
                "headers": {
                    "content-length": "241",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "b3lUYWZ3d3B2Vko0TjdTUzB4b2QyT2hIcU1yMzJiSWsxV3pEK25kY1NXN2NYQW9OdE8vS05GcHpPVHlGaS9mZERhSFEzOTNyMDNhdXN3R2F3cjhkTEh2MGpDWVRvcFE1ZXl3Y3grcmd5MlJPUWVYdkdKWWhoeWhoZVppemZOcTZxdWVOZ2xpMC8yeEc5TDBXaUxta3h2TE92ZFBJbGdIT2lXUmJYdE1wbW0xWWhTRGM1eGZEdFNOemxibWIrOWV3LzMwN3BpaDBQR1MvZW1UTk1OU2VpUThxOUkwS01PNmRkd3JyUE9ibjlYeldCenpHUDBrWHlXNkVZUzBpYnZHVnEycHlJb0svWm9EZUNnWFppZVRmVHJnQWpFSzFYNzVFYWNRQTFKMXFrc1JqK1NRUXRIL1ZhaE9iSVdyQ1JhdFBRTGs3eVdENHFBaGlnNXJFNGdFYVBRNDhwTm1jMkdrVjF3ZHl2R09LM2d1STFtVXBpamdXZ3E2TnQ2QkVOUkNyLS1MS1FDOEd0bktKRUNrREVtQTVjeHBBPT0%3D--88b0327bbba0a348f2e04ae4fd8ef13f9a3afa1e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "UDRkdFdndTJmZmFNWHhzMSs5K0VpTGVGVnJRY2tkSHUza0k3YWphQnZvcDdobzNRbVM5eU1LSVRDM3F2WWFvVHJUbFNTb3RGclN5UlVNdFZaLzhzYTh0RC9SWGNXL0pwd3dqV1dBUDBuWEhTVEpXd0RkbWNRQXZFaFlob2lPWm1VY21FZXpVdm1uMG1WbTBmUVl1enRic3VSOUxpZSt2Q1RBQU1BS3daKzFRaXZKYjZUeEpmaTR4eU1sdXFYdGtUOGlWNXpxNjQ3bHdETDgxZTZFa1RyUTdaSUh0RXM0ZkhCVVM5dW1LbFY1MTBSUmJBTVJCQ3dhU0ZxODRKZTFpeEV0S09VYlAzTmY0a3ZReWdLMlBpL2JhU0F3SDZ5Yi9UalJhZjdQNWhRd2tpWnBONE5GejY4UWtYb1Vta3VGelFxazVZa3RmanJLTG85K04wNFRkbzhFcUFmQUlzM1dFdUhwZEpaRXNzNTU2V1M2ZWR5WnplSzlKRlhhVEthYWNwLS1aODRoZVNJMnJMUkljTk4xWDI1dWtnPT0%3D--751911fa9195ec92d7965980830c5724506fd3b3"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-white-sm-de1c090c2f1e81b3d9b9be83a6246202ab917a70183bfdbb5e17ca6541819d46.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/editbasicinfo-414443bbcb5f3e296229c9639c8c5c0394fed992e6c48262e5196eb0ddbcb943.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/editmedication-bcc11dbc1bb2797bc53e7ab959dfeabfed5b775b71392bf1d66305afa9621578.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/deductible-7c25a647c9c748cabb7081c78ed2fd027581a31947da24263a143b0983836f21.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/editdoctor-a31c56bd4045792b040703dd7bee850b8a964c55741e5082097b5a1d9a62688c.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/out_of_pocket_max-c2a14e62c2a1e6a7f5694078e294f4730194f4c19d532bb4af3ada60872dd336.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/mybestplans/doctor_visits-3a2dbbbd74ed11ca8414f8f0073f30fc479a6fed3f853ede281ae91eb86a8588.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "ZTZscU9TK1B5RHlRd1Q0N21FTzFDeEZwTzJ5b293c3lqRStGeXVLcXFOZDk4UGxVOW8vcjloaEc4MGJOR08rUWd1TWM4Ykd2TTdSNGhZa0xYQlZwTVpxWnJ0aHRENzhkYk80QVZnNFNRdUJBL3ExcUhTU2tTTy9yRzd2aWtKZjZrcmpIUm9RTG9paWZScFowMnpVcWI4bHYzaDFoRC9kdlhITGVzMjdjTEkwOG03c3AzN29XSEY2VDMyYTZGVE9IcVNvQzc3cFNYbnY5WURQT2RacWlON0NEK2g3aWNRQndTUzdpblZCRFZleGtjYituR2hadFZGSGNVUmhiMHgvODJOR0FHVVdpMDU1Nm1PSEJOYW9ab2prZ1p4dUpQbm1iMDFoTGV6SVRCT0hFTmRpVHByV3N3UWpxQmdRdm5EN080RnZzWWc0UGVoMmI1aTF4SGtxc2hzMGpNV1J6eVo1YmpCZlNOT3k2MGxaSkt0cXRyQ3c5cW9kUUxXeG81SFE4LS15cmZzOW5NVWVRQkJZWXhZbzMxMnF3PT0%3D--edc62efd46f0e7c2cf26e6be9402d3103bdfcb1d"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "T8jHum6+Uv9KONbpjUBAjm34cpzhDalnGxkXgbPBQA38AE++I23etGYDkz9Oz7XBEIVor/dWth5rxfGMvkG2DQ==",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "b2lKeEhJM2hPYnlNT2FpQ3ZLOUtxbkNDcGF3L0ZTMVV1QmVWL1RudlpnNE9VTmlUZ1FTaFhmajVuWjN0MitVek5hYVlWZEpyeEZmY2xzdU1GaW8wZVRTTkZJeHlUd3dDRW1BUzVTOGpDMVVPRlQxMXVteXZyL0JoaVFabWVCc0Vwblgza2pXS2pFVUk5T2d2QlJKVmJNYXcwWktLWmVJbFhhUzkrWVlTaUxBOVJtK1c2L1R3bWFJTHJQWWlZQ3ZVb0FSZHdxN0ZWY0hkUXplWTBLaHlOclNNYmNmV0Y2VXhNWWlLaDVieDJualhwbjdxYzE0bHBJT1hWNWdHajlNNEMrSlBDMHdaSTR5c3N0NktmaGRZYmZLMU0rbDRvVTlvT05QeUxsQzVsL2htLy8vak5WaGxSS3hoaW5GWDlKbVRTN0NlUDJ4WHJqT3oyZUFwMldtZ1BXL0ErOVV1ZzcrUVQ3WXo2YXc1MURhSTNuemJxTXcrNzVuWDdVUHBMOENLLS16WklzVE1kSm5CTDJPWFNCZ1RBbENRPT0%3D--ee9b420e0f9d06d94aa7d9bb870f8d96833ae0ce"
                },
                "headers": {
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "x-csrf-token": "T8jHum6+Uv9KONbpjUBAjm34cpzhDalnGxkXgbPBQA38AE++I23etGYDkz9Oz7XBEIVor/dWth5rxfGMvkG2DQ==",
                    "accept-language": "en-US,en;q=0.9",
                    "x-requested-with": "XMLHttpRequest",
                    "content-length": "336938",
                    "pragma": "no-cache",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "b2lKeEhJM2hPYnlNT2FpQ3ZLOUtxbkNDcGF3L0ZTMVV1QmVWL1RudlpnNE9VTmlUZ1FTaFhmajVuWjN0MitVek5hYVlWZEpyeEZmY2xzdU1GaW8wZVRTTkZJeHlUd3dDRW1BUzVTOGpDMVVPRlQxMXVteXZyL0JoaVFabWVCc0Vwblgza2pXS2pFVUk5T2d2QlJKVmJNYXcwWktLWmVJbFhhUzkrWVlTaUxBOVJtK1c2L1R3bWFJTHJQWWlZQ3ZVb0FSZHdxN0ZWY0hkUXplWTBLaHlOclNNYmNmV0Y2VXhNWWlLaDVieDJualhwbjdxYzE0bHBJT1hWNWdHajlNNEMrSlBDMHdaSTR5c3N0NktmaGRZYmZLMU0rbDRvVTlvT05QeUxsQzVsL2htLy8vak5WaGxSS3hoaW5GWDlKbVRTN0NlUDJ4WHJqT3oyZUFwMldtZ1BXL0ErOVV1ZzcrUVQ3WXo2YXc1MURhSTNuemJxTXcrNzVuWDdVUHBMOENLLS16WklzVE1kSm5CTDJPWFNCZ1RBbENRPT0%3D--ee9b420e0f9d06d94aa7d9bb870f8d96833ae0ce"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/MedicationNOTCOVERED.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "b2lKeEhJM2hPYnlNT2FpQ3ZLOUtxbkNDcGF3L0ZTMVV1QmVWL1RudlpnNE9VTmlUZ1FTaFhmajVuWjN0MitVek5hYVlWZEpyeEZmY2xzdU1GaW8wZVRTTkZJeHlUd3dDRW1BUzVTOGpDMVVPRlQxMXVteXZyL0JoaVFabWVCc0Vwblgza2pXS2pFVUk5T2d2QlJKVmJNYXcwWktLWmVJbFhhUzkrWVlTaUxBOVJtK1c2L1R3bWFJTHJQWWlZQ3ZVb0FSZHdxN0ZWY0hkUXplWTBLaHlOclNNYmNmV0Y2VXhNWWlLaDVieDJualhwbjdxYzE0bHBJT1hWNWdHajlNNEMrSlBDMHdaSTR5c3N0NktmaGRZYmZLMU0rbDRvVTlvT05QeUxsQzVsL2htLy8vak5WaGxSS3hoaW5GWDlKbVRTN0NlUDJ4WHJqT3oyZUFwMldtZ1BXL0ErOVV1ZzcrUVQ3WXo2YXc1MURhSTNuemJxTXcrNzVuWDdVUHBMOENLLS16WklzVE1kSm5CTDJPWFNCZ1RBbENRPT0%3D--ee9b420e0f9d06d94aa7d9bb870f8d96833ae0ce"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/mybestplans"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/MedPill.svg",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "b2lKeEhJM2hPYnlNT2FpQ3ZLOUtxbkNDcGF3L0ZTMVV1QmVWL1RudlpnNE9VTmlUZ1FTaFhmajVuWjN0MitVek5hYVlWZEpyeEZmY2xzdU1GaW8wZVRTTkZJeHlUd3dDRW1BUzVTOGpDMVVPRlQxMXVteXZyL0JoaVFabWVCc0Vwblgza2pXS2pFVUk5T2d2QlJKVmJNYXcwWktLWmVJbFhhUzkrWVlTaUxBOVJtK1c2L1R3bWFJTHJQWWlZQ3ZVb0FSZHdxN0ZWY0hkUXplWTBLaHlOclNNYmNmV0Y2VXhNWWlLaDVieDJualhwbjdxYzE0bHBJT1hWNWdHajlNNEMrSlBDMHdaSTR5c3N0NktmaGRZYmZLMU0rbDRvVTlvT05QeUxsQzVsL2htLy8vak5WaGxSS3hoaW5GWDlKbVRTN0NlUDJ4WHJqT3oyZUFwMldtZ1BXL0ErOVV1ZzcrUVQ3WXo2YXc1MURhSTNuemJxTXcrNzVuWDdVUHBMOENLLS16WklzVE1kSm5CTDJPWFNCZ1RBbENRPT0%3D--ee9b420e0f9d06d94aa7d9bb870f8d96833ae0ce"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_impacthealth_session": "Q2Eram14eGN0cThMRitsckdnQ1Q5RGdHSjN0YWswSzZtUUtxVlRvbHBzNmozeE1CaDdYN0RKcVZKd1B6NVN3MHk2cDNMQUFMbEdYTWl1QmJ5NzhjSExBdFNEQ0xrbU9YZEYzdzRSdkR2NXRQa1NUaUlBczlZRWlUWUFmc3pFcnFhUlkrQW4rdXU4NkVVdlRpS1RCaENFanh0WFRLZkNsdGVIWlNEbEpJZHRDbng2SmZNMmFjbVVLb2ZGZnZWcTZacEhlbi9kTVZ2VnhHZ0hYZDhET05GZE9YY0htZjFaeWpSZk1VTEtCTkpTWWQyRUlYSnZOVndudVN3dkRONzNjbnA4eDJSazNBNHI4YzRLbW1JVFNRU2NlSUJGbHZYejFhcDlpdi9KYy9TV1JDWTR5aXlhSzlQZWlNZitJZVZacjdhZUs3cVRVWWh0amtXNXZQbk5UVm1Ldjd3RWtUR09hTHNMNEJSS0dUTkdSd2ozcFpZeXIyQko0eG5kUHVsUWlyLS14Tmk0dC9Ob1VCSUtDOUFmNDczSHdnPT0%3D--0fb06106a08f5859f6b83f909739d1db745ac25d",
                    "_gat": "1"
                },
                "headers": {
                    "content-length": "67",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-primary-c447fe24578911fc3d91d6cd7be988de4ef42833961fe7f3a4975980dc181063.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enroll"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "L2pCbWVtb0JsU1dNUFJGTmwzS1luUGZ3cEMreWVWRFE3NzVKOTlkbTZBRWtLQk9YT2VpcFRPelVmNUt6dzdkRERHcStlYTJSMFN1aHFlVVd2d1BpcWVvbkpyZkdwaFA2YitjQ1RCNkRsdTA2QlhvUGlQRFZwbzByUkM1Y2VrdGc3djA1RllHK0xxTTEzcytZYWNSem1yY3hZQTh5NWg2QzNYSnJuUHo2UWMzSnYwUjd6UFd4RzJsNXc5L3ZoeGZzWCt4bVF3S2FCRzZRVnVaaUFSeWJTQWRMMkpBY3h2cm9zQjIrZmtTNWhmdTF3dzFaOEo0dVRZWDNTUDc1Zk83YUVMS3VxSmR6ZzdFcUlPZ3NINVZRY1FtYUNzRGV3MFVQVlB5NXU3TXVVWnIrMEd2QjlpSEhLZ3BCTHVSM2thdndrRk8vZXMyTFViWUNaVHJCUE1kYUordjY0UGMwV1daTjA3a3YvbE5WSWM0RVJRZzNzeXNLZHlIMkJ2VnJXODBlbWFTeTY2NkhrOEdtR2xGZm8zYVh5U2RFaXZrMGlvQzk5K2V3ZHVtS1FTUnNXamp2cHk3dUI3eXdCTFN5NzBKTlJLeVlpcGo0a0xsdHRVVzBER1drcE8yTDhtTWpMaFdTWVpPNGt3b1VpbWRFaDQ3VTJNaHh2YWlMQWM2d0lKVndEM1UrUlh0NVE2bG9OeHc0VllwUWNPMnhhS2VXYmRYQ2FlVWhtLzhrZTYzMFdFemNmaSt5dDU5SUFreWlOMUlOdzlGSkNtODJWK1NDczBuMDFkQWxZdz09LS1Pdkltb01zOXVubDlxUGR1aDdpbC93PT0%3D--39632e5508ed92e06368a815a745b412e441f26c"
                },
                "headers": {
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "upgrade-insecure-requests": "1",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "text/css,*/*;q=0.1",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/trackjs-ba3ad13ecc5616e254f33365849ea57b0bf87af16f3cdf25599687ba59f7ea98.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/application-9a87ac60ff8c26aafebe120b3c7629b3c5d11f9568d058898ac7f6b77a01c861.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/logo-primary-c447fe24578911fc3d91d6cd7be988de4ef42833961fe7f3a4975980dc181063.png",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "image/webp,image/apng,image/*,*/*;q=0.8",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/localize-affebd41643f3cb573ce09e7fc9c8d50d7aa34a4d0d9a8d747fcb70f72dff966.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
                    "accept": "*/*",
                    "cache-control": "no-cache",
                    "referer": config.baseUrl + "/enrollbasics"
                }
            }
        }, {
            "method": "get",
            "url": config.baseUrl + "/assets/zendesk_chat-8d92e8ea69b3785e3af9f9b03d3d06c7a8305f11e6f75a8b31436fbf55953cf2.js",
            "params": {
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "dnt": "1",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "pragma": "no-cache",
                    "origin": config.baseUrl + "",
                    "accept-encoding": "gzip, deflate, br",
                    "accept-language": "en-US,en;q=0.9",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
                "cookies": {
                    "optimizelyEndUserId": "oeu1526871575130r0.2688987229298252",
                    "ajs_user_id": "null",
                    "ajs_group_id": "null",
                    "_ga": "GA1.2.1416207802.1526871577",
                    "_gid": "GA1.2.1980668749.1526871577",
                    "ajs_anonymous_id": "%2205493a88-ea9c-4130-91c2-d43f3f27fc1b%22",
                    "ljs-lang": "en",
                    "__zlcmid": "mWhM8rptQnIWpA",
                    "_gat": "1",
                    "_impacthealth_session": "T1duaFFuTkhGNDlRSWZ6L2wrRmpVUUZIa25UMkhYbk43ZFV6RnIxTWNUN1ZOTkUxWnFkWStRK2VTaW45UWx5aXVtb1hLZXlQeVRRZTNYYVIwZHdFU0E2NU9SOEg0akNrTEo1aGFLY1ErUEw3aG0vaDhuM3Z2Qmh2bG9FQWI0ZjRGaEVXSlg2ZmJib09Sd2pWMlRhQmExWFk4SUNtaWtEREFwRmJhNkphdFkzWUVTVjE2WXRNbHVDWktaejJYaCtGOGZoQU1GN2M5M2ZISXpQL0pnYUJIL01YS0tIeDhuRXF5cDQ4KzdFN0k0OGF6WGpWSHN4ek0waEkwTnFEWTI2VE1GSS9KUXBvcjdUVnBOL0k5ajlsTlNoV1NQeEFtVzRPUUVyNnAyUlF6V2xNU0U1RVBHNm1rY242S21PUzBObDdkQVplRlozRUNMUjZxeDBWcWFObXNjQVVuaEluV3o2TFdSN2VXYjlHa2kyd2owTE9QMGxHSldacjdzMmNqdHN6WngwaXRHSExpS2JkZExPWkRxalNuVFRQVlFZcExsZHQrNklXalJtNEFjenBWa05BSmJHNzV0WVpMMVIyMkRwU1ErVURVTTZiL1luZUQ3SGpDc0lCbjFBbEtIS1l1TVZTWURkbGVrQ0tHL015a3RJRXRFU09EVWJBMVAyOWRaY0E3NEM4QjNWOFdSSEZJdXpvZG9qbDBPV3JXdzFUS0VlcUhxMytHWHVKVzY3dm0wUDN2NjBHRG9ZT0ViUzlOUlczK2FSdGd3cGtMSHdzZ0F2c3pGODBGL1pmdThQVlMyNmE4c0NqVWtxZEtOYURUTlNBYWJHOVZ4UUVjTE9MSWJYTy0tTCt5WjVTcG9BQjJrdFU3MS9Ic0wvZz09--fc15b3d46810a3d836d4b6c0f4d925e68bfab50e"
                },
                "headers": {
                    "content-length": "255",
                    "pragma": "no-cache",
                    "cache-control": "no-cache",
                    "origin": config.baseUrl + "",
                    "upgrade-insecure-requests": "1",
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36",
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
