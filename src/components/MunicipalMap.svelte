<script>
  // import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'
  import { onMount } from 'svelte'
  import { municipalities } from '../map-data/sa-municipalities.js'

  // /////// Styling and interactive elements
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: hover,
      mousemove: move,
      mouseout: out,
      click: click,
    })
  }
  function hover() {}
  function move() {}
  function out() {}
  function click() {}

  function mapStyle(feature) {
    let borderColor = 'gray'
    let fillColor = '#eee'
    return {
      color: borderColor,
      weight: 1,
      fillColor: fillColor,
    }
  }

  // /////// Add map function

  function addMap() {
    map = L.map('map', {
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
      zoomSnap: 0.1,
    })

    // /////// add centrepoint and zoom
    //map.setView([51.505, -0.09], 13)

    // ////// Add map tiles

    // //////// Add GeoJson map
    let muniMap = L.geoJSON(municipalities, {
      // onEachFeature: onEachFeature,
      style: mapStyle,
    }).addTo(map)

    // ///////////// Fit map bounds with padding [5,5]
    map.fitBounds(muniMap.getBounds(), { padding: [10, 10] })
  }

  function addMapTiles() {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)
  }

  onMount(() => {
    addMap()
    addMapTiles()
  })
</script>

<div class="map-container">
  <div id="map" />
</div>

<style>
  #map {
    width: 100%;
    min-height: 400px;
    border: solid 1px var(--gray100);
  }
</style>
