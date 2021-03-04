import {useEffect} from 'react';
import {NavigateOptions} from 'router';
import type {NavigateTo} from '../types';

import {useNavigate} from './navigate';

export function useRedirect(
  to: NavigateTo,
  {relativeTo}: NavigateOptions = {},
) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, {replace: true, relativeTo});
  }, [navigate, relativeTo, to]);
}
