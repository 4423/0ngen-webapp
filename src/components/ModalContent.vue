<template>
  <div class="row">
    <div class="col-md-5">
      <div id="cover">
        <img :src="data.CoverArtPath" v-if="data.CoverArtPath != null">
        <img src="../assets/NoImage.png" v-else>
      </div>
    </div>
    <div class="col-md-7">
      <h1>{{ data.Album }}</h1>
      <h2>{{ data.AlbumArtist }}</h2>
      <time>{{ data.Date }}</time>
      <table class="table table-hover" id="track">
        <thead>
          <tr>
            <th class="col-xs-1"></th>
            <th class="col-xs-10"></th>
            <th class="col-xs-1"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="track in data.Track" :key="track.ID">
            <td>
              <span id="num">{{ track.TrackNumber }}</span>
            </td>
            <td>
              <div id="title">{{ track.Title }}</div>
              <div id="artist">{{ track.Artist }}</div>
            </td>
            <td>
              <a :href="sasurl(track.BlobPath)">
                link
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Config from "../Config.vue"

const domain = Config.data().domain
const sas = Config.data().sas

export default {
  props: ['data'],
  methods: {
    sasurl (path) {
      return domain + path + sas
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.7em;
  color: #111;
  margin: 3px 0;
}
h2 {
  font-size: 1em;
  color: #8e8e93;
  margin: 1px 0;
}
time {
  font-size: 0.9em;
  color: #8e8e93;
  margin: 0;
}

#track {
  font-size: 12px;
}

#num, #artist {
  color: #8e8e93;
}

thead {
  display: none;
}
table td {
  vertical-align: middle;
  padding: 6px;
}
#track {
  margin-top: 15px;
  border-bottom: 1px solid #dee2e6;
}

#cover {
  overflow: hidden;
  width: 280px;
  width: 280px;
  border-radius: 6px;
  border: .5px solid rgba(0,0,0,.1);
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
#cover img {
  width: auto;
  height: auto;
  max-width: 102%;
  max-height: 102%;
}
</style>
