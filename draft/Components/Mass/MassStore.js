import { observable, computed } from 'mobx';

class MassStore {
  @observable raw = '';
  @observable type = '';

  calculation(source) {
    return {
      Gram: source,
      Kilogram: source * 0.001,
      Pound: source * 0.00220462,
      Ounce: source * 0.035274,
    }
  }


  @computed get getValue() {
    var values = '';

    if (this.type === 'Gram' ) {
      values = this.calculation(this.raw);
    }
    if (this.type === 'Kilogram' ) {
      values = this.calculation(this.raw / 0.001);
      values.Kilogram = this.raw;
    }
    if (this.type === 'Pound') {
      values = this.calculation(this.raw / 0.00220462);
      values.Pound = this.raw;
    }
    if (this.type === 'Ounce' ) {
      values = this.calculation(this.raw / 0.035274);
      values.Ounce = this.raw;
    }
    return values;
  }
}

export default new MassStore();
