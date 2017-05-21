export class Version {
    constructor(v: string) {
        var m = v.replace(/[^0-9.]/g, '').match(/[0-9]*\.|[0-9]+/g) || [];
        this.major = +m[0] || 0;
        this.minor = +m[1] || 0;
        this.patch = +m[2] || 0;
        this.build = +m[3] || 0;
        this.isEmpty = !this.major && !this.minor && !this.patch && !this.build;
        this.parsed = [this.major, this.minor, this.patch, this.build];
        this.text = this.parsed.join('.');
    }

    compare(v: string | Version): number {
        if (typeof v === 'string') {
            v = new Version(v);
        }
        for (var i = 0; i < 4; i++) {
            if (this.parsed[i] !== v.parsed[i]) {
                return this.parsed[i] > v.parsed[i] ? 1 : -1;
            }
        }
        return 0;
    }

    major: number;
    minor: number;
    patch: number;
    build: number;
    isEmpty: boolean;
    parsed: Array<number>;
    text: string;
}

export function parseVersion(v: string): Version {
    return new Version(v);
}
