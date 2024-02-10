import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

const Dummy_Expenses = [
  {
  id: 'e1',
  title: 'Breakfast',
  amount: 500,
  date: new Date().toISOString(),
},
{
  id: 'e2',
  title: 'Tea',
  amount: 160,
  date: new Date().toISOString(),
},
];

export default function ExpensesAnalysisPage() {
 
  return (

    <main>
      <Chart expenses={Dummy_Expenses} />
      <ExpenseStatistics expenses={Dummy_Expenses} />
    </main>

  )
}