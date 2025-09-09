function App() {
    const [network, setNetwork] = React.useState("");
    const [userInput, setUserInput] = React.useState("");
    const [show, setShow] = React.useState(false);

    function inputText(event) {
        setUserInput(event.target.value);
    }

    function checkNetwork() {
        setShow(true);

        if (userInput.length !== 11) {
            setNetwork("Please input a valid phone number.");
            setUserInput("");
            return;
        }

        const globe = ["0817","0905","0906","0915","0916","0917","0926","0927",
             "0935","0936","0937","0945","0953","0954","0955","0956",
             "0965","0966","0967","0975","0976","0977","0978","0979",
             "0994","0995","0996","0997"];

        const smart = ["0813","0907","0908","0909","0910","0912","0918","0919",
             "0920","0921","0928","0929","0930","0938","0939","0946",
             "0947","0948","0949","0950","0951","0961","0963","0969",
             "0970","0981","0989","0998","0999"];

        const dito  = ["0895","0896","0897","0898","0991","0992","0993","0994"];

        for (let i = 0; i < globe.length; i++) {
            if (userInput.startsWith(globe[i])) {
                setNetwork("Globe SIM.");
                setUserInput("");
                return;
            } else if (userInput.startsWith(smart[i])) {
                setNetwork("Smart SIM.");
                setUserInput("");
                return;
            } else if (userInput.startsWith(dito[i])) {
                setNetwork("DITO SIM.");
                setUserInput("");
                return;
            }
        }

        setNetwork("Not Found");
        setUserInput("");
    }

    return (
        <>
            <input
                value={userInput}
                onChange={inputText}
                placeholder="Input here your mobile number"
                size="29"
            />
            <button onClick={checkNetwork}>Check Network</button>
            {show && <p>Detected network: {network}</p>}
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
