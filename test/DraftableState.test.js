import DraftableState, { FORMAT_HTML, FORMAT_MARKDOWN } from '../src/lib/DraftableState';

describe('DraftableState', () => {
  const HTML = '<h1>Test Document</h1><p>This is the text I would like to initialize state with.</p>';
  const MARKDOWN = '# Test Document\n' +
    'This is the text I would like to initialize state with.';

  test('Converts HTML to DraftJS state', () => {
    const convertedHTML = DraftableState.createFromString(HTML, FORMAT_HTML);
    expect(convertedHTML.getCurrentContent().hasText()).toBeTruthy();
    expect(convertedHTML.getCurrentContent().getPlainText()).toEqual('Test Document\nThis is the text I would like to initialize state with.');
  });

  test('Converts DraftJS state to HTML', () => {
    const convertedHTML = DraftableState.createFromString(HTML, FORMAT_HTML);
    expect(DraftableState.toString(convertedHTML, FORMAT_HTML)).toEqual('<h1>Test Document</h1>\n<p>This is the text I would like to initialize state with.</p>');
  });

  test('Converts Markdown to DraftJS state', () => {
    const convertedHTML = DraftableState.createFromString(MARKDOWN, FORMAT_MARKDOWN);
    expect(convertedHTML.getCurrentContent().hasText()).toBeTruthy();
    expect(convertedHTML.getCurrentContent().getPlainText()).toEqual('Test Document\nThis is the text I would like to initialize state with.');
  });

  test('Converts DraftJS state to Markdown', () => {
    const convertedHTML = DraftableState.createFromString(MARKDOWN, FORMAT_MARKDOWN);
    expect(DraftableState.toString(convertedHTML, FORMAT_MARKDOWN)).toEqual('# Test Document\n\nThis is the text I would like to initialize state with.\n');
  });

  test('Create throws error with unsupported type', () => {
    expect( () => DraftableState.createFromString(HTML, 'fail')).toThrow('Format not supported: fail');
  });

  test('ToString throws error with unsupported type', () => {
    expect( () => DraftableState.toString(DraftableState.createFromString(HTML, FORMAT_HTML), 'fail')).toThrow('Format not supported: fail');
  });

});
