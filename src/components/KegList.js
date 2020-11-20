import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Gridiron Gang',
    brand: 'Rogue',
    price: 6,
    alcCon: 6.5,
    flavor: 'IPA'
  },
  {
    name: 'Super Juicy',
    brand: 'Cascade Brewing',
    price: 6.50,
    alcCon: 5.5,
    flavor: 'Hazy IPA'
  },
  {
    name: 'Hurly\'s Burly',
    brand: 'Cascade Brewing',
    price: 7,
    alcCon: 5,
    flavor: 'Stout'
  },
  {
    name: 'Old Speckled Hen',
    brand: 'Rare Import',
    price: 5,
    alcCon: 4.5,
    flavor: 'Cream Ale'
  }
]

function KegList(){
  return (
    <React.Fragment>
      <h3>This is the Keg list</h3>
      <p>This is where all the kegs with their properties will show.</p>
      <hr/>
      <Keg/>
    </React.Fragment>
  );
}

export default KegList;