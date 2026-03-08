import { findNetDevices, net } from '../packages/net/dist/index.mjs';
import ScreenConfigurator from '../packages/screen/dist/index.mjs';

async function main() {

  // net
  const [address] = await findNetDevices();
  if (!address) return;
  const session = net.open(address);

  const ctrl = new ScreenConfigurator(session);
  await ctrl.reload();
  // Get input DVI signal status
  const hasDVISignalIn = await ctrl.ReadHasDVISignalIn();
  // Request brightness of the first receiving card
  const firstCardBrightness = await ctrl.ReadFirstBrightness();
  for await (let brightness of ctrl.ReadBrightness()) {
    // iterate all receiving cards
  }
  await ctrl.WriteBrightness(80);
}

main();

