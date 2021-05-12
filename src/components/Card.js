import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons'

import './Card.css'

const Card = () => {
    return (
        <div className="card__body">
          <div className="card">
            <div className="image-data">
                <div className="background-image">
                </div>
                <div className="publication-details">
                    <a href="#" className="author">
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp;MokSh
                    </a>
                    <span className = "date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &nbsp;May 10, 2021
                    </span>
                </div>
            </div>

            <div className="post-data">
                <h1 className="title">
                    Artificial Intelligence
                </h1>
                <h2 className="subtitle">
                    Above and beyond just computers
                </h2>
                <p className="description">
                    Rem tellus commodo ex curae tenetur diam consequat tenetur ullam! Exercitation proident, aspernatur interdum exercitationem anim! Proident bibendum. Diamlorem phasellus eveniet, pede per at, ante, justo occaecat error
                </p>
                <div className="cta">
                    <a href="#"> Read More &rarr;</a>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Card
