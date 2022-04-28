import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect } from "react";
import isWebview from 'is-ua-webview';

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false
});

export default function Home() {
  const [value, setValue] = useState("");
  const quillRef = useRef();

  useEffect(() => {
    const webviewChecking = isWebview(navigator.userAgent);
    console.log(webviewChecking)
  },[])


  useEffect(() => {
    console.log(quillRef.current);
  }, [quillRef]);

  return (
    <ReactQuill ref={quillRef} theme="snow" value={value} onChange={setValue} />
  );
}
