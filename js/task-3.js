function getElementWidth(content, padding, border) {
  const contentNum = parseFloat(content);
  const paddingNum = parseFloat(padding);
  const borderNum = parseFloat(border);

  return contentNum + paddingNum * 2 + borderNum * 2;
}
console.log(
  getElementWidth("50px", "8px", "4px"),
  getElementWidth("60px", "12px", "8.5px"),
  getElementWidth("200px", "0px", "0px")
);
