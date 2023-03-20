import assert from "assert";
import sinon from "sinon";
import { share, recent } from "../sharing.mjs"

global.fetch = () => { };
global.window = {
    btoa: value => value
};

describe("sharing", () => {
    let fetchStub;

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch');
    });
    afterEach(() => {
        fetchStub.restore();
    });
    it("share", async () => {
        fetchStub.returns(Promise.resolve({ ok: true, json: () => Promise.resolve({ text: "foo", author: "bar", timestamp: 12345 }) }));

        assert.equal(true, typeof (await share("foo", "bar")) === "object");
    });
    it("recent", async () => {
        fetchStub.returns(Promise.resolve({ ok: true, json: () => Promise.resolve([{ text: "foo", author: "bar", timestamp: 12345 }]) }));

        assert.equal(true, Array.isArray(await recent(0, 100)));
    });
});