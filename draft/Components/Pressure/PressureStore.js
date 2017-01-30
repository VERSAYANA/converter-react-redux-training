import { observable, computed } from 'mobx';

class PressureStore {
  @observable raw = '';
  @observable type = '';

  calculation(source) {
    return {
      Atmosphere: source,
      Pascal: source * 101325,
      Barr: source * 1.01325,
      Torr: source * 760,
    }
  }


  @computed get getValue() {
    var values = '';

    if (this.type === 'Atmosphere' ) {
      values = this.calculation(this.raw);
    }
    if (this.type === 'Pascal' ) {
      values = this.calculation(this.raw / 101325);
      values.Pascal = this.raw;
    }
    if (this.type === 'Barr') {
      values = this.calculation(this.raw / 1.01325);
      values.Barr = this.raw;
    }
    if (this.type === 'Torr' ) {
      values = this.calculation(this.raw / 760);
      values.Torr = this.raw;
    }
    return values;
  }
}

export default new PressureStore();
