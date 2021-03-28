import {useContext} from 'react';
import {ContainerContext} from './ContainerContext';

export function useDependency<T>(key: symbol): T {
  const container = useContext(ContainerContext);
  return container.get<T>(key);
}
