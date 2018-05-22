export let config = {
    baseUrl: "< YOUR WEBSITE URL HERE, e.g. https://mywebsite.com >",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36"
};

export let commonHeaders = {
    "pragma": "no-cache",
    "cache-control": "no-cache",
    "upgrade-insecure-requests": "1",
    "user-agent": config.userAgent,
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9"
};

// https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
export function mergeHeaders(headers) {
    let result = {};
    Object.assign(result, commonHeaders, headers);
    return result;
}
