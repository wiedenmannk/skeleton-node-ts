function log (ob: any, name?: string):void {
  if (name) {
    console.log(ob, name);
  } else {
    console.log(ob);
  }
}

export { log };
