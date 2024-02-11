import {prisma} from './database.server'

export async function addExpense (expenseData: any){

    try{
        return await prisma.expense.create (
                    {
                        data: {
                            title: expenseData.title,
                            amount: +expenseData.amount,
                            date: new Date(expenseData.date)
                            }

                    }
                )
        }
    catch (error) {
        console.log (error)
        throw error
    }

}