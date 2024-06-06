
import img1 from './assets/bnews.png';
const Newsitems = ({title,description,src,url}) => {

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",border:"2px solid red"}}>
    <img src={src?src:img1} style={{height:"200px",width:"330px"}} className="card-img-top" alt=""></img>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Click on Get more Info for more and interesting updates from News Region!"}</p>
      <a href={url} className="btn btn-primary">Get more Info </a>
    </div>
  </div>
  )
}

export default Newsitems
