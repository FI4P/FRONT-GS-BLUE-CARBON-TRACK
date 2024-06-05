import './styles.scss'



const SubmitButton = (
    {
        btnWidth,
        text,
        background,
        onClick = () => {
            return console.log("FODASE")
        },
    }
) => {
    return (
        <>
          
            <button onClick={onClick} style={{ width: btnWidth, backgroundColor: background }}>
                {text}
            </button>

        </>
    )
}


export default SubmitButton;