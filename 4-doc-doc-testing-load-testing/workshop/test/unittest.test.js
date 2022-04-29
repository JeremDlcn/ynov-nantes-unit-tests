const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("TODO tests", function() {
    test(`Is get reponse status 200`, () => {
        const response = await request.get("/todo");
        expect(response.status).toBe(200);
        done();
    })
    test(`Is post saving the item`, () => {
        const testText = "test";
        const response = await request.post("/todo").send({
            text: testText,
        })
        expect(testText).toBe(response.text);
        done();
    })
});