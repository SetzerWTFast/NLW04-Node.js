import express, { response } from 'express';

const app = express();

app.get("/", (Request, Response) => {
    return Response.send("Hello World - NLW#4");
});

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos!" });
});

app.listen(3333, () => console.log("Server is running..."));