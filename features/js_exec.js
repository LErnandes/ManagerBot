function js_exec(js_string) {
    return eval(`${js_string}`)
}

module.exports = js_exec;
