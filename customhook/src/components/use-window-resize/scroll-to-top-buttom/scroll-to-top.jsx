import { useRef } from "react";

export default function ScrollToSection() {
    const ref = useRef(null);

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red',
            },
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green',
            },
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue',
            },
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green',
            },
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'orange',
            },
        },
    ];

    function handleScrollToSection() {
        const pos = ref.current.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: pos,
            behavior: 'smooth',
        });
    }

    return (
        <div>
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}>Click to Scroll</button>
            {data.map((dataItem, index) => (
                <div ref={index === 2 ? ref : null} key={index} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>
            ))}
        </div>
    );
}
