import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

import PageHeads, {
  URLS,
} from "@/sensorsafrica/components/DocumentHead/PageHeads";
import Favicon from "@/sensorsafrica/components/Favicon";

function DocumentHead({ url }) {
  const matchUrl = (obj) => obj.url === url;
  const matchDefault = (obj) => obj.url === "/";
  const head =
    (url && PageHeads.find(matchUrl)) || PageHeads.find(matchDefault);
  return (
    <>
      <Head>
        <title key="title">{head.title}</title>
      </Head>
      <Favicon color={head.color} />
    </>
  );
}

DocumentHead.propTypes = {
  url: PropTypes.string,
};

DocumentHead.defaultProps = {
  url: null,
};

export { URLS };
export default DocumentHead;
