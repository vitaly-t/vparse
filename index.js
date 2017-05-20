(function (window) {
    'use strict';
    function parseVersion(v) {
        var m = v.match(/\d*\.|\d+/g) || [];
        v = {
            major: +m[0] || 0,
            minor: +m[1] || 0,
            patch: +m[2] || 0,
            build: +m[3] || 0
        };
        v.isEmpty = !v.major && !v.minor && !v.patch && !v.build;
        v.parsed = [v.major, v.minor, v.patch, v.build];
        return v;
    }

    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = parseVersion;
    }
    else {
        window.parseVersion = parseVersion;
    }
})(this);
