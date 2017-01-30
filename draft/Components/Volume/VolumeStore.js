import { observable, computed } from 'mobx';

class VolumeStore {
  @observable raw = '';
  @observable type = '';

  calculation(source) {
    return {
      Litre: source,
      Gallon: source * 0.264172,
      Millilitre: source * 1000,
    }
  }

  @computed get getValue() {
    var values = '';

    if (this.type === 'Litre' ) {
      values = this.calculation(this.raw);
      values.Litre = this.raw
    }
    if (this.type === 'Gallon' ) {
      values = this.calculation(this.raw / 0.264172);
      values.Gallon = this.raw;
    }
    if (this.type === 'Millilitre') {
      values = this.calculation(this.raw / 1000);
      values.Millilitre = this.raw;
    }
    return values;
  }
}

export default new VolumeStore();
