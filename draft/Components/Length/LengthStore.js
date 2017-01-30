import { observable, computed } from 'mobx';

class LengthStore {
  @observable raw = '';
  @observable type = '';

  calculation(source) {
    return {
      Metre: source,
      Foot: source * 3.28,
      Inch: source * 39.37,
      Yard: source * 1.09,
    }
  }


  @computed get getValue() {
    var values = '';

    if (this.type === 'Metre' ) {
      values = this.calculation(this.raw);
    }
    if (this.type === 'Foot') {
      values = this.calculation(this.raw / 3.28);
      values.Foot = this.raw;
    }
    if (this.type === 'Inch' ) {
      values = this.calculation(this.raw / 39.37);
      values.Inch = this.raw;
    }
    if (this.type === 'Yard' ) {
      values = this.calculation(this.raw / 1.09);
      values.Yard = this.raw;
    }
    return values;
  }
}

export default new LengthStore();
