import "./styles.scss"

const SearchInput = ({width = "280px", placeholder, type, onChange = ()=> {return}}) => {

    return(
        <>
            <input className="search" type={type} placeholder={placeholder} style={{width : width}} onChange={onChange} />
        </>
    )
}


export default SearchInput;