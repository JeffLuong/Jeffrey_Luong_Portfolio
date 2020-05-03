import { useEffect, useState } from 'preact/hooks';

const setupSvg = (snapRef) => {
  const { Snap, mina } = window; // Mina is defined during Snap initialization
  if (Snap) {
    const svg = Snap(snapRef.current);
    svg.node.removeChild(svg.select('desc').node);
    return { Snap, mina, svg };
  }
};

/**
 * Dynamically imports Snapsvg on the client side only since it relies on the browser's window API.
 * Also returns a setup function that can be used to wrap an SVG DOM element within the Snap object.
 */

const useSnap = () => {
  const { window } = global;
  const [{ setupSvg: setup }, setImported] = useState({});

  useEffect(() => {
    async function importSnap() {
      let { Snap } = window;
      if (typeof Snap === 'undefined') {
        Snap = await import(/* webpackChunkName: 'SnapSvg' */ 'snapsvg').then(snap => snap.default);
      }
      return new Promise(resolve => resolve(Snap));
    }

    async function loadSnap() {
      try {
        await importSnap();
        setImported({ setupSvg });
      } catch(err) {
        console.log(err);
      }
    }

    loadSnap();
  }, [window]);

  return [setup];
};

export default useSnap;