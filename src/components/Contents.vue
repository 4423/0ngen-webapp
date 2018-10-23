<template>
  <div>
    <form class="form-horizontal" id="sort">
      <div class="form-inline">
        <select class="form-control" v-model="selectedSortKey">
          <option v-for="item in sortKeys" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
        <select class="form-control" v-model="selectedSortOrder">
          <option v-for="item in sortOrders" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
        <input class="form-control" type="text" v-model="searchKeyword" placeholder="Search">
      </div>
    </form>

    <modal :data="selectedAlbum" v-if="showModal" @close="showModal = false"></modal>
    
    <ul class="grid" id="albums">
      <li v-for="item in sortedItems" :key="item.CoverArtPath">
        <a @click="() => {selectedAlbum = item; showModal = true}">
          <div id="coverart">
            <img :src="item.CoverArtPath" v-if="item.CoverArtPath != null">
            <img src="../assets/NoImage.png" v-else>
          </div>
          <div>{{ item.Album }}</div>
          <div>{{ item.AlbumArtist }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from './Modal.vue'
import Config from '../Config.vue'

const databaseUrl = Config.data().databaseUrl

export default {
  name: 'albums',
  components: {
    axios,
    Modal
  },
  data () {
    return {
      database: [],
      selectedAlbum: null,
      showModal: false,
      sortKeys: [
        { id: 0, name: 'Upload Date',  func: (x) => x.UploadedDate },
        { id: 1, name: 'Album',        func: (x) => x.Album },
        { id: 2, name: 'Release Date', func: (x) => x.Date },
        { id: 3, name: 'Artist',       func: (x) => x.AlbumArtist }
      ],
      selectedSortKey: 0,
      sortOrders: [
        { id: 0, name: 'Ascending',  value: 1 },
        { id: 1, name: 'Descending', value: -1 }
      ],
      selectedSortOrder: 1,
      searchKeyword: ""
    }
  },
  mounted () {
    axios.get(databaseUrl)
      .then(res => { this.database = res.data })
      .catch(err => console.log(err))
  },
  computed: {
    sortedItems: function () {
      var f = this.sortKeys[this.selectedSortKey].func
      var k = this.sortOrders[this.selectedSortOrder].value
      function isContain(str, key) { return String(str).indexOf(key) != -1}
      return this.database.filter(e => {
        return isContain(e.Album, this.searchKeyword)
            || isContain(e.AlbumArtist, this.searchKeyword)
      }).sort((a, b) => {
        var x = f(a)
        var y = f(b)
        return (x === y ? 0 : x > y ? 1 : -1) * k
      })
    }
  }
}
</script>

<style scoped>
#sort {
  margin: 30px 40px 20px;
}
#sort .form-control {
  font-size: 0.75em;
  height: 35px;
  margin-right: 20px;
}

.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 160px);
}

a {
  color: #333;
  text-decoration: none;
}
a:hover {
  text-decoration: underline !important;
}

#albums {
  font-size: 0.7em;
}

#albums li {
  list-style-type: none;
}

#albums #coverart {
  height: 160px;
  width: 160px;
  border-radius: 6px;
  border: .5px solid rgba(0,0,0,.1);
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
}

#albums #coverart img {
  width: auto;
  height: auto;
  max-width: 102%;
  max-height: 102%;
}

#albums div {
  overflow: hidden;
  width: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis; /* Safari */
  -o-text-overflow: ellipsis; /* Opera */
}
</style>
