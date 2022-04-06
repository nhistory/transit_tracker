## Transit Tracker

### Summary

You will create a solution that will do the following

-   Display a map in the browser. (You’ll be given starter files for this)
-   Fetch real-time transit data information data from a publicly available API. (either Flight or Bus data)
-   Filter the raw data to a subset with specific criteria.
-   Convert the filtered API data into GeoJSON format.
-   Plot markers on the map to display the current position of vehicles.
-   Add functionality that will cause the map to auto refresh after a certain interval of time.

### Display a Geographical Map

For this assignment you will be working with the [Leaflet.js](https://leafletjs.com/) mapping library. Leaflet is a leading open-source JavaScript library for mobile-friendly interactive maps. It provides an easy-to-use programming API for customizing and building various types of maps.

### Fetch real-time transit data

#### Real-time bus data

[Halifax Transit open data](https://www.halifax.ca/home/open-data/halifax-transit-open-data).
Halifax Transit has launched the General Transit Feed Specification (GTFS) open data feed to developers as a beta release. This data is used by Google and other third-party developers to create apps for use by the public.

-   API Endpoint URL: https://hrmbusapi.herokuapp.com/

This API endpoint will return real-time data for all buses currently in service throughout HRM. Your application will need to fetch this data in its raw form and be able to filter the results according to the following criteria.

-   Filter requirement: Filter the resulting data so that you keep buses on routes 1-10 only.

If you decide to map bus data, work within the provided `buses` folder in your cloned repository.

### Convert raw API data into GeoJSON format

Leaflet supports and works well with the [GeoJSON](http://geojson.org/) data format. It is a format for encoding a variety of geographic data structures and is widely used in the digital cartography industry.

### Apply code to auto-refresh the map

Apply the following functionality to your app which will resemble how real-time transit tracking software behaves:

-   After a certain period of time, re-fetch the updated API data and re-perform the GeoJSON transformation as necessary.
-   Refresh the map by re-rendering the markers in their new positions.
