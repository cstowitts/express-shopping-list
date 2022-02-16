const express = require("express");
const app = express();

const router = require("./routes");

app.use(express.json()); //process JSON body => req.body


const { items } = require("./fakeDb");


// const {errors} //finish that up later when we work on error handling

app.use("/items", router);







// /** 404 handler: matches unmatched routes; raises NotFoundError. */
// app.use(function (req, res, next) {
//     throw new NotFoundError();
//   });
  
// /** Error handler: logs stacktrace and returns JSON error message. */
// app.use(function (err, req, res, next) {
// const status = err.status || 500;
// const message = err.message;
// if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
// return res.status(status).json({ error: { message, status } });
// });



module.exports = app;