


const api_key = "024be1898a327bf98447d2f92260e9ac"
const api_base = "https://api.themoviedb.org/3/"



const basicFecth = async (end) => {

  
 const req = await fetch(`${api_base}${end}`)
  const json = await req.json()

return json

}


export default {

  getHomeList : async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items:await basicFecth (`discover/tv?&language=pt-BR&with_networks=213&api_key=${api_key}`)
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items:await basicFecth (`/movie/top_rated?&language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items:await basicFecth (`trending/all/week?language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: "action",
        title: "Ação",
        items:await basicFecth (`discover/movie?with_genres=28&api_key=${api_key}`)
      },
      {
        slug: "romance",
        title: "Romance",
        items:await basicFecth (`discover/movie?with_genres=10749&api_key=${api_key}`)},
      {
        slug: "horror",
        title: "Terror",
        items:await basicFecth (`discover/movie?with_genres=27&api_key=${api_key}`)
      },
      {
        slug: "comedy",
        title: "Comédia",
        items:await basicFecth (`discover/movie?with_genres=35&api_key=${api_key}`)
      },
      {
        slug: "fiction",
        title: "Ficção Cientifica",
        items:await basicFecth (`discover/movie?with_genres=99/tv/list?&api_key=${api_key}`)
      },
     
    ]
  }
,
  getMovieInfo: async (movieId, type)=> {

    let info = {}
  
      if(movieId){
        switch(type){
          case 'movie': 
                info = await basicFecth(`/movie/${movieId}?api_key=${api_key}`)
          break;
        
          case 'tv': 
           info = await basicFecth(`/tv/${movieId}?api_key=${api_key}`)
          break;
        }
      }
  
     return info
  }

}




