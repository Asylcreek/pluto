const removeImgBgOnLoad = (e: Event) => {
  const { target } = e;

  (target as HTMLElement).style.background = 'none';
};

export default removeImgBgOnLoad;
