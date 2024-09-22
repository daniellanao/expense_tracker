import { Select } from '@chakra-ui/react'
import categories from '../categories';

interface Props{
    onSelectCategory:(category:string)=>void;
}

const ExpenseFilter = ({onSelectCategory}:Props) => {
    return (
        <Select placeholder='Select option' onChange={(event)=>onSelectCategory(event.target.value)}>
            <option value=''>All Categories</option>
            {categories.map(category=><option key={category} value={category}>{category}</option>)}            
        </Select>
  )
}

export default ExpenseFilter