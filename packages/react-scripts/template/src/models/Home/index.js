import { observable, action } from 'mobx';
import http from '@/utils/http'

class Home {
  @observable message = '';

  @action
  fetchData() {
    http.get('/mock/test')
      .then(res => {
        const { data } = res;
        if (!data.success) { return }
        this.message = data.message
      })
  }
}

export default new Home()
