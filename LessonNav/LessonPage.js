const LessonPage = (props) =>{
    const [items_parts, set_item_parts] = useState([]);

    function load(){
        let arr = [];
        props.elements.map(elem =>
            {
            arr.push(<li>
                <div className="boxprice">
                <img className='photoelem' src = {elem.photo}></img>
                <p className="title">{elem.name}</p>
                </div>
                </li>);
            }
          )
    }
    return(
        <ul className="boxlesson">{items_parts}</ul>
    )
}
export default LessonPage;