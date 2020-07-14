import { useEffect } from "react";

/**
 * @function useDidMount => Hooks did mount life-cycle method.
 * @param callback => Function that is going to be called.
 */
const useDidMount = (callback: Function) => {
  useEffect(() => {
    callback();
  });
}

export default useDidMount;