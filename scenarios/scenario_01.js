import http from "k6/http";
import {check} from "k6";
import {config} from "./config.js";

export default function () {
    let res = http.get(config.baseUrl);
    check(res, {"status is 200": (r) => r.status === 200});
}
