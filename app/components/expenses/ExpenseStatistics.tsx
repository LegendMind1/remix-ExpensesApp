import { useMemo } from 'react';

function calculateSummaryStatistics(expenses: any) {
  const amounts = expenses.map((expense:any) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal: any, curVal: any) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}

function ExpenseStatistics({ expenses }: any) {
  console.log(expenses)
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );

  return (
    <section>
      <h2>Summary Statistics</h2>
      <dl id="expense-statistics">
        <div>
          <dt>Total</dt>
          <dd>Rs. {sum.toFixed(2)}/-</dd>
        </div>
        <div>
          <dt>Average</dt>
          <dd>Rs. {mean.toFixed(2)}/-</dd>
        </div>
        <div>
          <dt> Min. Amount</dt>
          <dd>Rs. {minAmount.toFixed(2)}/-</dd>
        </div>
        <div>
          <dt>Max. Amount</dt>
          <dd>Rs. {maxAmount.toFixed(2)}/-</dd>
        </div>
      </dl>
    </section>
  );
}

export default ExpenseStatistics;
