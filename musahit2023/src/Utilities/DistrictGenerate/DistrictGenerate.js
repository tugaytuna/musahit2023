import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import citiesList from './../../assets/dataCitiesList';

const DistrictGenerate = districts => {
  const [district, setDistrict] = useState(null);

  try {
    districts.splice(0, districts.length); // clean
    citiesList.map(item => {
      if (item.name == selectedCity) {
        item.towns.map(item => {
          // console.log(item.name);
          districts.push(item.name);
          return item.name;
        });
      }
    });
  } catch (error) {
    console.log(error);
  }

  return {districts};
};

export default DistrictGenerate;
