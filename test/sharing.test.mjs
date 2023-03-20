import assert from "assert";
import sinon from "sinon";
import { share } from "../sharing.mjs"

global.fetch = () => { };
global.window = {
    btoa: value => value
};

describe("sharing", function () {
    let fetchStub;

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch');
    });
    afterEach(() => {
        fetchStub.restore();
    });
    it("share", async function () {
        fetchStub.returns(Promise.resolve({ ok: true, json: () => Promise.resolve({ text: "foo", author: "bar" }) }));

        assert.equal(true, typeof (await share("foo", "bar")) === "object");
    });
});