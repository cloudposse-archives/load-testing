import http from "k6/http";
import {check} from "k6";
import {options} from "./options.js";
import {config} from "./config.js";

export function setup() {
    console.log("Options: " + JSON.stringify(options) + "\n");
}

export function teardown(data) {
}

export default function (data) {
    let res = http.get(config.baseUrl);
    check(res, {"Status is 200": (r) => r.status === 200});
}
