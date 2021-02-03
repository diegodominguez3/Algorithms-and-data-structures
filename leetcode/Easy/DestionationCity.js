function destCity(paths) {
  const dests = new Set();
  for (const path of paths) {
    dests.add(path[1]);
  }

  for (const path of paths) {
    if (dests.has(path[0])) dests.delete(path[0]);
  }

  return Array.from(dests)[0];
}
