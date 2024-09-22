import { Grid, GridItem, Text } from "@chakra-ui/react"
import ExpenseList from "./components/ExpenseList"
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";


function App() {
  const [selectedCategory,setSelectedCategory]=useState('');
  const [expenses,setExpenses]=useState([
    {id:1,description:'Food, Chicken', amount:5,category:'Groceries'}    
  ]);  

  const visibleExpenses = selectedCategory ? expenses.filter(e=>e.category===selectedCategory):expenses;

  return (    
    <Grid
    templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
    gridTemplateRows={'50px 1fr 30px'}
    gridTemplateColumns={'0.5fr 0.5fr'}
    h='200px'
    gap='1'    
    fontWeight='bold'
    padding={3}
  >
    <GridItem pl='2'area={'header'}>
      <Text as='h1' fontSize='4xl'>Expense Tracker</Text>            
    </GridItem>
    <GridItem pl='2' area={'nav'}>      
      <ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}></ExpenseForm>
    </GridItem>
    <GridItem pl='2' area={'main'}>
      <ExpenseFilter onSelectCategory={category=>setSelectedCategory(category)}></ExpenseFilter>
      <ExpenseList expenses={visibleExpenses} onDelete={(id)=>setExpenses(expenses.filter((e)=>e.id!==id))}></ExpenseList>
    </GridItem>    
  </Grid>

  )
}

export default App
