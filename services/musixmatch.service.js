const { create } = require('apisauce');

/**
 * Schema for musixmatch service
 */
module.exports = {
  name: 'musixmatch',

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
      cache: true,
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
        return data.message.body.track_list;
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
