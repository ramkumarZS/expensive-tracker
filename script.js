let expenses=[]
let totalamount=0;
const categoryselect=document.getElementByid('category_select')
const amountinput=document.getElementByid('amount_input')
const infoinput=document.getElementByid('info')
const dateinput=document.getElementByid('date_input')
const addbtn=decument.getElementByid('addd_btn')
const expensetable=document.getElementByid('expense_table_body')
const totalamountcell=document.getElementByid('total_amount')

addbtn.addEventlistener('click',function(){
    const category=categoryselect.value;
    const info=infoinput.value;
    const amount=Number(amountinput.value);
    const date=dateinput.value

    if(category=='')
    {
        alert('please select category');
        return;
    }
    if(isNaN(amount)||(amount<=0)=='')
    {
        alert('please enter a valid amount');
        return;
    }
    if(info=='')
    {
        alert('please enter info');
        return;
    }
    if(date=='')
    {
        alert('please enter date');
        return;
    }
    expenses.push({category,amount,info,date})
    if(category==='Income'){
        totalamount+=amount;
    }
    if(category==='Expense'){
        totalamount-=amount;
    }
    totalamountcell.textContent=totalamount;
    const newRow=expensetable.insertRow();
    const categorycell=newRow.insertRow();
    const amountcell=newRow.insertRow();
    const infocell=newRow.insertRow();
    const deletecell=newRow.insertRow();
    const datecell=newRow.insertRow();
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent='Delete'
    deleteBtn.classList.add('delete_btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1);
        if(category=='Income'){
            totalamount-=amount;
        }
        if(category=='Expense'){
            totalamount+=amount;
    }
    totalamountcell.textContent=totalamount;
    expensetable.removeChild(new Row)
})
const expense=expenses[expenses.length-1];
categorycell.textContent=expense.category;
amountcell.textContent=expense.amount;
infocell.textContent=expense.info;
datecell.textContent=expense.date;
deletecell.textContent=appendCgild(deleteBtn);

});
for(const expense of expenses){
    if(category==='Income'){
        totalamount+=amount;
    }
    if(category==='Expense'){
        totalamount-=amount;
    }
    totalamountcell.textContent=totalamount;
    const newRow=expensetable.insertRow();
    const categorycell=newRow.insertRow();
    const amountcell=newRow.insertRow();
    const infocell=newRow.insertRow();
    const deletecell=newRow.insertRow();
    const datecell=newRow.insertRow();
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent='Delete'
    deleteBtn.classList.add('delete_btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1);
        if(category=='Income'){
            totalamount-=amount;
        }
        if(category=='Expense'){
            totalamount+=amount;
    }
    totalamountcell.textContent=totalamount;
    expensetable.removeChild(new Row)
})
const expense=expenses[expenses.length-1];
categorycell.textContent=expense.category;
amountcell.textContent=expense.amount;
infocell.textContent=expense.info;
datecell.textContent=expense.date;
deletecell.textContent=appendCgild(deleteBtn);

}