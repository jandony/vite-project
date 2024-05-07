import { useEffect, useRef, useState } from "react";

const App = () => {
    
    // SECTION 1
    let myHeadline = useRef();
    const changeH1 = () => {
        // This assigns the useRef TEXT variable to a string value
        myHeadline.current.innerText = "Hi Jeffrey!";
    }

    // SECTION 2
    let myImg = useRef();
    const changeImg = () => {
        // This assigns the new useRef IMAGE variable and dimension attributes
        myImg.current.src = "https://placehold.co/600x400/000000/FFF";
        myImg.current.setAttribute('height','200px' );
        myImg.current.setAttribute('width','300px' );
    }

    // SECTION 3
    let firstName, lastName = useRef();
    const changeInput = () => {
        let fName = firstName.value;
        let lName = lastName.value;
        alert('Hello ' + fName + ' ' + lName);
    }

    // SECTION 4
    let myHeadlineCSS = useRef();
    const changeHeadlineCSS = () => {
        console.log(myHeadlineCSS.current.classList);
        myHeadlineCSS.current.classList.remove('text-success');
        myHeadlineCSS.current.classList.add('text-danger');
    }

    // SECTION 5
    let APIData = useRef(null);
    let dataResults = useRef();
    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        APIData.current = await response.json();
    }
    const showData = () => {
        dataResults.current.innerText = JSON.stringify(APIData.current);
    }

    // SECTION 6
    const [number, setNumber] = useState(0);

    // SECTION 7
    const objName = "Jane Doe";
    const objAge = 35;
    const objGender = "female";
    const [myObj, setMyObj] = useState({
        name: objName,
        age: objAge,
        gender: objGender,
    });
    const changeObj = () => {
        setMyObj({
            name: "Jeffrey",
            age: 29,
            gender: "male",
        });
    }
    const resetObj = () => {
        setMyObj({
            name: objName,
            age: objAge,
            gender: objGender,
        });
    }

    // SECTION 8
    const [list, setList] = useState(["red", "blue", "yellow"]);
    const [item, setItem] = useState("");
    let itemValue = useRef();
    const addToList = (e) => {
        e.preventDefault();
        list.push(item);
        setList([...list]);
        setItem("");
        itemValue.current.value = "";
    }
    const removeItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }

    // SECTION 9
    let [formObj, setFormObj] = useState({
        fName: "",
        lName: "",
        city: "",
        gender: "",
    });
    const inputOnChange = (property, value) => {
        setFormObj((prevObj) => ({
            ...prevObj,
            [property]: value,
        }));
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formObj);
    }

    // SECTION 10
    let [promiseData, setPromiseData] = useState();
    useEffect(() => {
        fetch('https://dummyjson.com/products/1') // call api
            .then(res => res.json()) // retrieve data in a json format
            .then(json => setPromiseData(json)) // setting data to the variable
    },[]);

    // SECTION 11
    let [awaitData, setAwaitData] = useState(null);
    useEffect(() => {
        // Course code that doesn't work
            // (async () => {
            //     let awaitRes = await fetch('https://dummyjson.com/products/1');
            //     let resJSON = await awaitRes.json();
            //     setAwaitData(resJSON);
            // })

        // ChatGPT Solution
        const fetchData = async () => {
            try {
                let awaitRes = await fetch('https://dummyjson.com/products/1');
                let resJSON = await awaitRes.json();
                setAwaitData(resJSON);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Call the async function immediately after defining it
    },[]);

    return (
        <div>
            {/* SECTION 1: This section will add the text variable WITHOUT a re-render using the useRef hook */}
            <div style={{ display: 'none' }}>
                <h1 ref={myHeadline}></h1>
                <button onClick={changeH1}>Click Me</button>
            </div>

            {/* SECTION 2: This section will change the image on click using the useRef hook */}
            <div style={{ display: 'none', margin: 25 }}>
                <h1>Update this image by clicking the button</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 25 }}>
                    <img ref={myImg} src="https://placehold.co/600x400" alt="placeholder image" />
                    <button onClick={changeImg}>Click Me</button>
                </div>
            </div>

            {/* SECTION 3: This section will collect the INPUT value using the useRef hook */}
            {/* NOTE: by using the () => { } inside the ref={} area, you will NOT need to use .current in the changInput function variables */}
            <div style={{ display: 'none', margin: 25 }}>
                <h1>Collect input values using the useRef Hook</h1>
                <form style={{ display: 'flex', maxWidth: 750, gap: 25, margin: 25 }}>
                    <input ref={(a) => firstName = a} type="text" placeholder="First Name" />
                    <input ref={(b) => lastName = b} type="text" placeholder="Last Name" />
                    <button onClick={changeInput}>Click Me</button>
                </form>
            </div>

            {/* SECTION 4: Using Bootstrap CSS */}
            <div style={{ display: 'none', margin: 25 }}>
                <h1 className="text-success" ref={myHeadlineCSS}>Update this headline color!</h1>
                <button onClick={changeHeadlineCSS}>Click Me</button>
            </div>

             {/* SECTION 5: Caching API Data with the useRef hook */}
             <div style={{ display: 'none', margin: 25 }}>
                <h1>Fetch & Show API Data</h1>
                <div style={{ display: 'flex', gap: 25 }}>
                    <button onClick={fetchData}>Fetch Data</button>
                    <button onClick={showData}>Show Data</button>
                </div>
                <p ref={dataResults}></p>
            </div>

            {/* SECTION 6: Changing number using the useState hook */}
            <div style={{ display: 'none', margin: 25 }}>
                <h1>Number: {number}</h1>
                <p>Note: Adjust the number by using the buttons below.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 25 }}>
                    <button onClick={() => setNumber(number - 1)}>Remove</button>
                    <button onClick={() => setNumber(number + 1)}>Add</button>
                </div>
            </div>

            {/* SECTION 7: Using objects with the useState hook */}
            <div style={{ display: 'none', margin: 25 }}>
                <h1>Display & Update object values</h1>
                <p>Name: {myObj.name}</p>
                <p>Age: {myObj.age}</p>
                <p>Gender: {myObj.gender}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 25 }}>
                    <button onClick={resetObj}>Reset</button>
                    <button onClick={changeObj}>Update Info</button>
                </div>
            </div>

            {/* SECTION 8: Creating a dynamic list using arrays */}
            <div style={{ display: 'none', margin: 25, maxWidth: 500 }}>
                <h1>Dynamic List</h1>
                <p>Current Item: {item}</p>
                <form style={{ display: 'flex', alignItems: 'center', gap: 25 }}>
                    <input type="text" placeholder="type your item here..." ref={itemValue} onChange={(e) => setItem(e.target.value)}/>
                    <input type="submit" onClick={addToList} />
                </form>
                <table>
                    <tbody>
                        {
                            list.length !== 0 ? list.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ width: '85%'}}>{element}</td>
                                        <td style={{ marginLeft: 'auto' }}>
                                            <button style={{ width: '100%' }} onClick={() => removeItem(index)}>X</button>
                                        </td>
                                    </tr>
                                )
                            }) : (<tr></tr>)
                        }
                    </tbody>
                </table>
            </div>

            {/* SECTION 9: Forms */}
            <div style={{ display: 'none', margin: 25, maxWidth: 500 }}>
                <h1>Using Forms</h1>
                <div className="container">
                    <form onSubmit={formSubmit}>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <input onChange={(e) => {inputOnChange("fName", e.target.value)}} type="text" placeholder="First name" value={formObj.fName} />
                            <input onChange={(e) => {inputOnChange("lName", e.target.value)}} type="text" placeholder="Last name" value={formObj.lName}/>
                        </div>
                        <select onChange={(e) => {inputOnChange("city", e.target.value)}} name="select-city" value={formObj.city}>
                            <option value="">Choose City</option>
                            <option value="denver">Denver</option>
                            <option value="nashville">Nashville</option>
                            <option value="phoenix">Phoenix</option>
                        </select>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 25 }}>
                            <input onChange={() => {inputOnChange("gender", "Male")}} type="radio" name="gender" checked={formObj.gender === "Male"} style={{ margin: 0 }} />Male
                            <input onChange={() => {inputOnChange("gender", "Female")}} type="radio" name="gender" checked={formObj.gender === "Female"} style={{ margin: 0 }} />Female
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            {/* SECTION 10: Fetch API Data using the useEffect Hook and Promises */}
            <div style={{ display: 'none', margin: 25 }}>
                <h1>Fetching data using the useEffect hook and Promises</h1>
                <div>
                    {JSON.stringify(promiseData)}
                </div>
            </div>

            {/* SECTION 11: Fetch API Data using the useEffect Hook and Async Await */}
            <div style={{ display: '', margin: 25 }}>
                <h1>Fetching data using the useEffect hook and Async / Await</h1>
                <div>
                    {JSON.stringify(awaitData)}
                </div>
            </div>
        </div>
    );
};

export default App;
