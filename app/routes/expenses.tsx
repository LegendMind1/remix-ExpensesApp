import { Link, Outlet, useLoaderData } from '@remix-run/react'

import type { LoaderFunction, LoaderFunctionArgs, LinksFunction } from '@remix-run/node';

import linkName from '~/styles/expenses.css';
import ExpensesList from '~/components/expenses/ExpensesList';
import { FaDownload, FaPlus } from 'react-icons/fa';
import { getExpenses } from '~/data/expense.server';

export const links: LinksFunction = () => [{ rel:'stylesheet', href: linkName }]


// const Dummy_Expenses = [
//   {
//   id: 'e1',
//   title: 'Breakfast',
//   amount: 500,
//   date: new Date().toISOString(),
// },
// {
//   id: 'e2',
//   title: 'Tea',
//   amount: 160,
//   date: new Date().toISOString(),
// },
// ];

export default function ExpensesLayoutPage() {
  const expenses = useLoaderData()

  return (
    <>    
    <Outlet />

    <main>
      <section id='expenses-actions'>
        <Link to='add'>
          <FaPlus />
          <span>Add Expense</span>
        </Link>
        <a href="/expenses/raw">
          <FaDownload />
          <span>Load Raw Data</span>
        </a>
      </section>
      <ExpensesList expenses={expenses} />
    </main>
    
    </>
  )
}

export const loader: LoaderFunction = ({request, params}:LoaderFunctionArgs) => {  
  
  console.log ('Expenses Loader')
  const expenses = getExpenses()

  return expenses
}