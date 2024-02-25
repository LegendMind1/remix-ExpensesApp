import ExpenseListItem from './ExpenseListItem';

function ExpensesList({ expenses }: any) {

  return (
    <ol id="expenses-list">
      {expenses.map((expense: any) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date.slice(0,10)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
