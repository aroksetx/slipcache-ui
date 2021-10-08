import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'typesafe-actions';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
