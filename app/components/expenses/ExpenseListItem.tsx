import { Form, Link, useFetcher, useSubmit } from "@remix-run/react";

function ExpenseListItem({ id, title, amount, date }: any) {

  //const submit = useSubmit()   this would programatically submit form but would need to redirect to a route

  const fetcher = useFetcher ()  // This is tobe used in cases where we dont want to redirect to any route after a CRUD operation

  function deleteExpenseItemHandler() {
    // submit(null, {    // null is because no data is required to be passed for deletion.
    //   method: 'DELETE',
    //   action: `/expenses/${id}`
    // })

    const proceed = confirm('Do you really want to delete this item?')

    if (!proceed) {
      return;
    }
    fetcher.submit(null, {    // null is because no data is required to be passed for deletion.
      method: 'delete',
      action: `/expenses/${id}`
    })

   
  }

  if (fetcher.state !== 'idle') {
    return <article className="expense-item locked">
      <p>Deleting...</p>
    </article>
  }

  return (
    <>
       <div style={{backgroundColor: '#5417BD', margin:'0', padding:'10px', textAlign:'right', display:'flex', flexDirection:'column'}}>
        <span style={{textAlign:'right'}}>{date}</span>
      
        <article className="expense-item">
        
          <div>
            <h2 className="expense-title">{title}</h2>
            <p className="expense-amount">Rs. {amount.toFixed(2)}/-</p>
          </div>
          <menu className="expense-actions">
            <button onClick={deleteExpenseItemHandler}>Delete</button>
            {/* <Form method="delete" action={`/expenses/${id}`}>
              <button>Delete</button>
            </Form> */}
            {/* The above form code perfectly works but in the end we need to redirect to some route which ideally is not very good experience so we will go with useSubmit() hook to achieve this delete function programatically */}

            <Link to={id}>Edit</Link>
          </menu>
        </article>
    </div>

    </>
  );
}

export default ExpenseListItem;
