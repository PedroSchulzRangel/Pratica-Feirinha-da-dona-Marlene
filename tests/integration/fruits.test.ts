import supertest from 'supertest';
import app from "../../src/index";

const server = supertest(app);

describe("POST /fruits",() => {
it("should return 201 when inserting a fruit", async () => {
    const body = {
         name: "banana",
         price: "6"       
    };
    
    const result = await server.post("/fruits").send(body);
    const status = result.status;
    expect(status).toEqual(201);

});

it("should return 409 when inserting a fruit that is already registered", async () => {
    
});

it("should return 422 when inserting a fruit with data missing", async () => {
    
});

});

describe("GET /fruits", () => {
    it("shoud return 404 when trying to get a fruit that doesn't exists", async () => {
        const response = await server.get("/fruits/25");
        expect(response.status).toBe(404);
    });

    it("should return 400 when id param is not valid", async () => {
        const response = await server.get("/fruits/35");
        expect(response.status).toBe(400);
    });

    it("should return a fruit given an id", async () => {
        const response = await server.get("/fruits/1");
        expect(response.status).toBe(200);
    });

    it("should return all fruits", async () => {
        const response = await server.get("/fruits");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            name: "banana",
            price: "6"
        });
    });
});