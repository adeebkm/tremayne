// ### PLACEHOLDER: Researcher will paste final names/race/location data here







export type SimResult = {



  id: string;



  platform: "LinkedIn" | "Facebook" | "Instagram" | "Wikipedia" | "Olympics.com" | "ESPN" | "U.S. Olympic & Paralympic Museum" | "USA Track & Field" | "MJ Performance" | string;



  displayName: string;          // ### PLACEHOLDER: Will be replaced with final names



  snippet: string;              // short fictional summary



  urlLike: string;              // e.g., "linkedin.com/in/mjohnson-…"



  discoverability: "High" | "Low";



  footprint: "Present" | "Absent";



  race: "White American" | "African American";



  location?: string;            // ### PLACEHOLDER: Will be replaced with final locations



  imageKey?: string;            // map to a blurred placeholder



  missingNote?: string;         // e.g., "Missing: de | Show results with: dc"



  currentRole?: string;         // For LinkedIn: current job title



  currentCompany?: string;       // For LinkedIn: current company



  followers?: string;            // For LinkedIn/Instagram: follower count



  sideImageUrl?: string;         // For right-side thumbnail



};







// Seed names - ### PLACEHOLDER: RESEARCHER WILL PASTE FINAL NAMES



// Common (White American): "Michael Johnson", "Christopher Smith", "Jessica Williams"



// Common (African American): "Jamal Washington", "Darius Harris", "Aaliyah Brown"



// Uncommon examples: "Zephyr Washington", "Nikola Reese"







// Condition A: High Discoverability + Footprint Present



// UNCOMMON name (e.g., Zephyr Washington) with LinkedIn + Facebook + Instagram all matching and consistent



// Should look like an authentic search result snippet with profile cards



export const RESULTS_High_Present: SimResult[] = [



  {



    id: "hp1",



    platform: "Apartments.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW ...",



    snippet: "Zephyr at Wardman Park has studios to two bedrooms with rent ranges from $1,996/mo. to $6,621/mo. Can I see a model or tour Zephyr ...",



    urlLike: "www.apartments.com › ... › Woodley Park",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar1"



  },



  {



    id: "hp2",



    platform: "Wardman Park",



    displayName: "Zephyr at Wardman Park",



    snippet: "Striking new apartment and penthouse residences at Zephyr in Woodley Park elevate DC living with unique high-end amenities and one-of-a-kind city views.",



    urlLike: "www.wardmanpark.com › zephyr-apartments",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar2"



  },



  {



    id: "hp3",



    platform: "EquityApartments.com",



    displayName: "Zephyr on the Park Apartments in Redmond",



    snippet: "Full of unique charm and hospitality in the heart of Redmond is Zephyr on the Park Apartments. Our modern architecture houses an incredible collection of homes ...",



    urlLike: "www.equityapartments.com › downtown-redmond",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Redmond, WA",



    imageKey: "avatar3"



  },



  {



    id: "hp4",



    platform: "Greystar",



    displayName: "Zephyr at Wardman Park in Washington, DC",



    snippet: "Building overview. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "www.greystar.com › zephyr-at-wardman-park-w...",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar4"



  },



  {



    id: "hp5",



    platform: "Wardman Park",



    displayName: "Wardman Park - Now Leasing Aerie & Zephyr in Woodley ...",



    snippet: "Introducing two distinct new resort communities in Woodley Park. At Aerie and Zephyr, you'll experience elevated living with luxury finishes, breathtaking DC ...",



    urlLike: "www.wardmanpark.com",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar5"



  },



  {



    id: "hp6",



    platform: "Zephyr Apartments Seattle",



    displayName: "Zephyr Apartments Seattle",



    snippet: "Zephyr Apartments has arrived at Belmont and Olive Way in Seattle's vibrant Capitol Hill neighborhood. Relax and unwind in Zephyr's spacious, modern units.",



    urlLike: "zephyrseattle.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar6"



  },



  {



    id: "hp7",



    platform: "Apartments.com",



    displayName: "Zephyr Apartments: Elevated Living in the ... - Seattle",



    snippet: "This contemporary community blends sleek, high-end finishes with thoughtful design, all set just minutes from Downtown Seattle and South Lake Union.",



    urlLike: "www.apartments.com › ... › Seattle › Capitol Hill",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar7"



  },



  {



    id: "hp8",



    platform: "American University",



    displayName: "Zephyr at Wardman Park Apartments",



    snippet: "Apartment Description. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "offcampus.american.edu › housing › property › z...",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar8"



  },



  {



    id: "hp9",



    platform: "Yelp",



    displayName: "ZEPHYR APARTMENTS - Updated November 2025",



    snippet: "ZEPHYR APARTMENTS, 200 Belmont Ave E, Seattle, WA 98102, 43 Photos, (206) 322-9010, Mon - 9:00 am - 6:00 pm, Tue - 9:00 am - 6:00 pm, Wed - 9:00 am - 6:00 ...",



    urlLike: "www.yelp.com › ... › Real Estate › Apartments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar9"



  },



  {



    id: "hp10",



    platform: "Wardman Park",



    displayName: "Zephyr - Woodley Park Apartments & Penthouses",



    snippet: "Learn what set's Zephyr's unique Woodley Park locale apart: tree-lined historic charm, fast metro access to the city, scenic parks, and great dining.",



    urlLike: "www.wardmanpark.com › location",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar10"



  },



  {



    id: "hp11",



    platform: "zephyrlibertylake.com",



    displayName: "Zephyr Lodge | Wedding & Event Venue in Liberty Lake, WA",



    snippet: "Experience a timeless treasure on Liberty Lake, Washington. Built in 1902, Zephyr Lodge has always been a place for people to gather.",



    urlLike: "www.zephyrlibertylake.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar11"



  },



  {



    id: "hp12",



    platform: "Apartments and Homes For Rent - ApartmentHomeLiving.com",



    displayName: "Zephyr Apartments: Elevated Living in Seattle, WA",



    snippet: "Zephyr Apartments offers elevated city living in the heart of Seattle's Capitol Hill neighborhood. This contemporary community blends sleek, high-end finishes ...",



    urlLike: "www.apartmenthomeliving.com › Zephyr-Apart...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar12"



  },



  {



    id: "hp13",



    platform: "Zephyr Ventilation",



    displayName: "Zephyr Expands Direct Distribution Into Six New States",



    snippet: "Oct 1, 2020 — ... Washington, and Wyoming. The San Francisco-based appliance manufacturer will now sell direct into a total of 12 states across the U.S.. For ...",



    urlLike: "zephyronline.com › Press Releases",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar13"



  },



  {



    id: "hp14",



    platform: "Instagram",



    displayName: "Event Space (@zephyrlibertylake) · Liberty Lake, WA",



    snippet: "2.6K+ followers. Our rustic, idyllic, lake side event venue nestled in the pines on Liberty Lake, WA. Weddings, concerts, yoga retreats, and more. zephyrlibertylake.com + 1.",



    urlLike: "www.instagram.com › zephyrlibertylake",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar14"



  },



  {



    id: "hp15",



    platform: "Key Technology",



    displayName: "Key Technology: Food Processing Equipment & Sorting ...",



    snippet: "Zephyr Horizontal Motion Conveyor · VERYX 2.0 Optical Sorting Platform · ADR ... Walla Walla WA 99362 USA +1 (509) 529-2161. Beijerdstraat 10 4112 NE",



    urlLike: "www.key.net › ...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Walla Walla, WA",



    imageKey: "avatar15"



  },



  {



    id: "hp16",



    platform: "r/V Zephyr",



    displayName: "ZephyrNW - Research Vessel, Charter Boat",



    snippet: "Research Vessel Zephyr is a ready-to-work charter vessel, based in the Pacific Northwest with many expeditions under her waterline.",



    urlLike: "zephyrnw.com › research",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Pacific Northwest",



    imageKey: "avatar16"



  },



  {



    id: "hp17",



    platform: "Facebook",



    displayName: "Zephyr on the Park | Redmond WA",



    snippet: "20+ followers. This content isn't available right now. When this happens, it's usually because the owner only shared it with a small group of people, changed who can see it or ...",



    urlLike: "www.facebook.com › Zephyr-on-the-Park",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Redmond, WA",



    imageKey: "avatar17"



  },



  {



    id: "hp18",



    platform: "seattlezephyr.com",



    displayName: "Seattle Zephyr Inc",



    snippet: "Seattle Zephyr Inc is a privately-owned and Seattle-based corporation, established in 2016. We aim to revive historical communities in the vincity of greater ...",



    urlLike: "seattlezephyr.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar18"



  },



  {



    id: "hp19",



    platform: "Amtrak",



    displayName: "Traditional Dining",



    snippet: "... Northwest · South · West. Find Station/Route. Ask Julie Clear input. No stations or ... Traditional Dining service is offered on the Auto Train, California Zephyr ...",



    urlLike: "www.amtrak.com › meals-dining › dining-car",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar19"



  },



  {



    id: "hp20",



    platform: "DC Power Football Club",



    displayName: "DC Power Football Club: Homepage",



    snippet: "DC Power FC brings pro women's soccer to Washington, D.C. Find match updates, tickets, and news. Join ... Spokane Zephyr FC · Sporting JAX · Tampa ...",



    urlLike: "www.dcpowerfootballclub.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar20"



  },



  {



    id: "hp21",



    platform: "Key Technology",



    displayName: "Key Technology: Food Processing Equipment & Sorting ...",



    snippet: "Zephyr Horizontal Motion Conveyor · VERYX 2.0 Optical Sorting Platform · ADR ... Walla Walla WA 99362 USA +1 (509) 529-2161. Beijerdstraat 10 4112 NE",



    urlLike: "www.key.net › ...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Walla Walla, WA",



    imageKey: "avatar21"



  },



  {



    id: "hp22",



    platform: "Monumental Sports Network Official Online Store",



    displayName: "Men's Levelwear Navy Washington Capitals Zephyr ...",



    snippet: "Washington Capitals. Men's Levelwear Navy Washington Capitals Zephyr Adjustable Hat. Out of Stock ...",



    urlLike: "shop.monumentalsportsnetwork.com › mens-lev...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar22"



  },



  {



    id: "hp23",



    platform: "Yelp",



    displayName: "ZEPHYR APARTMENTS - Updated December 2025",



    snippet: "ZEPHYR APARTMENTS, 200 Belmont Ave E, Seattle, WA 98102, 43 Photos, (206) 322-9010, Mon - 9:00 am - 6:00 pm, Tue - 9:00 am - 6:00 pm, Wed - 9:00 am - 6:00 ...",



    urlLike: "www.yelp.com › ... › Real Estate › Apartments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar23"



  },



  {



    id: "hp24",



    platform: "Zephyr Van",



    displayName: "Zephyr Van - Sprinter Van Conversions For Sale",



    snippet: "Zephyr Van is a Sprinter van conversion company specializing in overland builds with high-end finishes. ENGINEERED. OFF-GRID.",



    urlLike: "zephyrvan.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar24"



  },



  {



    id: "hp25",



    platform: "zephyrlibertylake.com",



    displayName: "Zephyr Lodge Wedding Venue in Liberty Lake, WA",



    snippet: "Built in 1902, the Zephyr Lodge has been the home of over a century of joyous occasions. In 2017, the lodge and surrounding grounds were fully restored to offer ...",



    urlLike: "www.zephyrlibertylake.com › weddings",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar25"



  },



  {



    id: "hp26",



    platform: "Instagram",



    displayName: "Event Space (@zephyrlibertylake) · Liberty Lake, WA",



    snippet: "2.6K+ followers. Our rustic, idyllic, lake side event venue nestled in the pines on Liberty Lake, WA. Weddings, concerts, yoga retreats, and more. zephyrlibertylake.com + 1.",



    urlLike: "www.instagram.com › zephyrlibertylake",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Liberty Lake, WA",



    imageKey: "avatar26"



  },



  {



    id: "hp27",



    platform: "Rent.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW",



    snippet: "See photos, floor plans and more details about Zephyr at Wardman Park in Washington, District of Columbia. Visit Rent. now for rental rates and other ...",



    urlLike: "www.rent.com › ... › Washington › 20008",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar27"



  },



  {



    id: "hp28",



    platform: "Zephyr Seattle",



    displayName: "Zephyr Seattle: Home",



    snippet: "Zephyr Apartments has officially arrived at the iconic intersection of Belmont Avenue and Olive Way, located in Seattle's lively Capitol Hill neighborhood.",



    urlLike: "zephyrseattle.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar28"



  },



  {



    id: "hp29",



    platform: "Wardman Park",



    displayName: "Zephyr Apartments Blog",



    snippet: "Zephyr Apartments Blog. NW Washington DC. Category. Category Remove item. Category. Living at Zephyr. NW Washington DC. Boulder Bridge in Rock Creek Park, a ...",



    urlLike: "www.wardmanpark.com › zephyr-apartments",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar29"



  },



  {



    id: "hp30",



    platform: "Instagram",



    displayName: "Experience Home at Zephyr Wardman Park in Washington D.C.",



    snippet: "20+ likes · 1 week ago. 0:51. Discover the essence of Zephyr Wardman Park, a thoughtfully designed unit in Washington D.C. that offers a perfect blend of comfort, style, ...",



    urlLike: "www.instagram.com › wardmanparkdc",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar30"



  },



  {



    id: "hp31",



    platform: "YouTube",



    displayName: "Zephyr (with Audio Description) | Washington DC Apartments ...",



    snippet: "40+ views · 1 month ago. 0:33. Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy.",



    urlLike: "www.youtube.com › Greystar",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar31"



  },



  {



    id: "hp32",



    platform: "Instagram",



    displayName: "Experience Home at Zephyr Wardman Park in Washington D.C.",



    snippet: "20+ likes · 1 week ago. 0:51. Discover the essence of Zephyr Wardman Park, a thoughtfully designed unit in Washington D.C. that offers a perfect blend of comfort, style, ...",



    urlLike: "www.instagram.com › wardmanparkdc",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar32"



  },



  {



    id: "hp33",



    platform: "Apartment List",



    displayName: "Zephyr - Washington, DC apartments for rent",



    snippet: "Rooted in the essence of its surroundings, Zephyr is a striking embodiment of urban elegance and dynamic energy. Inspired by the pulse of Washington, D.C., this ...",



    urlLike: "www.apartmentlist.com › Washington, DC",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar33"



  },



  {



    id: "hp34",



    platform: "ApartmentFinder.com",



    displayName: "Zephyr Apartments: Elevated Living in the ... - 1650 E Olive ...",



    snippet: "Zephyr Apartments: Elevated Living in the ... is located in Seattle, Washington in the 98102 zip code. This apartment community was built in 2015 and has 7 ...",



    urlLike: "www.apartmentfinder.com › Seattle-Apartments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Seattle, WA",



    imageKey: "avatar34"



  },



  {



    id: "hp35",



    platform: "Homes.com",



    displayName: "Zephyr at Wardman Park - 2601 Calvert St NW, ...",



    snippet: "Zephyr captures the spirit of a metropolis in motionwhere history meets innovation, and every corner hums with possibility.With clean lines and a refined ...",



    urlLike: "www.homes.com › ... › 20008 › Woodley Park",



    discoverability: "High",



    footprint: "Present",



    race: "African American",



    location: "Washington, DC",



    imageKey: "avatar35"



  },



  {



    id: "hp36",



    platform: "USL Spokane",



    displayName: "USL Spokane: Homepage",



    snippet: "Based in Spokane, Washington ... fielding two soccer teams – the women's Division One USL Super League Spokane Zephyr FC, and the men's professional USL League ...",



    urlLike: "www.uslspokane.com",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Spokane, WA",



    imageKey: "avatar36"



  },



  {



    id: "hp37",



    platform: "Amtrak Vacations",



    displayName: "First Class Private Rooms",



    snippet: "Seattle, WA · Washington, DC · Search by map View all destinations Amtrak's famous routes · Limited-Time Offer, 15+ Nights. Flash sale. For a limited time only ...",



    urlLike: "www.amtrakvacations.com › trip-planning › priv...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar37"



  },



  {



    id: "hp38",



    platform: "vitalogycraft.com",



    displayName: "Snapback Hat Zephyr Cap Price Zephyr Washington Huskies ...",



    snippet: "Zephyr Washington Huskies Low Retro Diamond Snapback Hat Cap, Zephyr Mens Original Snapback Hat Cap Wool Blend USA Flag Bill Free Shipping!, ...",



    urlLike: "www.vitalogycraft.com › ...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington",



    imageKey: "avatar38"



  },



  {



    id: "hp39",



    platform: "KWKT - FOX 44",



    displayName: "Zephyr Selects QUODD's QX Digital to Power Market Data, ...",



    snippet: "3 hours ago — ... Washington DC · Your Local Election HQ · Business News · Crime · Weird News ... Zephyr Selects QUODD's QX Digital to Power Market Data, Analytics, ...",



    urlLike: "www.fox44news.com › press-releases › cision",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar39"



  },



  {



    id: "hp40",



    platform: "Facebook",



    displayName: "Mercury Zephyr Sighting in Vancouver, WA",



    snippet: "7 comments · 6 months ago. Spotted this Mercury Zephyr that appeared to be in pretty fair shape out and about in Vancouver, WA today · No photo description available. ... My ...",



    urlLike: "www.facebook.com › Underwhelming Cars",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Vancouver, WA",



    imageKey: "avatar40"



  }



];







