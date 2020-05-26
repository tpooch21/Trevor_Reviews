// Generate 10M places
// Generate 500K users
// Generate 2 to 500 reviews for each place
const faker = require('faker');
const casual = require('casual');
const csvWriter = require('csv-write-stream');
const fs = require('fs');

console.log(new Date());

// const writePlaces = fs.createWriteStream('places.csv');
// writePlaces.write('place_id,place_name');

// const userWriter = csvWriter();

// Various review writers to distribute reviews across different files
const writeReviews = fs.createWriteStream('reviews.csv');
writeReviews.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews2 = fs.createWriteStream('reviews2.csv');
writeReviews2.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews3 = fs.createWriteStream('reviews3.csv');
writeReviews3.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews4 = fs.createWriteStream('reviews4.csv');
writeReviews4.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews5 = fs.createWriteStream('reviews5.csv');
writeReviews5.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews6 = fs.createWriteStream('reviews6.csv');
writeReviews6.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews7 = fs.createWriteStream('reviews7.csv');
writeReviews7.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews8 = fs.createWriteStream('reviews8.csv');
writeReviews8.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews9 = fs.createWriteStream('reviews9.csv');
writeReviews9.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const writeReviews10 = fs.createWriteStream('reviews10.csv');
writeReviews10.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const reviewWriters = [writeReviews, writeReviews2, writeReviews3, writeReviews4, writeReviews5, writeReviews6, writeReviews7, writeReviews8, writeReviews9, writeReviews10];


// const placeType = ['House', 'Apartment', 'Getaway', 'Hideout', 'Mansion', 'Studio', 'Paradise', 'Flat', 'Terrace', 'Place', 'Hotspot', 'Condo', 'Townhouse', 'Cabin', 'Loft', 'Home', 'Beach House', 'Shack', 'Loveshack', 'Warehouse', 'Penthouse', 'Suite', 'Room', 'Casa', 'Cottage', 'Pad', 'Spa', 'Bungalow', 'Space', 'Spot', 'Icon', 'Villa', 'Dojo', 'Nest', 'Treehouse', 'Escape', 'Property', 'Home', 'Hideaway', 'Oasis', 'Retreat', 'Lounge', 'Lodge', 'Beehive', 'Igloo', 'Runaway', 'Birdhouse', 'Beachfront', 'Temple', 'Garden', 'Habitat', 'Haven'];

// var city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

// const userAvatar = 'http://loremflickr.com/56/56/people';

// Iterate from 1 to 10,000,000
// Counter starts at 0, to pick a placeType
// Increments each time
// Generate name using faker.city + placeType

// // Generate 10M primary records (places)
// const generatePlace = (writer, encoding, callback) => {
//   // let data = [];
//   // placeWriter.pipe(fs.createWriteStream('places.csv'));
//   let placeIndex = 0;
//   let i = 10000000;
//   let id = 0;
//   let cityIndex = 0;

//   function writeFile() {
//     let ok = true;
//     do {
//       i -= 1;
//       id++;
//       const placeName = `${city_names[cityIndex]} ${placeType[placeIndex]}`;
//       const data = `${id},${placeName}\n`;
//       // Increase placeIndex, reset when end of places array is reached
//       placeIndex++;
//       placeIndex = placeIndex === placeType.length ? 0 : placeIndex;

//       // Increase cityIndex, reset when end of cities array is reached
//       cityIndex++;
//       cityIndex = cityIndex === city_names.length ? 0 : cityIndex;

//       // When last item is reached, write to csv and call callback to end write process
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     // had to stop early
//     writer.once('drain', writeFile);
//   }

//   writeFile();
//   // for (var i = 0; i < 10000000; i++) {
//   //   placeWriter.write({place_id: i + 1, place_name: `${faker.address.city()} ${placeType[counter]}`});
//   //   counter++;
//   //   if (counter === placeType.length) {
//   //     counter = 0;
//   //   }
//   // };

