export interface IFrontProps {
id:number;
title: string;
img: string;
description: string;
price: number;
discount?: number;
}

const frontMenu: IFrontProps[] =[
 { id:0,
   title: 'Manicure & Pedicure',
   img:'manicure.jpeg',
   description:'Treat your hands and feet to a luxurious experience with our manicure and pedicure services.',
   price:799,
  discount:20
  },
 { id:1,
   title: 'Bridal',
   img:'bridal.jpeg',
   description:'Look flawless on your big day with our exclusive bridal services.',
   price:10000,
  discount:20
  },
 { id:2,
   title: 'Hair Treatment',
   img:'hair_treatment.jpeg',
   description:'Restore the health and shine of your hair with our nourishing hair treatments.',
   price:2999,
  discount:10
  },
 { id:3,
   title: 'Facial',
   img:'facial.jpeg',
   description:'Rejuvenate your skin with our expert facial treatments designed to cleanse, exfoliate, and hydrate.',
   price:599,
  },
 { id:4,
   title: 'Hair Cut',
   img:'hair_cut.jpeg',
   description:'Get a fresh, stylish look with our professional haircuts.',
   price:299,
  },
]

export default frontMenu;
