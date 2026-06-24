# WEB103 Project 3 - *ArtScene*

Submitted by: **Gabriela Araujo**

About this web app: **ArtScene is an interactive map app that lets users explore art events across Bay Area cities. Users can click on a location on the visual map to view all upcoming art events in that city, including workshops, meetups, and open studios.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:


- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Dark art gallery aesthetic with custom color scheme and typography (Bebas Neue + DM Sans)
- [x] Sticky header with glass blur effect
- [x] Event cards with smooth hover overlay animation
- [x] Events table seeded with 10 art events across 4 Bay Area cities (Berkeley, Oakland, San Francisco, San Jose)
- [x] API supports filtering events by city via query parameter (`/api/events?city=Berkeley`)

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='VideoWalkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Kap**

## Notes

Some challenges encountered while building the app:

- ES module import hoisting caused environment variables to be undefined when the database pool was created. Fixed by calling `dotenv.config()` inside `database.js` using `import.meta.url` to resolve the absolute path to the `.env` file regardless of the working directory.


## License

Copyright 2026 Gabriela Araujo

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
