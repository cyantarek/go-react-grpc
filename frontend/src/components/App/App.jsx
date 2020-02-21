import React from 'react';
import './App.css';

const {HelloServiceClient} = require("../../api/hello/hello_service_grpc_web_pb");
const {HelloRequest} = require("../../api/hello/hello_service_pb");

let client = new HelloServiceClient("http://localhost:9090", null, null);

function App() {
    const callGrpcService = () => {
        let req = new HelloRequest();
        req.setName("Cyan Tarek");

        client.sayHello(req, {}, (err, response) => {
            if (response == null) {
                console.log(err)
            }else {
                console.log(response.toObject().message)
            }
        })
    };

    callGrpcService();

    return (
        <div className="App">
            Hello World
        </div>
    );
}

export default App;
