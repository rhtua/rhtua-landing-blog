import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

const Codeblock = ({ children, language }) => {
  return (
    <SyntaxHighlighter
      code={children || ''}
      language={language || 'shell'}
      style={atomOneDark}
    />
  );
};

export { Codeblock };
