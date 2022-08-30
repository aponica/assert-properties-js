//=============================================================================
//  Copyright 2022 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  Unit tests for assert-properties-js fAssertProperties function.
//-----------------------------------------------------------------------------

const fAssertProperties = require('../index');

//---------------------------------------------------------------------------

test( 'AndWithOptionsPasses', fDone => {

  expect( () =>
    fAssertProperties(
      { b: true, n: 123.456, z: 'hello' },
      [ 'b', 'n', 'z' ],
      { zLabel: 'and w/opts', bUseIn: true }
      )
    ).not.toThrow();

  fDone();

  } ); // test(AndWithOptionsPasses)

//---------------------------------------------------------------------------

test( 'AndWithOptionsThrows', fDone => {

  expect( () =>
    fAssertProperties(
      {},
      [ 'b', 'n', 'z' ],
      { zLabel: 'and w/opts', bUseIn: true }
      )
    ).toThrow( 'and w/opts: missing property: b' );

  fDone();

  } ); // test(AndWithOptionsThrows)

//---------------------------------------------------------------------------

test( 'AndWithoutOptionsPasses', fDone => {

  expect( () =>
    fAssertProperties(
      { b: true, n: 123.456, z: 'hello' },
      [ 'b', 'n', 'z' ]
      )
    ).not.toThrow();

  fDone();

  } ); // test(AndWithoutOptionsPasses)

//---------------------------------------------------------------------------

test( 'AndWithoutOptionsThrows', fDone => {

  expect( () =>
    fAssertProperties(
      {},
      [ 'b', 'n', 'z' ]
      )
    ).toThrow( 'invalid hash: missing property: b' );

  fDone();

  } ); // test(AndWithoutOptionsThrows)

//---------------------------------------------------------------------------

test( 'OrWithMaxMinPasses', fDone => {

  expect( () =>
    fAssertProperties(
      { b: true, n: 123.456, z: 'hello' },
      [ 'b', 'n', 'z' ],
      { nMin: 1, nMax: 3 }
      )
    ).not.toThrow();

  fDone();

  } ); // test(OrWithMaxMinPasses)

//---------------------------------------------------------------------------

test( 'OrWithMaxThrowsTooMany', fDone => {

  expect( () =>
    fAssertProperties(
      { b: true, n: 123.456, z: 'hello' },
      [ 'b', 'n', 'z' ],
      { nMax: 2 }
      )
    ).toThrow( 'invalid hash: too many properties' );

  fDone();

  } ); // test(OrWithMinThrowsTooMany)

//---------------------------------------------------------------------------

test( 'OrWithMinThrowsMissing', fDone => {

  expect( () =>
    fAssertProperties(
      { b: true, z: 'hello' },
      [ 'b', 'n', 'z' ],
      { nMin: 3 }
      )
    ).toThrow( 'invalid hash: missing property: n' );

  fDone();

  } ); // test(OrWithMinThrowsMissing)

//---------------------------------------------------------------------------

test( 'OrWithMinThrowsTooFew', fDone => {

  expect( () =>
    fAssertProperties(
      { b: true, n: 123.456, z: 'hello' },
      [ 'b', 'n', 'z' ],
      { nMin: 4 }
      )
    ).toThrow( 'invalid hash: too few properties' );

  fDone();

  } ); // test(OrWithMinThrowsTooFew)

// EOF
