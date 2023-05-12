/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { fetch } from "@yext/pages/util";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Header from "../components/Header";

/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "turtlehead-tacos",
};


/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};


/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const Static: Template<TemplateRenderProps> = ({ 
    relativePrefixToRoot,
    path,
    document,
    __meta
}) => {
    console.log(document)
    console.log(__meta)
  return (
    <>
        <Header />
        <div className="centered-container">
            <div className="section grid gap-y-5">
                <h1>HTTP Function Examples</h1>
                <ul className="ml-4">
                    <li className="list-disc">
                        <a href={relativePrefixToRoot + "/helloWorld"} className="hover:underline">{relativePrefixToRoot}/helloWorld</a>
                    </li>
                    <li className="list-disc">
                        <a href={relativePrefixToRoot + "/api/helloWorld"}  className="hover:underline">{relativePrefixToRoot}/api/helloWorld</a>
                    </li>
                    <li className="list-disc">
                        <a href={relativePrefixToRoot + "/api/names/bob"} className="hover:underline">{relativePrefixToRoot}/api/names/[replace-me]</a>
                    </li>
                    <li className="list-disc">
                        <a href={relativePrefixToRoot + "/api/names/alice?id=example"} className="hover:underline">{relativePrefixToRoot}/api/names/[replace-me]?id=example</a>
                    </li>
                    <li className="list-disc">
                        <a href={relativePrefixToRoot + "/api/names/bob?id=example&id2=example"} className="hover:underline">{relativePrefixToRoot}/api/names/[replace-me]?id=example</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
};

export default Static;