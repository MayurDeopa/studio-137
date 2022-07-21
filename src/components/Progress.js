

const Progress =({value,max})=>{
    return(
        <div className="progress">
            <div 
                style={{
                    width:`${value}%`
                }}
                className="progress_bar">

            </div>
        </div>
    )
}

export default Progress;