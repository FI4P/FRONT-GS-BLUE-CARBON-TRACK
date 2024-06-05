import './styles.scss'



const SubmitButton = (
    {
        btnWidth,
        text,
        background,
        onHandleButton = () => {
            return console.log("FODASE")
        }

    }
) => {
    return(
        <>
        
            <button onClick={onHandleButton} style={{width : btnWidth , backgroundColor: background}}>
                {text}
            </button>
        
        </>
    )
}


export default SubmitButton;