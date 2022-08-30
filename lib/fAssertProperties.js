"use strict";
//=============================================================================
//  Copyright 2019-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  @alias module:@aponica/assert-properties-js.fAssertProperties
//
//  @public
//
//  @summary
//    Throws an error if an object doesn't contain a top-level property.
//
//  @description
//    This is a convenient way to assert, for example, that certain parameters
//    or options have been provided. By default, all specified properties must
//    be defined (an "and" check), but it is also possible to specify that a
//    certain number of the possibilities are defined (an "or" check).
//
//  @param {Object} hObject
//    The object that must contain a specified list of properties.
//
//  @param {string[]} azPropertyNames
//    The array of property names (each a string) that must all exist in
//    hObject.
//
//  @param {Object} hOptions
//    A hash (dictionary object) of options that may include:
//
//      @param {string} hOptions.zLabel
//        A label describing the object (used in any error message,
//        defaults to 'invalid hash').
//
//      @param {Boolean} hOptions.bUseIn
//        If true, use the JS "in" operator instead of the default
//        Object.hasOwnProperty() to test for the existence of each property.
//
//      @param {number} hOptions.nMax
//        If specified, then no more than this number of the specified
//        property names can appear.
//
//      @param {number} hOptions.nMin
//        If specified, then at least this number of the specified
//        property names must appear (not necessarily all of them).
//
//  @throws {Error}
//    If a property is missing from the hash, an error is thrown describing
//    the property name missing from the object label.
//
//  @example <caption>Assert that the first argument (object) contains all
//      of the properties listed in the second argument (array):</caption>
//    try {
//      fAssertProperties( { b: true, n: 123.456, z: 'hello' },
//        [ 'b', 'n', 'z' ] );
//      }
//    catch ( iErr ) {
//      console.error( iErr );
//      }
//-----------------------------------------------------------------------------

module.exports = function( hObject, azPropertyNames, hOptions = {} ) {

  const hSettings = Object.assign(
    { // defaults
      zLabel: 'invalid hash',
      bUseIn: false,
      nMax: azPropertyNames.length,
      nMin: azPropertyNames.length
      }, // defaults
    hOptions
    ); // hSettings

  let nPresent = 0;
  for ( let n = 0 ; n < azPropertyNames.length ; n++ ) {

    const b = ( hSettings.bUseIn ?
      ( azPropertyNames[ n ] in hObject ) :
      hObject.hasOwnProperty( azPropertyNames[ n ] )
      ); // b

    if ( b ) {
      if ( ++nPresent > hSettings.nMax )
        throw new Error( hSettings.zLabel + ': too many properties' );
      }
    else if ( azPropertyNames.length === hSettings.nMin )
      throw new Error( hSettings.zLabel +
        ': missing property: ' + azPropertyNames[ n ] );

    } // n

  if ( nPresent < hSettings.nMin )
    throw new Error( hSettings.zLabel + ': too few properties' );

  }; // module.exports

// EOF
