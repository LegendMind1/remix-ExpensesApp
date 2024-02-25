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

export async function getExpenses (){
    try{
        const expenses = await prisma.expense.findMany({
            orderBy: { date: 'desc' },
        })
        return expenses
    }
    catch (error){
        console.log(error)
        throw error
    }

    // return await prisma.expense.findMany()
}

export async function loadExpense(expenseID: any) {
    try{
        const loadedExpense = await prisma.expense.findFirst({
            where: {id: expenseID},
        })
        return loadedExpense
    }
    catch (error){
        console.log(error)
        throw error
    }
}



export async function updateExpense(expenseID: any, expenseData:any) {
    try{
        const updatedExpense = await prisma.expense.update({
            where: {id: expenseID},
            data: {
                title: expenseData.title,
                amount: +expenseData.amount,
                date: new Date(expenseData.date)
            }
        })
        return updatedExpense
    }
    catch (error){
        console.log(error)
        throw error
    }
}

export async function deleteExpense(id: any) {
    try {
        await prisma.expense.delete({
            where: {id: id}
        })
        // await new Promise(resolve => setTimeout(resolve, 3000));

    }
    catch (error){
        console.log(error)
        throw error
    }
}