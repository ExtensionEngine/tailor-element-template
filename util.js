const info = require('./info');

/**
 * This method is used by Tailor to processing or resolving the statics for this element.
 * The type depends on which handlers are sent as props. The purpose is to apply
 * Tailors statics handlers to the unique structure of this custom element. If
 * this element does not have a unique structure this method is not needed.
 * @param {Object} element - Data of the content element
 * @param {Function} defaultHandler - Either Tailor's default statics processor or resolver
 * @param {Function} generalHandler - Either Tailor's statics processing or resolution wrapper
 * which calls either the default handler or the general handler. This is used for
 * complex content elements which contain other complex content elements.
 */
function handleStatics(element, defaultHandler, generalHandler) {

}

module.exports = {
  ...info,
  handleStatics,
  type: 'CUSTOM_ELEMENT'
};