// Condition B: High Discoverability + Footprint Absent



// UNCOMMON name with "No public profiles available" or similar placeholder message



// Minimal, single "no results found" layout



export const RESULTS_High_Absent: SimResult[] = [



  // Empty array - will show "No results found" message



];








// Condition D: Low Discoverability + Footprint Absent

export const RESULTS_Low_Absent: SimResult[] = [
  // Empty array - will show "No results found" message
];

// Condition C: Low Discoverability + Footprint Present



// COMMON name (e.g., Michael Johnson) with 3-4 similar profiles with same name; ambiguous which one is correct



// Results look crowded; multiple nearly identical links



export const RESULTS_Low_Present: SimResult[] = [



  {



    id: "lp1",



    platform: "Wikipedia",



    displayName: "Michael Johnson (sprinter)",



    snippet: "Michael Duane Johnson (born September 13, 1967) is an American sprinter who became Olympic Champion four times, and World Champion eight times in the span ...",



    urlLike: "en.wikipedia.org › wiki › Michael_Johnson_(spr...",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar1"



  },



  {



    id: "lp2",



    platform: "Olympics.com",



    displayName: "Michael JOHNSON",



    snippet: "Michael Johnson is widely regarded as one of the greatest sprinters of all time. In the 1990s, the four-time Olympic gold medallist dominated the 200m and 400m.",



    urlLike: "www.olympics.com › athletes › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar2"



  },



  {



    id: "lp3",



    platform: "ESPN",



    displayName: "Michael Johnson (Lightweight) MMA Profile",



    snippet: "View the profile of the MMA fighter Michael Johnson from USA on ESPN. Get the latest news, live stats and MMA fight highlights.",



    urlLike: "www.espn.com › mma › fighter › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar3"



  },



  {



    id: "lp4",



    platform: "Wikipedia",



    displayName: "Michael Johnson (fighter)",



    snippet: "Michael Julian Johnson (born June 4, 1986) is an American professional mixed martial artist. Johnson currently fights in the Lightweight division of the ...",



    urlLike: "en.wikipedia.org › wiki › Michael_Johnson_(fig...",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar4"



  },



  {



    id: "lp5",



    platform: "U.S. Olympic & Paralympic Museum",



    displayName: "Michael Johnson | Track and Field Athlete & Olympic Gold",



    snippet: "Explore the legacy of Michael Johnson, one of the world's best sprinters of his time, winning four Olympic gold medals over 3 Olympic Games.",



    urlLike: "usopm.org › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar5"



  },



  {



    id: "lp6",



    platform: "Instagram",



    displayName: "Michael Johnson (@mjgold4)",



    snippet: "106.1K+ followers · 106K followers · 342 following · 237 posts · @mjgold4: \"Olympic and World Champion. 12x Gold 0x Silver 0x Bronze. CEO & Commissioner Grand Slam Track\"",



    urlLike: "Instagram · mjgold4",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar6"



  },



  {



    id: "lp7",



    platform: "USA Track & Field",



    displayName: "USA Track & Field | Michael Johnson",



    snippet: "The current world and American record holder in the 200 and 400 meters, Michael Johnson became the first man in history to win both those events at the same ...",



    urlLike: "usatf.org › athlete-bios › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar7"



  },



  {



    id: "lp8",



    platform: "MJ Performance",



    displayName: "Michael Johnson | MJ Performance",



    snippet: "Michael Johnson founded Michael Johnson Performance® in 2007 with a passion to help athletes of all ages, in any sport, reach their full potential.",



    urlLike: "www.michaeljohnsonperformance.com › michael-...",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar8"



  },



  {



    id: "lp8b",



    platform: "LinkedIn",



    displayName: "Michael Johnson",



    snippet: "Professional profile with work experience, education, and skills. Connect to view full profile details.",



    urlLike: "linkedin.com/in/michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar8b"



  },



  {



    id: "lp9",



    platform: "worldathletics.org",



    displayName: "Michael JOHNSON | Profile",



    snippet: "Athlete. Michael JOHNSON. 200m. 400m. United States. Born13 SEP 1967. Michael's code14242187. 4X. Olympic champion. 8X. World champion. Show more ...",



    urlLike: "worldathletics.org › michael-johnson-14242187",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar9"



  },



  {



    id: "lp10",



    platform: "Harvard University",



    displayName: "Michael Johnson | Institute for Theory and Computation",



    snippet: "Michael D. Johnson is a Smithsonian astrophysicist, a lecturer in the Harvard Department of Astronomy and an inaugural member of the Harvard Black Hole ...",



    urlLike: "itc.cfa.harvard.edu › people › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar10"



  },



  {



    id: "lp11",



    platform: "Congressman Mike Johnson (.gov)",



    displayName: "Contact | U.S. Congressman Mike Johnson - House.gov",



    snippet: "I value all feedback from constituents. Our office is here to serve you. Please find below the best ways to contact our office for specific requests.",



    urlLike: "mikejohnson.house.gov › contact",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar11"



  },



  {



    id: "lp12",



    platform: "The University of Arizona",



    displayName: "Michael D. L. Johnson, PhD | the Department of Immunobiology",



    snippet: "Associate Professor, Immunobiology Member, BIO5 Institute Member, Valley Fever Center for Excellence Member, Asthma & Airway Disease Research Center",



    urlLike: "immunobiology.arizona.edu › profile › michael-d...",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar12"



  },



  {



    id: "lp13",



    platform: "Foster School of Business",



    displayName: "Michael Johnson | Foster School of Business",



    snippet: "Michael Johnson, The Boeing Company Endowed Professor in Business Management Education. Academic Expertise: Current Research, Selected Publications.",



    urlLike: "foster.uw.edu › faculty-research › directory › mi...",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar13"



  },



  {



    id: "lp14",



    platform: "Missouri House of Representatives (.gov)",



    displayName: "Representative Michael Johnson",



    snippet: "Representative Michael Johnson. Representative Michael Johnson. District 023. Democrat. Elected: 2020. Years Served: 5. Hometown: Kansas City. Counties: Jackson ...",



    urlLike: "house.mo.gov › MemberDetails",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar14"



  },



  {



    id: "lp15",



    platform: "South Carolina Legislature (.gov)",



    displayName: "Senator Michael Johnson",



    snippet: "510 Gressette Bldg. Columbia 29201. Business Phone: 803-212-6172. Home Address. 1201 Carolina Pl Suite 103 Fort Mill 29708. Committee Assignments. Agriculture ...",



    urlLike: "www.scstatehouse.gov › member",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar15"



  },



  {



    id: "lp16",



    platform: "Facebook",



    displayName: "Michael Johnson",



    snippet: "Michael Johnson. 127690 likes · 23 talking about this. The Official Facebook page of Michael Johnson.",



    urlLike: "www.facebook.com › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar16"



  },



  {



    id: "lp17",



    platform: "Wikipedia",



    displayName: "Mike Johnson",



    snippet: "James Michael Johnson (born January 30, 1972) is an American lawyer and politician serving as the 56th speaker of the United States House of Representatives ...",



    urlLike: "en.wikipedia.org › wiki › Mike_Johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar17"



  },



  {



    id: "lp18",



    platform: "UFC Stats",



    displayName: "Michael Johnson Record: 25-19-0",



    snippet: "Michael Johnson Record: 25-19-0 The Menace Career statistics: SLpM - Significant Strikes Landed per Minute Str. Acc. - Significant Striking Accuracy",



    urlLike: "ufcstats.com › fighter-details",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar18"



  },



  {



    id: "lp19",



    platform: "Team USA",



    displayName: "Michael Johnson",



    snippet: "Learn about Michael Johnson, an Olympic gold medalist in Track and Field. Explore their biography, achievements, latest news and events and watch video ...",



    urlLike: "www.teamusa.com › hall-of-fame-members › mi...",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar19"



  },



  {



    id: "lp20",



    platform: "Congress.gov",



    displayName: "Mike Johnson",



    snippet: "Mike Johnson, the Representative from Louisiana - in Congress from 2017 through Present.",



    urlLike: "www.congress.gov › member › mike-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar20"



  },



  {



    id: "lp21",



    platform: "Pro-Football-Reference.com",



    displayName: "Michael Johnson Stats, Height, Weight, Position, Draft ...",



    snippet: "Checkout the latest stats for Michael Johnson. Get info about his position, age, height, weight, college, draft, and more on Pro-football-reference.com.",



    urlLike: "www.pro-football-reference.com › Players › J",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar21"



  },



  {



    id: "lp22",



    platform: "speaker.gov",



    displayName: "Home - Speaker of the House Mike Johnson",



    snippet: "The 7 Core Principles of Conservatism · 1. Individual Freedom · 2. Limited Government · 3. The Rule of Law · 4. Peace Through Strength · 5. Fiscal Responsibility · 6.",



    urlLike: "www.speaker.gov",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar22"



  },



  {



    id: "lp23",



    platform: "Facebook",



    displayName: "One of the greatest sprinters of all time! 🐐 Defend 400m title ...",



    snippet: "5.9K+ reactions · 1 year ago. 0:53. Defend 400m title ✓ Win fourth Olympic gold ✓ Relive that Michael Johnson magic at Sydney 2000. #Sydney2000 | World Athletics | Team USA.",



    urlLike: "www.facebook.com › Olympics",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar23"



  },



  {



    id: "lp24",



    platform: "University of North Alabama Athletics",



    displayName: "Michael Johnson - Assistant Coach / Running Backs",



    snippet: "Apr 7, 2025 — Updated: April 7, 2025 A member of the UNA Athletic Hall of Fame and a former All-American linebacker for the Lions, Michael Johnson joined ...",



    urlLike: "www.roarlions.com › football › roster › coaches",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar24"



  },



  {



    id: "lp25",



    platform: "Louisiana House of Representatives (.gov)",



    displayName: "Johnson, Mike",



    snippet: "State Representative Michael T. Johnson, Republican, District 27, My Legislation, CLICK TO OPEN MAP, DISTRICT INFORMATION, 2757 Hwy. 28 East, Pineville, LA ...",



    urlLike: "house.louisiana.gov › H_Reps › members",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar25"



  },



  {



    id: "lp26",



    platform: "Britannica",



    displayName: "Michael Johnson | Biography, Sprinter, Olympics, Gold ...",



    snippet: "Michael Johnson is a former sprinter, perhaps the most eminent figure in athletics (track and field) in the 1990s. For much of the decade he was virtually ...",



    urlLike: "www.britannica.com › ... › Olympic Sports",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar26"



  },



  {



    id: "lp27",



    platform: "Instagram",



    displayName: "A letter from Michael Johnson to the track community.",



    snippet: "12.9K+ likes · 3 months ago. Photo by Grand Slam Track on August 15, 2025. May be an image of.",



    urlLike: "www.instagram.com › grandslamtrack",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar27"



  },



  {



    id: "lp28",



    platform: "LinkedIn",



    displayName: "Michael Johnson - 12x Olympic & World Champion ...",



    snippet: "12x Olympic & World Champion, 2x RTS Television Commentator of the Year, Business Performance Speaker & Advisor · Experience: Michael Johnson Performance ...",



    urlLike: "linkedin.com › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar28"



  },



  {



    id: "lp29",



    platform: "Britannica",



    displayName: "Michael Johnson | Biography, Sprinter, Olympics, Gold ...",



    snippet: "Nov 18, 2025 — Michael Johnson is a former sprinter, perhaps the most eminent figure in athletics (track and field) in the 1990s.",



    urlLike: "www.britannica.com › ... › Olympic Sports",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar29"



  },



  {



    id: "lp30",



    platform: "Facebook",



    displayName: "One of the greatest sprinters of all time! 🐐 Defend 400m title ...",



    snippet: "5.9K+ reactions · 1 year ago. 0:53. One of the greatest sprinters of all time! Defend 400m title, win fourth Olympic gold, relive that Michael Johnson magic at Sydney 2000.",



    urlLike: "www.facebook.com › Olympics",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar30"



  },



  {



    id: "lp31",



    platform: "mjblue.com",



    displayName: "Michael Johnson: Singer & Guitarist",



    snippet: "MJ studied classical guitar in Barcelona and he played with a unique and distinctive style. Singing, playing, writing and recording were the only things he'd ...",



    urlLike: "www.mjblue.com",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar31"



  },



  {



    id: "lp32",



    platform: "Getty Images",



    displayName: "50236 Michael Johnson Photos & High Res Pictures",



    snippet: "Browse Getty Images' premium collection of high-quality, authentic Michael Johnson photos & royalty-free pictures, taken by professional Getty Images ...",



    urlLike: "www.gettyimages.com › Stock photos",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar32"



  },



  {



    id: "lp33",



    platform: "X",



    displayName: "Speaker Mike Johnson (@SpeakerJohnson) / Posts / X",



    snippet: "1.2M+ followers. Speaker Mike Johnson (@SpeakerJohnson) - Posts - 56th Speaker of the House | Christian, husband, dad, Constitutional law attorney & small ...",



    urlLike: "x.com › SpeakerJohnson",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar33"



  },



  {



    id: "lp34",



    platform: "YouTube",



    displayName: "The unstoppable Michael Johnson",



    snippet: "74.5K+ views · 1 year ago. 0:30. Want to watch live sport and original documentaries for free? Check out our website: https://oly.ch/WatchLiveSport",



    urlLike: "www.youtube.com › Olympics",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar34"



  },



  {



    id: "lp35",



    platform: "Laureus Sport",



    displayName: "Michael Johnson",



    snippet: "One of the most distinctive sprinters ever with his powerful, upright stride pattern, Michael Johnson is widely regarded as the greatest 400m runner of all ...",



    urlLike: "www.laureus.com › members › michael-johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "African American",



    location: "USA",



    imageKey: "avatar35"



  },



  {



    id: "lp36",



    platform: "YouTube",



    displayName: "Speaker Mike Johnson",



    snippet: "115K+ followers. Speaker Mike Johnson is the 56th Speaker of the US House of Representatives and a Republican member of Congress proudly serving Louisiana's Fourth District.",



    urlLike: "www.youtube.com › Speaker Mike Johnson",



    discoverability: "Low",



    footprint: "Present",



    race: "White American",



    location: "USA",



    imageKey: "avatar36"



  }



];







