import { Component, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { HydrateComponent } from './hydrate/hydrate.component';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { UserServices } from './user-services.service';


@Component({
  selector: 'app-root',
  imports: [HydrateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19';

  options = signal(['manzana', 'banana', 'pera']);
  choice = linkedSignal(() => this.options()[0]); //linkea los signals

  userId = input<number>();
  userServices = inject(UserServices)
  // users= toSignal(inject(userServices).getUsers()) // así se usaba antes

  user = resource({
    request: () => this.userId,
    loader: async ({ request: id }) => await this.userServices.getUsers(id)
  })

  greetingTs = "hi";
  // userTwo = rxResource({
  //   request: () => this.userId,
  //   loader: async ({ request: id }) => await this.userServices.getUsers(id)
  // })

  constructor() {
    this.choice.set('fresa')
    console.log(this.choice()); //fresa
    this.options.set(['kiwi', 'piña']);
    console.log(this.choice()); //kiwi
  }


}
