import { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = useMemo(() => ({
    readonly: false,
    height: 400,
    placeholder: "Write your blog content...",
  }), []);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={(newContent) => onChange(newContent)} 
      />
    </div>
  );
};

export default RichTextEditor;