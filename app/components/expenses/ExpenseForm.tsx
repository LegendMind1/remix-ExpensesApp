

import { Form, Link, useActionData, useLoaderData, useMatches, useNavigation, useParams } from "@remix-run/react";
//import { FormEvent } from "react";
import type { believe } from "~/data/validation.server";




function ExpenseForm() {

  const params = useParams ()
let loadedExpense:believe | undefined

const matches = useMatches()
// console.log (matches)

const AllExpensesData:any = matches.find(match => match.id === 'routes/expenses')?.data

 loadedExpense = AllExpensesData.find((expense: any) => expense.id === params.id)

    const defaultValues = loadedExpense ? {

      title: loadedExpense.title,
      amount: loadedExpense.amount,
      date: loadedExpense.date
    } : {
      title: '',
      amount: '',
      date: ''
    }

  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

    const validationErrors: believe | undefined = useActionData()  // It will get back any info thrown by action function declared in expenses.add.tsx

    //**************USE THIS CODE FOR CUSTOM VALIDATION OF THE FORM****************** */
    // const submit = useSubmit()
    // function handleSubmit (event:FormEvent<HTMLFormElement>){
    //   event.preventDefault()
    //   console.log('LOVING REMIX Yaaar')
    //   //Any client side validation here
    // submit (event.target as HTMLFormElement,{
    //   //action: 'expenses/add',
    //   method: 'post'
    // })
    
    // }
    //************************************************************************ */

    const navigation = useNavigation()

    const isSubmitting = navigation.state !== 'idle'
    
    return (
    <Form method={loadedExpense ? "PATCH" : "POST"} className="form" id="expense-form">
     {/* <form className="form" id="expense-form" onSubmit={handleSubmit}> */}
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValues.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required defaultValue={defaultValues.date ? defaultValues.date.slice(0,10) : ''} />
        </p>
      </div>
      {validationErrors && (
          <ul>
             
            {Object.values(validationErrors).map((error,index) => (
            <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Expense'}</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
