function Arr(){
    var ele=[1,2,3,4,5];
    return(
        <div>
            <ul>
                {ele.map((num,index)=>(
                    <li key={index}>
                        {num}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default Arr;
// create another component and declare array and display array elements as a list on te UI(userinterface)