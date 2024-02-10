import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

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
