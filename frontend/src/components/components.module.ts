import { NgModule } from '@angular/core';
import { TeamComponent } from './team/team';
import { TabsComponent } from './tabs/tabs';
@NgModule({
	declarations: [TeamComponent,
    TabsComponent],
	imports: [],
	exports: [TeamComponent,
    TabsComponent]
})
export class ComponentsModule {}
