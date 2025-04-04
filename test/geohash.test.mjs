import assert from "assert";
import { encodeGeohash, decodeGeohash, getNeighbors, deg2rad, getDistance } from "../geohash.mjs"

describe("geohash", () => {
    it("encodeGeohash", () => {
        assert.equal("u4pruydqqvj", encodeGeohash(57.64911, 10.40744, 11));
    });

    it("decodeGeohash", () => {
        const location = decodeGeohash("u4pruydqqvj");

        assert.equal(57.64911, Math.round(location.latitude * 100000) / 100000);
        assert.equal(10.40744, Math.round(location.longitude * 100000) / 100000);
    });

    it("getNeighbors", () => {
        const neighbors = getNeighbors("u4pruydqqvj");

        assert.equal("u4pruydqqvm", neighbors.top);
        assert.equal("u4pruydqquv", neighbors.bottom);
        assert.equal("u4pruydqqvn", neighbors.right);
        assert.equal("u4pruydqqvh", neighbors.left);
        assert.equal("u4pruydqqvk", neighbors.topleft);
        assert.equal("u4pruydqqvq", neighbors.topright);
        assert.equal("u4pruydqquy", neighbors.bottomright);
        assert.equal("u4pruydqquu", neighbors.bottomleft);
    });

    it("deg2rad", () => {
        assert.equal(1.57, Math.round(deg2rad(90) * 100) / 100);
    });

    it("getDistance", () => {
        assert.equal(838, Math.round(getDistance(59.914, 10.752, 52.523, 13.412)));
    });
});