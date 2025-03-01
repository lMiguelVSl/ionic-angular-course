import { NgModule } from "@angular/core";
import { ExpensesViewComponent } from "./expenses-view/expenses-view.component";
import { HomePage } from "./home/home.page";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { FeaturesRoutingModule } from "./features-routing.module";

@NgModule({
    declarations: [ExpensesViewComponent, HomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FeaturesRoutingModule
        ],
    exports: [ExpensesViewComponent, HomePage]
})
export class FeaturesModule {}