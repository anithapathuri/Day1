import F2 from "./two.js"
import F3 from "./three.js"
import Arr from "./array.js"
import Bool from "./bool.js"
import Test1 from "./test1.js"
function F1(){
    let a=2;
    let b=8;
    let c=a+b;
    return (
        <div>
            <h1>result:{c}</h1>
            <F2/>
            <F3/>
            <Arr/>
            <Bool/>
            <Test1/>
        </div>
    );
}
export default F1;