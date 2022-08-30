"use strict";
//=============================================================================
//  Copyright 2019-2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  @module @aponica/assert-properties-js
//
//  @public
//
//  @summary
//    Asserts that an object contains certain properties.
//
//  @description
//    This is a convenient way to assert, for example, that certain parameters
//    or options have been provided. By default, all specified properties must
//    be defined (an "and" check), but it is also possible to specify that a
//    certain number of the possibilities are defined (an "or" check).
//
//    An equivalent PHP package, @aponica/assert-properies-php, is available,
//    and should be kept synchronized with this version for consistency.
//-----------------------------------------------------------------------------

module.exports = require( './lib/fAssertProperties.js' );

// EOF
