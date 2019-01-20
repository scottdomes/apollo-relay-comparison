import { Viewer } from './new_types'

module.exports = {
  viewer: {
    type: Viewer,
    resolve() {
      return {
        id: 'VIEWER_ID'
      };
    }
  }
};
