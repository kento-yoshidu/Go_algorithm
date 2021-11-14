/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Author>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly social: Maybe<Social>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly previousPostId: Maybe<Scalars['String']>;
  readonly nextPostId: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<Frontmatter>;
  readonly fields: Maybe<Fields>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};


type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type GraphCMS_Asset = Node & {
  readonly remoteTypeName: Scalars['String'];
  readonly remoteId: Scalars['ID'];
  readonly locale: GraphCMS_Locale;
  readonly stage: GraphCMS_Stage;
  readonly createdAt: Scalars['JSON'];
  readonly updatedAt: Scalars['JSON'];
  readonly publishedAt: Maybe<Scalars['JSON']>;
  readonly handle: Scalars['String'];
  readonly fileName: Scalars['String'];
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly createdBy: Maybe<GraphCMS_User>;
  readonly updatedBy: Maybe<GraphCMS_User>;
  readonly publishedBy: Maybe<GraphCMS_User>;
  readonly iconAuthor: ReadonlyArray<GraphCMS_Author>;
  readonly url: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
};


type GraphCMS_Asset_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  sizes: Maybe<Scalars['String']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  backgroundColor: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  placeholder: Maybe<GraphCMSImagePlaceholder>;
};

type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

type GraphCMSImagePlaceholder =
  | 'NONE'
  | 'BLURRED'
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG';

type GraphCMS_Locale =
  | 'en';

type GraphCMS_Stage =
  | 'DRAFT'
  | 'PUBLISHED';

