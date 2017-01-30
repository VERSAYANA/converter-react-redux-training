const firstState = () => {
  return [
    {
      name: 'Length',
      active: true,
      location: 2,
      units: {
        Metre: '',
        Foot: '',
        Inch: '',
        Yard: '',
      }
    },

    {
      name: 'Mass',
      active: false,
      location: 1,
      units: {
        Gram: '',
        Kilogram: '',
        Pound: '',
        Ounce: '',
      }
    },

    {
      name: 'Pressure',
      active: false,
      location: 3,
      units: {
        Atmosphere: '',
        Pascal: '',
        Barr: '',
        Torr: '',
      }
    },

    {
      name: 'Time',
      active: false,
      location: 4,
      units: {
        Second: '',
        Minute: '',
        Hour: '',
        Year: '',
      }
    },

    {
      name: 'Volume',
      active: false,
      location: false,
      units: {
        Litre: '',
        Gallon: '',
        Millilitre: '',
      }
    },

  ]
};

export default firstState;
