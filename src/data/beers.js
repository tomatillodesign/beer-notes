
export const beers = [
  { value: 'fat_tire', label: 'Fat Tire' },
  { value: 'blue_moon', label: 'Blue Moon' },
  { value: 'rocket_science', label: 'Rocket Science' }
];


export const domestics = [
  { value: 'bud', label: 'Budweiser' },
  { value: 'coors', label: 'Coors' },
  { value: 'miller_lite', label: 'Miller Lite' }
];


export const completeBeerList = {
     brewery01: {
                    brewery: 'Tröegs Brewing Company',
                    brewery_slug: 'troegs',
                    location: 'Hershey, PA',
                    beers: [
                         {
                              beer_name: 'Troegenator',
                              abv: 8.2,
                              my_rating: 'Good',
                              description: 'Monks had fasting figured out. No food? No problem. Just drink a Double Bock. Thick and chewy with intense notes of caramel, chocolate and dried stone fruit, ‘Nator (as we call him) serves as a tribute to this liquid bread style.'
                         },
                         {
                              beer_name: 'First Cut IPA',
                              abv: 6.2,
                              my_rating: 'Good',
                              description: 'Each spring, hop growers dust off their pruning shears and trim the first shoots, bolstering the bines for a rich growing season. First Cut - a mouthful of silky Simcoe, Comet, and a touch of mango - is a nod to this ritual, without which the world would be a less hoppy place.'
                         },
                         {
                              beer_name: 'Java Head Stout',
                              abv: 7.5,
                              my_rating: 'Good',
                              description: 'JavaHead is like a day at Tröegs; it’s hard to tell where the coffee ends and the beer begins. This creamy oatmeal stout is infused with locally roasted, cold steeped coffee through our HopBack vessel, releasing subtle hints of cocoa, roasted nuts and dark mocha.'
                         },
                    ]
               },
     brewery02: {
                    brewery: 'New Belgium',
                    brewery_slug: 'new_belgium',
                    location: 'Asheville, NC',
                    beers: [
                         {
                              beer_name: 'Fat Tire Amber Ale',
                              abv: 5.2,
                              my_rating: 'Good',
                              description: 'Fat Tire Amber is the easy-drinking Amber Ale born in Colorado from New Belgium Brewing Company, the 100% employee-owned leader in environmental stewardship.'
                         },
                         {
                              beer_name: 'Voodoo Ranger IPA',
                              abv: 7,
                              my_rating: 'Good',
                              description: 'Bursting with tropical aromas and juicy fruit flavors from Mosaic and Amarillo hops, this golden IPA is perfectly bitter with a refreshing, sublime finish.'
                         },
                         {
                              beer_name: '1554',
                              abv: 6,
                              my_rating: 'Good',
                              description: 'A surprisingly bright taste and a dry, chocolaty finish -- one evocotive of dark brews enjoyed in Belgian taverns 500 years ago. Not a porter, not a stout -- it's 1554.'
                         },
                    ]
               },
     brewery03: {
                    brewery: 'Appalachian Mountain Brewery',
                    brewery_slug: 'amb',
                    location: 'Boone, NC',
                    beers: [
                         {
                              beer_name: 'Spoaty Oaty',
                              abv: 5.4,
                              my_rating: 'Good',
                              description: 'Overall a good APA with nice hop/malt balance with just a lean towards the bitter side.'
                         },
                         {
                              beer_name: 'Long Leaf IPA',
                              abv: 7.1,
                              my_rating: 'Good',
                              description: 'Born and raised in the Old North State, this beer is a collaboration between the floral English and the citrusy American style IPA. Underneath a white frothy head, these plentiful hop flavors balance on the see-saw of a medium-bodied malty backbone. It all comes together and leaves you with a subdued lingering bitterness, so raise a toast to North Carolina, the land of the Long Leaf Pine!'
                         },
                         {
                              beer_name: 'Boone Creek',
                              abv: 4.7,
                              my_rating: 'Good',
                              description: 'Taste is similar with light, sweet malt with notes of biscuit and bread, hops are earthy, floral, light lemony note. Good bitterness backing.'
                         },
                    ]
               },
};
