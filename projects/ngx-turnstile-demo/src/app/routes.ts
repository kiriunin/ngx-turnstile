import { Routes } from '@angular/router';
import { EventBindingExampleComponent } from './examples/event-binding/event-binding-example.component';
import { ReactiveFormExampleComponent } from './examples/reactive-form/reactive-form-example.component';
import { TemplateDrivenFormExampleComponent } from './examples/template-driven-form/template-driven-form-example.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EventBindingExampleComponent,
    title: 'Event Binding Example',
  },
  {
    path: 'reactive-form-example',
    component: ReactiveFormExampleComponent,
    title: 'Reactive Form Example',
  },
  {
    path: 'template-driven-form-example',
    component: TemplateDrivenFormExampleComponent,
    title: 'Template Driven Form Example',
  },
];
