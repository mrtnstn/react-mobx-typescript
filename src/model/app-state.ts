import { observable, action } from 'mobx';

export class AppState {

  @observable count: number = 0;

  @action resetCounter(): void {
      this.count = 0;
  }

  @action increaseCounter(): void {
      this.count++;
  }
}
