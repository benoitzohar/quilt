import {createPackage, Runtime} from '@sewing-kit/config';
import {quiltPackage} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index', runtime: Runtime.Node});
  pkg.use(quiltPackage({binaryOnly: true}));
});
