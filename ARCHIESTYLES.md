# Using ArchieML to edit stories

This document suggests a way to use [ArchieML](http://archieml.org/) for editing long-form data stories. This is not a definitive guide. For more ways to use ArchieML see the [official site](http://archieml.org/).

### What is ArchieML?

ArchieML is a "markup/markdown" language created by the New York Times to make it easier for multiple editors to work on a single story through a familiar interface.

### Benefits

For editors, ArchieML is a "lightly structured" format. That means the format is relatively tolerant of things like extra white space or multiple blank lines. That makes ArchieML documents easy to write, even without any experience in structured content.

For developers, ArchieML produces a structured JSON document that can be used to build websites and apps.

### ArchieML document structure

There are many different ways to structure an ArchieML document but this is one suggested way as used by MHC:

    headline: Headline text
    subhead: Sub headline text
    introduction: Introductory or blurb text

    [+section1]

    {.crosshead}
    text: Crosshead text

    Text in here
    Text in here

    {.image}
    link: https://link
    caption: Caption text
    {}

    Text in here.
    Text in here.

    [.list]
    - Item one
    - Item two
    []

    Text in here.
    Text in here.

    {.quote}
    text: Quote text
    credit: Quote credit
    {}

    Text in here
    Text in here

    []

In most cases ArchieML marks blocks of text and content with a set of starting brackets/braces and a closing set, much like HTML.

To compare, a single line of text is marked using a `key:` and a `value`

For example:

    headline: This is a headline

A longer block of text, for example a section with multiple paragraphs, is marked using opening and closing brackets. For example:

    [+section]
    Some text in here

    Some text in here
    []

### More examples

#### Sections/blocks of text

Blocks of text like sections are marked with square brackets (before and after like:

    [+sectionname]
    Text in between these.

    Another paragraph.

    []

#### Single lines

Single lines of text (including multiple sentences, are labelled without brackets, like this:

    headline: This is the headline

#### Links

ArchieML doesn't (appear) to have a way to handle links. One option is to mark links using a Markdown-style format. The usual Markdown link format is to include the link text (in square brackets) followed by the link URL (in round brackets). For example:

    [link text](http://linktext)

See the related document with a working function to convert Markdown-format links to HTML.

#### Images

Images are added using curly braces (at the start and the end) and a dot:

    {.image}
    link: http://imagelink
    caption: Image caption text
    {}

Lists are similar to images but use square brackets and a dot. Use asterisks to mark each item in the list. For example:

    [.list]
    *Item one
    *Item two
    []

Comments in ArchieML are deprecated. They may still be available in various parsers using the `:skip` and `:endskip` keywords but these are likely to be removed entirely in the near future. One solution is to mark a comment using curly braces and then then filter these out of the final layout. For example:

    {.comment}
    Comment in here
    {}

### Related documents

- [ArchieML site](http://archieml.org/)
- [Media Hack Svelte template](https://github.com/mediahackza/svelte-template) which uses ArchieML
- Function to convert Markdown links to HTML
