// Case-study text contains a few inline <code> / <strong> tags. Render them as real elements
// (no dangerouslySetInnerHTML).
export default function RichText({ children }) {
  const parts = String(children).split(/(<\/?(?:code|strong)>)/);
  const out = [];
  const stack = [];
  let buffer = out;
  parts.forEach((part, i) => {
    const open = part.match(/^<(code|strong)>$/);
    const close = part.match(/^<\/(code|strong)>$/);
    if (open) {
      stack.push({ tag: open[1], children: [] });
      buffer = stack[stack.length - 1].children;
    } else if (close) {
      const { tag, children: kids } = stack.pop();
      const parent = stack.length ? stack[stack.length - 1].children : out;
      const El = tag;
      parent.push(<El key={i}>{kids}</El>);
      buffer = parent;
    } else if (part) {
      buffer.push(part);
    }
  });
  return <>{out}</>;
}
