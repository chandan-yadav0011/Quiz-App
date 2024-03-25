import React from 'react'
import Questions from './Questions'
export default function Quiz() {

/** Next button event haddler */
    function onNext()
    {
        console.log("on Next click");
    }


/** Prev button event haddler */

    function onPrev()
    {
        console.log("on Prev click");
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questions/>
      
        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>

            
        </div>
    </div>
  )
}
