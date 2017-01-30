import { observable, computed } from 'mobx';

class TimeStore {
  @observable raw = '';
  @observable type = '';

  calculation(source) {
    return {
      Second: source * 31536000,
      Minute: source * 525600,
      Hour: source * 8760,
      Year: source,
    }
  }


  @computed get getValue() {
    var values = '';

    if (this.type === 'Second' ) {
      values = this.calculation(this.raw / 31536000);
      values.Second = this.raw
    }
    if (this.type === 'Minute' ) {
      values = this.calculation(this.raw / 525600);
      values.Minute = this.raw;
    }
    if (this.type === 'Hour') {
      values = this.calculation(this.raw / 8760);
      values.Hour = this.raw;
    }
    if (this.type === 'Year' ) {
      values = this.calculation(this.raw);
    }
    return values;
  }
}

export default new TimeStore();
