declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// d.ts
declare module '*.css';
declare module '@fontsource/*' {}
declare module '@fontsource-variable/*' {}
