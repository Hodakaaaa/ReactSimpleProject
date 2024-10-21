import useWindowResize from ".";

export default function UseWindowResizeTest(){

    const windowSize = useWindowResize();
    const {width, height} = useWindowResize();
    return(
        <div>
            <h1>Use Window resize hook</h1>
            <p>Width is {width} </p>
            <p>Height is {height} </p>
        </div>

    );
}