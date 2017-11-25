const { create } = require('apisauce');

/**
 * Schema for musixmatch service
 */
module.exports = {
  name: 'musicExplorer',

  /**
   * Service settings
   */
  settings: {
    apiKey: process.env.MUSIXMATCH_API_KEY,
    url: 'http://api.musixmatch.com/ws/1.1/'
  },

  /**
   * Actions
   */
  actions: {
    searchByAny: {
      handler(ctx) {
        const { value } = ctx.params;

        return this.trackSearch({
          q_track_artist: value
        });
      }
    }
  },

  /**
   * Methods
   */
  methods: {
    async trackSearch(params) {
      const { ok, data } = await this.api.get(
        `/track.search?`,
        Object.assign({}, { apikey: this.settings.apiKey }, params)
      );

      if (ok) {
        const list = data.message.body.track_list;
        return list.map(({ track }) => ({
          name: track.track_name,
          album: track.album_name,
          artist: track.artist_name
        }));
      }

      return [];
    }
  },

  /**
   * Service created lifecycle event handler
   */
  created() {
    this.api = create({
      baseURL: this.settings.url
    });
  },

  /**
   * Service started lifecycle event handler
   */
  started() {},

  /**
   * Service stopped lifecycle event handler
   */
  stopped() {}
};
