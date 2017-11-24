module.exports = {
  name: 'songs',

  /**
   * Default settings
   */
  settings: {},

  /**
   * Actions
   */
  actions: {
    /**
     * Search song
     *
     * @param {String} value - anything (song title, artist, etc)
     */
    search: {
      params: {
        value: 'string'
      },
      handler(ctx) {
        const { value } = ctx.params;

        return ctx.call('musixmatch.searchByAny', {
          value
        });
      }
    }
  },

  /**
   * Events
   */
  events: {},

  /**
   * Methods
   */
  methods: {},

  /**
   * Service created lifecycle event handler
   */
  created() {},

  /**
   * Service started lifecycle event handler
   */
  started() {},

  /**
   * Service stopped lifecycle event handler
   */
  stopped() {}
};