type GraphCMS_User = Node & {
  readonly remoteTypeName: Scalars['String'];
  readonly remoteId: Scalars['ID'];
  readonly stage: GraphCMS_Stage;
  readonly createdAt: Scalars['JSON'];
  readonly updatedAt: Scalars['JSON'];
  readonly publishedAt: Maybe<Scalars['JSON']>;
  readonly name: Scalars['String'];
  readonly picture: Maybe<Scalars['String']>;
  readonly isActive: Scalars['Boolean'];
  readonly kind: GraphCMS_UserKind;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GraphCMS_Author = Node & {
  readonly remoteTypeName: Scalars['String'];
  readonly remoteId: Scalars['ID'];
  readonly stage: GraphCMS_Stage;
  readonly createdAt: Scalars['JSON'];
  readonly updatedAt: Scalars['JSON'];
  readonly publishedAt: Maybe<Scalars['JSON']>;
  readonly name: Scalars['String'];
  readonly affiliation: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly createdBy: Maybe<GraphCMS_User>;
  readonly updatedBy: Maybe<GraphCMS_User>;
  readonly publishedBy: Maybe<GraphCMS_User>;
  readonly icon: Maybe<GraphCMS_Asset>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GraphCMS_ScheduledOperation = Node & {
  readonly remoteTypeName: Scalars['String'];
  readonly remoteId: Scalars['ID'];
  readonly stage: GraphCMS_Stage;
  readonly createdAt: Scalars['JSON'];
  readonly updatedAt: Scalars['JSON'];
  readonly publishedAt: Maybe<Scalars['JSON']>;
  readonly description: Maybe<Scalars['String']>;
  readonly errorMessage: Maybe<Scalars['String']>;
  readonly rawPayload: Scalars['JSON'];
  readonly createdBy: Maybe<GraphCMS_User>;
  readonly updatedBy: Maybe<GraphCMS_User>;
  readonly publishedBy: Maybe<GraphCMS_User>;
  readonly release: Maybe<GraphCMS_ScheduledRelease>;
  readonly status: GraphCMS_ScheduledOperationStatus;
  readonly affectedDocuments: ReadonlyArray<GraphCMS_ScheduledOperationAffectedDocument>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GraphCMS_ScheduledRelease = Node & {
  readonly remoteTypeName: Scalars['String'];
  readonly remoteId: Scalars['ID'];
  readonly stage: GraphCMS_Stage;
  readonly createdAt: Scalars['JSON'];
  readonly updatedAt: Scalars['JSON'];
  readonly publishedAt: Maybe<Scalars['JSON']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly errorMessage: Maybe<Scalars['String']>;
  readonly isActive: Scalars['Boolean'];
  readonly isImplicit: Scalars['Boolean'];
  readonly releaseAt: Maybe<Scalars['JSON']>;
  readonly createdBy: Maybe<GraphCMS_User>;
  readonly updatedBy: Maybe<GraphCMS_User>;
  readonly publishedBy: Maybe<GraphCMS_User>;
  readonly operations: ReadonlyArray<GraphCMS_ScheduledOperation>;
  readonly status: GraphCMS_ScheduledReleaseStatus;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GraphCMS_ScheduledOperationStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED';

type GraphCMS_ScheduledOperationAffectedDocument = GraphCMS_Asset | GraphCMS_Author;

type GraphCMS_ScheduledReleaseStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED';

type GraphCMS_UserKind =
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

type Author = {
  readonly name: Maybe<Scalars['String']>;
  readonly summary: Maybe<Scalars['String']>;
};

type Social = {
  readonly twitter: Maybe<Scalars['String']>;
};

type Frontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
};


type Frontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Fields = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['String']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly path: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly endpoint: Maybe<Scalars['String']>;
  readonly token: Maybe<Scalars['String']>;
  readonly stages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly buildMarkdownNodes: Maybe<Scalars['Boolean']>;
  readonly downloadLocalImages: Maybe<Scalars['Boolean']>;
  readonly fragmentsPath: Maybe<Scalars['String']>;
  readonly locales: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly typePrefix: Maybe<Scalars['String']>;
  readonly concurrency: Maybe<Scalars['Int']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly decoding: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly query: Maybe<Scalars['String']>;
  readonly feeds: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly decoding: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFeeds = {
  readonly query: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly graphCmsAsset: Maybe<GraphCMS_Asset>;
  readonly allGraphCmsAsset: GraphCMS_AssetConnection;
  readonly graphCmsUser: Maybe<GraphCMS_User>;
  readonly allGraphCmsUser: GraphCMS_UserConnection;
  readonly graphCmsAuthor: Maybe<GraphCMS_Author>;
  readonly allGraphCmsAuthor: GraphCMS_AuthorConnection;
  readonly graphCmsScheduledOperation: Maybe<GraphCMS_ScheduledOperation>;
  readonly allGraphCmsScheduledOperation: GraphCMS_ScheduledOperationConnection;
  readonly graphCmsScheduledRelease: Maybe<GraphCMS_ScheduledRelease>;
  readonly allGraphCmsScheduledRelease: GraphCMS_ScheduledReleaseConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<FrontmatterFilterInput>;
  fields: Maybe<FieldsFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphCmsAssetArgs = {
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  remoteId: Maybe<IDQueryOperatorInput>;
  locale: Maybe<GraphCMS_LocaleQueryOperatorInput>;
  stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  createdAt: Maybe<JSONQueryOperatorInput>;
  updatedAt: Maybe<JSONQueryOperatorInput>;
  publishedAt: Maybe<JSONQueryOperatorInput>;
  handle: Maybe<StringQueryOperatorInput>;
  fileName: Maybe<StringQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  createdBy: Maybe<GraphCMS_UserFilterInput>;
  updatedBy: Maybe<GraphCMS_UserFilterInput>;
  publishedBy: Maybe<GraphCMS_UserFilterInput>;
  iconAuthor: Maybe<GraphCMS_AuthorFilterListInput>;
  url: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGraphCmsAssetArgs = {
  filter: Maybe<GraphCMS_AssetFilterInput>;
  sort: Maybe<GraphCMS_AssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphCmsUserArgs = {
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  remoteId: Maybe<IDQueryOperatorInput>;
  stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  createdAt: Maybe<JSONQueryOperatorInput>;
  updatedAt: Maybe<JSONQueryOperatorInput>;
  publishedAt: Maybe<JSONQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  picture: Maybe<StringQueryOperatorInput>;
  isActive: Maybe<BooleanQueryOperatorInput>;
  kind: Maybe<GraphCMS_UserKindQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGraphCmsUserArgs = {
  filter: Maybe<GraphCMS_UserFilterInput>;
  sort: Maybe<GraphCMS_UserSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphCmsAuthorArgs = {
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  remoteId: Maybe<IDQueryOperatorInput>;
  stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  createdAt: Maybe<JSONQueryOperatorInput>;
  updatedAt: Maybe<JSONQueryOperatorInput>;
  publishedAt: Maybe<JSONQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  affiliation: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  createdBy: Maybe<GraphCMS_UserFilterInput>;
  updatedBy: Maybe<GraphCMS_UserFilterInput>;
  publishedBy: Maybe<GraphCMS_UserFilterInput>;
  icon: Maybe<GraphCMS_AssetFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGraphCmsAuthorArgs = {
  filter: Maybe<GraphCMS_AuthorFilterInput>;
  sort: Maybe<GraphCMS_AuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphCmsScheduledOperationArgs = {
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  remoteId: Maybe<IDQueryOperatorInput>;
  stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  createdAt: Maybe<JSONQueryOperatorInput>;
  updatedAt: Maybe<JSONQueryOperatorInput>;
  publishedAt: Maybe<JSONQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  errorMessage: Maybe<StringQueryOperatorInput>;
  rawPayload: Maybe<JSONQueryOperatorInput>;
  createdBy: Maybe<GraphCMS_UserFilterInput>;
  updatedBy: Maybe<GraphCMS_UserFilterInput>;
  publishedBy: Maybe<GraphCMS_UserFilterInput>;
  release: Maybe<GraphCMS_ScheduledReleaseFilterInput>;
  status: Maybe<GraphCMS_ScheduledOperationStatusQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGraphCmsScheduledOperationArgs = {
  filter: Maybe<GraphCMS_ScheduledOperationFilterInput>;
  sort: Maybe<GraphCMS_ScheduledOperationSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphCmsScheduledReleaseArgs = {
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  remoteId: Maybe<IDQueryOperatorInput>;
  stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  createdAt: Maybe<JSONQueryOperatorInput>;
  updatedAt: Maybe<JSONQueryOperatorInput>;
  publishedAt: Maybe<JSONQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  errorMessage: Maybe<StringQueryOperatorInput>;
  isActive: Maybe<BooleanQueryOperatorInput>;
  isImplicit: Maybe<BooleanQueryOperatorInput>;
  releaseAt: Maybe<JSONQueryOperatorInput>;
  createdBy: Maybe<GraphCMS_UserFilterInput>;
  updatedBy: Maybe<GraphCMS_UserFilterInput>;
  publishedBy: Maybe<GraphCMS_UserFilterInput>;
  operations: Maybe<GraphCMS_ScheduledOperationFilterListInput>;
  status: Maybe<GraphCMS_ScheduledReleaseStatusQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGraphCmsScheduledReleaseArgs = {
  filter: Maybe<GraphCMS_ScheduledReleaseFilterInput>;
  sort: Maybe<GraphCMS_ScheduledReleaseSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<FrontmatterFilterInput>;
  readonly fields: Maybe<FieldsFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
};

type FieldsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.frontmatter.description'
  | 'childrenMarkdownRemark.frontmatter.date'
  | 'childrenMarkdownRemark.fields.slug'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.fileAbsolutePath'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.frontmatter.description'
  | 'childMarkdownRemark.frontmatter.date'
  | 'childMarkdownRemark.fields.slug'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.fileAbsolutePath'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<AuthorFilterInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly social: Maybe<SocialFilterInput>;
};

type AuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly summary: Maybe<StringQueryOperatorInput>;
};

type SocialFilterInput = {
  readonly twitter: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author.name'
  | 'siteMetadata.author.summary'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.social.twitter'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly previousPostId: Maybe<StringQueryOperatorInput>;
  readonly nextPostId: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<StringQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly endpoint: Maybe<StringQueryOperatorInput>;
  readonly token: Maybe<StringQueryOperatorInput>;
  readonly stages: Maybe<StringQueryOperatorInput>;
  readonly buildMarkdownNodes: Maybe<BooleanQueryOperatorInput>;
  readonly downloadLocalImages: Maybe<BooleanQueryOperatorInput>;
  readonly fragmentsPath: Maybe<StringQueryOperatorInput>;
  readonly locales: Maybe<StringQueryOperatorInput>;
  readonly typePrefix: Maybe<StringQueryOperatorInput>;
  readonly concurrency: Maybe<IntQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly decoding: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly feeds: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly decoding: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

type SitePluginPluginOptionsFeedsFilterInput = {
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.id'
  | 'context.previousPostId'
  | 'context.nextPostId'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.plugins'
  | 'pluginCreator.pluginOptions.plugins.resolve'
  | 'pluginCreator.pluginOptions.plugins.id'
  | 'pluginCreator.pluginOptions.plugins.name'
  | 'pluginCreator.pluginOptions.plugins.version'
  | 'pluginCreator.pluginOptions.plugins.nodeAPIs'
  | 'pluginCreator.pluginOptions.plugins.browserAPIs'
  | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
  | 'pluginCreator.pluginOptions.sourceMap'
  | 'pluginCreator.pluginOptions.autoLabel'
  | 'pluginCreator.pluginOptions.labelFormat'
  | 'pluginCreator.pluginOptions.cssPropOptimization'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.endpoint'
  | 'pluginCreator.pluginOptions.token'
  | 'pluginCreator.pluginOptions.stages'
  | 'pluginCreator.pluginOptions.buildMarkdownNodes'
  | 'pluginCreator.pluginOptions.downloadLocalImages'
  | 'pluginCreator.pluginOptions.fragmentsPath'
  | 'pluginCreator.pluginOptions.locales'
  | 'pluginCreator.pluginOptions.typePrefix'
  | 'pluginCreator.pluginOptions.concurrency'
  | 'pluginCreator.pluginOptions.maxWidth'
  | 'pluginCreator.pluginOptions.linkImagesToOriginal'
  | 'pluginCreator.pluginOptions.showCaptions'
  | 'pluginCreator.pluginOptions.markdownCaptions'
  | 'pluginCreator.pluginOptions.sizeByPixelDensity'
  | 'pluginCreator.pluginOptions.backgroundColor'
  | 'pluginCreator.pluginOptions.quality'
  | 'pluginCreator.pluginOptions.withWebp'
  | 'pluginCreator.pluginOptions.tracedSVG'
  | 'pluginCreator.pluginOptions.loading'
  | 'pluginCreator.pluginOptions.decoding'
  | 'pluginCreator.pluginOptions.disableBgImageOnAlpha'
  | 'pluginCreator.pluginOptions.disableBgImage'
  | 'pluginCreator.pluginOptions.wrapperStyle'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.feeds'
  | 'pluginCreator.pluginOptions.feeds.query'
  | 'pluginCreator.pluginOptions.feeds.output'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'frontmatter.description'
  | 'frontmatter.date'
  | 'fields.slug'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type IDQueryOperatorInput = {
  readonly eq: Maybe<Scalars['ID']>;
  readonly ne: Maybe<Scalars['ID']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

type GraphCMS_LocaleQueryOperatorInput = {
  readonly eq: Maybe<GraphCMS_Locale>;
  readonly ne: Maybe<GraphCMS_Locale>;
  readonly in: Maybe<ReadonlyArray<Maybe<GraphCMS_Locale>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<GraphCMS_Locale>>>;
};

type GraphCMS_StageQueryOperatorInput = {
  readonly eq: Maybe<GraphCMS_Stage>;
  readonly ne: Maybe<GraphCMS_Stage>;
  readonly in: Maybe<ReadonlyArray<Maybe<GraphCMS_Stage>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<GraphCMS_Stage>>>;
};

type GraphCMS_UserFilterInput = {
  readonly remoteTypeName: Maybe<StringQueryOperatorInput>;
  readonly remoteId: Maybe<IDQueryOperatorInput>;
  readonly stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  readonly createdAt: Maybe<JSONQueryOperatorInput>;
  readonly updatedAt: Maybe<JSONQueryOperatorInput>;
  readonly publishedAt: Maybe<JSONQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly picture: Maybe<StringQueryOperatorInput>;
  readonly isActive: Maybe<BooleanQueryOperatorInput>;
  readonly kind: Maybe<GraphCMS_UserKindQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GraphCMS_UserKindQueryOperatorInput = {
  readonly eq: Maybe<GraphCMS_UserKind>;
  readonly ne: Maybe<GraphCMS_UserKind>;
  readonly in: Maybe<ReadonlyArray<Maybe<GraphCMS_UserKind>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<GraphCMS_UserKind>>>;
};

type GraphCMS_AuthorFilterListInput = {
  readonly elemMatch: Maybe<GraphCMS_AuthorFilterInput>;
};

type GraphCMS_AuthorFilterInput = {
  readonly remoteTypeName: Maybe<StringQueryOperatorInput>;
  readonly remoteId: Maybe<IDQueryOperatorInput>;
  readonly stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  readonly createdAt: Maybe<JSONQueryOperatorInput>;
  readonly updatedAt: Maybe<JSONQueryOperatorInput>;
  readonly publishedAt: Maybe<JSONQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly affiliation: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly createdBy: Maybe<GraphCMS_UserFilterInput>;
  readonly updatedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly publishedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly icon: Maybe<GraphCMS_AssetFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GraphCMS_AssetFilterInput = {
  readonly remoteTypeName: Maybe<StringQueryOperatorInput>;
  readonly remoteId: Maybe<IDQueryOperatorInput>;
  readonly locale: Maybe<GraphCMS_LocaleQueryOperatorInput>;
  readonly stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  readonly createdAt: Maybe<JSONQueryOperatorInput>;
  readonly updatedAt: Maybe<JSONQueryOperatorInput>;
  readonly publishedAt: Maybe<JSONQueryOperatorInput>;
  readonly handle: Maybe<StringQueryOperatorInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly createdBy: Maybe<GraphCMS_UserFilterInput>;
  readonly updatedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly publishedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly iconAuthor: Maybe<GraphCMS_AuthorFilterListInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GraphCMS_AssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_AssetEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_Asset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphCMS_AssetGroupConnection>;
};


type GraphCMS_AssetConnection_distinctArgs = {
  field: GraphCMS_AssetFieldsEnum;
};


type GraphCMS_AssetConnection_maxArgs = {
  field: GraphCMS_AssetFieldsEnum;
};


type GraphCMS_AssetConnection_minArgs = {
  field: GraphCMS_AssetFieldsEnum;
};


type GraphCMS_AssetConnection_sumArgs = {
  field: GraphCMS_AssetFieldsEnum;
};


type GraphCMS_AssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphCMS_AssetFieldsEnum;
};

type GraphCMS_AssetEdge = {
  readonly next: Maybe<GraphCMS_Asset>;
  readonly node: GraphCMS_Asset;
  readonly previous: Maybe<GraphCMS_Asset>;
};

type GraphCMS_AssetFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'handle'
  | 'fileName'
  | 'height'
  | 'width'
  | 'size'
  | 'mimeType'
  | 'createdBy.remoteTypeName'
  | 'createdBy.remoteId'
  | 'createdBy.stage'
  | 'createdBy.createdAt'
  | 'createdBy.updatedAt'
  | 'createdBy.publishedAt'
  | 'createdBy.name'
  | 'createdBy.picture'
  | 'createdBy.isActive'
  | 'createdBy.kind'
  | 'createdBy.id'
  | 'createdBy.parent.id'
  | 'createdBy.parent.parent.id'
  | 'createdBy.parent.parent.children'
  | 'createdBy.parent.children'
  | 'createdBy.parent.children.id'
  | 'createdBy.parent.children.children'
  | 'createdBy.parent.internal.content'
  | 'createdBy.parent.internal.contentDigest'
  | 'createdBy.parent.internal.description'
  | 'createdBy.parent.internal.fieldOwners'
  | 'createdBy.parent.internal.ignoreType'
  | 'createdBy.parent.internal.mediaType'
  | 'createdBy.parent.internal.owner'
  | 'createdBy.parent.internal.type'
  | 'createdBy.children'
  | 'createdBy.children.id'
  | 'createdBy.children.parent.id'
  | 'createdBy.children.parent.children'
  | 'createdBy.children.children'
  | 'createdBy.children.children.id'
  | 'createdBy.children.children.children'
  | 'createdBy.children.internal.content'
  | 'createdBy.children.internal.contentDigest'
  | 'createdBy.children.internal.description'
  | 'createdBy.children.internal.fieldOwners'
  | 'createdBy.children.internal.ignoreType'
  | 'createdBy.children.internal.mediaType'
  | 'createdBy.children.internal.owner'
  | 'createdBy.children.internal.type'
  | 'createdBy.internal.content'
  | 'createdBy.internal.contentDigest'
  | 'createdBy.internal.description'
  | 'createdBy.internal.fieldOwners'
  | 'createdBy.internal.ignoreType'
  | 'createdBy.internal.mediaType'
  | 'createdBy.internal.owner'
  | 'createdBy.internal.type'
  | 'updatedBy.remoteTypeName'
  | 'updatedBy.remoteId'
  | 'updatedBy.stage'
  | 'updatedBy.createdAt'
  | 'updatedBy.updatedAt'
  | 'updatedBy.publishedAt'
  | 'updatedBy.name'
  | 'updatedBy.picture'
  | 'updatedBy.isActive'
  | 'updatedBy.kind'
  | 'updatedBy.id'
  | 'updatedBy.parent.id'
  | 'updatedBy.parent.parent.id'
  | 'updatedBy.parent.parent.children'
  | 'updatedBy.parent.children'
  | 'updatedBy.parent.children.id'
  | 'updatedBy.parent.children.children'
  | 'updatedBy.parent.internal.content'
  | 'updatedBy.parent.internal.contentDigest'
  | 'updatedBy.parent.internal.description'
  | 'updatedBy.parent.internal.fieldOwners'
  | 'updatedBy.parent.internal.ignoreType'
  | 'updatedBy.parent.internal.mediaType'
  | 'updatedBy.parent.internal.owner'
  | 'updatedBy.parent.internal.type'
  | 'updatedBy.children'
  | 'updatedBy.children.id'
  | 'updatedBy.children.parent.id'
  | 'updatedBy.children.parent.children'
  | 'updatedBy.children.children'
  | 'updatedBy.children.children.id'
  | 'updatedBy.children.children.children'
  | 'updatedBy.children.internal.content'
  | 'updatedBy.children.internal.contentDigest'
  | 'updatedBy.children.internal.description'
  | 'updatedBy.children.internal.fieldOwners'
  | 'updatedBy.children.internal.ignoreType'
  | 'updatedBy.children.internal.mediaType'
  | 'updatedBy.children.internal.owner'
  | 'updatedBy.children.internal.type'
  | 'updatedBy.internal.content'
  | 'updatedBy.internal.contentDigest'
  | 'updatedBy.internal.description'
  | 'updatedBy.internal.fieldOwners'
  | 'updatedBy.internal.ignoreType'
  | 'updatedBy.internal.mediaType'
  | 'updatedBy.internal.owner'
  | 'updatedBy.internal.type'
  | 'publishedBy.remoteTypeName'
  | 'publishedBy.remoteId'
  | 'publishedBy.stage'
  | 'publishedBy.createdAt'
  | 'publishedBy.updatedAt'
  | 'publishedBy.publishedAt'
  | 'publishedBy.name'
  | 'publishedBy.picture'
  | 'publishedBy.isActive'
  | 'publishedBy.kind'
  | 'publishedBy.id'
  | 'publishedBy.parent.id'
  | 'publishedBy.parent.parent.id'
  | 'publishedBy.parent.parent.children'
  | 'publishedBy.parent.children'
  | 'publishedBy.parent.children.id'
  | 'publishedBy.parent.children.children'
  | 'publishedBy.parent.internal.content'
  | 'publishedBy.parent.internal.contentDigest'
  | 'publishedBy.parent.internal.description'
  | 'publishedBy.parent.internal.fieldOwners'
  | 'publishedBy.parent.internal.ignoreType'
  | 'publishedBy.parent.internal.mediaType'
  | 'publishedBy.parent.internal.owner'
  | 'publishedBy.parent.internal.type'
  | 'publishedBy.children'
  | 'publishedBy.children.id'
  | 'publishedBy.children.parent.id'
  | 'publishedBy.children.parent.children'
  | 'publishedBy.children.children'
  | 'publishedBy.children.children.id'
  | 'publishedBy.children.children.children'
  | 'publishedBy.children.internal.content'
  | 'publishedBy.children.internal.contentDigest'
  | 'publishedBy.children.internal.description'
  | 'publishedBy.children.internal.fieldOwners'
  | 'publishedBy.children.internal.ignoreType'
  | 'publishedBy.children.internal.mediaType'
  | 'publishedBy.children.internal.owner'
  | 'publishedBy.children.internal.type'
  | 'publishedBy.internal.content'
  | 'publishedBy.internal.contentDigest'
  | 'publishedBy.internal.description'
  | 'publishedBy.internal.fieldOwners'
  | 'publishedBy.internal.ignoreType'
  | 'publishedBy.internal.mediaType'
  | 'publishedBy.internal.owner'
  | 'publishedBy.internal.type'
  | 'iconAuthor'
  | 'iconAuthor.remoteTypeName'
  | 'iconAuthor.remoteId'
  | 'iconAuthor.stage'
  | 'iconAuthor.createdAt'
  | 'iconAuthor.updatedAt'
  | 'iconAuthor.publishedAt'
  | 'iconAuthor.name'
  | 'iconAuthor.affiliation'
  | 'iconAuthor.slug'
  | 'iconAuthor.description'
  | 'iconAuthor.createdBy.remoteTypeName'
  | 'iconAuthor.createdBy.remoteId'
  | 'iconAuthor.createdBy.stage'
  | 'iconAuthor.createdBy.createdAt'
  | 'iconAuthor.createdBy.updatedAt'
  | 'iconAuthor.createdBy.publishedAt'
  | 'iconAuthor.createdBy.name'
  | 'iconAuthor.createdBy.picture'
  | 'iconAuthor.createdBy.isActive'
  | 'iconAuthor.createdBy.kind'
  | 'iconAuthor.createdBy.id'
  | 'iconAuthor.createdBy.parent.id'
  | 'iconAuthor.createdBy.parent.children'
  | 'iconAuthor.createdBy.children'
  | 'iconAuthor.createdBy.children.id'
  | 'iconAuthor.createdBy.children.children'
  | 'iconAuthor.createdBy.internal.content'
  | 'iconAuthor.createdBy.internal.contentDigest'
  | 'iconAuthor.createdBy.internal.description'
  | 'iconAuthor.createdBy.internal.fieldOwners'
  | 'iconAuthor.createdBy.internal.ignoreType'
  | 'iconAuthor.createdBy.internal.mediaType'
  | 'iconAuthor.createdBy.internal.owner'
  | 'iconAuthor.createdBy.internal.type'
  | 'iconAuthor.updatedBy.remoteTypeName'
  | 'iconAuthor.updatedBy.remoteId'
  | 'iconAuthor.updatedBy.stage'
  | 'iconAuthor.updatedBy.createdAt'
  | 'iconAuthor.updatedBy.updatedAt'
  | 'iconAuthor.updatedBy.publishedAt'
  | 'iconAuthor.updatedBy.name'
  | 'iconAuthor.updatedBy.picture'
  | 'iconAuthor.updatedBy.isActive'
  | 'iconAuthor.updatedBy.kind'
  | 'iconAuthor.updatedBy.id'
  | 'iconAuthor.updatedBy.parent.id'
  | 'iconAuthor.updatedBy.parent.children'
  | 'iconAuthor.updatedBy.children'
  | 'iconAuthor.updatedBy.children.id'
  | 'iconAuthor.updatedBy.children.children'
  | 'iconAuthor.updatedBy.internal.content'
  | 'iconAuthor.updatedBy.internal.contentDigest'
  | 'iconAuthor.updatedBy.internal.description'
  | 'iconAuthor.updatedBy.internal.fieldOwners'
  | 'iconAuthor.updatedBy.internal.ignoreType'
  | 'iconAuthor.updatedBy.internal.mediaType'
  | 'iconAuthor.updatedBy.internal.owner'
  | 'iconAuthor.updatedBy.internal.type'
  | 'iconAuthor.publishedBy.remoteTypeName'
  | 'iconAuthor.publishedBy.remoteId'
  | 'iconAuthor.publishedBy.stage'
  | 'iconAuthor.publishedBy.createdAt'
  | 'iconAuthor.publishedBy.updatedAt'
  | 'iconAuthor.publishedBy.publishedAt'
  | 'iconAuthor.publishedBy.name'
  | 'iconAuthor.publishedBy.picture'
  | 'iconAuthor.publishedBy.isActive'
  | 'iconAuthor.publishedBy.kind'
  | 'iconAuthor.publishedBy.id'
  | 'iconAuthor.publishedBy.parent.id'
  | 'iconAuthor.publishedBy.parent.children'
  | 'iconAuthor.publishedBy.children'
  | 'iconAuthor.publishedBy.children.id'
  | 'iconAuthor.publishedBy.children.children'
  | 'iconAuthor.publishedBy.internal.content'
  | 'iconAuthor.publishedBy.internal.contentDigest'
  | 'iconAuthor.publishedBy.internal.description'
  | 'iconAuthor.publishedBy.internal.fieldOwners'
  | 'iconAuthor.publishedBy.internal.ignoreType'
  | 'iconAuthor.publishedBy.internal.mediaType'
  | 'iconAuthor.publishedBy.internal.owner'
  | 'iconAuthor.publishedBy.internal.type'
  | 'iconAuthor.icon.remoteTypeName'
  | 'iconAuthor.icon.remoteId'
  | 'iconAuthor.icon.locale'
  | 'iconAuthor.icon.stage'
  | 'iconAuthor.icon.createdAt'
  | 'iconAuthor.icon.updatedAt'
  | 'iconAuthor.icon.publishedAt'
  | 'iconAuthor.icon.handle'
  | 'iconAuthor.icon.fileName'
  | 'iconAuthor.icon.height'
  | 'iconAuthor.icon.width'
  | 'iconAuthor.icon.size'
  | 'iconAuthor.icon.mimeType'
  | 'iconAuthor.icon.createdBy.remoteTypeName'
  | 'iconAuthor.icon.createdBy.remoteId'
  | 'iconAuthor.icon.createdBy.stage'
  | 'iconAuthor.icon.createdBy.createdAt'
  | 'iconAuthor.icon.createdBy.updatedAt'
  | 'iconAuthor.icon.createdBy.publishedAt'
  | 'iconAuthor.icon.createdBy.name'
  | 'iconAuthor.icon.createdBy.picture'
  | 'iconAuthor.icon.createdBy.isActive'
  | 'iconAuthor.icon.createdBy.kind'
  | 'iconAuthor.icon.createdBy.id'
  | 'iconAuthor.icon.createdBy.children'
  | 'iconAuthor.icon.updatedBy.remoteTypeName'
  | 'iconAuthor.icon.updatedBy.remoteId'
  | 'iconAuthor.icon.updatedBy.stage'
  | 'iconAuthor.icon.updatedBy.createdAt'
  | 'iconAuthor.icon.updatedBy.updatedAt'
  | 'iconAuthor.icon.updatedBy.publishedAt'
  | 'iconAuthor.icon.updatedBy.name'
  | 'iconAuthor.icon.updatedBy.picture'
  | 'iconAuthor.icon.updatedBy.isActive'
  | 'iconAuthor.icon.updatedBy.kind'
  | 'iconAuthor.icon.updatedBy.id'
  | 'iconAuthor.icon.updatedBy.children'
  | 'iconAuthor.icon.publishedBy.remoteTypeName'
  | 'iconAuthor.icon.publishedBy.remoteId'
  | 'iconAuthor.icon.publishedBy.stage'
  | 'iconAuthor.icon.publishedBy.createdAt'
  | 'iconAuthor.icon.publishedBy.updatedAt'
  | 'iconAuthor.icon.publishedBy.publishedAt'
  | 'iconAuthor.icon.publishedBy.name'
  | 'iconAuthor.icon.publishedBy.picture'
  | 'iconAuthor.icon.publishedBy.isActive'
  | 'iconAuthor.icon.publishedBy.kind'
  | 'iconAuthor.icon.publishedBy.id'
  | 'iconAuthor.icon.publishedBy.children'
  | 'iconAuthor.icon.iconAuthor'
  | 'iconAuthor.icon.iconAuthor.remoteTypeName'
  | 'iconAuthor.icon.iconAuthor.remoteId'
  | 'iconAuthor.icon.iconAuthor.stage'
  | 'iconAuthor.icon.iconAuthor.createdAt'
  | 'iconAuthor.icon.iconAuthor.updatedAt'
  | 'iconAuthor.icon.iconAuthor.publishedAt'
  | 'iconAuthor.icon.iconAuthor.name'
  | 'iconAuthor.icon.iconAuthor.affiliation'
  | 'iconAuthor.icon.iconAuthor.slug'
  | 'iconAuthor.icon.iconAuthor.description'
  | 'iconAuthor.icon.iconAuthor.id'
  | 'iconAuthor.icon.iconAuthor.children'
  | 'iconAuthor.icon.url'
  | 'iconAuthor.icon.id'
  | 'iconAuthor.icon.parent.id'
  | 'iconAuthor.icon.parent.children'
  | 'iconAuthor.icon.children'
  | 'iconAuthor.icon.children.id'
  | 'iconAuthor.icon.children.children'
  | 'iconAuthor.icon.internal.content'
  | 'iconAuthor.icon.internal.contentDigest'
  | 'iconAuthor.icon.internal.description'
  | 'iconAuthor.icon.internal.fieldOwners'
  | 'iconAuthor.icon.internal.ignoreType'
  | 'iconAuthor.icon.internal.mediaType'
  | 'iconAuthor.icon.internal.owner'
  | 'iconAuthor.icon.internal.type'
  | 'iconAuthor.id'
  | 'iconAuthor.parent.id'
  | 'iconAuthor.parent.parent.id'
  | 'iconAuthor.parent.parent.children'
  | 'iconAuthor.parent.children'
  | 'iconAuthor.parent.children.id'
  | 'iconAuthor.parent.children.children'
  | 'iconAuthor.parent.internal.content'
  | 'iconAuthor.parent.internal.contentDigest'
  | 'iconAuthor.parent.internal.description'
  | 'iconAuthor.parent.internal.fieldOwners'
  | 'iconAuthor.parent.internal.ignoreType'
  | 'iconAuthor.parent.internal.mediaType'
  | 'iconAuthor.parent.internal.owner'
  | 'iconAuthor.parent.internal.type'
  | 'iconAuthor.children'
  | 'iconAuthor.children.id'
  | 'iconAuthor.children.parent.id'
  | 'iconAuthor.children.parent.children'
  | 'iconAuthor.children.children'
  | 'iconAuthor.children.children.id'
  | 'iconAuthor.children.children.children'
  | 'iconAuthor.children.internal.content'
  | 'iconAuthor.children.internal.contentDigest'
  | 'iconAuthor.children.internal.description'
  | 'iconAuthor.children.internal.fieldOwners'
  | 'iconAuthor.children.internal.ignoreType'
  | 'iconAuthor.children.internal.mediaType'
  | 'iconAuthor.children.internal.owner'
  | 'iconAuthor.children.internal.type'
  | 'iconAuthor.internal.content'
  | 'iconAuthor.internal.contentDigest'
  | 'iconAuthor.internal.description'
  | 'iconAuthor.internal.fieldOwners'
  | 'iconAuthor.internal.ignoreType'
  | 'iconAuthor.internal.mediaType'
  | 'iconAuthor.internal.owner'
  | 'iconAuthor.internal.type'
  | 'url'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GraphCMS_AssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_AssetEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_Asset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphCMS_AssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphCMS_AssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphCMS_UserConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_UserEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_User>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphCMS_UserGroupConnection>;
};


type GraphCMS_UserConnection_distinctArgs = {
  field: GraphCMS_UserFieldsEnum;
};


type GraphCMS_UserConnection_maxArgs = {
  field: GraphCMS_UserFieldsEnum;
};


type GraphCMS_UserConnection_minArgs = {
  field: GraphCMS_UserFieldsEnum;
};


type GraphCMS_UserConnection_sumArgs = {
  field: GraphCMS_UserFieldsEnum;
};


type GraphCMS_UserConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphCMS_UserFieldsEnum;
};

type GraphCMS_UserEdge = {
  readonly next: Maybe<GraphCMS_User>;
  readonly node: GraphCMS_User;
  readonly previous: Maybe<GraphCMS_User>;
};

type GraphCMS_UserFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'picture'
  | 'isActive'
  | 'kind'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GraphCMS_UserGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_UserEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_User>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphCMS_UserSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphCMS_UserFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphCMS_AuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_AuthorEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_Author>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphCMS_AuthorGroupConnection>;
};


type GraphCMS_AuthorConnection_distinctArgs = {
  field: GraphCMS_AuthorFieldsEnum;
};


type GraphCMS_AuthorConnection_maxArgs = {
  field: GraphCMS_AuthorFieldsEnum;
};


type GraphCMS_AuthorConnection_minArgs = {
  field: GraphCMS_AuthorFieldsEnum;
};


type GraphCMS_AuthorConnection_sumArgs = {
  field: GraphCMS_AuthorFieldsEnum;
};


type GraphCMS_AuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphCMS_AuthorFieldsEnum;
};

type GraphCMS_AuthorEdge = {
  readonly next: Maybe<GraphCMS_Author>;
  readonly node: GraphCMS_Author;
  readonly previous: Maybe<GraphCMS_Author>;
};

type GraphCMS_AuthorFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'name'
  | 'affiliation'
  | 'slug'
  | 'description'
  | 'createdBy.remoteTypeName'
  | 'createdBy.remoteId'
  | 'createdBy.stage'
  | 'createdBy.createdAt'
  | 'createdBy.updatedAt'
  | 'createdBy.publishedAt'
  | 'createdBy.name'
  | 'createdBy.picture'
  | 'createdBy.isActive'
  | 'createdBy.kind'
  | 'createdBy.id'
  | 'createdBy.parent.id'
  | 'createdBy.parent.parent.id'
  | 'createdBy.parent.parent.children'
  | 'createdBy.parent.children'
  | 'createdBy.parent.children.id'
  | 'createdBy.parent.children.children'
  | 'createdBy.parent.internal.content'
  | 'createdBy.parent.internal.contentDigest'
  | 'createdBy.parent.internal.description'
  | 'createdBy.parent.internal.fieldOwners'
  | 'createdBy.parent.internal.ignoreType'
  | 'createdBy.parent.internal.mediaType'
  | 'createdBy.parent.internal.owner'
  | 'createdBy.parent.internal.type'
  | 'createdBy.children'
  | 'createdBy.children.id'
  | 'createdBy.children.parent.id'
  | 'createdBy.children.parent.children'
  | 'createdBy.children.children'
  | 'createdBy.children.children.id'
  | 'createdBy.children.children.children'
  | 'createdBy.children.internal.content'
  | 'createdBy.children.internal.contentDigest'
  | 'createdBy.children.internal.description'
  | 'createdBy.children.internal.fieldOwners'
  | 'createdBy.children.internal.ignoreType'
  | 'createdBy.children.internal.mediaType'
  | 'createdBy.children.internal.owner'
  | 'createdBy.children.internal.type'
  | 'createdBy.internal.content'
  | 'createdBy.internal.contentDigest'
  | 'createdBy.internal.description'
  | 'createdBy.internal.fieldOwners'
  | 'createdBy.internal.ignoreType'
  | 'createdBy.internal.mediaType'
  | 'createdBy.internal.owner'
  | 'createdBy.internal.type'
  | 'updatedBy.remoteTypeName'
  | 'updatedBy.remoteId'
  | 'updatedBy.stage'
  | 'updatedBy.createdAt'
  | 'updatedBy.updatedAt'
  | 'updatedBy.publishedAt'
  | 'updatedBy.name'
  | 'updatedBy.picture'
  | 'updatedBy.isActive'
  | 'updatedBy.kind'
  | 'updatedBy.id'
  | 'updatedBy.parent.id'
  | 'updatedBy.parent.parent.id'
  | 'updatedBy.parent.parent.children'
  | 'updatedBy.parent.children'
  | 'updatedBy.parent.children.id'
  | 'updatedBy.parent.children.children'
  | 'updatedBy.parent.internal.content'
  | 'updatedBy.parent.internal.contentDigest'
  | 'updatedBy.parent.internal.description'
  | 'updatedBy.parent.internal.fieldOwners'
  | 'updatedBy.parent.internal.ignoreType'
  | 'updatedBy.parent.internal.mediaType'
  | 'updatedBy.parent.internal.owner'
  | 'updatedBy.parent.internal.type'
  | 'updatedBy.children'
  | 'updatedBy.children.id'
  | 'updatedBy.children.parent.id'
  | 'updatedBy.children.parent.children'
  | 'updatedBy.children.children'
  | 'updatedBy.children.children.id'
  | 'updatedBy.children.children.children'
  | 'updatedBy.children.internal.content'
  | 'updatedBy.children.internal.contentDigest'
  | 'updatedBy.children.internal.description'
  | 'updatedBy.children.internal.fieldOwners'
  | 'updatedBy.children.internal.ignoreType'
  | 'updatedBy.children.internal.mediaType'
  | 'updatedBy.children.internal.owner'
  | 'updatedBy.children.internal.type'
  | 'updatedBy.internal.content'
  | 'updatedBy.internal.contentDigest'
  | 'updatedBy.internal.description'
  | 'updatedBy.internal.fieldOwners'
  | 'updatedBy.internal.ignoreType'
  | 'updatedBy.internal.mediaType'
  | 'updatedBy.internal.owner'
  | 'updatedBy.internal.type'
  | 'publishedBy.remoteTypeName'
  | 'publishedBy.remoteId'
  | 'publishedBy.stage'
  | 'publishedBy.createdAt'
  | 'publishedBy.updatedAt'
  | 'publishedBy.publishedAt'
  | 'publishedBy.name'
  | 'publishedBy.picture'
  | 'publishedBy.isActive'
  | 'publishedBy.kind'
  | 'publishedBy.id'
  | 'publishedBy.parent.id'
  | 'publishedBy.parent.parent.id'
  | 'publishedBy.parent.parent.children'
  | 'publishedBy.parent.children'
  | 'publishedBy.parent.children.id'
  | 'publishedBy.parent.children.children'
  | 'publishedBy.parent.internal.content'
  | 'publishedBy.parent.internal.contentDigest'
  | 'publishedBy.parent.internal.description'
  | 'publishedBy.parent.internal.fieldOwners'
  | 'publishedBy.parent.internal.ignoreType'
  | 'publishedBy.parent.internal.mediaType'
  | 'publishedBy.parent.internal.owner'
  | 'publishedBy.parent.internal.type'
  | 'publishedBy.children'
  | 'publishedBy.children.id'
  | 'publishedBy.children.parent.id'
  | 'publishedBy.children.parent.children'
  | 'publishedBy.children.children'
  | 'publishedBy.children.children.id'
  | 'publishedBy.children.children.children'
  | 'publishedBy.children.internal.content'
  | 'publishedBy.children.internal.contentDigest'
  | 'publishedBy.children.internal.description'
  | 'publishedBy.children.internal.fieldOwners'
  | 'publishedBy.children.internal.ignoreType'
  | 'publishedBy.children.internal.mediaType'
  | 'publishedBy.children.internal.owner'
  | 'publishedBy.children.internal.type'
  | 'publishedBy.internal.content'
  | 'publishedBy.internal.contentDigest'
  | 'publishedBy.internal.description'
  | 'publishedBy.internal.fieldOwners'
  | 'publishedBy.internal.ignoreType'
  | 'publishedBy.internal.mediaType'
  | 'publishedBy.internal.owner'
  | 'publishedBy.internal.type'
  | 'icon.remoteTypeName'
  | 'icon.remoteId'
  | 'icon.locale'
  | 'icon.stage'
  | 'icon.createdAt'
  | 'icon.updatedAt'
  | 'icon.publishedAt'
  | 'icon.handle'
  | 'icon.fileName'
  | 'icon.height'
  | 'icon.width'
  | 'icon.size'
  | 'icon.mimeType'
  | 'icon.createdBy.remoteTypeName'
  | 'icon.createdBy.remoteId'
  | 'icon.createdBy.stage'
  | 'icon.createdBy.createdAt'
  | 'icon.createdBy.updatedAt'
  | 'icon.createdBy.publishedAt'
  | 'icon.createdBy.name'
  | 'icon.createdBy.picture'
  | 'icon.createdBy.isActive'
  | 'icon.createdBy.kind'
  | 'icon.createdBy.id'
  | 'icon.createdBy.parent.id'
  | 'icon.createdBy.parent.children'
  | 'icon.createdBy.children'
  | 'icon.createdBy.children.id'
  | 'icon.createdBy.children.children'
  | 'icon.createdBy.internal.content'
  | 'icon.createdBy.internal.contentDigest'
  | 'icon.createdBy.internal.description'
  | 'icon.createdBy.internal.fieldOwners'
  | 'icon.createdBy.internal.ignoreType'
  | 'icon.createdBy.internal.mediaType'
  | 'icon.createdBy.internal.owner'
  | 'icon.createdBy.internal.type'
  | 'icon.updatedBy.remoteTypeName'
  | 'icon.updatedBy.remoteId'
  | 'icon.updatedBy.stage'
  | 'icon.updatedBy.createdAt'
  | 'icon.updatedBy.updatedAt'
  | 'icon.updatedBy.publishedAt'
  | 'icon.updatedBy.name'
  | 'icon.updatedBy.picture'
  | 'icon.updatedBy.isActive'
  | 'icon.updatedBy.kind'
  | 'icon.updatedBy.id'
  | 'icon.updatedBy.parent.id'
  | 'icon.updatedBy.parent.children'
  | 'icon.updatedBy.children'
  | 'icon.updatedBy.children.id'
  | 'icon.updatedBy.children.children'
  | 'icon.updatedBy.internal.content'
  | 'icon.updatedBy.internal.contentDigest'
  | 'icon.updatedBy.internal.description'
  | 'icon.updatedBy.internal.fieldOwners'
  | 'icon.updatedBy.internal.ignoreType'
  | 'icon.updatedBy.internal.mediaType'
  | 'icon.updatedBy.internal.owner'
  | 'icon.updatedBy.internal.type'
  | 'icon.publishedBy.remoteTypeName'
  | 'icon.publishedBy.remoteId'
  | 'icon.publishedBy.stage'
  | 'icon.publishedBy.createdAt'
  | 'icon.publishedBy.updatedAt'
  | 'icon.publishedBy.publishedAt'
  | 'icon.publishedBy.name'
  | 'icon.publishedBy.picture'
  | 'icon.publishedBy.isActive'
  | 'icon.publishedBy.kind'
  | 'icon.publishedBy.id'
  | 'icon.publishedBy.parent.id'
  | 'icon.publishedBy.parent.children'
  | 'icon.publishedBy.children'
  | 'icon.publishedBy.children.id'
  | 'icon.publishedBy.children.children'
  | 'icon.publishedBy.internal.content'
  | 'icon.publishedBy.internal.contentDigest'
  | 'icon.publishedBy.internal.description'
  | 'icon.publishedBy.internal.fieldOwners'
  | 'icon.publishedBy.internal.ignoreType'
  | 'icon.publishedBy.internal.mediaType'
  | 'icon.publishedBy.internal.owner'
  | 'icon.publishedBy.internal.type'
  | 'icon.iconAuthor'
  | 'icon.iconAuthor.remoteTypeName'
  | 'icon.iconAuthor.remoteId'
  | 'icon.iconAuthor.stage'
  | 'icon.iconAuthor.createdAt'
  | 'icon.iconAuthor.updatedAt'
  | 'icon.iconAuthor.publishedAt'
  | 'icon.iconAuthor.name'
  | 'icon.iconAuthor.affiliation'
  | 'icon.iconAuthor.slug'
  | 'icon.iconAuthor.description'
  | 'icon.iconAuthor.createdBy.remoteTypeName'
  | 'icon.iconAuthor.createdBy.remoteId'
  | 'icon.iconAuthor.createdBy.stage'
  | 'icon.iconAuthor.createdBy.createdAt'
  | 'icon.iconAuthor.createdBy.updatedAt'
  | 'icon.iconAuthor.createdBy.publishedAt'
  | 'icon.iconAuthor.createdBy.name'
  | 'icon.iconAuthor.createdBy.picture'
  | 'icon.iconAuthor.createdBy.isActive'
  | 'icon.iconAuthor.createdBy.kind'
  | 'icon.iconAuthor.createdBy.id'
  | 'icon.iconAuthor.createdBy.children'
  | 'icon.iconAuthor.updatedBy.remoteTypeName'
  | 'icon.iconAuthor.updatedBy.remoteId'
  | 'icon.iconAuthor.updatedBy.stage'
  | 'icon.iconAuthor.updatedBy.createdAt'
  | 'icon.iconAuthor.updatedBy.updatedAt'
  | 'icon.iconAuthor.updatedBy.publishedAt'
  | 'icon.iconAuthor.updatedBy.name'
  | 'icon.iconAuthor.updatedBy.picture'
  | 'icon.iconAuthor.updatedBy.isActive'
  | 'icon.iconAuthor.updatedBy.kind'
  | 'icon.iconAuthor.updatedBy.id'
  | 'icon.iconAuthor.updatedBy.children'
  | 'icon.iconAuthor.publishedBy.remoteTypeName'
  | 'icon.iconAuthor.publishedBy.remoteId'
  | 'icon.iconAuthor.publishedBy.stage'
  | 'icon.iconAuthor.publishedBy.createdAt'
  | 'icon.iconAuthor.publishedBy.updatedAt'
  | 'icon.iconAuthor.publishedBy.publishedAt'
  | 'icon.iconAuthor.publishedBy.name'
  | 'icon.iconAuthor.publishedBy.picture'
  | 'icon.iconAuthor.publishedBy.isActive'
  | 'icon.iconAuthor.publishedBy.kind'
  | 'icon.iconAuthor.publishedBy.id'
  | 'icon.iconAuthor.publishedBy.children'
  | 'icon.iconAuthor.icon.remoteTypeName'
  | 'icon.iconAuthor.icon.remoteId'
  | 'icon.iconAuthor.icon.locale'
  | 'icon.iconAuthor.icon.stage'
  | 'icon.iconAuthor.icon.createdAt'
  | 'icon.iconAuthor.icon.updatedAt'
  | 'icon.iconAuthor.icon.publishedAt'
  | 'icon.iconAuthor.icon.handle'
  | 'icon.iconAuthor.icon.fileName'
  | 'icon.iconAuthor.icon.height'
  | 'icon.iconAuthor.icon.width'
  | 'icon.iconAuthor.icon.size'
  | 'icon.iconAuthor.icon.mimeType'
  | 'icon.iconAuthor.icon.iconAuthor'
  | 'icon.iconAuthor.icon.url'
  | 'icon.iconAuthor.icon.id'
  | 'icon.iconAuthor.icon.children'
  | 'icon.iconAuthor.id'
  | 'icon.iconAuthor.parent.id'
  | 'icon.iconAuthor.parent.children'
  | 'icon.iconAuthor.children'
  | 'icon.iconAuthor.children.id'
  | 'icon.iconAuthor.children.children'
  | 'icon.iconAuthor.internal.content'
  | 'icon.iconAuthor.internal.contentDigest'
  | 'icon.iconAuthor.internal.description'
  | 'icon.iconAuthor.internal.fieldOwners'
  | 'icon.iconAuthor.internal.ignoreType'
  | 'icon.iconAuthor.internal.mediaType'
  | 'icon.iconAuthor.internal.owner'
  | 'icon.iconAuthor.internal.type'
  | 'icon.url'
  | 'icon.id'
  | 'icon.parent.id'
  | 'icon.parent.parent.id'
  | 'icon.parent.parent.children'
  | 'icon.parent.children'
  | 'icon.parent.children.id'
  | 'icon.parent.children.children'
  | 'icon.parent.internal.content'
  | 'icon.parent.internal.contentDigest'
  | 'icon.parent.internal.description'
  | 'icon.parent.internal.fieldOwners'
  | 'icon.parent.internal.ignoreType'
  | 'icon.parent.internal.mediaType'
  | 'icon.parent.internal.owner'
  | 'icon.parent.internal.type'
  | 'icon.children'
  | 'icon.children.id'
  | 'icon.children.parent.id'
  | 'icon.children.parent.children'
  | 'icon.children.children'
  | 'icon.children.children.id'
  | 'icon.children.children.children'
  | 'icon.children.internal.content'
  | 'icon.children.internal.contentDigest'
  | 'icon.children.internal.description'
  | 'icon.children.internal.fieldOwners'
  | 'icon.children.internal.ignoreType'
  | 'icon.children.internal.mediaType'
  | 'icon.children.internal.owner'
  | 'icon.children.internal.type'
  | 'icon.internal.content'
  | 'icon.internal.contentDigest'
  | 'icon.internal.description'
  | 'icon.internal.fieldOwners'
  | 'icon.internal.ignoreType'
  | 'icon.internal.mediaType'
  | 'icon.internal.owner'
  | 'icon.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GraphCMS_AuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_AuthorEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_Author>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphCMS_AuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphCMS_AuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphCMS_ScheduledReleaseFilterInput = {
  readonly remoteTypeName: Maybe<StringQueryOperatorInput>;
  readonly remoteId: Maybe<IDQueryOperatorInput>;
  readonly stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  readonly createdAt: Maybe<JSONQueryOperatorInput>;
  readonly updatedAt: Maybe<JSONQueryOperatorInput>;
  readonly publishedAt: Maybe<JSONQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly errorMessage: Maybe<StringQueryOperatorInput>;
  readonly isActive: Maybe<BooleanQueryOperatorInput>;
  readonly isImplicit: Maybe<BooleanQueryOperatorInput>;
  readonly releaseAt: Maybe<JSONQueryOperatorInput>;
  readonly createdBy: Maybe<GraphCMS_UserFilterInput>;
  readonly updatedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly publishedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly operations: Maybe<GraphCMS_ScheduledOperationFilterListInput>;
  readonly status: Maybe<GraphCMS_ScheduledReleaseStatusQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GraphCMS_ScheduledOperationFilterListInput = {
  readonly elemMatch: Maybe<GraphCMS_ScheduledOperationFilterInput>;
};

type GraphCMS_ScheduledOperationFilterInput = {
  readonly remoteTypeName: Maybe<StringQueryOperatorInput>;
  readonly remoteId: Maybe<IDQueryOperatorInput>;
  readonly stage: Maybe<GraphCMS_StageQueryOperatorInput>;
  readonly createdAt: Maybe<JSONQueryOperatorInput>;
  readonly updatedAt: Maybe<JSONQueryOperatorInput>;
  readonly publishedAt: Maybe<JSONQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly errorMessage: Maybe<StringQueryOperatorInput>;
  readonly rawPayload: Maybe<JSONQueryOperatorInput>;
  readonly createdBy: Maybe<GraphCMS_UserFilterInput>;
  readonly updatedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly publishedBy: Maybe<GraphCMS_UserFilterInput>;
  readonly release: Maybe<GraphCMS_ScheduledReleaseFilterInput>;
  readonly status: Maybe<GraphCMS_ScheduledOperationStatusQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GraphCMS_ScheduledOperationStatusQueryOperatorInput = {
  readonly eq: Maybe<GraphCMS_ScheduledOperationStatus>;
  readonly ne: Maybe<GraphCMS_ScheduledOperationStatus>;
  readonly in: Maybe<ReadonlyArray<Maybe<GraphCMS_ScheduledOperationStatus>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<GraphCMS_ScheduledOperationStatus>>>;
};

type GraphCMS_ScheduledReleaseStatusQueryOperatorInput = {
  readonly eq: Maybe<GraphCMS_ScheduledReleaseStatus>;
  readonly ne: Maybe<GraphCMS_ScheduledReleaseStatus>;
  readonly in: Maybe<ReadonlyArray<Maybe<GraphCMS_ScheduledReleaseStatus>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<GraphCMS_ScheduledReleaseStatus>>>;
};

type GraphCMS_ScheduledOperationConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_ScheduledOperationEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_ScheduledOperation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphCMS_ScheduledOperationGroupConnection>;
};


type GraphCMS_ScheduledOperationConnection_distinctArgs = {
  field: GraphCMS_ScheduledOperationFieldsEnum;
};


type GraphCMS_ScheduledOperationConnection_maxArgs = {
  field: GraphCMS_ScheduledOperationFieldsEnum;
};


type GraphCMS_ScheduledOperationConnection_minArgs = {
  field: GraphCMS_ScheduledOperationFieldsEnum;
};


type GraphCMS_ScheduledOperationConnection_sumArgs = {
  field: GraphCMS_ScheduledOperationFieldsEnum;
};


type GraphCMS_ScheduledOperationConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphCMS_ScheduledOperationFieldsEnum;
};

type GraphCMS_ScheduledOperationEdge = {
  readonly next: Maybe<GraphCMS_ScheduledOperation>;
  readonly node: GraphCMS_ScheduledOperation;
  readonly previous: Maybe<GraphCMS_ScheduledOperation>;
};

type GraphCMS_ScheduledOperationFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'description'
  | 'errorMessage'
  | 'rawPayload'
  | 'createdBy.remoteTypeName'
  | 'createdBy.remoteId'
  | 'createdBy.stage'
  | 'createdBy.createdAt'
  | 'createdBy.updatedAt'
  | 'createdBy.publishedAt'
  | 'createdBy.name'
  | 'createdBy.picture'
  | 'createdBy.isActive'
  | 'createdBy.kind'
  | 'createdBy.id'
  | 'createdBy.parent.id'
  | 'createdBy.parent.parent.id'
  | 'createdBy.parent.parent.children'
  | 'createdBy.parent.children'
  | 'createdBy.parent.children.id'
  | 'createdBy.parent.children.children'
  | 'createdBy.parent.internal.content'
  | 'createdBy.parent.internal.contentDigest'
  | 'createdBy.parent.internal.description'
  | 'createdBy.parent.internal.fieldOwners'
  | 'createdBy.parent.internal.ignoreType'
  | 'createdBy.parent.internal.mediaType'
  | 'createdBy.parent.internal.owner'
  | 'createdBy.parent.internal.type'
  | 'createdBy.children'
  | 'createdBy.children.id'
  | 'createdBy.children.parent.id'
  | 'createdBy.children.parent.children'
  | 'createdBy.children.children'
  | 'createdBy.children.children.id'
  | 'createdBy.children.children.children'
  | 'createdBy.children.internal.content'
  | 'createdBy.children.internal.contentDigest'
  | 'createdBy.children.internal.description'
  | 'createdBy.children.internal.fieldOwners'
  | 'createdBy.children.internal.ignoreType'
  | 'createdBy.children.internal.mediaType'
  | 'createdBy.children.internal.owner'
  | 'createdBy.children.internal.type'
  | 'createdBy.internal.content'
  | 'createdBy.internal.contentDigest'
  | 'createdBy.internal.description'
  | 'createdBy.internal.fieldOwners'
  | 'createdBy.internal.ignoreType'
  | 'createdBy.internal.mediaType'
  | 'createdBy.internal.owner'
  | 'createdBy.internal.type'
  | 'updatedBy.remoteTypeName'
  | 'updatedBy.remoteId'
  | 'updatedBy.stage'
  | 'updatedBy.createdAt'
  | 'updatedBy.updatedAt'
  | 'updatedBy.publishedAt'
  | 'updatedBy.name'
  | 'updatedBy.picture'
  | 'updatedBy.isActive'
  | 'updatedBy.kind'
  | 'updatedBy.id'
  | 'updatedBy.parent.id'
  | 'updatedBy.parent.parent.id'
  | 'updatedBy.parent.parent.children'
  | 'updatedBy.parent.children'
  | 'updatedBy.parent.children.id'
  | 'updatedBy.parent.children.children'
  | 'updatedBy.parent.internal.content'
  | 'updatedBy.parent.internal.contentDigest'
  | 'updatedBy.parent.internal.description'
  | 'updatedBy.parent.internal.fieldOwners'
  | 'updatedBy.parent.internal.ignoreType'
  | 'updatedBy.parent.internal.mediaType'
  | 'updatedBy.parent.internal.owner'
  | 'updatedBy.parent.internal.type'
  | 'updatedBy.children'
  | 'updatedBy.children.id'
  | 'updatedBy.children.parent.id'
  | 'updatedBy.children.parent.children'
  | 'updatedBy.children.children'
  | 'updatedBy.children.children.id'
  | 'updatedBy.children.children.children'
  | 'updatedBy.children.internal.content'
  | 'updatedBy.children.internal.contentDigest'
  | 'updatedBy.children.internal.description'
  | 'updatedBy.children.internal.fieldOwners'
  | 'updatedBy.children.internal.ignoreType'
  | 'updatedBy.children.internal.mediaType'
  | 'updatedBy.children.internal.owner'
  | 'updatedBy.children.internal.type'
  | 'updatedBy.internal.content'
  | 'updatedBy.internal.contentDigest'
  | 'updatedBy.internal.description'
  | 'updatedBy.internal.fieldOwners'
  | 'updatedBy.internal.ignoreType'
  | 'updatedBy.internal.mediaType'
  | 'updatedBy.internal.owner'
  | 'updatedBy.internal.type'
  | 'publishedBy.remoteTypeName'
  | 'publishedBy.remoteId'
  | 'publishedBy.stage'
  | 'publishedBy.createdAt'
  | 'publishedBy.updatedAt'
  | 'publishedBy.publishedAt'
  | 'publishedBy.name'
  | 'publishedBy.picture'
  | 'publishedBy.isActive'
  | 'publishedBy.kind'
  | 'publishedBy.id'
  | 'publishedBy.parent.id'
  | 'publishedBy.parent.parent.id'
  | 'publishedBy.parent.parent.children'
  | 'publishedBy.parent.children'
  | 'publishedBy.parent.children.id'
  | 'publishedBy.parent.children.children'
  | 'publishedBy.parent.internal.content'
  | 'publishedBy.parent.internal.contentDigest'
  | 'publishedBy.parent.internal.description'
  | 'publishedBy.parent.internal.fieldOwners'
  | 'publishedBy.parent.internal.ignoreType'
  | 'publishedBy.parent.internal.mediaType'
  | 'publishedBy.parent.internal.owner'
  | 'publishedBy.parent.internal.type'
  | 'publishedBy.children'
  | 'publishedBy.children.id'
  | 'publishedBy.children.parent.id'
  | 'publishedBy.children.parent.children'
  | 'publishedBy.children.children'
  | 'publishedBy.children.children.id'
  | 'publishedBy.children.children.children'
  | 'publishedBy.children.internal.content'
  | 'publishedBy.children.internal.contentDigest'
  | 'publishedBy.children.internal.description'
  | 'publishedBy.children.internal.fieldOwners'
  | 'publishedBy.children.internal.ignoreType'
  | 'publishedBy.children.internal.mediaType'
  | 'publishedBy.children.internal.owner'
  | 'publishedBy.children.internal.type'
  | 'publishedBy.internal.content'
  | 'publishedBy.internal.contentDigest'
  | 'publishedBy.internal.description'
  | 'publishedBy.internal.fieldOwners'
  | 'publishedBy.internal.ignoreType'
  | 'publishedBy.internal.mediaType'
  | 'publishedBy.internal.owner'
  | 'publishedBy.internal.type'
  | 'release.remoteTypeName'
  | 'release.remoteId'
  | 'release.stage'
  | 'release.createdAt'
  | 'release.updatedAt'
  | 'release.publishedAt'
  | 'release.title'
  | 'release.description'
  | 'release.errorMessage'
  | 'release.isActive'
  | 'release.isImplicit'
  | 'release.releaseAt'
  | 'release.createdBy.remoteTypeName'
  | 'release.createdBy.remoteId'
  | 'release.createdBy.stage'
  | 'release.createdBy.createdAt'
  | 'release.createdBy.updatedAt'
  | 'release.createdBy.publishedAt'
  | 'release.createdBy.name'
  | 'release.createdBy.picture'
  | 'release.createdBy.isActive'
  | 'release.createdBy.kind'
  | 'release.createdBy.id'
  | 'release.createdBy.parent.id'
  | 'release.createdBy.parent.children'
  | 'release.createdBy.children'
  | 'release.createdBy.children.id'
  | 'release.createdBy.children.children'
  | 'release.createdBy.internal.content'
  | 'release.createdBy.internal.contentDigest'
  | 'release.createdBy.internal.description'
  | 'release.createdBy.internal.fieldOwners'
  | 'release.createdBy.internal.ignoreType'
  | 'release.createdBy.internal.mediaType'
  | 'release.createdBy.internal.owner'
  | 'release.createdBy.internal.type'
  | 'release.updatedBy.remoteTypeName'
  | 'release.updatedBy.remoteId'
  | 'release.updatedBy.stage'
  | 'release.updatedBy.createdAt'
  | 'release.updatedBy.updatedAt'
  | 'release.updatedBy.publishedAt'
  | 'release.updatedBy.name'
  | 'release.updatedBy.picture'
  | 'release.updatedBy.isActive'
  | 'release.updatedBy.kind'
  | 'release.updatedBy.id'
  | 'release.updatedBy.parent.id'
  | 'release.updatedBy.parent.children'
  | 'release.updatedBy.children'
  | 'release.updatedBy.children.id'
  | 'release.updatedBy.children.children'
  | 'release.updatedBy.internal.content'
  | 'release.updatedBy.internal.contentDigest'
  | 'release.updatedBy.internal.description'
  | 'release.updatedBy.internal.fieldOwners'
  | 'release.updatedBy.internal.ignoreType'
  | 'release.updatedBy.internal.mediaType'
  | 'release.updatedBy.internal.owner'
  | 'release.updatedBy.internal.type'
  | 'release.publishedBy.remoteTypeName'
  | 'release.publishedBy.remoteId'
  | 'release.publishedBy.stage'
  | 'release.publishedBy.createdAt'
  | 'release.publishedBy.updatedAt'
  | 'release.publishedBy.publishedAt'
  | 'release.publishedBy.name'
  | 'release.publishedBy.picture'
  | 'release.publishedBy.isActive'
  | 'release.publishedBy.kind'
  | 'release.publishedBy.id'
  | 'release.publishedBy.parent.id'
  | 'release.publishedBy.parent.children'
  | 'release.publishedBy.children'
  | 'release.publishedBy.children.id'
  | 'release.publishedBy.children.children'
  | 'release.publishedBy.internal.content'
  | 'release.publishedBy.internal.contentDigest'
  | 'release.publishedBy.internal.description'
  | 'release.publishedBy.internal.fieldOwners'
  | 'release.publishedBy.internal.ignoreType'
  | 'release.publishedBy.internal.mediaType'
  | 'release.publishedBy.internal.owner'
  | 'release.publishedBy.internal.type'
  | 'release.operations'
  | 'release.operations.remoteTypeName'
  | 'release.operations.remoteId'
  | 'release.operations.stage'
  | 'release.operations.createdAt'
  | 'release.operations.updatedAt'
  | 'release.operations.publishedAt'
  | 'release.operations.description'
  | 'release.operations.errorMessage'
  | 'release.operations.rawPayload'
  | 'release.operations.createdBy.remoteTypeName'
  | 'release.operations.createdBy.remoteId'
  | 'release.operations.createdBy.stage'
  | 'release.operations.createdBy.createdAt'
  | 'release.operations.createdBy.updatedAt'
  | 'release.operations.createdBy.publishedAt'
  | 'release.operations.createdBy.name'
  | 'release.operations.createdBy.picture'
  | 'release.operations.createdBy.isActive'
  | 'release.operations.createdBy.kind'
  | 'release.operations.createdBy.id'
  | 'release.operations.createdBy.children'
  | 'release.operations.updatedBy.remoteTypeName'
  | 'release.operations.updatedBy.remoteId'
  | 'release.operations.updatedBy.stage'
  | 'release.operations.updatedBy.createdAt'
  | 'release.operations.updatedBy.updatedAt'
  | 'release.operations.updatedBy.publishedAt'
  | 'release.operations.updatedBy.name'
  | 'release.operations.updatedBy.picture'
  | 'release.operations.updatedBy.isActive'
  | 'release.operations.updatedBy.kind'
  | 'release.operations.updatedBy.id'
  | 'release.operations.updatedBy.children'
  | 'release.operations.publishedBy.remoteTypeName'
  | 'release.operations.publishedBy.remoteId'
  | 'release.operations.publishedBy.stage'
  | 'release.operations.publishedBy.createdAt'
  | 'release.operations.publishedBy.updatedAt'
  | 'release.operations.publishedBy.publishedAt'
  | 'release.operations.publishedBy.name'
  | 'release.operations.publishedBy.picture'
  | 'release.operations.publishedBy.isActive'
  | 'release.operations.publishedBy.kind'
  | 'release.operations.publishedBy.id'
  | 'release.operations.publishedBy.children'
  | 'release.operations.release.remoteTypeName'
  | 'release.operations.release.remoteId'
  | 'release.operations.release.stage'
  | 'release.operations.release.createdAt'
  | 'release.operations.release.updatedAt'
  | 'release.operations.release.publishedAt'
  | 'release.operations.release.title'
  | 'release.operations.release.description'
  | 'release.operations.release.errorMessage'
  | 'release.operations.release.isActive'
  | 'release.operations.release.isImplicit'
  | 'release.operations.release.releaseAt'
  | 'release.operations.release.operations'
  | 'release.operations.release.status'
  | 'release.operations.release.id'
  | 'release.operations.release.children'
  | 'release.operations.status'
  | 'release.operations.id'
  | 'release.operations.parent.id'
  | 'release.operations.parent.children'
  | 'release.operations.children'
  | 'release.operations.children.id'
  | 'release.operations.children.children'
  | 'release.operations.internal.content'
  | 'release.operations.internal.contentDigest'
  | 'release.operations.internal.description'
  | 'release.operations.internal.fieldOwners'
  | 'release.operations.internal.ignoreType'
  | 'release.operations.internal.mediaType'
  | 'release.operations.internal.owner'
  | 'release.operations.internal.type'
  | 'release.status'
  | 'release.id'
  | 'release.parent.id'
  | 'release.parent.parent.id'
  | 'release.parent.parent.children'
  | 'release.parent.children'
  | 'release.parent.children.id'
  | 'release.parent.children.children'
  | 'release.parent.internal.content'
  | 'release.parent.internal.contentDigest'
  | 'release.parent.internal.description'
  | 'release.parent.internal.fieldOwners'
  | 'release.parent.internal.ignoreType'
  | 'release.parent.internal.mediaType'
  | 'release.parent.internal.owner'
  | 'release.parent.internal.type'
  | 'release.children'
  | 'release.children.id'
  | 'release.children.parent.id'
  | 'release.children.parent.children'
  | 'release.children.children'
  | 'release.children.children.id'
  | 'release.children.children.children'
  | 'release.children.internal.content'
  | 'release.children.internal.contentDigest'
  | 'release.children.internal.description'
  | 'release.children.internal.fieldOwners'
  | 'release.children.internal.ignoreType'
  | 'release.children.internal.mediaType'
  | 'release.children.internal.owner'
  | 'release.children.internal.type'
  | 'release.internal.content'
  | 'release.internal.contentDigest'
  | 'release.internal.description'
  | 'release.internal.fieldOwners'
  | 'release.internal.ignoreType'
  | 'release.internal.mediaType'
  | 'release.internal.owner'
  | 'release.internal.type'
  | 'status'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GraphCMS_ScheduledOperationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_ScheduledOperationEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_ScheduledOperation>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphCMS_ScheduledOperationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphCMS_ScheduledOperationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphCMS_ScheduledReleaseConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_ScheduledReleaseEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_ScheduledRelease>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphCMS_ScheduledReleaseGroupConnection>;
};


type GraphCMS_ScheduledReleaseConnection_distinctArgs = {
  field: GraphCMS_ScheduledReleaseFieldsEnum;
};


type GraphCMS_ScheduledReleaseConnection_maxArgs = {
  field: GraphCMS_ScheduledReleaseFieldsEnum;
};


type GraphCMS_ScheduledReleaseConnection_minArgs = {
  field: GraphCMS_ScheduledReleaseFieldsEnum;
};


type GraphCMS_ScheduledReleaseConnection_sumArgs = {
  field: GraphCMS_ScheduledReleaseFieldsEnum;
};


type GraphCMS_ScheduledReleaseConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphCMS_ScheduledReleaseFieldsEnum;
};

type GraphCMS_ScheduledReleaseEdge = {
  readonly next: Maybe<GraphCMS_ScheduledRelease>;
  readonly node: GraphCMS_ScheduledRelease;
  readonly previous: Maybe<GraphCMS_ScheduledRelease>;
};

type GraphCMS_ScheduledReleaseFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'createdAt'
  | 'updatedAt'
  | 'publishedAt'
  | 'title'
  | 'description'
  | 'errorMessage'
  | 'isActive'
  | 'isImplicit'
  | 'releaseAt'
  | 'createdBy.remoteTypeName'
  | 'createdBy.remoteId'
  | 'createdBy.stage'
  | 'createdBy.createdAt'
  | 'createdBy.updatedAt'
  | 'createdBy.publishedAt'
  | 'createdBy.name'
  | 'createdBy.picture'
  | 'createdBy.isActive'
  | 'createdBy.kind'
  | 'createdBy.id'
  | 'createdBy.parent.id'
  | 'createdBy.parent.parent.id'
  | 'createdBy.parent.parent.children'
  | 'createdBy.parent.children'
  | 'createdBy.parent.children.id'
  | 'createdBy.parent.children.children'
  | 'createdBy.parent.internal.content'
  | 'createdBy.parent.internal.contentDigest'
  | 'createdBy.parent.internal.description'
  | 'createdBy.parent.internal.fieldOwners'
  | 'createdBy.parent.internal.ignoreType'
  | 'createdBy.parent.internal.mediaType'
  | 'createdBy.parent.internal.owner'
  | 'createdBy.parent.internal.type'
  | 'createdBy.children'
  | 'createdBy.children.id'
  | 'createdBy.children.parent.id'
  | 'createdBy.children.parent.children'
  | 'createdBy.children.children'
  | 'createdBy.children.children.id'
  | 'createdBy.children.children.children'
  | 'createdBy.children.internal.content'
  | 'createdBy.children.internal.contentDigest'
  | 'createdBy.children.internal.description'
  | 'createdBy.children.internal.fieldOwners'
  | 'createdBy.children.internal.ignoreType'
  | 'createdBy.children.internal.mediaType'
  | 'createdBy.children.internal.owner'
  | 'createdBy.children.internal.type'
  | 'createdBy.internal.content'
  | 'createdBy.internal.contentDigest'
  | 'createdBy.internal.description'
  | 'createdBy.internal.fieldOwners'
  | 'createdBy.internal.ignoreType'
  | 'createdBy.internal.mediaType'
  | 'createdBy.internal.owner'
  | 'createdBy.internal.type'
  | 'updatedBy.remoteTypeName'
  | 'updatedBy.remoteId'
  | 'updatedBy.stage'
  | 'updatedBy.createdAt'
  | 'updatedBy.updatedAt'
  | 'updatedBy.publishedAt'
  | 'updatedBy.name'
  | 'updatedBy.picture'
  | 'updatedBy.isActive'
  | 'updatedBy.kind'
  | 'updatedBy.id'
  | 'updatedBy.parent.id'
  | 'updatedBy.parent.parent.id'
  | 'updatedBy.parent.parent.children'
  | 'updatedBy.parent.children'
  | 'updatedBy.parent.children.id'
  | 'updatedBy.parent.children.children'
  | 'updatedBy.parent.internal.content'
  | 'updatedBy.parent.internal.contentDigest'
  | 'updatedBy.parent.internal.description'
  | 'updatedBy.parent.internal.fieldOwners'
  | 'updatedBy.parent.internal.ignoreType'
  | 'updatedBy.parent.internal.mediaType'
  | 'updatedBy.parent.internal.owner'
  | 'updatedBy.parent.internal.type'
  | 'updatedBy.children'
  | 'updatedBy.children.id'
  | 'updatedBy.children.parent.id'
  | 'updatedBy.children.parent.children'
  | 'updatedBy.children.children'
  | 'updatedBy.children.children.id'
  | 'updatedBy.children.children.children'
  | 'updatedBy.children.internal.content'
  | 'updatedBy.children.internal.contentDigest'
  | 'updatedBy.children.internal.description'
  | 'updatedBy.children.internal.fieldOwners'
  | 'updatedBy.children.internal.ignoreType'
  | 'updatedBy.children.internal.mediaType'
  | 'updatedBy.children.internal.owner'
  | 'updatedBy.children.internal.type'
  | 'updatedBy.internal.content'
  | 'updatedBy.internal.contentDigest'
  | 'updatedBy.internal.description'
  | 'updatedBy.internal.fieldOwners'
  | 'updatedBy.internal.ignoreType'
  | 'updatedBy.internal.mediaType'
  | 'updatedBy.internal.owner'
  | 'updatedBy.internal.type'
  | 'publishedBy.remoteTypeName'
  | 'publishedBy.remoteId'
  | 'publishedBy.stage'
  | 'publishedBy.createdAt'
  | 'publishedBy.updatedAt'
  | 'publishedBy.publishedAt'
  | 'publishedBy.name'
  | 'publishedBy.picture'
  | 'publishedBy.isActive'
  | 'publishedBy.kind'
  | 'publishedBy.id'
  | 'publishedBy.parent.id'
  | 'publishedBy.parent.parent.id'
  | 'publishedBy.parent.parent.children'
  | 'publishedBy.parent.children'
  | 'publishedBy.parent.children.id'
  | 'publishedBy.parent.children.children'
  | 'publishedBy.parent.internal.content'
  | 'publishedBy.parent.internal.contentDigest'
  | 'publishedBy.parent.internal.description'
  | 'publishedBy.parent.internal.fieldOwners'
  | 'publishedBy.parent.internal.ignoreType'
  | 'publishedBy.parent.internal.mediaType'
  | 'publishedBy.parent.internal.owner'
  | 'publishedBy.parent.internal.type'
  | 'publishedBy.children'
  | 'publishedBy.children.id'
  | 'publishedBy.children.parent.id'
  | 'publishedBy.children.parent.children'
  | 'publishedBy.children.children'
  | 'publishedBy.children.children.id'
  | 'publishedBy.children.children.children'
  | 'publishedBy.children.internal.content'
  | 'publishedBy.children.internal.contentDigest'
  | 'publishedBy.children.internal.description'
  | 'publishedBy.children.internal.fieldOwners'
  | 'publishedBy.children.internal.ignoreType'
  | 'publishedBy.children.internal.mediaType'
  | 'publishedBy.children.internal.owner'
  | 'publishedBy.children.internal.type'
  | 'publishedBy.internal.content'
  | 'publishedBy.internal.contentDigest'
  | 'publishedBy.internal.description'
  | 'publishedBy.internal.fieldOwners'
  | 'publishedBy.internal.ignoreType'
  | 'publishedBy.internal.mediaType'
  | 'publishedBy.internal.owner'
  | 'publishedBy.internal.type'
  | 'operations'
  | 'operations.remoteTypeName'
  | 'operations.remoteId'
  | 'operations.stage'
  | 'operations.createdAt'
  | 'operations.updatedAt'
  | 'operations.publishedAt'
  | 'operations.description'
  | 'operations.errorMessage'
  | 'operations.rawPayload'
  | 'operations.createdBy.remoteTypeName'
  | 'operations.createdBy.remoteId'
  | 'operations.createdBy.stage'
  | 'operations.createdBy.createdAt'
  | 'operations.createdBy.updatedAt'
  | 'operations.createdBy.publishedAt'
  | 'operations.createdBy.name'
  | 'operations.createdBy.picture'
  | 'operations.createdBy.isActive'
  | 'operations.createdBy.kind'
  | 'operations.createdBy.id'
  | 'operations.createdBy.parent.id'
  | 'operations.createdBy.parent.children'
  | 'operations.createdBy.children'
  | 'operations.createdBy.children.id'
  | 'operations.createdBy.children.children'
  | 'operations.createdBy.internal.content'
  | 'operations.createdBy.internal.contentDigest'
  | 'operations.createdBy.internal.description'
  | 'operations.createdBy.internal.fieldOwners'
  | 'operations.createdBy.internal.ignoreType'
  | 'operations.createdBy.internal.mediaType'
  | 'operations.createdBy.internal.owner'
  | 'operations.createdBy.internal.type'
  | 'operations.updatedBy.remoteTypeName'
  | 'operations.updatedBy.remoteId'
  | 'operations.updatedBy.stage'
  | 'operations.updatedBy.createdAt'
  | 'operations.updatedBy.updatedAt'
  | 'operations.updatedBy.publishedAt'
  | 'operations.updatedBy.name'
  | 'operations.updatedBy.picture'
  | 'operations.updatedBy.isActive'
  | 'operations.updatedBy.kind'
  | 'operations.updatedBy.id'
  | 'operations.updatedBy.parent.id'
  | 'operations.updatedBy.parent.children'
  | 'operations.updatedBy.children'
  | 'operations.updatedBy.children.id'
  | 'operations.updatedBy.children.children'
  | 'operations.updatedBy.internal.content'
  | 'operations.updatedBy.internal.contentDigest'
  | 'operations.updatedBy.internal.description'
  | 'operations.updatedBy.internal.fieldOwners'
  | 'operations.updatedBy.internal.ignoreType'
  | 'operations.updatedBy.internal.mediaType'
  | 'operations.updatedBy.internal.owner'
  | 'operations.updatedBy.internal.type'
  | 'operations.publishedBy.remoteTypeName'
  | 'operations.publishedBy.remoteId'
  | 'operations.publishedBy.stage'
  | 'operations.publishedBy.createdAt'
  | 'operations.publishedBy.updatedAt'
  | 'operations.publishedBy.publishedAt'
  | 'operations.publishedBy.name'
  | 'operations.publishedBy.picture'
  | 'operations.publishedBy.isActive'
  | 'operations.publishedBy.kind'
  | 'operations.publishedBy.id'
  | 'operations.publishedBy.parent.id'
  | 'operations.publishedBy.parent.children'
  | 'operations.publishedBy.children'
  | 'operations.publishedBy.children.id'
  | 'operations.publishedBy.children.children'
  | 'operations.publishedBy.internal.content'
  | 'operations.publishedBy.internal.contentDigest'
  | 'operations.publishedBy.internal.description'
  | 'operations.publishedBy.internal.fieldOwners'
  | 'operations.publishedBy.internal.ignoreType'
  | 'operations.publishedBy.internal.mediaType'
  | 'operations.publishedBy.internal.owner'
  | 'operations.publishedBy.internal.type'
  | 'operations.release.remoteTypeName'
  | 'operations.release.remoteId'
  | 'operations.release.stage'
  | 'operations.release.createdAt'
  | 'operations.release.updatedAt'
  | 'operations.release.publishedAt'
  | 'operations.release.title'
  | 'operations.release.description'
  | 'operations.release.errorMessage'
  | 'operations.release.isActive'
  | 'operations.release.isImplicit'
  | 'operations.release.releaseAt'
  | 'operations.release.createdBy.remoteTypeName'
  | 'operations.release.createdBy.remoteId'
  | 'operations.release.createdBy.stage'
  | 'operations.release.createdBy.createdAt'
  | 'operations.release.createdBy.updatedAt'
  | 'operations.release.createdBy.publishedAt'
  | 'operations.release.createdBy.name'
  | 'operations.release.createdBy.picture'
  | 'operations.release.createdBy.isActive'
  | 'operations.release.createdBy.kind'
  | 'operations.release.createdBy.id'
  | 'operations.release.createdBy.children'
  | 'operations.release.updatedBy.remoteTypeName'
  | 'operations.release.updatedBy.remoteId'
  | 'operations.release.updatedBy.stage'
  | 'operations.release.updatedBy.createdAt'
  | 'operations.release.updatedBy.updatedAt'
  | 'operations.release.updatedBy.publishedAt'
  | 'operations.release.updatedBy.name'
  | 'operations.release.updatedBy.picture'
  | 'operations.release.updatedBy.isActive'
  | 'operations.release.updatedBy.kind'
  | 'operations.release.updatedBy.id'
  | 'operations.release.updatedBy.children'
  | 'operations.release.publishedBy.remoteTypeName'
  | 'operations.release.publishedBy.remoteId'
  | 'operations.release.publishedBy.stage'
  | 'operations.release.publishedBy.createdAt'
  | 'operations.release.publishedBy.updatedAt'
  | 'operations.release.publishedBy.publishedAt'
  | 'operations.release.publishedBy.name'
  | 'operations.release.publishedBy.picture'
  | 'operations.release.publishedBy.isActive'
  | 'operations.release.publishedBy.kind'
  | 'operations.release.publishedBy.id'
  | 'operations.release.publishedBy.children'
  | 'operations.release.operations'
  | 'operations.release.operations.remoteTypeName'
  | 'operations.release.operations.remoteId'
  | 'operations.release.operations.stage'
  | 'operations.release.operations.createdAt'
  | 'operations.release.operations.updatedAt'
  | 'operations.release.operations.publishedAt'
  | 'operations.release.operations.description'
  | 'operations.release.operations.errorMessage'
  | 'operations.release.operations.rawPayload'
  | 'operations.release.operations.status'
  | 'operations.release.operations.id'
  | 'operations.release.operations.children'
  | 'operations.release.status'
  | 'operations.release.id'
  | 'operations.release.parent.id'
  | 'operations.release.parent.children'
  | 'operations.release.children'
  | 'operations.release.children.id'
  | 'operations.release.children.children'
  | 'operations.release.internal.content'
  | 'operations.release.internal.contentDigest'
  | 'operations.release.internal.description'
  | 'operations.release.internal.fieldOwners'
  | 'operations.release.internal.ignoreType'
  | 'operations.release.internal.mediaType'
  | 'operations.release.internal.owner'
  | 'operations.release.internal.type'
  | 'operations.status'
  | 'operations.id'
  | 'operations.parent.id'
  | 'operations.parent.parent.id'
  | 'operations.parent.parent.children'
  | 'operations.parent.children'
  | 'operations.parent.children.id'
  | 'operations.parent.children.children'
  | 'operations.parent.internal.content'
  | 'operations.parent.internal.contentDigest'
  | 'operations.parent.internal.description'
  | 'operations.parent.internal.fieldOwners'
  | 'operations.parent.internal.ignoreType'
  | 'operations.parent.internal.mediaType'
  | 'operations.parent.internal.owner'
  | 'operations.parent.internal.type'
  | 'operations.children'
  | 'operations.children.id'
  | 'operations.children.parent.id'
  | 'operations.children.parent.children'
  | 'operations.children.children'
  | 'operations.children.children.id'
  | 'operations.children.children.children'
  | 'operations.children.internal.content'
  | 'operations.children.internal.contentDigest'
  | 'operations.children.internal.description'
  | 'operations.children.internal.fieldOwners'
  | 'operations.children.internal.ignoreType'
  | 'operations.children.internal.mediaType'
  | 'operations.children.internal.owner'
  | 'operations.children.internal.type'
  | 'operations.internal.content'
  | 'operations.internal.contentDigest'
  | 'operations.internal.description'
  | 'operations.internal.fieldOwners'
  | 'operations.internal.ignoreType'
  | 'operations.internal.mediaType'
  | 'operations.internal.owner'
  | 'operations.internal.type'
  | 'status'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GraphCMS_ScheduledReleaseGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphCMS_ScheduledReleaseEdge>;
  readonly nodes: ReadonlyArray<GraphCMS_ScheduledRelease>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphCMS_ScheduledReleaseSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphCMS_ScheduledReleaseFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.plugins'
  | 'pluginOptions.plugins.resolve'
  | 'pluginOptions.plugins.id'
  | 'pluginOptions.plugins.name'
  | 'pluginOptions.plugins.version'
  | 'pluginOptions.plugins.pluginOptions.maxWidth'
  | 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.plugins.pluginOptions.showCaptions'
  | 'pluginOptions.plugins.pluginOptions.markdownCaptions'
  | 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.plugins.pluginOptions.backgroundColor'
  | 'pluginOptions.plugins.pluginOptions.quality'
  | 'pluginOptions.plugins.pluginOptions.withWebp'
  | 'pluginOptions.plugins.pluginOptions.tracedSVG'
  | 'pluginOptions.plugins.pluginOptions.loading'
  | 'pluginOptions.plugins.pluginOptions.decoding'
  | 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.plugins.pluginOptions.disableBgImage'
  | 'pluginOptions.plugins.pluginOptions.wrapperStyle'
  | 'pluginOptions.plugins.nodeAPIs'
  | 'pluginOptions.plugins.browserAPIs'
  | 'pluginOptions.plugins.pluginFilepath'
  | 'pluginOptions.sourceMap'
  | 'pluginOptions.autoLabel'
  | 'pluginOptions.labelFormat'
  | 'pluginOptions.cssPropOptimization'
  | 'pluginOptions.path'
  | 'pluginOptions.name'
  | 'pluginOptions.endpoint'
  | 'pluginOptions.token'
  | 'pluginOptions.stages'
  | 'pluginOptions.buildMarkdownNodes'
  | 'pluginOptions.downloadLocalImages'
  | 'pluginOptions.fragmentsPath'
  | 'pluginOptions.locales'
  | 'pluginOptions.typePrefix'
  | 'pluginOptions.concurrency'
  | 'pluginOptions.maxWidth'
  | 'pluginOptions.linkImagesToOriginal'
  | 'pluginOptions.showCaptions'
  | 'pluginOptions.markdownCaptions'
  | 'pluginOptions.sizeByPixelDensity'
  | 'pluginOptions.backgroundColor'
  | 'pluginOptions.quality'
  | 'pluginOptions.withWebp'
  | 'pluginOptions.tracedSVG'
  | 'pluginOptions.loading'
  | 'pluginOptions.decoding'
  | 'pluginOptions.disableBgImageOnAlpha'
  | 'pluginOptions.disableBgImage'
  | 'pluginOptions.wrapperStyle'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.query'
  | 'pluginOptions.feeds'
  | 'pluginOptions.feeds.query'
  | 'pluginOptions.feeds.output'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type BlogPostBySlugQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId: Maybe<Scalars['String']>;
  nextPostId: Maybe<Scalars['String']>;
}>;


type BlogPostBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'id' | 'excerpt' | 'html'>
    & { readonly frontmatter: Maybe<Pick<Frontmatter, 'title' | 'date' | 'description'>> }
  )>, readonly previous: Maybe<{ readonly fields: Maybe<Pick<Fields, 'slug'>>, readonly frontmatter: Maybe<Pick<Frontmatter, 'title'>> }>, readonly next: Maybe<{ readonly fields: Maybe<Pick<Fields, 'slug'>>, readonly frontmatter: Maybe<Pick<Frontmatter, 'title'>> }> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type blogListQueryVariables = Exact<{ [key: string]: never; }>;


type blogListQuery = { readonly allGraphCmsAuthor: { readonly edges: ReadonlyArray<{ readonly node: Pick<GraphCMS_Author, 'name' | 'slug'> }> } };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description'>
      & { readonly social: Maybe<Pick<Social, 'twitter'>> }
    )> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}