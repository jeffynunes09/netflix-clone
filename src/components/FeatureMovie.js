import "./FeatureMovie.css"


export default ({item}) =>{

 let firstDate = new Date(item.first_air_date)

 let genres = []
 
 for(let i in item.genres) {
    genres.push(item.genres[i].name)
 }


 let des = item.overview
 if(des.length > 200){
    des = des.substring(0,200)+'...'
 }

    return (
        
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage:  `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` 
        }}>

            <div className="featured--vertical">
            <div className="featured_horizontal">
                

                <div className="featured_name"> {item.original_name}</div>
                <div className="info">

                    <div className="featured_points"> {item.vote_average} pontos</div>
                    <div className="featured_year"> {firstDate.getFullYear()}</div>
                    <div className="featured_seasens"> {item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}</div>
                    
                    
                </div>

                <div className="featured_description">
                    {des}
                </div>
                <div className="buttons">
                    
                    <a className="btn_1"href={`/watch/${item.id}`} >▶  Assitir</a>
                    <a className="btn_2" href={`/list/add/${item.id}`} >+ Minha Lista</a>

                </div>
                <div className="genres">

                    <striong>Gêneros:</striong>{genres.join(', ')}
                     
                </div>

            </div>  
            </div>
        </section>
    )
}