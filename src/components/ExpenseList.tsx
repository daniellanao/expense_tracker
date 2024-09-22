import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'

  interface Expense{
    id:number;
    description:string;
    amount:number;
    category:string;
  }

  interface Props{
    expenses: Expense[];
    onDelete:(id:number)=>void;
  }

const ExpenseList = ({expenses,onDelete}:Props) => {
    if(expenses.length===0)return null;
  return (
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Expenses List</TableCaption>
    <Thead>
      <Tr>
        <Th>Description</Th>
        <Th isNumeric>Amount</Th>
        <Th>Category</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
        {expenses.map(expense =>
        <Tr key={expense.id}>
            <Td>{expense.description}</Td>
            <Td isNumeric>$ {expense.amount.toFixed(2)}</Td>
            <Td>{expense.category}</Td>
            <Td><Button onClick={()=>onDelete(expense.id)}>Delete</Button></Td>
        </Tr>)}
         
    </Tbody>
    <Tfoot>
        <Tr>
            <Th>Total</Th>
            <Th isNumeric>$ {expenses.reduce((acc,expense)=>expense.amount+acc,0).toFixed(2)}</Th>
            <Th></Th>
            <Th></Th>
        </Tr>
    </Tfoot>
  </Table>
</TableContainer>

  )
}

export default ExpenseList