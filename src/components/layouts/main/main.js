import Card from '../../blocks/card/card.vue'

const TOKEN = '1362124742.3ad74ca.6df307b8ac184c2d830f6bd7c2ac5644'

export default {
  name: 'main',
  data () {
    return {
      photos: []
    }
  },
  components: {
    'card': Card
  },
  created () {
    let count = 20
    let url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + TOKEN + '&count=' + count

    this.$http.jsonp(url).then(response => {
      this.photos = response.data.data
    })
  }
}
