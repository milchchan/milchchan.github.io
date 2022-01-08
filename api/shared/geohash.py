import math

def deg2rad(deg):
    return deg * (math.pi / 180)

def encode_geohash(latitude, longitude, precision=12):
    BITS = [16, 8, 4, 2, 1]
    BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz"
    is_even = 1
    lat = [-90.0, 90.0]
    lon = [-180.0, 180.0]
    bit = 0
    ch = 0
    geohash = ""

    while len(geohash) < precision:
        if is_even:
            mid = (lon[0] + lon[1]) / 2

            if longitude > mid:
                ch |= BITS[bit]
                lon[0] = mid
            else:
                lon[1] = mid
        else:
            mid = (lat[0] + lat[1]) / 2

            if latitude > mid:
                ch |= BITS[bit]
                lat[0] = mid
            else:
                lat[1] = mid

        is_even = not is_even

        if bit < 4:
            bit += 1
        else:
            geohash += BASE32[ch]
            bit = 0
            ch = 0
    
    return geohash


def decode_geohash(geohash):
    BITS = [16, 8, 4, 2, 1]
    BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz"
    is_even = 1
    lat = [-90.0, 90.0]
    lon = [-180.0, 180.0]
    lat_err = 90.0
    lon_err = 180.0

    for i in range(len(geohash)):
        c = geohash[i]
        cd = BASE32.index(c)

        for j in range(5):
            mask = BITS[j]

            if is_even:
                lon_err /= 2

                if cd & mask:
                    lon[0] = (lon[0] + lon[1]) / 2
                else:
                    lon[1] = (lon[0] + lon[1]) / 2
            else:
                lat_err /= 2

                if cd & mask:
                    lat[0] = (lat[0] + lat[1]) / 2
                else:
                    lat[1] = (lat[0] + lat[1]) / 2

            is_even = not is_even

    return {
        'latitude': (lat[0] + lat[1]) / 2,
        'longitude': (lon[0] + lon[1]) / 2,
        'topleft': { 'latitude': lat[0], 'longitude': lon[0] },
        'topright': { 'latitude': lat[1], 'longitude': lon[0] },
        'bottomright': { 'latitude': lat[1], 'longitude': lon[1] },
        'bottomleft': { 'latitude': lat[0], 'longitude': lon[1] }
    }


def get_neighbors(geohash):
    rightGeohash = calculate_adjacent(geohash, 'right')
    leftGeohash = calculate_adjacent(geohash, 'left')

    return {
        'top': calculate_adjacent(geohash, 'top'),
        'bottom': calculate_adjacent(geohash, 'bottom'),
        'right': rightGeohash,
        'left': leftGeohash,
        'topleft': calculate_adjacent(leftGeohash, 'top'),
        'topright': calculate_adjacent(rightGeohash, 'top'),
        'bottomright': calculate_adjacent(rightGeohash, 'bottom'),
        'bottomleft': calculate_adjacent(leftGeohash, 'bottom')
    }


def calculate_adjacent(srcHash, dir):
    BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz"
    NEIGHBORS = {
        'right': { 'even': "bc01fg45238967deuvhjyznpkmstqrwx" },
        'left': { 'even': "238967debc01fg45kmstqrwxuvhjyznp" },
        'top': { 'even': "p0r21436x8zb9dcf5h7kjnmqesgutwvy" },
        'bottom': { 'even': "14365h7k9dcfesgujnmqp0r2twvyx8zb" }
    }
    BORDERS = {
        'right': { 'even': "bcfguvyz" },
        'left': { 'even': "0145hjnp" },
        'top': { 'even': "prxz" },
        'bottom': { 'even': "028b" }
    }

    NEIGHBORS['bottom']['odd'] = NEIGHBORS['left']['even']
    NEIGHBORS['top']['odd'] = NEIGHBORS['right']['even']
    NEIGHBORS['left']['odd'] = NEIGHBORS['bottom']['even']
    NEIGHBORS['right']['odd'] = NEIGHBORS['top']['even']

    BORDERS['bottom']['odd'] = BORDERS['left']['even']
    BORDERS['top']['odd'] = BORDERS['right']['even']
    BORDERS['left']['odd'] = BORDERS['bottom']['even']
    BORDERS['right']['odd'] = BORDERS['top']['even']

    srcHash = srcHash.lower()

    lastChr = srcHash[len(srcHash) - 1]
    type = 'even' if len(srcHash) % 2 == 0 else 'odd'
    base = srcHash[:len(srcHash) - 1]

    if index_of(BORDERS[dir][type], lastChr, -1) != -1:
        base = calculate_adjacent(base, dir)

    return base + BASE32[NEIGHBORS[dir][type].index(lastChr)]


def index_of(l, x, default=False):
    return l.index(x) if x in l else default