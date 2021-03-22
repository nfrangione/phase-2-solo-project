import React from 'react'

export default function HogDetails(props) {
    const { weight, specialty, greased, 'highest medal achieved':highest } = props.hog
    return (
        <div>
            {greased ? "READY FOR FUN!" : 'no grease'}
            <h2>{weight} kilos</h2>
            <div>Specialty: {specialty}</div>
            <div>Greatest Medal? {highest}</div>
        </div>
    )
}