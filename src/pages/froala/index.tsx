// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Require Font Awesome.
// import "font-awesome/css/font-awesome.css";

import FroalaEditor from "react-froala-wysiwyg";

export default function FroalaPage() {
  return (
    <>
      <h1>Froala page</h1>
      <FroalaEditor tag="textarea" />
    </>
  );
}
