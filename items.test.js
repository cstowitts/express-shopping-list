const request = require("supertest");
const app = require("./app");
let { items } = require("./fakeDb");

// app.use(express.json()); //process JSON body => req.body


let birriaTacos = {
    "name": "Birria Tacos",
    "price": 10.99
};

beforeEach(function(){
    items.push(birriaTacos);
});

afterEach(function(){
    items = [];
});

/** GET /items - returns '{items: [{item1}, {item2}]}` */
describe("GET /items", function(){
    it("gets a shopping list", async function(){
        const resp = await request(app).get('/items');

        expect(resp.body).toEqual({items: [
            {
            "name": "Birria Tacos",
            "price": 10.99 
            }
        ]});
    });
});

