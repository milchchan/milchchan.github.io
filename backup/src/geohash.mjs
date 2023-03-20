export function encodeGeohash(latitude, longitude, precision = 12) {
    const BITS = [16, 8, 4, 2, 1];
    const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
    var is_even = 1;
    var lat = [];
    var lon = [];
    var bit = 0;
    var ch = 0;
    let geohash = "";

    lat[0] = -90.0; lat[1] = 90.0;
    lon[0] = -180.0; lon[1] = 180.0;

    while (geohash.length < precision) {
        if (is_even) {
            const mid = (lon[0] + lon[1]) / 2;

            if (longitude > mid) {
                ch |= BITS[bit];
                lon[0] = mid;
            } else
                lon[1] = mid;
        } else {
            const mid = (lat[0] + lat[1]) / 2;

            if (latitude > mid) {
                ch |= BITS[bit];
                lat[0] = mid;
            } else
                lat[1] = mid;
        }

        is_even = !is_even;

        if (bit < 4) {
            bit++;
        } else {
            geohash += BASE32[ch];
            bit = 0;
            ch = 0;
        }
    }

    return geohash;
}

export function decodeGeohash(geohash) {
    const BITS = [16, 8, 4, 2, 1];
    const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
    var is_even = 1;
    var lat = [];
    var lon = [];
    var lat_err = 90.0;
    var lon_err = 180.0;

    lat[0] = -90.0;
    lat[1] = 90.0;
    lon[0] = -180.0;
    lon[1] = 180.0;

    for (var i = 0; i < geohash.length; i++) {
        var c = geohash[i];
        var cd = BASE32.indexOf(c);

        for (var j = 0; j < 5; j++) {
            const mask = BITS[j];

            if (is_even) {
                lon_err /= 2;

                if (cd & mask) {
                    lon[0] = (lon[0] + lon[1]) / 2;
                } else {
                    lon[1] = (lon[0] + lon[1]) / 2;
                }
            } else {
                lat_err /= 2;

                if (cd & mask) {
                    lat[0] = (lat[0] + lat[1]) / 2;
                } else {
                    lat[1] = (lat[0] + lat[1]) / 2;
                }
            }

            is_even = !is_even;
        }
    }

    lat[2] = (lat[0] + lat[1]) / 2;
    lon[2] = (lon[0] + lon[1]) / 2;

    return {
        latitude: lat[2],
        longitude: lon[2],
        topleft: { latitude: lat[0], longitude: lon[0] },
        topright: { latitude: lat[1], longitude: lon[0] },
        bottomright: { latitude: lat[1], longitude: lon[1] },
        bottomleft: { latitude: lat[0], longitude: lon[1] }
    };
}

function calculateAdjacent(srcHash, dir) {
    const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";
    const NEIGHBORS = {
        right: { even: "bc01fg45238967deuvhjyznpkmstqrwx" },
        left: { even: "238967debc01fg45kmstqrwxuvhjyznp" },
        top: { even: "p0r21436x8zb9dcf5h7kjnmqesgutwvy" },
        bottom: { even: "14365h7k9dcfesgujnmqp0r2twvyx8zb" }
    };
    const BORDERS = {
        right: { even: "bcfguvyz" },
        left: { even: "0145hjnp" },
        top: { even: "prxz" },
        bottom: { even: "028b" }
    };

    NEIGHBORS.bottom.odd = NEIGHBORS.left.even;
    NEIGHBORS.top.odd = NEIGHBORS.right.even;
    NEIGHBORS.left.odd = NEIGHBORS.bottom.even;
    NEIGHBORS.right.odd = NEIGHBORS.top.even;

    BORDERS.bottom.odd = BORDERS.left.even;
    BORDERS.top.odd = BORDERS.right.even;
    BORDERS.left.odd = BORDERS.bottom.even;
    BORDERS.right.odd = BORDERS.top.even;

    srcHash = srcHash.toLowerCase();

    var lastChr = srcHash.charAt(srcHash.length - 1);
    var type = (srcHash.length % 2) ? 'odd' : 'even';
    var base = srcHash.substring(0, srcHash.length - 1);

    if (BORDERS[dir][type].indexOf(lastChr) != -1) {
        base = calculateAdjacent(base, dir);
    }

    return base + BASE32[NEIGHBORS[dir][type].indexOf(lastChr)];
}

export function getNeighbors(geohash) {
    const rightGeohash = calculateAdjacent(geohash, 'right');
    const leftGeohash = calculateAdjacent(geohash, 'left');

    return {
        top: calculateAdjacent(geohash, 'top'),
        bottom: calculateAdjacent(geohash, 'bottom'),
        right: rightGeohash,
        left: leftGeohash,
        topleft: calculateAdjacent(leftGeohash, 'top'),
        topright: calculateAdjacent(rightGeohash, 'top'),
        bottomright: calculateAdjacent(rightGeohash, 'bottom'),
        bottomleft: calculateAdjacent(leftGeohash, 'bottom')
    };
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

export function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km

    return d;
}