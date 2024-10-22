import { useState, useEffect, useRef } from "react";

// Define useFetch outside the component
const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setPending(false);
            }
        };

        fetchData();
    }, [url, options]); // The effect runs when url or options change

    return { data, error, pending };
};

export default function ScrollToTopAndBottom() {
    const options = {}; // Empty options object defined outside to avoid re-creation
    const { data, error, pending } = useFetch("https://dummyjson.com/products", options);

    const bottomRef = useRef(null);
    
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }
    
    if (error) {
        return <h1>Error occurred! Please try again</h1>;
    }

    if (pending) {
        return <h1>Loading! Please wait</h1>;
    }

    return (
        <div>
            <h1>Scroll to Top and Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
            <ul style={{ listStyle: 'none' }}>
                {data && data.products && data.products.length
                    ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
                    : null}
            </ul>
            <button onClick={handleScrollToTop}>Scroll to Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page</h3>
        </div>
    );
}
