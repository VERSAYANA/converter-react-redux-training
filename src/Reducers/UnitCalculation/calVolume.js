const unitVolume = (source) => {
  return {
    Litre: source,
    Gallon: source * 0.264172,
    Millilitre: source * 1000,
  }
};

const calVolume = (unit, value) => {
  switch (unit) {

    case 'Litre':
      return {
        ...unitVolume(value),
        Litre: value
      }

    case 'Gallon':
      return {
        ...unitVolume(value / 0.264172),
        Gallon: value
      }

    case 'Millilitre':
      return {
        ...unitVolume(value / 1000),
        Millilitre: value
      }

  }
};


export default calVolume;
