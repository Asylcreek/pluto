// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/images/*' {
  let meta;
  export default meta;
}
