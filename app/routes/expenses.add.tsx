import { redirect, useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";

import Modal from '~/components/util/Modal'
import { addExpense } from "~/data/expense.server";

import {validateExpenseInput} from '~/data/validation.server'
export default function AddExpensesPage() {
  const navigate = useNavigate ();

  function handleClosure(){  
    navigate('..')
  }

  return (
    <Modal onClose={handleClosure}>
      <ExpenseForm />
    </Modal>
  )
}

export async function action ({request}: any){
  const formData = await request.formData()
  // This formData has methods like formData.get('title)
  //instead we use Object built-in function key-value

  const expenseData = Object.fromEntries(formData)

    try{
      validateExpenseInput (expenseData)
    }
    catch (error) {
      return error  // This will automatically present error object to the form which was submitted instead of redirecting to page
    }
    await addExpense (expenseData)

  return redirect('/expenses')
  // action must return something
}