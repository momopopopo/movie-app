import React, { Component } from 'react'
import './Movie.css'
import PropTypes from 'prop-types'
import LineEllipsis from 'react-lines-ellipsis'

/* class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    } //이를 통해 주고받는 정보의 종류를 알 수 있음

    render() {
        console.log(this.props);
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

lass MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render() {
        console.log(this.props);
        return(
            <img src={this.props.poster} />
        )
    }
}*/ //Smart component(class component )

/* Dumb component(functional component) below*/

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre 
                        genre={genre} 
                        key={index} 
                        />
                    )}
                    <p className="Movie_Synopsis">
                        <LineEllipsis 
                            text={synopsis}
                            maxLine='3'
                            ellipsis=' ...'
                            trimRight
                            basedOn='letters'
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img className="Movie_Poster" src={poster} alt={alt} title={alt} />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired, 
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;