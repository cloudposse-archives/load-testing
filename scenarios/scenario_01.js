import http from "k6/http";
import {check} from "k6";
import {options} from "./options.js";
import {config} from "./config.js";

export default function () {
    console.log("Options: " + JSON.stringify(options) + "\n");
    let res = http.get(config.baseUrl);
    check(res, {"Status is 200": (r) => r.status === 200});
}
