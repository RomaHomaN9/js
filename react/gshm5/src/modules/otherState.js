import useWindowWidth from './useWindowWidth';

function OtherState() {
    const width = useWindowWidth();
    return <div>{width}px</div>;
}

export default OtherState;
