import { Button, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react"
import categories from "../categories";
import {z} from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema= z.object({
    description:z.string().min(3,{message:'Desc at least 3 char'}).max(50),
    amount:z.number({invalid_type_error:'Amount is required'}).min(0.01).max(100_000),
    category:z.enum(categories,{errorMap:()=>({message:'Category is required'})})
});
type ExpenseFormData =z.infer<typeof schema>;

interface Props {
    onSubmit: (data:ExpenseFormData)=>void;
}


const ExpenseForm = ({onSubmit}:Props) => {
    const {register,handleSubmit,formState:{errors},reset} =useForm<ExpenseFormData>({resolver:zodResolver(schema)})
  return (
    <form onSubmit={handleSubmit(data=>{onSubmit(data);reset()})}>
        <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Input {...register('description')} id="description" type='text'/>
            {errors.description && <Text color='tomato'>{errors.description.message}</Text>}
        </FormControl>
        <FormControl>
            <FormLabel htmlFor="amount">amount</FormLabel>
            <Input {...register('amount',{valueAsNumber:true})} id="amount" type='number'/>
            {errors.amount && <Text color='tomato'>{errors.amount.message}</Text>}
        </FormControl>
        <FormControl>
            <FormLabel htmlFor="amount">amount</FormLabel>
            <Select {...register('category')} placeholder='Select option'>
            {categories.map(category=><option key={category} value={category}>{category}</option>)}            
            </Select>
            {errors.category && <Text color='tomato'>{errors.category.message}</Text>}
        </FormControl>
        <Button type="submit" marginTop={3}>Submit</Button>
    </form>

  )
}

export default ExpenseForm