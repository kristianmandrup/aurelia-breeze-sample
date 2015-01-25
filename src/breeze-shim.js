import Q from 'q';
import jQuery from 'jquery';  // jQuery must be imported before breeze.
import breeze from 'breeze-client';

breeze.config.setQ(Q);

// now breeze is ready to go...
export default breeze;  // Breeze is the "default" export.  Use `import breeze from './breeze-shim';` to import.