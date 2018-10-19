/**
 *
 * Asynchronously loads the component for TemplateFeature
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
