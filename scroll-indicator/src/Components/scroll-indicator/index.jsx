import { useEffect, useState } from 'react';
import './styles.css';

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            console.log(data);

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScrollPercentage() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, []);

    console.log(data, scrollPercentage);

    if (errorMessage) {
        return <div className="error-message">Error! {errorMessage}</div>;
    }

    if (loading) {
        return <div className="loading-message">Loading data! Please wait...</div>;
    }

    return (
        <div>
            <h1>Custom Scroll Indicator</h1>
            {/* Progress Bar */}
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
            </div>

            {/* Data fetched from API */}
            <div className="data-container">
                {data && data.length > 0
                    ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    );
}