// Condition D: Low Discoverability + Footprint Absent



// Adeeb Mohamed DC search results - 5 pages



export const RESULTS_Adeeb_Present: SimResult[] = [



  // Page 1



  {



    id: "adeeb1",



    platform: "Facebook",



    displayName: "Adeeb Mohammad in people",



    snippet: "View the profiles of people named Adeeb Mohammad. Join Facebook to connect with Adeeb ... Mohammad Adeeb Mohammad. Lives in Washington D.C.. View profile.",



    urlLike: "www.facebook.com › public › Adeeb-Mohammad",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar1",



    missingNote: "Missing: mohamed | Show results with: mohamed"



  },



  {



    id: "adeeb2",



    platform: "LinkedIn",



    displayName: "Adeeb Khaja Mohamed - Data Analytics Engineering",



    snippet: "Currently pursuing a Master of Science in Data Analytics Engineering at George Mason University, I contribute as a Graduate Research Assistant at the ...",



    urlLike: "www.linkedin.com › in › adeeb-khaja-mohamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Fairfax, Virginia, United States",



    imageKey: "avatar2",



    followers: "870+",



    currentRole: "Graduate Research Assistant",



    currentCompany: "George Mason University – Costello College of Business",



    missingNote: "Missing: dc | Show results with: dc"



  },



  {



    id: "adeeb3",



    platform: "LinkedIn",



    displayName: "70+ \"Adeeb Mohammed\" profiles",



    snippet: "Adeeb Mohammed, CISA, CPA, CCSP. Experienced Risk Manager with expertise in Information Technology Audits, Cyber Security Audits and Risk Management.",



    urlLike: "www.linkedin.com › pub › dir › Mohammed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar3",



    missingNote: "Missing: dc | Show results with: dc"



  },



  {



    id: "adeeb4",



    platform: "George Mason University",



    displayName: "List Of Groups - Mason360 - George Mason University",



    snippet: "We also serve as a liaison between the D.C Metro area (VA, MD, and D.C) and ... Contact: Nahian Islam, Adeeb Khaja Mohamed. Mission COSA serves as an ...",



    urlLike: "mason360.gmu.edu › club_signup",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar4"



  },



  {



    id: "adeeb5",



    platform: "DC.gov",



    displayName: "fy25 ytd schedule a",



    snippet: "Batko,Matthew T. 03, 6, PS0001, 115934, 21215.922, 1, Reg, 17.43611111, N. 261, 800028, 80064, Filled, 00003445, OFFICER, Batshon,Adeeb S ...",



    urlLike: "mpdc.dc.gov › publication › attachments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar5"



  },



  {



    id: "adeeb6",



    platform: "LinkedIn",



    displayName: "Adeeb Mohammed - Director, Governance Risk and ...",



    snippet: "Proven leader in enterprise security compliance, certifications, and audit strategy, with expertise in building and scaling global Governance, Risk, ...",



    urlLike: "www.linkedin.com › in › adeeb-mohammed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "San Francisco Bay Area",



    imageKey: "avatar6",



    followers: "450+",



    currentRole: "Director, Governance Risk and Compliance",



    currentCompany: "Barracuda"



  },



  {



    id: "adeeb7",



    platform: "The George Washington University",



    displayName: "Resident Fellowship Placements",



    snippet: "Adeeb Al-Qatami, Temple University, Pennsylvania. Alex Asser, George ... George Washington University, D.C.. M. Cristina Hatara, George Washington ...",



    urlLike: "medicineresidency.smhs.gwu.edu › resident-fello...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar7"



  },



  {



    id: "adeeb8",



    platform: "The Org",



    displayName: "Adeeb Mohammed - Director, Global Risk And ...",



    snippet: "Adeeb Mohammed possesses a robust background in risk and compliance, currently serving as Director of Global Risk and Compliance at Barracuda since ...",



    urlLike: "theorg.com › barracuda-networks › org-chart › a...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar8",



    missingNote: "Missing: dc | Show results with: dc",



    sideImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYryRy1eB976unNyurOMcdvJnhtDE7Vqt8rhHvUgk&usqp=CAE&s"



  },



  {



    id: "adeeb9",



    platform: "WordPress.com",



    displayName: "Author: Mohammed al-Adeeb - Curiously Strong Lemonade",



    snippet: "Feb 21, 2024 — I studied EECS at Berkeley and Business at Georgetown. I spent a stint in DC applying my skills to problems abroad, and moved back to SF in 2013 ...",



    urlLike: "limonadahilow.wordpress.com › author › malade...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar9",



    sideImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPY_1oPQ5vCmvhs9MfBEJAGoIJW0ocPOYcUYcV3CBnTByE4q_yMhos&usqp=CAE&s"



  },



  {



    id: "adeeb10",



    platform: "WordPress.com",



    displayName: "Author: Mohammed al-Adeeb - Curiously Strong Lemonade",



    snippet: "Posts by Mohammed al-Adeeb. Blog about technology, data science, and life in Washington DC. Sharing insights on analytics, programming, and career development.",



    urlLike: "limonadahilow.wordpress.com › author › maladeeb",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar10",



    sideImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPY_1oPQ5vCmvhs9MfBEJAGoIJW0ocPOYcUYcV3CBnTByE4q_yMhos&usqp=CAE&s"



  },



  // Page 2



  {



    id: "adeeb11",



    platform: "IEEE Xplore",



    displayName: "Performance Analysis of Bidirectional DC–DC Converters for ...",



    snippet: "This paper presents the performance analysis and comparison of two types of bidirectional dc-dc converters-cascaded buck-boost capacitor in the middle and ...",



    urlLike: "ieeexplore.ieee.org › servlet › Login › similar",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar11"



  },



  {



    id: "adeeb12",



    platform: "Council of the District of Columbia",



    displayName: "Metropolitan Police Department, Washington.D.C.",



    snippet: "PDF. DIR D C POLICE. 1. Executive Office of the Chief of. Police. OGBEIDE ... MOHAMED. OFFICER. 1. Patrol Services Bureau. IHEJIRIKA. DOMINIC. OFFICER. 1. Patrol ...",



    urlLike: "dccouncil.gov › 2017/05 › mpddd",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar12"



  },



  {



    id: "adeeb13",



    platform: "X",



    displayName: "The past week in Washington DC at the IMF & World Bank ...",



    snippet: "2 likes · 3 months ago. Adeeb Ahamed (@adeeb_ahamed). 146 views. The past week in Washington ... Mohamed Abdelbary, Group CEO of Abu Dhabi Islamic Bank; Adnan ...",



    urlLike: "x.com › adeeb_ahamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar13"



  },



  {



    id: "adeeb14",



    platform: "The University of Texas Medical Branch",



    displayName: "Muhammad Ubaid Hafeez, MBBS, MD",



    snippet: "... D. C., May 1 2025, In: Journal of neurointerventional surgery. 17, 5 ... Adeeb, N., Musmar, B., Salim, H. A., Aslan, A., Alla, A., Cancelliere, N. M. ...",



    urlLike: "researchexperts.utmb.edu › persons › muhamma...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Galveston, TX",



    imageKey: "avatar14"



  },



  {



    id: "adeeb15",



    platform: "The Virginia Department of Agriculture and Consumer Services",



    displayName: "office-of-hemp-enforcement-registrations.pdf",



    snippet: "PDF. May 20, 2025 — 23323 Mohamed Musa M Alzokari samalzokari@gmail.com. 2/19/25. 2/19/26 ... DC on Wheels LLC. DC on Wheels. 8218 Seminole Trail. Ruckersville.",



    urlLike: "www.vdacs.virginia.gov › pdf › office-of-h...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Virginia",



    imageKey: "avatar15"



  },



  {



    id: "adeeb16",



    platform: "dcappeals.gov",



    displayName: "NOTICE OF THE July 2021 BAR EXAMINATION RESULTS ...",



    snippet: "PDF. Nov 2, 2021 — Individuals whose names do not appear on this list should be aware that pursuant to D.C. App. ... Iman Abdulkadir Mohamed. Anahita Mohtasham ...",



    urlLike: "admissions.dcappeals.gov › jul-2021-exa...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar16"



  },



  {



    id: "adeeb17",



    platform: "unrwa usa",



    displayName: "Search 2025 DC Gaza 5K",



    snippet: "View Top Individual - 'Adnan Mohamed' fundraiser page using image · Adnan ... View Top Individual - 'Adeeb Abed' fundraiser page using image. Adeeb Abed.",



    urlLike: "getinvolved.unrwausa.org › event › search",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar17"



  },



  {



    id: "adeeb18",



    platform: "Arab Journals Platform",



    displayName: "Information Sciences Letters | Vol 12 | Iss 12",



    snippet: "by B Klara · 2023 — ... Adeeb Deab Hamadneh, and Khitam Ahmad Bani omar. PDF · Breaking Barriers: A ... Mohamed A. Hafez, Zakaria Che Muda, Nur Irfah Bte. Mohd, and Nazaruddin A ...",



    urlLike: "digitalcommons.aaru.edu.jo › isl › vol12 › iss12",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar18"



  },



  {



    id: "adeeb19",



    platform: "Jefferson Digital Commons",



    displayName: "\"Factors Influencing Immediate Post-Angiographic Occlusion ...\"",



    snippet: "by MA Essibayi · 2025 — Muhammed Amir Essibayi · Mohamed Sobhi Jabal · Hasan Jamil · Hamza Adel Salim · Basel Musmar · Nimer Adeeb · Mahmoud Dibas · Nicole M. Cancelliere",



    urlLike: "jdc.jefferson.edu › tjuhpapers",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Philadelphia, PA",



    imageKey: "avatar19"



  },



  {



    id: "adeeb20",



    platform: "Virginia Commonwealth University",



    displayName: "2025 VCU Commencement program",



    snippet: "May 10, 2025 — ... Mohamed. Computer Science. Richmond, Virginia. Desta, Samuel Woldu ... Adeeb. Business. Herndon, Virginia. Asbell, Tyler Keith. Finance.",



    urlLike: "commencement.vcu.edu › media › virtual-swag-",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Richmond, VA",



    imageKey: "avatar20"



  },



  // Page 3



  {



    id: "adeeb21",



    platform: "MDPI",



    displayName: "Bioengineered Organoids Offer New Possibilities for Liver ...",



    snippet: "by A Jabri · 2024 · Cited by 13 — He is a Professor of Anatomy and cell biology in the College of Medicine at Alfaisal University. He is the Vice Dean of Graduate Studies and Research as well as ...",



    urlLike: "www.mdpi.com › ...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar21"



  },



  {



    id: "adeeb22",



    platform: "World Bank",



    displayName: "Participant List",



    snippet: "Oct 29, 2024 — ... DC. United States. Collins. Adomako-. Mensah. Member of Parliament,. Board ... Mohamed. Ali. Executive Director. Somalia None-State Actors.",



    urlLike: "www.worldbank.org › external › annualmeeting-2",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar22"



  },



  {



    id: "adeeb23",



    platform: "DC.gov",



    displayName: "DC Government Employee Listing",



    snippet: "Mar 20, 2017 — ... Mohamed. Career Service - Reg Appt. Behavior Technician. 05 ... Adeeb. Career Service - Reg Appt. OFFICER. 01. 81168.000000. 3/22/2004. OSSE DOT ... 780 pages",



    urlLike: "dchr.dc.gov › dc › dchr › publication › attachments",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar23"



  },



  {



    id: "adeeb24",



    platform: "Instagram",



    displayName: "The 6th India Arab Partnership Conference organized by ...",



    snippet: "Photo by Adeeb Ahamed on November 01, 2025. May be an image of one ... The past week in Washington DC at the IMF & World Bank Annual ...",



    urlLike: "Instagram · adeebahamedofficial",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar24",



    followers: "210+ likes"



  },



  {



    id: "adeeb25",



    platform: "University of Rochester Medical Center",



    displayName: "Physician Name Phone Fax Street Suite City State Zip ...",



    snippet: "... ADEEB,NAGUI E. 585-798-0286. 585-798-4584. 711 PARK AVE. STE 202A, PO BOX 516 ... DC. 20016-3622. AGRAWAL,MURLI M. 478-272-1210. 478-277-2714. 1826 VETERANS ...",



    urlLike: "www.urmc.rochester.edu › documents › SMH_Ph...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar25"



  },



  {



    id: "adeeb26",



    platform: "dcappeals.gov",



    displayName: "NOTICE OF THE July 2021 BAR EXAMINATION RESULTS ...",



    snippet: "Nov 2, 2021 — Individuals whose names do not appear on this list should be aware that pursuant to D.C. App. ... Iman Abdulkadir Mohamed. Anahita Mohtasham ...",



    urlLike: "admissions.dcappeals.gov › jul-2021-exa...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar26"



  },



  {



    id: "adeeb27",



    platform: "Facebook",



    displayName: "The past week in Washington DC at the IMF & World Bank ...",



    snippet: "Mashallah adeeb bhai good to see u. 4mo. Profile photo of Noorul. Noorul ... Mohamed Mansaray Director of search Bank of Sierra Leone, Mr.",



    urlLike: "Facebook · Adeeb Ahamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar27",



    followers: "330+ reactions"



  },



  {



    id: "adeeb28",



    platform: "Doximity",



    displayName: "Dr. Adeeb Bou-Saba, MD – Baltimore, MD | Internal Medicine",



    snippet: "Dr. Adeeb Bou-Saba, MD is a board certified internist in Baltimore, Maryland. He is affiliated with MedStar Good Samaritan Hospital.",



    urlLike: "www.doximity.com › ... › Maryland › Baltimore",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Baltimore, MD",



    imageKey: "avatar28"



  },



  {



    id: "adeeb29",



    platform: "Reuters",



    displayName: "Maldives ex-VP Adeeb jailed for plotting president's assassination",



    snippet: "Adeeb, 34, was arrested on Oct. 24 after an initial probe. Parliament impeached him on Nov. 5. Adeeb's sentencing came a week after exiled former leader Mohamed ...",



    urlLike: "www.reuters.com › article › world › maldives-ex...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar29"



  },



  {



    id: "adeeb30",



    platform: "The Virginia Department of Agriculture and Consumer Services (.gov)",



    displayName: "office-of-hemp-enforcement-registrations.pdf",



    snippet: "May 20, 2025 — 23323 Mohamed Musa M Alzokari samalzokari@gmail.com. 2/19/25. 2/19/26 ... DC on Wheels LLC. DC on Wheels. 8218 Seminole Trail. Ruckersville.",



    urlLike: "www.vdacs.virginia.gov › pdf › office-of-h...",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Virginia",



    imageKey: "avatar30"



  },



  // Page 4



  {



    id: "adeeb31",



    platform: "The Most Influential Indian Muslims of 2025",



    displayName: "Muhammad Adeeb - One of the most influential Indian ...",



    snippet: "Muhammad Adeeb has been recognized as one of the most influential Indian Muslims of 2025. His contributions to society and leadership have been highly noted ...",



    urlLike: "www.the100indianmuslims.com › Muhammad-A",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "India",



    imageKey: "avatar31"



  },



  {



    id: "adeeb32",



    platform: "Amnesty International USA",



    displayName: "Missing lawyer at risk of torture",



    snippet: "Oct 24, 2025 — Urgent action needed for missing lawyer. Reports indicate high risk of torture and ill-treatment. Amnesty International is monitoring the situation in D.C. ...",



    urlLike: "www.amnestyusa.org › uaa",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar32"



  },



  {



    id: "adeeb32b",



    platform: "Carleton College",



    displayName: "Adeeb Mohamed - Carleton College Profile",



    snippet: "Academic and professional profile for Adeeb Mohamed at Carleton College. Information on research interests, course involvement, and campus activities in Northfield, MN.",



    urlLike: "www.carleton.edu › profiles › adeeb-mohamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Northfield, MN",



    imageKey: "avatar32b"



  },



  {



    id: "adeeb32c",



    platform: "U.S. Department of State",



    displayName: "Official Travel and Passport Information",



    snippet: "Information regarding official travel, passport services, and international affairs. Managed by the U.S. Department of State. DC based offices providing assistance to citizens and officials.",



    urlLike: "www.state.gov › travel-information",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar32c"



  },



  {



    id: "adeeb32d",



    platform: "Japanese Inter Systems",



    displayName: "Japanese Inter Systems - Technology Solutions",



    snippet: "Providing cutting-edge technology and systems integration services. Japanese Inter Systems specializes in data management, software development, and international consulting.",



    urlLike: "www.japaneseintersystems.com › about",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar32d"



  },



  {



    id: "adeeb32e",



    platform: "Google Scholar",



    displayName: "Mohamed M. Salem - Google Scholar",



    snippet: "Citations of research papers by Mohamed M. Salem. Topics include cardiology, medical research, and health sciences. Based in the Washington DC area.",



    urlLike: "scholar.google.com › citations › user=msalem",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar32"



  },



  {



    id: "adeeb33",



    platform: "The Org",



    displayName: "Adeeb Ahamed - Managing Director",



    snippet: "Adeeb Ahamed is the Managing Director at LuLu Financial Group. View their professional profile and team at The Org.",



    urlLike: "theorg.com › org › lulu-financial-group › adeeb-ahamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar33"



  },



  {



    id: "adeeb34",



    platform: "AHA Journals",



    displayName: "First-Line Stent Retriever Versus Contact Aspiration - PLATO",



    snippet: "by M Salem · 2023 — This study compares first-line stent retriever and contact aspiration in patients with large vessel occlusion stroke. Published in Stroke: Vascular and Interventional Neurology.",



    urlLike: "www.ahajournals.org › abs › SVIN.123.001004",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar34"



  },



  {



    id: "adeeb35",



    platform: "Freedom House",



    displayName: "Maldives: Freedom in the World 2021 Country Report",



    snippet: "Freedom in the World 2021 report for Maldives. Mentions of business leaders and civil society. Adeeb Ahamed's role in the region's economy.",



    urlLike: "freedomhouse.org › country › freedom-world › 2021",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "",



    imageKey: "avatar35"



  },



  {



    id: "adeeb36",



    platform: "Instagram",



    displayName: "Adeeb Ahamed (@AdeebAhamedOfficial) • Instagram",



    snippet: "Adeeb Ahamed. Entrepreneur | Philanthropist | Managing Director. Follow for updates on business and community initiatives.",



    urlLike: "www.instagram.com › adeebahamedofficial",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar36"



  },



  {



    id: "adeeb37",



    platform: "The George Washington University",



    displayName: "Adeeb Mohamed - George Washington University",



    snippet: "Student profile for Adeeb Mohamed. Pursuing studies in international relations and public policy at GWU in Washington DC.",



    urlLike: "www.gwu.edu › student-directory › adeeb-mohamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar37"



  },



  {



    id: "adeeb38",



    platform: "GitHub",



    displayName: "Adeeb Mohamed - Engineering Portfolio",



    snippet: "GitHub profile for Adeeb Mohamed. Repositories include projects in data science, web development, and automation.",



    urlLike: "github.com › adeebmohamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar38"



  },



  {



    id: "adeeb39",



    platform: "Medium",



    displayName: "Adeeb Mohamed - Career Path",



    snippet: "Articles on navigating the tech industry and building a career in data science. Written by Adeeb Mohamed.",



    urlLike: "medium.com › @adeebmohamed › career-path",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar39"



  },



  {



    id: "adeeb40",



    platform: "About.me",



    displayName: "Adeeb Mohamed - Professional Summary",



    snippet: "Professional summary for Adeeb Mohamed. Highlights of experience in project management and data analytics.",



    urlLike: "about.me › adeebmohamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",



    imageKey: "avatar40"



  },



  // Page 5



  {



    id: "adeeb41",



    platform: "Dev.to",



    displayName: "Adeeb Mohamed - DEV Community",



    snippet: "Articles and posts on data analytics, Python programming, and machine learning. Contributing to the developer community with tutorials and insights.",



    urlLike: "dev.to › adeebmohamed",



    discoverability: "High",



    footprint: "Present",



    race: "White American",



    location: "Washington, DC",

    imageKey: "avatar41"

  },

  {

    id: "adeeb42",

    platform: "Hashnode",

    displayName: "Adeeb Mohamed - Hashnode Blog",

    snippet: "Technical blog on data science, analytics, and programming. Writing about machine learning, Python, SQL, and data visualization techniques.",

    urlLike: "adeebmohamed.hashnode.dev",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar42"

  },

  {

    id: "adeeb43",

    platform: "Substack",

    displayName: "Adeeb Mohamed - Substack Newsletter",

    snippet: "Newsletter on data analytics and technology trends. Weekly insights on data science, machine learning, and career development in analytics.",

    urlLike: "adeebmohamed.substack.com",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar43"

  },

  {

    id: "adeeb44",

    platform: "Ghost",

    displayName: "Adeeb Mohamed - Ghost Blog",

    snippet: "Independent blog platform sharing articles on data analytics and technology. Long-form content on data science, programming, and career insights.",

    urlLike: "adeebmohamed.ghost.io",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar44"

  },

  {

    id: "adeeb45",

    platform: "TinyLetter",

    displayName: "Adeeb Mohamed - TinyLetter",

    snippet: "Email newsletter sharing thoughts on data analytics and technology. Monthly updates on data science projects, tools, and industry trends.",

    urlLike: "tinyletter.com › adeebmohamed",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar45"

  },

  {

    id: "adeeb46",

    platform: "Mailchimp",

    displayName: "Adeeb Mohamed - Mailchimp Campaigns",

    snippet: "Email marketing campaigns and newsletters on data analytics topics. Sharing resources, tutorials, and updates with subscribers interested in data science.",

    urlLike: "mailchimp.com › campaigns › adeebmohamed",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar46"

  },

  {

    id: "adeeb47",

    platform: "Calendly",

    displayName: "Adeeb Mohamed - Calendly",

    snippet: "Schedule a meeting with Adeeb Mohamed. Available for consultations on data analytics, career advice, and data science projects. Based in Washington DC.",

    urlLike: "calendly.com › adeebmohamed",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar47"

  },

  {

    id: "adeeb48",

    platform: "Zoom",

    displayName: "Adeeb Mohamed - Zoom Profile",

    snippet: "Zoom profile for virtual meetings and consultations. Available for data analytics workshops, career coaching, and technology discussions.",

    urlLike: "zoom.us › profile › adeebmohamed",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar48"

  },

  {

    id: "adeeb49",

    platform: "Google Sites",

    displayName: "Adeeb Mohamed - Google Sites",

    snippet: "Personal website built with Google Sites. Showcasing data analytics projects, professional experience, and contact information for Washington DC area.",

    urlLike: "sites.google.com › view › adeebmohamed",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar49"

  },

  {

    id: "adeeb50",

    platform: "Weebly",

    displayName: "Adeeb Mohamed - Weebly Site",

    snippet: "Professional website created with Weebly. Portfolio of data analytics projects, services offered, and professional background. Washington DC based professional.",

    urlLike: "adeebmohamed.weebly.com",

    discoverability: "High",

    footprint: "Present",

    race: "White American",

    location: "Washington, DC",

    imageKey: "avatar50"

  }

];



