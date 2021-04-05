import React from 'react'
import {useSelector} from 'react-redux'
import {POPULATE_KEY} from '../../redux/populateRedux/populate.reducer'
import {v4 as uuidv4} from 'uuid'

const Populate = () => {

    // viewStore
    let viewPopulate = useSelector((state)=>{
        return state[POPULATE_KEY]
    })

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewPopulate)}</pre> */}
          <div className='row mt-5'>
              <div className='col-md-3'></div>
              <div className='col-md-6'>
                  <div className='card text-center'>
                      <div className='card-header'>
                          <h3 className='font-weight-bold'>EXAMS SCORE APP</h3>
                      </div>


                      {/* BODY */}
                      <div className='card-body'>
                          <table className='table table-dark table-stripped table-bordered'>
                              <thead className='bg-dark text-white'>
                                  <tr>
                                      <td className='font-weight-bold'>STD ID</td>
                                      <td className='font-weight-bold'>FIRSTNAME</td>
                                      <td className='font-weight-bold'>LASTNAME</td>
                                      <td className='font-weight-bold'>SCORES</td>
                                  </tr>
                              </thead>

                              <tbody>
                                {
                                  viewPopulate.map((data)=>{
                                      return(
                                          <tr key={uuidv4}>
                                              <td className='font-weight-bold'>{data.id}</td>
                                              <td className='font-weight-bold'>{data.firstName}</td>
                                              <td className='font-weight-bold'>{data.lastName}</td>
                                              <td className='font-weight-bold'>{data.marks}%</td>
                                          </tr>
                                      )

                                  })
                                }
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
        </React.Fragment>
            
    
    )
}

export default Populate
