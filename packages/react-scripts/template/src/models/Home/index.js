import { observable } from 'mobx';

class Home {
  @observable message = 'hello world';
}

export default new Home()