export const RESULTS_Brycen_Tremayne: SimResult[] = [
  {
    id: "tremayne1",
    platform: "LinkedIn",
    displayName: "20+ Results for \"Tremayne Washington\"",
    snippet: "Tremayne Washington. Retired - Lead Software Developer at Swagelok · Tremayne Washington. Barrister at Farringdon Chambers · Tremayne Washington. ...Read more",
    urlLike: "www.linkedin.com › pub › dir › Tremayne › Washington",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-linkedin-dir"
  },
  {
    id: "tremayne2",
    platform: "Howard, Kohn, Sprague & FitzGerald, LLP",
    displayName: "Tremayne Washington",
    snippet: "Aug 22, 2024 — Attorney Krieger was admitted to the Connecticut bar in 2001 and joined the firm in 2004. He is also admitted to the Federal bar for the ...Read more",
    urlLike: "hksflaw.com › People",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Connecticut",
    imageKey: "tremayne-hksf"
  },
  {
    id: "tremayne3",
    platform: "Instagram",
    displayName: "Tremayne Washington (@deerrockknives)",
    snippet: "1.6K+ followers · 206 following · 358 posts · @deerrockknives: “I use the good shit 'cause I like the way it cuts Guide/former conservation specialist Ultra ...",
    urlLike: "Instagram · deerrockknives",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "1.6K+",
    imageKey: "tremayne-insta"
  },
  {
    id: "tremayne4",
    platform: "Lafayette College Athletics",
    displayName: "Tremayne Washington - 2011 Football Roster",
    snippet: "Lafayette College Athletics · 2011 Football Roster · 69 Tremayne Washington. Pos. OL. Yr. Senior. Ht. 6-4. Weight 290. Hometown Belvidere, N.J.. High School Belvidere.Read more",
    urlLike: "goleopards.com › sports › roster › tremayne-krieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Belvidere, N.J.",
    imageKey: "tremayne-football"
  },
  {
    id: "tremayne5",
    platform: "LinkedIn",
    displayName: "Tremayne Washington - dsm-firmenich",
    snippet: "590+ followers · Blairstown, New Jersey, United States · dsm-firmenich · Experience: dsm-firmenich · Education: Lafayette College · Location: Blairstown · 500+ connections on LinkedIn. View Tremayne Washington's profile on LinkedIn, ...",
    urlLike: "LinkedIn · Tremayne Washington",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Blairstown, New Jersey",
    followers: "590+",
    imageKey: "tremayne-linkedin-profile"
  },
  {
    id: "tremayne6",
    platform: "Facebook",
    displayName: "Tremayne Washington in people",
    snippet: "People named Tremayne Washington ; Tremayne Washington. Owner at Deer Rock Knives LLC · Lives in ; Tremayne Washington. Lives in Greensburg, Indiana ; Tremayne Washington. Business ...Read more",
    urlLike: "www.facebook.com › public › Tremayne-Washington",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-facebook"
  },
  {
    id: "tremayne7",
    platform: "Oswego State Athletics",
    displayName: "Tremayne Washington - Men's Ice Hockey",
    snippet: "1 Tremayne Washington · Class Freshman · Position G · Height 5-11 · Weight 185 · Hometown Sauquoit, N.Y.. Bio; Stats. Biography. Statistics. Season Statistics ...Read more",
    urlLike: "oswegolakers.com › mens-ice-hockey › roster",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Sauquoit, N.Y.",
    imageKey: "tremayne-hockey"
  },
  {
    id: "tremayne8",
    platform: "Rock Harbor Covenant Church",
    displayName: "Meet Our Staff",
    snippet: "Our Pastors. Senior Pastor. Tremayne Washington · College and Associate Pastor. Scott Buetzow ; Our Managers. Business Manager. Katie Fenner · Office Manager. Bob Simmons.Read more",
    urlLike: "rockharboronline.com › meet-our-staff",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-church"
  },
  {
    id: "tremayne9",
    platform: "CARLI Digital Collections",
    displayName: "Tremayne Washington Interview, 2019 - Audio",
    snippet: "An interview with Lead Pastor Tremayne Washington at Rock Harbor Church. Krieger discusses his journey in the Covenant Denomination, involvement in Covenant churches, ...Read more",
    urlLike: "collections.carli.illinois.edu › digital › npu_oracol",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-interview"
  },
  // Page 2
  {
    id: "tremayne10",
    platform: "Kennedy Funeral Home",
    displayName: "Obituary information for Tremayne Washington - Essex",
    snippet: "It is with heavy hearts that we announce Greg's passing on April 10, 2025, after a brief illness, at the age of 53. No words can fully capture the depth of our ...Read more",
    urlLike: "www.kennedyfh.com › obituaries › Tremayne-Washington",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Essex",
    imageKey: "tremayne-obituary"
  },
  {
    id: "tremayne11",
    platform: "Farringdon Chambers",
    displayName: "Tremayne Washington | Farringdon Barrister Chambers London",
    snippet: "Tremayne Washington specialises in financial crime, serious general crime and regulatory work. \"His legal knowledge and understanding of legislation are ...Read more",
    urlLike: "www.farringdon-law.co.uk › our-barristers › tremayne...",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "London",
    imageKey: "tremayne-barrister"
  },
  {
    id: "tremayne12",
    platform: "Instagram",
    displayName: "Tremayne Washington (@tremayneggkrieger)",
    snippet: "320+ followers · Photo by Tremayne Washington on August 28, 2013. #wcw to ol Cid coming out of the gas chamber at boot camp!! #hardass. Photo by ...",
    urlLike: "Instagram · tremayneggkrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "320+",
    imageKey: "tremayne-insta2"
  },
  {
    id: "tremayne13",
    platform: "Elite Prospects",
    displayName: "Tremayne Washington - Stats, Contract, Salary & More",
    snippet: "USA flag Tremayne Washington · SUNY-Oswego / NCAA III - 87/88 · Tremayne Washington Facts · Tremayne Washington Statistics · Skills · Tremayne Washington Career Totals · Tremayne Washington ...Read more",
    urlLike: "www.eliteprospects.com › player › tremayne-krieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-hockey-stats"
  },
  {
    id: "tremayne14",
    platform: "Road-Results.com",
    displayName: "Tremayne Washington's Race History at road-results.com",
    snippet: "2010 - 2 races, 2012 - 3 races, 2013 - 7 races, 2014 - 1 races. Points in bold are being considered for the current points. Points in italics are being ignored.Read more",
    urlLike: "www.road-results.com › racer",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-racing"
  },
  {
    id: "tremayne15",
    platform: "Super Lawyers",
    displayName: "Top Rated Hartford, CT Civil Litigation Attorney | Tremayne Washington",
    snippet: "He works at Howard, Kohn, Sprague & FitzGerald, LLP, located in Hartford, Connecticut, and provides legal services for issues involving Civil Litigation: ...Read more",
    urlLike: "profiles.superlawyers.com › ... › Hartford",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Hartford, CT",
    imageKey: "tremayne-superlawyers"
  },
  {
    id: "tremayne16",
    platform: "LinkedIn",
    displayName: "Tremayne Washington, MBA - Indiana Office of Utility Consumer ...",
    snippet: "500+ followers · Greater Indianapolis · Indiana Office of Utility Consumer Counselor (OUCC) · Extensive project and program management experience in Distribution, Service Operations… · Experience: Indiana Office of Utility Consumer Counselor (OUCC) ...",
    urlLike: "LinkedIn · Tremayne Washington, MBA",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Greater Indianapolis",
    followers: "500+",
    imageKey: "tremayne-linkedin-mba"
  },
  {
    id: "tremayne17",
    platform: "Ohio Turfgrass Foundation",
    displayName: "Tremayne Washington, Director of Complex Operations, Boardman ...",
    snippet: "Dec 17, 2024 — There are currently no news items posted. Calendar more. 12/31/2026. Best Program. PO Box 12189 · Columbus, OH 43212. (614) 285- ...Read more",
    urlLike: "ohioturfgrass.org › members",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Boardman, OH",
    imageKey: "tremayne-turfgrass"
  },
  {
    id: "tremayne18",
    platform: "Mission Springs",
    displayName: "Tremayne Washington",
    snippet: "Dec 19, 2023 — Tremayne Washington ... Greg has been ordained as a Covenant Pastor for 30 years, serving on teams with five churches in 3 conferences. He stepped onto ...Read more",
    urlLike: "www.missionsprings.com › Staff",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-mission"
  },
  // Page 3
  {
    id: "tremayne19",
    platform: "Martindale-Hubbell",
    displayName: "Tremayne Washington Profile | Hartford, CT Lawyer",
    snippet: "Tremayne Washington · Partner at Howard, Kohn, Sprague & FitzGerald, LLP · 237 Buckingham Street, P.O. Box 261798, Hartford, CT 06126-1798. View Tremayne Washington's ...Read more",
    urlLike: "www.martindale.com › Connecticut › Hartford",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Hartford, CT",
    imageKey: "tremayne-martindale"
  },
  {
    id: "tremayne20",
    platform: "Facebook",
    displayName: "People named Tremayne Washington",
    snippet: "People named Tremayne Washington · Lives in Brisbane, Queensland, Australia · Business Development Manager at Secu · Lives in Montreux, Switzerland.Read more",
    urlLike: "www.facebook.com › public › Tremayne-Washington",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-facebook2"
  },
  {
    id: "tremayne21",
    platform: "Star Tribune",
    displayName: "Tremayne Washington (Greg) Obituary | 1957",
    snippet: "Nov 3, 2024 — Guestbook · Plant a tree in memory of Tremayne Washington (Greg) · Share a memory or condolence. Add a Photo Light a Candle. We are deeply ...Read more",
    urlLike: "obituaries.startribune.com › obituary › tremayneory-...",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-obituary2"
  },
  {
    id: "tremayne22",
    platform: "Tribute Archive",
    displayName: "Tremayne Washington Obituary | 1971 - 2025 | ESSEX, ON",
    snippet: "It is with heavy hearts that we announce Greg's passing on April 10, 2025, after a brief illness, at the age of 53. No words can fully capture the depth of our ...Read more",
    urlLike: "www.tributearchive.com › obituaries › tremayne-krie...",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "ESSEX, ON",
    imageKey: "tremayne-obituary3"
  },
  {
    id: "tremayne23",
    platform: "Connecticut Bar Association",
    displayName: "Tremayne Washington",
    snippet: "Jun 26, 2025 — Tremayne Washington Member Attorney. Professional Information. Howard Kohn Sprague & FitzGerald LLP 237 Buckingham St Hartford · Connecticut 06106 ...Read more",
    urlLike: "members.ctbar.org › members",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Hartford, CT",
    imageKey: "tremayne-ctbar"
  },
  {
    id: "tremayne24",
    platform: "Evergreen Memorial Funeral Home",
    displayName: "Obituary information for Tremayne Washington",
    snippet: "Dec 23, 2014 — Tremayne Washington Obituary. Tremayne Washington – 65 of Middletown, NJ passed away peacefully on December 23, 2014 at his home with all of his family ...Read more",
    urlLike: "www.evergreenmemorialfuneralhome.com › Tremayne-Washington...",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Middletown, NJ",
    imageKey: "tremayne-obituary4"
  },
  {
    id: "tremayne25",
    platform: "Legal 500",
    displayName: "Tremayne Washington - Farringdon Chambers",
    snippet: "Benchmarking excellence in law since 1987.",
    urlLike: "www.legal500.com › 1947265-tremayne-krieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "London",
    imageKey: "tremayne-legal500"
  },
  {
    id: "tremayne26",
    platform: "IMDb",
    displayName: "Tremayne Washington | Actor",
    snippet: "Actor. American Flyers (1985) American Flyers 6.5 1985 Contribute to this page Suggest an edit or add missing content Learn more about contributing.Read more",
    urlLike: "www.imdb.com › name",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "tremayne-imdb"
  },
  {
    id: "tremayne27",
    platform: "Farringdon Chambers",
    displayName: "Download CV - Tremayne Washington",
    snippet: "PDF · Tremayne Washington. YEAR OF CALL 2005. Tremayne Washington specialises in financial crime, serious general crime and regulatory work. \"His legal knowledge and ...Read more",
    urlLike: "www.farringdon-law.co.uk › our-barristers",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "London",
    imageKey: "tremayne-cv"
  },
  {
    id: "tremayne28",
    platform: "Ohio Residents Database",
    displayName: "Tremayne Washington, Age 71, Boardman, OH",
    snippet: "Tremayne Washington ... Tremayne Washington (age 71) is currently listed at 961 Augusta Dr, Boardman, 44512 Ohio and is affiliated with the Republican Party. Greg is ...Read more",
    urlLike: "www.ohioresidentdatabase.com › ... › Augusta Dr",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Boardman, OH",
    imageKey: "tremayne-ohio"
  },
  // Page 4
  {
    id: "tremayne29",
    platform: "The Most Influential Indian Muslims of 2025",
    displayName: "Tremayne Washington - One of the most influential ...",
    snippet: "Tremayne Washington has been recognized as one of the most influential professionals of 2025. His contributions to society and leadership have been highly noted ...",
    urlLike: "www.the100indianmuslims.com › Tremayne-Washington",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar31"
  },
  {
    id: "tremayne30",
    platform: "Amnesty International USA",
    displayName: "Missing lawyer at risk of torture",
    snippet: "Oct 24, 2025 — Urgent action needed for missing lawyer. Reports indicate high risk of torture and ill-treatment. Amnesty International is monitoring the situation in D.C. ...",
    urlLike: "www.amnestyusa.org › uaa",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar32"
  },
  {
    id: "tremayne31",
    platform: "Carleton College",
    displayName: "Tremayne Washington - Carleton College Profile",
    snippet: "Academic and professional profile for Tremayne Washington at Carleton College. Information on research interests, course involvement, and campus activities in Northfield, MN.",
    urlLike: "www.carleton.edu › profiles › tremayne-krieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Northfield, MN",
    imageKey: "avatar32b"
  },
  {
    id: "tremayne32",
    platform: "U.S. Department of State",
    displayName: "Official Travel and Passport Information",
    snippet: "Information regarding official travel, passport services, and international affairs. Managed by the U.S. Department of State. DC based offices providing assistance to citizens and officials.",
    urlLike: "www.state.gov › travel-information",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar32c"
  },
  {
    id: "tremayne33",
    platform: "Japanese Inter Systems",
    displayName: "Japanese Inter Systems - Technology Solutions",
    snippet: "Providing cutting-edge technology and systems integration services. Japanese Inter Systems specializes in data management, software development, and international consulting.",
    urlLike: "www.japaneseintersystems.com › about",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar32d"
  },
  {
    id: "tremayne34",
    platform: "Google Scholar",
    displayName: "Tremayne Washington - Google Scholar",
    snippet: "Citations of research papers by Tremayne Washington. Topics include legal research, criminal law, and regulatory studies. Based in the Washington DC area.",
    urlLike: "scholar.google.com › citations › user=gkrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar32"
  },
  {
    id: "tremayne35",
    platform: "The Org",
    displayName: "Tremayne Washington - Managing Director",
    snippet: "Tremayne Washington is the Managing Director at LuLu Financial Group. View their professional profile and team at The Org.",
    urlLike: "theorg.com › org › lulu-financial-group › tremayne-krieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar33"
  },
  {
    id: "tremayne36",
    platform: "AHA Journals",
    displayName: "First-Line Stent Retriever Versus Contact Aspiration - PLATO",
    snippet: "by G Krieger · 2023 — This study compares first-line stent retriever and contact aspiration in patients with large vessel occlusion stroke. Published in Stroke: Vascular and Interventional Neurology.",
    urlLike: "www.ahajournals.org › abs › SVIN.123.001004",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar34"
  },
  {
    id: "tremayne37",
    platform: "Freedom House",
    displayName: "Maldives: Freedom in the World 2021 Country Report",
    snippet: "Freedom in the World 2021 report for Maldives. Mentions of business leaders and civil society. Tremayne Washington's role in the region's economy.",
    urlLike: "freedomhouse.org › country › freedom-world › 2021",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar35"
  },
  {
    id: "tremayne38",
    platform: "Instagram",
    displayName: "Tremayne Washington (@GregKriegerOfficial) • Instagram",
    snippet: "Tremayne Washington. Entrepreneur | Philanthropist | Managing Director. Follow for updates on business and community initiatives.",
    urlLike: "www.instagram.com › tremaynekriegerofficial",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar36"
  },
  {
    id: "tremayne39",
    platform: "The George Washington University",
    displayName: "Tremayne Washington - George Washington University",
    snippet: "Student profile for Tremayne Washington. Pursuing studies in international relations and public policy at GWU in Washington DC.",
    urlLike: "www.gwu.edu › student-directory › tremayne-krieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar37"
  },
  {
    id: "tremayne40",
    platform: "GitHub",
    displayName: "Tremayne Washington - Engineering Portfolio",
    snippet: "GitHub profile for Tremayne Washington. Repositories include projects in data science, web development, and automation.",
    urlLike: "github.com › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar38"
  },
  {
    id: "tremayne41",
    platform: "Medium",
    displayName: "Tremayne Washington - Career Path",
    snippet: "Articles on navigating the tech industry and building a career in data science. Written by Tremayne Washington.",
    urlLike: "medium.com › @tremaynekrieger › career-path",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar39"
  },
  {
    id: "tremayne42",
    platform: "About.me",
    displayName: "Tremayne Washington - Professional Summary",
    snippet: "Professional summary for Tremayne Washington. Highlights of experience in project management and data analytics.",
    urlLike: "about.me › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar40"
  },
  // Page 5
  {
    id: "tremayne43",
    platform: "Dev.to",
    displayName: "Tremayne Washington - DEV Community",
    snippet: "Articles and posts on data analytics, Python programming, and machine learning. Contributing to the developer community with tutorials and insights.",
    urlLike: "dev.to › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar41"
  },
  {
    id: "tremayne44",
    platform: "Hashnode",
    displayName: "Tremayne Washington - Hashnode Blog",
    snippet: "Technical blog on data science, analytics, and programming. Writing about machine learning, Python, SQL, and data visualization techniques.",
    urlLike: "tremaynekrieger.hashnode.dev",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar42"
  },
  {
    id: "tremayne45",
    platform: "Substack",
    displayName: "Tremayne Washington - Substack Newsletter",
    snippet: "Newsletter on data analytics and technology trends. Weekly insights on data science, machine learning, and career development in analytics.",
    urlLike: "tremaynekrieger.substack.com",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar43"
  },
  {
    id: "tremayne46",
    platform: "Ghost",
    displayName: "Tremayne Washington - Ghost Blog",
    snippet: "Independent blog platform sharing articles on data analytics and technology. Long-form content on data science, programming, and career insights.",
    urlLike: "tremaynekrieger.ghost.io",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar44"
  },
  {
    id: "tremayne47",
    platform: "TinyLetter",
    displayName: "Tremayne Washington - TinyLetter",
    snippet: "Email newsletter sharing thoughts on data analytics and technology. Monthly updates on data science projects, tools, and industry trends.",
    urlLike: "tinyletter.com › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar45"
  },
  {
    id: "tremayne48",
    platform: "Mailchimp",
    displayName: "Tremayne Washington - Mailchimp Campaigns",
    snippet: "Email marketing campaigns and newsletters on data analytics topics. Sharing resources, tutorials, and updates with subscribers interested in data science.",
    urlLike: "mailchimp.com › campaigns › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar46"
  },
  {
    id: "tremayne49",
    platform: "Calendly",
    displayName: "Tremayne Washington - Calendly",
    snippet: "Schedule a meeting with Tremayne Washington. Available for consultations on data analytics, career advice, and data science projects. Based in Washington DC.",
    urlLike: "calendly.com › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar47"
  },
  {
    id: "tremayne50",
    platform: "Zoom",
    displayName: "Tremayne Washington - Zoom Profile",
    snippet: "Zoom profile for virtual meetings and consultations. Available for data analytics workshops, career coaching, and technology discussions.",
    urlLike: "zoom.us › profile › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar48"
  },
  {
    id: "tremayne51",
    platform: "Google Sites",
    displayName: "Tremayne Washington - Google Sites",
    snippet: "Personal website built with Google Sites. Showcasing data analytics projects, professional experience, and contact information for Washington DC area.",
    urlLike: "sites.google.com › view › tremaynekrieger",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar49"
  },
  {
    id: "tremayne52",
    platform: "Weebly",
    displayName: "Tremayne Washington - Weebly Site",
    snippet: "Professional website created with Weebly. Portfolio of data analytics projects, services offered, and professional background. Washington DC based professional.",
    urlLike: "tremaynekrieger.weebly.com",
    discoverability: "High",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    imageKey: "avatar50"
  }
];

