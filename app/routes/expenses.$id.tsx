import { redirect, useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

import type { ActionFunction, ActionFunctionArgs } from '@remix-run/node';
import { deleteExpense, updateExpense } from "~/data/expense.server";
import { validateExpenseInput } from "~/data/validation.server";

// import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
// import { loadExpense } from "~/data/expense.server";

export default function UpdateExpensesPage() {

  
  const navigate = useNavigate()

  function handleClosure(){
    navigate('..')
  }

  return (
    <Modal onClose={handleClosure}>
      <h3>Update Expense</h3>
      <ExpenseForm />
    </Modal>
  )
}


//***********THIS IS PERFECTLY RIGHT, BUT SINCE WE ALREADY HAVE FETCHED IT IN PARENT PAGE's LOADER WE JUST NEED TO USE THAT DATA */
// export const loader: LoaderFunction = async ({params}:LoaderFunctionArgs) => {  
  
//   console.log ('Expenses ID Loader')

//   const loadedExpense = await loadExpense(params.id)
//   return loadedExpense
  
// }


export const action: ActionFunction = async ({request, params}:ActionFunctionArgs) => {  
  const expenseID = params.id
  if (request.method === 'PATCH'){
    const formData = await request.formData()
    const expenseData = Object.fromEntries(formData)
      try{
          validateExpenseInput(expenseData)
      }
      catch (error){
        return error
      }

      await updateExpense(expenseID, expenseData )
      return redirect('/expenses')
  }
  else if (request.method === 'DELETE'){
      await deleteExpense(expenseID)
      return redirect('/expenses')
  } 
}