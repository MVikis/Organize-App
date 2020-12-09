import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SortBy = ({setArray}) => {

    const [value, setValue] = useState()
const Sort = () => {
  if (sortedField !== null) {
    sortedProducts.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
}
 const FormChange=(event)=>{
    const { value} = event.target
    setValue(value)
    
     }

    return(
      <form onSubmit={Sort}>
          <label htmlFor="cars">Sort by:</label>

<select name="cars" id="cars">
  <option value="name">Name</option>
  <option value="">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<button type="submit">
        <FontAwesomeIcon  icon="search"/>
        </button>
      </form>
    )
}
export default SortBy;