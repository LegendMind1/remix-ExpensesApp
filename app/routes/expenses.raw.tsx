import type { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";

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

export const loader: LoaderFunction = ({request,params,}: LoaderFunctionArgs) => {
  return Dummy_Expenses
};