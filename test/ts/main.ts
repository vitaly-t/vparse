import {Version, parseVersion} from '../../ts/vparse';

var v1: Version = parseVersion('1.2.3.4');

var v2: Version = new Version('.1');

var cmp: number = v1.compare(v2);
