import { NgModule } from "@angular/core";
import { HomePage } from "./home/home.page";
import { RouterModule } from "@angular/router";

const routes = [
    {
        path: '',
        component: HomePage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeaturesRoutingModule { }