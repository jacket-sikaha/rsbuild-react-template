/// <reference types="@rsbuild/core/types" />;

interface ImportMetaEnv {
  // import.meta.env.PUBLIC_FOO
  readonly PUBLIC_FOO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
