import React from 'react'


const Genre = ({genres, onGenreChange, currentGenre, textProperty, valueProperty}) => {
    return (
        <div>
            <ul className="list-group" style={{cursor:'pointer'}}>
                        {genres.map(genre => {
                            return (
                            <li key={genre[valueProperty]} className={genre._id === currentGenre._id? "list-group-item active": "list-group-item"} onClick={() => onGenreChange(genre)}>{genre[textProperty]}</li>
                            )
                        })}
                        
                    </ul>
        </div>
    )
}
Genre.defaultProps = {
    valueProperty: "_id",
    textProperty: "name"
}
export default Genre
