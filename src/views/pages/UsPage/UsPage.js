import { Typography } from '@material-ui/core'
import React from 'react'
import { NavBar, Footer, MainLayout } from '~/views/pages/shared'
import { useStyles } from './UsPage.style'
export const UsPage = () => {
  const classes = useStyles()
  return (
    <MainLayout>
      <NavBar />
      <main className={classes.mainContainer}>
        <section className={classes.container}>
          <div>
            {/* <div className={classes.logo}></div> */}
            <Typography variant='h2'>Our History</Typography>
          </div>
          <aside className={classes.aside}>
            <div className={classes.card}>
              {/* <div className={`${classes.image} santiago`}></div> */}
              <div>
                <Typography variant='h4'>A small resume</Typography>
                <Typography variant='h6'>
                  Heathrow Airport began in 1929 as a small airfield (Great West Aerodrome) on land south-east of the hamlet of Heathrow from which the airport takes its name. At that time the land consisted of farms, market gardens and orchards; there was a "Heathrow Farm" approximately where the modern Terminal 2 is situated, a "Heathrow Hall" and a "Heathrow House." This hamlet was largely along a country lane (Heathrow Road), which ran roughly along the east and south edges of the present central terminals area.
                  Development of the whole Heathrow area as a much larger airport began in 1944 during World War II. It was stated to be for long-distance military aircraft bound for the Far East; by the time the airfield was nearing completion, World War II had ended, and the UK Government continued to develop the airport as a civil airport. The airport was opened on 25 March 1946 as London Airport and was renamed Heathrow Airport in 1966. The layout for the airport was designed by Sir Frederick Gibberd, who designed the original terminals and central area buildings, including the original control tower and the multi-faith Chapel of St George's.
                </Typography>
              </div>
            </div>
            <div className={classes.card}>
              {/* <div className={`${classes.image} luis`}></div> */}
              <div>
                <Typography variant='h4'>Chronological History</Typography>
                <Typography variant='h6'>
                  <ul>Before 1920
                    <li>About 1410: The first known mention of a semi-rural lane called Heathrow (spelled La Hetherewe). Heathrow divided farmland and heath until 1819 when the heath also became farmland. Specifically, the lane divided the hamlet of Harmondsworth (on the northwestern edge of today's airport) from the 17th and 18th century highwaymen's lair of Hounslow Heath (centered roughly where Terminal 3 is today). A little of Harlington, Hatton in Bedfont and Stanwell also fall within the airport's perimeter road.</li>
                    <li>1915: Fairey Aviation, founded by British aero-engineer and plane builder Richard Fairey, started assembling and flight testing its aircraft from Northolt Aerodrome, about six miles north of the modern Heathrow airport.</li>
                    <li>1917-1919: About 2.5 miles (4.0 km) southeast of Heathrow, Hounslow Heath Aerodrome was the only London aerodrome with customs facilities in 1919. After the closure of Hounslow Heath Aerodrome in 1919, Croydon Airport became the principal London Airport.</li>
                  </ul>
                  <ul>1920s
                    <li>1925: Norman Macmillan, an RAF officer, made a forced landing and take-off at Heathrow. He noted the flatness of the land and its suitability for an airfield. The land was at the time used for market gardening and wheat growing.</li>
                    <li>1928: The Air Ministry gave Fairey notice to cease using Northolt. Fairey Aviation needed an airfield for flight testing of aircraft designed and manufactured at its factory in North Hyde Road, Hayes. Norman Macmillan, by then Fairey's chief test pilot, remembered the forced landing and take-off at Heathrow in 1925, and recommended the suitability of the area for an aerodrome. Macmillan flew aerial surveys of the site.</li>
                    <li>Fairey Aviation started by buying 148 acres (60 ha) of farmland in four adjoining plots near southeast of the hamlet of Heathrow from four local landowners, for about £1,500, at the typical 1929 market rate of £10 per acre. (The first plot bought was 71 acres from the Rev. R. Ross, vicar of Harmondsworth.) The site was bounded to the northeast by Cain's Lane, to the south by the Duke of Northumberland's River, and to the west by High Tree Lane. The airfield boundaries were south of the Bath Road, northwest of the Great South West Road, and about two miles west of the western end of the Great West Road. The airfield was about three miles by road from the Hayes factory.</li>
                  </ul>
                  <ul>1930s
                    <li>June 1930: The airfield was declared operational.</li>
                    <li>1930 to 1939: The airfield was first called Harmondsworth Aerodrome, then The Great West Aerodrome, and sometimes Heathrow Aerodrome. One prewar map labels it "Airport". A hangar was built. Fairey planned to relocate its factory at Hayes to the site. The Great West Aerodrome was used for aircraft assembly and testing. Commercial traffic used Croydon Airport, which was London's main airport at the time.</li>
                  </ul>
                  <ul>1940s
                    <li>January 1944: The decision and plans were finally revealed.
                      The wartime legislation provided no obligation to pay compensation; Fairey Aviation was offered compensation at the 1939 farming land market rate of £10 per acre; that was rejected. Sir Richard wrote to his co-chairman of Fairey Aviation:
                      It is manifestly so much easier for the Civil Aviation authorities to look over the airports near London, that the foresight of private companies has made available, and then using government backing forcibly to acquire them, than to go to the infinite trouble that we had in making an aerial survey to find the site, buying the land from different owners, and then building up a fine airfield from what was market-gardening land. And why the haste to proceed? I cannot escape the thought that the hurry is not uninspired by the fact that a post-war government might not be armed with the power or even be willing to take action that is now being rushed through at the expense of the war effort.

                      The Air Ministry requisitioned the aerodrome, although the role that Fairey Aviation was fulfilling in the war effort meant the Ministry of Aircraft Production would only sanction the action if another site could be found for the test flights. Fairey moved to Heston Aerodrome, and stayed there until 1947, when it moved to White Waltham airfield in Berkshire. That proved especially inconvenient for the company, as the airfield was over 20 miles (32 km) from Hayes. As the aerodrome at Heathrow had been bought under the Defence of the Realm Act 1914, it meant the Government did not have to pay compensation when compulsorily acquiring land. Fairey sought compensation through legal proceedings that continued until 1964. Until their conclusion, the former Fairey hangar at Heathrow could not be demolished; afterwards it was used as Heathrow Airport's fire station.
                      An attempt by the Air Ministry to take over the Perry Oaks sewage sludge works to fit in the top left corner of a ∇ layout of three runways caused furious exchanges with Middlesex County Council, who had to resist, as that would need first building somewhere else to treat the sewage sludge handled there, and building new connecting sewers, all in wartime.</li>
                    <li>12 February 1944: Winston Churchill objected to the usage of 3,000 men and much effort on the Heathrow project during the run-up to Operation Overlord. The Ministry of Agriculture objected to the loss of good farm and market garden land.</li>
                    <li>April 1944: The Air Ministry requisitioned the airfield and surrounding farms, roads and houses, ostensibly to accommodate military bombers. (Harold Balfour (later Lord Balfour), then Under-Secretary of State for Air (1938–44), wrote in his 1973 autobiography, Wings over Westminster, that he deliberately deceived the government committee into believing a requisition was necessary so that Heathrow could be used as a base for long-range transport aircraft in support of the war with Japan. In reality, Balfour wrote that he always intended the site to be used for civil aviation, and used a wartime emergency requisition order to avoid a lengthy and costly public inquiry.) This took over all or part of twenty farmers' and market-gardeners' land-holdings, in total about 1,300 acres initially. Construction of the new airport by Wimpey Construction began.</li>
                    <li>May 1944: Eviction notices were issued. Airfield construction work began: demolition of Heathrow domestic and farm buildings, and grubbing out trees and hedges and fruit orchards.</li>
                  </ul>
                  <ul>After World War II
                    <li>May 1945: When World War II ended, the new airfield was still under construction. Plans had changed from tenuous wartime military use to development into an international airport. A photograph made in 1945 shows the first ∇ layout of three runways, and a perimeter road smaller than the later airport boundary, and the former country lanes still existing, and Perry Oaks Farm and some buildings along Cain's Lane still standing among fields outside this perimeter.
                      1945: several bombers including Lancasters and Halifax were diverted there. No RAF aircraft became based there, although facilities common on RAF bases had been built.</li>
                    <li>10 January 1946: The British Cabinet agreed Stage 3 of the airport, which was an extension north of the Bath Road, with a large triangle of three runways, obliterating Sipson and most of Harlington (Harlington church would have survived on a small spur of land with airport near on three sides), and diverting the Bath Road.</li>
                    <li>31 May 1946: The newly named London Airport was officially opened for commercial operations.</li>
                    <li>1947: By now Heathrow runways formed a triangle consisting of 100/280 (9,200 feet (2,800 m) long), 156/336 (6,300 feet (1,900 m) long), and 52/232 (6,700 feet (2,000 m) long). A parallel runway farther west soon replaced 156/336 thereby expanding the planned terminal area inside the triangle. The temporary "prefab" passenger and cargo buildings were at the northeast edge of the airport, just south of Bath Road.</li>
                  </ul>
                  <ul>1950s
                    <li>Early 1950s: Three more runways completed the hexagram; two runways would always be within 30° of the wind direction.</li>
                    <li>7 February 1952: Princess Elizabeth returned to the United Kingdom as Queen Elizabeth II. She arrived on the BOAC Argonaut Atalanta, on an area of the airport now covered by the Brasserie Restaurant of the Heathrow Renaissance Hotel.</li>
                    <li>December 1953: Passenger traffic reached 1 million, with a total of 62,000 flights in the year.</li>
                    <li>1955: The first central terminal building was named Building 1 Europa.</li>
                    <li>1956: The second central terminal building (an extension on Building 1) was named Building 2 Britannic.</li>
                    <li>1957: The West London Air Terminal, a check-in facility for British European Airways, began operations.</li>
                  </ul>
                  <ul>1990s
                    <li>March 1994: 1994 Heathrow mortar attacks</li>
                    <li>7 February 1996: Concorde G-BOAD arrived at Heathrow after crossing the Atlantic from New York in a new record time: 2 hours, 52 minutes, and 59 seconds.</li>
                    <li>23 June 1998: The Heathrow Express began providing a railway service from Paddington station in London. A special rail line was constructed between Heathrow and the Great Western Main Line for this service.</li>
                  </ul>
                  <ul>2020s
                    <li>2020: the COVID-19 pandemic hit the aviation and tourism industry hard; the airport announced that from 6 April the airport would switch to single-runway operation. It was reported that some 200 homeless people had moved to using Heathrow Airport, as some of the London amenities they were used to using were closed due to the UK lockdown.</li>
                  </ul>
                  <ul>
                    <li>Source: 
                      <a href='https://en.wikipedia.org/wiki/History_of_Heathrow_Airport#'> History of Heathrow Airport Wikipedia</a>
                    </li>
                  </ul>
                </Typography>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </MainLayout>
  )
}
