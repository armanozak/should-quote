import shouldQuote from './should-quote';

describe('should-quote', () => {
  it.each`
    key               | expected
    ${'abstract'}     | ${false}
    ${'boolean'}      | ${false}
    ${'break'}        | ${false}
    ${'byte'}         | ${false}
    ${'case'}         | ${false}
    ${'catch'}        | ${false}
    ${'char'}         | ${false}
    ${'class'}        | ${false}
    ${'const'}        | ${false}
    ${'continue'}     | ${false}
    ${'debugger'}     | ${false}
    ${'default'}      | ${false}
    ${'delete'}       | ${false}
    ${'do'}           | ${false}
    ${'double'}       | ${false}
    ${'else'}         | ${false}
    ${'enum'}         | ${false}
    ${'export'}       | ${false}
    ${'extends'}      | ${false}
    ${'false'}        | ${false}
    ${'final'}        | ${false}
    ${'finally'}      | ${false}
    ${'float'}        | ${false}
    ${'for'}          | ${false}
    ${'function'}     | ${false}
    ${'goto'}         | ${false}
    ${'if'}           | ${false}
    ${'implements'}   | ${false}
    ${'import'}       | ${false}
    ${'in'}           | ${false}
    ${'instanceof'}   | ${false}
    ${'int'}          | ${false}
    ${'interface'}    | ${false}
    ${'let'}          | ${false}
    ${'long'}         | ${false}
    ${'native'}       | ${false}
    ${'new'}          | ${false}
    ${'null'}         | ${false}
    ${'package'}      | ${false}
    ${'private'}      | ${false}
    ${'protected'}    | ${false}
    ${'public'}       | ${false}
    ${'return'}       | ${false}
    ${'short'}        | ${false}
    ${'static'}       | ${false}
    ${'super'}        | ${false}
    ${'switch'}       | ${false}
    ${'synchronized'} | ${false}
    ${'this'}         | ${false}
    ${'throw'}        | ${false}
    ${'throws'}       | ${false}
    ${'transient'}    | ${false}
    ${'true'}         | ${false}
    ${'try'}          | ${false}
    ${'typeof'}       | ${false}
    ${'var'}          | ${false}
    ${'void'}         | ${false}
    ${'volatile'}     | ${false}
    ${'while'}        | ${false}
    ${'with'}         | ${false}
    ${'yield'}        | ${false}
    ${'yield'}        | ${false}
    ${'propName'}     | ${false}
    ${'PropName'}     | ${false}
    ${'prop_name'}    | ${false}
    ${'PROP_NAME'}    | ${false}
    ${'Prop_Name'}    | ${false}
    ${'αprop'}        | ${false}
    ${'ɵprop'}        | ${false}
    ${'$prop'}        | ${false}
    ${'*prop'}        | ${true}
    ${'prop🙂'}       | ${true}
    ${'prop€'}        | ${true}
    ${' prop'}        | ${true}
    ${'prop '}        | ${true}
    ${'prop name'}    | ${true}
    ${'prop.name'}    | ${true}
    ${'prop,name'}    | ${true}
    ${'prop;name'}    | ${true}
    ${'prop:name'}    | ${true}
    ${'prop!name'}    | ${true}
    ${'prop|name'}    | ${true}
    ${'prop&name'}    | ${true}
    ${'prop>name'}    | ${true}
    ${'prop^name'}    | ${true}
    ${'prop-name'}    | ${true}
    ${'prop+name'}    | ${true}
    ${'prop*name'}    | ${true}
    ${'prop/name'}    | ${true}
    ${'\nprop'}       | ${true}
    ${'[prop]'}       | ${true}
    ${'(prop)'}       | ${true}
    ${'{prop}'}       | ${true}
    ${'})//'}         | ${true}
    ${'/x/'}          | ${true}
    ${'Symbol()'}     | ${true}
    ${'0'}            | ${true}
    ${'1n'}           | ${true}
    ${'1e2'}          | ${true}
    ${'1_000'}        | ${true}
    ${'0b1'}          | ${true}
    ${'0o7'}          | ${true}
    ${'0xF'}          | ${true}
    ${'\\x78'}        | ${true}
    ${'\\u0078'}      | ${false}
    ${'\\u{611B}'}    | ${false}
  `('should return $expected when input is $key', ({ key, expected }) => {
    expect(shouldQuote(key)).toEqual(expected);
  });
});
