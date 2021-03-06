(function (window) {
    'use strict';
    function parseVersion(v) {
        var m = v.replace(/[^0-9.]/g, '').match(/[0-9]*\.|[0-9]+/g) || [];
        v = {
            major: +m[0] || 0,
            minor: +m[1] || 0,
            patch: +m[2] || 0,
            build: +m[3] || 0
        };
        v.isEmpty = !v.major && !v.minor && !v.patch && !v.build;
        v.parsed = [v.major, v.minor, v.patch, v.build];
        v.text = v.parsed.join('.');
        v.compare = compare;
        return v;
    }

    function compare(v) {
        if (typeof v === 'string') {
            v = parseVersion(v);
        }
        for (var i = 0; i < 4; i++) {
            if (this.parsed[i] !== v.parsed[i]) {
                return this.parsed[i] > v.parsed[i] ? 1 : -1;
            }
        }
        return 0;
    }

    /* istanbul ignore else */
    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = parseVersion;
    }
    else {
        window.parseVersion = parseVersion;
    }
})(this);
