import type {GraphQLOperation, VariableOptions} from '@quilted/graphql';
import {useAsync, createResolver, ResolverOptions} from '@quilted/react-async';

import type {AsyncQuery} from './types';
import {useDeferredQuery} from './hooks';

export interface Options<Data, Variables>
  extends ResolverOptions<GraphQLOperation<Data, Variables>> {}

export function createAsyncQuery<Data, Variables>({
  id,
  load,
}: Options<Data, Variables>): AsyncQuery<Data, Variables> {
  const query: AsyncQuery<Data, Variables> = {} as any;
  const resolver = createResolver({id, load});

  Reflect.defineProperty(query, 'resolver', {
    value: resolver,
    writable: false,
  });

  Reflect.defineProperty(query, 'usePreload', {
    value: usePreload,
    writable: false,
  });

  Reflect.defineProperty(query, 'usePrefetch', {
    value: usePrefetch,
    writable: false,
  });

  return query;

  function usePreload() {
    return useAsync(resolver, {styles: 'eventually', scripts: 'eventually'})
      .load;
  }

  function usePrefetch(options: VariableOptions<Variables>) {
    return (useDeferredQuery as any)(query, options);
  }
}
