import React, { useEffect, useState } from "react";

const App = () => {
    let [data, setData] = useState();

    useEffect(() => {
        (async () => {
            let response = await fetch("https://dummyjson.com/products/1");
            let json = await response.json();
            setData(json);
        })();
    }, []);

    return (
        <div>
            <h1>Hello React!</h1>
            {JSON.stringify(data)}
        </div>
    );
};

export default App;
