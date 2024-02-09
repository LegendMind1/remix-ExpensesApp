import { Outlet } from '@remix-run/react'
import React from 'react'

export default function ExpensesLayoutPage() {
  return (
    <>
    <h1>Expenses Layout Page</h1>
    
    <Outlet />
    
    </>
  )
}
