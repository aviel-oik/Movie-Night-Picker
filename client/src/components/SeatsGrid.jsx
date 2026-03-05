import React from 'react'
import useLocalStorage from '../hooks/localStorageHook'

function SeatsGrid() {

const seatsArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const [selectedSeats, setSelectedSeats] = useLocalStorage("seats", [])

  return (      
      <section className='seats-grid'>
        {
          seatsArray.map((number) => (
                <div className="seats-grid-card" key={number}>
                  <p onClick={() => setSelectedSeats([...selectedSeats, number])}
                    style= {{backgroundColor: selectedSeats.includes(number) ? 'green' : 'red'}}
                    >{number}</p>
                </div>
            ))
        }
      </section>
  )
}

export default SeatsGrid