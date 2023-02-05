import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ArticleService from "../service/article"
import { getArticlesStart, getArticlesSuccess } from "../slice/article"
import { Loader } from "../ui"
const Main = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {articles,isLoading} = useSelector(state=>state.article)
  const {loggedIn,user} = useSelector(state=>state.auth) 
  const getArticles = async()=>{
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
      console.log(error);
    }
  }
  const deleteArticle = async(slug)=>{
    try {
      await ArticleService.deleteArtice(slug)
      getArticles()
    } catch (error) {
      console.log(error);
    } 
  }
  useEffect(()=>{
    getArticles()
  },[])
  return (
    <div>
      {isLoading && <Loader/>}
      <div className="album py-5">
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map(item=>(
          <div className="col" key={item.slug}>
          <div className="card h-100 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>

            <div className="card-body p-0">
              <p className="card-text fw-bold m-0 p-3 pb-0">{item.title}</p>
              <p className="card-text p-3 pt-0">{item.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-success" onClick={()=>navigate(`/article/${item.slug}`)}>View</button>
                  {loggedIn && user.username === item.author.username &&  (
                    <>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>deleteArticle(item.slug)}>Delete</button>
                    </>
                  ) }
                  
                </div>
                <small className="text-muted fw-bold text-capitalize">{item.author.username}</small>
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