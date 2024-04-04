import React, {useEffect,useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import "./App.css"
import Header from "./components/Header";





export default () => {

  const[useList,setUseList]= useState([])
  const[featureData,setFeatureData]= useState(null)
  const [blackHeader,setBlackHeader]=useState (false)

 
  useEffect(()=>{
   clearInterval(setInterval)
    setInterval(() => {
    const loadAll = async () =>{
     
      let list = await Tmdb.getHomeList()
      setUseList(list)
      let originals = list.filter(i => i.slug === 'originals')

      let randomChosen = Math.floor(Math.random () * (originals[0].items.results.length - 1))

      let chosen = originals[0].items.results[randomChosen]

     
      let chosenInfo = await  Tmdb.getMovieInfo(chosen.id, 'tv')

      console.log(chosenInfo)

      setFeatureData(chosenInfo)

    }


    loadAll()

  }, 4500);
},[])



  useEffect(() => {
  
    const scrollListener = () => {

      if(window.scrollY > 10) {
        setBlackHeader(true)
      }else{

        setBlackHeader(false)
      }


    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)

    }


  },[])





  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData &&  <FeatureMovie item={featureData}/> }
     
        <section className="lists">
          {useList.map((item, key) => (
            <div>
             <MovieRow  key={key} title={item.title} items={item.items}/>
            </div>
          ))}
        </section>
        <footer>
          Feito por<span>: Jefferson Nunes</span><br/>
          Direitos de imagem para <span>: Netflix</span><br/>
          Dados pegos do site <span>: Themoviedb.org</span>

        </footer>
        
        {useList.length <= 0 && 
        <div className="load">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_1600,c_limit/Netflix_LoadTime.gif"></img>
          
        </div>
        }
    </div>
  )

  
}
