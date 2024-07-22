function Bool(){
    const val = true;
    return (
        <div>
            {val ? <h1>This is True</h1> : <h1>This is false</h1>}
        </div>
    )
}
export default Bool;
// create another component and create boolean variable and based on the value of it display different div content