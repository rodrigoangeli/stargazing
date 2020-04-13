export const ascendente = (arr, arg1) => {
  let novaOrdem = arr.sort(
    (a, b) => a.shortcode_media[arg1] - b.shortcode_media[arg1]
  );
};
