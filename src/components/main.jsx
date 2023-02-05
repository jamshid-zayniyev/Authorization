import { useSelector } from "react-redux"
import { Loader } from "../ui"
const Main = () => {
  const {articles,isLoading} = useSelector(state=>state.article)
  return (
    <div className="container">
      {isLoading && <Loader/>}
      <div className="album py-5">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map(item=>(
          <div className="col" key={item.slug}>
          <div className="card  shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>

            <div className="card-body p-0">
              <p className="card-text fw-bold m-0 p-3 pb-0">{item.title}</p>
              <p className="card-text p-3 pt-0">{item.description}</p>
              <div className=" card-footer d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-success">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                </div>
                <small className="text-muted fw-bold text-capitalize">{item.author.username}</small>
              </div>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Main