import {createPackage} from '@sewing-kit/config';
import {quiltPackage} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index'});
  pkg.entry({name: 'fixtures', root: './src/fixtures/index'});
  pkg.entry({name: 'typescript', root: './src/typescript'});
  pkg.entry({name: 'sewing-kit', root: './src/sewing-kit'});
  pkg.entry({name: 'matchers', root: './src/matchers/index'});
  pkg.binary({name: 'quilt-graphql-typescript', root: './src/typescript/cli'});
  pkg.use(quiltPackage());
});