//   // placeWriter.end();
//   // console.log('Places written to CSV successfully');
//   // return data;
// };

// generatePlace(writePlaces, 'utf-8', () => {
//   writePlaces.end();
//   console.log('Places written successfully');
// });

// // Generate 100k random users
// const generateUser = () => {
//   // let users = [];
//   userWriter.pipe(fs.createWriteStream('users.csv'));

//   for (var i = 0; i < 100000; i++) {
//     userWriter.write({user_id: i + 1, first_name: faker.name.firstName(), last_name: faker.name.lastName(), avatar: `${userAvatar}?lock=${i}`});
//   }

//   userWriter.end();
//   console.log('Users written to CSV successfully');
//   // return users;
// };

// generateUser();

const ratings = [1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 2.1, 2.2, 2.3, 2.5, 2.7, 2.8, 3.1, 3.3, 3.4, 3.5, 3.7, 3.9, 4.1, 4.2, 4.3, 4.6, 4.8, 4.9];
const years = ['2015', '2016', '2017', '2018', '2019', '2020'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Review comments
const reviewComments = [ 'Quam consequatur ullam veniam aut deserunt itaque enim voluptates est.',
'Velit omnis qui quibusdam assumenda asperiores cum maxime.',
'Et expedita cumque praesentium suscipit deserunt magni suscipit incidunt totam.',
'Perspiciatis et autem ducimus.',
'Laboriosam animi asperiores et reiciendis suscipit totam et et eum.',
'Quia ratione eius culpa.',
'Omnis quas voluptates sunt nulla consequuntur pariatur sapiente.',
'Quo optio eos sed ipsum est aspernatur perferendis.',
'Exercitationem eveniet laudantium quaerat iusto ex excepturi.',
'Eius itaque molestias excepturi blanditiis dignissimos mollitia hic error doloribus.',
'Reprehenderit itaque qui eum voluptatibus natus eligendi aliquam eos.',
'Ipsam qui sunt occaecati minus.',
'Eos accusantium voluptatem omnis.',
'Dolor deleniti error fuga.',
'Nam nemo molestias aut eos aut perferendis vitae.',
'Voluptate ut earum aut beatae.',
'Iure assumenda perspiciatis voluptatem occaecati expedita eligendi.',
'Accusamus aut velit repudiandae quae qui voluptates.',
'Dolore deleniti minima tenetur et incidunt porro voluptatem sit.',
'Enim sint quia.',
'Ex tenetur architecto et et.',
'Cumque placeat temporibus voluptatem eligendi facere quibusdam quasi commodi.',
'Est enim nemo ut qui.',
'Enim debitis eum saepe quia.',
'Voluptas in nemo facilis nihil maxime voluptas vero corrupti.',
'Aut optio maxime eum et sed facere reiciendis.',
'Ut illo fugit.',
'Beatae et animi est est accusamus fuga ratione.',
'Distinctio consequuntur voluptatem vel molestias ratione aut odio quod.',
'Magnam iusto consequatur repellat est laboriosam ex doloremque.',
'Tenetur dolor sint sed libero sit.',
'Id nobis quos sit commodi consequuntur.',
'Nisi omnis hic suscipit.',
'Voluptatem quod ab quos eligendi eligendi.',
'Consectetur nobis ex consequuntur accusamus.',
'Tempora delectus debitis molestiae.',
'Neque accusantium esse omnis quia et eum a culpa.',
'Enim in ut.',
'Odit et maiores officia quam id corporis cumque.',
'Voluptatem voluptates ex et delectus sit doloribus amet.',
'Voluptatibus modi dolore quidem sint consequatur laboriosam.',
'Sunt ullam sit sunt qui.',
'Qui aut veniam facilis ut veritatis.',
'In architecto necessitatibus accusantium soluta rerum velit officia ipsa atque.',
'Voluptatem id molestiae.',
'Aut non numquam ratione reprehenderit.',
'Magnam fuga dicta et.',
'Est adipisci et reprehenderit.',
'Deleniti corporis nostrum eaque.',
'Ea eum accusantium voluptatum dolor.',
'Est explicabo voluptates nobis libero iure quaerat est.',
'Possimus unde consectetur incidunt.',
'Consequatur dolorum a rerum voluptatum expedita officia nesciunt molestiae animi.',
'Distinctio nam est architecto nam expedita corporis possimus.',
'Labore sed harum perspiciatis eveniet at blanditiis.',
'Hic sed eum enim voluptates.',
'Aperiam vero nesciunt minus dolor.',
'Fugit recusandae quae.',
'Saepe reprehenderit necessitatibus voluptas et commodi quo quam recusandae.',
'Similique id quaerat non libero aliquid nobis explicabo laborum quaerat.',
'Eaque pariatur nisi odio nobis dolorem.',
'Nam neque voluptas cumque ullam minus.',
'Debitis odio aut molestias illum pariatur enim qui debitis eius.',
'Consequatur consequuntur sit et aut facere delectus et fuga cum.',
'Reprehenderit rem quas soluta architecto animi quo debitis laudantium.',
'Aperiam asperiores ratione nemo dicta suscipit aut odit vel.',
'Amet vero vero dolores maiores.',
'Odit numquam vel atque incidunt perferendis eligendi nihil ipsum.',
'Accusamus quia ea quasi animi accusamus quo.',
'Minus odit deleniti libero illum aut nihil temporibus vero.',
'Accusamus minus distinctio assumenda amet dolor a.',
'Dolorum saepe at rerum iure aut tempora voluptatibus aspernatur.',
'Molestias qui ut saepe.',
'Rem eligendi voluptatibus aspernatur blanditiis ut voluptatum facere voluptates.',
'Sunt sunt qui.',
'Culpa omnis nobis autem.',
'Sint molestiae ex aspernatur quod modi eum cumque.',
'Magnam aut ut dolorem minima voluptas.',
'Non veritatis fugiat minus dolore rem.',
'Tenetur laudantium quia est omnis cum numquam aspernatur laboriosam omnis.',
'Maxime iusto rem suscipit a placeat velit rerum.',
'Porro et id ut corrupti non quis hic.',
'Recusandae dignissimos et voluptates est est nobis.',
'Qui dignissimos vel modi.',
'Ad incidunt aut cum quia non.',
'Et dolore officia.',
'Molestiae sed ut qui sunt.',
'Ut consectetur reprehenderit autem alias possimus eos doloremque nihil omnis.',
'Ad praesentium quisquam minus aut.',
'Voluptas earum consequatur ratione sapiente quas.',
'Earum reiciendis est et repellendus reprehenderit natus vitae dicta.',
'Ducimus ut laudantium doloribus aliquam.',
'Sapiente dicta nam eius corrupti.',
'Omnis vitae repudiandae illo placeat quos.',
'Laboriosam sed sapiente quia.',
'Aspernatur voluptatem omnis quia ut aut harum ipsam dolorem.',
'Ut eos nulla incidunt fuga est corrupti voluptas autem.',
'Sapiente nihil sint natus repudiandae sunt quia molestiae.',
'Provident atque modi.',
'Maxime aut quisquam ipsa itaque provident et aut.',
'Quas similique cum tempore eveniet a ullam.',
'Quam sint nesciunt vel rerum id id ea est.',
'Consectetur laudantium qui quas et quibusdam inventore sint.',
'Temporibus pariatur maiores quis.',
'Corporis et doloremque.',
'Repudiandae autem tenetur accusantium est laudantium facere maiores.',
'Ratione possimus modi.',
'Nobis est quasi quia laborum magnam et soluta.',
'Veritatis ea omnis neque officia voluptas est ut ad.',
'Dolores libero ea sint ipsa harum eos.',
'Ea illum qui molestias omnis.',
'In deleniti accusantium distinctio vel iusto similique.',
'Consequatur ut ea qui iure quos.',
'Nihil odit odio sed totam vel maiores provident dolor.',
'Consectetur delectus repellat ut sit non magnam.',
'Dolorem ab recusandae in quas quia quo.',
'Quia pariatur sunt qui minus nulla ut dolorem.',
'Et quis temporibus architecto hic fuga.',
'Neque autem quae quibusdam magnam a sed.',
'Nam non et nostrum eum.',
'Veniam enim deserunt neque hic expedita non amet autem.',
'Excepturi voluptatem corrupti expedita est ex reprehenderit porro sequi id.',
'Optio iure iste tenetur alias.',
'Eaque voluptatem sit eligendi.',
'Et itaque enim qui officiis temporibus.',
'Sequi et eos hic quam dicta sunt qui et.',
'Sed ipsum est dolorum commodi ab nihil fugiat est sequi.',
'Adipisci consequatur dolore nihil explicabo eaque in rerum nihil eligendi.',
'Totam nam voluptatem optio assumenda.',
'Aliquid beatae voluptatibus quidem consequatur.',
'Qui laborum et temporibus laboriosam est consequatur nesciunt voluptas.',
'Nesciunt numquam dolores quae voluptatem minima.',
'Voluptas non odit sit tenetur.',
'Quia vel omnis aliquid est doloremque soluta.',
'Quisquam id aut dolorem aperiam et voluptatem.',
'Debitis consectetur facere voluptatibus rerum.',
'Aut animi commodi ea error vitae quas aut veritatis deleniti.',
'Est sapiente ullam enim cumque.',
'Accusantium et exercitationem in.',
'Sapiente eaque natus est enim reprehenderit a hic.',
'Quia nemo atque omnis iure reprehenderit eaque culpa inventore consequatur.',
'Repellendus ex repellendus dolorem laborum enim in rerum sequi.',
'Et iste nulla accusamus possimus autem voluptate tempore consequatur.',
'Est occaecati labore et ullam a tempora aut omnis.',
'Molestias ex nihil alias provident nemo incidunt id ea doloribus.',
'Corrupti rerum reprehenderit.',
'Assumenda et repudiandae pariatur ex et nesciunt animi vero similique.',
'Blanditiis nisi explicabo consequuntur tenetur.',
'Neque consequatur ut nesciunt tenetur et enim.',
'Voluptate inventore ducimus.',
'Enim eligendi amet cupiditate blanditiis quisquam voluptatem et qui.',
'Quisquam voluptate eum.',
'Molestiae culpa quae.',
'Occaecati veniam alias rerum omnis autem error qui rerum.',
'Quo deserunt aut a dolor.',
'Autem omnis nihil iure molestiae autem dolores consectetur eum aut.',
'Praesentium quo labore repudiandae.',
'Qui alias aut officiis dolore qui.',
'Quos voluptate qui reprehenderit accusamus et quae deleniti et.',
'Nam in quia vero repudiandae.',
'Iusto fugit esse exercitationem sequi sunt.',
'Placeat nostrum enim odio optio est.',
'Aut consequatur voluptatum ipsam inventore nihil molestias neque minus.',
'Consequuntur et dolorem excepturi explicabo.',
'Sint perspiciatis et est doloribus tenetur nemo.',
'Quasi impedit ducimus officia.',
'Et dolores dolores at corrupti corrupti maiores optio.',
'Iusto ducimus ipsa qui.',
'Beatae earum similique.',
'Ullam qui id laboriosam quaerat molestias et sit nulla.',
'Possimus excepturi quo iusto quo id et eos et et.',
'In enim delectus quis id in fuga blanditiis non et.',
'Beatae commodi inventore harum.',
'Sunt harum in dolore.',
'Sed ut recusandae earum deserunt tempore aut.',
'Quibusdam nemo in quo voluptas aut quisquam maxime necessitatibus sed.',
'Saepe labore enim sit ut nulla et.',
'Illo atque accusamus quia ut excepturi dolores dignissimos quidem.',
'Molestias ut voluptas saepe laborum ut voluptatem voluptatem sint.',
'Facere autem modi fuga.',
'Officia sequi nemo amet neque aut consequatur aspernatur iusto.',
'Molestias accusamus nemo tempore repudiandae quia et omnis.',
'Nam necessitatibus vero necessitatibus.',
'Dolor autem dolor et.',
'Aspernatur et eum ad ullam consequuntur eius.',
'Quia et assumenda ea.',
'Dolore suscipit saepe quae eum rerum voluptas sed ut.',
'Optio sit officia placeat unde debitis culpa porro.',
'Voluptatum sed et autem nisi consectetur.',
'Velit aut atque placeat aspernatur culpa iusto quod dolore.',
'Quidem et deserunt dolor repellat eaque ipsa fugit et.',
'Veniam modi minima in molestiae qui.',
'Pariatur et doloremque reprehenderit placeat maxime soluta minima aperiam.',
'Rerum sint perferendis optio laborum.',
'Qui ratione libero sit aliquam.',
'Quia adipisci nostrum vel nihil illum rem voluptatem.',
'Architecto omnis beatae qui sunt in voluptas quia ipsam est.',
'Necessitatibus est ab quis velit ad.',
'Voluptatem non ea et.',
'Nisi mollitia quas id quo molestias et.'];

const generateReviews = (writer, encoding, callback) => {
  // const reviewFiles = ['reviews.csv', 'reviews2.csv', 'reviews3.csv', 'reviews4.csv', 'reviews5.csv'];

  let i = 200000;
  let id = 0;
  let counter = 2;
  let ratingIndex = 0;
  let yearIndex = 0;
  let monthIndex = 0;
  let commentIndex = 0;
  let userID = 1;
  let writerIndex = 0;

  function write() {
    let ok = true;

    do {
      i--;
      if ((i + 1) % 20000 === 0) {
        writer = reviewWriters[writerIndex];
        writerIndex++;
      }
      for (var j = 0; j < counter; j++) {
        id++;
        const reviewId = id;
        const datePublished = `${months[monthIndex]} ${years[yearIndex]}`;
        const comment = reviewComments[commentIndex];
        const checkinRating = ratings[ratingIndex];
        const accuracyRating = ratings[ratingIndex + 1];
        const valueRating = ratings[ratingIndex + 2];
        const communicationRating = ratings[ratingIndex + 3];
        const cleanlinessRating = ratings[ratingIndex + 4];
        const locationRating = ratings[ratingIndex + 5];
        const userId = userID;
        const placeId = i + 1;

        const data = `${reviewId},${datePublished},${comment},${checkinRating},${accuracyRating},${valueRating},${communicationRating},${cleanlinessRating},${locationRating},${userId},${placeId}\n`;
        if (i === 0 && j === counter - 1) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);

          yearIndex++;
          yearIndex = yearIndex === years.length ? 0 : yearIndex;

          ratingIndex += 6;
          ratingIndex = ratingIndex === ratings.length ? 0 : ratingIndex;

          commentIndex++;
          commentIndex = commentIndex === reviewComments.length ? 0 : commentIndex;

          userID++;
          userID = userID === 100001 ? 1 : userID;
        }
      }

      // When reviews have been created for a place, increase the number of reviews to be created for the next place until we reach 500 reviews (max for a place)
      counter++;
      counter = counter === 501 ? 2 : counter;

    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early
      writer.once('drain', write);
    }

  }

  write();
};

generateReviews(writeReviews, 'utf-8', () => {
  writeReviews10.end();
  console.log('Reviews inserted to csv');
});






