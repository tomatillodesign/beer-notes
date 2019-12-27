// New approach to the data in state
// 12-6 449pm

var shortid = require('shortid');

export const beerListUpdated = [
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'Troegenator',
          brewery_name: 'Tröegs Brewing Company',
          brewery_slug: 'tregs_brewing_company',
          backgroundColor: '#dc4733',
          count: 0,
          abv: 8.2,
          my_rating: '❤️',
          description: 'Monks had fasting figured out. No food? No problem. Just drink a Double Bock. Thick and chewy with intense notes of caramel, chocolate and dried stone fruit, ‘Nator (as we call him) serves as a tribute to this liquid bread style.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'First Cut IPA',
          brewery_name: 'Tröegs Brewing Company',
          brewery_slug: 'tregs_brewing_company',
          backgroundColor: '#305536',
          count: 0,
          abv: 6.2,
          my_rating: '👎',
          description: 'Each spring, hop growers dust off their pruning shears and trim the first shoots, bolstering the bines for a rich growing season.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'Java Head Stout',
          brewery_name: 'Tröegs Brewing Company',
          brewery_slug: 'tregs_brewing_company',
          backgroundColor: '#473324',
          count: 0,
          abv: 7.5,
          my_rating: '👍',
          description: 'JavaHead is like a day at Tröegs; it’s hard to tell where the coffee ends and the beer begins. This creamy oatmeal stout is infused with locally roasted, cold steeped coffee through our HopBack vessel, releasing subtle hints of cocoa, roasted nuts and dark mocha.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'Fat Tire Amber Ale',
          brewery_name: 'New Belgium',
          brewery_slug: 'new_belgium',
          backgroundColor: '#1e3555',
          count: 0,
          abv: 5.2,
          my_rating: '❤️',
          description: 'Fat Tire Amber is the easy-drinking Amber Ale born in Colorado from New Belgium Brewing Company, the 100% employee-owned leader in environmental stewardship.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'Voodoo Ranger IPA',
          brewery_name: 'New Belgium',
          brewery_slug: 'new_belgium',
          backgroundColor: '#91915b',
          count: 0,
          abv: 7,
          my_rating: '👍',
          description: 'Bursting with tropical aromas and juicy fruit flavors from Mosaic and Amarillo hops, this golden IPA is perfectly bitter with a refreshing, sublime finish.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: '1554',
          brewery_name: 'New Belgium',
          brewery_slug: 'new_belgium',
          backgroundColor: '#222',
          count: 0,
          abv: 6,
          my_rating: '👍',
          description: 'A surprisingly bright taste and a dry, chocolaty finish -- one evocotive of dark brews enjoyed in Belgian taverns 500 years ago. Not a porter, not a stout -- it\'s 1554.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'Spoaty Oaty',
          brewery_name: 'Appalachian Mountain Brewery',
          brewery_slug: 'appalachian_mountain_brewery',
          backgroundColor: '#5eab41',
          count: 0,
          abv: 5.4,
          my_rating: '❤️',
          description: 'Overall a good APA with nice hop/malt balance with just a lean towards the bitter side.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'Long Leaf IPA',
          brewery_name: 'Appalachian Mountain Brewery',
          brewery_slug: 'appalachian_mountain_brewery',
          backgroundColor: '#4e5fa5',
          count: 0,
          abv: 7.1,
          my_rating: '👍',
          description: 'Born and raised in the Old North State, this beer is a collaboration between the floral English and the citrusy American style IPA.'
     },
     {
          id: shortid.generate(),
          timestamp: Date.now(),
          beer_name: 'Boone Creek',
          brewery_name: 'Appalachian Mountain Brewery',
          brewery_slug: 'appalachian_mountain_brewery',
          backgroundColor: '#eaaa3c',
          count: 0,
          abv: 4.7,
          my_rating: '❤️',
          description: 'Taste is similar with light, sweet malt with notes of biscuit and bread, hops are earthy, floral, light lemony note. Good bitterness backing.'
     },
];


export const breweryList = [
     {
          id: shortid.generate(),
          brewery: 'Tröegs Brewing Company',
          brewery_slug: 'tregs_brewing_company',
          city: 'Hershey',
          state: 'Pennsylvania',
          timestamp: Date.now(),
     },
     {
          id: shortid.generate(),
          brewery: 'New Belgium',
          brewery_slug: 'new_belgium',
          city: 'Asheville',
          state: 'North Carolina',
          timestamp: Date.now(),
     },
     {
          id: shortid.generate(),
          brewery: 'Appalachian Mountain Brewery',
          brewery_slug: 'appalachian_mountain_brewery',
          city: 'Boone',
          state: 'North Carolina',
          timestamp: Date.now(),
     },
];





export const beerTypes = [
     'American Imperial Red Ale',
     'American Imperial Stout',
     'American IPA',
     'American Lager',
     'American Pale Ale',
     'American Sour',
     'American Stout',
     'American-Style Wheat Wine Ale',
     'American Wheat',
     'Baltic-Style Porter',
     'Barrel-Aged Beer',
     'Belgian-Style Blonde Ale',
     'Belgian-Style Dubbel',
     'Belgian-Style Flanders',
     'Belgian-Style Fruit Lambic',
     'Belgian-Style Golden Strong Ale',
]
