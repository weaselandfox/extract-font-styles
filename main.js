var fontStyles = [];

var extractFontStyles = function () {
  var allElements = document.getElementsByTagName('*');
  var computedStyle;
  var styles;

  [].forEach.call(allElements, function (element) {
    computedStyle = window.getComputedStyle(element);
    styles = JSON.stringify({
      family: computedStyle.getPropertyValue('font-family'),
      size: computedStyle.getPropertyValue('font-size'),
      weight: computedStyle.getPropertyValue('font-weight'),
      lineHeight: computedStyle.getPropertyValue('line-height'),
      letterSpacing: computedStyle.getPropertyValue('letter-spacing')
    });

    if (fontStyles.indexOf(styles) === -1) {
      fontStyles.push(styles)
    }
  });
  console.log(fontStyles);
}()
