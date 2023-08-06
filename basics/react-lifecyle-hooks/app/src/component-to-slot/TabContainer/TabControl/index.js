import './style.css'
export default function Index({titles,currentIndex,setIndex}) {
    return (
        <div className="nav-list">
            {
                (titles || []).map((e,index) => {
                    return <span className={`nav-item ${index === currentIndex ? 'active' : ''}`} key={e} onClick={()=> setIndex(index)}>{e}</span>
                })
            }
        </div>
    )
}