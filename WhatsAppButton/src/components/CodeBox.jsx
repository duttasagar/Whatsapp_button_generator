import React, { useState } from "react";

export default function CodeBox({data}) {
  const [copied, setCopied] = useState(false);

const htmlSnippet = `
<script
  id="my-wa-widget"
  phone="${data.phone}"
  message="${data.message}"
  color="${data.color}"
  label="${data.label}"
  src="https://cdn.jsdelivr.net/gh/duttasagar/whatsapp-widget/WtsAppWidget/whatsapp-widget.js"
></script>
`.trim();



  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="max-w-[600px] rounded-xl  p-4 bg-gray-50  h-[390px]">
      <div className="flex justify-between">
        <h3 className="font-bold mb-2">Embed Code</h3>
        <button
          onClick={copyToClipboard}
          className="mt-3  px-4 py-2 rounded-lg  mb-[10px] bg-gray-200 hover:bg-gray-300 text-gray-800
"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <textarea
        readOnly
        className="w-full  pb-[15px] rounded-lg  text-sm font-mono h-[320px]"
        value={htmlSnippet}
      />
    </div>
  );
}




