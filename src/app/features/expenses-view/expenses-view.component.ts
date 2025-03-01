import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-view',
  standalone: false,
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.scss'],
})
export class ExpensesViewComponent {
  AddExpense(reason: any, amount: any) {
    const reasonStr = String(reason).trim();
    const amountNum = Number(amount);

    if (!reasonStr || isNaN(amountNum) || amountNum <= 0) {
      console.log('Please enter a valid reason and amount');
      return;
    }

    console.log('Expense Reason:', reasonStr);
    console.log('Expense Amount:', amountNum);
  }

}