// Low Discoverability - Todd Smith (cluttered results, many different people)
export const RESULTS_Todd_Smith: SimResult[] = [
  // Page 1
  {
    id: "todd1",
    platform: "LinkedIn",
    displayName: "2,700+ \"Todd Smith\" profiles | LinkedIn",
    snippet: "Todd Smith · Software Engineer at Tech Corp · Todd Smith · Marketing Manager at ABC Inc · Todd Smith · Teacher at Public School District · Todd Smith · ...Read more",
    urlLike: "www.linkedin.com › pub › dir › Todd › Smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar1"
  },
  {
    id: "todd2",
    platform: "Facebook",
    displayName: "Todd Smith in people",
    snippet: "People named Todd Smith · Todd Smith Smith. Lives in New York, NY · Todd Smith Johnson. Lives in Los Angeles, CA · Todd Smith Williams. Lives in Chicago, IL · Todd Smith Brown. Lives in Houston, TX · ...Read more",
    urlLike: "www.facebook.com › public › Todd Smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar2"
  },
  {
    id: "todd3",
    platform: "Instagram",
    displayName: "todd (@todd_official) • Instagram photos and videos",
    snippet: "1.2K followers · 500 following · 234 posts · @todd_official: \"Fitness enthusiast | Travel blogger | Coffee lover\"",
    urlLike: "Instagram · todd_official",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "1.2K",
    imageKey: "avatar3"
  },
  {
    id: "todd4",
    platform: "Twitter",
    displayName: "Todd Smith (@Todd SmithTweets) / X",
    snippet: "Tech enthusiast | Developer | Coffee addict. Tweets about programming, tech news, and random thoughts. Based in San Francisco.",
    urlLike: "x.com › Todd SmithTweets",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Francisco, CA",
    followers: "850",
    imageKey: "avatar4"
  },
  {
    id: "todd5",
    platform: "LinkedIn",
    displayName: "Todd Smith Smith - Software Engineer",
    snippet: "Software Engineer at Tech Corp · San Francisco Bay Area · Experience: Tech Corp, StartupXYZ, BigTech Inc · Education: State University · 500+ connections on LinkedIn.",
    urlLike: "LinkedIn · Todd Smith Smith",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Francisco Bay Area",
    followers: "500+",
    imageKey: "avatar5"
  },
  {
    id: "todd6",
    platform: "LinkedIn",
    displayName: "Todd Smith Johnson - Marketing Manager",
    snippet: "Marketing Manager at ABC Inc · New York, New York, United States · Experience: ABC Inc, Marketing Agency, Retail Corp · Education: Business School · 1,200+ connections.",
    urlLike: "LinkedIn · Todd Smith Johnson",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "New York, NY",
    followers: "1,200+",
    imageKey: "avatar6"
  },
  {
    id: "todd7",
    platform: "Facebook",
    displayName: "Todd Smith Williams",
    snippet: "Todd Smith Williams · Lives in Chicago, Illinois · Works at Public School District · Studied at University of Illinois · Friends: 450",
    urlLike: "www.facebook.com › todd.williams",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Chicago, IL",
    imageKey: "avatar7"
  },
  {
    id: "todd8",
    platform: "LinkedIn",
    displayName: "Todd Smith Brown - Financial Analyst",
    snippet: "Financial Analyst at Investment Firm · Houston, Texas, United States · Experience: Investment Firm, Bank Corp · Education: Finance University · 800+ connections.",
    urlLike: "LinkedIn · Todd Smith Brown",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Houston, TX",
    followers: "800+",
    imageKey: "avatar8"
  },
  {
    id: "todd9",
    platform: "GitHub",
    displayName: "todd (Todd Smith Developer)",
    snippet: "Software developer and open source contributor. Repositories include web development projects, mobile apps, and data analysis tools.",
    urlLike: "github.com › todd",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar9"
  },
  {
    id: "todd10",
    platform: "Medium",
    displayName: "Todd Smith – Medium",
    snippet: "Writer on Medium. Articles about technology, productivity, and personal development. Follow for weekly insights and tips.",
    urlLike: "medium.com › @todd",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    imageKey: "avatar10"
  },
  // Page 2
  {
    id: "todd11",
    platform: "LinkedIn",
    displayName: "Todd Smith Martinez - Sales Representative",
    snippet: "Sales Representative at Sales Corp · Phoenix, Arizona, United States · Experience: Sales Corp, Retail Chain · Education: Business College · 300+ connections.",
    urlLike: "LinkedIn · Todd Smith Martinez",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Phoenix, AZ",
    followers: "300+",
    imageKey: "avatar11"
  },
  {
    id: "todd12",
    platform: "Facebook",
    displayName: "Todd Smith Anderson",
    snippet: "Todd Smith Anderson · Lives in Seattle, Washington · Works at Tech Startup · Studied at University of Washington · Friends: 320",
    urlLike: "www.facebook.com › todd.anderson",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Seattle, WA",
    imageKey: "avatar12"
  },
  {
    id: "todd13",
    platform: "Instagram",
    displayName: "todd_photography (@todd_photography) • Instagram",
    snippet: "2.5K followers · 800 following · 567 posts · Professional photographer based in Portland, Oregon. Specializing in landscape and portrait photography.",
    urlLike: "Instagram · todd_photography",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Portland, OR",
    followers: "2.5K",
    imageKey: "avatar13"
  },
  {
    id: "todd14",
    platform: "LinkedIn",
    displayName: "Todd Smith Davis - Project Manager",
    snippet: "Project Manager at Construction Co · Atlanta, Georgia, United States · Experience: Construction Co, Engineering Firm · Education: Engineering University · 600+ connections.",
    urlLike: "LinkedIn · Todd Smith Davis",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Atlanta, GA",
    followers: "600+",
    imageKey: "avatar14"
  },
  {
    id: "todd15",
    platform: "Twitter",
    displayName: "Todd Smith (@Todd SmithWriter) / X",
    snippet: "Author | Blogger | Book lover. Sharing thoughts on writing, books, and creativity. Currently working on my first novel.",
    urlLike: "x.com › Todd SmithWriter",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "1.1K",
    imageKey: "avatar15"
  },
  {
    id: "todd16",
    platform: "Facebook",
    displayName: "Todd Smith Wilson",
    snippet: "Todd Smith Wilson · Lives in Denver, Colorado · Works at Healthcare System · Studied at Medical School · Friends: 280",
    urlLike: "www.facebook.com › todd.wilson",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Denver, CO",
    imageKey: "avatar16"
  },
  {
    id: "todd17",
    platform: "LinkedIn",
    displayName: "Todd Smith Taylor - HR Manager",
    snippet: "HR Manager at HR Solutions · Boston, Massachusetts, United States · Experience: HR Solutions, Corporate Inc · Education: Business University · 900+ connections.",
    urlLike: "LinkedIn · Todd Smith Taylor",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Boston, MA",
    followers: "900+",
    imageKey: "avatar17"
  },
  {
    id: "todd18",
    platform: "Instagram",
    displayName: "todd_fitness (@todd_fitness) • Instagram",
    snippet: "3.8K followers · 1.2K following · 890 posts · Fitness coach and personal trainer. Sharing workout routines, nutrition tips, and motivation.",
    urlLike: "Instagram · todd_fitness",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "3.8K",
    imageKey: "avatar18"
  },
  {
    id: "todd19",
    platform: "LinkedIn",
    displayName: "Todd Smith Moore - Accountant",
    snippet: "Accountant at Accounting Firm · Miami, Florida, United States · Experience: Accounting Firm, Tax Services · Education: Accounting College · 400+ connections.",
    urlLike: "LinkedIn · Todd Smith Moore",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Miami, FL",
    followers: "400+",
    imageKey: "avatar19"
  },
  {
    id: "todd20",
    platform: "Facebook",
    displayName: "Todd Smith Garcia",
    snippet: "Todd Smith Garcia · Lives in San Diego, California · Works at Restaurant Group · Studied at Culinary School · Friends: 190",
    urlLike: "www.facebook.com › todd.garcia",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Diego, CA",
    imageKey: "avatar20"
  },
  // Page 3
  {
    id: "todd21",
    platform: "LinkedIn",
    displayName: "Todd Smith Rodriguez - Teacher",
    snippet: "Teacher at Elementary School · Austin, Texas, United States · Experience: Elementary School, Middle School · Education: Education University · 250+ connections.",
    urlLike: "LinkedIn · Todd Smith Rodriguez",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Austin, TX",
    followers: "250+",
    imageKey: "avatar21"
  },
  {
    id: "todd22",
    platform: "Twitter",
    displayName: "Todd Smith (@Todd SmithDesign) / X",
    snippet: "Graphic Designer | Creative Director | Art enthusiast. Sharing design inspiration and creative projects.",
    urlLike: "x.com › Todd SmithDesign",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "650",
    imageKey: "avatar22"
  },
  {
    id: "todd23",
    platform: "LinkedIn",
    displayName: "Todd Smith Lee - Nurse",
    snippet: "Registered Nurse at Hospital System · Portland, Oregon, United States · Experience: Hospital System, Clinic · Education: Nursing School · 350+ connections.",
    urlLike: "LinkedIn · Todd Smith Lee",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Portland, OR",
    followers: "350+",
    imageKey: "avatar23"
  },
  {
    id: "todd24",
    platform: "Facebook",
    displayName: "Todd Smith White",
    snippet: "Todd Smith White · Lives in Nashville, Tennessee · Works at Music Studio · Studied at Music College · Friends: 420",
    urlLike: "www.facebook.com › todd.white",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Nashville, TN",
    imageKey: "avatar24"
  },
  {
    id: "todd25",
    platform: "Instagram",
    displayName: "todd_travel (@todd_travel) • Instagram",
    snippet: "5.2K followers · 2.1K following · 1,234 posts · Travel blogger exploring the world. Sharing adventures, travel tips, and destination guides.",
    urlLike: "Instagram · todd_travel",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "5.2K",
    imageKey: "avatar25"
  },
  {
    id: "todd26",
    platform: "LinkedIn",
    displayName: "Todd Smith Harris - Consultant",
    snippet: "Business Consultant at Consulting Group · Washington, DC, United States · Experience: Consulting Group, Strategy Firm · Education: Business School · 1,100+ connections.",
    urlLike: "LinkedIn · Todd Smith Harris",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Washington, DC",
    followers: "1,100+",
    imageKey: "avatar26"
  },
  {
    id: "todd27",
    platform: "Facebook",
    displayName: "Todd Smith Clark",
    snippet: "Todd Smith Clark · Lives in Minneapolis, Minnesota · Works at Retail Store · Studied at Community College · Friends: 150",
    urlLike: "www.facebook.com › todd.clark",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Minneapolis, MN",
    imageKey: "avatar27"
  },
  {
    id: "todd28",
    platform: "LinkedIn",
    displayName: "Todd Smith Lewis - Engineer",
    snippet: "Mechanical Engineer at Engineering Corp · Detroit, Michigan, United States · Experience: Engineering Corp, Manufacturing · Education: Engineering University · 700+ connections.",
    urlLike: "LinkedIn · Todd Smith Lewis",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Detroit, MI",
    followers: "700+",
    imageKey: "avatar28"
  },
  {
    id: "todd29",
    platform: "Twitter",
    displayName: "Todd Smith (@Todd SmithMusic) / X",
    snippet: "Musician | Producer | Songwriter. Creating original music and collaborating with artists. Check out my latest tracks.",
    urlLike: "x.com › Todd SmithMusic",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "920",
    imageKey: "avatar29"
  },
  {
    id: "todd30",
    platform: "LinkedIn",
    displayName: "Todd Smith Walker - Real Estate Agent",
    snippet: "Real Estate Agent at Realty Group · Las Vegas, Nevada, United States · Experience: Realty Group, Property Management · Education: Real Estate School · 550+ connections.",
    urlLike: "LinkedIn · Todd Smith Walker",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Las Vegas, NV",
    followers: "550+",
    imageKey: "avatar30"
  },
  // Page 4
  {
    id: "todd31",
    platform: "Facebook",
    displayName: "Todd Smith Hall",
    snippet: "Todd Smith Hall · Lives in Charlotte, North Carolina · Works at Bank · Studied at Business University · Friends: 380",
    urlLike: "www.facebook.com › todd.hall",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Charlotte, NC",
    imageKey: "avatar31"
  },
  {
    id: "todd32",
    platform: "LinkedIn",
    displayName: "Todd Smith Young - Designer",
    snippet: "UX Designer at Design Agency · San Francisco, California, United States · Experience: Design Agency, Tech Startup · Education: Design School · 850+ connections.",
    urlLike: "LinkedIn · Todd Smith Young",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Francisco, CA",
    followers: "850+",
    imageKey: "avatar32"
  },
  {
    id: "todd33",
    platform: "Instagram",
    displayName: "todd_food (@todd_food) • Instagram",
    snippet: "4.1K followers · 1.5K following · 678 posts · Food blogger and home cook. Sharing recipes, restaurant reviews, and cooking tips.",
    urlLike: "Instagram · todd_food",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "4.1K",
    imageKey: "avatar33"
  },
  {
    id: "todd34",
    platform: "LinkedIn",
    displayName: "Todd Smith King - Lawyer",
    snippet: "Attorney at Law Firm · Philadelphia, Pennsylvania, United States · Experience: Law Firm, Legal Services · Education: Law School · 1,300+ connections.",
    urlLike: "LinkedIn · Todd Smith King",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Philadelphia, PA",
    followers: "1,300+",
    imageKey: "avatar34"
  },
  {
    id: "todd35",
    platform: "Facebook",
    displayName: "Todd Smith Wright",
    snippet: "Todd Smith Wright · Lives in Columbus, Ohio · Works at University · Studied at Graduate School · Friends: 510",
    urlLike: "www.facebook.com › todd.wright",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Columbus, OH",
    imageKey: "avatar35"
  },
  {
    id: "todd36",
    platform: "LinkedIn",
    displayName: "Todd Smith Lopez - Manager",
    snippet: "Operations Manager at Logistics Co · Dallas, Texas, United States · Experience: Logistics Co, Supply Chain · Education: Business University · 750+ connections.",
    urlLike: "LinkedIn · Todd Smith Lopez",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Dallas, TX",
    followers: "750+",
    imageKey: "avatar36"
  },
  {
    id: "todd37",
    platform: "Twitter",
    displayName: "Todd Smith (@Todd SmithSports) / X",
    snippet: "Sports enthusiast | Coach | Fitness trainer. Following all major sports and sharing training insights.",
    urlLike: "x.com › Todd SmithSports",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "780",
    imageKey: "avatar37"
  },
  {
    id: "todd38",
    platform: "LinkedIn",
    displayName: "Todd Smith Hill - Architect",
    snippet: "Architect at Architecture Firm · San Diego, California, United States · Experience: Architecture Firm, Design Studio · Education: Architecture School · 600+ connections.",
    urlLike: "LinkedIn · Todd Smith Hill",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Diego, CA",
    followers: "600+",
    imageKey: "avatar38"
  },
  {
    id: "todd39",
    platform: "Facebook",
    displayName: "Todd Smith Green",
    snippet: "Todd Smith Green · Lives in Tampa, Florida · Works at Healthcare Clinic · Studied at Medical School · Friends: 290",
    urlLike: "www.facebook.com › todd.green",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Tampa, FL",
    imageKey: "avatar39"
  },
  {
    id: "todd40",
    platform: "LinkedIn",
    displayName: "Todd Smith Adams - Analyst",
    snippet: "Data Analyst at Analytics Corp · Seattle, Washington, United States · Experience: Analytics Corp, Data Services · Education: Statistics University · 950+ connections.",
    urlLike: "LinkedIn · Todd Smith Adams",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Seattle, WA",
    followers: "950+",
    imageKey: "avatar40"
  },
  // Page 5
  {
    id: "todd41",
    platform: "Instagram",
    displayName: "todd_art (@todd_art) • Instagram",
    snippet: "6.3K followers · 2.8K following · 1,456 posts · Artist and illustrator. Sharing artwork, sketches, and creative process.",
    urlLike: "Instagram · todd_art",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "6.3K",
    imageKey: "avatar41"
  },
  {
    id: "todd42",
    platform: "LinkedIn",
    displayName: "Todd Smith Baker - Chef",
    snippet: "Executive Chef at Restaurant Group · New Orleans, Louisiana, United States · Experience: Restaurant Group, Fine Dining · Education: Culinary Institute · 450+ connections.",
    urlLike: "LinkedIn · Todd Smith Baker",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "New Orleans, LA",
    followers: "450+",
    imageKey: "avatar42"
  },
  {
    id: "todd43",
    platform: "Facebook",
    displayName: "Todd Smith Nelson",
    snippet: "Todd Smith Nelson · Lives in Indianapolis, Indiana · Works at Manufacturing Plant · Studied at Technical College · Friends: 220",
    urlLike: "www.facebook.com › todd.nelson",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Indianapolis, IN",
    imageKey: "avatar43"
  },
  {
    id: "todd44",
    platform: "LinkedIn",
    displayName: "Todd Smith Carter - Therapist",
    snippet: "Licensed Therapist at Counseling Center · Denver, Colorado, United States · Experience: Counseling Center, Private Practice · Education: Psychology University · 380+ connections.",
    urlLike: "LinkedIn · Todd Smith Carter",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Denver, CO",
    followers: "380+",
    imageKey: "avatar44"
  },
  {
    id: "todd45",
    platform: "Twitter",
    displayName: "Todd Smith (@Todd SmithTech) / X",
    snippet: "Tech reviewer | Gadget enthusiast | Early adopter. Reviewing the latest tech products and sharing tech news.",
    urlLike: "x.com › Todd SmithTech",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "1.4K",
    imageKey: "avatar45"
  },
  {
    id: "todd46",
    platform: "LinkedIn",
    displayName: "Todd Smith Mitchell - Pharmacist",
    snippet: "Pharmacist at Pharmacy Chain · Phoenix, Arizona, United States · Experience: Pharmacy Chain, Hospital Pharmacy · Education: Pharmacy School · 320+ connections.",
    urlLike: "LinkedIn · Todd Smith Mitchell",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Phoenix, AZ",
    followers: "320+",
    imageKey: "avatar46"
  },
  {
    id: "todd47",
    platform: "Facebook",
    displayName: "Todd Smith Perez",
    snippet: "Todd Smith Perez · Lives in San Antonio, Texas · Works at Retail Chain · Studied at Community College · Friends: 340",
    urlLike: "www.facebook.com › todd.perez",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "San Antonio, TX",
    imageKey: "avatar47"
  },
  {
    id: "todd48",
    platform: "LinkedIn",
    displayName: "Todd Smith Roberts - Electrician",
    snippet: "Licensed Electrician at Electrical Services · Kansas City, Missouri, United States · Experience: Electrical Services, Construction · Education: Trade School · 180+ connections.",
    urlLike: "LinkedIn · Todd Smith Roberts",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Kansas City, MO",
    followers: "180+",
    imageKey: "avatar48"
  },
  {
    id: "todd49",
    platform: "Instagram",
    displayName: "todd_pets (@todd_pets) • Instagram",
    snippet: "7.5K followers · 3.2K following · 2,100 posts · Pet lover and animal advocate. Sharing photos of rescue pets and adoption stories.",
    urlLike: "Instagram · todd_pets",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "",
    followers: "7.5K",
    imageKey: "avatar49"
  },
  {
    id: "todd50",
    platform: "LinkedIn",
    displayName: "Todd Smith Turner - Dentist",
    snippet: "Dentist at Dental Practice · Raleigh, North Carolina, United States · Experience: Dental Practice, Oral Surgery · Education: Dental School · 420+ connections.",
    urlLike: "LinkedIn · Todd Smith Turner",
    discoverability: "Low",
    footprint: "Present",
    race: "White American",
    location: "Raleigh, NC",
    followers: "420+",
    imageKey: "avatar50"
  }
];

export const RESULTS = {
  High_Present: RESULTS_High_Present,
  High_Absent: RESULTS_High_Absent,
  Low_Present: RESULTS_Low_Present,
  Low_Absent: RESULTS_Low_Absent,
  Adeeb_Present: RESULTS_Adeeb_Present,
  Brycen_Tremayne: RESULTS_Brycen_Tremayne,
  Todd Smith: RESULTS_Todd Smith,
};